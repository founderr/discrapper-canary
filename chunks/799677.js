s.r(a), s.d(a, {
  default: function() {
    return c
  }
});
var t = s(735250);
s(470079);
var l = s(481060),
  n = s(626135),
  i = s(39604),
  o = s(981631),
  d = s(689938),
  r = s(534722);

function c(e) {
  let {
    transitionState: a,
    onClose: s,
    onBeforeDelete: c,
    onAfterDelete: _,
    clip: u
  } = e;
  return (0, t.jsxs)(l.ModalRoot, {
    size: l.ModalSize.SMALL,
    transitionState: a,
    className: r.__invalid_modal,
    children: [(0, t.jsxs)(l.ModalContent, {
      className: r.modalContent,
      children: [(0, t.jsxs)("div", {
        className: r.header,
        children: [(0, t.jsx)(l.Heading, {
          className: r.__invalid_title,
          variant: "text-md/semibold",
          color: "header-primary",
          children: d.Z.Messages.CLIPS_DELETE_MODAL_TITLE
        }), (0, t.jsx)(l.ModalCloseButton, {
          onClick: s
        })]
      }), (0, t.jsx)(l.Text, {
        variant: "text-md/medium",
        color: "text-normal",
        className: r.__invalid_body,
        children: d.Z.Messages.CLIPS_DELETE_MODAL_SUBTITLE
      })]
    }), (0, t.jsx)(l.ModalFooter, {
      children: (0, t.jsx)(l.Button, {
        color: l.Button.Colors.RED,
        onClick: function() {
          null == c || c(), i.sS(u.filepath), _(), n.default.track(o.rMx.CLIP_DELETED)
        },
        children: d.Z.Messages.CLIPS_DELETE_CLIP
      })
    })]
  })
}