#!/usr/bin/env python3
"""
Merge two HTML presentations into one comprehensive presentation
"""

import re

def extract_slides(html_content, start_marker='<div id="slides-container">', end_marker='</div>\n\n    <!-- Presenter Mode -->'):
    """Extract slides from HTML content"""
    start_idx = html_content.find(start_marker)
    end_idx = html_content.find(end_marker, start_idx)

    if start_idx == -1 or end_idx == -1:
        # Try alternative end marker
        end_idx = html_content.find('</div>\n\n    <script>', start_idx)

    if start_idx != -1 and end_idx != -1:
        slides_html = html_content[start_idx:end_idx]
        return slides_html
    return ""

def merge_presentations():
    # Read both presentations
    with open('presentations/book-marketplace/presentation.html', 'r', encoding='utf-8') as f:
        book_html = f.read()

    with open('presentations/oracle-iac/presentation.html', 'r', encoding='utf-8') as f:
        oracle_html = f.read()

    # Extract head section from oracle (more advanced features)
    head_start = oracle_html.find('<head>')
    head_end = oracle_html.find('</head>') + 7
    head_section = oracle_html[head_start:head_end]

    # Update title
    head_section = head_section.replace(
        '<title>Infrastructure as Code Support in Graal CI - Yassine DBAICHI</title>',
        '<title>Yassine DBAICHI - Complete Portfolio Presentations</title>'
    )

    # Extract body start
    body_start = oracle_html.find('<body>')
    body_content_start = oracle_html.find('<!-- Navigation Bar -->', body_start)

    # Create merged presentation
    merged = f'''<!DOCTYPE html>
<html lang="en">
{head_section}
<body>
    <!-- Navigation Bar -->
    <div class="navbar" id="navbar">
        <button onclick="goToSection(1)">Book Marketplace</button>
        <button onclick="goToSection(2)">Oracle IaC Project</button>
    </div>

    <!-- Slide Counter -->
    <div class="slide-counter" id="slideCounter">1 / 88</div>

    <!-- View Switcher Button -->
    <button class="view-switcher" id="viewSwitcher" onclick="switchToPresenterMode()" title="Switch to Presenter View (P key)">
        🎤 Presenter View
    </button>

    <!-- Slides Container -->
    <div id="slides-container">

        <!-- Slide 1: Combined Title Slide -->
        <div class="slide active title-slide">
            <div class="logo-container">
                <div style="width: 100px; height: 100px; background: white; border-radius: 1rem; display: flex; align-items: center; justify-content: center; font-weight: 800; font-size: 1.5rem; color: #14535F;">EHTP</div>
                <div style="width: 100px; height: 100px; background: white; border-radius: 1rem; display: flex; align-items: center; justify-content: center; font-weight: 800; font-size: 1.25rem; color: #C74634;">MIG</div>
            </div>
            <h1 class="main-title">Yassine DBAICHI<br/>Portfolio Presentations</h1>
            <p class="subtitle">Two Major Projects - Academic Year 2024/2025</p>
            <div class="author-info" style="font-size: 1.125rem;">
                <strong>Part 1:</strong> Book Marketplace Platform with Route Optimization<br/>
                <em>Department of MIG - GIS Specialization | Supervisor: Prof. Hatim LECHGAR</em><br/><br/>
                <strong>Part 2:</strong> Infrastructure as Code Support in Graal CI<br/>
                <em>Oracle Labs - GraalVM RISQ Team Internship</em><br/><br/>
                École Hassania des Travaux Publics
            </div>
        </div>

        <!-- PART 1: BOOK MARKETPLACE -->

        <!-- Divider for Book Marketplace -->
        <div class="slide divider-slide" data-hide-navbar="true">
            <h2 class="divider-title">Part 1<br/>Book Marketplace Platform</h2>
        </div>
'''

    # Extract book marketplace slides (skip title slide)
    book_slides_start = book_html.find('<!-- Slide 2: Table of Contents -->')
    book_slides_end = book_html.find('</div>\n\n    <!-- Presenter Mode -->', book_slides_start)
    if book_slides_end == -1:
        book_slides_end = book_html.find('</div>\n\n    <script>', book_slides_start)

    book_slides = book_html[book_slides_start:book_slides_end]

    # Add book marketplace slides
    merged += f'''
{book_slides}

        <!-- PART 2: ORACLE IAC -->

        <!-- Divider for Oracle IaC -->
        <div class="slide divider-slide" data-hide-navbar="true">
            <h2 class="divider-title">Part 2<br/>Infrastructure as Code in Graal CI</h2>
        </div>
'''

    # Extract oracle slides (skip title slide)
    oracle_slides_start = oracle_html.find('<!-- Slide 2: Table of Contents -->')
    oracle_slides_end = oracle_html.find('</div>\n\n    <script>', oracle_slides_start)

    oracle_slides = oracle_html[oracle_slides_start:oracle_slides_end]

    # Add oracle slides
    merged += f'''
{oracle_slides}

    </div>

    <script>
        let currentSlide = 0;
        const slides = document.querySelectorAll('.slide');
        const totalSlides = slides.length;
        const navbar = document.getElementById('navbar');
        const slideCounter = document.getElementById('slideCounter');

        const sections = [
            {{ start: 0, end: 31 }},     // Book Marketplace (30 slides + divider)
            {{ start: 32, end: 87 }}     // Oracle IaC (56 slides + divider)
        ];

        function updateSlide() {{
            slides.forEach((slide, index) => {{
                slide.classList.remove('active');
                if (index === currentSlide) {{
                    slide.classList.add('active');
                }}
            }});

            slideCounter.textContent = `${{currentSlide + 1}} / ${{totalSlides}}`;

            const currentSlideElement = slides[currentSlide];
            if (currentSlideElement.dataset.hideNavbar === 'true') {{
                navbar.style.display = 'none';
            }} else {{
                navbar.style.display = 'flex';
            }}

            updateActiveSection();
        }}

        function updateActiveSection() {{
            const navButtons = navbar.querySelectorAll('button');
            let activeSection = 0;

            for (let i = 0; i < sections.length; i++) {{
                if (currentSlide >= sections[i].start && currentSlide <= sections[i].end) {{
                    activeSection = i;
                    break;
                }}
            }}

            navButtons.forEach((button, index) => {{
                if (index === activeSection) {{
                    button.classList.add('active-section');
                }} else {{
                    button.classList.remove('active-section');
                }}
            }});
        }}

        function nextSlide() {{
            if (currentSlide < totalSlides - 1) {{
                currentSlide++;
                updateSlide();
            }}
        }}

        function prevSlide() {{
            if (currentSlide > 0) {{
                currentSlide--;
                updateSlide();
            }}
        }}

        function goToSection(sectionNum) {{
            if (sectionNum >= 1 && sectionNum <= sections.length) {{
                currentSlide = sections[sectionNum - 1].start;
                updateSlide();
            }}
        }}

        document.addEventListener('keydown', (e) => {{
            if (e.key === 'ArrowRight' || e.key === ' ') {{
                e.preventDefault();
                nextSlide();
            }} else if (e.key === 'ArrowLeft') {{
                e.preventDefault();
                prevSlide();
            }} else if (e.key === 'Home') {{
                e.preventDefault();
                currentSlide = 0;
                updateSlide();
            }} else if (e.key === 'End') {{
                e.preventDefault();
                currentSlide = totalSlides - 1;
                updateSlide();
            }}
        }});

        updateSlide();
    </script>
</body>
</html>'''

    # Write merged presentation
    with open('presentations/merged/presentation.html', 'w', encoding='utf-8') as f:
        f.write(merged)

    print(f"✅ Merged presentation created successfully!")
    print(f"📊 Total slides: {merged.count('class=\"slide')}")
    print(f"📝 File location: presentations/merged/presentation.html")

if __name__ == '__main__':
    merge_presentations()
