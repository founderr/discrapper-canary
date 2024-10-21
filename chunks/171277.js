n.d(t, {
    Z: function () {
        return h;
    }
});
var i = n(200651);
n(192379);
var s = n(120356),
    a = n.n(s),
    l = n(442837),
    r = n(481060),
    o = n(607070),
    c = n(254238),
    u = n(689938),
    d = n(863748);
function h(e) {
    let { height: t } = e,
        s = (0, l.e7)([o.Z], () => o.Z.useReducedMotion);
    return (0, i.jsxs)('div', {
        className: d.root,
        children: [
            (0, i.jsx)(r.LottieAnimation, {
                importData: () =>
                    n
                        .e('70036')
                        .then(n.t.bind(n, 141923, 19))
                        .then((e) => {
                            let { default: t } = e;
                            return t;
                        }),
                shouldAnimate: !s,
                className: a()(d.art, { [d.hidden]: t <= 280 })
            }),
            (0, i.jsx)(r.Heading, {
                className: d.header,
                variant: 'heading-md/bold',
                children: u.Z.Messages.PLAYSTATION_TRANSFERRING
            }),
            (0, i.jsx)(r.Text, {
                variant: 'text-md/normal',
                color: 'header-secondary',
                children: u.Z.Messages.CONSOLE_TRANSFERRING_SUBTITLE.format({ onCancel: c.s6 })
            })
        ]
    });
}
