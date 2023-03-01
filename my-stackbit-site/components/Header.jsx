export const Header = ({ siteConfig }) => {
    const headerObjectId = siteConfig.__id + ':header';
    return (
        <header className="header outer" data-sb-field-path={headerObjectId}>
            <div className="inner">
                <span className="header-title" data-sb-field-path=".title">{siteConfig.header.title}</span>
                <span className="header-nav" data-sb-field-path=".navLinks">
                    {siteConfig.header.navLinks.map((navLink, idx) => (
                        <a href={`${navLink.url}`} data-sb-field-path={`.${idx}`}>{navLink.label}</a>
                    ))}
                </span>
            </div>
        </header>
    );
};