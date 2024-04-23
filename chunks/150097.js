"use strict";
n.r(t), n.d(t, {
  makeTextChatNotification: function() {
    return V
  },
  shouldNotify: function() {
    return v
  },
  shouldNotifyBase: function() {
    return U
  },
  shouldNotifyForForumThreadCreation: function() {
    return F
  },
  shouldNotifyForSelectedChannel: function() {
    return L
  }
}), n("789020"), n("411104");
var l = n("933557"),
  a = n("710845"),
  i = n("41776"),
  u = n("355298"),
  s = n("957730"),
  d = n("572804"),
  o = n("901461");
n("734934");
var r = n("569471"),
  f = n("723170"),
  T = n("695346"),
  _ = n("131704"),
  E = n("433355"),
  c = n("592125"),
  I = n("430824"),
  N = n("19780"),
  g = n("699516"),
  C = n("944486"),
  S = n("914010"),
  A = n("885110"),
  h = n("9156"),
  p = n("594174"),
  y = n("630388"),
  O = n("5192"),
  m = n("352736"),
  M = n("51144"),
  D = n("981631"),
  R = n("124368"),
  G = n("689938");

function U(e, t, n) {
  let l = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
    a = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
  if (t.hasFlag(D.UserFlags.SPAMMER) || n.isManaged()) return !1;
  let u = n.getGuildId();
  return !(null != u && i.default.isLurking(u) || t.id === e.id || g.default.isBlocked(t.id) || !l && A.default.getStatus() === D.StatusTypes.DND || T.FocusMode.getSetting() || !a && h.default.allowNoMessages(n)) && !0
}

function v(e, t) {
  var n;
  let l = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
    a = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
  if (null != e.flags && (0, y.hasFlag)(e.flags, D.MessageFlags.SUPPRESS_NOTIFICATIONS)) return !1;
  let i = c.default.getChannel(t);
  e.type === D.MessageTypes.THREAD_STARTER_MESSAGE && (i = c.default.getChannel(null == i ? void 0 : i.parent_id));
  let s = p.default.getCurrentUser(),
    o = p.default.getUser(null === (n = e.author) || void 0 === n ? void 0 : n.id);
  if (null == i || null == s || null == o || i.type === D.ChannelTypes.GROUP_DM && e.type === D.MessageTypes.RECIPIENT_REMOVE || !U(s, o, i, a) || u.default.isMessageRequest(t)) return !1;
  if (!l) {
    let e = C.default.getChannelId(S.default.getGuildId());
    if (e === i.id || E.default.getCurrentSidebarChannelId(e) === i.id) return !1
  }
  if (void 0 !== e.activity_instance && null != e.interaction && e.interaction.user.id === s.id) return !1;
  if (_.THREAD_CHANNEL_TYPES.has(i.type)) {
    if (r.default.isMuted(i.id)) return !1;
    let t = (0, f.computeThreadNotificationSetting)(i);
    return t !== R.ThreadMemberFlags.NO_MESSAGES && (t === R.ThreadMemberFlags.ALL_MESSAGES || (0, d.isRawMessageMentioned)({
      rawMessage: e,
      userId: s.id,
      suppressEveryone: !1,
      suppressRoles: !1
    }))
  } {
    let t = !_.GUILD_VOCAL_CHANNEL_TYPES.has(i.type) || N.default.getChannelId() === i.id;
    if (h.default.allowAllMessages(i) && t) return !0;
    let n = h.default.isSuppressEveryoneEnabled(i.getGuildId()),
      l = h.default.isSuppressRolesEnabled(i.getGuildId());
    return (0, d.isRawMessageMentioned)({
      rawMessage: e,
      userId: s.id,
      suppressEveryone: n,
      suppressRoles: l
    })
  }
}

function L(e, t) {
  var n;
  if (C.default.getChannelId(S.default.getGuildId()) !== t) return !1;
  let l = c.default.getChannel(t);
  e.type === D.MessageTypes.THREAD_STARTER_MESSAGE && (l = c.default.getChannel(null == l ? void 0 : l.parent_id));
  let a = p.default.getCurrentUser(),
    i = p.default.getUser(null === (n = e.author) || void 0 === n ? void 0 : n.id);
  return !(null == l || null == a || null == i || l.isManaged() || i.hasFlag(D.UserFlags.SPAMMER) || g.default.isBlocked(i.id) || i.id === a.id || A.default.getStatus() === D.StatusTypes.DND || T.FocusMode.getSetting() || h.default.allowNoMessages(l)) && !0
}

function F(e, t) {
  let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
    l = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
    a = p.default.getCurrentUser(),
    i = p.default.getUser(e.ownerId);
  return !(null == t || null == a || null == i || !U(a, i, t, l, !0) || h.default.isGuildOrCategoryOrChannelMuted(t.guild_id, t.id)) && (!!n || C.default.getChannelId(S.default.getGuildId()) !== t.id) && h.default.getNewForumThreadsCreated(t)
}
let P = (e, t, n) => "".concat(e, " (").concat((0, l.computeChannelName)(t, p.default, g.default, !0)).concat(null != n ? ", ".concat((0, l.computeChannelName)(n, p.default, g.default)) : "", ")");

