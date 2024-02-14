"use strict";
a.r(t), a.d(t, {
  default: function() {
    return N
  }
}), a("222007");
var l = a("37983"),
  s = a("884691"),
  n = a("446674"),
  i = a("77078"),
  o = a("913144"),
  d = a("145131"),
  r = a("781324"),
  c = a("646356"),
  u = a("736393"),
  E = a("698609"),
  _ = a("782340"),
  A = a("803779"),
  S = a("221389");

function N(e) {
  let {
    className: t,
    onClose: a,
    onNext: N,
    onBack: I
  } = e, x = (0, n.useStateFromStores)([c.default], () => c.default.getAppealClassificationId()), {
    classification: f
  } = (0, E.useSafetyHubClassification)(null != x ? x : ""), T = (0, u.capitalizeText)(null == f ? void 0 : f.description), g = (0, n.useStateFromStores)([c.default], () => c.default.getIsSubmitting()), p = (0, n.useStateFromStores)([c.default], () => c.default.getAppealSignal()), m = (0, n.useStateFromStores)([c.default], () => c.default.getFreeTextAppealReason()), [C, L] = s.useState(!1), [h, M] = s.useState(!1), O = s.useCallback(e => {
    o.default.dispatch({
      type: "SAFETY_HUB_APPEAL_SIGNAL_CUSTOM_INPUT_CHANGE",
      userInput: e
    })
  }, []), j = s.useCallback(async () => {
    if (null !== x) try {
      M(!1), await r.requestReview(x, p, m), null == N || N()
    } catch (e) {
      M(!0)
    }
  }, [x, p, m, N]);
  return (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsxs)(i.ModalHeader, {
      direction: d.default.Direction.VERTICAL,
      className: S.header,
      separator: !1,
      children: [(0, l.jsx)(i.Heading, {
        className: S.title,
        variant: "heading-xl/semibold",
        children: _.default.Messages.APPEAL_INGESTION_MODAL_HEADER
      }), (0, l.jsx)(i.Text, {
        className: S.subtitle,
        color: "header-secondary",
        variant: "text-md/normal",
        children: _.default.Messages.APPEAL_INGESTION_MODAL_CONFIRM_SUBMISSION_SUBHEADER
      }), null != a && (0, l.jsx)(i.ModalCloseButton, {
        className: S.closeButton,
        onClick: a
      })]
    }), (0, l.jsxs)(i.ModalContent, {
      className: t,
      paddingFix: !1,
      children: [(0, l.jsx)("ul", {
        className: A.listContainer,
        children: [(0, u.getAppealSignalDisplayText)(p), m].filter(e => e.length > 0).map((e, t) => (0, l.jsx)("li", {
          className: A.listItem,
          children: (0, l.jsx)(i.Text, {
            tag: "span",
            variant: "text-md/normal",
            children: e
          })
        }, t))
      }), (0, l.jsx)("div", {
        className: A.anchorContainer,
        children: (0, l.jsx)(i.Anchor, {
          onClick: () => L(e => !e),
          children: (0, l.jsx)(i.Heading, {
            variant: "heading-md/normal",
            color: "text-link",
            children: m.length > 0 ? _.default.Messages.APPEAL_INGESTION_MODAL_CONFIRM_SUBMISSION_EDIT_DETAILS : _.default.Messages.APPEAL_INGESTION_MODAL_CONFIRM_SUBMISSION_ADD_DETAILS
          })
        })
      }), C && (0, l.jsx)("div", {
        className: A.inputContainer,
        children: (0, l.jsx)(i.TextArea, {
          value: m,
          onChange: O
        })
      }), (0, l.jsx)("div", {
        className: S.policyContainer,
        children: (0, l.jsx)(i.Text, {
          variant: "text-md/semibold",
          children: T
        })
      }), (0, l.jsx)(i.Text, {
        variant: "text-xs/medium",
        color: "header-secondary",
        className: A.footerText,
        children: _.default.Messages.APPEAL_INGESTION_MODAL_CONFIRM_SUBMISSION_FOOTER
      })]
    }), (0, l.jsxs)(i.ModalFooter, {
      direction: d.default.Direction.VERTICAL,
      children: [h && (0, l.jsx)(i.Text, {
        className: A.errorText,
        variant: "text-lg/normal",
        color: "text-danger",
        children: _.default.Messages.APPEAL_INGESTION_MODAL_CONFIRM_SUBMISSION_ERROR
      }), (0, l.jsxs)("div", {
        className: A.buttonContainer,
        children: [(0, l.jsx)(i.Button, {
          look: i.Button.Looks.LINK,
          color: i.Button.Colors.PRIMARY,
          onClick: I,
          disabled: g,
          children: _.default.Messages.BACK
        }), (0, l.jsx)(i.Button, {
          onClick: j,
          color: i.Button.Colors.RED,
          submitting: g,
          children: _.default.Messages.SUBMIT
        })]
      })]
    })]
  })
}