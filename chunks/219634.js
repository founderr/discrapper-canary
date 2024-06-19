n.d(t, {
  Z: function() {
    return p
  }
}), n(47120), n(653041);
var l = n(470079),
  i = n(149765),
  s = n(442837),
  a = n(902704),
  r = n(592125),
  o = n(720202),
  c = n(271383),
  u = n(700785),
  d = n(231338);
let h = [],
  m = new Set;

function p(e) {
  let {
    entries: t,
    channelId: n
  } = e, p = (0, s.e7)([r.Z], () => r.Z.getChannel(n)), E = null == p ? void 0 : p.guild_id, g = l.useRef(new Set), f = l.useMemo(() => {
    let e = new Set(null == t ? void 0 : t.map(e => e.author_id));
    return !(0, a.E)([...g.current], [...e]) && (g.current = e), g.current
  }, [t]);
  l.useEffect(() => {
    if (null != E) Array.from(f).forEach(e => {
      o.Z.requestMember(E, e)
    })
  }, [f, E]);
  let C = (0, s.Wu)([c.ZP], () => {
      if (null == E) return h;
      let e = [];
      for (let t of f) c.ZP.isMember(E, t) && e.push(t);
      return e
    }, [f, E]),
    _ = l.useMemo(() => {
      if (null == p || 0 === C.length) return m;
      let e = new Set;
      for (let t of C) {
        let n = u.uB({
          user: t,
          context: p
        });
        i.e$(n, d.Pl.VIEW_CHANNEL) && e.add(t)
      }
      return e
    }, [C, p]);
  return l.useMemo(() => null == t ? void 0 : t.filter(e => _.has(e.author_id)), [t, _])
}