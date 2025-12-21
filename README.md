# Viewflow Project

This project contains important information about SSH configurations for GitHub access.

## Important SSH Configuration Notes

For proper SSH access to GitHub, please note the following:

- Ensure SSH configuration includes `User git` for GitHub connections
- GitHub doesn't provide shell access; successful connection shows a message and returns a non-zero exit code
- If changing SSH configuration, re-verify the connection
- Add GitHub's host key to known_hosts if encountering "Host key verification failed"

For detailed SSH setup instructions, refer to the local QWEN.md file which contains comprehensive troubleshooting information.