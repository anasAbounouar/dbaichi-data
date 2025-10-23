#!/usr/bin/env python3
"""
Create a printable version of the HTML presentation with all slides visible
"""

import re

def create_printable_html():
    """Read the original HTML and create a version with all slides visible"""

    # Read the original HTML
    with open('/Users/anasabounouar/Downloads/dbaichi/pfe-oracle/presentation.html', 'r') as f:
        html_content = f.read()

    # Modify the CSS to show all slides
    # Replace the slide display rules
    modified_css = """
        .slide {
            display: block !important;
            opacity: 1 !important;
            position: relative !important;
            width: 100% !important;
            height: 100vh !important;
            page-break-after: always !important;
            page-break-inside: avoid !important;
            background: #f8fafc;
        }

        .slide.active {
            display: block !important;
            opacity: 1 !important;
        }

        /* Hide navigation and counter for print */
        .navbar {
            display: none !important;
        }

        .slide-counter {
            display: none !important;
        }

        /* Ensure proper page breaks */
        @media print {
            .slide {
                page-break-after: always !important;
                page-break-inside: avoid !important;
            }
        }
    """

    # Find and replace the style section
    html_content = re.sub(
        r'(</style>)',
        modified_css + r'\1',
        html_content
    )

    # Remove the 'active' class from first slide to make all equal
    # Actually, keep them all visible

    # Write the modified HTML
    output_path = '/Users/anasabounouar/Downloads/dbaichi/pfe-oracle/presentation_print.html'
    with open(output_path, 'w') as f:
        f.write(html_content)

    print(f"✓ Created printable HTML: {output_path}")
    print(f"✓ All 58 slides are now visible")
    return output_path

if __name__ == "__main__":
    create_printable_html()
