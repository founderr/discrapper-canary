var s = n(735250);
n(470079);
var a = n(120356),
    r = n.n(a),
    i = n(481060),
    o = n(51144),
    l = n(726697);
t.Z = (e) => {
    let { user: t, fill: n } = e,
        a = '\xA0(@'.concat(o.ZP.getUserTag(t, { decoration: 'never' }), ')');
    return (0, s.jsxs)(i.Text, {
        className: r()([l.text, { [l.fill]: n }]),
        variant: 'text-md/medium',
        children: [
            (0, s.jsx)('span', {
                className: l.username,
                children: o.ZP.getName(t)
            }),
            (0, s.jsx)('span', {
                className: l.discriminator,
                children: a
            })
        ]
    });
};
