import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMessage, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faTelegram } from "@fortawesome/free-brands-svg-icons";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact - E-Learning",
  description:
    "Get in touch with E-Learning. Reach out via form, phone, email, or Telegram for support and inquiries.",
  openGraph: {
    title: "Contact - E-Learning",
    description:
      "Get in touch with E-Learning. Reach out via form, phone, email, or Telegram for support and inquiries.",
    url: "https://homework004-alpha.vercel.app/contact",
    siteName: "E-Learning",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "E-Learning Contact",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact - E-Learning",
    description:
      "Get in touch with E-Learning. Reach out via form, phone, email, or Telegram for support and inquiries.",
    images: ["/og-image.jpg"],
  },
};

export default function Contact() {
  const contactMethods = [
    {
      icon: faPhone,
      title: "Call Us",
      description: "Mon-Fri from 8am to 5pm",
      value: "+855 (0) 99 246-866",
      href: "tel:+85599246866",
    },
    {
      icon: faMessage,
      title: "Email Us",
      description: "We’ll respond within 24 hours",
      value: "info.istad@gmail.com",
      href: "mailto:info.istad@gmail.com",
    },
    {
      icon: faTelegram,
      title: "Telegram",
      description: "Chat with our support team",
      value: "+855 (0) 99 246-866",
      href: "https://t.me/+85599246866",
    },
  ];

  return (
    <main className="min-h-screen">
      <section className="container mx-auto max-w-7xl py-12">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          <article className="flex flex-col">
            <h2 className="mb-4 text-2xl font-bold text-gray-900">
              Get in Touch
            </h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="first-name"
                    className="block text-sm font-medium text-gray-700">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="first-name"
                    placeholder="Enter your first name"
                    className="mt-1 w-full rounded-lg border border-gray-300 p-2.5 focus:border-blue-500 focus:ring-blue-500"
                    aria-required="true"
                  />
                </div>
                <div>
                  <label
                    htmlFor="last-name"
                    className="block text-sm font-medium text-gray-700">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="last-name"
                    placeholder="Enter your last name"
                    className="mt-1 w-full rounded-lg border border-gray-300 p-2.5 focus:border-blue-500 focus:ring-blue-500"
                    aria-required="true"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Enter your email"
                    className="mt-1 w-full rounded-lg border border-gray-300 p-2.5 focus:border-blue-500 focus:ring-blue-500"
                    aria-required="true"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700">
                    Phone (Optional)
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    placeholder="Enter your phone number"
                    className="mt-1 w-full rounded-lg border border-gray-300 p-2.5 focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  placeholder="Enter your message"
                  rows={4}
                  className="mt-1 w-full rounded-lg border border-gray-300 p-2.5 focus:border-blue-500 focus:ring-blue-500"
                  aria-required="true"
                />
              </div>
              <button
                type="submit"
                className="rounded-lg bg-blue-600 px-6 py-2.5 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
                Send Message
              </button>
            </form>
          </article>
          <article className="flex flex-col">
            <h2 className="mb-4 text-2xl font-bold text-gray-900">
              Our Location
            </h2>
            <figure className="relative flex-1 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3908.631478132766!2d104.899211875942!3d11.578254588623457!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x310951e96d257a6f%3A0x6b66703c5fc0c7cc!2sScience%20and%20Technology%20Advanced%20Development%20Co.%2C%20Ltd.!5e0!3m2!1sen!2skh!4v1747222104196!5m2!1sen!2skh"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="E-Learning Location Map"
                className="absolute inset-0 h-full w-full rounded-lg"
              />
            </figure>
          </article>
        </div>
      </section>

      <section className="container mx-auto max-w-7xl py-12">
        <header className="mb-8 text-center">
          <h1 className="mb-2 text-3xl font-bold text-gray-900">Contact Us</h1>
          <p className="text-lg text-gray-600">
            Have questions or need assistance? Reach out to our team, and we’ll
            respond promptly.
          </p>
        </header>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {contactMethods.map((method) => (
            <article
              key={method.title}
              className="rounded-lg bg-white p-6 shadow-md text-center">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 mx-auto">
                <FontAwesomeIcon
                  icon={method.icon}
                  className="text-blue-600"
                  size="lg"
                />
              </div>
              <h3 className="font-semibold text-gray-900">{method.title}</h3>
              <p className="text-gray-600">{method.description}</p>
              <a
                href={method.href}
                className="text-blue-600 hover:underline"
                aria-label={`Contact via ${method.title}`}>
                {method.value}
              </a>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
