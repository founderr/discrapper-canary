"use strict";
n.r(t), n.d(t, {
  default: function() {
    return m
  }
}), n("47120"), n("653041");
var a = n("470079"),
  l = n("149765"),
  s = n("442837"),
  i = n("902704"),
  r = n("592125"),
  o = n("720202"),
  u = n("271383"),
  d = n("700785"),
  c = n("231338");
let f = [],
  h = new Set;

function m(e) {
  let {
    entries: t,
    channelId: n
  } = e, m = (0, s.useStateFromStores)([r.default], () => r.default.getChannel(n)), p = null == m ? void 0 : m.guild_id, E = a.useRef(new Set), C = a.useMemo(() => {
    let e = new Set(null == t ? void 0 : t.map(e => e.author_id));
    return !(0, i.areArraysShallowEqual)([...E.current], [...e]) && (E.current = e), E.current
  }, [t]);
  a.useEffect(() => {
    null != p && Array.from(C).forEach(e => {
      o.default.requestMember(p, e)
    })
  }, [C, p]);
  let g = (0, s.useStateFromStoresArray)([u.default], () => {
      if (null == p) return f;
      let e = [];
      for (let t of C) u.default.isMember(p, t) && e.push(t);
      return e
    }, [C, p]),
    S = a.useMemo(() => {
      if (null == m || 0 === g.length) return h;
      let e = new Set;
      for (let t of g) {
        let n = d.computePermissions({
          user: t,
          context: m
        });
        l.has(n, c.Permissions.VIEW_CHANNEL) && e.add(t)
      }
      return e
    }, [g, m]);
  return a.useMemo(() => null == t ? void 0 : t.filter(e => S.has(e.author_id)), [t, S])
}