import Adap from "./img/adap,jpg"
import Cala from "./img/calamine.jpg";
import dim from "./img/dim.jpg";
import ss from "./img/ss.jpg";
import Taz from "./img/taz.jpg";
import iso from "./img/iso.jpg";
import tri from "./img/tri.jpg";
import mino from "./img/mino.png";
import nad from "./img/nad.png";
import ery from "./img/ery.jpg";
import oxy from "./img/oxy.jpg";
import nadi from "./img/nadi.jpg";
import tre from "./img/tre.jpg";

const dermatology = [
    {
        id: "1",
        imgsrc: "Cala",
        Name: "Calamine Lotion",
        Indications: "This medication is an anti-itch medication that contains mixture of zinc oxide (ZnO) with about 0.5% iron (III) oxide, prescribed for itching skin conditions. This medication in some cases is used as a mild antiseptic to arrest infections caused by scratching the affected area. Calamine is proved to be an effective medication in acne treatment.",
        Dosage: "Adult: Topical- Apply 1-4 times/day.",
        SideEffects: "Rash or irritation.",
        Price: "₹240.00",
    },
    {
        id: "2",
        imgsrc: "dim",
        Name: "Dimethicone",
        Indications: "This medication is an emollient, prescribed for pediculosis, and other skin conditions.",
        Dosage: "Apply as directed by Physician",
        SideEffects: "Rarely, redness, pain and irritation at the site of application.",
        Price: "₹220.00",
    },
    {
        id: "3",
        imgsrc: "ss",
        Name: "Sucralfate",
        Indications: "This medication is a gastric protective agent, prescribed for intestinal ulcers.",
        Dosage: "Adult- PO- The recommended dosage for duodenal ulcer is 1 g four times per day on an empty stomach.",
        SideEffects: "Diarrhea, nausea, vomiting, gastric discomfort, indigestion, flatulence and dry mouth, Itching and rash, Dizziness, sleeplessness, sleepiness and unsteadiness,Back pain and headache.",
        Price: "₹190.00",
    },
    {
        id: "4",
        imgsrc: "Adap",
        Name: "Adapalene",
        Indications: "Adapalene is a topical retinoid-like compound used to treat mild to moderate acne by preventing the formation of pimples acting deeply in the source.It also prevents the formation of new acne by restoring skin texture and tone.",
        Dosage: "Topical- A thin film of gel should be applied once a day to affected areas after washing the skin.",
        SideEffects: "A brief sensation of warmth or stinging may occur immediately after applying the medication, redness, dryness, itching of the skin and scaling, mild burning, or worsening of acne may occur during the first 2-4 weeks of using the medication.",
        Price: "₹320.00",
    },
    {
        id: "5",
        imgsrc: "Taz",
        Name: "Tazarotene",
        Indications: "This medication is a retinoid, prescribed for psoriasis and acne. It may decrease skin inflammation and skin changes associated with psoriasis.",
        Dosage: "Adult: Topical- As 0.05 or 0.1% cream/gel: Apply once in the evening.",
        SideEffects: "Skin: Itching, burning/stinging, redness, skin peeling, irritation, worsening of psoriasis, rash, dry skin, bleeding, localized swelling, high cholesterol levels, desquamation, contact dermatitis, discoloration of skin and photosensitivity.",
        Price: "₹420.00",
    },
    {
        id: "6",
        imgsrc: "iso",
        Name: "Isotretinoin ",
        Indications: "This medication is a retinoid, prescribed for acne and other skin disorders. It reduces skin oil production, changing the characteristics of the skin oil, and preventing abnormal hardening of the skin.",
        Dosage: "Adult- PO- The recommended dose range is 0.5 to 1.0 mg/kg/day given in two divided doses with food for 15 to 20 weeks.",
        SideEffects: "Allergic reactions, fast heart rate and stroke.",
        Price: "₹299.00",
    },
    {
        id: "7",
        imgsrc: "tri",
        Name: "Triclosan",
        Indications: "This medication is an antibacterial and antifungal agent, prescribed for acne and disinfections of skin.",
        Dosage: "Use as directed.",
        SideEffects: "Contact dermatitis.",
        Price: "₹325.00",
    },
    {
        id: "8",
        imgsrc: "mino",
        Name: "Minocycline",
        Indications: "Minocycline is a broad spectrum tetracycline antibiotic. It acts by inhibiting the growth of bacteria in the body, It may be effective in other infections as well, however several bacteria have developed resistance to the drug, It may be used in patients who are allergic to the penicillin group of drugs as an alternative.",
        Dosage: "Children over 12 years: 50mg every 12 hours, Adults The usual dosage is 100 mg every 12 hours. The dosage and duration varies according to the type of infection.For local use in the gums, the dose is 1mg given beneath the gums.",
        SideEffects: "Loss of appetite, nausea, vomiting, diarrhea, indigestion, mouth ulcer, discoloration of the tongue and difficulty in swallowing.",
        Price: "₹300.00",
    },
    {
        id: "9",
        imgsrc: "nad",
        Name: "Nadifloxacin",
        Indications: "This medication is a topical antibiotic, prescribed for acne vulgaris. It inhibits the enzyme DNA gyrase that is involved in bacterial replication.",
        Dosage: "Topical- Apply a thin layer to the affected area as directed by your physician.",
        SideEffects: "Itching, irritation, redness, flushes, papules, feeling of warmth, increased sweating, contact dermatitis and dryness of the skin.",
        Price: "₹285.00",
    },
    {
        id: "10",
        imgsrc: "ery",
        Name: "Erythromycin",
        Indications: "This medication is an antibiotic, prescribed for certain types of bacterial infections such as bronchitis, diphtheria, legionnaires' disease, pertussis etc.It slows or stops bacterial cell growth.",
        Dosage: "PO- Adults: The usual dose is 250 mg every 6 hours taken one hour before meals.Child-The usual dosage is 30 to 50 mg/kg/day in divided doses.",
        SideEffects: "Most Frequent : Nausea, vomiting, abdominal pain, diarrhea and loss of appetite.",
        Price: "₹325.00",
    },
    {
        id: "11",
        imgsrc: "oxy",
        Name: "Oxytetracycline",
        Indications: "This medication is an antibiotic, prescribed for various infections such as acne, dermatitis, gonorrhea, etc.",
        Dosage: "PO- The recommended dose range is 250 to 1.5gm in divided doses.Topical-Apply a thin layer over the affected skin 4 times per day.",
        SideEffects: "Loss of appetite, nausea, vomiting, diarrhea, tongue inflammation, difficulty in swallowing and inflammatory lesions.",
        Price: "₹225.00",
    },
    {
        id: "12",
        imgsrc: "nadi",
        Name: "Nadifloxacin",
        Indications: "This medication is a topical antibiotic, prescribed for acne vulgaris. It inhibits the enzyme DNA gyrase that is involved in bacterial replication.",
        Dosage: "as directed by your physician.",
        SideEffects: "Itching, irritation, redness, flushes, papules, feeling of warmth, increased sweating, contact dermatitis and dryness of the skin.",
        Price: "₹200.00",
    },
    {
        id: "13",
        imgsrc: "tre",
        Name: "Tretinoin",
        Indications: "This medication is a retinoid, prescribed for acne vulgaris and acute promyelocytic leukemia.  It slows or stops the growth of cancer cells in the body.",
        Dosage: "PO- The recommended dose is 45 mg/m2/day administered as two evenly divided doses.Topical- 0.05% apply a thin layer of cream over the affected area.",
        SideEffects: "Headache, fever, skin dryness, bone pain, nausea/vomiting, rash, itching, increased sweating, visual disturbances, hair loss, skin changes and bone inflammation.",
        Price: "₹295.00",
    },
];
