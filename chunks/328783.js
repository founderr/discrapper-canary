"use strict";
s.r(t), s("47120"), s("724458"), s("653041");
var a = s("735250"),
  n = s("470079"),
  l = s("442837"),
  i = s("481060"),
  r = s("993413"),
  o = s("594174"),
  d = s("153124"),
  u = s("931240"),
  c = s("353093"),
  S = s("891728"),
  E = s("369077"),
  T = s("981631"),
  f = s("689938"),
  m = s("156312");
let _ = (0, d.uid)();
t.default = n.memo(function() {
  let e = (0, S.useCurrentUserAvailableClans)(),
    t = n.useMemo(() => new Map(e.map(e => [e.id, e])), [e]),
    s = (0, l.useStateFromStores)([o.default], () => {
      var e;
      return (0, c.getUserClanData)(null === (e = o.default.getCurrentUser()) || void 0 === e ? void 0 : e.clan).guildId
    }),
    d = n.useMemo(() => e.reduce((e, t) => {
      var s;
      return (null === (s = t.clan) || void 0 === s ? void 0 : s.tag) != null && e.push({
        label: t.name,
        value: t.id
      }), e
    }, []), [e]),
    g = n.useCallback(e => {
      var s, n;
      if (null == e) return null;
      let l = t.get(e.value);
      if (null == l) return null;
      let i = null === (s = l.clan) || void 0 === s ? void 0 : s.tag;
      return null == i ? null : (0, a.jsx)(E.UserProfileClanRow, {
        clanTag: i,
        clanBadge: null === (n = l.clan) || void 0 === n ? void 0 : n.badge,
        guildId: l.id,
        guildName: e.label,
        guildIcon: l.icon,
        guildIconSize: 32
      })
    }, [t]),
    h = n.useCallback(e => {
      let t = e[0];
      return null == t ? null : (0, a.jsx)(a.Fragment, {
        children: g(t)
      })
    }, [g]),
    I = n.useCallback(e => (0, u.adoptClanIdentity)(e, !0, T.AnalyticsLocations.USER_SETTINGS), []),
    N = n.useCallback(e => e === s, [s]),
    p = n.useCallback(e => e, []),
    C = n.useCallback(() => (0, u.adoptClanIdentity)(null, !1), []);
  return (0, a.jsxs)(r.default, {
    title: f.default.Messages.CLANS,
    titleId: _,
    children: [(0, a.jsx)(i.Text, {
      className: m.subtitle,
      variant: "text-sm/normal",
      children: f.default.Messages.CLAN_USER_PROFILE_PRIMARY_CLAN_SUBTITLE
    }), (0, a.jsx)(i.Select, {
      className: m.select,
      optionClassName: m.selectPopout,
      isSelected: N,
      options: d,
      select: I,
      renderOptionValue: h,
      renderOptionLabel: g,
      serialize: p,
      clear: C,
      clearable: null != s
    })]
  })
})