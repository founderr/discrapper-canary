"use strict";
n.r(t), n.d(t, {
  default: function() {
    return _
  }
}), n("424973"), n("808653"), n("702976");
var i = n("866227"),
  s = n.n(i),
  r = n("666038"),
  a = n("584375"),
  o = n("875978"),
  l = n("432173"),
  u = n("568734"),
  d = n("773336"),
  c = n("49111");
class f extends r.default {
  isEdited() {
    return null != this.editedTimestamp
  }
  getChannelId() {
    return this.channel_id
  }
  getReaction(e) {
    return this.reactions.find(t => (0, l.emojiEquals)(t.emoji, e))
  }
  userHasReactedWithEmoji(e, t) {
    return this.reactions.some(n => {
      if ((0, l.emojiEquals)(n.emoji, e)) return t && n.me || !t && n.me_burst
    })
  }
  addReaction(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
      n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
      i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
      s = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : o.ReactionTypes.NORMAL,
      r = -1,
      u = this.reactions.map((u, c) => {
        if ((0, l.emojiEquals)(u.emoji, e)) {
          if (r = c, i) {
            if (t && u.me) return u;
            let e = t && u.me_burst ? u.burst_count : u.burst_count + 1,
              i = null != u.burst_colors && u.burst_colors.length > 0 ? u.burst_colors : n;
            u = {
              ...u,
              me_burst: !!t || u.me_burst,
              burst_count: e,
              count_details: {
                ...u.count_details,
                burst: e
              },
              burst_colors: i,
              themedBurstColors: (0, a.buildPlatformedThemedEmojiColorPalette)({
                colors: i,
                shouldProcessMobileColors: (0, d.isIOS)()
              })
            }
          } else if (s === o.ReactionTypes.VOTE) {
            var f, _;
            let e = null !== (_ = null === (f = u.count_details) || void 0 === f ? void 0 : f.vote) && void 0 !== _ ? _ : 0,
              n = t && u.me_vote ? e : e + 1;
            u = {
              ...u,
              count_details: {
                ...u.count_details,
                vote: n
              },
              me_vote: !!t || u.me_vote
            }
          } else {
            if (t && u.me_burst) return u;
            let e = t && u.me ? u.count : u.count + 1;
            u = {
              ...u,
              count: e,
              count_details: {
                ...u.count_details,
                normal: e
              },
              me: !!t || u.me
            }
          }
        }
        return u
      });
    return -1 === r && (i ? u.push({
      emoji: e,
      me: !1,
      me_burst: t,
      count: 0,
      count_details: {
        burst: 1,
        normal: 0
      },
      burst_count: 1,
      burst_colors: n,
      themedBurstColors: (0, a.buildPlatformedThemedEmojiColorPalette)({
        colors: null != n ? n : [],
        shouldProcessMobileColors: (0, d.isIOS)()
      })
    }) : s === o.ReactionTypes.VOTE ? u.push({
      emoji: e,
      me: !1,
      me_burst: !1,
      me_vote: t,
      count: 0,
      count_details: {
        burst: 0,
        normal: 0,
        vote: 1
      },
      burst_count: 0,
      burst_colors: []
    }) : u.push({
      emoji: e,
      me: t,
      me_burst: !1,
      count: 1,
      count_details: {
        burst: 0,
        normal: 1
      },
      burst_count: 0,
      burst_colors: []
    })), this.set("reactions", u)
  }
  addReactionBatch(e, t) {
    return e.reduce((e, n) => {
      let {
        users: i,
        emoji: s
      } = n;
      return i.reduce((e, n) => e.addReaction(s, n === t), e)
    }, this)
  }
  removeReaction(e) {
    var t, n, i, s;
    let r = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
      a = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
      u = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : o.ReactionTypes.NORMAL,
      d = -1,
      c = this.reactions.map((t, n) => {
        if ((0, l.emojiEquals)(t.emoji, e)) {
          if (a) {
            let e = r && !t.me_burst ? t.burst_count : t.burst_count - 1;
            t = {
              ...t,
              burst_count: e,
              me_burst: !r && t.me_burst,
              count_details: {
                ...t.count_details,
                burst: e
              }
            }
          } else if (u === o.ReactionTypes.VOTE) {
            var i, s;
            let e = null !== (s = null === (i = t.count_details) || void 0 === i ? void 0 : i.vote) && void 0 !== s ? s : 0,
              n = r && !t.me_vote ? e : e - 1;
            t = {
              ...t,
              count_details: {
                ...t.count_details,
                vote: n
              },
              me_vote: !r && t.me_vote
            }
          } else {
            let e = r && !t.me ? t.count : t.count - 1;
            t = {
              ...t,
              count: e,
              me: !r && t.me,
              count_details: {
                ...t.count_details,
                normal: e
              }
            }
          }
          d = n
        }
        return t
      }),
      {
        count: f,
        burst_count: _,
        count_details: h
      } = null !== (t = c[d]) && void 0 !== t ? t : {},
      g = null !== (n = null == h ? void 0 : h.normal) && void 0 !== n ? n : 0,
      m = null !== (i = null == h ? void 0 : h.burst) && void 0 !== i ? i : 0,
      E = null !== (s = null == h ? void 0 : h.vote) && void 0 !== s ? s : 0;
    return -1 !== d && f <= 0 && _ <= 0 && g <= 0 && m <= 0 && E <= 0 && c.splice(d, 1), this.set("reactions", c)
  }
  removeReactionsForEmoji(e) {
    return this.set("reactions", this.reactions.filter(t => !(0, l.emojiEquals)(t.emoji, e)))
  }
  isSystemDM() {
    return this.author.isSystemUser()
  }
  hasFlag(e) {
    return (0, u.hasFlag)(this.flags, e)
  }
  isCommandType() {
    return this.type === c.MessageTypes.CHAT_INPUT_COMMAND || this.type === c.MessageTypes.CONTEXT_MENU_COMMAND
  }
  isPoll() {
    return null != this.poll
  }
  toJS() {
    return {
      ...this,
      webkhook_id: this.webhookId,
      edited_timestamp: this.editedTimestamp,
      mention_everyone: this.mentionEveryone
    }
  }
  isFirstMessageInForumPost(e) {
    return this.id === this.channel_id && e.isForumPost()
  }
  constructor(e) {
    var t, n, i;
    super(), this.id = e.id, this.type = e.type || c.MessageTypes.DEFAULT, this.channel_id = e.channel_id, this.author = e.author, this.content = e.content || "", this.customRenderedContent = e.customRenderedContent, this.attachments = e.attachments || [], this.embeds = e.embeds || [], this.mentions = e.mentions || [], this.mentionRoles = e.mentionRoles || [], this.mentionChannels = e.mentionChannels || [], this.mentioned = e.mentioned || !1, this.pinned = e.pinned || !1, this.mentionEveryone = e.mentionEveryone || !1, this.tts = e.tts || !1, this.codedLinks = e.codedLinks || [], this.giftCodes = e.giftCodes || [], this.timestamp = e.timestamp || s(), this.editedTimestamp = e.editedTimestamp || null, this.state = e.state || c.MessageStates.SENT, this.nonce = e.nonce || null, this.blocked = e.blocked || !1, this.call = e.call || null, this.bot = e.bot || !1, this.webhookId = e.webhookId || null, this.reactions = e.reactions || [], this.applicationId = e.application_id || e.applicationId || null, this.application = e.application || null, this.activity = e.activity || null, this.activityInstance = e.activity_instance || e.activityInstance || null, this.messageReference = e.messageReference || null, this.flags = e.flags || 0, this.isSearchHit = e.hit || e.isSearchHit || !1, this.stickers = e.stickers || [], this.stickerItems = null !== (n = null !== (t = e.sticker_items) && void 0 !== t ? t : e.stickerItems) && void 0 !== n ? n : [], this.components = e.components, this.loggingName = e.loggingName || null, this.colorString = e.colorString, this.nick = e.nick, this.interaction = e.interaction || null, this.interactionData = e.interactionData || null, this.interactionError = e.interactionError || null, this.roleSubscriptionData = e.roleSubscriptionData, this.purchaseNotification = e.purchaseNotification, this.poll = e.poll, this.referralTrialOfferId = e.referralTrialOfferId || null, this.giftInfo = null !== (i = e.gift_info) && void 0 !== i ? i : e.giftInfo
  }
}
var _ = f