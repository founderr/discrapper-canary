"use strict";
n.r(t), n.d(t, {
  EMAIL_VERIFICATION_MODAL_KEY: function() {
    return N
  },
  PHONE_THEN_EMAIL_INTERSTITIAL_MODAL_KEY: function() {
    return R
  },
  default: function() {
    return v
  }
}), n("47120");
var a = n("735250"),
  s = n("470079"),
  l = n("990547"),
  i = n("442837"),
  r = n("544891"),
  o = n("481060"),
  u = n("893776"),
  d = n("37234"),
  c = n("809206"),
  f = n("110924"),
  E = n("714338"),
  h = n("213609"),
  _ = n("144114"),
  C = n("210887"),
  m = n("23434"),
  S = n("610001"),
  I = n("78415"),
  T = n("1964"),
  p = n("981631"),
  g = n("815660"),
  A = n("689938");
let N = "Email Verification",
  R = "PHONE_THEN_EMAIL_INTERSTITIAL_MODAL_KEY";

function v() {
  let {
    action: e,
    theme: t
  } = (0, i.useStateFromStoresObject)([m.default, C.default], () => ({
    action: m.default.getAction(),
    theme: C.default.theme
  })), v = T.default.getVerificationTypes(e), [O, L] = s.useState(0), M = (0, f.default)(v);
  (0, h.default)({
    type: l.ImpressionTypes.MODAL,
    name: l.ImpressionNames.USER_ACTION_REQUIRED,
    properties: {
      verification_type: v[0],
      verification_types: v
    }
  }, {}, [v.toString()]);
  let P = () => {
      (0, c.accountDetailsInit)(), (0, o.openModalLazy)(async () => {
        let {
          default: e
        } = await Promise.all([n.e("49237"), n.e("35401")]).then(n.bind(n, "284549"));
        return t => (0, a.jsx)(e, {
          ...t
        })
      }, {
        modalKey: N,
        Layer: I.default
      })
    },
    y = () => {
      (0, o.openModalLazy)(async () => {
        let {
          default: e
        } = await Promise.all([n.e("49237"), n.e("99387"), n.e("76540")]).then(n.bind(n, "607018"));
        return t => (0, a.jsx)(e, {
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
    (null == M ? void 0 : M[0]) === p.VerificationTypes.PHONE && (null == v ? void 0 : v[0]) === p.VerificationTypes.EMAIL && (0, o.openModalLazy)(async () => {
      let {
        default: e
      } = await Promise.resolve().then(n.bind(n, "468026"));
      return t => (0, a.jsx)(e, {
        ...t,
        title: A.default.Messages.PHONE_THEN_EMAIL_INTERSTITIAL_TITLE,
        body: A.default.Messages.PHONE_THEN_EMAIL_INTERSTITIAL_BODY,
        confirmText: A.default.Messages.PHONE_THEN_EMAIL_INTERSTITIAL_CONFIRM
      })
    }, {
      modalKey: R,
      Layer: I.default,
      onCloseCallback: P
    })
  }, [v, M]), (0, a.jsx)(S.default, {
    types: v,
    captchaKey: O,
    onCaptchaVerify: e => {
      r.HTTP.post({
        url: p.Endpoints.CAPTCHA,
        body: {
          captcha_key: e
        },
        oldFormErrors: !0
      }).then(d.popLayer, () => {
        L(e => e + 1)
      })
    },
    theme: t,
    onClick: e => {
      e === p.VerificationTypes.EMAIL_OR_PHONE || e === p.VerificationTypes.EMAIL || e === p.VerificationTypes.REVERIFY_EMAIL ? P() : y()
    },
    onLogout: () => {
      (0, o.openModalLazy)(async () => {
        let {
          ConfirmModal: e,
          Text: t
        } = await Promise.resolve().then(n.bind(n, "481060"));
        return n => (0, a.jsx)(e, {
          header: A.default.Messages.LOGOUT,
          confirmText: A.default.Messages.LOGOUT,
          cancelText: A.default.Messages.CANCEL,
          onConfirm: () => u.default.logout(),
          ...n,
          children: (0, a.jsx)(t, {
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