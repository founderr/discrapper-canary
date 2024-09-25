var r = n(470079),
    i = n(476400),
    a = n.n(i),
    o = n(844303),
    s = n(829307),
    l = n(464854),
    u = n(781466),
    c = n(522082),
    d = function (e) {
        var t = e.hsl,
            n = e.onChange,
            i = e.pointer,
            a = e.styles,
            c = void 0 === a ? {} : a,
            d = e.className,
            _ = void 0 === d ? '' : d,
            E = (0, o.default)(
                (0, s.Z)(
                    {
                        default: {
                            hue: {
                                height: '12px',
                                position: 'relative'
                            },
                            Hue: { radius: '2px' }
                        }
                    },
                    c
                )
            );
        return r.createElement(
            'div',
            {
                style: E.wrap || {},
                className: 'slider-picker ' + _
            },
            r.createElement(
                'div',
                { style: E.hue },
                r.createElement(l.PS, {
                    style: E.Hue,
                    hsl: t,
                    pointer: i,
                    onChange: n
                })
            ),
            r.createElement(
                'div',
                { style: E.swatches },
                r.createElement(u.Z, {
                    hsl: t,
                    onClick: n
                })
            )
        );
    };
(d.propTypes = { styles: a().object }),
    (d.defaultProps = {
        pointer: c.Z,
        styles: {}
    }),
    (0, l.t1)(d);
