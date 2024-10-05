n(653041), n(47120);
var i = n(735250);
n(470079);
var a = n(120356),
    s = n.n(a),
    l = n(266067),
    r = n(442837),
    o = n(481060),
    c = n(430824),
    d = n(914010),
    u = n(693546),
    _ = n(305325),
    E = n(246364),
    I = n(937111),
    m = n(981631),
    T = n(176505),
    N = n(689938),
    h = n(373359),
    C = n(250812);
t.Z = () => {
    var e, t;
    let a = (0, r.e7)([d.Z], () => d.Z.getGuildId(), []),
        p = (0, r.e7)([c.Z], () => c.Z.getGuild(a), [a]),
        f = (0, r.e7)([I.Z], () => (null != a ? I.Z.getRequest(a) : null), [a]),
        g = (0, l.TH)(),
        A = (null === (e = (0, l.LX)(g.pathname, m.Z5c.CHANNEL(null == p ? void 0 : p.id, T.oC.GUILD_ONBOARDING))) || void 0 === e ? void 0 : e.isExact) === !0;
    if (null == p || !p.hasVerificationGate() || A) return null;
    let S = null !== (t = null == f ? void 0 : f.applicationStatus) && void 0 !== t ? t : E.wB.STARTED,
        M = null,
        x = null,
        O = null,
        R = [h.notice, C.notice];
    switch (S) {
        case E.wB.SUBMITTED:
            (M = N.Z.Messages.MEMBER_VERIFICATION_APPLICATION_CONFIRMATION_TITLE),
                (x = N.Z.Messages.MEMBER_VERIFICATION_CANCEL_APPLICATION),
                (O = () => {
                    (0, o.openModal)((e) =>
                        (0, i.jsx)(o.ConfirmModal, {
                            header: N.Z.Messages.MODIFY_FOLLOWED_NEWS_HEADER,
                            confirmText: N.Z.Messages.CONFIRM,
                            cancelText: N.Z.Messages.CANCEL,
                            onConfirm: () => u.Z.removeGuildJoinRequest(p.id),
                            confirmButtonColor: o.Button.Colors.BRAND,
                            ...e,
                            children: (0, i.jsx)(o.Text, {
                                variant: 'text-md/normal',
                                children: N.Z.Messages.MEMBER_VERIFICATION_CANCEL_APPLICATION_SUBTITLE
                            })
                        })
                    );
                });
            break;
        case E.wB.REJECTED:
            (M = N.Z.Messages.MEMBER_VERIFICATION_REJECTED_TITLE),
                (x = N.Z.Messages.MEMBER_VERIFICATION_LEARN_MORE),
                (O = () => {
                    (0, o.openModalLazy)(async () => {
                        let { default: e } = await n.e('3378').then(n.bind(n, 76075));
                        return (t) =>
                            (0, i.jsx)(e, {
                                guildId: p.id,
                                ...t
                            });
                    });
                }),
                R.push(h.error);
            break;
        default:
            (M = N.Z.Messages.MEMBER_VERIFICATION_NOTICE_TEXT),
                (x = N.Z.Messages.MEMBER_VERIFICATION_NOTICE_CTA),
                (O = () => {
                    (0, _.hk)(p.id);
                });
    }
    return (0, i.jsxs)('div', {
        className: s()(...R),
        children: [
            (0, i.jsx)(o.Text, {
                className: h.header,
                variant: 'text-sm/normal',
                children: M
            }),
            (0, i.jsx)(o.Button, {
                className: h.button,
                look: o.Button.Looks.OUTLINED,
                color: o.Button.Colors.WHITE,
                size: o.Button.Sizes.NONE,
                onClick: O,
                children: x
            })
        ]
    });
};
