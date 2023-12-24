"use client";
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
      <div className=" self-start mx-10  text-left  z-30 text-white my-6 font-quicksand opacity-70 text-[12px] mb:text-[20px]">
        These Terms of Use ("Terms") govern your access to and use of gaming
        platform ‘Capital Rush' and any expansion packs ("Game") available as a
        mobile application and website at the URL [www.capitalrush.io]
        (“Platform”) owned and operated by Metronome Technologies Private
        Limited (“Company”). By accessing the Platform and using the Game, you
        agree to these Terms of Service (“Terms”). Your access to and use of the
        Game is conditioned on your acceptance of and compliance with these
        Terms. Therefore, please read these Terms and Privacy Policy carefully
        before using or registering on the Platform. If you do not agree with
        these Terms, please do not access the Platform and use the Service.
        These Terms along with the Privacy Policy constitute a binding agreement
        and an electronic record under the Information Technology Act, 2000 and
        the rules thereunder and the amended provisions pertaining to electronic
        records under various Indian statutes.
      </div>
      <div className=" self-start mx-10  text-left  z-30 text-white my-6 font-quicksand font-semibold opacity-70 text-[12px] mb:text-[20px]">
        1. Eligibility and Access
      </div>
      <div className=" self-start mx-10 mb:-mt-1 my-1 text-left  z-30 text-white font-quicksand opacity-70 text-[12px] mb:text-[20px]">
        1.2 In the event the Game is accessed by an individual under the age of
        18 (eighteen) years (“Minor”), such access and participation shall be
        deemed to be that of the parent or legal guardian (“Guardian”) of such
        Minor and the term “You” “User” shall refer to the Guardian in such
        cases. Minors may only access the Game / Platform under the supervision
        of an adult. The Guardian hereby represents and warrants that the
        Guardian is the legal guardian of such Minor accessing the Platform; and
        that the Guardian shall ensure that the Minor uses the Platform only
        with the permission and authorization from and under the strict
        supervision and guidance of the Guardian.
      </div>
      <br />
      <div className=" self-start mx-10 mb:-mt-1 my-1 text-left  z-30 text-white font-quicksand opacity-70 text-[12px] mb:text-[20px]">
        1.3 The Game is a dynamic investment strategy game that merges financial
        education with engaging gameplay. The rules of the game are available
        below in the relevant sections. The Game is always evolving and the form
        and nature of the Game may change from time to time without prior notice
        to you. In addition, the Company may stop (permanently or temporarily)
        providing the Game (or any features within the Game) to you or to users
        generally and may not be able to provide you with prior notice. The
        Company also retains the right to create limits on use, storage and
        features at its sole discretion at any time without prior notice to you.
      </div>
      <br />
      <div className=" self-start mx-10 mb:-mt-1 my-1 text-left  z-30 text-white font-quicksand opacity-70 text-[12px] mb:text-[20px]">
        1.4 In consideration for the Company granting you access to and use of
        the Games, you agree that the Company and its affiliates, group
        companies, third party providers and partners may place advertisements
        on the Game or in connection with the display of any content. The types
        and extent of advertising on the Platform are subject to change.
      </div>
      <br />
      <div className=" self-start mx-10  text-left  z-30 text-white my-6 font-quicksand font-semibold opacity-70 text-[12px] mb:text-[20px]">
        2. Privacy
      </div>
      <div className=" self-start mx-10 mb:-mt-1 my-1 text-left  z-30 text-white font-quicksand opacity-70 text-[12px] mb:text-[20px]">
        Any information that you provide to the Company is subject to the
        privacy policy as updated on www.capitalrush.io , which governs the
        collection and use of your information.
      </div>
      <div className=" self-start mx-10  text-left  z-30 text-white my-6 font-quicksand font-semibold opacity-70 text-[12px] mb:text-[20px]">
        3. User Account, Passwords and Security
      </div>
      <div className=" self-start mx-10 mb:-mt-1 my-1 text-left  z-30 text-white font-quicksand opacity-70 text-[12px] mb:text-[20px]">
        3.1 In order to use the Game, you will have to register on the Platform
        by providing certain details about yourself, including your name, email
        address and such other details as may be required and create an account
        (“Account”). You may register on the Platform by logging into your
        Account with your credentials from certain third-party email networks or
        social networking sites. You confirm that you are the owner of any such
        third-party account and that you are entitled to disclose your
        third-party account login information to the Company. You authorize the
        Company to collect your authentication information, and other
        information that may be available on or through the third-party account
        consistent with your applicable settings and instructions. The Company
        reserves the right to refuse access to the Game to new users or to
        terminate access granted to existing users at any time without according
        any reasons for doing so. You shall not have more than one active
        Account on the Platform. Additionally, you are prohibited from selling,
        trading, or otherwise transferring your Account to another party.
      </div>
      <br />
      <div className=" self-start mx-10 mb:-mt-1 my-1 text-left  z-30 text-white font-quicksand opacity-70 text-[12px] mb:text-[20px]">
        3.2 You shall ensure and confirm that the Account information provided
        by you is complete, accurate and up-to-date. If there is any change in
        the Account information, you shall promptly update your Account
        information on the Platform. If you provide any information that is
        untrue, inaccurate, not current or incomplete (or becomes untrue,
        inaccurate, not current or incomplete), or if the Company has reasonable
        grounds to suspect that such information is untrue, inaccurate, not
        current or incomplete, the Company has the right to suspend or terminate
        your Account and refuse any and all current or future use of the Game
        (or any portion thereof) at its discretion, in addition to any right
        that the Company may have against you at law or in equity, for any
        misrepresentation of information provided by you.
      </div>
      <br />
      <div className=" self-start mx-10 mb:-mt-1 my-1 text-left  z-30 text-white font-quicksand opacity-70 text-[12px] mb:text-[20px]">
        3.3 You are responsible for maintaining the confidentiality of the
        Account information, safeguarding the password or credentials that you
        use to access the Game and for any activities or actions under your
        Account. You are encouraged to use "strong" passwords (passwords that
        use a combination of upper and lower-case letters, numbers and symbols)
        with your Account and with other accounts that you may connect to your
        Account (such as Facebook, Twitter or your email). You agree to (a)
        immediately notify the Company of any unauthorized use of your Account
        information or any other breach of security, and (b) ensure that you
        exit from your Account at the end of each session. The Company cannot
        and will not be liable for any loss or damage arising from your failure
        to comply with the above requirements. Further, the Company will not be
        liable for any loss that you may incur as a consequence of unauthorized
        use of your Account either with or without your knowledge.
      </div>
      <br />
      <div className=" self-start mx-10 mb:-mt-1 my-1 text-left  z-30 text-white font-quicksand opacity-70 text-[12px] mb:text-[20px]">
        3.4 You may be held liable for losses incurred by the Company or any
        other user of or visitor of the Platform due to authorized or
        unauthorized use of your Account as a result of your failure in keeping
        Your Account information secure and confidential.
      </div>
      <br />
      <div className=" self-start mx-10  text-left  z-30 text-white my-6 font-quicksand font-semibold opacity-70 text-[12px] mb:text-[20px]">
        4. Acceptable Use
      </div>
      <div className=" self-start mx-10 mb:-mt-1 my-1 text-left  z-30 text-white font-quicksand opacity-70 text-[12px] mb:text-[20px]">
        4.1 In connection with the use of the Game and Platform, you agree that
        you will not:
      </div>
      <ul className=" self-start mx-10 flex flex-col gap-3">
        <li className="  text-white font-quicksand opacity-70 text-[12px] mb:text-[20px] pl-4 ">
          violate any law, regulation, or court order;
        </li>
        <li className="  text-white font-quicksand opacity-70 text-[12px] mb:text-[20px] pl-4 ">
          violate, infringe, or misappropriate the intellectual property,
          patent, trademark, copyright privacy, publicity, moral or "droit
          moral," or other legal or proprietary rights of any third party;
        </li>
        <li className="  text-white font-quicksand opacity-70 text-[12px] mb:text-[20px] pl-4 ">
          take any action (even if requested by another) that is, or submit,
          host, post, display, upload, modify, publish, transmit, update, share,
          or communicate anything that is, or that incites or encourages, action
          that is, explicitly or implicitly: illegal, harmful, abusive,
          harassing, threatening, hateful, racially or ethnically objectionable,
          derogatory, harmful to any reputation, disparaging, defamatory,
          libelous, pornographic, indecent, profane, obscene, paedophilic or
          otherwise objectionable (including nudity), blasphemous, invasive of
          another's privacy, or relating or encouraging money laundering or
          gambling or an online game that causes user harm or promoting enmity
          between different groups on the grounds of religion or caste with the
          intent to incite violence;
        </li>
        <li className="  text-white font-quicksand opacity-70 text-[12px] mb:text-[20px] pl-4 ">
          harms minors in anyway;
        </li>
        <li className="  text-white font-quicksand opacity-70 text-[12px] mb:text-[20px] pl-4 ">
          send advertising or commercial communications, including spam, or any
          other unsolicited or unauthorized communications;
        </li>
        <li className="  text-white font-quicksand opacity-70 text-[12px] mb:text-[20px] pl-4 ">
          advertise or surrogate advertise or promote an online game that is not
          a permissible online game, or any online gaming intermediary offering
          such an online game
        </li>
        <li className="  text-white font-quicksand opacity-70 text-[12px] mb:text-[20px] pl-4 ">
          send communication that deceives or misleads the addressee about the
          origin of such messages or communicates any information which is
          offensive or menacing in nature;
        </li>
        <li className="  text-white font-quicksand opacity-70 text-[12px] mb:text-[20px] pl-4 ">
          engage in spidering or harvesting, or participate in the use of
          software, including spyware, designed to collect data from the
          Platform, including from any user of the Game;
        </li>
        <li className="  text-white font-quicksand opacity-70 text-[12px] mb:text-[20px] pl-4 ">
          transmit any virus, other computer instruction, or technological means
          intended to, or that may, disrupt, damage, or interfere with the use
          of computers or limit the functionality of any computer resource or
          related systems;
        </li>
        <li className="  text-white font-quicksand opacity-70 text-[12px] mb:text-[20px] pl-4 ">
          stalk, harass, threaten, or harm any third party;
        </li>
        <li className="  text-white font-quicksand opacity-70 text-[12px] mb:text-[20px] pl-4 ">
          impersonate any third party;
        </li>
        <li className="  text-white font-quicksand opacity-70 text-[12px] mb:text-[20px] pl-4 ">
          participate in any fraudulent or illegal activity, including phishing,
          money laundering, or fraud;
        </li>
        <li className="  text-white font-quicksand opacity-70 text-[12px] mb:text-[20px] pl-4 ">
          use any means to scrape or crawl any part of the Platform;
        </li>
        <li className="  text-white font-quicksand opacity-70 text-[12px] mb:text-[20px] pl-4 ">
          access, tamper with any content, computer systems, or the technical
          delivery systems of the Platform or its service providers;
        </li>
        <li className="  text-white font-quicksand opacity-70 text-[12px] mb:text-[20px] pl-4 ">
          probe, scan, or test the vulnerability of any system or network or
          breach or circumvent any security or authentication measures;
        </li>
        <li className="  text-white font-quicksand opacity-70 text-[12px] mb:text-[20px] pl-4 ">
          access or search or attempt to access or search the Game by any means
          (automated or otherwise) other than through currently available,
          published interfaces that are provided on the Platform (and only
          pursuant to these Terms);
        </li>
        <li className="  text-white font-quicksand opacity-70 text-[12px] mb:text-[20px] pl-4 ">
          attempt to circumvent any technological measure implemented by the
          Company, any of its service providers, or any other third party
          (including another user) to protect the Company, the Platform, users
          or any other third party;
        </li>
        <li className="  text-white font-quicksand opacity-70 text-[12px] mb:text-[20px] pl-4 ">
          access the Platform to obtain information to build a similar or
          competitive application, or service;
        </li>
        <li className="  text-white font-quicksand opacity-70 text-[12px] mb:text-[20px] pl-4 ">
          attempt to decipher, decompile, disassemble, or reverse engineer any
          of the software or other underlying code used as part of the Platform;
        </li>
        <li className="  text-white font-quicksand opacity-70 text-[12px] mb:text-[20px] pl-4 ">
          send display, upload, modify, publish, transmit, store, update or
          share communication that belongs to another person and to which you do
          not have any right;
        </li>
        <li className="  text-white font-quicksand opacity-70 text-[12px] mb:text-[20px] pl-4 ">
          send display, upload, modify, publish, transmit, store, update or
          share any information in the nature of an online game which is not a
          permissible online game;
        </li>
        <li className="  text-white font-quicksand opacity-70 text-[12px] mb:text-[20px] pl-4 ">
          send display, upload, modify, publish, transmit, store, update or
          share communication that threatens the unity, integrity, defense,
          security or sovereignty of India, friendly relations with foreign
          states, or public order or causes incitement to the commission of any
          cognizable offence or prevents investigation of any offence or is
          insulting any other nation;
        </li>
        <li className="  text-white font-quicksand opacity-70 text-[12px] mb:text-[20px] pl-4 ">
          impersonate another person;
        </li>
        <li className="  text-white font-quicksand opacity-70 text-[12px] mb:text-[20px] pl-4 ">
          deceive or mislead the addressee about the origin of the message or
          knowingly and intentionally communicate any misinformation or
          information which is patently false and untrue or misleading in nature
          or, in respect of any business of the Central Government, is
          identified as fake or false or misleading by any prescribed fact check
          unit of the Central Government;
        </li>
        <li className="  text-white font-quicksand opacity-70 text-[12px] mb:text-[20px] pl-4 ">
          advocate, encourage, or assist any third party in doing any of the
          foregoing
        </li>
      </ul>
      <br />
      <div className=" self-start mx-10 mb:-mt-1 my-1 text-left  z-30 text-white font-quicksand opacity-70 text-[12px] mb:text-[20px]">
        4.2 The quality of the Game may vary from device to device, and may be
        affected by a variety of factors, such as your location, the bandwidth
        available through and/or speed of your internet connection. You are
        responsible for all internet access charges. Please check with your
        internet provider for information on possible internet data usage
        charges.
      </div>
      <div className=" self-start mx-10  text-left  z-30 text-white my-6 font-quicksand font-semibold opacity-70 text-[12px] mb:text-[20px]">
        5. Disclaimer regarding Third-Party Interactions
      </div>
      <div className=" self-start mx-10 mb:-mt-1 my-1 text-left  z-30 text-white font-quicksand opacity-70 text-[12px] mb:text-[20px]">
        5.1 Any use or reliance on any third party content available on the Game
        is at your own risk.
      </div>
      <br />
      <div className=" self-start mx-10 mb:-mt-1 my-1 text-left  z-30 text-white font-quicksand opacity-70 text-[12px] mb:text-[20px]">
        5.2 The views expressed by users on the Game are not controlled and do
        not represent the views or values of the Company. You acknowledge and
        agree that the Game only facilitates access to the Game and the Company
        is not obligated to monitor access to or use of the Game by you or third
        parties. However, should it come to the knowledge of the Company that
        your use of the Game is in violation of any applicable law or these
        Terms, then the Company has the right to enforce these Terms, and take
        such actions it may deem necessary to comply with applicable law,
        regulation, court order, or other legal, administrative, or regulatory
        request or process; or otherwise.
      </div>
      <br />
      <div className=" self-start mx-10 mb:-mt-1 my-1 text-left  z-30 text-white font-quicksand opacity-70 text-[12px] mb:text-[20px]">
        5.3 On account of the nature of the internet, the Games may be accessed
        in various geographical locations; and you hereby agree and acknowledge
        that you are accessing the Game, at your own risk, choice and initiative
        and you agree and undertake to ensure that your use of the Game complies
        with all applicable laws including the local laws of the place where you
        access the Game from.
      </div>
      <br />
      <div className=" self-start mx-10 mb:-mt-1 my-1 text-left  z-30 text-white font-quicksand opacity-70 text-[12px] mb:text-[20px]">
        5.4 Your interactions with third parties, including users, on or through
        the Game, is solely between you and the third party; however, the
        Company may, in its sole discretion, intercede and you will reasonably
        cooperate with the Company if it does so. You acknowledge and agree that
        the Company will not be responsible for any damages, losses, costs,
        expenses, or liabilities incurred as the result of such interactions and
        you will not make the Company a party to any dispute between you and any
        third party with whom you interact with on the Game. You hereby release
        the Company Entities (defined below) from claims, demands, and damages
        (actual and consequential) of every kind or nature, known and unknown,
        suspected and unsuspected, disclosed and undisclosed, arising out of or
        in any way related to such interactions or the Game. In the event of any
        dispute between you and any third party with whom you interact on the
        Game, you may approach the court of appropriate jurisdiction as per
        applicable law in your place of residence.
      </div>
      <br />
      {/* All Data  */}
      <div className=" self-start mx-10  text-left  z-30 text-white my-6 font-quicksand font-semibold opacity-70 text-[12px] mb:text-[20px]">
        6. License to Use the Game
      </div>
      <div className=" self-start mx-10 mb:-mt-1 my-1 text-left  z-30 text-white font-quicksand opacity-70 text-[12px] mb:text-[20px]">
        6.1 The Company gives you a personal, worldwide, royalty-free, limited,
        non-assignable and non-exclusive license to use the Game and the
        Platform. This license is for the sole purpose of enabling you to use
        and enjoy the benefit of the Game for your personal and non-commercial
        use, in the manner permitted by these Terms. You agree not to use the
        Game for any public performances. Save and except for accessing and
        using the Games as permitted herein, You shall not separately use any
        portion of the Games or the Platform (such as codes, features,
        branding/trademarks/logos, look and feel, content, etc.) in any manner
        whatsoever without express written approval from the Company.
        <br />
        <br />
        6.2 You agree to use the Game only: (a) for purposes that are permitted
        by the Terms; and (b) in accordance with applicable law, regulation or
        generally accepted practices or guidelines. You agree not to engage in
        activities that may adversely affect the use or access of the Game by
        other users.
        <br />
        <br />
        6.3 You agree not to access (or attempt to access) the Game by any means
        other than through the interface that is provided by the Platform. You
        shall not use any deep-link, robot, spider or other automatic device,
        program, algorithm or methodology, or any similar or equivalent manual
        process, to access, acquire, copy or monitor any portion of the Game or
        content therein, or in any way reproduce or circumvent the navigational
        structure or presentation of the Platform, materials or any Content, to
        obtain or attempt to obtain any materials, documents or information
        through any means not specifically made available through the Game. You
        agree that you are solely responsible to the Company and to any third
        party for any breach of your obligations under the Terms and for the
        consequences (including any loss or damage which the Company or its
        affiliates may suffer) for any such breach.
        <br />
      </div>
      <div className=" self-start mx-10  text-left  z-30 text-white my-6 font-quicksand font-semibold opacity-70 text-[12px] mb:text-[20px]">
        7. Proprietary Rights of the Company
      </div>
      <div className=" self-start mx-10 mb:-mt-1 my-1 text-left  z-30 text-white font-quicksand opacity-70 text-[12px] mb:text-[20px]">
        The Company or its licensors own all right, title, and interest in and
        to: (i) the Platform and the “look and feel” thereof, including all
        software, ideas, processes, data, text, media, and other content
        available on the Platform; and (ii) trademarks, logos, and brand
        elements. All right, title and interest in and to the Platform, the Game
        and the Company’s trademarks are and will remain the exclusive property
        of the Company and its licensors and other partners, as the case may be.
        The Company reserves all rights not expressly granted in these Terms.
        You acknowledge and agree that any feedback, comments, or suggestions
        you may provide regarding the Platform or the Games are entirely
        voluntary, and the Company will be free to use such feedback, comments
        or suggestions as it sees fit and without any obligation to you.
      </div>

      <div className=" self-start mx-10  text-left  z-30 text-white my-6 font-quicksand font-semibold opacity-70 text-[12px] mb:text-[20px]">
        8. Contests and Promotions
      </div>
      <div className=" self-start mx-10 mb:-mt-1 my-1 text-left  z-30 text-white font-quicksand opacity-70 text-[12px] mb:text-[20px]">
        The Company may introduce contests in the form of permissible online
        real money games, which are subject to separate terms and conditions,
        added in the respective sections and You are requested to read the
        Contest Terms as well as these Terms before participating in the same
        and upon participation it shall be deemed that the participant has read
        and understood the Contest Terms.
        <br />
      </div>

      <div className=" self-start mx-10  text-left  z-30 text-white my-6 font-quicksand font-semibold opacity-70 text-[12px] mb:text-[20px]">
        9. Suspension and Termination
      </div>
      <br />
      <div className=" self-start mx-10 text-left -mt-4 z-30 text-white font-quicksand opacity-70 text-[12px] mb:text-[20px]">
        9.1 The Terms will continue to apply until terminated by either you or
        the Company as set forth below. If you object to the Terms or are
        dissatisfied with the Games, your only recourse is to (i) close your
        Account; and (ii) stop accessing the Game.
      </div>
      <br />
      <div className=" self-start mx-10 text-left -mt-4 z-30 text-white font-quicksand opacity-70 text-[12px] mb:text-[20px]">
        9.2 The Company reserves the right to terminate, discontinue, suspend,
        limit, or restrict your account or your use of the Games or access to
        Content at any time, without notice or liability, if the Company so
        determines in its sole discretion, for any reason whatsoever.
        Additionally, the Company reserves the right to delist you or block your
        future access to the Game or suspend or terminate your Account if it
        believes, in its sole discretion that you have infringed, breached,
        violated, abused, or unethically manipulated or exploited any term of
        these Terms or anyway otherwise acted unethically.
      </div>
      <br />
      <div className=" self-start mx-10 text-left -mt-4 z-30 text-white font-quicksand opacity-70 text-[12px] mb:text-[20px]">
        9.3 If You or the Company terminate your use of the Game, the Company
        may, subject to the terms of the Privacy Policy, delete any information
        relating to your use of the Game and the Company will have no liability
        to you or any third party for doing so.
      </div>
      <br />

      <div className=" self-start mx-10  text-left  z-30 text-white my-6 font-quicksand font-semibold opacity-70 text-[12px] mb:text-[20px]">
        10. Disclaimers and Limitations of Liability
      </div>
      <br />
      <div className=" self-start mx-10 text-left -mt-4 z-30 text-white font-quicksand opacity-70 text-[12px] mb:text-[20px]">
        Please read this section carefully since it limits the liability of the
        Company and its parents, subsidiaries, group companies, affiliates,
        related companies, officers, directors, employees, agents,
        representatives, partners, and licensors (collectively, the " Company
        Entities").
      </div>
      <br />

      <div className=" self-start mx-10 text-left -mt-4 z-30 text-white font-quicksand opacity-70 text-[12px] mb:text-[20px]">
        10.1 Availability on "AS-IS" basis
        <br />
        <br />
        Your access to and use of the Game or any Content is at your own risk.
        You understand and agree that the Game is provided to you on an "AS IS"
        and "AS AVAILABLE" basis. Without limiting the foregoing, the Company
        Entities disclaim all warranties and conditions, whether express or
        implied, of title, of merchantability, fitness for a particular purpose,
        or non-infringement.
        <br />
        <br />
        The Company Entities make no warranty and disclaim all responsibility
        and liability for: (i) the completeness, accuracy, availability,
        timeliness, security or reliability of the Game or any content therein;
        (ii) any harm to your computer system, loss of data, or other harm that
        results from your access to or use of the Game, or any content therein;
        (iii) the deletion of, or the failure to store or to transmit, any
        content and other communications maintained by the Game; (iv) whether
        the Game will meet your requirements or be available on an
        uninterrupted, secure, or error-free basis or whether any errors or
        defects will be corrected. No advice or information, whether oral or
        written, obtained from the Company Entities or through the Game, will
        create any warranty not expressly made herein. The Company Entities will
        not be liable for any loss that you may incur as a consequence of
        unauthorized use of your Account or Account information in connection
        with the Game, either with or without your knowledge.
        <br />
        <br />
        The Company shall not be responsible for the delay or inability to use
        Platform or related functionalities, the provision of or failure to
        provide functionalities, or for any information, software,
        functionalities and related graphics obtained through the Platform, or
        otherwise arising out of the use of the Platform or Game, whether based
        on contract, tort, negligence, strict liability or otherwise. Further,
        the Company shall not be held responsible for non-availability of the
        Game during periodic maintenance operations or any unplanned suspension
        of access to Game that may occur due to technical reasons or for any
        reason beyond the Company’s control. You understand and agree that any
        material or data downloaded or otherwise obtained through the Platform
        is done entirely at your own discretion and risk, and that you will be
        solely responsible for any damage to your computer systems or loss of
        data that results from the download of such material or data.
        <br />
        <br />
      </div>
      <div className=" self-start mx-10 text-left -mt-4 z-30 text-white font-quicksand opacity-70 text-[12px] mb:text-[20px]">
        10.2 Links
        <br />
        <br />
        There may be links to third-party websites or resources on the Platform.
        You acknowledge and agree that the Company is not responsible or liable
        for: (i) the availability or accuracy of such websites or resources; or
        (ii) the content, products, or services on or available from such
        websites or resources. Links to such websites or resources do not imply
        any endorsement by the Company Entities of such websites or resources or
        the content, products, or services available from such websites or
        resources. You acknowledge sole responsibility for and assume all risk
        arising from your use of any such websites or resources.
        <br />
        <br />
      </div>
      <div className=" self-start mx-10 text-left -mt-4 z-30 text-white font-quicksand opacity-70 text-[12px] mb:text-[20px]">
        10.3 Limitation of Liability
        <br />
        <br />
        To the maximum extent permitted by applicable law, the Company Entities
        shall not be liable for any indirect, incidental, special, consequential
        or punitive damages or any loss of profits or revenues, whether incurred
        directly or indirectly, or any loss of data, use, good-will, or other
        intangible losses resulting from (i) your access to or use of or
        inability to access or use of the Platform or the Game; (ii) any content
        on the Platform; or (iii) unauthorized access, use or alteration of your
        transmissions or content. <br />
      </div>
      <br />
      <div className=" self-start mx-10 text-left -mt-4 z-30 text-white font-quicksand opacity-70 text-[12px] mb:text-[20px]">
        10.4 Violation of Terms
        <br />
        <br />
        You agree that any violation by you of these Terms will constitute an
        unlawful and unfair business practice, and will cause irreparable harm
        to the Company for which monetary damages would be inadequate, and you
        consent to the Company obtaining any injunctive or equitable relief that
        they deem necessary or appropriate in such circumstances. These remedies
        are in addition to any other remedies that the Company may have at law
        or in equity. If the Company takes any legal action against you as a
        result of your violation of these Terms, they will be entitled to
        recover from you, and you agree to pay, all reasonable attorneys’ fees
        and costs of such action, in addition to any other relief that may be
        granted.
      </div>

      <div className=" self-start mx-10  text-left  z-30 text-white my-6 font-quicksand font-semibold opacity-70 text-[12px] mb:text-[20px]">
        11. General Terms
      </div>
      <br />
      <div className=" self-start mx-10 text-left -mt-4 z-30 text-white font-quicksand opacity-70 text-[12px] mb:text-[20px]">
        11.1 Waiver and Severability
        <br />
        <br />
        The failure of the Company to enforce any right or provision of these
        Terms will not be deemed a waiver of such right or provision. In the
        event that any provision of these Terms is held to be invalid or
        unenforceable, then that provision will be limited or eliminated to the
        minimum extent necessary, and the remaining provisions of these Terms
        will remain in full force and effect.
        <br />
        <br />
        11.2 Governing Law and Jurisdiction
        <br />
        <br />
        These terms shall be governed by and constructed in accordance with the
        laws of India without reference to conflict of laws principles and
        disputes arising in relation hereto shall be subject to the exclusive
        jurisdiction of courts in Jaipur,Rajasthan, India.
        <br />
        <br />
        11.3 Entire Agreement
        <br />
        <br />
        These Terms and the Privacy Policy are the entire and exclusive
        agreement between the Company and you regarding the Game (excluding any
        services for which you have a separate agreement with the Company that
        is explicitly in addition or in place of these Terms), and these Terms
        supersede and replace any prior agreements between the Company and you
        regarding the Games. <br />
        The Company retains the unconditional right to revise these Terms from
        time to time, the most current version will always be on the Platform.
        You can determine when this Terms was last modified by referring to the
        “Last Updated” legend above. It shall be your responsibility to check
        this Terms periodically for changes. Your continued use and access of
        the Game shall signify your acceptance of the amended Terms and your
        consent to be legally bound by the same.
        <br />
        <br />
        11.4 Grievance Redressal
        <br />
        <br />
        In case you have any complaints or grievance pertaining to (i) any user
        content that you believe violates these Terms (other than an
        infringement of intellectual property rights) for the reporting
        mechanism for such claims), (ii) your access to the Platform or (iii)
        any user content which you believe is, in the nature of any material
        which is obscene, defamatory towards the complainant or any person on
        whose behalf you are making the complaint, or is in the nature of
        impersonation in an electronic form, including artificially morphed
        images of such individual, please share the same with us by writing to:
        hello@capitalrush.gg
        <br />
        <br />
        In your complaint or grievance, please include the following
        information:
        <br />
        <br />
        1. Your name and contact details: name, address, contact number and
        email address;
        <br />
        2. Your relation to the subject matter of the complaint, i.e.
        complainant or person acting on behalf of an affected person;
        <br />
        3. The name and age of the person aggrieved or affected by the subject
        matter of the complaint, in case your are acting on behalf of such
        person and a statement, under penalty of perjury, that you are
        authorised to act on behalf of such person and to provide such person's
        personal information to us in relation to the complaint/grievance;
        <br />
        4. Description of the complaint or grievance with clear identification
        of the user content in relation to which such complaint or grievance is
        made;
        <br />
        5. A statement that you believe, in good faith, that the user content
        violates these Terms
        <br />
        <br />
        You are requested to send us a written notice/ intimation if you notice
        any act of infringement on the Platform, which must include the
        following information:
        <br />
        <br />
        A clear identification of the copyrighted work allegedly infringed;
        <br />
        A clear identification of the allegedly infringing material on the
        Platform;
        <br />
        Your contact details: name, address, e-mail address and phone number;
        <br />
        A statement that you believe, in good faith, that the use of the
        copyrighted material allegedly infringed on the Platform is not
        authorized by your agent or the law;
        <br />
        A statement that the information provided in the notice is accurate, and
        under penalty of perjury, that the signatory is authorized to act on
        behalf of the owner of an exclusive copyright right that is allegedly
        infringed;
        <br />
        Your signature or a signature of your authorized agent.
        <br />
        <br />
        The aforesaid notices can be sent to the Company by email at
        hello@capitalrush.gg
        <br />
        <br />
        On receiving such complaint, grievance or notice, the Company reserves
        the right to investigate and/or take such action as the Company may deem
        appropriate. The Company may reach out to you to seek further
        clarification or assistance with the investigation, or verify the
        statements made in your complaint, grievance or notice, and you
        acknowledge that your timely assistance with the investigation would
        facilitate the redressal of the same.
        <br />
        <br />
        The name and title of the Grievance Redressal Officer is as follows:
        <br />
        <br />
        Name: Samveg Singhi
        <br />
        Email: hello@capitalrush.gg
        <br />
        Address: G-152, RIICO Industrial Area, Mansarovar, Jaipur, Rajasthan
        -302020
        <br />
        <br />
        The Company reserves the right to replace the Grievance Redressal
        Officer at its discretion through publication of the name and title of
        such replacement on the website, which replacement shall come into
        effect immediately upon publication.
      </div>

      <div className=" flex flex-col items-center mx-1 lg:mx-4 mb:mx-10 py-20">
        <h1 className=" font-poppins text-[24px] mb:text-[48px] text-white font-bold z-40 flex-shrink-0">
          <span className="font-poppins  bg-gradient-to-r from-[#F67408] to-[#FAF51C] bg-clip-text text-transparent">
            Rules of the Game
          </span>
        </h1>
      </div>
      <div className=" self-start mx-10  text-left  z-30 text-white my-6 font-quicksand font-semibold opacity-70 text-[12px] mb:text-[20px]">
        Game Overview:
      </div>
      <div className=" self-start mx-10 mb:-mt-1 my-1 text-left  z-30 text-white font-quicksand opacity-70 text-[12px] mb:text-[20px]">
        Capital Rush is a dynamic investment strategy game that merges financial
        education with engaging gameplay. Players can choose between Single
        Player and Multiplayer modes to build and grow their virtual investment
        portfolios. With different journey lengths and the option to win real
        money in contests, Capital Rush offers diverse experiences to both
        casual and strategic players.
      </div>
      <br />
      <div className=" self-start mx-10  text-left  z-30 text-white my-6 font-quicksand font-semibold opacity-70 text-[12px] mb:text-[20px]">
        Objective:
      </div>
      <div className=" self-start mx-10 mb:-mt-1 my-1 text-left  z-30 text-white font-quicksand opacity-70 text-[12px] mb:text-[20px]">
        Grow your virtual portfolio value by making strategic investment
        decisions and adapting to market challenges.
      </div>
      <br />
      <div className=" self-start mx-10  text-left  z-30 text-white my-6 font-quicksand font-semibold opacity-70 text-[12px] mb:text-[20px]">
        Game Setup:
      </div>
      <div className=" self-start mx-10 mb:-mt-1 my-1 text-left  z-30 text-white font-quicksand opacity-70 text-[12px] mb:text-[20px]">
        Each player starts with 100,000 Capital Dollars (usable for the purpose
        of the game and have no real-world value).
        <br />
        The game spans 1 to 5 simulated years, with each year divided into 4
        quarters.
        <br />
        Each quarter spans across 13 weeks as denoted by tiles on the board.{" "}
        <br />
        The tiles are of 2 types- Green tile denoting a positive return for the
        week and Red tile denoting a negative return for the week.
      </div>
      <br />
      <div className=" self-start mx-10  text-left  z-30 text-white my-6 font-quicksand font-semibold opacity-70 text-[12px] mb:text-[20px]">
        Turns and Timing:
      </div>
      <div className=" self-start mx-10 mb:-mt-1 my-1 text-left  z-30 text-white font-quicksand opacity-70 text-[12px] mb:text-[20px]">
        Players move across weeks using the dice
        <br />
        The number that ends up on the dice is equal to the number of tiles the
        player or group of players will move across during the year
        <br />
        For single player and multiplayer; the player and bot (single player)
        and all players (multiplayer) will end up on the same till decided by
        the dice.
        <br />
      </div>
      <br />
      <div className=" self-start mx-10  text-left  z-30 text-white my-6 font-quicksand font-semibold opacity-70 text-[12px] mb:text-[20px]">
        Investment Strategies:
      </div>
      <div className=" self-start mx-10 mb:-mt-1 my-1 text-left  z-30 text-white font-quicksand opacity-70 text-[12px] mb:text-[20px]">
        Research and choose from a variety of asset classes, including stocks,
        bonds, real estate, and more.
        <br />
        Make informed decisions based on changing market conditions, economic
        events, and corporate finance projects.
        <br />
      </div>
      <br />
      <div className=" self-start mx-10  text-left  z-30 text-white my-6 font-quicksand font-semibold opacity-70 text-[12px] mb:text-[20px]">
        Investment Rounds:
      </div>
      <div className=" self-start mx-10 mb:-mt-1 my-1 text-left  z-30 text-white font-quicksand opacity-70 text-[12px] mb:text-[20px]">
        In each quarter, players can invest in different asset classes: Equity,
        Savings/FD, Bonds, Commodities, ETFs, and Venture Capital. Each asset
        class has its own risk and return profile. Players can allocate their
        Capital Dollars to purchase assets. Savings/FD and Bonds are interest &
        coupon bearing assets respectively and are free from multipliers Whilst
        in Venture Capital, the players also receive additional cash in-flow for
        landing on the green tile.
      </div>
      <br />
      <div className=" self-start mx-10  text-left  z-30 text-white my-6 font-quicksand font-semibold opacity-70 text-[12px] mb:text-[20px]">
        Multiplier System:
      </div>
      <div className=" self-start mx-10 mb:-mt-1 my-1 text-left  z-30 text-white font-quicksand opacity-70 text-[12px] mb:text-[20px]">
        Multipliers determine the rate of return on investments. Strategic
        allocation is essential for maximizing returns. Rate of return= Market
        Return x Asset Multiplier For example market goes up by 1% and the
        multiplier of the asset invested is 5 Rate of return = 1 x 5 = 5% (Asset
        will increase by 5%) Wherever there are decimal values, it’s rounded off
        by 2 digits.
      </div>
      <br />
      <div className=" self-start mx-10  text-left  z-30 text-white my-6 font-quicksand font-semibold opacity-70 text-[12px] mb:text-[20px]">
        In-game questions:
      </div>
      <div className=" self-start mx-10 mb:-mt-1 my-1 text-left  z-30 text-white font-quicksand opacity-70 text-[12px] mb:text-[20px]">
        In-game questions test players' knowledge and offer rewards i.e.
        additional Capital Dollars.
      </div>
      <br />
      <div className=" self-start mx-10  text-left  z-30 text-white my-6 font-quicksand font-semibold opacity-70 text-[12px] mb:text-[20px]">
        Performance Assessment:
      </div>
      <div className=" self-start mx-10 mb:-mt-1 my-1 text-left  z-30 text-white font-quicksand opacity-70 text-[12px] mb:text-[20px]">
        Net worth is calculated at the end of each game. Player's net worth is
        the sum of their invested amount and cash balance.
      </div>
      <br />
      <div className=" self-start mx-10  text-left  z-30 text-white my-6 font-quicksand font-semibold opacity-70 text-[12px] mb:text-[20px]">
        Utilizing Real-Life Scenarios as Game Events to Enhance Portfolio Growth
      </div>
      <div className=" self-start mx-10 mb:-mt-1 my-1 text-left  z-30 text-white font-quicksand opacity-70 text-[12px] mb:text-[20px]">
        Within the game, we incorporate real-life scenarios termed as "events"
        that guide players in allocating resources and navigating market
        opportunities strategically. Events impact the lucrativeness of the
        assets (i.e. multipliers might increase or decrease according to the
        event), the flow of the tiles (the number of green and red tiles in a
        quarter) and the result of events might impact the asset values as well.
      </div>
      <br />
      <div className=" self-start mx-10  text-left  z-30 text-white my-6 font-quicksand font-semibold opacity-70 text-[12px] mb:text-[20px]">
        Navigating Surprise Events: Decisive Choices in an Unpredictable Market
      </div>
      <div className=" self-start mx-10 mb:-mt-1 my-1 text-left  z-30 text-white font-quicksand opacity-70 text-[12px] mb:text-[20px]">
        In Surprise Events, players face a challenging situation and they are
        given 30 seconds to allocate their portfolios according to the Surprise
        event. These events require players to make swift decisions, mirroring
        the fast-paced nature of the financial world. This challenges players to
        adapt quickly, enhancing their ability to handle unexpected situations.
      </div>
      <br />
      <div className=" self-start mx-10  text-left  z-30 text-white my-6 font-quicksand font-semibold opacity-70 text-[12px] mb:text-[20px]">
        Inflation's Impact: Asset Valuations Adjusting to Economic Realities
        Annually
      </div>
      <div className=" self-start mx-10 mb:-mt-1 my-1 text-left  z-30 text-white font-quicksand opacity-70 text-[12px] mb:text-[20px]">
        Recognizing the pervasive nature of inflation, the game incorporates its
        effects on asset values at the close of each year. This mirrors the
        reality where assets' worth can be influenced by inflation.Inflation
        rate will be obtained by the number that comes on the wheel at end of
        every year is taken as the rate of inflation and value of assets change
        accordingly.Players learn to manage and adapt their portfolios in
        response to this economic factor. Inflation impact as follows:
      </div>
      <br />
      <div className="scale text-white font-quicksand opacity-70 text-[14px] mb:text-[24px]">
        <table
          className="min-w-full text-center"
          style={{ border: "2px solid white" }}
        >
          <thead className="bg-gray-100">
            <tr>
              <th
                style={{ border: "2px solid white" }}
                className="mb:px-6 px-1 mb:py-3 py-2 text-left font-semibold text-gray-700"
              >
                Asset
              </th>
              <th
                style={{ border: "2px solid white" }}
                className="mb:px-6 px-1 mb:py-3 py-2 text-left font-semibold text-gray-700"
              >
                Effect of Inflation
              </th>
              <th
                style={{ border: "2px solid white" }}
                className="mb:px-6 px-1 mb:py-3 py-2 text-left font-semibold text-gray-700"
              >
                Amount of Change
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            <tr>
              <td
                style={{ border: "2px solid white" }}
                className="mb:px-6 px-1 mb:py-4 py-2 whitespace-nowrap"
              >
                Commodities
              </td>
              <td
                style={{ border: "2px solid white" }}
                className="mb:px-6 px-1 mb:py-4 py-2 whitespace-nowrap"
              >
                Increase
              </td>
              <td
                style={{ border: "2px solid white" }}
                className="mb:px-6 px-1 mb:py-4 py-2 whitespace-nowrap"
              >
                Rate of Inflation
              </td>
            </tr>
            <tr>
              <td
                style={{ border: "2px solid white" }}
                className="mb:px-6 px-1 mb:py-4 py-2 whitespace-nowrap"
              >
                Equity
              </td>
              <td
                style={{ border: "2px solid white" }}
                className="mb:px-6 px-1 mb:py-4 py-2 whitespace-nowrap"
              >
                No Effect
              </td>
              <td
                style={{ border: "2px solid white" }}
                className="mb:px-6 px-1 mb:py-4 py-2 whitespace-nowrap"
              >
                -
              </td>
            </tr>
            <tr>
              <td
                style={{ border: "2px solid white" }}
                className="mb:px-6 px-1 mb:py-4 py-2 whitespace-nowrap"
              >
                Fixed Income
              </td>
              <td
                style={{ border: "2px solid white" }}
                className="mb:px-6 px-1 mb:py-4 py-2 whitespace-nowrap"
              >
                Decrease
              </td>
              <td
                style={{ border: "2px solid white" }}
                className="mb:px-6 px-1 mb:py-4 py-2 whitespace-nowrap"
              >
                Rate of Inflation
              </td>
            </tr>
            <tr>
              <td
                style={{ border: "2px solid white" }}
                className="mb:px-6 px-1 mb:py-4 py-2 whitespace-nowrap"
              >
                Cash
              </td>
              <td
                style={{ border: "2px solid white" }}
                className="mb:px-6 px-1 mb:py-4 py-2 whitespace-nowrap"
              >
                No effect
              </td>
              <td
                style={{ border: "2px solid white" }}
                className="mb:px-6 px-1 mb:py-4 py-2 whitespace-nowrap"
              >
                -
              </td>
            </tr>
            <tr>
              <td
                style={{ border: "2px solid white" }}
                className="mb:px-6 px-1 mb:py-4 py-2 whitespace-nowrap"
              >
                Derivatives
              </td>
              <td
                style={{ border: "2px solid white" }}
                className="mb:px-6 px-1 mb:py-4 py-2 whitespace-nowrap"
              >
                No effect
              </td>
              <td
                style={{ border: "2px solid white" }}
                className="mb:px-6 px-1 mb:py-4 py-2 whitespace-nowrap"
              >
                -
              </td>
            </tr>
            <tr>
              <td
                style={{ border: "2px solid white" }}
                className="mb:px-6 px-1 mb:py-4 py-2 whitespace-nowrap"
              >
                Cryptocurrencies
              </td>
              <td
                style={{ border: "2px solid white" }}
                className="mb:px-6 px-1 mb:py-4 py-2 whitespace-nowrap"
              >
                No effect
              </td>
              <td
                style={{ border: "2px solid white" }}
                className="mb:px-6 px-1 mb:py-4 py-2 whitespace-nowrap"
              >
                -
              </td>
            </tr>
            <tr>
              <td
                style={{ border: "2px solid white" }}
                className="mb:px-6 px-1 mb:py-4 py-2 whitespace-nowrap"
              >
                Agriculture ETF
              </td>
              <td
                style={{ border: "2px solid white" }}
                className="mb:px-6 px-1 mb:py-4 py-2 whitespace-nowrap"
              >
                Increase
              </td>
              <td
                style={{ border: "2px solid white" }}
                className="mb:px-6 px-1 mb:py-4 py-2 whitespace-nowrap"
              >
                Rate of Inflation*2
              </td>
            </tr>
            <tr>
              <td
                style={{ border: "2px solid white" }}
                className="mb:px-6 px-1 mb:py-4 py-2 whitespace-nowrap"
              >
                Banking ETF
              </td>
              <td
                style={{ border: "2px solid white" }}
                className="mb:px-6 px-1 mb:py-4 py-2 whitespace-nowrap"
              >
                Decrease
              </td>
              <td
                style={{ border: "2px solid white" }}
                className="mb:px-6 px-1 mb:py-4 py-2 whitespace-nowrap"
              >
                Rate of Inflation*2
              </td>
            </tr>
            <tr>
              <td
                style={{ border: "2px solid white" }}
                className="mb:px-6 px-1 mb:py-4 py-2 whitespace-nowrap"
              >
                Infrastructure ETF
              </td>
              <td
                style={{ border: "2px solid white" }}
                className="mb:px-6 px-1 mb:py-4 py-2 whitespace-nowrap"
              >
                Decrease
              </td>
              <td
                style={{ border: "2px solid white" }}
                className="mb:px-6 px-1 mb:py-4 py-2 whitespace-nowrap"
              >
                Rate of Inflation*2
              </td>
            </tr>
            <tr>
              <td
                style={{ border: "2px solid white" }}
                className="mb:px-6 px-1 mb:py-4 py-2 whitespace-nowrap"
              >
                Automobile ETF
              </td>
              <td
                style={{ border: "2px solid white" }}
                className="mb:px-6 px-1 mb:py-4 py-2 whitespace-nowrap"
              >
                Decrease
              </td>
              <td
                style={{ border: "2px solid white" }}
                className="mb:px-6 px-1 mb:py-4 py-2 whitespace-nowrap"
              >
                Rate of Inflation*2
              </td>
            </tr>
            <tr>
              <td
                style={{ border: "2px solid white" }}
                className="mb:px-6 px-1 mb:py-4 py-2 whitespace-nowrap"
              >
                Information Technology ETF
              </td>
              <td
                style={{ border: "2px solid white" }}
                className="mb:px-6 px-1 mb:py-4 py-2 whitespace-nowrap"
              >
                Increase
              </td>
              <td
                style={{ border: "2px solid white" }}
                className="mb:px-6 px-1 mb:py-4 py-2 whitespace-nowrap"
              >
                Rate of Inflation*2
              </td>
            </tr>
            <tr>
              <td
                style={{ border: "2px solid white" }}
                className="mb:px-6 px-1 mb:py-4 py-2 whitespace-nowrap"
              >
                Consumer Electronics ETF
              </td>
              <td
                style={{ border: "2px solid white" }}
                className="mb:px-6 px-1 mb:py-4 py-2 whitespace-nowrap"
              >
                Decrease
              </td>
              <td
                style={{ border: "2px solid white" }}
                className="mb:px-6 px-1 mb:py-4 py-2 whitespace-nowrap"
              >
                Rate of Inflation*2
              </td>
            </tr>
            <tr>
              <td
                style={{ border: "2px solid white" }}
                className="mb:px-6 px-1 mb:py-4 py-2 whitespace-nowrap"
              >
                FMCG ETF
              </td>
              <td
                style={{ border: "2px solid white" }}
                className="mb:px-6 px-1 mb:py-4 py-2 whitespace-nowrap"
              >
                Increase
              </td>
              <td
                style={{ border: "2px solid white" }}
                className="mb:px-6 px-1 mb:py-4 py-2 whitespace-nowrap"
              >
                Rate of Inflation*2
              </td>
            </tr>
            <tr>
              <td
                style={{ border: "2px solid white" }}
                className="mb:px-6 px-1 mb:py-4 py-2 whitespace-nowrap"
              >
                Pharmaceuticals ETF
              </td>
              <td
                style={{ border: "2px solid white" }}
                className="mb:px-6 px-1 mb:py-4 py-2 whitespace-nowrap"
              >
                Increase
              </td>
              <td
                style={{ border: "2px solid white" }}
                className="mb:px-6 px-1 mb:py-4 py-2 whitespace-nowrap"
              >
                Rate of Inflation*2
              </td>
            </tr>
            <tr>
              <td
                style={{ border: "2px solid white" }}
                className="mb:px-6 px-1 mb:py-4 py-2 whitespace-nowrap"
              >
                Oil and gas ETF
              </td>
              <td
                style={{ border: "2px solid white" }}
                className="mb:px-6 px-1 mb:py-4 py-2 whitespace-nowrap"
              >
                Increase
              </td>
              <td
                style={{ border: "2px solid white" }}
                className="mb:px-6 px-1 mb:py-4 py-2 whitespace-nowrap"
              >
                Rate of Inflation*2
              </td>
            </tr>
            <tr>
              <td
                style={{ border: "2px solid white" }}
                className="mb:px-6 px-1 mb:py-4 py-2 whitespace-nowrap"
              >
                Mutual Funds
              </td>
              <td
                style={{ border: "2px solid white" }}
                className="mb:px-6 px-1 mb:py-4 py-2 whitespace-nowrap"
              >
                No effect
              </td>
              <td
                style={{ border: "2px solid white" }}
                className="mb:px-6 px-1 mb:py-4 py-2 whitespace-nowrap"
              >
                -
              </td>
            </tr>
            <tr>
              <td
                style={{ border: "2px solid white" }}
                className="mb:px-6 px-1 mb:py-4 py-2 whitespace-nowrap"
              >
                Forex
              </td>
              <td
                style={{ border: "2px solid white" }}
                className="mb:px-6 px-1 mb:py-4 py-2 whitespace-nowrap"
              >
                Decrease
              </td>
              <td
                style={{ border: "2px solid white" }}
                className="mb:px-6 px-1 mb:py-4 py-2 whitespace-nowrap"
              >
                Rate of Inflation
              </td>
            </tr>
            <tr>
              <td
                style={{ border: "2px solid white" }}
                className="mb:px-6 px-1 mb:py-4 py-2 whitespace-nowrap"
              >
                Savings/FD
              </td>
              <td
                style={{ border: "2px solid white" }}
                className="mb:px-6 px-1 mb:py-4 py-2 whitespace-nowrap"
              >
                No effect
              </td>
              <td
                style={{ border: "2px solid white" }}
                className="mb:px-6 px-1 mb:py-4 py-2 whitespace-nowrap"
              >
                -
              </td>
            </tr>
            <tr>
              <td
                style={{ border: "2px solid white" }}
                className="mb:px-6 px-1 mb:py-4 py-2 whitespace-nowrap"
              >
                Venture Capital
              </td>
              <td
                style={{ border: "2px solid white" }}
                className="mb:px-6 px-1 mb:py-4 py-2 whitespace-nowrap"
              >
                No effect
              </td>
              <td
                style={{ border: "2px solid white" }}
                className="mb:px-6 px-1 mb:py-4 py-2 whitespace-nowrap"
              >
                -
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className=" self-start mx-10  text-left  z-30 text-white my-6 font-quicksand font-semibold opacity-70 text-[12px] mb:text-[20px]">
        Exploring Corporate Finance Projects: Investing in Ventures for
        Potential Gains:
      </div>
      <div className=" self-start mx-10 mb:-mt-1 my-1 text-left  z-30 text-white font-quicksand opacity-70 text-[12px] mb:text-[20px]">
        Through the Corporate Finance project, players gain the opportunity to
        invest in diverse projects. These projects offer potential benefits if
        they continue successfully. This aspect of the game mirrors real-world
        investment opportunities, where strategic investment decisions can lead
        to favourable outcomes. The players are displayed the investment outlay
        along with future cash flows and recovery range
      </div>
      <br />
      <div className=" self-start mx-10  text-left  z-30 text-white my-6 font-quicksand font-semibold opacity-70 text-[12px] mb:text-[20px]">
        Single Player Mode (compete against bot):
      </div>
      <div className=" self-start mx-10  text-left  z-30 text-white my-6 font-quicksand font-semibold opacity-70 text-[12px] mb:text-[20px]">
        Play as a Trader (1-Year Journey):
      </div>
      <div className=" self-start mx-10 mb:-mt-1 my-1 text-left  z-30 text-white font-quicksand opacity-70 text-[12px] mb:text-[20px]">
        Experience the fast-paced world of trading. Make quick investment
        decisions and trade to maximise short-term gains. Navigate surprise
        events and corporate finance projects for added excitement.
      </div>
      <div className=" self-start mx-10  text-left  z-30 text-white my-6 font-quicksand font-semibold opacity-70 text-[12px] mb:text-[20px]">
        Play as an Investor (5-Year Journey):
      </div>
      <div className=" self-start mx-10 mb:-mt-1 my-1 text-left  z-30 text-white font-quicksand opacity-70 text-[12px] mb:text-[20px]">
        Embark on a strategic investment journey. Plan and allocate resources
        over a longer horizon to build a diversified portfolio. Overcome
        challenges, events, and surprise events to grow your investments.
      </div>
      <br />
      <div className=" self-start mx-10  text-left  z-30 text-white my-6 font-quicksand font-semibold opacity-70 text-[12px] mb:text-[20px]">
        Multiplayer Mode:
      </div>
      <div className=" self-start mx-10 mb:-mt-1 my-1 text-left  z-30 text-white font-quicksand opacity-70 text-[12px] mb:text-[20px]">
        Admin-controlled customization: Choose the duration of the game, whether
        1 to 5 simulated years. Engage with friends or players globally in a
        competitive investment battle. Exercise strategic gameplay to achieve
        dominance on the leaderboards.
      </div>
      <br />
      <div className=" self-start mx-10  text-left  z-30 text-white my-6 font-quicksand font-semibold opacity-70 text-[12px] mb:text-[20px]">
        Leaderboards and Rankings:
      </div>
      <div className=" self-start mx-10 mb:-mt-1 my-1 text-left  z-30 text-white font-quicksand opacity-70 text-[12px] mb:text-[20px]">
        Players are ranked based on net worth and performance. Compete with
        others globally, weekly (resets weekly).
      </div>
      <br />
      <div className=" self-start mx-10  text-left  z-30 text-white my-6 font-quicksand font-semibold opacity-70 text-[12px] mb:text-[20px]">
        Contests Mode:
      </div>
      <div className=" self-start mx-10 mb:-mt-1 my-1 text-left  z-30 text-white font-quicksand opacity-70 text-[12px] mb:text-[20px]">
        Use real money to get into exciting Capital Rush contests: Complete
        transparency of prize, pool, and calculation in the description of
        contests. Engage in contests with varying durations and entry fees. All
        contestants start off with the same amount of Capital Dollars for
        investment, the time period to play remains the same as well. Players
        are ranked on the basis of their net worth (Invested amount+ Cash
        Balance) in descending order (highest to lowest). Players are awarded
        either Capital Dollars or Real Money winnings according to their
        performance as per the game mode. The contest involves considerable use
        of skill and does not constitute gambling
      </div>
      <br />
      <div className=" self-start mx-10  text-left  z-30 text-white my-6 font-quicksand font-semibold opacity-70 text-[12px] mb:text-[20px]">
        Winning and Ranking:
      </div>
      <div className=" self-start mx-10 mb:-mt-1 my-1 text-left  z-30 text-white font-quicksand opacity-70 text-[12px] mb:text-[20px]">
        The player with the highest net worth (Invested Amount+ Cash Balance) at
        the end of simulated years wins. Players are ranked on the basis of
        their net worth (Invested amount+ Cash Balance) in descending order
        (highest to lowest). Players are awarded either Capital Dollars or Real
        Money winnings according to their performance as per the game mode.
      </div>
      <br />
      <div className=" self-start mx-10  text-left  z-30 text-white my-6 font-quicksand font-semibold opacity-70 text-[12px] mb:text-[20px]">
        Contest Payouts:
      </div>
      <div className=" self-start mx-10 mb:-mt-1 my-1 text-left  z-30 text-white font-quicksand opacity-70 text-[12px] mb:text-[20px]">
        Win cash prizes in contests by outperforming other players with your
        investment strategies. The payout can take maximum of 14 days once
        player places the withdrawal request.
      </div>
      <br />
      <div className=" flex flex-col items-center mx-1 lg:mx-4 mb:mx-10 py-20">
        <h1 className=" font-poppins text-[24px] mb:text-[48px] text-white font-bold z-40 flex-shrink-0">
          <span className="font-poppins  bg-gradient-to-r from-[#F67408] to-[#FAF51C] bg-clip-text text-transparent">
            Contest Terms and Conditions
          </span>
        </h1>
      </div>
      <div className=" self-start mx-10 mb:-mt-1 my-1 text-left  z-30 text-white font-quicksand opacity-70 text-[12px] mb:text-[20px]">
        The Company may run paid contests versions of the Game Contests on the
        Platform from time to time.
      </div>
      <br />
      <div className=" self-start mx-10  text-left  z-30 text-white my-6 font-quicksand font-semibold opacity-70 text-[12px] mb:text-[20px]">
        Entering a Contest:
      </div>
      <div className=" self-start mx-10 mb:-mt-1 my-1 text-left  z-30 text-white font-quicksand opacity-70 text-[12px] mb:text-[20px]">
        a. In the event you elect to play a Contest, you will be required to
        provide your KYC (Know Your Customer) details to us for verification.
        KYC verification is mandatory as a proof of identity for Contests. KYC
        verification may be done by providing certain details: (i) photograph of
        a valid government ID (Aadhaar Card, PAN Card etc.); and (ii) other user
        details. If you opt to provide your Aadhaar card / number for KYC, you
        hereby: (i) understand and agree that your Aadhaar Card / number has
        been submitted only for Your KYC verification; and (ii) You authorise
        the Company to temporarily access and verify Your Aadhaar card, You
        understand that the Company will not be storing your Aadhaar card /
        number unless as required by law.
        <br />
        <br />
        b. Upon successfully verifying your KYC, a deposit cash account
        (“Deposit Account”) and winnings cash account (“Winnings Account”) will
        be created for You.
        <br />
        <br />
        c. In order to participate in a Contest, Users will be required to buy a
        ticket (“Ticket”) by paying an entry amount in the form of cash. Users
        may add cash to their Deposit Account by using any of the payment modes
        available on the Platform
        <br />
        <br />
        d. The following categories of Tickets will be available to Users for
        each Contest:
        <br />
        <br />
        (i) Gold Ticket: User will get 4 chances to play the Contest and the
        highest score will be considered for the purpose of the leaderboard in
        the Contest.
        <br />
        (ii) Silver Ticket: User will get 2 chances to play the Contest and the
        highest score will be considered for the purpose of the leaderboard in
        the Contest.
        <br />
        (iii) Bronze Ticket: User will get 1 chance to play the Contest.
      </div>
      <br />
      <div className=" self-start mx-10  text-left  z-30 text-white my-6 font-quicksand font-semibold opacity-70 text-[12px] mb:text-[20px]">
        Playing a Contest:
      </div>
      <div className=" self-start mx-10 mb:-mt-1 my-1 text-left  z-30 text-white font-quicksand opacity-70 text-[12px] mb:text-[20px]">
        a. The rules of playing the Game as part of a Contest are as set out in
        the rulesheet above.
        <br />
        <br />
        b. Each Contest has a pre-determined limit on the number of participants
        that can participate and a specified time before which entries must be
        made. Specific terms of each Contest, such as number of participants,
        prizes / winnings, period of Contest etc. shall be informed to the User
        prior to commencement of the relevant Contest. <br />
        <br />
        c. Where the number of participants is less than required for then
        purpose of a Contest, the Platform may deploy bots in place of real
        Users. However, regardless of the position of the bots in the
        leaderboard, no prizes shall be awarded to the bots.
        <br />
        <br />
        d. Prizes in each Contest shall be awarded to Users ranking top rankings
        in the leaderboard for the relevant Contest. Prizes for each Contest may
        include real money as well as ‘Capital Gold’. On winning Real money, the
        amount will be reflected in the User’s Winnings Account. Capital Gold
        are non-transferable digital online coins, with no real world value,
        which can be used for unlocking benefits or features in the Game /
        Platform.
        <br />
        <br />
        e. Users are eligible to withdraw only cash winnings from the Winnings
        Account to User’s bank/wallet account once it is validated and KYC
        verified.
        <br />
        <br />
        f. User should ensure that the User’s bank account / UPI ID are active,
        failing which, the Platform will be unable to process the withdrawal.
        <br />
        <br />
        g. In case of withdrawal through a bank account or UPI, User should
        ensure that the name on the User’s KYC document matches the name of the
        account holder submitted for withdrawing cash winnings. In the event the
        name on the KYC document does not match with the account holder’s name,
        the same shall be considered invalid.
        <br />
        <br />
        h. All cash winnings shall be paid subject to deduction of withholding
        taxes as required under applicable law. All taxes applicable to the User
        shall be borne by the User.
      </div>
      <br />
      <div className=" self-start mx-10  text-left  z-30 text-white my-6 font-quicksand font-semibold opacity-70 text-[12px] mb:text-[20px]">
        Platform Fee Information:
      </div>
      <div className=" self-start mx-10 mb:-mt-1 my-1 text-left  z-30 text-white font-quicksand opacity-70 text-[12px] mb:text-[20px]">
        a. CAPITAL RUSH charges a Platform Fee from the User(s), for making
        available its e-platform where Capital Rush game is available and
        providing the service to the Users to participate in those games of
        skill or consume the content as offered.
        <br />
        <br />
        b. The Platform Fee for all the products/games is a fixed rate (%) of
        the Designated Amount and is between 10% and 30% and under extreme
        exceptional cases may go beyond this range.
        <br />
        <br />
        c. CAPITAL RUSH, in accordance with the Terms & Conditions of the Bonus
        Program, may give a Discount in the Platform Fee and thus the Designated
        Amount shall be accordingly recovered from the User’s Cash Balances
        <br />
        <br />
        c. This can be easily deduced from the Designated Amount and the total
        prize offered
      </div>
      <br />
      <div className=" self-start mx-10  text-left  z-30 text-white my-6 font-quicksand font-semibold opacity-70 text-[12px] mb:text-[20px]">
        Platform Fee Capital Rush:
      </div>
      <div className=" self-start mx-10 mb:-mt-1 my-1 text-left  z-30 text-white font-quicksand opacity-70 text-[12px] mb:text-[20px]">
        a. CAPITAL RUSH charges a ‘Processing Fee’ from the User(s) for
        facilitating withdrawal of Winnings through various modes including but
        not limited to Bank Account and UPI.
        <br />
        <br />
        b. The Processing Fee shall be levied as per the following schedule:
        <br />
        <br />
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
        <br />
        c. In accordance with the Terms & Conditions, CAPITAL RUSH reserves the
        right to revise the Processing Fee and its levy schedule at its sole
        discretion.
      </div>
      <br />
      <div className=" self-start mx-10  text-left  z-30 text-white my-6 font-quicksand font-semibold opacity-70 text-[12px] mb:text-[20px]">
        Return, Refund and Cancellation:
      </div>
      <div className=" self-start mx-10 mb:-mt-1 my-1 text-left  z-30 text-white font-quicksand opacity-70 text-[12px] mb:text-[20px]">
        a. Amounts once deposited in the Deposit Account cannot be withdrawn by
        the User
        <br />
        <br />
        b. In the event, that there is an error in the Service, Platform or in a
        Contest, or a Contest is cancelled by the Company, the Company may
        refund amount paid towards the affected Ticket back to the Deposit
        Account, provided the reasons are genuine and proved after an
        investigation by the Company. Such refund will reflect in the Deposit
        Amount within a reasonable period of time.
        <br />
        <br />
        c. Please read the rules of each Contest before participating.
      </div>
      <br />
      <div className=" self-start mx-10  text-left  z-30 text-white my-6 font-quicksand font-semibold opacity-70 text-[12px] mb:text-[20px]">
        User Accounts:
      </div>
      <div className=" self-start mx-10 mb:-mt-1 my-1 text-left  z-30 text-white font-quicksand opacity-70 text-[12px] mb:text-[20px]">
        a. Users must use any money, within 365 days, in their (i) Deposit
        Account towards purchase of Tickets and (ii) Winnings Account for
        withdrawals. The Company shall have the right to directly forfeit any
        such unused amount after 365 (three hundred and sixty-five) days with
        effect from 01 April 2023 (“Effective Date”) in accordance with the
        below-mentioned terms
        <br />
        <br />
        b. Account Maintenance Fees (“Maintenance Fees”)
        <br />
        <br />
        As on the Effective Date, if a Deposit Account or Winnings Account is
        lying dormant for a period of 365 days, the Company shall charge a
        Maintenance Fee to such User which shall be computed as follows.
        <br />
        <br />
        (i) For Deposit Account: The entire amount lying in the Deposit Account
        which shall be inclusive of any indirect taxes.
        <br />
        (ii) For Winnings Account: The Company will charge an upfront freezing
        fee (“Upfront Fee”) of INR 100 for all inactive accounts inclusive of
        all taxes. <br />
        (iii)The Maintenance Fee is for defraying the technical costs involved
        in such freezing, holding any amounts in escrow for users, etc and the
        Company shall not be required to provide any warning before charging the
        Maintenance Fees. The Company shall however issue a tax invoice to the
        User while charging the Maintenance Fees to such User.
        <br />
        <br />
        c. Please read the rules of each Contest before participating.
        <br />
        <br />
        1. In case the User’s Account continues to be dormant beyond a period of
        365 days, the Company also reserves the right to charge monthly
        maintenance fees (“Monthly Maintenance Fee”) which shall be charged on
        the balance remaining in the Winnings Account of the User after
        deduction of the Upfront Fee (“Balance”). The Monthly Maintenance Fee
        shall be charged in monthly arrears starting 30 (thirty) days after 365
        (three hundred and sixty-five) days of dormancy. The Monthly Maintenance
        Fee shall be equal to 8.33% of the Balance and shall be inclusive of all
        taxes. The User shall not be given any warning before the charge of the
        Monthly Maintenance Fee. The Company shall however issue a tax invoice
        to the User while charging the Maintenance Fees to such User
        <br />
        <br />
        2. The User shall incur this Monthly Maintenance Fee until his / her
        account is reverified by the Company and unfrozen.
        <br />
        <br />
        3. The User can unfreeze his / her accounts by logging in to his / her
        account and resubmitting KYC documents required by the Company for
        re-verification of the account.
        <br />
        <br />
        4. The User acknowledges and agrees that this measure is designed to
        prevent fraud/identity theft and is required to protect the User’s
        information and account. The Monthly Maintenance Fee is for defraying
        the technical and manpower costs involved in re-verification of the
        User’s account, holding amounts in escrow, etc.
        <br />
        <br />
        5. In case, the User does not unfreeze his account before the Balance
        becomes nil, the User’s account will be permanently blocked. The User
        will no longer be able to access this account and information associated
        with this account, however, this would not prevent the User from
        creating a new account on the Platform by following the process listed
        herein.
      </div>
      <br />
      <div className=" self-start mx-10  text-left  z-30 text-white my-6 font-quicksand font-semibold opacity-70 text-[12px] mb:text-[20px]">
        Games of skill:
      </div>
      <div className=" self-start mx-10 mb:-mt-1 my-1 text-left  z-30 text-white font-quicksand opacity-70 text-[12px] mb:text-[20px]">
        a. The Contest hosted by the Company on the Platform are all Games of
        Skill (defined below). <br />
        <br />
        b. ‘Games of Skill’, under Indian law, are excluded from the ambit of
        gambling legislations including, the Public Gambling Act of 1867 and
        other state enactments except in the restricted states, i.e. Andhra
        Pradesh, Assam, Nagaland, Odisha, Sikkim or Telangana (“Restricted
        States”). If the outcome of a game is predominantly determined by skill,
        then the game is considered a game of skill.
        <br />
        <br />
        c. Different asset investing need different skills, such as knowledge of
        the asset, familiarity with rules, experience, reflexes, experience,
        practice, etc. By virtue of its classification as a game of skill, the
        Contest does not violate the Public Gambling Act, of 1867, and is
        excluded from the ambit of certain Indian gambling legislations. <br />
        <br />
        d. However, Users residing in the Restricted States are prohibited from
        participating in Contests. Any participation by such individuals shall
        be at their sole risk and discretion and the Company shall not be liable
        to refund or reimburse any injury or damages suffered by such
        individuals. <br />
        <br />
        e. The Company reserves the right to monitor all User activities on the
        Platform. If any User participates in any Contest in violation of any
        central and/or state law(s) in India, the Company reserves the right to
        cooperate with law enforcement agencies of the relevant state and report
        such participation or/and suspicious activity along with all relevant
        details of the concerned User. (The Users based out of the Restricted
        States are not permitted under applicable Laws to participate in
        specific or all games hosted on the Platform and shall not be permitted
        to connect to the Game and/or Platform by breaching security measures
        put in by the Company, including without limitation through a virtual
        private network.) <br />
        <br />
        f. The Company does not support, endorse or offer to any User ‘games of
        chance’ for money. Each Contest available on the Platform has clearly
        defined rules and code of conduct. All Users are encouraged to read,
        understand and follow these rules to be successful in these games. The
        Company shall not be liable if Users do not adhere to the Game Rules or
        otherwise engage in gambling or betting activities on the Platform.
      </div>
      <br />
      <div className=" self-start mx-10  text-left  z-30 text-white my-6 font-quicksand font-semibold opacity-70 text-[12px] mb:text-[20px]">
        Disclaimer:
      </div>
      <div className=" self-start mx-10 mb:-mt-1 my-1 text-left  z-30 text-white font-quicksand opacity-70 text-[12px] mb:text-[20px]">
        The Game and / or the Contests are based on fictitious assets which have
        value only within the Game. The assets are not based on any real-life
        assets or securities and the Users should not rely on the same for any
        reason whatsoever. The Game is only for entertainment and recreation
        purposes and is not meant for and does not purport to provide any
        educational or learning services. The Platform, Game and Contests are
        made available only on an as-is basis and the Company does not make any
        representations or warranties as to the quality, suitability or
        merchantability of the Game, Contest or any prizes given to Users.
      </div>
      <br />
    </div>
  );
};

export default Terms;
