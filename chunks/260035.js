n.d(t, {
    m: function () {
        return d;
    }
}),
    n(47120);
var r = n(735250),
    i = n(470079),
    a = n(682963),
    s = n(442837),
    o = n(944486),
    l = n(745510),
    u = n(675654),
    c = n(688478);
function d(e) {
    let { children: t } = e,
        [n, d] = i.useState(null),
        [_, E] = i.useState(null),
        f = i.useRef(new Set()),
        [h, p] = i.useState(!1),
        I = (0, s.e7)([o.Z], () => o.Z.getCurrentlySelectedChannelId()),
        m = i.useCallback((e) => {
            f.current.delete(e), p(f.current.size > 0);
        }, []),
        T = i.useCallback((e) => (f.current.add(e), p(!0), () => m(e)), [m]),
        S = i.useCallback((e, t) => {
            for (let n of f.current) n(e, t);
        }, []);
    return (
        i.useEffect(() => {
            null == _ || _.clearConfetti();
        }, [_, I]),
        (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(l.d, {
                    confettiCanvas: _,
                    spriteCanvas: n,
                    baseConfig: u.We,
                    addClickListener: T,
                    removeClickListener: m,
                    children: t
                }),
                (0, r.jsx)(a.O_, {
                    ref: E,
                    className: c.canvas,
                    environment: u.rq,
                    onClick: h ? S : void 0
                }),
                (0, r.jsx)(a.Ji, {
                    ref: d,
                    colors: u.Br,
                    sprites: u.CA,
                    spriteWidth: u.Ko,
                    spriteHeight: u.Ko
                })
            ]
        })
    );
}
