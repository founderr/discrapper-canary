t.d(e, {
    Z: function () {
        return m;
    }
});
var i = t(200651),
    l = t(192379),
    r = t(442837),
    u = t(481060),
    a = t(616780),
    d = t(40851),
    o = t(300284),
    s = t(484459),
    c = t(314897),
    f = t(271383),
    _ = t(430824),
    E = t(496675),
    p = t(594174),
    g = t(981631),
    h = t(388032),
    A = t(22675);
function m(n) {
    let { guildId: e, userId: m, analyticsLocation: M, analyticsLocations: I, context: Z, icon: T } = n,
        v = _.Z.getGuild(e),
        b = c.default.getId(),
        C = (0, r.e7)([p.default], () => p.default.getUser(m)),
        S = (0, r.e7)([f.ZP], () => f.ZP.isGuestOrLurker(e, m), [e, m]);
    (0, r.e7)([E.Z], () => E.Z.getGuildVersion(e), [e]);
    let x = l.useMemo(() => ({ [e]: [m] }), [e, m]);
    (0, a.$)(x);
    let N = Z === g.IlC.POPOUT,
        y = (0, o.Z)({
            guild: v,
            analyticsLocation: M
        }),
        O = (0, d.Aq)();
    if (null == v || N) return null;
    let P = b === m && (E.Z.can(g.Plq.CHANGE_NICKNAME, v) || E.Z.can(g.Plq.MANAGE_NICKNAMES, v)),
        U = b === m,
        D = E.Z.canManageUser(g.Plq.MANAGE_NICKNAMES, m, v);
    if (!(P || D || U) || null == C || S) return null;
    let R = v.hasFeature(g.oNc.HUB) ? h.intl.string(h.t['+MWrWl']) : h.intl.string(h.t['PKQB/P']),
        k = U ? R : h.intl.string(h.t.dilOFx);
    return (0, i.jsx)(u.MenuItem, {
        id: 'change-nickname',
        label: (0, i.jsx)('div', {
            className: A.labelWrapper,
            children: (0, i.jsx)('span', {
                className: A.label,
                children: k
            })
        }),
        icon: T,
        action: () => {
            U
                ? ((0, s.Z)(C.id, C.getAvatarURL(e, 80), { guildId: e }), y(), O.dispatch(g.CkL.POPOUT_CLOSE), (0, u.closeAllModals)())
                : (0, u.openModalLazy)(async () => {
                      let { default: n } = await t.e('17712').then(t.bind(t, 620021));
                      return (t) =>
                          (0, i.jsx)(n, {
                              ...t,
                              guildId: e,
                              user: C,
                              analyticsSource: M,
                              analyticsLocations: I
                          });
                  });
        }
    });
}
