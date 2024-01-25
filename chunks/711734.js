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
  i = a("269096"),
  o = a("77078"),
  d = a("145131"),
  r = a("228408"),
  c = a("795010"),
  u = a("170213"),
  E = a("782340"),
  _ = a("669223"),
  A = a("434848");

function S(e) {
  let {
    className: t,
    onNext: a,
    onClose: s
  } = e, S = (0, r.useEmitAppealIngestionEvent)();
  return (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsxs)(o.ModalHeader, {
      direction: d.default.Direction.VERTICAL,
      className: A.header,
      separator: !1,
      children: [(0, l.jsx)("div", {
        className: _.iconContainer,
        children: (0, l.jsx)(i.CheckmarkLargeIcon, {
          color: o.tokens.colors.INTERACTIVE_ACTIVE,
          className: _.icon
        })
      }), (0, l.jsx)(o.Heading, {
        className: A.title,
        variant: "heading-xl/semibold",
        children: E.default.Messages.APPEAL_INGESTION_MODAL_REQUEST_SENT_HEADER
      }), (0, l.jsx)(o.Heading, {
        className: A.subtitle,
        color: "header-secondary",
        variant: "text-md/normal",
        children: E.default.Messages.APPEAL_INGESTION_MODAL_REQUEST_SENT_SUBHEADER
      }), null != s && (0, l.jsx)(o.ModalCloseButton, {
        className: A.closeButton,
        onClick: s
      })]
    }), (0, l.jsxs)(o.ModalContent, {
      className: n(_.modalContent, t),
      paddingFix: !1,
      children: [(0, l.jsx)(o.Heading, {
        variant: "heading-md/bold",
        color: "header-primary",
        className: _.actionsHeader,
        children: E.default.Messages.APPEAL_INGESTION_MODAL_REQUEST_SENT_ACTIONS_HEADER
      }), (0, l.jsx)(c.default, {
        text: E.default.Messages.APPEAL_INGESTION_MODAL_REQUEST_SENT_GUIDELINES_LINK,
        url: u.SafetyHubLinks.COMMUNITY_GUIDELINES,
        onClick: () => S(u.SafetyHubAnalyticsActions.ClickCommunityGuidelinesLink)
      }), (0, l.jsx)(c.default, {
        text: E.default.Messages.APPEAL_INGESTION_MODAL_REQUEST_SENT_RULES_LINK,
        url: u.SafetyHubLinks.WARNING_SYSTEM_HELPCENTER_LINK,
        onClick: () => S(u.SafetyHubAnalyticsActions.ClickWarningSystemHelpcenterLink)
      })]
    }), (0, l.jsx)(o.ModalFooter, {
      children: (0, l.jsx)(o.Button, {
        onClick: a,
        color: o.Button.Colors.BRAND,
        children: E.default.Messages.DONE
      })
    })]
  })
}