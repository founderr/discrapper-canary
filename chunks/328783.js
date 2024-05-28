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
  S = s("369077"),
  E = s("981631"),
  T = s("689938"),
  _ = s("101331");
let f = (0, d.uid)();
t.default = n.memo(function(e) {
  let {
    availableClans: t
  } = e, s = n.useMemo(() => new Map(t.map(e => [e.id, e])), [t]), d = (0, l.useStateFromStores)([o.default], () => {
    var e;
    return (0, c.getUserClanData)(null === (e = o.default.getCurrentUser()) || void 0 === e ? void 0 : e.clan).guildId
  }), m = n.useMemo(() => t.reduce((e, t) => {
    var s;
    return (null === (s = t.clan) || void 0 === s ? void 0 : s.tag) != null && e.push({
      label: t.name,
      value: t.id
    }), e
  }, []), [t]), I = n.useCallback(e => {
    var t, n;
    if (null == e) return null;
    let l = s.get(e.value);
    if (null == l) return null;
    let i = null === (t = l.clan) || void 0 === t ? void 0 : t.tag;
    return null == i ? null : (0, a.jsx)(S.UserProfileClanRow, {
      clanTag: i,
      clanBadge: null === (n = l.clan) || void 0 === n ? void 0 : n.badge,
      guildId: l.id,
      guildName: e.label,
      guildIcon: l.icon,
      guildIconSize: 32
    })
  }, [s]), g = n.useCallback(e => {
    let t = e[0];
    return null == t ? null : (0, a.jsx)(a.Fragment, {
      children: I(t)
    })
  }, [I]), N = n.useCallback(e => (0, u.adoptClanIdentity)(e, !0, E.AnalyticsLocations.USER_SETTINGS), []), h = n.useCallback(e => e === d, [d]), C = n.useCallback(e => e, []), O = n.useCallback(() => (0, u.adoptClanIdentity)(null, !1), []);
  return (0, a.jsxs)(r.default, {
    title: T.default.Messages.CLANS,
    titleId: f,
    children: [(0, a.jsx)(i.Text, {
      className: _.subtitle,
      variant: "text-sm/normal",
      children: T.default.Messages.CLAN_USER_PROFILE_PRIMARY_CLAN_SUBTITLE
    }), (0, a.jsx)(i.Select, {
      className: _.select,
      optionClassName: _.selectPopout,
      isSelected: h,
      options: m,
      select: N,
      renderOptionValue: g,
      renderOptionLabel: I,
      serialize: C,
      clear: O,
      clearable: null != d
    })]
  })
})