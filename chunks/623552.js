"use strict";
n.r(t), n.d(t, {
  default: function() {
    return E
  }
});
var i = n("735250"),
  r = n("470079"),
  s = n("120356"),
  a = n.n(s),
  o = n("481060"),
  l = n("410030"),
  u = n("718582"),
  d = n("981631"),
  _ = n("411511");
let c = [
  [{
    translateY: 0,
    translateX: 0,
    scale: 1.2
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

function E(e) {
  let {
    users: t,
    guildId: n
  } = e, s = (0, u.useSortUsersByAffinity)(t), o = (0, l.default)(), E = r.useRef(!1);
  r.useEffect(() => {
    E.current = !0
  }, []);
  let f = Math.min(c.length - 1, s.length - 1),
    S = c[Math.max(0, f)],
    h = s.length > 4,
    A = s.length - 3,
    m = A >= 10 ? 1 : 2,
    N = S.map((e, t) => {
      let r = s[t];
      if (null == r) return null;
      let o = h && t === m;
      return (0, i.jsx)("div", {
        className: a()(_.avatarContainer),
        style: {
          opacity: 1,
          transform: "translateX(".concat(e.translateX, "px) translateY(").concat(e.translateY, "px) scale(").concat(e.scale, ")")
        },
        children: o ? (0, i.jsx)(I, {
          count: A
        }) : (0, i.jsx)(T, {
          guildId: n,
          user: r
        })
      }, r.id)
    });
  return (0, i.jsx)("div", {
    className: o === d.ThemeTypes.DARK ? _.gradientContainerDark : _.gradientContainer,
    children: (0, i.jsx)("div", {
      className: _.groupContainer,
      children: N
    })
  })
}

function I(e) {
  let {
    count: t
  } = e;
  return (0, i.jsx)("div", {
    className: _.avatarWrapper,
    children: (0, i.jsx)("div", {
      className: _.overflowCount,
      children: (0, i.jsxs)(o.Text, {
        variant: "text-sm/semibold",
        children: ["+", t]
      })
    })
  })
}

function T(e) {
  let {
    guildId: t,
    user: n
  } = e;
  return null == r.useMemo(() => null == n ? void 0 : n.getAvatarSource(t, !1, 30), [t, n]) ? null : (0, i.jsx)("div", {
    className: _.avatarWrapper,
    children: (0, i.jsx)("img", {
      className: _.avatar,
      src: null == n ? void 0 : n.getAvatarURL(t, 80),
      alt: ""
    })
  })
}