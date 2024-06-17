"use strict";
s.r(t), s.d(t, {
  default: function() {
    return f
  }
});
var n = s("735250"),
  a = s("470079"),
  l = s("120356"),
  i = s.n(l),
  r = s("481060"),
  o = s("955204"),
  u = s("818765"),
  d = s("674680"),
  c = s("614777");
let E = e => {
  let {
    color: t
  } = e;
  return (0, n.jsxs)("svg", {
    width: "48",
    height: "28",
    viewBox: "0 0 55 34",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [(0, n.jsx)("rect", {
      x: "10.1968",
      y: "7",
      width: "14.4203",
      height: "14.4203",
      transform: "rotate(45 10.1968 7)",
      className: c.__invalid_toastBG
    }), (0, n.jsx)("rect", {
      x: "27.3936",
      y: "0.59021",
      width: "23.4851",
      height: "23.4851",
      transform: "rotate(45 27.3936 0.59021)",
      className: c.__invalid_toastBG
    }), (0, n.jsx)("rect", {
      x: "44.5903",
      y: "7",
      width: "14.4203",
      height: "14.4203",
      transform: "rotate(45 44.5903 7)",
      className: c.__invalid_toastBG
    }), (0, n.jsx)("rect", {
      x: "10.1968",
      y: "13",
      width: "6",
      height: "6",
      transform: "rotate(45 10.1968 13)",
      fill: t
    }), (0, n.jsx)("path", {
      d: "M27.3936 4.39355L34.1233 16.2873L27.3936 28.1811L20.6638 16.2873L27.3936 4.39355Z",
      fill: t
    }), (0, n.jsx)("rect", {
      x: "44.5903",
      y: "13",
      width: "6",
      height: "6",
      transform: "rotate(45 44.5903 13)",
      fill: t
    })]
  })
};

function f(e) {
  let {
    achievement: t,
    unlocked: s
  } = e, {
    name: l,
    description: f,
    rarity: _,
    hideDescriptionUntilUnlock: h,
    onAction: m
  } = t, {
    color: C
  } = (0, o.getAchievementStyles)(_);
  a.useEffect(() => {
    let e = setTimeout(() => {
      u.default.playAchievementUnlockSound()
    }, 50);
    return () => {
      clearTimeout(e)
    }
  }, []);
  let T = null != m && s,
    g = T ? r.Clickable : "div";
  return (0, n.jsxs)(g, {
    className: i()(c.container, T && c.actionable),
    onClick: () => {
      T && m()
    },
    children: [(0, n.jsx)("div", {
      className: c.iconContainer,
      children: (0, n.jsx)(d.default, {
        achievementId: t.id,
        size: d.default.Sizes.SIZE_40,
        unlocked: s
      })
    }), (0, n.jsxs)("div", {
      className: c.__invalid_nameContainer,
      children: [(0, n.jsx)(r.Text, {
        variant: "text-md/semibold",
        color: "header-primary",
        children: l()
      }), (0, n.jsx)(r.Text, {
        variant: "text-xs/medium",
        color: "header-secondary",
        children: h && !s ? "?????" : f()
      })]
    }), (0, n.jsx)("div", {
      className: c.flair,
      children: (0, n.jsx)(E, {
        color: C
      })
    })]
  })
}