"use strict";
n.r(t), n.d(t, {
  createBotMessage: function() {
    return c
  },
  default: function() {
    return _
  },
  userRecordToServer: function() {
    return d
  }
}), n("789020"), n("653041");
var i = n("512722"),
  r = n.n(i),
  s = n("869765"),
  a = n("598077"),
  o = n("594174"),
  l = n("48854"),
  u = n("981631");

function d(e) {
  let {
    id: t,
    username: n,
    avatar: i,
    discriminator: r,
    bot: s,
    globalName: a
  } = e;
  return {
    id: t,
    username: n,
    avatar: i,
    discriminator: r,
    bot: s,
    global_name: a
  }
}

function _(e) {
  let {
    channelId: t,
    content: n,
    tts: i = !1,
    type: _ = u.MessageTypes.DEFAULT,
    messageReference: c,
    allowedMentions: E,
    author: I,
    flags: T,
    nonce: f,
    poll: S,
    changelogId: h
  } = e, A = [];
  if (_ === u.MessageTypes.REPLY && (r()(null != c, "Replies must have a message reference"), null == E || E.replied_user)) {
    let e = s.default.getMessageByReference(c);
    (null == e ? void 0 : e.state) === s.ReferencedMessageState.LOADED && A.push(d(e.message.author))
  }
  return null == I && (I = o.default.getCurrentUser()), I instanceof a.default && (I = d(I)), r()(null != I, "createMessage: author cannot be undefined"), {
    id: null != f ? f : (0, l.createNonce)(),
    type: _,
    content: n,
    channel_id: t,
    author: I,
    attachments: [],
    embeds: [],
    pinned: !1,
    mentions: A,
    mention_channels: [],
    mention_roles: [],
    mention_everyone: !1,
    timestamp: new Date().toISOString(),
    state: u.MessageStates.SENDING,
    tts: i,
    message_reference: c,
    flags: T,
    nonce: f,
    poll: S,
    changelog_id: h
  }
}

function c(e) {
  let {
    messageId: t,
    channelId: n,
    content: i,
    embeds: r,
    loggingName: s
  } = e;
  return {
    id: null != t ? t : (0, l.createNonce)(),
    type: u.MessageTypes.DEFAULT,
    flags: u.MessageFlags.EPHEMERAL,
    content: i,
    channel_id: n,
    author: {
      id: u.LOCAL_BOT_ID,
      username: "Clyde",
      discriminator: u.NON_USER_BOT_DISCRIMINATOR,
      avatar: "clyde",
      bot: !0
    },
    attachments: [],
    embeds: null != r ? r : [],
    pinned: !1,
    mentions: [],
    mention_channels: [],
    mention_roles: [],
    mention_everyone: !1,
    timestamp: new Date().toISOString(),
    state: u.MessageStates.SENT,
    tts: !1,
    loggingName: s
  }
}