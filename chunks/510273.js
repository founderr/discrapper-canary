"use strict";
a.r(t), a.d(t, {
  default: function() {
    return E
  }
});
var n = a("735250"),
  s = a("470079"),
  l = a("120356"),
  i = a.n(l),
  r = a("481060"),
  o = a("955204"),
  u = a("818765"),
  d = a("674680"),
  c = a("614777");
let f = e => {
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

function E(e) {
  let {
    achievement: t,
    unlocked: a
  } = e, {
    name: l,
    description: E,
    rarity: h,
    hideDescriptionUntilUnlock: _,
    onAction: C
  } = t, {
    color: m
  } = (0, o.getAchievementStyles)(h);
  s.useEffect(() => {
    let e = setTimeout(() => {
      u.default.playAchievementUnlockSound()
    }, 50);
    return () => {
      clearTimeout(e)
    }
  }, []);
  let S = null != C && a,
    p = S ? r.Clickable : "div";
  return (0, n.jsxs)(p, {
    className: i()(c.container, S && c.actionable),
    onClick: () => {
      S && C()
    },
    children: [(0, n.jsx)("div", {
      className: c.iconContainer,
      children: (0, n.jsx)(d.default, {
        achievementId: t.id,
        size: d.default.Sizes.SIZE_40,
        unlocked: a
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
        children: _ && !a ? "?????" : E()
      })]
    }), (0, n.jsx)("div", {
      className: c.flair,
      children: (0, n.jsx)(f, {
        color: m
      })
    })]
  })
}