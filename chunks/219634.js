n.d(t, {
  Z: function() {
    return E
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

function E(e) {
  let {
    entries: t,
    channelId: n
  } = e, E = (0, s.e7)([r.Z], () => r.Z.getChannel(n)), p = null == E ? void 0 : E.guild_id, g = l.useRef(new Set), f = l.useMemo(() => {
    let e = new Set(null == t ? void 0 : t.map(e => e.author_id));
    return !(0, a.E)([...g.current], [...e]) && (g.current = e), g.current
  }, [t]);
  l.useEffect(() => {
    if (null != p) Array.from(f).forEach(e => {
      o.Z.requestMember(p, e)
    })
  }, [f, p]);
  let C = (0, s.Wu)([c.ZP], () => {
      if (null == p) return h;
      let e = [];
      for (let t of f) c.ZP.isMember(p, t) && e.push(t);
      return e
    }, [f, p]),
    _ = l.useMemo(() => {
      if (null == E || 0 === C.length) return m;
      let e = new Set;
      for (let t of C) {
        let n = u.uB({
          user: t,
          context: E
        });
        i.e$(n, d.Pl.VIEW_CHANNEL) && e.add(t)
      }
      return e
    }, [C, E]);
  return l.useMemo(() => null == t ? void 0 : t.filter(e => _.has(e.author_id)), [t, _])
}