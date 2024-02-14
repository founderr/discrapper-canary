"use strict";
a.r(t), a.d(t, {
  default: function() {
    return S
  }
});
var l = a("37983");
a("884691");
var s = a("414456"),
  n = a.n(s),
  i = a("77078"),
  o = a("145131"),
  d = a("736393"),
  r = a("228408"),
  c = a("795010"),
  u = a("380676"),
  E = a("170213"),
  _ = a("782340"),
  A = a("221389");

function S(e) {
  var t, a;
  let {
    classification: s,
    isSpam: S = !1,
    isCoppa: N = !1,
    className: I,
    onClose: x,
    onNext: f
  } = e, T = (0, r.useEmitAppealIngestionEvent)(), g = null !== (t = null == s ? void 0 : s.explainer_link) && void 0 !== t ? t : "", p = null != s && null != s.flagged_content && s.flagged_content.length > 0, m = (0, d.capitalizeText)(null == s ? void 0 : s.description), C = !S && !N, L = p && !(0, d.isGuildClassification)(s);
  return (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsxs)(i.ModalHeader, {
      direction: o.default.Direction.VERTICAL,
      className: A.header,
      separator: !1,
      children: [(0, l.jsx)(i.Heading, {
        className: A.title,
        variant: "heading-xl/semibold",
        children: _.default.Messages.APPEAL_INGESTION_MODAL_HEADER
      }), (0, l.jsx)(i.Text, {
        className: A.subtitle,
        color: "header-secondary",
        variant: "text-md/normal",
        children: _.default.Messages.APPEAL_INGESTION_MODAL_SPEED_BUMP_SUBHEADER
      }), null != x && (0, l.jsx)(i.ModalCloseButton, {
        className: A.closeButton,
        onClick: x
      })]
    }), (0, l.jsxs)(i.ModalContent, {
      className: n(A.modalContent, !L && A.evidenceOffset, I),
      paddingFix: !1,
      children: [L && (0, l.jsx)(u.ClassificationEvidence, {
        flaggedContent: null !== (a = s.flagged_content) && void 0 !== a ? a : []
      }), (0, l.jsx)(i.Text, {
        className: A.optionHeader,
        color: "header-secondary",
        variant: "text-xs/bold",
        children: _.default.Messages.APPEAL_INGESTION_MODAL_SPEED_BUMP_POLICY_HEADER
      }), (0, l.jsx)("div", {
        className: A.policyContainer,
        children: (0, l.jsx)(i.Text, {
          variant: "text-md/semibold",
          children: m
        })
      }), N && (0, l.jsx)(c.default, {
        url: E.SafetyHubLinks.AGE_VERIFICATION_LINK,
        text: _.default.Messages.APPEAL_INGESTION_AGE_VERIFICATION_LINK_TITLE,
        onClick: () => T(E.SafetyHubAnalyticsActions.ClickAgeVerificationLink)
      }), S && !N && (0, l.jsx)(c.default, {
        url: E.SafetyHubLinks.SPAM_LINK,
        text: _.default.Messages.APPEAL_INGESTION_MODAL_SPEED_BUMP_SUBMIT_SPAM,
        onClick: () => T(E.SafetyHubAnalyticsActions.ClickSpamWebformLink)
      }), !N && (0, l.jsx)(c.default, {
        text: _.default.Messages.APPEAL_INGESTION_LEARN_MORE_LINK_TITLE,
        url: g,
        onClick: () => T(E.SafetyHubAnalyticsActions.ClickLearnMoreLink)
      }), C && (0, l.jsx)(i.Text, {
        className: A.learnMore,
        variant: "text-xs/normal",
        children: _.default.Messages.APPEAL_INGESTION_MODAL_SPEED_BUMP_LEARN_MORE_OTHER_OPTIONS_DSA.format()
      })]
    }), C && (0, l.jsx)(i.ModalFooter, {
      children: (0, l.jsx)(i.Button, {
        onClick: f,
        color: i.Button.Colors.BRAND,
        children: _.default.Messages.NEXT
      })
    })]
  })
}