i.d(t, {
  E: function() {
    return a
  }
});
var a, n = i(735250),
  l = i(120356),
  s = i.n(l),
  r = i(468194),
  d = i(471445),
  u = i(806519),
  c = i(252658);
(a || (a = {})).SMALL_32 = "SMALL_32";
let o = {
    SMALL_32: 24
  },
  A = {
    SMALL_32: [13, 11, 10, 10, 10, 10, 10]
  };
t.Z = function(e) {
  var t, i, a;
  let {
    className: l,
    iconClassName: I,
    size: S,
    channel: E,
    guild: _,
    locked: g,
    hasActiveThreads: L
  } = e;
  if (null == _) return null;
  let f = _.getIconURL(48),
    h = A[S],
    p = o[S],
    N = (0, d.KS)(E, _, {
      locked: g,
      hasActiveThreads: L
    });
  if (null == N) return null;
  let b = (0, r.Zg)(null !== (t = null == _ ? void 0 : _.toString()) && void 0 !== t ? t : null);
  return (0, n.jsxs)("div", {
    role: "img",
    className: l,
    children: [(0, n.jsx)(u.ZP, {
      mask: u.QS.GUILD_ICON_WITH_CHANNEL_TYPE,
      children: null != f ? (0, n.jsx)("img", {
        alt: "",
        src: f,
        className: c.channelGuildIcon,
        style: {
          width: p,
          height: p
        }
      }) : (0, n.jsx)("div", {
        className: s()(c.channelGuildIcon, c.acronym),
        style: {
          fontSize: (i = h, (a = b).length - 1 > i.length ? i[i.length - 1] : i[a.length - 1]),
          width: p,
          height: p
        },
        children: b
      })
    }), (0, n.jsx)(N, {
      className: s()(c.icon, c.iconWithGuildIcon, I),
      color: "currentColor"
    })]
  })
}