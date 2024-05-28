"use strict";
l.r(t), l.d(t, {
  default: function() {
    return S
  }
}), l("47120");
var n = l("735250"),
  s = l("470079"),
  a = l("120356"),
  o = l.n(a),
  r = l("481060"),
  i = l("893776"),
  u = l("809206"),
  c = l("390885"),
  d = l("285952"),
  m = l("626135"),
  f = l("361207"),
  _ = l("792125"),
  p = l("981631"),
  C = l("630724"),
  A = l("689938"),
  T = l("364187");

function N(e) {
  let {
    email: t,
    setEmail: l,
    claimRequired: a,
    onSuccess: m,
    onClose: f
  } = e, [N, g] = s.useState(), [S, I] = s.useState(""), [E, w] = s.useState(""), [M, h] = s.useState(!1);
  s.useEffect(() => c.default.flowStep(C.FlowType.ANY, C.ClaimAccountSteps.CLAIM_ACCOUNT), []);
  let v = async e => {
    e.preventDefault(), h(!0), g(""), w("");
    try {
      await (0, u.saveAccountRequest)({
        email: t,
        password: S
      }), h(!1), m()
    } catch (e) {
      var l, n;
      (null == e ? void 0 : null === (l = e.body) || void 0 === l ? void 0 : l.email) && g(e.body.email), (null == e ? void 0 : null === (n = e.body) || void 0 === n ? void 0 : n.password) && w(e.body.password), h(!1)
    }
  };
  return (0, n.jsxs)("div", {
    className: o()(T.modalLight, (0, _.getThemeClass)(p.ThemeTypes.LIGHT)),
    children: [(0, n.jsxs)(r.ModalHeader, {
      className: T.formHeader,
      direction: d.default.Direction.VERTICAL,
      separator: !1,
      children: [(0, n.jsx)("div", {
        className: T.formImage
      }), (0, n.jsx)(r.Heading, {
        className: T.formTitle,
        variant: "heading-xl/semibold",
        children: A.default.Messages.FINISH_SIGNING_UP
      }), (0, n.jsx)(r.Text, {
        className: T.formBody,
        variant: "text-md/normal",
        color: "header-secondary",
        children: a ? A.default.Messages.CLAIM_ACCOUNT_REQUIRED_BODY : A.default.Messages.CLAIM_ACCOUNT_BODY_2
      }), (0, n.jsx)(r.ModalCloseButton, {
        className: T.closeButton,
        onClick: f
      })]
    }), (0, n.jsx)(r.ModalContent, {
      children: (0, n.jsxs)("form", {
        className: T.formContent,
        onSubmit: v,
        children: [(0, n.jsx)(r.FormItem, {
          title: A.default.Messages.FORM_LABEL_EMAIL,
          className: T.formItem,
          children: (0, n.jsx)(r.TextInput, {
            value: t,
            error: N,
            onChange: e => l(e),
            autoFocus: !0
          })
        }), (0, n.jsx)(r.FormItem, {
          title: A.default.Messages.FORM_LABEL_PASSWORD,
          className: T.formItem,
          children: (0, n.jsx)(r.TextInput, {
            type: "password",
            value: S,
            error: E,
            onChange: e => I(e)
          })
        }), (0, n.jsx)(r.Button, {
          type: "submit",
          size: r.Button.Sizes.LARGE,
          fullWidth: !0,
          submitting: M,
          disabled: 0 === t.length || 0 === S.length,
          children: A.default.Messages.CLAIM_ACCOUNT
        }), a && (0, n.jsx)(r.Button, {
          className: T.logoutButton,
          color: r.Button.Colors.PRIMARY,
          look: r.Button.Looks.LINK,
          size: r.Button.Sizes.NONE,
          onClick: () => {
            i.default.logout(), f()
          },
          children: A.default.Messages.LOGOUT
        })]
      })
    })]
  })
}

function g(e) {
  let {
    email: t,
    claimRequired: l,
    onClose: a
  } = e, i = l ? A.default.Messages.CLAIM_ACCOUNT_REQUIRED_EMAIL_TO : A.default.Messages.CLAIM_ACCOUNT_EMAIL_TO;

  function u() {
    window.open((0, f.getCurrentPlatformDownloadURL)(), "_blank"), m.default.track(p.AnalyticEvents.DOWNLOAD_APP, {
      platform: (0, f.getPlatformReadableName)(),
      ptb: !1,
      released: !0,
      has_e_mail: !0,
      referring_location: "Claim Modal",
      qr_code: !1
    })
  }
  return s.useEffect(() => c.default.flowStep(C.FlowType.ANY, C.ClaimAccountSteps.CLAIM_ACCOUNT_SUCCESS), []), (0, n.jsxs)("div", {
    className: o()(T.modalLight, (0, _.getThemeClass)(p.ThemeTypes.LIGHT)),
    children: [(0, n.jsxs)(r.ModalContent, {
      className: T.successContent,
      children: [!l && (0, n.jsx)(r.ModalCloseButton, {
        className: T.closeButton,
        onClick: a
      }), (0, n.jsx)("div", {
        className: T.successImage
      }), (0, n.jsx)(r.Text, {
        className: T.successTitle,
        variant: "text-lg/semibold",
        children: i.format({
          email: t
        })
      }), (0, n.jsx)(r.Text, {
        className: T.successPromotion,
        variant: "text-md/normal",
        children: A.default.Messages.CLAIM_ACCOUNT_PROMOTE_APP_2021_04
      })]
    }), l ? (0, n.jsx)(r.ModalFooter, {
      direction: d.default.Direction.VERTICAL,
      children: (0, n.jsx)(r.Button, {
        size: r.Button.Sizes.LARGE,
        onClick: a,
        children: A.default.Messages.OKAY
      })
    }) : (0, n.jsx)(r.ModalFooter, {
      direction: d.default.Direction.VERTICAL,
      children: (0, n.jsx)(r.Button, {
        color: r.Button.Colors.BRAND,
        size: r.Button.Sizes.LARGE,
        onClick: u,
        children: A.default.Messages.CLAIM_ACCOUNT_GET_APP
      })
    })]
  })
}

function S(e) {
  let {
    onClose: t,
    transitionState: l,
    claimRequired: a = !1
  } = e, [o, i] = s.useState(""), [u, c] = s.useState(!1);
  return u ? (0, n.jsx)(r.ModalRoot, {
    transitionState: l,
    children: (0, n.jsx)(g, {
      email: o,
      claimRequired: a,
      onClose: t
    })
  }) : (0, n.jsx)(r.ModalRoot, {
    transitionState: l,
    children: (0, n.jsx)(N, {
      email: o,
      setEmail: i,
      claimRequired: a,
      onSuccess: () => c(!0),
      onClose: t
    })
  })
}