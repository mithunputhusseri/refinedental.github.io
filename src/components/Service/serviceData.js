import endoImg from '../../images/features/endo.jpg';
import orthoImg from '../../images/features/ortho.jpg';
import perioImg from '../../images/features/perio.jpg';
import prosthoImg from '../../images/features/prostho.jpg';
import oralsurgeryImg from '../../images/features/oralsurgery.jpg';
import pedoImg from '../../images/features/pedo.jpg';
import implantImg from '../../images/features/implants.jpg';
import laserImg from '../../images/features/laser.jpg';
import fmrImg from '../../images/features/fmr.jpg';
import cosmetoImg from '../../images/features/cosmeto.jpg';

export const serviceSections = [
  {
    slug: 'conservative-endodontics',
    heading: 'Conservative & Endodontics',
    points: ['Root Canal Treatment', 'Laser Root Canal Therapy', 'Re-root Canal Therapy', 'Post and Core Treatment'],
    img: endoImg,
  },
  {
    slug: 'orthodontics',
    heading: 'Orthodontics',
    points: ['Clear Aligners', 'Standard Metal Braces', 'Self Ligating Braces', 'Ceramic Braces', 'Lingual Braces', 'Myofunctional Therapy', 'Orthopaedic Therapy', 'Nightguard', 'TMJ Therapy'],
    img: orthoImg,
  },
  {
    slug: 'periodontics',
    heading: 'Periodontics',
    points: ['Scaling and Root Planing', 'Periodontal Flap Surgeries', 'Smile Designing', 'Guided Tissue and Bone Regeneration', 'Root Coverage for Gum Recession', 'Gingival Depigmentation', 'Frenectomy & Frenotomy'],
    img: perioImg,
  },
  {
    slug: 'prosthodontics',
    heading: 'Prosthodontics',
    points: ['Crowns and bridges', 'Removable partial denture', 'Flexible dentures', 'Obturator', 'Post CA Obturator', 'Complete Denture', 'Procelain Veneers', 'Composite Veneers'],
    img: prosthoImg,
  },
  {
    slug: 'oral-surgery',
    heading: 'Oral Surgery',
    points: ['Tooth Extraction', 'Alveoloplasty', 'Third Molar/Wisdom tooth extraction', 'Biopsies', 'Mucocele Excision', 'Cyst Enucleation', 'Tongue-tie correction', 'Laceration Suturing', 'Oro antral closure', 'Intermaxilliary Fixation', 'Arch bar splinting'],
    img: oralsurgeryImg,
  },
  {
    slug: 'pedodontics',
    heading: 'Pedodontics',
    points: ['Preventive care', 'Fluoride treatments', 'Pit & Fissure sealants', 'Pulpotomy', 'Pulpectomy', 'Restoration', 'Habit breaking appliances', 'Space maintanence', 'Space regainers'],
    img: pedoImg,
  },
  {
    slug: 'dental-implants',
    heading: 'Dental Implants',
    points: [],
    img: implantImg,
  },
  {
    slug: 'laser-dentistry',
    heading: 'Laser Dentistry',
    points: ['Laser Depigmentation', 'Laser flap surgeries', 'Laser PDT therapy', 'Frenectomy & Frenotomy', 'Laser Biopsy', 'Laser smile designing', 'Laser Bleaching'],
    img: laserImg,
  },
  {
    slug: 'full-mouth-rehabilitation',
    heading: 'Full Mouth Rehabilitation',
    points: ['Complete Dentures', 'Overdentures', 'Implant supported overdentures', 'Hybrid dentures'],
    img: fmrImg,
  },
  {
    slug: 'cosmetology',
    heading: 'Cosmetology',
    points: ['Micropigmentation : Eyebrows & Lips', 'Medical Micropigmentation : Stretch marks,Vitiligo,Scars', 'Eyelash Lift & Lash tint', 'Medi-Facial : Hydra Facial & Oxy-Geno Facial', 'Chemical Peels : Pigmentation Correction,Acne treatment,Dark circles correction', 'Micro needling', 'Derma Planning', 'Derma Suction', 'Mesotherapy : Face & Hair', 'Anti-Ageing treatment', 'Party Peel/Glow Peel', 'Skin Tag/Mole/Wart Removal', 'Plasma Pen Therapy', 'Acne Scar Treatment'],
    img: cosmetoImg,
  },
];

export const getServiceBySlug = (slug) =>
  serviceSections.find((section) => section.slug === slug);
