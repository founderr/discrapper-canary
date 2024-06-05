"use strict";
t.r(s);
var a = t("735250");
t("470079");
var l = t("780384"),
  i = t("481060"),
  r = t("410030"),
  n = t("976644"),
  u = t("466111"),
  o = t("689938"),
  d = t("554965"),
  c = t("982404"),
  _ = t("299156");
s.default = function(e) {
  let {
    churnUserDiscountOffer: s,
    onDiscountClaim: t,
    onContinue: m
  } = e, f = (0, r.default)(), I = (0, l.isThemeDark)(f) ? c : _;
  return null == s ? null : (0, a.jsxs)("div", {
    className: d.churnFooterContainer,
    children: [(0, a.jsx)("div", {
      className: d.churnFooterGlow
    }), (0, a.jsx)("div", {
      className: d.churnFooterTopBorder
    }), (0, a.jsx)("div", {
      className: d.churnFooterContent,
      children: (0, a.jsxs)("div", {
        className: d.churnFooterContentBody,
        children: [(0, a.jsx)("img", {
          alt: "",
          src: I,
          className: d.churnFooterIcon
        }), (0, a.jsxs)("div", {
          className: d.churnFooterContentBodyInner,
          children: [(0, a.jsx)(i.Text, {
            variant: "text-md/medium",
            className: d.churnFooterCopy,
            children: o.default.Messages.CHURN_DISCOUNT_DESCRIPTION.format({
              percent: s.discount.amount,
              numMonths: s.discount.user_usage_limit
            })
          }), (0, a.jsxs)("div", {
            className: d.churnFooterCTAs,
            children: [(0, a.jsxs)(n.default, {
              className: d.churnFooterClaimCTA,
              innerClassName: d.churnFooterClaimCTAInner,
              look: i.ButtonLooks.OUTLINED,
              color: i.ButtonColors.CUSTOM,
              onClick: () => null == t ? void 0 : t(),
              children: [(0, a.jsx)(u.default, {
                height: 16,
                width: 16,
                className: d.churnFooterClaimIcon
              }), (0, a.jsx)(i.Text, {
                variant: "text-sm/semibold",
                className: d.churnFooterClaimCopy,
                children: o.default.Messages.CHURN_DISCOUNT_CLAIM
              })]
            }), (0, a.jsx)(i.Button, {
              onClick: () => null == m ? void 0 : m(),
              children: o.default.Messages.CONTINUE
            })]
          })]
        })]
      })
    })]
  })
}