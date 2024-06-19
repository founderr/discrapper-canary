s.r(t), s.d(t, {
  default: function() {
    return h
  }
}), s(47120);
var n = s(735250),
  l = s(470079),
  o = s(990547),
  a = s(481060),
  r = s(479531),
  i = s(213609),
  u = s(689938),
  c = s(883371);
let d = RegExp("(^[-!#$%&'*+/=?^_`{}|~0-9A-Z]+(\\.[-!#$%&'*+/=?^_`{}|~0-9A-Z]+)*|^\"([\\001-\\010\\013\\014\\016-\\037!#-\\[\\]-\\177]|\\\\[\\001-011\\013\\014\\016-\\177])*\")@(?:[A-Z0-9](?:[A-Z0-9-]{0,2000}[A-Z0-9])?\\.)+[A-Z]{2,63}\\.?$", "i");

function h(e) {
  let {
    transitionState: t,
    onFormSubmit: s,
    onSuccess: h,
    onClose: p,
    headerText: M,
    confirmButtonText: A,
    confirmButtonColor: m,
    impressionName: x
  } = e, [C, R] = l.useState(!1), [g, j] = l.useState(""), [Z, f] = l.useState(null), B = l.useRef(null);
  (0, i.Z)({
    type: o.ImpressionTypes.MODAL,
    name: x
  });
  let E = async e => {
    if (e.preventDefault(), f(null), R(!0), !1 === d.test(g)) {
      f(u.Z.Messages.EMAIL_ENTER_MODAL_INPUT_ERROR), R(!1);
      return
    }
    try {
      let e = null != s ? await s(g) : void 0;
      null != h && (null != e ? h({
        response: e,
        email: g
      }) : h(g)), p()
    } catch (e) {
      f(new r.Z(e).getAnyErrorMessage())
    } finally {
      R(!1)
    }
  };
  return (0, n.jsx)(a.ModalRoot, {
    transitionState: t,
    children: (0, n.jsxs)("form", {
      onSubmit: E,
      children: [(0, n.jsxs)(a.ModalHeader, {
        separator: !1,
        className: c.header,
        children: [(0, n.jsx)(a.Heading, {
          variant: "heading-lg/semibold",
          className: c.title,
          children: M
        }), (0, n.jsx)(a.ModalCloseButton, {
          onClick: p,
          className: c.modalCloseButton
        })]
      }), (0, n.jsx)(a.ModalContent, {
        children: (0, n.jsx)(a.FormItem, {
          title: u.Z.Messages.YOUR_EMAIL,
          error: Z,
          children: (0, n.jsx)(a.TextInput, {
            value: g,
            onChange: j,
            inputRef: B
          })
        })
      }), (0, n.jsxs)(a.ModalFooter, {
        children: [(0, n.jsx)(a.Button, {
          type: "submit",
          color: null != m ? m : a.Button.Colors.BRAND,
          size: a.Button.Sizes.MEDIUM,
          submitting: C,
          children: A
        }), (0, n.jsx)(a.Button, {
          look: a.Button.Looks.LINK,
          color: a.Button.Colors.PRIMARY,
          onClick: p,
          children: u.Z.Messages.CANCEL
        })]
      })]
    })
  })
}