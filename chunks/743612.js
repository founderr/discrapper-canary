var s = n(200651);
n(192379);
var a = n(120356),
    r = n.n(a),
    i = n(481060),
    l = n(977341);
t.Z = (e) => {
    var t, n, a, o;
    let { title: c, shouldShowElement: _, cardVariantStyleInfo: d, description: E, titleClassName: u = '', subtitle: T = '', subtitleClassName: I } = e;
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsx)(i.Heading, {
                variant: 'heading-xl/extrabold',
                className: r()(l.cardHeading, u),
                children: c
            }),
            '' !== T &&
                (null == _ || _(null == d ? void 0 : d.subtitle)) &&
                (0, s.jsx)(s.Fragment, {
                    children: (0, s.jsxs)('div', {
                        className: I,
                        children: [
                            (0, s.jsx)(i.Text, {
                                variant: null !== (a = null == d ? void 0 : null === (t = d.subtitle) || void 0 === t ? void 0 : t.textVariant) && void 0 !== a ? a : 'text-sm/normal',
                                children: T
                            }),
                            null != E &&
                                (0, s.jsx)(i.Text, {
                                    variant: null !== (o = null == d ? void 0 : null === (n = d.description) || void 0 === n ? void 0 : n.textVariant) && void 0 !== o ? o : 'text-sm/normal',
                                    children: (0, s.jsxs)(s.Fragment, {
                                        children: [(0, s.jsx)('br', {}), E]
                                    })
                                })
                        ]
                    })
                })
        ]
    });
};
