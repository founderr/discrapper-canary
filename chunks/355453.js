s.r(t), s.d(t, {
  default: function() {
    return m
  }
}), s(47120);
var n = s(735250),
  i = s(470079),
  r = s(442837),
  o = s(481060),
  a = s(660216),
  l = s(825209),
  d = s(714338),
  c = s(556296),
  h = s(474333),
  u = s(13140),
  p = s(710111),
  E = s(981631),
  D = s(689938),
  R = s(60341);

function m(e) {
  var t;
  let {
    transitionState: s,
    onClose: m
  } = e, g = (0, r.e7)([c.Z], () => c.Z.getKeybindForAction(E.kg4.SOUNDBOARD_HOLD)), [_, N] = i.useState(null !== (t = null == g ? void 0 : g.shortcut) && void 0 !== t ? t : []);
  return i.useEffect(() => (d.Z.disable(), () => {
    d.Z.enable()
  }), []), (0, n.jsxs)(o.ModalRoot, {
    transitionState: s,
    children: [(0, n.jsxs)(o.ModalHeader, {
      separator: !1,
      children: [(0, n.jsx)(o.Heading, {
        className: R.header,
        variant: "heading-xl/semibold",
        children: D.Z.Messages.SOUNDBOARD_KEYBIND_MODAL_HEADER
      }), (0, n.jsx)(o.ModalCloseButton, {
        className: R.closeButton,
        onClick: m
      })]
    }), (0, n.jsxs)(o.ModalContent, {
      className: R.content,
      children: [(0, n.jsx)(h.Z, {
        className: R.warning,
        messageType: h.Q.WARNING,
        children: D.Z.Messages.SOUNDBOARD_KEYBIND_MODAL_KEYBINDS_DISABLED_MESSAGE
      }), (0, n.jsx)(o.Heading, {
        className: R.formHeader,
        variant: "eyebrow",
        color: "header-secondary",
        children: D.Z.Messages.USER_SETTINGS_KEYBINDS_ACTION
      }), (0, n.jsx)(o.Text, {
        className: R.action,
        variant: "text-md/normal",
        children: D.Z.Messages.KEYBIND_SOUNDBOARD_HOLD
      }), (0, n.jsx)(o.Text, {
        className: R.actionDescription,
        variant: "text-sm/normal",
        children: D.Z.Messages.KEYBIND_DESCRIPTION_SOUNDBOARD_HOLD
      }), (0, n.jsx)(o.Heading, {
        className: R.formHeader,
        variant: "eyebrow",
        color: "header-secondary",
        children: D.Z.Messages.USER_SETTINGS_KEYBINDS_KEYBIND
      }), (0, n.jsx)(l.Z, {
        defaultValue: _,
        onChange: N
      }), (0, n.jsx)(o.Anchor, {
        className: R.resetButton,
        onClick: () => N((0, u.Kd)(p.D_)),
        children: D.Z.Messages.SOUNDBOARD_KEYBIND_MODAL_RESET_KEYBIND
      })]
    }), (0, n.jsxs)(o.ModalFooter, {
      children: [(0, n.jsx)(o.Button, {
        onClick: function() {
          if (0 === _.length) return null != g && a.Z.deleteKeybind(g.id), m();
          null == g ? a.Z.addKeybind({
            action: E.kg4.SOUNDBOARD_HOLD,
            shortcut: _,
            enabled: !0,
            params: {}
          }) : a.Z.setKeybind({
            ...g,
            shortcut: _
          });
          m()
        },
        children: D.Z.Messages.SAVE
      }), (0, n.jsx)(o.Button, {
        onClick: m,
        look: o.Button.Looks.LINK,
        color: o.Button.Colors.PRIMARY,
        children: D.Z.Messages.CANCEL
      })]
    })]
  })
}