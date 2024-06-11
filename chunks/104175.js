"use strict";
a.r(t), a.d(t, {
  GuildIconWithChannelTypeSizes: function() {
    return i
  }
});
var i, s = a("735250"),
  n = a("120356"),
  l = a.n(n),
  r = a("468194"),
  d = a("471445"),
  u = a("806519"),
  o = a("738724");
(i || (i = {})).SMALL_32 = "SMALL_32";
let c = {
    SMALL_32: 24
  },
  I = {
    SMALL_32: [13, 11, 10, 10, 10, 10, 10]
  };
t.default = function(e) {
  var t, a, i;
  let {
    className: n,
    iconClassName: A,
    size: _,
    channel: E,
    guild: f,
    locked: S,
    hasActiveThreads: L
  } = e;
  if (null == f) return null;
  let h = f.getIconURL(48),
    g = I[_],
    p = c[_],
    D = (0, d.getChannelIconComponent)(E, f, {
      locked: S,
      hasActiveThreads: L
    });
  if (null == D) return null;
  let N = (0, r.getAcronym)(null !== (t = null == f ? void 0 : f.toString()) && void 0 !== t ? t : null);
  return (0, s.jsxs)("div", {
    role: "img",
    className: n,
    children: [(0, s.jsx)(u.default, {
      mask: u.MaskIDs.GUILD_ICON_WITH_CHANNEL_TYPE,
      children: null != h ? (0, s.jsx)("img", {
        alt: "",
        src: h,
        className: o.channelGuildIcon,
        style: {
          width: p,
          height: p
        }
      }) : (0, s.jsx)("div", {
        className: l()(o.channelGuildIcon, o.acronym),
        style: {
          fontSize: (a = g, (i = N).length - 1 > a.length ? a[a.length - 1] : a[i.length - 1]),
          width: p,
          height: p
        },
        children: N
      })
    }), (0, s.jsx)(D, {
      className: l()(o.icon, o.iconWithGuildIcon, A)
    })]
  })
}