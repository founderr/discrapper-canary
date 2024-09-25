n.d(t, {
    m: function () {
        return c;
    }
});
var r = n(47120);
var i = n(735250),
    a = n(470079),
    o = n(887024),
    s = n(745510),
    l = n(675654),
    u = n(688478);
function c(e) {
    let { children: t } = e,
        [n, r] = a.useState(null),
        [c, d] = a.useState(null),
        _ = a.useRef(new Set()),
        [E, f] = a.useState(!1),
        h = a.useCallback((e) => {
            _.current.delete(e), f(_.current.size > 0);
        }, []),
        p = a.useCallback((e) => (_.current.add(e), f(!0), () => h(e)), [h]),
        m = a.useCallback((e, t) => {
            for (let n of _.current) n(e, t);
        }, []);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(s.d, {
                confettiCanvas: c,
                spriteCanvas: n,
                baseConfig: l.We,
                addClickListener: p,
                removeClickListener: h,
                children: t
            }),
            (0, i.jsx)(o.O_, {
                ref: d,
                className: u.canvas,
                environment: l.rq,
                onClick: E ? m : void 0
            }),
            (0, i.jsx)(o.Ji, {
                ref: r,
                colors: l.Br,
                sprites: l.CA,
                spriteWidth: l.Ko,
                spriteHeight: l.Ko
            })
        ]
    });
}
