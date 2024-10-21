n(411104);
var a = n(200651);
n(192379);
var r = n(120356),
    s = n.n(r),
    i = n(643872),
    o = n(481060),
    l = n(810568),
    c = n(689938),
    d = n(51527),
    u = n(825718);
let _ = [i.p.OFFICIAL, i.p.TWITTER, i.p.YOUTUBE];
function E(e) {
    let { website: t, trackClick: n } = e,
        {
            action: r,
            icon: s,
            title: d
        } = (function (e) {
            switch (e.category) {
                case i.p.OFFICIAL:
                    return {
                        icon: (0, a.jsx)(o.GlobeEarthIcon, { colorClass: u.linkIcon }),
                        action: l.as.WebsiteLink,
                        title: c.Z.Messages.GAME_PROFILE_LINK_OFFICIAL
                    };
                case i.p.TWITTER:
                    return {
                        icon: (0, a.jsx)(o.XNeutralIcon, { colorClass: u.linkIcon }),
                        action: l.as.XLink,
                        title: c.Z.Messages.GAME_PROFILE_LINK_TWITTER
                    };
                case i.p.YOUTUBE:
                    return {
                        action: l.as.YouTubeLink,
                        icon: (0, a.jsx)(o.YoutubeNeutralIcon, { colorClass: u.linkIcon }),
                        title: c.Z.Messages.GAME_PROFILE_LINK_YOUTUBE
                    };
                default:
                    throw Error('Unknown IGDB website category');
            }
        })(t);
    return (0, a.jsx)(o.Tooltip, {
        text: t.url,
        children: (e) => {
            let { onClick: i, ...l } = e;
            return (0, a.jsx)(o.Anchor, {
                ...l,
                className: u.linkAnchor,
                title: d,
                href: t.url,
                onClick: () => {
                    n(r), null == i || i();
                },
                target: '_blank',
                children: s
            });
        }
    });
}
t.Z = function (e) {
    let { detectedGame: t, trackClick: n } = e;
    if (null == t.websites) return null;
    let r = t.websites
        .filter((e) => {
            let { category: t } = e;
            return _.includes(t);
        })
        .sort((e, t) => e.category - t.category);
    return 0 === r.length
        ? null
        : (0, a.jsxs)('div', {
              children: [
                  (0, a.jsx)(o.Heading, {
                      className: d.sectionHeader,
                      variant: 'text-xs/semibold',
                      color: 'header-secondary',
                      children: c.Z.Messages.GAME_PROFILE_LINKS
                  }),
                  (0, a.jsx)('div', {
                      className: s()(d.row, d.gapMd),
                      children: r.map((e) =>
                          (0, a.jsx)(
                              E,
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
