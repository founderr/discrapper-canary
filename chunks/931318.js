"use strict";
n.r(t), n.d(t, {
  addMessageReminders: function() {
    return g
  },
  updateReminderDueAt: function() {
    return h
  },
  toggleMessageReminders: function() {
    return E
  },
  completeMessageReminders: function() {
    return _
  },
  cleanupMessageReminders: function() {
    return p
  },
  fetchAndUpdateSavedMessages: function() {
    return S
  }
});
var a = n("872717"),
  s = n("913144"),
  l = n("679653"),
  u = n("42203"),
  i = n("305961"),
  r = n("27618"),
  d = n("697218"),
  o = n("599110"),
  c = n("520899"),
  m = n("988864"),
  f = n("49111");

function g(e, t) {
  o.default.track(f.AnalyticEvents.GUILD_JOIN_FEEDBACK, {
    skipped: !1,
    reason: "adding",
    rating: "".concat(c.default.getMessageReminders().length)
  }), I([{
    messageId: e.id,
    channelId: e.channel_id,
    savedAt: new Date,
    dueAt: t,
    ... function(e) {
      let t = u.default.getChannel(e.channel_id);
      if (null == t) return null;
      let n = i.default.getGuild(t.guild_id),
        a = "",
        s = (0, l.computeChannelName)(t, d.default, r.default, !0);
      if (t.isPrivate()) a = s;
      else if (t.isThread()) {
        let e = u.default.getChannel(t.parent_id);
        if (null == e) return null;
        let n = (0, l.computeChannelName)(e, d.default, r.default, !0);
        a = "".concat(n, " > ").concat(s)
      } else a = s;
      let o = "".concat(e.content.length > 0 ? e.content : "".concat(e.attachments.length, " attachments"));
      return {
        authorSummary: e.author.username,
        authorId: e.author.id,
        channelSummary: a,
        messageSummary: o.length > 200 ? "".concat(o.slice(0, 197), "...") : o,
        guildId: null == n ? void 0 : n.id
      }
    }(e)
  }], [])
}

function h(e, t) {
  o.default.track(f.AnalyticEvents.GUILD_JOIN_FEEDBACK, {
    skipped: !1,
    reason: "updating_due_at",
    rating: "".concat(c.default.getMessageReminders().length)
  });
  let n = c.default.getMessageReminders(),
    a = n.find(t => t.messageId === e);
  null != a && I([{
    ...a,
    savedAt: new Date,
    dueAt: t
  }], [a])
}

function E(e, t) {
  o.default.track(f.AnalyticEvents.GUILD_JOIN_FEEDBACK, {
    skipped: t,
    reason: "updating within the list",
    rating: "".concat(c.default.getMessageReminders().length)
  }), s.default.dispatch({
    type: "MESSAGE_REMINDER_TOGGLE",
    messageId: e,
    complete: t
  })
}

function _(e) {
  o.default.track(f.AnalyticEvents.GUILD_JOIN_FEEDBACK, {
    skipped: !1,
    reason: "complete and clear immediately",
    rating: "".concat(c.default.getMessageReminders().length)
  });
  let t = c.default.getMessageReminders();
  I([], t.filter(t => t.messageId === e))
}

function p() {
  o.default.track(f.AnalyticEvents.GUILD_JOIN_FEEDBACK, {
    skipped: !1,
    reason: "clearing",
    rating: "".concat(c.default.getMessageReminders().length)
  });
  let e = c.default.getMessageReminders();
  e.some(e => e.complete) && I([], e.filter(e => e.complete))
}

function v(e) {
  o.default.track(f.AnalyticEvents.GUILD_JOIN_FEEDBACK, {
    skipped: !1,
    reason: "updated_from_server",
    rating: "".concat(c.default.getMessageReminders().length)
  }), s.default.dispatch({
    type: "SAVED_MESSAGES_UPDATE",
    messages: e
  })
}

function I(e, t) {
  (0 !== e.length || 0 !== t.length) && a.default.post({
    url: f.Endpoints.SAVED_MESSAGES,
    body: {
      added: e.map(m.savedMessageToServer),
      removed: t.map(m.savedMessageToServer)
    }
  }).then(e => {
    v(e.body.saved_messages.map(m.savedMessageToClient))
  })
}

function S() {
  return c.default.recentlyFetched() ? Promise.resolve() : a.default.get({
    url: f.Endpoints.SAVED_MESSAGES
  }).then(e => {
    let t = e.body.saved_messages,
      n = t.map(m.savedMessageToClient);
    v(n)
  })
}