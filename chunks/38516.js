n(411104);
var t = n(735250);
n(470079);
var i = n(120356),
    r = n.n(i),
    o = n(643872),
    l = n(481060),
    s = n(810568),
    c = n(689938),
    d = n(51527),
    u = n(825718);
let m = [o.p.OFFICIAL, o.p.TWITTER, o.p.YOUTUBE];
function p(e) {
    let { website: a, trackClick: n } = e,
        {
            action: i,
            icon: r,
            title: d
        } = (function (e) {
            switch (e.category) {
                case o.p.OFFICIAL:
                    return {
                        icon: (0, t.jsx)(l.GlobeEarthIcon, { colorClass: u.linkIcon }),
                        action: s.as.WebsiteLink,
                        title: c.Z.Messages.GAME_PROFILE_LINK_OFFICIAL
                    };
                case o.p.TWITTER:
                    return {
                        icon: (0, t.jsx)(l.XNeutralIcon, { colorClass: u.linkIcon }),
                        action: s.as.XLink,
                        title: c.Z.Messages.GAME_PROFILE_LINK_TWITTER
                    };
                case o.p.YOUTUBE:
                    return {
                        action: s.as.YouTubeLink,
                        icon: (0, t.jsx)(l.YoutubeNeutralIcon, { colorClass: u.linkIcon }),
                        title: c.Z.Messages.GAME_PROFILE_LINK_YOUTUBE
                    };
                default:
                    throw Error('Unknown IGDB website category');
            }
        })(a);
    return (0, t.jsx)(
        l.Anchor,
        {
            className: u.linkAnchor,
            title: d,
            href: a.url,
            onClick: () => {
                n(i);
            },
            target: '_blank',
            children: r
        },
        a.url
    );
}
a.Z = function (e) {
    let { detectedGame: a, trackClick: n } = e;
    if (null == a.websites) return null;
    let i = a.websites
        .filter((e) => {
            let { category: a } = e;
            return m.includes(a);
        })
        .sort((e, a) => e.category - a.category);
    return 0 === i.length
        ? null
        : (0, t.jsxs)('div', {
              children: [
                  (0, t.jsx)(l.Heading, {
                      className: d.sectionHeader,
                      variant: 'text-xs/semibold',
                      color: 'header-secondary',
                      children: c.Z.Messages.GAME_PROFILE_LINKS
                  }),
                  (0, t.jsx)('div', {
                      className: r()(d.row, d.gapMd),
                      children: i.map((e) =>
                          (0, t.jsx)(
                              p,
                              {
                                  website: e,
                                  trackClick: n
                              },
                              e.url
                          )
                      )
                  })
              ]
          });
};
