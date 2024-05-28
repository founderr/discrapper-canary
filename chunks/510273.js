"use strict";
s.r(t), s.d(t, {
  default: function() {
    return _
  }
});
var a = s("735250"),
  n = s("470079"),
  l = s("120356"),
  i = s.n(l),
  r = s("481060"),
  u = s("955204"),
  o = s("818765"),
  d = s("674680"),
  c = s("614777");
let E = e => {
  let {
    color: t
  } = e;
  return (0, a.jsxs)("svg", {
    width: "48",
    height: "28",
    viewBox: "0 0 55 34",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [(0, a.jsx)("rect", {
      x: "10.1968",
      y: "7",
      width: "14.4203",
      height: "14.4203",
      transform: "rotate(45 10.1968 7)",
      className: c.__invalid_toastBG
    }), (0, a.jsx)("rect", {
      x: "27.3936",
      y: "0.59021",
      width: "23.4851",
      height: "23.4851",
      transform: "rotate(45 27.3936 0.59021)",
      className: c.__invalid_toastBG
    }), (0, a.jsx)("rect", {
      x: "44.5903",
      y: "7",
      width: "14.4203",
      height: "14.4203",
      transform: "rotate(45 44.5903 7)",
      className: c.__invalid_toastBG
    }), (0, a.jsx)("rect", {
      x: "10.1968",
      y: "13",
      width: "6",
      height: "6",
      transform: "rotate(45 10.1968 13)",
      fill: t
    }), (0, a.jsx)("path", {
      d: "M27.3936 4.39355L34.1233 16.2873L27.3936 28.1811L20.6638 16.2873L27.3936 4.39355Z",
      fill: t
    }), (0, a.jsx)("rect", {
      x: "44.5903",
      y: "13",
      width: "6",
      height: "6",
      transform: "rotate(45 44.5903 13)",
      fill: t
    })]
  })
};

function _(e) {
  let {
    achievement: t,
    unlocked: s
  } = e, {
    name: l,
    description: _,
    rarity: f,
    hideDescriptionUntilUnlock: h,
    onAction: m
  } = t, {
    color: T
  } = (0, u.getAchievementStyles)(f);
  n.useEffect(() => {
    let e = setTimeout(() => {
      o.default.playAchievementUnlockSound()
    }, 50);
    return () => {
      clearTimeout(e)
    }
  }, []);
  let C = null != m && s,
    g = C ? r.Clickable : "div";
  return (0, a.jsxs)(g, {
    className: i()(c.container, C && c.actionable),
    onClick: () => {
      C && m()
    },
    children: [(0, a.jsx)("div", {
      className: c.iconContainer,
      children: (0, a.jsx)(d.default, {
        achievementId: t.id,
        size: d.default.Sizes.SIZE_40,
        unlocked: s
      })
    }), (0, a.jsxs)("div", {
      className: c.__invalid_nameContainer,
      children: [(0, a.jsx)(r.Text, {
        variant: "text-md/semibold",
        color: "header-primary",
        children: l()
      }), (0, a.jsx)(r.Text, {
        variant: "text-xs/medium",
        color: "header-secondary",
        children: h && !s ? "?????" : _()
      })]
    }), (0, a.jsx)("div", {
      className: c.flair,
      children: (0, a.jsx)(E, {
        color: T
      })
    })]
  })
}