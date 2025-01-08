// 뉴스
const newlistArray = [
  {
    nId:0,
    nThumb:"news-1.png",
    nTitle:``,
    nDesc:`Dmove-Atlassian holds an ITSM hands-on workshop using JSM to provide JSM hands-on training to 70 IT administrative personnel`,
    nDate:""
  },
  {
    nId:1,
    nThumb:"news-2.png",
    nTitle:``,
    nDesc:`Achieved the only Jabbix Training Partnership Certificate in Korea,  Dmove is leading the monitoring market`,
    nDate:""
  },
  {
    nId:2,
    nThumb:"news-3.png",
    nTitle:``,
    nDesc:`Dmove introduces Korea's Largest Cloud Migration cases throughout Atlassian Cloud Migration seminar`,
    nDate:""
  },
  {
    nId:3,
    nThumb:"news-4.png",
    nTitle:``,
    nDesc:`Achieved Jabbix Partnership Certificate, Dmove builds new Jabbix constructions and provides training and technical support`,
    nDate:""
  },
  {
    nId:4,
    nThumb:"news-5.png",
    nTitle:``,
    nDesc:`Dmove provides JSM demonstrations based on business environment through ITSM workshop`,
    nDate:""
  },
  {
    nId:5,
    nThumb:"news-6.png",
    nTitle:``,
    nDesc:`Dmove carries out Atlassian Cloud Migration project of Interpark triple, Korea’s leading ecommerce enterprise`,
    nDate:""
  },
  {
    nId:6,
    nThumb:"news-6.png",
    nTitle:``,
    nDesc:`Dmove carries out Atlassian Cloud Migration project of Interpark triple, Korea’s leading ecommerce enterprise`,
    nDate:""
  },
  {
    nId:7,
    nThumb:"news-6.png",
    nTitle:``,
    nDesc:`Dmove carries out Atlassian Cloud Migration project of Interpark triple, Korea’s leading ecommerce enterprise`,
    nDate:""
  },
  {
    nId:8,
    nThumb:"news-6.png",
    nTitle:``,
    nDesc:`Dmove carries out Atlassian Cloud Migration project of Interpark triple, Korea’s leading ecommerce enterprise`,
    nDate:""
  }
]

