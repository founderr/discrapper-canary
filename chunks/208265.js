n.r(s), n.d(s, {
  default: function() {
    return A
  }
}), n(47120);
var a = n(735250),
  l = n(470079),
  t = n(481060),
  i = n(613734),
  o = n(409617),
  r = n(451426),
  c = n(384725),
  d = n(534044),
  _ = n(670199),
  E = n(800530),
  N = n(981631),
  x = n(707134);

function A(e) {
  let {
    classificationId: s,
    transitionState: n,
    initialSlide: A = E.Cs.SPEED_BUMP,
    onClose: u
  } = e, [I, S] = l.useState(A), {
    classification: T,
    isDsaEligible: C
  } = (0, i.YG)(null != s ? s : N.lds), h = (null == T ? void 0 : T.is_spam) || !1, L = (null == T ? void 0 : T.is_coppa) || !1;
  l.useEffect(() => {
    C ? S(A) : S(E.Cs.COLLECT_SIGNAL)
  }, [S, A, C]);
  let m = l.useCallback(() => {
      c.Z.close(), u()
    }, [u]),
    M = l.useCallback(() => {
      var e, s;
      let n = null;
      (n = C ? null === (e = E.d9[I]) || void 0 === e ? void 0 : e.next : null === (s = E.c6[I]) || void 0 === s ? void 0 : s.next) ? S(n): m()
    }, [I, C, m]),
    g = l.useCallback(() => {
      var e, s;
      let n;
      (n = C ? null === (e = E.d9[I]) || void 0 === e ? void 0 : e.prev : null === (s = E.c6[I]) || void 0 === s ? void 0 : s.prev) ? S(n): m()
    }, [I, C, m]);
  return (0, a.jsx)(t.ModalRoot, {
    transitionState: n,
    disableTrack: !0,
    size: t.ModalSize.DYNAMIC,
    children: (0, a.jsx)("div", {
      className: x.container,
      children: (0, a.jsxs)(t.Slides, {
        activeSlide: I,
        width: 500,
        children: [(0, a.jsx)(t.Slide, {
          id: E.Cs.SPEED_BUMP,
          children: (0, a.jsx)(_.Z, {
            classification: T,
            onClose: m,
            onNext: M,
            isSpam: h,
            isCoppa: L
          })
        }), (0, a.jsx)(t.Slide, {
          id: E.Cs.COLLECT_SIGNAL,
          children: (0, a.jsx)(o.Z, {
            isDsaEligible: C,
            onClose: m,
            onNext: M,
            onBack: g
          })
        }), (0, a.jsx)(t.Slide, {
          id: E.Cs.CONFIRM_SUBMISSION,
          children: (0, a.jsx)(r.Z, {
            onClose: m,
            onNext: M,
            onBack: g
          })
        }), (0, a.jsx)(t.Slide, {
          id: E.Cs.REQUEST_SENT,
          children: (0, a.jsx)(d.Z, {
            onNext: M
          })
        }), (0, a.jsx)(t.Slide, {
          id: E.Cs.THANKS,
          children: (0, a.jsx)(o.Z, {
            isDsaEligible: C,
            onClose: m,
            onNext: M,
            onBack: g
          })
        })]
      })
    })
  })
}