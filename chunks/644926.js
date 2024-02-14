"use strict";
s.r(t), s.d(t, {
  default: function() {
    return m
  }
}), s("222007");
var n = s("37983"),
  r = s("884691"),
  i = s("446674"),
  l = s("77078"),
  a = s("913139"),
  o = s("278108"),
  d = s("485328"),
  u = s("227602"),
  c = s("555158"),
  h = s("13798"),
  f = s("846325"),
  E = s("49111"),
  p = s("782340"),
  g = s("963534");

function m(e) {
  var t;
  let {
    transitionState: s,
    onClose: m
  } = e, N = (0, i.useStateFromStores)([u.default], () => u.default.getKeybindForAction(E.GlobalKeybindActions.SOUNDBOARD_HOLD)), [R, D] = r.useState(null !== (t = null == N ? void 0 : N.shortcut) && void 0 !== t ? t : []);
  return r.useEffect(() => (d.default.disable(), () => {
    d.default.enable()
  }), []), (0, n.jsxs)(l.ModalRoot, {
    transitionState: s,
    children: [(0, n.jsxs)(l.ModalHeader, {
      separator: !1,
      children: [(0, n.jsx)(l.Heading, {
        className: g.header,
        variant: "heading-xl/semibold",
        children: p.default.Messages.SOUNDBOARD_KEYBIND_MODAL_HEADER
      }), (0, n.jsx)(l.ModalCloseButton, {
        className: g.closeButton,
        onClick: m
      })]
    }), (0, n.jsxs)(l.ModalContent, {
      className: g.content,
      children: [(0, n.jsx)(c.default, {
        className: g.warning,
        messageType: c.HelpMessageTypes.WARNING,
        children: p.default.Messages.SOUNDBOARD_KEYBIND_MODAL_KEYBINDS_DISABLED_MESSAGE
      }), (0, n.jsx)(l.Heading, {
        className: g.formHeader,
        variant: "eyebrow",
        color: "header-secondary",
        children: p.default.Messages.USER_SETTINGS_KEYBINDS_ACTION
      }), (0, n.jsx)(l.Text, {
        className: g.action,
        variant: "text-md/normal",
        children: p.default.Messages.KEYBIND_SOUNDBOARD_HOLD
      }), (0, n.jsx)(l.Text, {
        className: g.actionDescription,
        variant: "text-sm/normal",
        children: p.default.Messages.KEYBIND_DESCRIPTION_SOUNDBOARD_HOLD
      }), (0, n.jsx)(l.Heading, {
        className: g.formHeader,
        variant: "eyebrow",
        color: "header-secondary",
        children: p.default.Messages.USER_SETTINGS_KEYBINDS_KEYBIND
      }), (0, n.jsx)(o.default, {
        defaultValue: R,
        onChange: D
      }), (0, n.jsx)(l.Anchor, {
        className: g.resetButton,
        onClick: () => D((0, h.toCombo)(f.DEFAULT_KEYBIND)),
        children: p.default.Messages.SOUNDBOARD_KEYBIND_MODAL_RESET_KEYBIND
      })]
    }), (0, n.jsxs)(l.ModalFooter, {
      children: [(0, n.jsx)(l.Button, {
        onClick: function() {
          if (0 === R.length) return null != N && a.default.deleteKeybind(N.id), m();
          null == N ? a.default.addKeybind({
            action: E.GlobalKeybindActions.SOUNDBOARD_HOLD,
            shortcut: R,
            enabled: !0,
            params: {}
          }) : a.default.setKeybind({
            ...N,
            shortcut: R
          });
          m()
        },
        children: p.default.Messages.SAVE
      }), (0, n.jsx)(l.Button, {
        onClick: m,
        look: l.Button.Looks.LINK,
        color: l.Button.Colors.PRIMARY,
        children: p.default.Messages.CANCEL
      })]
    })]
  })
}