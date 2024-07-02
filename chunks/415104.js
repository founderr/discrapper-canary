n.d(t, {
    Z: function () {
        return _;
    }
}), n(47120);
var i = n(735250), s = n(470079), a = n(120356), r = n.n(a), l = n(497505), o = n(918701), c = n(439826), d = n(43779), u = n(444627);
function _(e) {
    let {quest: t} = e, n = (0, o.zi)(t), [a, _] = s.useState(!1);
    return (0, i.jsxs)('div', {
        className: r()(u.container, {
            [u.expired]: n,
            [u.live]: !n
        }),
        onMouseEnter: () => _(!0),
        onMouseLeave: () => _(!1),
        children: [
            (0, i.jsx)(c.Z, {
                quest: t,
                isHovering: a
            }),
            (0, i.jsx)(d.Z, {
                quest: t,
                questContent: l.jn.QUEST_HOME_DESKTOP
            })
        ]
    });
}