function w(e, t, n, l) {
  switch (e.type) {
    case D.ChannelTypes.GUILD_ANNOUNCEMENT:
    case D.ChannelTypes.GUILD_TEXT:
      return t;
    case D.ChannelTypes.GROUP_DM:
      return n;
    case D.ChannelTypes.DM:
    default:
      return l
  }
}

function V(e, t, n) {
  var i;
  let u;
  let d = O.default.getName(e.getGuildId(), e.id, n),
    r = d;
  switch (e.type) {
    case D.ChannelTypes.GUILD_ANNOUNCEMENT:
    case D.ChannelTypes.GUILD_TEXT:
    case D.ChannelTypes.GUILD_VOICE:
    case D.ChannelTypes.ANNOUNCEMENT_THREAD:
    case D.ChannelTypes.PUBLIC_THREAD:
    case D.ChannelTypes.PRIVATE_THREAD:
      let f = c.default.getChannel(e.parent_id);
      t.type === D.MessageTypes.THREAD_STARTER_MESSAGE && null != f ? r = P(r, f, c.default.getChannel(f.parent_id)) : (0, o.default)(t) ? null != I.default.getGuild(e.getGuildId()) && (r = P(r, e, f)) : r = P(r, e, f);
      break;
    case D.ChannelTypes.GROUP_DM:
      !(e.isManaged() && n.bot && r === (0, l.computeChannelName)(e, p.default, g.default)) && (r = "".concat(r, " (").concat((0, l.computeChannelName)(e, p.default, g.default, !0), ")"))
  }
  let T = t.content;
  if ((0, o.default)(t) && null == (T = m.default.stringify(t, e))) throw new a.default("NotificationTextUtils").warn("SystemMessageUtils.stringify(...) could not convert", t), Error("failed to stringify system message");
  let _ = null !== (i = t.sticker_items) && void 0 !== i ? i : t.stickers;
  return 0 === (u = null != t.activity && null != t.application ? t.activity.type === D.ActivityActionTypes.JOIN ? w(e, G.default.Messages.NOTIFICATION_MESSAGE_CREATE_GUILD_ACTIVITY_JOIN, G.default.Messages.NOTIFICATION_MESSAGE_CREATE_GROUP_DM_ACTIVITY_JOIN, G.default.Messages.NOTIFICATION_MESSAGE_CREATE_DM_ACTIVITY_JOIN).format({
    user: d,
    game: t.application.name
  }) : t.activity.type === D.ActivityActionTypes.JOIN_REQUEST ? w(e, G.default.Messages.NOTIFICATION_MESSAGE_CREATE_DM_ACTIVITY_JOIN_REQUEST, G.default.Messages.NOTIFICATION_MESSAGE_CREATE_DM_ACTIVITY_JOIN_REQUEST, G.default.Messages.NOTIFICATION_MESSAGE_CREATE_DM_ACTIVITY_JOIN_REQUEST).format({
    user: d,
    game: t.application.name
  }) : "" : null != t.activity && t.activity.type === D.ActivityActionTypes.LISTEN ? w(e, G.default.Messages.NOTIFICATION_MESSAGE_CREATE_GUILD_ACTIVITY_LISTEN, G.default.Messages.NOTIFICATION_MESSAGE_CREATE_GROUP_DM_ACTIVITY_LISTEN, G.default.Messages.NOTIFICATION_MESSAGE_CREATE_DM_ACTIVITY_LISTEN).format({
    user: d
  }) : null != _ && _.length > 0 ? G.default.Messages.STICKER_NOTIFICATION_BODY.format({
    stickerName: _[0].name
  }) : t.type === D.MessageTypes.PREMIUM_REFERRAL ? G.default.Messages.SHARE_NITRO_EMBEDDED_MESSAGE_BODY_SHORT.format({
    username: M.default.getName(n)
  }) : null != t.poll ? G.default.Messages.POLL_SENT_NOTIFICATION.format({
    question: t.poll.question.text
  }) : s.default.unparse(T, e.id, !0)).length && (u = function(e) {
    var t;
    if (void 0 !== e.embeds && e.embeds.length > 0) {
      let t = e.embeds[0];
      if (null != t.description) return null != t.title ? "".concat(t.title, " ").concat(t.description) : t.description;
      if (null != t.title) return t.title;
      if (null != t.fields) {
        let e = t.fields[0];
        return "".concat(e.name, " ").concat(e.value)
      }
    }
    if ((0, y.hasFlag)(null !== (t = e.flags) && void 0 !== t ? t : 0, D.MessageFlags.IS_VOICE_MESSAGE)) return G.default.Messages.VOICE_MESSAGES_SENT_NOTIFICATION;
    if (void 0 !== e.attachments && e.attachments.length > 0) {
      let t = e.attachments[0].filename;
      return G.default.Messages.NOTIFICATION_BODY_ATTACHMENT.format({
        filename: t
      })
    }
    return ""
  }(t)), {
    icon: n.getAvatarURL(e.guild_id, 128),
    title: r,
    body: u
  }
}