"use strict";
i.r(t), i.d(t, {
  default: function() {
    return _
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
  N = i("981631"),
  g = i("689938");

function _(e) {
  let {
    guildId: t,
    userId: i,
    analyticsLocation: _,
    analyticsLocations: M,
    context: I,
    icon: h
  } = e, A = (0, a.useStateFromStores)([S.default], () => S.default.getGuild(t), [t]), L = (0, a.useStateFromStores)([r.default], () => r.default.getId()), m = (0, a.useStateFromStores)([E.default], () => E.default.getUser(i)), T = (0, a.useStateFromStores)([c.default], () => c.default.isGuestOrLurker(t, i), [t, i]), p = n.useMemo(() => ({
    [t]: [i]
  }), [t, i]), O = (0, d.isGuildAClan)(A);
  (0, u.useSubscribeGuildMembers)(p);
  let G = I === N.AppContext.POPOUT,
    b = L === i,
    [C, x] = (0, a.useStateFromStoresArray)([f.default], () => {
      if (null == A) return [!1, !1];
      let e = L === i && (f.default.can(N.Permissions.CHANGE_NICKNAME, A) || f.default.can(N.Permissions.MANAGE_NICKNAMES, A));
      return [e, f.default.canManageUser(N.Permissions.MANAGE_NICKNAMES, i, A)]
    }, [L, i, A]),
    U = n.useCallback((e, t) => () => {
      (0, o.adoptClanIdentity)(e, t)
    }, []);
  return null != A && !G && (C || x || b) && null != m && !T && O && m.isStaff() ? (0, s.jsxs)(s.Fragment, {
    children: [(0, s.jsx)(l.MenuItem, {
      id: "adopt-clan-identity",
      label: g.default.Messages.CLAN_ADOPT_CLAN_IDENTITY,
      icon: h,
      action: U(t, !0)
    }), (0, s.jsx)(l.MenuItem, {
      id: "deadopt-clan-identity",
      label: g.default.Messages.CLAN_CLEAR_CLAN_IDENTITY,
      icon: h,
      action: U(null, null)
    })]
  }) : null
}