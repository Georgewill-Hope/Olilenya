"use client"

import { useForm, ValidationError } from "@formspree/react";

const Contact = () => {
  const [state, handleSubmit] = useForm(process.env.NEXT_PUBLIC_FORM);

  if (state.succeeded) {
    return (
      <div className="h-[50vh] w-full flex items-center justify-center px-2 lg:px-0">
        <p className="text-center text-lg lg:text-2xl">
          Thanks for contacting us{" "}
          <span className="text-2xl lg:text-4xl"> &#128522;</span>,
        </p>
      </div>
    );
  }
    return (
      <div
        id="contact"
        className="w-full min-h-[70vh] flex items-center justify-center"
      >
        <form onSubmit={handleSubmit} className="w-full">
          <h1 className="text-center mb-5 lg:text-xl">
            CO
            <span className="text-black font-semibold text-lg lg:text-2xl text-orange-500/70">
              NNE
            </span>
            CT{" "}
            <span className="text-black">
              W
              <span className="text-sky-500/70 text-xl lg:text-2xl font-semibold">
                IT
              </span>
              H
            </span>{" "}
            <span className="text-orange-500/70 ">ME</span>
            <span className="text-2xl md:text-3xl"> &#128522;</span>
          </h1>
          <div className="flex flex-col items-center justify-center gap-5 w-full px-2">
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Email"
              className="bg-sky-700/50 focus:bg-sky-700/30 h-10 w-full md:w-96 px-3 text-black outline-none rounded-lg focus:bg-kiola-blue/10"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
            <input
              id="name"
              type="text"
              name="name"
              placeholder="Full Name"
              className="bg-sky-700/50 focus:bg-sky-700/30 h-10 w-full md:w-96 px-3 text-black outline-none rounded-lg focus:bg-kiola-blue/10"
            />
            <ValidationError prefix="name" field="name" errors={state.errors} />
            <textarea
              id="message"
              name="message"
              placeholder="Message"
              className="bg-sky-700/50 focus:bg-sky-700/30 h-[30vh] md:h-[30vh] w-full md:w-96 p-3 text-black outline-none rounded-lg focus:bg-kiola-blue/10 resize-none"
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
            <button
              type="submit"
              disabled={state.submitting}
              className="bg-sky-700 hover:bg-sky-700/80 duration-700 outline-none w-full md:w-96 py-2 rounded-lg font-bold"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    );
};
export default Contact;
