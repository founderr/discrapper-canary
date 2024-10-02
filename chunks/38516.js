a(411104);
var t = a(735250);
a(470079);
var i = a(120356),
    o = a.n(i),
    r = a(643872),
    l = a(481060),
    s = a(810568),
    c = a(689938),
    d = a(51527),
    u = a(825718);
let m = [r.p.OFFICIAL, r.p.TWITTER, r.p.YOUTUBE];
function p(e) {
    let { website: n, trackClick: a } = e,
        {
            action: i,
            icon: o,
            title: d
        } = (function (e) {
            switch (e.category) {
                case r.p.OFFICIAL:
                    return {
                        icon: (0, t.jsx)(l.GlobeEarthIcon, { colorClass: u.linkIcon }),
                        action: s.as.WebsiteLink,
                        title: c.Z.Messages.GAME_PROFILE_LINK_OFFICIAL
                    };
                case r.p.TWITTER:
                    return {
                        icon: (0, t.jsx)(l.XNeutralIcon, { colorClass: u.linkIcon }),
                        action: s.as.XLink,
                        title: c.Z.Messages.GAME_PROFILE_LINK_TWITTER
                    };
                case r.p.YOUTUBE:
                    return {
                        action: s.as.YouTubeLink,
                        icon: (0, t.jsx)(l.YoutubeNeutralIcon, { colorClass: u.linkIcon }),
                        title: c.Z.Messages.GAME_PROFILE_LINK_YOUTUBE
                    };
                default:
                    throw Error('Unknown IGDB website category');
            }
        })(n);
    return (0, t.jsx)(
        l.Anchor,
        {
            className: u.linkAnchor,
            title: d,
            href: n.url,
            onClick: () => {
                a(i);
            },
            target: '_blank',
            children: o
        },
        n.url
    );
}
n.Z = function (e) {
    let { websites: n, trackClick: a } = e;
    if (null == n || 0 === n.length) return null;
    let i = n
        .filter((e) => {
            let { category: n } = e;
            return m.includes(n);
        })
        .sort((e, n) => e.category - n.category);
    return (0, t.jsxs)('div', {
        children: [
            (0, t.jsx)(l.Heading, {
                className: d.sectionHeader,
                variant: 'text-xs/semibold',
                color: 'header-secondary',
                children: c.Z.Messages.GAME_PROFILE_LINKS
            }),
            (0, t.jsx)('div', {
                className: o()(d.row, d.gapMd),
                children: i.map((e) =>
                    (0, t.jsx)(
                        p,
                        {
                            website: e,
                            trackClick: a
                        },
                        e.url
                    )
                )
            })
        ]
    });
};
