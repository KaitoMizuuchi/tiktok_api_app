import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            TikTok API Test App
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            This is a development sandbox for testing TikTok for Developers API
            integration. Built with Next.js and deployed on Vercel.
          </p>
        </header>

        {/* Main Content */}
        <main className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Development Status
            </h2>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-gray-700">
                  Next.js Application Setup ✓
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-gray-700">Vercel Deployment ✓</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <span className="text-gray-700">
                  TikTok API Integration (In Progress)
                </span>
              </div>
            </div>
          </div>

          {/* Features Section */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Planned Features
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li>• TikTok OAuth Authentication</li>
                <li>• User Profile Information</li>
                <li>• Video Upload API</li>
                <li>• Analytics Dashboard</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Tech Stack
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Next.js 15</li>
                <li>• React 19</li>
                <li>• TypeScript</li>
                <li>• Tailwind CSS</li>
                <li>• Vercel Deployment</li>
              </ul>
            </div>
          </div>
        </main>

        {/* Footer with Links */}
        <footer className="text-center pt-8 border-t border-gray-200">
          <div className="space-x-6">
            <Link
              href="/terms"
              className="text-blue-600 hover:text-blue-800 underline"
            >
              Terms of Service
            </Link>
            <Link
              href="/privacy"
              className="text-blue-600 hover:text-blue-800 underline"
            >
              Privacy Policy
            </Link>
          </div>
          <p className="text-gray-500 mt-4">
            © 2024 TikTok API Test App - Development Sandbox
          </p>
        </footer>
      </div>
    </div>
  );
}
