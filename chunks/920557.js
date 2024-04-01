"use strict";
n.r(t), n.d(t, {
  TextAndImageAnswers: function() {
    return O
  }
}), n("47120"), n("627341");
var s = n("735250"),
  l = n("470079"),
  a = n("803997"),
  i = n.n(a),
  r = n("544323"),
  o = n("718017"),
  u = n("278074"),
  d = n("442837"),
  c = n("481060"),
  E = n("607070"),
  f = n("542578"),
  _ = n("153124"),
  T = n("203143"),
  I = n("79390"),
  m = n("839963"),
  N = n("139256"),
  p = n("294608"),
  S = n("689938"),
  C = n("338231");

function A(e) {
  let {
    percentage: t,
    label: n,
    canShowVoterDetails: a,
    answerId: i
  } = e, o = (0, _.useUID)(), {
    channelId: u,
    messageId: d
  } = (0, p.useMessageIds)(), [E, m] = l.useState(""), [N, S] = l.useState(!1), A = "" !== E && N, h = l.useCallback(() => {
    m((0, I.getPollAnswerVotesTooltipText)(d, u, i))
  }, [d, u, i]), g = l.useCallback(() => {
    h(), S(!0)
  }, [h]), M = l.useCallback(() => {
    S(!1)
  }, []), O = l.useCallback(() => {
    (0, T.handleShowVotesForAnswer)({
      channelId: u,
      messageId: d,
      answerId: i
    })
  }, [u, d, i]);
  l.useEffect(() => {
    if (N) return f.default.addReactChangeListener(h), () => {
      f.default.removeReactChangeListener(h)
    }
  }, [N, h]);
  let R = (0, s.jsx)(c.Text, {
    variant: "text-xs/semibold",
    color: "none",
    className: C.voteCount,
    scaleFontToUserSetting: !0,
    children: n
  });
  return (0, s.jsxs)("div", {
    className: C.votesData,
    children: [a ? (0, s.jsxs)(s.Fragment, {
      children: [(0, s.jsx)(c.Tooltip, {
        text: (0, s.jsx)(c.Text, {
          variant: "text-sm/normal",
          color: "text-muted",
          scaleFontToUserSetting: !0,
          children: E
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
          className: C.voteCountButton,
          "aria-describedby": A ? o : void 0,
          look: c.Button.Looks.BLANK,
          size: c.Button.Sizes.NONE,
          children: R
        })
      }), A && (0, s.jsx)(r.VisuallyHidden, {
        id: o,
        children: E
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

function h(e) {
  let {
    percentage: t
  } = e, n = (0, d.useStateFromStores)([E.default], () => E.default.useReducedMotion), l = (0, o.useSpring)({
    from: {
      width: "0%"
    },
    to: {
      width: "".concat(t, "%")
    },
    immediate: n,
    config: 100 !== t && 0 !== t ? o.config.wobbly : o.config.default
  });
  return (0, s.jsx)(o.animated.span, {
    className: C.votePercentageBar,
    style: l,
    "aria-hidden": !0
  })
}

function g(e) {
  let {
    answersInteraction: t,
    isSelected: n,
    didSelfVote: l,
    isVictor: a,
    isExpired: i,
    className: r
  } = e;
  return (0, u.match)({
    answersInteraction: t,
    didSelfVote: l
  }).with({
    answersInteraction: m.PollChatAnswerInteractionType.RADIO_BUTTONS
  }, () => (0, s.jsx)(N.PollAnswerRadioIcon, {
    isSelected: n,
    size: 24,
    className: r
  })).with({
    answersInteraction: m.PollChatAnswerInteractionType.CHECKBOXES
  }, () => (0, s.jsx)(N.PollAnswerCheckboxIcon, {
    isSelected: n,
    size: 20,
    className: r
  })).with({
    answersInteraction: m.PollChatAnswerInteractionType.LIST,
    didSelfVote: !0
  }, () => (0, s.jsx)(N.PollAnswerVotedIcon, {
    isVictor: a,
    isExpired: i,
    size: 24,
    className: r
  })).otherwise(() => null)
}

function M(e) {
  let {
    answer: t,
    isExpired: n,
    answersInteraction: l,
    canShowVoteCounts: a,
    canShowVoterDetails: o
  } = e, u = !0 === t.isSelected, d = !0 === t.didSelfVote, E = !0 === t.isVictor;
  return (0, s.jsx)(s.Fragment, {
    children: (0, s.jsxs)("div", {
      className: i()(C.answerInner, {
        [C.currentlyVoting]: l !== m.PollChatAnswerInteractionType.LIST,
        [C.selected]: u
      }),
      children: [a ? (0, s.jsx)(h, {
        percentage: t.votesPercentage
      }) : null, null != t.pollMedia.emoji && (0, s.jsx)(N.PollEmojiMediaView, {
        className: C.emoji,
        emoji: t.pollMedia.emoji
      }), (0, s.jsx)(c.Text, {
        className: C.label,
        variant: "text-sm/semibold",
        color: "none",
        scaleFontToUserSetting: !0,
        children: t.pollMedia.text
      }), t.didSelfVote && (0, s.jsx)(r.VisuallyHidden, {
        children: S.default.Messages.POLL_ANSWER_VOTED_ARIA
      }), a && (0, s.jsx)(A, {
        percentage: t.votesPercentage,
        label: t.votes,
        canShowVoterDetails: o,
        answerId: t.answerId
      }), (0, s.jsx)(g, {
        answersInteraction: l,
        isSelected: u,
        didSelfVote: d,
        isVictor: E,
        isExpired: n,
        className: C.answerSelectionIcon
      })]
    })
  })
}

function O(e) {
  let {
    isExpired: t,
    answersInteraction: n,
    canShowVoteCounts: l,
    canTapAnswers: a,
    ...i
  } = e;
  return (0, s.jsx)(N.PollAnswers, {
    className: C.answersContainer,
    answerClassName: C.answer,
    answersInteraction: n,
    canTapAnswers: a,
    renderAnswerContent: e => (0, s.jsx)(M, {
      answer: e,
      isExpired: t,
      answersInteraction: n,
      canShowVoteCounts: l,
      canShowVoterDetails: a
    }),
    ...i
  })
}