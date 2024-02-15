"use strict";
a.r(t), a.d(t, {
  default: function() {
    return A
  }
}), a("222007");
var s = a("37983"),
  l = a("884691"),
  n = a("77078"),
  i = a("698609"),
  o = a("124539"),
  d = a("776724"),
  r = a("57242"),
  c = a("711734"),
  u = a("299738"),
  E = a("170213"),
  _ = a("668222");

function A(e) {
  let {
    classificationId: t,
    transitionState: a,
    initialSlide: A = E.AppealIngestionSlideTypes.SPEED_BUMP,
    onClose: S
  } = e, [N, I] = l.useState(A), {
    classification: x,
    isDsaEligible: f
  } = (0, i.useSafetyHubClassification)(null != t ? t : ""), T = (null == x ? void 0 : x.is_spam) || !1, g = (null == x ? void 0 : x.is_coppa) || !1;
  l.useEffect(() => {
    f ? I(A) : I(E.AppealIngestionSlideTypes.COLLECT_SIGNAL)
  }, [I, A, f]);
  let C = l.useCallback(() => {
      r.default.close(), S()
    }, [S]),
    p = l.useCallback(() => {
      var e, t;
      let a = null;
      (a = f ? null === (e = E.SlidesOrderDsaEligible[N]) || void 0 === e ? void 0 : e.next : null === (t = E.SlidesOrderNonDsaEligible[N]) || void 0 === t ? void 0 : t.next) ? I(a): C()
    }, [N, f, C]),
    L = l.useCallback(() => {
      var e, t;
      let a;
      (a = f ? null === (e = E.SlidesOrderDsaEligible[N]) || void 0 === e ? void 0 : e.prev : null === (t = E.SlidesOrderNonDsaEligible[N]) || void 0 === t ? void 0 : t.prev) ? I(a): C()
    }, [N, f, C]);
  return (0, s.jsx)(n.ModalRoot, {
    transitionState: a,
    disableTrack: !0,
    children: (0, s.jsx)("div", {
      className: _.container,
      children: (0, s.jsxs)(n.Slides, {
        activeSlide: N,
        width: 440,
        children: [(0, s.jsx)(n.Slide, {
          id: E.AppealIngestionSlideTypes.SPEED_BUMP,
          children: (0, s.jsx)(u.default, {
            classification: x,
            onClose: C,
            onNext: p,
            isSpam: T,
            isCoppa: g
          })
        }), (0, s.jsx)(n.Slide, {
          id: E.AppealIngestionSlideTypes.COLLECT_SIGNAL,
          children: (0, s.jsx)(o.default, {
            isDsaEligible: f,
            onClose: C,
            onNext: p,
            onBack: L
          })
        }), (0, s.jsx)(n.Slide, {
          id: E.AppealIngestionSlideTypes.CONFIRM_SUBMISSION,
          children: (0, s.jsx)(d.default, {
            onClose: C,
            onNext: p,
            onBack: L
          })
        }), (0, s.jsx)(n.Slide, {
          id: E.AppealIngestionSlideTypes.REQUEST_SENT,
          children: (0, s.jsx)(c.default, {
            onNext: p
          })
        }), (0, s.jsx)(n.Slide, {
          id: E.AppealIngestionSlideTypes.THANKS,
          children: (0, s.jsx)(o.default, {
            isDsaEligible: f,
            onClose: C,
            onNext: p,
            onBack: L
          })
        })]
      })
    })
  })
}