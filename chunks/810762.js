var n = t(735250);
t(470079);
var i = t(873546),
  a = t(481060),
  l = t(270237),
  r = t(584825),
  o = t(892729),
  c = t(949914),
  E = t(689938),
  d = t(488895);
s.Z = e => {
  let {
    onGoBack: s
  } = e, t = (0, o.Z)(), {
    loading: _
  } = (0, r.sp)(t);
  return ((0, l.Z)(i.tq ? "role-subscriptions-user-setting" : void 0), _) ? (0, n.jsx)(a.Spinner, {}) : 0 === t.length ? null : (0, n.jsxs)("div", {
    className: d.__invalid_container,
    children: [(0, n.jsxs)(a.Button, {
      look: a.Button.Looks.BLANK,
      innerClassName: d.backButtonContents,
      onClick: s,
      children: [(0, n.jsx)(a.ArrowSmallRightIcon, {
        size: "md",
        color: "currentColor",
        className: d.arrowIcon
      }), E.Z.Messages.GUILD_ROLE_SUBSCRIPTIONS_MANAGE_SUBSCRIPTIONS_PAGE_BACK_BUTTON_CTA]
    }), (0, n.jsx)(a.Spacer, {
      size: 10
    }), (0, n.jsx)(a.FormTitle, {
      tag: "h1",
      children: E.Z.Messages.GUILD_ROLE_SUBSCRIPTIONS_TITLE
    }), (0, n.jsx)(a.Text, {
      variant: "text-sm/normal",
      className: d.pageDescription,
      children: E.Z.Messages.GUILD_ROLE_MANAGE_SUBSCRIPTION_PAGE_DESCRIPTION
    }), (0, n.jsx)("div", {
      className: d.subscriptionsContainer,
      children: t.map(e => (0, n.jsx)(c.Z, {
        subscription: e
      }, e.id))
    })]
  })
}