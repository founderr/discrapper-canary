n.d(t, {
    j: function () {
        return _;
    }
});
var r = n(200651),
    i = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(84735),
    l = n(437337),
    u = n(981729),
    c = n(770102),
    d = n(534542),
    f = n(669831);
function _(e) {
    let { value: t, disabled: n = !1, hideBorder: a = !1, tooltipNote: _, onChange: h, className: p, style: m, note: g, children: E, disabledText: v } = e,
        I = i.useRef(null),
        S = i.useRef(null),
        T = i.useId(),
        b = (0, r.jsx)(l.r, {
            id: T,
            checked: t,
            onChange: h,
            disabled: n,
            focusProps: { enabled: !1 },
            innerRef: I
        });
    return (0, r.jsxs)('div', {
        style: m,
        className: s()(f.container, p, { [f.disabled]: n }),
        children: [
            (0, r.jsx)(o.t, {
                within: !0,
                offset: -4,
                focusTarget: I,
                ringTarget: S,
                children: (0, r.jsxs)('div', {
                    className: f.labelRow,
                    ref: S,
                    children: [
                        (0, r.jsx)('label', {
                            htmlFor: T,
                            className: f.title,
                            children: E
                        }),
                        (0, r.jsx)('div', {
                            className: f.control,
                            children:
                                null != _
                                    ? (0, r.jsx)(u.DY, {
                                          text: _,
                                          children: b
                                      })
                                    : b
                        })
                    ]
                })
            }),
            null != g &&
                (0, r.jsx)('div', {
                    className: f.note,
                    children: (0, r.jsx)(d.R, {
                        disabled: n,
                        type: d.g.DESCRIPTION,
                        children: g
                    })
                }),
            n &&
                null != v &&
                (0, r.jsx)('div', {
                    className: f.disabledText,
                    children: (0, r.jsx)(d.R, {
                        type: d.g.ERROR,
                        children: v
                    })
                }),
            !a && (0, r.jsx)(c.$, { className: f.dividerDefault })
        ]
    });
}
