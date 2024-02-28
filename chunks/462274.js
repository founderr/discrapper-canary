"use strict";
n.r(t), n.d(t, {
  useColorStore: function() {
    return f
  },
  maybeFetchColors: function() {
    return c
  },
  default: function() {
    return h
  },
  useAvatarColors: function() {
    return g
  }
}), n("222007");
var i = n("884691"),
  l = n("656280"),
  r = n.n(l),
  u = n("308503"),
  a = n("446674"),
  s = n("206230"),
  o = n("284679"),
  d = n("103603");
let f = (0, u.default)(() => ({
  palette: {},
  fetching: {}
}));
async function c(e) {
  null == f.getState().palette[e] && await m(e)
}
async function m(e) {
  if (!f.getState().fetching[e]) {
    f.setState(t => ({
      fetching: {
        ...t.fetching,
        [e]: !0
      }
    }));
    try {
      let t = await (0, d.getPaletteForAvatar)(e),
        n = (0, o.getComplimentaryPaletteForColor)(t[0]);
      f.setState(i => ({
        fetching: {
          ...i.fetching,
          [e]: !1
        },
        palette: {
          ...i.palette,
          [e]: [...t.slice(0, 2), ...n]
        }
      }))
    } catch (t) {
      f.setState(t => ({
        fetching: {
          ...t.fetching,
          [e]: !1
        }
      }))
    }
  }
}

function h(e, t) {
  let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
    [i] = g(e, t, n);
  return i
}

function g(e, t) {
  let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
    l = f(t => null == e ? void 0 : t.palette[e]),
    u = (0, a.useStateFromStores)([s.default], () => n && s.default.desaturateUserColors ? s.default.saturation : 1);
  i.useEffect(() => {
    null != e && null == l && m(e)
  }, [e, l]);
  let o = i.useMemo(() => null == l ? void 0 : l.map(e => {
    let [t, n, i] = e, {
      h: l,
      s: a,
      l: s
    } = r({
      r: t,
      g: n,
      b: i
    }).toHsl();
    return r({
      h: l,
      s: a * u,
      l: s
    }).toHexString()
  }), [l, u]);
  return null != o ? o : [t, t]
}