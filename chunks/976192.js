l.d(n, {
    Z: function () {
        return m;
    }
});
var t = l(735250),
    a = l(470079),
    i = l(442837),
    r = l(481060),
    s = l(58540),
    u = l(40851),
    d = l(300284),
    o = l(484459),
    c = l(314897),
    Z = l(271383),
    E = l(430824),
    M = l(496675),
    f = l(594174),
    _ = l(981631),
    g = l(689938),
    I = l(745974);
function m(e) {
    let { guildId: n, userId: m, analyticsLocation: R, analyticsLocations: N, context: C, icon: O } = e,
        A = E.Z.getGuild(n),
        T = c.default.getId(),
        h = (0, i.e7)([f.default], () => f.default.getUser(m)),
        v = (0, i.e7)([Z.ZP], () => Z.ZP.isGuestOrLurker(n, m), [n, m]);
    (0, i.e7)([M.Z], () => M.Z.getGuildVersion(n), [n]);
    let x = a.useMemo(() => ({ [n]: [m] }), [n, m]);
    (0, s.$)(x);
    let b = C === _.IlC.POPOUT,
        S = (0, d.Z)({
            guild: A,
            analyticsLocation: R
        }),
        p = (0, u.Aq)();
    if (null == A || b) return null;
    let P = T === m && (M.Z.can(_.Plq.CHANGE_NICKNAME, A) || M.Z.can(_.Plq.MANAGE_NICKNAMES, A)),
        U = T === m,
        j = M.Z.canManageUser(_.Plq.MANAGE_NICKNAMES, m, A);
    if (!(P || j || U) || null == h || v) return null;
    let L = A.hasFeature(_.oNc.HUB) ? g.Z.Messages.HUB_EDIT_PROFILE : g.Z.Messages.CHANGE_IDENTITY,
        D = U ? L : g.Z.Messages.CHANGE_NICKNAME;
    return (0, t.jsx)(r.MenuItem, {
        id: 'change-nickname',
        label: (0, t.jsx)('div', {
            className: I.labelWrapper,
            children: (0, t.jsx)('span', {
                className: I.label,
                children: D
            })
        }),
        icon: O,
        action: () => {
            U
                ? ((0, o.Z)(h.id, h.getAvatarURL(n, 80), { guildId: n }), S(), p.dispatch(_.CkL.POPOUT_CLOSE), (0, r.closeAllModals)())
                : (0, r.openModalLazy)(async () => {
                      let { default: e } = await l.e('17712').then(l.bind(l, 620021));
                      return (l) =>
                          (0, t.jsx)(e, {
                              ...l,
                              guildId: n,
                              user: h,
                              analyticsSource: R,
                              analyticsLocations: N
                          });
                  });
        }
    });
}
