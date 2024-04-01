"use strict";
n.r(t), n.d(t, {
  PollAnswerCheckboxIcon: function() {
    return Y
  },
  PollAnswerRadioIcon: function() {
    return V
  },
  PollAnswerVotedIcon: function() {
    return H
  },
  PollAnswers: function() {
    return b
  },
  PollEmojiMediaView: function() {
    return k
  },
  PollMediaView: function() {
    return w
  }
}), n("627341");
var s, l, a = n("735250"),
  i = n("470079"),
  r = n("803997"),
  o = n.n(r),
  u = n("278074"),
  d = n("399606"),
  c = n("481060"),
  E = n("596454"),
  f = n("44315"),
  _ = n("377171"),
  T = n("339085"),
  I = n("695346"),
  m = n("261922"),
  N = n("263704"),
  p = n("441674"),
  S = n("186523"),
  C = n("553826"),
  A = n("506071"),
  h = n("203143"),
  g = n("79390"),
  M = n("839963"),
  O = n("294608"),
  R = n("65145"),
  v = n("981631"),
  L = n("689938"),
  P = n("700363");

function D(e) {
  let {
    className: t,
    children: n
  } = e;
  return (0, a.jsx)("ul", {
    "aria-label": L.default.Messages.POLL_OPTIONS_ARIA,
    className: t,
    children: n
  })
}

function x(e) {
  let {
    className: t,
    children: n
  } = e;
  return (0, a.jsx)("div", {
    "aria-label": L.default.Messages.POLL_OPTIONS_ARIA,
    role: "group",
    className: t,
    children: n
  })
}

function y(e) {
  let {
    className: t,
    children: n
  } = e, s = (0, c.useRadioGroup)({
    orientation: "vertical"
  });
  return (0, a.jsx)("div", {
    "aria-label": L.default.Messages.POLL_OPTIONS_ARIA,
    ...s,
    className: t,
    children: n
  })
}

function U(e) {
  let {
    className: t,
    onClick: n,
    isSelected: s,
    isFirstAnswer: l,
    children: i
  } = e, {
    pollAnswerRef: r
  } = (0, R.usePollFocusManager)();
  return (0, a.jsx)(c.Clickable, {
    role: "checkbox",
    className: o()(t, P.enabled),
    onClick: n,
    "aria-checked": s,
    ref: l ? r : void 0,
    children: i
  })
}

function j(e) {
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
  } = (0, R.usePollFocusManager)();
  return (0, a.jsx)(c.Clickable, {
    role: "radio",
    className: o()(n, P.enabled),
    onClick: l,
    "aria-checked": i,
    tabIndex: t,
    ref: u ? d : void 0,
    children: s
  })
}

function b(e) {
  let {
    answers: t,
    answersInteraction: n,
    answerTapAccessibilityLabel: s,
    canTapAnswers: l,
    hasSelectedAnyAnswer: i,
    className: r,
    answerClassName: d,
    renderAnswerContent: c
  } = e, {
    ContainerComponent: E,
    answerElementType: f
  } = (0, u.match)({
    canTapAnswers: l,
    answersInteraction: n
  }).with({
    answersInteraction: M.PollChatAnswerInteractionType.RADIO_BUTTONS
  }, () => ({
    ContainerComponent: y,
    answerElementType: 1
  })).with({
    answersInteraction: M.PollChatAnswerInteractionType.CHECKBOXES
  }, () => ({
    ContainerComponent: x,
    answerElementType: 2
  })).with({
    canTapAnswers: !0,
    answersInteraction: M.PollChatAnswerInteractionType.LIST
  }, () => ({
    ContainerComponent: D,
    answerElementType: 3
  })).otherwise(() => ({
    ContainerComponent: D,
    answerElementType: 0
  }));
  return (0, a.jsx)(E, {
    className: r,
    children: t.map((e, t) => (0, a.jsx)(G, {
      className: o()(P.__invalid_answer, d),
      answer: e,
      isFirstAnswer: 0 === t,
      elementType: f,
      answerTapAccessibilityLabel: s,
      hasSelectedAnyAnswer: i,
      children: c(e)
    }, e.answerId))
  })
}

