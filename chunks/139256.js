n.d(t, {
  $e: function() {
    return P
  },
  $w: function() {
    return y
  },
  Og: function() {
    return k
  },
  ZY: function() {
    return B
  },
  sc: function() {
    return U
  },
  zs: function() {
    return G
  }
}), n(627341);
var s, i, l = n(735250),
  a = n(470079),
  r = n(120356),
  o = n.n(r),
  c = n(278074),
  u = n(481060),
  d = n(596454),
  E = n(44315),
  _ = n(377171),
  I = n(695346),
  T = n(261922),
  N = n(186523),
  m = n(553826),
  h = n(506071),
  C = n(203143),
  S = n(79390),
  A = n(839963),
  p = n(294608),
  g = n(65145),
  f = n(981631),
  O = n(689938),
  R = n(353452);

function M(e) {
  let {
    className: t,
    children: n
  } = e;
  return (0, l.jsx)("ul", {
    "aria-label": O.Z.Messages.POLL_OPTIONS_ARIA,
    className: t,
    children: n
  })
}

function x(e) {
  let {
    className: t,
    children: n
  } = e;
  return (0, l.jsx)("div", {
    "aria-label": O.Z.Messages.POLL_OPTIONS_ARIA,
    role: "group",
    className: t,
    children: n
  })
}

function v(e) {
  let {
    className: t,
    children: n
  } = e, s = (0, u.useRadioGroup)({
    orientation: "vertical"
  });
  return (0, l.jsx)("div", {
    "aria-label": O.Z.Messages.POLL_OPTIONS_ARIA,
    ...s,
    className: t,
    children: n
  })
}

function L(e) {
  let {
    className: t,
    onClick: n,
    isSelected: s,
    isFirstAnswer: i,
    children: a
  } = e, {
    pollAnswerRef: r
  } = (0, g.dv)();
  return (0, l.jsx)(u.Clickable, {
    role: "checkbox",
    className: o()(t, R.enabled),
    onClick: n,
    "aria-checked": s,
    ref: i ? r : void 0,
    children: a
  })
}

function Z(e) {
  let t, {
    className: n,
    children: s,
    onClick: i,
    isSelected: a,
    hasSelectedAnyAnswer: r,
    isFirstAnswer: c
  } = e;
  t = r ? a ? 0 : -1 : c ? 0 : -1;
  let {
    pollAnswerRef: d
  } = (0, g.dv)();
  return (0, l.jsx)(u.Clickable, {
    role: "radio",
    className: o()(n, R.enabled),
    onClick: i,
    "aria-checked": a,
    tabIndex: t,
    ref: c ? d : void 0,
    children: s
  })
}

function P(e) {
  let {
    answers: t,
    answersInteraction: n,
    answerTapAccessibilityLabel: s,
    canTapAnswers: i,
    hasSelectedAnyAnswer: a,
    className: r,
    answerClassName: u,
    renderAnswerContent: d
  } = e, {
    ContainerComponent: E,
    answerElementType: _
  } = (0, c.EQ)({
    canTapAnswers: i,
    answersInteraction: n
  }).with({
    answersInteraction: A.Y7.RADIO_BUTTONS
  }, () => ({
    ContainerComponent: v,
    answerElementType: 1
  })).with({
    answersInteraction: A.Y7.CHECKBOXES
  }, () => ({
    ContainerComponent: x,
    answerElementType: 2
  })).with({
    canTapAnswers: !0,
    answersInteraction: A.Y7.LIST
  }, () => ({
    ContainerComponent: M,
    answerElementType: 3
  })).otherwise(() => ({
    ContainerComponent: M,
    answerElementType: 0
  }));
  return (0, l.jsx)(E, {
    className: r,
    children: t.map((e, t) => (0, l.jsx)(D, {
      className: o()(R.__invalid_answer, u),
      answer: e,
      isFirstAnswer: 0 === t,
      elementType: _,
      answerTapAccessibilityLabel: s,
      hasSelectedAnyAnswer: a,
      children: d(e)
    }, e.answerId))
  })
}

function D(e) {
  let {
    className: t,
    answer: n,
    children: s,
    hasSelectedAnyAnswer: i,
    isFirstAnswer: r,
    elementType: c
  } = e, {
    channelId: u,
    messageId: d
  } = (0, p.pE)(), E = (0, p.$B)(n.style), _ = !0 === n.isSelected, I = a.useCallback(() => {
    C.Z.handlePollAnswerTapped({
      channelId: u,
      messageId: d,
      answerId: n.answerId
    })
  }, [u, d, n.answerId]);
  switch (c) {
    case 0:
    case 3:
      return (0, l.jsx)("li", {
        className: o()(t, E),
        children: s
      });
    case 1:
      return (0, l.jsx)(Z, {
        className: o()(t, E),
        onClick: I,
        isSelected: _,
        hasSelectedAnyAnswer: i,
        isFirstAnswer: r,
        children: s
      });
    case 2:
      return (0, l.jsx)(L, {
        className: o()(t, E),
        onClick: I,
        isSelected: _,
        isFirstAnswer: r,
        children: s
      })
  }
}

