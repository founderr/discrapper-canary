"use strict";
n.r(t), n.d(t, {
  default: function() {
    return _
  }
});
var i = n("735250"),
  r = n("470079"),
  s = n("120356"),
  a = n.n(s),
  o = n("481060"),
  l = n("718582"),
  u = n("411511");
let d = [
  [{
    translateY: 0,
    translateX: 0,
    scale: 1
  }, {
    translateY: 0,
    translateX: 0,
    scale: 0
  }, {
    translateY: 0,
    translateX: 0,
    scale: 0
  }, {
    translateY: 0,
    translateX: 0,
    scale: 0
  }],
  [{
    translateY: -14,
    translateX: -14,
    scale: .7058823529411765
  }, {
    translateY: 12,
    translateX: 12,
    scale: .8235294117647058
  }, {
    translateY: 0,
    translateX: 0,
    scale: 0
  }, {
    translateY: 0,
    translateX: 0,
    scale: 0
  }],
  [{
    translateY: -4,
    translateX: 16,
    scale: .7058823529411765
  }, {
    translateY: 14,
    translateX: -14,
    scale: .8235294117647058
  }, {
    translateY: -18,
    translateX: -12,
    scale: .5882352941176471
  }, {
    translateY: 0,
    translateX: 0,
    scale: 0
  }],
  [{
    translateY: -13,
    translateX: -13,
    scale: .8235294117647058
  }, {
    translateY: 13,
    translateX: 13,
    scale: .8235294117647058
  }, {
    translateY: -18,
    translateX: 18,
    scale: .5882352941176471
  }, {
    translateY: 18,
    translateX: -18,
    scale: .5882352941176471
  }]
];

function _(e) {
  let {
    users: t,
    guildId: n
  } = e, s = (0, l.useSortUsersByAffinity)(t), o = r.useRef(!1);
  r.useEffect(() => {
    o.current = !0
  }, []);
  let _ = Math.min(d.length - 1, s.length - 1),
    I = d[Math.max(0, _)],
    T = s.length > 4,
    f = s.length - 3,
    S = f >= 10 ? 1 : 2,
    h = I.map((e, t) => {
      let r = s[t];
      if (null == r) return null;
      let o = T && t === S;
      return (0, i.jsx)("div", {
        className: a()(u.avatarContainer),
        style: {
          opacity: 1,
          transform: "translateX(".concat(e.translateX, "px) translateY(").concat(e.translateY, "px) scale(").concat(e.scale, ")")
        },
        children: o ? (0, i.jsx)(c, {
          count: f
        }) : (0, i.jsx)(E, {
          guildId: n,
          user: r
        })
      }, r.id)
    });
  return (0, i.jsx)("div", {
    className: u.groupContainer,
    children: h
  })
}

function c(e) {
  let {
    count: t
  } = e;
  return (0, i.jsx)("div", {
    className: u.avatarWrapper,
    children: (0, i.jsx)("div", {
      className: u.overflowCount,
      children: (0, i.jsxs)(o.Text, {
        variant: "text-sm/semibold",
        children: ["+", t]
      })
    })
  })
}

function E(e) {
  let {
    guildId: t,
    user: n
  } = e;
  return null == r.useMemo(() => null == n ? void 0 : n.getAvatarSource(t, !1, 30), [t, n]) ? null : (0, i.jsx)("div", {
    className: u.avatarWrapper,
    children: (0, i.jsx)("img", {
      className: u.avatar,
      src: null == n ? void 0 : n.getAvatarURL(t, 80),
      alt: ""
    })
  })
}