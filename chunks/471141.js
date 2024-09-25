n.d(t, {
    j: function () {
        return E;
    }
});
var r = n(735250),
    i = n(470079),
    a = n(120356),
    o = n.n(a),
    s = n(84735),
    l = n(437337),
    u = n(981729),
    c = n(770102),
    d = n(534542),
    _ = n(770347);
function E(e) {
    let { value: t, disabled: n = !1, hideBorder: a = !1, tooltipNote: E, onChange: f, className: h, style: p, note: m, children: I, disabledText: T } = e,
        g = i.useRef(null),
        S = i.useRef(null),
        A = i.useId(),
        v = (0, r.jsx)(l.r, {
            id: A,
            checked: t,
            onChange: f,
            disabled: n,
            focusProps: { enabled: !1 },
            innerRef: g
        });
    return (0, r.jsxs)('div', {
        style: p,
        className: o()(_.container, h, { [_.disabled]: n }),
        children: [
            (0, r.jsx)(s.t, {
                within: !0,
                offset: -4,
                focusTarget: g,
                ringTarget: S,
                children: (0, r.jsxs)('div', {
                    className: _.labelRow,
                    ref: S,
                    children: [
                        (0, r.jsx)('label', {
                            htmlFor: A,
                            className: _.title,
                            children: I
                        }),
                        (0, r.jsx)('div', {
                            className: _.control,
                            children:
                                null != E
                                    ? (0, r.jsx)(u.DY, {
                                          text: E,
                                          children: v
                                      })
                                    : v
                        })
                    ]
                })
            }),
            null != m &&
                (0, r.jsx)('div', {
                    className: _.note,
                    children: (0, r.jsx)(d.R, {
                        disabled: n,
                        type: d.g.DESCRIPTION,
                        children: m
                    })
                }),
            n &&
                null != T &&
                (0, r.jsx)('div', {
                    className: _.disabledText,
                    children: (0, r.jsx)(d.R, {
                        type: d.g.ERROR,
                        children: T
                    })
                }),
            !a && (0, r.jsx)(c.$, { className: _.dividerDefault })
        ]
    });
}
