import React from "react";
import "../App.css";

const Faq = () => {
  return (
    <>
      <div className="container faq-text py-3">
        <h2>FAQ Best Practices</h2>
        <p>
          As you consider compiling a set of questions, it might not be
          immediately clear where to start. By understanding a few best
          practices, it’s very manageable.
        </p>

        <h3>
          Intuitively group categories to make a much better user experience
        </h3>
        <p>
          By organizing your questions into natural categories a users can
          quickly navigate to what they need. Imagine the same process as an
          information architecture.
        </p>

        <h3>Write your question from the perspective of the customer</h3>
        <p>
          This helps the user connect with the question more easily and it helps
          you to provide relevant information more clearly.
        </p>

        <h3>Use language that your user will understand</h3>
        <p>
          Following copywriting 101 standards, always use language and
          terminology that your user understands so that they will connect with
          the dialogue and your brand. Never use terminology or complex
          ‘industry speak’ that your user might not understand
        </p>

        <h3>Use your brand personality and Tone of Voice</h3>
        <p>
          Your FAQ is an extension of customer services, so this is a space
          where you want to show users how great you are. As with all the
          content on your website, use your personality and connect with your
          audience. Every piece of content is an opportunity to represent your
          brand.
        </p>

        <h3>
          Write your FAQ as concise, informative and directly answer the
          question
        </h3>
        <p>
          The point of an FAQ is to answer questions, but in a concise way that
          gets the message across quickly. The user doesn’t want to read a 5,000
          word in-depth guide to tell them how to return a parcel, including
          ‘what is a parcel’ and ‘why a parcel is important’. Answer the
          question directly and to the point. Start out with a ‘yes’ or ‘no’
          question if relevant and construct your narrative as if you were
          replying to someone asking the question. Save the long-form responses
          for a knowledge base.
        </p>

        <h3>Present your FAQ in the most visually organized manner</h3>
        <p>
          Using accordions with FAQ is one way to present a lot of information
          in an organized format. Accordions also have the benefit of keeping a
          user on one page. Having to click through several sections to find a
          quick answer causes friction.
        </p>
        <h3>Feature top questions at the top of the page</h3>
        <p>
          Pin top questions on the page to create an information hierarchy for
          the most commonly asked questions.
        </p>

        <h3>Keep information up to date</h3>
        <p></p>
        <h2>Where to find questions for FAQ</h2>

        <p>
          here do you start writing your questions? Let your audience tell you.
        </p>

        <h3>Customer services:</h3>
        <p>
          The first stage for researching your FAQ starts with your
          customer-facing services and sales teams. Speak to your customer
          service departments; they understand what issues your users are having
          more than anyone.
        </p>
        <h3>Site search:</h3>
        <p>
          Check the keywords in your site search to see what users are searching
          for.
        </p>

        <h3>Google search console:</h3>
        <p>
          {" "}
          Check queries in GSC to see what phrases have clicks. Filter by
          question modifiers such as ‘how’ or ‘can.’
        </p>
        <h3>People Also Ask:</h3>
        <p>
          Check the PAA box on SERPs for keywords surrounding your products and
          categories — this will give you strong clues for potential FAQs .
        </p>

        <h3>Quora and other questions sites:</h3>
        <p>
          What did we do before Quora? Search for keywords and topics relevant
          to your service/brand and see what questions users are asking.
        </p>

        <h3> Keyword research:</h3>
        <p>
          Searching for questions under your head categories will also help you
          to surface more FAQs to answer...
        </p>
      </div>
    </>
  );
};

export default Faq;
