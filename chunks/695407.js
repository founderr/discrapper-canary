n.d(t, {
    n: function () {
        return h;
    }
});
var r = n(735250),
    i = n(470079),
    a = n(120356),
    o = n.n(a),
    s = n(1561),
    l = n(84735),
    u = n(922770),
    c = n(481060),
    d = n(689938),
    _ = n(159769);
let E = 18;
function f(e, t, n) {
    return t
        ? (0, r.jsx)('div', {
              className: _.iconContainer,
              children: (0, r.jsx)(u.$, {
                  type: u.$.Type.SPINNING_CIRCLE,
                  className: o()(_.icon)
              })
          })
        : e.length > 0
          ? (0, r.jsx)(s.P, {
                'aria-label': d.Z.Messages.SEARCH_CLEAR,
                className: o()(_.iconContainer, _.iconClickable),
                onClick: (e) => {
                    e.stopPropagation(), n('');
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
                    width: E,
                    height: E,
                    className: _.icon,
                    'aria-label': d.Z.Messages.CLOSE
                })
            })
          : (0, r.jsx)('div', {
                className: _.iconContainer,
                children: (0, r.jsx)(c.MagnifyingGlassIcon, {
                    size: 'custom',
                    color: 'currentColor',
                    width: E,
                    height: E,
                    className: _.icon,
                    'aria-label': d.Z.Messages.SEARCH
                })
            });
}
let h = i.forwardRef(function (e, t) {
    let { query: n, onChange: a, loading: o = !1, disabled: s = !1, placeholder: u = d.Z.Messages.SEARCH, 'aria-label': c } = e,
        E = i.useRef(null),
        h = i.useRef(null);
    i.useImperativeHandle(
        t,
        () => ({
            focus: () => {
                var e;
                return null === (e = h.current) || void 0 === e ? void 0 : e.focus();
            },
            blur: () => {
                var e;
                return null === (e = h.current) || void 0 === e ? void 0 : e.blur();
            },
            activate: () => !1
        }),
        []
    );
    let p = f(n, o, a);
    return (0, r.jsx)(l.t, {
        focusTarget: h,
        ringTarget: E,
        offset: {
            top: 2,
            bottom: 2,
            left: 4,
            right: 4
        },
        children: (0, r.jsxs)('div', {
            className: _.container,
            ref: E,
            children: [
                (0, r.jsx)('input', {
                    role: 'searchbox',
                    'aria-busy': o,
                    ref: h,
                    className: _.input,
                    value: n,
                    onChange: (e) => a(e.currentTarget.value),
                    'aria-label': c,
                    placeholder: u,
                    disabled: s
                }),
                p
            ]
        })
    });
});
