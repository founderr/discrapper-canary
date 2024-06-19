s.r(t), s.d(t, {
  default: function() {
    return c
  }
}), s(47120);
var a = s(735250),
  n = s(470079),
  o = s(481060),
  l = s(365007),
  r = s(689938),
  i = s(614213);

function c(e) {
  let {
    transitionState: t,
    onClose: s,
    credential: c
  } = e, [u, d] = n.useState(!1), [h, E] = n.useState(""), [M, N] = n.useState(void 0), _ = n.useRef(null);
  async function m(e) {
    e.preventDefault(), d(!0);
    try {
      await (0, l.WQ)(c.id, h), s()
    } catch (e) {
      N(e.message)
    } finally {
      d(!1)
    }
  }
  return n.useEffect(() => {
    if (t === o.ModalTransitionState.ENTERED) {
      var e;
      null === (e = _.current) || void 0 === e || e.focus()
    }
  }, [t]), (0, a.jsxs)(o.ModalRoot, {
    transitionState: t,
    children: [(0, a.jsxs)(o.ModalHeader, {
      separator: !1,
      className: i.header,
      children: [(0, a.jsx)(o.Text, {
        color: "header-secondary",
        variant: "text-lg/bold",
        className: i.subtitle,
        children: r.Z.Messages.TWO_FA_WEBAUTHN_RENAME
      }), (0, a.jsx)(o.ModalCloseButton, {
        onClick: s,
        className: i.modalCloseButton
      })]
    }), (0, a.jsxs)("form", {
      onSubmit: m,
      children: [(0, a.jsx)(o.ModalContent, {
        className: i.content,
        children: (0, a.jsx)(o.FormItem, {
          title: r.Z.Messages.TWO_FA_WEBAUTHN_RENAME_FORM_NEW_KEY,
          error: M,
          required: !0,
          children: (0, a.jsx)("div", {
            children: (0, a.jsx)(o.TextInput, {
              inputRef: _,
              "aria-label": r.Z.Messages.TWO_FA_WEBAUTHN_RENAME_FORM_NEW_KEY,
              placeholder: c.name,
              value: h,
              minLength: 1,
              maxLength: 32,
              onChange: E,
              autoFocus: !0,
              required: !0
            })
          })
        })
      }), (0, a.jsxs)(o.ModalFooter, {
        children: [(0, a.jsx)(o.Button, {
          type: "submit",
          color: o.Button.Colors.BRAND,
          size: o.Button.Sizes.MEDIUM,
          submitting: u,
          disabled: 0 === h.length || h.length > 32,
          children: r.Z.Messages.DONE
        }), (0, a.jsx)(o.Button, {
          className: i.cancel,
          look: o.Button.Looks.LINK,
          color: o.Button.Colors.PRIMARY,
          onClick: s,
          children: r.Z.Messages.CANCEL
        })]
      })]
    })]
  })
}