"use strict";
n.r(t), n.d(t, {
  makeTextChatNotification: function() {
    return V
  },
  shouldNotify: function() {
    return U
  },
  shouldNotifyBase: function() {
    return G
  },
  shouldNotifyForForumThreadCreation: function() {
    return F
  },
  shouldNotifyForSelectedChannel: function() {
    return L
  }
}), n("789020"), n("411104");
var l = n("933557"),
  i = n("710845"),
  a = n("41776"),
  u = n("355298"),
  d = n("957730"),
  s = n("572804"),
  o = n("901461");
n("734934");
var r = n("569471"),
  f = n("723170"),
  c = n("695346"),
  _ = n("131704"),
  T = n("433355"),
  E = n("592125"),
  g = n("430824"),
  N = n("19780"),
  I = n("699516"),
  C = n("944486"),
  S = n("914010"),
  A = n("885110"),
  h = n("9156"),
  p = n("594174"),
  y = n("630388"),
  m = n("5192"),
  O = n("352736"),
  M = n("51144"),
  v = n("981631"),
  D = n("124368"),
  R = n("689938");

function G(e, t, n) {
  let l = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
    i = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
  if (t.hasFlag(v.UserFlags.SPAMMER) || n.isManaged()) return !1;
  let u = n.getGuildId();
  return !(null != u && a.default.isLurking(u) || t.id === e.id || I.default.isBlocked(t.id) || !l && A.default.getStatus() === v.StatusTypes.DND || c.FocusMode.getSetting() || !i && h.default.allowNoMessages(n)) && !0
}

function U(e, t) {
  var n;
  let l = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
    i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
  if (null != e.flags && (0, y.hasFlag)(e.flags, v.MessageFlags.SUPPRESS_NOTIFICATIONS)) return !1;
  let a = E.default.getChannel(t);
  e.type === v.MessageTypes.THREAD_STARTER_MESSAGE && (a = E.default.getChannel(null == a ? void 0 : a.parent_id));
  let d = p.default.getCurrentUser(),
    o = p.default.getUser(null === (n = e.author) || void 0 === n ? void 0 : n.id);
  if (null == a || null == d || null == o || a.type === v.ChannelTypes.GROUP_DM && e.type === v.MessageTypes.RECIPIENT_REMOVE || !G(d, o, a, i) || u.default.isMessageRequest(t)) return !1;
  if (!l) {
    let e = C.default.getChannelId(S.default.getGuildId());
    if (e === a.id || T.default.getCurrentSidebarChannelId(e) === a.id) return !1
  }
  if (void 0 !== e.activity_instance && null != e.interaction && e.interaction.user.id === d.id) return !1;
  if (_.THREAD_CHANNEL_TYPES.has(a.type)) {
    if (r.default.isMuted(a.id)) return !1;
    let t = (0, f.computeThreadNotificationSetting)(a);
    return t !== D.ThreadMemberFlags.NO_MESSAGES && (t === D.ThreadMemberFlags.ALL_MESSAGES || (0, s.isRawMessageMentioned)({
      rawMessage: e,
      userId: d.id,
      suppressEveryone: !1,
      suppressRoles: !1
    }))
  } {
    let t = !_.GUILD_VOCAL_CHANNEL_TYPES.has(a.type) || N.default.getChannelId() === a.id;
    if (h.default.allowAllMessages(a) && t) return !0;
    let n = h.default.isSuppressEveryoneEnabled(a.getGuildId()),
      l = h.default.isSuppressRolesEnabled(a.getGuildId());
    return (0, s.isRawMessageMentioned)({
      rawMessage: e,
      userId: d.id,
      suppressEveryone: n,
      suppressRoles: l
    })
  }
}

function L(e, t) {
  var n;
  if (C.default.getChannelId(S.default.getGuildId()) !== t) return !1;
  let l = E.default.getChannel(t);
  e.type === v.MessageTypes.THREAD_STARTER_MESSAGE && (l = E.default.getChannel(null == l ? void 0 : l.parent_id));
  let i = p.default.getCurrentUser(),
    a = p.default.getUser(null === (n = e.author) || void 0 === n ? void 0 : n.id);
  return !(null == l || null == i || null == a || l.isManaged() || a.hasFlag(v.UserFlags.SPAMMER) || I.default.isBlocked(a.id) || a.id === i.id || A.default.getStatus() === v.StatusTypes.DND || c.FocusMode.getSetting() || h.default.allowNoMessages(l)) && !0
}

function F(e, t) {
  let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
    l = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
    i = p.default.getCurrentUser(),
    a = p.default.getUser(e.ownerId);
  return !(null == t || null == i || null == a || !G(i, a, t, l, !0) || h.default.isGuildOrCategoryOrChannelMuted(t.guild_id, t.id)) && (!!n || C.default.getChannelId(S.default.getGuildId()) !== t.id) && h.default.getNewForumThreadsCreated(t)
}
let P = (e, t, n) => "".concat(e, " (").concat((0, l.computeChannelName)(t, p.default, I.default, !0)).concat(null != n ? ", ".concat((0, l.computeChannelName)(n, p.default, I.default)) : "", ")");

