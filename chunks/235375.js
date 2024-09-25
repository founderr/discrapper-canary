n.r(t),
    n.d(t, {
        baseRules: function () {
            return v;
        },
        customRules: function () {
            return N;
        }
    });
var r = n(47120);
var i = n(735250),
    a = n(470079),
    o = n(120356),
    s = n.n(o),
    l = n(302454),
    u = n.n(l),
    c = n(481060),
    d = n(37234),
    _ = n(230711),
    E = n(454585),
    f = n(703656),
    h = n(626135),
    p = n(981631),
    m = n(596401);
let I = u().defaultRules.link,
    T = { section: p.jXE.SETTINGS_CHANGELOG };
function g() {
    h.default.track(p.rMx.PREMIUM_PROMOTION_OPENED, { location: T });
}
function S(e, t) {
    return null == t ? [] : t.split(' ').map((t) => e[t]);
}
let A = (e) => {
        let { level: t, children: n, className: r = null, styleSheet: i = {} } = e,
            o = (0, c.usePrivateHeadingLevel)(),
            l = parseInt(t, 10),
            u = o + (isNaN(l) ? 1 : l) - 1;
        return a.createElement('h'.concat(u), { className: s()(...S(i, r)) }, n);
    },
    v = null != E.Z ? E.Z.defaultRules : null,
    N = {
        link: {
            parse(e, t, n) {
                let r;
                let i = e[2],
                    a = i.startsWith('https://discordapp.com/nitro') || i.startsWith('https://discord.com/nitro'),
                    o = i.startsWith('https://discordapp.com/hypesquad') || i.startsWith('https://discord.com/hypesquad'),
                    s = i.startsWith('/shop/fullscreen?source=1') || i.startsWith('/activities');
                return (
                    (r =
                        a || o
                            ? (e) => {
                                  g(), a ? _.Z.open(p.oAB.PREMIUM) : o && _.Z.open(p.oAB.HYPESQUAD_ONLINE), n.changeLog.track(p.rMx.CHANGE_LOG_CTA_CLICKED, { cta_type: 'nitro' }), (0, c.closeModal)(m.Xd), e.preventDefault();
                              }
                            : s
                              ? (e) => {
                                    (0, f.uL)(i), n.changeLog.track(p.rMx.CHANGE_LOG_CTA_CLICKED, { ...h.default.getCampaignParams(i) }), (0, d.Ou)(), (0, c.closeModal)(m.Xd), e.preventDefault();
                                }
                              : () => {
                                    n && 'function' == typeof n.onLinkClick && n.onLinkClick(i),
                                        n.changeLog.track(p.rMx.CHANGE_LOG_CTA_CLICKED, {
                                            target: i,
                                            cta_type: 'inline_link',
                                            ...h.default.getCampaignParams(i)
                                        });
                                }),
                    {
                        ...I.parse(e, t, n),
                        callToAction: r
                    }
                );
            },
            react: (e, t, n) =>
                (0, i.jsx)(
                    c.Anchor,
                    {
                        href: u().sanitizeUrl(e.target),
                        title: e.title,
                        onClick: e.callToAction,
                        target: '_blank',
                        className: e.callToAction ? 'cta' : void 0,
                        children: t(e.content, n)
                    },
                    n.key
                )
        },
        lheading: (e) => ({
            react: (t, n, r) =>
                (0, i.jsx)(
                    A,
                    {
                        level: t.level,
                        className: t.className,
                        styleSheet: e,
                        children: n(t.content, r)
                    },
                    r.key
                )
        }),
        heading: {
            react: (e, t, n) =>
                (0, i.jsx)(
                    A,
                    {
                        level: e.level,
                        children: t(e.content, n)
                    },
                    n.key
                )
        },
        image: {
            react(e, t, r) {
                let a = n(595173)('./'.concat(e.target));
                return (0, i.jsx)(
                    'img',
                    {
                        alt: e.alt,
                        src: a
                    },
                    r.key
                );
            }
        },
        blockQuote: { react: null == v ? void 0 : v.blockQuote.react },
        paragraph: { react: (e, t, n) => (0, i.jsx)('p', { children: t(e.content, n) }, n.key) }
    };
