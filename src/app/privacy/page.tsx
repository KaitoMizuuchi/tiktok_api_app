export default function Privacy() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">
            Privacy Policy
          </h1>

          <div className="prose max-w-none">
            <p className="text-sm text-gray-500 mb-6">
              Last updated: {new Date().toLocaleDateString()}
            </p>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                1. Information We Collect
              </h2>
              <p className="text-gray-600 mb-4">
                This testing application may collect the following information
                for development purposes:
              </p>
              <ul className="list-disc ml-6 text-gray-600 space-y-2">
                <li>
                  TikTok account information (when you authenticate via TikTok
                  OAuth)
                </li>
                <li>Usage logs and debugging information</li>
                <li>API interaction data for testing purposes</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                2. How We Use Information
              </h2>
              <p className="text-gray-600 mb-4">
                Information collected is used exclusively for:
              </p>
              <ul className="list-disc ml-6 text-gray-600 space-y-2">
                <li>Testing TikTok API integration</li>
                <li>Debugging and development purposes</li>
                <li>Ensuring proper functionality of the application</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                3. Data Security
              </h2>
              <p className="text-gray-600 mb-4">
                This is a development environment. While we implement reasonable
                security measures, please be aware that this is not a
                production-grade system.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                4. Third-Party Services
              </h2>
              <p className="text-gray-600 mb-4">
                This application integrates with:
              </p>
              <ul className="list-disc ml-6 text-gray-600 space-y-2">
                <li>TikTok for Developers API</li>
                <li>Vercel hosting platform</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                5. Development Environment Notice
              </h2>
              <p className="text-gray-600 mb-4">
                This application is in active development. Privacy practices may
                change as the application evolves. This is not intended for
                production use with real user data.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                6. Contact Information
              </h2>
              <p className="text-gray-600">
                If you have any questions about this Privacy Policy or the
                development of this application, please contact the developer.
              </p>
            </section>
          </div>

          <div className="mt-8 pt-6 border-t border-gray-200">
            <a href="/" className="text-blue-600 hover:text-blue-800 underline">
              ← Back to Home
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
