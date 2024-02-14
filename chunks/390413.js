"use strict";
n.r(t), n.d(t, {
  ListType: function() {
    return l
  },
  default: function() {
    return m
  }
}), n("222007");
var l, a, s = n("37983"),
  i = n("884691"),
  r = n("414456"),
  o = n.n(r),
  u = n("77078"),
  d = n("461380"),
  c = n("67602"),
  f = n("274210"),
  h = n("228450");
(a = l || (l = {}))[a.MutualFriendsList = 0] = "MutualFriendsList", a[a.MutualGuildList = 1] = "MutualGuildList", a[a.AppsList = 2] = "AppsList";
var m = e => {
  let {
    header: t,
    children: n,
    itemType: l = 1,
    isLoadingHeader: a,
    isLoadingContents: r,
    loadingContentsCount: m = 0,
    className: p,
    onHover: E,
    onFocus: S
  } = e, [g, C] = i.useState(!0), _ = (0, s.jsx)("div", {
    className: f.iconWrapper,
    children: (0, s.jsx)(d.default, {
      direction: g ? d.default.Directions.RIGHT : d.default.Directions.DOWN
    })
  });
  return (0, s.jsxs)("div", {
    className: o(f.listWrapper, p),
    children: [(0, s.jsx)(u.Button, {
      className: f.collapseBtn,
      innerClassName: f.collapseBtnContent,
      color: u.ButtonColors.CUSTOM,
      onMouseEnter: E,
      onFocus: S,
      onClick: () => C(!g),
      children: a ? (0, s.jsxs)(s.Fragment, {
        children: [(0, s.jsx)(c.ContentBlob, {
          width: 34,
          opacity: .08
        }), (0, s.jsx)(c.ContentBlob, {
          width: 135,
          opacity: .08
        })]
      }) : (0, s.jsxs)(s.Fragment, {
        children: [(0, s.jsx)(u.Text, {
          variant: "text-sm/medium",
          children: t
        }), _]
      })
    }), (0, s.jsx)("ul", {
      className: o(f.connectionList, {
        [f.isCollapsed]: g
      }),
      children: r ? Array.from({
        length: m
      }).map((e, t) => (0, s.jsxs)("div", {
        className: o({
          [h.mutualFriendItem]: 0 === l,
          [h.mutualGuildsItem]: 1 === l
        }),
        children: [(0, s.jsx)(c.ContentBlob, {
          width: 34,
          opacity: .08
        }), (0, s.jsx)(c.ContentBlob, {
          width: 135,
          opacity: .08
        })]
      }, t)) : n
    })]
  })
}