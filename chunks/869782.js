"use strict";
n.r(t), n.d(t, {
  default: function() {
    return C
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
  E = n("496675"),
  f = n("594174"),
  _ = n("626135"),
  T = n("709054"),
  I = n("838440"),
  m = n("981631"),
  N = n("365004");

function p(e) {
  let {
    assets: t,
    currentUser: n,
    message: s
  } = e, l = (T.default.extractTimestamp(n.id) + T.default.extractTimestamp(s.id)) % t.length;
  return t[l]
}

function S(e) {
  let {
    currentUser: t,
    channel: n,
    message: a,
    buttonLabels: d,
    stickers: c,
    event: E,
    eventProperties: f
  } = e, [T, m] = l.useState(!1), S = l.useMemo(() => p({
    assets: c,
    currentUser: t,
    message: a
  }), [c, t, a]), C = l.useMemo(() => p({
    assets: d,
    currentUser: t,
    message: a
  }), [d, t, a]), A = l.useCallback(async () => {
    let {
      valid: e
    } = await (0, I.applyChatRestrictions)({
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
      sticker: S
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
      sticker: S,
      event: E,
      eventProperties: f
    }))
  }, [n, a, S, E, f]);
  return (0, s.jsxs)(i.Button, {
    className: N.CTAMessageButtonOuter,
    innerClassName: N.CTAMessageButton,
    color: i.ButtonColors.PRIMARY,
    onMouseEnter: () => m(!0),
    onMouseLeave: () => m(!1),
    onClick: A,
    children: [(0, s.jsx)(u.default, {
      className: N.CTAMessageSticker,
      isInteracting: T,
      sticker: S,
      size: 28
    }), C]
  })
}

function C(e) {
  let {
    channel: t,
    message: n,
    buttonLabels: l,
    stickers: i,
    event: r,
    eventProperties: o
  } = e, u = f.default.getCurrentUser(), _ = function(e) {
    let {
      channel: t,
      message: n,
      currentUser: s
    } = e;
    return (0, a.useStateFromStores)([E.default, c.default], () => {
      var e;
      let l = t.guild_id;
      if (null == s || null == l) return !1;
      let a = (0, d.computeIsReadOnlyThread)(t),
        i = E.default.can(m.Permissions.SEND_MESSAGES, t),
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
    className: N.CTAMessage,
    children: (0, s.jsx)(S, {
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