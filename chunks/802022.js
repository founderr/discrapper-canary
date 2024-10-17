var a = s(735250),
    r = s(470079),
    n = s(120356),
    i = s.n(n),
    l = s(399606),
    o = s(780384),
    c = s(481060),
    d = s(774078),
    u = s(727637),
    m = s(607070),
    C = s(210887),
    f = s(689938),
    p = s(352177),
    h = s(297491),
    g = s(458597);
t.Z = function () {
    let e = r.useRef(null),
        t = (0, u.Z)(e),
        s = (0, l.e7)([m.Z], () => m.Z.useReducedMotion),
        n = (0, l.e7)([C.Z], () => (0, o.wj)(C.Z.theme)),
        { days: _, hours: b } = (0, d.Z)(new Date('2024-08-23T08:15:00-07:00')),
        x = r.useMemo(() => {
            if (0 === _ && 0 === b) return f.Z.Messages.COLLECTIBLES_QUEUING_UP;
            let e = ''.concat(_.toString().padStart(2, '0')).concat(f.Z.Messages.COUNTDOWN_UNITS_DAYS),
                t = ''.concat(b.toString().padStart(2, '0')).concat(f.Z.Messages.COUNTDOWN_UNITS_HOURS);
            return ''.concat(e, ':').concat(t);
        }, [_, b]);
    return (0, a.jsxs)('div', {
        ref: e,
        className: i()(n ? p.shopCardDark : p.shopCard, h.notInteractive, {
            [p.shopCardAnimation]: !s,
            [n ? p.shopCardDarkHighlighted : p.shopCardHighlighted]: t
        }),
        children: [
            (0, a.jsx)('div', {
                className: p.preview,
                children: (0, a.jsx)('div', {
                    className: i()(p.avatarContainer, p.mysteryAvatarContainer),
                    children: (0, a.jsx)('img', {
                        src: g,
                        className: h.spark,
                        alt: ''
                    })
                })
            }),
            (0, a.jsxs)('div', {
                className: p.cardText,
                children: [
                    (0, a.jsx)('div', { className: i()(p.cardBackground, n ? p.darkCardBackground : p.lightCardBackground) }),
                    (0, a.jsx)(c.Text, {
                        variant: 'text-lg/bold',
                        className: h.productName,
                        children: f.Z.Messages.COLLECTIBLES_STORM_MYSTERY_CARD_TITLE
                    })
                ]
            }),
            (0, a.jsx)(c.TextBadge, {
                text: x,
                disableColor: !0,
                className: p.newBadge
            })
        ]
    });
};
