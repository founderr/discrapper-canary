n.d(t, {
  R: function() {
    return l
  }
}), n(47120);
var l, i, s = n(735250),
  a = n(470079),
  r = n(120356),
  o = n.n(r),
  c = n(481060),
  u = n(259580),
  d = n(38371),
  h = n(599625),
  m = n(13484);
(i = l || (l = {}))[i.MutualFriendsList = 0] = "MutualFriendsList", i[i.MutualGuildList = 1] = "MutualGuildList";
t.Z = e => {
  let {
    header: t,
    children: n,
    itemType: l = 1,
    isLoadingHeader: i,
    isLoadingContents: r,
    loadingContentsCount: E = 0,
    className: p,
    onExpand: g,
    onHover: f,
    onFocus: C
  } = e, [_, I] = a.useState(!0), x = (0, s.jsx)("div", {
    className: h.iconWrapper,
    children: (0, s.jsx)(u.Z, {
      direction: _ ? u.Z.Directions.RIGHT : u.Z.Directions.DOWN
    })
  });
  return (0, s.jsxs)("div", {
    className: p,
    children: [(0, s.jsx)(c.Button, {
      className: h.collapseBtn,
      innerClassName: h.collapseBtnContent,
      color: c.ButtonColors.CUSTOM,
      onMouseEnter: f,
      onFocus: C,
      onClick: () => {
        I(!_), _ && (null == g || g())
      },
      children: i ? (0, s.jsxs)(s.Fragment, {
        children: [(0, s.jsx)(d.ZT, {
          width: 34,
          opacity: .08
        }), (0, s.jsx)(d.ZT, {
          width: 135,
          opacity: .08
        })]
      }) : (0, s.jsxs)(s.Fragment, {
        children: [(0, s.jsx)(c.Text, {
          variant: "text-sm/medium",
          children: t
        }), x]
      })
    }), (0, s.jsx)("ul", {
      className: o()(h.connectionList, {
        [h.isCollapsed]: _
      }),
      children: r ? Array.from({
        length: E
      }).map((e, t) => (0, s.jsxs)("div", {
        className: o()({
          [m.mutualFriendItem]: 0 === l,
          [m.mutualGuildItem]: 1 === l
        }),
        children: [(0, s.jsx)(d.ZT, {
          width: 34,
          opacity: .08
        }), (0, s.jsx)(d.ZT, {
          width: 135,
          opacity: .08
        })]
      }, t)) : n
    })]
  })
}