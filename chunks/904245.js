"use strict";
n.r(t), n("411104"), n("627341"), n("47120"), n("789020");
var i = n("278074"),
  r = n("873546"),
  s = n("544891"),
  a = n("780384"),
  o = n("570140"),
  l = n("89892"),
  u = n("673750"),
  d = n("367907"),
  _ = n("287328"),
  c = n("86670"),
  E = n("685736"),
  I = n("970606"),
  T = n("960904"),
  f = n("830121"),
  S = n("710845"),
  h = n("163268"),
  A = n("38618"),
  m = n("687516"),
  N = n("539573"),
  p = n("826581"),
  O = n("409059"),
  C = n("264229"),
  R = n("366980"),
  g = n("287925"),
  L = n("779832"),
  v = n("459618"),
  D = n("541288"),
  M = n("3148"),
  y = n("48854"),
  P = n("785359"),
  U = n("646504"),
  b = n("64078"),
  G = n("351780"),
  w = n("79390"),
  k = n("643266"),
  B = n("617136");
n("807092");
var V = n("869765"),
  x = n("926491"),
  F = n("467798"),
  H = n("346479"),
  Y = n("218543"),
  j = n("199902"),
  W = n("314897"),
  K = n("592125");
n("323873");
var z = n("701190"),
  Z = n("375954"),
  X = n("496675"),
  Q = n("158776"),
  q = n("306680"),
  J = n("944486"),
  $ = n("914010"),
  ee = n("300429"),
  et = n("594174"),
  en = n("626135"),
  ei = n("70956"),
  er = n("630388"),
  es = n("669079"),
  ea = n("63063"),
  eo = n("74538"),
  el = n("709054"),
  eu = n("668781"),
  ed = n("981631"),
  e_ = n("176505"),
  ec = n("58346"),
  eE = n("689938");
let eI = new S.default("MessageActionCreators"),
  eT = new S.default("MessageQueue"),
  ef = !1;
