export default function Terms() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">
            Terms of Service
          </h1>

          <div className="prose max-w-none">
            <p className="text-sm text-gray-500 mb-6">
              Last updated: {new Date().toLocaleDateString()}
            </p>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                1. Development Purpose
              </h2>
              <p className="text-gray-600 mb-4">
                This application is created solely for development and testing
                purposes of TikTok for Developers API integration. This is a
                sandbox environment and not intended for production use.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                2. Testing Environment
              </h2>
              <p className="text-gray-600 mb-4">
                This service is provided "as is" for development testing only.
                No warranties are made regarding the availability, reliability,
                or functionality of this testing application.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                3. Data Usage
              </h2>
              <p className="text-gray-600 mb-4">
                Any data processed through this application is for testing
                purposes only and may be logged for debugging and development
                purposes.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                4. Contact
              </h2>
              <p className="text-gray-600">
                This is a development project. For any questions, please contact
                the developer.
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
