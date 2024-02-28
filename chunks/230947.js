"use strict";
l.r(t), l.d(t, {
  default: function() {
    return g
  }
});
var a = l("37983"),
  n = l("884691"),
  i = l("446674"),
  u = l("77078"),
  d = l("750560"),
  s = l("38766"),
  r = l("506885"),
  o = l("271938"),
  c = l("26989"),
  f = l("305961"),
  E = l("957255"),
  M = l("697218"),
  S = l("49111"),
  m = l("782340"),
  I = l("576398");

function g(e) {
  let {
    guildId: t,
    userId: g,
    analyticsLocation: _,
    analyticsLocations: h,
    context: A,
    icon: C
  } = e, p = f.default.getGuild(t), N = o.default.getId(), T = (0, i.useStateFromStores)([M.default], () => M.default.getUser(g)), R = (0, i.useStateFromStores)([c.default], () => c.default.isGuestOrLurker(t, g), [t, g]);
  (0, i.useStateFromStores)([E.default], () => E.default.getGuildVersion(t), [t]);
  let O = n.useMemo(() => ({
    [t]: [g]
  }), [t, g]);
  (0, d.useSubscribeGuildMembers)(O);
  let b = A === S.AppContext.POPOUT,
    L = (0, s.default)({
      guild: p,
      analyticsLocation: _
    });
  if (null == p || b) return null;
  let v = N === g && (E.default.can(S.Permissions.CHANGE_NICKNAME, p) || E.default.can(S.Permissions.MANAGE_NICKNAMES, p)),
    D = N === g,
    y = E.default.canManageUser(S.Permissions.MANAGE_NICKNAMES, g, p);
  if (!(v || y || D) || null == T || R) return null;
  let G = p.hasFeature(S.GuildFeatures.HUB),
    P = G ? m.default.Messages.HUB_EDIT_PROFILE : m.default.Messages.CHANGE_IDENTITY,
    U = D ? P : m.default.Messages.CHANGE_NICKNAME;
  return (0, a.jsx)(u.MenuItem, {
    id: "change-nickname",
    label: (0, a.jsx)("div", {
      className: I.labelWrapper,
      children: (0, a.jsx)("span", {
        className: I.label,
        children: U
      })
    }),
    icon: C,
    action: () => {
      D ? ((0, r.default)(T.id, T.getAvatarURL(t, 80), {
        guildId: t
      }), L()) : (0, u.openModalLazy)(async () => {
        let {
          default: e
        } = await l.el("59709").then(l.bind(l, "59709"));
        return l => (0, a.jsx)(e, {
          ...l,
          guildId: t,
          user: T,
          analyticsSource: _,
          analyticsLocations: h
        })
      })
    }
  })
}