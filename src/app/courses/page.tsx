import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Courses - E-Learning",
  description:
    "Explore thousands of online courses to master new skills and advance your career with E-Learning.",
  openGraph: {
    title: "Courses - E-Learning",
    description:
      "Explore thousands of online courses to master new skills and advance your career with E-Learning.",
    url: "https://homework004-alpha.vercel.app/courses",
    images: ["/webdeveloper_cource.jpg"],
  },
};
export default function Courses() {
  const courses = [
    {
      title: "AI Fundamentals for Beginners",
      image: "/ai.png",
      description:
        "Introduction to artificial intelligence and its applications",
      price: 69.99,
      reviews: 180,
    },
    {
      title: "Advanced UI Design Techniques",
      image: "/ux_ui.png",
      description:
        "Master advanced techniques for creating stunning user interfaces",
      price: 84.99,
      reviews: 150,
    },
    {
      title: "Frontend Development with React",
      image: "/webdeveloper_cource.jpg",
      description:
        "Build dynamic web applications using React and modern JavaScript",
      price: 99.99,
      reviews: 300,
    },
    {
      title: "AI Fundamentals for Beginners",
      image: "/ai.png",
      description:
        "Introduction to artificial intelligence and its applications",
      price: 69.99,
      reviews: 180,
    },
    {
      title: "Advanced UI Design Techniques",
      image: "/ux_ui.png",
      description:
        "Master advanced techniques for creating stunning user interfaces",
      price: 84.99,
      reviews: 150,
    },
    {
      title: "Frontend Development with React",
      image: "/webdeveloper_cource.jpg",
      description:
        "Build dynamic web applications using React and modern JavaScript",
      price: 99.99,
      reviews: 300,
    },
    {
      title: "AI Fundamentals for Beginners",
      image: "/ai.png",
      description:
        "Introduction to artificial intelligence and its applications",
      price: 69.99,
      reviews: 180,
    },
    {
      title: "Advanced UI Design Techniques",
      image: "/ux_ui.png",
      description:
        "Master advanced techniques for creating stunning user interfaces",
      price: 84.99,
      reviews: 150,
    },
    {
      title: "Frontend Development with React",
      image: "/webdeveloper_cource.jpg",
      description:
        "Build dynamic web applications using React and modern JavaScript",
      price: 99.99,
      reviews: 300,
    },
  ];

  return (
    <main className="min-h-screen">
      <section className="bg-blue-600 py-12 text-center text-white">
        <h1 className="mb-2 text-3xl font-bold">Explore Our Courses</h1>
        <p className="text-lg">
          Browse our extensive course database to master new skills and advance
          your career.
        </p>
      </section>

      <section className="container mx-auto max-w-7xl py-12">
        <div className="mb-8 flex flex-col gap-4 md:flex-row">
          <div className="relative w-full">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <FontAwesomeIcon icon={faSearch} className="text-blue-600" />
            </span>
            <input
              type="text"
              placeholder="Search courses..."
              className="w-full rounded-lg border border-gray-300 p-2.5 pl-10 text-sm focus:border-blue-500 focus:ring-blue-500"
              aria-label="Search courses"
            />
          </div>
          <button className="rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-medium text-white hover:bg-blue-700">
            Search
          </button>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
          <aside className="rounded-lg bg-blue-100 p-4">
            <h2 className="mb-4 font-semibold text-gray-900">Filters</h2>
            <div className="space-y-4">
              <div>
                <h3 className="mb-2 font-semibold">Categories</h3>
                {[
                  "Development",
                  "Business",
                  "Marketing",
                  "Data Science",
                  "IT & Software",
                  "Design",
                ].map((category) => (
                  <label key={category} className="flex items-center">
                    <input
                      type="checkbox"
                      className="mr-2"
                      aria-label={category}
                    />
                    {category}
                  </label>
                ))}
              </div>
              <div>
                <h3 className="mb-2 font-semibold">Level</h3>
                {["Beginner", "Intermediate", "Advanced"].map((level) => (
                  <label key={level} className="flex items-center">
                    <input
                      type="checkbox"
                      className="mr-2"
                      aria-label={level}
                    />
                    {level}
                  </label>
                ))}
              </div>
              <div>
                <h3 className="mb-2 font-semibold">Price Range</h3>
                <input
                  type="range"
                  min="0"
                  max="300"
                  className="w-full"
                  aria-label="Price Range"
                />
                <p className="text-sm text-gray-600">$0 - $300</p>
              </div>
              <div>
                <h3 className="mb-2 font-semibold">Rating</h3>
                {["4.5 & up", "4.0 & up"].map((rating) => (
                  <label key={rating} className="flex items-center">
                    <input
                      type="checkbox"
                      className="mr-2"
                      aria-label={rating}
                    />
                    {rating}
                  </label>
                ))}
              </div>
              <button className="w-full rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
                Apply Filters
              </button>
            </div>
          </aside>
          <div className="col-span-3">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {courses.map((course) => (
                <article
                  key={course.title}
                  className="rounded-lg bg-white p-6 shadow-md">
                  <Image
                    src={course.image}
                    alt={course.title}
                    width={300}
                    height={200}
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
                    <span className="font-bold text-gray-900">
                      ${course.price}
                    </span>
                  </div>
                  <button className="mt-4 w-full rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
                    View Course
                  </button>
                </article>
              ))}
            </div>
            <div className="mt-6 text-center">
              <button className="rounded bg-gray-200 px-4 py-2 hover:bg-gray-300">
                Load More
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
