n.d(t, {
  L: function() {
    return u
  }
}), n(47120);
var i = n(470079),
  s = n(468194),
  l = n(645896),
  a = n(316553),
  r = n(559469),
  o = n(308083),
  c = n(689938);

function u(e) {
  let {
    guild: t,
    selectedGame: n
  } = e, u = (0, a.J)({
    selectedGame: n
  }), d = i.useMemo(() => null == u ? [] : [u], [u]), E = (0, r.n)(u), h = (0, l.Cc)(null == t ? void 0 : t.id), [_, I] = (0, l.L_)(null == t ? void 0 : t.id);
  return i.useEffect(() => {
    !_ && null != t && I()
  }, [t, _, I]), i.useMemo(() => {
    var e;
    return null != h ? h : null == t ? null : {
      ...E[E.length - 1],
      id: t.id,
      name: t.name,
      icon: t.icon,
      description: null !== (e = t.description) && void 0 !== e ? e : c.Z.Messages.CLAN_SETUP_DESCRIPTION_PLACEHOLDER,
      memberCount: 0,
      games: d,
      playstyle: o.zv.CASUAL,
      traits: [],
      tag: (0, s.Zg)(t.name),
      wildcardDescriptors: o.LK
    }
  }, [d, t, E, h])
}