"use strict";
l.r(t), l.d(t, {
  default: function() {
    return g
  }
});
var a = l("735250"),
  n = l("470079"),
  u = l("442837"),
  d = l("481060"),
  s = l("58540"),
  r = l("300284"),
  i = l("484459"),
  o = l("314897"),
  f = l("271383"),
  c = l("430824"),
  E = l("496675"),
  m = l("594174"),
  M = l("981631"),
  S = l("689938"),
  _ = l("104288");

function g(e) {
  let {
    guildId: t,
    userId: g,
    analyticsLocation: I,
    analyticsLocations: C,
    context: R,
    icon: A
  } = e, N = c.default.getGuild(t), T = o.default.getId(), v = (0, u.useStateFromStores)([m.default], () => m.default.getUser(g)), h = (0, u.useStateFromStores)([f.default], () => f.default.isGuestOrLurker(t, g), [t, g]);
  (0, u.useStateFromStores)([E.default], () => E.default.getGuildVersion(t), [t]);
  let O = n.useMemo(() => ({
    [t]: [g]
  }), [t, g]);
  (0, s.useSubscribeGuildMembers)(O);
  let p = R === M.AppContext.POPOUT,
    x = (0, r.default)({
      guild: N,
      analyticsLocation: I
    });
  if (null == N || p) return null;
  let b = T === g && (E.default.can(M.Permissions.CHANGE_NICKNAME, N) || E.default.can(M.Permissions.MANAGE_NICKNAMES, N)),
    F = T === g,
    U = E.default.canManageUser(M.Permissions.MANAGE_NICKNAMES, g, N);
  if (!(b || U || F) || null == v || h) return null;
  let j = N.hasFeature(M.GuildFeatures.HUB) ? S.default.Messages.HUB_EDIT_PROFILE : S.default.Messages.CHANGE_IDENTITY,
    P = F ? j : S.default.Messages.CHANGE_NICKNAME;
  return (0, a.jsx)(d.MenuItem, {
    id: "change-nickname",
    label: (0, a.jsx)("div", {
      className: _.labelWrapper,
      children: (0, a.jsx)("span", {
        className: _.label,
        children: P
      })
    }),
    icon: A,
    action: () => {
      F ? ((0, i.default)(v.id, v.getAvatarURL(t, 80), {
        guildId: t
      }), x()) : (0, d.openModalLazy)(async () => {
        let {
          default: e
        } = await Promise.all([l.e("99387"), l.e("17712")]).then(l.bind(l, "620021"));
        return l => (0, a.jsx)(e, {
          ...l,
          guildId: t,
          user: v,
          analyticsSource: I,
          analyticsLocations: C
        })
      })
    }
  })
}