import React from "react";
import ContactUs from "../components/ContactUs";

function TypoPrivacy() {
  return (
    <div className="w-10/12 mx-auto">
      <PrivacyPolicy />
      <TermsOfUses />
      <Accessability />
      <ContactUs />
    </div>
  );
}

export default TypoPrivacy;

const PrivacyPolicy = function () {
  const PrivacyPolicies = [
    {
      heading: "Introduction",
      text: "Welcome to Ahyliz Technologies. We are committed to protecting your privacy. This policy details the types of information we collect from our users, how we use it, and how we keep it secure.",
      keyPoints: [],
    },

    {
      heading: "Information Collection",
      text: "We collect information in the following ways",
      keyPoints: [
        "Information you provide when you register for an account, such as your name, email address, and telephone number.",
        "Information about your use of our services, including but not limited to, traffic data and other communication data.",
      ],
    },
    {
      heading: "Use of Information",
      text: "The information we collect is used to:",
      keyPoints: [
        "Provide, maintain, and improve our services.",
        "Send updates, security alerts, and support messages.",
        "Monitor and analyze trends and usage.",
      ],
    },
    {
      heading: "Data Sharing",
      text: "We do not share personal information with companies, organizations, or individuals outside of Ahyliz Technologies except in the following cases:",
      keyPoints: [
        "With your consent.",
        "For legal reasons, such as to meet any applicable law, regulation, legal process, or enforceable governmental request.",
      ],
    },
    {
      heading: "Security",
      text: "We work hard to protect Ahyliz Technologies and our users from unauthorized access to or unauthorized alteration, disclosure, or destruction of information we hold.",
      keyPoints: [],
    },
    {
      heading: "changes",
      text: "Our Privacy Policy may change from time to time. We will post any privacy policy changes on this page.",
      keyPoints: [],
    },
    {
      heading: "Contact U",
      text: "If you have any questions about this Privacy Policy, please contact us at contact@ahyliz.com",
      keyPoints: [],
    },
  ];
  return (
    <div>
      <h1 className="text-xl font-semibold capitalize">privacy policy</h1>

      <div className="w-11/12 md:w-3/4 me-auto">
        {PrivacyPolicies.map((policy, i) => (
          <div key={i}>
            <h1 className="text-lg font-medium inline pe-2">
              {i + 1}. {policy.heading}
            </h1>
            <p className="inline">{policy.text}</p>

            <ul className="my-3 ms-4">
              {policy.keyPoints.map((point, i) => (
                <li className="list-disc" key={i}>
                  {point}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

const termsOfUses = [
  "Introduction By using our website (the 'Service') operated by Ahyliz Technologies, you agree to be bound by these terms of use. Please read them carefully.",
  "Using Our Services You must follow any policies made available to you within the Service. Do not misuse our Services, for example, do not interfere with our Services or try to access them using a method other than the interface and the instructions that we provide.",
  " Your Content in Our Services You retain ownership of any intellectual property rights that you hold in that content. When you upload or otherwise submit content to our Services, you give Ahyliz Technologies a worldwide license to use, host, store, reproduce, modify, create derivative works, communicate, publish, publicly perform, publicly display and distribute such content.",
  "About Software in Our Services When a Service requires or includes downloadable software, this software may update automatically on your device once a new version or feature is available.",
  " Modifying and Terminating Our Services We are constantly changing and improving our Services. We may add or remove functionalities or features, and we may suspend or stop a Service altogether.",
  " Liability for Our Services When permitted by law, Ahyliz Technologies will not be responsible for lost profits, revenues, or data.",
  "About these Terms We may modify these terms or any additional terms that apply to a Service. You should look at the terms regularly.",
];
const TermsOfUses = function () {
  return (
    <div className="my-8 w-11/12 md:w-3/4 me-auto">
      <h1 className="text-xl capitalize font-semibold">terms of use</h1>
      {termsOfUses.map((term, i) => (
        <li className="list-none my-2 " key={i}>
          {i + 1}. {term}
        </li>
      ))}
    </div>
  );
};

const accStatements = [
  {
    point:
      "1. Commitment Ahyliz Technologies is committed to ensuring digital accessibility for people with disabilities. We are continually improving the user experience for everyone and applying the relevant accessibility standards.",
    keyPoints: [],
  },
  {
    point:
      "2. Feedback We welcome your feedback on the accessibility of our website. Please let us know if you encounter accessibility barriers on Ahyliz Technologies: contact@ahyliz.com",
    keyPoints: [],
  },
  {
    point:
      "3. Measures to Support Accessibility Ahyliz Technologies takes the following measures to ensure accessibility:",
    keyPoints: [
      "Including accessibility as part of      our mission statement.",
      "Integrating accessibility into our      procurement practices.",
      "Providing continual accessibility      training for our staff.",
    ],
  },
  {
    point:
      "4. Compatibility with Browsers and Assistive Technology Our goal is to ensure compatibility with the latest version of major browsers and assistive technologies.",
    keyPoints: [],
  },
];
const Accessability = function () {
  return (
    <div className="md:w-3/4 w-11/12 my-8 me-auto mb-28">
      <h1 className="text-xl capitalize font-semibold my-3">
        Accessibility Statement
      </h1>
      <div className="flex flex-col gap-4">
        {accStatements.map((statement, i) => (
          <React.Fragment key={i}>
            <p>{statement.point}</p>
            {statement.keyPoints.map((p, i) => (
              <li key={i}>{p}</li>
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};
