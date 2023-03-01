export const Header = ({ siteConfig }) => {
    return (
        <header className="header outer">
            <div className="inner">
                <span className="header-title">{siteConfig.header.title}</span>
                <span className="header-nav">
                    {siteConfig.header.navLinks.map((navLink) => (
                        <a href={`${navLink.url}`}>{navLink.label}</a>
                    ))}
                </span>
            </div>
        </header>
    );
};