"use strict";
n.r(t), n.d(t, {
  TextAndImageAnswers: function() {
    return M
  }
}), n("47120"), n("627341");
var s = n("735250"),
  a = n("470079"),
  l = n("120356"),
  i = n.n(l),
  r = n("145386"),
  o = n("920906"),
  u = n("278074"),
  d = n("748780"),
  c = n("481060"),
  E = n("542578"),
  f = n("153124"),
  _ = n("203143"),
  T = n("79390"),
  m = n("839963"),
  I = n("139256"),
  N = n("294608"),
  p = n("689938"),
  S = n("583522");

function C(e) {
  let {
    percentage: t,
    label: n,
    canShowVoterDetails: l,
    answerId: i
  } = e, o = (0, f.useUID)(), {
    channelId: u,
    messageId: d
  } = (0, N.useMessageIds)(), [m, I] = a.useState(""), [p, C] = a.useState(!1), A = "" !== m && p, h = a.useCallback(() => {
    I((0, T.getPollAnswerVotesTooltipText)(d, u, i))
  }, [d, u, i]), g = a.useCallback(() => {
    h(), C(!0)
  }, [h]), M = a.useCallback(() => {
    C(!1)
  }, []), O = a.useCallback(() => {
    (0, _.handleShowVotesForAnswer)({
      channelId: u,
      messageId: d,
      answerId: i
    })
  }, [u, d, i]);
  a.useEffect(() => {
    if (p) return E.default.addReactChangeListener(h), () => {
      E.default.removeReactChangeListener(h)
    }
  }, [p, h]);
  let R = (0, s.jsx)(c.Text, {
    variant: "text-xs/semibold",
    color: "none",
    className: S.voteCount,
    scaleFontToUserSetting: !0,
    children: n
  });
  return (0, s.jsxs)("div", {
    className: S.votesData,
    children: [l ? (0, s.jsxs)(s.Fragment, {
      children: [(0, s.jsx)(c.Tooltip, {
        text: (0, s.jsx)(c.Text, {
          variant: "text-sm/normal",
          color: "text-muted",
          scaleFontToUserSetting: !0,
          children: m
        }),
        forceOpen: A,
        "aria-label": !1,
        children: e => (0, s.jsx)(c.Button, {
          ...e,
          onMouseEnter: g,
          onMouseLeave: M,
          onFocus: g,
          onBlur: M,
          onClick: O,
          className: S.voteCountButton,
          "aria-describedby": A ? o : void 0,
          look: c.Button.Looks.BLANK,
          size: c.Button.Sizes.NONE,
          children: R
        })
      }), A && (0, s.jsx)(r.VisuallyHidden, {
        id: o,
        children: m
      })]
    }) : (0, s.jsx)(s.Fragment, {
      children: R
    }), (0, s.jsxs)(c.Text, {
      variant: "text-md/bold",
      color: "none",
      scaleFontToUserSetting: !0,
      children: [t, "%"]
    })]
  })
}

function A(e) {
  let {
    percentage: t,
    shouldAnimate: n
  } = e, a = (0, o.useSpring)({
    from: {
      width: n ? "0%" : "".concat(t, "%")
    },
    to: {
      width: "".concat(t, "%")
    },
    config: {
      duration: 1200,
      easing: d.default.Easing.inOut(d.default.Easing.ease)
    }
  });
  return (0, s.jsx)(o.animated.span, {
    className: S.votePercentageBar,
    style: a,
    "aria-hidden": !0
  })
}

function h(e) {
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
    answersInteraction: m.PollChatAnswerInteractionType.RADIO_BUTTONS
  }, () => (0, s.jsx)(I.PollAnswerRadioIcon, {
    isSelected: n,
    size: 24,
    className: r
  })).with({
    answersInteraction: m.PollChatAnswerInteractionType.CHECKBOXES
  }, () => (0, s.jsx)(I.PollAnswerCheckboxIcon, {
    isSelected: n,
    size: 20,
    className: r
  })).with({
    answersInteraction: m.PollChatAnswerInteractionType.LIST,
    didSelfVote: !0
  }, () => (0, s.jsx)(I.PollAnswerVotedIcon, {
    isVictor: l,
    isExpired: i,
    size: 24,
    className: r
  })).otherwise(() => null)
}

function g(e) {
  let {
    answer: t,
    isExpired: n,
    answersInteraction: a,
    canShowVoteCounts: l,
    canShowVoterDetails: o
  } = e, u = !0 === t.isSelected, d = !0 === t.didSelfVote, E = !0 === t.isVictor, f = t.shouldAnimateTransition;
  return (0, s.jsx)(s.Fragment, {
    children: (0, s.jsxs)("div", {
      className: i()(S.answerInner, {
        [S.currentlyVoting]: a !== m.PollChatAnswerInteractionType.LIST,
        [S.selected]: u
      }),
      children: [l ? (0, s.jsx)(A, {
        percentage: t.votesPercentage,
        shouldAnimate: f
      }) : null, null != t.pollMedia.emoji && (0, s.jsx)(I.PollEmojiMediaView, {
        className: S.emoji,
        emoji: t.pollMedia.emoji
      }), (0, s.jsx)(c.Text, {
        className: S.label,
        variant: "text-sm/semibold",
        color: "none",
        scaleFontToUserSetting: !0,
        children: t.pollMedia.text
      }), t.didSelfVote && (0, s.jsx)(r.VisuallyHidden, {
        children: p.default.Messages.POLL_ANSWER_VOTED_ARIA
      }), l && (0, s.jsx)(C, {
        percentage: t.votesPercentage,
        label: t.votes,
        canShowVoterDetails: o,
        answerId: t.answerId
      }), (0, s.jsx)(h, {
        answersInteraction: a,
        isSelected: u,
        didSelfVote: d,
        isVictor: E,
        isExpired: n,
        className: S.answerSelectionIcon
      })]
    })
  })
}

function M(e) {
  let {
    isExpired: t,
    answersInteraction: n,
    canShowVoteCounts: a,
    canTapAnswers: l,
    ...i
  } = e;
  return (0, s.jsx)(I.PollAnswers, {
    className: S.answersContainer,
    answerClassName: S.answer,
    answersInteraction: n,
    canTapAnswers: l,
    renderAnswerContent: e => (0, s.jsx)(g, {
      answer: e,
      isExpired: t,
      answersInteraction: n,
      canShowVoteCounts: a,
      canShowVoterDetails: l
    }),
    ...i
  })
}