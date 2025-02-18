import {
    IMAGE_HERO,
    IMAGE_HERO2,
    IMAGE_HERO3, IMAGE_HERO4,
    IMAGE_SERVICE_1,
    IMAGE_SERVICE_2,
    IMAGE_SERVICE_3,
    IMAGE_SERVICE_4, MAPS_IMAGE
} from "../resource";
import Home from "../../features/screens/HomeScreen";
import OurServiceScreen from "../../features/screens/OurServiceScreen";
import {ContactScreen} from "../../features/screens";

interface FormLabels {
    contactUsToday: string;
    TellUsYourNeeds: string;
    name: string;
    emailAddress: string;
    enterYourName: string;
    enterYourEmailAddress: string;
    inquiry: string;
    typeHere: string;
    sendMessage: string;
    sendByWhatsApp: string;
    getDirection: string;
}

interface Page {
    pageName: string;
    pageRoute: string;
    Page: React.FC;
}

interface CompanyDetail {
    fullName: string;
    companyFirstName: string;
    companyLastName: string;
    address: string;
    email: string;
    emailClean: string;
    phone: string;
    waPhone: string;
    companyJargonName: string;
    bussinessHour: string;
    openHours: openHours[];
}

interface HeroSection {
    title: string;
    subTitle: string;
    imageBackground: string;
}

interface OurService {
    title: string;
    description: string;
    longDescription: string;
    image: string;
    logo: string;
}

interface openHours {
    day: string;
    time: string;
}

export interface ContentConfig {
    page: Page[];
    companyDetail: CompanyDetail;
    heroSection1: HeroSection;
    heroSection2: HeroSection;
    ourServicesList: OurService[];
    labels: {
        home: string;
        ourService: string;
        moreInfo: string;
        getInTouch: string;
        letsTalk: string;
        trustedNotaryService: string;
        trustedNotaryServiceJakarta: string;
    };
    contactDetails: {
        heroImage: string;
        mapsLink: string;
        reachUs: string;
        address: string;
        phone: string;
        email: string;
        mapsImage: string;
        tradeMark: string;
    };
    formLabels?: FormLabels;  // Optional field
    trustedNotaryServiceDescription?: string;  // Optional field
    trustedNotaryServiceDescriptionOurService?: string;  // Optional field
}

