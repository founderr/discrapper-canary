var r = n(470079),
    i = n(844303),
    a = n(846822),
    o = n(827622),
    s =
        Object.assign ||
        function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
        },
    l = 13,
    u = function (e) {
        var t = e.color,
            n = e.style,
            a = e.onClick,
            u = void 0 === a ? function () {} : a,
            c = e.onHover,
            d = e.title,
            _ = void 0 === d ? t : d,
            E = e.children,
            f = e.focus,
            h = e.focusStyle,
            p = void 0 === h ? {} : h,
            m = 'transparent' === t,
            I = (0, i.default)({
                default: {
                    swatch: s(
                        {
                            background: t,
                            height: '100%',
                            width: '100%',
                            cursor: 'pointer',
                            position: 'relative',
                            outline: 'none'
                        },
                        n,
                        f ? p : {}
                    )
                }
            }),
            T = function (e) {
                return u(t, e);
            },
            g = function (e) {
                return e.keyCode === l && u(t, e);
            },
            S = function (e) {
                return c(t, e);
            },
            A = {};
        return (
            c && (A.onMouseOver = S),
            r.createElement(
                'div',
                s(
                    {
                        style: I.swatch,
                        onClick: T,
                        title: _,
                        tabIndex: 0,
                        onKeyDown: g
                    },
                    A
                ),
                E,
                m &&
                    r.createElement(o.Z, {
                        borderRadius: I.swatch.borderRadius,
                        boxShadow: 'inset 0 0 0 1px rgba(0,0,0,0.1)'
                    })
            )
        );
    };
t.Z = (0, a.I)(u);
