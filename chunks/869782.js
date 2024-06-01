"use strict";
n.r(t), n.d(t, {
  default: function() {
    return C
  }
}), n("47120");
var s = n("735250"),
  a = n("470079"),
  l = n("442837"),
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
  m = n("838440"),
  I = n("981631"),
  N = n("640656");

function p(e) {
  let {
    assets: t,
    currentUser: n,
    message: s
  } = e, a = (T.default.extractTimestamp(n.id) + T.default.extractTimestamp(s.id)) % t.length;
  return t[a]
}

function S(e) {
  let {
    currentUser: t,
    channel: n,
    message: l,
    buttonLabels: d,
    stickers: c,
    event: E,
    eventProperties: f
  } = e, [T, I] = a.useState(!1), S = a.useMemo(() => p({
    assets: c,
    currentUser: t,
    message: l
  }), [c, t, l]), C = a.useMemo(() => p({
    assets: d,
    currentUser: t,
    message: l
  }), [d, t, l]), A = a.useCallback(async () => {
    let {
      valid: e
    } = await (0, m.applyChatRestrictions)({
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
      message: l,
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
  }, [n, l, S, E, f]);
  return (0, s.jsxs)(i.Button, {
    className: N.CTAMessageButtonOuter,
    innerClassName: N.CTAMessageButton,
    color: i.ButtonColors.PRIMARY,
    onMouseEnter: () => I(!0),
    onMouseLeave: () => I(!1),
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
    buttonLabels: a,
    stickers: i,
    event: r,
    eventProperties: o
  } = e, u = f.default.getCurrentUser(), _ = function(e) {
    let {
      channel: t,
      message: n,
      currentUser: s
    } = e;
    return (0, l.useStateFromStores)([E.default, c.default], () => {
      var e;
      let a = t.guild_id;
      if (null == s || null == a) return !1;
      let l = (0, d.computeIsReadOnlyThread)(t),
        i = E.default.can(I.Permissions.SEND_MESSAGES, t),
        r = null === (e = c.default.getMember(a, s.id)) || void 0 === e ? void 0 : e.isPending,
        o = n.author.bot;
      return i && !l && !r && !o
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
      buttonLabels: a,
      stickers: i,
      event: r,
      eventProperties: o
    })
  }) : null
}