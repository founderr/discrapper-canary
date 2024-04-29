"use strict";
s.r(t), s.d(t, {
  default: function() {
    return R
  }
}), s("47120");
var n = s("735250"),
  a = s("470079"),
  i = s("442837"),
  l = s("481060"),
  o = s("660216"),
  r = s("825209"),
  d = s("714338"),
  u = s("556296"),
  c = s("474333"),
  h = s("13140"),
  f = s("710111"),
  p = s("981631"),
  E = s("689938"),
  D = s("577470");

function R(e) {
  var t;
  let {
    transitionState: s,
    onClose: R
  } = e, m = (0, i.useStateFromStores)([u.default], () => u.default.getKeybindForAction(p.GlobalKeybindActions.SOUNDBOARD_HOLD)), [g, _] = a.useState(null !== (t = null == m ? void 0 : m.shortcut) && void 0 !== t ? t : []);
  return a.useEffect(() => (d.default.disable(), () => {
    d.default.enable()
  }), []), (0, n.jsxs)(l.ModalRoot, {
    transitionState: s,
    children: [(0, n.jsxs)(l.ModalHeader, {
      separator: !1,
      children: [(0, n.jsx)(l.Heading, {
        className: D.header,
        variant: "heading-xl/semibold",
        children: E.default.Messages.SOUNDBOARD_KEYBIND_MODAL_HEADER
      }), (0, n.jsx)(l.ModalCloseButton, {
        className: D.closeButton,
        onClick: R
      })]
    }), (0, n.jsxs)(l.ModalContent, {
      className: D.content,
      children: [(0, n.jsx)(c.default, {
        className: D.warning,
        messageType: c.HelpMessageTypes.WARNING,
        children: E.default.Messages.SOUNDBOARD_KEYBIND_MODAL_KEYBINDS_DISABLED_MESSAGE
      }), (0, n.jsx)(l.Heading, {
        className: D.formHeader,
        variant: "eyebrow",
        color: "header-secondary",
        children: E.default.Messages.USER_SETTINGS_KEYBINDS_ACTION
      }), (0, n.jsx)(l.Text, {
        className: D.action,
        variant: "text-md/normal",
        children: E.default.Messages.KEYBIND_SOUNDBOARD_HOLD
      }), (0, n.jsx)(l.Text, {
        className: D.actionDescription,
        variant: "text-sm/normal",
        children: E.default.Messages.KEYBIND_DESCRIPTION_SOUNDBOARD_HOLD
      }), (0, n.jsx)(l.Heading, {
        className: D.formHeader,
        variant: "eyebrow",
        color: "header-secondary",
        children: E.default.Messages.USER_SETTINGS_KEYBINDS_KEYBIND
      }), (0, n.jsx)(r.default, {
        defaultValue: g,
        onChange: _
      }), (0, n.jsx)(l.Anchor, {
        className: D.resetButton,
        onClick: () => _((0, h.toCombo)(f.DEFAULT_KEYBIND)),
        children: E.default.Messages.SOUNDBOARD_KEYBIND_MODAL_RESET_KEYBIND
      })]
    }), (0, n.jsxs)(l.ModalFooter, {
      children: [(0, n.jsx)(l.Button, {
        onClick: function() {
          if (0 === g.length) return null != m && o.default.deleteKeybind(m.id), R();
          null == m ? o.default.addKeybind({
            action: p.GlobalKeybindActions.SOUNDBOARD_HOLD,
            shortcut: g,
            enabled: !0,
            params: {}
          }) : o.default.setKeybind({
            ...m,
            shortcut: g
          });
          R()
        },
        children: E.default.Messages.SAVE
      }), (0, n.jsx)(l.Button, {
        onClick: R,
        look: l.Button.Looks.LINK,
        color: l.Button.Colors.PRIMARY,
        children: E.default.Messages.CANCEL
      })]
    })]
  })
}