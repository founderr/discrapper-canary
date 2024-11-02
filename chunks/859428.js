n(47120);
var i = n(200651),
    r = n(192379),
    l = n(120356),
    a = n.n(l),
    o = n(442837),
    s = n(481060),
    c = n(749210),
    u = n(703656),
    d = n(430824),
    m = n(914010),
    f = n(900849),
    h = n(41776),
    p = n(981631),
    g = n(388032),
    _ = n(331781),
    C = n(250812);
t.Z = () => {
    let e = (0, o.e7)([m.Z], () => m.Z.getGuildId(), []),
        t = (0, o.e7)([d.Z], () => d.Z.getGuild(e), [e]),
        n = (0, o.e7)([h.Z], () => h.Z.getHistorySnapshot(), []),
        [l, E] = r.useState(!1);
    if (null == t) return null;
    let I = async () => {
        E(!0);
        try {
            f.mT(t.id), await c.Z.joinGuild(t.id, { source: p.vtS.NOTICE_BAR });
        } catch {
            E(!1);
        }
    };
    return (0, i.jsxs)('div', {
        className: a()(_.notice, C.notice),
        children: [
            (0, i.jsxs)(s.Button, {
                look: s.Button.Looks.OUTLINED,
                color: s.Button.Colors.WHITE,
                size: s.Button.Sizes.NONE,
                className: a()(_.button, _.back),
                innerClassName: _.iconButton,
                onClick: () => {
                    let e = (0, u.s1)();
                    null != n && null != n.location ? (0, u.dL)({ ...n.location }) : e.goBack();
                },
                children: [
                    (0, i.jsx)(s.ArrowSmallLeftIcon, {
                        size: 'xs',
                        color: 'currentColor',
                        className: _.arrow
                    }),
                    g.intl.string(g.t['13/7kZ'])
                ]
            }),
            (0, i.jsx)(s.Text, {
                className: _.header,
                variant: 'text-sm/normal',
                children: g.intl.string(g.t['N/y2WF'])
            }),
            (0, i.jsx)(s.Button, {
                className: _.button,
                look: s.Button.Looks.OUTLINED,
                color: s.Button.Colors.WHITE,
                size: s.Button.Sizes.NONE,
                submitting: l,
                onClick: I,
                children: g.intl.format(g.t.uHN7n5, { guild: t.name })
            })
        ]
    });
};
