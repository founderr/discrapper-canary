"use strict";
n.r(t), n.d(t, {
  default: function() {
    return c
  }
}), n("424973"), n("808653"), n("702976");
var s = n("866227"),
  i = n.n(s),
  r = n("666038"),
  a = n("584375"),
  o = n("875978"),
  d = n("432173"),
  u = n("568734"),
  l = n("773336"),
  f = n("49111");
class _ extends r.default {
  isEdited() {
    return null != this.editedTimestamp
  }
  getChannelId() {
    return this.channel_id
  }
  getReaction(e) {
    return this.reactions.find(t => (0, d.emojiEquals)(t.emoji, e))
  }
  userHasReactedWithEmoji(e, t) {
    return this.reactions.some(n => {
      if ((0, d.emojiEquals)(n.emoji, e)) return t && n.me || !t && n.me_burst
    })
  }
  addReaction(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
      n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
      s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : o.ReactionTypes.NORMAL,
      i = -1,
      r = this.reactions.map((r, u) => {
        if ((0, d.emojiEquals)(r.emoji, e)) {
          if (i = u, s === o.ReactionTypes.BURST) {
            if (t && r.me) return r;
            let e = t && r.me_burst ? r.burst_count : r.burst_count + 1,
              s = null != r.burst_colors && r.burst_colors.length > 0 ? r.burst_colors : n;
            r = {
              ...r,
              me_burst: !!t || r.me_burst,
              burst_count: e,
              count_details: {
                ...r.count_details,
                burst: e
              },
              burst_colors: s,
              themedBurstColors: (0, a.buildPlatformedThemedEmojiColorPalette)({
                colors: s,
                shouldProcessMobileColors: (0, l.isIOS)()
              })
            }
          } else if (s === o.ReactionTypes.VOTE) {
            var f, _;
            let e = null !== (_ = null === (f = r.count_details) || void 0 === f ? void 0 : f.vote) && void 0 !== _ ? _ : 0,
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
    return -1 === i && (s === o.ReactionTypes.BURST ? r.push({
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
        shouldProcessMobileColors: (0, l.isIOS)()
      })
    }) : s === o.ReactionTypes.VOTE ? r.push({
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
        users: s,
        emoji: i
      } = n;
      return s.reduce((e, n) => e.addReaction(i, n === t), e)
    }, this)
  }
  removeReaction(e) {
    var t, n, s, i;
    let r = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
      a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : o.ReactionTypes.NORMAL,
      u = -1,
      l = this.reactions.map((t, n) => {
        if ((0, d.emojiEquals)(t.emoji, e)) {
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
            var s, i;
            let e = null !== (i = null === (s = t.count_details) || void 0 === s ? void 0 : s.vote) && void 0 !== i ? i : 0,
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
        count: f,
        burst_count: _,
        count_details: c
      } = null !== (t = l[u]) && void 0 !== t ? t : {},
      g = null !== (n = null == c ? void 0 : c.normal) && void 0 !== n ? n : 0,
      m = null !== (s = null == c ? void 0 : c.burst) && void 0 !== s ? s : 0,
      h = null !== (i = null == c ? void 0 : c.vote) && void 0 !== i ? i : 0;
    return -1 !== u && f <= 0 && _ <= 0 && g <= 0 && m <= 0 && h <= 0 && l.splice(u, 1), this.set("reactions", l)
  }
  removeReactionsForEmoji(e) {
    return this.set("reactions", this.reactions.filter(t => !(0, d.emojiEquals)(t.emoji, e)))
  }
  isSystemDM() {
    return this.author.isSystemUser()
  }
  hasFlag(e) {
    return (0, u.hasFlag)(this.flags, e)
  }
  isCommandType() {
    return this.type === f.MessageTypes.CHAT_INPUT_COMMAND || this.type === f.MessageTypes.CONTEXT_MENU_COMMAND
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
    var t, n, s;
    super(), this.id = e.id, this.type = e.type || f.MessageTypes.DEFAULT, this.channel_id = e.channel_id, this.author = e.author, this.content = e.content || "", this.customRenderedContent = e.customRenderedContent, this.attachments = e.attachments || [], this.embeds = e.embeds || [], this.mentions = e.mentions || [], this.mentionRoles = e.mentionRoles || [], this.mentionChannels = e.mentionChannels || [], this.mentioned = e.mentioned || !1, this.pinned = e.pinned || !1, this.mentionEveryone = e.mentionEveryone || !1, this.tts = e.tts || !1, this.codedLinks = e.codedLinks || [], this.giftCodes = e.giftCodes || [], this.timestamp = e.timestamp || i(), this.editedTimestamp = e.editedTimestamp || null, this.state = e.state || f.MessageStates.SENT, this.nonce = e.nonce || null, this.blocked = e.blocked || !1, this.call = e.call || null, this.bot = e.bot || !1, this.webhookId = e.webhookId || null, this.reactions = e.reactions || [], this.applicationId = e.application_id || e.applicationId || null, this.application = e.application || null, this.activity = e.activity || null, this.activityInstance = e.activity_instance || e.activityInstance || null, this.messageReference = e.messageReference || null, this.flags = e.flags || 0, this.isSearchHit = e.hit || e.isSearchHit || !1, this.stickers = e.stickers || [], this.stickerItems = null !== (n = null !== (t = e.sticker_items) && void 0 !== t ? t : e.stickerItems) && void 0 !== n ? n : [], this.components = e.components, this.loggingName = e.loggingName || null, this.colorString = e.colorString, this.nick = e.nick, this.interaction = e.interaction || null, this.interactionData = e.interactionData || null, this.interactionError = e.interactionError || null, this.roleSubscriptionData = e.roleSubscriptionData, this.purchaseNotification = e.purchaseNotification, this.poll = e.poll, this.referralTrialOfferId = e.referralTrialOfferId || null, this.giftInfo = null !== (s = e.gift_info) && void 0 !== s ? s : e.giftInfo
  }
}
var c = _