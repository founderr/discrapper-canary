n.d(t, {
    Z: function () {
        return g;
    },
    u: function () {
        return p;
    }
});
var s = n(735250);
n(470079);
var r = n(120356),
    i = n.n(r),
    a = n(692547),
    o = n(481060),
    l = n(388905),
    c = n(600164),
    u = n(981631),
    d = n(689938),
    _ = n(684190),
    h = n(739017),
    E = n(113207);
function p(e) {
    let { text: t, buttonCta: r, onClick: u } = e;
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsx)(l.Ee, { src: n(689411) }),
            (0, s.jsx)(l.Dx, {
                className: i()(E.marginTop20, E.marginBottom8, h.flexCenter),
                children: d.Z.Messages.DISCORD_DESC_SHORT
            }),
            (0, s.jsx)(l.DK, {
                className: E.marginBottom40,
                children: d.Z.Messages.DISCORD_DESC_LONG
            }),
            (0, s.jsxs)(o.Card, {
                className: _.card,
                type: o.Card.Types.CUSTOM,
                children: [
                    (0, s.jsx)('img', {
                        alt: '',
                        className: _.cardAccentLeft,
                        src: n(70519)
                    }),
                    (0, s.jsx)('img', {
                        alt: '',
                        className: _.cardAccentRight,
                        src: n(806848)
                    }),
                    (0, s.jsxs)(c.Z, {
                        className: _.cardContents,
                        direction: c.Z.Direction.VERTICAL,
                        align: c.Z.Align.STRETCH,
                        grow: 0,
                        children: [
                            (0, s.jsx)(o.Text, {
                                tag: 'strong',
                                className: _.buttonTitle,
                                variant: 'text-md/normal',
                                style: { color: a.Z.unsafe_rawColors.PRIMARY_300.css },
                                children: t
                            }),
                            (0, s.jsx)(l.zx, {
                                className: _.button,
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
function g(e) {
    let { text: t, buttonCta: n, theme: r = u.BRd.DARK, onClick: i } = e;
    return (0, s.jsx)(l.ZP, {
        theme: r,
        children: (0, s.jsx)(p, {
            text: t,
            buttonCta: n,
            onClick: i
        })
    });
}
