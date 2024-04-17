"use strict";
i.r(t), i.d(t, {
  default: function() {
    return _
  }
}), i("47120");
var n = i("735250"),
  s = i("470079"),
  a = i("442837"),
  u = i("481060"),
  l = i("58540"),
  o = i("931240"),
  d = i("353093"),
  r = i("314897"),
  c = i("271383"),
  S = i("430824"),
  f = i("496675"),
  E = i("594174"),
  g = i("981631"),
  N = i("689938");

function _(e) {
  let {
    guildId: t,
    userId: i,
    analyticsLocation: _,
    analyticsLocations: M,
    context: I,
    icon: h
  } = e, A = (0, a.useStateFromStores)([S.default], () => S.default.getGuild(t), [t]), L = (0, a.useStateFromStores)([r.default], () => r.default.getId()), p = (0, a.useStateFromStores)([E.default], () => E.default.getUser(i)), m = (0, a.useStateFromStores)([c.default], () => c.default.isGuestOrLurker(t, i), [t, i]), T = s.useMemo(() => ({
    [t]: [i]
  }), [t, i]), O = (0, d.isGuildAClan)(A);
  (0, l.useSubscribeGuildMembers)(T);
  let G = I === g.AppContext.POPOUT,
    C = L === i,
    [b, x] = (0, a.useStateFromStoresArray)([f.default], () => {
      if (null == A) return [!1, !1];
      let e = L === i && (f.default.can(g.Permissions.CHANGE_NICKNAME, A) || f.default.can(g.Permissions.MANAGE_NICKNAMES, A));
      return [e, f.default.canManageUser(g.Permissions.MANAGE_NICKNAMES, i, A)]
    }, [L, i, A]),
    U = s.useCallback((e, t) => () => {
      (0, o.adoptClanIdentity)(e, t)
    }, []);
  return null != A && !G && (b || x || C) && null != p && !m && O && p.isStaff() ? (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsx)(u.MenuItem, {
      id: "adopt-clan-identity",
      label: N.default.Messages.CLAN_ADOPT_CLAN_IDENTITY,
      icon: h,
      action: U(t, !0)
    }), (0, n.jsx)(u.MenuItem, {
      id: "deadopt-clan-identity",
      label: N.default.Messages.CLAN_CLEAR_CLAN_IDENTITY,
      icon: h,
      action: U(null, null)
    })]
  }) : null
}