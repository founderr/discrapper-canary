i.d(n, {
    Z: function () {
        return I;
    }
});
var t = i(200651),
    a = i(192379),
    l = i(442837),
    r = i(481060),
    o = i(616780),
    d = i(40851),
    u = i(300284),
    s = i(484459),
    c = i(314897),
    p = i(271383),
    f = i(430824),
    v = i(496675),
    _ = i(594174),
    g = i(981631),
    h = i(388032),
    A = i(745974);
function I(e) {
    let { guildId: n, userId: I, analyticsLocation: x, analyticsLocations: b, context: P, icon: m } = e,
        C = f.Z.getGuild(n),
        Z = c.default.getId(),
        y = (0, l.e7)([_.default], () => _.default.getUser(I)),
        k = (0, l.e7)([p.ZP], () => p.ZP.isGuestOrLurker(n, I), [n, I]);
    (0, l.e7)([v.Z], () => v.Z.getGuildVersion(n), [n]);
    let M = a.useMemo(() => ({ [n]: [I] }), [n, I]);
    (0, o.$)(M);
    let N = P === g.IlC.POPOUT,
        L = (0, u.Z)({
            guild: C,
            analyticsLocation: x
        }),
        w = (0, d.Aq)();
    if (null == C || N) return null;
    let O = Z === I && (v.Z.can(g.Plq.CHANGE_NICKNAME, C) || v.Z.can(g.Plq.MANAGE_NICKNAMES, C)),
        W = Z === I,
        G = v.Z.canManageUser(g.Plq.MANAGE_NICKNAMES, I, C);
    if (!(O || G || W) || null == y || k) return null;
    let T = C.hasFeature(g.oNc.HUB) ? h.intl.string(h.t['+MWrWl']) : h.intl.string(h.t['PKQB/P']),
        E = W ? T : h.intl.string(h.t.dilOFx);
    return (0, t.jsx)(r.MenuItem, {
        id: 'change-nickname',
        label: (0, t.jsx)('div', {
            className: A.labelWrapper,
            children: (0, t.jsx)('span', {
                className: A.label,
                children: E
            })
        }),
        icon: m,
        action: () => {
            W
                ? ((0, s.Z)(y.id, y.getAvatarURL(n, 80), { guildId: n }), L(), w.dispatch(g.CkL.POPOUT_CLOSE), (0, r.closeAllModals)())
                : (0, r.openModalLazy)(async () => {
                      let { default: e } = await i.e('17712').then(i.bind(i, 620021));
                      return (i) =>
                          (0, t.jsx)(e, {
                              ...i,
                              guildId: n,
                              user: y,
                              analyticsSource: x,
                              analyticsLocations: b
                          });
                  });
        }
    });
}
