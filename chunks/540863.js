n.d(t, {
    x: function () {
        return l;
    }
}),
    n(47120);
var r = n(200651),
    i = n(192379),
    a = n(15127),
    s = n(512983),
    o = n(70185);
let l = i.forwardRef(function (e, t) {
    var n, l;
    let { children: u, disabled: c = !1, className: d, titleClassName: f, tag: _ = 'h5', required: p = !1, style: h, title: m, error: g, ...E } = e,
        v = i.useId(),
        I = i.useId(),
        T = null !== (n = E.titleId) && void 0 !== n ? n : v,
        b = null != g ? (null !== (l = E.errorId) && void 0 !== l ? l : I) : void 0,
        [S, y] = i.useState(void 0),
        [A, N] = i.useState(void 0),
        C = void 0 !== A;
    return (0, r.jsx)('div', {
        ref: t,
        className: null != d ? d : void 0,
        style: null != h ? h : void 0,
        children: (0, r.jsx)(a.ol, {
            titleId: T,
            errorId: b,
            error: null != g ? g : void 0,
            isFocused: S,
            setIsFocused: y,
            hasValue: A,
            setHasValue: N,
            children: (0, r.jsxs)('div', {
                className: C ? o.fieldWrapper : void 0,
                children: [
                    null != m || null != g
                        ? (0, r.jsx)(s.v, {
                              tag: _,
                              disabled: c,
                              required: p,
                              error: g,
                              className: f,
                              id: T,
                              errorId: b,
                              ...E,
                              children: m
                          })
                        : null,
                    u
                ]
            })
        })
    });
});
