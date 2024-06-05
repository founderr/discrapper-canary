"use strict";
n.r(t), n.d(t, {
  makeTextChatNotification: function() {
    return k
  },
  shouldNotify: function() {
    return L
  },
  shouldNotifyBase: function() {
    return U
  },
  shouldNotifyForForumThreadCreation: function() {
    return P
  },
  shouldNotifyForSelectedChannel: function() {
    return F
  }
}), n("789020"), n("411104");
var l = n("933557"),
  i = n("710845"),
  a = n("978003"),
  u = n("41776"),
  s = n("355298"),
  d = n("957730"),
  o = n("572804"),
  r = n("901461");
n("734934");
var f = n("569471"),
  c = n("723170"),
  _ = n("695346"),
  T = n("131704"),
  E = n("433355"),
  g = n("592125"),
  N = n("430824"),
  I = n("19780"),
  S = n("699516"),
  C = n("944486"),
  A = n("914010"),
  h = n("885110"),
  p = n("9156"),
  O = n("594174"),
  y = n("630388"),
  m = n("5192"),
  M = n("352736"),
  v = n("51144"),
  D = n("981631"),
  R = n("124368"),
  G = n("689938");

function U(e, t, n) {
  let l = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
  if (t.hasFlag(D.UserFlags.SPAMMER) || n.isManaged()) return !1;
  let i = n.getGuildId();
  return !(null != i && u.default.isLurking(i) || !l.ignoreSameUser && t.id === e.id || S.default.isBlocked(t.id) || !l.ignoreStatus && h.default.getStatus() === D.StatusTypes.DND || _.FocusMode.getSetting() || !l.ignoreNoMessagesSetting && p.default.allowNoMessages(n)) && !0
}

function L(e, t) {
  var n;
  let l = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
    i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
  if (null != e.flags && (0, y.hasFlag)(e.flags, D.MessageFlags.SUPPRESS_NOTIFICATIONS)) return !1;
  let a = g.default.getChannel(t);
  e.type === D.MessageTypes.THREAD_STARTER_MESSAGE && (a = g.default.getChannel(null == a ? void 0 : a.parent_id));
  let u = O.default.getCurrentUser(),
    d = O.default.getUser(null === (n = e.author) || void 0 === n ? void 0 : n.id);
  if (null == a || null == u || null == d || a.type === D.ChannelTypes.GROUP_DM && e.type === D.MessageTypes.RECIPIENT_REMOVE || !U(u, d, a, {
      ignoreStatus: i,
      ignoreSameUser: D.MessageTypesSets.SELF_MENTIONABLE_SYSTEM.has(e.type)
    }) || s.default.isMessageRequest(t)) return !1;
  if (!l) {
    let e = C.default.getChannelId(A.default.getGuildId());
    if (e === a.id || E.default.getCurrentSidebarChannelId(e) === a.id) return !1
  }
  if (void 0 !== e.activity_instance && null != e.interaction && e.interaction.user.id === u.id) return !1;
  if (T.THREAD_CHANNEL_TYPES.has(a.type)) {
    if (f.default.isMuted(a.id)) return !1;
    let t = (0, c.computeThreadNotificationSetting)(a);
    return t !== R.ThreadMemberFlags.NO_MESSAGES && (t === R.ThreadMemberFlags.ALL_MESSAGES || (0, o.isRawMessageMentioned)({
      rawMessage: e,
      userId: u.id,
      suppressEveryone: !1,
      suppressRoles: !1
    }))
  } {
    let t = !T.GUILD_VOCAL_CHANNEL_TYPES.has(a.type) || I.default.getChannelId() === a.id;
    if (p.default.allowAllMessages(a) && t) return !0;
    let n = p.default.isSuppressEveryoneEnabled(a.getGuildId()),
      l = p.default.isSuppressRolesEnabled(a.getGuildId());
    return (0, o.isRawMessageMentioned)({
      rawMessage: e,
      userId: u.id,
      suppressEveryone: n,
      suppressRoles: l
    })
  }
}

function F(e, t) {
  var n;
  if (C.default.getChannelId(A.default.getGuildId()) !== t) return !1;
  let l = g.default.getChannel(t);
  e.type === D.MessageTypes.THREAD_STARTER_MESSAGE && (l = g.default.getChannel(null == l ? void 0 : l.parent_id));
  let i = O.default.getCurrentUser(),
    a = O.default.getUser(null === (n = e.author) || void 0 === n ? void 0 : n.id);
  return !(null == l || null == i || null == a || l.isManaged() || a.hasFlag(D.UserFlags.SPAMMER) || S.default.isBlocked(a.id) || a.id === i.id || h.default.getStatus() === D.StatusTypes.DND || _.FocusMode.getSetting() || p.default.allowNoMessages(l)) && !0
}

