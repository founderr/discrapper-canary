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
    return F
  },
  PollMediaView: function() {
    return w
  }
}), n("627341");
var s, l, a = n("735250"),
  i = n("470079"),
  r = n("120356"),
  o = n.n(r),
  u = n("278074"),
  d = n("399606"),
  c = n("481060"),
  f = n("596454"),
  E = n("44315"),
  _ = n("377171"),
  m = n("339085"),
  T = n("695346"),
  I = n("261922"),
  p = n("263704"),
  h = n("441674"),
  N = n("186523"),
  S = n("553826"),
  C = n("506071"),
  A = n("203143"),
  g = n("79390"),
  M = n("839963"),
  R = n("294608"),
  v = n("65145"),
  O = n("981631"),
  x = n("689938"),
  L = n("700363");

function D(e) {
  let {
    className: t,
    children: n
  } = e;
  return (0, a.jsx)("ul", {
    "aria-label": x.default.Messages.POLL_OPTIONS_ARIA,
    className: t,
    children: n
  })
}

function P(e) {
  let {
    className: t,
    children: n
  } = e;
  return (0, a.jsx)("div", {
    "aria-label": x.default.Messages.POLL_OPTIONS_ARIA,
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
    "aria-label": x.default.Messages.POLL_OPTIONS_ARIA,
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
  } = (0, v.usePollFocusManager)();
  return (0, a.jsx)(c.Clickable, {
    role: "checkbox",
    className: o()(t, L.enabled),
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
  } = (0, v.usePollFocusManager)();
  return (0, a.jsx)(c.Clickable, {
    role: "radio",
    className: o()(n, L.enabled),
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
    ContainerComponent: f,
    answerElementType: E
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
    ContainerComponent: P,
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
  return (0, a.jsx)(f, {
    className: r,
    children: t.map((e, t) => (0, a.jsx)(B, {
      className: o()(L.__invalid_answer, d),
      answer: e,
      isFirstAnswer: 0 === t,
      elementType: E,
      answerTapAccessibilityLabel: s,
      hasSelectedAnyAnswer: i,
      children: c(e)
    }, e.answerId))
  })
}

function B(e) {
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
  } = (0, R.useMessageIds)(), f = (0, R.useStyleClass)(n.style), E = !0 === n.isSelected, _ = i.useCallback(() => {
    A.default.handlePollAnswerTapped({
      channelId: d,
      messageId: c,
      answerId: n.answerId
    })
  }, [d, c, n.answerId]);
  switch (u) {
    case 0:
    case 3:
      return (0, a.jsx)("li", {
        className: o()(t, f),
        children: s
      });
    case 1:
      return (0, a.jsx)(j, {
        className: o()(t, f),
        onClick: _,
        isSelected: E,
        hasSelectedAnyAnswer: l,
        isFirstAnswer: r,
        children: s
      });
    case 2:
      return (0, a.jsx)(U, {
        className: o()(t, f),
        onClick: _,
        isSelected: E,
        isFirstAnswer: r,
        children: s
      })
  }
}

function G(e) {
  var t;
  let {
    attachment: n,
    className: s
  } = e, l = (0, C.useIsWindowFocused)(), i = T.GifAutoPlay.useSetting();
  return (0, a.jsx)(I.default, {
    className: s,
    imageClassName: L.attachmentImage,
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

function F(e) {
  var t;
  let {
    className: n,
    emoji: s
  } = e, l = (0, d.useStateFromStores)([m.default], () => {
    var e;
    return m.default.getCustomEmojiById(null !== (e = null == s ? void 0 : s.id) && void 0 !== e ? e : "")
  }, [s.id]), i = (null == s ? void 0 : s.name) !== "" ? s.name : null == l ? void 0 : l.name;
  return (0, a.jsx)(f.default, {
    className: n,
    emojiId: null == s ? void 0 : s.id,
    emojiName: null == s ? void 0 : s.name,
    alt: i,
    animated: null !== (t = null == l ? void 0 : l.animated) && void 0 !== t && t
  })
}

function k(e, t) {
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
  } = (0, R.usePollContext)();
  if (null != t.attachmentIds && t.attachmentIds.length > 0) {
    let e = r.attachments.find(e => {
      var n;
      return e.id === (null === (n = t.attachmentIds) || void 0 === n ? void 0 : n[0])
    });
    if (null != e) return k(n, (0, a.jsx)(G, {
      className: s,
      attachment: e
    }))
  }
  return null != t.emoji ? k(n, (0, a.jsx)(F, {
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
    backgroundColor: (0, E.getColor)(O.Color.WHITE_500)
  })).with({
    isExpired: !0,
    isVictor: !1
  }, () => ({
    color: _.default.ICON_PRIMARY,
    backgroundColor: _.default.BG_MOD_FAINT
  })).otherwise(() => ({
    color: (0, E.getColor)(O.Color.BRAND_500),
    backgroundColor: (0, E.getColor)(O.Color.WHITE_500)
  }));
  return (0, a.jsx)(h.default, {
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
    background: L.radioBackground,
    "aria-hidden": !0
  };
  return t ? (0, a.jsx)(S.default, {
    ...l,
    foreground: L.radioForeground,
    className: s
  }) : (0, a.jsx)(N.default, {
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
    className: o()(L.checkbox, {
      [L.checkboxSelected]: t
    }, s),
    style: {
      width: n,
      height: n
    },
    "aria-hidden": !0,
    children: t && (0, a.jsx)(p.default, {
      width: l,
      height: l,
      color: (0, E.getColor)(O.Color.WHITE_500)
    })
  })
}(l = s || (s = {}))[l.LIST_ITEM = 0] = "LIST_ITEM", l[l.RADIO = 1] = "RADIO", l[l.CHECKBOX = 2] = "CHECKBOX", l[l.LIST_ITEM_BUTTON = 3] = "LIST_ITEM_BUTTON"