t.r(s), t.d(s, {
  default: function() {
return m;
  }
}), t(47120);
var n = t(735250),
  o = t(470079),
  a = t(990547),
  l = t(442837),
  i = t(481060),
  r = t(809206),
  E = t(794358),
  _ = t(594174),
  d = t(706734),
  u = t(264119),
  c = t(75788),
  N = t(22150),
  C = t(361833),
  A = t(526761),
  S = t(660817),
  M = t(800010);

function m(e) {
  var s;
  let {
transitionState: t,
onClose: m
  } = e, I = (0, l.e7)([_.default], () => _.default.getCurrentUser()), T = o.useRef(null !== (s = null == I ? void 0 : I.verified) && void 0 !== s && s);
  o.useEffect(() => () => (0, r.Zy)(), []);
  let x = null == I ? void 0 : I.verified,
O = x ? A.Ax.CONFIRM_START : A.Ax.EMAIL_AND_PASSWORD,
[R, h] = o.useState(O),
[f, L] = o.useState(null),
[g, p] = o.useState(null),
[v, j] = o.useState(null),
[D, U] = o.useState(''),
[G, B] = o.useState(),
Z = (0, E.d)('change_email_modal'),
H = {
  impression_group: a.ImpressionGroups.USER_ACCOUNT_EMAIL_CHANGE_FLOW
};
  return (0, n.jsxs)(i.ModalRoot, {
transitionState: t,
disableTrack: !0,
children: [
  (0, n.jsx)('img', {
    alt: '',
    className: S.headerImage,
    src: M
  }),
  (0, n.jsxs)(i.Slides, {
    activeSlide: R,
    width: 440,
    onSlideReady: e => L(e),
    children: [
      (0, n.jsx)(i.Slide, {
        id: A.Ax.CONFIRM_START,
        impressionName: a.ImpressionNames.USER_ACCOUNT_EMAIL_CHANGE_SEND_CODE,
        impressionProperties: H,
        children: (0, n.jsx)(N.Z, {
          onNext: () => h(A.Ax.CONFIRM_CODE),
          onClose: m
        })
      }),
      (0, n.jsx)(i.Slide, {
        id: A.Ax.CONFIRM_CODE,
        impressionName: a.ImpressionNames.USER_ACCOUNT_EMAIL_CHANGE_VERIFY_CODE,
        impressionProperties: H,
        children: (0, n.jsx)(c.Z, {
          error: v,
          setError: j,
          setEmailToken: p,
          isSlideReady: f === A.Ax.CONFIRM_CODE,
          onNext: () => h(Z ? A.Ax.CHANGE_EMAIL_REASONS : A.Ax.EMAIL_AND_PASSWORD),
          onClose: m
        })
      }),
      (0, n.jsx)(i.Slide, {
        id: A.Ax.CHANGE_EMAIL_REASONS,
        impressionProperties: H,
        children: (0, n.jsx)(d.Z, {
          onNext: () => h(A.Ax.EMAIL_AND_PASSWORD),
          onClose: m,
          reason: G,
          onReasonChange: B
        })
      }),
      (0, n.jsx)(i.Slide, {
        id: A.Ax.EMAIL_AND_PASSWORD,
        impressionName: a.ImpressionNames.USER_ACCOUNT_EMAIL_CHANGE_ENTER_EMAIL,
        impressionProperties: {
          ...H,
          email_verified: T.current
        },
        children: (0, n.jsx)(C.Z, {
          emailToken: g,
          isSlideReady: f === A.Ax.EMAIL_AND_PASSWORD,
          onBack: x ? () => h(Z ? A.Ax.CHANGE_EMAIL_REASONS : A.Ax.CONFIRM_CODE) : null,
          onNext: e => {
            U(e), h(A.Ax.COMPLETE);
          },
          onClose: m
        })
      }),
      (0, n.jsx)(i.Slide, {
        id: A.Ax.COMPLETE,
        impressionName: a.ImpressionNames.USER_ACCOUNT_EMAIL_CHANGE_COMPLETE,
        impressionProperties: H,
        children: (0, n.jsx)(u.Z, {
          email: D,
          onClose: m
        })
      })
    ]
  })
]
  });
}