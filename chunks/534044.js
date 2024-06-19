n.d(s, {
  Z: function() {
    return A
  }
});
var a = n(735250);
n(470079);
var l = n(120356),
  t = n.n(l),
  i = n(481060),
  o = n(285952),
  r = n(548647),
  c = n(696375),
  d = n(800530),
  _ = n(689938),
  E = n(570415),
  N = n(298196),
  x = n(160557);

function A(e) {
  let {
    className: s,
    onNext: n,
    onClose: l
  } = e, A = (0, r.n)();
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsxs)(i.ModalHeader, {
      direction: o.Z.Direction.VERTICAL,
      className: N.header,
      separator: !1,
      children: [(0, a.jsx)("div", {
        className: E.iconContainer,
        children: (0, a.jsx)("img", {
          src: x,
          alt: "",
          className: E.icon
        })
      }), (0, a.jsx)(i.Heading, {
        className: N.title,
        variant: "heading-xl/semibold",
        children: _.Z.Messages.APPEAL_INGESTION_MODAL_REQUEST_SENT_HEADER
      }), (0, a.jsx)(i.Heading, {
        className: N.subtitle,
        color: "header-secondary",
        variant: "text-md/normal",
        children: _.Z.Messages.APPEAL_INGESTION_MODAL_REQUEST_SENT_SUBHEADER
      }), null != l && (0, a.jsx)(i.ModalCloseButton, {
        className: N.closeButton,
        onClick: l
      })]
    }), (0, a.jsxs)(i.ModalContent, {
      className: t()(E.modalContent, s),
      paddingFix: !1,
      children: [(0, a.jsx)(i.Heading, {
        variant: "heading-md/bold",
        color: "header-primary",
        className: E.actionsHeader,
        children: _.Z.Messages.APPEAL_INGESTION_MODAL_REQUEST_SENT_ACTIONS_HEADER
      }), (0, a.jsx)(c.Z, {
        text: _.Z.Messages.APPEAL_INGESTION_MODAL_REQUEST_SENT_GUIDELINES_LINK,
        url: d.sQ.COMMUNITY_GUIDELINES,
        onClick: () => A(d.n0.ClickCommunityGuidelinesLink)
      }), (0, a.jsx)(c.Z, {
        text: _.Z.Messages.APPEAL_INGESTION_MODAL_REQUEST_SENT_RULES_LINK,
        url: d.sQ.WARNING_SYSTEM_HELPCENTER_LINK,
        onClick: () => A(d.n0.ClickWarningSystemHelpcenterLink)
      })]
    }), (0, a.jsx)(i.ModalFooter, {
      children: (0, a.jsx)(i.Button, {
        onClick: n,
        color: i.Button.Colors.BRAND,
        children: _.Z.Messages.DONE
      })
    })]
  })
}