function G(e) {
  let {
    className: t,
    answer: n,
    children: s,
    hasSelectedAnyAnswer: l,
    isFirstAnswer: r,
    elementType: u
  } = e, {
    channelId: d,
    messageId: c
  } = (0, O.useMessageIds)(), E = (0, O.useStyleClass)(n.style), f = !0 === n.isSelected, _ = i.useCallback(() => {
    h.default.handlePollAnswerTapped({
      channelId: d,
      messageId: c,
      answerId: n.answerId
    })
  }, [d, c, n.answerId]);
  switch (u) {
    case 0:
    case 3:
      return (0, a.jsx)("li", {
        className: o()(t, E),
        children: s
      });
    case 1:
      return (0, a.jsx)(j, {
        className: o()(t, E),
        onClick: _,
        isSelected: f,
        hasSelectedAnyAnswer: l,
        isFirstAnswer: r,
        children: s
      });
    case 2:
      return (0, a.jsx)(U, {
        className: o()(t, E),
        onClick: _,
        isSelected: f,
        isFirstAnswer: r,
        children: s
      })
  }
}

function B(e) {
  var t;
  let {
    attachment: n,
    className: s
  } = e, l = (0, A.useIsWindowFocused)(), i = I.GifAutoPlay.useSetting();
  return (0, a.jsx)(m.default, {
    className: s,
    imageClassName: P.attachmentImage,
    src: null != n.proxy_url && "" !== n.proxy_url ? n.proxy_url : n.url,
    alt: null !== (t = n.description) && void 0 !== t ? t : (0, g.filterOutUUID)(n.filename),
    responsive: !0,
    width: 212,
    height: 212,
    autoPlay: i,
    shouldAnimate: l,
    shouldRenderAccessory: !1
  })
}

function k(e) {
  var t;
  let {
    className: n,
    emoji: s
  } = e, l = (0, d.useStateFromStores)([T.default], () => {
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

function F(e, t) {
  return null != e ? (0, a.jsx)("div", {
    className: e,
    children: t
  }) : (0, a.jsx)(a.Fragment, {
    children: t
  })
}

function w(e) {
  let {
    media: t,
    containerClassName: n,
    attachmentClassName: s,
    emojiClassName: l,
    fallback: i
  } = e, {
    message: r
  } = (0, O.usePollContext)();
  if (null != t.attachmentIds && t.attachmentIds.length > 0) {
    let e = r.attachments.find(e => {
      var n;
      return e.id === (null === (n = t.attachmentIds) || void 0 === n ? void 0 : n[0])
    });
    if (null != e) return F(n, (0, a.jsx)(B, {
      className: s,
      attachment: e
    }))
  }
  return null != t.emoji ? F(n, (0, a.jsx)(k, {
    className: l,
    emoji: t.emoji
  })) : void 0 !== i ? (0, a.jsx)(a.Fragment, {
    children: i
  }) : null
}

function H(e) {
  let {
    isVictor: t,
    isExpired: n,
    size: s,
    className: l
  } = e, {
    color: i,
    backgroundColor: r
  } = (0, u.match)({
    isVictor: t,
    isExpired: n
  }).with({
    isExpired: !0,
    isVictor: !0
  }, () => ({
    color: _.default.BUTTON_POSITIVE_BACKGROUND,
    backgroundColor: (0, f.getColor)(v.Color.WHITE_500)
  })).with({
    isExpired: !0,
    isVictor: !1
  }, () => ({
    color: _.default.ICON_PRIMARY,
    backgroundColor: _.default.BG_MOD_FAINT
  })).otherwise(() => ({
    color: (0, f.getColor)(v.Color.BRAND_500),
    backgroundColor: (0, f.getColor)(v.Color.WHITE_500)
  }));
  return (0, a.jsx)(p.default, {
    width: s,
    height: s,
    className: l,
    color: i,
    backgroundColor: r,
    "aria-hidden": !0
  })
}

function V(e) {
  let {
    isSelected: t,
    size: n,
    className: s
  } = e, l = {
    width: n,
    height: n,
    background: P.radioBackground,
    "aria-hidden": !0
  };
  return t ? (0, a.jsx)(C.default, {
    ...l,
    foreground: P.radioForeground,
    className: s
  }) : (0, a.jsx)(S.default, {
    ...l,
    className: s
  })
}

function Y(e) {
  let {
    isSelected: t,
    size: n,
    className: s
  } = e, l = .85 * n;
  return (0, a.jsx)("div", {
    className: o()(P.checkbox, {
      [P.checkboxSelected]: t
    }, s),
    style: {
      width: n,
      height: n
    },
    "aria-hidden": !0,
    children: t && (0, a.jsx)(N.default, {
      width: l,
      height: l,
      color: (0, f.getColor)(v.Color.WHITE_500)
    })
  })
}(l = s || (s = {}))[l.LIST_ITEM = 0] = "LIST_ITEM", l[l.RADIO = 1] = "RADIO", l[l.CHECKBOX = 2] = "CHECKBOX", l[l.LIST_ITEM_BUTTON = 3] = "LIST_ITEM_BUTTON"