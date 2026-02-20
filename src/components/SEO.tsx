import { useEffect } from "react";

interface SEOProps {
    title: string;
    description: string;
    keywords?: string;
}

const SEO = ({ title, description, keywords }: SEOProps) => {
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

    }, [title, description, keywords]);

    return null;
};

export default SEO;
