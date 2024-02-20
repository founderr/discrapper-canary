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
  A = a("782340"),
  _ = a("803779"),
  S = a("221389");

function N(e) {
  let {
    className: t,
    onClose: a,
    onNext: N,
    onBack: x
  } = e, I = (0, n.useStateFromStores)([c.default], () => c.default.getAppealClassificationId()), {
    classification: f
  } = (0, E.useSafetyHubClassification)(null != I ? I : ""), T = (0, u.capitalizeText)(null == f ? void 0 : f.description), g = (0, n.useStateFromStores)([c.default], () => c.default.getIsSubmitting()), p = (0, n.useStateFromStores)([c.default], () => c.default.getAppealSignal()), m = (0, n.useStateFromStores)([c.default], () => c.default.getFreeTextAppealReason()), [C, h] = s.useState(!1), [L, M] = s.useState(""), O = s.useCallback(e => {
    o.default.dispatch({
      type: "SAFETY_HUB_APPEAL_SIGNAL_CUSTOM_INPUT_CHANGE",
      userInput: e
    })
  }, []), j = s.useCallback(async () => {
    if (null !== I) try {
      M(""), await r.requestReview(I, p, m), null == N || N()
    } catch (t) {
      var e;
      M((0, u.getRequestReviewErrorFromCode)(null === (e = t.body) || void 0 === e ? void 0 : e.code))
    }
  }, [I, p, m, N]);
  return (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsxs)(i.ModalHeader, {
      direction: d.default.Direction.VERTICAL,
      className: S.header,
      separator: !1,
      children: [(0, l.jsx)(i.Heading, {
        className: S.title,
        variant: "heading-xl/semibold",
        children: A.default.Messages.APPEAL_INGESTION_MODAL_HEADER
      }), (0, l.jsx)(i.Text, {
        className: S.subtitle,
        color: "header-secondary",
        variant: "text-md/normal",
        children: A.default.Messages.APPEAL_INGESTION_MODAL_CONFIRM_SUBMISSION_SUBHEADER
      }), null != a && (0, l.jsx)(i.ModalCloseButton, {
        className: S.closeButton,
        onClick: a
      })]
    }), (0, l.jsxs)(i.ModalContent, {
      className: t,
      paddingFix: !1,
      children: [(0, l.jsx)("ul", {
        className: _.listContainer,
        children: [(0, u.getAppealSignalDisplayText)(p), m].filter(e => e.length > 0).map((e, t) => (0, l.jsx)("li", {
          className: _.listItem,
          children: (0, l.jsx)(i.Text, {
            tag: "span",
            variant: "text-md/normal",
            children: e
          })
        }, t))
      }), (0, l.jsx)("div", {
        className: _.anchorContainer,
        children: (0, l.jsx)(i.Anchor, {
          onClick: () => h(e => !e),
          children: (0, l.jsx)(i.Heading, {
            variant: "heading-md/normal",
            color: "text-link",
            children: m.length > 0 ? A.default.Messages.APPEAL_INGESTION_MODAL_CONFIRM_SUBMISSION_EDIT_DETAILS : A.default.Messages.APPEAL_INGESTION_MODAL_CONFIRM_SUBMISSION_ADD_DETAILS
          })
        })
      }), C && (0, l.jsx)("div", {
        className: _.inputContainer,
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
        className: _.footerText,
        children: A.default.Messages.APPEAL_INGESTION_MODAL_CONFIRM_SUBMISSION_FOOTER
      })]
    }), (0, l.jsxs)(i.ModalFooter, {
      direction: d.default.Direction.VERTICAL,
      children: ["" !== L && (0, l.jsx)(i.Text, {
        className: _.errorText,
        variant: "text-lg/normal",
        color: "text-danger",
        children: L
      }), (0, l.jsxs)("div", {
        className: _.buttonContainer,
        children: [(0, l.jsx)(i.Button, {
          look: i.Button.Looks.LINK,
          color: i.Button.Colors.PRIMARY,
          onClick: x,
          disabled: g,
          children: A.default.Messages.BACK
        }), (0, l.jsx)(i.Button, {
          onClick: j,
          color: i.Button.Colors.RED,
          submitting: g,
          children: A.default.Messages.SUBMIT
        })]
      })]
    })]
  })
}