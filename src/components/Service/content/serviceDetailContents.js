const dentalImplants = {
    lead:
        'Dental implants are artificial tooth roots, usually made of titanium, placed in the jawbone to replace missing teeth. They look and function like natural teeth while helping preserve jawbone health.',
    sections: [
        {
            title: 'Types of Dental Implants',
            items: [
                { label: 'Single Tooth Implant: ', text: 'Replaces one missing tooth.' },
                { label: 'Multiple Teeth Implants: ', text: 'Replaces several missing teeth using an implant-supported bridge.' },
                { label: 'Full Mouth Implants: ', text: 'Replaces all teeth in the upper or lower jaw.' },
                { label: 'All-on-4: ', text: 'Supports a full arch of teeth using four implants.' },
                { label: 'All-on-6: ', text: 'Supports a full arch using six implants.' },
                { label: 'Zygomatic Implants: ', text: 'Specialised implants for patients with severe upper jawbone loss.' },
            ],
        },
        {
            title: 'Who Is a Good Candidate?',
            items: [
                'People with one or more missing teeth.',
                'Individuals with healthy gums and sufficient jawbone.',
                'People with good general health.',
                'Those committed to maintaining oral hygiene.',
            ],
        },
        {
            title: 'Who May Not Be Suitable?',
            items: [
                'People with uncontrolled diabetes.',
                'Individuals with untreated gum disease.',
                'Patients with severe bone loss.',
                'Heavy smokers or tobacco users.',
                'Individuals with certain medical conditions affecting healing.',
            ],
            outro: 'An individual dental assessment is necessary to determine suitability.',
        },
        {
            title: 'Dental Implant Procedure',
            listType: 'ol',
            items: [
                { label: 'Consultation: ', text: 'Dental examination and X-rays or 3D scans.' },
                { label: 'Planning: ', text: 'Deciding the implant type and treatment approach.' },
                { label: 'Implant Placement: ', text: 'Implant is surgically placed into the jawbone.' },
                { label: 'Healing: ', text: 'Bone integrates with the implant, usually over 3–6 months.' },
                { label: 'Crown Placement: ', text: 'Custom-made replacement tooth is attached.' },
                { label: 'Follow-up: ', text: 'Regular check-ups to monitor implant health.' },
            ],
        },
        {
            title: 'Dental Implant Aftercare',
            items: [
                'Eat soft foods during initial healing.',
                'Take prescribed medications as directed.',
                'Avoid smoking and tobacco.',
                'Brush twice daily and clean around implants.',
                'Attend regular dental check-ups.',
                'Avoid biting extremely hard objects.',
            ],
        },
        {
            title: 'How Long Do Dental Implants Last?',
            items: [
                'Implant fixtures can last decades or potentially a lifetime.',
                'Dental crowns generally last 10–15 years or longer.',
                'Good oral hygiene and regular dental visits improve longevity.',
                'Smoking, gum disease and poor maintenance can affect implant lifespan.',
            ],
        },
        {
            title: 'Frequently Asked Questions',
            faq: true,
            items: [
                { label: 'Is implant surgery painful? ', text: 'Performed under local anaesthesia; mild discomfort may occur afterwards.' },
                { label: 'How long does treatment take? ', text: 'Usually 3–9 months or longer.' },
                { label: 'Can diabetics get implants? ', text: 'Yes, if diabetes is well controlled and the dentist approves.' },
                { label: 'Can implants replace all teeth? ', text: 'Yes, through full-mouth, All-on-4 or All-on-6 treatments.' },
                { label: 'Are implants permanent? ', text: 'They are a long-term solution, but crowns may need replacement.' },
            ],
        },
        {
            title: 'Restore Your Smile with Dental Implants!',
            items: [
                'Replace missing teeth.',
                'Improve chewing and speech.',
                'Restore confidence.',
                'Maintain jawbone health.',
            ],
        },
    ],
    cta: 'Book your dental implant consultation today and take the first step towards a healthier smile!',
};

