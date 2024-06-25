"use strict";
n.d(t, {
  BW: function() {
    return I
  },
  Kp: function() {
    return f
  },
  Mf: function() {
    return S
  },
  Y_: function() {
    return h
  },
  dR: function() {
    return T
  },
  sE: function() {
    return m
  }
});
var i = n(544891),
  r = n(570140),
  s = n(933557),
  o = n(592125),
  a = n(430824),
  l = n(699516),
  u = n(594174),
  _ = n(626135),
  c = n(329461),
  d = n(831267),
  E = n(981631);

function I(e, t) {
  _.default.track(E.rMx.GUILD_JOIN_FEEDBACK, {
    skipped: !1,
    reason: "adding",
    rating: "".concat(c.Z.getMessageReminders().length)
  }), N([{
    messageId: e.id,
    channelId: e.channel_id,
    savedAt: new Date,
    dueAt: t,
    ... function(e) {
      let t = o.Z.getChannel(e.channel_id);
      if (null == t) return null;
      let n = a.Z.getGuild(t.guild_id),
        i = "",
        r = (0, s.F6)(t, u.default, l.Z, !0);
      if (t.isPrivate()) i = r;
      else if (t.isThread()) {
        let e = o.Z.getChannel(t.parent_id);
        if (null == e) return null;
        let n = (0, s.F6)(e, u.default, l.Z, !0);
        i = "".concat(n, " > ").concat(r)
      } else i = r;
      let _ = "".concat(e.content.length > 0 ? e.content : "".concat(e.attachments.length, " attachments"));
      return {
        authorSummary: e.author.username,
        authorId: e.author.id,
        channelSummary: i,
        messageSummary: _.length > 200 ? "".concat(_.slice(0, 197), "...") : _,
        guildId: null == n ? void 0 : n.id
      }
    }(e)
  }], [])
}

function T(e, t) {
  _.default.track(E.rMx.GUILD_JOIN_FEEDBACK, {
    skipped: !1,
    reason: "updating_due_at",
    rating: "".concat(c.Z.getMessageReminders().length)
  });
  let n = c.Z.getMessageReminders().find(t => t.messageId === e);
  if (null != n) N([{
    ...n,
    savedAt: new Date,
    dueAt: t
  }], [n])
}

function h(e, t) {
  _.default.track(E.rMx.GUILD_JOIN_FEEDBACK, {
    skipped: t,
    reason: "updating within the list",
    rating: "".concat(c.Z.getMessageReminders().length)
  }), r.Z.dispatch({
    type: "MESSAGE_REMINDER_TOGGLE",
    messageId: e,
    complete: t
  })
}

function f(e) {
  _.default.track(E.rMx.GUILD_JOIN_FEEDBACK, {
    skipped: !1,
    reason: "complete and clear immediately",
    rating: "".concat(c.Z.getMessageReminders().length)
  }), N([], c.Z.getMessageReminders().filter(t => t.messageId === e))
}

function S() {
  _.default.track(E.rMx.GUILD_JOIN_FEEDBACK, {
    skipped: !1,
    reason: "clearing",
    rating: "".concat(c.Z.getMessageReminders().length)
  });
  let e = c.Z.getMessageReminders();
  e.some(e => e.complete) && N([], e.filter(e => e.complete))
}

function A(e) {
  _.default.track(E.rMx.GUILD_JOIN_FEEDBACK, {
    skipped: !1,
    reason: "updated_from_server",
    rating: "".concat(c.Z.getMessageReminders().length)
  }), r.Z.dispatch({
    type: "SAVED_MESSAGES_UPDATE",
    messages: e
  })
}

function N(e, t) {
  (0 !== e.length || 0 !== t.length) && i.tn.post({
    url: E.ANM.SAVED_MESSAGES,
    body: {
      added: e.map(d.cu),
      removed: t.map(d.cu)
    }
  }).then(e => {
    A(e.body.saved_messages.map(d.lY))
  })
}

function m() {
  return c.Z.recentlyFetched() ? Promise.resolve() : i.tn.get({
    url: E.ANM.SAVED_MESSAGES
  }).then(e => {
    A(e.body.saved_messages.map(d.lY))
  })
}