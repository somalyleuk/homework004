import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import {
  faBook,
  faBroadcastTower,
  faLightbulb,
} from "@fortawesome/free-solid-svg-icons";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About - E-Learning",
  description:
    "Learn about E-Learning's mission, values, and team dedicated to empowering learners worldwide.",
  openGraph: {
    title: "About - E-Learning",
    description:
      "Learn about E-Learning's mission, values, and team dedicated to empowering learners worldwide.",
    url: "https://homework004-alpha.vercel.app//about",
    images: ["/student.jpg"],
  },
};

export default function ABOUT() {
  return (
    <main className="min-h-screen">
      <section className="py-12 max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">Our Story</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <p className="mb-4">
              E-Learning was founded in 2018 with a passion to boost learning
              for everyone. What started as a small collection of online courses
              has grown into a comprehensive learning platform for thousands of
              courses across diverse subjects, taught by industry experts.
            </p>
            <p>
              Our platform is accessible to everyone, and we’re currently
              innovating to bring more engaging, interactive, and individual
              learning styles. Education should be accessible to everyone.
              Today, E-Learning serves millions of students from over 190+
              countries, helping them acquire new skills and achieve their
              goals.
            </p>
          </div>
          <div className="relative h-64">
            <Image
              src="/student.jpg"
              alt="Students Learning"
              fill
              className="object-contain rounded h-96 w-96"
            />
          </div>
        </div>
      </section>

      <section className="py-12 bg-white text-center">
        <h2 className="text-2xl font-bold mb-6">Our Mission & Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <article className="p-4">
            <div className="bg-blue-100 rounded-full w-12 h-12 mx-auto mb-2 flex items-center justify-center">
              <span className="text-blue-600">
                <FontAwesomeIcon icon={faBroadcastTower} />
              </span>
            </div>
            <h3 className="font-semibold">Accessibility</h3>
            <p>
              We believe education should be accessible to everyone, regardless
              of location, background, or financial status.
            </p>
          </article>
          <article className="p-4">
            <div className="bg-blue-100 rounded-full w-12 h-12 mx-auto mb-2 flex items-center justify-center">
              <span className="text-blue-600">
                <FontAwesomeIcon icon={faBook} />
              </span>
            </div>
            <h3 className="font-semibold">Quality</h3>
            <p>
              We provide high-quality educational content that meets the highest
              standards of learning.
            </p>
          </article>
          <article className="p-4">
            <div className="bg-blue-100 rounded-full w-12 h-12 mx-auto mb-2 flex items-center justify-center">
              <span className="text-blue-600">
                <FontAwesomeIcon icon={faLightbulb} />
              </span>
            </div>
            <h3 className="font-semibold">Innovation</h3>
            <p>
              We continuously innovate our teaching methods to enhance the
              learning experience.
            </p>
          </article>
        </div>
      </section>

      <section className="py-12   bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-center">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <article className="text-center">
              <div className="relative w-24 h-24 mx-auto mb-2">
                <Image
                  src="/studenta.jpg"
                  alt="Sarah Johnson"
                  fill
                  className="object-cover rounded-full"
                />
              </div>
              <h3 className="font-semibold">Hao Ming Hoa</h3>
              <p>Former education consultant with a passion for teaching.</p>
            </article>
            <article className="text-center">
              <div className="relative w-24 h-24 mx-auto mb-2">
                <Image
                  src="/studentb.jpg"
                  alt="Michael Chen"
                  fill
                  className="object-cover rounded-full"
                />
              </div>
              <h3 className="font-semibold">Bailu</h3>
              <p>
                Tech enthusiast with years of experience in education
                technology.
              </p>
            </article>
            <article className="text-center">
              <div className="relative w-24 h-24 mx-auto mb-2">
                <Image
                  src="/studentc.jpg"
                  alt="Emily Rodriguez"
                  fill
                  className="object-cover rounded-full"
                />
              </div>
              <h3 className="font-semibold">dilraba</h3>
              <p>Curriculum expert focused on creating engaging courses.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="py-12 text-center">
        <h2 className="text-2xl font-bold mb-4">Join Our Learning Community</h2>
        <p className="mb-6">
          Be part of our global community of learners and jumpstart your journey
          to mastering new skills.
        </p>
        <div className="space-x-4">
          <Link href="/courses" passHref>
            <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
              Explore Courses
            </button>
          </Link>
          <Link href="/contact" passHref>
            <button className="border border-blue-600 text-blue-600 px-6 py-2 rounded hover:text-blue-300 hover:border-blue-300">
              Contact Us
            </button>
          </Link>
        </div>
      </section>
    </main>
  );
}