export const serviceDetailContents = {
    'dental-implants': dentalImplants,
    'conservative-endodontics': {
        lead:
            'Conservative dentistry and endodontics focus on saving natural teeth through fillings, restoration and root canal therapy—relieving pain and infection while preserving tooth structure whenever possible.',
        sections: [
            {
                title: 'Treatments We Offer',
                items: [
                    { label: 'Root Canal Treatment: ', text: 'Removes infection from inside the tooth and seals it to prevent further damage.' },
                    { label: 'Laser Root Canal Therapy: ', text: 'Advanced disinfection for cleaner canals and comfortable healing.' },
                    { label: 'Re-root Canal Therapy: ', text: 'Retreatment when a previous root canal needs correction.' },
                    { label: 'Post and Core Treatment: ', text: 'Rebuilds a weakened tooth to support a final crown.' },
                ],
            },
            {
                title: 'Who Benefits from This Care?',
                items: [
                    'Patients with deep decay reaching the tooth nerve.',
                    'Those with toothache, swelling or abscess.',
                    'Individuals wanting to avoid extraction when the tooth can be saved.',
                    'Anyone needing a strong foundation for a crown after nerve treatment.',
                ],
            },
            {
                title: 'Treatment Steps',
                listType: 'ol',
                items: [
                    { label: 'Examination & X-rays: ', text: 'Confirm infection and plan treatment.' },
                    { label: 'Anaesthesia: ', text: 'The area is numbed for a pain-free procedure.' },
                    { label: 'Cleaning & Shaping: ', text: 'Infected tissue is removed and canals are prepared.' },
                    { label: 'Sealing: ', text: 'The tooth is filled and protected.' },
                    { label: 'Restoration: ', text: 'A crown or filling completes the tooth when needed.' },
                ],
            },
            {
                title: 'Aftercare',
                items: [
                    'Avoid chewing on the treated tooth until fully restored.',
                    'Take medicines as advised.',
                    'Maintain brushing and flossing.',
                    'Attend follow-up visits to check healing.',
                ],
            },
            {
                title: 'Frequently Asked Questions',
                faq: true,
                items: [
                    { label: 'Is a root canal painful? ', text: 'Modern techniques and anaesthesia keep treatment comfortable.' },
                    { label: 'How long does it take? ', text: 'Often one to two visits, depending on the tooth.' },
                    { label: 'Can the tooth function normally? ', text: 'Yes, with a proper final restoration it can last many years.' },
                ],
            },
        ],
        cta: 'Book a consultation at Refine Dental to relieve pain and save your natural tooth.',
    },
    orthodontics: {
        lead:
            'Orthodontic treatment straightens teeth, corrects bite problems and improves facial harmony using braces, clear aligners and other evidence-based appliances tailored to your goals.',
        sections: [
            {
                title: 'Orthodontic Options',
                items: [
                    { label: 'Clear Aligners: ', text: 'Removable, nearly invisible trays for discreet correction.' },
                    { label: 'Metal & Ceramic Braces: ', text: 'Traditional and tooth-coloured fixed appliances.' },
                    { label: 'Self-Ligating Braces: ', text: 'Efficient tooth movement with reduced friction.' },
                    { label: 'Lingual Braces: ', text: 'Brackets placed on the inner surface of teeth.' },
                    { label: 'Myofunctional & Orthopaedic Therapy: ', text: 'Guides growth and muscle function in growing patients.' },
                    { label: 'Nightguards & TMJ Therapy: ', text: 'Protects teeth and eases jaw joint discomfort.' },
                ],
            },
            {
                title: 'Ideal Candidates',
                items: [
                    'Children, teens and adults with crowded or spaced teeth.',
                    'Patients with overbite, underbite or crossbite.',
                    'Those seeking improved smile aesthetics and oral function.',
                ],
            },
            {
                title: 'Treatment Journey',
                listType: 'ol',
                items: [
                    { label: 'Consultation: ', text: 'Clinical exam, photos and radiographs.' },
                    { label: 'Custom Plan: ', text: 'Appliance type and timeline are explained.' },
                    { label: 'Fitting: ', text: 'Braces or aligners are placed or delivered.' },
                    { label: 'Reviews: ', text: 'Regular visits to monitor progress.' },
                    { label: 'Retention: ', text: 'Retainers maintain results long term.' },
                ],
            },
            {
                title: 'Care During Treatment',
                items: [
                    'Brush and clean around brackets or aligners daily.',
                    'Avoid hard or sticky foods that can damage appliances.',
                    'Wear elastics or aligners as instructed.',
                    'Keep all scheduled adjustment appointments.',
                ],
            },
            {
                title: 'Frequently Asked Questions',
                faq: true,
                items: [
                    { label: 'How long does treatment take? ', text: 'Typically 12–24 months, varying by complexity.' },
                    { label: 'Are aligners as effective as braces? ', text: 'Yes for many mild to moderate cases; your orthodontist will advise.' },
                    { label: 'Is treatment only for children? ', text: 'No—adult orthodontics is very common and effective.' },
                ],
            },
        ],
        cta: 'Start your smile journey with a personalised orthodontic assessment at Refine Dental.',
    },
    periodontics: {
        lead:
            'Periodontics cares for the gums and supporting structures of your teeth—preventing and treating gum disease, improving gum health and enhancing the appearance of your smile.',
        sections: [
            {
                title: 'Periodontal Services',
                items: [
                    { label: 'Scaling & Root Planing: ', text: 'Deep cleaning to remove plaque and tartar below the gum line.' },
                    { label: 'Periodontal Flap Surgeries: ', text: 'Access and treat areas of advanced gum disease.' },
                    { label: 'Smile Designing: ', text: 'Balances gum line and teeth for an aesthetic smile.' },
                    { label: 'Bone & Tissue Regeneration: ', text: 'Procedures to rebuild lost support around teeth.' },
                    { label: 'Root Coverage: ', text: 'Treats gum recession and sensitivity.' },
                    { label: 'Gingival Depigmentation & Frenectomy: ', text: 'Improves gum colour and removes restrictive tissue pulls.' },
                ],
            },
            {
                title: 'Signs You May Need Periodontal Care',
                items: [
                    'Bleeding or swollen gums.',
                    'Persistent bad breath.',
                    'Loose teeth or gum recession.',
                    'Discomfort when chewing.',
                ],
            },
            {
                title: 'Treatment Approach',
                listType: 'ol',
                items: [
                    { label: 'Assessment: ', text: 'Measuring pockets and evaluating bone on X-rays.' },
                    { label: 'Non-surgical therapy: ', text: 'Scaling, root planing and oral hygiene coaching.' },
                    { label: 'Surgical care if needed: ', text: 'Flap surgery or regenerative procedures.' },
                    { label: 'Maintenance: ', text: 'Regular supportive periodontal visits.' },
                ],
            },
            {
                title: 'Home Care',
                items: [
                    'Brush twice daily and clean interdentally.',
                    'Use mouthwash if recommended.',
                    'Quit tobacco to improve gum healing.',
                    'Attend recall appointments without delay.',
                ],
            },
            {
                title: 'Frequently Asked Questions',
                faq: true,
                items: [
                    { label: 'Is gum disease reversible? ', text: 'Early gingivitis often is; periodontitis is managed long term.' },
                    { label: 'Will treatment hurt? ', text: 'Care is done under anaesthesia when needed for comfort.' },
                ],
            },
        ],
        cta: 'Protect your gums and foundation of your smile—book a periodontal check-up today.',
    },
    prosthodontics: {
        lead:
            'Prosthodontics restores missing or damaged teeth with crowns, bridges, dentures and veneers—bringing back comfortable chewing, natural appearance and confident smiles.',
        sections: [
            {
                title: 'Prosthodontic Solutions',
                items: [
                    { label: 'Crowns & Bridges: ', text: 'Strengthens weak teeth and replaces missing teeth in sequence.' },
                    { label: 'Partial & Complete Dentures: ', text: 'Removable options including flexible materials.' },
                    { label: 'Veneers: ', text: 'Porcelain or composite facings for shape and shade improvement.' },
                    { label: 'Obturators: ', text: 'Special prostheses after surgical or defect repair.' },
                ],
            },
            {
                title: 'Who Is It For?',
                items: [
                    'Patients with worn, fractured or root-treated teeth.',
                    'Those missing one or several teeth.',
                    'People needing full-arch tooth replacement.',
                    'Anyone seeking aesthetic enhancement with veneers.',
                ],
            },
            {
                title: 'How Treatment Works',
                listType: 'ol',
                items: [
                    { label: 'Evaluation: ', text: 'Bite, bone and aesthetics are assessed.' },
                    { label: 'Preparation: ', text: 'Teeth are shaped or impressions are taken.' },
                    { label: 'Try-in: ', text: 'Fit, colour and function are verified.' },
                    { label: 'Delivery: ', text: 'Final prosthesis is fitted and adjusted.' },
                ],
            },
            {
                title: 'Living with Your Prosthesis',
                items: [
                    'Clean under bridges and around dentures daily.',
                    'Remove dentures at night if advised.',
                    'Attend adjustments if sore spots develop.',
                    'Regular dental reviews to check fit and tissue health.',
                ],
            },
        ],
        cta: 'Rediscover comfortable chewing and a natural-looking smile—book a prosthodontic consultation.',
    },
    'oral-surgery': {
        lead:
            'Oral surgery addresses complex dental and soft-tissue needs—from wisdom tooth removal and extractions to biopsies and minor surgical corrections—performed with precision and patient comfort in mind.',
        sections: [
            {
                title: 'Surgical Procedures',
                items: [
                    { label: 'Tooth Extractions: ', text: 'Simple and surgical removal when teeth cannot be saved.' },
                    { label: 'Wisdom Tooth Removal: ', text: 'Manages impacted or problematic third molars.' },
                    { label: 'Alveoloplasty: ', text: 'Smooths bone for dentures or healing.' },
                    { label: 'Biopsies & Cyst Removal: ', text: 'Diagnoses and treats lesions of the mouth.' },
                    { label: 'Tongue-Tie & Frenectomy: ', text: 'Releases restrictive oral attachments.' },
                    { label: 'Trauma Care: ', text: 'Suturing, splinting and oro-antral closure when needed.' },
                ],
            },
            {
                title: 'Before Your Visit',
                items: [
                    'Share full medical history and medications.',
                    'Follow fasting instructions if sedation is planned.',
                    'Arrange transport if general anaesthesia or sedation is used.',
                ],
            },
            {
                title: 'Typical Surgical Steps',
                listType: 'ol',
                items: [
                    { label: 'Consultation & imaging: ', text: 'Assess roots, nerves and bone.' },
                    { label: 'Anaesthesia: ', text: 'Local or sedation for a comfortable experience.' },
                    { label: 'Procedure: ', text: 'Extraction or surgery as planned.' },
                    { label: 'Post-op instructions: ', text: 'Gauze, ice packs and medication explained.' },
                    { label: 'Review: ', text: 'Healing check and suture removal if required.' },
                ],
            },
            {
                title: 'Recovery Tips',
                items: [
                    'Rest and avoid strenuous activity for 24–48 hours.',
                    'Soft diet and gentle oral hygiene.',
                    'No smoking or using straws early in healing.',
                    'Contact the clinic if bleeding or pain worsens.',
                ],
            },
        ],
        cta: 'Need surgical dental care? Book an oral surgery consultation at Refine Dental.',
    },
    pedodontics: {
        lead:
            'Pedodontics (paediatric dentistry) protects children’s smiles with gentle preventive care, early intervention and habit guidance—building healthy habits for life.',
        sections: [
            {
                title: 'Children’s Dental Services',
                items: [
                    { label: 'Preventive Care: ', text: 'Check-ups, cleaning and oral hygiene education.' },
                    { label: 'Fluoride & Sealants: ', text: 'Strengthens enamel and blocks decay-prone grooves.' },
                    { label: 'Pulpotomy & Pulpectomy: ', text: 'Saves baby teeth when nerves are affected.' },
                    { label: 'Restorations: ', text: 'Tooth-coloured fillings for cavities in primary teeth.' },
                    { label: 'Habit Breaking Appliances: ', text: 'Helps stop thumb sucking and related habits.' },
                    { label: 'Space Maintainers: ', text: 'Holds space for permanent teeth after early loss.' },
                ],
            },
            {
                title: 'Why Start Early?',
                items: [
                    'Prevents small problems from becoming painful emergencies.',
                    'Creates a positive attitude toward dental visits.',
                    'Monitors growth of jaws and permanent teeth.',
                ],
            },
            {
                title: 'A Child-Friendly Visit',
                listType: 'ol',
                items: [
                    { label: 'Warm welcome: ', text: 'Child-paced introduction to the clinic.' },
                    { label: 'Examination: ', text: 'Gentle check of teeth and gums.' },
                    { label: 'Treatment if needed: ', text: 'Explained in simple terms with parental consent.' },
                    { label: 'Prevention plan: ', text: 'Diet and brushing tips for home.' },
                ],
            },
            {
                title: 'Parent Tips',
                items: [
                    'Supervise brushing until your child can tie their own shoelaces.',
                    'Limit frequent sugary snacks and drinks.',
                    'Use a mouthguard for sports when advised.',
                    'Keep regular six-monthly dental visits.',
                ],
            },
        ],
        cta: 'Give your child a healthy start—book a paediatric dental visit at Refine Dental.',
    },
    'laser-dentistry': {
        lead:
            'Laser dentistry uses focused light energy for precise, often minimally invasive treatments—reducing discomfort and supporting faster healing in selected gum, soft-tissue and cosmetic procedures.',
        sections: [
            {
                title: 'Laser Treatments',
                items: [
                    { label: 'Laser Depigmentation: ', text: 'Lightens dark gum patches for an even smile line.' },
                    { label: 'Laser Flap Surgeries: ', text: 'Assists periodontal procedures with precision.' },
                    { label: 'Laser PDT: ', text: 'Photodynamic therapy adjunct for certain infections.' },
                    { label: 'Frenectomy & Frenotomy: ', text: 'Soft-tissue releases with minimal bleeding.' },
                    { label: 'Laser Biopsy: ', text: 'Removes small lesions for laboratory analysis.' },
                    { label: 'Laser Smile Designing & Bleaching: ', text: 'Enhances gum contour and tooth brightness where indicated.' },
                ],
            },
            {
                title: 'Benefits of Laser Care',
                items: [
                    'Targeted treatment with less damage to surrounding tissue.',
                    'Often reduced bleeding and swelling.',
                    'May shorten recovery for suitable procedures.',
                ],
            },
            {
                title: 'Your Appointment',
                listType: 'ol',
                items: [
                    { label: 'Assessment: ', text: 'Confirms laser is appropriate for your case.' },
                    { label: 'Safety: ', text: 'Protective eyewear and protocols are followed.' },
                    { label: 'Treatment: ', text: 'Laser is applied as per the agreed plan.' },
                    { label: 'Aftercare: ', text: 'Simple instructions to support healing.' },
                ],
            },
            {
                title: 'Frequently Asked Questions',
                faq: true,
                items: [
                    { label: 'Is laser dentistry safe? ', text: 'Yes, when performed by trained clinicians with proper precautions.' },
                    { label: 'Can lasers replace all drills? ', text: 'Not for every procedure; suitability is case by case.' },
                ],
            },
        ],
        cta: 'Ask how laser dentistry can make your treatment more comfortable—book a visit today.',
    },
    'full-mouth-rehabilitation': {
        lead:
            'Full mouth rehabilitation rebuilds bite function and aesthetics when many teeth are worn, missing or failing—combining prosthodontics, implants and bite planning for a comprehensive result.',
        sections: [
            {
                title: 'Rehabilitation Options',
                items: [
                    { label: 'Complete Dentures: ', text: 'Full-arch removable replacement teeth.' },
                    { label: 'Overdentures: ', text: 'Dentures supported by remaining roots or implants.' },
                    { label: 'Implant-Supported Overdentures: ', text: 'Improved stability with fewer implants.' },
                    { label: 'Hybrid Dentures: ', text: 'Fixed implant prostheses that do not cover the palate.' },
                ],
            },
            {
                title: 'When Is It Recommended?',
                items: [
                    'Multiple missing or broken teeth affecting chewing.',
                    'Severe wear from grinding or acid erosion.',
                    'Failed old dentistry needing coordinated replacement.',
                    'Desire for a functional, aesthetic full-arch solution.',
                ],
            },
            {
                title: 'Planning Process',
                listType: 'ol',
                items: [
                    { label: 'Comprehensive exam: ', text: 'Models, photos and imaging.' },
                    { label: 'Bite analysis: ', text: 'Jaw joint and muscle evaluation.' },
                    { label: 'Staged treatment: ', text: 'Extractions, implants or temporaries as needed.' },
                    { label: 'Final prosthetics: ', text: 'Precision fit and occlusal balance.' },
                    { label: 'Maintenance: ', text: 'Long-term recall and hygiene support.' },
                ],
            },
            {
                title: 'Aftercare',
                items: [
                    'Clean implants and prostheses as demonstrated.',
                    'Night guards if grinding is a factor.',
                    'Regular professional maintenance visits.',
                ],
            },
        ],
        cta: 'Rebuild your smile from the ground up—book a full mouth rehabilitation consultation.',
    },
    cosmetology: {
        lead:
            'Our facial aesthetic and cosmetology services complement dental care—offering skin rejuvenation, pigment correction and non-surgical enhancements for a refreshed, natural appearance.',
        sections: [
            {
                title: 'Aesthetic Treatments',
                items: [
                    { label: 'Micropigmentation: ', text: 'Eyebrows, lips and medical repigmentation for scars or vitiligo.' },
                    { label: 'Medi-Facials: ', text: 'Hydra Facial and Oxy-Geno treatments for deep cleansing and glow.' },
                    { label: 'Chemical Peels: ', text: 'Targets pigmentation, acne and dark circles.' },
                    { label: 'Micro Needling & Mesotherapy: ', text: 'Collagen stimulation for face and hair.' },
                    { label: 'Anti-Ageing & Party Peels: ', text: 'Brightening and special-event skin preparation.' },
                    { label: 'Lesion Removal: ', text: 'Skin tags, moles, warts and acne scar therapies including plasma pen.' },
                ],
            },
            {
                title: 'Consultation & Safety',
                items: [
                    'Skin type and medical history reviewed before any procedure.',
                    'Realistic outcomes and aftercare explained clearly.',
                    'Patch tests or trials when appropriate for peels or pigments.',
                ],
            },
            {
                title: 'Typical Visit Flow',
                listType: 'ol',
                items: [
                    { label: 'Skin assessment: ', text: 'Discuss concerns and goals.' },
                    { label: 'Treatment plan: ', text: 'Sessions and products tailored to you.' },
                    { label: 'Procedure: ', text: 'Performed in a clinical, hygienic setting.' },
                    { label: 'Recovery advice: ', text: 'Sun protection and home care emphasised.' },
                ],
            },
            {
                title: 'Aftercare',
                items: [
                    'Use SPF and avoid sun exposure as advised after peels.',
                    'Keep treated areas clean and moisturised.',
                    'Avoid picking at scabs or peeling skin.',
                    'Attend review appointments for serial treatments.',
                ],
            },
            {
                title: 'Frequently Asked Questions',
                faq: true,
                items: [
                    { label: 'Is there downtime? ', text: 'Depends on the treatment—mild redness to a few days for deeper peels.' },
                    { label: 'How many sessions are needed? ', text: 'Varies; your clinician will outline a personalised plan.' },
                ],
            },
        ],
        cta: 'Refresh your look with expert aesthetic care—book a cosmetology consultation at Refine Dental.',
    },
};

export const getServiceDetailContent = (slug) => serviceDetailContents[slug];

export const getServiceLead = (slug) => serviceDetailContents[slug]?.lead;