function j(e) {
  var t;
  let {
    attachment: n,
    className: s
  } = e, i = (0, h.n)(), a = I.QK.useSetting();
  return (0, l.jsx)(T.Z, {
    className: s,
    imageClassName: R.attachmentImage,
    src: null != n.proxy_url && "" !== n.proxy_url ? n.proxy_url : n.url,
    alt: null !== (t = n.description) && void 0 !== t ? t : (0, S.fw)(n.filename),
    responsive: !0,
    width: 212,
    height: 212,
    autoPlay: a,
    shouldAnimate: i,
    shouldRenderAccessory: !1
  })
}

function U(e) {
  let {
    className: t,
    emoji: n
  } = e;
  return (0, l.jsx)(d.Z, {
    className: t,
    emojiId: n.id,
    emojiName: n.name,
    animated: n.animated
  })
}

function b(e, t) {
  return null != e ? (0, l.jsx)("div", {
    className: e,
    children: t
  }) : (0, l.jsx)(l.Fragment, {
    children: t
  })
}

function y(e) {
  let {
    media: t,
    containerClassName: n,
    attachmentClassName: s,
    emojiClassName: i,
    fallback: a
  } = e, {
    message: r
  } = (0, p.GF)();
  if (null != t.attachmentIds && t.attachmentIds.length > 0) {
    let e = r.attachments.find(e => {
      var n;
      return e.id === (null === (n = t.attachmentIds) || void 0 === n ? void 0 : n[0])
    });
    if (null != e) return b(n, (0, l.jsx)(j, {
      className: s,
      attachment: e
    }))
  }
  return null != t.emoji ? b(n, (0, l.jsx)(U, {
    className: i,
    emoji: t.emoji
  })) : void 0 !== a ? (0, l.jsx)(l.Fragment, {
    children: a
  }) : null
}

function B(e) {
  let {
    isVictor: t,
    isExpired: n,
    size: s,
    className: i
  } = e, {
    color: a,
    backgroundColor: r
  } = (0, c.EQ)({
    isVictor: t,
    isExpired: n
  }).with({
    isExpired: !0,
    isVictor: !0
  }, () => ({
    color: _.Z.BUTTON_POSITIVE_BACKGROUND,
    backgroundColor: (0, E.Lq)(f.Ilk.WHITE_500)
  })).with({
    isExpired: !0,
    isVictor: !1
  }, () => ({
    color: _.Z.ICON_PRIMARY,
    backgroundColor: _.Z.BG_MOD_FAINT
  })).otherwise(() => ({
    color: (0, E.Lq)(f.Ilk.BRAND_500),
    backgroundColor: (0, E.Lq)(f.Ilk.WHITE_500)
  }));
  return (0, l.jsx)(u.CircleCheckIcon, {
    size: "custom",
    width: s,
    height: s,
    className: i,
    color: a,
    secondaryColor: r,
    "aria-hidden": !0
  })
}

function k(e) {
  let {
    isSelected: t,
    size: n,
    className: s
  } = e, i = {
    width: n,
    height: n,
    background: R.radioBackground,
    "aria-hidden": !0
  };
  return t ? (0, l.jsx)(m.Z, {
    ...i,
    foreground: R.radioForeground,
    className: s
  }) : (0, l.jsx)(N.Z, {
    ...i,
    className: s
  })
}

function G(e) {
  let {
    isSelected: t,
    size: n,
    className: s
  } = e, i = .85 * n;
  return (0, l.jsx)("div", {
    className: o()(R.checkbox, {
      [R.checkboxSelected]: t
    }, s),
    style: {
      width: n,
      height: n
    },
    "aria-hidden": !0,
    children: t && (0, l.jsx)(u.CheckmarkLargeIcon, {
      size: "custom",
      width: i,
      height: i,
      color: (0, E.Lq)(f.Ilk.WHITE_500)
    })
  })
}(i = s || (s = {}))[i.LIST_ITEM = 0] = "LIST_ITEM", i[i.RADIO = 1] = "RADIO", i[i.CHECKBOX = 2] = "CHECKBOX", i[i.LIST_ITEM_BUTTON = 3] = "LIST_ITEM_BUTTON"