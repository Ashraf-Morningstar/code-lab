import subprocess
import os
import datetime

class GitManager:
    def __init__(self, repo_path):
        self.repo_path = repo_path

    def run_git(self, args, env=None):
        full_env = os.environ.copy()
        if env:
            full_env.update(env)

        try:
            result = subprocess.run(
                ['git'] + args,
                cwd=self.repo_path,
                env=full_env,
                capture_output=True,
                text=True,
                check=True
            )
            return result.stdout.strip()
        except subprocess.CalledProcessError as e:
            print(f"Git command failed: {e}")
            print(f"Stderr: {e.stderr}")
            raise

    def init(self):
        self.run_git(['init'])

    def add(self, files='.'):
        self.run_git(['add', files])

    def commit(self, message, date):
        # Format date as ISO 8601 or Git internal format
        # Git accepts "YYYY-MM-DD HH:MM:SS"
        date_str = date.strftime("%Y-%m-%d %H:%M:%S")
        env = {
            'GIT_AUTHOR_DATE': date_str,
            'GIT_COMMITTER_DATE': date_str
        }
        self.run_git(['commit', '-m', message], env=env)
        print(f"Committed: {message} on {date_str}")

    def log(self):
        return self.run_git(['log', '--pretty=format:%ad - %s'])
