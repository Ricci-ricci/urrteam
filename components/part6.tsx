import Container from "./layout/container";
import { Facebook, Instagram, Linkedin, Github } from "lucide-react";
import Section from "./layout/section";
const email = "richireese17@gmail.com";
const number = "+261000000";
const Mail = () => {
    return (
        <div className="flex items-start justify-between w-full flex-col gap-8">
            <span className="text-white text-xl md:text-8xl font-bold">
                Wanna create something{" "}
                <span className="text-green-600">Awesome</span> with us?
            </span>
            <div className="flex items-center justify-between w-full flex-col md:flex-row text-white font-bold text-lg md:text-3xl">
                <span>{email}</span>
                <span>{number}</span>
            </div>
        </div>
    );
};
const Localisation = () => {
    return (
        <div className="flex md:flex-row flex-col items-center justify-between text-white">
            <span>Madagascar</span>
            <span>
                Say hello to{" "}
                <span className="underline underline-offset-2 cursor-pointer">
                    work with us
                </span>
            </span>
        </div>
    );
};
export function Footer() {
    return (
        <footer className="w-full border-t mt-10">
            <div className=" mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between text-sm text-muted-foreground gap-4">
                <div className="text-white text-lg">
                    © 2025 · Created by{" "}
                    <span className="font-medium">Ricci</span>
                </div>
                <div className="flex items-center gap-4">
                    <a
                        href="https://facebook.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-green-600 transition"
                    >
                        <Facebook className="h-4 w-4  md:h-12 md:w-12" />
                    </a>
                    <a
                        href="https://instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-green-600 transition"
                    >
                        <Instagram className="h-4 w-4  md:h-12 md:w-12" />
                    </a>
                    <a
                        href="https://linkedin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-green-600 transition"
                    >
                        <Linkedin className="h-4 w-4  md:h-12 md:w-12" />
                    </a>
                    <a
                        href="https://github.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-green-600 dark:hover:text-white transition"
                    >
                        <Github className="h-4 w-4  md:h-12 md:w-12" />
                    </a>
                </div>
            </div>
        </footer>
    );
}

const Part6 = () => {
    return (
        <Container>
            <Section classname="flex flex-col gap-6">
                <Mail></Mail>;<Localisation></Localisation>
                <Footer></Footer>
            </Section>
        </Container>
    );
};
export default Part6;
