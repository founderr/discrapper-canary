n.r(t), n.d(t, {
  default: function() {
    return g
  }
}), n(47120);
var l = n(735250),
  s = n(470079),
  o = n(120356),
  a = n.n(o),
  r = n(481060),
  i = n(893776),
  c = n(809206),
  u = n(390885),
  d = n(285952),
  m = n(626135),
  _ = n(361207),
  f = n(792125),
  C = n(981631),
  N = n(630724),
  A = n(689938),
  p = n(610177);

function T(e) {
  let {
    email: t,
    setEmail: n,
    claimRequired: o,
    onSuccess: m,
    onClose: _
  } = e, [T, S] = s.useState(), [g, M] = s.useState(""), [I, E] = s.useState(""), [x, O] = s.useState(!1);
  s.useEffect(() => u.Z.flowStep(N.MK.ANY, N.mx.CLAIM_ACCOUNT), []);
  let v = async e => {
    e.preventDefault(), O(!0), S(""), E("");
    try {
      await (0, c.S2)({
        email: t,
        password: g
      }), O(!1), m()
    } catch (e) {
      var n, l;
      (null == e ? void 0 : null === (n = e.body) || void 0 === n ? void 0 : n.email) && S(e.body.email), (null == e ? void 0 : null === (l = e.body) || void 0 === l ? void 0 : l.password) && E(e.body.password), O(!1)
    }
  };
  return (0, l.jsxs)("div", {
    className: a()(p.modalLight, (0, f.Q)(C.BRd.LIGHT)),
    children: [(0, l.jsxs)(r.ModalHeader, {
      className: p.formHeader,
      direction: d.Z.Direction.VERTICAL,
      separator: !1,
      children: [(0, l.jsx)("div", {
        className: p.formImage
      }), (0, l.jsx)(r.Heading, {
        className: p.formTitle,
        variant: "heading-xl/semibold",
        children: A.Z.Messages.FINISH_SIGNING_UP
      }), (0, l.jsx)(r.Text, {
        className: p.formBody,
        variant: "text-md/normal",
        color: "header-secondary",
        children: o ? A.Z.Messages.CLAIM_ACCOUNT_REQUIRED_BODY : A.Z.Messages.CLAIM_ACCOUNT_BODY_2
      }), (0, l.jsx)(r.ModalCloseButton, {
        className: p.closeButton,
        onClick: _
      })]
    }), (0, l.jsx)(r.ModalContent, {
      children: (0, l.jsxs)("form", {
        className: p.formContent,
        onSubmit: v,
        children: [(0, l.jsx)(r.FormItem, {
          title: A.Z.Messages.FORM_LABEL_EMAIL,
          className: p.formItem,
          children: (0, l.jsx)(r.TextInput, {
            value: t,
            error: T,
            onChange: e => n(e),
            autoFocus: !0
          })
        }), (0, l.jsx)(r.FormItem, {
          title: A.Z.Messages.FORM_LABEL_PASSWORD,
          className: p.formItem,
          children: (0, l.jsx)(r.TextInput, {
            type: "password",
            value: g,
            error: I,
            onChange: e => M(e)
          })
        }), (0, l.jsx)(r.Button, {
          type: "submit",
          size: r.Button.Sizes.LARGE,
          fullWidth: !0,
          submitting: x,
          disabled: 0 === t.length || 0 === g.length,
          children: A.Z.Messages.CLAIM_ACCOUNT
        }), o && (0, l.jsx)(r.Button, {
          className: p.logoutButton,
          color: r.Button.Colors.PRIMARY,
          look: r.Button.Looks.LINK,
          size: r.Button.Sizes.NONE,
          onClick: () => {
            i.Z.logout(), _()
          },
          children: A.Z.Messages.LOGOUT
        })]
      })
    })]
  })
}

function S(e) {
  let {
    email: t,
    claimRequired: n,
    onClose: o
  } = e, i = n ? A.Z.Messages.CLAIM_ACCOUNT_REQUIRED_EMAIL_TO : A.Z.Messages.CLAIM_ACCOUNT_EMAIL_TO;

  function c() {
    window.open((0, _.t3)(), "_blank"), m.default.track(C.rMx.DOWNLOAD_APP, {
      platform: (0, _.DW)(),
      ptb: !1,
      released: !0,
      has_e_mail: !0,
      referring_location: "Claim Modal",
      qr_code: !1
    })
  }
  return s.useEffect(() => u.Z.flowStep(N.MK.ANY, N.mx.CLAIM_ACCOUNT_SUCCESS), []), (0, l.jsxs)("div", {
    className: a()(p.modalLight, (0, f.Q)(C.BRd.LIGHT)),
    children: [(0, l.jsxs)(r.ModalContent, {
      className: p.successContent,
      children: [!n && (0, l.jsx)(r.ModalCloseButton, {
        className: p.closeButton,
        onClick: o
      }), (0, l.jsx)("div", {
        className: p.successImage
      }), (0, l.jsx)(r.Text, {
        className: p.successTitle,
        variant: "text-lg/semibold",
        children: i.format({
          email: t
        })
      }), (0, l.jsx)(r.Text, {
        className: p.successPromotion,
        variant: "text-md/normal",
        children: A.Z.Messages.CLAIM_ACCOUNT_PROMOTE_APP_2021_04
      })]
    }), n ? (0, l.jsx)(r.ModalFooter, {
      direction: d.Z.Direction.VERTICAL,
      children: (0, l.jsx)(r.Button, {
        size: r.Button.Sizes.LARGE,
        onClick: o,
        children: A.Z.Messages.OKAY
      })
    }) : (0, l.jsx)(r.ModalFooter, {
      direction: d.Z.Direction.VERTICAL,
      children: (0, l.jsx)(r.Button, {
        color: r.Button.Colors.BRAND,
        size: r.Button.Sizes.LARGE,
        onClick: c,
        children: A.Z.Messages.CLAIM_ACCOUNT_GET_APP
      })
    })]
  })
}

function g(e) {
  let {
    onClose: t,
    transitionState: n,
    claimRequired: o = !1
  } = e, [a, i] = s.useState(""), [c, u] = s.useState(!1);
  return c ? (0, l.jsx)(r.ModalRoot, {
    transitionState: n,
    children: (0, l.jsx)(S, {
      email: a,
      claimRequired: o,
      onClose: t
    })
  }) : (0, l.jsx)(r.ModalRoot, {
    transitionState: n,
    children: (0, l.jsx)(T, {
      email: a,
      setEmail: i,
      claimRequired: o,
      onSuccess: () => u(!0),
      onClose: t
    })
  })
}