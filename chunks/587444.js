n.d(t, {
    Z: function () {
        return f;
    },
    u: function () {
        return m;
    }
});
var i = n(200651);
n(192379);
var r = n(120356),
    s = n.n(r),
    l = n(692547),
    a = n(481060),
    o = n(388905),
    c = n(600164),
    u = n(981631),
    d = n(388032),
    h = n(897927),
    g = n(652849),
    p = n(232186);
function m(e) {
    let { text: t, buttonCta: r, onClick: u } = e;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(o.Ee, { src: n(689411) }),
            (0, i.jsx)(o.Dx, {
                className: s()(p.marginTop20, p.marginBottom8, g.flexCenter),
                children: d.intl.string(d.t.eL5z0t)
            }),
            (0, i.jsx)(o.DK, {
                className: p.marginBottom40,
                children: d.intl.string(d.t['poAv6+'])
            }),
            (0, i.jsxs)(a.Card, {
                className: h.card,
                type: a.Card.Types.CUSTOM,
                children: [
                    (0, i.jsx)('img', {
                        alt: '',
                        className: h.cardAccentLeft,
                        src: n(70519)
                    }),
                    (0, i.jsx)('img', {
                        alt: '',
                        className: h.cardAccentRight,
                        src: n(806848)
                    }),
                    (0, i.jsxs)(c.Z, {
                        className: h.cardContents,
                        direction: c.Z.Direction.VERTICAL,
                        align: c.Z.Align.STRETCH,
                        grow: 0,
                        children: [
                            (0, i.jsx)(a.Text, {
                                tag: 'strong',
                                className: h.buttonTitle,
                                variant: 'text-md/normal',
                                style: { color: l.Z.unsafe_rawColors.PRIMARY_300.css },
                                children: t
                            }),
                            (0, i.jsx)(o.zx, {
                                className: h.button,
                                onClick: u,
                                children: r
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
function f(e) {
    let { text: t, buttonCta: n, theme: r = u.BRd.DARK, onClick: s } = e;
    return (0, i.jsx)(o.ZP, {
        theme: r,
        children: (0, i.jsx)(m, {
            text: t,
            buttonCta: n,
            onClick: s
        })
    });
}
