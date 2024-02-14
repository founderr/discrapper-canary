"use strict";
n.r(t), n.d(t, {
  default: function() {
    return C
  }
}), n("222007");
var s = n("37983"),
  o = n("884691"),
  a = n("759843"),
  l = n("446674"),
  r = n("77078"),
  i = n("152584"),
  u = n("697218"),
  d = n("330355"),
  E = n("893044"),
  _ = n("509943"),
  c = n("457818"),
  T = n("397336"),
  S = n("917908"),
  N = n("92693");

function C(e) {
  var t;
  let {
    transitionState: n,
    onClose: C
  } = e, A = (0, l.useStateFromStores)([u.default], () => u.default.getCurrentUser()), f = o.useRef(null !== (t = null == A ? void 0 : A.verified) && void 0 !== t && t);
  o.useEffect(() => () => (0, i.accountDetailsClose)(), []);
  let I = null == A ? void 0 : A.verified,
    h = I ? T.ChangeEmailSteps.CONFIRM_START : T.ChangeEmailSteps.EMAIL_AND_PASSWORD,
    [R, m] = o.useState(h),
    [p, U] = o.useState(null),
    [O, M] = o.useState(null),
    [g, v] = o.useState(null),
    [x, G] = o.useState(""),
    D = {
      impression_group: a.ImpressionGroups.USER_ACCOUNT_EMAIL_CHANGE_FLOW
    };
  return (0, s.jsxs)(r.ModalRoot, {
    transitionState: n,
    disableTrack: !0,
    children: [(0, s.jsx)("img", {
      alt: "",
      className: S.headerImage,
      src: N
    }), (0, s.jsxs)(r.Slides, {
      activeSlide: R,
      width: 440,
      onSlideReady: e => U(e),
      children: [(0, s.jsx)(r.Slide, {
        id: T.ChangeEmailSteps.CONFIRM_START,
        impressionName: a.ImpressionNames.USER_ACCOUNT_EMAIL_CHANGE_SEND_CODE,
        impressionProperties: D,
        children: (0, s.jsx)(_.default, {
          onNext: () => m(T.ChangeEmailSteps.CONFIRM_CODE),
          onClose: C
        })
      }), (0, s.jsx)(r.Slide, {
        id: T.ChangeEmailSteps.CONFIRM_CODE,
        impressionName: a.ImpressionNames.USER_ACCOUNT_EMAIL_CHANGE_VERIFY_CODE,
        impressionProperties: D,
        children: (0, s.jsx)(E.default, {
          error: g,
          setError: v,
          setEmailToken: M,
          isSlideReady: p === T.ChangeEmailSteps.CONFIRM_CODE,
          onNext: () => m(T.ChangeEmailSteps.EMAIL_AND_PASSWORD),
          onClose: C
        })
      }), (0, s.jsx)(r.Slide, {
        id: T.ChangeEmailSteps.EMAIL_AND_PASSWORD,
        impressionName: a.ImpressionNames.USER_ACCOUNT_EMAIL_CHANGE_ENTER_EMAIL,
        impressionProperties: {
          ...D,
          email_verified: f.current
        },
        children: (0, s.jsx)(c.default, {
          emailToken: O,
          isSlideReady: p === T.ChangeEmailSteps.EMAIL_AND_PASSWORD,
          onBack: I ? () => m(T.ChangeEmailSteps.CONFIRM_CODE) : null,
          onNext: e => {
            G(e), m(T.ChangeEmailSteps.COMPLETE)
          },
          onClose: C
        })
      }), (0, s.jsx)(r.Slide, {
        id: T.ChangeEmailSteps.COMPLETE,
        impressionName: a.ImpressionNames.USER_ACCOUNT_EMAIL_CHANGE_COMPLETE,
        impressionProperties: D,
        children: (0, s.jsx)(d.default, {
          email: x,
          onClose: C
        })
      })]
    })]
  })
}