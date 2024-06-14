"use strict";
l.r(t), l.d(t, {
  default: function() {
    return R
  }
});
var a = l("735250"),
  u = l("470079"),
  n = l("442837"),
  s = l("481060"),
  d = l("58540"),
  r = l("40851"),
  i = l("300284"),
  o = l("484459"),
  f = l("314897"),
  c = l("271383"),
  E = l("430824"),
  M = l("496675"),
  S = l("594174"),
  m = l("981631"),
  _ = l("689938"),
  g = l("104288");

function R(e) {
  let {
    guildId: t,
    userId: R,
    analyticsLocation: C,
    analyticsLocations: A,
    context: N,
    icon: O
  } = e, h = E.default.getGuild(t), p = f.default.getId(), I = (0, n.useStateFromStores)([S.default], () => S.default.getUser(R)), T = (0, n.useStateFromStores)([c.default], () => c.default.isGuestOrLurker(t, R), [t, R]);
  (0, n.useStateFromStores)([M.default], () => M.default.getGuildVersion(t), [t]);
  let U = u.useMemo(() => ({
    [t]: [R]
  }), [t, R]);
  (0, d.useSubscribeGuildMembers)(U);
  let v = N === m.AppContext.POPOUT,
    b = (0, i.default)({
      guild: h,
      analyticsLocation: C
    }),
    x = (0, r.useWindowDispatch)();
  if (null == h || v) return null;
  let F = p === R && (M.default.can(m.Permissions.CHANGE_NICKNAME, h) || M.default.can(m.Permissions.MANAGE_NICKNAMES, h)),
    j = p === R,
    L = M.default.canManageUser(m.Permissions.MANAGE_NICKNAMES, R, h);
  if (!(F || L || j) || null == I || T) return null;
  let P = h.hasFeature(m.GuildFeatures.HUB) ? _.default.Messages.HUB_EDIT_PROFILE : _.default.Messages.CHANGE_IDENTITY,
    G = j ? P : _.default.Messages.CHANGE_NICKNAME;
  return (0, a.jsx)(s.MenuItem, {
    id: "change-nickname",
    label: (0, a.jsx)("div", {
      className: g.labelWrapper,
      children: (0, a.jsx)("span", {
        className: g.label,
        children: G
      })
    }),
    icon: O,
    action: () => {
      j ? ((0, o.default)(I.id, I.getAvatarURL(t, 80), {
        guildId: t
      }), b(), x.dispatch(m.ComponentActions.POPOUT_CLOSE)) : (0, s.openModalLazy)(async () => {
        let {
          default: e
        } = await Promise.all([l.e("99387"), l.e("17712")]).then(l.bind(l, "620021"));
        return l => (0, a.jsx)(e, {
          ...l,
          guildId: t,
          user: I,
          analyticsSource: C,
          analyticsLocations: A
        })
      })
    }
  })
}