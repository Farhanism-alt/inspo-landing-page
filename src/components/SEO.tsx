import { useEffect } from "react";

interface SEOProps {
    title: string;
    description: string;
    keywords?: string;
    schemaMarkup?: Record<string, any>;
}

const SEO = ({ title, description, keywords, schemaMarkup }: SEOProps) => {
    useEffect(() => {
        document.title = title;

        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.setAttribute("content", description);
        } else {
            const meta = document.createElement("meta");
            meta.name = "description";
            meta.content = description;
            document.head.appendChild(meta);
        }

        if (keywords) {
            const metaKeywords = document.querySelector('meta[name="keywords"]');
            if (metaKeywords) {
                metaKeywords.setAttribute("content", keywords);
            } else {
                const meta = document.createElement("meta");
                meta.name = "keywords";
                meta.content = keywords;
                document.head.appendChild(meta);
            }
        }

        // Update OG and Twitter tags if they exist
        const ogTitle = document.querySelector('meta[property="og:title"]');
        if (ogTitle) ogTitle.setAttribute("content", title);

        const ogDescription = document.querySelector('meta[property="og:description"]');
        if (ogDescription) ogDescription.setAttribute("content", description);

        const twitterTitle = document.querySelector('meta[name="twitter:title"]');
        if (twitterTitle) twitterTitle.setAttribute("content", title);

        const twitterDescription = document.querySelector('meta[name="twitter:description"]');
        if (twitterDescription) twitterDescription.setAttribute("content", description);

        // Handle JSON-LD Schema
        let scriptTag: HTMLScriptElement | null = null;
        if (schemaMarkup) {
            scriptTag = document.createElement("script");
            scriptTag.setAttribute("type", "application/ld+json");
            scriptTag.textContent = JSON.stringify(schemaMarkup);
            document.head.appendChild(scriptTag);
        }

        // Cleanup function to prevent duplicate scripts on route change
        return () => {
            if (scriptTag) {
                document.head.removeChild(scriptTag);
            }
        };
    }, [title, description, keywords, schemaMarkup]);

    return null;
};

export default SEO;
