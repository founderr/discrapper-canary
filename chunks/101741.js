t.d(n, {
    Z: function () {
        return b;
    }
}),
    t(47120);
var a = t(735250);
t(470079);
var i = t(209173),
    l = t(782568),
    s = t(626135),
    r = t(924489),
    c = t(132871),
    o = t(147890),
    d = t(491576),
    u = t(112884),
    _ = t(639002),
    g = t(781627),
    m = t(981631),
    C = t(689938),
    p = t(40694);
let f = new Map([['890343617762304070', { imageSrc: t(336662) }]]),
    h = new Map(),
    x = new Map([[m.ABu.SPOTIFY, { imageSrc: t(655130) }]]);
function I(e) {
    var n, t;
    let { result: i } = e,
        l = i.data,
        s = (0, d.Z)({ application: l }),
        c = f.get(i.data.id);
    if (null == c) return null;
    let u =
            s.length > 0
                ? (0, a.jsx)(r.Z, {
                      application: i.data,
                      textVariant: 'text-sm/semibold',
                      mutualGuilds: s,
                      mutualGuildShownMax: 3,
                      guildIconSize: r.x.SMALL,
                      compact: !0
                  })
                : null,
        _ = null !== (t = null === (n = l.directory_entry) || void 0 === n ? void 0 : n.guild_count) && void 0 !== t ? t : 0,
        m = _ > 0 ? C.Z.Messages.APP_DIRECTORY_SHORT_GUILD_COUNT.format({ guildCount: _ }) : void 0;
    return (0, a.jsx)(g.Z, {
        imageSrc: c.imageSrc,
        header: i.data.name,
        description: i.data.description,
        secondaryInfo: m,
        ctaLabel: C.Z.Messages.APPLICATION_ADD_BUTTON,
        mutualGuildCount: u,
        onCtaClick: () => (0, o.goToApplication)({ applicationId: l.id })
    });
}
function R(e) {
    let { result: n } = e,
        t = h.get(n.data.id);
    return null == t
        ? null
        : (0, a.jsx)(g.Z, {
              imageSrc: t.imageSrc,
              header: n.data.name,
              description: n.data.description,
              secondaryInfo: C.Z.Messages.APP_DIRECTORY_ACTIVITY_LABEL
          });
}
function T(e) {
    let n,
        t,
        i,
        { result: r, guildId: o } = e,
        d = x.get(r.data.name);
    return null == d
        ? null
        : (r.data.name === m.ABu.SPOTIFY &&
                ((n = C.Z.Messages.APP_DIRECTORY_SPOTIFY_TITLE),
                (t = C.Z.Messages.APP_DIRECTORY_SPOTIFY_DESCRIPTION.format()),
                (i = () => {
                    s.default.track(m.rMx.APP_DIRECTORY_CTA_CLICKED, {
                        current_page: c.ApplicationDirectoryViews.SEARCH,
                        cta: 'spotify',
                        guild_id: o
                    }),
                        (0, l.Z)('https://support.discord.com/hc/en-us/articles/360000167212-Discord-Spotify-Connection');
                })),
            null == n || null == t || null == i)
          ? null
          : (0, a.jsx)(g.Z, {
                imageSrc: d.imageSrc,
                header: n,
                description: t,
                ctaLabel: C.Z.Messages.LEARN_MORE,
                onCtaClick: i,
                secondaryInfo: C.Z.Messages.APP_DIRECTORY_CONNECTION_LABEL
            });
}
function b(e) {
    let { results: n, guildId: t } = e;
    return (0, a.jsxs)('div', {
        className: p.container,
        children: [
            (0, a.jsx)(u.Z, {}),
            (0, a.jsx)('div', {
                className: p.list,
                children: n.map((e, n) => {
                    let l = ''.concat(n).concat(e.type);
                    if (e.type === i.s.APPLICATION) return (0, a.jsx)(I, { result: e }, l);
                    if (e.type === i.s.ACTIVITY_APPLICATION) return (0, a.jsx)(R, { result: e }, l);
                    if (e.type === i.s.CONNECTION)
                        return (0, a.jsx)(
                            T,
                            {
                                guildId: t,
                                result: e
                            },
                            l
                        );
                })
            }),
            (0, a.jsx)(_.Z, { guildId: t })
        ]
    });
}
