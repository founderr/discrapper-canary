"use strict";
n.r(t), n.d(t, {
  PollAnswers: function() {
    return y
  },
  PollMediaView: function() {
    return B
  },
  PollAnswerSelectedIcon: function() {
    return F
  },
  PollAnswerVictorIcon: function() {
    return w
  },
  PollAnswerVotedIcon: function() {
    return H
  }
}), n("794252");
var s, l, a = n("37983"),
  i = n("884691"),
  r = n("414456"),
  o = n.n(r),
  u = n("506838"),
  d = n("65597"),
  c = n("77078"),
  E = n("430568"),
  f = n("449918"),
  _ = n("20606"),
  T = n("385976"),
  I = n("845579"),
  m = n("952368"),
  N = n("578706"),
  p = n("866190"),
  S = n("847511"),
  A = n("562228"),
  C = n("214400"),
  h = n("74232"),
  g = n("316350"),
  M = n("49111"),
  O = n("782340"),
  R = n("193169");

function L(e) {
  let {
    className: t,
    children: n
  } = e;
  return (0, a.jsx)("ul", {
    "aria-label": O.default.Messages.POLL_OPTIONS_ARIA,
    className: t,
    children: n
  })
}

function v(e) {
  let {
    className: t,
    children: n
  } = e;
  return (0, a.jsx)("div", {
    "aria-label": O.default.Messages.POLL_OPTIONS_ARIA,
    role: "group",
    className: t,
    children: n
  })
}

function P(e) {
  let {
    className: t,
    children: n
  } = e, s = (0, c.useRadioGroup)({
    orientation: "vertical"
  });
  return (0, a.jsx)("div", {
    "aria-label": O.default.Messages.POLL_OPTIONS_ARIA,
    ...s,
    className: t,
    children: n
  })
}

function D(e) {
  let {
    className: t,
    onClick: n,
    isSelected: s,
    isFirstAnswer: l,
    children: i
  } = e, {
    pollAnswerRef: r
  } = (0, g.usePollFocusManager)();
  return (0, a.jsx)(c.Clickable, {
    role: "checkbox",
    className: o(t, R.enabled),
    onClick: n,
    "aria-checked": s,
    ref: l ? r : void 0,
    children: i
  })
}

function x(e) {
  let t, {
    className: n,
    children: s,
    onClick: l,
    isSelected: i,
    hasSelectedAnyAnswer: r,
    isFirstAnswer: u
  } = e;
  t = r ? i ? 0 : -1 : u ? 0 : -1;
  let {
    pollAnswerRef: d
  } = (0, g.usePollFocusManager)();
  return (0, a.jsx)(c.Clickable, {
    role: "radio",
    className: o(n, R.enabled),
    onClick: l,
    "aria-checked": i,
    tabIndex: t,
    ref: u ? d : void 0,
    children: s
  })
}

function y(e) {
  let {
    answers: t,
    answersInteraction: n,
    answerTapAccessibilityLabel: s,
    isInteractive: l,
    hasSelectedAnyAnswer: i,
    className: r,
    answerClassName: d,
    renderAnswerContent: c
  } = e, {
    ContainerComponent: E,
    answerElementType: f
  } = (0, u.match)({
    isInteractive: l,
    answersInteraction: n
  }).with({
    answersInteraction: C.PollChatAnswerInteractionType.RADIO_BUTTONS
  }, () => ({
    ContainerComponent: P,
    answerElementType: 1
  })).with({
    answersInteraction: C.PollChatAnswerInteractionType.CHECKBOXES
  }, () => ({
    ContainerComponent: v,
    answerElementType: 2
  })).with({
    isInteractive: !0,
    answersInteraction: C.PollChatAnswerInteractionType.LIST
  }, () => ({
    ContainerComponent: L,
    answerElementType: 3
  })).otherwise(() => ({
    ContainerComponent: L,
    answerElementType: 0
  }));
  return (0, a.jsx)(E, {
    className: r,
    children: t.map((e, t) => (0, a.jsx)(U, {
      className: o(R.answer, d),
      answer: e,
      isFirstAnswer: 0 === t,
      elementType: f,
      answerTapAccessibilityLabel: s,
      hasSelectedAnyAnswer: i,
      children: c(e)
    }, e.answerId))
  })
}

