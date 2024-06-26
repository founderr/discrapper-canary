"use strict";
n.d(t, {
  ZP: function() {
    return c
  },
  cs: function() {
    return d
  },
  pe: function() {
    return _
  }
}), n(789020), n(653041);
var i = n(512722),
  r = n.n(i),
  s = n(869765),
  o = n(598077),
  a = n(594174),
  l = n(48854),
  u = n(981631);

function _(e) {
  let {
    id: t,
    username: n,
    avatar: i,
    discriminator: r,
    bot: s,
    globalName: o
  } = e;
  return {
    id: t,
    username: n,
    avatar: i,
    discriminator: r,
    bot: s,
    global_name: o
  }
}

function c(e) {
  let {
    channelId: t,
    content: n,
    tts: i = !1,
    type: c = u.uaV.DEFAULT,
    messageReference: d,
    allowedMentions: E,
    author: I,
    flags: T,
    nonce: h,
    poll: f,
    changelogId: S
  } = e, N = [];
  if (c === u.uaV.REPLY && (r()(null != d, "Replies must have a message reference"), null == E || E.replied_user)) {
    let e = s.Z.getMessageByReference(d);
    (null == e ? void 0 : e.state) === s.Y.LOADED && N.push(_(e.message.author))
  }
  return null == I && (I = a.default.getCurrentUser()), I instanceof o.Z && (I = _(I)), r()(null != I, "createMessage: author cannot be undefined"), {
    id: null != h ? h : (0, l.r)(),
    type: c,
    content: n,
    channel_id: t,
    author: I,
    attachments: [],
    embeds: [],
    pinned: !1,
    mentions: N,
    mention_channels: [],
    mention_roles: [],
    mention_everyone: !1,
    timestamp: new Date().toISOString(),
    state: u.yb.SENDING,
    tts: i,
    message_reference: d,
    message_snapshots: [],
    flags: T,
    nonce: h,
    poll: f,
    changelog_id: S
  }
}

function d(e) {
  let {
    messageId: t,
    channelId: n,
    content: i,
    embeds: r,
    loggingName: s
  } = e;
  return {
    id: null != t ? t : (0, l.r)(),
    type: u.uaV.DEFAULT,
    flags: u.iLy.EPHEMERAL,
    content: i,
    channel_id: n,
    author: {
      id: u.LAt,
      username: "Clyde",
      discriminator: u.fo$,
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
    state: u.yb.SENT,
    tts: !1,
    loggingName: s
  }
}