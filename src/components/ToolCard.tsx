import { Link } from "react-router-dom";
import { ArrowRight, LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

interface ToolCardProps {
    icon: LucideIcon;
    title: string;
    description: string;
    href: string;
    index: number;
    tag: string;
}

const ToolCard = ({ icon: Icon, title, description, href, index, tag }: ToolCardProps) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05, duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
        >
            <Link
                to={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group block bg-card rounded-[24px] border border-border p-7 shadow-inspo transition-all duration-300 hover:shadow-inspo-lg hover:-translate-y-1 h-full flex flex-col"
            >
                <div className="flex items-start justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center">
                        <Icon size={20} className="text-foreground" />
                    </div>
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground bg-secondary px-2.5 py-1 rounded-full">
                        {tag}
                    </span>
                </div>
                <h3 className="font-display text-base font-bold text-foreground mb-2 tracking-[-0.01em]">{title}</h3>
                <p className="text-inspo-body text-sm leading-relaxed mb-4">{description}</p>
                <span className="text-sm font-medium text-foreground inline-flex items-center gap-1 group-hover:gap-2 transition-all duration-300">
                    Use Tool <ArrowRight size={14} />
                </span>
            </Link>
        </motion.div>
    );
};

export default ToolCard;
