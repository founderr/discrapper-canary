t.d(n, {
  Z: function() {
    return m
  }
});
var l = t(735250),
  i = t(470079),
  a = t(442837),
  r = t(481060),
  u = t(58540),
  s = t(40851),
  d = t(300284),
  o = t(484459),
  c = t(314897),
  Z = t(271383),
  E = t(430824),
  M = t(496675),
  f = t(594174),
  _ = t(981631),
  g = t(689938),
  I = t(800784);

function m(e) {
  let {
    guildId: n,
    userId: m,
    analyticsLocation: R,
    analyticsLocations: N,
    context: C,
    icon: T
  } = e, v = E.Z.getGuild(n), A = c.default.getId(), O = (0, a.e7)([f.default], () => f.default.getUser(m)), x = (0, a.e7)([Z.ZP], () => Z.ZP.isGuestOrLurker(n, m), [n, m]);
  (0, a.e7)([M.Z], () => M.Z.getGuildVersion(n), [n]);
  let h = i.useMemo(() => ({
    [n]: [m]
  }), [n, m]);
  (0, u.$)(h);
  let b = C === _.IlC.POPOUT,
    P = (0, d.Z)({
      guild: v,
      analyticsLocation: R
    }),
    S = (0, s.Aq)();
  if (null == v || b) return null;
  let p = A === m && (M.Z.can(_.Plq.CHANGE_NICKNAME, v) || M.Z.can(_.Plq.MANAGE_NICKNAMES, v)),
    U = A === m,
    j = M.Z.canManageUser(_.Plq.MANAGE_NICKNAMES, m, v);
  if (!(p || j || U) || null == O || x) return null;
  let L = v.hasFeature(_.oNc.HUB) ? g.Z.Messages.HUB_EDIT_PROFILE : g.Z.Messages.CHANGE_IDENTITY,
    D = U ? L : g.Z.Messages.CHANGE_NICKNAME;
  return (0, l.jsx)(r.MenuItem, {
    id: "change-nickname",
    label: (0, l.jsx)("div", {
      className: I.labelWrapper,
      children: (0, l.jsx)("span", {
        className: I.label,
        children: D
      })
    }),
    icon: T,
    action: () => {
      U ? ((0, o.Z)(O.id, O.getAvatarURL(n, 80), {
        guildId: n
      }), P(), S.dispatch(_.CkL.POPOUT_CLOSE)) : (0, r.openModalLazy)(async () => {
        let {
          default: e
        } = await t.e("17712").then(t.bind(t, 620021));
        return t => (0, l.jsx)(e, {
          ...t,
          guildId: n,
          user: O,
          analyticsSource: R,
          analyticsLocations: N
        })
      })
    }
  })
}