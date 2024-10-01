n.d(t, {
    x: function () {
        return u;
    }
});
var r = n(47120);
var i = n(735250),
    a = n(470079),
    o = n(15127),
    s = n(512983),
    l = n(958920);
let u = a.forwardRef(function (e, t) {
    var n, r;
    let { children: u, disabled: c = !1, className: d, titleClassName: _, tag: E = 'h5', required: f = !1, style: h, title: p, error: m, ...I } = e,
        T = a.useId(),
        g = a.useId(),
        S = null !== (n = I.titleId) && void 0 !== n ? n : T,
        A = null != m ? (null !== (r = I.errorId) && void 0 !== r ? r : g) : void 0,
        [v, N] = a.useState(void 0),
        [O, R] = a.useState(void 0),
        C = void 0 !== O;
    return (0, i.jsx)('div', {
        ref: t,
        className: null != d ? d : void 0,
        style: null != h ? h : void 0,
        children: (0, i.jsx)(o.ol, {
            titleId: S,
            errorId: A,
            error: null != m ? m : void 0,
            isFocused: v,
            setIsFocused: N,
            hasValue: O,
            setHasValue: R,
            children: (0, i.jsxs)('div', {
                className: C ? l.fieldWrapper : void 0,
                children: [
                    null != p || null != m
                        ? (0, i.jsx)(s.v, {
                              tag: E,
                              disabled: c,
                              required: f,
                              error: m,
                              className: _,
                              id: S,
                              errorId: A,
                              ...I,
                              children: p
                          })
                        : null,
                    u
                ]
            })
        })
    });
});