class eS {
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

function eh(e) {
  let {
    inviteKey: t,
    channelId: n,
    messageId: i,
    location: r,
    suggested: s = null,
    overrideProperties: a = {}
  } = e, o = (0, C.parseExtraDataFromInviteKey)(t), l = K.default.getChannel(n);
  if (null != l) {
    let e = null;
    l.isMultiUserDM() ? e = ed.LoggingInviteTypes.GDM_INVITE : !l.isPrivate() && (e = ed.LoggingInviteTypes.SERVER_INVITE);
    let n = {},
      _ = z.default.getInvite(t);
    if (null != _ && _.state === ed.InviteStates.RESOLVED && null != _.channel) {
      var u;
      let t = _.channel;
      n.invite_channel_id = t.id, n.invite_guild_id = null === (u = _.guild) || void 0 === u ? void 0 : u.id, n.invite_channel_type = t.type, null != _.inviter && (n.invite_inviter_id = _.inviter.id);
      let i = j.default.getLastActiveStream();
      if (null != i && i.channelId === t.id) {
        e = ed.LoggingInviteTypes.STREAM, n.destination_user_id = i.ownerId;
        let t = (0, m.getStreamerApplication)(i, Q.default);
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
      send_type: ed.SendTypes.DIRECT_MESSAGE,
      invite_guild_scheduled_event_id: o.guildScheduledEventId,
      ...a
    }, d.default.trackWithMetadata(ed.AnalyticEvents.INVITE_SENT, n)
  } else {
    let e = {},
      n = z.default.getInvite(t);
    null != n && n.state === ed.InviteStates.RESOLVED && null != n.inviter && (e.invite_inviter_id = n.inviter.id, e = {
      ...e,
      location: r,
      invite_type: ed.LoggingInviteTypes.FRIEND_INVITE,
      invite_code: o.baseCode,
      message_id: i,
      send_type: ed.SendTypes.DIRECT_MESSAGE,
      invite_guild_scheduled_event_id: o.guildScheduledEventId,
      ...a
    }, d.default.trackWithMetadata(ed.AnalyticEvents.INVITE_SENT, e))
  }
}
let eA = {
    [ed.AbortCodes.EMAIL_VERIFICATION_REQUIRED]: {
      messageName: "BOT_REQUIRES_EMAIL_VERIFICATION",
      messageGetter: () => eE.default.Messages.BOT_REQUIRES_EMAIL_VERIFICATION
    },
    [ed.AbortCodes.INVALID_MESSAGE_SEND_USER]: {
      messageName: "BOT_DM_SEND_FAILED_WITH_HELP_LINK",
      messageGetter: () => eE.default.Messages.BOT_DM_SEND_FAILED_WITH_HELP_LINK.format({
        helpUrl: ea.default.getArticleURL(ed.HelpdeskArticles.DM_COULD_NOT_BE_DELIVERED)
      })
    },
    [ed.AbortCodes.RATE_LIMIT_DM_OPEN]: {
      messageName: "BOT_DM_RATE_LIMITED",
      messageGetter: () => eE.default.Messages.BOT_DM_RATE_LIMITED
    },
    [ed.AbortCodes.SEND_MESSAGE_TEMPORARILY_DISABLED]: {
      messageName: "BOT_DM_SEND_MESSAGE_TEMPORARILY_DISABLED",
      messageGetter: () => eE.default.Messages.BOT_DM_SEND_MESSAGE_TEMPORARILY_DISABLED
    },
    [ed.AbortCodes.SLOWMODE_RATE_LIMITED]: {
      messageName: "BOT_DM_SEND_MESSAGE_TEMPORARILY_DISABLED",
      messageGetter: () => eE.default.Messages.BOT_DM_SEND_MESSAGE_TEMPORARILY_DISABLED
    }
  },
  em = {
    receiveMessage(e, t) {
      let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      o.default.dispatch({
        type: "MESSAGE_CREATE",
        channelId: e,
        message: t,
        optimistic: n,
        sendMessageOptions: i,
        isPushNotification: !1
      })
    },
    sendBotMessage(e, t, n, i) {
      null != n && d.default.trackWithMetadata(ed.AnalyticEvents.AUTOMATED_MESSAGE_RECEIVED, {
        message_author: "Clyde",
        message_name: n
      }), em.receiveMessage(e, (0, M.createBotMessage)({
        messageId: i,
        channelId: e,
        content: t,
        loggingName: n
      }))
    },
    sendClydeError(e) {
      let t, n, i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        r = K.default.getChannel(e);
      null != r && (i === ed.AbortCodes.SLOWMODE_RATE_LIMITED ? (t = eE.default.Messages.CHANNEL_SLOWMODE_DESC.format({
        seconds: r.rateLimitPerUser
      }), n = "SLOWMODE_RATE_LIMITED") : i === ed.AbortCodes.INVALID_MESSAGE_SEND_USER ? (t = eE.default.Messages.BOT_DM_SEND_FAILED_WITH_HELP_LINK.format({
        helpUrl: ea.default.getArticleURL(ed.HelpdeskArticles.DM_COULD_NOT_BE_DELIVERED)
      }), n = "INVALID_MESSAGE_SEND_USER") : i === ed.AbortCodes.TOO_MANY_THREADS ? (t = r.isForumLikeChannel() || r.isForumPost() ? eE.default.Messages.BOT_DM_TOO_MANY_POSTS : eE.default.Messages.BOT_DM_TOO_MANY_THREADS, n = "TOO_MANY_THREADS") : i === ed.AbortCodes.TOO_MANY_ANNOUNCEMENT_THREADS ? (t = eE.default.Messages.BOT_DM_TOO_MANY_ANNOUNCEMENT_THREADS, n = "TOO_MANY_ANNOUNCEMENT_THREADS") : i === ed.AbortCodes.HARMFUL_LINK_MESSAGE_BLOCKED ? (t = eE.default.Messages.HARMFUL_LINK_MESSAGE_BLOCKED_ERROR.format({
        helpUrl: ed.MarketingURLs.HARMFUL_LINKS
      }), n = "HARMFUL_LINK_MESSAGE_BLOCKED") : i in eA ? (n = eA[i].messageName, t = eA[i].messageGetter()) : (t = eE.default.Messages.BOT_DM_SEND_FAILED_WITH_HELP_LINK.format({
        helpUrl: ea.default.getArticleURL(ed.HelpdeskArticles.DM_COULD_NOT_BE_DELIVERED)
      }), n = "SEND_FAILED (".concat(i, ")")), em.sendBotMessage(e, t, n))
    },
    sendExplicitMediaClydeError(e, t, n) {
      let r = K.default.getChannel(e);
      if (null == r) return;
      let {
        message: s,
        messageName: a
      } = (0, i.match)({
        isDM: r.isDM(),
        isGDM: r.isGroupDM()
      }).with({
        isDM: !0
      }, () => ({
        message: eE.default.Messages.SENDER_BLOCKED_MEDIA_BOT_DMS_MESSAGE,
        messageName: "BOT_DM_EXPLICIT_CONTENT"
      })).with({
        isDM: !1,
        isGDM: !0
      }, () => ({
        message: eE.default.Messages.SENDER_BLOCKED_MEDIA_BOT_DMS_MESSAGE,
        messageName: "BOT_GDM_EXPLICIT_CONTENT"
      })).otherwise(() => ({
        message: eE.default.Messages.SENDER_BLOCKED_MEDIA_BOT_GUILD_MESSAGE,
        messageName: "BOT_GUILD_EXPLICIT_CONTENT"
      })), l = (0, y.createNonce)();
      em.sendBotMessage(e, s, a, l), (0, h.trackMediaRedactionAction)({
        action: h.TrackMediaRedactionActionType.EXPLICIT_MEDIA_FALSE_POSITIVE_CLYDE_MESSAGE_SENT,
        messageId: l,
        channelId: e,
        context: n
      }), null != t && t.length > 0 && o.default.dispatch({
        type: "MESSAGE_EXPLICIT_CONTENT_FP_CREATE",
        messageId: l,
        channelId: e,
        attachments: t
      })
    },
    truncateMessages(e, t, n) {
      o.default.dispatch({
        type: "TRUNCATE_MESSAGES",
        channelId: e,
        truncateBottom: t,
        truncateTop: n
      })
    },
    clearChannel(e) {
      o.default.dispatch({
        type: "CLEAR_MESSAGES",
        channelId: e
      })
    },
    jumpToPresent(e, t) {
      em.trackJump(e, null, "Present");
      let n = {
        present: !0
      };
      Z.default.hasPresent(e) ? o.default.dispatch({
        type: "LOAD_MESSAGES_SUCCESS_CACHED",
        jump: n,
        channelId: e,
        limit: t
      }) : em.fetchMessages({
        channelId: e,
        limit: t,
        jump: n
      })
    },
    trackJump(e, t, n, i) {
      d.default.trackWithMetadata(ed.AnalyticEvents.JUMP, {
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
      return "string" == typeof s && em.trackJump(t, n, s, a), em.fetchMessages({
        channelId: t,
        limit: ed.MAX_MESSAGES_FOR_JUMP,
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
      em.fetchMessages({
        channelId: t,
        limit: ed.MAX_MESSAGES_FOR_JUMP,
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
        limit: r,
        jump: a,
        focus: u,
        isPreload: d,
        skipLocalFetch: _,
        truncate: c
      } = e, E = K.default.getChannel(t), I = A.default.isConnectedOrOverlay(), T = Date.now();
      if (null != E && E.type === ed.ChannelTypes.GUILD_STORE) return !1;
      if (t === e_.FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID) return;
      if (eI.log("Fetching messages for ".concat(t, " between ").concat(n, " and ").concat(i, ". jump=").concat(JSON.stringify(a))), em._tryFetchMessagesCached({
          channelId: t,
          before: n,
          after: i,
          limit: r,
          jump: a,
          focus: u,
          truncate: c
        })) return;
      Y.default.fetchMessages.recordStart();
      let f = null != a ? a : void 0;
      null == f && null != u && (f = {
        ...u
      });
      let S = l.default.getOrCreate(t).loadStart(f);
      l.default.commit(S), o.default.dispatch({
        type: "LOAD_MESSAGES"
      });
      let h = null == f ? void 0 : f.messageId,
        m = new eS;
      return !_ && this.fetchLocalMessages(t, n, i, r, m), s.HTTP.get({
        url: ed.Endpoints.MESSAGES(t),
        query: {
          before: n,
          after: i,
          limit: r,
          around: h,
          preload: d
        },
        retries: 2,
        oldFormErrors: !0
      }).then(e => (Y.default.fetchMessages.recordEnd(), Y.default.dispatchMessages.measure(() => {
        let s = e.body,
          l = null != n,
          u = null != i,
          d = null == n && null == i,
          _ = null != h || s.length === r && (l || d),
          E = null != h || u && s.length === r;
        if (null != h) {
          let e = Math.floor(r / 2),
            n = [h, ...s.map(e => {
              let {
                id: t
              } = e;
              return t
            })].filter((e, t, n) => n.indexOf(e) === t).sort(el.default.compare).indexOf(h);
          if (n < e && (_ = !1), s.length - n < e && (E = !1), E && s.length > 0) {
            let e = q.default.lastMessageId(t);
            s[0].id === e && (E = !1)
          }
        }
        eI.log("Fetched ".concat(s.length, " messages for ").concat(t, " isBefore:").concat(l, " isAfter:").concat(u)), m.markComplete(), o.default.dispatch({
          type: "LOAD_MESSAGES_SUCCESS",
          channelId: t,
          messages: s,
          isBefore: l,
          isAfter: u,
          hasMoreBefore: _,
          hasMoreAfter: E,
          limit: r,
          jump: a,
          isStale: !I || A.default.lastTimeConnectedChanged() >= T,
          truncate: c
        })
      }), !0), () => (eI.log("Failed to fetch messages for ".concat(t)), o.default.dispatch({
        type: "LOAD_MESSAGES_FAILURE",
        channelId: t
      }), !1))
    },
    async fetchLocalMessages(e, t, n, i, r) {
      let s = K.default.getBasicChannel(e),
        a = l.default.getOrCreate(e),
        u = _.default.database();
      if (null == u || null == s || null != t || null != n) {
        Y.default.addLocalMessages(e, -1);
        return
      }
      if (a.ready && !a.cached) {
        Y.default.addLocalMessages(e, -2);
        return
      }
      let d = await (0, c.tryLoadAsync)(() => E.default.load(u, e, i));
      if (null == d) {
        Y.default.addLocalMessages(e, -3);
        return
      }
      if (eI.log("fetched ".concat(d.messages.length, " messages from local database (channel_id: ").concat(e, ", remote_fetch_completed: ").concat(r.completed, ")")), Y.default.addLocalMessages(e, d.messages.length), !r.completed && d.messages.length > 0) {
        let t = d.messages.length >= i && d.connectionId === A.default.lastTimeConnectedChanged();
        o.default.dispatch({
          type: "LOCAL_MESSAGES_LOADED",
          guildId: s.guild_id,
          channelId: e,
          users: d.users,
          members: d.members,
          messages: d.messages,
          stale: !t
        })
      }
    },
    async fetchNewLocalMessages(e, t) {
      var n;
      let i = K.default.getBasicChannel(e),
        r = _.default.database();
      if (null == r || null == i) return;
      let s = l.default.getOrCreate(e);
      if (s.hasMoreAfter) return;
      let a = await (0, c.tryLoadAsync)(() => E.default.load(r, e, t));
      if (null == a) return;
      let u = null === (n = (s = l.default.getOrCreate(e)).last()) || void 0 === n ? void 0 : n.id,
        d = null == u ? a.messages : a.messages.filter(e => el.default.compare(e.id, u) > 0);
      eI.log("Fetched ".concat(a.messages.length, " messages from the cache after foregrounding. ").concat(d.length, " are new")), 0 !== d.length && o.default.dispatch({
        type: "LOCAL_MESSAGES_LOADED",
        guildId: i.guild_id,
        channelId: e,
        users: a.users,
        members: a.members,
        messages: d,
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
        focus: a,
        truncate: l
      } = e, u = Z.default.getMessages(t);
      if (u.cached || !u.ready) return !1;
      if ((null == s ? void 0 : s.messageId) != null || (null == a ? void 0 : a.messageId) != null) {
        if ((null == s ? void 0 : s.messageId) != null && u.has(s.messageId, !1)) return o.default.dispatch({
          type: "LOAD_MESSAGES_SUCCESS_CACHED",
          channelId: t,
          jump: s,
          limit: r,
          truncate: l
        }), !0;
        if ((null == a ? void 0 : a.messageId) != null) {
          if (u.has(a.messageId, !1)) return o.default.dispatch({
            type: "LOAD_MESSAGES_SUCCESS_CACHED",
            channelId: t,
            focus: a,
            limit: r,
            truncate: l
          }), !0;
          s = {
            ...a
          }
        }
        let e = (null == s ? void 0 : s.messageId) != null ? el.default.extractTimestamp(null == s ? void 0 : s.messageId) : 0,
          n = u.first(),
          i = u.last();
        if (!u.hasMoreBefore && null != n && el.default.extractTimestamp(n.id) >= e || !u.hasMoreAfter && null != i && el.default.extractTimestamp(i.id) <= e || null != n && null != i && el.default.extractTimestamp(n.id) < e && el.default.extractTimestamp(i.id) > e) return o.default.dispatch({
          type: "LOAD_MESSAGES_SUCCESS_CACHED",
          channelId: t,
          jump: s,
          limit: ed.MAX_MESSAGES_FOR_JUMP
        }), !0
      } else if (null != n && u.hasBeforeCached(n)) return o.default.dispatch({
        type: "LOAD_MESSAGES_SUCCESS_CACHED",
        channelId: t,
        before: n,
        limit: r,
        truncate: l
      }), !0;
      else if (null != i && u.hasAfterCached(i)) return o.default.dispatch({
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
      let s = await (0, k.default)(e);
      if (null != s) return em.sendMessage(s, t, i, r);
      let a = () => em._sendMessage(e, t, r),
        o = g.LocalMessageBackgroundSendingExperiment.getCurrentConfig({
          location: "8e1e29_1"
        }).enableBackgroundSending ? L.default.backgroundify(a, void 0) : a,
        l = null !== (n = r.nonce) && void 0 !== n ? n : (0, y.createNonce)();
      return (r = {
        ...r,
        nonce: l
      }, v.default.recordMessageSendAttempt(e, l), Z.default.isReady(e)) ? o() : i && e !== e_.FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID ? (eT.info("Waiting for channel ".concat(e, " to be ready before sending.")), new Promise((t, n) => {
        Z.default.whenReady(e, () => {
          eT.info("Channel ".concat(e, " is ready for sending now.")), o().then(t, n)
        })
      })) : o()
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
          parse: Object.values(ed.AllowedMentionTypes),
          replied_user: !1
        }
      }
    },
    sendInvite: (e, t, n, i) => em._sendMessage(e, {
      content: (0, R.default)(t),
      tts: !1,
      validNonShortcutEmojis: [],
      invalidEmojis: []
    }, {
      location: n,
      suggestedInvite: null != i ? i : void 0
    }),
    sendActivityBookmark: (e, t, n, i) => em._sendMessage(e, {
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
      return em._sendMessage(e, {
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
          allowedMentions: r
        } = n;
      return s.HTTP.post({
        url: ed.Endpoints.MESSAGES_GREET(e),
        body: {
          sticker_ids: [t],
          allowed_mentions: r,
          message_reference: i
        },
        oldFormErrors: !0
      }).then(n => (D.default.donateSentMessage(n.body.content, e), em.receiveMessage(e, n.body), o.default.dispatch({
        type: "STICKER_TRACK_USAGE",
        stickerIds: [t]
      }), n), t => {
        throw eI.log("Failed to send greeting"), 429 !== t.status && em.sendClydeError(e, t.body.code), o.default.dispatch({
          type: "MESSAGE_SEND_FAILED",
          messageId: t.body.id,
          channelId: e
        }), t
      })
    },
    sendPollMessage(e, t) {
      let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      return em._sendMessage(e, {
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
      var i, s;
      let a = (0, k.default)(e);
      if (null != a) return eT.info("Converting channel to a private channel"), a.then(e => {
        eT.info("Finished converting channel to a private channel"), em._sendMessage(e, t, n)
      });
      let l = t.content,
        {
          invalidEmojis: _,
          validNonShortcutEmojis: c,
          tts: E = !1
        } = t,
        {
          activityAction: S,
          location: h,
          suggestedInvite: A,
          stickerIds: m,
          messageReference: C,
          allowedMentions: R,
          poll: g
        } = n,
        L = null !== (i = n.flags) && void 0 !== i ? i : 0,
        [U, V] = (0, F.default)(l);
      if (U && (l = V, L = (0, er.addFlag)(L, ed.MessageFlags.SUPPRESS_NOTIFICATIONS)), "" === l && null == S && null == m && null == g) return Promise.resolve();
      let H = null != C ? ed.MessageTypes.REPLY : ed.MessageTypes.DEFAULT,
        Y = null !== (s = n.nonce) && void 0 !== s ? s : (0, y.createNonce)();
      if (!1 !== n.eagerDispatch) {
        let t = (0, M.default)({
          channelId: e,
          content: l,
          tts: E,
          type: H,
          messageReference: C,
          allowedMentions: R,
          flags: 0 !== L ? L : void 0,
          nonce: Y,
          poll: (0, w.createPollServerDataFromCreateRequest)(g)
        });
        (0, b.updateComboOnMessageSend)(e, t.id), null != m && (t.sticker_items = m.map(e => x.default.getStickerById(e)).filter(e => null != e)), em.receiveMessage(e, t, !0, n)
      }
      if (!ef && null != _ && _.length > 0) {
        let t, n;
        ef = !0;
        let i = et.default.getCurrentUser();
        _.some(e => e.animated) && !eo.default.canUseAnimatedEmojis(i) ? (t = eE.default.Messages.INVALID_ANIMATED_EMOJI_BODY_UPGRADE, n = "INVALID_ANIMATED_EMOJI_BODY") : X.default.canWithPartialContext(ed.Permissions.USE_EXTERNAL_EMOJIS, {
          channelId: e
        }) ? (t = eE.default.Messages.INVALID_EXTERNAL_EMOJI_BODY_UPGRADE, n = "INVALID_EXTERNAL_EMOJI_BODY_UPGRADE") : (t = eE.default.Messages.INVALID_EXTERNAL_EMOJI_BODY, n = "INVALID_EXTERNAL_EMOJI_BODY"), em.sendBotMessage(e, t, n)
      }
      let j = {
        type: u.MessageDataType.SEND,
        message: {
          channelId: e,
          content: l,
          nonce: Y,
          tts: E,
          message_reference: C,
          allowed_mentions: R,
          flags: L
        }
      };
      if (null != S) {
        let e = S.type === ed.ActivityActionTypes.JOIN_REQUEST ? null == S ? void 0 : S.activity.session_id : W.default.getSessionId();
        if (null != e) {
          let t = {
              type: S.type,
              session_id: e
            },
            {
              activity: n
            } = S;
          null != n.party && null != n.party.id && (t.party_id = n.party.id), j.message.application_id = n.application_id, j.message.activity = t
        }
      }
      return null != g && (j.message.poll = g), null != m && (j.message.sticker_ids = m), G.default.isEnabled() && (j.message.has_poggermode_enabled = !0), new Promise((t, i) => {
        let s = Date.now(),
          a = u.default.length,
          _ = Math.floor(1e4 * Math.random());
        eT.info("Queueing message to be sent LogId:".concat(_)), u.default.enqueue(j, u => {
          let _ = Date.now() - s;
          if (u.ok) {
            D.default.donateSentMessage(l, e), em.receiveMessage(e, u.body, !0, {
              sendAnalytics: {
                duration: _,
                queueSize: a
              },
              poll: g
            });
            let i = el.default.cast(e),
              s = p.default.getRequest(i);
            if (null != s) {
              let {
                guildId: t,
                userId: n,
                applicationStatus: i
              } = s;
              (0, I.trackClanSendInterviewMessage)({
                guildId: t,
                channelId: e,
                messageId: u.body.id,
                joinRequestStatus: i,
                joinRequestUserId: n
              })
            }
            v.default.recordMessageSendApiResponse(Y), o.default.dispatch({
              type: "SLOWMODE_RESET_COOLDOWN",
              slowmodeType: ee.SlowmodeType.SendMessage,
              channelId: e
            }), o.default.dispatch({
              type: "EMOJI_TRACK_USAGE",
              emojiUsed: c
            }), o.default.dispatch({
              type: "STICKER_TRACK_USAGE",
              stickerIds: m
            }), o.default.dispatch({
              type: "LOCAL_MESSAGE_CREATE",
              message: {
                channel_id: e,
                author: et.default.getCurrentUser()
              }
            }), ! function(e) {
              let {
                content: t,
                channelId: n,
                messageId: i,
                location: s,
                suggested: a = null,
                overrideProperties: o = {}
              } = e;
              (0, f.default)(t).forEach(e => {
                let {
                  type: t,
                  code: l
                } = e;
                if (t === T.CodedLinkType.INVITE) eh({
                  inviteKey: l,
                  channelId: n,
                  messageId: i,
                  location: s,
                  suggested: a,
                  overrideProperties: o
                });
                else if (t === T.CodedLinkType.TEMPLATE) {
                  let e = O.default.getGuildTemplate(l);
                  if (null == e || e.state === ec.GuildTemplateStates.RESOLVING) return;
                  d.default.trackWithMetadata(ed.AnalyticEvents.GUILD_TEMPLATE_LINK_SENT, {
                    guild_template_code: l,
                    guild_template_name: e.name,
                    guild_template_description: e.description,
                    guild_template_guild_id: e.sourceGuildId
                  })
                } else if (t === T.CodedLinkType.BUILD_OVERRIDE);
                else if (t === T.CodedLinkType.MANUAL_BUILD_OVERRIDE);
                else if (t === T.CodedLinkType.EVENT);
                else if (t === T.CodedLinkType.CHANNEL_LINK);
                else if (t === T.CodedLinkType.APP_DIRECTORY_PROFILE) en.default.track(ed.AnalyticEvents.APP_DIRECTORY_PROFILE_EMBED_SENT, {
                  application_id: l,
                  device_platform: r.isMobile ? "mobile_web" : "desktop_web",
                  guild_id: $.default.getGuildId(),
                  channel_id: J.default.getChannelId()
                });
                else if (t === T.CodedLinkType.ACTIVITY_BOOKMARK);
                else if (t === T.CodedLinkType.EMBEDDED_ACTIVITY_INVITE);
                else if (t === T.CodedLinkType.GUILD_PRODUCT);
                else if (t === T.CodedLinkType.SERVER_SHOP);
                else if (t === T.CodedLinkType.QUESTS_EMBED)(0, B.trackQuestEvent)({
                  questId: l,
                  event: ed.AnalyticEvents.QUEST_LINK_SHARED,
                  trackGuildAndChannelMetadata: !0
                });
                else throw Error("Unknown coded link type: ".concat(t))
              })
            }({
              content: l,
              channelId: e,
              messageId: u.body.id,
              location: null != h ? h : "chat_input",
              suggested: A
            }), ! function(e, t, n, i, r) {
              (0, es.findGiftCodes)(e).forEach(e => {
                let s = K.default.getChannel(t);
                null != s && d.default.trackWithMetadata(ed.AnalyticEvents.GIFT_CODE_SENT, {
                  location: i,
                  gift_code: e,
                  guild_id: s.getGuildId(),
                  channel_id: s.id,
                  channel_type: s.type,
                  message_id: n,
                  automatic_send: r
                })
              })
            }(l, e, u.body.id, null != h ? h : "chat_input", !!n.isGiftLinkSentOnBehalfOfUser), t(u)
          } else {
            var E;
            eI.log("Failed to send message", {
              hasErr: u.hasErr,
              status: u.status,
              code: null === (E = u.body) || void 0 === E ? void 0 : E.code,
              error: u.err
            });
            let t = !1;
            if (u.hasErr) "ABORTED" === u.err.code && (t = !0);
            else if (u.status >= 400 && u.status < 500 && u.body) {
              if (u.body.code === ed.AbortCodes.SLOWMODE_RATE_LIMITED) {
                let t = u.body.retry_after;
                null != t && t > 0 && o.default.dispatch({
                  type: "SLOWMODE_SET_COOLDOWN",
                  channelId: e,
                  slowmodeType: ee.SlowmodeType.SendMessage,
                  cooldownMs: t * ei.default.Millis.SECOND
                })
              } else N.AUTOMOD_ERROR_CODES.has(u.body.code) ? o.default.dispatch({
                type: "MESSAGE_SEND_FAILED_AUTOMOD",
                messageData: j,
                errorResponseBody: {
                  code: u.body.code,
                  message: u.body.message
                }
              }) : u.body.code === ed.AbortCodes.POGGERMODE_TEMPORARILY_DISABLED ? o.default.dispatch({
                type: "POGGERMODE_TEMPORARILY_DISABLED"
              }) : null != g || em.sendClydeError(e, u.body.code)
            }
            t ? em.deleteMessage(e, Y, !0) : (o.default.dispatch({
              type: "MESSAGE_SEND_FAILED",
              messageId: Y,
              channelId: e
            }), (0, P.logMessageSendFailure)({
              failureCode: u.hasErr ? void 0 : u.status,
              errorMessage: u.hasErr ? u.err.message : void 0
            })), i(u)
          }
        }, _)
      })
    },
    startEditMessage(e, t, n, i) {
      o.default.dispatch({
        type: "MESSAGE_START_EDIT",
        channelId: e,
        messageId: t,
        content: n,
        source: i
      })
    },
    updateEditMessage(e, t, n) {
      o.default.dispatch({
        type: "MESSAGE_UPDATE_EDIT",
        channelId: e,
        textValue: t,
        richValue: n
      })
    },
    endEditMessage(e, t) {
      o.default.dispatch({
        type: "MESSAGE_END_EDIT",
        channelId: e,
        response: t
      })
    },
    async editMessage(e, t, n) {
      let {
        content: i
      } = n;
      await H.default.unarchiveThreadIfNecessary(e);
      let r = function(e, t) {
          let n = Z.default.getMessage(e, t);
          if (null == n || n.type !== ed.MessageTypes.REPLY) return;
          let i = V.default.getMessageByReference(n.messageReference);
          if (i.state === V.ReferencedMessageState.LOADED) {
            if (!n.mentions.includes(i.message.author.id)) return {
              parse: Object.values(ed.AllowedMentionTypes),
              replied_user: !1
            }
          }
        }(e, t),
        s = {
          channelId: e,
          messageId: t,
          content: i,
          allowed_mentions: r
        };
      u.default.enqueue({
        type: u.MessageDataType.EDIT,
        message: s
      }, n => {
        let i = !n.hasErr && N.AUTOMOD_ERROR_CODES.has(n.body.code);
        if (i) {
          let e = {
            type: u.MessageDataType.EDIT,
            message: s
          };
          o.default.dispatch({
            type: "MESSAGE_EDIT_FAILED_AUTOMOD",
            messageData: e,
            errorResponseBody: {
              code: n.body.code,
              message: n.body.message
            }
          })
        }
        n.hasErr ? a.AccessibilityAnnouncer.announce(eE.default.Messages.A11Y_ANNOUNCEMENT_MESSAGE_EDITED_FAILED) : i ? a.AccessibilityAnnouncer.announce(eE.default.Messages.A11Y_ANNOUNCEMENT_MESSAGE_EDITED_AUTOMOD_BLOCKED) : a.AccessibilityAnnouncer.announce(eE.default.Messages.A11Y_ANNOUNCEMENT_MESSAGE_EDITED), em.endEditMessage(e, n.hasErr ? void 0 : n), em.focusMessage({
          channelId: e,
          messageId: t
        })
      })
    },
    async suppressEmbeds(e, t) {
      await H.default.unarchiveThreadIfNecessary(e), s.HTTP.patch({
        url: ed.Endpoints.MESSAGE(e, t),
        body: {
          flags: ed.MessageFlags.SUPPRESS_EMBEDS
        },
        oldFormErrors: !0
      })
    },
    async patchMessageAttachments(e, t, n) {
      await H.default.unarchiveThreadIfNecessary(e), s.HTTP.patch({
        url: ed.Endpoints.MESSAGE(e, t),
        body: {
          attachments: n
        },
        oldFormErrors: !0
      })
    },
    async deleteMessage(e, t) {
      let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = () => {
          o.default.dispatch({
            type: "MESSAGE_DELETE",
            id: t,
            channelId: e
          }).then(() => {
            a.AccessibilityAnnouncer.announce(eE.default.Messages.A11Y_ANNOUNCEMENT_MESSAGE_DELETED)
          })
        };
      n ? i() : (await H.default.unarchiveThreadIfNecessary(e), s.HTTP.del({
        url: ed.Endpoints.MESSAGE(e, t),
        oldFormErrors: !0
      }).then(() => {
        i()
      }));
      let r = Z.default.getMessage(e, t);
      (null == r ? void 0 : r.type) === ed.MessageTypes.GUILD_INVITE_REMINDER && (0, U.trackGuildInviteNotificationDismissed)()
    },
    dismissAutomatedMessage(e) {
      null != e.loggingName && d.default.trackWithMetadata(ed.AnalyticEvents.AUTOMATED_MESSAGE_DISMISSED, {
        message_name: e.loggingName,
        message_author: e.author.username
      }), this.deleteMessage(e.channel_id, e.id, !0)
    },
    revealMessage(e, t) {
      o.default.dispatch({
        type: "MESSAGE_REVEAL",
        channelId: e,
        messageId: t
      })
    },
    crosspostMessage: (e, t) => s.HTTP.post({
      url: ed.Endpoints.MESSAGE_CROSSPOST(e, t),
      oldFormErrors: !0
    }).catch(e => {
      let t;
      t = 429 === e.status ? eE.default.Messages.PUBLISH_FOLLOWED_NEWS_FAIL_BODY.format({
        retryAfter: Math.floor(e.body.retry_after / 60)
      }) : eE.default.Messages.PUBLISH_FOLLOWED_NEWS_GENERIC_BODY, eu.default.show({
        title: eE.default.Messages.PUBLISH_FOLLOWED_NEWS_FAIL_TITLE,
        body: t,
        confirmText: eE.default.Messages.OKAY
      })
    }),
    trackInvite: eh
  };
t.default = em