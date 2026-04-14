![ml road map](assets/road_map.png)

<p align="center">
  <a href="https://github.com/loganthorneloe/ml-road-map">
    <img src="https://img.shields.io/github/stars/loganthorneloe/ml-road-map?style=social" alt="Star on GitHub">
  </a>
  <a href="https://aiforswes.com">
    <img src="https://img.shields.io/badge/Subscribe-More%20learning%20resources-orange?style=social&logo=substack" alt="Get all resources from AI for Software Engineers">
  </a>
  <a href="https://twitter.com/loganthorneloe">
    <img src="https://img.shields.io/twitter/follow/loganthorneloe?style=social" alt="Follow on X">
  </a>
  <a href="https://youtube.com/@loganthorneloe">
    <img src="https://img.shields.io/youtube/channel/subscribers/UC3H55I0SqNKQgJU77LsFiBw?style=social&logo=youtube" alt="Subscribe on YouTube">
  </a>
</p>

# Machine Learning Road Map

This is your streamlined roadmap to learning AI and machine learning from scratch, for free. It starts with prerequisites, moves into machine learning fundamentals, and then engineering topics. This repo will be continually updated as I find great resources and create more guides.

> [!TIP]
> While the whole learning path is free, some paid resources are included and marked with 💰. These paid resources further streamline your learning. I *highly* recommend them as they're from the best AI educators in the world.

