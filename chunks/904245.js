var r = n(411104);
var i = n(627341);
var a = n(47120);
var o = n(789020);
var s = n(278074),
    l = n(544891),
    u = n(780384),
    c = n(570140),
    d = n(89892),
    _ = n(673750),
    E = n(367907),
    f = n(287328),
    h = n(86670),
    p = n(685736),
    m = n(849521),
    I = n(421474),
    T = n(970606),
    g = n(960904),
    S = n(830121),
    A = n(710845),
    v = n(163268),
    N = n(38618),
    O = n(687516),
    R = n(539573),
    C = n(826581),
    y = n(409059),
    L = n(264229),
    b = n(366980),
    D = n(779832),
    M = n(786761),
    P = n(459618),
    U = n(541288),
    w = n(3148),
    x = n(48854),
    G = n(785359),
    k = n(646504),
    B = n(64078),
    F = n(351780),
    Z = n(79390),
    V = n(643266),
    H = n(617136),
    Y = n(807092),
    j = n(869765),
    W = n(926491),
    K = n(467798),
    z = n(346479),
    q = n(218543),
    Q = n(199902),
    X = n(314897),
    $ = n(592125),
    J = n(323873),
    ee = n(701190),
    et = n(375954),
    en = n(496675),
    er = n(158776),
    ei = n(306680),
    ea = n(300429),
    eo = n(594174),
    es = n(626135),
    el = n(70956),
    eu = n(630388),
    ec = n(669079),
    ed = n(63063),
    e_ = n(74538),
    eE = n(709054),
    ef = n(668781),
    eh = n(981631),
    ep = n(176505),
    em = n(58346),
    eI = n(689938);
