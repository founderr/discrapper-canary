n.d(t, {
    Z: function () {
        return a;
    }
});
var i = n(200651);
n(192379);
var l = n(120356),
    r = n.n(l),
    o = n(743483);
function a(e) {
    let { selected: t, muted: n = !1, highlighted: l = !1, wrapContent: a = !1, avatar: s, decorators: c, name: d, subText: u, avatarClassName: h, innerClassName: p } = e;
    return (0, i.jsxs)('div', {
        className: r()(p, o.layout, {
            [o.muted]: !t && n,
            [o.highlighted]: l,
            [o.wrappedLayout]: a
        }),
        children: [
            (0, i.jsx)('div', {
                className: r()(o.avatar, h),
                children: s
            }),
            (0, i.jsxs)('div', {
                className: o.content,
                children: [
                    (0, i.jsxs)('div', {
                        className: o.nameAndDecorators,
                        children: [
                            (0, i.jsx)('div', {
                                className: r()(o.name, { [o.wrappedName]: a }),
                                children: d
                            }),
                            c
                        ]
                    }),
                    null != u
                        ? (0, i.jsx)('div', {
                              className: o.subText,
                              children: u
                          })
                        : null
                ]
            })
        ]
    });
}
