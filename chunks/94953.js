"use strict";
i.r(t), i.d(t, {
  default: function() {
    return M
  }
}), i("47120");
var s = i("735250"),
  n = i("470079"),
  a = i("442837"),
  l = i("481060"),
  u = i("58540"),
  o = i("100527"),
  d = i("931240"),
  r = i("353093"),
  c = i("314897"),
  S = i("271383"),
  f = i("430824"),
  E = i("496675"),
  N = i("594174"),
  _ = i("981631"),
  g = i("689938");

function M(e) {
  let {
    guildId: t,
    userId: i,
    analyticsLocation: M,
    analyticsLocations: I,
    context: A,
    icon: h
  } = e, T = (0, a.useStateFromStores)([f.default], () => f.default.getGuild(t), [t]), L = (0, a.useStateFromStores)([c.default], () => c.default.getId()), m = (0, a.useStateFromStores)([N.default], () => N.default.getUser(i)), O = (0, a.useStateFromStores)([S.default], () => S.default.isGuestOrLurker(t, i), [t, i]), p = n.useMemo(() => ({
    [t]: [i]
  }), [t, i]), G = (0, r.isGuildAClan)(T);
  (0, u.useSubscribeGuildMembers)(p);
  let C = A === _.AppContext.POPOUT,
    b = L === i,
    [x, U] = (0, a.useStateFromStoresArray)([E.default], () => {
      if (null == T) return [!1, !1];
      let e = L === i && (E.default.can(_.Permissions.CHANGE_NICKNAME, T) || E.default.can(_.Permissions.MANAGE_NICKNAMES, T));
      return [e, E.default.canManageUser(_.Permissions.MANAGE_NICKNAMES, i, T)]
    }, [L, i, T]),
    R = n.useCallback((e, t) => () => {
      (0, d.adoptClanIdentity)(e, t, o.default.CONTEXT_MENU)
    }, []);
  return null != T && !C && (x || U || b) && null != m && !O && G && m.isStaff() ? (0, s.jsxs)(s.Fragment, {
    children: [(0, s.jsx)(l.MenuItem, {
      id: "adopt-clan-identity",
      label: g.default.Messages.CLAN_ADOPT_CLAN_IDENTITY,
      icon: h,
      action: R(t, !0)
    }), (0, s.jsx)(l.MenuItem, {
      id: "deadopt-clan-identity",
      label: g.default.Messages.CLAN_CLEAR_CLAN_IDENTITY,
      icon: h,
      action: R(null, null)
    })]
  }) : null
}