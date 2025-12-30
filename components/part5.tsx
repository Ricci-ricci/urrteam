import Container from "./layout/container";
import Section from "./layout/section";
import {
    Globe,
    Layout,
    Server,
    ShoppingCart,
    ShieldCheck,
    Zap,
    Smartphone,
    Wrench,
} from "lucide-react";

export const ServicesData = [
    {
        id: 1,
        title: "Website Development",
        description:
            "Modern, fast and responsive websites tailored to your business needs.",
        icon: Globe,
    },
    {
        id: 2,
        title: "Frontend Development",
        description:
            "Clean and interactive user interfaces using React, Next.js and Tailwind CSS.",
        icon: Layout,
    },
    {
        id: 3,
        title: "Backend Development",
        description:
            "Secure and scalable APIs with database management and authentication.",
        icon: Server,
    },
    {
        id: 4,
        title: "E-commerce Solutions",
        description:
            "Complete online stores with payment integration and product management.",
        icon: ShoppingCart,
    },
    {
        id: 5,
        title: "Authentication & Security",
        description: "User authentication, authorization and data protection.",
        icon: ShieldCheck,
    },
    {
        id: 6,
        title: "Performance Optimization",
        description:
            "Speed, SEO and performance improvements for better user experience.",
        icon: Zap,
    },
    {
        id: 7,
        title: "Responsive Design",
        description: "Mobile-first designs that work perfectly on all devices.",
        icon: Smartphone,
    },
    {
        id: 8,
        title: "Maintenance & Support",
        description: "Ongoing maintenance, updates and bug fixes.",
        icon: Wrench,
    },
];

const Text = () => {
    return (
        <div>
            <span className="text-2xl md:text-4xl text-white font-bold">
                We can Provide you a lot of our services
            </span>
        </div>
    );
};
const Services = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {ServicesData.map((service) => {
                const Icon = service.icon;
                return (
                    <div
                        key={service.id}
                        className="text-white p-4 flex items-start justify-center flex-col gap-8 border border-white rounded-xl"
                    >
                        <Icon size={32} />
                        <h3 className="text-xl md:text-2xl font-bold">
                            {service.title}
                        </h3>
                        <p className="text-md md:text-lg font-light">
                            {service.description}
                        </p>
                    </div>
                );
            })}
        </div>
    );
};

const Part5 = () => {
    return (
        <Container>
            <Section>
                <div className="flex flex-col md:flex-row gap-4 md:gap-8">
                    <Text />
                    <Services />
                </div>
            </Section>
        </Container>
    );
};
export default Part5;
