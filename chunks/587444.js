n.d(t, {
    Z: function () {
        return p;
    },
    u: function () {
        return m;
    }
});
var i = n(200651);
n(192379);
var r = n(120356),
    s = n.n(r),
    a = n(692547),
    l = n(481060),
    o = n(388905),
    c = n(600164),
    u = n(981631),
    d = n(388032),
    h = n(684190),
    g = n(739017),
    f = n(113207);
function m(e) {
    let { text: t, buttonCta: r, onClick: u } = e;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(o.Ee, { src: n(689411) }),
            (0, i.jsx)(o.Dx, {
                className: s()(f.marginTop20, f.marginBottom8, g.flexCenter),
                children: d.intl.string(d.t.eL5z0t)
            }),
            (0, i.jsx)(o.DK, {
                className: f.marginBottom40,
                children: d.intl.string(d.t['poAv6+'])
            }),
            (0, i.jsxs)(l.Card, {
                className: h.card,
                type: l.Card.Types.CUSTOM,
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
                            (0, i.jsx)(l.Text, {
                                tag: 'strong',
                                className: h.buttonTitle,
                                variant: 'text-md/normal',
                                style: { color: a.Z.unsafe_rawColors.PRIMARY_300.css },
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
function p(e) {
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
