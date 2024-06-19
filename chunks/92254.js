a.r(s), a.d(s, {
  default: function() {
    return x
  }
}), a(47120);
var t = a(735250),
  i = a(470079),
  o = a(120356),
  n = a.n(o),
  l = a(481060),
  r = a(153124),
  d = a(309081),
  m = a(35463),
  u = a(489887),
  c = a(689938),
  h = a(411342);
let C = (0, r.hQ)();

function x(e) {
  var s;
  let {
    channelId: a,
    answer: o,
    onSave: r,
    transitionState: x,
    onClose: E
  } = e, {
    emoji: L,
    hasUpload: j,
    upload: I,
    mediaUrl: M,
    mediaFilename: g
  } = (0, m.Z)({
    channelId: a,
    localCreationAnswerId: o.localCreationAnswerId,
    image: o.image
  }), [T, p] = i.useState(null !== (s = null == I ? void 0 : I.description) && void 0 !== s ? s : "");
  return (0, t.jsxs)(l.ModalRoot, {
    size: l.ModalSize.DYNAMIC,
    className: n()(h.modal, {
      [h.hasImage]: j,
      [h.hasEmoji]: null != L
    }),
    transitionState: x,
    "aria-label": c.Z.Messages.CREATE_POLL_EDIT_IMAGE_DESCRIPTION,
    children: [(0, t.jsx)(d.I, {
      hasUpload: j,
      mediaUrl: M,
      mediaFilename: g,
      imageClassName: h.imagePreview,
      emoji: L,
      emojiClassName: h.emojiPreview
    }), (0, t.jsxs)(l.ModalContent, {
      className: h.content,
      children: [(0, t.jsx)(l.FormTitle, {
        tag: l.FormTitleTags.LABEL,
        htmlFor: C,
        children: c.Z.Messages.CREATE_POLL_ALT_TEXT_LABEL
      }), (0, t.jsx)(l.TextInput, {
        id: C,
        value: T,
        inputClassName: h.input,
        onChange: p,
        maxLength: u.WA,
        autoFocus: !0
      })]
    }), (0, t.jsxs)(l.ModalFooter, {
      className: h.footer,
      children: [(0, t.jsx)(l.Button, {
        look: l.ButtonLooks.FILLED,
        size: l.Button.Sizes.MEDIUM,
        onClick: () => {
          null != T && r(T), E()
        },
        children: (0, t.jsx)(l.Text, {
          variant: "text-md/semibold",
          children: c.Z.Messages.SAVE
        })
      }), (0, t.jsx)(l.Button, {
        look: l.ButtonLooks.LINK,
        size: l.Button.Sizes.MEDIUM,
        onClick: E,
        children: (0, t.jsx)(l.Text, {
          variant: "text-md/semibold",
          children: c.Z.Messages.CANCEL
        })
      })]
    })]
  })
}