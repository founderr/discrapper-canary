"use strict";
n.r(t), n("411104"), n("627341"), n("47120"), n("789020");
var i = n("278074"),
  r = n("544891"),
  s = n("780384"),
  a = n("570140"),
  o = n("89892"),
  l = n("673750"),
  u = n("367907"),
  d = n("287328"),
  _ = n("86670"),
  c = n("685736"),
  E = n("849521"),
  I = n("421474"),
  T = n("970606"),
  f = n("960904"),
  S = n("830121"),
  h = n("710845"),
  A = n("163268"),
  m = n("38618"),
  N = n("687516"),
  p = n("539573"),
  O = n("826581"),
  C = n("409059"),
  R = n("264229"),
  g = n("366980"),
  L = n("779832"),
  v = n("459618"),
  D = n("893233"),
  M = n("541288"),
  y = n("3148"),
  P = n("48854"),
  U = n("785359"),
  b = n("646504"),
  G = n("64078"),
  w = n("351780"),
  k = n("79390"),
  B = n("643266"),
  x = n("617136");
n("807092");
var V = n("869765"),
  F = n("926491"),
  H = n("467798"),
  Y = n("346479"),
  j = n("218543"),
  W = n("199902"),
  K = n("314897"),
  z = n("592125");
n("323873");
var Z = n("701190"),
  Q = n("375954"),
  X = n("496675"),
  q = n("158776"),
  J = n("306680"),
  $ = n("300429"),
  ee = n("594174");
n("626135");
var et = n("70956"),
  en = n("630388"),
  ei = n("669079"),
  er = n("63063"),
  es = n("74538"),
  ea = n("709054"),
  eo = n("668781"),
  el = n("981631"),
  eu = n("176505"),
  ed = n("58346"),
  e_ = n("689938");
let ec = new h.default("MessageActionCreators"),
  eE = new h.default("MessageQueue"),
  eI = !1;
