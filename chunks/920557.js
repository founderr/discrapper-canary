n.d(t, {
  K: function() {
    return R
  }
}), n(47120), n(627341);
var s = n(735250),
  i = n(470079),
  l = n(120356),
  a = n.n(l),
  r = n(297821),
  o = n(920906),
  c = n(278074),
  u = n(748780),
  d = n(481060),
  E = n(542578),
  _ = n(153124),
  I = n(203143),
  T = n(79390),
  m = n(839963),
  N = n(139256),
  h = n(294608),
  C = n(689938),
  S = n(567909);

function A(e) {
  let {
    percentage: t,
    label: n,
    canShowVoterDetails: l,
    answerId: a
  } = e, o = (0, _.Dt)(), {
    channelId: c,
    messageId: u
  } = (0, h.pE)(), [m, N] = i.useState(""), [C, A] = i.useState(!1), g = "" !== m && C, p = i.useCallback(() => {
    N((0, T.e1)(u, c, a))
  }, [u, c, a]), f = i.useCallback(() => {
    p(), A(!0)
  }, [p]), R = i.useCallback(() => {
    A(!1)
  }, []), O = i.useCallback(() => {
    (0, I.n)({
      channelId: c,
      messageId: u,
      answerId: a
    })
  }, [c, u, a]);
  i.useEffect(() => {
    if (!!C) return E.Z.addReactChangeListener(p), () => {
      E.Z.removeReactChangeListener(p)
    }
  }, [C, p]);
  let M = (0, s.jsx)(d.Text, {
    variant: "text-xs/semibold",
    color: "none",
    className: S.voteCount,
    scaleFontToUserSetting: !0,
    children: n
  });
  return (0, s.jsxs)("div", {
    className: S.votesData,
    children: [l ? (0, s.jsxs)(s.Fragment, {
      children: [(0, s.jsx)(d.Tooltip, {
        text: (0, s.jsx)(d.Text, {
          variant: "text-sm/normal",
          color: "text-muted",
          scaleFontToUserSetting: !0,
          children: m
        }),
        forceOpen: g,
        "aria-label": !1,
        children: e => (0, s.jsx)(d.Button, {
          ...e,
          onMouseEnter: f,
          onMouseLeave: R,
          onFocus: f,
          onBlur: R,
          onClick: O,
          className: S.voteCountButton,
          "aria-describedby": g ? o : void 0,
          look: d.Button.Looks.BLANK,
          size: d.Button.Sizes.NONE,
          children: M
        })
      }), g && (0, s.jsx)(r.T, {
        id: o,
        children: m
      })]
    }) : (0, s.jsx)(s.Fragment, {
      children: M
    }), (0, s.jsxs)(d.Text, {
      variant: "text-md/bold",
      color: "none",
      scaleFontToUserSetting: !0,
      children: [t, "%"]
    })]
  })
}

function g(e) {
  let {
    percentage: t,
    shouldAnimate: n
  } = e, i = (0, o.useSpring)({
    from: {
      width: n ? "0%" : "".concat(t, "%")
    },
    to: {
      width: "".concat(t, "%")
    },
    config: {
      duration: 1200,
      easing: u.Z.Easing.inOut(u.Z.Easing.ease)
    }
  });
  return (0, s.jsx)(o.animated.span, {
    className: S.votePercentageBar,
    style: i,
    "aria-hidden": !0
  })
}

function p(e) {
  let {
    answersInteraction: t,
    isSelected: n,
    didSelfVote: i,
    isVictor: l,
    isExpired: a,
    className: r
  } = e;
  return (0, c.EQ)({
    answersInteraction: t,
    didSelfVote: i
  }).with({
    answersInteraction: m.Y7.RADIO_BUTTONS
  }, () => (0, s.jsx)(N.Og, {
    isSelected: n,
    size: 24,
    className: r
  })).with({
    answersInteraction: m.Y7.CHECKBOXES
  }, () => (0, s.jsx)(N.zs, {
    isSelected: n,
    size: 20,
    className: r
  })).with({
    answersInteraction: m.Y7.LIST,
    didSelfVote: !0
  }, () => (0, s.jsx)(N.ZY, {
    isVictor: l,
    isExpired: a,
    size: 24,
    className: r
  })).otherwise(() => null)
}

function f(e) {
  let {
    answer: t,
    isExpired: n,
    answersInteraction: i,
    canShowVoteCounts: l,
    canShowVoterDetails: o
  } = e, c = !0 === t.isSelected, u = !0 === t.didSelfVote, E = !0 === t.isVictor, _ = t.shouldAnimateTransition;
  return (0, s.jsx)(s.Fragment, {
    children: (0, s.jsxs)("div", {
      className: a()(S.answerInner, {
        [S.currentlyVoting]: i !== m.Y7.LIST,
        [S.selected]: c
      }),
      children: [l ? (0, s.jsx)(g, {
        percentage: t.votesPercentage,
        shouldAnimate: _
      }) : null, null != t.pollMedia.emoji && (0, s.jsx)(N.sc, {
        className: S.emoji,
        emoji: t.pollMedia.emoji
      }), (0, s.jsx)(d.Text, {
        className: S.label,
        variant: "text-sm/semibold",
        color: "none",
        scaleFontToUserSetting: !0,
        children: t.pollMedia.text
      }), t.didSelfVote && (0, s.jsx)(r.T, {
        children: C.Z.Messages.POLL_ANSWER_VOTED_ARIA
      }), l && (0, s.jsx)(A, {
        percentage: t.votesPercentage,
        label: t.votes,
        canShowVoterDetails: o,
        answerId: t.answerId
      }), (0, s.jsx)(p, {
        answersInteraction: i,
        isSelected: c,
        didSelfVote: u,
        isVictor: E,
        isExpired: n,
        className: S.answerSelectionIcon
      })]
    })
  })
}

function R(e) {
  let {
    isExpired: t,
    answersInteraction: n,
    canShowVoteCounts: i,
    canTapAnswers: l,
    ...a
  } = e;
  return (0, s.jsx)(N.$e, {
    className: S.answersContainer,
    answerClassName: S.answer,
    answersInteraction: n,
    canTapAnswers: l,
    renderAnswerContent: e => (0, s.jsx)(f, {
      answer: e,
      isExpired: t,
      answersInteraction: n,
      canShowVoteCounts: i,
      canShowVoterDetails: l
    }),
    ...a
  })
}