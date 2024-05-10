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
  O = n("5192"),
  m = n("352736"),
  v = n("51144"),
  M = n("981631"),
  D = n("124368"),
  R = n("689938");

function G(e, t, n) {
  let l = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
    i = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
  if (t.hasFlag(M.UserFlags.SPAMMER) || n.isManaged()) return !1;
  let u = n.getGuildId();
  return !(null != u && a.default.isLurking(u) || t.id === e.id || I.default.isBlocked(t.id) || !l && A.default.getStatus() === M.StatusTypes.DND || c.FocusMode.getSetting() || !i && h.default.allowNoMessages(n)) && !0
}

function U(e, t) {
  var n;
  let l = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
    i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
  if (null != e.flags && (0, y.hasFlag)(e.flags, M.MessageFlags.SUPPRESS_NOTIFICATIONS)) return !1;
  let a = E.default.getChannel(t);
  e.type === M.MessageTypes.THREAD_STARTER_MESSAGE && (a = E.default.getChannel(null == a ? void 0 : a.parent_id));
  let d = p.default.getCurrentUser(),
    o = p.default.getUser(null === (n = e.author) || void 0 === n ? void 0 : n.id);
  if (null == a || null == d || null == o || a.type === M.ChannelTypes.GROUP_DM && e.type === M.MessageTypes.RECIPIENT_REMOVE || !G(d, o, a, i) || u.default.isMessageRequest(t)) return !1;
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
  e.type === M.MessageTypes.THREAD_STARTER_MESSAGE && (l = E.default.getChannel(null == l ? void 0 : l.parent_id));
  let i = p.default.getCurrentUser(),
    a = p.default.getUser(null === (n = e.author) || void 0 === n ? void 0 : n.id);
  return !(null == l || null == i || null == a || l.isManaged() || a.hasFlag(M.UserFlags.SPAMMER) || I.default.isBlocked(a.id) || a.id === i.id || A.default.getStatus() === M.StatusTypes.DND || c.FocusMode.getSetting() || h.default.allowNoMessages(l)) && !0
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
    case M.ChannelTypes.GUILD_ANNOUNCEMENT:
    case M.ChannelTypes.GUILD_TEXT:
      return t;
    case M.ChannelTypes.GROUP_DM:
      return n;
    case M.ChannelTypes.DM:
    default:
      return l
  }
}

function V(e, t, n) {
  var a, u, s, r, f;
  let c;
  let _ = O.default.getName(e.getGuildId(), e.id, n),
    T = _;
  switch (e.type) {
    case M.ChannelTypes.GUILD_ANNOUNCEMENT:
    case M.ChannelTypes.GUILD_TEXT:
    case M.ChannelTypes.GUILD_VOICE:
    case M.ChannelTypes.ANNOUNCEMENT_THREAD:
    case M.ChannelTypes.PUBLIC_THREAD:
    case M.ChannelTypes.PRIVATE_THREAD:
      let N = E.default.getChannel(e.parent_id);
      t.type === M.MessageTypes.THREAD_STARTER_MESSAGE && null != N ? T = P(T, N, E.default.getChannel(N.parent_id)) : (0, o.default)(t) ? null != g.default.getGuild(e.getGuildId()) && (T = P(T, e, N)) : T = P(T, e, N);
      break;
    case M.ChannelTypes.GROUP_DM:
      !(e.isManaged() && n.bot && T === (0, l.computeChannelName)(e, p.default, I.default)) && (T = "".concat(T, " (").concat((0, l.computeChannelName)(e, p.default, I.default, !0), ")"))
  }
  let C = t.content;
  if ((0, o.default)(t) && null == (C = m.default.stringify(t, e))) throw new i.default("NotificationTextUtils").warn("SystemMessageUtils.stringify(...) could not convert", t), Error("failed to stringify system message");
  let S = null !== (a = t.sticker_items) && void 0 !== a ? a : t.stickers;
  if (null != t.activity && null != t.application) c = t.activity.type === M.ActivityActionTypes.JOIN ? w(e, R.default.Messages.NOTIFICATION_MESSAGE_CREATE_GUILD_ACTIVITY_JOIN, R.default.Messages.NOTIFICATION_MESSAGE_CREATE_GROUP_DM_ACTIVITY_JOIN, R.default.Messages.NOTIFICATION_MESSAGE_CREATE_DM_ACTIVITY_JOIN).format({
    user: _,
    game: t.application.name
  }) : t.activity.type === M.ActivityActionTypes.JOIN_REQUEST ? w(e, R.default.Messages.NOTIFICATION_MESSAGE_CREATE_DM_ACTIVITY_JOIN_REQUEST, R.default.Messages.NOTIFICATION_MESSAGE_CREATE_DM_ACTIVITY_JOIN_REQUEST, R.default.Messages.NOTIFICATION_MESSAGE_CREATE_DM_ACTIVITY_JOIN_REQUEST).format({
    user: _,
    game: t.application.name
  }) : "";
  else if (null != t.activity && t.activity.type === M.ActivityActionTypes.LISTEN) c = w(e, R.default.Messages.NOTIFICATION_MESSAGE_CREATE_GUILD_ACTIVITY_LISTEN, R.default.Messages.NOTIFICATION_MESSAGE_CREATE_GROUP_DM_ACTIVITY_LISTEN, R.default.Messages.NOTIFICATION_MESSAGE_CREATE_DM_ACTIVITY_LISTEN).format({
    user: _
  });
  else if (null != S && S.length > 0) c = R.default.Messages.STICKER_NOTIFICATION_BODY.format({
    stickerName: S[0].name
  });
  else if (t.type === M.MessageTypes.PREMIUM_REFERRAL) c = R.default.Messages.SHARE_NITRO_EMBEDDED_MESSAGE_BODY_SHORT.format({
    username: v.default.getName(n)
  });
  else if (null != t.poll) c = R.default.Messages.POLL_SENT_NOTIFICATION.format({
    question: t.poll.question.text
  });
  else if (t.type === M.MessageTypes.POLL_RESULT) {
    let e = null === (r = t.embeds) || void 0 === r ? void 0 : null === (s = r[0]) || void 0 === s ? void 0 : null === (u = s.fields) || void 0 === u ? void 0 : u.find(e => "poll_question_text" === e.name),
      n = null !== (f = null == e ? void 0 : e.value) && void 0 !== f ? f : "";
    c = R.default.Messages.POLL_RESULTS_NOTIFICATION.format({
      question: n
    })
  } else c = d.default.unparse(C, e.id, !0);
  return 0 === c.length && (c = function(e) {
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
    if ((0, y.hasFlag)(null !== (t = e.flags) && void 0 !== t ? t : 0, M.MessageFlags.IS_VOICE_MESSAGE)) return R.default.Messages.VOICE_MESSAGES_SENT_NOTIFICATION;
    if (void 0 !== e.attachments && e.attachments.length > 0) {
      let t = e.attachments[0].filename;
      return R.default.Messages.NOTIFICATION_BODY_ATTACHMENT.format({
        filename: t
      })
    }
    return ""
  }(t)), {
    icon: n.getAvatarURL(e.guild_id, 128),
    title: T,
    body: c
  }
}