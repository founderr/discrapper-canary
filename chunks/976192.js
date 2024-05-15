"use strict";
l.r(t), l.d(t, {
  default: function() {
    return g
  }
});
var a = l("735250"),
  u = l("470079"),
  n = l("442837"),
  s = l("481060"),
  d = l("58540"),
  r = l("300284"),
  i = l("484459"),
  o = l("314897"),
  f = l("271383"),
  c = l("430824"),
  E = l("496675"),
  M = l("594174"),
  S = l("981631"),
  m = l("689938"),
  _ = l("104288");

function g(e) {
  let {
    guildId: t,
    userId: g,
    analyticsLocation: R,
    analyticsLocations: A,
    context: C,
    icon: N
  } = e, I = c.default.getGuild(t), O = o.default.getId(), h = (0, n.useStateFromStores)([M.default], () => M.default.getUser(g)), T = (0, n.useStateFromStores)([f.default], () => f.default.isGuestOrLurker(t, g), [t, g]);
  (0, n.useStateFromStores)([E.default], () => E.default.getGuildVersion(t), [t]);
  let p = u.useMemo(() => ({
    [t]: [g]
  }), [t, g]);
  (0, d.useSubscribeGuildMembers)(p);
  let v = C === S.AppContext.POPOUT,
    U = (0, r.default)({
      guild: I,
      analyticsLocation: R
    });
  if (null == I || v) return null;
  let b = O === g && (E.default.can(S.Permissions.CHANGE_NICKNAME, I) || E.default.can(S.Permissions.MANAGE_NICKNAMES, I)),
    x = O === g,
    F = E.default.canManageUser(S.Permissions.MANAGE_NICKNAMES, g, I);
  if (!(b || F || x) || null == h || T) return null;
  let j = I.hasFeature(S.GuildFeatures.HUB) ? m.default.Messages.HUB_EDIT_PROFILE : m.default.Messages.CHANGE_IDENTITY,
    L = x ? j : m.default.Messages.CHANGE_NICKNAME;
  return (0, a.jsx)(s.MenuItem, {
    id: "change-nickname",
    label: (0, a.jsx)("div", {
      className: _.labelWrapper,
      children: (0, a.jsx)("span", {
        className: _.label,
        children: L
      })
    }),
    icon: N,
    action: () => {
      x ? ((0, i.default)(h.id, h.getAvatarURL(t, 80), {
        guildId: t
      }), U()) : (0, s.openModalLazy)(async () => {
        let {
          default: e
        } = await Promise.all([l.e("99387"), l.e("17712")]).then(l.bind(l, "620021"));
        return l => (0, a.jsx)(e, {
          ...l,
          guildId: t,
          user: h,
          analyticsSource: R,
          analyticsLocations: A
        })
      })
    }
  })
}