function P(e, t) {
  let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
    l = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
    i = O.default.getCurrentUser(),
    a = O.default.getUser(e.ownerId);
  return !(null == t || null == i || null == a || !U(i, a, t, {
    ignoreStatus: l,
    ignoreNoMessagesSetting: !0
  }) || p.default.isGuildOrCategoryOrChannelMuted(t.guild_id, t.id)) && (!!n || C.default.getChannelId(A.default.getGuildId()) !== t.id) && p.default.getNewForumThreadsCreated(t)
}
let w = (e, t, n) => "".concat(e, " (").concat((0, l.computeChannelName)(t, O.default, S.default, !0)).concat(null != n ? ", ".concat((0, l.computeChannelName)(n, O.default, S.default)) : "", ")");

function V(e, t, n, l) {
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

function k(e, t, n) {
  var u, s, o, f, c;
  let _;
  let T = m.default.getName(e.getGuildId(), e.id, n),
    E = T;
  switch (e.type) {
    case D.ChannelTypes.GUILD_ANNOUNCEMENT:
    case D.ChannelTypes.GUILD_TEXT:
    case D.ChannelTypes.GUILD_VOICE:
    case D.ChannelTypes.ANNOUNCEMENT_THREAD:
    case D.ChannelTypes.PUBLIC_THREAD:
    case D.ChannelTypes.PRIVATE_THREAD:
      let I = g.default.getChannel(e.parent_id);
      t.type === D.MessageTypes.THREAD_STARTER_MESSAGE && null != I ? E = w(E, I, g.default.getChannel(I.parent_id)) : (0, r.default)(t) ? null != N.default.getGuild(e.getGuildId()) && (E = w(E, e, I)) : E = w(E, e, I);
      break;
    case D.ChannelTypes.GROUP_DM:
      !(e.isManaged() && n.bot && E === (0, l.computeChannelName)(e, O.default, S.default)) && (E = "".concat(E, " (").concat((0, l.computeChannelName)(e, O.default, S.default, !0), ")"))
  }
  let C = t.content;
  if ((0, r.default)(t) && null == (C = M.default.stringify(t, e))) throw new i.default("NotificationTextUtils").warn("SystemMessageUtils.stringify(...) could not convert", t), Error("failed to stringify system message");
  let A = null !== (u = t.sticker_items) && void 0 !== u ? u : t.stickers;
  if ((0, a.isForwardServerMessage)(t)) _ = G.default.Messages.MESSAGE_FORWARDED_NOTIFICATION_BODY;
  else if (null != t.activity && null != t.application) _ = t.activity.type === D.ActivityActionTypes.JOIN ? V(e, G.default.Messages.NOTIFICATION_MESSAGE_CREATE_GUILD_ACTIVITY_JOIN, G.default.Messages.NOTIFICATION_MESSAGE_CREATE_GROUP_DM_ACTIVITY_JOIN, G.default.Messages.NOTIFICATION_MESSAGE_CREATE_DM_ACTIVITY_JOIN).format({
    user: T,
    game: t.application.name
  }) : t.activity.type === D.ActivityActionTypes.JOIN_REQUEST ? V(e, G.default.Messages.NOTIFICATION_MESSAGE_CREATE_DM_ACTIVITY_JOIN_REQUEST, G.default.Messages.NOTIFICATION_MESSAGE_CREATE_DM_ACTIVITY_JOIN_REQUEST, G.default.Messages.NOTIFICATION_MESSAGE_CREATE_DM_ACTIVITY_JOIN_REQUEST).format({
    user: T,
    game: t.application.name
  }) : "";
  else if (null != t.activity && t.activity.type === D.ActivityActionTypes.LISTEN) _ = V(e, G.default.Messages.NOTIFICATION_MESSAGE_CREATE_GUILD_ACTIVITY_LISTEN, G.default.Messages.NOTIFICATION_MESSAGE_CREATE_GROUP_DM_ACTIVITY_LISTEN, G.default.Messages.NOTIFICATION_MESSAGE_CREATE_DM_ACTIVITY_LISTEN).format({
    user: T
  });
  else if (null != A && A.length > 0) _ = G.default.Messages.STICKER_NOTIFICATION_BODY.format({
    stickerName: A[0].name
  });
  else if (t.type === D.MessageTypes.PREMIUM_REFERRAL) _ = G.default.Messages.SHARE_NITRO_EMBEDDED_MESSAGE_BODY_SHORT.format({
    username: v.default.getName(n)
  });
  else if (null != t.poll) _ = G.default.Messages.POLL_SENT_NOTIFICATION.format({
    question: t.poll.question.text
  });
  else if (t.type === D.MessageTypes.POLL_RESULT) {
    let e = null === (f = t.embeds) || void 0 === f ? void 0 : null === (o = f[0]) || void 0 === o ? void 0 : null === (s = o.fields) || void 0 === s ? void 0 : s.find(e => "poll_question_text" === e.name),
      n = null !== (c = null == e ? void 0 : e.value) && void 0 !== c ? c : "";
    _ = G.default.Messages.POLL_RESULTS_NOTIFICATION.format({
      question: n
    })
  } else _ = d.default.unparse(C, e.id, !0);
  return 0 === _.length && (_ = function(e) {
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
    title: E,
    body: _
  }
}