// Privacy Policy
const agreementArray = [
  {
    aId: 0,
    aTitle: "Dmove Privacy Policy",
    aDesc: "Dmove Co., Ltd. (hereinafter “Company”) collects and uses your personal information for the following purposes. We are committed to protecting your personal information in compliance with applicable laws. Please review the following details carefully and indicate your consent. This policy will be effective on January 6, 2025, and, in case of modification, the company will post it on the bulletin board of its website.",
    aSections: [
        {
            sTitle: "1. Collected Personal Information",
            sContent: [
                "To process and respond to your inquiries, the company collects the following information:",
                {
                    "type": "list",
                    "items": ["Name, Email Address, Company Name"]
                }
            ]
        },
        {
          sTitle: "2. Purpose of Collecting Personal Information",
          sContent: [
              "The collected personal information will be used for the following purposes:",
              {
                "type": "list",
                "items": [
                    "Responding to customer inquiries and requests",
                    "Providing consultations and handling related services",
                    "Activities for sales and marketing"
                ]
            }
          ]
        },
        {
          sTitle: "3. Period of retention",
          sContent: [
              "The collected personal information will be retained and used until the purpose of collection is achieved. Once the purpose is fulfilled, the information will be securely deleted without delay. However, in cases where retention is required by relevant laws, the information will be retained for the prescribed period:",
              {
                "type": "list",
                "items": [
                    "Act on Consumer Protection in Electronic Commerce: 3 years",
                    "Protection of Communications Secrets Act: 6 months",
                ]
            }
          ]
        },
        {
          sTitle: "4. Right to Refuse Consent and Potential Disadvantages",
          sContent: "You have the right to refuse consent to the collection and use of your personal information. However, refusing consent may limit our ability to process and respond to your inquiries."
        }
    ]
  },
  {
    aId: 1,
    aTitle: "Terms of Use",
    aDesc: "The purpose of these Terms and Conditions is to stipulate the terms, conditions, and procedures for the use of the business-related services (hereinafter Services\") provided by Dmove Co., Ltd. (hereinafter \"the Company\"), as well as other necessary matters.",
    aSections: [
        {
            sTitle: "Article 1 (Purpose)",
            sContent: [
                "The purpose of these Terms and Conditions is to stipulate the terms, conditions, and procedures for the use of the business-related services (hereinafter Services\") provided by Dmove Co., Ltd. (hereinafter \"the Company\"), as well as other necessary matters."
            ]
        },
        {
            sTitle: "Article 2 (Effect and Amendment of Terms)",
            sContent: [
                "1. These Terms and Conditions take effect when their content is posted on the service screen, and the user indicates agreement on the service screen.",
                "2. The company may amend these Terms and Conditions for reasonable reasons. In the event of amendments, the company will announce the application date and reasons for the amendment along with the current terms and conditions on the initial screen of the service. The revised Terms and Conditions take effect in the same manner as stipulated in Paragraph 1.",
                "3. If a user does not agree to the amended Terms and Conditions, the user may discontinue using the services."
            ]
        },
        {
            sTitle: "Article 3 (Matters Not Specified in Terms)",
            sContent: [
                "Matters not specified in these Terms and Conditions shall comply with applicable laws and regulations. If no applicable laws exist, they shall follow the Electronic Commerce Consumer Protection Guidelines and general commercial practices."
            ]
        },
        {
            sTitle: "Article 4 (Definitions of Terms)",
            sContent: [
                "The definitions of terms used in these Terms and Conditions are as follows:",
                {
                    "type": "list",
                    "items": [
                        "Services: Refers to the Company’s official website and websites linked to the Company’s business.",
                        "User: A person or entity that receives the services provided by the company, including corporate and individual members.",
                        "Corporate Member: A registered entity providing corporate information, capable of accessing information related to the company's business."
                    ]
                }
            ]
        },
        {
            sTitle: "Article 5 (Formation of Service Agreement)",
            sContent: [
                "1. A service agreement is formed when the company approves the user's application for use and the user agrees to the terms and conditions.",
                "2. Individuals or corporations wishing to use the services must provide the required information requested by the company.",
                "3. For corporate members, the service agreement is established upon the company’s approval. For individual members, it is established immediately upon application without separate approval.",
                "4. The company may refuse or cancel a service agreement application in the following cases:",
                {
                    "type": "list",
                    "items": [
                        "When the application is made under someone else's name.",
                        "When false information is provided in the application.",
                        "When the application is made with the intent to disrupt social order or morals."
                    ]
                }
            ]
        },
        {
            sTitle: "Article 6 (Consent to Use of Personal Information)",
            sContent: [
                "1. The company values and manages users’ personal information in compliance with its Privacy Policy.",
                "2. Purpose of Collection and Use: Personal information provided during service registration is collected and used solely for fulfilling this agreement and providing the services outlined herein.",
                "3. Provision to Third Parties: Personal information may be shared with the company’s affiliates to enhance service convenience. Prior to sharing, the company will notify users of the recipient, purpose, and scope of the information to be provided and obtain user consent.",
                "4. Access and Correction: Users may access and modify their personal information at any time via the account settings.",
                "5. Implied Consent: By providing personal information and applying for the services, users are deemed to consent to the collection, use, and provision of their information as per these Terms and Conditions.",
                "6. Retention Period: Personal information is retained from the time of registration until the user requests account termination or the service agreement is terminated. Personal information will be promptly deleted upon request, except where retention is required by applicable laws."
            ]
        },
        {
          sTitle: "Article 7 (Service Usage and Restrictions)",
          sContent: [
              "1. The services are available 24/7, unless technical or operational challenges arise.",
              "2. Exceptions may apply due to regular system maintenance or other necessary circumstances determined by the company."
          ]
        },
        {
            sTitle: "Article 8 (Obligations of the Company)",
            sContent: [
                "1. The company should maintain appropriate facilities and promptly address technical issues to ensure continuous and stable service.",
                "2. The company will not disclose user information to third parties without user consent, except in cases required by law or through legal procedures.",
                "3. In the event of changes to the Terms and Conditions, the Company will notify users via the service screen."
            ]
        },
        {
            sTitle: "Article 9 (Obligations of Users)",
            sContent: [
                "1. Users shall not engage in the following activities:",
                {
                    "type": "list",
                    "items": [
                        "Unauthorized use of another user's information.",
                        "Reproduction, publication, or provision of information obtained through the Services without prior approval from the Company.",
                        "Defamation, libel, or actions damaging the reputation of others.",
                        "Distribution of content that violates public morals or order.",
                        "Activities deemed anti-national, anti-social, or criminal.",
                        "Infringement of copyrights or other rights of third parties.",
                        "Sending unsolicited advertisements or disrupting the stable operation of the services."
                    ]
                },
                "2. Users must comply with the Terms and Conditions and any usage guidelines set forth by the Company.",
                "3. User devices must meet the technical standards required for stable service operation."
            ]
        },
        {
            sTitle: "Article 10 (Liability for Service Use)",
            sContent: [
                "1. Users are solely responsible for managing their personal information.",
                "2. The Company is not liable for any issues arising from user-provided information, unless clear negligence by the Company is proven."
            ]
        },
        {
            sTitle: "Article 11 (Suspension of Services)",
            sContent: [
                "1. The company may suspend services under the following circumstances:",
                {
                    "type": "list",
                    "items": [
                        "Maintenance or construction of service-related facilities.",
                        "Suspension of telecommunication services by relevant telecommunication providers.",
                        "In the event of force majeure, such as war, natural disasters, or government-imposed restrictions, the Company may limit or suspend all or part of the services."
                    ]
                }
            ]
        },
        {
            sTitle: "Article 12 (Deletion of User Content)",
            sContent: [
                "1. The company may delete user-provided information if deemed necessary due to storage capacity limitations.",
                "2. The company may restrict service usage or delete user content without prior notice if it violates these Terms and Conditions or applicable laws."
            ]
        },
        {
            sTitle: "Article 13 (Termination of Service Agreement)",
            sContent: [
                "1. Users may terminate their service agreement by requesting deletion of their personal information.",
                "2. The company may terminate the agreement or suspend services without prior notice if users engage in prohibited activities, such as service disruption or violation of public order."
            ]
        },
        {
            sTitle: "Article 14 (Ownership of Content)",
            sContent: [
                "1. Rights and responsibilities for content uploaded to the services belong to the company. The company may use such content for non-commercial purposes without user consent.",
                "2. Users may not utilize information obtained through the Services for commercial purposes without prior approval from the Company."
            ]
        } 
    ]
  }
]