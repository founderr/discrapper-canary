var r = n(200651);
n(192379);
var i = n(120356),
    a = n.n(i),
    s = n(481060),
    o = n(388032),
    l = n(762548),
    u = n(247844);
function c(e) {
    let { className: t, icon: n, children: i } = e;
    return (0, r.jsxs)('li', {
        className: a()(l.card, t),
        children: [
            (0, r.jsx)(n, { className: l.icon }),
            (0, r.jsx)(s.Text, {
                className: l.__invalid_description,
                variant: 'text-sm/medium',
                children: i
            })
        ]
    });
}
t.Z = function (e) {
    let { cardClassName: t } = e;
    return (0, r.jsxs)('div', {
        className: l.wrapper,
        children: [
            (0, r.jsxs)('div', {
                className: l.content,
                children: [
                    (0, r.jsx)(s.Heading, {
                        className: l.heading,
                        color: 'always-white',
                        variant: 'heading-xxl/bold',
                        children: o.intl.string(o.t.IzKs3t)
                    }),
                    (0, r.jsxs)('ul', {
                        className: l.cards,
                        children: [
                            (0, r.jsx)(c, {
                                className: t,
                                icon: s.BoostTier2SimpleIcon,
                                children: o.intl.string(o.t.TZigSE)
                            }),
                            (0, r.jsx)(c, {
                                className: t,
                                icon: (e) =>
                                    (0, r.jsx)('img', {
                                        className: a()(e.className, l.iconImage),
                                        src: u,
                                        alt: ''
                                    }),
                                children: o.intl.string(o.t.hjQuV1)
                            }),
                            (0, r.jsx)(c, {
                                className: t,
                                icon: s.ShieldUserIcon,
                                children: o.intl.string(o.t['2RUcaG'])
                            }),
                            (0, r.jsx)(c, {
                                className: t,
                                icon: s.HeartIcon,
                                children: o.intl.string(o.t.bJoZKS)
                            })
                        ]
                    })
                ]
            }),
            (0, r.jsx)('div', { className: l.backgroundImages })
        ]
    });
};
