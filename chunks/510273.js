s.d(t, {
  Z: function() {
    return d
  }
});
var n = s(735250),
  a = s(470079),
  i = s(120356),
  r = s.n(i),
  l = s(481060),
  o = s(955204),
  c = s(818765),
  E = s(674680),
  _ = s(693797);
let u = e => {
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
      className: _.__invalid_toastBG
    }), (0, n.jsx)("rect", {
      x: "27.3936",
      y: "0.59021",
      width: "23.4851",
      height: "23.4851",
      transform: "rotate(45 27.3936 0.59021)",
      className: _.__invalid_toastBG
    }), (0, n.jsx)("rect", {
      x: "44.5903",
      y: "7",
      width: "14.4203",
      height: "14.4203",
      transform: "rotate(45 44.5903 7)",
      className: _.__invalid_toastBG
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

function d(e) {
  let {
    achievement: t,
    unlocked: s
  } = e, {
    name: i,
    description: d,
    rarity: T,
    hideDescriptionUntilUnlock: I,
    onAction: R
  } = t, {
    color: A
  } = (0, o.F7)(T);
  a.useEffect(() => {
    let e = setTimeout(() => {
      c.Z.playAchievementUnlockSound()
    }, 50);
    return () => {
      clearTimeout(e)
    }
  }, []);
  let N = null != R && s,
    C = N ? l.Clickable : "div";
  return (0, n.jsxs)(C, {
    className: r()(_.container, N && _.actionable),
    onClick: () => {
      N && R()
    },
    children: [(0, n.jsx)("div", {
      className: _.iconContainer,
      children: (0, n.jsx)(E.Z, {
        achievementId: t.id,
        size: E.Z.Sizes.SIZE_40,
        unlocked: s
      })
    }), (0, n.jsxs)("div", {
      className: _.__invalid_nameContainer,
      children: [(0, n.jsx)(l.Text, {
        variant: "text-md/semibold",
        color: "header-primary",
        children: i()
      }), (0, n.jsx)(l.Text, {
        variant: "text-xs/medium",
        color: "header-secondary",
        children: I && !s ? "?????" : d()
      })]
    }), (0, n.jsx)("div", {
      className: _.flair,
      children: (0, n.jsx)(u, {
        color: A
      })
    })]
  })
}