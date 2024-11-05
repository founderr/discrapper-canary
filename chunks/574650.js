n(653041), n(47120);
var i = n(200651);
n(192379);
var r = n(120356),
    l = n.n(r),
    a = n(512969),
    o = n(442837),
    s = n(481060),
    c = n(430824),
    d = n(914010),
    u = n(693546),
    m = n(305325),
    h = n(246364),
    f = n(937111),
    p = n(981631),
    g = n(176505),
    _ = n(388032),
    C = n(373359),
    E = n(250812);
t.Z = () => {
    var e, t;
    let r = (0, o.e7)([d.Z], () => d.Z.getGuildId(), []),
        I = (0, o.e7)([c.Z], () => c.Z.getGuild(r), [r]),
        x = (0, o.e7)([f.Z], () => (null != r ? f.Z.getRequest(r) : null), [r]),
        v = (0, a.TH)(),
        N = (null === (e = (0, a.LX)(v.pathname, p.Z5c.CHANNEL(null == I ? void 0 : I.id, g.oC.GUILD_ONBOARDING))) || void 0 === e ? void 0 : e.isExact) === !0;
    if (null == I || !I.hasVerificationGate() || N) return null;
    let T = null !== (t = null == x ? void 0 : x.applicationStatus) && void 0 !== t ? t : h.wB.STARTED,
        S = null,
        b = null,
        A = null,
        j = [C.notice, E.notice];
    switch (T) {
        case h.wB.SUBMITTED:
            (S = _.intl.string(_.t['5iLvS0'])),
                (b = _.intl.string(_.t.mqtdmZ)),
                (A = () => {
                    (0, s.openModal)((e) =>
                        (0, i.jsx)(s.ConfirmModal, {
                            header: _.intl.string(_.t.aIz1oa),
                            confirmText: _.intl.string(_.t['cY+Ooa']),
                            cancelText: _.intl.string(_.t['ETE/oK']),
                            onConfirm: () => u.Z.removeGuildJoinRequest(I.id),
                            confirmButtonColor: s.Button.Colors.BRAND,
                            ...e,
                            children: (0, i.jsx)(s.Text, {
                                variant: 'text-md/normal',
                                children: _.intl.string(_.t['13tjTU'])
                            })
                        })
                    );
                });
            break;
        case h.wB.REJECTED:
            (S = _.intl.string(_.t.lk30cX)),
                (b = _.intl.string(_.t['8RrsHh'])),
                (A = () => {
                    (0, s.openModalLazy)(async () => {
                        let { default: e } = await n.e('3378').then(n.bind(n, 76075));
                        return (t) =>
                            (0, i.jsx)(e, {
                                guildId: I.id,
                                ...t
                            });
                    });
                }),
                j.push(C.error);
            break;
        default:
            (S = _.intl.string(_.t.G5YKXF)),
                (b = _.intl.string(_.t['r8/DT0'])),
                (A = () => {
                    (0, m.hk)(I.id);
                });
    }
    return (0, i.jsxs)('div', {
        className: l()(...j),
        children: [
            (0, i.jsx)(s.Text, {
                className: C.header,
                variant: 'text-sm/normal',
                children: S
            }),
            (0, i.jsx)(s.Button, {
                className: C.button,
                look: s.Button.Looks.OUTLINED,
                color: s.Button.Colors.WHITE,
                size: s.Button.Sizes.NONE,
                onClick: A,
                children: b
            })
        ]
    });
};
