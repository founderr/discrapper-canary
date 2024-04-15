"use strict";
i.r(t), i.d(t, {
  default: function() {
    return N
  }
}), i("47120");
var s = i("735250"),
  n = i("470079"),
  a = i("442837"),
  l = i("481060"),
  u = i("58540"),
  o = i("931240"),
  d = i("353093"),
  r = i("314897"),
  c = i("271383"),
  S = i("430824"),
  f = i("496675"),
  E = i("594174"),
  g = i("981631"),
  _ = i("689938");

function N(e) {
  let {
    guildId: t,
    userId: i,
    analyticsLocation: N,
    analyticsLocations: M,
    context: I,
    icon: h
  } = e, A = (0, a.useStateFromStores)([S.default], () => S.default.getGuild(t), [t]), L = (0, a.useStateFromStores)([r.default], () => r.default.getId()), T = (0, a.useStateFromStores)([E.default], () => E.default.getUser(i)), p = (0, a.useStateFromStores)([c.default], () => c.default.isGuestOrLurker(t, i), [t, i]), m = n.useMemo(() => ({
    [t]: [i]
  }), [t, i]), O = (0, d.isGuildAClan)(A);
  (0, u.useSubscribeGuildMembers)(m);
  let G = I === g.AppContext.POPOUT,
    b = L === i,
    [x, C] = (0, a.useStateFromStoresArray)([f.default], () => {
      if (null == A) return [!1, !1];
      let e = L === i && (f.default.can(g.Permissions.CHANGE_NICKNAME, A) || f.default.can(g.Permissions.MANAGE_NICKNAMES, A));
      return [e, f.default.canManageUser(g.Permissions.MANAGE_NICKNAMES, i, A)]
    }, [L, i, A]),
    U = n.useCallback((e, t) => () => {
      (0, o.adoptClanIdentity)(e, t)
    }, []);
  return null != A && !G && (x || C || b) && null != T && !p && O && T.isStaff() ? (0, s.jsxs)(s.Fragment, {
    children: [(0, s.jsx)(l.MenuItem, {
      id: "adopt-clan-identity",
      label: _.default.Messages.CLAN_ADOPT_CLAN_IDENTITY,
      icon: h,
      action: U(t, !0)
    }), (0, s.jsx)(l.MenuItem, {
      id: "deadopt-clan-identity",
      label: _.default.Messages.CLAN_CLEAR_CLAN_IDENTITY,
      icon: h,
      action: U(null, null)
    })]
  }) : null
}