var r = n(653041);
var i = n(47120);
var a = n(735250);
n(470079);
var o = n(120356),
    s = n.n(o),
    l = n(266067),
    u = n(442837),
    c = n(481060),
    d = n(430824),
    _ = n(914010),
    E = n(693546),
    f = n(305325),
    h = n(246364),
    p = n(937111),
    m = n(981631),
    I = n(176505),
    T = n(689938),
    g = n(373359),
    S = n(250812);
let A = () => {
    var e, t;
    let r = (0, u.e7)([_.Z], () => _.Z.getGuildId(), []),
        i = (0, u.e7)([d.Z], () => d.Z.getGuild(r), [r]),
        o = (0, u.e7)([p.Z], () => (null != r ? p.Z.getRequest(r) : null), [r]),
        A = (0, l.TH)(),
        v = (null === (e = (0, l.LX)(A.pathname, m.Z5c.CHANNEL(null == i ? void 0 : i.id, I.oC.GUILD_ONBOARDING))) || void 0 === e ? void 0 : e.isExact) === !0;
    if (null == i || !i.hasVerificationGate() || v) return null;
    let N = () => {
            (0, f.hk)(i.id);
        },
        O = () => {
            (0, c.openModal)((e) =>
                (0, a.jsx)(c.ConfirmModal, {
                    header: T.Z.Messages.MODIFY_FOLLOWED_NEWS_HEADER,
                    confirmText: T.Z.Messages.CONFIRM,
                    cancelText: T.Z.Messages.CANCEL,
                    onConfirm: () => E.Z.removeGuildJoinRequest(i.id),
                    confirmButtonColor: c.Button.Colors.BRAND,
                    ...e,
                    children: (0, a.jsx)(c.Text, {
                        variant: 'text-md/normal',
                        children: T.Z.Messages.MEMBER_VERIFICATION_CANCEL_APPLICATION_SUBTITLE
                    })
                })
            );
        },
        R = () => {
            (0, c.openModalLazy)(async () => {
                let { default: e } = await n.e('3378').then(n.bind(n, 76075));
                return (t) =>
                    (0, a.jsx)(e, {
                        guildId: i.id,
                        ...t
                    });
            });
        },
        C = null !== (t = null == o ? void 0 : o.applicationStatus) && void 0 !== t ? t : h.wB.STARTED,
        y = null,
        L = null,
        b = null,
        D = [g.notice, S.notice];
    switch (C) {
        case h.wB.SUBMITTED:
            (y = T.Z.Messages.MEMBER_VERIFICATION_APPLICATION_CONFIRMATION_TITLE), (L = T.Z.Messages.MEMBER_VERIFICATION_CANCEL_APPLICATION), (b = O);
            break;
        case h.wB.REJECTED:
            (y = T.Z.Messages.MEMBER_VERIFICATION_REJECTED_TITLE), (L = T.Z.Messages.MEMBER_VERIFICATION_LEARN_MORE), (b = R), D.push(g.error);
            break;
        default:
            (y = T.Z.Messages.MEMBER_VERIFICATION_NOTICE_TEXT), (L = T.Z.Messages.MEMBER_VERIFICATION_NOTICE_CTA), (b = N);
    }
    return (0, a.jsxs)('div', {
        className: s()(...D),
        children: [
            (0, a.jsx)(c.Text, {
                className: g.header,
                variant: 'text-sm/normal',
                children: y
            }),
            (0, a.jsx)(c.Button, {
                className: g.button,
                look: c.Button.Looks.OUTLINED,
                color: c.Button.Colors.WHITE,
                size: c.Button.Sizes.NONE,
                onClick: b,
                children: L
            })
        ]
    });
};
t.Z = A;
