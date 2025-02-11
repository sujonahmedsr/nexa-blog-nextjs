
export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-4 text-center">About NexaBlog</h1>
      <p className="text-gray-700 text-lg mb-6 text-center">
        Welcome to <span className="font-semibold">NexaBlog</span> – your go-to platform for insightful articles, tech updates, and engaging stories.
      </p>

      <div className="space-y-6">
        <section>
          <h2 className="text-2xl font-semibold mb-2">📖 Our Mission</h2>
          <p className="text-gray-600">
            NexaBlog aims to provide high-quality, informative, and engaging content for readers who are passionate about technology, programming, business, and self-improvement.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">🌍 What We Cover</h2>
          <ul className="list-disc list-inside text-gray-600">
            <li>Tech News & Updates</li>
            <li>Programming Tutorials</li>
            <li>Web Development Guides</li>
            <li>Business & Productivity Tips</li>
            <li>Personal Growth & Success Stories</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">🚀 Join Us</h2>
          <p className="text-gray-600">
            We believe in **knowledge sharing** and **community growth**. Whether you are a reader or a writer, NexaBlog is the perfect place to explore and contribute.  
            Stay connected, keep learning, and grow with us! 🎉
          </p>
        </section>
      </div>

      <div className="mt-8 text-center">
        <p className="text-gray-700">Have questions? Contact us at <a href="mailto:support@nexablog.com" className="text-blue-600 underline">support@nexablog.com</a></p>
      </div>
    </div>
  );
}
