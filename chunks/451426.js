n.d(s, {
  Z: function() {
    return I
  }
}), n(47120);
var a = n(735250),
  l = n(470079),
  t = n(442837),
  i = n(481060),
  o = n(570140),
  r = n(285952),
  c = n(103879),
  d = n(236289),
  _ = n(788080),
  E = n(613734),
  N = n(981631),
  x = n(689938),
  A = n(393188),
  u = n(298196);

function I(e) {
  let {
    className: s,
    onClose: n,
    onNext: I,
    onBack: S
  } = e, T = (0, t.e7)([d.Z], () => d.Z.getAppealClassificationId()), {
    classification: C
  } = (0, E.YG)(null != T ? T : N.lds), h = (0, _.c7)(null == C ? void 0 : C.description), L = (0, t.e7)([d.Z], () => d.Z.getIsSubmitting()), m = (0, t.e7)([d.Z], () => d.Z.getAppealSignal()), M = (0, t.e7)([d.Z], () => d.Z.getFreeTextAppealReason()), [g, O] = l.useState(!1), [j, P] = l.useState(""), p = l.useCallback(e => {
    o.Z.dispatch({
      type: "SAFETY_HUB_APPEAL_SIGNAL_CUSTOM_INPUT_CHANGE",
      userInput: e
    })
  }, []), Z = l.useCallback(async () => {
    if (null !== T) try {
      P(""), await c.uR(T, m, M), null == I || I()
    } catch (s) {
      var e;
      P((0, _.Zs)(null === (e = s.body) || void 0 === e ? void 0 : e.code))
    }
  }, [T, m, M, I]);
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsxs)(i.ModalHeader, {
      direction: r.Z.Direction.VERTICAL,
      className: u.header,
      separator: !1,
      children: [(0, a.jsx)(i.Heading, {
        className: u.title,
        variant: "heading-xl/semibold",
        children: x.Z.Messages.APPEAL_INGESTION_MODAL_HEADER
      }), (0, a.jsx)(i.Text, {
        className: u.subtitle,
        color: "header-secondary",
        variant: "text-md/normal",
        children: x.Z.Messages.APPEAL_INGESTION_MODAL_CONFIRM_SUBMISSION_SUBHEADER
      }), null != n && (0, a.jsx)(i.ModalCloseButton, {
        className: u.closeButton,
        onClick: n
      })]
    }), (0, a.jsxs)(i.ModalContent, {
      className: s,
      paddingFix: !1,
      children: [(0, a.jsx)("ul", {
        className: A.listContainer,
        children: [(0, _.ox)(m), M].filter(e => e.length > 0).map((e, s) => (0, a.jsx)("li", {
          className: A.listItem,
          children: (0, a.jsx)(i.Text, {
            tag: "span",
            variant: "text-md/normal",
            children: e
          })
        }, s))
      }), (0, a.jsx)("div", {
        className: A.anchorContainer,
        children: (0, a.jsx)(i.Anchor, {
          onClick: () => O(e => !e),
          children: (0, a.jsx)(i.Heading, {
            variant: "heading-md/normal",
            color: "text-link",
            children: M.length > 0 ? x.Z.Messages.APPEAL_INGESTION_MODAL_CONFIRM_SUBMISSION_EDIT_DETAILS : x.Z.Messages.APPEAL_INGESTION_MODAL_CONFIRM_SUBMISSION_ADD_DETAILS
          })
        })
      }), g && (0, a.jsx)("div", {
        className: A.inputContainer,
        children: (0, a.jsx)(i.TextArea, {
          value: M,
          onChange: p
        })
      }), (0, a.jsx)("div", {
        className: u.policyContainer,
        children: (0, a.jsx)(i.Text, {
          variant: "text-md/semibold",
          children: h
        })
      }), (0, a.jsx)(i.Text, {
        variant: "text-xs/medium",
        color: "header-secondary",
        className: A.footerText,
        children: x.Z.Messages.APPEAL_INGESTION_MODAL_CONFIRM_SUBMISSION_FOOTER
      })]
    }), (0, a.jsxs)(i.ModalFooter, {
      direction: r.Z.Direction.VERTICAL,
      children: ["" !== j && (0, a.jsx)(i.Text, {
        className: A.errorText,
        variant: "text-lg/normal",
        color: "text-danger",
        children: j
      }), (0, a.jsxs)("div", {
        className: A.buttonContainer,
        children: [(0, a.jsx)(i.Button, {
          look: i.Button.Looks.LINK,
          color: i.Button.Colors.PRIMARY,
          onClick: S,
          disabled: L,
          children: x.Z.Messages.BACK
        }), (0, a.jsx)(i.Button, {
          onClick: Z,
          color: i.Button.Colors.RED,
          submitting: L,
          children: x.Z.Messages.SUBMIT
        })]
      })]
    })]
  })
}