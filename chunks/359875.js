var r = n(200651);
n(192379);
var i = n(120356),
    a = n.n(i),
    s = n(565138),
    o = n(457926),
    l = n(696153);
t.Z = function (e) {
    let { guild: t, children: n } = e,
        i =
            null != t
                ? (0, r.jsx)(s.Z, {
                      guild: t,
                      size: s.Z.Sizes.MEDIUM,
                      className: a()(l.icon, null == t.icon ? l.textIcon : l.imageIcon),
                      active: !0
                  })
                : null;
    return (0, r.jsxs)('span', {
        children: [
            (0, r.jsx)(o.Z, { children: i }),
            (0, r.jsx)('span', {
                className: l.name,
                children: n
            })
        ]
    });
};
