var r = n(200651),
    a = n(192379),
    i = n(120356),
    s = n.n(i),
    l = n(399606),
    o = n(780384),
    c = n(481060),
    d = n(774078),
    u = n(727637),
    m = n(607070),
    p = n(210887),
    h = n(388032),
    f = n(352177),
    g = n(297491),
    C = n(458597);
t.Z = function () {
    let e = a.useRef(null),
        t = (0, u.Z)(e),
        n = (0, l.e7)([m.Z], () => m.Z.useReducedMotion),
        i = (0, l.e7)([p.Z], () => (0, o.wj)(p.Z.theme)),
        { days: b, hours: v } = (0, d.Z)(new Date('2024-08-23T08:15:00-07:00')),
        x = a.useMemo(() => {
            if (0 === b && 0 === v) return h.intl.string(h.t.qAWS4O);
            let e = ''.concat(b.toString().padStart(2, '0')).concat(h.intl.string(h.t.QJyuxc)),
                t = ''.concat(v.toString().padStart(2, '0')).concat(h.intl.string(h.t['1LyF1t']));
            return ''.concat(e, ':').concat(t);
        }, [b, v]);
    return (0, r.jsxs)('div', {
        ref: e,
        className: s()(i ? f.shopCardDark : f.shopCard, g.notInteractive, {
            [f.shopCardAnimation]: !n,
            [i ? f.shopCardDarkHighlighted : f.shopCardHighlighted]: t
        }),
        children: [
            (0, r.jsx)('div', {
                className: f.preview,
                children: (0, r.jsx)('div', {
                    className: s()(f.avatarContainer, f.mysteryAvatarContainer),
                    children: (0, r.jsx)('img', {
                        src: C,
                        className: g.spark,
                        alt: ''
                    })
                })
            }),
            (0, r.jsxs)('div', {
                className: f.cardText,
                children: [
                    (0, r.jsx)('div', { className: s()(f.cardBackground, i ? f.darkCardBackground : f.lightCardBackground) }),
                    (0, r.jsx)(c.Text, {
                        variant: 'text-lg/bold',
                        className: g.productName,
                        children: h.intl.string(h.t.ZDfl3d)
                    })
                ]
            }),
            (0, r.jsx)(c.TextBadge, {
                text: x,
                disableColor: !0,
                className: f.newBadge
            })
        ]
    });
};
