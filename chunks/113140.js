o.r(s), o.d(s, {
  default: function() {
    return d
  }
});
var n = o(735250);
o(470079);
var a = o(481060),
  t = o(153124),
  l = o(471253),
  c = o(939863),
  r = o(689938),
  i = o(604845);

function d(e) {
  let {
    transitionState: s,
    onClose: o,
    channel: d
  } = e, h = (0, t.Dt)(), u = e => {
    (0, l.RK)(d, e), o()
  };
  return (0, n.jsx)(a.ModalRoot, {
    size: a.ModalSize.SMALL,
    transitionState: s,
    "aria-labelledby": h,
    className: i.container,
    children: (0, n.jsxs)(a.ModalContent, {
      className: i.content,
      children: [(0, n.jsx)(c.Z, {
        children: (0, n.jsx)("div", {
          className: i.iconBackground,
          children: (0, n.jsx)(a.MicrophoneIcon, {
            size: "custom",
            color: "currentColor",
            height: 40,
            width: 40,
            className: i.icon
          })
        })
      }), (0, n.jsx)(a.Heading, {
        className: i.header,
        variant: "heading-lg/semibold",
        children: r.Z.Messages.STAGE_SPEAK_INVITE_HEADER
      }), (0, n.jsx)(a.Text, {
        color: "header-secondary",
        className: i.description,
        variant: "text-sm/normal",
        children: r.Z.Messages.STAGE_SPEAK_INVITE_MODAL.format({
          stageChannelHook: () => (0, n.jsxs)("div", {
            className: i.channel,
            children: [(0, n.jsx)(a.StageIcon, {
              size: "custom",
              color: "currentColor",
              height: 14,
              width: 14,
              className: i.channelIcon
            }), (0, n.jsx)(a.Text, {
              className: i.channelName,
              variant: "text-sm/normal",
              children: d.name
            })]
          })
        })
      }), (0, n.jsx)(a.Button, {
        fullWidth: !0,
        color: a.Button.Colors.GREEN,
        onClick: () => u(!1),
        className: i.button,
        children: r.Z.Messages.ACCEPT
      }), (0, n.jsx)(a.Button, {
        fullWidth: !0,
        color: a.Button.Colors.RED,
        onClick: () => u(!0),
        className: i.button,
        children: r.Z.Messages.DECLINE
      }), (0, n.jsx)(a.Button, {
        fullWidth: !0,
        color: a.Button.Colors.PRIMARY,
        look: a.Button.Looks.LINK,
        onClick: o,
        children: r.Z.Messages.NOT_NOW
      })]
    })
  })
}