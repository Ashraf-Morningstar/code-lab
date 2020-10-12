import json
import datetime
import random
import os
from generator import ContentGenerator
from git_manager import GitManager

def load_config(path="config.json"):
    with open(path, "r") as f:
        return json.load(f)

def main():
    config = load_config()

    # Setup
    repo_path = os.getcwd() # Or specify a path
    git = GitManager(repo_path)
    generator = ContentGenerator()

    # Initialize Git if not already
    if not os.path.exists(os.path.join(repo_path, ".git")):
        print("Initializing git repository...")
        git.init()

    # Parse dates
    start_date_str = config["start_date"]
    start_date = datetime.datetime.strptime(start_date_str, "%Y-%m-%d")

    if config["end_date"] == "now":
        end_date = datetime.datetime.now()
    else:
        end_date = datetime.datetime.strptime(config["end_date"], "%Y-%m-%d")

    current_date = start_date

    print(f"Starting time travel from {start_date} to {end_date}...")

    total_commits = 0

    while current_date <= end_date:
        # Check weekends
        if config["skip_weekends"] and current_date.weekday() >= 5:
            current_date += datetime.timedelta(days=1)
            continue

        # Determine number of commits for today
        num_commits = random.randint(config["min_commits_per_day"], config["max_commits_per_day"])

        for _ in range(num_commits):
            # Random time within work hours
            hour = random.randint(config["work_hours_start"], config["work_hours_end"])
            minute = random.randint(0, 59)
            second = random.randint(0, 59)
            commit_date = current_date.replace(hour=hour, minute=minute, second=second)

            # Generate content
            ext = random.choice(config["file_extensions"])
            filename = generator.generate_filename(ext)
            content = generator.generate_code(ext)

            # Write file
            with open(filename, "w") as f:
                f.write(content)

            # Git operations
            git.add(filename)
            msg = random.choice(config["commit_messages"])
            git.commit(msg, commit_date)
            total_commits += 1

        current_date += datetime.timedelta(days=1)

    print(f"Time travel complete! Generated {total_commits} commits.")

    # Simulate Issues/PRs (Local Only)
    with open("ISSUES_LOG.md", "w") as f:
        f.write("# Simulated Issues Log\n\n")
        f.write("Note: These issues are simulated locally as backdating platform issues is impossible.\n\n")
        curr = start_date
        while curr <= end_date:
            if random.random() < 0.3: # 30% chance of an issue
                 f.write(f"- [{curr.strftime('%Y-%m-%d')}] Issue #{random.randint(1, 1000)}: {random.choice(config['commit_messages'])}\n")
            curr += datetime.timedelta(days=random.randint(1, 5))

if __name__ == "__main__":
    main()
