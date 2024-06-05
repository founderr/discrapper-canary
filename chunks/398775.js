"use strict";
s.r(t), s.d(t, {
  PremiumSubscriptionPauseModalConfirm: function() {
    return C
  },
  PremiumSubscriptionPauseModalSelect: function() {
    return P
  }
}), s("653041"), s("47120");
var a = s("735250"),
  n = s("470079"),
  i = s("913527"),
  l = s.n(i),
  r = s("99945"),
  u = s("780384"),
  o = s("481060"),
  d = s("355467"),
  c = s("410030"),
  p = s("906732"),
  f = s("285952"),
  m = s("296848"),
  E = s("798769"),
  _ = s("981631"),
  S = s("689938"),
  I = s("987417");
async function N(e) {
  let {
    premiumSubscription: t,
    pauseDuration: s,
    onClose: a,
    setHasError: n,
    setIsCancelling: i,
    analyticsLocations: l,
    analyticsLocation: r
  } = e;
  try {
    i(!0), n(!1), await (0, d.updateSubscription)(t, {
      pauseDuration: s
    }, l, r), a()
  } catch {
    n(!0), i(!1)
  }
}

function P(e) {
  let {
    premiumType: t,
    onClose: s,
    pauseDuration: i,
    setPauseDuration: l,
    footer: u,
    premiumSubscription: d
  } = e, c = n.useCallback(e => {
    let {
      value: t
    } = e;
    l(t)
  }, [l]), p = d.status === _.SubscriptionStatusTypes.PAUSED ? S.default.Messages.PREMIUM_PAUSE_SELECT_EXTEND_DURATION_SUBTITLE : S.default.Messages.PREMIUM_PAUSE_SELECT_SUBTITLE, N = function(e) {
    let t = e.status === _.SubscriptionStatusTypes.PAUSED ? S.default.Messages.PREMIUM_PAUSE_EXTEND_DURATION_MONTHS_CAPITALIZE : S.default.Messages.PREMIUM_PAUSE_DURATION_MONTHS_CAPITALIZE,
      {
        durations: s,
        currentDaysPaused: a
      } = (0, m.getSubscriptionPauseDurations)(e),
      n = [];
    for (let e of s) {
      let s = r.PauseDuration[e];
      n.push({
        name: t.format({
          days: s - a
        }),
        value: s,
        radioItemIconClassName: I.radioOption
      })
    }
    return n.sort((e, t) => e.value - t.value), n.push({
      name: S.default.Messages.PREMIUM_PAUSE_DURATION_CANCEL,
      value: 0,
      radioBarClassName: I.cancelText,
      radioItemIconClassName: I.cancelText
    }), n
  }(d);
  return n.useEffect(() => {
    !(N.length < 1) && l(N[0].value)
  }, []), (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(E.default, {
      premiumType: t,
      onClose: s
    }), (0, a.jsx)(o.ModalHeader, {
      separator: !1,
      children: (0, a.jsxs)("div", {
        className: I.__invalid_header,
        children: [(0, a.jsx)(o.Heading, {
          variant: "heading-xl/bold",
          className: I.__invalid_modalHeader,
          children: S.default.Messages.PREMIUM_PAUSE_SELECT_TITLE
        }), (0, a.jsx)(o.Heading, {
          variant: "heading-sm/medium",
          className: I.subtitle,
          children: p
        })]
      })
    }), (0, a.jsx)(o.ModalContent, {
      className: I.body,
      children: (0, a.jsx)(o.RadioGroup, {
        options: N,
        onChange: c,
        value: i
      })
    }), (0, a.jsx)(o.ModalFooter, {
      justify: f.default.Justify.START,
      children: u
    })]
  })
}

function C(e) {
  let {
    premiumSubscription: t,
    premiumType: s,
    onClose: i,
    pauseDuration: r,
    analyticsLocation: d
  } = e, [m, P] = n.useState(!1), {
    analyticsLocations: C
  } = (0, p.default)(), [h, T] = n.useState(!1), A = (0, c.default)(), R = null, M = null, y = [_.SubscriptionStatusTypes.PAST_DUE, _.SubscriptionStatusTypes.PAUSED].includes(t.status) ? t.currentPeriodStart : t.currentPeriodEnd, g = l()(y).add(r, "days").toDate();
  switch (t.status) {
    case _.SubscriptionStatusTypes.PAST_DUE:
      M = S.default.Messages.PREMIUM_PAUSE_PAST_DUE_CONFIRM_BODY.format({
        pauseDuration: r,
        resumeDate: g
      });
      break;
    case _.SubscriptionStatusTypes.PAUSED:
      M = S.default.Messages.PREMIUM_PAUSE_EXTEND_CONFIRM_BODY.format({
        resumeDate: g
      });
      break;
    default:
      M = S.default.Messages.PREMIUM_PAUSE_CONFIRM_BODY.format({
        pauseDate: y,
        resumeDate: g,
        pauseDuration: r
      })
  }
  return R = (0, a.jsx)("div", {
    className: I.body,
    children: M
  }), (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(E.default, {
      premiumType: s,
      onClose: i
    }), (0, a.jsx)(o.ModalHeader, {
      separator: !1,
      children: (0, a.jsx)("div", {
        className: I.__invalid_header,
        children: (0, a.jsx)(o.Heading, {
          variant: "heading-xl/bold",
          className: I.__invalid_modalHeader,
          children: S.default.Messages.PREMIUM_PAUSE_YOUR_SUBSCRIPTION_WILL_BE_PAUSED
        })
      })
    }), (0, a.jsxs)(o.ModalContent, {
      className: I.body,
      children: [m ? (0, a.jsx)(o.FormErrorBlock, {
        className: I.errorBlock,
        children: S.default.Messages.BILLING_ERROR_GENERIC
      }) : null, R]
    }), (0, a.jsx)(o.ModalFooter, {
      justify: f.default.Justify.START,
      children: (0, a.jsxs)("div", {
        className: I.whatYouLoseButtonContainer,
        children: [(0, a.jsx)(o.Button, {
          color: o.Button.Colors.RED,
          disabled: h || null == r,
          onClick: async () => {
            await N({
              premiumSubscription: t,
              pauseDuration: r,
              setIsCancelling: T,
              setHasError: P,
              onClose: i,
              analyticsLocations: C,
              analyticsLocation: d
            })
          },
          children: S.default.Messages.CONFIRM
        }), (0, a.jsx)(o.Button, {
          look: o.Button.Looks.LINK,
          color: (0, u.isThemeDark)(A) ? o.Button.Colors.WHITE : o.Button.Colors.PRIMARY,
          onClick: i,
          children: S.default.Messages.PREMIUM_CANCEL_WHAT_YOU_LOSE_BACK
        })]
      })
    })]
  })
}