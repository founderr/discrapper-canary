t(47120), t(724458), t(653041);
var n = t(735250),
  i = t(470079),
  a = t(442837),
  l = t(481060),
  r = t(993413),
  o = t(594174),
  c = t(153124),
  E = t(931240),
  d = t(353093),
  _ = t(369077),
  T = t(981631),
  S = t(689938),
  u = t(396939);
let I = (0, c.hQ)();
s.Z = i.memo(function(e) {
  let {
    availableClans: s
  } = e, t = i.useMemo(() => new Map(s.map(e => [e.id, e])), [s]), c = (0, a.e7)([o.default], () => {
    var e;
    return (0, d.vh)(null === (e = o.default.getCurrentUser()) || void 0 === e ? void 0 : e.clan).guildId
  }), N = i.useMemo(() => s.reduce((e, s) => {
    var t;
    return (null === (t = s.clan) || void 0 === t ? void 0 : t.tag) != null && e.push({
      label: s.name,
      value: s.id
    }), e
  }, []), [s]), A = i.useCallback(e => {
    var s, i;
    if (null == e) return null;
    let a = t.get(e.value);
    if (null == a) return null;
    let l = null === (s = a.clan) || void 0 === s ? void 0 : s.tag;
    return null == l ? null : (0, n.jsx)(_.Dh, {
      clanTag: l,
      clanBadge: null === (i = a.clan) || void 0 === i ? void 0 : i.badge,
      guildId: a.id,
      guildName: e.label,
      guildIcon: a.icon,
      guildIconSize: 32
    })
  }, [t]), C = i.useCallback(e => {
    let s = e[0];
    return null == s ? null : (0, n.jsx)(n.Fragment, {
      children: A(s)
    })
  }, [A]), O = i.useCallback(e => (0, E.nE)(e, !0, T.Sbl.USER_SETTINGS), []), m = i.useCallback(e => e === c, [c]), h = i.useCallback(e => e, []), g = i.useCallback(() => (0, E.nE)(null, !1), []);
  return (0, n.jsxs)(r.Z, {
    title: S.Z.Messages.CLANS,
    titleId: I,
    children: [(0, n.jsx)(l.Text, {
      className: u.subtitle,
      variant: "text-sm/normal",
      children: S.Z.Messages.CLAN_USER_PROFILE_PRIMARY_CLAN_SUBTITLE
    }), (0, n.jsx)(l.Select, {
      className: u.select,
      optionClassName: u.selectPopout,
      isSelected: m,
      options: N,
      select: O,
      renderOptionValue: C,
      renderOptionLabel: A,
      serialize: h,
      clear: g,
      clearable: null != c
    })]
  })
})