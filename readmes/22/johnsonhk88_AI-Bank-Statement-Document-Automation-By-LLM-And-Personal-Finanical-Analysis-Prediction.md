# 🏦 AI Bank Statement Document Automation with LLM & Personal Financial Analysis

[![Python](https://img.shields.io/badge/Python-3.10+-3776AB?style=for-the-badge&logo=python&logoColor=white)](https://www.python.org)
[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
[![AG2](https://img.shields.io/badge/Agent_Framework-AG2-green)](https://github.com/ag2ai/ag2)

**Automated extraction, structuring, RAG-powered querying, and AI-agent financial analysis of bank statement PDFs.**

This project converts unstructured bank statement PDFs into structured data using computer vision (YOLO), OCR, and Large Language Models. It supports natural language queries and generates insightful monthly/yearly financial reports.

---

## ✨ Key Features

- **Advanced Document Parsing** — Custom YOLOv8 layout detection + OCR + LLM table extraction
- **RAG Pipeline** — Powerful retrieval-augmented generation with vector databases
- **Autonomous AI Agents** — Built with **AG2** (migrated from pyautogen in Feb 2026)
- **Financial Intelligence** — Income/expense categorization, trend analysis, monthly & yearly summaries
- **Multimodal & Local LLM Support** — Works with Gemini, Ollama (Llama 3, Gemma 2, etc.)
- **User Interface** — Streamlit web application (`apps.py`)
- **Evaluation Framework** — DeepEval integration for RAG quality testing

---

## 🛠 Technology Stack

- **Document Processing**: YOLOv8 (custom layout model), PyMuPDF, pytesseract, pymupdf4llm
- **RAG & Vector Store**: LangChain, Chroma, Faiss
- **Agent Framework**: **AG2** (latest)
- **LLMs**: Google Gemini, Local models via Ollama
- **Frontend**: Streamlit
- **Analysis**: pandas, Plotly

**Related Repo**: [YOLO Base Document Layout Detection](https://github.com/johnsonhk88/yolo-base-doc-layout-detection)

---

## 📁 Repository Structure
```
src/
├── dev/                    # Jupyter notebooks for development & testing
│   ├── ai_bank_statement_dev.ipynb
│   ├── ai_agent_dev.ipynb
│   └── RAG_algorithm_test.ipynb
├── apps.py                 # Streamlit web application
├── bank-statement-document/ # Core processing scripts
├── yolo-base-layout-analysis/
├── faiss_index/ & chroma_db/
├── test-document/          # Sample PDFs for testing
├── *.sh                    # Installation & setup scripts
├── requirements.txt
└── .env.example
```


---

## 🚀 Quick Start

### 1. Clone & Setup

```bash
git clone https://github.com/johnsonhk88/AI-Bank-Statement-Document-Automation-By-LLM-And-Personal-Finanical-Analysis-Prediction.git
cd AI-Bank-Statement-Document-Automation-By-LLM-And-Personal-Finanical-Analysis-Prediction

# Setup virtual environment and install dependencies
./src/build-python-virual-environment.sh
./src/activate_virual_environment.sh
./src/install-requirement.sh

# Install Tesseract OCR (Ubuntu/Debian)
./src/install-pytesseract-for-linux.sh
```

## Create a .env file and add your GOOGLE_API_KEY (for Gemini).

### 2. Run the Application
#### Development Notebooks

```bash
cd src/dev
jupyter notebook
```

#### Streamlit Web UI

```bash
cd src
streamlit run apps.py
```

## 📈 Recent Major Updates

- Feb 24, 2026 — Full migration from pyautogen → AG2 agent framework
- 2025 — Added advanced RAG pipeline, multimodal support, and DeepEval evaluation
- Ongoing — Improving financial categorization and local LLM inference


## 🗺 Roadmap

 - Complete production-ready end-to-end pipeline
 - Advanced time-series forecasting for cash flow prediction
 - Multi-bank statement support with automatic categorization
 - Docker + API deployment
 - Rich interactive dashboard with more visualizations

------------------------------------------------------------------------

## 📄 License
### This project is licensed under the Apache License 2.0.

-------------------------------------------------------------------------

#### Made with ❤️ for personal finance automation in Hong Kong.
#### ⭐ Star this repo if you find it useful!



**Just copy the entire block above** and replace your current `README.md` file on GitHub.

This is the **final, clean, and up-to-date version**. Push it and your project will look professional instantly!

Want me to add screenshots, example queries, or a demo video section next? Just say the word! 🚀