export const ContentConfigEn: ContentConfig = {
    page: [
        {pageName: "Home", pageRoute: "/", Page: Home},
        {pageName: "Home", pageRoute: "/home-page-notary-ichda-adieba", Page: Home},
        {pageName: "Our Service", pageRoute: "/our-service", Page: OurServiceScreen},
        {pageName: "Get In Touch", pageRoute: "/get-in-touch", Page: ContactScreen},
    ],
    companyDetail: {
        fullName: "Ichda Adieba",
        companyFirstName: "Ichda",
        companyLastName: "Adieba",
        address: "Jl. Daeng Moh. Ardiwinata No.62, Cibabat, \nKec. Cimahi Utara, Kota Cimahi, \nJawa Barat 40513",
        email: "📧 ichdaAdieba@legalnotary.com",
        emailClean: "ichdaAdieba@legalnotary.com",
        phone: "📞 (022) 6659102",
        companyJargonName: "Trusted Notary Service in Jakarta",
        bussinessHour: "Bussiness Hour",
        waPhone: "+628782222931",
        openHours: [
            {
                day: "Monday - Friday",
                time: "08.00 - 17.00"
            },
            {
                day: "Saturday",
                time: "08.00 - 12.00"
            }
        ]
    },
    heroSection1: {
        title: "Ichda Adieba is a trusted notary ready to assist with your legal needs.",
        subTitle: "From contract drafting to property deed certification, we provide professional services with high integrity to protect your legal interests.",
        imageBackground: IMAGE_HERO
    },
    heroSection2: {
        title: "Ensure the legality and authenticity of your documents with Ichda Adieba.",
        subTitle: "Our expert notary services guarantee legal compliance and peace of mind for all your important transactions.",
        imageBackground: IMAGE_HERO2
    },
    ourServicesList: [
        {
            title: "Contract Drafting and Authentication",
            image: IMAGE_HERO,
            logo: IMAGE_SERVICE_1,
            description: "Ichda Adieba presents professional contract drafting and authentication services to ensure all agreements are legally binding and accurately documented.",
            longDescription: "Ichda Adieba provides professional contract drafting and authentication services to ensure that all agreements are legally binding and thoroughly documented. We offer legal protection for your contracts, giving you peace of mind and security in all your business or personal transactions."
        },
        {
            image: IMAGE_HERO2,
            logo: IMAGE_SERVICE_2,
            title: "Property Deed Certification",
            description: "Secure property transactions with verified deed certification, safeguarding your real estate investments.",
            longDescription: "We offer property deed certification services that ensure your transactions are legally valid and fully protected. With comprehensive deed verification, we provide legal assurance, enabling you to invest with confidence and avoiding potential issues in the future."
        },
        {
            image: IMAGE_HERO3,
            logo: IMAGE_SERVICE_3,
            title: "Power of Attorney",
            longDescription: "Grant legal authority to trusted individuals with properly drafted and authenticated power of attorney documents. We ensure the legality and authenticity of the document, providing clarity and protection for both the grantor and the grantee in any legal matter.",
            description: "Grant legal authority to trusted individuals with properly drafted and authenticated power of attorney documents."
        },
        {
            image: IMAGE_HERO4,
            logo: IMAGE_SERVICE_4,
            title: "Will and Testament Drafting",
            longDescription: "With our will and testament drafting services, you can ensure your legacy is protected according to your wishes. We offer customized legal solutions, helping you prepare your estate plan and ensuring the validity of your testament for legal recognition.",
            description: "Ensure your legacy is protected with customized will drafting and testament authentication services."
        },
        {
            image: IMAGE_HERO2,
            logo: IMAGE_SERVICE_2,
            title: "Company Establishment",
            longDescription: "We facilitate the legal formation of companies with comprehensive documentation. Our services include official registration and adherence to applicable regulations, helping you start your business on the right foot, without any legal obstacles or delays.",
            description: "Facilitate the legal formation of companies with complete documentation and official registration services."
        },
        {
            image: IMAGE_HERO4,
            logo: IMAGE_SERVICE_4,
            longDescription: "We provide document legalization services for both domestic and international use. With certified notarization, we guarantee the legal validity of your documents, ensuring recognition by authorities and institutions in various countries for your legal needs.",
            title: "Document Legalization",
            description: "Legalize important documents for domestic or international use with certified notarization services."
        },
        {
            image: IMAGE_HERO3,
            logo: IMAGE_SERVICE_3,
            longDescription: "We assist in authenticating marriage contracts to ensure legal recognition, ensuring compliance with local regulations. Our services provide both parties with legal protection, securing the validity of the contract and its recognition by relevant authorities.",
            title: "Marriage Contract Certification",
            description: "Validate marriage contracts to secure legal recognition and compliance with local regulations."
        }
    ],
    labels: {
        home: "Home",
        moreInfo: "More Info",
        ourService: "Our Service",
        getInTouch: "Get in touch",
        letsTalk: "Let's talk",
        trustedNotaryService: "Trusted Notary Service",
        trustedNotaryServiceJakarta: "Trusted Notary Service in Jakarta",
    },
    contactDetails: {
        mapsLink: "https://g.co/kgs/oV2TgXe",
        heroImage: IMAGE_HERO4,
        reachUs: "Reach Us",
        address: "Jl. Daeng Moh. Ardiwinata No.62, Cibabat, Kec. Cimahi Utara, Kota Cimahi, Jawa Barat 40513",
        phone: "(022) 6659102",
        email: "ichdaAdieba@legalnotary.com",
        tradeMark: "Ichda Adieba © 2021",
        mapsImage: MAPS_IMAGE,
    },
    formLabels: {
        contactUsToday: "Contact \n Us Today",
        TellUsYourNeeds: "Tell Us Your Needs",
        name: "Name",
        emailAddress: "Email Address",
        enterYourName: "Enter Your Name",
        enterYourEmailAddress: "Enter Your Email Address",
        inquiry: "Inquiry",
        typeHere: "Type here",
        sendMessage: "Send Message",
        sendByWhatsApp: "Send via WhatsApp",
        getDirection: "Get Directions",
    },
    trustedNotaryServiceDescription: "Ichda Adieba provides reliable and professional notary services, ensuring the authenticity and legality of your important documents. From contract drafting to property deed certification, we handle every detail with precision and integrity.",
    trustedNotaryServiceDescriptionOurService: "Our services include contract authentication, property deed certification, power of attorney, and company establishment. Ichda Adieba guarantees legal compliance and peace of mind for all your notary needs.",
};


