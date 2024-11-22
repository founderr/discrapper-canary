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
    _ = n(176505),
    g = n(388032),
    E = n(373359),
    C = n(250812);
t.Z = () => {
    var e, t;
    let r = (0, o.e7)([d.Z], () => d.Z.getGuildId(), []),
        I = (0, o.e7)([c.Z], () => c.Z.getGuild(r), [r]),
        x = (0, o.e7)([f.Z], () => (null != r ? f.Z.getRequest(r) : null), [r]),
        N = (0, a.TH)(),
        v = (null === (e = (0, a.LX)(N.pathname, p.Z5c.CHANNEL(null == I ? void 0 : I.id, _.oC.GUILD_ONBOARDING))) || void 0 === e ? void 0 : e.isExact) === !0;
    if (null == I || !I.hasVerificationGate() || v) return null;
    let T = null !== (t = null == x ? void 0 : x.applicationStatus) && void 0 !== t ? t : h.wB.STARTED,
        S = null,
        A = null,
        b = null,
        j = [E.notice, C.notice];
    switch (T) {
        case h.wB.SUBMITTED:
            (S = g.intl.string(g.t['5iLvS0'])),
                (A = g.intl.string(g.t.mqtdmZ)),
                (b = () => {
                    (0, s.openModal)((e) =>
                        (0, i.jsx)(s.ConfirmModal, {
                            header: g.intl.string(g.t.aIz1oa),
                            confirmText: g.intl.string(g.t['cY+Ooa']),
                            cancelText: g.intl.string(g.t['ETE/oK']),
                            onConfirm: () => u.Z.removeGuildJoinRequest(I.id),
                            confirmButtonColor: s.Button.Colors.BRAND,
                            ...e,
                            children: (0, i.jsx)(s.Text, {
                                variant: 'text-md/normal',
                                children: g.intl.string(g.t['13tjTU'])
                            })
                        })
                    );
                });
            break;
        case h.wB.REJECTED:
            (S = g.intl.string(g.t.lk30cX)),
                (A = g.intl.string(g.t['8RrsHh'])),
                (b = () => {
                    (0, s.openModalLazy)(async () => {
                        let { default: e } = await n.e('3378').then(n.bind(n, 76075));
                        return (t) =>
                            (0, i.jsx)(e, {
                                guildId: I.id,
                                ...t
                            });
                    });
                }),
                j.push(E.error);
            break;
        default:
            (S = g.intl.string(g.t.G5YKXF)),
                (A = g.intl.string(g.t['r8/DT0'])),
                (b = () => {
                    (0, m.hk)(I.id);
                });
    }
    return (0, i.jsxs)('div', {
        className: l()(...j),
        children: [
            (0, i.jsx)(s.Text, {
                className: E.header,
                variant: 'text-sm/normal',
                children: S
            }),
            (0, i.jsx)(s.Button, {
                className: E.button,
                look: s.Button.Looks.OUTLINED,
                color: s.Button.Colors.WHITE,
                size: s.Button.Sizes.NONE,
                onClick: b,
                children: A
            })
        ]
    });
};
