"use strict";
a.r(t), a.d(t, {
  EMAIL_VERIFICATION_MODAL_KEY: function() {
    return N
  },
  PHONE_THEN_EMAIL_INTERSTITIAL_MODAL_KEY: function() {
    return v
  },
  default: function() {
    return R
  }
}), a("47120");
var n = a("735250"),
  s = a("470079"),
  l = a("990547"),
  i = a("442837"),
  r = a("544891"),
  o = a("481060"),
  u = a("893776"),
  d = a("37234"),
  c = a("809206"),
  f = a("110924"),
  E = a("714338"),
  h = a("213609"),
  _ = a("144114"),
  C = a("210887"),
  m = a("23434"),
  S = a("610001"),
  I = a("78415"),
  p = a("1964"),
  T = a("981631"),
  g = a("815660"),
  A = a("689938");
let N = "Email Verification",
  v = "PHONE_THEN_EMAIL_INTERSTITIAL_MODAL_KEY";

function R() {
  let {
    action: e,
    theme: t
  } = (0, i.useStateFromStoresObject)([m.default, C.default], () => ({
    action: m.default.getAction(),
    theme: C.default.theme
  })), R = p.default.getVerificationTypes(e), [L, O] = s.useState(0), P = (0, f.default)(R);
  (0, h.default)({
    type: l.ImpressionTypes.MODAL,
    name: l.ImpressionNames.USER_ACTION_REQUIRED,
    properties: {
      verification_type: R[0],
      verification_types: R
    }
  }, {}, [R.toString()]);
  let M = () => {
      (0, c.accountDetailsInit)(), (0, o.openModalLazy)(async () => {
        let {
          default: e
        } = await Promise.all([a.e("49237"), a.e("35401")]).then(a.bind(a, "284549"));
        return t => (0, n.jsx)(e, {
          ...t
        })
      }, {
        modalKey: N,
        Layer: I.default
      })
    },
    x = () => {
      (0, o.openModalLazy)(async () => {
        let {
          default: e
        } = await Promise.all([a.e("49237"), a.e("99387"), a.e("76540")]).then(a.bind(a, "607018"));
        return t => (0, n.jsx)(e, {
          reason: _.ChangePhoneReason.USER_ACTION_REQUIRED,
          ...t
        })
      }, {
        modalKey: g.PHONE_VERIFICATION_MODAL_KEY,
        Layer: I.default
      })
    };
  return s.useEffect(() => (E.default.disable(), () => {
    E.default.enable()
  }), []), s.useEffect(() => {
    (null == P ? void 0 : P[0]) === T.VerificationTypes.PHONE && (null == R ? void 0 : R[0]) === T.VerificationTypes.EMAIL && (0, o.openModalLazy)(async () => {
      let {
        default: e
      } = await Promise.resolve().then(a.bind(a, "468026"));
      return t => (0, n.jsx)(e, {
        ...t,
        title: A.default.Messages.PHONE_THEN_EMAIL_INTERSTITIAL_TITLE,
        body: A.default.Messages.PHONE_THEN_EMAIL_INTERSTITIAL_BODY,
        confirmText: A.default.Messages.PHONE_THEN_EMAIL_INTERSTITIAL_CONFIRM
      })
    }, {
      modalKey: v,
      Layer: I.default,
      onCloseCallback: M
    })
  }, [R, P]), (0, n.jsx)(S.default, {
    types: R,
    captchaKey: L,
    onCaptchaVerify: e => {
      r.HTTP.post({
        url: T.Endpoints.CAPTCHA,
        body: {
          captcha_key: e
        },
        oldFormErrors: !0
      }).then(d.popLayer, () => {
        O(e => e + 1)
      })
    },
    theme: t,
    onClick: e => {
      e === T.VerificationTypes.EMAIL_OR_PHONE || e === T.VerificationTypes.EMAIL || e === T.VerificationTypes.REVERIFY_EMAIL ? M() : x()
    },
    onLogout: () => {
      (0, o.openModalLazy)(async () => {
        let {
          ConfirmModal: e,
          Text: t
        } = await Promise.resolve().then(a.bind(a, "481060"));
        return a => (0, n.jsx)(e, {
          header: A.default.Messages.LOGOUT,
          confirmText: A.default.Messages.LOGOUT,
          cancelText: A.default.Messages.CANCEL,
          onConfirm: () => u.default.logout(),
          ...a,
          children: (0, n.jsx)(t, {
            variant: "text-md/normal",
            children: A.default.Messages.USER_SETTINGS_CONFIRM_LOGOUT
          })
        })
      }, {
        Layer: I.default
      })
    }
  })
}