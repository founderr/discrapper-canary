n.d(t, {
    $N: function () {
        return en;
    },
    AW: function () {
        return v;
    },
    CG: function () {
        return ec;
    },
    Ec: function () {
        return V;
    },
    Em: function () {
        return W;
    },
    Gz: function () {
        return ed;
    },
    Km: function () {
        return y;
    },
    Lr: function () {
        return D;
    },
    Q5: function () {
        return Y;
    },
    Qm: function () {
        return G;
    },
    Sf: function () {
        return eh;
    },
    TK: function () {
        return Q;
    },
    Ti: function () {
        return R;
    },
    Um: function () {
        return et;
    },
    X_: function () {
        return J;
    },
    Y0: function () {
        return q;
    },
    _H: function () {
        return ek;
    },
    bc: function () {
        return w;
    },
    bw: function () {
        return b;
    },
    dF: function () {
        return z;
    },
    hv: function () {
        return P;
    },
    iR: function () {
        return er;
    },
    jD: function () {
        return ex;
    },
    kt: function () {
        return eB;
    },
    mn: function () {
        return eb;
    },
    nl: function () {
        return ep;
    },
    oj: function () {
        return C;
    },
    ov: function () {
        return X;
    },
    q_: function () {
        return ew;
    },
    r8: function () {
        return A;
    },
    sR: function () {
        return x;
    },
    tx: function () {
        return L;
    },
    uC: function () {
        return H;
    },
    vc: function () {
        return Z;
    },
    vd: function () {
        return B;
    },
    vg: function () {
        return ee;
    },
    xL: function () {
        return $;
    },
    zS: function () {
        return K;
    },
    zi: function () {
        return O;
    }
});
var r = n(47120);
var i = n(724458);
var a = n(789020);
var o = n(392711),
    s = n.n(o),
    l = n(31775),
    u = n.n(l),
    c = n(313361),
    d = n(683860),
    _ = n(149765),
    E = n(283693),
    f = n(146085),
    h = n(427679),
    p = n(630388),
    m = n(709054),
    I = n(981631),
    T = n(176505);
