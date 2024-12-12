var i = r(192379),
    a = r(723184),
    s = r(877837),
    o = function (e) {
        var n = e.color,
            r = e.onClick,
            o = e.onSwatchHover,
            l = e.hover,
            u = e.active,
            c = e.circleSize,
            d = e.circleSpacing,
            f = (0, a.default)(
                {
                    default: {
                        swatch: {
                            width: c,
                            height: c,
                            marginRight: d,
                            marginBottom: d,
                            transform: 'scale(1)',
                            transition: '100ms transform ease'
                        },
                        Swatch: {
                            borderRadius: '50%',
                            background: 'transparent',
                            boxShadow: 'inset 0 0 0 ' + (c / 2 + 1) + 'px ' + n,
                            transition: '100ms box-shadow ease'
                        }
                    },
                    hover: { swatch: { transform: 'scale(1.2)' } },
                    active: { Swatch: { boxShadow: 'inset 0 0 0 3px ' + n } }
                },
                {
                    hover: l,
                    active: u
                }
            );
        return i.createElement(
            'div',
            { style: f.swatch },
            i.createElement(s.m4, {
                style: f.Swatch,
                color: n,
                onClick: r,
                onHover: o,
                focusStyle: { boxShadow: f.Swatch.boxShadow + ', 0 0 5px ' + n }
            })
        );
    };
(o.defaultProps = {
    circleSize: 28,
    circleSpacing: 14
}),
    (n.Z = (0, a.handleHover)(o));
