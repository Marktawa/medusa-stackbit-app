export const Header = ({ siteConfig }) => {
    return (
        <header>
            <span>{siteConfig.header.title}</span>
            {siteConfig.header.navLinks.map((navLink) => (
                <span><a href={`${navLink.url}`}>{navLink.label}</a></span>
            ))}
        </header>
    );
};