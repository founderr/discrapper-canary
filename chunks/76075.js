o.r(e);
var a = o(200651);
o(192379);
var t = o(442837),
    i = o(481060),
    l = o(100527),
    s = o(970606),
    r = o(313201),
    c = o(271383),
    u = o(430824),
    d = o(594174),
    f = o(693546),
    _ = o(305325),
    m = o(937111),
    b = o(702286),
    I = o(523924),
    C = o(981631),
    E = o(689938);
e.default = function (n) {
    let { guildId: e, transitionState: o, ...R } = n,
        N = (0, r.Dt)(),
        p = (0, t.e7)([m.Z], () => m.Z.getRequest(e), [e]),
        A = (0, t.e7)([u.Z], () => u.Z.getGuild(e), [e]),
        g = (0, t.e7)([d.default], () => {
            var n;
            return null === (n = d.default.getCurrentUser()) || void 0 === n ? void 0 : n.id;
        }),
        M = (0, t.e7)([c.ZP], () => (null != g ? c.ZP.getMember(e, g) : null), [g, e]),
        h = async () => {
            var n;
            if (
                (null !== (n = null == A ? void 0 : A.hasFeature(C.oNc.CLAN)) &&
                    void 0 !== n &&
                    n &&
                    (0, s.Vr)({
                        guildId: e,
                        source: l.Z.CLAN_REAPPLY
                    }),
                null == A ? void 0 : A.hasFeature(C.oNc.PREVIEW_ENABLED))
            ) {
                try {
                    await f.Z.removeGuildJoinRequest(e);
                } catch (n) {
                    throw n;
                }
                R.onClose(), (0, _.hk)(e);
            } else f.Z.resetGuildJoinRequest(e);
        };
    return (0, a.jsx)(i.ModalRoot, {
        size: i.ModalSize.DYNAMIC,
        transitionState: o,
        'aria-labelledby': N,
        children: (0, a.jsx)(I.Z, {
            ...R,
            headerId: N,
            reapplyText: E.Z.Messages.MEMBER_VERIFICATION_APPLICATION_REAPPLY,
            onReapply: h,
            confirmText: E.Z.Messages.OKAY,
            onWithdrawApplication: () => {
                R.onClose(), null == M && (0, b.Z)();
            },
            rejectionReason: null == p ? void 0 : p.rejectionReason,
            guild: A
        })
    });
};
