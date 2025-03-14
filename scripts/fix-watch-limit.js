/**
 * This script helps fix the EMFILE: too many open files error
 * by increasing the file watch limit for the development environment.
 */

const fs = require("fs");
const path = require("path");

// Function to reduce the number of watched files
function reduceWatchedFiles() {
  console.log("Applying fixes for EMFILE: too many open files error...");

  // Create a .watchmanconfig file with proper ignore patterns
  const watchmanConfig = {
    ignore_dirs: [
      ".git",
      "node_modules",
      ".expo",
      ".next",
      "dist",
      "web-build",
    ],
  };

  fs.writeFileSync(
    path.join(process.cwd(), ".watchmanconfig"),
    JSON.stringify(watchmanConfig, null, 2),
    "utf8",
  );
  console.log("Updated .watchmanconfig with proper ignore patterns");

  console.log(
    "\nTo permanently fix this issue, you may need to increase your system file watch limits:",
  );
  console.log("\nFor Linux:");
  console.log(
    "  echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p",
  );
  console.log("\nFor macOS:");
  console.log(
    "  echo kern.maxfiles=65536 | sudo tee -a /etc/sysctl.conf && sudo sysctl -w kern.maxfiles=65536",
  );
  console.log(
    "  echo kern.maxfilesperproc=65536 | sudo tee -a /etc/sysctl.conf && sudo sysctl -w kern.maxfilesperproc=65536",
  );

  console.log("\nRestart your development server after making these changes.");
}

reduceWatchedFiles();
