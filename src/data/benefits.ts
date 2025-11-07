import { IBenefit } from "@/types";
import { FaCalculator, FaFileAlt, FaHome, FaChartLine } from "react-icons/fa";
import { MdSavings, MdVerifiedUser, MdCompare } from "react-icons/md";
import { BiSearch } from "react-icons/bi";

export const benefits: IBenefit[] = [
    {
        title: "Assess Your Financial Readiness",
        description: "Get a clear picture of your financial health and understand exactly what you need to start your home buying journey with confidence.",
        imageSrc: "/images/benefit-1.png",
        bullets: [
            {
                title: "Smart Deposit Calculator",
                description: "Calculate your minimum deposit requirements and discover government schemes that can reduce the amount you need upfront.",
                icon: <FaCalculator size={26} />
            },
            {
                title: "Complete Cost Breakdown",
                description: "See the full financial picture including refurbishment costs, home amenities, and hidden expenses beyond just the deposit.",
                icon: <MdSavings size={26} />
            },
            {
                title: "Financial Literacy Hub",
                description: "Access easy-to-understand guides and resources to build your mortgage knowledge and make informed decisions.",
                icon: <FaChartLine size={26} />
            }
        ]
    },
    {
        title: "Streamline Your Agreement in Principle",
        description: "Get your pre-approval sorted quickly with our organized document management system that keeps all your proofs in one secure place.",
        imageSrc: "/images/benefit-2.png",
        bullets: [
            {
                title: "Document Checklist",
                description: "Never miss a required document with our comprehensive checklist covering identity proofs, payslips, rental agreements, and bank statements.",
                icon: <FaFileAlt size={26} />
            },
            {
                title: "Affordability Assessment",
                description: "Understand your borrowing capacity through automated calculations based on your savings habits, rent history, and stress-test scenarios.",
                icon: <MdVerifiedUser size={26} />
            },
            {
                title: "Secure Document Storage",
                description: "Keep all your proof of funds, statements, and agreements organized and ready to submit whenever you need them.",
                icon: <FaFileAlt size={26} />
            }
        ]
    },
    {
        title: "Find Your Perfect Property",
        description: "Search for homes with personalized results that match both your dream home criteria and your financial reality.",
        imageSrc: "/images/benefit-3.png",
        bullets: [
            {
                title: "Integrated Property Search",
                description: "Browse properties filtered by your Agreement in Principle amount, government scheme eligibility, and financial strategy recommendations.",
                icon: <BiSearch size={26} />
            },
            {
                title: "Smart Filtering",
                description: "Find new homes, scheme-eligible properties, and listings that match your pre-approved mortgage amount - all in one place.",
                icon: <FaHome size={26} />
            },
            {
                title: "Financial Context",
                description: "See how each property fits your budget with connected financial insights, removing the guesswork from property hunting.",
                icon: <FaChartLine size={26} />
            }
        ]
    },
    {
        title: "Choose the Best Mortgage Product",
        description: "Compare mortgage options across banks and find the perfect product that saves you money and suits your financial goals.",
        imageSrc: "/images/benefit-4.png",
        bullets: [
            {
                title: "Comprehensive Comparison",
                description: "Compare fixed rate, variable rate, cashback schemes, repayment mortgages, and interest-only options across multiple lenders.",
                icon: <MdCompare size={26} />
            },
            {
                title: "Interest Rate Optimizer",
                description: "Discover strategies to reduce your interest rates, including linking savings accounts to offset your mortgage balance.",
                icon: <FaCalculator size={26} />
            },
            {
                title: "Cross-Bank Analysis",
                description: "Get personalized recommendations by analyzing all mortgage factors across different banks to find your best deal.",
                icon: <FaChartLine size={26} />
            }
        ]
    }
];
