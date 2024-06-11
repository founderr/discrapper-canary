"use strict";
s.r(t);
var a = s("735250");
s("470079");
var n = s("442837"),
  i = s("481060"),
  l = s("78839"),
  r = s("877453"),
  o = s("270144"),
  d = s("238847"),
  u = s("689938"),
  c = s("598497");
t.default = e => {
  let {
    onGoBack: t
  } = e, s = (0, n.useStateFromStores)([l.default], () => {
    var e;
    return null !== (e = l.default.getActiveApplicationSubscriptions()) && void 0 !== e ? e : []
  }), {
    loading: S
  } = (0, o.useFetchListingsForSubscriptions)(s), {
    loadState: E
  } = (0, o.useFetchUserApplicationSubscriptionEntitlements)();
  return S || E !== o.LoadState.LOADED ? (0, a.jsx)(i.Spinner, {}) : 0 === s.length ? null : (0, a.jsxs)("div", {
    className: c.__invalid_container,
    children: [(0, a.jsxs)(i.Button, {
      look: i.Button.Looks.BLANK,
      innerClassName: c.backButtonContents,
      onClick: t,
      children: [(0, a.jsx)(r.default, {
        className: c.arrowIcon
      }), u.default.Messages.APPLICATION_MANAGE_SUBSCRIPTION_PAGE_BACK_CTA]
    }), (0, a.jsx)(i.Spacer, {
      size: 10
    }), (0, a.jsx)(i.FormTitle, {
      tag: "h1",
      children: u.default.Messages.APPLICATION_MANAGE_SUBSCRIPTION_PAGE_TITLE
    }), (0, a.jsx)(i.Text, {
      variant: "text-sm/normal",
      className: c.pageDescription,
      children: u.default.Messages.APPLICATION_MANAGE_SUBSCRIPTION_PAGE_DESCRIPTION
    }), (0, a.jsx)("div", {
      className: c.subscriptionsContainer,
      children: s.map(e => (0, a.jsx)(d.default, {
        subscription: e
      }, e.id))
    })]
  })
}