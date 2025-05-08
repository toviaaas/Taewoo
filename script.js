@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;700&display=swap');

body {
  margin: 0;
  font-family: 'Space Grotesk', sans-serif;
  background-color: #ffffff;
  color: #111;
  line-height: 1.6;
}

header {
  padding: 1em 2em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #eee;
}

h1 {
  font-size: 4em;
  font-weight: 700;
  margin: 1em 0 0.3em 0;
  color: #0040ff;
  text-align: center;
}

nav a {
  text-decoration: none;
  margin: 0 1.2em;
  color: #0040ff;
  font-weight: 600;
  font-size: 1em;
  transition: all 0.2s;
}

nav a:hover {
  text-decoration: underline;
}

main {
  max-width: 1000px;
  margin: 3em auto;
  padding: 1em 2em;
}

section {
  margin-bottom: 5em;
}

img.fullwidth {
  width: 100%;
  border-radius: 8px;
  margin-top: 1em;
}

h2 {
  font-size: 2em;
  margin-top: 2em;
  color: #0040ff;
}

p {
  font-size: 1.1em;
  color: #444;
}

footer {
  text-align: center;
  padding: 3em 1em;
  font-size: 0.9em;
  color: #aaa;
  border-top: 1px solid #eee;
}

@media (max-width: 768px) {
  h1 {
    font-size: 2.5em;
  }

  nav {
    flex-direction: column;
    align-items: center;
  }

  nav a {
    margin: 0.5em 0;
  }
}
