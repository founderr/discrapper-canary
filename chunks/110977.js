n.d(t, {
  S: function() {
    return m
  }
});
var l = n(735250),
  i = n(470079),
  s = n(120356),
  r = n.n(s),
  a = n(481060),
  o = n(593214),
  u = n(981631),
  c = n(689938),
  d = n(279619),
  h = n(907934),
  p = n(721690);

function g() {
  return (0, l.jsx)("div", {
    className: r()(h.row, h.rowGuildName),
    children: (0, l.jsx)("span", {
      className: r()(h.guildNameText, h.guildNameTextLimitedSize, d.tooltipText),
      children: c.Z.Messages.FAVORITE_ADDED
    })
  })
}
let m = i.memo(function(e) {
  let {
    "aria-label": t = !1,
    children: n
  } = e, s = function() {
    let {
      favoriteAdded: e,
      clearFavoriteAdded: t
    } = (0, o.up)();
    return i.useEffect(() => {
      if (e) {
        let e = setTimeout(() => {
          t()
        }, 1500);
        return () => {
          t(), clearTimeout(e)
        }
      }
    }, [e, t]), e
  }();
  return (0, l.jsx)(a.Tooltip, {
    forceOpen: s,
    color: a.TooltipColors.GREEN,
    hideOnClick: !0,
    spacing: 20,
    position: "right",
    align: "center",
    text: (0, l.jsx)(g, {}),
    "aria-label": t,
    tooltipClassName: p.listItemTooltip,
    children: e => (0, l.jsx)("div", {
      ...e,
      onMouseEnter: u.dG4,
      onMouseLeave: u.dG4,
      children: n
    })
  })
})