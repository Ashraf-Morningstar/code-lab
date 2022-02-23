# Time Travel Bot

This bot generates a git repository with a backdated commit history.

## Usage

1.  **Configure**: Edit `config.json` to set your desired start date, commit frequency, etc.
2.  **Run**: Execute the script:
    ```bash
    python main.py
    ```
3.  **Push**: Create a new repository on GitHub/GitLab and push this history:
    ```bash
    git remote add origin <your-repo-url>
    git push -u origin master --force
    ```

## Features

-   **Backdated Commits**: Generates commits with past timestamps (`GIT_AUTHOR_DATE`, `GIT_COMMITTER_DATE`).
-   **Random Content**: Creates files with dummy code/text to make the history look active.
-   **Configurable**: Customize start date, file types, commit messages, and work hours.

## Limitations

-   **Issues & PRs**: It is **impossible** to backdate the creation time of Issues and Pull Requests on hosted platforms (GitHub, GitLab, etc.). This bot generates a local `ISSUES_LOG.md` to simulate this history, but actual platform issues will always show the current date.
