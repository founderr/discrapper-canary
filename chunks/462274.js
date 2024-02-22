"use strict";
n.r(t), n.d(t, {
  useColorStore: function() {
    return c
  },
  maybeFetchColors: function() {
    return f
  },
  default: function() {
    return E
  },
  useAvatarColors: function() {
    return S
  }
}), n("222007");
var l = n("884691"),
  i = n("656280"),
  u = n.n(i),
  r = n("308503"),
  a = n("446674"),
  o = n("206230"),
  d = n("284679"),
  s = n("103603");
let c = (0, r.default)(() => ({
  palette: {},
  fetching: {}
}));
async function f(e) {
  null == c.getState().palette[e] && await g(e)
}
async function g(e) {
  if (!c.getState().fetching[e]) {
    c.setState(t => ({
      fetching: {
        ...t.fetching,
        [e]: !0
      }
    }));
    try {
      let t = await (0, s.getPaletteForAvatar)(e),
        n = (0, d.getComplimentaryPaletteForColor)(t[0]);
      c.setState(l => ({
        fetching: {
          ...l.fetching,
          [e]: !1
        },
        palette: {
          ...l.palette,
          [e]: [...t.slice(0, 2), ...n]
        }
      }))
    } catch (t) {
      c.setState(t => ({
        fetching: {
          ...t.fetching,
          [e]: !1
        }
      }))
    }
  }
}

function E(e, t) {
  let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
    [l] = S(e, t, n);
  return l
}

function S(e, t) {
  let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
    i = c(t => null == e ? void 0 : t.palette[e]),
    r = (0, a.useStateFromStores)([o.default], () => n && o.default.desaturateUserColors ? o.default.saturation : 1);
  l.useEffect(() => {
    null != e && null == i && g(e)
  }, [e, i]);
  let d = l.useMemo(() => null == i ? void 0 : i.map(e => {
    let [t, n, l] = e, {
      h: i,
      s: a,
      l: o
    } = u({
      r: t,
      g: n,
      b: l
    }).toHsl();
    return u({
      h: i,
      s: a * r,
      l: o
    }).toHexString()
  }), [i, r]);
  return null != d ? d : [t, t]
}