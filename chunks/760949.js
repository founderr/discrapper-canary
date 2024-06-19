s.r(e), s.d(e, {
  default: function() {
    return x
  }
}), s(47120);
var n = s(735250),
  a = s(470079),
  o = s(120356),
  r = s.n(o),
  i = s(481060),
  l = s(37234),
  c = s(479531),
  E = s(703656),
  d = s(695346),
  u = s(981631),
  T = s(689938),
  _ = s(342135),
  h = s(331651);

function x(t) {
  let {
    transitionState: e,
    onClose: s
  } = t, [o, x] = a.useState(!1), [A, g] = a.useState(null), m = async () => {
    g(null), x(!0);
    try {
      await d.Ex.updateSetting(!1), (0, E.uL)(u.Z5c.FRIENDS), (0, l.xf)(), s()
    } catch (t) {
      g(new c.Z(t).getAnyErrorMessage())
    } finally {
      x(!1)
    }
  }, M = () => {
    (0, E.uL)(u.Z5c.SETTINGS("family-center")), s()
  };
  return (0, n.jsxs)(i.ModalRoot, {
    className: _.root,
    transitionState: e,
    children: [(0, n.jsxs)(i.ModalHeader, {
      separator: !1,
      className: _.header,
      children: [(0, n.jsx)(i.Heading, {
        variant: "heading-lg/semibold",
        className: _.title,
        children: T.Z.Messages.FAMILY_CENTER_DISABLE_FEATURE_MODAL_HEADER_TEXT
      }), (0, n.jsx)(i.Text, {
        variant: "text-sm/normal",
        className: _.subtitle,
        children: T.Z.Messages.FAMILY_CENTER_DISABLE_FEATURE_MODAL_SUBTITLE_TEXT.format({
          openSettingsHook: (t, e) => (0, n.jsx)(i.Anchor, {
            onClick: M,
            children: t
          }, e)
        })
      })]
    }), (0, n.jsxs)(i.ModalContent, {
      children: [(0, n.jsxs)("div", {
        className: r()(_.buttonContainer, h.marginTop20),
        children: [(0, n.jsx)(i.Button, {
          type: "submit",
          className: h.marginBottom8,
          grow: !0,
          color: i.Button.Colors.RED,
          onClick: m,
          submitting: o,
          children: T.Z.Messages.FAMILY_CENTER_DISABLE_FEATURE_MODAL_DISABLE_BUTTON_TEXT
        }), (0, n.jsx)(i.Button, {
          grow: !0,
          color: i.Button.Colors.PRIMARY,
          onClick: s,
          children: T.Z.Messages.CANCEL
        })]
      }), (0, n.jsx)(i.Text, {
        variant: "text-xs/normal",
        color: "text-danger",
        children: A
      })]
    })]
  })
}