var i = r(192379),
    a = r(723184),
    s = r(877837),
    o = r(68688),
    l =
        Object.assign ||
        function (e) {
            for (var n = 1; n < arguments.length; n++) {
                var r = arguments[n];
                for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i]);
            }
            return e;
        },
    u = function (e) {
        var n = e.rgb,
            r = e.hsl,
            o = e.width,
            u = e.height,
            c = e.onChange,
            d = e.direction,
            f = e.style,
            _ = e.renderers,
            h = e.pointer,
            p = e.className,
            m = void 0 === p ? '' : p,
            g = (0, a.default)({
                default: {
                    picker: {
                        position: 'relative',
                        width: o,
                        height: u
                    },
                    alpha: {
                        radius: '2px',
                        style: f
                    }
                }
            });
        return i.createElement(
            'div',
            {
                style: g.picker,
                className: 'alpha-picker ' + m
            },
            i.createElement(
                s.xV,
                l({}, g.alpha, {
                    rgb: n,
                    hsl: r,
                    pointer: h,
                    renderers: _,
                    onChange: c,
                    direction: d
                })
            )
        );
    };
(u.defaultProps = {
    width: '316px',
    height: '16px',
    direction: 'horizontal',
    pointer: o.Z
}),
    (0, s.t1)(u);
