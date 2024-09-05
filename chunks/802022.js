var a = n(735250),
    r = n(470079),
    s = n(120356),
    o = n.n(s),
    i = n(399606),
    l = n(780384),
    c = n(481060),
    d = n(774078),
    u = n(727637),
    f = n(607070),
    p = n(210887),
    g = n(689938),
    C = n(775409),
    m = n(636246),
    _ = n(458597);
t.Z = function () {
    let e = r.useRef(null),
        t = (0, u.Z)(e),
        n = (0, i.e7)([f.Z], () => f.Z.useReducedMotion),
        s = (0, i.e7)([p.Z], () => (0, l.wj)(p.Z.theme)),
        { days: h, hours: b } = (0, d.Z)(new Date('2024-08-23T08:15:00-07:00')),
        x = r.useMemo(() => {
            if (0 === h && 0 === b) return g.Z.Messages.COLLECTIBLES_QUEUING_UP;
            let e = ''.concat(h.toString().padStart(2, '0')).concat(g.Z.Messages.COUNTDOWN_UNITS_DAYS),
                t = ''.concat(b.toString().padStart(2, '0')).concat(g.Z.Messages.COUNTDOWN_UNITS_HOURS);
            return ''.concat(e, ':').concat(t);
        }, [h, b]);
    return (0, a.jsxs)('div', {
        ref: e,
        className: o()(s ? C.shopCardDark : C.shopCard, m.notInteractive, {
            [C.shopCardAnimation]: !n,
            [s ? C.shopCardDarkHighlighted : C.shopCardHighlighted]: t
        }),
        children: [
            (0, a.jsx)('div', {
                className: C.preview,
                children: (0, a.jsx)('div', {
                    className: o()(C.avatarContainer, C.mysteryAvatarContainer),
                    children: (0, a.jsx)('img', {
                        src: _,
                        className: m.spark,
                        alt: ''
                    })
                })
            }),
            (0, a.jsxs)('div', {
                className: C.cardText,
                children: [
                    (0, a.jsx)('div', { className: o()(C.cardBackground, s ? C.darkCardBackground : C.lightCardBackground) }),
                    (0, a.jsx)(c.Text, {
                        variant: 'text-lg/bold',
                        className: m.productName,
                        children: g.Z.Messages.COLLECTIBLES_STORM_MYSTERY_CARD_TITLE
                    })
                ]
            }),
            (0, a.jsx)(c.TextBadge, {
                text: x,
                disableColor: !0,
                className: C.newBadge
            })
        ]
    });
};