This is an **[AI for Software Engineers](https://aiforswes.com)** resource. **[Subscribe](https://aiforswes.com/subscribe)** to the newsletter to get more fundamental resources and technical deep dives in your inbox. If you'd like to support my work, you can subscribe there (paid or free—both help) and star this repository. Have a resource to add? See [how to contribute](./CONTRIBUTING.md).

**Contents**
- [Prerequisites](#prerequisites)
- [Machine Learning](#machine-learning)
- [AI Engineering](#ai-engineering)
- [ML Engineering](#ml-engineering)
- [Interview Prep](#interview-prep)
- [Free Compute](#free-compute)

### How to use this guide

Follow the resources in order down the page. Skip the topics you already understand well. You *can* skip to AI engineering section and come back to ML fundamentals later if AI engineering is your focus. I *highly* recommend going through the ML fundamentals section even if this is the case as it will give you a much deeper understanding of the topics in AI engineering.

> [!NOTE]
> **AI-assisted learning (experimental):** You can load this repo in your favorite AI coding agent (Claude Code, Gemini CLI, Cursor, etc.) and have it walk you through the roadmap, find resources, and create exercises for you. This functionality is in beta and will be improved over time.

🚀 Enjoy the resources!

---

<a id="prerequisites"></a>
![prerequisites](assets/road_map_sections/prereqs.png)

**Programming**
- [CS50](https://cs50.harvard.edu/x/2024/weeks/0/) by Harvard — Intro to programming
- [Google's Python Class](https://developers.google.com/edu/python) — Python basics
- [NumPy Tutorial](https://numpy.org/doc/stable/user/quickstart.html) — Array operations
- [Pandas Course](https://www.kaggle.com/learn/pandas) by Kaggle — Data manipulation

**Math**
> [!TIP]
> 💰 This entire section can be streamlined via Tivadar Danka's [Mathematics of Machine Learning](https://www.packtpub.com/en-us/product/mathematics-of-machine-learning-9781837027873) book. It goes through all of the math topics in this section and more.
- [Algebra](https://www.khanacademy.org/math/algebra-home) by Khan Academy
- [Linear Algebra](https://www.khanacademy.org/math/linear-algebra) by Khan Academy
- [Probability](https://cs50.harvard.edu/ai/2024/weeks/2/) by Harvard
- [Derivatives](https://www.khanacademy.org/math/multivariable-calculus/multivariable-derivatives) by Khan Academy
- [Backpropagation Visualization](https://developers-dot-devsite-v2-prod.appspot.com/machine-learning/crash-course/backprop-scroll/) by Google

**Tools**
- [Git](https://git-scm.com/book/en/v2)
- [GitHub](https://docs.github.com/en/get-started)
- [Shell](https://www.learnshell.org)

**Ethics**
- [AI Ethics](https://www.kaggle.com/learn/ai-ethics) by Kaggle

---

<a id="machine-learning"></a>
![ml fundamentals](assets/road_map_sections/ml_fundamentals.png)

**Fundamentals**
- [What is Machine Learning?](https://developers.google.com/machine-learning/intro-to-ml) by Google — 20 min overview
- [Machine Learning Crash Course](https://developers.google.com/machine-learning/crash-course) by Google — Full course covering regression, classification, neural networks, embeddings, LLMs
- [Spinning Up in RL](https://spinningup.openai.com/en/latest/) by OpenAI — Reinforcement learning
- 💰 [The RLHF Book](https://rlhfbook.com/) by Nathan Lambert — Deep dive into reinforcement learning from human feedback

> [!TIP]
> 💰 I highly recommend reading Sebastian Raschka's book [Machine Learning Q and AI](https://www.amazon.com/Machine-Learning-AI-Essential-Questions/dp/1718503768/) to get a deeper understanding of fundamental machine learning and AI topics.

**NLP & LLMs**
- [Intro to LLMs](https://www.youtube.com/watch?v=zjkBMFhNj_g) by Andrej Karpathy
- [LLM Course](https://github.com/mlabonne/llm-course) by Maxime Labonne — Roadmaps, Colab notebooks, covers fundamentals to fine-tuning
- [Learning to Reason with LLMs](https://openai.com/index/learning-to-reason-with-llms/) by OpenAI — How reasoning models work

> [!TIP]
> 💰 You can learn how to build your own GPT-3 level LLM step-by-step in Sebastian Raschka's book [Build an LLM From Scratch](https://www.amazon.com/Build-Large-Language-Model-Scratch/dp/1633437167/).

**Applications**
- [Computer Vision](https://www.kaggle.com/learn/computer-vision) by Kaggle
- [NLP Course](https://huggingface.co/learn/nlp-course/chapter1/1) by HuggingFace
- [ML Explainability](https://www.kaggle.com/learn/machine-learning-explainability) by Kaggle
- [Knowledge Distillation](https://github.com/dkozlov/awesome-knowledge-distillation) by Dmitry Kozlov
- [ML for Science](https://ml-science-book.com/) by Molnar & Freiesleben
- [ML for Games](https://huggingface.co/learn/ml-games-course/unit0/introduction) by HuggingFace

**Hands-On**
- [Build a Recommendation System](./recommendation-system/) — Collaborative filtering with PyTorch by Logan Thorneloe

More coming soon to this section...

---

<a id="ai-engineering"></a>
![ai engineering](assets/road_map_sections/ai_engineering.png)

**Building with LLMs**
- [Prompt Engineering Guide](https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview) by Anthropic
- [Building Effective Agents](https://docs.anthropic.com/en/docs/build-with-claude/agentic-systems) by Anthropic
- [Testing and Evaluation](https://docs.anthropic.com/en/docs/build-with-claude/develop-tests) by Anthropic

**RAG & Infrastructure**
- [MCP Documentation](https://modelcontextprotocol.io/) — Connecting AI to external tools
- [Building Agentic RAG](https://www.deeplearning.ai/short-courses/building-agentic-rag-with-llamaindex/) by DeepLearning.AI
- [Vector Databases Explained](https://www.pinecone.io/learn/vector-database/) by Pinecone

**Fine-Tuning & Local Models**
- [LoRA and PEFT](https://huggingface.co/learn/smol-course/en/unit1/3a) by HuggingFace — Parameter-efficient fine-tuning
- [How to Set Up Your Own Local Coding Model](https://www.aiforswes.com/p/you-dont-need-to-spend-100mo-on-claude) by Logan Thorneloe

---

<a id="ml-engineering"></a>
![ml engineering](assets/road_map_sections/ml_engineering.png)

> [!TIP]
> 💰 [ML School](https://www.ml.school/) by Santiago is a hands-on live cohort covering MLOps and many of the machine learning topics above.

- [Made with ML](https://madewithml.com/) by Goku Mohandas — Complete MLOps course from design to production
- [ML Efficiency](https://www.youtube.com/playlist?list=PL80kAHvQbh-pT4lCkDT53zT8DKmhE0idB) by MIT
- [GPU Performance Engineering Resources](https://github.com/wafer-ai/gpu-perf-engineering-resources) by Wafer AI
- [MLOps Community](https://mlops.community/) — Community for MLOps practitioners

> [!TIP]
> 💰 For deeper understanding, read [Designing Machine Learning Systems](https://www.amazon.com/dp/1098107969) by Chip Huyen — covers the architecture and trade-offs of production ML systems.

---

<a id="interview-prep"></a>
## Interview Prep

- 💰 Elements of Programming Interviews
  - [Python](https://www.amazon.com/Elements-Programming-Interviews-Python-Insiders/dp/1537713949/)
  - [Java](https://www.amazon.com/Elements-Programming-Interviews-Java-Insiders/dp/1517671272/)
  - [C++](https://www.amazon.com/Elements-Programming-Interviews-Insiders-Guide/dp/1479274836/)
- 💰 System Design Interview by Alex Xu
  - [Volume 1](https://www.amazon.com/System-Design-Interview-insiders-Second/dp/B08CMF2CQF/)
  - [Volume 2](https://www.amazon.com/System-Design-Interview-Insiders-Guide/dp/1736049119/)
- [Study Plan for ML Interviews](https://github.com/khangich/machine-learning-interview) by Khang Pham

---

<a id="free-compute"></a>
## Free Compute

| Resource | What You Get |
|----------|--------------|
| [Google Colab](https://colab.google/) | Free T4/P100 GPUs |
| [Kaggle Notebooks](https://www.kaggle.com/code) | 30 hours/week GPU |
| [Lightning AI](https://lightning.ai/) | 22 GPU hours free |
| [Google Cloud](https://cloud.google.com/gpu) | $300 free credits |
| [Amazon SageMaker](https://aws.amazon.com/machine-learning/accelerate-machine-learning-P3/) | Free tier |
| [Paperspace Gradient](https://www.paperspace.com/notebooks) | Free community tier |

---

**Subscribe to [AI for Software Engineers](https://aiforswes.com/)** for more resources.

**Support the creators!** Buy the books, leave reviews, follow the authors.

**Want to contribute?** See [CONTRIBUTING.md](./CONTRIBUTING.md) to add your resources to this roadmap.

**Questions?** [Message me on X](https://x.com/loganthorneloe)
