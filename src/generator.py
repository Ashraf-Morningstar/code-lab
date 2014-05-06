import random
import string

class ContentGenerator:
    def __init__(self):
        self.words = ["foo", "bar", "baz", "qux", "quux", "corge", "grault", "garply", "waldo", "fred", "plugh", "xyzzy", "thud"]
        self.code_snippets = [
            "def {name}():\n    print('{msg}')\n",
            "class {name}:\n    def __init__(self):\n        self.value = {val}\n",
            "console.log('{msg}');",
            "function {name}() {{\n    return {val};\n}}",
            "<!-- {msg} -->",
            "/* {msg} */"
        ]

    def generate_text(self, length=10):
        return " ".join(random.choice(self.words) for _ in range(length))

    def generate_code(self, extension):
        name = "".join(random.choice(string.ascii_letters) for _ in range(5))
        msg = self.generate_text(5)
        val = random.randint(0, 100)

        if extension == ".py":
            return f"def {name}():\n    # {msg}\n    print('{msg}')\n"
        elif extension == ".js":
            return f"function {name}() {{\n    // {msg}\n    console.log('{msg}');\n}}\n"
        elif extension == ".html":
            return f"<div>\n    <!-- {msg} -->\n    <p>{msg}</p>\n</div>\n"
        else:
            return f"{msg}\n"

    def generate_filename(self, extension):
        name = "".join(random.choice(string.ascii_lowercase) for _ in range(8))
        return f"{name}{extension}"
