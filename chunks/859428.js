var r = n(47120);
var i = n(735250),
    a = n(470079),
    o = n(120356),
    s = n.n(o),
    l = n(442837),
    u = n(481060),
    c = n(749210),
    d = n(703656),
    _ = n(430824),
    E = n(914010),
    f = n(900849),
    h = n(41776),
    p = n(981631),
    m = n(689938),
    I = n(331781),
    T = n(250812);
let g = () => {
    let e = (0, l.e7)([E.Z], () => E.Z.getGuildId(), []),
        t = (0, l.e7)([_.Z], () => _.Z.getGuild(e), [e]),
        n = (0, l.e7)([h.Z], () => h.Z.getHistorySnapshot(), []),
        [r, o] = a.useState(!1);
    if (null == t) return null;
    let g = () => {
            let e = (0, d.s1)();
            null != n && null != n.location ? (0, d.dL)({ ...n.location }) : e.goBack();
        },
        S = async () => {
            o(!0);
            try {
                f.mT(t.id), await c.Z.joinGuild(t.id, { source: p.vtS.NOTICE_BAR });
            } catch {
                o(!1);
            }
        };
    return (0, i.jsxs)('div', {
        className: s()(I.notice, T.notice),
        children: [
            (0, i.jsxs)(u.Button, {
                look: u.Button.Looks.OUTLINED,
                color: u.Button.Colors.WHITE,
                size: u.Button.Sizes.NONE,
                className: s()(I.button, I.back),
                innerClassName: I.iconButton,
                onClick: g,
                children: [
                    (0, i.jsx)(u.ArrowSmallLeftIcon, {
                        size: 'xs',
                        color: 'currentColor',
                        className: I.arrow
                    }),
                    m.Z.Messages.BACK
                ]
            }),
            (0, i.jsx)(u.Text, {
                className: I.header,
                variant: 'text-sm/normal',
                children: m.Z.Messages.LURKER_MODE_NAG_BAR_HEADER
            }),
            (0, i.jsx)(u.Button, {
                className: I.button,
                look: u.Button.Looks.OUTLINED,
                color: u.Button.Colors.WHITE,
                size: u.Button.Sizes.NONE,
                submitting: r,
                onClick: S,
                children: m.Z.Messages.LURKER_MODE_NAG_BAR_BUTTON.format({ guild: t.name })
            })
        ]
    });
};
t.Z = g;
