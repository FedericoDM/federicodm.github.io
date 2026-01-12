export default function AboutPage() {
  return (
    <div className="max-w-2xl space-y-16">
      <div className="space-y-6">
        <h1 className="text-3xl font-normal text-zinc-100">About</h1>
        <p className="text-lg text-zinc-400 leading-relaxed">
          Data Scientist building systems that transform data into actionable insights for social impact and business growth.
        </p>
      </div>

      <section className="space-y-6">
        <h2 className="text-xl font-normal text-zinc-100">Background</h2>
        <p className="text-zinc-400 leading-relaxed">
          I hold an M.S. in Computational Analysis and Public Policy from the University of Chicago
          and a B.A. in Economics (Honors) from ITAM in Mexico. My work combines technical expertise
          with a passion for using data science to solve real-world problems—from environmental advocacy
          to public health compliance and business intelligence.
        </p>
      </section>

      <section className="space-y-6">
        <h2 className="text-xl font-normal text-zinc-100">Skills & Technologies</h2>
        <div className="grid sm:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="font-normal text-zinc-100">Python Ecosystem</h3>
            <ul className="space-y-2 text-sm text-zinc-500">
              <li>Data: pandas, numpy, scipy</li>
              <li>ML: scikit-learn, pytorch, transformers, xgboost</li>
              <li>Web: fastapi, flask, requests, selenium</li>
              <li>Viz: plotly, seaborn, matplotlib, streamlit</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-normal text-zinc-100">Data & Cloud</h3>
            <ul className="space-y-2 text-sm text-zinc-500">
              <li>SQL, R, Power BI</li>
              <li>AWS (Lambda, EC2, S3, SQS, SNS)</li>
              <li>PySpark, Databricks</li>
              <li>C, SAS, MATLAB</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-xl font-normal text-zinc-100">Experience</h2>
        <div className="space-y-8">
          <div className="space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
              <div>
                <h3 className="font-normal text-zinc-100">Data Scientist</h3>
                <p className="text-sm text-zinc-500">Energy & Environment Lab</p>
              </div>
              <span className="text-sm text-zinc-600">June 2024 - Present</span>
            </div>
            <ul className="space-y-2 text-sm text-zinc-500">
              <li>• Pioneered global alert system targeting air pollution advocates across 30+ cities using NLP, graph analysis, and real-time data</li>
              <li>• Implemented 10+ algorithms to verify compliance of 350,000 US Public Water Systems for 45+ pollutants</li>
            </ul>
          </div>

          <div className="space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
              <div>
                <h3 className="font-normal text-zinc-100">Senior Data Scientist</h3>
                <p className="text-sm text-zinc-500">deep_dive</p>
              </div>
              <span className="text-sm text-zinc-600">Oct 2021 - Oct 2023</span>
            </div>
            <ul className="space-y-2 text-sm text-zinc-500">
              <li>• Led automatic alert system for 20+ clients to improve customer relationships via social media analytics</li>
              <li>• Built serverless architecture collecting data on 250,000+ commercial goods for strategic pricing</li>
              <li>• Developed ML recommender system offering customized loans to 500,000+ borrowers</li>
            </ul>
          </div>

          <div className="space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
              <div>
                <h3 className="font-normal text-zinc-100">Data Science Research Assistant</h3>
                <p className="text-sm text-zinc-500">University of Chicago</p>
              </div>
              <span className="text-sm text-zinc-600">Feb 2023 - June 2024</span>
            </div>
            <ul className="space-y-2 text-sm text-zinc-500">
              <li>• Co-developed FastAPI web platform for laboratory games informing children's decision-making research</li>
              <li>• Created 10+ interactive visualizations with Plotly to detect bias in 250+ policing research papers</li>
            </ul>
          </div>

          <div className="space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
              <div>
                <h3 className="font-normal text-zinc-100">Data Engineering Fellow</h3>
                <p className="text-sm text-zinc-500">Coding it Forward</p>
              </div>
              <span className="text-sm text-zinc-600">June 2023 - Aug 2023</span>
            </div>
            <ul className="space-y-2 text-sm text-zinc-500">
              <li>• Automated data collection & cleaning for six websites, reducing 10+ weekly hours of manual work</li>
              <li>• Built Python data platform for Long Beach Climate Office accessing 2010-2023 data</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-xl font-normal text-zinc-100">Education</h2>
        <div className="space-y-6">
          <div className="space-y-1">
            <h3 className="font-normal text-zinc-100">M.S. in Computational Analysis and Public Policy</h3>
            <p className="text-sm text-zinc-500">University of Chicago</p>
            <p className="text-sm text-zinc-600">June 2024</p>
          </div>
          <div className="space-y-1">
            <h3 className="font-normal text-zinc-100">B.A. in Economics, Honors</h3>
            <p className="text-sm text-zinc-500">Instituto Tecnológico Autónomo de México (ITAM)</p>
            <p className="text-sm text-zinc-600">June 2020</p>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-xl font-normal text-zinc-100">Publications</h2>
        <div>
          <p className="text-zinc-400">
            <span className="font-normal text-zinc-100">Academic Copaganda</span> (with Dr. Robert Vargas)
          </p>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-xl font-normal text-zinc-100">Contact</h2>
        <p className="text-zinc-400 leading-relaxed">
          I'm always interested in discussing data science challenges, social impact projects,
          or collaboration opportunities. Feel free to reach out.
        </p>
        <div className="flex flex-wrap gap-6 text-sm">
          <a
            href="mailto:fd.molina@outlook.com"
            className="text-zinc-400 hover:text-zinc-100 transition-colors"
          >
            Email
          </a>
          <a
            href="https://github.com/FedericoDM"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-400 hover:text-zinc-100 transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/federico-dominguez-molina"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-400 hover:text-zinc-100 transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </section>
    </div>
  );
}
