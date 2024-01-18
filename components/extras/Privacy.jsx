"use client";
import React, { useEffect } from "react";

const Privacy = () => {
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
    <div className=" pt-16 pb-10 flex flex-col items-center">
      <h1 className=" font-poppins text-[24px] mb:text-[48px] text-white font-bold z-40 flex-shrink-0">
        {/* Version - */}
        <span className="font-poppins  bg-gradient-to-r from-[#F67408] to-[#FAF51C] bg-clip-text text-transparent">
          PRIVACY POLICY
        </span>
      </h1>
      <p className=" self-start mx-10 my-4  text-left  z-30 text-white font-quicksand font-semibold opacity-70 text-[12px] mb:text-[20px]">
        1. GENERAL
      </p>
      <p className=" self-start mx-10 my-4  text-left  z-30 text-white font-quicksand opacity-70 text-[12px] mb:text-[20px]">
     1.1  Metronome Technologies Private Limited (“We”, “Us”, “Our”) is committed to the protection of
Personal Information provided by the Users (“You”, “Your”, “User”) to Us. You agree that Your
acceptance of the consent notice on the application branded ‘Capital Rush’ or the website
available at the www.capitalrush.io (“Platform”) indicates Your consent to the collection,
retention, and use of Your Personal Information in accordance with the terms of this Policy.
      </p>
      <p className=" self-start mx-10 my-4  text-left  z-30 text-white font-quicksand opacity-70 text-[12px] mb:text-[20px]">
     1.2  By using the Platform, you are agreeing to comply with and be bound by this Policy. Please review
the Policy carefully. If you do not agree to this Policy, you should not use the Platform, review any
information, or utilize any service from the Platform. This Policy constitute a binding agreement
and an electronic record under the Information Technology Act 2000 and the rules thereunder
and the amended provisions pertaining to electronic records under various Indian statutes. This
Policy should be read in conjunction with the Terms of Use (“Terms”) of the Platform and
capitalized terms used but not defined herein shall have the same meaning assigned to them
under the Terms. You acknowledge that this Policy, together with our Terms, forms our
agreement with you in relation to Your use of the Platform.
      </p>
      <p className=" self-start mx-10 my-4  text-left  z-30 text-white font-quicksand font-semibold opacity-70 text-[12px] mb:text-[20px]">
        2. INFORMATION COLLECTED
      </p>
      <p className=" self-start mx-10 my-4  text-left  z-30 text-white font-quicksand opacity-70 text-[12px] mb:text-[20px]">
      2.1 Personal Information 
      </p>
      <p className=" self-start mx-10 my-4  text-left  z-30 text-white font-quicksand opacity-70 text-[12px] mb:text-[20px]">
      The Company may collect, process, store and deal with the Personal Information provided by You,
as may be required by it, during the course of its business, including:
      </p>
      <ul className="mt-2 self-start flex flex-col gap-3 mx-6">
        <li className=" text-white font-quicksand opacity-70 text-[12px] mb:text-[20px] pl-4 ">
        Identification Details – Name, age, gender & images for the purposes of registering Your
User Account on the Platform;
        </li>
        <li className=" text-white font-quicksand opacity-70 text-[12px] mb:text-[20px] pl-4 ">
       Contact data - Your email address, phone number, postal address and any other contact
details; 
        </li>
        <li className=" text-white font-quicksand opacity-70 text-[12px] mb:text-[20px] pl-4 ">
         Demographic data - Your time zone, and location details; and

        </li>
        <li className=" text-white font-quicksand opacity-70 text-[12px] mb:text-[20px] pl-4 ">
         KYC –PAN, Aadhar, Driving License, Bank Details

        </li>
        <li className=" text-white font-quicksand opacity-70 text-[12px] mb:text-[20px] pl-4 ">
        Any other information which You may provide to us during customer-support
conversations, surveys, or for assistance in case of matters related to law enforcement,
investigations.
        </li>
      </ul>
      <p className=" self-start mx-10 my-4  text-left  z-30 text-white font-quicksand opacity-70 text-[12px] mb:text-[20px]">
     2.3  “Personal Information” means any information that relates to a natural person, which, either
directly or indirectly, in combination with other information available or likely to be available with
a body corporate, is capable of identifying such person and includes Sensitive Personal Data or
Information.
      </p>
      <p className=" self-start mx-10 my-4  text-left  z-30 text-white font-quicksand opacity-70 text-[12px] mb:text-[20px]">
     2.4  “Sensitive Personal Data or Information” means such personal data or information which
consists of information relating to (i) password, (ii) financial information such as Bank account or
credit card or debit card or other payment instrument details, (iii) physical, physiological and
mental health condition, (iv) sexual orientation, (v) medical records and history, (vi) biometric
information, (vii) any detail relating to the above clauses as provided to the Company for providing
any service, and (viii) any of the information received under above clauses by us for processing,
stored or processed under lawful contract or otherwise. 
      </p>
      <p className=" self-start mx-10 my-4  text-left  z-30 text-white font-quicksand opacity-70 text-[12px] mb:text-[20px]">
   2.5    In addition to the information provided by You on the Platform, We also collect information which
You have consented to share with Us via third parties such as (a) social media websites or other
interactive websites You may choose to connect or sign in with; (b) Our service providers, analytics
providers; or (c) the information You choose to upload, sync or import from the device on which
the Platform is being used. We may combine and process such data internally towards our
Platform. We may also collect and receive information in aggregated form from different browser
types for analysis.
      </p>
      <p className=" self-start mx-10 my-4  text-left  z-30 text-white font-quicksand opacity-70 text-[12px] mb:text-[20px]">
   2.6  All information disclosed by You shall be deemed to be disclosed willingly and without any
coercion. We shall not be liable with respect to the authenticity, genuineness, misrepresentation,
fraud, negligence, etc. of the information disclosed by You
      </p>
      <p className=" self-start mx-10 my-4  text-left  z-30 text-white font-quicksand opacity-70 text-[12px] mb:text-[20px]">
   2.7  Our Platform may contain links to third party websites or applications. You agree and understand
that privacy policies of these websites are not under Our control. You understand that once You
leave Our servers, use of any information You provide shall be governed by the privacy policy of
the operator of the site used by You.
      </p>
      <p className=" self-start mx-10 my-4  text-left  z-30 text-white font-quicksand opacity-70 text-[12px] mb:text-[20px]">
   2.8  The information collected by Us is stored in servers located in India. You hereby agree and provide
Your consent that We shall be at a liberty to store and/or transfer the information collected by
Us, as may be required by Us for or in relation to Our business, subject to Us ensuring that any
third party to whom Your information is transferred to ensures the same level of protection
afforded to Your information by Us.
      </p>
      <p className=" self-start mx-10 my-4  text-left  z-30 text-white font-quicksand font-semibold opacity-70 text-[12px] mb:text-[20px]">
        3. DISCLOSURE OF PERSONAL INFORMATION
      </p>
      <p className=" self-start mx-10 my-4  text-left  z-30 text-white font-quicksand opacity-70 text-[12px] mb:text-[20px]">
     3.1  We do not disclose Your Personal Information to any third parties other than to Our affiliates or
other trusted business or persons, based on strict adherence and in compliance with Our Privacy
Policy and any other appropriate confidentiality and security measures.
      </p>
      <p className=" self-start mx-10 my-4  text-left  z-30 text-white font-quicksand opacity-70 text-[12px] mb:text-[20px]">
    3.2  We may use Your information, as is or in aggregate form (to ensure privacy and non-identification
of individual User) for the following purposes:
      </p>
      <ul className="mt-2 self-start flex flex-col gap-3 mx-6">
        <li className=" text-white font-quicksand opacity-70 text-[12px] mb:text-[20px] pl-4 ">
        To assist Your registration, login and management of the Platform; 
        </li>
        <li className=" text-white font-quicksand opacity-70 text-[12px] mb:text-[20px] pl-4 ">
        To confirm Your identity directly and/or through third parties;
        </li>
        <li className=" text-white font-quicksand opacity-70 text-[12px] mb:text-[20px] pl-4 ">
         To help You efficiently access Your information after You sign into the Platform;

        </li>
        <li className=" text-white font-quicksand opacity-70 text-[12px] mb:text-[20px] pl-4 ">
        To aid strategic development, data collection and business analytics;

        </li>
        <li className=" text-white font-quicksand opacity-70 text-[12px] mb:text-[20px] pl-4 ">
         To provide seamless and swift delivery of prizes and coupons to You;
        </li>
        <li className=" text-white font-quicksand opacity-70 text-[12px] mb:text-[20px] pl-4 ">
         To manage Our relationship with advertisers and partners;
        </li>
        <li className=" text-white font-quicksand opacity-70 text-[12px] mb:text-[20px] pl-4 ">
        3.2.7 To audit usage of the Platform; 
        </li>
        <li className=" text-white font-quicksand opacity-70 text-[12px] mb:text-[20px] pl-4 ">
         To enhance User experience in relation to the Platform; 
        </li>
        <li className=" text-white font-quicksand opacity-70 text-[12px] mb:text-[20px] pl-4 ">
         To remember Your Personal Information so that You are not required to re-enter it the
next time You visit the Platform;
        </li>
        <li className=" text-white font-quicksand opacity-70 text-[12px] mb:text-[20px] pl-4 ">
         To provide customized suggestion / services relevant to You;
        </li>
        <li className=" text-white font-quicksand opacity-70 text-[12px] mb:text-[20px] pl-4 ">
        To communicate with You through mail, e-mail and telephone, in connection with the
services provided through the Platform; 
        </li>
        <li className=" text-white font-quicksand opacity-70 text-[12px] mb:text-[20px] pl-4 ">
         To communicate important notices or changes in the services of the Platform, use of the
Platform and the Terms, this Policy and/or any other policies which govern the
relationship between You and Us;
        </li>
        <li className=" text-white font-quicksand opacity-70 text-[12px] mb:text-[20px] pl-4 ">
         For internal purposes such as data analysis, research and improvement relating to the
Platform or the services provided through the Platform;
        </li>
        <li className=" text-white font-quicksand opacity-70 text-[12px] mb:text-[20px] pl-4 ">
         To transfer data to the regulatory authorities or other appropriate authorities as required
by law; and
        </li>
        <li className=" text-white font-quicksand opacity-70 text-[12px] mb:text-[20px] pl-4 ">
         Any reason incidental to any reason listed above. (“collectively, “Permitted Use”).
        </li>
      </ul>
      <p className=" self-start mx-10 my-4  text-left  z-30 text-white font-quicksand opacity-70 text-[12px] mb:text-[20px]">
     3.3  We may disclose Your information to: (i) any third party to facilitate the provision of the services
through the Platform; and (ii) any third parties who provide services, such as auditing, data
analysis, Platform improvement and assistance with delivery of content, relevant marketing
messages and advertisements on the Platform. We or third-party service providers or the persons
authorized by them, may send You e-mails in relation to Your use of the Platform. We
contractually require these third parties to keep such information confidential and use it only for
the purposes for which We disclose it to them. These third parties may view, edit, or set their own
cookies or may place beacons on Your Personal Information.
      </p>
      <p className=" self-start mx-10 my-4  text-left  z-30 text-white font-quicksand opacity-70 text-[12px] mb:text-[20px]">
     3.4  We may be required to disclose Your Personal Information in the following cases: (i) where We
are obligated under any applicable laws or for responding to orders, direction, processes of law
enforcement agencies, judiciary, governmental authorities; (ii) where We are in the process of
detecting and preventing potential or actual occurrence of identity theft, fraud, money
laundering, abuse of the Platform and other illegal acts; (iii) responding to claims that an
advertisement, posting or other User Content violates the intellectual property rights of a third
party; (iv) under a duty to disclose or share Your Personal Information in order to enforce or apply
our Terms and other agreements; or (v) to protect the rights, property, or safety of the Company,
our Users, or others. 
      </p>
      <p className=" self-start mx-10 my-4  text-left  z-30 text-white font-quicksand opacity-70 text-[12px] mb:text-[20px]">
     3.5  We may disclose or transfer Your information (Personal Information or otherwise) to any
subsidiary and to a third party if We sell, transfer or divest all or a portion of Our business or assets
to another company in connection with or during negotiation of any merger, financing,
acquisition, bankruptcy, dissolution, transaction, or proceeding. Such third parties shall be
contractually bound to not disclose further, any Personal Information disclosed to them.
      </p>
      <p className=" self-start mx-10 my-4  text-left  z-30 text-white font-quicksand font-semibold opacity-70 text-[12px] mb:text-[20px]">
        4. RETENTION OF INFORMATION
      </p>
      <p className=" self-start mx-10 my-4  text-left  z-30 text-white font-quicksand opacity-70 text-[12px] mb:text-[20px]">
      We do not disclose Your Personal Information to any third parties other than to Our affiliates or
other trusted business or persons, based on strict adherence and in compliance with Our Privacy
Policy and any other appropriate confidentiality and security measures.
      </p>
      <p className=" self-start mx-10 my-4  text-left  z-30 text-white font-quicksand font-semibold opacity-70 text-[12px] mb:text-[20px]">
        5. REASONABLE SECURITY PRACTICES AND PROCEDURES 
      </p>
      <p className=" self-start mx-10 my-4  text-left  z-30 text-white font-quicksand opacity-70 text-[12px] mb:text-[20px]">
      We have taken necessary safeguard for physical safety of all its information technology
components. However, the transmission of information via the internet or telephone networks is
not completely secure. While We do Our best to protect Your information, particularly with
respect to protection of Your Personal information, We cannot ensure the security of Your data
transmitted via the internet, telephone or any other networks.
      </p>
      <p className=" self-start mx-10 my-4  text-left  z-30 text-white font-quicksand font-semibold opacity-70 text-[12px] mb:text-[20px]">
        6. LEGAL BASIS FOR DATA PROCESSING
      </p>
      <p className=" self-start mx-10 my-4  text-left  z-30 text-white font-quicksand opacity-70 text-[12px] mb:text-[20px]">
      We reserve the right to process Personal Information for the purposes set out in this Privacy
Policy, as described above. The legal basis to process Personal Information includes processing
that is: necessary for the performance of the contract with You (for example, to provide You with
the services You request and to identify and authenticate You so You may use the Platform);
necessary to comply with legal requirements (for example, to make mandatory disclosures to any
law enforcement agencies or authorities); necessary for Our legitimate interests (for example, to
manage the relationship with You, to ensure the security of the service provided by the Platform,
to communicate with You about Our services); and based on consent by You (for example, to
share Your information with third parties as specified under Clause 2.6,3.2 and 3.3). In some
instances, You may be required to provide Us with Personal Information for processing as
described above, in order to enable Us to provide You and for You to use all the features of the
Platform.
      </p>
      <p className=" self-start mx-10 my-4  text-left  z-30 text-white font-quicksand font-semibold opacity-70 text-[12px] mb:text-[20px]">
        7. UPDATES AND CHANGES TO PRIVACY POLICY
      </p>
      <p className=" self-start mx-10 my-4  text-left  z-30 text-white font-quicksand opacity-70 text-[12px] mb:text-[20px]">
      We reserve the right, at any time, to add to, change, update, or modify this Privacy Policy without
any notice. If We do, then We will post these changes on this page. In all cases, use of information
We collect is subject to the Privacy Policy in effect at the time such information is collected. We
encourage You to periodically review the Policy for the latest information on Our privacy
practices.
      </p>
      <p className=" self-start mx-10 my-4  text-left  z-30 text-white font-quicksand font-semibold opacity-70 text-[12px] mb:text-[20px]">
        8. YOUR RIGHTS
      </p>
      <p className=" self-start mx-10 my-4  text-left  z-30 text-white font-quicksand opacity-70 text-[12px] mb:text-[20px]">
      Subject to limitations in applicable law, You are entitled to object or request the restriction of
processing of Your Personal Information. You have a right to correct any errors or inaccuracies in
Your Personal Information available with Us. You may request Us that We cease to use Your
Personal Information, by writing to us at hello@capitalrush.gg. If You are a registered User of the
Platform, the Platform provides You with tools and account settings to access or modify the profile
information You have provided and is associated with Your User Account. Should You request Us
to cease use and deletion of Your Personal Information, We request that You close Your User
Account and stop accessing the Platform. If You are aware of changes in Your information, You
should inform Us of such changes so that Our records may be updated or corrected. Requests for
correction or modification of Personal Information are subject to our ability to reasonably verify
Your identity in light of the information requested and pursuant to relevant requirements, limitations, and regulations. To verify Your correction or modification of Personal Information
request, please authenticate Your User Account by logging into Your User Account. We may
request a reasonable fee to comply with Your request and a fee estimate may be given after You
have made Your request
      </p>
      <p className=" self-start mx-10 my-4  text-left  z-30 text-white font-quicksand font-semibold opacity-70 text-[12px] mb:text-[20px]">
        9. GRIEVANCE OFFICER
      </p>
      <p className=" self-start mx-10 my-4  text-left  z-30 text-white font-quicksand opacity-70 text-[12px] mb:text-[20px]">
      Please address Your grievances with respect to the collection, processing, usage, disclosure,
security of Your information or on any element of this policy, in writing an email to our grievance
officer at hello@capitalrush.gg. The grievance officer shall redress the grievances expeditiously
and no later than the period as prescribed under applicable law.
      </p>
      <p className=" self-start mx-10 my-4  text-left  z-30 text-white font-quicksand font-semibold opacity-70 text-[12px] mb:text-[20px]">
        10. DISCLAIMER / RESTRICTION OF LIABILITY
      </p>
      <p className=" self-start mx-10 my-4  text-left  z-30 text-white font-quicksand opacity-70 text-[12px] mb:text-[20px]">
     10.1  We make no claims, promises or guarantees about the accuracy, completeness, or adequacy of
the content available through the Platform and expressly disclaim liability for errors and omissions
in the content available through the Platform.
      </p>
      <p className=" self-start mx-10 my-4  text-left  z-30 text-white font-quicksand opacity-70 text-[12px] mb:text-[20px]">
    10.2  No warranty of any kind, implied, expressed or statutory, including but not limited to the
warranties of non-infringement of third-party rights, title, merchantability, fitness for a particular
purpose and freedom from computer virus, is given with respect to the content available through
the Platform or its links to other internet resources as may be available to You through the
Platform.
      </p>
      <p className=" self-start mx-10 my-4  text-left  z-30 text-white font-quicksand opacity-70 text-[12px] mb:text-[20px]">
    10.3  Reference in the Platform to any specific commercial products, processes, or services, or the use
of any trade, firm or corporation name is for the information and convenience of the public /
Users, and does not constitute endorsement, recommendation, or favoring by Us.
      </p>
      {/* <p className=" self-start mx-10 my-4  text-left  z-30 text-white font-quicksand font-semibold opacity-70 text-[12px] mb:text-[20px]">
        1. What do we mean by the cookie?
      </p>
      <p className=" self-start mx-10 my-4  mb:-mt-4 text-left  z-30 text-white font-quicksand opacity-70 text-[12px] mb:text-[20px]">
        When you visit a website, text files containing small bits of
        information called cookies are downloaded to your device. They are
        extensively used to make websites work, or work more efficiently, as
        well as to provide information to website owners in order to improve the
        user experience in general, such as remembering your preferences or
        providing you with personalized content and advertisements. Other
        related technologies, such as log files, pixel tags, web beacons, clear
        GIFs, and device IDs, can fulfill the same functions as cookies. We will
        refer to them all collectively as “Cookies” in this Cookie Policy.
      </p>
      <p className=" self-start mx-10 my-4  text-left  z-30 text-white font-quicksand font-semibold opacity-70 text-[12px] mb:text-[20px]">
        2. How do we use Cookies?
      </p>
      <p className=" self-start mx-10 my-4  mb:-mt-4 text-left  z-30 text-white font-quicksand opacity-70 text-[12px] mb:text-[20px]">
        We use cookies to:-{" "}
      </p>
      <ul className="mt-2 self-start flex flex-col gap-3 mx-16">
        <li className=" text-white font-quicksand opacity-70 text-[12px] mb:text-[20px] pl-4 ">
          Allow users to find friends who use a Service by verifying log-in
          information and allowing them to find friends who use a Service.;
        </li>
        <li className=" text-white font-quicksand opacity-70 text-[12px] mb:text-[20px] pl-4 ">
          Keep track of traffic flow and travel patterns in relation to a
          Service
        </li>
        <li className=" text-white font-quicksand opacity-70 text-[12px] mb:text-[20px] pl-4 ">
          Keep track of the overall number of users of a Service and the devices
          they use on a regular basis
        </li>
        <li className=" text-white font-quicksand opacity-70 text-[12px] mb:text-[20px] pl-4 ">
          Personalise and improve your online experience;
        </li>
        <li className=" text-white font-quicksand opacity-70 text-[12px] mb:text-[20px] pl-4 ">
          Provide customer service
        </li>
        <li className=" text-white font-quicksand opacity-70 text-[12px] mb:text-[20px] pl-4 ">
          Display advertisements from third parties in Metronome
        </li>
      </ul>
      <p className=" self-start mx-10 my-4  text-left  z-30 text-white font-quicksand font-semibold opacity-70 text-[12px] mb:text-[20px]">
        3. What types of cookies do we use?
      </p>
      <p className=" self-start mx-10 my-4  mb:-mt-4 text-left  z-30 text-white font-quicksand opacity-70 text-[12px] mb:text-[20px]">
        ‘Necessary Cookies,’ ‘Functional Cookies,’ ‘Analytics Cookies,’ and
        ‘Advertising and Tracking Cookies’ are the four types of Cookies used by
        us and our partners in connection with a Service. We’ve included some
        additional details on each category, purpose, and duration of the
        Cookies we and third parties use below. You can disable Cookies at any
        time using the Privacy Settings, but this may have an impact on how the
        Service works. Necessary Cookies <br />
        Essential features like security, network administration, and
        accessibility are made possible by necessary cookies. Necessary Cookies{" "}
        <br />
        Functional cookies keep track of the choices you’ve made and allow us to
        customize the Service for you. These Cookies allow us to offer you our
        services as you have requested them in the past when you continue to use
        or return to use a Service. These cookies, for example, enable us to
        display you when you are logged in and store your choices, such as your
        preferred language. Analytics Cookies <br />
        Analytics cookies track how our Service is accessed, used, and performed
        in order to give you a better user experience and to help us manage,
        operate, and develop it. These cookies allow us to:
      </p>
      <ul className="mt-2 self-start flex flex-col gap-3 mx-10">
        <li className=" text-white font-quicksand opacity-70 text-[12px] mb:text-[20px] pl-4 ">
          Test new design ideas for particular features;
        </li>
        <li className=" text-white font-quicksand opacity-70 text-[12px] mb:text-[20px] pl-4 ">
          Measure the number of unique users of a Service;
        </li>
        <li className=" text-white font-quicksand opacity-70 text-[12px] mb:text-[20px] pl-4 ">
          Improve a Service by measuring any mistakes that occur;
        </li>
        <li className=" text-white font-quicksand opacity-70 text-[12px] mb:text-[20px] pl-4 ">
          Improve the product, do research and diagnostics.
        </li>
      </ul>
      <p className=" self-start mx-10 my-4  text-left  z-30 text-white font-quicksand font-semibold opacity-70 text-[12px] mb:text-[20px]">
        Advertising and Targeting Cookies
      </p>
      <p className=" self-start mx-10 my-4  mb:-mt-4 text-left  z-30 text-white font-quicksand opacity-70 text-[12px] mb:text-[20px]">
        Advertising and targeting Through our Services, our advertising partners
        may set cookies. They might be used by those businesses to compile a
        profile of your interests and serve you with pertinent adverts on other
        websites. A list of advertising partners utilized in the Services can be
        found in our Privacy Policy. Please keep in mind that the advertising
        options you select in the Privacy Settings only apply to our Web
        Services. If you are a player of our Mobile Games and do not want to
        receive targeted advertisements, you can change your ad preferences via
        the in-app settings in certain of our games, or by contacting us at
        hello@capitalrush.gg If you join a Service using a social media
        platform, such third parties may set their own Cookies to track your
        usage of their platform. Also, if you click on a link to a third-party
        website (for example, in an ad), you will be directed to the third
        website, the party not Metronome’s. When you interact with a
        third-product party or service, they may place Cookies on your device.
      </p>
      <p className=" self-start mx-10 my-4  text-left  z-30 text-white font-quicksand font-semibold opacity-70 text-[12px] mb:text-[20px]">
        4. How to manage or remove cookies
      </p>
      <p className=" self-start mx-10 my-4  mb:-mt-4 text-left  z-30 text-white font-quicksand opacity-70 text-[12px] mb:text-[20px]">
        As previously stated, you have the right to and can manage how we use
        cookies and other similar technologies at any time by altering the
        Privacy settings and, in the case of some of our Mobile Games, the
        in-app settings. Please keep in mind that if you refuse Cookies, you may
        not be able to utilize all of the features of the Services.
      </p>
      <p className=" self-start mx-10 my-4  text-left  z-30 text-white font-quicksand font-semibold opacity-70 text-[12px] mb:text-[20px]">
        5. Changes to this Cookie Policy
      </p>
      <p className=" self-start mx-10 my-4  mb:-mt-4 text-left  z-30 text-white font-quicksand opacity-70 text-[12px] mb:text-[20px]">
        This Cookie Policy will be updated to reflect changes in our practices
        and services. We will update the “Last Updated” date at the top of this
        Cookie Policy whenever we make changes to it.
      </p>
      <p className=" self-start mx-10 my-4  text-left  z-30 text-white font-quicksand font-semibold opacity-70 text-[12px] mb:text-[20px]">
        6. Cookies that have been set in the past
      </p>
      <p className=" self-start mx-10 my-4  mb:-mt-4 text-left  z-30 text-white font-quicksand opacity-70 text-[12px] mb:text-[20px]">
        We may continue to utilize information collected from cookies prior to
        your disabled choice being set if you have disabled one or more cookies;
        however, we will not use the disabled cookie to gather any further
        information.
      </p>
      <p className=" self-start mx-10 my-4  text-left  z-30 text-white font-quicksand font-semibold opacity-70 text-[12px] mb:text-[20px]">
        7. Contact us
      </p>
      <p className=" self-start mx-10 my-4  mb:-mt-4 text-left  z-30 text-white font-quicksand opacity-70 text-[12px] mb:text-[20px]">
        If you wish to contact Metronome about this Cookies Policy and the use
        of cookies in the Services, please contact at hello@capitalrush.gg
      </p>
      <p className=" self-start mx-10 my-4  text-left  z-30 text-white font-quicksand font-semibold opacity-70 text-[12px] mb:text-[20px]">
        Service Providers
      </p>
      <p className=" self-start mx-10 my-4  mb:-mt-4 text-left  z-30 text-white font-quicksand opacity-70 text-[12px] mb:text-[20px]">
        For the following reasons, we may hire third-party firms and
        individuals:
      </p>
      <ul className="mt-2 self-start flex flex-col gap-3 mx-10">
        <li className=" text-white font-quicksand opacity-70 text-[12px] mb:text-[20px] pl-4 ">
          To cater the Service on our behalf;
        </li>
        <li className=" text-white font-quicksand opacity-70 text-[12px] mb:text-[20px] pl-4 ">
          To facilitate our Service;
        </li>
        <li className=" text-white font-quicksand opacity-70 text-[12px] mb:text-[20px] pl-4 ">
          To perform Service-related services;
        </li>
        <li className=" text-white font-quicksand opacity-70 text-[12px] mb:text-[20px] pl-4 ">
          To assist us in analyzing the uses of service;
        </li>
        <li className=" text-white font-quicksand opacity-70 text-[12px] mb:text-[20px] pl-4 ">
          To Improve, personalize, and expand our website;
        </li>
        <li className=" text-white font-quicksand opacity-70 text-[12px] mb:text-[20px] pl-4 ">
          To Understand and analyses how you use our website;
        </li>
        <li className=" text-white font-quicksand opacity-70 text-[12px] mb:text-[20px] pl-4 ">
          To Develop new products, services, functionality & features;
        </li>
        <li className=" text-white font-quicksand opacity-70 text-[12px] mb:text-[20px] pl-4 ">
          To Communicate with you either directly or through one of our
          partners, for better customer service, to provide you with updates and
          other information relating to the website and product, and for
          marketing and promotional purposes;
        </li>
        <li className=" text-white font-quicksand opacity-70 text-[12px] mb:text-[20px] pl-4 ">
          To Find and prevent fraud.
        </li>
      </ul>
      <p className=" self-start mx-10 my-4 text-left  z-30 text-white font-quicksand opacity-70 text-[12px] mb:text-[20px]">
        Users should be aware that when they use our Service, these third
        parties have access to their Personal Information. This is so that they
        can fulfil the obligations that have been assigned to them in our name.
      </p>
      <p className=" self-start mx-10 my-4  text-left  z-30 text-white font-quicksand font-semibold opacity-70 text-[12px] mb:text-[20px]">
        Security
      </p>
      <p className=" self-start mx-10 my-4  mb:-mt-4 text-left  z-30 text-white font-quicksand opacity-70 text-[12px] mb:text-[20px]">
        We respect your trust in entrusting us with your Personal Information,
        thus we strive to protect it using commercially reasonable ways. But
        remember that no method of transmission over the internet, or method of
        electronic storage is 100% secure and reliable, and we cannot guarantee
        its absolute security, though we are very much concerned over the
        security of identity of every user and we follow all the rules,
        compliances and regulations pertaining to it. The compliances that we
        follow can be checked at the website itself.
      </p>
      <p className=" self-start mx-10 my-4  text-left  z-30 text-white font-quicksand font-semibold opacity-70 text-[12px] mb:text-[20px]">
        Cookies and Web Beacons
      </p>
      <p className=" self-start mx-10 my-4  mb:-mt-4 text-left  z-30 text-white font-quicksand opacity-70 text-[12px] mb:text-[20px]">
        Like any other website, www.capitalrush.gg uses ‘cookies’. These cookies
        are used to save information such as visitor preferences and the pages
        of the website they browsed or visited. By modifying the content of our
        web pages based on visitors’ browser types and/or other information, we
        can enhance the user experience. Links to Other Sites <br />
        Links to other websites may be found on this service. If you click on a
        third-party link, you will be taken to a third-party website. Please be
        aware that we do not control these external websites. <br />
        As a result, we strongly suggest that you read the Privacy Policies of
        these websites. The content, privacy practices, or other policies of any
        third-party websites or services are beyond our control and
        responsibility.
      </p>
      <p className=" self-start mx-10 my-4  text-left  z-30 text-white font-quicksand font-semibold opacity-70 text-[12px] mb:text-[20px]">
        Indemnification
      </p>
      <p className=" self-start mx-10 my-4  mb:-mt-4 text-left  z-30 text-white font-quicksand opacity-70 text-[12px] mb:text-[20px]">
        Upon our or our licensors’ request, you agree to defend, indemnify and
        hold harmless us, our licensors and our affiliates, contractors,
        vendors, and content providers from all liabilities, claims and
        expenses, including attorneys’ fees, that arise from or relate to a
        breach of these Terms & Conditions of Service for which you are
        responsible. Without limiting the generality of the aforementioned, you
        agree to defend and hold harmless Capital Rush and its licensees from
        any improper or unlawful use of your Account, including any improper or
        unauthorized use of your Account by a person to whom you have provided
        access. You acknowledge that your use of our services, as well as all
        communication and activity on Capital Rush Services, including any
        Content you contribute, are done at your own risk. You also agree to
        defend, indemnify, and hold Capital Rush, its licensors, and our
        affiliates harmless from any liability or damages resulting from your
        conduct on Capital Rush Services, including any Content you contribute.{" "}
        <br />
        Capital Rush is not responsible for any trading and investing decisions
        of the player, as real-time trading and investing is subject to market
        risks in this volatile era. Capital Rush and its licensees reserve the
        right to take sole responsibility for the defense and management of any
        dispute that might otherwise be subject to indemnification by you at
        their own expense. In that case, you are no longer required to offer
        Capital Rush and/or its licensors indemnity in that regard. This Section
        will remain in effect when the Terms of Service expire.
      </p>
      <p className=" self-start mx-10 my-4  text-left  z-30 text-white font-quicksand font-semibold opacity-70 text-[12px] mb:text-[20px]">
        Termination of Services:
      </p>
      <p className=" self-start mx-10 my-4  mb:-mt-4 text-left  z-30 text-white font-quicksand opacity-70 text-[12px] mb:text-[20px]">
        If no time period for notice of termination was specified when you
        joined the specific Capital Rush Service, then within thirty (30) days
        of the date such notice is either (at Capital Rush’ discretion) provided
        to you or is posted on the relevant product, Capital Rush may at any
        time terminate access to any online or mobile products and/or Capital
        Rush Services (and/or any portion thereof). Capital Rush may also
        terminate access to Capital Rush services for violation of this terms &
        conditions, if Capital Rush (in its sole discretion) deems that your use
        of Capital Rush Services renders Capital Rush less safe for others
        and/or minors or for illegal or improper use of Capital Rush Services,
        Content, Entitlement, products, or our Intellectual Property as
        determined by Capital Rush in its sole discretion. Due to termination,
        you risk losing your user name and IDs as a result of termination. In
        response to a violation of these Terms of Service or any other agreement
        applicable to Capital Rush services accessed by you, Capital Rush may
        issue you a warning, suspend your Account, selectively remove, revoke or
        garnish entitlements at an Account and/or device level, immediately
        terminate any and all Accounts that you have established and/or
        temporarily or permanently ban your device and/or machine from accessing
        all Capital Rush Services or certain Capital Rush Services, no refund
        will be granted, You will no longer have access to your Account or the
        entitlements associated with it, and no entitlements will be credited to
        you or converted to cash or other forms of repayment. You acknowledge
        that in such an instance Capital Rush is not required to provide you
        notice before taking action to suspend or terminate your Account,
        temporarily or permanently banning your device from some or all Capital
        Rush Services or selectively removing, revoking or garnishing
        entitlements associated with your Account. If Capital Rush terminates
        your Account, you may not participate in our service again without our
        express permission. You may not allow individuals whose accounts have
        been terminated by Capital Rush to use your Account.
      </p>
      <p className=" self-start mx-10 my-4  text-left  z-30 text-white font-quicksand font-semibold opacity-70 text-[12px] mb:text-[20px]">
        Children’s Privacy
      </p>
      <p className=" self-start mx-10 my-4  mb:-mt-4 text-left  z-30 text-white font-quicksand opacity-70 text-[12px] mb:text-[20px]">
        These Services do not address anyone below 18. We do not knowingly
        collect personally information from children below 18. If we discover
        that a child under 18 has provided us with personal information, we will
        immediately delete this from our servers. If you are a parent or
        guardian and you are aware that your child has provided us with his or
        your personal information, please contact us through any medium so that
        we can take the necessary actions. Changes to This Privacy Policy <br />
        We may occasionally make modifications to our Privacy Policy. We advise
        you to review this policy periodically for any changes. We will notify
        you in case of any changes by posting the new Privacy Policy on this
        page only. This policy is effective as of 2023-02-14 (14th Feb 2023)
      </p>
      <p className=" self-start mx-10 my-4  text-left  z-30 text-white font-quicksand font-semibold opacity-70 text-[12px] mb:text-[20px]">
        Jurisdiction
      </p>
      <p className=" self-start mx-10 my-4  mb:-mt-4 text-left  z-30 text-white font-quicksand opacity-70 text-[12px] mb:text-[20px]">
        Any dispute over privacy is subject to this Policy and the website’s
        terms of use. Aside from the foregoing, any disputes arising out of this
        Policy will be governed by Indian law.
      </p>
      <p className=" self-start mx-10 my-4  text-left  z-30 text-white font-quicksand font-semibold opacity-70 text-[12px] mb:text-[20px]">
        Contact Us
      </p>
      <p className=" self-start mx-10 my-4  mb:-mt-4 text-left  z-30 text-white font-quicksand opacity-70 text-[12px] mb:text-[20px]">
        If you have any questions or suggestions about our Privacy Policy, do
        not hesitate to contact us at hello@capitalrush.gg <br />
        To delete the data & user info with the Capital rush user just need to
        click on the “Delete Data” option which is available in the game itself
        and within 24 hours data will be deleted, but we do not guarantee of
        deletion of data that we share with 3rd parties before the
        aforementioned period <br />
      </p> */}
    </div>
  );
};

export default Privacy;
