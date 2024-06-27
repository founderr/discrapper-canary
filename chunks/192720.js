"use strict";
n.d(t, {
  L9: function() {
    return h
  },
  sE: function() {
    return f
  },
  sd: function() {
    return I
  }
});
var i = n(544891),
  r = n(570140),
  s = n(933557),
  o = n(592125),
  a = n(430824),
  l = n(699516),
  u = n(594174),
  _ = n(70956),
  c = n(686478),
  d = n(802463),
  E = n(981631);

function I(e) {
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
}

function T(e) {
  r.Z.dispatch({
    type: "SAVED_MESSAGES_UPDATE",
    messages: e
  })
}
async function h(e, t) {
  if (0 !== e.length || 0 !== t.length) T((await i.tn.post({
    url: E.ANM.SAVED_MESSAGES,
    body: {
      added: e.map(c.cu),
      removed: t.map(c.cu)
    }
  })).body.saved_messages.map(c.lY))
}
async function f() {
  if (new Date().getTime() - d.Z.getLastFetched() < 1 * _.Z.Millis.MINUTE) return Promise.resolve();
  T((await i.tn.get({
    url: E.ANM.SAVED_MESSAGES
  })).body.saved_messages.map(c.lY))
}