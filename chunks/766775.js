t.r(s), t.d(s, {
  default: function() {
    return x
  }
});
var n = t(735250);
t(470079);
var a = t(120356),
  r = t.n(a),
  l = t(481060),
  i = t(388905),
  o = t(153124),
  c = t(659900),
  u = t(473855),
  d = t(689938),
  m = t(439603);

function x(e) {
  let {
    transitionState: s,
    onClose: t,
    guildTemplate: a
  } = e, {
    form: x,
    preview: p,
    handleSubmit: h
  } = (0, c.Z)(a, !1), N = (0, o.Dt)();
  return (0, n.jsx)("div", {
    children: (0, n.jsxs)(l.ModalRoot, {
      size: l.ModalSize.DYNAMIC,
      transitionState: s,
      className: r()(m.modalRoot),
      "aria-labelledby": N,
      children: [(0, n.jsxs)("div", {
        className: m.modalContainer,
        children: [(0, n.jsx)("div", {
          className: r()(m.modalSection, m.ctaSection),
          children: (0, n.jsx)("div", {
            className: m.ctaContainer,
            children: (0, n.jsx)(u.Z, {
              guildTemplate: a,
              headerId: N
            })
          })
        }), (0, n.jsx)("div", {
          className: r()(m.modalSection, m.formSection),
          children: (0, n.jsxs)(l.Scroller, {
            className: m.formContainer,
            children: [(0, n.jsx)(i.Dx, {
              className: m.header,
              children: d.Z.Messages.GUILD_TEMPLATE_SETUP_DISCORD
            }), x, p]
          })
        })]
      }), (0, n.jsxs)(l.ModalFooter, {
        className: m.modalFooter,
        children: [(0, n.jsx)(l.Button, {
          color: l.Button.Colors.PRIMARY,
          onClick: t,
          children: d.Z.Messages.CLOSE
        }), (0, n.jsx)(l.Button, {
          color: l.Button.Colors.GREEN,
          onClick: async () => {
            null != await h() && t()
          },
          children: d.Z.Messages.CREATE
        })]
      })]
    })
  })
}