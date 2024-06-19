t.r(n), t.d(n, {
  InappropriateConversationModalSlideKeys: function() {
    return s
  }
}), t(47120);
var s, o, r = t(735250),
  a = t(470079),
  i = t(481060),
  c = t(378298),
  E = t(473092),
  N = t(684471),
  l = t(745982),
  u = t(463439),
  I = t(689938),
  T = t(837034);
(o = s || (s = {}))[o.INTRO = 0] = "INTRO", o[o.SAFETY_TIPS = 1] = "SAFETY_TIPS", o[o.TAKE_ACTION = 2] = "TAKE_ACTION";
n.default = e => {
  let {
    warningId: n,
    warningType: t,
    senderId: s,
    modalProps: o,
    channelId: A
  } = e, [_, R] = a.useState(0), d = a.useMemo(() => ({
    channelId: A,
    senderId: s,
    warningId: n,
    warningType: t,
    isNudgeWarning: !1
  }), [A, s, n, t]);
  a.useEffect(() => {
    (0, E.KQ)({
      ...d,
      viewName: E.pb.SAFETY_TAKEOVER_MODAL
    })
  }, [d]);
  let O = a.useCallback(e => {
      (0, E.qc)({
        ...d,
        cta: e
      })
    }, [d]),
    [C, S] = a.useState(!1);

  function P(e) {
    R(e)
  }
  return (0, r.jsxs)(i.ModalRoot, {
    transitionState: o.transitionState,
    children: [(0, r.jsx)("div", {
      className: T.container,
      children: (0, r.jsxs)(i.Slides, {
        width: 440,
        activeSlide: _,
        centered: !1,
        overflow: "visible",
        contentDisplay: "flex",
        children: [(0, r.jsx)(i.Slide, {
          id: 0,
          children: (0, r.jsx)(N.Z, {
            warningId: n,
            senderId: s,
            trackAnalyticsEvent: O,
            onNavigate: P
          })
        }), (0, r.jsx)(i.Slide, {
          id: 1,
          children: (0, r.jsx)(l.Z, {
            warningId: n,
            senderId: s,
            trackAnalyticsEvent: O
          })
        }), (0, r.jsx)(i.Slide, {
          id: 2,
          children: (0, r.jsx)(u.Z, {
            warningId: n,
            senderId: s,
            trackAnalyticsEvent: O,
            channelId: A,
            hasReported: C,
            onReport: function() {
              S(!0)
            }
          })
        })]
      })
    }), (0, r.jsxs)(i.ModalFooter, {
      className: T.footer,
      children: [(0, r.jsx)(i.Button, {
        className: T.footerButton,
        look: i.Button.Looks.LINK,
        color: i.Button.Colors.CUSTOM,
        size: i.Button.Sizes.MIN,
        onClick: function() {
          o.onClose(), (0, c.T)(A, [n]), O(E.NM.USER_TAKEOVER_MODAL_DISMISS)
        },
        children: I.Z.Messages.CLOSE
      }), 0 !== _ && (0, r.jsx)(i.Button, {
        className: T.footerButton,
        look: i.Button.Looks.LINK,
        color: i.Button.Colors.CUSTOM,
        size: i.Button.Sizes.MIN,
        onClick: () => P(0),
        children: I.Z.Messages.BACK
      })]
    })]
  })
}