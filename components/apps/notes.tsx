"use client"

import type React from "react"

import { useState } from "react"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"

interface NotesProps {
  isDarkMode?: boolean
}

export default function Notes({ isDarkMode = true }: NotesProps) {
  // Update the notes state with enhanced content
  const [notes, setNotes] = useState([
    {
      id: 1,
      title: "About Me",
      content: `# Shobhit Kapoor  
Data Analyst & Machine Learning Engineer  

## Skills

### Data Science & Machine Learning
- Python (Pandas, NumPy)
- Machine Learning (Scikit-learn)
- Deep Learning (TensorFlow, PyTorch, Keras)
- Feature Engineering
- Model Evaluation & Optimization
- Statistical Analysis

### Data Analysis & Visualization
- Data Analytics & Exploratory Data Analysis (EDA)
- Power BI
- Microsoft Excel
- Matplotlib & WordCloud
- Apache Spark
- MLflow

### Backend & APIs
- Flask (REST APIs)
- SQL (MySQL, PostgreSQL)
- Database Design
- Data Processing Pipelines

### Programming Languages
- Python
- Java
- C++
- SQL
- JavaScript

### Tools & Platforms
- Docker / Containerization
- Git & GitHub
- Azure Cloud Services
- Streamlit
- Linux / Unix

## Experience
Computer Science student at **The University of Texas at Dallas**, focused on **Data Analytics, Machine Learning, and AI**.  
Experienced in building **end-to-end ML systems**, performing real-world data analysis through internships, and developing scalable data-driven applications. Strong foundation in statistics, data visualization, and cloud-based ML deployment.

## Projects
- **HealthAI** – Full-Stack AI/ML Health Analytics System  
- **Chat Analyzer** – Advanced Chat Analysis & Visualization Tool  

## Education
The University of Texas at Dallas  
B.S. in Computer Science — *Expected 2028*  
Eugene McDermott Scholar | Collegium V Honors  

Relevant Coursework: Machine Learning, Data Science, Big Data Management, Data Analytics, Data Structures & Algorithms

## Leadership & Activities
- Founder & President — **Sahayak (Non-Profit Organization)**
- Volunteer — **Comet Cupboard**

## Honors & Awards
- Eugene McDermott Scholar (Full-Ride Scholarship)
- International Youth Math Challenge — Finalist

## Languages
- English (Native/Bilingual)
- Hindi (Native/Bilingual)

## Contact
Email: shobhit1kapoor@gmail.com  
LinkedIn: linkedin.com/in/shobhitkapoor1  
GitHub: github.com/yourusername  
Portfolio: yourportfolio.dev`,
      date: "Today, 10:30 AM",
    },
    {
      id: 2,
      title: "Projects",
      content: `# Projects

## SpaceX Falcon Lander
**September 2025 – Nov 2025**

• Architected a predictive analytics pipeline achieving 83.3% accuracy in forecasting Falcon 9 landing success, saving $62M per mission by automating data collection via BeautifulSoup web scraping & HTTP requests, executing complex SQL queries to analyze 100+ launch records in Pandas DataFrames, and deploying Folium for geospatial site analysis; engineered a high-performance machine learning suite using Scikit-learn to benchmark Logistic Regression, SVM, Decision Trees, and KNN using GridSearchCV, identifying critical triggers that increased projected recovery rates by 35%.

## Customer Survival Analysis and Churn Prediction
**March 2025 – June 2025**

• Boosted customer retention by 28% and extended lifecycles by 15 months by using Python (Lifelines, NumPy, Pandas); applied Kaplan-Meier curves and Cox Proportional Hazard models to quantify risk across 21 customer attributes, identifying critical contractual and service-based churn triggers that increased Customer Lifetime Value (CLV) by $1.4M.

• Built a churn prediction pipeline with 94% accuracy using XGBoost, Scikit-learn, and SMOTE to process 7,000+ records leveraging feature scaling and encoding; conducted EDA with Matplotlib and Seaborn to isolate key churn drivers by benchmarking 3+ high-performance ML models, delivering data-driven insights that reduced revenue leakage by 18%.

## Data Science Jobs Market Analysis
**October 2024 – December 2024**

• Built end-to-end data pipeline using Python (JobSpy API, Pandas, NumPy) to scrape and analyze 9,000+ job postings, implementing regex-based NLP to extract 229 unique skills, automating ETL workflows and accelerating data acquisition by 40x (weeks to >2 hours), and performing comprehensive data cleansing across 15+ fields with >98% accuracy.

• Developed a holistic career intelligence framework using Matplotlib for statistical visualization and Excel Power Query to provide actionable workforce intelligence across 3,000+ companies; identified top skills in demand and transformed 1M+ data points into strategic insights that pinpointed hiring hotspots representing 65% of the Data Science landscape.`,
      date: "Yesterday, 3:15 PM",
    },
  ])

  const [selectedNoteId, setSelectedNoteId] = useState(1)
  const [editableContent, setEditableContent] = useState("")

  const selectedNote = notes.find((note) => note.id === selectedNoteId)

  const handleNoteSelect = (id: number) => {
    setSelectedNoteId(id)
    const note = notes.find((n) => n.id === id)
    if (note) {
      setEditableContent(note.content)
    }
  }

  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setEditableContent(e.target.value)

    // Update the note content
    setNotes(
      notes.map((note) => {
        if (note.id === selectedNoteId) {
          return { ...note, content: e.target.value }
        }
        return note
      }),
    )
  }

  const textColor = isDarkMode ? "text-white" : "text-gray-800"
  const bgColor = isDarkMode ? "bg-gray-900" : "bg-white"
  const sidebarBg = isDarkMode ? "bg-gray-800" : "bg-gray-100"
  const borderColor = isDarkMode ? "border-gray-700" : "border-gray-200"
  const hoverBg = isDarkMode ? "hover:bg-gray-700" : "hover:bg-gray-200"
  const selectedBg = isDarkMode ? "bg-gray-700" : "bg-gray-300"

  return (
    <div className={`flex h-full ${bgColor} ${textColor}`}>
      {/* Sidebar */}
      <div className={`w-64 ${sidebarBg} border-r ${borderColor} flex flex-col`}>
        <div className="p-3 border-b border-gray-700 flex justify-between items-center">
          <h2 className="font-medium">Notes</h2>
          <button className="w-6 h-6 rounded-full bg-gray-700 flex items-center justify-center text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
        <div className="overflow-y-auto flex-1">
          {notes.map((note) => (
            <div
              key={note.id}
              className={`p-3 cursor-pointer ${selectedNoteId === note.id ? selectedBg : hoverBg}`}
              onClick={() => handleNoteSelect(note.id)}
            >
              <h3 className="font-medium truncate">{note.title}</h3>
              <p className="text-xs text-gray-500 mt-1">{note.date}</p>
              <p className={`text-sm mt-1 truncate ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
                {note.content.split("\n")[0].replace(/^#+ /, "")}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Note content */}
      <div className="flex-1 flex flex-col">
        {selectedNote && (
          <>
            <div className={`p-3 border-b ${borderColor}`}>
              <h2 className="font-medium">{selectedNote.title}</h2>
              <p className="text-xs text-gray-500">{selectedNote.date}</p>
            </div>
            <div className="flex-1 p-4 overflow-auto">
              <div className={`prose prose-sm max-w-none ${isDarkMode ? "prose-invert" : ""}`}>
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                  {selectedNote.content}
                </ReactMarkdown>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
