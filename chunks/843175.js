var i = r(192379),
    a = r(476400),
    s = r.n(a),
    o = r(723184),
    l = r(829307),
    u = r(877837),
    c = r(871810),
    d = r(913727),
    f = function (e) {
        var n = e.hsl,
            r = e.onChange,
            a = e.pointer,
            s = e.styles,
            d = void 0 === s ? {} : s,
            f = e.className,
            _ = void 0 === f ? '' : f,
            h = (0, o.default)(
                (0, l.Z)(
                    {
                        default: {
                            hue: {
                                height: '12px',
                                position: 'relative'
                            },
                            Hue: { radius: '2px' }
                        }
                    },
                    d
                )
            );
        return i.createElement(
            'div',
            {
                style: h.wrap || {},
                className: 'slider-picker ' + _
            },
            i.createElement(
                'div',
                { style: h.hue },
                i.createElement(u.PS, {
                    style: h.Hue,
                    hsl: n,
                    pointer: a,
                    onChange: r
                })
            ),
            i.createElement(
                'div',
                { style: h.swatches },
                i.createElement(c.Z, {
                    hsl: n,
                    onClick: r
                })
            )
        );
    };
(f.propTypes = { styles: s().object }),
    (f.defaultProps = {
        pointer: d.Z,
        styles: {}
    }),
    (0, u.t1)(f);
