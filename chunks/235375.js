n.r(t),
    n.d(t, {
        baseRules: function () {
            return I;
        },
        customRules: function () {
            return b;
        }
    }),
    n(47120);
var r = n(200651),
    i = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(302454),
    l = n.n(o),
    u = n(481060),
    c = n(37234),
    d = n(230711),
    f = n(454585),
    _ = n(703656),
    p = n(626135),
    h = n(981631),
    m = n(596401);
let g = l().defaultRules.link,
    E = { section: h.jXE.SETTINGS_CHANGELOG },
    v = (e) => {
        var t, n;
        let { level: r, children: a, className: o = null, styleSheet: l = {} } = e,
            c = (0, u.usePrivateHeadingLevel)(),
            d = parseInt(r, 10),
            f = isNaN(d) ? 1 : d;
        return i.createElement('h'.concat(c + f - 1), { className: s()(...((t = l), null == (n = o) ? [] : n.split(' ').map((e) => t[e]))) }, a);
    },
    I = null != f.Z ? f.Z.defaultRules : null,
    b = {
        link: {
            parse(e, t, n) {
                let r;
                let i = e[2],
                    a = i.startsWith('https://discordapp.com/nitro') || i.startsWith('https://discord.com/nitro'),
                    s = i.startsWith('https://discordapp.com/hypesquad') || i.startsWith('https://discord.com/hypesquad'),
                    o = i.startsWith('/shop/fullscreen?source=1') || i.startsWith('/activities');
                return (
                    (r =
                        a || s
                            ? (e) => {
                                  p.default.track(h.rMx.PREMIUM_PROMOTION_OPENED, { location: E }), a ? d.Z.open(h.oAB.PREMIUM) : s && d.Z.open(h.oAB.HYPESQUAD_ONLINE), n.changeLog.track(h.rMx.CHANGE_LOG_CTA_CLICKED, { cta_type: 'nitro' }), (0, u.closeModal)(m.Xd), e.preventDefault();
                              }
                            : o
                              ? (e) => {
                                    (0, _.uL)(i), n.changeLog.track(h.rMx.CHANGE_LOG_CTA_CLICKED, { ...p.default.getCampaignParams(i) }), (0, c.Ou)(), (0, u.closeModal)(m.Xd), e.preventDefault();
                                }
                              : () => {
                                    n && 'function' == typeof n.onLinkClick && n.onLinkClick(i),
                                        n.changeLog.track(h.rMx.CHANGE_LOG_CTA_CLICKED, {
                                            target: i,
                                            cta_type: 'inline_link',
                                            ...p.default.getCampaignParams(i)
                                        });
                                }),
                    {
                        ...g.parse(e, t, n),
                        callToAction: r
                    }
                );
            },
            react: (e, t, n) =>
                (0, r.jsx)(
                    u.Anchor,
                    {
                        href: l().sanitizeUrl(e.target),
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
            react: (t, n, i) =>
                (0, r.jsx)(
                    v,
                    {
                        level: t.level,
                        className: t.className,
                        styleSheet: e,
                        children: n(t.content, i)
                    },
                    i.key
                )
        }),
        heading: {
            react: (e, t, n) =>
                (0, r.jsx)(
                    v,
                    {
                        level: e.level,
                        children: t(e.content, n)
                    },
                    n.key
                )
        },
        image: {
            react(e, t, i) {
                let a = n(595173)('./'.concat(e.target));
                return (0, r.jsx)(
                    'img',
                    {
                        alt: e.alt,
                        src: a
                    },
                    i.key
                );
            }
        },
        blockQuote: { react: null == I ? void 0 : I.blockQuote.react },
        paragraph: { react: (e, t, n) => (0, r.jsx)('p', { children: t(e.content, n) }, n.key) }
    };
