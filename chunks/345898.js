var r = n(735250);
n(470079);
var i = n(120356),
    a = n.n(i),
    o = n(481060),
    s = n(300995);
let l = (e) => {
    let { renderTitle: t, renderTagline: n, renderActions: i, renderMedia: l, className: u, isHorizontal: c = !1 } = e;
    return (0, r.jsxs)('div', {
        className: a()(s.tile, { [s.tileHorizontal]: c }, u),
        children: [
            (0, r.jsx)('div', {
                className: a()(s.media, { [s.mediaHorizontal]: c }),
                children: null == l ? void 0 : l()
            }),
            (0, r.jsxs)('div', {
                className: s.description,
                children: [
                    (0, r.jsx)(o.H, {
                        className: s.title,
                        children: null == t ? void 0 : t()
                    }),
                    (0, r.jsx)('div', {
                        className: s.tagline,
                        children: null == n ? void 0 : n()
                    }),
                    (0, r.jsx)('div', {
                        className: s.actions,
                        children: null == i ? void 0 : i()
                    })
                ]
            })
        ]
    });
};
t.Z = l;
