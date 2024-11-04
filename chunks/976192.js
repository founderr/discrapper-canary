l.d(n, {
    Z: function () {
        return N;
    }
});
var i = l(200651),
    t = l(192379),
    r = l(442837),
    a = l(481060),
    d = l(616780),
    u = l(40851),
    s = l(300284),
    c = l(484459),
    o = l(314897),
    Z = l(271383),
    M = l(430824),
    h = l(496675),
    p = l(594174),
    g = l(981631),
    C = l(388032),
    E = l(745974);
function N(e) {
    let { guildId: n, userId: N, analyticsLocation: x, analyticsLocations: _, context: f, icon: I } = e,
        U = M.Z.getGuild(n),
        G = o.default.getId(),
        P = (0, r.e7)([p.default], () => p.default.getUser(N)),
        b = (0, r.e7)([Z.ZP], () => Z.ZP.isGuestOrLurker(n, N), [n, N]);
    (0, r.e7)([h.Z], () => h.Z.getGuildVersion(n), [n]);
    let j = t.useMemo(() => ({ [n]: [N] }), [n, N]);
    (0, d.$)(j);
    let A = f === g.IlC.POPOUT,
        v = (0, s.Z)({
            guild: U,
            analyticsLocation: x
        }),
        T = (0, u.Aq)();
    if (null == U || A) return null;
    let m = G === N && (h.Z.can(g.Plq.CHANGE_NICKNAME, U) || h.Z.can(g.Plq.MANAGE_NICKNAMES, U)),
        y = G === N,
        L = h.Z.canManageUser(g.Plq.MANAGE_NICKNAMES, N, U);
    if (!(m || L || y) || null == P || b) return null;
    let O = U.hasFeature(g.oNc.HUB) ? C.intl.string(C.t['+MWrWl']) : C.intl.string(C.t['PKQB/P']),
        S = y ? O : C.intl.string(C.t.dilOFx);
    return (0, i.jsx)(a.MenuItem, {
        id: 'change-nickname',
        label: (0, i.jsx)('div', {
            className: E.labelWrapper,
            children: (0, i.jsx)('span', {
                className: E.label,
                children: S
            })
        }),
        icon: I,
        action: () => {
            y
                ? ((0, c.Z)(P.id, P.getAvatarURL(n, 80), { guildId: n }), v(), T.dispatch(g.CkL.POPOUT_CLOSE), (0, a.closeAllModals)())
                : (0, a.openModalLazy)(async () => {
                      let { default: e } = await l.e('17712').then(l.bind(l, 620021));
                      return (l) =>
                          (0, i.jsx)(e, {
                              ...l,
                              guildId: n,
                              user: P,
                              analyticsSource: x,
                              analyticsLocations: _
                          });
                  });
        }
    });
}
