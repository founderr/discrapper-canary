n(653041), n(47120);
var i = n(735250);
n(470079);
var a = n(120356),
    s = n.n(a),
    r = n(266067),
    l = n(442837),
    o = n(481060),
    c = n(430824),
    u = n(914010),
    d = n(693546),
    _ = n(305325),
    E = n(246364),
    I = n(937111),
    m = n(981631),
    T = n(176505),
    f = n(689938),
    h = n(373359),
    N = n(250812);
t.Z = () => {
    var e, t;
    let a = (0, l.e7)([u.Z], () => u.Z.getGuildId(), []),
        p = (0, l.e7)([c.Z], () => c.Z.getGuild(a), [a]),
        C = (0, l.e7)([I.Z], () => (null != a ? I.Z.getRequest(a) : null), [a]),
        g = (0, r.TH)(),
        S = (null === (e = (0, r.LX)(g.pathname, m.Z5c.CHANNEL(null == p ? void 0 : p.id, T.oC.GUILD_ONBOARDING))) || void 0 === e ? void 0 : e.isExact) === !0;
    if (null == p || !p.hasVerificationGate() || S) return null;
    let A = null !== (t = null == C ? void 0 : C.applicationStatus) && void 0 !== t ? t : E.wB.STARTED,
        x = null,
        R = null,
        v = null,
        O = [h.notice, N.notice];
    switch (A) {
        case E.wB.SUBMITTED:
            (x = f.Z.Messages.MEMBER_VERIFICATION_APPLICATION_CONFIRMATION_TITLE),
                (R = f.Z.Messages.MEMBER_VERIFICATION_CANCEL_APPLICATION),
                (v = () => {
                    (0, o.openModal)((e) =>
                        (0, i.jsx)(o.ConfirmModal, {
                            header: f.Z.Messages.MODIFY_FOLLOWED_NEWS_HEADER,
                            confirmText: f.Z.Messages.CONFIRM,
                            cancelText: f.Z.Messages.CANCEL,
                            onConfirm: () => d.Z.removeGuildJoinRequest(p.id),
                            confirmButtonColor: o.Button.Colors.BRAND,
                            ...e,
                            children: (0, i.jsx)(o.Text, {
                                variant: 'text-md/normal',
                                children: f.Z.Messages.MEMBER_VERIFICATION_CANCEL_APPLICATION_SUBTITLE
                            })
                        })
                    );
                });
            break;
        case E.wB.REJECTED:
            (x = f.Z.Messages.MEMBER_VERIFICATION_REJECTED_TITLE),
                (R = f.Z.Messages.MEMBER_VERIFICATION_LEARN_MORE),
                (v = () => {
                    (0, o.openModalLazy)(async () => {
                        let { default: e } = await n.e('3378').then(n.bind(n, 76075));
                        return (t) =>
                            (0, i.jsx)(e, {
                                guildId: p.id,
                                ...t
                            });
                    });
                }),
                O.push(h.error);
            break;
        default:
            (x = f.Z.Messages.MEMBER_VERIFICATION_NOTICE_TEXT),
                (R = f.Z.Messages.MEMBER_VERIFICATION_NOTICE_CTA),
                (v = () => {
                    (0, _.hk)(p.id);
                });
    }
    return (0, i.jsxs)('div', {
        className: s()(...O),
        children: [
            (0, i.jsx)(o.Text, {
                className: h.header,
                variant: 'text-sm/normal',
                children: x
            }),
            (0, i.jsx)(o.Button, {
                className: h.button,
                look: o.Button.Looks.OUTLINED,
                color: o.Button.Colors.WHITE,
                size: o.Button.Sizes.NONE,
                onClick: v,
                children: R
            })
        ]
    });
};
