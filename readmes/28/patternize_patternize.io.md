<p align="center">
  <img width="300px" src="https://patternize.github.io/img/logo.png">
</p>

# Patternize.io

Unlock the beauty of algorithms through real-world analogies and interactive learning. Patternize.io is an open-source platform that makes complex computational concepts accessible, engaging, and meaningful to learners worldwide.

## 🌟 Our Mission
At Patternize.io, we make learning intuitive and inspiring by connecting abstract concepts to real-world experiences, helping learners grasp complex ideas with ease.

## 🚀 Why Patternize.io?
Patternize.io isn’t just a project; it’s a movement to make learning algorithms inclusive and exciting for everyone. Fueled by a passion for education and supported by a global community, we’ve helped thousands of learners grasp challenging topics with ease. Join us in transforming the way the world learns and thinks about algorithms.

## 🌍 Visit the Website
[Patternize.io](http://patternize.github.io/)

---

## 🔧 Set Up the Project Locally

### Prerequisite
Ensure you have **yarn** or **npm** installed on your local environment.

### Steps

```bash
# Clone the repository
$ git clone https://github.com/patternize/patternize.io.git

# Navigate into the project directory
$ cd patternize.io

# Install dependencies
$ yarn
```

## 💻 Local Development

Start a local development server and open a browser window. Most changes are reflected live without needing a restart.

```bash
$ yarn start
```

## 🏗️ Build

Generate static content for deployment:

```bash
$ yarn build
```

The static content will be output to the `build` directory and can be served using any static hosting service.

## 🚢 Deployment

### Using Docusaurus Official Command
For GitHub Pages hosting, this command builds and deploys the website to the `gh-pages` branch:

```bash
$ GIT_USER=<Your GitHub username> USE_SSH=true yarn deploy
```

### Manual Deployment
1. Create a new repository on GitHub.
2. Run the following commands in your project root:

```bash
$ cp -a build/ <your-repo-dir>/
```

> Note: This method does not handle deprecated files. Periodically, clear the repo and deploy a fresh build.

---

## 🌟 Inspirations
Patternize.io was built with love and inspired by:

- [Tech Interview Handbook](https://github.com/yangshun/tech-interview-handbook)
- [Lago](https://github.com/yangshun/lago)
- [Front-End Interview Handbook](https://github.com/yangshun/front-end-interview-handbook)
- [Algorithm Visualizer](https://github.com/algorithm-visualizer/algorithm-visualizer)
- [visualgo](https://visualgo.net/en)
---

## 🤝 Join the Movement

Do you share our passion for making learning intuitive and engaging? We’d love your help to:

- Add new analogies or visualizations for algorithms.
- Improve code and functionality.
- Share your unique perspectives on making learning impactful.

Together, we can create a vibrant community of learners and contributors.

### Contribute Today!
Head to our [GitHub repository](https://github.com/patternize/patternize.io) to explore issues, submit pull requests, or simply drop us a star if you find the project inspiring. Your support means the world to us!

---

**Join us in making computer science accessible and intuitive for all.**
