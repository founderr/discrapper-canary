"use strict";
n.r(t), n.d(t, {
  default: function() {
    return p
  }
});
var s = n("37983");
n("884691");
var a = n("414456"),
  i = n.n(a),
  l = n("77078"),
  r = n("476765"),
  o = n("124969"),
  u = n("800932"),
  d = n("434824"),
  c = n("782340"),
  f = n("419402");

function p(e) {
  let {
    transitionState: t,
    onClose: n,
    guildTemplate: a
  } = e, {
    form: p,
    preview: T,
    handleSubmit: S
  } = (0, u.default)(a, !1), N = (0, r.useUID)();
  return (0, s.jsx)("div", {
    children: (0, s.jsxs)(l.ModalRoot, {
      size: l.ModalSize.DYNAMIC,
      transitionState: t,
      className: i(f.modalRoot),
      "aria-labelledby": N,
      children: [(0, s.jsxs)("div", {
        className: f.modalContainer,
        children: [(0, s.jsx)("div", {
          className: i(f.modalSection, f.ctaSection),
          children: (0, s.jsx)("div", {
            className: f.ctaContainer,
            children: (0, s.jsx)(d.default, {
              guildTemplate: a,
              headerId: N
            })
          })
        }), (0, s.jsx)("div", {
          className: i(f.modalSection, f.formSection),
          children: (0, s.jsxs)(l.Scroller, {
            className: f.formContainer,
            children: [(0, s.jsx)(o.Title, {
              className: f.header,
              children: c.default.Messages.GUILD_TEMPLATE_SETUP_DISCORD
            }), p, T]
          })
        })]
      }), (0, s.jsxs)(l.ModalFooter, {
        className: f.modalFooter,
        children: [(0, s.jsx)(l.Button, {
          color: l.Button.Colors.PRIMARY,
          onClick: n,
          children: c.default.Messages.CLOSE
        }), (0, s.jsx)(l.Button, {
          color: l.Button.Colors.GREEN,
          onClick: async () => {
            let e = await S();
            null != e && n()
          },
          children: c.default.Messages.CREATE
        })]
      })]
    })
  })
}