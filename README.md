# Arcade Checkpoints View

A Chrome extension that automatically hides the leaderboard on Google Arcade Lab pages and shows your points in a sidebar for a cleaner, distraction-free gaming experience.

## Features

- Hides the leaderboard on Google Arcade Lab pages
- Shows your points in a sidebar for easy tracking and motivation
- Works instantly when you visit an Arcade Lab page
- No configuration needed – just install and enjoy!

## How It Works

When you visit a Google Arcade Lab game page, the extension automatically hides the leaderboard (which can be distracting) and displays your current points in a sidebar. This helps you stay focused on your progress without unnecessary clutter.

## Installation

### Manual Installation (Developer Mode)

You can install the extension for free in your browser without uploading it to the Chrome Web Store. Follow these steps:

1. **Download or Clone the Repository**
   - Click the green "Code" button on GitHub and select "Download ZIP" or use `git clone` to get the files on your computer.
   - Extract the ZIP file if needed.
2. **Open Chrome Extensions Page**
   - Open Google Chrome.
   - Go to `chrome://extensions/` in the address bar.
3. **Enable Developer Mode**
   - In the top right corner, turn on the toggle for "Developer mode".
4. **Load the Unpacked Extension**
   - Click the "Load unpacked" button.
   - In the file dialog, select the folder where you downloaded/extracted the extension files (the folder containing `manifest.json`).
5. **Verify Installation**
   - The extension should now appear in your list and its icon should show up in the Chrome toolbar.
   - If you make changes to the code, click the refresh button on the extension card to reload it.

**Note:** You do NOT need to pay or upload to the Chrome Web Store to use the extension for yourself. Manual installation is free and works on your browser.

## Usage

1. Install the extension
2. Visit any Google Arcade Lab page
3. The leaderboard will be automatically hidden
4. Your points will be shown in a sidebar
5. Enjoy your game in full screen!

## Development

### Project Structure

```
arcade-checkpoints/
├── manifest.json    # Extension configuration
├── content.js      # Main functionality
├── popup.html      # Extension popup
└── README.md       # This file
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

If you encounter any issues or have suggestions, please:

1. Open an issue on GitHub
2. Contact us through the Chrome Web Store

## Privacy

This extension:

- Does not collect any user data
- Does not track your activity
- Does not require any permissions beyond what's needed to function
- Works entirely locally in your browser
