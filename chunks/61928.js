"use strict";
n.r(t), n.d(t, {
  EMAIL_VERIFICATION_MODAL_KEY: function() {
    return N
  },
  default: function() {
    return R
  }
}), n("222007");
var a = n("37983"),
  s = n("884691"),
  i = n("759843"),
  l = n("446674"),
  r = n("872717"),
  o = n("77078"),
  u = n("437822"),
  d = n("54239"),
  c = n("152584"),
  f = n("84339"),
  E = n("485328"),
  h = n("428958"),
  _ = n("878720"),
  C = n("161778"),
  I = n("330387"),
  S = n("642400"),
  m = n("668596"),
  p = n("892313"),
  T = n("49111"),
  g = n("482931"),
  A = n("782340");
let N = "Email Verification";

function R() {
  let {
    action: e,
    theme: t
  } = (0, l.useStateFromStoresObject)([I.default, C.default], () => ({
    action: I.default.getAction(),
    theme: C.default.theme
  })), R = p.default.getVerificationTypes(e), [O, v] = s.useState(0), L = (0, f.default)(R);
  (0, h.default)({
    type: i.ImpressionTypes.MODAL,
    name: i.ImpressionNames.USER_ACTION_REQUIRED,
    properties: {
      verification_type: R[0],
      verification_types: R
    }
  }, {}, [R.toString()]);
  let M = () => {
      (0, c.accountDetailsInit)(), (0, o.openModalLazy)(async () => {
        let {
          default: e
        } = await n.el("126667").then(n.bind(n, "126667"));
        return t => (0, a.jsx)(e, {
          ...t
        })
      }, {
        modalKey: N,
        Layer: m.default
      })
    },
    P = () => {
      (0, o.openModalLazy)(async () => {
        let {
          default: e
        } = await n.el("601745").then(n.bind(n, "601745"));
        return t => (0, a.jsx)(e, {
          reason: _.ChangePhoneReason.USER_ACTION_REQUIRED,
          ...t
        })
      }, {
        modalKey: g.PHONE_VERIFICATION_MODAL_KEY,
        Layer: m.default
      })
    };
  return s.useEffect(() => (E.default.disable(), () => {
    E.default.enable()
  }), []), s.useEffect(() => {
    (null == L ? void 0 : L[0]) === T.VerificationTypes.PHONE && (null == R ? void 0 : R[0]) === T.VerificationTypes.EMAIL && (0, o.openModalLazy)(async () => {
      let {
        default: e
      } = await n.el("135230").then(n.bind(n, "135230"));
      return t => (0, a.jsx)(e, {
        ...t,
        title: A.default.Messages.PHONE_THEN_EMAIL_INTERSTITIAL_TITLE,
        body: A.default.Messages.PHONE_THEN_EMAIL_INTERSTITIAL_BODY,
        confirmText: A.default.Messages.PHONE_THEN_EMAIL_INTERSTITIAL_CONFIRM
      })
    }, {
      modalKey: "PHONE_THEN_EMAIL_INTERSTITIAL_MODAL_KEY",
      Layer: m.default,
      onCloseCallback: M
    })
  }, [R, L]), (0, a.jsx)(S.default, {
    types: R,
    captchaKey: O,
    onCaptchaVerify: e => {
      r.default.post({
        url: T.Endpoints.CAPTCHA,
        body: {
          captcha_key: e
        },
        oldFormErrors: !0
      }).then(d.popLayer, () => {
        v(e => e + 1)
      })
    },
    theme: t,
    onClick: e => {
      e === T.VerificationTypes.EMAIL_OR_PHONE || e === T.VerificationTypes.EMAIL || e === T.VerificationTypes.REVERIFY_EMAIL ? M() : P()
    },
    onLogout: () => {
      (0, o.openModalLazy)(async () => {
        let {
          ConfirmModal: e,
          Text
        } = await n.el("77078").then(n.bind(n, "77078"));
        return t => (0, a.jsx)(e, {
          header: A.default.Messages.LOGOUT,
          confirmText: A.default.Messages.LOGOUT,
          cancelText: A.default.Messages.CANCEL,
          onConfirm: () => u.default.logout(),
          ...t,
          children: (0, a.jsx)(Text, {
            variant: "text-md/normal",
            children: A.default.Messages.USER_SETTINGS_CONFIRM_LOGOUT
          })
        })
      }, {
        Layer: m.default
      })
    }
  })
}