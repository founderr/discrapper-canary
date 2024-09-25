n.d(t, {
    Hx: function () {
        return m;
    },
    pi: function () {
        return p;
    }
});
var r = n(789020);
var i = n(653041);
var a = n(724458);
var o = n(373793),
    s = n(81825),
    l = n(712057),
    u = n(978003),
    c = n(566006),
    d = n(995774),
    _ = n(630388),
    E = n(358085),
    f = n(981631);
function h(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
class p extends s.Z {
    hasFlag(e) {
        return (0, _.yE)(this.flags, e);
    }
    constructor(e) {
        var t, n, r, i, a, o, s, l, u, c, d, _;
        super(), h(this, 'type', void 0), h(this, 'content', void 0), h(this, 'attachments', void 0), h(this, 'embeds', void 0), h(this, 'timestamp', void 0), h(this, 'editedTimestamp', void 0), h(this, 'flags', void 0), h(this, 'components', void 0), h(this, 'codedLinks', void 0), h(this, 'stickers', void 0), h(this, 'stickerItems', void 0), (this.type = null !== (t = e.type) && void 0 !== t ? t : f.uaV.DEFAULT), (this.content = null !== (n = e.content) && void 0 !== n ? n : ''), (this.attachments = null !== (r = e.attachments) && void 0 !== r ? r : []), (this.embeds = null !== (i = e.embeds) && void 0 !== i ? i : []), (this.timestamp = null !== (a = e.timestamp) && void 0 !== a ? a : new Date()), (this.editedTimestamp = null !== (o = e.editedTimestamp) && void 0 !== o ? o : null), (this.flags = null !== (s = e.flags) && void 0 !== s ? s : 0), (this.components = null !== (l = e.components) && void 0 !== l ? l : []), (this.codedLinks = null !== (u = e.codedLinks) && void 0 !== u ? u : []), (this.stickers = null !== (c = e.stickers) && void 0 !== c ? c : []), (this.stickerItems = null !== (_ = null !== (d = e.sticker_items) && void 0 !== d ? d : e.stickerItems) && void 0 !== _ ? _ : []);
    }
}
class m extends s.Z {
    constructor(e) {
        super(), h(this, 'message', void 0), (this.message = new p(e.message));
    }
}
class I extends p {
    isEdited() {
        return null != this.editedTimestamp;
    }
    getChannelId() {
        return this.channel_id;
    }
    getReaction(e) {
        return this.reactions.find((t) => (0, d.ir)(t.emoji, e));
    }
    getContentMessage() {
        if ((0, u.Z)(this)) {
            var e;
            return null === (e = this.messageSnapshots[0]) || void 0 === e ? void 0 : e.message;
        }
        return this;
    }
    userHasReactedWithEmoji(e, t) {
        return this.reactions.some((n) => {
            if ((0, d.ir)(n.emoji, e)) return (t && n.me) || (!t && n.me_burst);
        });
    }
    addReaction(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
            r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : c.O.NORMAL,
            i = -1,
            a = this.reactions.map((a, o) => {
                if ((0, d.ir)(a.emoji, e)) {
                    if (((i = o), r === c.O.BURST)) {
                        if (t && a.me) return a;
                        let e = t && a.me_burst ? a.burst_count : a.burst_count + 1,
                            r = null != a.burst_colors && a.burst_colors.length > 0 ? a.burst_colors : n;
                        a = {
                            ...a,
                            me_burst: !!t || a.me_burst,
                            burst_count: e,
                            count_details: {
                                ...a.count_details,
                                burst: e
                            },
                            burst_colors: r,
                            themedBurstColors: (0, l.u)({
                                colors: r,
                                shouldProcessMobileColors: (0, E.isIOS)()
                            })
                        };
                    } else if (r === c.O.VOTE) {
                        var s, u;
                        let e = null !== (u = null === (s = a.count_details) || void 0 === s ? void 0 : s.vote) && void 0 !== u ? u : 0,
                            n = t && a.me_vote ? e : e + 1;
                        a = {
                            ...a,
                            count_details: {
                                ...a.count_details,
                                vote: n
                            },
                            me_vote: !!t || a.me_vote
                        };
                    } else {
                        if (t && a.me_burst) return a;
                        let e = t && a.me ? a.count : a.count + 1;
                        a = {
                            ...a,
                            count: e,
                            count_details: {
                                ...a.count_details,
                                normal: e
                            },
                            me: !!t || a.me
                        };
                    }
                }
                return a;
            });
        return (
            -1 === i &&
                (r === c.O.BURST
                    ? a.push({
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
                          themedBurstColors: (0, l.u)({
                              colors: null != n ? n : [],
                              shouldProcessMobileColors: (0, E.isIOS)()
                          })
                      })
                    : r === c.O.VOTE
                      ? a.push({
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
                        })
                      : a.push({
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
                        })),
            this.set('reactions', a)
        );
    }
    addReactionBatch(e, t) {
        return e.reduce((e, n) => {
            let { users: r, emoji: i } = n;
            return r.reduce((e, n) => e.addReaction(i, n === t), e);
        }, this);
    }
    removeReaction(e) {
        var t, n, r, i;
        let a = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : c.O.NORMAL,
            s = -1,
            l = this.reactions.map((t, n) => {
                if ((0, d.ir)(t.emoji, e)) {
                    if (o === c.O.BURST) {
                        let e = a && !t.me_burst ? t.burst_count : t.burst_count - 1;
                        t = {
                            ...t,
                            burst_count: e,
                            me_burst: !a && t.me_burst,
                            count_details: {
                                ...t.count_details,
                                burst: e
                            }
                        };
                    } else if (o === c.O.VOTE) {
                        var r, i;
                        let e = null !== (i = null === (r = t.count_details) || void 0 === r ? void 0 : r.vote) && void 0 !== i ? i : 0,
                            n = a && !t.me_vote ? e : e - 1;
                        t = {
                            ...t,
                            count_details: {
                                ...t.count_details,
                                vote: n
                            },
                            me_vote: !a && t.me_vote
                        };
                    } else {
                        let e = a && !t.me ? t.count : t.count - 1;
                        t = {
                            ...t,
                            count: e,
                            me: !a && t.me,
                            count_details: {
                                ...t.count_details,
                                normal: e
                            }
                        };
                    }
                    s = n;
                }
                return t;
            }),
            { count: u, burst_count: _, count_details: E } = null !== (t = l[s]) && void 0 !== t ? t : {},
            f = null !== (n = null == E ? void 0 : E.normal) && void 0 !== n ? n : 0,
            h = null !== (r = null == E ? void 0 : E.burst) && void 0 !== r ? r : 0,
            p = null !== (i = null == E ? void 0 : E.vote) && void 0 !== i ? i : 0;
        return -1 !== s && u <= 0 && _ <= 0 && f <= 0 && h <= 0 && p <= 0 && l.splice(s, 1), this.set('reactions', l);
    }
    removeReactionsForEmoji(e) {
        return this.set(
            'reactions',
            this.reactions.filter((t) => !(0, d.ir)(t.emoji, e))
        );
    }
    isSystemDM() {
        return this.author.isSystemUser();
    }
    isCommandType() {
        return this.type === f.uaV.CHAT_INPUT_COMMAND || this.type === f.uaV.CONTEXT_MENU_COMMAND;
    }
    isPoll() {
        return null != this.poll;
    }
    isUIKitComponents() {
        return (0, _.yE)(this.flags, f.iLy.IS_UIKIT_COMPONENTS);
    }
    isInteractionPlaceholder() {
        return null != this.interaction && this.author.isNonUserBot();
    }
    canDeleteOwnMessage(e) {
        var t, n, r;
        if (this.author.id === e) return !0;
        let i = null !== (r = null === (t = this.interactionMetadata) || void 0 === t ? void 0 : t.authorizing_integration_owners) && void 0 !== r ? r : {};
        return (null === (n = this.interactionMetadata) || void 0 === n ? void 0 : n.user.id) === e && 1 === Object.keys(i).length && o.Y.USER_INSTALL in i;
    }
    toJS() {
        return {
            ...this,
            webkhook_id: this.webhookId,
            edited_timestamp: this.editedTimestamp,
            mention_everyone: this.mentionEveryone
        };
    }
    isFirstMessageInForumPost(e) {
        return this.id === this.channel_id && e.isForumPost();
    }
    constructor(e) {
        var t, n;
        super(e), h(this, 'id', void 0), h(this, 'channel_id', void 0), h(this, 'author', void 0), h(this, 'bot', void 0), h(this, 'customRenderedContent', void 0), h(this, 'pinned', void 0), h(this, 'mentions', void 0), h(this, 'mentionRoles', void 0), h(this, 'mentionChannels', void 0), h(this, 'mentionEveryone', void 0), h(this, 'mentioned', void 0), h(this, 'tts', void 0), h(this, 'giftCodes', void 0), h(this, 'state', void 0), h(this, 'nonce', void 0), h(this, 'blocked', void 0), h(this, 'call', void 0), h(this, 'webhookId', void 0), h(this, 'reactions', void 0), h(this, 'applicationId', void 0), h(this, 'application', void 0), h(this, 'activity', void 0), h(this, 'activityInstance', void 0), h(this, 'interaction', void 0), h(this, 'interactionData', void 0), h(this, 'interactionMetadata', void 0), h(this, 'interactionError', void 0), h(this, 'messageReference', void 0), h(this, 'isSearchHit', void 0), h(this, 'roleSubscriptionData', void 0), h(this, 'purchaseNotification', void 0), h(this, 'poll', void 0), h(this, 'loggingName', void 0), h(this, 'referralTrialOfferId', void 0), h(this, 'giftInfo', void 0), h(this, 'giftingPrompt', void 0), h(this, 'messageSnapshots', void 0), h(this, 'isUnsupported', void 0), h(this, 'changelogId', void 0), h(this, 'colorString', void 0), h(this, 'nick', void 0), (this.id = e.id), (this.channel_id = e.channel_id), (this.author = e.author), (this.customRenderedContent = e.customRenderedContent), (this.mentions = e.mentions || []), (this.mentionRoles = e.mentionRoles || []), (this.mentionChannels = e.mentionChannels || []), (this.mentioned = e.mentioned || !1), (this.pinned = e.pinned || !1), (this.mentionEveryone = e.mentionEveryone || !1), (this.tts = e.tts || !1), (this.giftCodes = e.giftCodes || []), (this.state = e.state || f.yb.SENT), (this.nonce = e.nonce || null), (this.blocked = e.blocked || !1), (this.call = e.call || null), (this.bot = e.bot || !1), (this.webhookId = e.webhookId || null), (this.reactions = e.reactions || []), (this.applicationId = e.application_id || e.applicationId || null), (this.application = e.application || null), (this.activity = e.activity || null), (this.activityInstance = e.activity_instance || e.activityInstance || null), (this.messageReference = e.messageReference || null), (this.isSearchHit = e.hit || e.isSearchHit || !1), (this.loggingName = e.loggingName || null), (this.colorString = e.colorString), (this.nick = e.nick), (this.interaction = e.interaction || null), (this.interactionData = e.interactionData || null), (this.interactionMetadata = e.interactionMetadata || null), (this.interactionError = e.interactionError || null), (this.roleSubscriptionData = e.roleSubscriptionData), (this.purchaseNotification = e.purchaseNotification), (this.poll = e.poll), (this.referralTrialOfferId = e.referralTrialOfferId || null), (this.giftInfo = null !== (t = e.gift_info) && void 0 !== t ? t : e.giftInfo), (this.giftingPrompt = e.giftingPrompt || null), (this.messageSnapshots = e.messageSnapshots || []), (this.isUnsupported = e.isUnsupported || !1), (this.changelogId = null !== (n = e.changelog_id) && void 0 !== n ? n : e.changelogId || null);
    }
}
t.ZP = I;
