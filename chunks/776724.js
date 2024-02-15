"use strict";
a.r(t), a.d(t, {
  default: function() {
    return I
  }
}), a("222007");
var s = a("37983"),
  l = a("884691"),
  n = a("446674"),
  i = a("77078"),
  o = a("913144"),
  d = a("145131"),
  r = a("781324"),
  c = a("646356"),
  u = a("736393"),
  E = a("698609"),
  _ = a("49111"),
  A = a("782340"),
  S = a("803779"),
  N = a("221389");

function I(e) {
  let {
    className: t,
    onClose: a,
    onNext: I,
    onBack: x
  } = e, f = (0, n.useStateFromStores)([c.default], () => c.default.getAppealClassificationId()), {
    classification: T
  } = (0, E.useSafetyHubClassification)(null != f ? f : ""), g = (0, u.capitalizeText)(null == T ? void 0 : T.description), C = (0, n.useStateFromStores)([c.default], () => c.default.getIsSubmitting()), p = (0, n.useStateFromStores)([c.default], () => c.default.getAppealSignal()), L = (0, n.useStateFromStores)([c.default], () => c.default.getFreeTextAppealReason()), [m, M] = l.useState(!1), [h, O] = l.useState(""), P = l.useCallback(e => {
    o.default.dispatch({
      type: "SAFETY_HUB_APPEAL_SIGNAL_CUSTOM_INPUT_CHANGE",
      userInput: e
    })
  }, []), j = e => {
    if (e === _.AbortCodes.DSA_APPEAL_REQUEST_DEFLECTION) O(A.default.Messages.APPEAL_INGESTION_MODAL_CONFIRM_SUBMISSION_DEFLECTION_ERROR);
    else O(A.default.Messages.APPEAL_INGESTION_MODAL_CONFIRM_SUBMISSION_ERROR)
  }, v = l.useCallback(async () => {
    if (null !== f) try {
      O(""), await r.requestReview(f, p, L), null == I || I()
    } catch (t) {
      var e;
      j(null === (e = t.body) || void 0 === e ? void 0 : e.code)
    }
  }, [f, p, L, I]);
  return (0, s.jsxs)(s.Fragment, {
    children: [(0, s.jsxs)(i.ModalHeader, {
      direction: d.default.Direction.VERTICAL,
      className: N.header,
      separator: !1,
      children: [(0, s.jsx)(i.Heading, {
        className: N.title,
        variant: "heading-xl/semibold",
        children: A.default.Messages.APPEAL_INGESTION_MODAL_HEADER
      }), (0, s.jsx)(i.Text, {
        className: N.subtitle,
        color: "header-secondary",
        variant: "text-md/normal",
        children: A.default.Messages.APPEAL_INGESTION_MODAL_CONFIRM_SUBMISSION_SUBHEADER
      }), null != a && (0, s.jsx)(i.ModalCloseButton, {
        className: N.closeButton,
        onClick: a
      })]
    }), (0, s.jsxs)(i.ModalContent, {
      className: t,
      paddingFix: !1,
      children: [(0, s.jsx)("ul", {
        className: S.listContainer,
        children: [(0, u.getAppealSignalDisplayText)(p), L].filter(e => e.length > 0).map((e, t) => (0, s.jsx)("li", {
          className: S.listItem,
          children: (0, s.jsx)(i.Text, {
            tag: "span",
            variant: "text-md/normal",
            children: e
          })
        }, t))
      }), (0, s.jsx)("div", {
        className: S.anchorContainer,
        children: (0, s.jsx)(i.Anchor, {
          onClick: () => M(e => !e),
          children: (0, s.jsx)(i.Heading, {
            variant: "heading-md/normal",
            color: "text-link",
            children: L.length > 0 ? A.default.Messages.APPEAL_INGESTION_MODAL_CONFIRM_SUBMISSION_EDIT_DETAILS : A.default.Messages.APPEAL_INGESTION_MODAL_CONFIRM_SUBMISSION_ADD_DETAILS
          })
        })
      }), m && (0, s.jsx)("div", {
        className: S.inputContainer,
        children: (0, s.jsx)(i.TextArea, {
          value: L,
          onChange: P
        })
      }), (0, s.jsx)("div", {
        className: N.policyContainer,
        children: (0, s.jsx)(i.Text, {
          variant: "text-md/semibold",
          children: g
        })
      }), (0, s.jsx)(i.Text, {
        variant: "text-xs/medium",
        color: "header-secondary",
        className: S.footerText,
        children: A.default.Messages.APPEAL_INGESTION_MODAL_CONFIRM_SUBMISSION_FOOTER
      })]
    }), (0, s.jsxs)(i.ModalFooter, {
      direction: d.default.Direction.VERTICAL,
      children: ["" !== h && (0, s.jsx)(i.Text, {
        className: S.errorText,
        variant: "text-lg/normal",
        color: "text-danger",
        children: h
      }), (0, s.jsxs)("div", {
        className: S.buttonContainer,
        children: [(0, s.jsx)(i.Button, {
          look: i.Button.Looks.LINK,
          color: i.Button.Colors.PRIMARY,
          onClick: x,
          disabled: C,
          children: A.default.Messages.BACK
        }), (0, s.jsx)(i.Button, {
          onClick: v,
          color: i.Button.Colors.RED,
          submitting: C,
          children: A.default.Messages.SUBMIT
        })]
      })]
    })]
  })
}