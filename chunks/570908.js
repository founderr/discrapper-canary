n.d(t, {
    Z: function () {
        return s;
    }
});
var i = n(200651);
n(192379);
var l = n(120356),
    a = n.n(l),
    r = n(609415);
function s(e) {
    let { selected: t, muted: n = !1, highlighted: l = !1, wrapContent: s = !1, avatar: o, decorators: c, name: u, subText: d, avatarClassName: h, innerClassName: p } = e;
    return (0, i.jsxs)('div', {
        className: a()(p, r.layout, {
            [r.muted]: !t && n,
            [r.highlighted]: l,
            [r.wrappedLayout]: s
        }),
        children: [
            (0, i.jsx)('div', {
                className: a()(r.avatar, h),
                children: o
            }),
            (0, i.jsxs)('div', {
                className: r.content,
                children: [
                    (0, i.jsxs)('div', {
                        className: r.nameAndDecorators,
                        children: [
                            (0, i.jsx)('div', {
                                className: a()(r.name, { [r.wrappedName]: s }),
                                children: u
                            }),
                            c
                        ]
                    }),
                    null != d
                        ? (0, i.jsx)('div', {
                              className: r.subText,
                              children: d
                          })
                        : null
                ]
            })
        ]
    });
}
