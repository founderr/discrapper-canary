var i = r(192379),
    a = r(476400),
    s = r.n(a),
    o = r(723184),
    l = r(329022),
    u = r(829307),
    c = r(705513),
    d = r(877837),
    f = r(272991),
    _ = function (e) {
        var n = e.width,
            r = e.onChange,
            a = e.onSwatchHover,
            s = e.colors,
            c = e.hex,
            d = e.circleSize,
            _ = e.styles,
            h = void 0 === _ ? {} : _,
            p = e.circleSpacing,
            m = e.className,
            g = void 0 === m ? '' : m,
            E = (0, o.default)(
                (0, u.Z)(
                    {
                        default: {
                            card: {
                                width: n,
                                display: 'flex',
                                flexWrap: 'wrap',
                                marginRight: -p,
                                marginBottom: -p
                            }
                        }
                    },
                    h
                )
            ),
            v = function (e, n) {
                return r(
                    {
                        hex: e,
                        source: 'hex'
                    },
                    n
                );
            };
        return i.createElement(
            'div',
            {
                style: E.card,
                className: 'circle-picker ' + g
            },
            (0, l.Z)(s, function (e) {
                return i.createElement(f.Z, {
                    key: e,
                    color: e,
                    onClick: v,
                    onSwatchHover: a,
                    active: c === e.toLowerCase(),
                    circleSize: d,
                    circleSpacing: p
                });
            })
        );
    };
(_.propTypes = {
    width: s().oneOfType([s().string, s().number]),
    circleSize: s().number,
    circleSpacing: s().number,
    styles: s().object
}),
    (_.defaultProps = {
        width: 252,
        circleSize: 28,
        circleSpacing: 14,
        colors: [c.Q6['500'], c.iQ['500'], c.jk['500'], c.vq['500'], c.QN['500'], c.iN['500'], c.f7['500'], c.sl['500'], c.$C['500'], c.ek['500'], c.ZE['500'], c.LR['500'], c.er['500'], c.Dz['500'], c.$y['500'], c.bK['500'], c.P_['500'], c.BU['500']],
        styles: {}
    }),
    (0, d.t1)(_);
