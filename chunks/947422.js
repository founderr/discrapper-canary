a.r(s), a.d(s, {
  default: function() {
    return d
  }
});
var t = a(735250);
a(470079);
var n = a(481060),
  o = a(153124),
  i = a(689938),
  l = a(615714),
  r = a(298860);
let c = e => {
  let {
    text: s,
    icon: a,
    foreground: o
  } = e;
  return (0, t.jsxs)("div", {
    className: l.bulletContainer,
    children: [(0, t.jsx)("div", {
      className: l.iconContainer,
      children: (0, t.jsx)(a, {
        color: null != o ? o : "currentColor",
        className: l.bulletIcon,
        size: "custom",
        height: 40,
        width: 40
      })
    }), (0, t.jsx)(n.Text, {
      variant: "text-md/normal",
      color: "header-secondary",
      className: l.bulletText,
      children: s
    })]
  })
};

function d(e) {
  let {
    transitionState: s,
    onClose: a,
    ...d
  } = e, _ = (0, o.Dt)();
  return (0, t.jsx)(n.ModalRoot, {
    transitionState: s,
    "aria-labelledby": _,
    ...d,
    size: n.ModalSize.SMALL,
    children: (0, t.jsxs)("div", {
      className: l.content,
      children: [(0, t.jsx)("img", {
        src: r,
        alt: i.Z.Messages.STAGE_CHANNEL_AUDIENCE_MODAL_ALT_TEXT,
        className: l.illustration
      }), (0, t.jsx)(n.Heading, {
        id: _,
        variant: "heading-xl/semibold",
        color: "header-primary",
        className: l.headerTitle,
        children: i.Z.Messages.STAGE_CHANNEL_AUDIENCE_MODAL_TITLE
      }), (0, t.jsx)(c, {
        text: i.Z.Messages.STAGE_CHANNEL_AUDIENCE_MODAL_BULLET_1,
        icon: n.MicrophoneSlashIcon,
        foreground: l.red
      }), (0, t.jsx)(c, {
        text: i.Z.Messages.STAGE_CHANNEL_AUDIENCE_MODAL_BULLET_2,
        icon: n.PhoneHangUpIcon
      }), (0, t.jsx)(c, {
        text: i.Z.Messages.STAGE_CHANNEL_AUDIENCE_MODAL_BULLET_3,
        icon: n.HandRequestSpeakIcon
      }), (0, t.jsx)(n.Button, {
        color: n.Button.Colors.BRAND,
        className: l.button,
        onClick: a,
        children: i.Z.Messages.STAGE_CHANNEL_AUDIENCE_MODAL_ACTION
      })]
    })
  })
}