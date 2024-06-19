t.d(s, {
  Sz: function() {
    return T
  },
  of: function() {
    return P
  }
}), t(653041), t(47120);
var n = t(735250),
  a = t(470079),
  i = t(913527),
  l = t.n(i),
  r = t(99945),
  o = t(780384),
  c = t(481060),
  u = t(355467),
  d = t(410030),
  E = t(906732),
  _ = t(285952),
  p = t(296848),
  I = t(798769),
  m = t(981631),
  N = t(689938),
  C = t(436117);
async function h(e) {
  let {
    premiumSubscription: s,
    pauseDuration: t,
    onClose: n,
    setHasError: a,
    setIsCancelling: i,
    analyticsLocations: l,
    analyticsLocation: r
  } = e;
  try {
    i(!0), a(!1), await (0, u.Mg)(s, {
      pauseDuration: t
    }, l, r), n()
  } catch {
    a(!0), i(!1)
  }
}

function P(e) {
  let {
    premiumType: s,
    onClose: t,
    pauseDuration: i,
    setPauseDuration: l,
    footer: o,
    premiumSubscription: u
  } = e, d = a.useCallback(e => {
    let {
      value: s
    } = e;
    l(s)
  }, [l]), E = u.status === m.O0b.PAUSED ? N.Z.Messages.PREMIUM_PAUSE_SELECT_EXTEND_DURATION_SUBTITLE : N.Z.Messages.PREMIUM_PAUSE_SELECT_SUBTITLE, h = function(e) {
    let s = e.status === m.O0b.PAUSED ? N.Z.Messages.PREMIUM_PAUSE_EXTEND_DURATION_MONTHS_CAPITALIZE : N.Z.Messages.PREMIUM_PAUSE_DURATION_MONTHS_CAPITALIZE,
      {
        durations: t,
        currentDaysPaused: n
      } = (0, p.AT)(e),
      a = [];
    for (let e of t) {
      let t = r.T[e];
      a.push({
        name: s.format({
          days: t - n
        }),
        value: t,
        radioItemIconClassName: C.radioOption
      })
    }
    return a.sort((e, s) => e.value - s.value), a.push({
      name: N.Z.Messages.PREMIUM_PAUSE_DURATION_CANCEL,
      value: 0,
      radioBarClassName: C.cancelText,
      radioItemIconClassName: C.cancelText
    }), a
  }(u);
  return a.useEffect(() => {
    if (!(h.length < 1)) l(h[0].value)
  }, []), (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsx)(I.Z, {
      premiumType: s,
      onClose: t
    }), (0, n.jsx)(c.ModalHeader, {
      separator: !1,
      children: (0, n.jsxs)("div", {
        className: C.__invalid_header,
        children: [(0, n.jsx)(c.Heading, {
          variant: "heading-xl/bold",
          className: C.__invalid_modalHeader,
          children: N.Z.Messages.PREMIUM_PAUSE_SELECT_TITLE
        }), (0, n.jsx)(c.Heading, {
          variant: "heading-sm/medium",
          className: C.subtitle,
          children: E
        })]
      })
    }), (0, n.jsx)(c.ModalContent, {
      className: C.body,
      children: (0, n.jsx)(c.RadioGroup, {
        options: h,
        onChange: d,
        value: i
      })
    }), (0, n.jsx)(c.ModalFooter, {
      justify: _.Z.Justify.START,
      children: o
    })]
  })
}

function T(e) {
  let {
    premiumSubscription: s,
    premiumType: t,
    onClose: i,
    pauseDuration: r,
    analyticsLocation: u
  } = e, [p, P] = a.useState(!1), {
    analyticsLocations: T
  } = (0, E.ZP)(), [A, R] = a.useState(!1), S = (0, d.ZP)(), M = null, f = null, g = [m.O0b.PAST_DUE, m.O0b.PAUSED].includes(s.status) ? s.currentPeriodStart : s.currentPeriodEnd, L = l()(g).add(r, "days").toDate();
  switch (s.status) {
    case m.O0b.PAST_DUE:
      f = N.Z.Messages.PREMIUM_PAUSE_PAST_DUE_CONFIRM_BODY.format({
        pauseDuration: r,
        resumeDate: L
      });
      break;
    case m.O0b.PAUSED:
      f = N.Z.Messages.PREMIUM_PAUSE_EXTEND_CONFIRM_BODY.format({
        resumeDate: L
      });
      break;
    default:
      f = N.Z.Messages.PREMIUM_PAUSE_CONFIRM_BODY.format({
        pauseDate: g,
        resumeDate: L,
        pauseDuration: r
      })
  }
  return M = (0, n.jsx)("div", {
    className: C.body,
    children: f
  }), (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsx)(I.Z, {
      premiumType: t,
      onClose: i
    }), (0, n.jsx)(c.ModalHeader, {
      separator: !1,
      children: (0, n.jsx)("div", {
        className: C.__invalid_header,
        children: (0, n.jsx)(c.Heading, {
          variant: "heading-xl/bold",
          className: C.__invalid_modalHeader,
          children: N.Z.Messages.PREMIUM_PAUSE_YOUR_SUBSCRIPTION_WILL_BE_PAUSED
        })
      })
    }), (0, n.jsxs)(c.ModalContent, {
      className: C.body,
      children: [p ? (0, n.jsx)(c.FormErrorBlock, {
        className: C.errorBlock,
        children: N.Z.Messages.BILLING_ERROR_GENERIC
      }) : null, M]
    }), (0, n.jsx)(c.ModalFooter, {
      justify: _.Z.Justify.START,
      children: (0, n.jsxs)("div", {
        className: C.whatYouLoseButtonContainer,
        children: [(0, n.jsx)(c.Button, {
          color: c.Button.Colors.RED,
          disabled: A || null == r,
          onClick: async () => {
            await h({
              premiumSubscription: s,
              pauseDuration: r,
              setIsCancelling: R,
              setHasError: P,
              onClose: i,
              analyticsLocations: T,
              analyticsLocation: u
            })
          },
          children: N.Z.Messages.CONFIRM
        }), (0, n.jsx)(c.Button, {
          look: c.Button.Looks.LINK,
          color: (0, o.wj)(S) ? c.Button.Colors.WHITE : c.Button.Colors.PRIMARY,
          onClick: i,
          children: N.Z.Messages.PREMIUM_CANCEL_WHAT_YOU_LOSE_BACK
        })]
      })
    })]
  })
}