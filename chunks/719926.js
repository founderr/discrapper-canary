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
      i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : o.ReactionTypes.NORMAL,
      s = -1,
      r = this.reactions.map((r, u) => {
        if ((0, l.emojiEquals)(r.emoji, e)) {
          if (s = u, i === o.ReactionTypes.BURST) {
            if (t && r.me) return r;
            let e = t && r.me_burst ? r.burst_count : r.burst_count + 1,
              i = null != r.burst_colors && r.burst_colors.length > 0 ? r.burst_colors : n;
            r = {
              ...r,
              me_burst: !!t || r.me_burst,
              burst_count: e,
              count_details: {
                ...r.count_details,
                burst: e
              },
              burst_colors: i,
              themedBurstColors: (0, a.buildPlatformedThemedEmojiColorPalette)({
                colors: i,
                shouldProcessMobileColors: (0, d.isIOS)()
              })
            }
          } else if (i === o.ReactionTypes.VOTE) {
            var c, f;
            let e = null !== (f = null === (c = r.count_details) || void 0 === c ? void 0 : c.vote) && void 0 !== f ? f : 0,
              n = t && r.me_vote ? e : e + 1;
            r = {
              ...r,
              count_details: {
                ...r.count_details,
                vote: n
              },
              me_vote: !!t || r.me_vote
            }
          } else {
            if (t && r.me_burst) return r;
            let e = t && r.me ? r.count : r.count + 1;
            r = {
              ...r,
              count: e,
              count_details: {
                ...r.count_details,
                normal: e
              },
              me: !!t || r.me
            }
          }
        }
        return r
      });
    return -1 === s && (i === o.ReactionTypes.BURST ? r.push({
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
    }) : i === o.ReactionTypes.VOTE ? r.push({
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
    }) : r.push({
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
    })), this.set("reactions", r)
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
      a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : o.ReactionTypes.NORMAL,
      u = -1,
      d = this.reactions.map((t, n) => {
        if ((0, l.emojiEquals)(t.emoji, e)) {
          if (a === o.ReactionTypes.BURST) {
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
          } else if (a === o.ReactionTypes.VOTE) {
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
          u = n
        }
        return t
      }),
      {
        count: c,
        burst_count: f,
        count_details: _
      } = null !== (t = d[u]) && void 0 !== t ? t : {},
      h = null !== (n = null == _ ? void 0 : _.normal) && void 0 !== n ? n : 0,
      g = null !== (i = null == _ ? void 0 : _.burst) && void 0 !== i ? i : 0,
      m = null !== (s = null == _ ? void 0 : _.vote) && void 0 !== s ? s : 0;
    return -1 !== u && c <= 0 && f <= 0 && h <= 0 && g <= 0 && m <= 0 && d.splice(u, 1), this.set("reactions", d)
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