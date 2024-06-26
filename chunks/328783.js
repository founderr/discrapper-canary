t(47120), t(724458), t(653041);
var n = t(735250),
  a = t(470079),
  i = t(442837),
  r = t(481060),
  o = t(993413),
  l = t(594174),
  c = t(153124),
  d = t(931240),
  _ = t(353093),
  E = t(369077),
  u = t(981631),
  T = t(689938),
  S = t(396939);
let I = (0, c.hQ)();
s.Z = a.memo(function(e) {
  let {
    availableClans: s
  } = e, t = a.useMemo(() => new Map(s.map(e => [e.id, e])), [s]), c = (0, i.e7)([l.default], () => {
    var e;
    return (0, _.vh)(null === (e = l.default.getCurrentUser()) || void 0 === e ? void 0 : e.clan).guildId
  }), N = a.useMemo(() => s.reduce((e, s) => {
    var t;
    return (null === (t = s.clan) || void 0 === t ? void 0 : t.tag) != null && e.push({
      label: s.name,
      value: s.id
    }), e
  }, []), [s]), C = a.useCallback(e => {
    var s, a;
    if (null == e) return null;
    let i = t.get(e.value);
    if (null == i) return null;
    let r = null === (s = i.clan) || void 0 === s ? void 0 : s.tag;
    return null == r ? null : (0, n.jsx)(E.Dh, {
      clanTag: r,
      clanBadge: null === (a = i.clan) || void 0 === a ? void 0 : a.badge,
      guildId: i.id,
      guildName: e.label,
      guildIcon: i.icon,
      guildIconSize: 32
    })
  }, [t]), m = a.useCallback(e => {
    let s = e[0];
    return null == s ? null : (0, n.jsx)(n.Fragment, {
      children: C(s)
    })
  }, [C]), A = a.useCallback(e => (0, d.nE)(e, !0, u.Sbl.USER_SETTINGS), []), O = a.useCallback(e => e === c, [c]), g = a.useCallback(e => e, []), h = a.useCallback(() => (0, d.nE)(null, !1), []);
  return (0, n.jsxs)(o.Z, {
    title: T.Z.Messages.CLANS,
    titleId: I,
    children: [(0, n.jsx)(r.Text, {
      className: S.subtitle,
      variant: "text-sm/normal",
      children: T.Z.Messages.CLAN_USER_PROFILE_PRIMARY_CLAN_SUBTITLE
    }), (0, n.jsx)(r.Select, {
      className: S.select,
      optionClassName: S.selectPopout,
      isSelected: O,
      options: N,
      select: A,
      renderOptionValue: m,
      renderOptionLabel: C,
      serialize: g,
      clear: h,
      clearable: null != c
    })]
  })
})