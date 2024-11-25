n.d(t, {
    n: function () {
        return _;
    }
});
var r = n(200651),
    i = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(1561),
    l = n(84735),
    u = n(922770),
    c = n(481060),
    d = n(388032),
    f = n(496052);
let _ = i.forwardRef(function (e, t) {
    var n, a, _;
    let { query: p, onChange: h, loading: m = !1, disabled: g = !1, placeholder: E = d.intl.string(d.t['5h0QOD']), 'aria-label': v } = e,
        I = i.useRef(null),
        b = i.useRef(null);
    i.useImperativeHandle(
        t,
        () => ({
            focus: () => {
                var e;
                return null === (e = b.current) || void 0 === e ? void 0 : e.focus();
            },
            blur: () => {
                var e;
                return null === (e = b.current) || void 0 === e ? void 0 : e.blur();
            },
            activate: () => !1
        }),
        []
    );
    let T =
        ((n = p),
        (a = m),
        (_ = h),
        a
            ? (0, r.jsx)('div', {
                  className: f.iconContainer,
                  children: (0, r.jsx)(u.$, {
                      type: u.$.Type.SPINNING_CIRCLE,
                      className: s()(f.icon)
                  })
              })
            : n.length > 0
              ? (0, r.jsx)(o.P, {
                    'aria-label': d.intl.string(d.t['78fJND']),
                    className: s()(f.iconContainer, f.iconClickable),
                    onClick: (e) => {
                        e.stopPropagation(), _('');
                    },
                    onMouseDown: (e) => {
                        e.preventDefault(), e.stopPropagation();
                    },
                    focusProps: {
                        offset: {
                            top: -3,
                            right: -3,
                            bottom: -3,
                            left: -3
                        }
                    },
                    children: (0, r.jsx)(c.XSmallIcon, {
                        size: 'custom',
                        color: 'currentColor',
                        width: 18,
                        height: 18,
                        className: f.icon,
                        'aria-label': d.intl.string(d.t.cpT0Cg)
                    })
                })
              : (0, r.jsx)('div', {
                    className: f.iconContainer,
                    children: (0, r.jsx)(c.MagnifyingGlassIcon, {
                        size: 'custom',
                        color: 'currentColor',
                        width: 18,
                        height: 18,
                        className: f.icon,
                        'aria-label': d.intl.string(d.t['5h0QOD'])
                    })
                }));
    return (0, r.jsx)(l.t, {
        focusTarget: b,
        ringTarget: I,
        offset: {
            top: 2,
            bottom: 2,
            left: 4,
            right: 4
        },
        children: (0, r.jsxs)('div', {
            className: f.container,
            ref: I,
            children: [
                (0, r.jsx)('input', {
                    role: 'searchbox',
                    'aria-busy': m,
                    ref: b,
                    className: f.input,
                    value: p,
                    onChange: (e) => h(e.currentTarget.value),
                    'aria-label': v,
                    placeholder: E,
                    disabled: g
                }),
                T
            ]
        })
    });
});
