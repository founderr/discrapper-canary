n.d(s, {
  Z: function() {
    return u
  }
});
var a = n(735250);
n(470079);
var l = n(120356),
  t = n.n(l),
  i = n(481060),
  o = n(285952),
  r = n(219230),
  c = n(788080),
  d = n(548647),
  _ = n(696375),
  E = n(97568),
  N = n(800530),
  x = n(689938),
  A = n(298196);

function u(e) {
  var s, n;
  let {
    classification: l,
    isSpam: u = !1,
    isCoppa: I = !1,
    className: S,
    onClose: T,
    onNext: C
  } = e, h = (0, d.n)(), L = null !== (s = null == l ? void 0 : l.explainer_link) && void 0 !== s ? s : "", m = null != l && null != l.flagged_content && l.flagged_content.length > 0, M = (0, c.c7)(null == l ? void 0 : l.description), g = !u && !I, O = (0, r.B)("classification_evidence"), j = null != l && ((0, c.FB)(l) && O || m);
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsxs)(i.ModalHeader, {
      direction: o.Z.Direction.VERTICAL,
      className: A.header,
      separator: !1,
      children: [(0, a.jsx)(i.Heading, {
        className: A.title,
        variant: "heading-xl/semibold",
        children: x.Z.Messages.APPEAL_INGESTION_MODAL_HEADER
      }), (0, a.jsx)(i.Text, {
        className: A.subtitle,
        color: "header-secondary",
        variant: "text-md/normal",
        children: x.Z.Messages.APPEAL_INGESTION_MODAL_SPEED_BUMP_SUBHEADER
      }), null != T && (0, a.jsx)(i.ModalCloseButton, {
        className: A.closeButton,
        onClick: T
      })]
    }), (0, a.jsxs)(i.ModalContent, {
      className: t()(A.modalContent, !j && A.evidenceOffset, S),
      paddingFix: !1,
      children: [j && (0, a.jsx)(E.s, {
        flaggedContent: null !== (n = l.flagged_content) && void 0 !== n ? n : []
      }), (0, a.jsx)(i.Text, {
        className: A.optionHeader,
        color: "header-secondary",
        variant: "text-xs/bold",
        children: x.Z.Messages.APPEAL_INGESTION_MODAL_SPEED_BUMP_POLICY_HEADER
      }), (0, a.jsx)("div", {
        className: A.policyContainer,
        children: (0, a.jsx)(i.Text, {
          variant: "text-md/semibold",
          children: M
        })
      }), I && (0, a.jsx)(_.Z, {
        url: N.sQ.AGE_VERIFICATION_LINK,
        text: x.Z.Messages.APPEAL_INGESTION_AGE_VERIFICATION_LINK_TITLE,
        onClick: () => h(N.n0.ClickAgeVerificationLink)
      }), u && !I && (0, a.jsx)(_.Z, {
        url: N.sQ.SPAM_LINK,
        text: x.Z.Messages.APPEAL_INGESTION_MODAL_SPEED_BUMP_SUBMIT_SPAM,
        onClick: () => h(N.n0.ClickSpamWebformLink)
      }), !I && (0, a.jsx)(_.Z, {
        text: x.Z.Messages.APPEAL_INGESTION_LEARN_MORE_LINK_TITLE,
        url: L,
        onClick: () => h(N.n0.ClickLearnMoreLink)
      }), g && (0, a.jsx)(i.Text, {
        className: A.learnMore,
        variant: "text-xs/normal",
        children: x.Z.Messages.APPEAL_INGESTION_MODAL_SPEED_BUMP_LEARN_MORE_OTHER_OPTIONS_DSA.format()
      })]
    }), g && (0, a.jsx)(i.ModalFooter, {
      children: (0, a.jsx)(i.Button, {
        onClick: C,
        color: i.Button.Colors.BRAND,
        children: x.Z.Messages.NEXT
      })
    })]
  })
}