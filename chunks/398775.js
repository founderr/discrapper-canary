n.d(t, {
  Sz: function() {
    return P
  },
  of: function() {
    return N
  }
}), n(653041), n(47120);
var s = n(735250),
  a = n(470079),
  i = n(913527),
  o = n.n(i),
  r = n(99945),
  l = n(780384),
  c = n(481060),
  d = n(355467),
  u = n(410030),
  _ = n(906732),
  p = n(285952),
  m = n(296848),
  f = n(798769),
  E = n(981631),
  I = n(689938),
  C = n(436117);
async function h(e) {
  let {
    premiumSubscription: t,
    pauseDuration: n,
    onClose: s,
    setHasError: a,
    setIsCancelling: i,
    analyticsLocations: o,
    analyticsLocation: r
  } = e;
  try {
    i(!0), a(!1), await (0, d.Mg)(t, {
      pauseDuration: n
    }, o, r), s()
  } catch {
    a(!0), i(!1)
  }
}

function N(e) {
  let {
    premiumType: t,
    onClose: n,
    pauseDuration: i,
    setPauseDuration: o,
    footer: l,
    premiumSubscription: d
  } = e, u = a.useCallback(e => {
    let {
      value: t
    } = e;
    o(t)
  }, [o]), _ = d.status === E.O0b.PAUSED ? I.Z.Messages.PREMIUM_PAUSE_SELECT_EXTEND_DURATION_SUBTITLE : I.Z.Messages.PREMIUM_PAUSE_SELECT_SUBTITLE, h = function(e) {
    let t = e.status === E.O0b.PAUSED ? I.Z.Messages.PREMIUM_PAUSE_EXTEND_DURATION_MONTHS_CAPITALIZE : I.Z.Messages.PREMIUM_PAUSE_DURATION_MONTHS_CAPITALIZE,
      {
        durations: n,
        currentDaysPaused: s
      } = (0, m.AT)(e),
      a = [];
    for (let e of n) {
      let n = r.T[e];
      a.push({
        name: t.format({
          days: n - s
        }),
        value: n,
        radioItemIconClassName: C.radioOption
      })
    }
    return a.sort((e, t) => e.value - t.value), a.push({
      name: I.Z.Messages.PREMIUM_PAUSE_DURATION_CANCEL,
      value: 0,
      radioBarClassName: C.cancelText,
      radioItemIconClassName: C.cancelText
    }), a
  }(d);
  return a.useEffect(() => {
    if (!(h.length < 1)) o(h[0].value)
  }, []), (0, s.jsxs)(s.Fragment, {
    children: [(0, s.jsx)(f.Z, {
      premiumType: t,
      onClose: n
    }), (0, s.jsx)(c.ModalHeader, {
      separator: !1,
      children: (0, s.jsxs)("div", {
        className: C.__invalid_header,
        children: [(0, s.jsx)(c.Heading, {
          variant: "heading-xl/bold",
          className: C.__invalid_modalHeader,
          children: I.Z.Messages.PREMIUM_PAUSE_SELECT_TITLE
        }), (0, s.jsx)(c.Heading, {
          variant: "heading-sm/medium",
          className: C.subtitle,
          children: _
        })]
      })
    }), (0, s.jsx)(c.ModalContent, {
      className: C.body,
      children: (0, s.jsx)(c.RadioGroup, {
        options: h,
        onChange: u,
        value: i
      })
    }), (0, s.jsx)(c.ModalFooter, {
      justify: p.Z.Justify.START,
      children: l
    })]
  })
}

function P(e) {
  let {
    premiumSubscription: t,
    premiumType: n,
    onClose: i,
    pauseDuration: r,
    analyticsLocation: d
  } = e, [m, N] = a.useState(!1), {
    analyticsLocations: P
  } = (0, _.ZP)(), [g, T] = a.useState(!1), S = (0, u.ZP)(), R = null, A = null, b = [E.O0b.PAST_DUE, E.O0b.PAUSED].includes(t.status) ? t.currentPeriodStart : t.currentPeriodEnd, x = o()(b).add(r, "days").toDate();
  switch (t.status) {
    case E.O0b.PAST_DUE:
      A = I.Z.Messages.PREMIUM_PAUSE_PAST_DUE_CONFIRM_BODY.format({
        pauseDuration: r,
        resumeDate: x
      });
      break;
    case E.O0b.PAUSED:
      A = I.Z.Messages.PREMIUM_PAUSE_EXTEND_CONFIRM_BODY.format({
        resumeDate: x
      });
      break;
    default:
      A = I.Z.Messages.PREMIUM_PAUSE_CONFIRM_BODY.format({
        pauseDate: b,
        resumeDate: x,
        pauseDuration: r
      })
  }
  return R = (0, s.jsx)("div", {
    className: C.body,
    children: A
  }), (0, s.jsxs)(s.Fragment, {
    children: [(0, s.jsx)(f.Z, {
      premiumType: n,
      onClose: i
    }), (0, s.jsx)(c.ModalHeader, {
      separator: !1,
      children: (0, s.jsx)("div", {
        className: C.__invalid_header,
        children: (0, s.jsx)(c.Heading, {
          variant: "heading-xl/bold",
          className: C.__invalid_modalHeader,
          children: I.Z.Messages.PREMIUM_PAUSE_YOUR_SUBSCRIPTION_WILL_BE_PAUSED
        })
      })
    }), (0, s.jsxs)(c.ModalContent, {
      className: C.body,
      children: [m ? (0, s.jsx)(c.FormErrorBlock, {
        className: C.errorBlock,
        children: I.Z.Messages.BILLING_ERROR_GENERIC
      }) : null, R]
    }), (0, s.jsx)(c.ModalFooter, {
      justify: p.Z.Justify.START,
      children: (0, s.jsxs)("div", {
        className: C.whatYouLoseButtonContainer,
        children: [(0, s.jsx)(c.Button, {
          color: c.Button.Colors.RED,
          disabled: g || null == r,
          onClick: async () => {
            await h({
              premiumSubscription: t,
              pauseDuration: r,
              setIsCancelling: T,
              setHasError: N,
              onClose: i,
              analyticsLocations: P,
              analyticsLocation: d
            })
          },
          children: I.Z.Messages.CONFIRM
        }), (0, s.jsx)(c.Button, {
          look: c.Button.Looks.LINK,
          color: (0, l.wj)(S) ? c.Button.Colors.WHITE : c.Button.Colors.PRIMARY,
          onClick: i,
          children: I.Z.Messages.PREMIUM_CANCEL_WHAT_YOU_LOSE_BACK
        })]
      })
    })]
  })
}