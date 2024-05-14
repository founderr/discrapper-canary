"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
});
var i = n("735250"),
  r = n("470079"),
  a = n("120356"),
  s = n.n(a),
  o = n("481060"),
  l = n("411511");
let u = [
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
    scale: .75
  }, {
    translateY: 12,
    translateX: 12,
    scale: .875
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
    scale: .75
  }, {
    translateY: 14,
    translateX: -14,
    scale: .875
  }, {
    translateY: -18,
    translateX: -12,
    scale: .625
  }, {
    translateY: 0,
    translateX: 0,
    scale: 0
  }],
  [{
    translateY: -14,
    translateX: -14,
    scale: .875
  }, {
    translateY: 14,
    translateX: 14,
    scale: .875
  }, {
    translateY: -18,
    translateX: 18,
    scale: .625
  }, {
    translateY: 18,
    translateX: -18,
    scale: .625
  }]
];

function d(e) {
  let {
    users: t,
    guildId: n
  } = e, a = r.useRef(!1);
  r.useEffect(() => {
    a.current = !0
  }, []);
  let o = Math.min(u.length - 1, t.length - 1),
    d = u[Math.max(0, o)],
    E = t.length > 4,
    I = t.length - 3,
    T = I >= 10 ? 1 : 2,
    f = d.map((e, r) => {
      let a = t[r];
      if (null == a) return null;
      let o = E && r === T;
      return (0, i.jsx)("div", {
        className: s()(l.avatarContainer),
        style: {
          opacity: 1,
          transform: "translateX(".concat(e.translateX, "px) translateY(").concat(e.translateY, "px) scale(").concat(e.scale, ")")
        },
        children: o ? (0, i.jsx)(_, {
          count: I
        }) : (0, i.jsx)(c, {
          guildId: n,
          user: a
        })
      }, a.id)
    });
  return (0, i.jsx)("div", {
    className: l.groupContainer,
    children: f
  })
}

function _(e) {
  let {
    count: t
  } = e;
  return (0, i.jsx)("div", {
    className: l.avatarWrapper,
    children: (0, i.jsx)("div", {
      className: l.overflowCount,
      children: (0, i.jsxs)(o.Text, {
        variant: "text-sm/semibold",
        children: ["+", t]
      })
    })
  })
}

function c(e) {
  let {
    guildId: t,
    user: n
  } = e;
  return null == r.useMemo(() => null == n ? void 0 : n.getAvatarSource(t, !1, 32), [t, n]) ? null : (0, i.jsx)("div", {
    className: l.avatarWrapper,
    children: (0, i.jsx)("img", {
      className: l.avatar,
      src: null == n ? void 0 : n.getAvatarURL(t, 80),
      alt: ""
    })
  })
}