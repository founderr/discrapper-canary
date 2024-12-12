var i = r(192379),
    a = r(723184),
    s = r(829307),
    o = r(820611),
    l = r(877837),
    u = function (e) {
        var n = e.onChange,
            r = e.hex,
            u = e.rgb,
            c = e.styles,
            d = void 0 === c ? {} : c,
            f = e.className,
            _ = void 0 === f ? '' : f,
            h = (0, a.default)(
                (0, s.Z)(
                    {
                        default: {
                            material: {
                                width: '98px',
                                height: '98px',
                                padding: '16px',
                                fontFamily: 'Roboto'
                            },
                            HEXwrap: { position: 'relative' },
                            HEXinput: {
                                width: '100%',
                                marginTop: '12px',
                                fontSize: '15px',
                                color: '#333',
                                padding: '0px',
                                border: '0px',
                                borderBottom: '2px solid ' + r,
                                outline: 'none',
                                height: '30px'
                            },
                            HEXlabel: {
                                position: 'absolute',
                                top: '0px',
                                left: '0px',
                                fontSize: '11px',
                                color: '#999999',
                                textTransform: 'capitalize'
                            },
                            Hex: { style: {} },
                            RGBwrap: { position: 'relative' },
                            RGBinput: {
                                width: '100%',
                                marginTop: '12px',
                                fontSize: '15px',
                                color: '#333',
                                padding: '0px',
                                border: '0px',
                                borderBottom: '1px solid #eee',
                                outline: 'none',
                                height: '30px'
                            },
                            RGBlabel: {
                                position: 'absolute',
                                top: '0px',
                                left: '0px',
                                fontSize: '11px',
                                color: '#999999',
                                textTransform: 'capitalize'
                            },
                            split: {
                                display: 'flex',
                                marginRight: '-10px',
                                paddingTop: '11px'
                            },
                            third: {
                                flex: '1',
                                paddingRight: '10px'
                            }
                        }
                    },
                    d
                )
            ),
            p = function (e, r) {
                e.hex
                    ? o.FX(e.hex) &&
                      n(
                          {
                              hex: e.hex,
                              source: 'hex'
                          },
                          r
                      )
                    : (e.r || e.g || e.b) &&
                      n(
                          {
                              r: e.r || u.r,
                              g: e.g || u.g,
                              b: e.b || u.b,
                              source: 'rgb'
                          },
                          r
                      );
            };
        return i.createElement(
            l.xZ,
            { styles: d },
            i.createElement(
                'div',
                {
                    style: h.material,
                    className: 'material-picker ' + _
                },
                i.createElement(l.Vm, {
                    style: {
                        wrap: h.HEXwrap,
                        input: h.HEXinput,
                        label: h.HEXlabel
                    },
                    label: 'hex',
                    value: r,
                    onChange: p
                }),
                i.createElement(
                    'div',
                    {
                        style: h.split,
                        className: 'flexbox-fix'
                    },
                    i.createElement(
                        'div',
                        { style: h.third },
                        i.createElement(l.Vm, {
                            style: {
                                wrap: h.RGBwrap,
                                input: h.RGBinput,
                                label: h.RGBlabel
                            },
                            label: 'r',
                            value: u.r,
                            onChange: p
                        })
                    ),
                    i.createElement(
                        'div',
                        { style: h.third },
                        i.createElement(l.Vm, {
                            style: {
                                wrap: h.RGBwrap,
                                input: h.RGBinput,
                                label: h.RGBlabel
                            },
                            label: 'g',
                            value: u.g,
                            onChange: p
                        })
                    ),
                    i.createElement(
                        'div',
                        { style: h.third },
                        i.createElement(l.Vm, {
                            style: {
                                wrap: h.RGBwrap,
                                input: h.RGBinput,
                                label: h.RGBlabel
                            },
                            label: 'b',
                            value: u.b,
                            onChange: p
                        })
                    )
                )
            )
        );
    };
(0, l.t1)(u);
