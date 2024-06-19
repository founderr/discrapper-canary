n.d(t, {
  F0: function() {
    return f
  },
  HR: function() {
    return Z
  },
  ZP: function() {
    return v
  }
}), n(47120);
var i = n(735250),
  s = n(470079),
  l = n(990547),
  a = n(442837),
  r = n(544891),
  o = n(481060),
  c = n(893776),
  u = n(37234),
  d = n(809206),
  E = n(110924),
  h = n(714338),
  _ = n(213609),
  I = n(144114),
  m = n(210887),
  g = n(23434),
  p = n(610001),
  T = n(78415),
  N = n(1964),
  S = n(981631),
  C = n(815660),
  A = n(689938);
let f = "Email Verification",
  Z = "PHONE_THEN_EMAIL_INTERSTITIAL_MODAL_KEY";

function v() {
  let {
    action: e,
    theme: t
  } = (0, a.cj)([g.Z, m.Z], () => ({
    action: g.Z.getAction(),
    theme: m.Z.theme
  })), v = N.Z.getVerificationTypes(e), [L, O] = s.useState(0), R = (0, E.Z)(v);
  (0, _.Z)({
    type: l.ImpressionTypes.MODAL,
    name: l.ImpressionNames.USER_ACTION_REQUIRED,
    properties: {
      verification_type: v[0],
      verification_types: v
    }
  }, {}, [v.toString()]);
  let x = () => {
      (0, d.FD)(), (0, o.openModalLazy)(async () => {
        let {
          default: e
        } = await Promise.all([n.e("49237"), n.e("35401")]).then(n.bind(n, 284549));
        return t => (0, i.jsx)(e, {
          ...t
        })
      }, {
        modalKey: f,
        Layer: T.ZP
      })
    },
    M = () => {
      (0, o.openModalLazy)(async () => {
        let {
          default: e
        } = await Promise.all([n.e("49237"), n.e("99387"), n.e("76540")]).then(n.bind(n, 607018));
        return t => (0, i.jsx)(e, {
          reason: I.L.USER_ACTION_REQUIRED,
          ...t
        })
      }, {
        modalKey: C.M,
        Layer: T.ZP
      })
    };
  return s.useEffect(() => (h.Z.disable(), () => {
    h.Z.enable()
  }), []), s.useEffect(() => {
    (null == R ? void 0 : R[0]) === S.PUi.PHONE && (null == v ? void 0 : v[0]) === S.PUi.EMAIL && (0, o.openModalLazy)(async () => {
      let {
        default: e
      } = await Promise.resolve().then(n.bind(n, 468026));
      return t => (0, i.jsx)(e, {
        ...t,
        title: A.Z.Messages.PHONE_THEN_EMAIL_INTERSTITIAL_TITLE,
        body: A.Z.Messages.PHONE_THEN_EMAIL_INTERSTITIAL_BODY,
        confirmText: A.Z.Messages.PHONE_THEN_EMAIL_INTERSTITIAL_CONFIRM
      })
    }, {
      modalKey: Z,
      Layer: T.ZP,
      onCloseCallback: x
    })
  }, [v, R]), (0, i.jsx)(p.Z, {
    types: v,
    captchaKey: L,
    onCaptchaVerify: e => {
      r.tn.post({
        url: S.ANM.CAPTCHA,
        body: {
          captcha_key: e
        },
        oldFormErrors: !0
      }).then(u.xf, () => {
        O(e => e + 1)
      })
    },
    theme: t,
    onClick: e => {
      e === S.PUi.EMAIL_OR_PHONE || e === S.PUi.EMAIL || e === S.PUi.REVERIFY_EMAIL ? x() : M()
    },
    onLogout: () => {
      (0, o.openModalLazy)(async () => {
        let {
          ConfirmModal: e,
          Text: t
        } = await Promise.resolve().then(n.bind(n, 481060));
        return n => (0, i.jsx)(e, {
          header: A.Z.Messages.LOGOUT,
          confirmText: A.Z.Messages.LOGOUT,
          cancelText: A.Z.Messages.CANCEL,
          onConfirm: () => c.Z.logout(),
          ...n,
          children: (0, i.jsx)(t, {
            variant: "text-md/normal",
            children: A.Z.Messages.USER_SETTINGS_CONFIRM_LOGOUT
          })
        })
      }, {
        Layer: T.ZP
      })
    }
  })
}