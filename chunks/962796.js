n.d(t, {
  BW: function() {
    return _
  },
  Kp: function() {
    return m
  },
  Mf: function() {
    return T
  },
  Y_: function() {
    return I
  },
  dR: function() {
    return E
  }
});
var i = n(873011),
  a = n(570140),
  s = n(933557),
  l = n(592125),
  r = n(430824),
  o = n(699516),
  c = n(594174),
  d = n(192720),
  u = n(802463);

function _(e, t) {
  (0, d.L9)([{
    type: i.J.REMINDER,
    messageId: e.id,
    channelId: e.channel_id,
    savedAt: new Date,
    dueAt: t,
    ... function(e) {
      let t = l.Z.getChannel(e.channel_id);
      if (null == t) return null;
      let n = r.Z.getGuild(t.guild_id),
        i = "",
        a = (0, s.F6)(t, c.default, o.Z, !0);
      if (t.isPrivate()) i = a;
      else if (t.isThread()) {
        let e = l.Z.getChannel(t.parent_id);
        if (null == e) return null;
        let n = (0, s.F6)(e, c.default, o.Z, !0);
        i = "".concat(n, " > ").concat(a)
      } else i = a;
      let d = "".concat(e.content.length > 0 ? e.content : "".concat(e.attachments.length, " attachments"));
      return {
        authorSummary: e.author.username,
        authorId: e.author.id,
        channelSummary: i,
        messageSummary: d.length > 200 ? "".concat(d.slice(0, 197), "...") : d,
        guildId: null == n ? void 0 : n.id
      }
    }(e)
  }], [])
}

function E(e, t) {
  let n = u.Z.getMessageReminders().find(t => t.messageId === e);
  if (null != n)(0, d.L9)([{
    ...n,
    savedAt: new Date,
    dueAt: t
  }], [n])
}

function I(e, t) {
  a.Z.dispatch({
    type: "MESSAGE_REMINDER_TOGGLE",
    messageId: e,
    complete: t
  })
}

function m(e) {
  let t = u.Z.getMessageReminders();
  (0, d.L9)([], t.filter(t => t.messageId === e))
}

function T() {
  let e = u.Z.getMessageReminders();
  e.some(e => e.complete) && (0, d.L9)([], e.filter(e => e.complete))
}