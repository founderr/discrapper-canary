n.d(t, {
  R: function() {
    return f
  }
});
var l = n(735250),
  i = n(470079),
  s = n(442837),
  a = n(481060),
  r = n(239091),
  o = n(151827),
  c = n(485267),
  u = n(146282),
  d = n(703180),
  h = n(809017),
  m = n(981631),
  p = n(689938),
  E = n(493893),
  g = n(279691);

function f(e) {
  return (null == e ? void 0 : e.id) === h.G
}
t.Z = i.memo(function(e) {
  let t, {
      title: h,
      onToggleExpand: f,
      expanded: C,
      expandedCount: _
    } = e,
    I = (0, s.e7)([u.Z], () => u.Z.hidden),
    x = i.useCallback(e => {
      (0, r.jW)(e, async () => {
        let {
          MemberListContentSettingsMenu: e
        } = await Promise.resolve().then(n.bind(n, 703180));
        return () => (0, l.jsx)(e, {
          closePopout: r.Zy
        })
      })
    }, []);
  return (0, l.jsxs)(o.Z, {
    className: g.membersGroup,
    children: [(0, l.jsx)(a.HiddenVisually, {
      children: p.Z.Messages.CHANNEL_MEMBERS_A11Y_LABEL.format({
        title: h,
        count: _
      })
    }), (0, l.jsxs)(a.Clickable, {
      onClick: e => {
        if (e.currentTarget === e.target || e.currentTarget.contains(e.target)) return I ? (0, c.l)() : _ > 3 ? f() : (0, m.dG4)()
      },
      onContextMenu: x,
      tag: "span",
      "aria-hidden": !0,
      className: E.headerContainer,
      children: [(0, l.jsxs)("div", {
        className: E.header,
        children: [(0, l.jsxs)("span", {
          children: [h, " — ", _]
        }), (0, l.jsx)(d.default, {})]
      }), _ <= 3 && !I ? null : (t = I ? (0, l.jsx)(a.ChevronSmallUpIcon, {
        className: E.toggleExpandIcon
      }) : C ? (0, l.jsx)(a.ChevronSmallDownIcon, {
        className: E.toggleExpandIcon
      }) : (0, l.jsx)(a.ChevronSmallRightIcon, {
        className: E.toggleExpandIcon
      }), (0, l.jsx)(a.FocusRing, {
        children: (0, l.jsx)("div", {
          tabIndex: 0,
          className: E.toggleExpandIcon,
          children: t
        })
      }))]
    })]
  })
})