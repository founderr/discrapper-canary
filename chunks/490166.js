n.r(s), n.d(s, {
  default: function() {
    return d
  }
});
var t = n(735250);
n(470079);
var o = n(481060),
  a = n(536442),
  i = n(13140),
  l = n(487029),
  c = n(689938),
  r = n(838540);

function d(e) {
  let {
    guildId: s,
    channel: d,
    keybind: D,
    transitionState: O,
    onClose: _
  } = e;

  function h() {
    (0, a.Kw)(a.v6.SOUNDBOARD_WHEEL_EDUCATION_MODAL), _()
  }

  function u() {
    h(), (0, o.openModalLazy)(async () => {
      let {
        default: e
      } = await Promise.all([n.e("49237"), n.e("99387"), n.e("54626")]).then(n.bind(n, 355453));
      return s => (0, t.jsx)(e, {
        ...s
      })
    })
  }
  return (0, t.jsxs)(o.ModalRoot, {
    transitionState: O,
    "aria-label": c.Z.Messages.SOUNDBOARD_SOUND_WHEEL_EDUCATION_MODAL_HEADER,
    children: [(0, t.jsxs)(o.ModalContent, {
      className: r.content,
      children: [(0, t.jsx)(o.Heading, {
        variant: "heading-xl/extrabold",
        className: r.header,
        children: c.Z.Messages.SOUNDBOARD_SOUND_WHEEL_EDUCATION_MODAL_HEADER
      }), (0, t.jsx)(o.Text, {
        variant: "text-md/normal",
        children: c.Z.Messages.SOUNDBOARD_SOUND_WHEEL_EDUCATION_MODAL_BODY.format({
          keybind: (0, i.BB)(D.shortcut, !0).split(" + "),
          keybindHook: (e, s) => (0, t.jsx)("span", {
            className: r.keybindHintKeys,
            children: (0, t.jsx)(o.KeyCombo, {
              className: r.keybindShortcut,
              shortcut: (0, i.BB)(D.shortcut, !1)
            })
          }, s),
          openSettingsHook: (e, s) => (0, t.jsx)(o.Anchor, {
            onClick: u,
            children: e
          }, s)
        })
      }), (0, t.jsx)("div", {
        className: r.soundWheel,
        children: (0, t.jsx)(l.Z, {
          width: 372,
          height: 316,
          guildId: s,
          channel: d,
          interactive: !1,
          keepOpen: !0,
          onClose: () => {},
          analyticsSource: "education modal"
        })
      })]
    }), (0, t.jsxs)(o.ModalFooter, {
      children: [(0, t.jsx)(o.Button, {
        onClick: h,
        children: c.Z.Messages.SOUNDBOARD_SOUND_WHEEL_EDUCATION_MODAL_CONFIRM
      }), (0, t.jsx)(o.Button, {
        look: o.Button.Looks.LINK,
        color: o.Button.Colors.PRIMARY,
        onClick: u,
        children: c.Z.Messages.SOUNDBOARD_SOUND_WHEEL_EDUCATION_MODAL_EDIT_KEYBIND
      })]
    }), (0, t.jsx)(o.ModalCloseButton, {
      className: r.closeButton,
      onClick: h
    })]
  })
}