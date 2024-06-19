t.d(s, {
  Z: function() {
    return N
  }
});
var n = t(735250);
t(470079);
var i = t(442837),
  a = t(481060),
  l = t(230711),
  r = t(574755),
  o = t(663389),
  c = t(309739),
  E = t(293389),
  d = t(327885),
  _ = t(326528),
  T = t(332325),
  S = t(981631),
  u = t(689938),
  I = t(954354);

function N() {
  let e = (0, _.b)(),
    s = (0, i.e7)([o.Z], () => o.Z.getSubsection()),
    t = null != s && e.some(e => e.id === s) ? s : e[0].id;
  return (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsx)(a.Heading, {
      className: I.heading,
      variant: "heading-xl/semibold",
      children: u.Z.Messages.GAMES
    }), (0, n.jsx)(a.TabBar, {
      className: I.tabBar,
      selectedItem: t,
      onItemSelect: e => {
        l.Z.setSection(S.oAB.GAMES, e)
      },
      orientation: "horizontal",
      type: "top",
      look: "brand",
      children: e.map(e => (0, n.jsxs)(a.TabBar.Item, {
        className: I.tab,
        id: e.id,
        "aria-label": e.title,
        children: [(0, n.jsx)(e.icon, {
          className: I.tabIcon,
          color: "currentColor"
        }), (0, n.jsx)("div", {
          className: I.iconTitle,
          children: e.title
        })]
      }, e.id))
    }), (() => {
      switch (t) {
        case T.Z.CLIPS:
          return (0, n.jsx)(r.Z, {
            className: I.body,
            showHeader: !1
          });
        case T.Z.OVERLAY:
          return (0, n.jsx)(d.Z, {
            className: I.body,
            showHeader: !1
          });
        case T.Z.ACTIVITY_PRIVACY:
          return (0, n.jsx)(c.Z, {
            className: I.body,
            showHeader: !1
          });
        case T.Z.MY_GAMES:
        default:
          return (0, n.jsx)(E.Z, {
            className: I.body,
            showHeader: !1
          })
      }
    })()]
  })
}