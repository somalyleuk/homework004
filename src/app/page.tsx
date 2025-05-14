import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAward,
  faBookOpen,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";

export const metadata: Metadata = {
  title: "Home - E-Learning",
  description:
    "Learn without limits with E-Learning. Discover thousands of courses taught by industry experts.",
  openGraph: {
    title: "Home - E-Learning",
    description:
      "Learn without limits with E-Learning. Discover thousands of courses taught by industry experts.",
    url: "https://homework004-alpha.vercel.app/",
    images: ["/online-learning.gif"],
  },
};

export default function Home() {
  const featuredCourses = [
    {
      title: "Complete Web Development",
      image: "/webdeveloper_cource.jpg",
      description:
        "Learn HTML, CSS, JavaScript, React, Node.js and more to become a full-stack developer",
      price: 89.99,
      reviews: 350,
    },
    {
      title: "Data Science and Machine Learning",
      image: "/ai.png",
      description:
        "Master data analysis, visualization, and machine learning algorithms",
      price: 89.99,
      reviews: 350,
    },
    {
      title: "UI/UX Design Masterclass",
      image: "/ux_ui.png",
      description:
        "Create stunning user interfaces and improve user experience",
      price: 89.99,
      reviews: 350,
    },
  ];

  return (
    <main className="min-h-screen">
      <section className="container mx-auto flex max-w-7xl flex-col items-center justify-between p-6 md:flex-row">
        <article className="mb-8 text-center md:mb-0 md:text-left">
          <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-semibold text-blue-900">
            New Courses Available
          </span>
          <h1 className="mt-4 text-4xl font-bold text-gray-900 md:text-5xl">
            Learn Without Limits
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Discover thousands of courses taught by industry experts and enhance
            your skills at your own pace.
          </p>
          <div className="mt-6 space-x-4">
            <Link
              href="/signup"
              className="rounded-full bg-blue-900 px-6 py-3 text-white hover:bg-blue-700">
              Get Started
            </Link>
            <Link
              href="/courses"
              className="rounded-full border border-blue-900 px-6 py-3 text-blue-900 hover:border-blue-600 hover:text-blue-600">
              Explore Courses
            </Link>
          </div>
        </article>
        <figure className="w-full md:w-1/2">
          <Image
            src="/online-learning.gif"
            alt="Online Learning"
            width={500}
            height={300}
            className="h-auto w-full rounded-lg"
          />
        </figure>
      </section>

      <section className="container mx-auto max-w-7xl py-12">
        <div className="mb-8 flex flex-col justify-between md:flex-row">
          <h2 className="mb-4 text-2xl font-bold text-gray-900">
            Featured Courses
          </h2>
          <Link href="/courses" className="text-blue-600 hover:underline">
            View all courses
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {featuredCourses.map((course) => (
            <article
              key={course.title}
              className="rounded-lg bg-white p-6 shadow-md">
              <Image
                src={course.image}
                alt={course.title}
                width={500}
                height={300}
                className="mb-4 h-48 w-full object-cover rounded"
              />
              <h3 className="text-xl font-semibold text-gray-900">
                {course.title}
              </h3>
              <p className="mb-4 text-gray-600">{course.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-yellow-500">
                  ★★★★☆ ({course.reviews})
                </span>
                <span className="font-bold text-gray-900">${course.price}</span>
              </div>
              <button className="mt-4 w-full rounded border border-blue-600 px-4 py-2 text-blue-600 hover:bg-blue-50 hover:text-blue-700">
                View Course
              </button>
            </article>
          ))}
        </div>
      </section>

      <section className="container mx-auto max-w-7xl py-12">
        <h2 className="mb-6 text-center text-2xl font-bold text-gray-900">
          Why Choose E-Learning?
        </h2>
        <p className="mb-8 text-center text-gray-600">
          Our platform is designed to provide the best learning experience with
          features that help you succeed.
        </p>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {[
            {
              icon: faBookOpen,
              title: "Expert Instructors",
              description:
                "Learn from industry professionals with years of experience.",
            },
            {
              icon: faUserGroup,
              title: "Interactive Community",
              description:
                "Engage with peers and instructors through forums and live sessions.",
            },
            {
              icon: faAward,
              title: "Certified Courses",
              description:
                "Earn certificates to showcase your skills and advance your career.",
            },
          ].map((feature) => (
            <article key={feature.title} className="text-center">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 mx-auto">
                <FontAwesomeIcon
                  icon={feature.icon}
                  className="text-blue-600"
                  size="lg"
                />
              </div>
              <h3 className="font-semibold text-gray-900">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-blue-600 py-12 text-center text-white">
        <h2 className="mb-4 text-2xl font-bold">Ready to Start Learning?</h2>
        <p className="mb-6">
          Join thousands of students advancing their careers with E-Learning.
        </p>
        <div className="flex justify-center space-x-4">
          <Link
            href="/signup"
            className="rounded bg-white px-4 py-2 text-blue-600 hover:bg-gray-100">
            Get Started for Free
          </Link>
          <Link
            href="/courses"
            className="rounded bg-white px-4 py-2 text-blue-600 hover:bg-gray-100">
            View Courses
          </Link>
        </div>
      </section>
    </main>
  );
}
