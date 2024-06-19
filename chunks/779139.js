n.d(t, {
  TZ: function() {
    return u
  },
  y6: function() {
    return c
  }
});
var s = n(904245),
  i = n(594174),
  l = n(626135),
  a = n(709054),
  r = n(8532),
  o = n(981631);
let c = e => {
    var t;
    let n = null === (t = i.default.getCurrentUser()) || void 0 === t ? void 0 : t.id,
      s = ((null != n ? a.default.extractTimestamp(n) : 0) + a.default.extractTimestamp(e)) % r.m.length;
    return r.m[s]
  },
  u = (e, t, n) => {
    var a;
    s.Z.sendGreetMessage(e.id, n, s.Z.getSendMessageOptionsForReply({
      channel: e,
      message: t,
      shouldMention: !0,
      showMentionToggle: !0
    })), l.default.track(o.rMx.WELCOME_CTA_CLICKED, {
      is_reply: !0,
      sticker_id: n,
      target_user: t.author.id,
      sender: null === (a = i.default.getCurrentUser()) || void 0 === a ? void 0 : a.id
    })
  }