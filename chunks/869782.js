n.d(t, {
  Z: function() {
    return A
  }
}), n(47120);
var s = n(735250),
  i = n(470079),
  l = n(442837),
  a = n(481060),
  r = n(904245),
  o = n(541716),
  c = n(419922),
  u = n(665906),
  d = n(271383),
  E = n(496675),
  _ = n(594174),
  I = n(626135),
  T = n(709054),
  N = n(838440),
  m = n(981631),
  h = n(975113);

function C(e) {
  let {
    assets: t,
    currentUser: n,
    message: s
  } = e, i = (T.default.extractTimestamp(n.id) + T.default.extractTimestamp(s.id)) % t.length;
  return t[i]
}

function S(e) {
  let {
    currentUser: t,
    channel: n,
    message: l,
    buttonLabels: u,
    stickers: d,
    event: E,
    eventProperties: _
  } = e, [T, m] = i.useState(!1), S = i.useMemo(() => C({
    assets: d,
    currentUser: t,
    message: l
  }), [d, t, l]), A = i.useMemo(() => C({
    assets: u,
    currentUser: t,
    message: l
  }), [u, t, l]), p = i.useCallback(async () => {
    let {
      valid: e
    } = await (0, N.v)({
      type: o.I.FORM,
      content: "",
      channel: n
    });
    e && (! function(e) {
      let {
        channel: t,
        message: n,
        sticker: s
      } = e;
      r.Z.sendGreetMessage(t.id, s.id, r.Z.getSendMessageOptionsForReply({
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
      null != n && I.default.track(n, {
        ...s,
        sticker_id: t.id
      })
    }({
      sticker: S,
      event: E,
      eventProperties: _
    }))
  }, [n, l, S, E, _]);
  return (0, s.jsxs)(a.Button, {
    className: h.CTAMessageButtonOuter,
    innerClassName: h.CTAMessageButton,
    color: a.ButtonColors.PRIMARY,
    onMouseEnter: () => m(!0),
    onMouseLeave: () => m(!1),
    onClick: p,
    children: [(0, s.jsx)(c.ZP, {
      className: h.CTAMessageSticker,
      isInteracting: T,
      sticker: S,
      size: 28
    }), A]
  })
}

function A(e) {
  let {
    channel: t,
    message: n,
    buttonLabels: i,
    stickers: a,
    event: r,
    eventProperties: o
  } = e, c = _.default.getCurrentUser(), I = function(e) {
    let {
      channel: t,
      message: n,
      currentUser: s
    } = e;
    return (0, l.e7)([E.Z, d.ZP], () => {
      var e;
      let i = t.guild_id;
      if (null == s || null == i) return !1;
      let l = (0, u.xl)(t),
        a = E.Z.can(m.Plq.SEND_MESSAGES, t),
        r = null === (e = d.ZP.getMember(i, s.id)) || void 0 === e ? void 0 : e.isPending,
        o = n.author.bot;
      return a && !l && !r && !o
    })
  }({
    channel: t,
    message: n,
    currentUser: c
  });
  return null != c && I ? (0, s.jsx)("div", {
    className: h.CTAMessage,
    children: (0, s.jsx)(S, {
      currentUser: c,
      channel: t,
      message: n,
      buttonLabels: i,
      stickers: a,
      event: r,
      eventProperties: o
    })
  }) : null
}