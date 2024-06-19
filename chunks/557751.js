a.r(s), a.d(s, {
  default: function() {
    return l
  }
});
var n = a(735250);
a(470079);
var t = a(481060),
  i = a(701488),
  r = a(689938),
  o = a(57465),
  E = a(221886);

function l(e) {
  let {
    application: s,
    onCancel: a,
    onClose: l,
    onConfirm: c,
    ...d
  } = e;
  return (0, n.jsxs)(t.ModalRoot, {
    role: "alertdialog",
    transitionState: d.transitionState,
    className: o.modalRoot,
    children: [(0, n.jsx)("div", {
      className: o.birbContainer,
      children: (0, n.jsx)("img", {
        src: E,
        className: o.announcementBirb,
        alt: r.Z.Messages.EMBEDDED_ACTIVITIES_EXTERNAL_APP_CONFIRM_ANNOUNCEMENT_BIRD_A11Y_LABEL
      })
    }), (0, n.jsxs)(t.ModalContent, {
      className: o.modalContent,
      children: [(0, n.jsx)(t.Text, {
        variant: "eyebrow",
        className: o.eyebrow,
        children: r.Z.Messages.EMBEDDED_ACTIVITIES_EXTERNAL_APP_CONFIRM_HEADS_UP
      }), (0, n.jsx)(t.Heading, {
        variant: "heading-lg/bold",
        className: o.header,
        children: r.Z.Messages.EMBEDDED_ACTIVITIES_EXTERNAL_APP_CONFIRM_TITLE.format({
          activityName: s.name
        })
      }), (0, n.jsx)(t.Text, {
        variant: "text-sm/normal",
        className: o.subHeader,
        children: r.Z.Messages.EMBEDDED_ACTIVITIES_EXTERNAL_APP_CONFIRM_SUBTITLE
      }), (0, n.jsxs)("div", {
        className: o.buttonContainer,
        children: [(0, n.jsx)(t.Button, {
          size: t.Button.Sizes.LARGE,
          onClick: () => {
            c(), l()
          },
          children: r.Z.Messages.CONTINUE
        }), (0, n.jsx)(t.Button, {
          size: t.Button.Sizes.LARGE,
          onClick: () => {
            a(), l()
          },
          color: t.Button.Colors.PRIMARY,
          children: r.Z.Messages.CANCEL
        }), (0, n.jsx)(t.Text, {
          variant: "text-xs/normal",
          children: (0, n.jsx)(t.Anchor, {
            href: i.OF,
            children: r.Z.Messages.EMBEDDED_ACTIVITIES_EXTERNAL_APP_LEARN_MORE
          })
        })]
      })]
    })]
  })
}