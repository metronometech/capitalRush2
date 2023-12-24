"use client"
import React, { useEffect } from "react";

const Terms = () => {
  useEffect(() => {
    const isTermsLoad = localStorage.getItem("isTermsLoad") !== "false";

    if (isTermsLoad) {
      localStorage.setItem("isTermsLoad", "false");
      window.location.reload();
    }

    setTimeout(() => {
      localStorage.removeItem("isTermsLoad");
    }, 6000);
    
  });
  return (
    <div className=" flex flex-col items-center mx-1 lg:mx-4 mb:mx-10 py-20">
      <h1 className=" font-poppins text-[24px] mb:text-[48px] text-white font-bold z-40 flex-shrink-0">
        {/* Version - */}
        <span className="font-poppins  bg-gradient-to-r from-[#F67408] to-[#FAF51C] bg-clip-text text-transparent">
          Terms and Conditions
        </span>
      </h1>
      <p className=" self-start mx-10  text-left  z-30 text-white my-6 font-quicksand opacity-70 text-[12px] mb:text-[20px]">
        These Terms of Use ("Terms") govern your access to and use of gaming platform ‘Capital Rush' and any expansion packs ("Game") available as a mobile application and website at the URL [www.capitalrush.io] (“Platform”) owned and operated by Metronome Technologies Private Limited (“Company”). By accessing the Platform and using the Game, you agree to these Terms of Service (“Terms”).  Your access to and use of the Game is conditioned on your acceptance of and compliance with these Terms. Therefore, please read these Terms and Privacy Policy carefully before using or registering on the Platform. If you do not agree with these Terms, please do not access the Platform and use the Service. These Terms along with the Privacy Policy constitute a binding agreement and an electronic record under the Information Technology Act, 2000 and the rules thereunder and the amended provisions pertaining to electronic records under various Indian statutes.
      </p>
      {/* <p className=" self-start mx-10  text-left  z-30 text-white my-6 font-quicksand opacity-70 text-[12px] mb:text-[20px]">
        For Your convenience, We have summarised some of the key clauses and
        linked them to the relevant section. Bear in mind that the summary
        highlights just the key aspect of the relevant section and not the
        entire section itself. So please refer to the section itself to get the
        full picture.
      </p> */}
      {/* <ul className=" self-start mx-10 flex flex-col gap-3">
        <li className="  text-white font-quicksand opacity-70 text-[12px] mb:text-[20px] pl-4 ">
          You may only use Our web portal, partner websites, mobile applications
          and other portals (collectively, the “Platform”), once You agree to
          abide by the terms and conditions as laid down in this Agreement. To
          better understand the scope of these Terms of Use, how they may be
          updated, and the meaning of the various words used in these Terms of
          Use please refer to the Introduction section of these Terms of Use.
        </li>
        <li className="  text-white font-quicksand opacity-70 text-[12px] mb:text-[20px] pl-4 ">
          These terms & conditions document applies to any product developed by
          Metronome Technologies Private Limited or any subsidiaries. Currently,
          the product developed by them is the “Capital Rush” game, so Capital
          Rush and Metronome Technologies Private Limited (Metronome) will be
          termed as one.
        </li>
        <li className="  text-white font-quicksand opacity-70 text-[12px] mb:text-[20px] pl-4 ">
          Only people of sound mind who are above 18 years of age may use this
          Platform.
        </li>
        <li className="  text-white font-quicksand opacity-70 text-[12px] mb:text-[20px] pl-4 ">
          You may register on the Platform and add cash to Your account by
          following the registration procedure laid down in the section on
          Nature and use of the Platform.
        </li>
        <li className="  text-white font-quicksand opacity-70 text-[12px] mb:text-[20px] pl-4 ">
          Please note that Your User Details like name, position & score will be
          accessible to other users on the Platform.
        </li>
        <li className="  text-white font-quicksand opacity-70 text-[12px] mb:text-[20px] pl-4 ">
          The rules governing Your participation in the Contests available on
          Our Platform. Further, each contest may be subject to its own Game
          Rules and Code of Conduct.{" "}
        </li>
        <li className="  text-white font-quicksand opacity-70 text-[12px] mb:text-[20px] pl-4 ">
          Please note that We have the sole discretion to determine the terms
          applicable on any Contest including the Awards to be given in any
          Contest. Further, the Designated Amount paid for any contest is
          non-refundable and may only be refunded under the circumstances stated
          in Our Return, Refund and Cancellation policy.
        </li>
        <li className="  text-white font-quicksand opacity-70 text-[12px] mb:text-[20px] pl-4 ">
          Winnings may be withdrawn by You from Your account, subject to the
          completion of KYC verification and account validation and will be
          subject to TDS deductions as per applicable law.
        </li>
        <li className="  text-white font-quicksand opacity-70 text-[12px] mb:text-[20px] pl-4 ">
          Only skill-based contests are available on Our Platform. We further
          request that You follow the precautions laid down in the user
          agreement.
        </li>
        <li className="  text-white font-quicksand opacity-70 text-[12px] mb:text-[20px] pl-4 ">
          While using the various communication channels provided on Our
          Platform You must abide by rules stated in Our Community rules and
          code of conduct section.{" "}
        </li>
        <li className="  text-white font-quicksand opacity-70 text-[12px] mb:text-[20px] pl-4 ">
          Circumstances under which Your access to the Platform or this
          Agreement may be terminated are stated in the Termination section.
        </li>
        <li className="  text-white font-quicksand opacity-70 text-[12px] mb:text-[20px] pl-4 ">
          Your use of this Platform is completely at Your own risk. We disclaim
          all warranties in relation to the Platform. To understand more please
          refer to Our Disclaimer section.
        </li>
        <li className="  text-white font-quicksand opacity-70 text-[12px] mb:text-[20px] pl-4 ">
          Any dispute between You and Us will be resolved by way of Arbitration
          which will be conducted in Jaipur by a sole arbitrator appointed by
          Us. For further details refer to Our Governing law and dispute
          resolution section.
        </li>
        <li className="  text-white font-quicksand opacity-70 text-[12px] mb:text-[20px] pl-4 ">
          If You have any complaints or grievances over any of the Services
          offered on the Platform, please contact at hello@capitalrush.gg
        </li>
      </ul> */}
      <p className=" self-start mx-10  text-left  z-30 text-white my-6 font-quicksand font-semibold opacity-70 text-[12px] mb:text-[20px]">
        1.	Eligibility and Access
      </p>
      {/* <p className=" self-start mx-10 mb:-mt-1 my-1 text-left  z-30 text-white font-quicksand opacity-70 text-[12px] mb:text-[20px]">
        1.1. Metronome Technologies Private Limited is an Indian company
        incorporated under the Companies Act, 2013, that operates a mobile
        gaming portal in India, which offers various skill and learning based
        digital contests developed by us through its web portal https:// partner
        websites, mobile applications and other portals. (collectively, the{" "}
        <b>“Platform” </b>).
      </p> */}
      <p className=" self-start mx-10 mb:-mt-1 my-1 text-left  z-30 text-white font-quicksand opacity-70 text-[12px] mb:text-[20px]">
        1.2	In the event the Game is accessed by an individual under the age of 18 (eighteen) years (“Minor”), such access and participation shall be deemed to be that of the parent or legal guardian (“Guardian”) of such Minor and the term “You” “User” shall refer to the Guardian in such cases. Minors may only access the Game / Platform under the supervision of an adult. The Guardian hereby represents and warrants that the Guardian is the legal guardian of such Minor accessing the Platform; and that the Guardian shall ensure that the Minor uses the Platform only with the permission and authorization from and under the strict supervision and guidance of the Guardian.
      </p><br/>
      <p className=" self-start mx-10 mb:-mt-1 my-1 text-left  z-30 text-white font-quicksand opacity-70 text-[12px] mb:text-[20px]">
        1.3	The Game is a dynamic investment strategy game that merges financial education with engaging gameplay. The rules of the game are available below in the relevant sections.  The Game is always evolving and the form and nature of the Game may change from time to time without prior notice to you. In addition, the Company may stop (permanently or temporarily) providing the Game (or any features within the Game) to you or to users generally and may not be able to provide you with prior notice. The Company also retains the right to create limits on use, storage and features at its sole discretion at any time without prior notice to you.
      </p><br/>
      <p className=" self-start mx-10 mb:-mt-1 my-1 text-left  z-30 text-white font-quicksand opacity-70 text-[12px] mb:text-[20px]">
        1.4	In consideration for the Company granting you access to and use of the Games, you agree that the Company and its affiliates, group companies, third party providers and partners may place advertisements on the Game or in connection with the display of any content. The types and extent of advertising on the Platform are subject to change.
      </p><br/>
      {/* <p className=" self-start mx-10 mb:-mt-1 my-1 text-left  z-30 text-white font-quicksand opacity-70 text-[12px] mb:text-[20px]">
        1.5 . If at any time the User does not accept or agree to any terms of
        this Agreement, on a continuing basis in relation to any of the Services
        offered on the Platform, they should not access the Platform.
      </p>
      <p className=" self-start mx-10 mb:-mt-1 my-1 text-left  z-30 text-white font-quicksand opacity-70 text-[12px] mb:text-[20px]">
        1.6 . Capital Rush reserves the right to periodically review, update,
        change or replace any part of these Terms of Use or other terms of the
        Agreement as it may consider appropriate at its sole and absolute
        discretion
      </p>
      <p className=" self-start mx-10 mb:-mt-1 my-1 text-left  z-30 text-white font-quicksand opacity-70 text-[12px] mb:text-[20px]">
        1.7 . Any changes to these Terms of Use will be posted on this page
        wherever appropriate. The Users must visit this page periodically for
        updates on the Terms of Use applicable to their use of the Platform.
      </p>
      <p className=" self-start mx-10 mb:-mt-1 my-1 text-left  z-30 text-white font-quicksand opacity-70 text-[12px] mb:text-[20px]">
        1.8 . Any Users’ continued usage of the Platform after any such update,
        change, replacement or modification in the Agreement constitutes their
        valid consent to such changes.
      </p> */}
      <p className=" self-start mx-10  text-left  z-30 text-white my-6 font-quicksand font-semibold opacity-70 text-[12px] mb:text-[20px]">
        2. Privacy
      </p>
      <p className=" self-start mx-10 mb:-mt-1 my-1 text-left  z-30 text-white font-quicksand opacity-70 text-[12px] mb:text-[20px]">
        Any information that you provide to the Company is subject to the privacy policy as updated on www.capitalrush.io , which governs the collection and use of your information.
      </p>
      {/* <p className=" self-start mx-10 mb:-mt-1 my-1 text-left  z-30 text-white font-quicksand opacity-70 text-[12px] mb:text-[20px]">
        1.9.2 . <b>“Applicable Law” </b> means all laws, statutes, common law,
        regulations, ordinances, codes, rules, guidelines, orders, permits,
        tariffs and approvals, including those relating to health and safety, of
        any governmental authority or self-regulatory guideline that may apply
        to the Users or is related to the subject matter of this Agreement as
        applicable in the territory of India.
      </p>
      <p className=" self-start mx-10 mb:-mt-1 my-1 text-left  z-30 text-white font-quicksand opacity-70 text-[12px] mb:text-[20px]">
        1.9.3 . <b>“Contest” </b> is a skill based competition offered by
        Capital Rush on the Platform in which Users compete in a tournament
        battle by playing Capital Rush game on the Platform. Contests can be
        either ‘paid’ or ‘free to play’. Paid Contests require the Users to pay
        a Designated Amount for participation, whereas free to play Contests are
        open to all Users without requirement of any monetary payment.
      </p>
      <p className=" self-start mx-10 mb:-mt-1 my-1 text-left  z-30 text-white font-quicksand opacity-70 text-[12px] mb:text-[20px]">
        1.9.4 .<b> “Balance” </b> is the credit (either in the form of cash or
        Capital Gold) available in an Account and includes amount added by a
        User through Deposits or/and earned through Winnings by participating in
        Contests on the Platform.
      </p>
      <p className=" self-start mx-10 mb:-mt-1 my-1 text-left  z-30 text-white font-quicksand opacity-70 text-[12px] mb:text-[20px]">
        1.9.5 .<b>“Deposit” </b> is the amount added by the User to his/her
        Account through his/her preferred payment mode (e-wallet, debit/credit
        cards, UPI/BHIM, net banking). The Deposit conversion ratio is INR. 1/-
        (Rupees One Only) = INR 1 (one).
      </p>
      <p className=" self-start mx-10 mb:-mt-1 my-1 text-left  z-30 text-white font-quicksand opacity-70 text-[12px] mb:text-[20px]">
        1.9.6 .<b> “Designated Amount” </b> refers to the amount which Users pay
        in the form of cash Balance available in their Account to participate in
        a Contest on the Platform as their respective contribution to the Prize
        Money Pool.
      </p>
      <p className=" self-start mx-10 mb:-mt-1 my-1 text-left  z-30 text-white font-quicksand opacity-70 text-[12px] mb:text-[20px]">
        1.9.7 . <b>“Person” </b> shall mean any natural person, limited or
        unlimited liability company, corporation, partnership (whether limited
        or unlimited), proprietorship, Hindu undivided family, trust, union,
        association, government or any agency or political subdivision thereof
        or any other entity that may be treated as a person under the Applicable
        Law.
      </p>
      <p className=" self-start mx-10 mb:-mt-1 my-1 text-left  z-30 text-white font-quicksand opacity-70 text-[12px] mb:text-[20px]">
        1.9.8 . <b>“Prize Money Pool” </b> is the actual or projected amount
        that is to be distributed amongst the winner(s) of the Contest and is
        declared at the start of the Contest.
      </p>
      <p className=" self-start mx-10 mb:-mt-1 my-1 text-left  z-30 text-white font-quicksand opacity-70 text-[12px] mb:text-[20px]">
        1.9.9.<b> “Sponsored Content” </b> means content distinct from other
        regular editorial content provided by Capital Rush, and displayed on the
        Platform in the form of audio, video, text and/or image media which
        supports a third party’s brand message, promotional offers, discounts
        and/or views that are readily identifiable to belong to a third-party
        upfront through distinct and distinguishable font, colour, display
        schemes and/or usage of disclaiming words (such as “Ad”, “Powered by”,
        “Sponsored by”, “With”, “Advertorial” and such other phrase of similar
        meaning)
      </p>
      <p className=" self-start mx-10 mb:-mt-1 my-1 text-left  z-30 text-white font-quicksand opacity-70 text-[12px] mb:text-[20px]">
        1.9.10. <b>“Sponsored Content Partner”</b> means a User engaged with Us
        for the display of Sponsored Content on the Platform.
      </p>
      <p className=" self-start mx-10 mb:-mt-1 my-1 text-left  z-30 text-white font-quicksand opacity-70 text-[12px] mb:text-[20px]">
        1.9.11 .<b> “Capital Gold” </b>is an award in the form of digital
        currency that can be used to get some premium services in the game. The
        use cases and winning method will be available on the platform and
        subject to change periodically and is at the sole discretion of the
        company.
      </p>
      <p className=" self-start mx-10 mb:-mt-1 my-1 text-left  z-30 text-white font-quicksand opacity-70 text-[12px] mb:text-[20px]">
        1.9.12 . <b>“Winnings” </b> are awards (either in the form of cash,
        Capital Gold or promotional gifts) given to one or more User(s) as per
        pre-declared format as a distribution of the Prize Money Pool for
        winning and/or ranking as a top performer in a particular Contest on the
        Platform.
      </p> */}
      <p className=" self-start mx-10  text-left  z-30 text-white my-6 font-quicksand font-semibold opacity-70 text-[12px] mb:text-[20px]">
        3.	User Account, Passwords and Security
      </p>
      <p className=" self-start mx-10 mb:-mt-1 my-1 text-left  z-30 text-white font-quicksand opacity-70 text-[12px] mb:text-[20px]">
        3.1	In order to use the Game, you will have to register on the Platform by providing certain details about yourself, including your name, email address and such other details as may be required and create an account (“Account”). You may register on the Platform by logging into your Account with your credentials from certain third-party email networks or social networking sites. You confirm that you are the owner of any such third-party account and that you are entitled to disclose your third-party account login information to the Company. You authorize the Company to collect your authentication information, and other information that may be available on or through the third-party account consistent with your applicable settings and instructions. The Company reserves the right to refuse access to the Game to new users or to terminate access granted to existing users at any time without according any reasons for doing so. You shall not have more than one active Account on the Platform. Additionally, you are prohibited from selling, trading, or otherwise transferring your Account to another party.
      </p><br/>
      <p className=" self-start mx-10 mb:-mt-1 my-1 text-left  z-30 text-white font-quicksand opacity-70 text-[12px] mb:text-[20px]">
        3.2	You shall ensure and confirm that the Account information provided by you is complete, accurate and up-to-date. If there is any change in the Account information, you shall promptly update your Account information on the Platform. If you provide any information that is untrue, inaccurate, not current or incomplete (or becomes untrue, inaccurate, not current or incomplete), or if the Company has reasonable grounds to suspect that such information is untrue, inaccurate, not current or incomplete, the Company has the right to suspend or terminate your Account and refuse any and all current or future use of the Game (or any portion thereof) at its discretion, in addition to any right that the Company may have against you at law or in equity, for any misrepresentation of information provided by you.
      </p><br/>
      <p className=" self-start mx-10 mb:-mt-1 my-1 text-left  z-30 text-white font-quicksand opacity-70 text-[12px] mb:text-[20px]">
        3.3	You are responsible for maintaining the confidentiality of the Account information, safeguarding the password or credentials that you use to access the Game and for any activities or actions under your Account. You are encouraged to use "strong" passwords (passwords that use a combination of upper and lower-case letters, numbers and symbols) with your Account and with other accounts that you may connect to your Account (such as Facebook, Twitter or your email). You agree to (a) immediately notify the Company of any unauthorized use of your Account information or any other breach of security, and (b) ensure that you exit from your Account at the end of each session. The Company cannot and will not be liable for any loss or damage arising from your failure to comply with the above requirements. Further, the Company will not be liable for any loss that you may incur as a consequence of unauthorized use of your Account either with or without your knowledge.
      </p><br/>
      <p className=" self-start mx-10 mb:-mt-1 my-1 text-left  z-30 text-white font-quicksand opacity-70 text-[12px] mb:text-[20px]">
        3.4	You may be held liable for losses incurred by the Company or any other user of or visitor of the Platform due to authorized or unauthorized use of your Account as a result of your failure in keeping Your Account information secure and confidential.
      </p><br/>
      <p className=" self-start mx-10  text-left  z-30 text-white my-6 font-quicksand font-semibold opacity-70 text-[12px] mb:text-[20px]">
        4.	Acceptable Use
      </p>
      <p className=" self-start mx-10 mb:-mt-1 my-1 text-left  z-30 text-white font-quicksand opacity-70 text-[12px] mb:text-[20px]">
        4.1	In connection with the use of the Game and Platform, you agree that you will not:
      </p>
      <ul className=" self-start mx-10 flex flex-col gap-3">
        <li className="  text-white font-quicksand opacity-70 text-[12px] mb:text-[20px] pl-4 ">
          violate any law, regulation, or court order;
        </li>
        <li className="  text-white font-quicksand opacity-70 text-[12px] mb:text-[20px] pl-4 ">
          violate, infringe, or misappropriate the intellectual property, patent, trademark, copyright privacy, publicity, moral or "droit moral," or other legal or proprietary rights of any third party;
        </li>
        <li className="  text-white font-quicksand opacity-70 text-[12px] mb:text-[20px] pl-4 ">
          take any action (even if requested by another) that is, or submit, host, post, display, upload, modify, publish, transmit, update, share, or communicate anything that is, or that incites or encourages, action that is, explicitly or implicitly: illegal, harmful, abusive, harassing, threatening, hateful, racially or ethnically objectionable, derogatory, harmful to any reputation, disparaging, defamatory, libelous, pornographic, indecent, profane, obscene, paedophilic or otherwise objectionable (including nudity), blasphemous, invasive of another's privacy, or relating or encouraging money laundering or gambling or an online game that causes user harm or promoting enmity between different groups on the grounds of religion or caste with the intent to incite violence;
        </li>
        <li className="  text-white font-quicksand opacity-70 text-[12px] mb:text-[20px] pl-4 ">
          harms minors in anyway;
        </li>
        <li className="  text-white font-quicksand opacity-70 text-[12px] mb:text-[20px] pl-4 ">
          send advertising or commercial communications, including spam, or any other unsolicited or unauthorized communications;
        </li>
        <li className="  text-white font-quicksand opacity-70 text-[12px] mb:text-[20px] pl-4 ">
          advertise or surrogate advertise or promote an online game that is not a permissible online game, or any online gaming intermediary offering such an online game
        </li>
        <li className="  text-white font-quicksand opacity-70 text-[12px] mb:text-[20px] pl-4 ">
          send communication that deceives or misleads the addressee about the origin of such messages or communicates any information which is offensive or menacing in nature;
        </li>
        <li className="  text-white font-quicksand opacity-70 text-[12px] mb:text-[20px] pl-4 ">
         engage in spidering or harvesting, or participate in the use of software, including spyware, designed to collect data from the Platform, including from any user of the Game;
        </li>
        <li className="  text-white font-quicksand opacity-70 text-[12px] mb:text-[20px] pl-4 ">
         transmit any virus, other computer instruction, or technological means intended to, or that may, disrupt, damage, or interfere with the use of computers or limit the functionality of any computer resource or related systems;
        </li>
        <li className="  text-white font-quicksand opacity-70 text-[12px] mb:text-[20px] pl-4 ">
         stalk, harass, threaten, or harm any third party;
        </li>
        <li className="  text-white font-quicksand opacity-70 text-[12px] mb:text-[20px] pl-4 ">
       impersonate any third party;
        </li>
        <li className="  text-white font-quicksand opacity-70 text-[12px] mb:text-[20px] pl-4 ">
          participate in any fraudulent or illegal activity, including phishing, money laundering, or fraud;
        </li>
        <li className="  text-white font-quicksand opacity-70 text-[12px] mb:text-[20px] pl-4 ">
          use any means to scrape or crawl any part of the Platform;
        </li>
        <li className="  text-white font-quicksand opacity-70 text-[12px] mb:text-[20px] pl-4 ">
          access, tamper with any content, computer systems, or the technical delivery systems of the Platform or its service providers;
        </li>
        <li className="  text-white font-quicksand opacity-70 text-[12px] mb:text-[20px] pl-4 ">
         probe, scan, or test the vulnerability of any system or network or breach or circumvent any security or authentication measures;
        </li>
        <li className="  text-white font-quicksand opacity-70 text-[12px] mb:text-[20px] pl-4 ">
         access or search or attempt to access or search the Game by any means (automated or otherwise) other than through currently available, published interfaces that are provided on the Platform (and only pursuant to these Terms);
        </li>
        <li className="  text-white font-quicksand opacity-70 text-[12px] mb:text-[20px] pl-4 ">
        attempt to circumvent any technological measure implemented by the Company, any of its service providers, or any other third party (including another user) to protect the Company, the Platform, users or any other third party;
        </li>
        <li className="  text-white font-quicksand opacity-70 text-[12px] mb:text-[20px] pl-4 ">
         access the Platform to obtain information to build a similar or competitive application, or service;
        </li>
        <li className="  text-white font-quicksand opacity-70 text-[12px] mb:text-[20px] pl-4 ">
        attempt to decipher, decompile, disassemble, or reverse engineer any of the software or other underlying code used as part of the Platform;
        </li>
        <li className="  text-white font-quicksand opacity-70 text-[12px] mb:text-[20px] pl-4 ">
         send display, upload, modify, publish, transmit, store, update or share communication that belongs to another person and to which you do not have any right;
        </li>
        <li className="  text-white font-quicksand opacity-70 text-[12px] mb:text-[20px] pl-4 ">
          send display, upload, modify, publish, transmit, store, update or share any information in the nature of an online game which is not a permissible online game;
        </li>
        <li className="  text-white font-quicksand opacity-70 text-[12px] mb:text-[20px] pl-4 ">
          send display, upload, modify, publish, transmit, store, update or share communication that threatens the unity, integrity, defense, security or sovereignty of India, friendly relations with foreign states, or public order or causes incitement to the commission of any cognizable offence or prevents investigation of any offence or is insulting any other nation;
        </li>
        <li className="  text-white font-quicksand opacity-70 text-[12px] mb:text-[20px] pl-4 ">
          impersonate another person;
        </li>
        <li className="  text-white font-quicksand opacity-70 text-[12px] mb:text-[20px] pl-4 ">
          deceive or mislead the addressee about the origin of the message or knowingly and intentionally communicate any misinformation or information which is patently false and untrue or misleading in nature or, in respect of any business of the Central Government, is identified as fake or false or misleading by any prescribed fact check unit of the Central Government;
        </li>
        <li className="  text-white font-quicksand opacity-70 text-[12px] mb:text-[20px] pl-4 ">
          advocate, encourage, or assist any third party in doing any of the foregoing
        </li>
      </ul><br />
      <p className=" self-start mx-10 mb:-mt-1 my-1 text-left  z-30 text-white font-quicksand opacity-70 text-[12px] mb:text-[20px]">
        4.2	The quality of the Game may vary from device to device, and may be affected by a variety of factors, such as your location, the bandwidth available through and/or speed of your internet connection. You are responsible for all internet access charges. Please check with your internet provider for information on possible internet data usage charges.
      </p>
      {/* <p className=" self-start mx-10 mb:-mt-1 my-1 text-left  z-30 text-white font-quicksand opacity-70 text-[12px] mb:text-[20px]">
        2.3 . Any User who is “incompetent to contract” within the meaning of
        the Indian Contract Act, 1872 including minors, un-discharged insolvents
        etc. is not eligible to enter into this Agreement with Capital Rush.
      </p>
      <p className=" self-start mx-10 mb:-mt-1 my-1 text-left  z-30 text-white font-quicksand opacity-70 text-[12px] mb:text-[20px]">
        2.4 . The Platform should not be used, installed, or played by any
        Person under the age of 18 years.
      </p>
      <p className=" self-start mx-10 mb:-mt-1 my-1 text-left  z-30 text-white font-quicksand opacity-70 text-[12px] mb:text-[20px]">
        2.5 . No Person, whether a Capital Rush employee or not, who is involved
        in the development of Mobile Games or/and algorithms on the Platform can
        participate in any Mobile Games on the Platform, where such
        participation could alter, modify or unduly influence his/her
        performance on the Mobile Game, without express written permission of
        Capital Rush and subject to such terms and conditions as Capital Rush
        may seek to impose on such Person.
      </p>
      <p className=" self-start mx-10 mb:-mt-1 my-1 text-left  z-30 text-white font-quicksand opacity-70 text-[12px] mb:text-[20px]">
        2.6 . The Mobile Games and the services available on the Platform are
        open only to Persons currently residing in India, unless otherwise set
        out in the Special Rules/Terms or Agreement. Further, there may be
        certain games that may be restricted in some additional states. Please
        check the Special Rules/Terms of each Game to know more.
      </p>
      <p className=" self-start mx-10 mb:-mt-1 my-1 text-left  z-30 text-white font-quicksand opacity-70 text-[12px] mb:text-[20px]">
        2.7 . Only those Users who have successfully registered on the Platform
        in the manner prescribed in section 3 (Nature and Use of the Platform),
        and who utilize the services of the Platform in accordance with the
        Agreement including these Terms of Use, shall be eligible to use the
        Platform.
      </p>
      <p className=" self-start mx-10 mb:-mt-1 my-1 text-left  z-30 text-white font-quicksand opacity-70 text-[12px] mb:text-[20px]">
        2.8 . Capital Rush reserves the right to terminate any User’s Account
        and/or deny access to the Platform if it is brought to Capital Rush’s
        notice that a particular User has violated the Agreement including any
        of these Terms of Use.
      </p> */}
      <p className=" self-start mx-10  text-left  z-30 text-white my-6 font-quicksand font-semibold opacity-70 text-[12px] mb:text-[20px]">
        5.	Disclaimer regarding Third-Party Interactions
      </p>
      <p className=" self-start mx-10 mb:-mt-1 my-1 text-left  z-30 text-white font-quicksand opacity-70 text-[12px] mb:text-[20px]">
        5.1	Any use or reliance on any third party content available on the Game is at your own risk.
      </p><br/>
      <p className=" self-start mx-10 mb:-mt-1 my-1 text-left  z-30 text-white font-quicksand opacity-70 text-[12px] mb:text-[20px]">
        5.2	The views expressed by users on the Game are not controlled and do not represent the views or values of the Company. You acknowledge and agree that the Game only facilitates access to the Game and the Company is not obligated to monitor access to or use of the Game by you or third parties. However, should it come to the knowledge of the Company that your use of the Game is in violation of any applicable law or these Terms, then the Company has the right to enforce these Terms, and take such actions it may deem necessary to comply with applicable law, regulation, court order, or other legal, administrative, or regulatory request or process; or otherwise.
      </p><br/>
      {/* <p className=" self-start mx-10 mb:-mt-1 my-1 text-left  z-30 text-white font-quicksand opacity-70 text-[12px] mb:text-[20px]">
        3.3 . By registering for an Account, You represent, warrant and agree
        that: <br />
        a) You fulfil the eligibility criteria as detailed in section 2
        (Eligibility); <br />
        b) You are using Your actual identity and the mobile phone number you
        have provided is registered in Your own name; <br />
        c) You will provide only true, accurate, current, and complete
        information about Yourself, including optional information such as Your
        profile photograph, cover photograph, user-id, biograph, audio status
        etc., on the Platform (“User Details”); <br />
        d) You will maintain and promptly update the User Details and other
        information that You provide on the Platform to keep it true, accurate,
        current, and complete.
      </p> */}
      <p className=" self-start mx-10 mb:-mt-1 my-1 text-left  z-30 text-white font-quicksand opacity-70 text-[12px] mb:text-[20px]">
        5.3	On account of the nature of the internet, the Games may be accessed in various geographical locations; and you hereby agree and acknowledge that you are accessing the Game, at your own risk, choice and initiative and you agree and undertake to ensure that your use of the Game complies with all applicable laws including the local laws of the place where you access the Game from.
      </p><br/>
      <p className=" self-start mx-10 mb:-mt-1 my-1 text-left  z-30 text-white font-quicksand opacity-70 text-[12px] mb:text-[20px]">
        5.4	Your interactions with third parties, including users, on or through the Game, is solely between you and the third party; however, the Company may, in its sole discretion, intercede and you will reasonably cooperate with the Company if it does so. You acknowledge and agree that the Company will not be responsible for any damages, losses, costs, expenses, or liabilities incurred as the result of such interactions and you will not make the Company a party to any dispute between you and any third party with whom you interact with on the Game. You hereby release the Company Entities (defined below) from claims, demands, and damages (actual and consequential) of every kind or nature, known and unknown, suspected and unsuspected, disclosed and undisclosed, arising out of or in any way related to such interactions or the Game. In the event of any dispute between you and any third party with whom you interact on the Game, you may approach the court of appropriate jurisdiction as per applicable law in your place of residence.
      </p><br/>
      {/* All Data  */}
      <p className=" self-start mx-10  text-left  z-30 text-white my-6 font-quicksand font-semibold opacity-70 text-[12px] mb:text-[20px]">
        6.	License to Use the Game
      </p>
      <p className=" self-start mx-10 mb:-mt-1 my-1 text-left  z-30 text-white font-quicksand opacity-70 text-[12px] mb:text-[20px]">
        6.1	The Company gives you a personal, worldwide, royalty-free, limited, non-assignable and non-exclusive license to use the Game and the Platform. This license is for the sole purpose of enabling you to use and enjoy the benefit of the Game for your personal and non-commercial use, in the manner permitted by these Terms. You agree not to use the Game for any public performances.  Save and except for accessing and using the Games as permitted herein, You shall not separately use any portion of the Games or the Platform (such as codes, features, branding/trademarks/logos, look and feel, content, etc.) in any manner whatsoever without express written approval from the Company.
        <br /><br/>
        6.2	You agree to use the Game only: (a) for purposes that are permitted by the Terms; and (b) in accordance with applicable law, regulation or generally accepted practices or guidelines. You agree not to engage in activities that may adversely affect the use or access of the Game by other users.
        <br /><br/>
        6.3	You agree not to access (or attempt to access) the Game by any means other than through the interface that is provided by the Platform. You shall not use any deep-link, robot, spider or other automatic device, program, algorithm or methodology, or any similar or equivalent manual process, to access, acquire, copy or monitor any portion of the Game or content therein, or in any way reproduce or circumvent the navigational structure or presentation of the Platform, materials or any Content, to obtain or attempt to obtain any materials, documents or information through any means not specifically made available through the Game. You agree that you are solely responsible to the Company and to any third party for any breach of your obligations under the Terms and for the consequences (including any loss or damage which the Company or its affiliates may suffer) for any such breach.
        <br />
        {/* d) You further grant to Capital Rush an exclusive, transferable,
        sub-licensable, royalty-free and worldwide licence to host, use,
        distribute, modify, run, copy, publicly perform or display, translate
        and create derivative works from Your Profile Information.
        <br />
        e) You understand, represent and accept that Your Profile Information or
        any related materials will not violate the rights of any third party
        rights or give rise to any claim that another party’s rights have been
        or will be violated as a result of CAPITAL RUSH’s use or publication of
        Your Profile Information. You understand and agree that You will be
        liable to CAPITAL RUSH for any damage or cost (including reasonable
        attorney fees) it may suffer arising out of its use of Your Profile
        Information. You also understand that you will not be entitled to
        receive any royalties for the use of your Profile Information by or
        through CAPITAL RUSH.
        <br />
        f) You understand and grant to CAPITAL RUSH, its subsidiaries,
        affiliates, successors and those acting with its authority, with respect
        to Your Profile Information all copyrights and derivative rights in Your
        Profile Information and a non-exclusive, perpetual right to use,
        publish, re-publish or reproduce Your Profile Information by any means
        CAPITAL RUSH sees fit for the purposes stated above.
        <br />
        g) By using the Platform, you irrevocably waive any claim against
        CAPITAL RUSH relating to the use of Your Profile Information and promise
        not to bring any such claim or action in the future. You also waive any
        right to inspect, modify, approve or disapprove the content, layout,
        representation, presentation or other aspect of Your Profile Information
        as recorded by CAPITAL RUSH during your use of the Platform. */}
      </p>
      <p className=" self-start mx-10  text-left  z-30 text-white my-6 font-quicksand font-semibold opacity-70 text-[12px] mb:text-[20px]">
        7.	Proprietary Rights of the Company
      </p>
      <p className=" self-start mx-10 mb:-mt-1 my-1 text-left  z-30 text-white font-quicksand opacity-70 text-[12px] mb:text-[20px]">
        The Company or its licensors own all right, title, and interest in and to: (i) the Platform and the “look and feel” thereof, including all software, ideas, processes, data, text, media, and other content available on the Platform; and (ii) trademarks, logos, and brand elements. All right, title and interest in and to the Platform, the Game and the Company’s trademarks are and will remain the exclusive property of the Company and its licensors and other partners, as the case may be. The Company reserves all rights not expressly granted in these Terms. You acknowledge and agree that any feedback, comments, or suggestions you may provide regarding the Platform or the Games are entirely voluntary, and the Company will be free to use such feedback, comments or suggestions as it sees fit and without any obligation to you.
        {/* <br />
        b) The Deposits may be used to participate in Contests in the manner
        provided under section 4 (Participation in Contests). */}
      </p>

      {/* <p className=" self-start mx-10 mb:-mt-1 my-1 text-left  z-30 text-white font-quicksand opacity-70 text-[12px] mb:text-[20px]">
        3.8 . Each User is solely responsible for all activities that occur
        under their Account, including the use of any of the Services on the
        Platform.
      </p>

      <p className=" self-start mx-10 mb:-mt-1 my-1 text-left  z-30 text-white font-quicksand opacity-70 text-[12px] mb:text-[20px]">
        3.9 . CAPITAL RUSH grants such Users a non-transferrable, limited,
        non-exclusive and revocable privilege to register an Account on and use
        the Platform.
      </p>
      <p className=" self-start mx-10 mb:-mt-1 my-1 text-left  z-30 text-white font-quicksand opacity-70 text-[12px] mb:text-[20px]">
        3.10 . If CAPITAL RUSH identifies that the same User Details are being
        used under multiple accounts, then CAPITAL RUSH at its sole discretion
        will terminate/deactivate the Account without the Users’ consent and any
        Deposit in the Account will not be refunded.
      </p>

      <p className=" self-start mx-10 mb:-mt-1 my-1 text-left  z-30 text-white font-quicksand opacity-70 text-[12px] mb:text-[20px]">
        3.11 . CAPITAL RUSH, at its sole and absolute discretion and without any
        notice to the Users, reserves the right to restrict, suspend or
        terminate any Account or access to the Platform temporarily or
        permanently to any User.
      </p>
      <p className=" self-start mx-10 mb:-mt-1 my-1 text-left  z-30 text-white font-quicksand opacity-70 text-[12px] mb:text-[20px]">
        3.12 . CAPITAL RUSH may, at its sole and absolute discretion restrict,
        change, suspend, or terminate any User’s access to all or any part of
        the Platform, including but not limited to:
        <br /> a) reject, move, or remove any material that may be submitted by
        the User;
        <br />
        b) move or remove any content that is available on the Platform;
        <br />
        c) deactivate or delete an Account and all related information and files
        on their Account;
        <br />
        d) establish general practices and limits concerning use of the Platform
        and the services; and
        <br />
        e) assign its rights and liabilities with respect to all Accounts
        hereunder, to any entity.
      </p>
      <p className=" self-start mx-10 mb:-mt-1 my-1 text-left  z-30 text-white font-quicksand opacity-70 text-[12px] mb:text-[20px]">
        3.13 . Notwithstanding anything to the contrary herein, the Users
        acknowledge and agree that they shall have no ownership or other
        interest in their Account, and further acknowledge and agree that all
        rights in and to their Account are and shall forever be owned by and
        inure to the benefit of CAPITAL RUSH.
      </p>
      <p className=" self-start mx-10 mb:-mt-1 my-1 text-left  z-30 text-white font-quicksand opacity-70 text-[12px] mb:text-[20px]">
        3.14 . The Users also accepts to receive news, updates, offers/campaign
        related SMS, to the mobile phone number provided by the User, except
        when prohibited under Applicable Laws.
      </p> */}
      <p className=" self-start mx-10  text-left  z-30 text-white my-6 font-quicksand font-semibold opacity-70 text-[12px] mb:text-[20px]">
        8.	Contests and Promotions
      </p>
      <p className=" self-start mx-10 mb:-mt-1 my-1 text-left  z-30 text-white font-quicksand opacity-70 text-[12px] mb:text-[20px]">
        The Company may introduce contests in the form of permissible online real money games, which are subject to separate terms and conditions, added in the respective sections and You are requested to read the Contest Terms as well as these Terms before participating in the same and upon participation it shall be deemed that the participant has read and understood the Contest Terms.
        <br />
        {/* b) The Platform Fee for all the products/games is a fixed rate (%) of
        the Designated Amount and is between 10% and 30% and under extreme
        exceptional cases may go beyond this range.
        <br />
        c) CAPITAL RUSH, in accordance with the Terms & Conditions of the Bonus
        Program, may give a Discount in the Platform Fee and thus the Designated
        Amount shall be accordingly recovered from the User’s Cash Balances.
        <br />
        d) This can be easily deduced from the Designated Amount and the total
        prize offered. */}
      </p>
      {/* <p className=" self-start mx-10  text-left  z-30 text-white my-6 font-quicksand font-semibold opacity-70 text-[12px] mb:text-[20px]">
        Platform Fee Capital Rush
      </p>

      <p className=" self-start mx-10 mb:-mt-1 my-1 text-left  z-30 text-white font-quicksand opacity-70 text-[12px] mb:text-[20px]">
        <b>3.16. Processing Fee</b>
        <br />
        a) CAPITAL RUSH charges a ‘Processing Fee’ from the User(s) for
        facilitating withdrawal of Winnings through various modes including but
        not limited to Bank Account and UPI.
      </p>

      <p className=" self-start mx-10 mb:-mt-1 my-1 text-left  z-30 text-white font-quicksand opacity-70 text-[12px] mb:text-[20px]">
        b) The Processing Fee shall be levied as per the following schedule:
      </p>
      <div className=" text-white font-quicksand opacity-70 text-[24px]">
        <table
          className="min-w-full text-center"
          style={{ border: "2px solid white" }}
        >
          <thead className="bg-gray-100">
            <tr>
              <th
                style={{ border: "2px solid white" }}
                className="px-6 py-3 text-left font-semibold text-gray-700"
              >
                User Pool
              </th>
              <th
                style={{ border: "2px solid white" }}
                className="px-6 py-3 text-left font-semibold text-gray-700"
              >
                Platform Fees
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            <tr>
              <td
                style={{ border: "2px solid white" }}
                className="px-6 py-4 whitespace-nowrap"
              >
                5 to 25
              </td>
              <td
                style={{ border: "2px solid white" }}
                className="px-6 py-4 whitespace-nowrap"
              >
                10%
              </td>
            </tr>
            <tr>
              <td
                style={{ border: "2px solid white" }}
                className="px-6 py-4 whitespace-nowrap"
              >
                26 to 50
              </td>
              <td
                style={{ border: "2px solid white" }}
                className="px-6 py-4 whitespace-nowrap"
              >
                20%
              </td>
            </tr>
            <tr>
              <td
                style={{ border: "2px solid white" }}
                className="px-6 py-4 whitespace-nowrap"
              >
                51 to 100
              </td>
              <td
                style={{ border: "2px solid white" }}
                className="px-6 py-4 whitespace-nowrap"
              >
                30%
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className=" self-start mx-10 text-left  z-30 text-white font-quicksand opacity-70 text-[12px] mb:text-[20px]">
        c) In accordance with the Terms & Conditions, CAPITAL RUSH reserves the
        right to revise the Processing Fee and its levy schedule at its sole
        discretion.
      </p> */}
      <p className=" self-start mx-10  text-left  z-30 text-white my-6 font-quicksand font-semibold opacity-70 text-[12px] mb:text-[20px]">
        9.	Suspension and Termination
      </p><br/>
      <p className=" self-start mx-10 text-left -mt-4 z-30 text-white font-quicksand opacity-70 text-[12px] mb:text-[20px]">
        9.1	The Terms will continue to apply until terminated by either you or the Company as set forth below. If you object to the Terms or are dissatisfied with the Games, your only recourse is to (i) close your Account; and (ii) stop accessing the Game.
      </p><br/>
      <p className=" self-start mx-10 text-left -mt-4 z-30 text-white font-quicksand opacity-70 text-[12px] mb:text-[20px]">
        9.2	The Company reserves the right to terminate, discontinue, suspend, limit, or restrict your account or your use of the Games or access to Content at any time, without notice or liability, if the Company so determines in its sole discretion, for any reason whatsoever. Additionally, the Company reserves the right to delist you or block your future access to the Game or suspend or terminate your Account if it believes, in its sole discretion that you have infringed, breached, violated, abused, or unethically manipulated or exploited any term of these Terms or anyway otherwise acted unethically.
      </p><br/>
      <p className=" self-start mx-10 text-left -mt-4 z-30 text-white font-quicksand opacity-70 text-[12px] mb:text-[20px]">
        9.3	If You or the Company terminate your use of the Game, the Company may, subject to the terms of the Privacy Policy, delete any information relating to your use of the Game and the Company will have no liability to you or any third party for doing so.
      </p><br/>
      {/* <p className=" self-start mx-10 text-left -mt-4 z-30 text-white font-quicksand opacity-70 text-[12px] mb:text-[20px]">
        4.4 . Any amount received by CAPITAL RUSH as Designated Amount for
        participation in a Contest shall be non-refundable, except in the event
        that a Contest has been cancelled.
      </p>
      <p className=" self-start mx-10 text-left -mt-4 z-30 text-white font-quicksand opacity-70 text-[12px] mb:text-[20px]">
        4.5 . Contests shall be announced by the CAPITAL RUSH from time to time
        in any manner that is convenient to the Company, and CAPITAL RUSH
        reserves the right to extend the participation and time limit for
        registration, cancel any Contest, and modify any terms, all with due
        notice to the Users of the Platform.
      </p> */}

      <p className=" self-start mx-10  text-left  z-30 text-white my-6 font-quicksand font-semibold opacity-70 text-[12px] mb:text-[20px]">
        10.	Disclaimers and Limitations of Liability
      </p><br/>
      <p className=" self-start mx-10 text-left -mt-4 z-30 text-white font-quicksand opacity-70 text-[12px] mb:text-[20px]">
        Please read this section carefully since it limits the liability of the Company and its parents, subsidiaries, group companies, affiliates, related companies, officers, directors, employees, agents, representatives, partners, and licensors (collectively, the " Company Entities").
      </p><br/>

      {/* <p className=" self-start mx-10  -mt-3 text-left  z-30 text-white font-quicksand font-semibold opacity-70 text-[12px] mb:text-[20px]">
        c) KYC verification is mandatory as a proof of identity for making
        withdrawals from Your Account to Your bank/wallet account. KYC
        verification may be done through the Platform by providing certain
        details: <br />
        (i) photograph of a valid government ID (Aadhaar Card, PAN Card etc.);
        and <br />
        (ii) other User Details. If you opt to provide your Aadhar card / Number
        for KYC, you hereby: (i) Understand and agree that your Aadhar has been
        submitted only for Your KYC verification; and (ii) You authorise Us to
        temporarily access Your Aadhar card and You understand that We will not
        be storing Your Aadhar number unless as prescribed by law.
      </p> */}
      <p className=" self-start mx-10 text-left -mt-4 z-30 text-white font-quicksand opacity-70 text-[12px] mb:text-[20px]">
        10.1	Availability on "AS-IS" basis
        <br /><br/>
        Your access to and use of the Game or any Content is at your own risk. You understand and agree that the Game is provided to you on an "AS IS" and "AS AVAILABLE" basis. Without limiting the foregoing, the Company Entities disclaim all warranties and conditions, whether express or implied, of title, of merchantability, fitness for a particular purpose, or non-infringement.<br/><br/>

        The Company Entities make no warranty and disclaim all responsibility and liability for: (i) the completeness, accuracy, availability, timeliness, security or reliability of the Game or any content therein; (ii) any harm to your computer system, loss of data, or other harm that results from your access to or use of the Game, or any content therein; (iii) the deletion of, or the failure to store or to transmit, any content and other communications maintained by the Game; (iv) whether the Game will meet your requirements or be available on an uninterrupted, secure, or error-free basis or whether any errors or defects will be corrected. No advice or information, whether oral or written, obtained from the Company Entities or through the Game, will create any warranty not expressly made herein. The Company Entities will not be liable for any loss that you may incur as a consequence of unauthorized use of your Account or Account information in connection with the Game, either with or without your knowledge.<br/><br/>

        The Company shall not be responsible for the delay or inability to use Platform or related functionalities, the provision of or failure to provide functionalities, or for any information, software, functionalities and related graphics obtained through the Platform, or otherwise arising out of the use of the Platform or Game, whether based on contract, tort, negligence, strict liability or otherwise. Further, the Company shall not be held responsible for non-availability of the Game during periodic maintenance operations or any unplanned suspension of access to Game that may occur due to technical reasons or for any reason beyond the Company’s control. You understand and agree that any material or data downloaded or otherwise obtained through the Platform is done entirely at your own discretion and risk, and that you will be solely responsible for any damage to your computer systems or loss of data that results from the download of such material or data.<br/><br/>

      </p>
      <p className=" self-start mx-10 text-left -mt-4 z-30 text-white font-quicksand opacity-70 text-[12px] mb:text-[20px]">
        10.2	 Links
        <br /><br/>
        There may be links to third-party websites or resources on the Platform. You acknowledge and agree that the Company is not responsible or liable for: (i) the availability or accuracy of such websites or resources; or (ii) the content, products, or services on or available from such websites or resources. Links to such websites or resources do not imply any endorsement by the Company Entities of such websites or resources or the content, products, or services available from such websites or resources. You acknowledge sole responsibility for and assume all risk arising from your use of any such websites or resources.<br/><br/>
      </p>
      <p className=" self-start mx-10 text-left -mt-4 z-30 text-white font-quicksand opacity-70 text-[12px] mb:text-[20px]">
      10.3	 Limitation of Liability
        <br /><br/>
        To the maximum extent permitted by applicable law, the Company Entities shall not be liable for any indirect, incidental, special, consequential or punitive damages or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, good-will, or other intangible losses resulting from (i) your access to or use of or inability to access or use of the Platform or the Game; (ii) any content on the Platform; or (iii) unauthorized access, use or alteration of your transmissions or content. <br/>
      </p><br/>
      <p className=" self-start mx-10 text-left -mt-4 z-30 text-white font-quicksand opacity-70 text-[12px] mb:text-[20px]">
      10.4	 Violation of Terms 
        <br /><br/>
        You agree that any violation by you of these Terms will constitute an unlawful and unfair business practice, and will cause irreparable harm to the Company for which monetary damages would be inadequate, and you consent to the Company obtaining any injunctive or equitable relief that they deem necessary or appropriate in such circumstances. These remedies are in addition to any other remedies that the Company may have at law or in equity. If the Company takes any legal action against you as a result of your violation of these Terms, they will be entitled to recover from you, and you agree to pay, all reasonable attorneys’ fees and costs of such action, in addition to any other relief that may be granted.
      </p>
      {/* <p className=" self-start mx-10  text-left  z-30 text-white my-6 font-quicksand font-semibold opacity-70 text-[12px] mb:text-[20px]">
        Net winnings = [Cumulative withdrawals in the FY – (Cumulative deposits
        in the ongoing FY + Net winnings which have already been subjected to
        TDS during the ongoing financial year + Opening deposit balance as of
        1st April 00:00)] Net winnings shall also be adjusted to account for the
        following amounts: winning balance for the previous financial year (on
        which TDS is already deducted)
      </p> */}
      <p className=" self-start mx-10  text-left  z-30 text-white my-6 font-quicksand font-semibold opacity-70 text-[12px] mb:text-[20px]">
      11.	 General Terms
      </p><br/>
      <p className=" self-start mx-10 text-left -mt-4 z-30 text-white font-quicksand opacity-70 text-[12px] mb:text-[20px]">
      11.1	Waiver and Severability
        <br /><br/>
        The failure of the Company to enforce any right or provision of these Terms will not be deemed a waiver of such right or provision. In the event that any provision of these Terms is held to be invalid or unenforceable, then that provision will be limited or eliminated to the minimum extent necessary, and the remaining provisions of these Terms will remain in full force and effect.
        <br /><br/>
        11.2	 Governing Law and Jurisdiction
        <br /><br/>
        These terms shall be governed by and constructed in accordance with the laws of India without reference to conflict of laws principles and disputes arising in relation hereto shall be subject to the exclusive jurisdiction of courts in Jaipur,Rajasthan, India.
        <br /><br/>
        11.3	Entire Agreement
        <br /><br/>
        These Terms and the Privacy Policy are the entire and exclusive agreement between the Company and you regarding the Game (excluding any services for which you have a separate agreement with the Company that is explicitly in addition or in place of these Terms), and these Terms supersede and replace any prior agreements between the Company and you regarding the Games. <br/>
 The Company retains the unconditional right to revise these Terms from time to time, the most current version will always be on the Platform. You can determine when this Terms was last modified by referring to the “Last Updated” legend above. It shall be your responsibility to check this Terms periodically for changes. Your continued use and access of the Game shall signify your acceptance of the amended Terms and your consent to be legally bound by the same. 
        <br /><br/>
        11.4	Grievance Redressal 
        <br /><br/>
        In case you have any complaints or grievance pertaining to (i) any user content that you believe violates these Terms (other than an infringement of intellectual property rights) for the reporting mechanism for such claims), (ii) your access to the Platform or (iii) any user content which you believe is, in the nature of any material which is obscene, defamatory towards the complainant or any person on whose behalf you are making the complaint, or is in the nature of impersonation in an electronic form, including artificially morphed images of such individual, please share the same with us by writing to: hello@capitalrush.gg<br/><br/>
In your complaint or grievance, please include the following information:<br/><br/>
1. Your name and contact details: name, address, contact number and email address;<br/>
2. Your relation to the subject matter of the complaint, i.e. complainant or person acting on behalf of an affected person;<br/>
3. The name and age of the person aggrieved or affected by the subject matter of the complaint, in case your are acting on behalf of such person and a statement, under penalty of perjury, that you are authorised to act on behalf of such person and to provide such person's personal information to us in relation to the complaint/grievance;<br/>
4. Description of the complaint or grievance with clear identification of the user content in relation to which such complaint or grievance is made;<br/>
5. A statement that you believe, in good faith, that the user content violates these Terms<br/><br/>

You are requested to send us a written notice/ intimation if you notice any act of infringement on the Platform, which must include the following information:<br/><br/>
A clear identification of the copyrighted work allegedly infringed;<br/>
A clear identification of the allegedly infringing material on the Platform;<br/>
Your contact details: name, address, e-mail address and phone number;<br/>
A statement that you believe, in good faith, that the use of the copyrighted material allegedly infringed on the Platform is not authorized by your agent or the law;<br/>
A statement that the information provided in the notice is accurate, and under penalty of perjury, that the signatory is authorized to act on behalf of the owner of an exclusive copyright right that is allegedly infringed;<br/>
Your signature or a signature of your authorized agent.<br/><br/>
The aforesaid notices can be sent to the Company by email at hello@capitalrush.gg<br/><br/>

On receiving such complaint, grievance or notice, the Company reserves the right to investigate and/or take such action as the Company may deem appropriate. The Company may reach out to you to seek further clarification or assistance with the investigation, or verify the statements made in your complaint, grievance or notice, and you acknowledge that your timely assistance with the investigation would facilitate the redressal of the same.<br/><br/>

The name and title of the Grievance Redressal Officer is as follows:<br/><br/>
Name: Samveg Singhi<br/>
Email: hello@capitalrush.gg<br/>
Address: G-152, RIICO Industrial Area, Mansarovar, Jaipur, Rajasthan -302020<br/><br/>

The Company reserves the right to replace the Grievance Redressal Officer at its discretion through publication of the name and title of such replacement on the website, which replacement shall come into effect immediately upon publication.
</p>
        
        <div className=" flex flex-col items-center mx-1 lg:mx-4 mb:mx-10 py-20">
        <h1 className=" font-poppins text-[24px] mb:text-[48px] text-white font-bold z-40 flex-shrink-0">
  
        <span className="font-poppins  bg-gradient-to-r from-[#F67408] to-[#FAF51C] bg-clip-text text-transparent">
          Rules of the Game
        </span>
      </h1>
      </div>
      <p className=" self-start mx-10  text-left  z-30 text-white my-6 font-quicksand font-semibold opacity-70 text-[12px] mb:text-[20px]">
      Game Overview:
      </p>
      <p className=" self-start mx-10 mb:-mt-1 my-1 text-left  z-30 text-white font-quicksand opacity-70 text-[12px] mb:text-[20px]">
      Capital Rush is a dynamic investment strategy game that merges financial education with engaging gameplay. Players can choose between Single Player and Multiplayer modes to build and grow their virtual investment portfolios. With different journey lengths and the option to win real money in contests, Capital Rush offers diverse experiences to both casual and strategic players.
      </p><br/>
      <p className=" self-start mx-10  text-left  z-30 text-white my-6 font-quicksand font-semibold opacity-70 text-[12px] mb:text-[20px]">
      Objective:
      </p>
      <p className=" self-start mx-10 mb:-mt-1 my-1 text-left  z-30 text-white font-quicksand opacity-70 text-[12px] mb:text-[20px]">
      Grow your virtual portfolio value by making strategic investment decisions and adapting to market challenges.
      </p><br/>
      <p className=" self-start mx-10  text-left  z-30 text-white my-6 font-quicksand font-semibold opacity-70 text-[12px] mb:text-[20px]">
      Game Setup:
      </p>
      <p className=" self-start mx-10 mb:-mt-1 my-1 text-left  z-30 text-white font-quicksand opacity-70 text-[12px] mb:text-[20px]">
      Each player starts with 100,000 Capital Dollars (usable for the purpose of the game and have no real-world value).<br/>
The game spans 1 to 5 simulated years, with each year divided into 4 quarters.<br/>
Each quarter spans across 13 weeks as denoted by tiles on the board. <br/>
The tiles are of 2 types- Green tile denoting a positive return for the week and Red tile denoting a negative return for the week.
      </p><br/>
      <p className=" self-start mx-10  text-left  z-30 text-white my-6 font-quicksand font-semibold opacity-70 text-[12px] mb:text-[20px]">
      Turns and Timing:
      </p>
      <p className=" self-start mx-10 mb:-mt-1 my-1 text-left  z-30 text-white font-quicksand opacity-70 text-[12px] mb:text-[20px]">
      Players move across weeks using the dice<br/>
The number that ends up on the dice is equal to the number of tiles the player or group of players will move across during the year<br/>
For single player and multiplayer; the player and bot (single player) and all players (multiplayer) will end up on the same till decided by the dice.<br/>
      </p><br/>
      <p className=" self-start mx-10  text-left  z-30 text-white my-6 font-quicksand font-semibold opacity-70 text-[12px] mb:text-[20px]">
      Investment Strategies:
      </p>
      <p className=" self-start mx-10 mb:-mt-1 my-1 text-left  z-30 text-white font-quicksand opacity-70 text-[12px] mb:text-[20px]">
      Research and choose from a variety of asset classes, including stocks, bonds, real estate, and more.<br/>
Make informed decisions based on changing market conditions, economic events, and corporate finance projects.<br/>
      </p><br/>
      <p className=" self-start mx-10  text-left  z-30 text-white my-6 font-quicksand font-semibold opacity-70 text-[12px] mb:text-[20px]">
      Investment Rounds:
      </p>
      <p className=" self-start mx-10 mb:-mt-1 my-1 text-left  z-30 text-white font-quicksand opacity-70 text-[12px] mb:text-[20px]">
      In each quarter, players can invest in different asset classes: Equity, Savings/FD, Bonds, Commodities, ETFs, and Venture Capital.
Each asset class has its own risk and return profile.
Players can allocate their Capital Dollars to purchase assets.
Savings/FD and Bonds are interest & coupon bearing assets respectively and are free from multipliers Whilst in Venture Capital, the players also receive additional cash in-flow for landing on the green tile.

      </p><br/>
      <p className=" self-start mx-10  text-left  z-30 text-white my-6 font-quicksand font-semibold opacity-70 text-[12px] mb:text-[20px]">
      Multiplier System:
      </p>
      <p className=" self-start mx-10 mb:-mt-1 my-1 text-left  z-30 text-white font-quicksand opacity-70 text-[12px] mb:text-[20px]">
      Multipliers determine the rate of return on investments.
Strategic allocation is essential for maximizing returns.
Rate of return= Market Return x Asset Multiplier
For example market goes up by 1% and the multiplier of the asset invested is 5 
Rate of return = 1 x 5 = 5% (Asset will increase by 5%)
Wherever there are decimal values, it’s rounded off by 2 digits.
      </p><br/>
      <p className=" self-start mx-10  text-left  z-30 text-white my-6 font-quicksand font-semibold opacity-70 text-[12px] mb:text-[20px]">
      In-game questions:
      </p>
      <p className=" self-start mx-10 mb:-mt-1 my-1 text-left  z-30 text-white font-quicksand opacity-70 text-[12px] mb:text-[20px]">
      In-game questions test players' knowledge and offer rewards i.e. additional Capital Dollars.
      </p><br/>
      <p className=" self-start mx-10  text-left  z-30 text-white my-6 font-quicksand font-semibold opacity-70 text-[12px] mb:text-[20px]">
      Performance Assessment:
      </p>
      <p className=" self-start mx-10 mb:-mt-1 my-1 text-left  z-30 text-white font-quicksand opacity-70 text-[12px] mb:text-[20px]">
      Net worth is calculated at the end of each game.
Player's net worth is the sum of their invested amount and cash balance.
      </p><br/>
      <p className=" self-start mx-10  text-left  z-30 text-white my-6 font-quicksand font-semibold opacity-70 text-[12px] mb:text-[20px]">
      Utilizing Real-Life Scenarios as Game Events to Enhance Portfolio Growth
      </p>
      <p className=" self-start mx-10 mb:-mt-1 my-1 text-left  z-30 text-white font-quicksand opacity-70 text-[12px] mb:text-[20px]">
      Within the game, we incorporate real-life scenarios termed as "events" that guide players in allocating resources and navigating market opportunities strategically. Events impact the lucrativeness of the assets (i.e. multipliers might increase or decrease according to the event), the flow of the tiles (the number of green and red tiles in a quarter) and the result of events might impact the asset values as well.
      </p><br/>
      <p className=" self-start mx-10  text-left  z-30 text-white my-6 font-quicksand font-semibold opacity-70 text-[12px] mb:text-[20px]">
      Navigating Surprise Events: Decisive Choices in an Unpredictable Market
      </p>
      <p className=" self-start mx-10 mb:-mt-1 my-1 text-left  z-30 text-white font-quicksand opacity-70 text-[12px] mb:text-[20px]">
      In Surprise Events, players face a challenging situation and they are given 30 seconds to allocate their portfolios according to the Surprise event. These events require players to make swift decisions, mirroring the fast-paced nature of the financial world. This challenges players to adapt quickly, enhancing their ability to handle unexpected situations.
      </p><br/>
      <p className=" self-start mx-10  text-left  z-30 text-white my-6 font-quicksand font-semibold opacity-70 text-[12px] mb:text-[20px]">
      Inflation's Impact: Asset Valuations Adjusting to Economic Realities Annually
      </p>
      <p className=" self-start mx-10 mb:-mt-1 my-1 text-left  z-30 text-white font-quicksand opacity-70 text-[12px] mb:text-[20px]">
      Recognizing the pervasive nature of inflation, the game incorporates its effects on asset values at the close of each year. This mirrors the reality where assets' worth can be influenced by inflation.Inflation rate will be obtained by the number that comes on the wheel at end of every year is taken as the rate of inflation and value of assets change accordingly.Players learn to manage and adapt their portfolios in response to this economic factor. Inflation impact as follows:
      </p><br/>
      <div className=" text-white font-quicksand opacity-70 text-[24px]">
        <table
          className="min-w-full text-center"
          style={{ border: "2px solid white" }}
        >
          <thead className="bg-gray-100">
            <tr>
              <th
                style={{ border: "2px solid white" }}
                className="px-6 py-3 text-left font-semibold text-gray-700"
              >
                Asset
              </th>
              <th
                style={{ border: "2px solid white" }}
                className="px-6 py-3 text-left font-semibold text-gray-700"
              >
                Effect of Inflation
              </th>
              <th
                style={{ border: "2px solid white" }}
                className="px-6 py-3 text-left font-semibold text-gray-700"
              >
                Amount of Change
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            <tr>
              <td
                style={{ border: "2px solid white" }}
                className="px-6 py-4 whitespace-nowrap"
              >
                Commodities
              </td>
              <td
                style={{ border: "2px solid white" }}
                className="px-6 py-4 whitespace-nowrap"
              >
                Increase
              </td>
              <td
                style={{ border: "2px solid white" }}
                className="px-6 py-4 whitespace-nowrap"
              >
                Rate of Inflation
              </td>
            </tr>
            <tr>
              <td
                style={{ border: "2px solid white" }}
                className="px-6 py-4 whitespace-nowrap"
              >
                Equity
              </td>
              <td
                style={{ border: "2px solid white" }}
                className="px-6 py-4 whitespace-nowrap"
              >
                No Effect
              </td>
              <td
                style={{ border: "2px solid white" }}
                className="px-6 py-4 whitespace-nowrap"
              >
                -
              </td>
            </tr>
            <tr>
              <td
                style={{ border: "2px solid white" }}
                className="px-6 py-4 whitespace-nowrap"
              >
                Fixed Income
              </td>
              <td
                style={{ border: "2px solid white" }}
                className="px-6 py-4 whitespace-nowrap"
              >
                Decrease
              </td>
              <td
                style={{ border: "2px solid white" }}
                className="px-6 py-4 whitespace-nowrap"
              >
                Rate of Inflation
              </td>
            </tr>
            <tr>
              <td
                style={{ border: "2px solid white" }}
                className="px-6 py-4 whitespace-nowrap"
              >
                Cash
              </td>
              <td
                style={{ border: "2px solid white" }}
                className="px-6 py-4 whitespace-nowrap"
              >
                No effect
              </td>
              <td
                style={{ border: "2px solid white" }}
                className="px-6 py-4 whitespace-nowrap"
              >
                -
              </td>
            </tr>
            <tr>
              <td
                style={{ border: "2px solid white" }}
                className="px-6 py-4 whitespace-nowrap"
              >
                Derivatives
              </td>
              <td
                style={{ border: "2px solid white" }}
                className="px-6 py-4 whitespace-nowrap"
              >
                No effect
              </td>
              <td
                style={{ border: "2px solid white" }}
                className="px-6 py-4 whitespace-nowrap"
              >
                -
              </td>
            </tr>
            <tr>
              <td
                style={{ border: "2px solid white" }}
                className="px-6 py-4 whitespace-nowrap"
              >
                Cryptocurrencies
              </td>
              <td
                style={{ border: "2px solid white" }}
                className="px-6 py-4 whitespace-nowrap"
              >
                No effect
              </td>
              <td
                style={{ border: "2px solid white" }}
                className="px-6 py-4 whitespace-nowrap"
              >
                -
              </td>
            </tr>
            <tr>
              <td
                style={{ border: "2px solid white" }}
                className="px-6 py-4 whitespace-nowrap"
              >
                Agriculture ETF
              </td>
              <td
                style={{ border: "2px solid white" }}
                className="px-6 py-4 whitespace-nowrap"
              >
                Increase
              </td>
              <td
                style={{ border: "2px solid white" }}
                className="px-6 py-4 whitespace-nowrap"
              >
                Rate of Inflation*2
              </td>
            </tr>
            <tr>
              <td
                style={{ border: "2px solid white" }}
                className="px-6 py-4 whitespace-nowrap"
              >
                Banking ETF
              </td>
              <td
                style={{ border: "2px solid white" }}
                className="px-6 py-4 whitespace-nowrap"
              >
                Decrease
              </td>
              <td
                style={{ border: "2px solid white" }}
                className="px-6 py-4 whitespace-nowrap"
              >
                Rate of Inflation*2
              </td>
            </tr>
            <tr>
              <td
                style={{ border: "2px solid white" }}
                className="px-6 py-4 whitespace-nowrap"
              >
                Infrastructure ETF
              </td>
              <td
                style={{ border: "2px solid white" }}
                className="px-6 py-4 whitespace-nowrap"
              >
                Decrease
              </td>
              <td
                style={{ border: "2px solid white" }}
                className="px-6 py-4 whitespace-nowrap"
              >
                Rate of Inflation*2
              </td>
            </tr>
            <tr>
              <td
                style={{ border: "2px solid white" }}
                className="px-6 py-4 whitespace-nowrap"
              >
                Automobile ETF
              </td>
              <td
                style={{ border: "2px solid white" }}
                className="px-6 py-4 whitespace-nowrap"
              >
                Decrease
              </td>
              <td
                style={{ border: "2px solid white" }}
                className="px-6 py-4 whitespace-nowrap"
              >
                Rate of Inflation*2
              </td>
            </tr>
            <tr>
              <td
                style={{ border: "2px solid white" }}
                className="px-6 py-4 whitespace-nowrap"
              >
                Information Technology ETF
              </td>
              <td
                style={{ border: "2px solid white" }}
                className="px-6 py-4 whitespace-nowrap"
              >
                Increase
              </td>
              <td
                style={{ border: "2px solid white" }}
                className="px-6 py-4 whitespace-nowrap"
              >
                Rate of Inflation*2
              </td>
            </tr>
            <tr>
              <td
                style={{ border: "2px solid white" }}
                className="px-6 py-4 whitespace-nowrap"
              >
                Consumer Electronics ETF
              </td>
              <td
                style={{ border: "2px solid white" }}
                className="px-6 py-4 whitespace-nowrap"
              >
                Decrease
              </td>
              <td
                style={{ border: "2px solid white" }}
                className="px-6 py-4 whitespace-nowrap"
              >
                Rate of Inflation*2
              </td>
            </tr>
            <tr>
              <td
                style={{ border: "2px solid white" }}
                className="px-6 py-4 whitespace-nowrap"
              >
                FMCG ETF
              </td>
              <td
                style={{ border: "2px solid white" }}
                className="px-6 py-4 whitespace-nowrap"
              >
                Increase
              </td>
              <td
                style={{ border: "2px solid white" }}
                className="px-6 py-4 whitespace-nowrap"
              >
                Rate of Inflation*2
              </td>
            </tr>
            <tr>
              <td
                style={{ border: "2px solid white" }}
                className="px-6 py-4 whitespace-nowrap"
              >
                Pharmaceuticals ETF
              </td>
              <td
                style={{ border: "2px solid white" }}
                className="px-6 py-4 whitespace-nowrap"
              >
                Increase
              </td>
              <td
                style={{ border: "2px solid white" }}
                className="px-6 py-4 whitespace-nowrap"
              >
                Rate of Inflation*2
              </td>
            </tr>
            <tr>
              <td
                style={{ border: "2px solid white" }}
                className="px-6 py-4 whitespace-nowrap"
              >
                Oil and gas ETF
              </td>
              <td
                style={{ border: "2px solid white" }}
                className="px-6 py-4 whitespace-nowrap"
              >
                Increase
              </td>
              <td
                style={{ border: "2px solid white" }}
                className="px-6 py-4 whitespace-nowrap"
              >
                Rate of Inflation*2
              </td>
            </tr>
            <tr>
              <td
                style={{ border: "2px solid white" }}
                className="px-6 py-4 whitespace-nowrap"
              >
                Mutual Funds
              </td>
              <td
                style={{ border: "2px solid white" }}
                className="px-6 py-4 whitespace-nowrap"
              >
                No effect
              </td>
              <td
                style={{ border: "2px solid white" }}
                className="px-6 py-4 whitespace-nowrap"
              >
                -
              </td>
            </tr>
            <tr>
              <td
                style={{ border: "2px solid white" }}
                className="px-6 py-4 whitespace-nowrap"
              >
                Forex
              </td>
              <td
                style={{ border: "2px solid white" }}
                className="px-6 py-4 whitespace-nowrap"
              >
                Decrease
              </td>
              <td
                style={{ border: "2px solid white" }}
                className="px-6 py-4 whitespace-nowrap"
              >
                Rate of Inflation
              </td>
            </tr>
            <tr>
              <td
                style={{ border: "2px solid white" }}
                className="px-6 py-4 whitespace-nowrap"
              >
                Savings/FD
              </td>
              <td
                style={{ border: "2px solid white" }}
                className="px-6 py-4 whitespace-nowrap"
              >
                No effect
              </td>
              <td
                style={{ border: "2px solid white" }}
                className="px-6 py-4 whitespace-nowrap"
              >
                -
              </td>
            </tr>
            <tr>
              <td
                style={{ border: "2px solid white" }}
                className="px-6 py-4 whitespace-nowrap"
              >
                Venture Capital
              </td>
              <td
                style={{ border: "2px solid white" }}
                className="px-6 py-4 whitespace-nowrap"
              >
                No effect
              </td>
              <td
                style={{ border: "2px solid white" }}
                className="px-6 py-4 whitespace-nowrap"
              >
                -
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className=" self-start mx-10  text-left  z-30 text-white my-6 font-quicksand font-semibold opacity-70 text-[12px] mb:text-[20px]">
      Exploring Corporate Finance Projects: Investing in Ventures for Potential Gains:
      </p>
      <p className=" self-start mx-10 mb:-mt-1 my-1 text-left  z-30 text-white font-quicksand opacity-70 text-[12px] mb:text-[20px]">
      Through the Corporate Finance project, players gain the opportunity to invest in diverse projects. These projects offer potential benefits if they continue successfully. This aspect of the game mirrors real-world investment opportunities, where strategic investment decisions can lead to favourable outcomes. The players are displayed the investment outlay along with future cash flows and recovery range
      </p><br/>
      <p className=" self-start mx-10  text-left  z-30 text-white my-6 font-quicksand font-semibold opacity-70 text-[12px] mb:text-[20px]">
      Single Player Mode (compete against bot):
      </p>
      <p className=" self-start mx-10  text-left  z-30 text-white my-6 font-quicksand font-semibold opacity-70 text-[12px] mb:text-[20px]">
      Play as a Trader (1-Year Journey):
      </p>
      <p className=" self-start mx-10 mb:-mt-1 my-1 text-left  z-30 text-white font-quicksand opacity-70 text-[12px] mb:text-[20px]">
      Experience the fast-paced world of trading.
Make quick investment decisions and trade to maximise short-term gains.
Navigate surprise events and corporate finance projects for added excitement.
      </p>
      <p className=" self-start mx-10  text-left  z-30 text-white my-6 font-quicksand font-semibold opacity-70 text-[12px] mb:text-[20px]">
      Play as an Investor (5-Year Journey):
      </p>
      <p className=" self-start mx-10 mb:-mt-1 my-1 text-left  z-30 text-white font-quicksand opacity-70 text-[12px] mb:text-[20px]">
      Embark on a strategic investment journey.
Plan and allocate resources over a longer horizon to build a diversified portfolio.
Overcome challenges, events, and surprise events to grow your investments.
      </p><br/>
      <p className=" self-start mx-10  text-left  z-30 text-white my-6 font-quicksand font-semibold opacity-70 text-[12px] mb:text-[20px]">
      Multiplayer Mode:
      </p>
      <p className=" self-start mx-10 mb:-mt-1 my-1 text-left  z-30 text-white font-quicksand opacity-70 text-[12px] mb:text-[20px]">
      Admin-controlled customization:
Choose the duration of the game, whether 1 to 5 simulated years.
Engage with friends or players globally in a competitive investment battle.
Exercise strategic gameplay to achieve dominance on the leaderboards.
      </p><br/>
      <p className=" self-start mx-10  text-left  z-30 text-white my-6 font-quicksand font-semibold opacity-70 text-[12px] mb:text-[20px]">
      Leaderboards and Rankings:
      </p>
      <p className=" self-start mx-10 mb:-mt-1 my-1 text-left  z-30 text-white font-quicksand opacity-70 text-[12px] mb:text-[20px]">
      Players are ranked based on net worth and performance.
Compete with others globally, weekly (resets weekly).
      </p><br/>
      <p className=" self-start mx-10  text-left  z-30 text-white my-6 font-quicksand font-semibold opacity-70 text-[12px] mb:text-[20px]">
      Contests Mode:
      </p>
      <p className=" self-start mx-10 mb:-mt-1 my-1 text-left  z-30 text-white font-quicksand opacity-70 text-[12px] mb:text-[20px]">
      Use real money to get into exciting Capital Rush contests:
Complete transparency of prize, pool, and calculation in the description of contests.
Engage in contests with varying durations and entry fees.
All contestants start off with the same amount of Capital Dollars for investment, the time period to play remains the same as well.
Players are ranked on the basis of their net worth (Invested amount+ Cash Balance) in descending order (highest to lowest).
Players are awarded either Capital Dollars or Real Money winnings according to their performance as per the game mode.
The contest involves considerable use of skill and does not constitute gambling
      </p><br/>
      <p className=" self-start mx-10  text-left  z-30 text-white my-6 font-quicksand font-semibold opacity-70 text-[12px] mb:text-[20px]">
      Winning and Ranking:
      </p>
      <p className=" self-start mx-10 mb:-mt-1 my-1 text-left  z-30 text-white font-quicksand opacity-70 text-[12px] mb:text-[20px]">
      The player with the highest net worth (Invested Amount+ Cash Balance) at the end of simulated years wins. Players are ranked on the basis of their net worth (Invested amount+ Cash Balance) in descending order (highest to lowest).

Players are awarded either Capital Dollars or Real Money winnings according to their performance as per the game mode.
      </p><br/>
      <p className=" self-start mx-10  text-left  z-30 text-white my-6 font-quicksand font-semibold opacity-70 text-[12px] mb:text-[20px]">
      Contest Payouts:
      </p>
      <p className=" self-start mx-10 mb:-mt-1 my-1 text-left  z-30 text-white font-quicksand opacity-70 text-[12px] mb:text-[20px]">
      Win cash prizes in contests by outperforming other players with your investment strategies. 
The payout can take maximum of 14 days once player places the withdrawal request.
      </p><br/>
      <div className=" flex flex-col items-center mx-1 lg:mx-4 mb:mx-10 py-20">
        <h1 className=" font-poppins text-[24px] mb:text-[48px] text-white font-bold z-40 flex-shrink-0">
  
        <span className="font-poppins  bg-gradient-to-r from-[#F67408] to-[#FAF51C] bg-clip-text text-transparent">
        Contest Terms and Conditions
        </span>
      </h1>
      </div>
      <p className=" self-start mx-10 mb:-mt-1 my-1 text-left  z-30 text-white font-quicksand opacity-70 text-[12px] mb:text-[20px]">
      The Company may run paid contests versions of the Game Contests on the Platform from time to time.
      </p><br/>
      <p className=" self-start mx-10  text-left  z-30 text-white my-6 font-quicksand font-semibold opacity-70 text-[12px] mb:text-[20px]">
      Entering a Contest:
      </p>
      <p className=" self-start mx-10 mb:-mt-1 my-1 text-left  z-30 text-white font-quicksand opacity-70 text-[12px] mb:text-[20px]">
      a. In the event you elect to play a Contest, you will be required to provide your KYC (Know Your
Customer) details to us for verification. KYC verification is mandatory as a proof of identity
for Contests. KYC verification may be done by providing certain details: (i) photograph of a
valid government ID (Aadhaar Card, PAN Card etc.); and (ii) other user details. If you opt to
provide your Aadhaar card / number for KYC, you hereby: (i) understand and agree that your
Aadhaar Card / number has been submitted only for Your KYC verification; and (ii) You
authorise the Company to temporarily access and verify Your Aadhaar card, You understand
that the Company will not be storing your Aadhaar card / number unless as required by law.<br/><br/>
b. Upon successfully verifying your KYC, a deposit cash account (“Deposit Account”) and
winnings cash account (“Winnings Account”) will be created for You.<br/><br/>
c. In order to participate in a Contest, Users will be required to buy a ticket (“Ticket”) by paying
an entry amount in the form of cash. Users may add cash to their Deposit Account by using any
of the payment modes available on the Platform<br/><br/>
d. The following categories of Tickets will be available to Users for each Contest:<br/><br/>
(i) Gold Ticket: User will get 4 chances to play the Contest and the highest score will
be considered for the purpose of the leaderboard in the Contest.<br/>
(ii) Silver Ticket: User will get 2 chances to play the Contest and the highest score will
be considered for the purpose of the leaderboard in the Contest.<br/>
(iii) Bronze Ticket: User will get 1 chance to play the Contest.
      </p><br/>
      <p className=" self-start mx-10  text-left  z-30 text-white my-6 font-quicksand font-semibold opacity-70 text-[12px] mb:text-[20px]">
      Playing a Contest:
      </p>
      <p className=" self-start mx-10 mb:-mt-1 my-1 text-left  z-30 text-white font-quicksand opacity-70 text-[12px] mb:text-[20px]">
      a. The rules of playing the Game as part of a Contest are as set out in the rulesheet above.<br/><br/>
b. Each Contest has a pre-determined limit on the number of participants that can participate and
a specified time before which entries must be made. Specific terms of each Contest, such as
number of participants, prizes / winnings, period of Contest etc. shall be informed to the User
prior to commencement of the relevant Contest. <br/><br/>
c. Where the number of participants is less than required for then purpose of a Contest, the
Platform may deploy bots in place of real Users. However, regardless of the position of
the bots in the leaderboard, no prizes shall be awarded to the bots.<br/><br/>
d. Prizes in each Contest shall be awarded to Users ranking top rankings in the leaderboard for the
relevant Contest. Prizes for each Contest may include real money as well as ‘Capital Gold’. On
winning Real money, the amount will be reflected in the User’s Winnings Account. Capital
Gold are non-transferable digital online coins, with no real world value, which can be used for
unlocking benefits or features in the Game / Platform.<br/><br/>
e. Users are eligible to withdraw only cash winnings from the Winnings Account to User’s
bank/wallet account once it is validated and KYC verified.
<br/><br/>
f. User should ensure that the User’s bank account / UPI ID are active, failing which, the Platform
will be unable to process the withdrawal.<br/><br/>
g. In case of withdrawal through a bank account or UPI, User should ensure that the name on the
User’s KYC document matches the name of the account holder submitted for withdrawing cash
winnings. In the event the name on the KYC document does not match with the account holder’s
name, the same shall be considered invalid.<br/><br/>
h. All cash winnings shall be paid subject to deduction of withholding taxes as required under
applicable law. All taxes applicable to the User shall be borne by the User.
      </p><br/>
      <p className=" self-start mx-10  text-left  z-30 text-white my-6 font-quicksand font-semibold opacity-70 text-[12px] mb:text-[20px]">
      Platform Fee Information:
      </p>
      <p className=" self-start mx-10 mb:-mt-1 my-1 text-left  z-30 text-white font-quicksand opacity-70 text-[12px] mb:text-[20px]">
      a.  CAPITAL RUSH charges a Platform Fee from the User(s), for making available its e-platform where
Capital Rush game is available and providing the service to the Users to participate in those games of
skill or consume the content as offered.<br/><br/>
b. The Platform Fee for all the products/games is a fixed rate (%) of the Designated Amount and is
between 10% and 30% and under extreme exceptional cases may go beyond this range.<br/><br/>
c. CAPITAL RUSH, in accordance with the Terms & Conditions of the Bonus Program, may give a
Discount in the Platform Fee and thus the Designated Amount shall be accordingly recovered from the
User’s Cash Balances<br/><br/>
c.  This can be easily deduced from the Designated Amount and the total prize offered
      </p><br/>
      <p className=" self-start mx-10  text-left  z-30 text-white my-6 font-quicksand font-semibold opacity-70 text-[12px] mb:text-[20px]">
      Platform Fee Capital Rush:
      </p>
      <p className=" self-start mx-10 mb:-mt-1 my-1 text-left  z-30 text-white font-quicksand opacity-70 text-[12px] mb:text-[20px]">
      a. CAPITAL RUSH charges a ‘Processing Fee’ from the User(s) for facilitating withdrawal of
Winnings through various modes including but not limited to Bank Account and UPI.
<br/><br/>
b. The Processing Fee shall be levied as per the following schedule:<br/><br/>
<div className=" text-white font-quicksand opacity-70 text-[24px]">
        <table
          className="min-w-full text-center"
          style={{ border: "2px solid white" }}
        >
          <thead className="bg-gray-100">
            <tr>
              <th
                style={{ border: "2px solid white" }}
                className="px-6 py-3 text-left font-semibold text-gray-700"
              >
                User Pool
              </th>
              <th
                style={{ border: "2px solid white" }}
                className="px-6 py-3 text-left font-semibold text-gray-700"
              >
                Platform Fees
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            <tr>
              <td
                style={{ border: "2px solid white" }}
                className="px-6 py-4 whitespace-nowrap"
              >
                5 to 25
              </td>
              <td
                style={{ border: "2px solid white" }}
                className="px-6 py-4 whitespace-nowrap"
              >
                10%
              </td>
            </tr>
            <tr>
              <td
                style={{ border: "2px solid white" }}
                className="px-6 py-4 whitespace-nowrap"
              >
                26 to 50
              </td>
              <td
                style={{ border: "2px solid white" }}
                className="px-6 py-4 whitespace-nowrap"
              >
                20%
              </td>
            </tr>
            <tr>
              <td
                style={{ border: "2px solid white" }}
                className="px-6 py-4 whitespace-nowrap"
              >
                51 to 100
              </td>
              <td
                style={{ border: "2px solid white" }}
                className="px-6 py-4 whitespace-nowrap"
              >
                30%
              </td>
            </tr>
          </tbody>
        </table>
      </div><br/>
c. In accordance with the Terms & Conditions, CAPITAL RUSH reserves the right to revise the
Processing Fee and its levy schedule at its sole discretion.
      </p><br/>
      <p className=" self-start mx-10  text-left  z-30 text-white my-6 font-quicksand font-semibold opacity-70 text-[12px] mb:text-[20px]">
      Return, Refund and Cancellation:
      </p>
      <p className=" self-start mx-10 mb:-mt-1 my-1 text-left  z-30 text-white font-quicksand opacity-70 text-[12px] mb:text-[20px]">
      a. Amounts once deposited in the Deposit Account cannot be withdrawn by the User<br/><br/>
b. In the event, that there is an error in the Service, Platform or in a Contest, or a Contest is
cancelled by the Company, the Company may refund amount paid towards the affected Ticket
back to the Deposit Account, provided the reasons are genuine and proved after an investigation
by the Company. Such refund will reflect in the Deposit Amount within a reasonable period of
time.<br/><br/>
c. Please read the rules of each Contest before participating.
      </p><br/>
      <p className=" self-start mx-10  text-left  z-30 text-white my-6 font-quicksand font-semibold opacity-70 text-[12px] mb:text-[20px]">
      User Accounts:
      </p>
      <p className=" self-start mx-10 mb:-mt-1 my-1 text-left  z-30 text-white font-quicksand opacity-70 text-[12px] mb:text-[20px]">
      a. Users must use any money, within 365 days, in their (i) Deposit Account towards purchase of
Tickets and (ii) Winnings Account for withdrawals. The Company shall have the right to
directly forfeit any such unused amount after 365 (three hundred and sixty-five) days with effect
from 01 April 2023 (“Effective Date”) in accordance with the below-mentioned terms<br/><br/>
b. Account Maintenance Fees (“Maintenance Fees”)
<br/><br/>
As on the Effective Date, if a Deposit Account or Winnings Account is lying dormant for
a period of 365 days, the Company shall charge a Maintenance Fee to such User which
shall be computed as follows.<br/><br/>
(i) For Deposit Account: The entire amount lying in the Deposit Account which shall be
inclusive of any indirect taxes.<br/>
(ii) For Winnings Account: The Company will charge an upfront freezing fee (“Upfront
Fee”) of INR 100 for all inactive accounts inclusive of all taxes. <br/>
(iii)The Maintenance Fee is for defraying the technical costs involved in such freezing,
holding any amounts in escrow for users, etc and the Company shall not be required
to provide any warning before charging the Maintenance Fees. The Company shall
however issue a tax invoice to the User while charging the Maintenance Fees to such
User.<br/><br/>
c. Please read the rules of each Contest before participating.<br/><br/>
1. In case the User’s Account continues to be dormant beyond a period of 365 days, the
Company also reserves the right to charge monthly maintenance fees (“Monthly
Maintenance Fee”) which shall be charged on the balance remaining in the Winnings
Account of the User after deduction of the Upfront Fee (“Balance”). The Monthly
Maintenance Fee shall be charged in monthly arrears starting 30 (thirty) days after
365 (three hundred and sixty-five) days of dormancy. The Monthly Maintenance Fee
shall be equal to 8.33% of the Balance and shall be inclusive of all taxes. The User
shall not be given any warning before the charge of the Monthly Maintenance Fee.
The Company shall however issue a tax invoice to the User while charging the
Maintenance Fees to such User<br/><br/>
2. The User shall incur this Monthly Maintenance Fee until his / her account is reverified by the Company and unfrozen.<br/><br/>
3. The User can unfreeze his / her accounts by logging in to his / her account and resubmitting KYC documents required by the Company for re-verification of the
account.<br/><br/>
4.  The User acknowledges and agrees that this measure is designed to prevent
fraud/identity theft and is required to protect the User’s information and account.
The Monthly Maintenance Fee is for defraying the technical and manpower costs
involved in re-verification of the User’s account, holding amounts in escrow, etc.<br/><br/>
5.  In case, the User does not unfreeze his account before the Balance becomes nil, the
User’s account will be permanently blocked. The User will no longer be able to access
this account and information associated with this account, however, this would not
prevent the User from creating a new account on the Platform by following the
process listed herein.
      </p><br/>
      <p className=" self-start mx-10  text-left  z-30 text-white my-6 font-quicksand font-semibold opacity-70 text-[12px] mb:text-[20px]">
      Games of skill:
      </p>
      <p className=" self-start mx-10 mb:-mt-1 my-1 text-left  z-30 text-white font-quicksand opacity-70 text-[12px] mb:text-[20px]">
      a. The Contest hosted by the Company on the Platform are all Games of Skill (defined below). <br/><br/>
b. ‘Games of Skill’, under Indian law, are excluded from the ambit of gambling legislations
including, the Public Gambling Act of 1867 and other state enactments except in the restricted
states, i.e. Andhra Pradesh, Assam, Nagaland, Odisha, Sikkim or Telangana (“Restricted
States”). If the outcome of a game is predominantly determined by skill, then the game is
considered a game of skill.
<br/><br/>
c. Different asset investing need different skills, such as knowledge of the asset, familiarity with
rules, experience, reflexes, experience, practice, etc. By virtue of its classification as a game
of skill, the Contest does not violate the Public Gambling Act, of 1867, and is excluded from
the ambit of certain Indian gambling legislations. <br/><br/>
d. However, Users residing in the Restricted States are prohibited from participating in Contests.
Any participation by such individuals shall be at their sole risk and discretion and the Company
shall not be liable to refund or reimburse any injury or damages suffered by such individuals. <br/><br/>
e. The Company reserves the right to monitor all User activities on the Platform. If any User
participates in any Contest in violation of any central and/or state law(s) in India, the Company
reserves the right to cooperate with law enforcement agencies of the relevant state and report
such participation or/and suspicious activity along with all relevant details of the concerned
User. (The Users based out of the Restricted States are not permitted under applicable Laws to
participate in specific or all games hosted on the Platform and shall not be permitted to connect
to the Game and/or Platform by breaching security measures put in by the Company, including
without limitation through a virtual private network.) <br/><br/>
f. The Company does not support, endorse or offer to any User ‘games of chance’ for money.
Each Contest available on the Platform has clearly defined rules and code of conduct. All Users
are encouraged to read, understand and follow these rules to be successful in these games. The
Company shall not be liable if Users do not adhere to the Game Rules or otherwise engage in
gambling or betting activities on the Platform.
      </p><br/>
      <p className=" self-start mx-10  text-left  z-30 text-white my-6 font-quicksand font-semibold opacity-70 text-[12px] mb:text-[20px]">
      Disclaimer:
      </p>
      <p className=" self-start mx-10 mb:-mt-1 my-1 text-left  z-30 text-white font-quicksand opacity-70 text-[12px] mb:text-[20px]">
      The Game and / or the Contests are based on fictitious assets which have value only within the Game.
The assets are not based on any real-life assets or securities and the Users should not rely on the same
for any reason whatsoever. The Game is only for entertainment and recreation purposes and is not meant
for and does not purport to provide any educational or learning services. The Platform, Game and
Contests are made available only on an as-is basis and the Company does not make any representations
or warranties as to the quality, suitability or merchantability of the Game, Contest or any prizes given
to Users.
      </p><br/>
      {/* <p className=" self-start mx-10  text-left  z-30 text-white my-6 font-quicksand font-semibold opacity-70 text-[12px] mb:text-[20px]">
        4.8 User Accounts:
      </p> */}
      {/* <p className=" self-start mx-10 text-left -mt-4 z-30 text-white font-quicksand opacity-70 text-[12px] mb:text-[20px]">
        a) Users must use any money in their Account within 365 days. CAPITAL
        RUSH shall have the right to directly forfeit any such unused amount
        after 365 (three hundred and sixty-five) days with effect from 01 April
        2023 (“Effective Date”) in accordance with the below-mentioned terms.
        CAPITAL RUSH does not permit any cash withdrawal against any idle
        balance lying in any user’s CAPITAL RUSH account except in accordance
        with applicable law.
        <br />
        b) Account Maintenance Fees (“Maintenance Fees”)
        <br />
        As on the Effective Date, if a User’s Account is lying dormant for a
        period of 365 days, CAPITAL RUSH shall charge an Account Maintenance Fee
        to such User which shall be computed as follows.
        <br />
        i) For Deposit Account: The entire amount lying in the Deposit Account
        which shall be inclusive of any indirect taxes.
        <br />
        ii) For Winnings Account: CAPITAL RUSH will charge an upfront freezing
        fee (“Upfront Fee”) of INR X for all inactive accounts. X will be equal
        to the amount lying in the Winnings wallet of such inactive account
        subject to a maximum cap of INR 100. Amount X shall be inclusive of all
        taxes.
        <br />
        The Maintenance Fee is for defraying the technical costs involved in
        such freezing, holding any amounts in escrow for users, etc and CAPITAL
        RUSH shall not be required to provide any warning before charging the
        Account Maintenance Fees. CAPITAL RUSH shall however issue a tax invoice
        to the User while charging the Account Maintenance Fees to such User.
        <br />
        In case, the User’s Account continues to be dormant beyond a period of
        365 days, CAPITAL RUSH also reserves the right to charge monthly
        maintenance fees (“Monthly Maintenance Fee”) which shall be charged on
        the balance remaining in the Winnings Account of the User after
        deduction of the Upfront Fee (“Balance”). The Monthly Maintenance Fee
        shall be charged in monthly arrears starting 30 (thirty) days after the
        Capital Rush of 365 (three hundred and sixty-five) days of dormancy. The
        Monthly maintenance fee shall be equal to 8.33% of the Balance and shall
        be inclusive of all taxes. The User shall not be given any warning
        before the charge of the Monthly Maintenance Fee. CAPITAL RUSH shall
        however issue a tax invoice to the User while charging the Account
        Maintenance Fees to such User.
        <br />
        The User shall incur this Monthly Maintenance Fee until his / her
        account is re-verified by CAPITAL RUSH and unfrozen.
        <br />
        The User can unfreeze his / her account Capital Rush by logging in to
        his / her account and re-submitting KYC documents required by CAPITAL
        RUSH for re-verification of the account.
        <br />
        The User acknowledges and agrees that this measure is designed to
        prevent fraud/identity theft and is required to protect the User’s
        information and account. The Monthly Maintenance Fee is for defraying
        the technical and manpower costs involved in re-verification of the
        User’s account, holding amounts in escrow, etc.
        <br />
        In case, the User does not unfreeze his account before the Balance
        becomes nil, the User’s account will be permanently blocked. The User
        will no longer be able to access this account and information associated
        with this account, however, this would not prevent the User from
        creating a new account on CAPITAL RUSH by following the process listed
        in this Terms of Use.
      </p>
      <p className=" self-start mx-10  text-left  z-30 text-white my-6 font-quicksand font-semibold opacity-70 text-[12px] mb:text-[20px]">
        4.9 Bonus Program- Terms & Conditions
      </p>
      <p className=" self-start mx-10 text-left -mt-4 z-30 text-white font-quicksand opacity-70 text-[12px] mb:text-[20px]">
        4.9.1 As part of its Business Promotion strategy, CAPITAL RUSH may run a
        Capital Gold Promotion which is a Discount Program whereby the User is
        allowed to accumulate discount eligibility points (referred to as
        ‘Capital Gold) in a separate wallet referred to as ‘Capital Gold
        Wallet’.
        <br />
        4.9.2 Such Capital Gold is granted as per various business promotion
        strategies that may be run by CAPITAL RUSH from time to time.
        <br />
        4.9.3 The Capital Gold is subject to control by CAPITAL RUSH and the
        Company is free to put such restrictions on its availability,
        utilization, inherent discount benefits, time validity, etc. as it may
        be decided from time to time.
        <br />
        4.9.4 All Capital Gold credited to the User account shall be valid for a
        period of 14 days from the date of credit. If the Capital Gold are not
        utilized by the User over a period of 14 days or if the User is inactive
        on CAPITAL RUSH for a period of 14 days, unutilized gold shall be
        automatically expired by CAPITAL RUSH
        <br />
        4.9.5 In the event of termination or blocking of a User’s account, any
        Capital Gold granted to the user until such time shall expire
        immediately, and the User shall not have any right or claim in respect
        of the Capital Gold.
      </p>
      <p className=" self-start mx-10  text-left  z-30 text-white my-6 font-quicksand font-semibold opacity-70 text-[12px] mb:text-[20px]">
        Games of skill
      </p>
      <p className=" self-start mx-10 text-left -mt-4 z-30 text-white font-quicksand opacity-70 text-[12px] mb:text-[20px]">
        5.1 . The league hosted by CAPITAL RUSH on the Platform are all Games of
        Skill (defined below). Different asset investing need different skills,
        such as knowledge of the asset, familiarity with rules, experience,
        reflexes, experience, practice, etc
        <br />
        5.2 . ‘Games of Skill’, under Indian law, are excluded from the ambit of
        gambling legislations including, the Public Gambling Act of 1867 and
        other state enactments except in the Restricted States. If the outcome
        of a game is predominantly determined by skill, then the game is
        considered a game of skill. By virtue of its classification as a game of
        skill, Capital Rush does not violate the Public Gambling Act, of 1867,
        and is excluded from the ambit of certain Indian gambling legislations.
        However, Users should note that owing to legislative restrictions in the
        Restricted States, and hence residents of such Restricted States are
        prohibited from participating in CAPITAL RUSH League.
        <br />
        5.3 . Hence, the individuals residing in the Restricted States should
        not participate in any Contests or Mobile Games offered on the Platform.
        Any participation by such individuals shall be at their sole risk and
        discretion and CAPITAL RUSH shall not be liable to refund or reimburse
        any injury or damages suffered by such individuals.
        <br />
        5.4 . CAPITAL RUSH reserves the right to monitor all activities from the
        User’s Account on the Platform. If any User participates in any Contest
        in violation of any central and/or state law(s) in India, CAPITAL RUSH
        reserves the right to cooperate with law enforcement agencies of the
        relevant state and report such participation or/and suspicious activity
        along with all relevant details of the concerned User. The users based
        out of the Restricted States are not permitted under applicable Laws to
        participate in specific or all games hosted on the Platform and shall
        not be permitted to connect to the Game and/or Platform by breaching
        security measures put in by the Company, including without limitation
        through a virtual private network.
        <br />
        5.5 . CAPITAL RUSH does not support, endorse or offer to any User ‘games
        of chance’ for money. Each Contest available on the Platform has clearly
        defined rules and code of conduct. All Users are encouraged to read,
        understand and follow these rules to be successful in these games.
        CAPITAL RUSH shall not be liable if Users do not adhere to the Game
        Rules or otherwise engage in gambling or betting activities on the
        Platform.
      </p>

      <p className=" self-start mx-10  text-left  z-30 text-white my-6 font-quicksand font-semibold opacity-70 text-[12px] mb:text-[20px]">
        5.6 . License Limitations
      </p>
      <p className=" self-start mx-10 text-left -mt-4 z-30 text-white font-quicksand opacity-70 text-[12px] mb:text-[20px]">
        The service may not be used in any way that violates these License
        Limitations, and doing so may result in the instant cancellation of the
        limited license you have been granted as well as legal repercussions.
        Any attempt by you to disrupt or interfere with the service including
        undermining or manipulating the legitimate operation of any games of
        Capital Rush is a violation of Capital Rush policy and may be a
        violation of criminal and civil laws.
        <br />
        <br />
        You agree that you will not, under any circumstances: engage in any act
        that Capital Rush deems to be in conflict with the spirit or intent of
        the service, including but not limited to circumventing or manipulating
        these terms, our game rules, game mechanics, or policies; interfere or
        attempt to interfere with the proper functioning of the service or
        connect to or use the service in any way not expressly permitted by
        these terms of service use any unauthorized third party software that
        accesses intercepts, or otherwise collects information from or through
        the service or that is in transit from or to the service, including,
        without limitation, any software that reads areas of RAM or streams of
        network traffic used by the service to store information about our game
        characters, elements, or environment; make any automated use of the
        system, or take any action that imposes or may impose (in our sole
        discretion) an unreasonable or disproportionately large load on our
        infrastructure; bypass any robot exclusion headers or Use, facilitate,
        create, or maintain any unauthorized connection to the service,
        including without limitation using any software, equipment, or device to
        send material or communications, scrape, spider, or crawl the service,
        or collect or alter data.
        <br />
        <br />
        Reverse engineering, decompiling, disassembling, deciphering, or
        attempting to in any other way to derive the source code for any
        underlying software or other intellectual property used to provide the
        Service or to obtain any information about any such underlying software
        or other intellectual property, except as expressly authorized by
        Capital Rush or our copyright holders, or as otherwise permitted by
        applicable open-source licenses, in connection with any violation of any
        applicable law or regulation, or do anything that promotes the violation
        of any applicable law or regulation, cheating & hacking.
        <br />
        <br />
        You agree that you will not, under any circumstances:
      </p>
      <ul className=" self-start flex flex-col gap-3 mx-6">
        <li className="  text-white font-quicksand opacity-70 text-[12px] mb:text-[20px] pl-4 ">
          Use unlawful third-party software that is intended to alter or
          interfere with the Service or any aspect of our gaming experience,
          such as cheats, exploits, automation software, bots, hacks, or mods;
        </li>
        <li className="  text-white font-quicksand opacity-70 text-[12px] mb:text-[20px] pl-4 ">
          Use illegal third-party software such as mods, hacks, bots, automation
          software, cheats, or exploits that alter or interfere with the Service
          or our gaming experience;
        </li>
        <li className="  text-white font-quicksand opacity-70 text-[12px] mb:text-[20px] pl-4 ">
          Either (1) any computer or server used to provide or support the
          service or any of our games (each, a “Server”), or (2) any other
          person’s enjoyment of the Service or any of our games; disrupt,
          overburden, or help or assist in the disruption or overburdening of
          either;
        </li>
        <li className="  text-white font-quicksand opacity-70 text-[12px] mb:text-[20px] pl-4 ">
          Any attempt to disrupt the Service or another person’s use or
          enjoyment of the Service, including without limitation of the spread
          of a virus, denial-of-service attacks against the Service, or other
          attacks, must not be initiated, assisted, or involved in.; or
        </li>
        <li className="  text-white font-quicksand opacity-70 text-[12px] mb:text-[20px] pl-4 ">
          Use any method other than the user interface provided by Capital Rush
          to attempt to gain unauthorized access to the Service, other Games
          available on the Server, Accounts registered to third parties, or
          computers, Servers, or networks connected to the Service. This
          includes, but is not limited to, getting around or changing any
        </li>
        <li className="  text-white font-quicksand opacity-70 text-[12px] mb:text-[20px] pl-4 ">
          security measures, technology, device, or software that is in place;
        </li>
        <li className="  text-white font-quicksand opacity-70 text-[12px] mb:text-[20px] pl-4 ">
          Post any information that is abusive, threatening, obscene,
          defamatory, libelous, racially, sexually, religiously, or otherwise
          objectionable or offensive;
        </li>
        <li className="  text-white font-quicksand opacity-70 text-[12px] mb:text-[20px] pl-4 ">
          Post any information that contains nudity, excessive violence, or
          offensive subject matter or that contains a link to such content;
        </li>
        <li className="  text-white font-quicksand opacity-70 text-[12px] mb:text-[20px] pl-4 ">
          Attempt to, or harass, abuse, or harm, or advocate or incite
          harassment, abuse, or harm of another person, or group, including our
          employees, our customers, our customer service representatives; or
        </li>
        <li className="  text-white font-quicksand opacity-70 text-[12px] mb:text-[20px] pl-4 ">
          Make available through the Service any material or information that
          infringes any copyright, trademark, patent, trade secret, right of
          privacy, right of publicity, or another right of any person or entity
          or impersonates any another person, including without limitation a
          Capital Rush employee;
        </li>
        <li className="  text-white font-quicksand opacity-70 text-[12px] mb:text-[20px] pl-4 ">
          Use the Service or any portion of it for any business purpose without
          first receiving our express written consent, such as gathering or
          transferring Virtual Items for sale or (1) transmitting or
          facilitating any commercial advertisement or solicitation;
          transmitting unauthorized communications through the Service, such as
          junk mail, chain letters, spam, and any materials that promote
          malware, spyware, and downloadable items; or use the Service or any
          part thereof to perform in-game services, such as power-leveling and
          item collection services, in exchange for payment outside the Service
        </li>
      </ul>
      <p className=" self-start mx-10  text-left  z-30 text-white my-6 font-quicksand font-semibold opacity-70 text-[12px] mb:text-[20px]">
        5.7 .Fees & Paid Services
      </p>
      <p className=" self-start mx-10 text-left -mt-4 z-30 text-white font-quicksand opacity-70 text-[12px] mb:text-[20px]">
        Usage of the premium services or participate in the League of Capital
        Rush requires payment of fees and which are required to be paid through
        the modes as specified hereunder. To take part in these activities, you
        must pay the subscription fee or any other expenses. Subscription
        payments and other costs for specific services are paid as described
        under “Purchases – A constrained, individual, non-exclusive, revocable,
        and non-sublicensable license to use the Service is available for
        purchase through the Service for “real world” money.
        <br />
        “virtual currency”, including but not limited to virtual cash, for use
        in games;
        <br />
        “virtual in-game items” (together with “virtual currency”, and “Virtual
        Items”); other goods or services (“Merchandise”).
        <br />
        Virtual items and physical goods cannot be transferred. You may not
        sell, redeem, or otherwise transfer Virtual Items or products to any
        person or entity, including but not limited to Capital Rush, another
        user, or any third party, unless expressly permitted in the Service.
        <br />
        REDEMPTIONS AND PURCHASES OF THIRD-PARTY VIRTUAL CURRENCY MADE THROUGH
        THE SERVICE ARE FINAL AND NON-REFUNDABLE.
        <br />
        Paid Services – Fees are payable in advance and are not refundable in
        whole or in part: Capital Rush reserves the right to change our fees or
        billing methods at any time. If you pay a periodic (e.g. monthly)
        subscription for Capital Rush Service, we will provide you with notice
        of any changes to the fees or billing methods at least thirty (30) days
        in advance by posting such changes on the Capital Rush Service. You are
        responsible for reviewing the Capital Rush Service to obtain timely
        notice of such changes. Your continued use of the Capital Rush Service
        means that you accept such changes. You can cancel your subscription at
        any time if any change is unsatisfactory to you, but Capital Rush won’t
        reimburse any payments that may have already been charged to your
        account prior to your cancellation, and we won’t prorate fees for any
        subscription.
        <br />
        If you use a Capital Rush service for which taxes are chargeable,
        Capital Rush may charge you for those taxes in addition to your
        subscription or other fees, with prospective or retrospective impact (as
        applicable). Options for payment You agree to the terms and conditions
        that apply to each payment method you select, and you may pay fees using
        the ways offered for the specific Capital Rush service. Capital Rush may
        accept several payment options. You guarantee to Capital Rush that you
        are the authorized user of the credit card or other payment method when
        you give Capital Rush your credit card or other payment information. By
        agreeing to these Terms of Service, you have agreed to permit Capital
        Rush to automatically renew your subscription to Capital Rush Service by
        charging a valid credit card number that you have provided to Capital
        Rush.
        <br />
        Capital Rush will make commercially reasonable efforts to help you
        obtain the proper software for your telephone, device or platform.
        Capital Rush shall not be liable or responsible for any Purchaser
        Errors. In no event shall Capital Rush be liable for any defects or
        other problems associated with downloads or purchases through the Site.
      </p>
      <p className=" self-start mx-10  text-left  z-30 text-white my-6 font-quicksand font-semibold opacity-70 text-[12px] mb:text-[20px]">
        5.8 . Cancellation of your account
      </p>
      <p className=" self-start mx-10 text-left -mt-4 z-30 text-white font-quicksand opacity-70 text-[12px] mb:text-[20px]">
        You are always free to terminate your account or a specific membership.
        Your only option if you disagree with the provisions in these terms and
        conditions of service is to stop using our games, website, and services,
        as well as to cancel any subscriptions or accounts you may have. The
        amount or type of fees, surcharges, applicable taxes, billing methods,
        or any change to the fees, applicable taxes, surcharges, or billing
        methods for Capital Rush Services and/or any Content or Entitlements
        thereon shall be non-refundable. You understand and agree that the
        cancellation of your account or a specific subscription shall not
        entitle Capital Rush to refund any amounts to you. Any sums payable to
        third-party vendors or content providers prior to your cancellation are
        likewise your responsibility. Capital Rush Services must be paid for any
        past-due or unpaid fees as well as other outstanding concerns within 24
        hours of the deadline.
        <br />
        For any amounts due from the user and not paid, Capital Rush will have
        the right to recover the said amounts from the user.
      </p>
      <p className=" self-start mx-10  text-left  z-30 text-white my-6 font-quicksand font-semibold opacity-70 text-[12px] mb:text-[20px]">
        5.9 . Rules of Conduct:
      </p>
      <p className=" self-start mx-10 text-left -mt-4 z-30 text-white font-quicksand opacity-70 text-[12px] mb:text-[20px]">
        You will breach the Terms of Use, in addition to the restrictions stated
        in the Terms & Conditions, if you (or anyone else using your Account)
        engage in any of the following behaviour:
      </p>
      <ul className=" self-start flex flex-col gap-3 mx-6">
        <li className="  text-white font-quicksand opacity-70 text-[12px] mb:text-[20px] pl-4 ">
          Anything that is hurtful, abusive, racially or ethnically offensive,
          vulgar, sexually explicit, defamatory, infringing, invasive of one’s
          right to privacy or right of publicity, or content that a reasonable
          person would find objectionable to send or facilitate distribution of.
        </li>
        <li className="  text-white font-quicksand opacity-70 text-[12px] mb:text-[20px] pl-4 ">
          Try to obtain from any other Member or users a password, address,
          credit card number, account information, or any other sensitive
          information.
        </li>
        <li className="  text-white font-quicksand opacity-70 text-[12px] mb:text-[20px] pl-4 ">
          Any program or content that you don’t own or have authorization to
          freely distribute cannot be uploaded or distributed.
        </li>
        <li className="  text-white font-quicksand opacity-70 text-[12px] mb:text-[20px] pl-4 ">
          Any illegal activity, such as hacking, cracking, or the dissemination
          of phony software, uploading contaminated or virus-filled files/ data
          would not be tolerated.
        </li>
        <li className="  text-white font-quicksand opacity-70 text-[12px] mb:text-[20px] pl-4 ">
          Improperly use the in-game support or complaint buttons or make false
          reports to Capital Rush staff members.
        </li>
        <li className="  text-white font-quicksand opacity-70 text-[12px] mb:text-[20px] pl-4 ">
          Breaching the terms of service for third-party tools, interactive
          services providers, local, state, and federal laws, and international
          law where applicable.
        </li>
        <li className="  text-white font-quicksand opacity-70 text-[12px] mb:text-[20px] pl-4 ">
          falsify or remove any author attributions, legal or other proper
          notices, or proprietary designations or labels of the origin or source
          of any software or other content in a file that has been submitted.
        </li>
      </ul>
      <p className=" self-start mx-10  text-left  z-30 text-white my-6 font-quicksand font-semibold opacity-70 text-[12px] mb:text-[20px]">
        5.10 . Intellectual Property:
      </p>
      <p className=" self-start mx-10 text-left -mt-4 z-30 text-white font-quicksand opacity-70 text-[12px] mb:text-[20px]">
        The entire contents of the Site and each area therein are the property
        of Capital Rush and/or third-party content providers. The Site,
        including, without limitation, all communication features, contains
        copyrighted material, trademarks, and other proprietary information.
        This includes, without limitation, text, software, photographs, videos,
        graphics, music, and sound. Capital Rush is the sole owner of the
        copyright for the choice, organization, arrangement, and improvement of
        such information. You are not allowed to alter, publish, transmit, take
        part in the transfer or sale of, create derivative works from, or
        otherwise use for commercial gain any of the site’s content. (including,
        without limitation, content that Capital Rush enables you to download)
        without the express written permission of Capital Rush and the copyright
        owner. No author attribution, trademark, legend, or copyright notice may
        be changed or removed during any authorized copying, redistribution, or
        publication of copyrighted content. You are only permitted to download
        copyrighted content from the Site for personal use. You recognize that
        all items posted on the site remain the property of Capital Rush and/or
        third-party content providers and that downloading copyrighted materials
        does not give you any ownership stake in those works.
      </p>
      <p className=" self-start mx-10  text-left  z-30 text-white my-6 font-quicksand font-semibold opacity-70 text-[12px] mb:text-[20px]">
        Safety precautions and responsible gaming
      </p>
      <p className=" self-start mx-10 text-left -mt-1 z-30 text-white font-quicksand opacity-70 text-[12px] mb:text-[20px]">
        <b>
          6.1 . CAPITAL RUSH suggests that Users adopt a balanced approach while
          engaging with any of the contests on the Platform and safeguard
          themselves against any adverse effects. If played responsibly.
        </b>
      </p>
      <p className=" self-start mx-10 text-left -mt-1 z-30 text-white font-quicksand opacity-70 text-[12px] mb:text-[20px]">
        6.2 . You should take certain standard health and safety precautions
        while playing any Mobile Game, including taking adequate breaks, sitting
        at a reasonable distance from the screen, playing in a well-lit
        environment, and avoiding playing when tired, drowsy, intoxicated or
        under the influence of drugs Avoid playing without breaks over long
        periods of time as this could affect Your performance and could
        negatively impact hand-eye coordination, balance, and multi-tasking
        ability.
      </p>
      <p className=" self-start mx-10 text-left -mt-1 z-30 text-white font-quicksand opacity-70 text-[12px] mb:text-[20px]">
        <b>
          6.3 . The Platform or the Mobile Games offered on the Platform may
          contain flashing lights, realistic images, patterns and simulations
          which may cause certain side effects. If Your hands, wrists, arms,
          eyes or other parts of Your body become tired or sore while playing,
          or if You feel symptoms such as tingling, numbness, burning or
          stiffness, stop and rest before playing again. If You continue to have
          any of these above symptoms, please stop playing IMMEDIATELY and
          consult a doctor.
        </b>
      </p>
      <p className=" self-start mx-10 text-left -mt-1 z-30 text-white font-quicksand opacity-70 text-[12px] mb:text-[20px]">
        6.4 . If You play contests on the Platform, give Yourself plenty of room
        to play and always be aware of Your surroundings. While playing any
        Mobile Game You may be moving around the play area and using Your hands
        to control gameplay. You must ensure that You are not near other people,
        objects, stairs, balconies, windows, walls, furniture or other objects
        that may pose a danger to You or could be damaged during the play. Never
        handle sharp or dangerous objects while playing any Mobile Game on the
        Platform.
      </p>
      <p className=" self-start mx-10 text-left -mt-1 z-30 text-white font-quicksand opacity-70 text-[12px] mb:text-[20px]">
        <b>
          6.5 . It is Your responsibility to control Your surroundings and
          movements at all times when playing the game to ensure that You don’t
          injure Yourself, any other persons, damage any property etc. Any
          playing of the contests is at Your own risk and CAPITAL RUSH shall not
          be liable for any death, injury or health Capital Rush resulting from
          Your use of the Platform.
        </b>
      </p>
      <p className=" self-start mx-10 text-left -mt-1 z-30 text-white font-quicksand opacity-70 text-[12px] mb:text-[20px]">
        6.6 . You agree that Your use of the Platform and to play the contests
        is at Your own risk, and it is Your responsibility to maintain such
        health, liability, hazard, personal injury, medical, life, and other
        insurance policies as You deem reasonably necessary for any injuries
        that You may incur while using the Platform.
      </p>
      <p className=" self-start mx-10 text-left -mt-1 z-30 text-white font-quicksand opacity-70 text-[12px] mb:text-[20px]">
        6.7 . You hereby agree that if the terms of this Agreement are not
        adhered by You, CAPITAL RUSH will be irreparably damaged, and therefore
        You agree that the Platform shall be entitled, without bond, other
        security, proof of damages, to appropriate equitable remedies with
        respect to any breach of this Agreement, in addition to any other
        remedies available under Applicable Law.
      </p>
      <p className=" self-start mx-10  text-left  z-30 text-white my-6 font-quicksand font-semibold opacity-70 text-[12px] mb:text-[20px]">
        7. Community rules and code of conduct
      </p>
      <p className=" self-start mx-10 text-left -mt-1 z-30 text-white font-quicksand opacity-70 text-[12px] mb:text-[20px]">
        Please note that we have tried to draft our Community Guidelines as
        detailed as possible, however, this is not an exhaustive list of
        policies, and every content, if reported, shall be analysed based on the
        parameters mentioned in these guidelines that may be indirectly or
        directly violating these guidelines. User and host discretion are
        warranted to ensure that apart from the examples listed below, no
        content shall be posted that may violate these guidelines.
        <br /> <br />
        We update our Community Guidelines from time to time to ensure that we
        act as a safe platform.
        <br />
        <br />
        We urge you that if you find content that violates these Community
        Guidelines, please report it.
        <br />
        <br />
        If you see something that you think may violate our Community
        Guidelines, please help us by reporting the same on our reporting option
        available on the users’ profile. We will review these reports internally
        and will work as quickly and as efficiently as possible to remove
        content that does not meet our Community Guidelines or take actions
        appropriate for such content after review. Please help us by providing
        as much information as possible, such as links, usernames, and
        descriptions of the content, so we can find and review it effectively.
        <br />
        <br />
        8.1 . Any deductions or forfeiture of Balances made from Your Account
        shall be made at Our sole and absolute discretion and shall not result
        in any liability on CAPITAL RUSH whatsoever. We may choose to provide a
        right of appeal to the User after deleting, closing or forfeiting the
        balances in his/her Account. However, such right shall be provided at
        the sole and absolute discretion of CAPITAL RUSH and the User shall not
        claim such right or any other recourse from CAPITAL RUSH.
        <br />
        <br />
        8.2 . Indemnification: You agree to defend, indemnify, and hold us, our
        licensors, and our affiliates, contractors, vendors, and content
        providers harmless from any liabilities, claims, and costs, including
        attorneys’ fees, that result from or are related to a violation of these
        Terms & Conditions of Service for which you are accountable. Without
        limiting the generality of the foregoing, you agree to indemnify and
        hold Capital Rush and its licensors harmless for any improper or illegal
        use of your Account, including the illegal or improper use of your
        Account by someone to whom you have given permission to use your
        Account. You agree that you will be personally responsible for your use
        of our services and for all of your communication and activity on
        Capital Rush Services, including any Content you contribute, and that
        you will indemnify and hold harmless Capital Rush, its licensors, and
        our affiliates from any liability or damages arising from your conduct
        on Capital Rush Services, including any Content that you contribute.
        Capital Rush and its licensors reserve the right, at their own expense,
        to assume the exclusive defense and control of any matter otherwise
        subject to indemnification by you. In that event, you shall have no
        further obligation to provide indemnification to Capital Rush and/or its
        licensors in that matter. After the Terms of Service expire, this
        Section will remain in effect.
      </p>
      <p className=" self-start mx-10  text-left  z-30 text-white my-6 font-quicksand font-semibold opacity-70 text-[12px] mb:text-[20px]">
        9. Termination
      </p>
      <p className=" self-start mx-10 text-left -mt-1 z-30 text-white font-quicksand opacity-70 text-[12px] mb:text-[20px]">
        9.1 . Your access to the Platform may be terminated if:
        <br /> <br />
        9.1.1 . You voluntarily uninstall the Platform from Your device;
        <br /> <br />
        9.1.2 . You knowingly or unknowingly cause direct or indirect breach, as
        ascertained by CAPITAL RUSH, of these Terms of Use or Privacy Policy as
        a whole or in part; or
        <br /> <br />
        9.1.3 . You do not pay the requisite fee, if any, should CAPITAL RUSH
        charge for use of the App.
        <br /> <br />
        9.2 . We may have to terminate Your access to the Platform if:
        <br /> <br />
        9.2.1 . We are required to do so by law (for example, where the access
        to and/or provision of the Platform to You becomes, unlawful);
        <br /> <br />
        9.2.2 . The third-party Person, if any, with whom We offered the
        Platform to You has terminated its relationship with Us or ceased to
        offer the related services to Us or to You;
        <br /> <br />
        9.2.3 . The provision of Platform to You, is no longer commercially
        viable or feasible for Us; or
        <br /> <br />
        9.2.4 . You are a repeat infringer of this Agreement.
        <br /> <br />
        9.3 . We may terminate this Agreement at any time, with or without
        notice and may disable Your access to the Platform and/or bar You from
        any future use of the Platform.
        <br /> <br />
        9.4 . You may terminate this Agreement at any time by terminating Your
        access to the Platform. However, certain obligations of Yours under this
        Agreement shall continue to prevail even on such termination.
        <br /> <br />
        9.5 . When this Agreement comes to an end, all of the legal rights,
        obligations and liabilities that You and CAPITAL RUSH have benefited
        from, been subject to (or which have accrued over time whilst the
        Agreement has been in force) or which are expressed to continue
        indefinitely, shall be unaffected by this cessation, and shall continue
        to apply to such rights, obligations and liabilities indefinitely.
        Capital Rush may terminate access to any online or mobile products
        and/or Capital Rush Services (and/or any portion thereof) at any time by
        giving you notice of such termination within the time period specified
        when you joined the particular Capital Rush Service, or if no time
        period for notice of termination was specified, then within thirty (30)
        days of the date such notice is either (at Capital Rush’ discretion)
        provided to you or is posted on the applicable product or Capital Rush
        Service or on the website of Capital Rush. Capital Rush may also
        terminate access to Capital Rush services for violation of these terms &
        conditions if Capital Rush (in its sole discretion) deems that your use
        of Capital Rush Services renders Capital Rush less safe for others
        and/or minors or for illegal or improper use of Capital Rush Services,
        Content, Entitlement, products, or our Intellectual Property as
        determined by Capital Rush in its sole discretion. You may lose your
        username and ids as a result of termination. In response to a violation
        of these Terms of Service or any other agreement applicable to Capital
        Rush services accessed by you, Capital Rush may issue you a warning,
        suspend your Account, selectively remove, revoke or garnish entitlements
        at an Account, and/or device level, immediately terminate any and all
        Accounts that you have established and/or temporarily or permanently ban
        your device and/or machine from accessing all Capital Rush Services or
        certain Capital Rush Services, no refund will be granted, no
        entitlements will be credited to you or converted to cash or other forms
        of reimbursement, and you will have no further access to your Account or
        entitlements associated with your Account. You acknowledge that in such
        an instance Capital Rush is not required to provide you notice before
        taking action to suspend or terminate your Account, temporarily or
        permanently ban your device from some or all Capital Rush Services or
        selectively removing, revoke, or garnish entitlements associated with
        your Account. If Capital Rush terminates your Account, you may not
        participate in our service again without our express permission. You may
        not allow individuals whose accounts have been terminated by Capital
        Rush to use your Account. To delete the data & user info with Capital
        Rush user needs to send us an email at hello@capitalrush.gg within 30
        days of uninstalling. but we do not guarantee of deletion of data that
        we share with 3rd parties before the aforementioned period.
      </p>
      <p className=" self-start mx-10  text-left  z-30 text-white my-6 font-quicksand font-semibold opacity-70 text-[12px] mb:text-[20px]">
        10. Disclaimers
      </p>
      <p className=" self-start mx-10 text-left -mt-1 z-30 text-white font-quicksand opacity-70 text-[12px] mb:text-[20px]">
        10.1 . No warranties: The Contents provided through the Platform may
        include technical inaccuracies or typographical errors. CAPITAL RUSH may
        make changes or improvements to the Platform at any time. The Contents
        or any information available on the Platform is provided “as is” and “as
        available” and without warranties of any kind either expressed or
        implied to the fullest extent permissible pursuant to Applicable Laws,
        including but not limited to:
        <br /> <br />
        10.1.1 . any implied warranty or merchantability, fitness for a
        particular purpose;
        <br /> <br />
        10.1.2 . that the contents of the Platform will be uninterrupted or
        error-free;
        <br /> <br />
        10.1.3 . that defects, if any on the Platform will be corrected;
        <br /> <br />
        10.1.4 . the Platform being constantly available or available at all;
        <br /> <br />
        10.1.5 . installation or uninstallation choices in relation to the
        Platform being successfully executed in all cases;
        <br /> <br />
        10.1.6 . Your personal ability to use the Platform;
        <br /> <br />
        10.1.7 . Your satisfaction with the use of the Platform;
        <br /> <br />
        10.1.8 . the accuracy of the data provided by the Platform;
        <br /> <br />
        10.1.9 . the security and privacy of Your data;
        <br /> <br />
        10.1.10 . that all bugs or errors in relation to the Platform will be
        corrected;
        <br /> <br />
        10.1.11 . that the Platform will be compatible with all devices and all
        networks;
        <br /> <br />
        10.1.12 . that the Platform is fit for a particular purpose or use;
        <br /> <br />
        10.1.3 . that the Platform and the contents thereof are accessible in
        every location; or
        <br /> <br />
        10.1.4 . that the Platform and the contents would be perpetually secure
        and not prone to breaches of security anywhere in the world.
        <br /> <br />
        10.2 . CAPITAL RUSH, its officers, directors, employees, affiliates and
        agents, and any other service provider(s) responsible for providing
        access to the Platform in connection with this Agreement will not be
        liable for any acts or omissions, including a third party Person, and
        including those vendors participating in CAPITAL RUSH’ offerings made to
        You, or for any unauthorized interception of data or breaches of this
        Agreement attributable in part to the acts or omissions of third parties
        Persons, or for damages that result from the operation systems,
        equipment, facilities or services provided by third parties Persons that
        are interconnected with CAPITAL RUSH.
        <br /> <br />
        10.3 . The Platform may include links to other mobile applications
        and/or websites (some of which may be automated search results) that may
        contain materials that are objectionable, unlawful, or inaccurate. We do
        not endorse or support these links or the products and services they
        provide; these links are provided for Your convenience only. We are not
        responsible or liable for the content or accuracy of such links.
        <br /> <br />
        10.4 . We may stop the provision of the Platform (or any part thereof),
        permanently or temporarily, to You or to Users generally or may modify
        or change the nature of the Platform and/or these Terms of Use at Our
        sole discretion, without any prior notice to You. Your use of the
        Platform following any such modification constitutes Your deemed
        acceptance to be bound by the Agreement (or as it may be modified).
        <br /> <br />
        10.5 . You agree that You are responsible for all data charges You incur
        through use of the Platform.
      </p>
      <p className=" self-start mx-10  text-left  z-30 text-white my-6 font-quicksand font-semibold opacity-70 text-[12px] mb:text-[20px]">
        10.6 . Sponsored Content:
      </p>
      <p className=" self-start mx-10 text-left -mt-1 z-30 text-white font-quicksand opacity-70 text-[12px] mb:text-[20px]">
        10.6.1 . You agree and acknowledge that CAPITAL RUSH may, pursuant to
        its engagement with certain Sponsored Content Partners, place certain
        Sponsored Content on, about, or in conjunction with the other content
        within the Platform. The manner, mode and extent of display of such
        Sponsored Content is subject to change without a specific notice to You.
        We don’t promise to but will try Our best to give You a prior notice in
        this regard.
        <br />
        <br />
        10.6.2 . The content displayed on the Platform is for Your
        non-commercial and personal use. However, Sponsored Content Partners may
        use the Platform to display their respective Sponsored Content for
        commercial purposes. You are not allowed to copy, reproduce, alter,
        modify, create derivative works of, or publicly display any content
        displayed on the Platform.
      </p>
      <p className=" self-start mx-10  text-left  z-30 text-white my-6 font-quicksand font-semibold opacity-70 text-[12px] mb:text-[20px]">
        10.7 . Force Majeure:
      </p>
      <p className=" self-start mx-10 text-left -mt-1 z-30 text-white font-quicksand opacity-70 text-[12px] mb:text-[20px]">
        CAPITAL RUSH shall not be liable for any damages whatsoever arising out
        of Force Majeure Event or other similar circumstances, directly or
        indirectly to the Users as a result of playing Mobile Games or using the
        services offered by CAPITAL RUSH on the Platform. A Force Majeure Event
        is a real or potential labour disputes, governmental actions, war or
        threat of war, sabotage, civil unrest, demonstrations, fire, storm,
        flooding, explosion, earthquake, provisions or limitations of materials
        or resources, inability to obtain the relevant authorization, accident,
        and defect in electricity or telecommunication network that affects the
        Company’s ability to offer the services or/and the Mobile Games on the
        Platform. Force majeure or other event beyond CAPITAL RUSH’s control
        hindering, delaying or complicating the maintenance of the Platform
        entitles CAPITAL RUSH to suspend or limit the Platform until further
        notice.
      </p>
      <p className=" self-start mx-10  text-left  z-30 text-white my-6 font-quicksand font-semibold opacity-70 text-[12px] mb:text-[20px]">
        11. Governing law and dispute resolution
      </p>
      <p className=" self-start mx-10 text-left -mt-1 z-30 text-white font-quicksand opacity-70 text-[12px] mb:text-[20px]">
        11.1 . The Platform may be controlled and operated through any country
        and will be subject to the laws of that state in which they are
        controlled and operated by the User. If You use the Platform from any
        location, then, You are responsible for compliance with the local laws
        applicable to You.
        <br />
        <br />
        11.2 . All or any disputes arising out of or touching upon or in
        relation to this Agreement including the interpretation and validity of
        the terms thereof and the respective rights and obligations of the
        parties shall be settled through arbitration. The arbitration shall be
        governed by the Arbitration & Conciliation Act, 1996 (India) or any
        statutory amendments/modifications thereto for the time being in force.
        <br />
        <br />
        11.3 . The arbitration proceedings shall be held at Jaipur, Rajasthan by
        a sole arbitrator who shall be appointed by CAPITAL RUSH and whose
        decision shall be final and binding upon all the parties.
        <br />
        <br />
        11.4 . Subject to the arbitration clause, the courts at Jaipur,
        Rajasthan alone shall have the jurisdiction. The language of the
        arbitration proceedings shall be in English.
      </p>
      <p className=" self-start mx-10  text-left  z-30 text-white my-6 font-quicksand font-semibold opacity-70 text-[12px] mb:text-[20px]">
        12. Referral program
      </p>
      <p className=" self-start mx-10 text-left -mt-1 z-30 text-white font-quicksand opacity-70 text-[12px] mb:text-[20px]">
        1. CAPITAL RUSH may offer referral programs (“Referral Program”) on the
        Platform to allow all its Users to receive certain rewards in the form
        of Capital Gold or cash (“Rewards”) for each player that they refer to
        play on the Platform
        <br />
        <br />
        2. All active Users of the Platform are eligible to participate in the
        Referral Program except in cases where an Account has been suspended or
        has otherwise been disallowed by CAPITAL RUSH from participation in the
        Referral Program.
        <br />
        <br />
        3. Only ‘successful referrals’ will be counted and eligible to receive
        the Rewards. A successful referral is an event in which a new User will
        register on the Platform and complete the sign-up by clicking on the
        referral link of the referrer or by putting the referrer’s unique
        referral code.
        <br />
        <br />
        4. The use cases for such rewards will be the sole discretion of CAPITAL
        RUSH and can be changed at any point of time.
      </p>
      <p className=" self-start mx-10  text-left  z-30 text-white my-6 font-quicksand font-semibold opacity-70 text-[12px] mb:text-[20px]">
        5. Disqualification from Referral Programs
      </p>
      <p className=" self-start mx-10 text-left -mt-1 z-30 text-white font-quicksand opacity-70 text-[12px] mb:text-[20px]">
        1. Users will not receive credit for referring themselves by creating
        multiple Accounts.
        <br />
        <br />
        2. CAPITAL RUSH reserves the right, in its sole discretion, to suspend
        or disqualify an Account from the Referral Program or nullify the
        referral Rewards.
        <br />
        <br /> <b>6. Taxes –</b> The Users are responsible for paying any and
        all taxes or commissions related to the Rewards earned by them through
        the Referral Programs on the Platform. CAPITAL RUSH reserves the right
        to withhold taxes as appropriate and as required under Applicable Laws.
        <br />
        <br />
        13.1 . Users can participate in a Contest with other Users without any
        restriction on participation, unless specified otherwise in the Rules or
        the Agreement. Users can participate by choosing any of the upcoming
        Contests which will be linked to any of the current of upcoming
        real-world event.
        <br />
        <br />
        13.2 . Users will not be offered the opportunity or option to
        auto-complete or auto-fill their teams and/or responses within the
        Contest.
        <br />
        <br />
        13.3 . The ranks and credits of players keep fluctuating during a
        contest.
        <br />
        <br />
        13.4 . CAPITAL RUSH shall ensure that all Contests offered to the Users
        participating in CAPITAL RUSH Super Team are competitive and incorporate
        principles of fair play.
      </p>
      <p className=" self-start mx-10  text-left  z-30 text-white my-6 font-quicksand font-semibold opacity-70 text-[12px] mb:text-[20px]">
        14. Feedback:
      </p>
      <p className=" self-start mx-10 text-left -mt-1 z-30 text-white font-quicksand opacity-70 text-[12px] mb:text-[20px]">
        You may be asked to provide suggestions, comments, requests for
        noticeable bugs and other feedback with respect to the Beta Game
        (“Feedback”). You hereby grant CAPITAL RUSH a worldwide, exclusive,
        transferable, perpetual, irrevocable, royalty-free, fully paid-up right
        to:
      </p>
      <ul className=" self-start flex flex-col gap-2 mx-10">
        <li className="  text-white font-quicksand opacity-70 text-[12px] mb:text-[20px] pl-4 ">
          make, have made, use, copy, modify, and create derivative works of the
          Feedback as part of any CAPITAL RUSH product, technology, service,
          specification or documentation;
        </li>
        <li className="  text-white font-quicksand opacity-70 text-[12px] mb:text-[20px] pl-4 ">
          make, have made, use, copy, modify, and create derivative works of the
          Feedback as part of any CAPITAL RUSH product, technology, service,
          specification or documentation;
        </li>
        <li className="  text-white font-quicksand opacity-70 text-[12px] mb:text-[20px] pl-4 ">
          sublicense to third parties the foregoing rights, including the right
          to sublicense to further third parties.
        </li>
      </ul>
      <p className=" self-start mx-10 text-left -mt-1 z-30 text-white font-quicksand opacity-70 text-[12px] mb:text-[20px]">
        <b> Limitation of Liability. </b> NEITHER CAPITAL RUSH, NOR SUBSIDIARIES
        OR AFFILIATES SHALL BE LIABLE IN ANY WAY FOR LOSS OR DAMAGE OF ANY KIND
        RESULTING FROM THE GAME INCLUDING, BUT NOT LIMITED TO, LOSS OF DATA,
        LOSS OF GOODWILL, WORK STOPPAGE, SOFTWARE GLITCH OR MALFUNCTION, OR ANY
        AND ALL OTHER DAMAGES OR LOSSES. FURTHER, CAPITAL RUSH SHALL NOT BE
        LIABLE IN ANY WAY FOR THE LOSS OR DAMAGE TO PLAYER ACCOUNTS, STATISTICS,
        OR USER PROFILE INFORMATION STORED BY THE GAME. CAPITAL RUSH SHALL NOT
        BE RESPONSIBLE FOR ANY INTERRUPTIONS OF SERVICE INCLUDING, BUT NOT
        LIMITED TO ISP DISRUPTIONS, SOFTWARE FAILURES, OR ANY OTHER EVENT WHICH
        MAY RESULT IN A LOSS OF DATA OR DISRUPTION OF SERVICE. IN NO EVENT WILL
        CAPITAL RUSH OR ITS SUBSIDIARIES OR AFFILIATES BE LIABLE TO YOU FOR ANY
        INDIRECT, PUNITIVE, INCIDENTAL, SPECIAL, EXEMPLARY OR CONSEQUENTIAL
        DAMAGES.{" "}
      </p>
      <p className=" self-start mx-10  text-left  z-30 text-white my-6 font-quicksand font-semibold opacity-70 text-[12px] mb:text-[20px]">
        CSpecial Terms for CAPITAL RUSH Audio Content
      </p>
      <p className=" self-center mx-10  text-left  z-30 text-white font-quicksand font-semibold opacity-70 text-[12px] mb:text-[20px]">
        Annexure I
      </p>

      <p className=" self-start mx-10 text-left -mt-1 z-30 text-white font-quicksand opacity-70 text-[12px] mb:text-[20px]">
        Metronome Technologies Private Limited/ CAPITAL RUSH provides a
        personalized pay-per-access service that allows our users / you to
        access certain audio, visual, audio-visual content including but not
        limited to podcasts, interviews, talk shows, chat shows, training
        videos, tutorials etc. (“CAPITAL RUSH Content”) streamed over the
        Internet and accessible via the CAPITAL RUSH mobile application on your
        smart phones with necessary hardware and software requirements for
        accessing the CAPITAL RUSH Content (“CAPITAL RUSH Content-ready
        device”). These Terms of Use govern your use of our service in this
        regard. As used in these Terms of Use, “CAPITAL RUSH Content service”,
        “our service” or “the service” means the personalized service provided
        by Metronome Technologies Private Limited for discovering and accessing
        CAPITAL RUSH Content, including all features and functionalities,
        recommendations and reviews, the mobile-application, and user
        interfaces, as well as all content and software associated with our
        service.
      </p>

      <p className=" self-start mx-10 text-left -mt-1 z-30 text-white font-quicksand opacity-70 text-[12px] mb:text-[20px]">
        1. Access
        <br />
        <br />
        1.1. Your access to the CAPITAL RUSH Content service is dependent upon
        payment of the designated fee (“access fee”) which shall be deducted
        from your Deposit Wallet. We may charge appropriate goods and service
        taxes on the access fee in addition to the access fee. In case your
        Deposit Wallet does not have sufficient balance to meet the access fee,
        you shall be prompted to top up your Deposit Wallet and once topped up,
        you will be given access to the CAPITAL RUSH Content on payment of the
        access fee. To use the CAPITAL RUSH Content service you must have
        Internet access and a CAPITAL RUSH Content-ready device.
        <br />
        <br />
        2. Free Trials
        <br />
        <br />
        2.1. We may offer some CAPITAL RUSH Content free of cost and such
        CAPITAL RUSH Content may be accessed on the CAPITAL RUSH Content-ready
        device without any deductions from your Deposit Wallet.
        <br />
        <br />
        3. Subscription
        <br />
        <br />
        3.1 We reserve the right to offer the CAPITAL RUSH Content on a
        subscription model or any alternate model of payment and access at our
        sole discretion.
        <br />
        <br />
        4. CAPITAL RUSH Content Service
        <br />
        <br />
        4.1. You must be 18 years of age, or the age of majority in your
        province, territory or country, to access the CAPITAL RUSH Content
        service. Minors may not access or use the CAPITAL RUSH Content service.
        <br />
        <br />
        4.2. The CAPITAL RUSH Content service and any content accessed through
        the service are for your personal and non-commercial use only and may
        not be shared with anyone. While accessing the CAPITAL RUSH Content
        after paying the relevant access fee we grant you a limited,
        non-exclusive, non-transferable right to access the CAPITAL RUSH Content
        service and access CAPITAL RUSH Content. Except for the foregoing, no
        right, title or interest shall be transferred to you. You agree not to
        use the service for broadcasting, public performances, sharing over any
        channels etc.
        <br />
        <br />
        4.3. You may access the CAPITAL RUSH Content only within India and we
        reserve the right to place any geographic restrictions on access to such
        content depending upon licensing conditions or having regard to local
        laws. The content that may be available for you to access will vary by
        geographic location and will change from time to time. Certain CAPITAL
        RUSH Content may be available for live streaming and shall not be
        available on the CAPITAL RUSH Content-ready device once the live-stream
        is over. Such content shall have to be accessed at designated streaming
        times according to the schedule available on the CAPITAL RUSH platform
        and we shall not be responsible for any loss in content warranted by a
        delay in accessing the said content.
        <br />
        <br />
        4.4. The CAPITAL RUSH Content service, including the content library, is
        regularly updated. In addition, we may continually test various aspects
        of our service, including our website, user interfaces, promotional
        features and availability of CAPITAL RUSH Content.
        <br />
        <br />
        4.5. Unless otherwise specified, payment of access fee for a particular
        CAPITAL RUSH Content entitles you to access it only once and any repeat
        access of the same content shall require you to pay the access fee
        again. We may at our sole discretion offer content that is available for
        temporary download and offline access on your CAPITAL RUSH Content-ready
        device (“Offline Content”). Such Offline Content once downloaded on to
        your CAPITAL RUSH Content-ready device may be accessed as many times as
        you wish without requiring payment of additional access fees.
        Limitations apply, including restrictions on the number of Offline
        Content per account, storage limitations of your CAPITAL RUSH account
        and / or your CAPITAL RUSH Content-ready device, the maximum number of
        CAPITAL RUSH Content-ready devices that can contain Offline Titles per
        account, the time period within which you will need to begin accessing
        Offline Titles and how long the Offline Titles will remain accessible.
        As CAPITAL RUSH Content is not available outside India, Offline Titles
        may also not be playable in countries outside India even though they
        were originally accessed, downloaded and stored while the user was in
        India.
        <br />
        <br />
        4.6. You agree to use the CAPITAL RUSH Content service, including all
        features and functionalities associated therewith, in accordance with
        all applicable laws, rules and regulations, or other restrictions on use
        of the service or content therein. You agree not to archive, reproduce,
        distribute, modify, display, perform, publish, license, create
        derivative works from, offer for sale, or use (except as explicitly
        authorized in these Terms of Use) content and information contained on
        or obtained from or through the CAPITAL RUSH Content service. You also
        agree not to: circumvent, remove, alter, deactivate, degrade or thwart
        any of the content protections in the CAPITAL RUSH Content service; use
        any robot, spider, scraper or other automated means to access the
        CAPITAL RUSH Content service; decompile, reverse engineer or disassemble
        any software or other products or processes accessible through the
        CAPITAL RUSH Content service; insert any code or product or manipulate
        the content of the CAPITAL RUSH Content service in any way; or use any
        data mining, data gathering or extraction method. In addition, you agree
        not to upload, post, e-mail or otherwise send or transmit any material
        designed to interrupt, destroy or limit the functionality of any
        computer software or hardware or telecommunications equipment associated
        with the CAPITAL RUSH Content service, including any software viruses or
        any other computer code, files or programs. We may terminate or restrict
        your use of our service if you violate these Terms of Use or are engaged
        in illegal or fraudulent use of the service.
        <br />
        <br />
        4.7. The quality of the audio or display of the CAPITAL RUSH Content may
        vary from device to device, and may be affected by a variety of factors,
        such as your location, the bandwidth available through and/or speed of
        your Internet connection. Certain enhanced audio and video capabilities
        are subject to your Internet service and device capabilities. Not all
        content may be available on enhanced audio or video capabilities and
        default audio and video settings on cellular networks will exclude such
        enhanced capabilities. You are responsible for all Internet access
        charges. Please check with your Internet provider for information on
        possible Internet data usage charges. The time it takes to stream the
        CAPITAL RUSH Content once access to such content is granted will vary
        based on a number of factors, including your location, available
        bandwidth at the time, the content you have selected and the
        configuration of your CAPITAL RUSH Content-ready device.
        <br />
        <br />
        4.8. CAPITAL RUSH platform software is developed by, or for, Metronome
        Tech and is designed to enable use of CAPITAL RUSH services including
        CAPITAL RUSH Content services through CAPITAL RUSH Content-ready
        devices. This software may vary by device and medium, and
        functionalities and features may also differ between devices. You
        acknowledge that the use of the service may require third party software
        that is subject to third party licenses. You agree that you may
        automatically receive updated versions of the CAPITAL RUSH application
        and related third-party software.
        <br />
        <br />
        5. Passwords and Account Access. The user who created the CAPITAL RUSH
        account and is charged the access fee for the CAPITAL RUSH Content (the
        “Account Owner”) has access and control over the CAPITAL RUSH account
        and the CAPITAL RUSH Content-ready devices that are used to access our
        service and is responsible for any activity that occurs through the
        CAPITAL RUSH account. To maintain control over the account and to
        prevent anyone from accessing the account (which would include
        information on viewing history for the account), the Account Owner
        should maintain control over the CAPITAL RUSH Content-ready devices that
        are used to access the service and not reveal the password or details of
        the payment methods associated with the Deposit Wallet of the account to
        anyone.
        <br />
        <br />
        6. You are responsible for updating and maintaining the accuracy of the
        information you provide to us relating to your account. We can terminate
        your account or place your account on hold in order to protect you,
        Metronome Technologies Private Limited / CAPITAL RUSH or our partners
        from identity theft or other fraudulent activity.
        <br />
        <br />
        7. Warranties and Limitations on Liability. The CAPITAL RUSH Content
        service is provided “as is” and without warranty or condition. In
        particular, our service may not be uninterrupted or error-free. You
        waive all special, indirect and consequential damages against us. These
        terms will not limit any non-waivable warranties or consumer protection
        rights that you may be entitled to under the laws of your country of
        residence.
        <br />
        <br />
        <b>8. Miscellaneous</b>
        <br />
        <br />
        8.1. Governing Law. These Terms of Use shall be governed by and
        construed in accordance with the laws of India.
        <br />
        <br />
        8.2. Unsolicited Materials. We do not accept unsolicited materials or
        ideas for CAPITAL RUSH Content and we are not responsible for the
        similarity of any of its content or programming in any media to
        materials or ideas transmitted to us.
        <br />
        <br />
        8.3. Customer Support. To find more information about our service and
        its features or if you need assistance with your account, please visit
        the Help Center on our website. In the event of any conflict between
        these Terms of Use and information provided by Customer Support or other
        portions of our website, these Terms of Use will prevail.
        <br />
        <br />
        8.4. Survival. If any provision or provisions of these Terms of Use
        shall be held to be invalid, illegal, or unenforceable, the validity,
        legality and enforceability of the remaining provisions shall remain in
        full force and effect.
        <br />
        <br />
        8.5. Changes to Terms of Use and Assignment. We may, from time to time,
        change these Terms of Use. We will notify you at least 30 days before
        such changes apply to you. We may assign or transfer our agreement with
        you including our associated rights and obligations at any time and you
        agree to cooperate with us in connection with such an assignment or
        transfer.
        <br />
        <br />
        8.6. Electronic Communications. We will send you information relating to
        your account (e.g. payment authorizations, invoices, changes in password
        or debits to Deposit Wallets, balance short-fall in payment of access
        fee, confirmation messages, notices) in electronic form only, for
        example via emails to your email address provided during registration.
        <br />
        Details of each of the aforementioned items have been explained and set
        out below. Please refer to the details set out in each such paragraph
        relating to specific acts and read the same carefully in order to
        understand what each such prohibition entail.
        <br />
        We take genuine intellectual property infringement complaints very
        seriously. If you come across any content that you feel may be
        infringing any intellectual property, please report to us at the
        earliest and we shall review such complaint as quickly as possible.
        While doing so, we request you to provide us with as much information as
        possible such as the reason why you feel the content infringes any
        intellectual property.
        <br />
        We may work with law enforcement whenever necessary, including when we
        believe that there’s a risk of physical harm or threat to public safety.
        <br />
        We would like to thank you for helping
      </p> */}
    </div>
  );
};

export default Terms;
