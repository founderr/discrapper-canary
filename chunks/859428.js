n(47120);
var i = n(735250),
    a = n(470079),
    s = n(120356),
    l = n.n(s),
    r = n(442837),
    o = n(481060),
    c = n(749210),
    d = n(703656),
    u = n(430824),
    _ = n(914010),
    E = n(900849),
    I = n(41776),
    m = n(981631),
    T = n(689938),
    N = n(331781),
    h = n(250812);
t.Z = () => {
    let e = (0, r.e7)([_.Z], () => _.Z.getGuildId(), []),
        t = (0, r.e7)([u.Z], () => u.Z.getGuild(e), [e]),
        n = (0, r.e7)([I.Z], () => I.Z.getHistorySnapshot(), []),
        [s, C] = a.useState(!1);
    if (null == t) return null;
    let f = async () => {
        C(!0);
        try {
            E.mT(t.id), await c.Z.joinGuild(t.id, { source: m.vtS.NOTICE_BAR });
        } catch {
            C(!1);
        }
    };
    return (0, i.jsxs)('div', {
        className: l()(N.notice, h.notice),
        children: [
            (0, i.jsxs)(o.Button, {
                look: o.Button.Looks.OUTLINED,
                color: o.Button.Colors.WHITE,
                size: o.Button.Sizes.NONE,
                className: l()(N.button, N.back),
                innerClassName: N.iconButton,
                onClick: () => {
                    let e = (0, d.s1)();
                    null != n && null != n.location ? (0, d.dL)({ ...n.location }) : e.goBack();
                },
                children: [
                    (0, i.jsx)(o.ArrowSmallLeftIcon, {
                        size: 'xs',
                        color: 'currentColor',
                        className: N.arrow
                    }),
                    T.Z.Messages.BACK
                ]
            }),
            (0, i.jsx)(o.Text, {
                className: N.header,
                variant: 'text-sm/normal',
                children: T.Z.Messages.LURKER_MODE_NAG_BAR_HEADER
            }),
            (0, i.jsx)(o.Button, {
                className: N.button,
                look: o.Button.Looks.OUTLINED,
                color: o.Button.Colors.WHITE,
                size: o.Button.Sizes.NONE,
                submitting: s,
                onClick: f,
                children: T.Z.Messages.LURKER_MODE_NAG_BAR_BUTTON.format({ guild: t.name })
            })
        ]
    });
};
