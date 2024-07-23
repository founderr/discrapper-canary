t.r(s), t.d(s, {
  default: function() {
return T;
  }
}), t(47120);
var n = t(735250),
  o = t(470079),
  a = t(990547),
  l = t(442837),
  r = t(481060),
  i = t(809206),
  E = t(794358),
  _ = t(594174),
  d = t(706734),
  c = t(264119),
  N = t(75788),
  u = t(22150),
  A = t(361833),
  C = t(134562),
  M = t(526761),
  S = t(259076),
  m = t(120455),
  I = t(800010),
  x = t(75277);

function T(e) {
  var s;
  let {
transitionState: t,
onClose: T
  } = e, R = (0, l.e7)([_.default], () => _.default.getCurrentUser()), O = o.useRef(null !== (s = null == R ? void 0 : R.verified) && void 0 !== s && s);
  o.useEffect(() => () => (0, i.Zy)(), []);
  let h = null == R ? void 0 : R.verified,
L = h ? M.Ax.CONFIRM_START : M.Ax.EMAIL_AND_PASSWORD,
[f, g] = o.useState(L),
[p, j] = o.useState(null),
[v, G] = o.useState(null),
[D, U] = o.useState(null),
[H, B] = o.useState(''),
[Z, k] = o.useState(),
P = (0, E.d)('change_email_modal'),
b = f === M.Ax.CHANGE_EMAIL_WARNING ? m.wumpusExclamationImg : m.emailHeaderImg,
y = f === M.Ax.CHANGE_EMAIL_WARNING ? x : I,
F = {
  impression_group: a.ImpressionGroups.USER_ACCOUNT_EMAIL_CHANGE_FLOW
};
  return (0, n.jsxs)(r.ModalRoot, {
transitionState: t,
disableTrack: !0,
children: [
  (0, n.jsx)('img', {
    alt: '',
    className: b,
    src: y
  }),
  (0, n.jsxs)(r.Slides, {
    activeSlide: f,
    width: 440,
    onSlideReady: e => j(e),
    children: [
      (0, n.jsx)(r.Slide, {
        id: M.Ax.CONFIRM_START,
        impressionName: a.ImpressionNames.USER_ACCOUNT_EMAIL_CHANGE_SEND_CODE,
        impressionProperties: F,
        children: (0, n.jsx)(u.Z, {
          onNext: () => g(M.Ax.CONFIRM_CODE),
          onClose: T
        })
      }),
      (0, n.jsx)(r.Slide, {
        id: M.Ax.CONFIRM_CODE,
        impressionName: a.ImpressionNames.USER_ACCOUNT_EMAIL_CHANGE_VERIFY_CODE,
        impressionProperties: F,
        children: (0, n.jsx)(N.Z, {
          error: D,
          setError: U,
          setEmailToken: G,
          isSlideReady: p === M.Ax.CONFIRM_CODE,
          onNext: () => g(P ? M.Ax.CHANGE_EMAIL_REASONS : M.Ax.EMAIL_AND_PASSWORD),
          onClose: T
        })
      }),
      (0, n.jsx)(r.Slide, {
        id: M.Ax.CHANGE_EMAIL_REASONS,
        impressionProperties: F,
        children: (0, n.jsx)(d.Z, {
          onNext: () => null != Z && S.Mr.has(Z) ? g(M.Ax.CHANGE_EMAIL_WARNING) : g(M.Ax.EMAIL_AND_PASSWORD),
          onClose: T,
          reason: Z,
          onReasonChange: k
        })
      }),
      (0, n.jsx)(r.Slide, {
        id: M.Ax.CHANGE_EMAIL_WARNING,
        impressionProperties: F,
        children: (0, n.jsx)(C.Z, {
          onNext: () => g(M.Ax.EMAIL_AND_PASSWORD),
          onClose: T
        })
      }),
      (0, n.jsx)(r.Slide, {
        id: M.Ax.EMAIL_AND_PASSWORD,
        impressionName: a.ImpressionNames.USER_ACCOUNT_EMAIL_CHANGE_ENTER_EMAIL,
        impressionProperties: {
          ...F,
          email_verified: O.current
        },
        children: (0, n.jsx)(A.Z, {
          emailToken: v,
          isSlideReady: p === M.Ax.EMAIL_AND_PASSWORD,
          onBack: h ? () => {
            P ? g(null != Z && S.Mr.has(Z) ? M.Ax.CHANGE_EMAIL_WARNING : M.Ax.CHANGE_EMAIL_REASONS) : g(M.Ax.CONFIRM_CODE);
          } : null,
          onNext: e => {
            B(e), g(M.Ax.COMPLETE);
          },
          onClose: T
        })
      }),
      (0, n.jsx)(r.Slide, {
        id: M.Ax.COMPLETE,
        impressionName: a.ImpressionNames.USER_ACCOUNT_EMAIL_CHANGE_COMPLETE,
        impressionProperties: F,
        children: (0, n.jsx)(c.Z, {
          email: H,
          onClose: T
        })
      })
    ]
  })
]
  });
}