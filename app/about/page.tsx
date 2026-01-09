export default function AboutPage() {
  return (
    <div className="max-w-3xl space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold">About Me</h1>
        <p className="text-xl text-zinc-600 dark:text-zinc-400">
          Data Engineer and Data Scientist building reliable systems and extracting meaningful insights.
        </p>
      </div>

      <div className="prose prose-zinc dark:prose-invert max-w-none space-y-6">
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Background</h2>
          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            I specialize in building data infrastructure and machine learning systems that scale.
            My work focuses on creating robust ETL pipelines, implementing ML models in production,
            and turning complex data into actionable insights.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Skills & Technologies</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h3 className="font-semibold text-lg">Data Engineering</h3>
              <ul className="space-y-2 text-zinc-700 dark:text-zinc-300">
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">▸</span>
                  <span>Apache Spark, Kafka, Airflow</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">▸</span>
                  <span>PostgreSQL, MongoDB, Redis</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">▸</span>
                  <span>AWS, Docker, Kubernetes</span>
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="font-semibold text-lg">Data Science & ML</h3>
              <ul className="space-y-2 text-zinc-700 dark:text-zinc-300">
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">▸</span>
                  <span>Python, PyTorch, TensorFlow</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">▸</span>
                  <span>scikit-learn, pandas, NumPy</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">▸</span>
                  <span>MLflow, Feature Stores, A/B Testing</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Experience</h2>
          <div className="space-y-6">
            <div className="border-l-2 border-accent pl-4 space-y-2">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                <h3 className="font-semibold text-lg">Senior Data Engineer</h3>
                <span className="text-sm text-zinc-500">2022 - Present</span>
              </div>
              <p className="text-zinc-700 dark:text-zinc-300">
                Leading data infrastructure initiatives, designing scalable pipelines processing billions of events,
                and mentoring junior engineers.
              </p>
            </div>

            <div className="border-l-2 border-zinc-300 dark:border-zinc-700 pl-4 space-y-2">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                <h3 className="font-semibold text-lg">Data Scientist</h3>
                <span className="text-sm text-zinc-500">2020 - 2022</span>
              </div>
              <p className="text-zinc-700 dark:text-zinc-300">
                Built ML models for recommendation systems, NLP applications, and predictive analytics
                that drove significant business impact.
              </p>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Let's Connect</h2>
          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            I'm always interested in discussing data engineering challenges, ML projects,
            or collaboration opportunities. Feel free to reach out!
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href="mailto:you@example.com"
              className="px-4 py-2 rounded-xl bg-accent text-white hover:bg-accent-dark transition-colors"
            >
              Email Me
            </a>
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-xl border border-zinc-300 dark:border-zinc-700 hover:border-accent transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-xl border border-zinc-300 dark:border-zinc-700 hover:border-accent transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
