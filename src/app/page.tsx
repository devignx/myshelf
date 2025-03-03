"use client";
import AnimatedGradient from "@/fancy/components/background/animated-gradient-with-svg";

export default function Home() {
    return (
        <main className="min-h-screen bg-white text-gray-800">
            {/* Hero Section */}
            <section className="max-w-5xl h-screen flex justify-center items-center mx-auto px-6 pt-24 pb-20">
                <div className="opacity-10 pointer-events-none">
                    <AnimatedGradient
                        colors={["#3B82F6", "#60A5FA", "#93C5FD"]}
                        speed={0.05}
                        blur="medium"
                    />
                </div>
                <div className="max-w-3xl mx-auto text-center space-y-8">
                    <h1 className="text-4xl sm:text-5xl font-bold leading-tight tracking-tight">
                        Your Professional Identity,{" "}
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
                            API-Powered
                        </span>
                    </h1>

                    <p className="text-xl font-normal text-gray-600 leading-relaxed max-w-2xl mx-auto">
                        Stop manually filling forms. MyShelf turns your career
                        data into elegant APIs that work for you, not the other
                        way around.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                        <button className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-medium shadow-lg hover:shadow-xl hover:bg-blue-700 transition-all duration-300 transform hover:-translate-y-1">
                            Get Started — It&apos;s Free
                        </button>
                        <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg text-lg font-medium hover:border-blue-600 hover:text-blue-600 transition-all duration-300">
                            See How It Works
                        </button>
                    </div>

                    <p className="text-gray-500 text-sm">
                        <svg
                            className="w-4 h-4 inline-block mr-1"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                            />
                        </svg>
                        No credit card required • Cancel anytime
                    </p>
                </div>
            </section>

            {/* Social Proof Bar */}
            <section className="bg-gray-50 py-8">
                <div className="max-w-5xl mx-auto px-6">
                    <p className="text-center text-gray-600 font-medium mb-6">
                        Trusted by professionals from
                    </p>
                    <div className="flex justify-center items-center flex-wrap gap-12 opacity-80">
                        <svg
                            className="h-6 text-gray-400"
                            viewBox="0 0 24 28"
                            fill="currentColor"
                        >
                            <path d="M22.2,6c-1.2-1.2-2.9-1.8-4.6-1.8c-1.8,0-3.5,0.6-4.8,1.8c-0.6,0.6-1.1,1.2-1.4,1.9c-0.4-0.7-0.8-1.3-1.4-1.9C8.7,4.8,7,4.2,5.3,4.2C3.5,4.2,1.8,4.8,0.6,6c-1.2,1.2-1.8,2.9-1.8,4.6s0.6,3.5,1.8,4.8l10,10c0.1,0.1,0.2,0.2,0.3,0.2c0.1,0.1,0.3,0.1,0.4,0.1s0.3,0,0.4-0.1c0.1-0.1,0.2-0.1,0.3-0.2l10-10c1.2-1.2,1.8-2.9,1.8-4.8S23.4,7.2,22.2,6z" />
                        </svg>
                        <svg
                            className="h-6 text-gray-400"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                        >
                            <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14h-2v-4H9v-2h3V8h2v3h3v2h-3v4z" />
                        </svg>
                        <svg
                            className="h-6 text-gray-400"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                        >
                            <path d="M21.35 11.1h-9.17v2.73h6.51c-.33 3-3.28 4.44-6.51 4.44C7.98 18.27 4.67 15 4.67 12s3.31-6.27 7.51-6.27c1.98 0 3.75.7 5.28 1.86l2.03-2.03C17.39 3.68 14.66 2.53 12 2.53 6.26 2.53 2 6.79 2 12s4.26 9.47 10 9.47c5.18 0 9.13-3.67 9.13-8.82 0-.49-.07-.86-.22-1.55z" />
                        </svg>
                        <svg
                            className="h-6 text-gray-400"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                        >
                            <path d="M20.9,2H3.1C2.5,2,2,2.5,2,3.1v17.8C2,21.5,2.5,22,3.1,22h17.8c0.6,0,1.1-0.5,1.1-1.1V3.1C22,2.5,21.5,2,20.9,2z M8.9,18.9h-3v-9h3V18.9z M7.4,8.7c-1,0-1.7-0.8-1.7-1.7s0.8-1.7,1.7-1.7c0.9,0,1.7,0.8,1.7,1.7S8.4,8.7,7.4,8.7z M18.9,18.9h-3v-4.8c0-1.2,0-2.7-1.7-2.7c-1.7,0-1.9,1.3-1.9,2.6v5h-3v-9h2.8v1.3h0c0.4-0.8,1.5-1.7,3-1.7c3.2,0,3.8,2.1,3.8,4.9V18.9z" />
                        </svg>
                        <svg
                            className="h-6 text-gray-400"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                        >
                            <path d="M22,5.8a8.4,8.4,0,0,1-2.4.7,4.2,4.2,0,0,0,1.8-2.3,8.3,8.3,0,0,1-2.6,1,4.2,4.2,0,0,0-7.2,3.8A11.9,11.9,0,0,1,3,4.2,4.2,4.2,0,0,0,4.3,9.9,4.1,4.1,0,0,1,2.8,9.3v0A4.2,4.2,0,0,0,6.1,13.4a4.1,4.1,0,0,1-1.9.1,4.2,4.2,0,0,0,3.9,2.9A8.4,8.4,0,0,1,2,18.3a11.8,11.8,0,0,0,6.4,1.9A11.8,11.8,0,0,0,20.3,8.4c0-.2,0-.4,0-.5A8.6,8.6,0,0,0,22,5.8Z" />
                        </svg>
                    </div>
                </div>
            </section>

            {/* API Demo Section */}
            <section className="max-w-5xl mx-auto px-6 py-20">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold mb-6">
                        Your Data, Your API
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Transform your resume into a programmatic interface.
                        Update once, use everywhere.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="bg-gray-900 p-6 rounded-xl shadow-xl order-2 md:order-1">
                        <div className="flex items-center mb-3 text-gray-400 text-xs">
                            <svg
                                className="h-3 w-3 mr-2"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                            >
                                <circle cx="12" cy="12" r="10" />
                            </svg>
                            GET request
                        </div>
                        <pre className="text-green-400 font-mono text-sm overflow-auto">
                            {`GET https://myshelf.me/johndoe/experience

{
  "experience": [
    {
      "company": "TechCorp",
      "position": "Senior Developer",
      "duration": "2020-2023",
      "highlights": [
        "Led team of 5 engineers",
        "Reduced API response time by 40%"
      ]
    }
  ]
}`}
                        </pre>
                    </div>

                    <div className="space-y-8 order-1 md:order-2">
                        <div className="flex items-start gap-5">
                            <div className="bg-blue-100 p-3 rounded-full mt-1">
                                <svg
                                    className="w-6 h-6 text-blue-600"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 7v10c0 2 1 3 3 3h10c2 0 3-1 3-3V7c0-2-1-3-3-3H7c-2 0-3 1-3 3zm0 2h16M7 1v4M17 1v4"
                                    />
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold mb-1">
                                    Your Career as Endpoints
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    Each aspect of your professional identity —
                                    skills, experience, education — becomes a
                                    dedicated API endpoint that you control.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-5">
                            <div className="bg-indigo-100 p-3 rounded-full mt-1">
                                <svg
                                    className="w-6 h-6 text-indigo-600"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                                    />
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold mb-1">
                                    100% Data Ownership
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    Unlike traditional job sites, you control
                                    who accesses your information and how
                                    it&apos;s used. Revoke access anytime.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-5">
                            <div className="bg-green-100 p-3 rounded-full mt-1">
                                <svg
                                    className="w-6 h-6 text-green-600"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M13 10V3L4 14h7v7l9-11h-7z"
                                    />
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold mb-1">
                                    Apply in Seconds
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    No more tedious form filling. Apply to jobs
                                    with a single API call, letting your data
                                    work for you.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="bg-gray-50 py-20">
                <div className="max-w-5xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold mb-6">
                            Designed for Everyone
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            MyShelf provides unique benefits for job seekers,
                            businesses, and developers alike.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-10">
                        <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300">
                            <svg
                                className="w-10 h-10 text-blue-600 mb-6"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                />
                            </svg>
                            <h3 className="text-xl font-bold mb-4">
                                Job Seekers
                            </h3>
                            <ul className="space-y-4 text-gray-600">
                                <li className="flex items-start">
                                    <svg
                                        className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-1"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                    >
                                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                                    </svg>
                                    <span>
                                        Update your info once, apply everywhere
                                    </span>
                                </li>
                                <li className="flex items-start">
                                    <svg
                                        className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-1"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                    >
                                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                                    </svg>
                                    <span>ATS-optimized CV formats</span>
                                </li>
                                <li className="flex items-start">
                                    <svg
                                        className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-1"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                    >
                                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                                    </svg>
                                    <span>5x faster application process</span>
                                </li>
                            </ul>
                        </div>

                        <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300">
                            <svg
                                className="w-10 h-10 text-indigo-600 mb-6"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                                />
                            </svg>
                            <h3 className="text-xl font-bold mb-4">
                                Businesses
                            </h3>
                            <ul className="space-y-4 text-gray-600">
                                <li className="flex items-start">
                                    <svg
                                        className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-1"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                    >
                                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                                    </svg>
                                    <span>Verified candidate data via API</span>
                                </li>
                                <li className="flex items-start">
                                    <svg
                                        className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-1"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                    >
                                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                                    </svg>
                                    <span>
                                        75% reduction in application processing
                                    </span>
                                </li>
                                <li className="flex items-start">
                                    <svg
                                        className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-1"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                    >
                                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                                    </svg>
                                    <span>Seamless ATS integration</span>
                                </li>
                            </ul>
                        </div>

                        <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300">
                            <svg
                                className="w-10 h-10 text-green-600 mb-6"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                                />
                            </svg>
                            <h3 className="text-xl font-bold mb-4">
                                Developers
                            </h3>
                            <ul className="space-y-4 text-gray-600">
                                <li className="flex items-start">
                                    <svg
                                        className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-1"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                    >
                                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                                    </svg>
                                    <span>
                                        RESTful API with comprehensive docs
                                    </span>
                                </li>
                                <li className="flex items-start">
                                    <svg
                                        className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-1"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                    >
                                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                                    </svg>
                                    <span>Seamless OAuth2 authentication</span>
                                </li>
                                <li className="flex items-start">
                                    <svg
                                        className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-1"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                    >
                                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                                    </svg>
                                    <span>99.9% uptime SLA</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="max-w-5xl mx-auto px-6 py-20">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold mb-6">
                        What Our Users Say
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-10">
                    <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm">
                        <div className="flex items-center mb-6">
                            <div className="flex text-yellow-400">
                                {[...Array(5)].map((_, i) => (
                                    <svg
                                        key={i}
                                        className="w-5 h-5"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                    >
                                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                    </svg>
                                ))}
                            </div>
                        </div>
                        <p className="text-gray-700 mb-6 italic">
                            &quot;MyShelf cut my job application time by 80%. I
                            used to spend hours filling out forms. Now I just
                            click once and all my info is there. I got three
                            interviews in my first week.&quot;
                        </p>
                        <div className="flex items-center">
                            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-medium">
                                MS
                            </div>
                            <div className="ml-3">
                                <p className="font-medium">Michael S.</p>
                                <p className="text-gray-500 text-sm">
                                    Software Engineer
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm">
                        <div className="flex items-center mb-6">
                            <div className="flex text-yellow-400">
                                {[...Array(5)].map((_, i) => (
                                    <svg
                                        key={i}
                                        className="w-5 h-5"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                    >
                                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                    </svg>
                                ))}
                            </div>
                        </div>
                        <p className="text-gray-700 mb-6 italic">
                            &quot;As a hiring manager, MyShelf has transformed
                            our recruiting. We get structured, verified data
                            that plugs right into our systems. The quality of
                            candidates has improved dramatically.&quot;
                        </p>
                        <div className="flex items-center">
                            <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 font-medium">
                                JL
                            </div>
                            <div className="ml-3">
                                <p className="font-medium">Jennifer L.</p>
                                <p className="text-gray-500 text-sm">
                                    HR Director
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-20">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold mb-6">
                        Join 10,000+ Professionals Who&apos;ve Unlocked Their
                        Data
                    </h2>
                    <p className="text-xl mb-10 opacity-90">
                        The job market is competitive. Don&apos;t let tedious
                        application processes hold you back.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
                        <button className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                            Create Your Free API
                        </button>
                        <button className="border-2 border-white bg-transparent text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-white hover:text-blue-600 transition-all duration-300">
                            Schedule Demo
                        </button>
                    </div>
                    <p className="text-sm opacity-80 mt-4">
                        No credit card required • Set up in under 2 minutes •
                        14-day Premium trial
                    </p>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-900 text-gray-400 py-12">
                <div className="max-w-5xl mx-auto px-6">
                    <div className="grid md:grid-cols-4 gap-8">
                        <div>
                            <h3 className="font-bold text-white mb-4">
                                MyShelf
                            </h3>
                            <p className="text-sm">
                                Transforming professional data into powerful
                                APIs since 2023.
                            </p>
                        </div>
                        <div>
                            <h4 className="font-medium text-white mb-4">
                                Product
                            </h4>
                            <ul className="space-y-2 text-sm">
                                <li>
                                    <a
                                        href="#"
                                        className="hover:text-white transition-colors"
                                    >
                                        Features
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="hover:text-white transition-colors"
                                    >
                                        Pricing
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="hover:text-white transition-colors"
                                    >
                                        API Documentation
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="hover:text-white transition-colors"
                                    >
                                        Integrations
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-medium text-white mb-4">
                                Resources
                            </h4>
                            <ul className="space-y-2 text-sm">
                                <li>
                                    <a
                                        href="#"
                                        className="hover:text-white transition-colors"
                                    >
                                        Blog
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="hover:text-white transition-colors"
                                    >
                                        Guides
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="hover:text-white transition-colors"
                                    >
                                        Support
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="hover:text-white transition-colors"
                                    >
                                        API Status
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-medium text-white mb-4">
                                Company
                            </h4>
                            <ul className="space-y-2 text-sm">
                                <li>
                                    <a
                                        href="#"
                                        className="hover:text-white transition-colors"
                                    >
                                        About
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="hover:text-white transition-colors"
                                    >
                                        Careers
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="hover:text-white transition-colors"
                                    >
                                        Legal
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="hover:text-white transition-colors"
                                    >
                                        Contact
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="border-t border-gray-800 mt-10 pt-8 flex flex-col md:flex-row justify-between items-center">
                        <p className="text-sm">
                            © 2025 MyShelf. All rights reserved.
                        </p>
                        <div className="flex space-x-6 mt-4 md:mt-0">
                            <a
                                href="#"
                                className="text-gray-400 hover:text-white transition-colors"
                            >
                                <svg
                                    className="h-5 w-5"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M22,5.8a8.4,8.4,0,0,1-2.4.7,4.2,4.2,0,0,0,1.8-2.3,8.3,8.3,0,0,1-2.6,1,4.2,4.2,0,0,0-7.2,3.8A11.9,11.9,0,0,1,3,4.2,4.2,4.2,0,0,0,4.3,9.9,4.1,4.1,0,0,1,2.8,9.3v0A4.2,4.2,0,0,0,6.1,13.4a4.1,4.1,0,0,1-1.9.1,4.2,4.2,0,0,0,3.9,2.9A8.4,8.4,0,0,1,2,18.3a11.8,11.8,0,0,0,6.4,1.9A11.8,11.8,0,0,0,20.3,8.4c0-.2,0-.4,0-.5A8.6,8.6,0,0,0,22,5.8Z" />
                                </svg>
                            </a>
                            <a
                                href="#"
                                className="text-gray-400 hover:text-white transition-colors"
                            >
                                <svg
                                    className="h-5 w-5"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M20.9,2H3.1C2.5,2,2,2.5,2,3.1v17.8C2,21.5,2.5,22,3.1,22h17.8c0.6,0,1.1-0.5,1.1-1.1V3.1C22,2.5,21.5,2,20.9,2z M8.9,18.9h-3v-9h3V18.9z M7.4,8.7c-1,0-1.7-0.8-1.7-1.7s0.8-1.7,1.7-1.7c0.9,0,1.7,0.8,1.7,1.7S8.4,8.7,7.4,8.7z M18.9,18.9h-3v-4.8c0-1.2,0-2.7-1.7-2.7c-1.7,0-1.9,1.3-1.9,2.6v5h-3v-9h2.8v1.3h0c0.4-0.8,1.5-1.7,3-1.7c3.2,0,3.8,2.1,3.8,4.9V18.9z" />
                                </svg>
                            </a>
                            <a
                                href="#"
                                className="text-gray-400 hover:text-white transition-colors"
                            >
                                <svg
                                    className="h-5 w-5"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M12,2.2c-5.3,0-9.7,4.3-9.7,9.7s4.3,9.7,9.7,9.7s9.7-4.3,9.7-9.7S17.3,2.2,12,2.2z M15.5,13.5h-2.2v6.3h-2.6v-6.3H9v-2.4h1.7v-1.6c0-1.7,0.8-4.3,4.3-4.3l3.1,0v3.5H15c-0.4,0-0.9,0.2-0.9,1v1.4h3L15.5,13.5z" />
                                </svg>
                            </a>
                            <a
                                href="#"
                                className="text-gray-400 hover:text-white transition-colors"
                            >
                                <svg
                                    className="h-5 w-5"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M12,2.2c-5.3,0-9.7,4.3-9.7,9.7s4.3,9.7,9.7,9.7s9.7-4.3,9.7-9.7S17.3,2.2,12,2.2z M16.9,11.8c0,0.1,0,0.2,0,0.3c0,3.2-2.4,6.9-6.9,6.9c-1.4,0-2.6-0.4-3.7-1.1c0.2,0,0.4,0,0.6,0c1.1,0,2.2-0.4,3-1.1c-1.1,0-2-0.7-2.3-1.7c0.2,0,0.3,0,0.5,0c0.2,0,0.5,0,0.7-0.1c-1.1-0.2-2-1.2-2-2.4v0c0.3,0.2,0.7,0.3,1.1,0.3c-0.7-0.4-1.1-1.2-1.1-2c0-0.4,0.1-0.8,0.3-1.2c1.2,1.5,3,2.4,5,2.5c0-0.2-0.1-0.4-0.1-0.6c0-1.4,1.1-2.5,2.5-2.5c0.7,0,1.3,0.3,1.8,0.8c0.6-0.1,1.1-0.3,1.6-0.6c-0.2,0.6-0.6,1.1-1.1,1.4c0.5-0.1,1-0.2,1.4-0.4C17.8,11,17.4,11.4,16.9,11.8z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Newsletter Subscription */}
                    <div className="mt-10 pt-6 border-t border-gray-800">
                        <div className="md:flex items-center justify-between">
                            <div className="mb-6 md:mb-0">
                                <h4 className="font-medium text-white mb-2">
                                    Stay updated
                                </h4>
                                <p className="text-sm">
                                    Get the latest news and product updates
                                </p>
                            </div>
                            <div className="flex">
                                <input
                                    type="email"
                                    placeholder="Your email address"
                                    className="bg-gray-800 rounded-l-lg px-4 py-2 text-white w-full md:w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                                <button className="bg-blue-600 hover:bg-blue-700 text-white rounded-r-lg px-4 py-2 font-medium transition-colors">
                                    Subscribe
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Trust Badges */}
                    <div className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-4">
                        <div className="flex items-center text-xs">
                            <svg
                                className="h-5 w-5 mr-1 text-green-400"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                            >
                                <path d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20zm0-2a8 8 0 1 1 0-16 8 8 0 0 1 0 16zm-1-5h2v2h-2v-2zm0-8h2v6h-2V7z" />
                            </svg>
                            <span>GDPR Compliant</span>
                        </div>
                        <div className="flex items-center text-xs">
                            <svg
                                className="h-5 w-5 mr-1 text-green-400"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                            >
                                <path d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20zm0-2a8 8 0 1 1 0-16 8 8 0 0 1 0 16zm-1-5h2v2h-2v-2zm0-8h2v6h-2V7z" />
                            </svg>
                            <span>SOC 2 Certified</span>
                        </div>
                        <div className="flex items-center text-xs">
                            <svg
                                className="h-5 w-5 mr-1 text-green-400"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                            >
                                <path d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20zm0-2a8 8 0 1 1 0-16 8 8 0 0 1 0 16zm-1-5h2v2h-2v-2zm0-8h2v6h-2V7z" />
                            </svg>
                            <span>256-bit SSL Encryption</span>
                        </div>
                        <div className="flex items-center text-xs">
                            <svg
                                className="h-5 w-5 mr-1 text-green-400"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                            >
                                <path d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20zm0-2a8 8 0 1 1 0-16 8 8 0 0 1 0 16zm-1-5h2v2h-2v-2zm0-8h2v6h-2V7z" />
                            </svg>
                            <span>99.9% Uptime</span>
                        </div>
                    </div>
                </div>
            </footer>
        </main>
    );
}