function w(e, t, n, l) {
  switch (e.type) {
    case v.ChannelTypes.GUILD_ANNOUNCEMENT:
    case v.ChannelTypes.GUILD_TEXT:
      return t;
    case v.ChannelTypes.GROUP_DM:
      return n;
    case v.ChannelTypes.DM:
    default:
      return l
  }
}

function V(e, t, n) {
  var a;
  let u;
  let s = m.default.getName(e.getGuildId(), e.id, n),
    r = s;
  switch (e.type) {
    case v.ChannelTypes.GUILD_ANNOUNCEMENT:
    case v.ChannelTypes.GUILD_TEXT:
    case v.ChannelTypes.GUILD_VOICE:
    case v.ChannelTypes.ANNOUNCEMENT_THREAD:
    case v.ChannelTypes.PUBLIC_THREAD:
    case v.ChannelTypes.PRIVATE_THREAD:
      let f = E.default.getChannel(e.parent_id);
      t.type === v.MessageTypes.THREAD_STARTER_MESSAGE && null != f ? r = P(r, f, E.default.getChannel(f.parent_id)) : (0, o.default)(t) ? null != g.default.getGuild(e.getGuildId()) && (r = P(r, e, f)) : r = P(r, e, f);
      break;
    case v.ChannelTypes.GROUP_DM:
      !(e.isManaged() && n.bot && r === (0, l.computeChannelName)(e, p.default, I.default)) && (r = "".concat(r, " (").concat((0, l.computeChannelName)(e, p.default, I.default, !0), ")"))
  }
  let c = t.content;
  if ((0, o.default)(t) && null == (c = O.default.stringify(t, e))) throw new i.default("NotificationTextUtils").warn("SystemMessageUtils.stringify(...) could not convert", t), Error("failed to stringify system message");
  let _ = null !== (a = t.sticker_items) && void 0 !== a ? a : t.stickers;
  return 0 === (u = null != t.activity && null != t.application ? t.activity.type === v.ActivityActionTypes.JOIN ? w(e, R.default.Messages.NOTIFICATION_MESSAGE_CREATE_GUILD_ACTIVITY_JOIN, R.default.Messages.NOTIFICATION_MESSAGE_CREATE_GROUP_DM_ACTIVITY_JOIN, R.default.Messages.NOTIFICATION_MESSAGE_CREATE_DM_ACTIVITY_JOIN).format({
    user: s,
    game: t.application.name
  }) : t.activity.type === v.ActivityActionTypes.JOIN_REQUEST ? w(e, R.default.Messages.NOTIFICATION_MESSAGE_CREATE_DM_ACTIVITY_JOIN_REQUEST, R.default.Messages.NOTIFICATION_MESSAGE_CREATE_DM_ACTIVITY_JOIN_REQUEST, R.default.Messages.NOTIFICATION_MESSAGE_CREATE_DM_ACTIVITY_JOIN_REQUEST).format({
    user: s,
    game: t.application.name
  }) : "" : null != t.activity && t.activity.type === v.ActivityActionTypes.LISTEN ? w(e, R.default.Messages.NOTIFICATION_MESSAGE_CREATE_GUILD_ACTIVITY_LISTEN, R.default.Messages.NOTIFICATION_MESSAGE_CREATE_GROUP_DM_ACTIVITY_LISTEN, R.default.Messages.NOTIFICATION_MESSAGE_CREATE_DM_ACTIVITY_LISTEN).format({
    user: s
  }) : null != _ && _.length > 0 ? R.default.Messages.STICKER_NOTIFICATION_BODY.format({
    stickerName: _[0].name
  }) : t.type === v.MessageTypes.PREMIUM_REFERRAL ? R.default.Messages.SHARE_NITRO_EMBEDDED_MESSAGE_BODY_SHORT.format({
    username: M.default.getName(n)
  }) : null != t.poll ? R.default.Messages.POLL_SENT_NOTIFICATION.format({
    question: t.poll.question.text
  }) : d.default.unparse(c, e.id, !0)).length && (u = function(e) {
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
    if ((0, y.hasFlag)(null !== (t = e.flags) && void 0 !== t ? t : 0, v.MessageFlags.IS_VOICE_MESSAGE)) return R.default.Messages.VOICE_MESSAGES_SENT_NOTIFICATION;
    if (void 0 !== e.attachments && e.attachments.length > 0) {
      let t = e.attachments[0].filename;
      return R.default.Messages.NOTIFICATION_BODY_ATTACHMENT.format({
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