function U(e) {
  let {
    className: t,
    answer: n,
    answerTapAccessibilityLabel: s,
    children: l,
    hasSelectedAnyAnswer: r,
    isFirstAnswer: u,
    elementType: d
  } = e, {
    channelId: E,
    messageId: f
  } = (0, h.useMessageIds)(), _ = (0, h.useStyleClass)(n.style), T = !0 === n.isSelected, I = i.useCallback(() => {
    S.default.handlePollAnswerTapped({
      channelId: E,
      messageId: f,
      answerId: n.answerId
    })
  }, [E, f, n.answerId]);
  switch (d) {
    case 0:
      return (0, a.jsx)("li", {
        className: o(t, _),
        children: l
      });
    case 3:
      return (0, a.jsx)("li", {
        children: (0, a.jsxs)(c.Clickable, {
          className: o(R.listItemButton, t, _),
          onClick: I,
          children: [l, (0, a.jsx)(c.HiddenVisually, {
            children: s
          })]
        })
      });
    case 1:
      return (0, a.jsx)(x, {
        className: o(t, _),
        onClick: I,
        isSelected: T,
        hasSelectedAnyAnswer: r,
        isFirstAnswer: u,
        children: l
      });
    case 2:
      return (0, a.jsx)(D, {
        className: o(t, _),
        onClick: I,
        isSelected: T,
        isFirstAnswer: u,
        children: l
      })
  }
}

function j(e) {
  var t;
  let {
    attachment: n,
    className: s
  } = e, l = (0, p.useIsWindowFocused)(), i = I.GifAutoPlay.useSetting();
  return (0, a.jsx)(m.default, {
    className: s,
    imageClassName: R.attachmentImage,
    src: null != n.proxy_url && "" !== n.proxy_url ? n.proxy_url : n.url,
    alt: null !== (t = n.description) && void 0 !== t ? t : (0, A.filterOutUUID)(n.filename),
    responsive: !0,
    width: 212,
    height: 212,
    autoPlay: i,
    shouldAnimate: l,
    shouldRenderAccessory: !1
  })
}

function b(e) {
  var t;
  let {
    className: n,
    emoji: s
  } = e, l = (0, d.default)([T.default], () => {
    var e;
    return T.default.getCustomEmojiById(null !== (e = null == s ? void 0 : s.id) && void 0 !== e ? e : "")
  }, [s.id]), i = (null == s ? void 0 : s.name) !== "" ? s.name : null == l ? void 0 : l.name;
  return (0, a.jsx)(E.default, {
    className: n,
    emojiId: null == s ? void 0 : s.id,
    emojiName: null == s ? void 0 : s.name,
    alt: i,
    animated: null !== (t = null == l ? void 0 : l.animated) && void 0 !== t && t
  })
}

function G(e, t) {
  return null != e ? (0, a.jsx)("div", {
    className: e,
    children: t
  }) : (0, a.jsx)(a.Fragment, {
    children: t
  })
}

function B(e) {
  let {
    media: t,
    containerClassName: n,
    attachmentClassName: s,
    emojiClassName: l,
    fallback: i
  } = e, {
    message: r
  } = (0, h.usePollContext)();
  if (t.attachmentIds.length > 0) {
    let e = r.attachments.find(e => e.id === t.attachmentIds[0]);
    if (null != e) return G(n, (0, a.jsx)(j, {
      className: s,
      attachment: e
    }))
  }
  return null != t.emoji ? G(n, (0, a.jsx)(b, {
    className: l,
    emoji: t.emoji
  })) : void 0 !== i ? (0, a.jsx)(a.Fragment, {
    children: i
  }) : null
}

function k(e) {
  let {
    size: t,
    color: n,
    className: s
  } = e;
  return (0, a.jsx)(N.default, {
    width: t,
    height: t,
    className: o(s, R.checkmarkCircle),
    color: n,
    backgroundColor: "currentColor"
  })
}

function F(e) {
  return (0, a.jsx)(k, {
    color: (0, f.getColor)(M.Color.BRAND_500),
    ...e
  })
}

function w(e) {
  return (0, a.jsx)(k, {
    color: _.default.POLLS_VICTOR_BORDER,
    ...e
  })
}

function H(e) {
  return (0, a.jsx)(k, {
    color: _.default.POLLS_VOTED_BORDER,
    ...e
  })
}(l = s || (s = {}))[l.LIST_ITEM = 0] = "LIST_ITEM", l[l.RADIO = 1] = "RADIO", l[l.CHECKBOX = 2] = "CHECKBOX", l[l.LIST_ITEM_BUTTON = 3] = "LIST_ITEM_BUTTON"