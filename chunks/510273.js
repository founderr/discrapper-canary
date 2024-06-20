n.d(t, {
  Z: function() {
    return _
  }
});
var s = n(735250),
  a = n(470079),
  i = n(120356),
  l = n.n(i),
  r = n(481060),
  c = n(955204),
  o = n(818765),
  d = n(674680),
  u = n(693797);
let E = e => {
  let {
    color: t
  } = e;
  return (0, s.jsxs)("svg", {
    width: "48",
    height: "28",
    viewBox: "0 0 55 34",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [(0, s.jsx)("rect", {
      x: "10.1968",
      y: "7",
      width: "14.4203",
      height: "14.4203",
      transform: "rotate(45 10.1968 7)",
      className: u.__invalid_toastBG
    }), (0, s.jsx)("rect", {
      x: "27.3936",
      y: "0.59021",
      width: "23.4851",
      height: "23.4851",
      transform: "rotate(45 27.3936 0.59021)",
      className: u.__invalid_toastBG
    }), (0, s.jsx)("rect", {
      x: "44.5903",
      y: "7",
      width: "14.4203",
      height: "14.4203",
      transform: "rotate(45 44.5903 7)",
      className: u.__invalid_toastBG
    }), (0, s.jsx)("rect", {
      x: "10.1968",
      y: "13",
      width: "6",
      height: "6",
      transform: "rotate(45 10.1968 13)",
      fill: t
    }), (0, s.jsx)("path", {
      d: "M27.3936 4.39355L34.1233 16.2873L27.3936 28.1811L20.6638 16.2873L27.3936 4.39355Z",
      fill: t
    }), (0, s.jsx)("rect", {
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
    unlocked: n
  } = e, {
    name: i,
    description: _,
    rarity: h,
    hideDescriptionUntilUnlock: T,
    onAction: I
  } = t, {
    color: C
  } = (0, c.F7)(h);
  a.useEffect(() => {
    let e = setTimeout(() => {
      o.Z.playAchievementUnlockSound()
    }, 50);
    return () => {
      clearTimeout(e)
    }
  }, []);
  let N = null != I && n,
    g = N ? r.Clickable : "div";
  return (0, s.jsxs)(g, {
    className: l()(u.container, N && u.actionable),
    onClick: () => {
      N && I()
    },
    children: [(0, s.jsx)("div", {
      className: u.iconContainer,
      children: (0, s.jsx)(d.Z, {
        achievementId: t.id,
        size: d.Z.Sizes.SIZE_40,
        unlocked: n
      })
    }), (0, s.jsxs)("div", {
      className: u.__invalid_nameContainer,
      children: [(0, s.jsx)(r.Text, {
        variant: "text-md/semibold",
        color: "header-primary",
        children: i()
      }), (0, s.jsx)(r.Text, {
        variant: "text-xs/medium",
        color: "header-secondary",
        children: T && !n ? "?????" : _()
      })]
    }), (0, s.jsx)("div", {
      className: u.flair,
      children: (0, s.jsx)(E, {
        color: C
      })
    })]
  })
}