export const ContentConfigID: ContentConfig = {
    page: [
        {
            pageName: "Beranda",
            pageRoute: "/",
            Page: Home,
        },
        {
            pageName: "Beranda",
            pageRoute: "/laman-beranda-notary-ichda-adieba",
            Page: Home,
        },
        {
            pageName: "Layanan Kami",
            pageRoute: "/layanan-kami",
            Page: OurServiceScreen,
        },
        {
            pageName: "Hubungi Kami",
            pageRoute: "/hubungi-kami",
            Page: ContactScreen,
        },
    ],
    companyDetail: {
        waPhone: "+628782222931",
        fullName: "Ichda Adieba",
        emailClean: "ichdaAdieba@legalnotary.com",
        companyFirstName: "Ichda",
        companyLastName: "Adieba",
        address: "Jl. Daeng Moh. Ardiwinata No.62, Cibabat, \nKec. Cimahi Utara, Kota Cimahi, \nJawa Barat 40513",
        email: "📧 ichdaAdieba@legalnotary.com",
        phone: "📞 (022) 6659102",
        companyJargonName: "Layanan Notaris Terpercaya di Jakarta",
        bussinessHour: "Hari dan jam Kerja",
        openHours: [
            {
                day: "Monday - Friday",
                time: "08.00 - 17.00"
            },
            {
                day: "Saturday",
                time: "08.00 - 12.00"
            }
        ]
    },
    heroSection1: {
        title: "Ichda Adieba adalah notaris terpercaya yang siap membantu kebutuhan legal Anda.",
        subTitle: "Dari pembuatan kontrak hingga sertifikasi akta properti, kami memberikan layanan profesional dengan integritas tinggi untuk melindungi kepentingan hukum Anda.",
        imageBackground: IMAGE_HERO
    },
    heroSection2: {
        title: "Pastikan legalitas dan keaslian dokumen Anda dengan Ichda Adieba.",
        subTitle: "Layanan notaris kami yang berpengalaman menjamin kepatuhan hukum dan ketenangan pikiran untuk semua transaksi penting Anda.",
        imageBackground: IMAGE_HERO2
    },
    ourServicesList: [
        {
            title: "Pembuatan dan Pengesahan Kontrak",
            image: IMAGE_HERO,
            logo: IMAGE_SERVICE_1,
            description: "Ichda Adieba menghadirkan layanan pembuatan dan pengesahan kontrak secara profesional untuk memastikan semua perjanjian sah secara hukum dan terdokumentasi dengan akurat.",
            longDescription: "Ichda Adieba menawarkan layanan pembuatan dan pengesahan kontrak yang sah secara hukum. Kami memastikan bahwa setiap perjanjian terlindungi secara hukum dan terdokumentasi dengan tepat, memberi Anda kepastian dan perlindungan dalam setiap transaksi bisnis atau pribadi."
        },
        {
            image: IMAGE_HERO2,
            logo: IMAGE_SERVICE_2,
            title: "Sertifikasi Akta Properti",
            description: "Amankan transaksi properti Anda dengan sertifikasi akta yang terverifikasi, melindungi investasi real estat Anda.",
            longDescription: "Kami menyediakan layanan sertifikasi akta properti yang memastikan transaksi Anda sah dan terlindungi. Dengan verifikasi akta yang lengkap, kami memberikan kepastian hukum, sehingga Anda dapat berinvestasi dengan aman tanpa khawatir adanya potensi masalah di masa depan."
        },
        {
            image: IMAGE_HERO3,
            logo: IMAGE_SERVICE_3,
            title: "Surat Kuasa",
            longDescription: "Beri kuasa kepada individu terpercaya dengan surat kuasa yang sah dan telah disahkan secara hukum. Kami memastikan dokumen yang Anda buat sah di mata hukum, memberikan perlindungan dan kejelasan bagi pihak yang diberi dan yang memberi kuasa.",
            description: "Berikan kewenangan hukum kepada individu terpercaya dengan dokumen surat kuasa yang dibuat dan disahkan dengan benar."
        },
        {
            image: IMAGE_HERO4,
            logo: IMAGE_SERVICE_4,
            title: "Pembuatan Wasiat dan Testamen",
            longDescription: "Dengan layanan pembuatan wasiat dan testamen, Anda dapat memastikan warisan Anda terlindungi sesuai keinginan. Kami menyediakan solusi hukum yang disesuaikan untuk membantu Anda menyiapkan warisan dan pengesahan testamen yang sah dan diakui oleh hukum.",
            description: "Pastikan warisan Anda terlindungi dengan layanan pembuatan wasiat dan pengesahan testamen yang disesuaikan."
        },
        {
            image: IMAGE_HERO2,
            logo: IMAGE_SERVICE_2,
            title: "Pendirian Perusahaan",
            longDescription: "Kami memfasilitasi proses pendirian perusahaan secara sah dengan dokumentasi yang lengkap. Layanan kami mencakup pendaftaran resmi dan kepatuhan terhadap peraturan yang berlaku, membantu Anda memulai bisnis dengan langkah yang tepat dan tanpa hambatan hukum.",
            description: "Memfasilitasi pembentukan perusahaan secara legal dengan dokumentasi lengkap dan layanan pendaftaran resmi."
        },
        {
            image: IMAGE_HERO4,
            logo: IMAGE_SERVICE_4,
            longDescription: "Kami menyediakan layanan legalisasi dokumen penting untuk penggunaan domestik atau internasional. Dengan layanan notaris bersertifikat, kami menjamin keabsahan dokumen yang diakui oleh berbagai lembaga atau negara untuk kepentingan hukum Anda.",
            title: "Legalisasi Dokumen",
            description: "Legalisasi dokumen penting untuk penggunaan domestik atau internasional dengan layanan notaris bersertifikat."
        },
        {
            image: IMAGE_HERO3,
            logo: IMAGE_SERVICE_3,
            longDescription: "Kami membantu Anda mengesahkan kontrak pernikahan agar diakui secara hukum, memastikan kepatuhan terhadap peraturan yang berlaku, serta memberikan perlindungan hukum bagi kedua belah pihak dalam hubungan pernikahan sesuai ketentuan yang berlaku.",
            title: "Sertifikasi Kontrak Pernikahan",
            description: "Sahkan kontrak pernikahan untuk mendapatkan pengakuan hukum dan kepatuhan terhadap peraturan lokal."
        }
    ],
    labels: {
        home: "Beranda",
        moreInfo: "Info Lanjutan",
        ourService: "Layanan Kami",
        getInTouch: "Hubungi Kami",
        letsTalk: "Mari Bicara",
        trustedNotaryService: "Layanan Notaris Terpercaya",
        trustedNotaryServiceJakarta: "Layanan Notaris Terpercaya di Jakarta",
    },
    contactDetails: {
        mapsLink: "https://g.co/kgs/oV2TgXe",
        heroImage: IMAGE_HERO4,
        reachUs: "Hubungi Kami",
        address: "Jl. Daeng Moh. Ardiwinata No.62, Cibabat, Kec. Cimahi Utara, Kota Cimahi, Jawa Barat 40513",
        phone: "(022) 6659102",
        email: "ichdaAdieba@legalnotary.com",
        tradeMark: "Ichda Adieba © 2021",
        mapsImage: MAPS_IMAGE,
    },
    formLabels: {
        contactUsToday: "Hubungi Kami \n Hari Ini",
        TellUsYourNeeds: "Ceritakan Kebutuhan Anda",
        name: "Nama",
        emailAddress: "Alamat Email",
        enterYourName: "Masukkan Nama Anda",
        enterYourEmailAddress: "Masukkan Alamat Email Anda",
        inquiry: "Pertanyaan",
        typeHere: "Ketik di sini",
        sendMessage: "Kirim Pesan",
        sendByWhatsApp: "Kirim melalui WhatsApp",
        getDirection: "Dapatkan Petunjuk",
    },
    trustedNotaryServiceDescription: "Ichda Adieba menyediakan layanan notaris yang andal dan profesional, memastikan keaslian dan legalitas dokumen penting Anda. Dari pembuatan kontrak hingga sertifikasi akta properti, kami menangani setiap detail dengan ketelitian dan integritas.",
    trustedNotaryServiceDescriptionOurService: "Layanan kami meliputi pengesahan kontrak, sertifikasi akta properti, surat kuasa, dan pendirian perusahaan. Ichda Adieba menjamin kepatuhan hukum dan ketenangan pikiran untuk semua kebutuhan notaris Anda.",
};

