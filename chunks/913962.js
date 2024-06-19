e.r(n), e.d(n, {
  default: function() {
    return T
  }
});
var o = e(735250);
e(470079);
var s = e(481060),
  i = e(230711),
  a = e(695346),
  l = e(285952),
  r = e(153124),
  c = e(626135),
  A = e(981631),
  d = e(526761),
  _ = e(689938),
  u = e(32441),
  C = e(38880);

function T(t) {
  let {
    onClose: n,
    transitionState: e
  } = t, T = (0, r.Dt)();

  function N() {
    n(), i.Z.open(A.oAB.ACCESSIBILITY, null, {
      scrollPosition: d.rP.LEGACY_CHAT_INPUT
    })
  }
  return (0, o.jsxs)(s.ModalRoot, {
    transitionState: e,
    "aria-labelledby": T,
    children: [(0, o.jsx)("img", {
      className: u.art,
      src: C,
      alt: ""
    }), (0, o.jsx)(s.ModalContent, {
      children: (0, o.jsxs)(l.Z, {
        direction: l.Z.Direction.VERTICAL,
        justify: l.Z.Justify.CENTER,
        children: [(0, o.jsx)(s.Heading, {
          id: T,
          variant: "heading-lg/semibold",
          className: u.title,
          children: _.Z.Messages.LEGACY_CHAT_INPUT_SLASH_COMMAND_EXPLANATION_MODAL_TITLE
        }), (0, o.jsx)(s.Text, {
          variant: "text-md/normal",
          className: u.body,
          children: _.Z.Messages.LEGACY_CHAT_INPUT_SLASH_COMMAND_EXPLANATION_MODAL_MESSAGE.format({
            openSettingsHook: (t, n) => (0, o.jsx)(s.Anchor, {
              onClick: N,
              children: t
            }, n)
          })
        })]
      })
    }), (0, o.jsxs)(s.ModalFooter, {
      children: [(0, o.jsx)(s.Button, {
        type: "button",
        onClick: function() {
          c.default.track(A.rMx.LEGACY_CHAT_INPUT_TOGGLED, {
            enabled: !1,
            location: "LegacyChatInputExplanationModal"
          }), a.dN.updateSetting(!1), n()
        },
        children: _.Z.Messages.LEGACY_CHAT_INPUT_SLASH_COMMAND_EXPLANATION_MODAL_BUTTON_CTA
      }), (0, o.jsx)(s.Button, {
        type: "button",
        look: s.Button.Looks.LINK,
        size: s.Button.Sizes.MEDIUM,
        color: s.Button.Colors.PRIMARY,
        onClick: n,
        children: _.Z.Messages.NO_THANKS
      })]
    })]
  })
}