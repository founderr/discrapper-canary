"use strict";
a.r(t), a.d(t, {
  default: function() {
    return g
  }
});
var l = a("735250"),
  n = a("470079"),
  u = a("442837"),
  s = a("481060"),
  d = a("58540"),
  r = a("300284"),
  i = a("484459"),
  o = a("314897"),
  f = a("271383"),
  c = a("430824"),
  m = a("496675"),
  M = a("594174"),
  E = a("981631"),
  S = a("689938"),
  _ = a("18641");

function g(e) {
  let {
    guildId: t,
    userId: g,
    analyticsLocation: I,
    analyticsLocations: C,
    context: R,
    icon: N
  } = e, A = c.default.getGuild(t), T = o.default.getId(), v = (0, u.useStateFromStores)([M.default], () => M.default.getUser(g)), O = (0, u.useStateFromStores)([f.default], () => f.default.isGuestOrLurker(t, g), [t, g]);
  (0, u.useStateFromStores)([m.default], () => m.default.getGuildVersion(t), [t]);
  let h = n.useMemo(() => ({
    [t]: [g]
  }), [t, g]);
  (0, d.useSubscribeGuildMembers)(h);
  let x = R === E.AppContext.POPOUT,
    p = (0, r.default)({
      guild: A,
      analyticsLocation: I
    });
  if (null == A || x) return null;
  let F = T === g && (m.default.can(E.Permissions.CHANGE_NICKNAME, A) || m.default.can(E.Permissions.MANAGE_NICKNAMES, A)),
    b = T === g,
    U = m.default.canManageUser(E.Permissions.MANAGE_NICKNAMES, g, A);
  if (!(F || U || b) || null == v || O) return null;
  let L = A.hasFeature(E.GuildFeatures.HUB) ? S.default.Messages.HUB_EDIT_PROFILE : S.default.Messages.CHANGE_IDENTITY,
    j = b ? L : S.default.Messages.CHANGE_NICKNAME;
  return (0, l.jsx)(s.MenuItem, {
    id: "change-nickname",
    label: (0, l.jsx)("div", {
      className: _.labelWrapper,
      children: (0, l.jsx)("span", {
        className: _.label,
        children: j
      })
    }),
    icon: N,
    action: () => {
      b ? ((0, i.default)(v.id, v.getAvatarURL(t, 80), {
        guildId: t
      }), p()) : (0, s.openModalLazy)(async () => {
        let {
          default: e
        } = await Promise.all([a.e("99387"), a.e("17712")]).then(a.bind(a, "620021"));
        return a => (0, l.jsx)(e, {
          ...a,
          guildId: t,
          user: v,
          analyticsSource: I,
          analyticsLocations: C
        })
      })
    }
  })
}