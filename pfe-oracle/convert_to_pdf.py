#!/usr/bin/env python3
"""
HTML Presentation to PDF Converter
Converts the HTML slide presentation to a high-quality PDF document
"""

import subprocess
import sys
import os

def check_playwright_installed():
    """Check if playwright is installed"""
    try:
        import playwright
        return True
    except ImportError:
        return False

def install_playwright():
    """Install playwright and chromium browser"""
    print("Installing playwright...")
    subprocess.check_call([sys.executable, "-m", "pip", "install", "playwright"])
    print("Installing chromium browser...")
    subprocess.check_call([sys.executable, "-m", "playwright", "install", "chromium"])

def convert_html_to_pdf():
    """Convert HTML presentation to PDF using playwright"""
    from playwright.sync_api import sync_playwright

    # Get the directory where this script is located
    script_dir = os.path.dirname(os.path.abspath(__file__))
    html_path = os.path.join(script_dir, "presentation.html")
    pdf_path = os.path.join(script_dir, "presentation.pdf")

    print(f"Converting {html_path} to PDF...")

    with sync_playwright() as p:
        # Launch browser
        browser = p.chromium.launch()
        page = browser.new_page()

        # Load the HTML file
        page.goto(f"file://{html_path}")

        # Wait for page to load completely
        page.wait_for_load_state("networkidle")

        # Generate PDF with high quality settings
        page.pdf(
            path=pdf_path,
            format="A4",
            landscape=True,
            print_background=True,
            margin={
                "top": "0mm",
                "right": "0mm",
                "bottom": "0mm",
                "left": "0mm"
            },
            scale=0.9  # Slightly scale down for better fit
        )

        browser.close()

    print(f"✓ PDF created successfully: {pdf_path}")

    # Get file size
    size_mb = os.path.getsize(pdf_path) / (1024 * 1024)
    print(f"✓ File size: {size_mb:.2f} MB")

    return pdf_path

def main():
    print("=" * 60)
    print("HTML Presentation to PDF Converter")
    print("=" * 60)

    # Check and install playwright if needed
    if not check_playwright_installed():
        print("\nPlaywright not found. Installing...")
        install_playwright()
    else:
        print("\n✓ Playwright is already installed")

    # Convert to PDF
    print("\nStarting conversion...")
    try:
        pdf_path = convert_html_to_pdf()
        print("\n" + "=" * 60)
        print("CONVERSION COMPLETE!")
        print("=" * 60)
        print(f"\nYour PDF is ready at:")
        print(f"  {pdf_path}")
        print("\nYou can now:")
        print("  - Present using any PDF reader")
        print("  - Share via email or cloud storage")
        print("  - Print for physical submission")
        print("  - Archive for long-term storage")
    except Exception as e:
        print(f"\n✗ Error during conversion: {e}")
        sys.exit(1)

if __name__ == "__main__":
    main()