function g(e, t, n) {
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
let S = new Set([I.d4z.GUILD_TEXT, I.d4z.GUILD_ANNOUNCEMENT, I.d4z.GUILD_STORE, I.d4z.ANNOUNCEMENT_THREAD, I.d4z.PUBLIC_THREAD, I.d4z.PRIVATE_THREAD, I.d4z.GUILD_DIRECTORY, I.d4z.GUILD_FORUM, I.d4z.GUILD_MEDIA, I.d4z.DM, I.d4z.GROUP_DM]);
function A(e) {
    return S.has(e);
}
let v = new Set([I.d4z.DM, I.d4z.GROUP_DM, I.d4z.GUILD_TEXT, I.d4z.GUILD_VOICE, I.d4z.GUILD_STAGE_VOICE, I.d4z.GUILD_CATEGORY, I.d4z.GUILD_ANNOUNCEMENT, I.d4z.GUILD_STORE, I.d4z.ANNOUNCEMENT_THREAD, I.d4z.PUBLIC_THREAD, I.d4z.PRIVATE_THREAD, I.d4z.GUILD_DIRECTORY, I.d4z.GUILD_FORUM, I.d4z.GUILD_MEDIA]),
    N = new Set([I.d4z.GUILD_TEXT, I.d4z.GUILD_ANNOUNCEMENT, I.d4z.ANNOUNCEMENT_THREAD, I.d4z.PUBLIC_THREAD, I.d4z.PRIVATE_THREAD]);
function O(e) {
    return N.has(e);
}
let R = new Set([I.d4z.GUILD_TEXT, I.d4z.GUILD_ANNOUNCEMENT, I.d4z.GUILD_FORUM, I.d4z.GUILD_MEDIA, I.d4z.GUILD_VOICE, I.d4z.GUILD_STAGE_VOICE]),
    C = new Set([I.d4z.GUILD_TEXT, I.d4z.GUILD_VOICE, I.d4z.GUILD_STAGE_VOICE, I.d4z.GUILD_CATEGORY, I.d4z.GUILD_ANNOUNCEMENT, I.d4z.GUILD_STORE, I.d4z.ANNOUNCEMENT_THREAD, I.d4z.PUBLIC_THREAD, I.d4z.PRIVATE_THREAD, I.d4z.GUILD_DIRECTORY, I.d4z.GUILD_FORUM, I.d4z.GUILD_MEDIA]);
function y(e) {
    return C.has(e);
}
I.d4z.GUILD_TEXT, I.d4z.GUILD_ANNOUNCEMENT, I.d4z.GUILD_FORUM, I.d4z.GUILD_MEDIA;
let L = new Set([I.d4z.GUILD_VOICE, I.d4z.GUILD_STAGE_VOICE]);
function b(e) {
    return 'SELECTABLE' !== e && L.has(e);
}
let D = new Set([I.d4z.GUILD_STAGE_VOICE]),
    M = new Set([I.d4z.DM, I.d4z.GROUP_DM]);
function P(e) {
    return M.has(e);
}
let U = new Set([I.d4z.GROUP_DM]);
function w(e) {
    return U.has(e);
}
let x = new Set([I.d4z.DM, I.d4z.GROUP_DM, I.d4z.GUILD_TEXT, I.d4z.GUILD_ANNOUNCEMENT, I.d4z.ANNOUNCEMENT_THREAD, I.d4z.PUBLIC_THREAD, I.d4z.PRIVATE_THREAD]);
function G(e) {
    return x.has(e);
}
let k = new Set([I.d4z.DM, I.d4z.GROUP_DM, I.d4z.GUILD_VOICE, I.d4z.GUILD_STAGE_VOICE, I.d4z.PUBLIC_THREAD, I.d4z.PRIVATE_THREAD]);
function B(e) {
    return k.has(e);
}
let F = new Set([I.d4z.GUILD_TEXT, I.d4z.GUILD_ANNOUNCEMENT, I.d4z.ANNOUNCEMENT_THREAD, I.d4z.PUBLIC_THREAD, I.d4z.PRIVATE_THREAD, I.d4z.GUILD_DIRECTORY, I.d4z.GUILD_FORUM, I.d4z.GUILD_MEDIA, I.d4z.DM, I.d4z.GROUP_DM]);
function Z(e) {
    return F.has(e);
}
let V = new Set([I.d4z.ANNOUNCEMENT_THREAD, I.d4z.PUBLIC_THREAD, I.d4z.PRIVATE_THREAD]),
    H = new Set([I.d4z.GUILD_TEXT, I.d4z.GUILD_ANNOUNCEMENT, I.d4z.GUILD_FORUM, I.d4z.GUILD_MEDIA]);
function Y(e) {
    return V.has(e);
}
let j = new Set([I.d4z.DM, I.d4z.GROUP_DM, I.d4z.GUILD_TEXT, I.d4z.GUILD_ANNOUNCEMENT, I.d4z.ANNOUNCEMENT_THREAD, I.d4z.PUBLIC_THREAD, I.d4z.PRIVATE_THREAD, I.d4z.GUILD_FORUM, I.d4z.GUILD_MEDIA, I.d4z.GUILD_DIRECTORY, I.d4z.GUILD_VOICE, I.d4z.GUILD_STAGE_VOICE]);
function W(e) {
    return j.has(e);
}
let K = new Set([I.d4z.GUILD_TEXT, I.d4z.GUILD_ANNOUNCEMENT, I.d4z.GUILD_STORE, I.d4z.GUILD_VOICE, I.d4z.GUILD_STAGE_VOICE, I.d4z.ANNOUNCEMENT_THREAD, I.d4z.PUBLIC_THREAD, I.d4z.PRIVATE_THREAD, I.d4z.GUILD_DIRECTORY, I.d4z.GUILD_FORUM, I.d4z.GUILD_MEDIA]),
    z = new Set([I.d4z.GUILD_ANNOUNCEMENT, I.d4z.GUILD_CATEGORY, I.d4z.GUILD_STORE, I.d4z.GUILD_TEXT, I.d4z.GUILD_VOICE, I.d4z.GUILD_STAGE_VOICE, I.d4z.GUILD_DIRECTORY, I.d4z.GUILD_FORUM, I.d4z.GUILD_MEDIA]),
    q = new Set([I.d4z.GUILD_TEXT, I.d4z.GUILD_ANNOUNCEMENT]),
    Q = new Set([I.d4z.GUILD_TEXT, I.d4z.GUILD_ANNOUNCEMENT, I.d4z.GUILD_FORUM, I.d4z.GUILD_MEDIA]),
    X = new Set([I.d4z.GUILD_TEXT, I.d4z.GUILD_ANNOUNCEMENT, I.d4z.GUILD_FORUM, I.d4z.GUILD_MEDIA, I.d4z.GUILD_VOICE, I.d4z.GUILD_STAGE_VOICE]),
    $ = new Set([I.d4z.GUILD_ANNOUNCEMENT, I.d4z.GUILD_TEXT, I.d4z.GUILD_FORUM, I.d4z.GUILD_MEDIA, I.d4z.ANNOUNCEMENT_THREAD]),
    J = new Set([I.d4z.GUILD_TEXT, I.d4z.GUILD_FORUM, I.d4z.GUILD_MEDIA, I.d4z.ANNOUNCEMENT_THREAD, I.d4z.PUBLIC_THREAD, I.d4z.PRIVATE_THREAD, I.d4z.GUILD_VOICE, I.d4z.GUILD_STAGE_VOICE]),
    ee = new Set([I.d4z.PUBLIC_THREAD, I.d4z.PRIVATE_THREAD, I.d4z.GUILD_VOICE, I.d4z.GUILD_STAGE_VOICE]),
    et = new Set([I.d4z.GUILD_TEXT, I.d4z.GUILD_FORUM, I.d4z.GUILD_MEDIA]),
    en = new Set([I.d4z.GUILD_TEXT, I.d4z.GUILD_CATEGORY, I.d4z.GUILD_FORUM, I.d4z.GUILD_ANNOUNCEMENT]),
    er = new Set([I.d4z.GUILD_TEXT, I.d4z.GUILD_ANNOUNCEMENT, I.d4z.GUILD_FORUM, I.d4z.GUILD_VOICE]);
function ei(e) {
    let t = {};
    return (
        null == e ||
            e.forEach((e) => {
                t[e.id] = {
                    id: e.id,
                    type: e.type,
                    allow: _.vB(e.allow),
                    deny: _.vB(e.deny)
                };
            }),
        t
    );
}
function ea(e) {
    return null == e ? {} : s().reduce(e, (e, t) => ((e[t.id] = t.nick), e), {});
}
function eo(e) {
    return null == e
        ? []
        : e.map((e) => ({
              id: e.id,
              name: e.name,
              emojiId: 0 !== e.emoji_id ? e.emoji_id : void 0,
              emojiName: e.emoji_name,
              moderated: e.moderated
          }));
}
function es(e) {
    return null != e
        ? {
              id: e.id,
              name: e.name
          }
        : void 0;
}
let el = _.$e(I.Plq.CONNECT, I.Plq.VIEW_CHANNEL),
    eu = I.S7T.CONNECT | I.S7T.VIEW_CHANNEL;
function ec(e) {
    return b(e) ? el : I.Plq.VIEW_CHANNEL;
}
function ed(e) {
    return b(e) ? eu : I.S7T.VIEW_CHANNEL;
}
class e_ {
    constructor(e) {
        var t, n, r;
        g(this, 'id', void 0), g(this, 'type', void 0), g(this, 'name', void 0), g(this, 'guild_id', void 0), g(this, 'topic_', void 0), g(this, 'position_', void 0), g(this, 'permissionOverwrites_', void 0), g(this, 'bitrate_', void 0), g(this, 'rtcRegion', void 0), g(this, 'videoQualityMode', void 0), g(this, 'userLimit_', void 0), g(this, 'recipients', void 0), g(this, 'rawRecipients', void 0), g(this, 'ownerId', void 0), g(this, 'icon', void 0), g(this, 'application_id', void 0), g(this, 'nicks', void 0), g(this, 'nsfw_', void 0), g(this, 'parent_id', void 0), g(this, 'memberListId', void 0), g(this, 'rateLimitPerUser_', void 0), g(this, 'defaultThreadRateLimitPerUser', void 0), g(this, 'defaultAutoArchiveDuration', void 0), g(this, 'flags_', void 0), g(this, 'originChannelId', void 0), g(this, 'lastMessageId', void 0), g(this, 'lastPinTimestamp', void 0), g(this, 'availableTags', void 0), g(this, 'appliedTags', void 0), g(this, 'messageCount', void 0), g(this, 'memberCount', void 0), g(this, 'threadMetadata', void 0), g(this, 'memberIdsPreview', void 0), g(this, 'member', void 0), g(this, 'parentChannelThreadType', void 0), g(this, 'template', void 0), g(this, 'defaultReactionEmoji', void 0), g(this, 'isMessageRequest', void 0), g(this, 'isMessageRequestTimestamp', void 0), g(this, 'isSpam', void 0), g(this, 'totalMessageSent', void 0), g(this, 'defaultSortOrder', void 0), g(this, 'version', void 0), g(this, 'defaultForumLayout', void 0), g(this, 'iconEmoji', void 0), g(this, 'themeColor', void 0), g(this, 'safetyWarnings', void 0), g(this, 'blockedUserWarningDismissed', void 0), g(this, 'recipientFlags', void 0), g(this, 'linkedLobby', void 0), (this.id = e.id), (this.type = null !== (t = e.type) && void 0 !== t ? t : I.d4z.GUILD_TEXT), (this.name = null !== (n = e.name) && void 0 !== n ? n : ''), (this.guild_id = null !== (r = e.guild_id) && void 0 !== r ? r : null);
    }
}
function eE(e) {
    let t = e;
    return 'topic' in e && ((t.topic_ = e.topic), delete e.topic), 'position' in e && ((t.position_ = e.position), delete e.position), 'permissionOverwrites' in e && ((t.permissionOverwrites_ = e.permissionOverwrites), delete e.permissionOverwrites), 'bitrate' in e && ((t.bitrate_ = e.bitrate), delete e.bitrate), 'userLimit' in e && ((t.userLimit_ = e.userLimit), delete e.userLimit), 'nsfw' in e && ((t.nsfw_ = e.nsfw), delete e.nsfw), 'rateLimitPerUser' in e && ((t.rateLimitPerUser_ = e.rateLimitPerUser), delete e.rateLimitPerUser), 'flags' in e && ((t.flags_ = e.flags), delete e.flags), t;
}
let ef = Object.freeze({});
class eh extends e_ {
    get permissionOverwrites() {
        var e;
        return null !== (e = this.permissionOverwrites_) && void 0 !== e ? e : ef;
    }
    get topic() {
        var e;
        return null !== (e = this.topic_) && void 0 !== e ? e : '';
    }
    get position() {
        var e;
        return null !== (e = this.position_) && void 0 !== e ? e : 0;
    }
    get bitrate() {
        var e;
        return null !== (e = this.bitrate_) && void 0 !== e ? e : I.epw;
    }
    get userLimit() {
        var e;
        return null !== (e = this.userLimit_) && void 0 !== e ? e : 0;
    }
    get nsfw() {
        var e;
        return null !== (e = this.nsfw_) && void 0 !== e && e;
    }
    get rateLimitPerUser() {
        var e;
        return null !== (e = this.rateLimitPerUser_) && void 0 !== e ? e : 0;
    }
    get flags() {
        var e;
        return null !== (e = this.flags_) && void 0 !== e ? e : 0;
    }
    toJS() {
        return { ...this };
    }
    set(e, t) {
        return this.merge(eE({ [e]: t }));
    }
    merge(e) {
        let t = null,
            n = eE(e);
        for (let e in n) {
            if (!!n.hasOwnProperty(e)) this[e] !== n[e] && (null == t && (t = this.toJS()), (t[e] = n[e]));
        }
        return null != t ? new this.constructor(t) : this;
    }
    computeLurkerPermissionsAllowList() {
        if (this.isGuildStageVoice() && h.Z.isPublic(this.id)) return f.L_;
    }
    isNSFW() {
        return this.nsfw;
    }
    isManaged() {
        return null != this.application_id;
    }
    isPrivate() {
        return P(this.type);
    }
    isGroupDM() {
        return this.type === I.d4z.GROUP_DM;
    }
    isMultiUserDM() {
        return w(this.type);
    }
    isDM() {
        return this.type === I.d4z.DM;
    }
    isSystemDM() {
        return !1;
    }
    isArchivedThread() {
        var e;
        return this.isThread() && (null === (e = this.threadMetadata) || void 0 === e ? void 0 : e.archived) === !0;
    }
    isLockedThread() {
        var e;
        return this.isThread() && (null === (e = this.threadMetadata) || void 0 === e ? void 0 : e.locked) === !0;
    }
    isScheduledForDeletion() {
        return this.hasFlag(T.zZ.IS_SCHEDULED_FOR_DELETION);
    }
    isArchivedLockedThread() {
        var e, t;
        return V.has(this.type) && (null === (e = this.threadMetadata) || void 0 === e ? void 0 : e.archived) === !0 && (null === (t = this.threadMetadata) || void 0 === t ? void 0 : t.locked) === !0;
    }
    isForumPost() {
        return this.type === I.d4z.PUBLIC_THREAD && null != this.parentChannelThreadType && I.TPd.GUILD_THREADS_ONLY.has(this.parentChannelThreadType);
    }
    isCategory() {
        return this.type === I.d4z.GUILD_CATEGORY;
    }
    isVocal() {
        return B(this.type);
    }
    isGuildVocal() {
        return b(this.type);
    }
    isGuildVocalOrThread() {
        return this.isGuildVocal() || this.isVocalThread();
    }
    isGuildVoice() {
        return this.type === I.d4z.GUILD_VOICE;
    }
    isGuildStageVoice() {
        return this.type === I.d4z.GUILD_STAGE_VOICE;
    }
    isListenModeCapable() {
        return this.isGuildStageVoice();
    }
    isThread() {
        return Y(this.type);
    }
    isAnnouncementThread() {
        return this.type === I.d4z.ANNOUNCEMENT_THREAD;
    }
    isVocalThread() {
        return this.type === I.d4z.PUBLIC_THREAD || this.type === I.d4z.PRIVATE_THREAD;
    }
    isActiveThread() {
        var e;
        return this.isThread() && (null === (e = this.threadMetadata) || void 0 === e ? void 0 : e.archived) !== !0;
    }
    isDirectory() {
        return this.type === I.d4z.GUILD_DIRECTORY;
    }
    isForumLikeChannel() {
        return this.isForumChannel() || this.isMediaChannel();
    }
    isForumChannel() {
        return this.type === I.d4z.GUILD_FORUM;
    }
    isMediaChannel() {
        return this.type === I.d4z.GUILD_MEDIA;
    }
    isMediaPost() {
        return this.type === I.d4z.PUBLIC_THREAD && this.parentChannelThreadType === I.d4z.GUILD_MEDIA;
    }
    isRoleSubscriptionTemplatePreviewChannel() {
        return this.hasFlag(T.zZ.IS_ROLE_SUBSCRIPTION_TEMPLATE_PREVIEW_CHANNEL);
    }
    isOwner(e) {
        return this.ownerId === e;
    }
    getGuildId() {
        return this.guild_id;
    }
    getApplicationId() {
        return this.application_id;
    }
    getDefaultSortOrder() {
        var e;
        return null !== (e = this.defaultSortOrder) && void 0 !== e ? e : d.z.LATEST_ACTIVITY;
    }
    getDefaultLayout() {
        return this.isMediaChannel() ? c.X.GRID : null == this.defaultForumLayout || this.defaultForumLayout === c.X.DEFAULT ? c.X.LIST : this.defaultForumLayout;
    }
    get accessPermissions() {
        return ec(this.type);
    }
    hasFlag(e) {
        return (0, p.yE)(this.flags, e);
    }
}
class ep extends eh {
    static fromServer(e, t) {
        var n, r, i;
        let a = {
            application_id: e.application_id,
            appliedTags: e.applied_tags,
            availableTags: null != e.available_tags ? eo(e.available_tags) : void 0,
            bitrate_: e.bitrate,
            defaultAutoArchiveDuration: e.default_auto_archive_duration,
            defaultForumLayout: e.default_forum_layout,
            defaultReactionEmoji:
                null != e.default_reaction_emoji
                    ? {
                          emojiId: 0 !== e.default_reaction_emoji.emoji_id ? e.default_reaction_emoji.emoji_id : void 0,
                          emojiName: e.default_reaction_emoji.emoji_name
                      }
                    : void 0,
            defaultSortOrder: e.default_sort_order,
            defaultThreadRateLimitPerUser: e.default_thread_rate_limit_per_user,
            flags_: e.flags,
            guild_id: null !== (n = null != t ? t : e.guild_id) && void 0 !== n ? n : null,
            icon: e.icon,
            iconEmoji: es(e.icon_emoji),
            id: e.id,
            isMessageRequest: e.is_message_request,
            isMessageRequestTimestamp: e.is_message_request_timestamp,
            isSpam: e.is_spam,
            lastMessageId: e.last_message_id,
            lastPinTimestamp: e.last_pin_timestamp,
            member:
                null != e.member
                    ? {
                          flags: e.member.flags,
                          muted: e.member.muted,
                          muteConfig: e.member.mute_config,
                          joinTimestamp: e.member.join_timestamp
                      }
                    : void 0,
            memberCount: e.member_count,
            memberIdsPreview: e.member_ids_preview,
            memberListId: e.member_list_id,
            messageCount: e.message_count,
            name: null !== (r = e.name) && void 0 !== r ? r : '',
            nicks: ea(e.nicks),
            nsfw_: e.nsfw,
            originChannelId: e.origin_channel_id,
            ownerId: e.owner_id,
            parent_id: e.parent_id,
            parentChannelThreadType: void 0,
            permissionOverwrites_: ei(e.permission_overwrites),
            position_: e.position,
            rateLimitPerUser_: e.rate_limit_per_user,
            rawRecipients: null != e.recipients ? e.recipients : [],
            recipients: null != e.recipients ? e.recipients.map((e) => e.id) : [],
            recipientFlags: e.recipient_flags,
            rtcRegion: e.rtc_region,
            safetyWarnings: e.safety_warnings,
            blockedUserWarningDismissed: e.blocked_user_warning_dismissed,
            template: e.template,
            themeColor: e.theme_color,
            threadMetadata:
                null != e.thread_metadata
                    ? {
                          archived: e.thread_metadata.archived,
                          autoArchiveDuration: e.thread_metadata.auto_archive_duration,
                          archiveTimestamp: e.thread_metadata.archive_timestamp,
                          createTimestamp: e.thread_metadata.create_timestamp,
                          locked: e.thread_metadata.locked,
                          invitable: null === (i = e.thread_metadata.invitable) || void 0 === i || i
                      }
                    : void 0,
            topic_: e.topic,
            totalMessageSent: e.total_message_sent,
            type: null != e.type ? e.type : I.d4z.UNKNOWN,
            userLimit_: e.user_limit,
            version: e.version,
            videoQualityMode: e.video_quality_mode,
            linkedLobby: e.linked_lobby
        };
        return (0, E.gh)(a, ep);
    }
    constructor(e) {
        super(e), (this.application_id = e.application_id), (this.appliedTags = e.appliedTags), (this.availableTags = e.availableTags), (this.bitrate_ = e.bitrate_), (this.defaultAutoArchiveDuration = e.defaultAutoArchiveDuration), (this.defaultForumLayout = e.defaultForumLayout), (this.defaultReactionEmoji = e.defaultReactionEmoji), (this.defaultSortOrder = e.defaultSortOrder), (this.defaultThreadRateLimitPerUser = e.defaultThreadRateLimitPerUser), (this.flags_ = e.flags_), (this.icon = e.icon), (this.iconEmoji = e.iconEmoji), (this.isMessageRequest = e.isMessageRequest), (this.isMessageRequestTimestamp = e.isMessageRequestTimestamp), (this.isSpam = e.isSpam), (this.lastMessageId = e.lastMessageId), (this.lastPinTimestamp = e.lastPinTimestamp), (this.member = e.member), (this.memberCount = e.memberCount), (this.memberIdsPreview = e.memberIdsPreview), (this.memberListId = e.memberListId), (this.messageCount = e.messageCount), (this.nicks = e.nicks), (this.nsfw_ = e.nsfw_), (this.originChannelId = e.originChannelId), (this.ownerId = e.ownerId), (this.parent_id = e.parent_id), (this.parentChannelThreadType = e.parentChannelThreadType), (this.permissionOverwrites_ = e.permissionOverwrites_), (this.position_ = e.position_), (this.rateLimitPerUser_ = e.rateLimitPerUser_), (this.rawRecipients = e.rawRecipients), (this.recipients = e.recipients), (this.recipientFlags = e.recipientFlags), (this.rtcRegion = e.rtcRegion), (this.safetyWarnings = e.safetyWarnings), (this.blockedUserWarningDismissed = e.blockedUserWarningDismissed), (this.template = e.template), (this.themeColor = e.themeColor), (this.threadMetadata = e.threadMetadata), (this.topic_ = e.topic_), (this.userLimit_ = e.userLimit_), (this.version = e.version), (this.videoQualityMode = e.videoQualityMode), (this.linkedLobby = e.linkedLobby);
    }
}
class em extends eh {
    static fromServer(e, t) {
        var n, r, i, a;
        return ek({
            application_id: e.application_id,
            bitrate_: e.bitrate,
            flags_: e.flags,
            guild_id: null !== (n = null != t ? t : e.guild_id) && void 0 !== n ? n : null,
            iconEmoji: es(e.icon_emoji),
            id: e.id,
            lastMessageId: e.last_message_id,
            lastPinTimestamp: e.last_pin_timestamp,
            memberListId: e.member_list_id,
            name: null !== (r = e.name) && void 0 !== r ? r : '',
            nsfw_: null !== (i = e.nsfw) && void 0 !== i && i,
            originChannelId: e.origin_channel_id,
            parent_id: e.parent_id,
            permissionOverwrites_: ei(e.permission_overwrites),
            position_: e.position,
            rateLimitPerUser_: null !== (a = e.rate_limit_per_user) && void 0 !== a ? a : 0,
            rtcRegion: e.rtc_region,
            themeColor: e.theme_color,
            topic_: e.topic,
            type: null != e.type ? e.type : I.d4z.GUILD_VOICE,
            userLimit_: e.user_limit,
            version: e.version,
            videoQualityMode: e.video_quality_mode
        });
    }
    constructor(e) {
        var t;
        super(e), (this.application_id = e.application_id), (this.bitrate_ = e.bitrate_), (this.flags_ = e.flags_), (this.iconEmoji = e.iconEmoji), (this.lastMessageId = e.lastMessageId), (this.lastPinTimestamp = e.lastPinTimestamp), (this.memberListId = e.memberListId), (this.nsfw_ = e.nsfw_), (this.originChannelId = e.originChannelId), (this.parent_id = e.parent_id), (this.permissionOverwrites_ = null !== (t = e.permissionOverwrites_) && void 0 !== t ? t : {}), (this.position_ = e.position_), (this.rateLimitPerUser_ = e.rateLimitPerUser_), (this.rtcRegion = e.rtcRegion), (this.themeColor = e.themeColor), (this.topic_ = e.topic_), (this.userLimit_ = e.userLimit_), (this.version = e.version), (this.videoQualityMode = e.videoQualityMode);
    }
}
class eI extends eh {
    static fromServer(e, t) {
        var n, r, i, a;
        return ek({
            application_id: e.application_id,
            defaultAutoArchiveDuration: e.default_auto_archive_duration,
            defaultThreadRateLimitPerUser: e.default_thread_rate_limit_per_user,
            flags_: e.flags,
            guild_id: null !== (n = null != t ? t : e.guild_id) && void 0 !== n ? n : null,
            iconEmoji: es(e.icon_emoji),
            id: e.id,
            lastMessageId: e.last_message_id,
            lastPinTimestamp: e.last_pin_timestamp,
            memberListId: e.member_list_id,
            name: null !== (r = e.name) && void 0 !== r ? r : '',
            nsfw_: null !== (i = e.nsfw) && void 0 !== i && i,
            parent_id: e.parent_id,
            permissionOverwrites_: ei(e.permission_overwrites),
            position_: e.position,
            rateLimitPerUser_: null !== (a = e.rate_limit_per_user) && void 0 !== a ? a : 0,
            themeColor: e.theme_color,
            topic_: e.topic,
            type: null != e.type ? e.type : I.d4z.GUILD_TEXT,
            linkedLobby: e.linked_lobby,
            version: e.version
        });
    }
    constructor(e) {
        var t;
        super(e), (this.application_id = e.application_id), (this.defaultAutoArchiveDuration = e.defaultAutoArchiveDuration), (this.defaultThreadRateLimitPerUser = e.defaultThreadRateLimitPerUser), (this.flags_ = e.flags_), (this.iconEmoji = e.iconEmoji), (this.lastMessageId = e.lastMessageId), (this.lastPinTimestamp = e.lastPinTimestamp), (this.memberListId = e.memberListId), (this.nsfw_ = e.nsfw_), (this.parent_id = e.parent_id), (this.permissionOverwrites_ = null !== (t = e.permissionOverwrites_) && void 0 !== t ? t : {}), (this.position_ = e.position_), (this.rateLimitPerUser_ = e.rateLimitPerUser_), (this.themeColor = e.themeColor), (this.topic_ = e.topic_), (this.version = e.version), (this.linkedLobby = e.linkedLobby);
    }
}
class eT extends eI {}
class eg extends eI {}
class eS extends eI {}
class eA extends em {}
class ev extends eI {}
class eN extends eI {}
class eO extends em {}
class eR extends eh {
    static fromServer(e, t) {
        var n, r, i, a;
        let o = {
            availableTags: null != e.available_tags ? eo(e.available_tags) : [],
            defaultAutoArchiveDuration: e.default_auto_archive_duration,
            defaultForumLayout: e.default_forum_layout,
            defaultReactionEmoji:
                null != e.default_reaction_emoji
                    ? {
                          emojiId: 0 !== e.default_reaction_emoji.emoji_id ? e.default_reaction_emoji.emoji_id : void 0,
                          emojiName: e.default_reaction_emoji.emoji_name
                      }
                    : void 0,
            defaultSortOrder: e.default_sort_order,
            defaultThreadRateLimitPerUser: e.default_thread_rate_limit_per_user,
            flags_: e.flags,
            guild_id: null !== (n = null != t ? t : e.guild_id) && void 0 !== n ? n : null,
            iconEmoji: es(e.icon_emoji),
            id: e.id,
            lastMessageId: e.last_message_id,
            lastPinTimestamp: e.last_pin_timestamp,
            memberListId: e.member_list_id,
            name: null !== (r = e.name) && void 0 !== r ? r : '',
            nsfw_: null !== (i = e.nsfw) && void 0 !== i && i,
            parent_id: e.parent_id,
            permissionOverwrites_: ei(e.permission_overwrites),
            position_: e.position,
            rateLimitPerUser_: null !== (a = e.rate_limit_per_user) && void 0 !== a ? a : 0,
            template: e.template,
            themeColor: e.theme_color,
            topic_: e.topic,
            type: null != e.type ? e.type : I.d4z.GUILD_TEXT,
            version: e.version
        };
        return (0, E.gh)(o, eR);
    }
    constructor(e) {
        var t, n;
        super(e), (this.availableTags = null !== (t = e.availableTags) && void 0 !== t ? t : []), (this.defaultAutoArchiveDuration = e.defaultAutoArchiveDuration), (this.defaultForumLayout = e.defaultForumLayout), (this.defaultReactionEmoji = e.defaultReactionEmoji), (this.defaultSortOrder = e.defaultSortOrder), (this.defaultThreadRateLimitPerUser = e.defaultThreadRateLimitPerUser), (this.flags_ = e.flags_), (this.iconEmoji = e.iconEmoji), (this.lastMessageId = e.lastMessageId), (this.lastPinTimestamp = e.lastPinTimestamp), (this.memberListId = e.memberListId), (this.nsfw_ = e.nsfw_), (this.parent_id = e.parent_id), (this.permissionOverwrites_ = null !== (n = e.permissionOverwrites_) && void 0 !== n ? n : {}), (this.position_ = e.position_), (this.rateLimitPerUser_ = e.rateLimitPerUser_), (this.template = e.template), (this.themeColor = e.themeColor), (this.topic_ = e.topic_), (this.version = e.version);
    }
}
class eC {
    getOrCompute(e) {
        let t = this.cache.get(e);
        if (null != t) return t;
        {
            let t = parseInt(e, 10);
            return this.cache.set(e, t), t;
        }
    }
    constructor(e = 100) {
        g(this, 'cache', void 0), (this.cache = new (u())(e));
    }
}
let ey = new eC(),
    eL = new eC();
class eb extends eh {
    static sortRecipients(e, t) {
        let n = ey.getOrCompute(t);
        return [...(null != e ? e : [])].sort((e, t) => {
            let r = eL.getOrCompute(e.id);
            return (r ^ n) - (eL.getOrCompute(t.id) ^ n);
        });
    }
    static fromServer(e) {
        var t, n;
        let r = eb.sortRecipients(e.recipients, e.id),
            i = {
                application_id: e.application_id,
                flags_: e.flags,
                guild_id: null,
                icon: e.icon,
                id: e.id,
                isMessageRequest: e.is_message_request,
                isMessageRequestTimestamp: e.is_message_request_timestamp,
                isSpam: null !== (t = e.is_spam) && void 0 !== t && t,
                lastMessageId: e.last_message_id,
                lastPinTimestamp: e.last_pin_timestamp,
                name: null !== (n = e.name) && void 0 !== n ? n : '',
                nicks: ea(e.nicks),
                ownerId: e.owner_id,
                rawRecipients: r,
                recipients: r.map((e) => e.id),
                recipientFlags: e.recipient_flags,
                safetyWarnings: e.safety_warnings,
                blockedUserWarningDismissed: e.blocked_user_warning_dismissed,
                type: null != e.type ? e.type : I.d4z.DM
            };
        return (0, E.gh)(i, eb);
    }
    isSystemDM() {
        let e = this.rawRecipients[0];
        return this.type === I.d4z.DM && null != e && !0 === e.system;
    }
    getRecipientId() {
        return this.recipients[0];
    }
    addRecipient(e, t, n) {
        if (e === n) return this;
        {
            var r;
            let n = this.set(
                'recipients',
                s()
                    .uniq([...(null !== (r = this.recipients) && void 0 !== r ? r : []), e])
                    .sort(m.default.compare)
            );
            return null == t
                ? n
                : n.set('nicks', {
                      ...n.nicks,
                      [e]: t
                  });
        }
    }
    removeRecipient(e) {
        return this.set('recipients', s().without(this.recipients, e));
    }
    constructor(e) {
        var t, n;
        super(e), (this.application_id = e.application_id), (this.flags_ = e.flags_), (this.icon = e.icon), (this.isMessageRequest = e.isMessageRequest), (this.isMessageRequestTimestamp = e.isMessageRequestTimestamp), (this.isSpam = e.isSpam), (this.lastMessageId = e.lastMessageId), (this.lastPinTimestamp = e.lastPinTimestamp), (this.nicks = e.nicks), (this.ownerId = e.ownerId), (this.rawRecipients = eb.sortRecipients(e.rawRecipients, this.id)), (this.recipients = [...(null !== (t = e.recipients) && void 0 !== t ? t : [])].sort(m.default.compare)), (this.recipientFlags = e.recipientFlags), (this.safetyWarnings = null !== (n = e.safetyWarnings) && void 0 !== n ? n : []), (this.blockedUserWarningDismissed = e.blockedUserWarningDismissed);
    }
}
class eD extends eb {}
class eM extends eb {}
class eP extends eh {
    static fromServer(e, t) {
        var n, r, i, a, o;
        let s = {
            appliedTags: null !== (n = e.applied_tags) && void 0 !== n ? n : [],
            bitrate_: e.bitrate,
            flags_: e.flags,
            guild_id: null !== (r = null != t ? t : e.guild_id) && void 0 !== r ? r : null,
            id: e.id,
            lastMessageId: e.last_message_id,
            lastPinTimestamp: e.last_pin_timestamp,
            member:
                null != e.member
                    ? {
                          flags: e.member.flags,
                          muted: e.member.muted,
                          muteConfig: e.member.mute_config,
                          joinTimestamp: e.member.join_timestamp
                      }
                    : void 0,
            memberCount: e.member_count,
            memberIdsPreview: e.member_ids_preview,
            messageCount: e.message_count,
            name: null !== (i = e.name) && void 0 !== i ? i : '',
            nsfw_: null !== (a = e.nsfw) && void 0 !== a && a,
            ownerId: e.owner_id,
            parent_id: e.parent_id,
            parentChannelThreadType: e.parentChannelThreadType,
            rateLimitPerUser_: e.rate_limit_per_user,
            rtcRegion: e.rtc_region,
            threadMetadata:
                null != e.thread_metadata
                    ? {
                          archived: e.thread_metadata.archived,
                          autoArchiveDuration: e.thread_metadata.auto_archive_duration,
                          archiveTimestamp: e.thread_metadata.archive_timestamp,
                          createTimestamp: e.thread_metadata.create_timestamp,
                          locked: e.thread_metadata.locked,
                          invitable: null === (o = e.thread_metadata.invitable) || void 0 === o || o
                      }
                    : void 0,
            totalMessageSent: e.total_message_sent,
            type: null != e.type ? e.type : I.d4z.PUBLIC_THREAD,
            userLimit_: e.user_limit,
            videoQualityMode: e.video_quality_mode
        };
        return (0, E.gh)(s, eP);
    }
    constructor(e) {
        var t;
        super(e), (this.appliedTags = null !== (t = e.appliedTags) && void 0 !== t ? t : []), (this.bitrate_ = e.bitrate_), (this.flags_ = e.flags_), (this.lastMessageId = e.lastMessageId), (this.lastPinTimestamp = e.lastPinTimestamp), (this.member = e.member), (this.memberCount = e.memberCount), (this.memberIdsPreview = e.memberIdsPreview), (this.messageCount = e.messageCount), (this.nsfw_ = e.nsfw_), (this.ownerId = e.ownerId), (this.parent_id = e.parent_id), (this.parentChannelThreadType = e.parentChannelThreadType), (this.rateLimitPerUser_ = e.rateLimitPerUser_), (this.rtcRegion = e.rtcRegion), (this.threadMetadata = e.threadMetadata), (this.userLimit_ = e.userLimit_), (this.videoQualityMode = e.videoQualityMode);
    }
}
let eU = {
    [I.d4z.DM]: eb.fromServer,
    [I.d4z.GROUP_DM]: eb.fromServer,
    [I.d4z.GUILD_TEXT]: eI.fromServer,
    [I.d4z.GUILD_VOICE]: em.fromServer,
    [I.d4z.GUILD_STAGE_VOICE]: em.fromServer,
    [I.d4z.GUILD_CATEGORY]: eI.fromServer,
    [I.d4z.GUILD_ANNOUNCEMENT]: eI.fromServer,
    [I.d4z.GUILD_STORE]: eI.fromServer,
    [I.d4z.ANNOUNCEMENT_THREAD]: eP.fromServer,
    [I.d4z.PUBLIC_THREAD]: eP.fromServer,
    [I.d4z.PRIVATE_THREAD]: eP.fromServer,
    [I.d4z.GUILD_DIRECTORY]: eI.fromServer,
    [I.d4z.GUILD_FORUM]: eR.fromServer,
    [I.d4z.GUILD_MEDIA]: eR.fromServer
};
function ew(e, t) {
    var n, r;
    return (null !== (r = eU[null !== (n = e.type) && void 0 !== n ? n : I.d4z.GUILD_TEXT]) && void 0 !== r ? r : ep.fromServer)(e, t);
}
function ex(e) {
    return eB(e);
}
let eG = {
    [I.d4z.DM]: eD,
    [I.d4z.GROUP_DM]: eM,
    [I.d4z.GUILD_TEXT]: eN,
    [I.d4z.GUILD_VOICE]: eO,
    [I.d4z.GUILD_STAGE_VOICE]: eA,
    [I.d4z.GUILD_CATEGORY]: eg,
    [I.d4z.GUILD_ANNOUNCEMENT]: eT,
    [I.d4z.GUILD_STORE]: ev,
    [I.d4z.ANNOUNCEMENT_THREAD]: eP,
    [I.d4z.PUBLIC_THREAD]: eP,
    [I.d4z.PRIVATE_THREAD]: eP,
    [I.d4z.GUILD_DIRECTORY]: eS,
    [I.d4z.GUILD_FORUM]: eR,
    [I.d4z.GUILD_MEDIA]: eR
};
function ek(e) {
    var t, n;
    let r = null !== (n = eG[null !== (t = e.type) && void 0 !== t ? t : I.d4z.GUILD_TEXT]) && void 0 !== n ? n : ep;
    return (0, E.gh)(e, r);
}
function eB(e) {
    var t, n;
    return new (null !== (n = eG[null !== (t = e.type) && void 0 !== t ? t : I.d4z.GUILD_TEXT]) && void 0 !== n ? n : ep)(eE(e));
}
