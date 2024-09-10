var a = r(735250),
    n = r(470079),
    s = r(120356),
    i = r.n(s),
    o = r(399606),
    l = r(780384),
    c = r(481060),
    d = r(774078),
    u = r(727637),
    f = r(607070),
    p = r(210887),
    m = r(689938),
    C = r(775409),
    _ = r(636246),
    g = r(458597);
t.Z = function () {
    let e = n.useRef(null),
        t = (0, u.Z)(e),
        r = (0, o.e7)([f.Z], () => f.Z.useReducedMotion),
        s = (0, o.e7)([p.Z], () => (0, l.wj)(p.Z.theme)),
        { days: h, hours: b } = (0, d.Z)(new Date('2024-08-23T08:15:00-07:00')),
        E = n.useMemo(() => {
            if (0 === h && 0 === b) return m.Z.Messages.COLLECTIBLES_QUEUING_UP;
            let e = ''.concat(h.toString().padStart(2, '0')).concat(m.Z.Messages.COUNTDOWN_UNITS_DAYS),
                t = ''.concat(b.toString().padStart(2, '0')).concat(m.Z.Messages.COUNTDOWN_UNITS_HOURS);
            return ''.concat(e, ':').concat(t);
        }, [h, b]);
    return (0, a.jsxs)('div', {
        ref: e,
        className: i()(s ? C.shopCardDark : C.shopCard, _.notInteractive, {
            [C.shopCardAnimation]: !r,
            [s ? C.shopCardDarkHighlighted : C.shopCardHighlighted]: t
        }),
        children: [
            (0, a.jsx)('div', {
                className: C.preview,
                children: (0, a.jsx)('div', {
                    className: i()(C.avatarContainer, C.mysteryAvatarContainer),
                    children: (0, a.jsx)('img', {
                        src: g,
                        className: _.spark,
                        alt: ''
                    })
                })
            }),
            (0, a.jsxs)('div', {
                className: C.cardText,
                children: [
                    (0, a.jsx)('div', { className: i()(C.cardBackground, s ? C.darkCardBackground : C.lightCardBackground) }),
                    (0, a.jsx)(c.Text, {
                        variant: 'text-lg/bold',
                        className: _.productName,
                        children: m.Z.Messages.COLLECTIBLES_STORM_MYSTERY_CARD_TITLE
                    })
                ]
            }),
            (0, a.jsx)(c.TextBadge, {
                text: E,
                disableColor: !0,
                className: C.newBadge
            })
        ]
    });
};
