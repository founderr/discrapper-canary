var n = t(735250);
t(470079);
var i = t(442837),
  a = t(481060),
  l = t(78839),
  r = t(270144),
  o = t(238847),
  c = t(689938),
  E = t(637295);
s.Z = e => {
  let {
    onGoBack: s
  } = e, t = (0, i.e7)([l.ZP], () => {
    var e;
    return null !== (e = l.ZP.getActiveApplicationSubscriptions()) && void 0 !== e ? e : []
  }), {
    loading: d
  } = (0, r.sp)(t), {
    loadState: _
  } = (0, r.qz)();
  return d || _ !== r.jd.LOADED ? (0, n.jsx)(a.Spinner, {}) : 0 === t.length ? null : (0, n.jsxs)("div", {
    className: E.__invalid_container,
    children: [(0, n.jsxs)(a.Button, {
      look: a.Button.Looks.BLANK,
      innerClassName: E.backButtonContents,
      onClick: s,
      children: [(0, n.jsx)(a.ArrowSmallRightIcon, {
        size: "md",
        color: "currentColor",
        className: E.arrowIcon
      }), c.Z.Messages.APPLICATION_MANAGE_SUBSCRIPTION_PAGE_BACK_CTA]
    }), (0, n.jsx)(a.Spacer, {
      size: 10
    }), (0, n.jsx)(a.FormTitle, {
      tag: "h1",
      children: c.Z.Messages.APPLICATION_MANAGE_SUBSCRIPTION_PAGE_TITLE
    }), (0, n.jsx)(a.Text, {
      variant: "text-sm/normal",
      className: E.pageDescription,
      children: c.Z.Messages.APPLICATION_MANAGE_SUBSCRIPTION_PAGE_DESCRIPTION
    }), (0, n.jsx)("div", {
      className: E.subscriptionsContainer,
      children: t.map(e => (0, n.jsx)(o.Z, {
        subscription: e
      }, e.id))
    })]
  })
}