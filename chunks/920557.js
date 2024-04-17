"use strict";
n.r(t), n.d(t, {
  TextAndImageAnswers: function() {
    return g
  }
}), n("47120"), n("627341");
var s = n("735250"),
  a = n("470079"),
  l = n("120356"),
  i = n.n(l),
  r = n("544323"),
  o = n("718017"),
  u = n("278074"),
  d = n("481060"),
  c = n("542578"),
  E = n("153124"),
  f = n("203143"),
  _ = n("79390"),
  T = n("839963"),
  I = n("139256"),
  m = n("294608"),
  N = n("689938"),
  p = n("338231");

function S(e) {
  let {
    percentage: t,
    label: n,
    canShowVoterDetails: l,
    answerId: i
  } = e, o = (0, E.useUID)(), {
    channelId: u,
    messageId: T
  } = (0, m.useMessageIds)(), [I, N] = a.useState(""), [S, C] = a.useState(!1), A = "" !== I && S, h = a.useCallback(() => {
    N((0, _.getPollAnswerVotesTooltipText)(T, u, i))
  }, [T, u, i]), g = a.useCallback(() => {
    h(), C(!0)
  }, [h]), M = a.useCallback(() => {
    C(!1)
  }, []), O = a.useCallback(() => {
    (0, f.handleShowVotesForAnswer)({
      channelId: u,
      messageId: T,
      answerId: i
    })
  }, [u, T, i]);
  a.useEffect(() => {
    if (S) return c.default.addReactChangeListener(h), () => {
      c.default.removeReactChangeListener(h)
    }
  }, [S, h]);
  let R = (0, s.jsx)(d.Text, {
    variant: "text-xs/semibold",
    color: "none",
    className: p.voteCount,
    scaleFontToUserSetting: !0,
    children: n
  });
  return (0, s.jsxs)("div", {
    className: p.votesData,
    children: [l ? (0, s.jsxs)(s.Fragment, {
      children: [(0, s.jsx)(d.Tooltip, {
        text: (0, s.jsx)(d.Text, {
          variant: "text-sm/normal",
          color: "text-muted",
          scaleFontToUserSetting: !0,
          children: I
        }),
        forceOpen: A,
        "aria-label": !1,
        children: e => (0, s.jsx)(d.Button, {
          ...e,
          onMouseEnter: g,
          onMouseLeave: M,
          onFocus: g,
          onBlur: M,
          onClick: O,
          className: p.voteCountButton,
          "aria-describedby": A ? o : void 0,
          look: d.Button.Looks.BLANK,
          size: d.Button.Sizes.NONE,
          children: R
        })
      }), A && (0, s.jsx)(r.VisuallyHidden, {
        id: o,
        children: I
      })]
    }) : (0, s.jsx)(s.Fragment, {
      children: R
    }), (0, s.jsxs)(d.Text, {
      variant: "text-md/bold",
      color: "none",
      scaleFontToUserSetting: !0,
      children: [t, "%"]
    })]
  })
}

function C(e) {
  let {
    percentage: t,
    shouldAnimate: n
  } = e, a = (0, o.useSpring)({
    from: {
      width: "0%"
    },
    to: {
      width: "".concat(t, "%")
    },
    immediate: !n,
    config: 100 !== t && 0 !== t ? o.config.wobbly : o.config.default
  });
  return (0, s.jsx)(o.animated.span, {
    className: p.votePercentageBar,
    style: a,
    "aria-hidden": !0
  })
}

function A(e) {
  let {
    answersInteraction: t,
    isSelected: n,
    didSelfVote: a,
    isVictor: l,
    isExpired: i,
    className: r
  } = e;
  return (0, u.match)({
    answersInteraction: t,
    didSelfVote: a
  }).with({
    answersInteraction: T.PollChatAnswerInteractionType.RADIO_BUTTONS
  }, () => (0, s.jsx)(I.PollAnswerRadioIcon, {
    isSelected: n,
    size: 24,
    className: r
  })).with({
    answersInteraction: T.PollChatAnswerInteractionType.CHECKBOXES
  }, () => (0, s.jsx)(I.PollAnswerCheckboxIcon, {
    isSelected: n,
    size: 20,
    className: r
  })).with({
    answersInteraction: T.PollChatAnswerInteractionType.LIST,
    didSelfVote: !0
  }, () => (0, s.jsx)(I.PollAnswerVotedIcon, {
    isVictor: l,
    isExpired: i,
    size: 24,
    className: r
  })).otherwise(() => null)
}

function h(e) {
  let {
    answer: t,
    isExpired: n,
    answersInteraction: a,
    canShowVoteCounts: l,
    canShowVoterDetails: o
  } = e, u = !0 === t.isSelected, c = !0 === t.didSelfVote, E = !0 === t.isVictor, f = t.shouldAnimateTransition;
  return (0, s.jsx)(s.Fragment, {
    children: (0, s.jsxs)("div", {
      className: i()(p.answerInner, {
        [p.currentlyVoting]: a !== T.PollChatAnswerInteractionType.LIST,
        [p.selected]: u
      }),
      children: [l ? (0, s.jsx)(C, {
        percentage: t.votesPercentage,
        shouldAnimate: f
      }) : null, null != t.pollMedia.emoji && (0, s.jsx)(I.PollEmojiMediaView, {
        className: p.emoji,
        emoji: t.pollMedia.emoji
      }), (0, s.jsx)(d.Text, {
        className: p.label,
        variant: "text-sm/semibold",
        color: "none",
        scaleFontToUserSetting: !0,
        children: t.pollMedia.text
      }), t.didSelfVote && (0, s.jsx)(r.VisuallyHidden, {
        children: N.default.Messages.POLL_ANSWER_VOTED_ARIA
      }), l && (0, s.jsx)(S, {
        percentage: t.votesPercentage,
        label: t.votes,
        canShowVoterDetails: o,
        answerId: t.answerId
      }), (0, s.jsx)(A, {
        answersInteraction: a,
        isSelected: u,
        didSelfVote: c,
        isVictor: E,
        isExpired: n,
        className: p.answerSelectionIcon
      })]
    })
  })
}

function g(e) {
  let {
    isExpired: t,
    answersInteraction: n,
    canShowVoteCounts: a,
    canTapAnswers: l,
    ...i
  } = e;
  return (0, s.jsx)(I.PollAnswers, {
    className: p.answersContainer,
    answerClassName: p.answer,
    answersInteraction: n,
    canTapAnswers: l,
    renderAnswerContent: e => (0, s.jsx)(h, {
      answer: e,
      isExpired: t,
      answersInteraction: n,
      canShowVoteCounts: a,
      canShowVoterDetails: l
    }),
    ...i
  })
}