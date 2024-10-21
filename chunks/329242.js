var s = n(200651);
n(192379);
var a = n(120356),
    r = n.n(a),
    i = n(481060),
    l = n(51144),
    o = n(726697);
t.Z = (e) => {
    let { user: t, fill: n } = e,
        a = '\xA0(@'.concat(l.ZP.getUserTag(t, { decoration: 'never' }), ')');
    return (0, s.jsxs)(i.Text, {
        className: r()([o.text, { [o.fill]: n }]),
        variant: 'text-md/medium',
        children: [
            (0, s.jsx)('span', {
                className: o.username,
                children: l.ZP.getName(t)
            }),
            (0, s.jsx)('span', {
                className: o.discriminator,
                children: a
            })
        ]
    });
};
