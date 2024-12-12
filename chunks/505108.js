var i = r(192379),
    a = r(476400),
    s = r.n(a),
    o = r(723184),
    l = r(829307),
    u = r(877837),
    c = r(474527),
    d = r(372712),
    f = r(899627),
    _ = function (e) {
        var n = e.width,
            r = e.onChange,
            a = e.rgb,
            s = e.hsl,
            _ = e.hsv,
            h = e.hex,
            p = e.header,
            m = e.styles,
            g = void 0 === m ? {} : m,
            E = e.className,
            v = void 0 === E ? '' : E,
            I = (0, o.default)(
                (0, l.Z)(
                    {
                        default: {
                            picker: {
                                width: n,
                                background: '#fff',
                                border: '1px solid #dfe1e5',
                                boxSizing: 'initial',
                                display: 'flex',
                                flexWrap: 'wrap',
                                borderRadius: '8px 8px 0px 0px'
                            },
                            head: {
                                height: '57px',
                                width: '100%',
                                paddingTop: '16px',
                                paddingBottom: '16px',
                                paddingLeft: '16px',
                                fontSize: '20px',
                                boxSizing: 'border-box',
                                fontFamily: 'Roboto-Regular,HelveticaNeue,Arial,sans-serif'
                            },
                            saturation: {
                                width: '70%',
                                padding: '0px',
                                position: 'relative',
                                overflow: 'hidden'
                            },
                            swatch: {
                                width: '30%',
                                height: '228px',
                                padding: '0px',
                                background: 'rgba(' + a.r + ', ' + a.g + ', ' + a.b + ', 1)',
                                position: 'relative',
                                overflow: 'hidden'
                            },
                            body: {
                                margin: 'auto',
                                width: '95%'
                            },
                            controls: {
                                display: 'flex',
                                boxSizing: 'border-box',
                                height: '52px',
                                paddingTop: '22px'
                            },
                            color: { width: '32px' },
                            hue: {
                                height: '8px',
                                position: 'relative',
                                margin: '0px 16px 0px 16px',
                                width: '100%'
                            },
                            Hue: { radius: '2px' }
                        }
                    },
                    g
                )
            );
        return i.createElement(
            'div',
            {
                style: I.picker,
                className: 'google-picker ' + v
            },
            i.createElement('div', { style: I.head }, p),
            i.createElement('div', { style: I.swatch }),
            i.createElement(
                'div',
                { style: I.saturation },
                i.createElement(u.OQ, {
                    hsl: s,
                    hsv: _,
                    pointer: c.C,
                    onChange: r
                })
            ),
            i.createElement(
                'div',
                { style: I.body },
                i.createElement(
                    'div',
                    {
                        style: I.controls,
                        className: 'flexbox-fix'
                    },
                    i.createElement(
                        'div',
                        { style: I.hue },
                        i.createElement(u.PS, {
                            style: I.Hue,
                            hsl: s,
                            radius: '4px',
                            pointer: d.Z,
                            onChange: r
                        })
                    )
                ),
                i.createElement(f.Z, {
                    rgb: a,
                    hsl: s,
                    hex: h,
                    hsv: _,
                    onChange: r
                })
            )
        );
    };
(_.propTypes = {
    width: s().oneOfType([s().string, s().number]),
    styles: s().object,
    header: s().string
}),
    (_.defaultProps = {
        width: 652,
        styles: {},
        header: 'Color picker'
    }),
    (0, u.t1)(_);