function eT(e, t, n) {
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
let eg = new A.Z('MessageActionCreators'),
    eS = new A.Z('MessageQueue'),
    eA = !1;
class ev {
    markComplete() {
        this.completed = !0;
    }
    constructor() {
        eT(this, 'completed', !1);
    }
}
function eN(e) {
    let { content: t, channelId: n, messageId: r, location: i, suggested: a = null, overrideProperties: o = {} } = e;
    (0, S.ZP)(t).forEach((e) => {
        let { type: t, code: s } = e;
        if (t === g.g.INVITE)
            eO({
                inviteKey: s,
                channelId: n,
                messageId: r,
                location: i,
                suggested: a,
                overrideProperties: o
            });
        else if (t === g.g.TEMPLATE) {
            let e = y.Z.getGuildTemplate(s);
            if (null == e || e.state === em.Rj.RESOLVING) return;
            E.ZP.trackWithMetadata(eh.rMx.GUILD_TEMPLATE_LINK_SENT, {
                guild_template_code: s,
                guild_template_name: e.name,
                guild_template_description: e.description,
                guild_template_guild_id: e.sourceGuildId
            });
        } else if (t === g.g.BUILD_OVERRIDE);
        else if (t === g.g.MANUAL_BUILD_OVERRIDE);
        else if (t === g.g.EVENT);
        else if (t === g.g.CHANNEL_LINK);
        else if (t === g.g.APP_DIRECTORY_PROFILE) (0, m.y)(s);
        else if (t === g.g.APP_DIRECTORY_STOREFRONT) (0, m.y)(s, 'storefront');
        else if (t === g.g.APP_DIRECTORY_STOREFRONT_SKU) {
            let e = (0, I.Q)(s);
            null != e && (0, m.y)(e.applicationId, 'storefront_sku');
        } else if (t === g.g.ACTIVITY_BOOKMARK);
        else if (t === g.g.EMBEDDED_ACTIVITY_INVITE);
        else if (t === g.g.GUILD_PRODUCT);
        else if (t === g.g.SERVER_SHOP);
        else if (t === g.g.QUESTS_EMBED)
            (0, H.dA)({
                questId: s,
                event: eh.rMx.QUEST_LINK_SHARED,
                trackGuildAndChannelMetadata: !0
            });
        else if (t === g.g.DISCOVERY_GAME);
        else if (t === g.g.APP_OAUTH2_LINK);
        else throw Error('Unknown coded link type: '.concat(t));
    });
}
function eO(e) {
    let { inviteKey: t, channelId: n, messageId: r, location: i, suggested: a = null, overrideProperties: o = {} } = e,
        s = (0, L.fU)(t),
        l = $.Z.getChannel(n);
    if (null != l) {
        let e = null;
        l.isMultiUserDM() ? (e = eh.dAT.GDM_INVITE) : !l.isPrivate() && (e = eh.dAT.SERVER_INVITE);
        let n = {},
            c = ee.Z.getInvite(t);
        if (null != c && c.state === eh.r2o.RESOLVED && null != c.channel) {
            var u;
            let t = c.channel;
            (n.invite_channel_id = t.id), (n.invite_guild_id = null === (u = c.guild) || void 0 === u ? void 0 : u.id), (n.invite_channel_type = t.type), null != c.inviter && (n.invite_inviter_id = c.inviter.id);
            let r = Q.Z.getLastActiveStream();
            if (null != r && r.channelId === t.id) {
                (e = eh.dAT.STREAM), (n.destination_user_id = r.ownerId);
                let t = (0, O.L2)(r, er.Z);
                n.application_id = null != t ? t.id : null;
            }
        }
        null != a && ((n.is_suggested = a.isAffinitySuggestion), (n.row_num = a.rowNum), (n.num_total = a.numTotal), (n.num_affinity_connections = a.numAffinityConnections), (n.is_filtered = a.isFiltered)),
            (n = {
                ...n,
                location: i,
                invite_type: e,
                invite_code: s.baseCode,
                guild_id: l.getGuildId(),
                channel_id: l.id,
                message_id: r,
                send_type: eh.a5g.DIRECT_MESSAGE,
                invite_guild_scheduled_event_id: s.guildScheduledEventId,
                ...o
            }),
            E.ZP.trackWithMetadata(eh.rMx.INVITE_SENT, n);
    } else {
        let e = {},
            n = ee.Z.getInvite(t);
        null != n &&
            n.state === eh.r2o.RESOLVED &&
            null != n.inviter &&
            ((e.invite_inviter_id = n.inviter.id),
            (e = {
                ...e,
                location: i,
                invite_type: eh.dAT.FRIEND_INVITE,
                invite_code: s.baseCode,
                message_id: r,
                send_type: eh.a5g.DIRECT_MESSAGE,
                invite_guild_scheduled_event_id: s.guildScheduledEventId,
                ...o
            }),
            E.ZP.trackWithMetadata(eh.rMx.INVITE_SENT, e));
    }
}
function eR(e, t, n, r, i) {
    (0, ec.Q_)(e).forEach((e) => {
        let a = $.Z.getChannel(t);
        null != a &&
            E.ZP.trackWithMetadata(eh.rMx.GIFT_CODE_SENT, {
                location: r,
                gift_code: e,
                guild_id: a.getGuildId(),
                channel_id: a.id,
                channel_type: a.type,
                message_id: n,
                automatic_send: i
            });
    });
}
function eC(e, t) {
    let n = et.Z.getMessage(e, t);
    if (null == n || n.type !== eh.uaV.REPLY) return;
    let r = j.Z.getMessageByReference(n.messageReference);
    if (!(r.state !== j.Y.LOADED || n.mentions.includes(r.message.author.id)))
        return {
            parse: Object.values(eh.hCA),
            replied_user: !1
        };
}
let ey = {
        [eh.evJ.EMAIL_VERIFICATION_REQUIRED]: {
            messageName: 'BOT_REQUIRES_EMAIL_VERIFICATION',
            messageGetter: () => eI.Z.Messages.BOT_REQUIRES_EMAIL_VERIFICATION
        },
        [eh.evJ.INVALID_MESSAGE_SEND_USER]: {
            messageName: 'BOT_DM_SEND_FAILED_WITH_HELP_LINK',
            messageGetter: () => eI.Z.Messages.BOT_DM_SEND_FAILED_WITH_HELP_LINK.format({ helpUrl: ed.Z.getArticleURL(eh.BhN.DM_COULD_NOT_BE_DELIVERED) })
        },
        [eh.evJ.RATE_LIMIT_DM_OPEN]: {
            messageName: 'BOT_DM_RATE_LIMITED',
            messageGetter: () => eI.Z.Messages.BOT_DM_RATE_LIMITED
        },
        [eh.evJ.SEND_MESSAGE_TEMPORARILY_DISABLED]: {
            messageName: 'BOT_DM_SEND_MESSAGE_TEMPORARILY_DISABLED',
            messageGetter: () => eI.Z.Messages.BOT_DM_SEND_MESSAGE_TEMPORARILY_DISABLED
        },
        [eh.evJ.SLOWMODE_RATE_LIMITED]: {
            messageName: 'BOT_DM_SEND_MESSAGE_TEMPORARILY_DISABLED',
            messageGetter: () => eI.Z.Messages.BOT_DM_SEND_MESSAGE_TEMPORARILY_DISABLED
        }
    },
    eL = {
        receiveMessage(e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
            c.Z.dispatch({
                type: 'MESSAGE_CREATE',
                channelId: e,
                message: t,
                optimistic: n,
                sendMessageOptions: r,
                isPushNotification: !1
            });
        },
        sendBotMessage(e, t, n, r) {
            null != n &&
                E.ZP.trackWithMetadata(eh.rMx.AUTOMATED_MESSAGE_RECEIVED, {
                    message_author: 'Clyde',
                    message_name: n
                }),
                eL.receiveMessage(
                    e,
                    (0, w.cs)({
                        messageId: r,
                        channelId: e,
                        content: t,
                        loggingName: n
                    })
                );
        },
        sendNitroSystemMessage(e, t, n) {
            let r = (0, w.ZP)({
                channelId: e,
                nonce: n,
                type: eh.uaV.NITRO_NOTIFICATION,
                content: t,
                flags: eh.iLy.EPHEMERAL,
                author: {
                    id: eh.LAt,
                    username: 'Nitro Notification',
                    discriminator: eh.fo$,
                    avatar: 'nitro',
                    bot: !0
                }
            });
            eL.receiveMessage(
                e,
                {
                    ...r,
                    state: eh.yb.SENT,
                    channel_id: e
                },
                !0
            );
        },
        sendGiftingPromptSystemMessage(e, t) {
            let n = (0, w.ZP)({
                channelId: e,
                type: eh.uaV.GIFTING_PROMPT,
                content: '',
                flags: eh.iLy.EPHEMERAL,
                author: {
                    id: eh.LAt,
                    username: 'Gifting Prompt',
                    discriminator: eh.fo$,
                    avatar: 'gifting_prompt',
                    bot: !0
                },
                giftingPrompt: t
            });
            eL.receiveMessage(
                e,
                {
                    ...n,
                    state: eh.yb.SENT
                },
                !0
            );
        },
        sendClydeError(e) {
            let t,
                n,
                r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                i = $.Z.getChannel(e);
            if (null != i) r === eh.evJ.SLOWMODE_RATE_LIMITED ? ((t = eI.Z.Messages.CHANNEL_SLOWMODE_DESC.format({ seconds: i.rateLimitPerUser })), (n = 'SLOWMODE_RATE_LIMITED')) : r === eh.evJ.INVALID_MESSAGE_SEND_USER ? ((t = eI.Z.Messages.BOT_DM_SEND_FAILED_WITH_HELP_LINK.format({ helpUrl: ed.Z.getArticleURL(eh.BhN.DM_COULD_NOT_BE_DELIVERED) })), (n = 'INVALID_MESSAGE_SEND_USER')) : r === eh.evJ.TOO_MANY_THREADS ? ((t = i.isForumLikeChannel() || i.isForumPost() ? eI.Z.Messages.BOT_DM_TOO_MANY_POSTS : eI.Z.Messages.BOT_DM_TOO_MANY_THREADS), (n = 'TOO_MANY_THREADS')) : r === eh.evJ.TOO_MANY_ANNOUNCEMENT_THREADS ? ((t = eI.Z.Messages.BOT_DM_TOO_MANY_ANNOUNCEMENT_THREADS), (n = 'TOO_MANY_ANNOUNCEMENT_THREADS')) : r === eh.evJ.HARMFUL_LINK_MESSAGE_BLOCKED ? ((t = eI.Z.Messages.HARMFUL_LINK_MESSAGE_BLOCKED_ERROR.format({ helpUrl: eh.EYA.HARMFUL_LINKS })), (n = 'HARMFUL_LINK_MESSAGE_BLOCKED')) : r in ey ? ((n = ey[r].messageName), (t = ey[r].messageGetter())) : ((t = eI.Z.Messages.BOT_DM_SEND_FAILED_WITH_HELP_LINK.format({ helpUrl: ed.Z.getArticleURL(eh.BhN.DM_COULD_NOT_BE_DELIVERED) })), (n = 'SEND_FAILED ('.concat(r, ')'))), eL.sendBotMessage(e, t, n);
        },
        sendExplicitMediaClydeError(e, t, n) {
            let r = $.Z.getChannel(e);
            if (null == r) return;
            let { message: i, messageName: a } = (0, s.EQ)({
                    isDM: r.isDM(),
                    isGDM: r.isGroupDM()
                })
                    .with({ isDM: !0 }, () => ({
                        message: eI.Z.Messages.SENDER_BLOCKED_MEDIA_BOT_DMS_MESSAGE,
                        messageName: 'BOT_DM_EXPLICIT_CONTENT'
                    }))
                    .with(
                        {
                            isDM: !1,
                            isGDM: !0
                        },
                        () => ({
                            message: eI.Z.Messages.SENDER_BLOCKED_MEDIA_BOT_DMS_MESSAGE,
                            messageName: 'BOT_GDM_EXPLICIT_CONTENT'
                        })
                    )
                    .otherwise(() => ({
                        message: eI.Z.Messages.SENDER_BLOCKED_MEDIA_BOT_GUILD_MESSAGE,
                        messageName: 'BOT_GUILD_EXPLICIT_CONTENT'
                    })),
                o = (0, x.r)();
            eL.sendBotMessage(e, i, a, o),
                (0, v.aP)({
                    action: v.Yy.EXPLICIT_MEDIA_FALSE_POSITIVE_CLYDE_MESSAGE_SENT,
                    messageId: o,
                    channelId: e,
                    context: n
                }),
                null != t &&
                    t.length > 0 &&
                    c.Z.dispatch({
                        type: 'MESSAGE_EXPLICIT_CONTENT_FP_CREATE',
                        messageId: o,
                        channelId: e,
                        attachments: t
                    });
        },
        truncateMessages(e, t, n) {
            c.Z.dispatch({
                type: 'TRUNCATE_MESSAGES',
                channelId: e,
                truncateBottom: t,
                truncateTop: n
            });
        },
        clearChannel(e) {
            c.Z.dispatch({
                type: 'CLEAR_MESSAGES',
                channelId: e
            });
        },
        jumpToPresent(e, t) {
            eL.trackJump(e, null, 'Present');
            let n = { present: !0 };
            et.Z.hasPresent(e)
                ? c.Z.dispatch({
                      type: 'LOAD_MESSAGES_SUCCESS_CACHED',
                      jump: n,
                      channelId: e,
                      limit: t
                  })
                : eL.fetchMessages({
                      channelId: e,
                      limit: t,
                      jump: n
                  });
        },
        trackJump(e, t, n, r) {
            E.ZP.trackWithMetadata(eh.rMx.JUMP, {
                context: n,
                channel_id: e,
                message_id: t,
                ...r
            });
        },
        jumpToMessage(e) {
            let { channelId: t, messageId: n, flash: r = !1, offset: i, context: a, extraProperties: o = null, isPreload: s, returnMessageId: l, skipLocalFetch: u, jumpType: c } = e;
            return (
                'string' == typeof a && eL.trackJump(t, n, a, o),
                eL.fetchMessages({
                    channelId: t,
                    limit: eh.Z8P,
                    jump: {
                        messageId: n,
                        flash: r,
                        offset: i,
                        returnMessageId: l,
                        jumpType: c
                    },
                    isPreload: s,
                    skipLocalFetch: u
                })
            );
        },
        focusMessage(e) {
            let { channelId: t, messageId: n } = e;
            eL.fetchMessages({
                channelId: t,
                limit: eh.Z8P,
                focus: { messageId: n }
            });
        },
        fetchMessage(e) {
            let { channelId: t, messageId: n } = e;
            return l.tn
                .get({
                    url: eh.ANM.MESSAGES(t),
                    query: {
                        limit: 1,
                        around: n
                    },
                    retries: 2,
                    oldFormErrors: !0
                })
                .then((e) => {
                    if (e.body.length > 0)
                        return (
                            c.Z.dispatch({
                                type: 'REACTION_MESSAGE_FETCHED',
                                message: e.body[0]
                            }),
                            (0, M.e5)(e.body[0])
                        );
                });
        },
        fetchMessages(e) {
            let { channelId: t, before: n, after: r, limit: i, jump: a, focus: o, isPreload: s, skipLocalFetch: u, truncate: _ } = e,
                E = $.Z.getChannel(t),
                f = N.Z.isConnectedOrOverlay(),
                h = Date.now();
            if (null != E && E.type === eh.d4z.GUILD_STORE) return !1;
            if (t === ep.V) return;
            if (
                (eg.log('Fetching messages for '.concat(t, ' between ').concat(n, ' and ').concat(r, '. jump=').concat(JSON.stringify(a))),
                eL._tryFetchMessagesCached({
                    channelId: t,
                    before: n,
                    after: r,
                    limit: i,
                    jump: a,
                    focus: o,
                    truncate: _
                }))
            )
                return;
            q.Z.fetchMessages.recordStart();
            let p = null != a ? a : void 0;
            null == p && null != o && (p = { ...o });
            let m = d.Z.getOrCreate(t).loadStart(p);
            d.Z.commit(m), c.Z.dispatch({ type: 'LOAD_MESSAGES' });
            let I = null == p ? void 0 : p.messageId,
                T = new ev();
            return (
                !u && this.fetchLocalMessages(t, n, r, i, T),
                l.tn
                    .get({
                        url: eh.ANM.MESSAGES(t),
                        query: {
                            before: n,
                            after: r,
                            limit: i,
                            around: I,
                            preload: s
                        },
                        retries: 2,
                        oldFormErrors: !0
                    })
                    .then(
                        (e) => (
                            q.Z.fetchMessages.recordEnd(),
                            q.Z.dispatchMessages.measure(() => {
                                let o = e.body,
                                    s = null != n,
                                    l = null != r,
                                    u = null == n && null == r,
                                    d = null != I || (o.length === i && (s || u)),
                                    E = null != I || (l && o.length === i);
                                if (null != I) {
                                    let e = Math.floor(i / 2),
                                        n = [
                                            I,
                                            ...o.map((e) => {
                                                let { id: t } = e;
                                                return t;
                                            })
                                        ]
                                            .filter((e, t, n) => n.indexOf(e) === t)
                                            .sort(eE.default.compare)
                                            .indexOf(I);
                                    if ((n < e && (d = !1), o.length - n < e && (E = !1), E && o.length > 0)) {
                                        let e = ei.ZP.lastMessageId(t);
                                        o[0].id === e && (E = !1);
                                    }
                                }
                                eg.log('Fetched '.concat(o.length, ' messages for ').concat(t, ' isBefore:').concat(s, ' isAfter:').concat(l)),
                                    T.markComplete(),
                                    c.Z.dispatch({
                                        type: 'LOAD_MESSAGES_SUCCESS',
                                        channelId: t,
                                        messages: o,
                                        isBefore: s,
                                        isAfter: l,
                                        hasMoreBefore: d,
                                        hasMoreAfter: E,
                                        limit: i,
                                        jump: a,
                                        isStale: !f || N.Z.lastTimeConnectedChanged() >= h,
                                        truncate: _
                                    });
                            }),
                            !0
                        ),
                        () => (
                            eg.log('Failed to fetch messages for '.concat(t)),
                            c.Z.dispatch({
                                type: 'LOAD_MESSAGES_FAILURE',
                                channelId: t
                            }),
                            !1
                        )
                    )
            );
        },
        async fetchLocalMessages(e, t, n, r, i) {
            let a = $.Z.getBasicChannel(e),
                o = d.Z.getOrCreate(e),
                s = f.Z.database();
            if (null == s || null == a || null != t || null != n) {
                q.Z.addLocalMessages(e, -1);
                return;
            }
            if (o.ready && !o.cached) {
                q.Z.addLocalMessages(e, -2);
                return;
            }
            let l = await (0, h.dI)(() => p.ZP.load(s, e, r));
            if (null == l) {
                q.Z.addLocalMessages(e, -3);
                return;
            }
            if ((eg.log('fetched '.concat(l.messages.length, ' messages from local database (channel_id: ').concat(e, ', remote_fetch_completed: ').concat(i.completed, ')')), q.Z.addLocalMessages(e, l.messages.length), !i.completed && l.messages.length > 0)) {
                let t = l.messages.length >= r && l.connectionId === N.Z.lastTimeConnectedChanged();
                c.Z.dispatch({
                    type: 'LOCAL_MESSAGES_LOADED',
                    guildId: a.guild_id,
                    channelId: e,
                    users: l.users,
                    members: l.members,
                    messages: l.messages,
                    stale: !t
                });
            }
        },
        async fetchNewLocalMessages(e, t) {
            var n;
            let r = $.Z.getBasicChannel(e),
                i = f.Z.database();
            if (null == i || null == r) return;
            let a = d.Z.getOrCreate(e);
            if (a.hasMoreAfter) return;
            let o = await (0, h.dI)(() => p.ZP.load(i, e, t));
            if (null == o) return;
            let s = null === (n = (a = d.Z.getOrCreate(e)).last()) || void 0 === n ? void 0 : n.id,
                l = null == s ? o.messages : o.messages.filter((e) => eE.default.compare(e.id, s) > 0);
            eg.log('Fetched '.concat(o.messages.length, ' messages from the cache after foregrounding. ').concat(l.length, ' are new')),
                0 !== l.length &&
                    c.Z.dispatch({
                        type: 'LOCAL_MESSAGES_LOADED',
                        guildId: r.guild_id,
                        channelId: e,
                        users: o.users,
                        members: o.members,
                        messages: l,
                        stale: !0
                    });
        },
        _tryFetchMessagesCached(e) {
            let { channelId: t, before: n, after: r, limit: i, jump: a, focus: o, truncate: s } = e,
                l = et.Z.getMessages(t);
            if (l.cached || !l.ready) return !1;
            if ((null == a ? void 0 : a.messageId) != null || (null == o ? void 0 : o.messageId) != null) {
                if ((null == a ? void 0 : a.messageId) != null && l.has(a.messageId, !1))
                    return (
                        c.Z.dispatch({
                            type: 'LOAD_MESSAGES_SUCCESS_CACHED',
                            channelId: t,
                            jump: a,
                            limit: i,
                            truncate: s
                        }),
                        !0
                    );
                if ((null == o ? void 0 : o.messageId) != null) {
                    if (l.has(o.messageId, !1))
                        return (
                            c.Z.dispatch({
                                type: 'LOAD_MESSAGES_SUCCESS_CACHED',
                                channelId: t,
                                focus: o,
                                limit: i,
                                truncate: s
                            }),
                            !0
                        );
                    a = { ...o };
                }
                let e = (null == a ? void 0 : a.messageId) != null ? eE.default.extractTimestamp(null == a ? void 0 : a.messageId) : 0,
                    n = l.first(),
                    r = l.last();
                if ((!l.hasMoreBefore && null != n && eE.default.extractTimestamp(n.id) >= e) || (!l.hasMoreAfter && null != r && eE.default.extractTimestamp(r.id) <= e) || (null != n && null != r && eE.default.extractTimestamp(n.id) < e && eE.default.extractTimestamp(r.id) > e))
                    return (
                        c.Z.dispatch({
                            type: 'LOAD_MESSAGES_SUCCESS_CACHED',
                            channelId: t,
                            jump: a,
                            limit: eh.Z8P
                        }),
                        !0
                    );
            } else if (null != n && l.hasBeforeCached(n))
                return (
                    c.Z.dispatch({
                        type: 'LOAD_MESSAGES_SUCCESS_CACHED',
                        channelId: t,
                        before: n,
                        limit: i,
                        truncate: s
                    }),
                    !0
                );
            else if (null != r && l.hasAfterCached(r))
                return (
                    c.Z.dispatch({
                        type: 'LOAD_MESSAGES_SUCCESS_CACHED',
                        channelId: t,
                        after: r,
                        limit: i,
                        truncate: s
                    }),
                    !0
                );
            return !1;
        },
        async sendMessage(e, t) {
            var n;
            let r = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
                i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
            if (t.reaction) return Promise.resolve();
            let a = await (0, V.Z)(e);
            if (null != a) return eL.sendMessage(a, t, r, i);
            let o = () => eL._sendMessage(e, t, i),
                s = D.ZP.backgroundify(o, void 0),
                l = null !== (n = i.nonce) && void 0 !== n ? n : (0, x.r)();
            return ((i = {
                ...i,
                nonce: l
            }),
            P.Z.recordMessageSendAttempt(e, l),
            et.Z.isReady(e))
                ? s()
                : r && e !== ep.V
                  ? (eS.info('Waiting for channel '.concat(e, ' to be ready before sending.')),
                    new Promise((t, n) => {
                        et.Z.whenReady(e, () => {
                            eS.info('Channel '.concat(e, ' is ready for sending now.')), s().then(t, n);
                        });
                    }))
                  : s();
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
                allowedMentions: e.shouldMention
                    ? void 0
                    : {
                          parse: Object.values(eh.hCA),
                          replied_user: !1
                      }
            };
        },
        sendInvite: (e, t, n, r) =>
            eL._sendMessage(
                e,
                {
                    content: (0, b.Z)(t),
                    tts: !1,
                    validNonShortcutEmojis: [],
                    invalidEmojis: []
                },
                {
                    location: n,
                    suggestedInvite: null != r ? r : void 0
                }
            ),
        sendActivityBookmark: (e, t, n, r) =>
            eL._sendMessage(
                e,
                {
                    content: t,
                    tts: !1,
                    validNonShortcutEmojis: [],
                    invalidEmojis: []
                },
                {
                    location: n,
                    suggestedInvite: null != r ? r : void 0
                }
            ),
        sendStickers(e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : '',
                r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
                i = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
            return eL._sendMessage(
                e,
                {
                    content: n,
                    invalidEmojis: [],
                    validNonShortcutEmojis: [],
                    tts: i
                },
                {
                    ...r,
                    stickerIds: t
                }
            );
        },
        sendGreetMessage(e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                { messageReference: r, allowedMentions: i } = n;
            return l.tn
                .post({
                    url: eh.ANM.MESSAGES_GREET(e),
                    body: {
                        sticker_ids: [t],
                        allowed_mentions: i,
                        message_reference: r
                    },
                    oldFormErrors: !0
                })
                .then(
                    (n) => (
                        U.Z.donateSentMessage(n.body.content, e),
                        eL.receiveMessage(e, n.body),
                        c.Z.dispatch({
                            type: 'STICKER_TRACK_USAGE',
                            stickerIds: [t]
                        }),
                        n
                    ),
                    (t) => {
                        throw (
                            (eg.log('Failed to send greeting'),
                            429 !== t.status && eL.sendClydeError(e, t.body.code),
                            c.Z.dispatch({
                                type: 'MESSAGE_SEND_FAILED',
                                messageId: t.body.id,
                                channelId: e
                            }),
                            t)
                        );
                    }
                );
        },
        sendPollMessage(e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            return eL._sendMessage(
                e,
                {
                    content: '',
                    tts: !1,
                    validNonShortcutEmojis: [],
                    invalidEmojis: []
                },
                {
                    ...n,
                    poll: t
                }
            );
        },
        _sendMessage(e, t, n) {
            var r, i, a;
            let o = (0, V.Z)(e);
            if (null != o)
                return (
                    eS.info('Converting channel to a private channel'),
                    o.then((e) => {
                        eS.info('Finished converting channel to a private channel'), eL._sendMessage(e, t, n);
                    })
                );
            let s = t.content,
                { invalidEmojis: l, validNonShortcutEmojis: u, tts: d = !1 } = t,
                { activityAction: E, location: f, suggestedInvite: h, stickerIds: p, messageReference: m, allowedMentions: I, poll: g, contentInventoryEntry: S } = n,
                A = null !== (i = n.flags) && void 0 !== i ? i : 0,
                [v, N] = (0, K.Z)(s);
            v && ((s = N), (A = (0, eu.pj)(A, eh.iLy.SUPPRESS_NOTIFICATIONS)));
            let O = (null === (r = n.messageReference) || void 0 === r ? void 0 : r.type) === eh.Uvt.FORWARD;
            if ('' === s && null == E && null == p && null == g && !O) return Promise.resolve();
            let y = null != m ? eh.uaV.REPLY : eh.uaV.DEFAULT,
                L = null !== (a = n.nonce) && void 0 !== a ? a : (0, x.r)(),
                b = L;
            if (!1 !== n.eagerDispatch) {
                let t = (0, w.ZP)({
                    channelId: e,
                    content: s,
                    tts: d,
                    type: y,
                    messageReference: m,
                    allowedMentions: I,
                    flags: 0 !== A ? A : void 0,
                    nonce: L,
                    poll: (0, Z.x9)(g)
                });
                (0, B.EL)(e, t.id), null != p && (t.sticker_items = p.map((e) => W.Z.getStickerById(e)).filter((e) => null != e)), eL.receiveMessage(e, t, !0, n);
            }
            if (!eA && null != l && l.length > 0) {
                let t, n;
                eA = !0;
                let r = eo.default.getCurrentUser();
                l.some((e) => e.animated) && !e_.ZP.canUseAnimatedEmojis(r) ? ((t = eI.Z.Messages.INVALID_ANIMATED_EMOJI_BODY_UPGRADE), (n = 'INVALID_ANIMATED_EMOJI_BODY')) : en.Z.canWithPartialContext(eh.Plq.USE_EXTERNAL_EMOJIS, { channelId: e }) ? ((t = eI.Z.Messages.INVALID_EXTERNAL_EMOJI_BODY_UPGRADE), (n = 'INVALID_EXTERNAL_EMOJI_BODY_UPGRADE')) : ((t = eI.Z.Messages.INVALID_EXTERNAL_EMOJI_BODY), (n = 'INVALID_EXTERNAL_EMOJI_BODY')), eL.sendBotMessage(e, t, n);
            }
            let D = {
                type: _.$V.SEND,
                message: {
                    channelId: e,
                    content: s,
                    nonce: L,
                    tts: d,
                    message_reference: m,
                    allowed_mentions: I,
                    flags: A
                }
            };
            if (null != E) {
                let e;
                let t = null == E ? void 0 : E.activity.session_id;
                if (null != (e = E.type === eh.mFx.JOIN_REQUEST || null != t ? t : X.default.getSessionId())) {
                    let t = {
                            type: E.type,
                            session_id: e
                        },
                        { activity: n } = E;
                    null != n.party && null != n.party.id && (t.party_id = n.party.id), (D.message.application_id = n.application_id), (D.message.activity = t);
                }
            }
            return (
                null != g && (D.message.poll = g),
                null != p && (D.message.sticker_ids = p),
                F.Z.isEnabled() && (D.message.has_poggermode_enabled = !0),
                null != S && (D.message.content_inventory_entry = S),
                new Promise((t, r) => {
                    let i = Date.now(),
                        a = _.ZP.length,
                        o = Math.floor(10000 * Math.random());
                    eS.info('Queueing message to be sent LogId:'.concat(o)),
                        _.ZP.enqueue(
                            D,
                            (o) => {
                                let l = Date.now() - i;
                                if (o.ok) {
                                    U.Z.donateSentMessage(s, e),
                                        eL.receiveMessage(e, o.body, !0, {
                                            sendAnalytics: {
                                                duration: l,
                                                queueSize: a
                                            },
                                            poll: g
                                        });
                                    let r = eE.default.cast(e),
                                        i = C.Z.getRequest(r);
                                    if (null != i) {
                                        let { guildId: t, userId: n, applicationStatus: r } = i;
                                        (0, T.aC)({
                                            guildId: t,
                                            channelId: e,
                                            messageId: o.body.id,
                                            joinRequestStatus: r,
                                            joinRequestUserId: n
                                        });
                                    }
                                    P.Z.recordMessageSendApiResponse(L);
                                    c.Z.dispatch({
                                        type: 'SLOWMODE_RESET_COOLDOWN',
                                        slowmodeType: ea.S.SendMessage,
                                        channelId: e
                                    }),
                                        c.Z.dispatch({
                                            type: 'EMOJI_TRACK_USAGE',
                                            emojiUsed: u
                                        }),
                                        c.Z.dispatch({
                                            type: 'STICKER_TRACK_USAGE',
                                            stickerIds: p
                                        }),
                                        c.Z.dispatch({
                                            type: 'LOCAL_MESSAGE_CREATE',
                                            message: {
                                                channel_id: e,
                                                author: eo.default.getCurrentUser()
                                            }
                                        }),
                                        eN({
                                            content: s,
                                            channelId: e,
                                            messageId: o.body.id,
                                            location: null != f ? f : 'chat_input',
                                            suggested: h
                                        }),
                                        eR(s, e, o.body.id, null != f ? f : 'chat_input', !!n.isGiftLinkSentOnBehalfOfUser),
                                        t(o);
                                } else {
                                    var d;
                                    eg.log('Failed to send message', {
                                        hasErr: o.hasErr,
                                        status: o.status,
                                        code: null === (d = o.body) || void 0 === d ? void 0 : d.code,
                                        error: o.err
                                    });
                                    let t = !1;
                                    if (o.hasErr) 'ABORTED' === o.err.code && (t = !0);
                                    else if (o.status >= 400 && o.status < 500 && o.body) {
                                        if (o.body.code === eh.evJ.SLOWMODE_RATE_LIMITED) {
                                            let t = o.body.retry_after;
                                            null != t &&
                                                t > 0 &&
                                                c.Z.dispatch({
                                                    type: 'SLOWMODE_SET_COOLDOWN',
                                                    channelId: e,
                                                    slowmodeType: ea.S.SendMessage,
                                                    cooldownMs: t * el.Z.Millis.SECOND
                                                });
                                        } else
                                            R.U8.has(o.body.code)
                                                ? c.Z.dispatch({
                                                      type: 'MESSAGE_SEND_FAILED_AUTOMOD',
                                                      messageData: D,
                                                      errorResponseBody: {
                                                          code: o.body.code,
                                                          message: o.body.message
                                                      }
                                                  })
                                                : o.body.code === eh.evJ.POGGERMODE_TEMPORARILY_DISABLED
                                                  ? c.Z.dispatch({ type: 'POGGERMODE_TEMPORARILY_DISABLED' })
                                                  : null != g || O || eL.sendClydeError(e, o.body.code);
                                    }
                                    t
                                        ? eL.deleteMessage(e, b, !0)
                                        : (c.Z.dispatch({
                                              type: 'MESSAGE_SEND_FAILED',
                                              messageId: b,
                                              channelId: e,
                                              shouldNotify: !0
                                          }),
                                          (0, G.x)({
                                              failureCode: o.hasErr ? void 0 : o.status,
                                              errorMessage: o.hasErr ? o.err.message : void 0
                                          }),
                                          _.ZP.cancelPendingSendRequests(e).forEach((e) => {
                                              eg.log('Cancelling pending message', e.nonce),
                                                  c.Z.dispatch({
                                                      type: 'MESSAGE_SEND_FAILED',
                                                      messageId: e.nonce,
                                                      channelId: e.channelId
                                                  });
                                          })),
                                        r(o);
                                }
                            },
                            o
                        );
                })
            );
        },
        startEditMessage(e, t, n, r) {
            c.Z.dispatch({
                type: 'MESSAGE_START_EDIT',
                channelId: e,
                messageId: t,
                content: n,
                source: r
            });
        },
        updateEditMessage(e, t, n) {
            c.Z.dispatch({
                type: 'MESSAGE_UPDATE_EDIT',
                channelId: e,
                textValue: t,
                richValue: n
            });
        },
        endEditMessage(e, t) {
            c.Z.dispatch({
                type: 'MESSAGE_END_EDIT',
                channelId: e,
                response: t
            });
        },
        async editMessage(e, t, n) {
            let { content: r } = n;
            await z.Z.unarchiveThreadIfNecessary(e);
            let i = eC(e, t),
                a = {
                    channelId: e,
                    messageId: t,
                    content: r,
                    allowed_mentions: i
                };
            _.ZP.enqueue(
                {
                    type: _.$V.EDIT,
                    message: a
                },
                (n) => {
                    let r = !n.hasErr && R.U8.has(n.body.code);
                    if (r) {
                        let e = {
                            type: _.$V.EDIT,
                            message: a
                        };
                        c.Z.dispatch({
                            type: 'MESSAGE_EDIT_FAILED_AUTOMOD',
                            messageData: e,
                            errorResponseBody: {
                                code: n.body.code,
                                message: n.body.message
                            }
                        });
                    }
                    n.hasErr ? u.uv.announce(eI.Z.Messages.A11Y_ANNOUNCEMENT_MESSAGE_EDITED_FAILED) : r ? u.uv.announce(eI.Z.Messages.A11Y_ANNOUNCEMENT_MESSAGE_EDITED_AUTOMOD_BLOCKED) : u.uv.announce(eI.Z.Messages.A11Y_ANNOUNCEMENT_MESSAGE_EDITED),
                        eL.endEditMessage(e, n.hasErr ? void 0 : n),
                        eL.focusMessage({
                            channelId: e,
                            messageId: t
                        });
                }
            );
        },
        async suppressEmbeds(e, t) {
            await z.Z.unarchiveThreadIfNecessary(e),
                l.tn.patch({
                    url: eh.ANM.MESSAGE(e, t),
                    body: { flags: eh.iLy.SUPPRESS_EMBEDS },
                    oldFormErrors: !0
                });
        },
        async patchMessageAttachments(e, t, n) {
            await z.Z.unarchiveThreadIfNecessary(e),
                l.tn.patch({
                    url: eh.ANM.MESSAGE(e, t),
                    body: { attachments: n },
                    oldFormErrors: !0
                });
        },
        async deleteMessage(e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                r = () => {
                    c.Z.dispatch({
                        type: 'MESSAGE_DELETE',
                        id: t,
                        channelId: e
                    }).then(() => {
                        u.uv.announce(eI.Z.Messages.A11Y_ANNOUNCEMENT_MESSAGE_DELETED);
                    });
                };
            n
                ? r()
                : (await z.Z.unarchiveThreadIfNecessary(e),
                  l.tn
                      .del({
                          url: eh.ANM.MESSAGE(e, t),
                          oldFormErrors: !0
                      })
                      .then(() => {
                          r();
                      }));
            let i = et.Z.getMessage(e, t);
            (null == i ? void 0 : i.type) === eh.uaV.GUILD_INVITE_REMINDER && (0, k.O)();
        },
        dismissAutomatedMessage(e) {
            null != e.loggingName &&
                E.ZP.trackWithMetadata(eh.rMx.AUTOMATED_MESSAGE_DISMISSED, {
                    message_name: e.loggingName,
                    message_author: e.author.username
                }),
                this.deleteMessage(e.channel_id, e.id, !0);
        },
        revealMessage(e, t) {
            c.Z.dispatch({
                type: 'MESSAGE_REVEAL',
                channelId: e,
                messageId: t
            });
        },
        crosspostMessage: (e, t) =>
            l.tn
                .post({
                    url: eh.ANM.MESSAGE_CROSSPOST(e, t),
                    oldFormErrors: !0,
                    failImmediatelyWhenRateLimited: !0
                })
                .catch((e) => {
                    let t;
                    (t = 429 === e.status ? eI.Z.Messages.PUBLISH_FOLLOWED_NEWS_FAIL_BODY.format({ retryAfter: Math.floor(e.body.retry_after / 60) }) : eI.Z.Messages.PUBLISH_FOLLOWED_NEWS_GENERIC_BODY),
                        ef.Z.show({
                            title: eI.Z.Messages.PUBLISH_FOLLOWED_NEWS_FAIL_TITLE,
                            body: t,
                            confirmText: eI.Z.Messages.OKAY
                        });
                }),
        trackInvite: eO
    };
t.Z = eL;
