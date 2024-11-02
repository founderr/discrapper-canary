var r = n(200651);
n(192379);
var i = n(120356),
    a = n.n(i),
    s = n(481060),
    o = n(28531),
    l = n(819758),
    u = n(149203),
    c = n(388032),
    d = n(926506);
let f = (e) => {
    let { emojiSubCategory: t } = e;
    return (0, r.jsxs)('div', {
        className: a()(d.badgeLabel, t === u.t0.TOP_GUILD_EMOJI ? d.topGuildEmojiBadge : d.newlyAddedBadge),
        children: [
            t === u.t0.TOP_GUILD_EMOJI ? (0, r.jsx)(o.Z, { foreground: d.newlyAddedBadgeIcon }) : (0, r.jsx)(l.Z, { foreground: d.newlyAddedBadgeIcon }),
            (0, r.jsx)(s.Text, {
                variant: 'text-sm/semibold',
                color: 'always-white',
                children: t === u.t0.TOP_GUILD_EMOJI ? c.intl.string(c.t.TR2B4e) : c.intl.string(c.t['1aZ4V1'])
            })
        ]
    });
};
t.Z = (e) => {
    let { className: t, graphicPrimary: n, graphicSecondary: i, titlePrimary: o, titleSecondary: l, isFavorite: _ = !1, emojiSubCategory: h = u.t0.NONE } = e;
    return (0, r.jsxs)('div', {
        className: a()(d.inspector, t),
        children: [
            (0, r.jsx)('div', {
                className: d.graphicPrimary,
                'aria-hidden': !0,
                children: n
            }),
            (0, r.jsxs)('div', {
                className: d.textWrapper,
                children: [
                    (0, r.jsxs)(s.Text, {
                        className: d.titlePrimary,
                        variant: 'text-md/semibold',
                        children: [
                            _
                                ? (0, r.jsx)(s.StarIcon, {
                                      size: 'custom',
                                      color: 'currentColor',
                                      'aria-label': _ ? c.intl.formatToPlainString(c.t['+fdUkZ'], { names: o }) : void 0,
                                      width: 15,
                                      height: 15,
                                      className: d.favorite
                                  })
                                : null,
                            o
                        ]
                    }),
                    null != l &&
                        (0, r.jsx)(s.Text, {
                            className: d.titleSecondary,
                            variant: 'text-xs/normal',
                            children: l
                        })
                ]
            }),
            h === u.t0.NONE
                ? null != i &&
                  (0, r.jsx)('div', {
                      className: d.graphicSecondary,
                      'aria-hidden': !0,
                      children: i
                  })
                : (0, r.jsx)(f, { emojiSubCategory: h })
        ]
    });
};
