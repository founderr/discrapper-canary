"use strict";
l.r(t), l.d(t, {
  default: function() {
    return I
  }
});
var a = l("37983"),
  n = l("884691"),
  u = l("446674"),
  i = l("77078"),
  s = l("750560"),
  d = l("38766"),
  r = l("506885"),
  o = l("271938"),
  c = l("26989"),
  f = l("305961"),
  m = l("957255"),
  M = l("697218"),
  E = l("49111"),
  S = l("782340"),
  g = l("576398");

function I(e) {
  let {
    guildId: t,
    userId: I,
    analyticsLocation: C,
    analyticsLocations: _,
    context: v,
    icon: N
  } = e, A = f.default.getGuild(t), O = o.default.getId(), R = (0, u.useStateFromStores)([M.default], () => M.default.getUser(I)), b = (0, u.useStateFromStores)([c.default], () => c.default.isGuestOrLurker(t, I), [t, I]);
  (0, u.useStateFromStores)([m.default], () => m.default.getGuildVersion(t), [t]);
  let h = n.useMemo(() => ({
    [t]: [I]
  }), [t, I]);
  (0, s.useSubscribeGuildMembers)(h);
  let L = v === E.AppContext.POPOUT,
    T = (0, d.default)({
      guild: A,
      analyticsLocation: C
    });
  if (null == A || L) return null;
  let p = O === I && (m.default.can(E.Permissions.CHANGE_NICKNAME, A) || m.default.can(E.Permissions.MANAGE_NICKNAMES, A)),
    F = O === I,
    U = m.default.canManageUser(E.Permissions.MANAGE_NICKNAMES, I, A);
  if (!(p || U || F) || null == R || b) return null;
  let x = A.hasFeature(E.GuildFeatures.HUB),
    D = x ? S.default.Messages.HUB_EDIT_PROFILE : S.default.Messages.CHANGE_IDENTITY,
    P = F ? D : S.default.Messages.CHANGE_NICKNAME;
  return (0, a.jsx)(i.MenuItem, {
    id: "change-nickname",
    label: (0, a.jsx)("div", {
      className: g.labelWrapper,
      children: (0, a.jsx)("span", {
        className: g.label,
        children: P
      })
    }),
    icon: N,
    action: () => {
      F ? ((0, r.default)(R.id, R.getAvatarURL(t, 80), {
        guildId: t
      }), T()) : (0, i.openModalLazy)(async () => {
        let {
          default: e
        } = await l.el("59709").then(l.bind(l, "59709"));
        return l => (0, a.jsx)(e, {
          ...l,
          guildId: t,
          user: R,
          analyticsSource: C,
          analyticsLocations: _
        })
      })
    }
  })
}