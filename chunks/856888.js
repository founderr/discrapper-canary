"use strict";
s.r(t);
var a = s("735250");
s("470079");
var n = s("442837"),
  i = s("481060"),
  l = s("78839"),
  r = s("682864"),
  o = s("877453"),
  d = s("270144"),
  u = s("238847"),
  c = s("689938"),
  S = s("598497");
t.default = e => {
  let {
    onGoBack: t
  } = e, s = (0, n.useStateFromStores)([l.default], () => {
    var e;
    return null !== (e = l.default.getActiveApplicationSubscriptions()) && void 0 !== e ? e : []
  }), {
    loading: E
  } = (0, d.useFetchListingsForSubscriptions)(s), {
    loadState: T
  } = (0, d.useFetchUserApplicationSubscriptionEntitlements)();
  return E || T !== d.LoadState.LOADED ? (0, a.jsx)(i.Spinner, {}) : 0 === s.length ? null : (0, a.jsxs)("div", {
    className: S.__invalid_container,
    children: [(0, a.jsxs)(i.Button, {
      look: i.Button.Looks.BLANK,
      innerClassName: S.backButtonContents,
      onClick: t,
      children: [(0, a.jsx)(o.default, {
        className: S.arrowIcon
      }), c.default.Messages.APPLICATION_MANAGE_SUBSCRIPTION_PAGE_BACK_CTA]
    }), (0, a.jsx)(r.default, {
      size: 10
    }), (0, a.jsx)(i.FormTitle, {
      tag: "h1",
      children: c.default.Messages.APPLICATION_MANAGE_SUBSCRIPTION_PAGE_TITLE
    }), (0, a.jsx)(i.Text, {
      variant: "text-sm/normal",
      className: S.pageDescription,
      children: c.default.Messages.APPLICATION_MANAGE_SUBSCRIPTION_PAGE_DESCRIPTION
    }), (0, a.jsx)("div", {
      className: S.subscriptionsContainer,
      children: s.map(e => (0, a.jsx)(u.default, {
        subscription: e
      }, e.id))
    })]
  })
}