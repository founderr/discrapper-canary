"use strict";
t.r(s);
var a = t("735250");
t("470079");
var l = t("780384"),
  i = t("481060"),
  r = t("410030"),
  n = t("466111"),
  o = t("689938"),
  u = t("554965"),
  d = t("982404"),
  c = t("299156");
s.default = function(e) {
  let {
    churnUserDiscountOffer: s,
    onDiscountClaim: t,
    onContinue: _
  } = e, m = (0, r.default)(), I = (0, l.isThemeDark)(m) ? d : c;
  return null == s ? null : (0, a.jsxs)("div", {
    className: u.churnFooterContainer,
    children: [(0, a.jsx)("div", {
      className: u.churnFooterGlow
    }), (0, a.jsx)("div", {
      className: u.churnFooterTopBorder
    }), (0, a.jsx)("div", {
      className: u.churnFooterContent,
      children: (0, a.jsxs)("div", {
        className: u.churnFooterContentBody,
        children: [(0, a.jsx)("img", {
          alt: "",
          src: I,
          className: u.churnFooterIcon
        }), (0, a.jsxs)("div", {
          className: u.churnFooterContentBodyInner,
          children: [(0, a.jsx)(i.Text, {
            variant: "text-md/medium",
            className: u.churnFooterCopy,
            children: o.default.Messages.CHURN_DISCOUNT_DESCRIPTION.format({
              percent: s.discount.amount,
              numMonths: s.discount.user_usage_limit
            })
          }), (0, a.jsxs)("div", {
            className: u.churnFooterCTAs,
            children: [(0, a.jsxs)(i.ShinyButton, {
              className: u.churnFooterClaimCTA,
              innerClassName: u.churnFooterClaimCTAInner,
              look: i.ButtonLooks.OUTLINED,
              color: i.ButtonColors.CUSTOM,
              onClick: () => null == t ? void 0 : t(),
              children: [(0, a.jsx)(n.default, {
                height: 16,
                width: 16,
                className: u.churnFooterClaimIcon
              }), (0, a.jsx)(i.Text, {
                variant: "text-sm/semibold",
                className: u.churnFooterClaimCopy,
                children: o.default.Messages.CHURN_DISCOUNT_CLAIM
              })]
            }), (0, a.jsx)(i.Button, {
              onClick: () => null == _ ? void 0 : _(),
              children: o.default.Messages.CONTINUE
            })]
          })]
        })]
      })
    })]
  })
}