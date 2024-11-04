n.d(t, {
    Z: function () {
        return h;
    }
});
var i = n(200651);
n(192379);
var l = n(120356),
    r = n.n(l),
    s = n(442837),
    a = n(481060),
    o = n(607070),
    c = n(254238),
    u = n(388032),
    d = n(863748);
function h(e) {
    let { height: t } = e,
        l = (0, s.e7)([o.Z], () => o.Z.useReducedMotion);
    return (0, i.jsxs)('div', {
        className: d.root,
        children: [
            (0, i.jsx)(a.LottieAnimation, {
                importData: () =>
                    n
                        .e('70036')
                        .then(n.t.bind(n, 141923, 19))
                        .then((e) => {
                            let { default: t } = e;
                            return t;
                        }),
                shouldAnimate: !l,
                className: r()(d.art, { [d.hidden]: t <= 280 })
            }),
            (0, i.jsx)(a.Heading, {
                className: d.header,
                variant: 'heading-md/bold',
                children: u.intl.string(u.t['C+tj1d'])
            }),
            (0, i.jsx)(a.Text, {
                variant: 'text-md/normal',
                color: 'header-secondary',
                children: u.intl.format(u.t['nNHd//'], { onCancel: c.s6 })
            })
        ]
    });
}
