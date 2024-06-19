t.d(s, {
  Z: function() {
    return T
  }
});
var n = t(735250);
t(470079);
var i = t(120356),
  a = t.n(i),
  l = t(913527),
  r = t.n(l),
  o = t(481060),
  c = t(55935),
  E = t(955204),
  d = t(674680),
  _ = t(778609);

function T(e) {
  let {
    achievementId: s,
    dateUnlocked: t
  } = e, i = (0, E.oX)(s);
  if (null == i) return null;
  let l = null != t,
    {
      name: T,
      description: S,
      hideDescriptionUntilUnlock: u,
      onAction: I
    } = i,
    N = u && !l,
    A = l ? "header-primary" : "text-muted",
    C = l ? "header-secondary" : "text-muted",
    O = r()(t),
    m = null != I && l,
    h = m ? o.Clickable : "div";
  return (0, n.jsxs)(h, {
    className: a()(_.container, m && _.actionable),
    onClick: () => {
      m && I()
    },
    children: [(0, n.jsx)("div", {
      className: _.iconContainer,
      children: (0, n.jsx)(d.Z, {
        achievementId: s,
        size: d.Z.Sizes.SIZE_40,
        unlocked: l
      })
    }), (0, n.jsxs)("div", {
      className: _.nameContainer,
      children: [null != t && (0, n.jsx)(o.Text, {
        variant: "text-xxs/semibold",
        color: "text-muted",
        className: _.unlocked,
        children: (0, c.Y4)(O)
      }), (0, n.jsx)(o.Text, {
        variant: "text-md/medium",
        color: A,
        children: T()
      }), (0, n.jsx)(o.Text, {
        variant: "text-xs/normal",
        color: C,
        children: N ? "?????" : S()
      })]
    })]
  })
}