class eT {
  markComplete() {
    this.completed = !0
  }
  constructor() {
    var e, t, n;
    e = this, n = !1, (t = "completed") in e ? Object.defineProperty(e, t, {
      value: n,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[t] = n
  }
}

function ef(e) {
  let {
    inviteKey: t,
    channelId: n,
    messageId: i,
    location: r,
    suggested: s = null,
    overrideProperties: a = {}
  } = e, o = (0, R.parseExtraDataFromInviteKey)(t), l = z.default.getChannel(n);
  if (null != l) {
    let e = null;
    l.isMultiUserDM() ? e = el.LoggingInviteTypes.GDM_INVITE : !l.isPrivate() && (e = el.LoggingInviteTypes.SERVER_INVITE);
    let n = {},
      _ = Z.default.getInvite(t);
    if (null != _ && _.state === el.InviteStates.RESOLVED && null != _.channel) {
      var d;
      let t = _.channel;
      n.invite_channel_id = t.id, n.invite_guild_id = null === (d = _.guild) || void 0 === d ? void 0 : d.id, n.invite_channel_type = t.type, null != _.inviter && (n.invite_inviter_id = _.inviter.id);
      let i = W.default.getLastActiveStream();
      if (null != i && i.channelId === t.id) {
        e = el.LoggingInviteTypes.STREAM, n.destination_user_id = i.ownerId;
        let t = (0, N.getStreamerApplication)(i, q.default);
        n.application_id = null != t ? t.id : null
      }
    }
    null != s && (n.is_suggested = s.isAffinitySuggestion, n.row_num = s.rowNum, n.num_total = s.numTotal, n.num_affinity_connections = s.numAffinityConnections, n.is_filtered = s.isFiltered), n = {
      ...n,
      location: r,
      invite_type: e,
      invite_code: o.baseCode,
      guild_id: l.getGuildId(),
      channel_id: l.id,
      message_id: i,
      send_type: el.SendTypes.DIRECT_MESSAGE,
      invite_guild_scheduled_event_id: o.guildScheduledEventId,
      ...a
    }, u.default.trackWithMetadata(el.AnalyticEvents.INVITE_SENT, n)
  } else {
    let e = {},
      n = Z.default.getInvite(t);
    null != n && n.state === el.InviteStates.RESOLVED && null != n.inviter && (e.invite_inviter_id = n.inviter.id, e = {
      ...e,
      location: r,
      invite_type: el.LoggingInviteTypes.FRIEND_INVITE,
      invite_code: o.baseCode,
      message_id: i,
      send_type: el.SendTypes.DIRECT_MESSAGE,
      invite_guild_scheduled_event_id: o.guildScheduledEventId,
      ...a
    }, u.default.trackWithMetadata(el.AnalyticEvents.INVITE_SENT, e))
  }
}
let eS = {
    [el.AbortCodes.EMAIL_VERIFICATION_REQUIRED]: {
      messageName: "BOT_REQUIRES_EMAIL_VERIFICATION",
      messageGetter: () => e_.default.Messages.BOT_REQUIRES_EMAIL_VERIFICATION
    },
    [el.AbortCodes.INVALID_MESSAGE_SEND_USER]: {
      messageName: "BOT_DM_SEND_FAILED_WITH_HELP_LINK",
      messageGetter: () => e_.default.Messages.BOT_DM_SEND_FAILED_WITH_HELP_LINK.format({
        helpUrl: er.default.getArticleURL(el.HelpdeskArticles.DM_COULD_NOT_BE_DELIVERED)
      })
    },
    [el.AbortCodes.RATE_LIMIT_DM_OPEN]: {
      messageName: "BOT_DM_RATE_LIMITED",
      messageGetter: () => e_.default.Messages.BOT_DM_RATE_LIMITED
    },
    [el.AbortCodes.SEND_MESSAGE_TEMPORARILY_DISABLED]: {
      messageName: "BOT_DM_SEND_MESSAGE_TEMPORARILY_DISABLED",
      messageGetter: () => e_.default.Messages.BOT_DM_SEND_MESSAGE_TEMPORARILY_DISABLED
    },
    [el.AbortCodes.SLOWMODE_RATE_LIMITED]: {
      messageName: "BOT_DM_SEND_MESSAGE_TEMPORARILY_DISABLED",
      messageGetter: () => e_.default.Messages.BOT_DM_SEND_MESSAGE_TEMPORARILY_DISABLED
    }
  },
  eh = {
    receiveMessage(e, t) {
      let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      a.default.dispatch({
        type: "MESSAGE_CREATE",
        channelId: e,
        message: t,
        optimistic: n,
        sendMessageOptions: i,
        isPushNotification: !1
      })
    },
    sendBotMessage(e, t, n, i) {
      null != n && u.default.trackWithMetadata(el.AnalyticEvents.AUTOMATED_MESSAGE_RECEIVED, {
        message_author: "Clyde",
        message_name: n
      }), eh.receiveMessage(e, (0, y.createBotMessage)({
        messageId: i,
        channelId: e,
        content: t,
        loggingName: n
      }))
    },
    sendNitroSystemMessage(e, t, n) {
      let i = (0, y.default)({
        channelId: e,
        nonce: n,
        type: el.MessageTypes.NITRO_NOTIFICATION,
        content: t,
        flags: el.MessageFlags.EPHEMERAL,
        author: {
          id: el.LOCAL_BOT_ID,
          username: "Nitro Notification",
          discriminator: el.NON_USER_BOT_DISCRIMINATOR,
          avatar: "nitro",
          bot: !0
        }
      });
      eh.receiveMessage(e, {
        ...i,
        state: el.MessageStates.SENT,
        channel_id: e
      }, !0)
    },
    sendClydeError(e) {
      let t, n, i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        r = z.default.getChannel(e);
      null != r && (i === el.AbortCodes.SLOWMODE_RATE_LIMITED ? (t = e_.default.Messages.CHANNEL_SLOWMODE_DESC.format({
        seconds: r.rateLimitPerUser
      }), n = "SLOWMODE_RATE_LIMITED") : i === el.AbortCodes.INVALID_MESSAGE_SEND_USER ? (t = e_.default.Messages.BOT_DM_SEND_FAILED_WITH_HELP_LINK.format({
        helpUrl: er.default.getArticleURL(el.HelpdeskArticles.DM_COULD_NOT_BE_DELIVERED)
      }), n = "INVALID_MESSAGE_SEND_USER") : i === el.AbortCodes.TOO_MANY_THREADS ? (t = r.isForumLikeChannel() || r.isForumPost() ? e_.default.Messages.BOT_DM_TOO_MANY_POSTS : e_.default.Messages.BOT_DM_TOO_MANY_THREADS, n = "TOO_MANY_THREADS") : i === el.AbortCodes.TOO_MANY_ANNOUNCEMENT_THREADS ? (t = e_.default.Messages.BOT_DM_TOO_MANY_ANNOUNCEMENT_THREADS, n = "TOO_MANY_ANNOUNCEMENT_THREADS") : i === el.AbortCodes.HARMFUL_LINK_MESSAGE_BLOCKED ? (t = e_.default.Messages.HARMFUL_LINK_MESSAGE_BLOCKED_ERROR.format({
        helpUrl: el.MarketingURLs.HARMFUL_LINKS
      }), n = "HARMFUL_LINK_MESSAGE_BLOCKED") : i in eS ? (n = eS[i].messageName, t = eS[i].messageGetter()) : (t = e_.default.Messages.BOT_DM_SEND_FAILED_WITH_HELP_LINK.format({
        helpUrl: er.default.getArticleURL(el.HelpdeskArticles.DM_COULD_NOT_BE_DELIVERED)
      }), n = "SEND_FAILED (".concat(i, ")")), eh.sendBotMessage(e, t, n))
    },
    sendExplicitMediaClydeError(e, t, n) {
      let r = z.default.getChannel(e);
      if (null == r) return;
      let {
        message: s,
        messageName: o
      } = (0, i.match)({
        isDM: r.isDM(),
        isGDM: r.isGroupDM()
      }).with({
        isDM: !0
      }, () => ({
        message: e_.default.Messages.SENDER_BLOCKED_MEDIA_BOT_DMS_MESSAGE,
        messageName: "BOT_DM_EXPLICIT_CONTENT"
      })).with({
        isDM: !1,
        isGDM: !0
      }, () => ({
        message: e_.default.Messages.SENDER_BLOCKED_MEDIA_BOT_DMS_MESSAGE,
        messageName: "BOT_GDM_EXPLICIT_CONTENT"
      })).otherwise(() => ({
        message: e_.default.Messages.SENDER_BLOCKED_MEDIA_BOT_GUILD_MESSAGE,
        messageName: "BOT_GUILD_EXPLICIT_CONTENT"
      })), l = (0, P.createNonce)();
      eh.sendBotMessage(e, s, o, l), (0, A.trackMediaRedactionAction)({
        action: A.TrackMediaRedactionActionType.EXPLICIT_MEDIA_FALSE_POSITIVE_CLYDE_MESSAGE_SENT,
        messageId: l,
        channelId: e,
        context: n
      }), null != t && t.length > 0 && a.default.dispatch({
        type: "MESSAGE_EXPLICIT_CONTENT_FP_CREATE",
        messageId: l,
        channelId: e,
        attachments: t
      })
    },
    truncateMessages(e, t, n) {
      a.default.dispatch({
        type: "TRUNCATE_MESSAGES",
        channelId: e,
        truncateBottom: t,
        truncateTop: n
      })
    },
    clearChannel(e) {
      a.default.dispatch({
        type: "CLEAR_MESSAGES",
        channelId: e
      })
    },
    jumpToPresent(e, t) {
      eh.trackJump(e, null, "Present");
      let n = {
        present: !0
      };
      Q.default.hasPresent(e) ? a.default.dispatch({
        type: "LOAD_MESSAGES_SUCCESS_CACHED",
        jump: n,
        channelId: e,
        limit: t
      }) : eh.fetchMessages({
        channelId: e,
        limit: t,
        jump: n
      })
    },
    trackJump(e, t, n, i) {
      u.default.trackWithMetadata(el.AnalyticEvents.JUMP, {
        context: n,
        channel_id: e,
        message_id: t,
        ...i
      })
    },
    jumpToMessage(e) {
      let {
        channelId: t,
        messageId: n,
        flash: i = !1,
        offset: r,
        context: s,
        extraProperties: a = null,
        isPreload: o,
        returnMessageId: l,
        skipLocalFetch: u,
        jumpType: d
      } = e;
      return "string" == typeof s && eh.trackJump(t, n, s, a), eh.fetchMessages({
        channelId: t,
        limit: el.MAX_MESSAGES_FOR_JUMP,
        jump: {
          messageId: n,
          flash: i,
          offset: r,
          returnMessageId: l,
          jumpType: d
        },
        isPreload: o,
        skipLocalFetch: u
      })
    },
    focusMessage(e) {
      let {
        channelId: t,
        messageId: n
      } = e;
      eh.fetchMessages({
        channelId: t,
        limit: el.MAX_MESSAGES_FOR_JUMP,
        focus: {
          messageId: n
        }
      })
    },
    fetchMessages(e) {
      let {
        channelId: t,
        before: n,
        after: i,
        limit: s,
        jump: l,
        focus: u,
        isPreload: d,
        skipLocalFetch: _,
        truncate: c
      } = e, E = z.default.getChannel(t), I = m.default.isConnectedOrOverlay(), T = Date.now();
      if (null != E && E.type === el.ChannelTypes.GUILD_STORE) return !1;
      if (t === eu.FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID) return;
      if (ec.log("Fetching messages for ".concat(t, " between ").concat(n, " and ").concat(i, ". jump=").concat(JSON.stringify(l))), eh._tryFetchMessagesCached({
          channelId: t,
          before: n,
          after: i,
          limit: s,
          jump: l,
          focus: u,
          truncate: c
        })) return;
      j.default.fetchMessages.recordStart();
      let f = null != l ? l : void 0;
      null == f && null != u && (f = {
        ...u
      });
      let S = o.default.getOrCreate(t).loadStart(f);
      o.default.commit(S), a.default.dispatch({
        type: "LOAD_MESSAGES"
      });
      let h = null == f ? void 0 : f.messageId,
        A = new eT;
      return !_ && this.fetchLocalMessages(t, n, i, s, A), r.HTTP.get({
        url: el.Endpoints.MESSAGES(t),
        query: {
          before: n,
          after: i,
          limit: s,
          around: h,
          preload: d
        },
        retries: 2,
        oldFormErrors: !0
      }).then(e => (j.default.fetchMessages.recordEnd(), j.default.dispatchMessages.measure(() => {
        let r = e.body,
          o = null != n,
          u = null != i,
          d = null == n && null == i,
          _ = null != h || r.length === s && (o || d),
          E = null != h || u && r.length === s;
        if (null != h) {
          let e = Math.floor(s / 2),
            n = [h, ...r.map(e => {
              let {
                id: t
              } = e;
              return t
            })].filter((e, t, n) => n.indexOf(e) === t).sort(ea.default.compare).indexOf(h);
          if (n < e && (_ = !1), r.length - n < e && (E = !1), E && r.length > 0) {
            let e = J.default.lastMessageId(t);
            r[0].id === e && (E = !1)
          }
        }
        ec.log("Fetched ".concat(r.length, " messages for ").concat(t, " isBefore:").concat(o, " isAfter:").concat(u)), A.markComplete(), a.default.dispatch({
          type: "LOAD_MESSAGES_SUCCESS",
          channelId: t,
          messages: r,
          isBefore: o,
          isAfter: u,
          hasMoreBefore: _,
          hasMoreAfter: E,
          limit: s,
          jump: l,
          isStale: !I || m.default.lastTimeConnectedChanged() >= T,
          truncate: c
        })
      }), !0), () => (ec.log("Failed to fetch messages for ".concat(t)), a.default.dispatch({
        type: "LOAD_MESSAGES_FAILURE",
        channelId: t
      }), !1))
    },
    async fetchLocalMessages(e, t, n, i, r) {
      let s = z.default.getBasicChannel(e),
        l = o.default.getOrCreate(e),
        u = d.default.database();
      if (null == u || null == s || null != t || null != n) {
        j.default.addLocalMessages(e, -1);
        return
      }
      if (l.ready && !l.cached) {
        j.default.addLocalMessages(e, -2);
        return
      }
      let E = await (0, _.tryLoadAsync)(() => c.default.load(u, e, i));
      if (null == E) {
        j.default.addLocalMessages(e, -3);
        return
      }
      if (ec.log("fetched ".concat(E.messages.length, " messages from local database (channel_id: ").concat(e, ", remote_fetch_completed: ").concat(r.completed, ")")), j.default.addLocalMessages(e, E.messages.length), !r.completed && E.messages.length > 0) {
        let t = E.messages.length >= i && E.connectionId === m.default.lastTimeConnectedChanged();
        a.default.dispatch({
          type: "LOCAL_MESSAGES_LOADED",
          guildId: s.guild_id,
          channelId: e,
          users: E.users,
          members: E.members,
          messages: E.messages,
          stale: !t
        })
      }
    },
    async fetchNewLocalMessages(e, t) {
      var n;
      let i = z.default.getBasicChannel(e),
        r = d.default.database();
      if (null == r || null == i) return;
      let s = o.default.getOrCreate(e);
      if (s.hasMoreAfter) return;
      let l = await (0, _.tryLoadAsync)(() => c.default.load(r, e, t));
      if (null == l) return;
      let u = null === (n = (s = o.default.getOrCreate(e)).last()) || void 0 === n ? void 0 : n.id,
        E = null == u ? l.messages : l.messages.filter(e => ea.default.compare(e.id, u) > 0);
      ec.log("Fetched ".concat(l.messages.length, " messages from the cache after foregrounding. ").concat(E.length, " are new")), 0 !== E.length && a.default.dispatch({
        type: "LOCAL_MESSAGES_LOADED",
        guildId: i.guild_id,
        channelId: e,
        users: l.users,
        members: l.members,
        messages: E,
        stale: !0
      })
    },
    _tryFetchMessagesCached(e) {
      let {
        channelId: t,
        before: n,
        after: i,
        limit: r,
        jump: s,
        focus: o,
        truncate: l
      } = e, u = Q.default.getMessages(t);
      if (u.cached || !u.ready) return !1;
      if ((null == s ? void 0 : s.messageId) != null || (null == o ? void 0 : o.messageId) != null) {
        if ((null == s ? void 0 : s.messageId) != null && u.has(s.messageId, !1)) return a.default.dispatch({
          type: "LOAD_MESSAGES_SUCCESS_CACHED",
          channelId: t,
          jump: s,
          limit: r,
          truncate: l
        }), !0;
        if ((null == o ? void 0 : o.messageId) != null) {
          if (u.has(o.messageId, !1)) return a.default.dispatch({
            type: "LOAD_MESSAGES_SUCCESS_CACHED",
            channelId: t,
            focus: o,
            limit: r,
            truncate: l
          }), !0;
          s = {
            ...o
          }
        }
        let e = (null == s ? void 0 : s.messageId) != null ? ea.default.extractTimestamp(null == s ? void 0 : s.messageId) : 0,
          n = u.first(),
          i = u.last();
        if (!u.hasMoreBefore && null != n && ea.default.extractTimestamp(n.id) >= e || !u.hasMoreAfter && null != i && ea.default.extractTimestamp(i.id) <= e || null != n && null != i && ea.default.extractTimestamp(n.id) < e && ea.default.extractTimestamp(i.id) > e) return a.default.dispatch({
          type: "LOAD_MESSAGES_SUCCESS_CACHED",
          channelId: t,
          jump: s,
          limit: el.MAX_MESSAGES_FOR_JUMP
        }), !0
      } else if (null != n && u.hasBeforeCached(n)) return a.default.dispatch({
        type: "LOAD_MESSAGES_SUCCESS_CACHED",
        channelId: t,
        before: n,
        limit: r,
        truncate: l
      }), !0;
      else if (null != i && u.hasAfterCached(i)) return a.default.dispatch({
        type: "LOAD_MESSAGES_SUCCESS_CACHED",
        channelId: t,
        after: i,
        limit: r,
        truncate: l
      }), !0;
      return !1
    },
    async sendMessage(e, t) {
      var n;
      let i = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      if (t.reaction) return Promise.resolve();
      let s = await (0, B.default)(e);
      if (null != s) return eh.sendMessage(s, t, i, r);
      let a = L.default.backgroundify(() => eh._sendMessage(e, t, r), void 0),
        o = null !== (n = r.nonce) && void 0 !== n ? n : (0, P.createNonce)();
      return (r = {
        ...r,
        nonce: o
      }, v.default.recordMessageSendAttempt(e, o), Q.default.isReady(e)) ? a() : i && e !== eu.FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID ? (eE.info("Waiting for channel ".concat(e, " to be ready before sending.")), new Promise((t, n) => {
        Q.default.whenReady(e, () => {
          eE.info("Channel ".concat(e, " is ready for sending now.")), a().then(t, n)
        })
      })) : a()
    },
    getSendMessageOptionsForReply(e) {
      var t;
      if (null == e) return {};
      let n = {
        guild_id: null !== (t = e.channel.getGuildId()) && void 0 !== t ? t : void 0,
        channel_id: e.channel.id,
        message_id: e.message.id
      };
      return {
        messageReference: n,
        allowedMentions: e.shouldMention ? void 0 : {
          parse: Object.values(el.AllowedMentionTypes),
          replied_user: !1
        }
      }
    },
    sendInvite: (e, t, n, i) => eh._sendMessage(e, {
      content: (0, g.default)(t),
      tts: !1,
      validNonShortcutEmojis: [],
      invalidEmojis: []
    }, {
      location: n,
      suggestedInvite: null != i ? i : void 0
    }),
    sendActivityBookmark: (e, t, n, i) => eh._sendMessage(e, {
      content: t,
      tts: !1,
      validNonShortcutEmojis: [],
      invalidEmojis: []
    }, {
      location: n,
      suggestedInvite: null != i ? i : void 0
    }),
    sendStickers(e, t) {
      let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "",
        i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
        r = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
      return eh._sendMessage(e, {
        content: n,
        invalidEmojis: [],
        validNonShortcutEmojis: [],
        tts: r
      }, {
        ...i,
        stickerIds: t
      })
    },
    sendGreetMessage(e, t) {
      let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        {
          messageReference: i,
          allowedMentions: s
        } = n;
      return r.HTTP.post({
        url: el.Endpoints.MESSAGES_GREET(e),
        body: {
          sticker_ids: [t],
          allowed_mentions: s,
          message_reference: i
        },
        oldFormErrors: !0
      }).then(n => (M.default.donateSentMessage(n.body.content, e), eh.receiveMessage(e, n.body), a.default.dispatch({
        type: "STICKER_TRACK_USAGE",
        stickerIds: [t]
      }), n), t => {
        throw ec.log("Failed to send greeting"), 429 !== t.status && eh.sendClydeError(e, t.body.code), a.default.dispatch({
          type: "MESSAGE_SEND_FAILED",
          messageId: t.body.id,
          channelId: e
        }), t
      })
    },
    sendPollMessage(e, t) {
      let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      return eh._sendMessage(e, {
        content: "",
        tts: !1,
        validNonShortcutEmojis: [],
        invalidEmojis: []
      }, {
        ...n,
        poll: t
      })
    },
    _sendMessage(e, t, n) {
      var i, r, s;
      let o = (0, B.default)(e);
      if (null != o) return eE.info("Converting channel to a private channel"), o.then(e => {
        eE.info("Finished converting channel to a private channel"), eh._sendMessage(e, t, n)
      });
      let d = t.content,
        {
          invalidEmojis: _,
          validNonShortcutEmojis: c,
          tts: h = !1
        } = t,
        {
          activityAction: A,
          location: m,
          suggestedInvite: N,
          stickerIds: R,
          messageReference: g,
          allowedMentions: L,
          poll: b
        } = n,
        V = null !== (r = n.flags) && void 0 !== r ? r : 0,
        [Y, j] = (0, H.default)(d);
      Y && (d = j, V = (0, en.addFlag)(V, el.MessageFlags.SUPPRESS_NOTIFICATIONS));
      let W = (null === (i = n.messageReference) || void 0 === i ? void 0 : i.type) === el.MessageReferenceTypes.FORWARD;
      if ("" === d && null == A && null == R && null == b && !W) return Promise.resolve();
      let Z = null != g ? el.MessageTypes.REPLY : el.MessageTypes.DEFAULT,
        Q = null !== (s = n.nonce) && void 0 !== s ? s : (0, P.createNonce)();
      if (!1 !== n.eagerDispatch) {
        let t = (0, y.default)({
          channelId: e,
          content: d,
          tts: h,
          type: Z,
          messageReference: g,
          allowedMentions: L,
          flags: 0 !== V ? V : void 0,
          nonce: Q,
          poll: (0, k.createPollServerDataFromCreateRequest)(b)
        });
        (0, G.updateComboOnMessageSend)(e, t.id), null != R && (t.sticker_items = R.map(e => F.default.getStickerById(e)).filter(e => null != e)), eh.receiveMessage(e, t, !0, n)
      }
      if (!eI && null != _ && _.length > 0) {
        let t, n;
        eI = !0;
        let i = ee.default.getCurrentUser();
        _.some(e => e.animated) && !es.default.canUseAnimatedEmojis(i) ? (t = e_.default.Messages.INVALID_ANIMATED_EMOJI_BODY_UPGRADE, n = "INVALID_ANIMATED_EMOJI_BODY") : X.default.canWithPartialContext(el.Permissions.USE_EXTERNAL_EMOJIS, {
          channelId: e
        }) ? (t = e_.default.Messages.INVALID_EXTERNAL_EMOJI_BODY_UPGRADE, n = "INVALID_EXTERNAL_EMOJI_BODY_UPGRADE") : (t = e_.default.Messages.INVALID_EXTERNAL_EMOJI_BODY, n = "INVALID_EXTERNAL_EMOJI_BODY"), eh.sendBotMessage(e, t, n)
      }
      let q = {
        type: l.MessageDataType.SEND,
        message: {
          channelId: e,
          content: d,
          nonce: Q,
          tts: h,
          message_reference: g,
          allowed_mentions: L,
          flags: V
        }
      };
      if (null != A) {
        let e = A.type === el.ActivityActionTypes.JOIN_REQUEST ? null == A ? void 0 : A.activity.session_id : K.default.getSessionId();
        if (null != e) {
          let t = {
              type: A.type,
              session_id: e
            },
            {
              activity: n
            } = A;
          null != n.party && null != n.party.id && (t.party_id = n.party.id), q.message.application_id = n.application_id, q.message.activity = t
        }
      }
      return null != b && (q.message.poll = b), null != R && (q.message.sticker_ids = R), w.default.isEnabled() && (q.message.has_poggermode_enabled = !0), new Promise((t, i) => {
        let r = Date.now(),
          s = l.default.length,
          o = Math.floor(1e4 * Math.random());
        eE.info("Queueing message to be sent LogId:".concat(o)), l.default.enqueue(q, o => {
          let _ = Date.now() - r;
          if (o.ok) {
            M.default.donateSentMessage(d, e), eh.receiveMessage(e, o.body, !0, {
              sendAnalytics: {
                duration: _,
                queueSize: s
              },
              poll: b
            });
            let i = ea.default.cast(e),
              r = O.default.getRequest(i);
            if (null != r) {
              let {
                guildId: t,
                userId: n,
                applicationStatus: i
              } = r;
              (0, T.trackClanSendInterviewMessage)({
                guildId: t,
                channelId: e,
                messageId: o.body.id,
                joinRequestStatus: i,
                joinRequestUserId: n
              })
            }
            v.default.recordMessageSendApiResponse(Q), a.default.dispatch({
              type: "SLOWMODE_RESET_COOLDOWN",
              slowmodeType: $.SlowmodeType.SendMessage,
              channelId: e
            }), a.default.dispatch({
              type: "EMOJI_TRACK_USAGE",
              emojiUsed: c
            }), a.default.dispatch({
              type: "STICKER_TRACK_USAGE",
              stickerIds: R
            }), a.default.dispatch({
              type: "LOCAL_MESSAGE_CREATE",
              message: {
                channel_id: e,
                author: ee.default.getCurrentUser()
              }
            }), ! function(e) {
              let {
                content: t,
                channelId: n,
                messageId: i,
                location: r,
                suggested: s = null,
                overrideProperties: a = {}
              } = e;
              (0, S.default)(t).forEach(e => {
                let {
                  type: t,
                  code: o
                } = e;
                if (t === f.CodedLinkType.INVITE) ef({
                  inviteKey: o,
                  channelId: n,
                  messageId: i,
                  location: r,
                  suggested: s,
                  overrideProperties: a
                });
                else if (t === f.CodedLinkType.TEMPLATE) {
                  let e = C.default.getGuildTemplate(o);
                  if (null == e || e.state === ed.GuildTemplateStates.RESOLVING) return;
                  u.default.trackWithMetadata(el.AnalyticEvents.GUILD_TEMPLATE_LINK_SENT, {
                    guild_template_code: o,
                    guild_template_name: e.name,
                    guild_template_description: e.description,
                    guild_template_guild_id: e.sourceGuildId
                  })
                } else if (t === f.CodedLinkType.BUILD_OVERRIDE);
                else if (t === f.CodedLinkType.MANUAL_BUILD_OVERRIDE);
                else if (t === f.CodedLinkType.EVENT);
                else if (t === f.CodedLinkType.CHANNEL_LINK);
                else if (t === f.CodedLinkType.APP_DIRECTORY_PROFILE)(0, E.trackAppDirectoryProfileEmbed)(o);
                else if (t === f.CodedLinkType.APP_DIRECTORY_STOREFRONT)(0, E.trackAppDirectoryProfileEmbed)(o, "storefront");
                else if (t === f.CodedLinkType.APP_DIRECTORY_STOREFRONT_SKU) {
                  let e = (0, I.parseStorefrontSkuCodedLink)(o);
                  null != e && (0, E.trackAppDirectoryProfileEmbed)(e.applicationId, "storefront_sku")
                } else if (t === f.CodedLinkType.ACTIVITY_BOOKMARK);
                else if (t === f.CodedLinkType.EMBEDDED_ACTIVITY_INVITE);
                else if (t === f.CodedLinkType.GUILD_PRODUCT);
                else if (t === f.CodedLinkType.SERVER_SHOP);
                else if (t === f.CodedLinkType.QUESTS_EMBED)(0, x.trackQuestEvent)({
                  questId: o,
                  event: el.AnalyticEvents.QUEST_LINK_SHARED,
                  trackGuildAndChannelMetadata: !0
                });
                else throw Error("Unknown coded link type: ".concat(t))
              })
            }({
              content: d,
              channelId: e,
              messageId: o.body.id,
              location: null != m ? m : "chat_input",
              suggested: N
            }), ! function(e, t, n, i, r) {
              (0, ei.findGiftCodes)(e).forEach(e => {
                let s = z.default.getChannel(t);
                null != s && u.default.trackWithMetadata(el.AnalyticEvents.GIFT_CODE_SENT, {
                  location: i,
                  gift_code: e,
                  guild_id: s.getGuildId(),
                  channel_id: s.id,
                  channel_type: s.type,
                  message_id: n,
                  automatic_send: r
                })
              })
            }(d, e, o.body.id, null != m ? m : "chat_input", !!n.isGiftLinkSentOnBehalfOfUser), t(o)
          } else {
            var h;
            ec.log("Failed to send message", {
              hasErr: o.hasErr,
              status: o.status,
              code: null === (h = o.body) || void 0 === h ? void 0 : h.code,
              error: o.err
            });
            let t = !1;
            if (o.hasErr) "ABORTED" === o.err.code && (t = !0);
            else if (o.status >= 400 && o.status < 500 && o.body) {
              if (o.body.code === el.AbortCodes.SLOWMODE_RATE_LIMITED) {
                let t = o.body.retry_after;
                null != t && t > 0 && a.default.dispatch({
                  type: "SLOWMODE_SET_COOLDOWN",
                  channelId: e,
                  slowmodeType: $.SlowmodeType.SendMessage,
                  cooldownMs: t * et.default.Millis.SECOND
                })
              } else p.AUTOMOD_ERROR_CODES.has(o.body.code) ? a.default.dispatch({
                type: "MESSAGE_SEND_FAILED_AUTOMOD",
                messageData: q,
                errorResponseBody: {
                  code: o.body.code,
                  message: o.body.message
                }
              }) : o.body.code === el.AbortCodes.POGGERMODE_TEMPORARILY_DISABLED ? a.default.dispatch({
                type: "POGGERMODE_TEMPORARILY_DISABLED"
              }) : null != b || W || eh.sendClydeError(e, o.body.code)
            }
            t ? eh.deleteMessage(e, Q, !0) : (a.default.dispatch({
              type: "MESSAGE_SEND_FAILED",
              messageId: Q,
              channelId: e,
              shouldNotify: !0
            }), (0, U.logMessageSendFailure)({
              failureCode: o.hasErr ? void 0 : o.status,
              errorMessage: o.hasErr ? o.err.message : void 0
            }), D.MessageSendFailureExperiment.getCurrentConfig({
              location: "MessageActionCreators"
            }).enabled && l.default.cancelPendingSendRequests(e).forEach(e => {
              ec.log("Cancelling pending message", e.nonce), a.default.dispatch({
                type: "MESSAGE_SEND_FAILED",
                messageId: e.nonce,
                channelId: e.channelId
              })
            })), i(o)
          }
        }, o)
      })
    },
    startEditMessage(e, t, n, i) {
      a.default.dispatch({
        type: "MESSAGE_START_EDIT",
        channelId: e,
        messageId: t,
        content: n,
        source: i
      })
    },
    updateEditMessage(e, t, n) {
      a.default.dispatch({
        type: "MESSAGE_UPDATE_EDIT",
        channelId: e,
        textValue: t,
        richValue: n
      })
    },
    endEditMessage(e, t) {
      a.default.dispatch({
        type: "MESSAGE_END_EDIT",
        channelId: e,
        response: t
      })
    },
    async editMessage(e, t, n) {
      let {
        content: i
      } = n;
      await Y.default.unarchiveThreadIfNecessary(e);
      let r = function(e, t) {
          let n = Q.default.getMessage(e, t);
          if (null == n || n.type !== el.MessageTypes.REPLY) return;
          let i = V.default.getMessageByReference(n.messageReference);
          if (i.state === V.ReferencedMessageState.LOADED) {
            if (!n.mentions.includes(i.message.author.id)) return {
              parse: Object.values(el.AllowedMentionTypes),
              replied_user: !1
            }
          }
        }(e, t),
        o = {
          channelId: e,
          messageId: t,
          content: i,
          allowed_mentions: r
        };
      l.default.enqueue({
        type: l.MessageDataType.EDIT,
        message: o
      }, n => {
        let i = !n.hasErr && p.AUTOMOD_ERROR_CODES.has(n.body.code);
        if (i) {
          let e = {
            type: l.MessageDataType.EDIT,
            message: o
          };
          a.default.dispatch({
            type: "MESSAGE_EDIT_FAILED_AUTOMOD",
            messageData: e,
            errorResponseBody: {
              code: n.body.code,
              message: n.body.message
            }
          })
        }
        n.hasErr ? s.AccessibilityAnnouncer.announce(e_.default.Messages.A11Y_ANNOUNCEMENT_MESSAGE_EDITED_FAILED) : i ? s.AccessibilityAnnouncer.announce(e_.default.Messages.A11Y_ANNOUNCEMENT_MESSAGE_EDITED_AUTOMOD_BLOCKED) : s.AccessibilityAnnouncer.announce(e_.default.Messages.A11Y_ANNOUNCEMENT_MESSAGE_EDITED), eh.endEditMessage(e, n.hasErr ? void 0 : n), eh.focusMessage({
          channelId: e,
          messageId: t
        })
      })
    },
    async suppressEmbeds(e, t) {
      await Y.default.unarchiveThreadIfNecessary(e), r.HTTP.patch({
        url: el.Endpoints.MESSAGE(e, t),
        body: {
          flags: el.MessageFlags.SUPPRESS_EMBEDS
        },
        oldFormErrors: !0
      })
    },
    async patchMessageAttachments(e, t, n) {
      await Y.default.unarchiveThreadIfNecessary(e), r.HTTP.patch({
        url: el.Endpoints.MESSAGE(e, t),
        body: {
          attachments: n
        },
        oldFormErrors: !0
      })
    },
    async deleteMessage(e, t) {
      let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = () => {
          a.default.dispatch({
            type: "MESSAGE_DELETE",
            id: t,
            channelId: e
          }).then(() => {
            s.AccessibilityAnnouncer.announce(e_.default.Messages.A11Y_ANNOUNCEMENT_MESSAGE_DELETED)
          })
        };
      n ? i() : (await Y.default.unarchiveThreadIfNecessary(e), r.HTTP.del({
        url: el.Endpoints.MESSAGE(e, t),
        oldFormErrors: !0
      }).then(() => {
        i()
      }));
      let o = Q.default.getMessage(e, t);
      (null == o ? void 0 : o.type) === el.MessageTypes.GUILD_INVITE_REMINDER && (0, b.trackGuildInviteNotificationDismissed)()
    },
    dismissAutomatedMessage(e) {
      null != e.loggingName && u.default.trackWithMetadata(el.AnalyticEvents.AUTOMATED_MESSAGE_DISMISSED, {
        message_name: e.loggingName,
        message_author: e.author.username
      }), this.deleteMessage(e.channel_id, e.id, !0)
    },
    revealMessage(e, t) {
      a.default.dispatch({
        type: "MESSAGE_REVEAL",
        channelId: e,
        messageId: t
      })
    },
    crosspostMessage: (e, t) => r.HTTP.post({
      url: el.Endpoints.MESSAGE_CROSSPOST(e, t),
      oldFormErrors: !0
    }).catch(e => {
      let t;
      t = 429 === e.status ? e_.default.Messages.PUBLISH_FOLLOWED_NEWS_FAIL_BODY.format({
        retryAfter: Math.floor(e.body.retry_after / 60)
      }) : e_.default.Messages.PUBLISH_FOLLOWED_NEWS_GENERIC_BODY, eo.default.show({
        title: e_.default.Messages.PUBLISH_FOLLOWED_NEWS_FAIL_TITLE,
        body: t,
        confirmText: e_.default.Messages.OKAY
      })
    }),
    trackInvite: ef
  };
t.default = eh