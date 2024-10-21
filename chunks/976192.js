l.d(n, {
    Z: function () {
        return p;
    }
});
var i = l(200651),
    a = l(192379),
    r = l(442837),
    s = l(481060),
    d = l(58540),
    u = l(40851),
    t = l(300284),
    c = l(484459),
    o = l(314897),
    Z = l(271383),
    E = l(430824),
    M = l(496675),
    _ = l(594174),
    N = l(981631),
    C = l(689938),
    h = l(745974);
function p(e) {
    let { guildId: n, userId: p, analyticsLocation: I, analyticsLocations: U, context: A, icon: g } = e,
        G = E.Z.getGuild(n),
        x = o.default.getId(),
        T = (0, r.e7)([_.default], () => _.default.getUser(p)),
        f = (0, r.e7)([Z.ZP], () => Z.ZP.isGuestOrLurker(n, p), [n, p]);
    (0, r.e7)([M.Z], () => M.Z.getGuildVersion(n), [n]);
    let b = a.useMemo(() => ({ [n]: [p] }), [n, p]);
    (0, d.$)(b);
    let j = A === N.IlC.POPOUT,
        P = (0, t.Z)({
            guild: G,
            analyticsLocation: I
        }),
        O = (0, u.Aq)();
    if (null == G || j) return null;
    let S = x === p && (M.Z.can(N.Plq.CHANGE_NICKNAME, G) || M.Z.can(N.Plq.MANAGE_NICKNAMES, G)),
        L = x === p,
        v = M.Z.canManageUser(N.Plq.MANAGE_NICKNAMES, p, G);
    if (!(S || v || L) || null == T || f) return null;
    let R = G.hasFeature(N.oNc.HUB) ? C.Z.Messages.HUB_EDIT_PROFILE : C.Z.Messages.CHANGE_IDENTITY,
        m = L ? R : C.Z.Messages.CHANGE_NICKNAME;
    return (0, i.jsx)(s.MenuItem, {
        id: 'change-nickname',
        label: (0, i.jsx)('div', {
            className: h.labelWrapper,
            children: (0, i.jsx)('span', {
                className: h.label,
                children: m
            })
        }),
        icon: g,
        action: () => {
            L
                ? ((0, c.Z)(T.id, T.getAvatarURL(n, 80), { guildId: n }), P(), O.dispatch(N.CkL.POPOUT_CLOSE), (0, s.closeAllModals)())
                : (0, s.openModalLazy)(async () => {
                      let { default: e } = await l.e('17712').then(l.bind(l, 620021));
                      return (l) =>
                          (0, i.jsx)(e, {
                              ...l,
                              guildId: n,
                              user: T,
                              analyticsSource: I,
                              analyticsLocations: U
                          });
                  });
        }
    });
}
