var i = r(192379),
    a = r(723184),
    s = r(317019),
    o = r(716708),
    l =
        Object.assign ||
        function (e) {
            for (var n = 1; n < arguments.length; n++) {
                var r = arguments[n];
                for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i]);
            }
            return e;
        },
    u = 13,
    c = function (e) {
        var n = e.color,
            r = e.style,
            s = e.onClick,
            c = void 0 === s ? function () {} : s,
            d = e.onHover,
            f = e.title,
            _ = void 0 === f ? n : f,
            h = e.children,
            p = e.focus,
            m = e.focusStyle,
            g = void 0 === m ? {} : m,
            E = 'transparent' === n,
            v = (0, a.default)({
                default: {
                    swatch: l(
                        {
                            background: n,
                            height: '100%',
                            width: '100%',
                            cursor: 'pointer',
                            position: 'relative',
                            outline: 'none'
                        },
                        r,
                        p ? g : {}
                    )
                }
            }),
            I = function (e) {
                return c(n, e);
            },
            T = function (e) {
                return e.keyCode === u && c(n, e);
            },
            b = function (e) {
                return d(n, e);
            },
            y = {};
        return (
            d && (y.onMouseOver = b),
            i.createElement(
                'div',
                l(
                    {
                        style: v.swatch,
                        onClick: I,
                        title: _,
                        tabIndex: 0,
                        onKeyDown: T
                    },
                    y
                ),
                h,
                E &&
                    i.createElement(o.Z, {
                        borderRadius: v.swatch.borderRadius,
                        boxShadow: 'inset 0 0 0 1px rgba(0,0,0,0.1)'
                    })
            )
        );
    };
n.Z = (0, s.I)(c);
