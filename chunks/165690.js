var i = r(192379),
    a = r(476400),
    s = r.n(a),
    o = r(723184),
    l = r(829307),
    u = r(877837),
    c = r(122900),
    d = r(717487),
    f = r(99737),
    _ = function (e) {
        var n = e.width,
            r = e.onChange,
            a = e.disableAlpha,
            s = e.rgb,
            _ = e.hsl,
            h = e.hsv,
            p = e.hex,
            m = e.renderers,
            g = e.styles,
            E = void 0 === g ? {} : g,
            v = e.className,
            I = void 0 === v ? '' : v,
            T = e.defaultView,
            b = (0, o.default)(
                (0, l.Z)(
                    {
                        default: {
                            picker: {
                                width: n,
                                background: '#fff',
                                borderRadius: '2px',
                                boxShadow: '0 0 2px rgba(0,0,0,.3), 0 4px 8px rgba(0,0,0,.3)',
                                boxSizing: 'initial',
                                fontFamily: 'Menlo'
                            },
                            saturation: {
                                width: '100%',
                                paddingBottom: '55%',
                                position: 'relative',
                                borderRadius: '2px 2px 0 0',
                                overflow: 'hidden'
                            },
                            Saturation: { radius: '2px 2px 0 0' },
                            body: { padding: '16px 16px 12px' },
                            controls: { display: 'flex' },
                            color: { width: '32px' },
                            swatch: {
                                marginTop: '6px',
                                width: '16px',
                                height: '16px',
                                borderRadius: '8px',
                                position: 'relative',
                                overflow: 'hidden'
                            },
                            active: {
                                absolute: '0px 0px 0px 0px',
                                borderRadius: '8px',
                                boxShadow: 'inset 0 0 0 1px rgba(0,0,0,.1)',
                                background: 'rgba(' + s.r + ', ' + s.g + ', ' + s.b + ', ' + s.a + ')',
                                zIndex: '2'
                            },
                            toggles: { flex: '1' },
                            hue: {
                                height: '10px',
                                position: 'relative',
                                marginBottom: '8px'
                            },
                            Hue: { radius: '2px' },
                            alpha: {
                                height: '10px',
                                position: 'relative'
                            },
                            Alpha: { radius: '2px' }
                        },
                        disableAlpha: {
                            color: { width: '22px' },
                            alpha: { display: 'none' },
                            hue: { marginBottom: '0px' },
                            swatch: {
                                width: '10px',
                                height: '10px',
                                marginTop: '0px'
                            }
                        }
                    },
                    E
                ),
                { disableAlpha: a }
            );
        return i.createElement(
            'div',
            {
                style: b.picker,
                className: 'chrome-picker ' + I
            },
            i.createElement(
                'div',
                { style: b.saturation },
                i.createElement(u.OQ, {
                    style: b.Saturation,
                    hsl: _,
                    hsv: h,
                    pointer: f.Z,
                    onChange: r
                })
            ),
            i.createElement(
                'div',
                { style: b.body },
                i.createElement(
                    'div',
                    {
                        style: b.controls,
                        className: 'flexbox-fix'
                    },
                    i.createElement('div', { style: b.color }, i.createElement('div', { style: b.swatch }, i.createElement('div', { style: b.active }), i.createElement(u.QN, { renderers: m }))),
                    i.createElement(
                        'div',
                        { style: b.toggles },
                        i.createElement(
                            'div',
                            { style: b.hue },
                            i.createElement(u.PS, {
                                style: b.Hue,
                                hsl: _,
                                pointer: d.Z,
                                onChange: r
                            })
                        ),
                        i.createElement(
                            'div',
                            { style: b.alpha },
                            i.createElement(u.xV, {
                                style: b.Alpha,
                                rgb: s,
                                hsl: _,
                                pointer: d.Z,
                                renderers: m,
                                onChange: r
                            })
                        )
                    )
                ),
                i.createElement(c.Z, {
                    rgb: s,
                    hsl: _,
                    hex: p,
                    view: T,
                    onChange: r,
                    disableAlpha: a
                })
            )
        );
    };
(_.propTypes = {
    width: s().oneOfType([s().string, s().number]),
    disableAlpha: s().bool,
    styles: s().object,
    defaultView: s().oneOf(['hex', 'rgb', 'hsl'])
}),
    (_.defaultProps = {
        width: 225,
        disableAlpha: !1,
        styles: {}
    }),
    (0, u.t1)(_);
