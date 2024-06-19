s.r(t);
var a = s(735250);
s(470079);
var i = s(442837),
  n = s(481060),
  l = s(812206),
  o = s(285952),
  r = s(63063),
  N = s(981631),
  c = s(689938),
  M = s(614904);
let E = r.Z.getArticleURL(N.BhN.MISSING_ENTITLEMENT);
t.default = i.ZP.connectStores([l.Z], e => {
  let {
    applicationId: t
  } = e;
  return {
    application: l.Z.getApplication(t)
  }
})(function(e) {
  let {
    application: t,
    transitionState: s,
    onClose: i
  } = e;
  return (0, a.jsxs)(n.ModalRoot, {
    transitionState: s,
    size: n.ModalSize.MEDIUM,
    children: [(0, a.jsxs)(n.ModalHeader, {
      align: o.Z.Align.CENTER,
      justify: o.Z.Justify.BETWEEN,
      children: [(0, a.jsx)(n.FormTitle, {
        tag: n.FormTitleTags.H4,
        children: null != t ? c.Z.Messages.MISSING_ENTITLEMENT_MODAL_HEADER.format({
          applicationName: t.name
        }) : c.Z.Messages.MISSING_ENTITLEMENT_MODAL_HEADER_UNKNOWN_APPLICATION
      }), (0, a.jsx)(n.ModalCloseButton, {
        onClick: i
      })]
    }), (0, a.jsxs)(n.ModalContent, {
      children: [(0, a.jsx)("div", {
        className: M.missingEntitlementImage
      }), (0, a.jsx)(n.Text, {
        className: M.text,
        variant: "text-md/normal",
        children: null != t ? c.Z.Messages.MISSING_ENTITLEMENT_MODAL_BODY.format({
          applicationName: t.name,
          supportArticleURL: E
        }) : c.Z.Messages.MISSING_ENTITLEMENT_MODAL_BODY_UNKNOWN_APPLICATION.format({
          supportArticleURL: E
        })
      })]
    }), (0, a.jsx)(n.ModalFooter, {
      children: (0, a.jsx)(n.Button, {
        onClick: i,
        children: c.Z.Messages.OKAY
      })
    })]
  })
})