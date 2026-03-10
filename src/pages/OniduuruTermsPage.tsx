import React, { useEffect, useState } from "react";

const OniduuruTermsPage = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [accepted, setAccepted] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      const progress =
        (document.documentElement.scrollTop / totalHeight) * 100;

      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const downloadPDF = () => {
    window.print();
  };

  return (
    <div className="bg-gray-50 min-h-screen">

      {/* Scroll Progress Bar */}
      <div
        className="fixed top-0 left-0 h-1 bg-blue-600 z-50"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* HERO */}
      <div className="bg-[#0f172a] text-white py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">
           ∯ Oniduuru Marketplace Terms & Conditions
          </h1>
          <p className="text-gray-300 text-lg">
            Legal terms governing the use of the Oniduuru Marketplace platform
            operated by Shoft-Africa Ltd.
          </p>

          <button
            onClick={downloadPDF}
            className="mt-6 bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition"
          >
            Download Terms (PDF)
          </button>
        </div>
      </div>

      {/* PAGE LAYOUT */}
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* SIDEBAR */}
        <aside className="hidden md:block sticky top-24 h-fit">
          <div className="bg-white rounded-lg shadow p-5">
            <h3 className="font-semibold mb-4">Contents</h3>

            <ul className="space-y-3 text-sm text-gray-600">
              <li>
                <a href="#market" className="hover:text-blue-600">
                  Market Engagements
                </a>
              </li>

              <li>
                <a href="#hiring" className="hover:text-blue-600">
                  Hiring Possibilities
                </a>
              </li>

              <li>
                <a href="#wallet" className="hover:text-blue-600">
                  Wallet Transactions
                </a>
              </li>

              <li>
                <a href="#conclusion" className="hover:text-blue-600">
                  Conclusion
                </a>
              </li>
            </ul>
          </div>
        </aside>

        {/* MAIN CONTENT */}
        <main className="md:col-span-3 space-y-12">

          {/* SECTION */}
          <section id="market">
            <h2 className="text-2xl font-bold mb-4">
              Section 1: Market Engagements
            </h2>

            <p className="text-gray-600 leading-relaxed">
              The Oniduuru Marketplace platform enables connections between
              talents and scouters seeking professional engagements. All
              interactions on the platform must follow the operational and
              regulatory guidelines established by the Oniduuru Team and
              Shoft-Africa Ltd.
            </p>
          </section>

          {/* Hiring */}
          <section id="hiring" className="space-y-6">
            <h2 className="text-2xl font-bold">
              i) Hiring Possibilities
            </h2>

            <div>
              <h3 className="font-semibold text-lg mb-2">
                Wallet Profile Requirement
              </h3>

              <p className="text-gray-600 leading-relaxed">
                To participate on the Oniduuru Marketplace platform,
                all users must create a wallet profile.
                Visibility as a talent available for hire or as
                a scouter seeking to hire is strictly conditional
                upon successful creation and approval of this wallet profile.
              </p>

              <p className="text-gray-600 mt-3">
                Wallet profiles are reviewed by the Oniduuru Admin Team
                before activation on the platform.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">
                Indemnity
              </h3>

              <ul className="list-disc ml-6 text-gray-600 space-y-2">
                <li>
                  Disputes or misunderstandings between talents and scouters.
                </li>

                <li>
                  Payment disagreements or contractual conflicts.
                </li>

                <li>
                  Any unfortunate incidents or miscommunication between users.
                </li>

                <li>
                  Risks arising from marketplace engagements.
                </li>
              </ul>

              <p className="text-gray-600 mt-3">
                The Oniduuru Team and Shoft-Africa Ltd bear no responsibility
                for outcomes resulting from user engagements.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">
                Market Monitoring & Compliance
              </h3>

              <p className="text-gray-600">
                Marketplace activities are monitored by dedicated security
                and compliance teams operating in alignment with the
                Nigerian Federal Constitution.
              </p>
            </div>
          </section>

          {/* Wallet */}
          <section id="wallet" className="space-y-6">
            <h2 className="text-2xl font-bold">
              ii) Wallets & Transactions
            </h2>

            <div>
              <h3 className="font-semibold text-lg mb-2">
                Funds Deposit
              </h3>

              <p className="text-gray-600">
                Deposits are processed exclusively via Paystack-Titan Checkout.
                Virtual accounts may be assigned for frequent users.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">
                Wallet-to-Wallet Transfers
              </h3>

              <ul className="list-disc ml-6 text-gray-600 space-y-2">
                <li>An engagement must exist.</li>
                <li>The talent must confirm work completion.</li>
                <li>The Market Hire ID validates the payment.</li>
              </ul>

              <p className="text-gray-600 mt-2">
                These transfers are free of charge.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">
                Wallet-Bank Withdrawals
              </h3>

              <p className="text-gray-600">
                Withdrawals require compliance approval by the
                Oniduuru Admin Team before Paystack transfers are executed.
              </p>
            </div>
          </section>

          {/* CONCLUSION */}
          <section id="conclusion">
            <h2 className="text-2xl font-bold mb-4">
              III) Conclusion
            </h2>

            <p className="text-gray-600 leading-relaxed mb-4">
              By accessing and using the Oniduuru Marketplace platform,
              users agree to all Terms and Conditions outlined herein.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              Platform activities remain subject to oversight by
              Shoft-Africa Ltd and relevant compliance authorities.
            </p>

            <p className="text-gray-600 leading-relaxed">
              Oniduuru Team and Shoft-Africa Ltd reserve the right
              to modify these terms at any time.
            </p>
          </section>

          {/* ACCEPT TERMS */}
          <div className="border-t pt-10 mt-10">
            <label className="flex items-center gap-3 text-gray-700">
              <input
                type="checkbox"
                checked={accepted}
                onChange={() => setAccepted(!accepted)}
                className="w-5 h-5"
              />

              I have read and agree to the Oniduuru Marketplace
              Terms & Conditions
            </label>

            <button
              disabled={!accepted}
              className={`mt-5 px-6 py-3 rounded-lg font-semibold ${
                accepted
                  ? "bg-blue-600 text-white hover:bg-blue-700"
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"
              }`}
            >
              Continue
            </button>
          </div>
        </main>
      </div>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-gray-400 text-center py-6">
        © {new Date().getFullYear()} Oniduuru Marketplace • Shoft-Africa Ltd
      </footer>
    </div>
  );
};

export default OniduuruTermsPage;