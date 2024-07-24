t.r(s), t.d(s, {
  default: function() {
return O;
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
  N = t(626135),
  d = t(706734),
  c = t(264119),
  A = t(75788),
  u = t(22150),
  C = t(361833),
  M = t(134562),
  S = t(526761),
  m = t(981631),
  I = t(259076),
  x = t(660817),
  T = t(800010),
  R = t(75277);

function O(e) {
  var s;
  let {
transitionState: t,
onClose: O
  } = e, h = (0, l.e7)([_.default], () => _.default.getCurrentUser()), L = o.useRef(null !== (s = null == h ? void 0 : h.verified) && void 0 !== s && s);
  o.useEffect(() => (N.default.track(m.rMx.USER_ACCOUNT_EMAIL_CHANGE_ATTEMPTED), () => (0, i.Zy)()), []);
  let f = null == h ? void 0 : h.verified,
p = f ? S.Ax.CONFIRM_START : S.Ax.EMAIL_AND_PASSWORD,
[g, G] = o.useState(p),
[j, v] = o.useState(null),
[D, U] = o.useState(null),
[H, B] = o.useState(null),
[Z, k] = o.useState(''),
[P, b] = o.useState(),
y = (0, E.d)('change_email_modal'),
F = g === S.Ax.CHANGE_EMAIL_WARNING ? x.wumpusExclamationImg : x.emailHeaderImg,
w = g === S.Ax.CHANGE_EMAIL_WARNING ? R : T,
K = {
  impression_group: a.ImpressionGroups.USER_ACCOUNT_EMAIL_CHANGE_FLOW
};
  return (0, n.jsxs)(r.ModalRoot, {
transitionState: t,
disableTrack: !0,
children: [
  (0, n.jsx)('img', {
    alt: '',
    className: F,
    src: w
  }),
  (0, n.jsxs)(r.Slides, {
    activeSlide: g,
    width: 440,
    onSlideReady: e => v(e),
    children: [
      (0, n.jsx)(r.Slide, {
        id: S.Ax.CONFIRM_START,
        impressionName: a.ImpressionNames.USER_ACCOUNT_EMAIL_CHANGE_SEND_CODE,
        impressionProperties: K,
        children: (0, n.jsx)(u.Z, {
          onNext: () => G(S.Ax.CONFIRM_CODE),
          onClose: O
        })
      }),
      (0, n.jsx)(r.Slide, {
        id: S.Ax.CONFIRM_CODE,
        impressionName: a.ImpressionNames.USER_ACCOUNT_EMAIL_CHANGE_VERIFY_CODE,
        impressionProperties: K,
        children: (0, n.jsx)(A.Z, {
          error: H,
          setError: B,
          setEmailToken: U,
          isSlideReady: j === S.Ax.CONFIRM_CODE,
          onNext: () => G(y ? S.Ax.CHANGE_EMAIL_REASONS : S.Ax.EMAIL_AND_PASSWORD),
          onClose: O
        })
      }),
      (0, n.jsx)(r.Slide, {
        id: S.Ax.CHANGE_EMAIL_REASONS,
        impressionName: a.ImpressionNames.USER_ACCOUNT_EMAIL_CHANGE_COLLECT_REASONS,
        impressionProperties: K,
        children: (0, n.jsx)(d.Z, {
          onNext: () => (N.default.track(m.rMx.USER_ACCOUNT_EMAIL_CHANGE_REASON_CONTINUE, {
            change_email_reason_enum: P
          }), null != P && I.Mr.has(P) ? G(S.Ax.CHANGE_EMAIL_WARNING) : G(S.Ax.EMAIL_AND_PASSWORD)),
          onClose: O,
          reason: P,
          onReasonChange: b
        })
      }),
      (0, n.jsx)(r.Slide, {
        id: S.Ax.CHANGE_EMAIL_WARNING,
        impressionName: a.ImpressionNames.USER_ACCOUNT_EMAIL_CHANGE_WARNING,
        impressionProperties: K,
        children: (0, n.jsx)(M.Z, {
          onNext: () => G(S.Ax.EMAIL_AND_PASSWORD),
          onClose: O
        })
      }),
      (0, n.jsx)(r.Slide, {
        id: S.Ax.EMAIL_AND_PASSWORD,
        impressionName: a.ImpressionNames.USER_ACCOUNT_EMAIL_CHANGE_ENTER_EMAIL,
        impressionProperties: {
          ...K,
          email_verified: L.current
        },
        children: (0, n.jsx)(C.Z, {
          emailToken: D,
          isSlideReady: j === S.Ax.EMAIL_AND_PASSWORD,
          onBack: f ? () => {
            y ? G(null != P && I.Mr.has(P) ? S.Ax.CHANGE_EMAIL_WARNING : S.Ax.CHANGE_EMAIL_REASONS) : G(S.Ax.CONFIRM_CODE);
          } : null,
          onNext: e => {
            k(e), G(S.Ax.COMPLETE);
          },
          onClose: O
        })
      }),
      (0, n.jsx)(r.Slide, {
        id: S.Ax.COMPLETE,
        impressionName: a.ImpressionNames.USER_ACCOUNT_EMAIL_CHANGE_COMPLETE,
        impressionProperties: K,
        children: (0, n.jsx)(c.Z, {
          email: Z,
          onClose: O
        })
      })
    ]
  })
]
  });
}