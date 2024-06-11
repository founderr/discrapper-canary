"use strict";
s.r(t);
var a = s("735250");
s("470079");
var n = s("873546"),
  i = s("481060"),
  l = s("270237"),
  r = s("877453"),
  o = s("584825"),
  d = s("892729"),
  u = s("949914"),
  c = s("689938"),
  S = s("591537");
t.default = e => {
  let {
    onGoBack: t
  } = e, s = (0, d.default)(), {
    loading: E
  } = (0, o.useFetchListingsForSubscriptions)(s);
  return ((0, l.default)(n.isMobile ? "role-subscriptions-user-setting" : void 0), E) ? (0, a.jsx)(i.Spinner, {}) : 0 === s.length ? null : (0, a.jsxs)("div", {
    className: S.__invalid_container,
    children: [(0, a.jsxs)(i.Button, {
      look: i.Button.Looks.BLANK,
      innerClassName: S.backButtonContents,
      onClick: t,
      children: [(0, a.jsx)(r.default, {
        className: S.arrowIcon
      }), c.default.Messages.GUILD_ROLE_SUBSCRIPTIONS_MANAGE_SUBSCRIPTIONS_PAGE_BACK_BUTTON_CTA]
    }), (0, a.jsx)(i.Spacer, {
      size: 10
    }), (0, a.jsx)(i.FormTitle, {
      tag: "h1",
      children: c.default.Messages.GUILD_ROLE_SUBSCRIPTIONS_TITLE
    }), (0, a.jsx)(i.Text, {
      variant: "text-sm/normal",
      className: S.pageDescription,
      children: c.default.Messages.GUILD_ROLE_MANAGE_SUBSCRIPTION_PAGE_DESCRIPTION
    }), (0, a.jsx)("div", {
      className: S.subscriptionsContainer,
      children: s.map(e => (0, a.jsx)(u.default, {
        subscription: e
      }, e.id))
    })]
  })
}