"use strict";
n.r(t), n.d(t, {
  default: function() {
    return S
  }
}), n("47120");
var s = n("735250"),
  l = n("470079"),
  a = n("442837"),
  i = n("481060"),
  r = n("904245"),
  o = n("541716"),
  u = n("419922"),
  d = n("665906"),
  c = n("271383"),
  f = n("496675"),
  E = n("594174"),
  _ = n("626135"),
  m = n("709054"),
  T = n("838440"),
  I = n("981631"),
  p = n("365004");

function h(e) {
  let {
    assets: t,
    currentUser: n,
    message: s
  } = e, l = (m.default.extractTimestamp(n.id) + m.default.extractTimestamp(s.id)) % t.length;
  return t[l]
}

function N(e) {
  let {
    currentUser: t,
    channel: n,
    message: a,
    buttonLabels: d,
    stickers: c,
    event: f,
    eventProperties: E
  } = e, [m, I] = l.useState(!1), N = l.useMemo(() => h({
    assets: c,
    currentUser: t,
    message: a
  }), [c, t, a]), S = l.useMemo(() => h({
    assets: d,
    currentUser: t,
    message: a
  }), [d, t, a]), C = l.useCallback(async () => {
    let {
      valid: e
    } = await (0, T.applyChatRestrictions)({
      type: o.ChatInputTypes.FORM,
      content: "",
      channel: n
    });
    e && (! function(e) {
      let {
        channel: t,
        message: n,
        sticker: s
      } = e;
      r.default.sendGreetMessage(t.id, s.id, r.default.getSendMessageOptionsForReply({
        channel: t,
        message: n,
        shouldMention: !0,
        showMentionToggle: !0
      }))
    }({
      channel: n,
      message: a,
      sticker: N
    }), ! function(e) {
      let {
        sticker: t,
        event: n,
        eventProperties: s
      } = e;
      null != n && _.default.track(n, {
        ...s,
        sticker_id: t.id
      })
    }({
      sticker: N,
      event: f,
      eventProperties: E
    }))
  }, [n, a, N, f, E]);
  return (0, s.jsxs)(i.Button, {
    className: p.CTAMessageButtonOuter,
    innerClassName: p.CTAMessageButton,
    color: i.ButtonColors.PRIMARY,
    onMouseEnter: () => I(!0),
    onMouseLeave: () => I(!1),
    onClick: C,
    children: [(0, s.jsx)(u.default, {
      className: p.CTAMessageSticker,
      isInteracting: m,
      sticker: N,
      size: 28
    }), S]
  })
}

function S(e) {
  let {
    channel: t,
    message: n,
    buttonLabels: l,
    stickers: i,
    event: r,
    eventProperties: o
  } = e, u = E.default.getCurrentUser(), _ = function(e) {
    let {
      channel: t,
      message: n,
      currentUser: s
    } = e;
    return (0, a.useStateFromStores)([f.default, c.default], () => {
      var e;
      let l = t.guild_id;
      if (null == s || null == l) return !1;
      let a = (0, d.computeIsReadOnlyThread)(t),
        i = f.default.can(I.Permissions.SEND_MESSAGES, t),
        r = null === (e = c.default.getMember(l, s.id)) || void 0 === e ? void 0 : e.isPending,
        o = n.author.bot;
      return i && !a && !r && !o
    })
  }({
    channel: t,
    message: n,
    currentUser: u
  });
  return null != u && _ ? (0, s.jsx)("div", {
    className: p.CTAMessage,
    children: (0, s.jsx)(N, {
      currentUser: u,
      channel: t,
      message: n,
      buttonLabels: l,
      stickers: i,
      event: r,
      eventProperties: o
    })
  }) : null
}