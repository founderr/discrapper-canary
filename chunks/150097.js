n.d(t, {
    FI: function () {
        return F;
    },
    LL: function () {
        return y;
    },
    N_: function () {
        return G;
    },
    Xi: function () {
        return k;
    },
    eF: function () {
        return P;
    }
}),
    n(789020),
    n(653041),
    n(411104);
var i = n(933557),
    l = n(710845),
    s = n(978003),
    o = n(41776),
    a = n(355298),
    u = n(957730),
    r = n(572804),
    d = n(901461);
n(734934);
var _ = n(569471),
    c = n(723170),
    E = n(718107),
    T = n(695346),
    I = n(131704),
    f = n(433355),
    g = n(592125),
    N = n(430824),
    S = n(19780),
    C = n(699516),
    A = n(944486),
    O = n(914010),
    Z = n(885110),
    h = n(9156),
    m = n(594174),
    v = n(630388),
    p = n(5192),
    D = n(352736),
    R = n(51144),
    M = n(981631),
    L = n(124368),
    U = n(689938);
function y(e, t, n) {
    let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
    if (t.hasFlag(M.xW$.SPAMMER) || n.isManaged()) return !1;
    let l = n.getGuildId();
    return !((null != l && o.Z.isLurking(l)) || (!i.ignoreSameUser && t.id === e.id) || C.Z.isBlocked(t.id) || (!i.ignoreStatus && Z.Z.getStatus() === M.Skl.DND) || T.QZ.getSetting() || (!i.ignoreNoMessagesSetting && h.ZP.allowNoMessages(n))) && !0;
}
function P(e, t) {
    var n;
    let i = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        l = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
    if (null != e.flags && (0, v.yE)(e.flags, M.iLy.SUPPRESS_NOTIFICATIONS)) return !1;
    let s = g.Z.getChannel(t);
    e.type === M.uaV.THREAD_STARTER_MESSAGE && (s = g.Z.getChannel(null == s ? void 0 : s.parent_id));
    let o = m.default.getCurrentUser(),
        u = m.default.getUser(null === (n = e.author) || void 0 === n ? void 0 : n.id);
    if (
        null == s ||
        null == o ||
        null == u ||
        (s.type === M.d4z.GROUP_DM && e.type === M.uaV.RECIPIENT_REMOVE) ||
        !y(o, u, s, {
            ignoreStatus: l,
            ignoreSameUser: M.V$x.SELF_MENTIONABLE_SYSTEM.has(e.type)
        }) ||
        a.Z.isMessageRequest(t)
    )
        return !1;
    if (!i) {
        let e = A.Z.getChannelId(O.Z.getGuildId());
        if (e === s.id || f.ZP.getCurrentSidebarChannelId(e) === s.id) return !1;
    }
    if (C.Z.isBlockedForMessage(e) || (void 0 !== e.activity_instance && null != e.interaction && e.interaction.user.id === o.id)) return !1;
    if (I.Ec.has(s.type)) {
        if (_.Z.isMuted(s.id)) return !1;
        let t = (0, c.J)(s);
        return (
            t !== L.iN.NO_MESSAGES &&
            (t === L.iN.ALL_MESSAGES ||
                (0, r.Hl)({
                    rawMessage: e,
                    userId: o.id,
                    suppressEveryone: !1,
                    suppressRoles: !1
                }))
        );
    }
    {
        let t = !I.tx.has(s.type) || S.Z.getChannelId() === s.id;
        if (h.ZP.allowAllMessages(s) && t) return !0;
        let n = h.ZP.isSuppressEveryoneEnabled(s.getGuildId()),
            i = h.ZP.isSuppressRolesEnabled(s.getGuildId());
        return (0, r.Hl)({
            rawMessage: e,
            userId: o.id,
            suppressEveryone: n,
            suppressRoles: i
        });
    }
}
function G(e, t) {
    var n;
    if (A.Z.getChannelId(O.Z.getGuildId()) !== t) return !1;
    let i = g.Z.getChannel(t);
    e.type === M.uaV.THREAD_STARTER_MESSAGE && (i = g.Z.getChannel(null == i ? void 0 : i.parent_id));
    let l = m.default.getCurrentUser(),
        s = m.default.getUser(null === (n = e.author) || void 0 === n ? void 0 : n.id);
    return !(null == i || null == l || null == s || i.isManaged() || s.hasFlag(M.xW$.SPAMMER) || C.Z.isBlockedForMessage(e) || s.id === l.id || Z.Z.getStatus() === M.Skl.DND || T.QZ.getSetting() || h.ZP.allowNoMessages(i)) && !0;
}
function F(e, t) {
    let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        l = m.default.getCurrentUser(),
        s = m.default.getUser(e.ownerId);
    return (
        !(
            null == t ||
            null == l ||
            null == s ||
            !y(l, s, t, {
                ignoreStatus: i,
                ignoreNoMessagesSetting: !0
            }) ||
            h.ZP.isGuildOrCategoryOrChannelMuted(t.guild_id, t.id)
        ) &&
        (!!n || A.Z.getChannelId(O.Z.getGuildId()) !== t.id) &&
        h.ZP.getNewForumThreadsCreated(t)
    );
}
let w = (e, t, n) =>
    ''
        .concat(e, ' (')
        .concat((0, i.F6)(t, m.default, C.Z, !0))
        .concat(null != n ? ', '.concat((0, i.F6)(n, m.default, C.Z)) : '', ')');
function b(e, t, n, i) {
    switch (e.type) {
        case M.d4z.GUILD_ANNOUNCEMENT:
        case M.d4z.GUILD_TEXT:
            return t;
        case M.d4z.GROUP_DM:
            return n;
        case M.d4z.DM:
        default:
            return i;
    }
}
function k(e, t, n) {
    var o, a, r, _, c, T;
    let I;
    let f = p.ZP.getName(e.getGuildId(), e.id, n),
        S = f;
    switch (e.type) {
        case M.d4z.GUILD_ANNOUNCEMENT:
        case M.d4z.GUILD_TEXT:
        case M.d4z.GUILD_VOICE:
        case M.d4z.ANNOUNCEMENT_THREAD:
        case M.d4z.PUBLIC_THREAD:
        case M.d4z.PRIVATE_THREAD:
            let A = g.Z.getChannel(e.parent_id);
            t.type === M.uaV.THREAD_STARTER_MESSAGE && null != A ? (S = w(S, A, g.Z.getChannel(A.parent_id))) : (0, d.Z)(t) ? null != N.Z.getGuild(e.getGuildId()) && (S = w(S, e, A)) : (S = w(S, e, A));
            break;
        case M.d4z.GROUP_DM:
            !(e.isManaged() && n.bot && S === (0, i.F6)(e, m.default, C.Z)) && (S = ''.concat(S, ' (').concat((0, i.F6)(e, m.default, C.Z, !0), ')'));
    }
    let O = t.content;
    if ((0, d.Z)(t) && null == (O = D.Z.stringify(t, e))) throw (new l.Z('NotificationTextUtils').warn('SystemMessageUtils.stringify(...) could not convert', t), Error('failed to stringify system message'));
    let Z = null !== (o = t.sticker_items) && void 0 !== o ? o : t.stickers;
    if ((0, s.s)(t)) I = U.Z.Messages.MESSAGE_FORWARDED_NOTIFICATION_BODY;
    else if (null != t.activity && null != t.application)
        I =
            t.activity.type === M.mFx.JOIN
                ? b(e, U.Z.Messages.NOTIFICATION_MESSAGE_CREATE_GUILD_ACTIVITY_JOIN, U.Z.Messages.NOTIFICATION_MESSAGE_CREATE_GROUP_DM_ACTIVITY_JOIN, U.Z.Messages.NOTIFICATION_MESSAGE_CREATE_DM_ACTIVITY_JOIN).format({
                      user: f,
                      game: t.application.name
                  })
                : t.activity.type === M.mFx.JOIN_REQUEST
                  ? b(e, U.Z.Messages.NOTIFICATION_MESSAGE_CREATE_DM_ACTIVITY_JOIN_REQUEST, U.Z.Messages.NOTIFICATION_MESSAGE_CREATE_DM_ACTIVITY_JOIN_REQUEST, U.Z.Messages.NOTIFICATION_MESSAGE_CREATE_DM_ACTIVITY_JOIN_REQUEST).format({
                        user: f,
                        game: t.application.name
                    })
                  : '';
    else if (null != t.activity && t.activity.type === M.mFx.LISTEN) I = b(e, U.Z.Messages.NOTIFICATION_MESSAGE_CREATE_GUILD_ACTIVITY_LISTEN, U.Z.Messages.NOTIFICATION_MESSAGE_CREATE_GROUP_DM_ACTIVITY_LISTEN, U.Z.Messages.NOTIFICATION_MESSAGE_CREATE_DM_ACTIVITY_LISTEN).format({ user: f });
    else if (null != Z && Z.length > 0) I = U.Z.Messages.STICKER_NOTIFICATION_BODY.format({ stickerName: Z[0].name });
    else if (t.type === M.uaV.PREMIUM_REFERRAL) I = U.Z.Messages.SHARE_NITRO_EMBEDDED_MESSAGE_BODY_SHORT.format({ username: R.ZP.getName(n) });
    else if (null != t.poll) I = U.Z.Messages.POLL_SENT_NOTIFICATION.format({ question: t.poll.question.text });
    else if (t.type === M.uaV.POLL_RESULT) {
        let e = null === (_ = t.embeds) || void 0 === _ ? void 0 : null === (r = _[0]) || void 0 === r ? void 0 : null === (a = r.fields) || void 0 === a ? void 0 : a.find((e) => 'poll_question_text' === e.name),
            n = null !== (c = null == e ? void 0 : e.value) && void 0 !== c ? c : '';
        I = U.Z.Messages.POLL_RESULTS_NOTIFICATION.format({ question: n });
    } else I = u.ZP.unparse(O, e.id, !0);
    return (
        0 !== O.length &&
            (I =
                null !==
                    (T = (function (e) {
                        let t = m.default.getCurrentUser();
                        if (null == t) return null;
                        let { avatarReactReplyEnabled: n, statusReactReplyEnabled: i } = (0, E.f)({ location: 'NotificationTextUtils' });
                        if (!n && !i) return null;
                        let l = [];
                        return (i && (l.push(''.concat(U.Z.Messages.USER_PROFILE_REACTED_TO_STATUS.format({ username: R.ZP.getName(t) }))), l.push(''.concat(U.Z.Messages.USER_PROFILE_REPLIED_TO_STATUS.format({ username: R.ZP.getName(t) })))), n && (l.push(''.concat(U.Z.Messages.USER_PROFILE_REACTED_TO_AVATAR.format({ username: R.ZP.getName(t) }))), l.push(''.concat(U.Z.Messages.USER_PROFILE_REPLIED_TO_AVATAR.format({ username: R.ZP.getName(t) })))), l.some((t) => e.startsWith(''.concat('> -# *').concat(t)))) ? U.Z.Messages.USER_PROFILE_NOTIFICATION_BODY : null;
                    })(O)) && void 0 !== T
                    ? T
                    : I),
        0 === I.length &&
            (I = (function (e) {
                var t;
                if (void 0 !== e.embeds && e.embeds.length > 0) {
                    let t = e.embeds[0];
                    if (null != t.description) return null != t.title ? ''.concat(t.title, ' ').concat(t.description) : t.description;
                    if (null != t.title) return t.title;
                    if (null != t.fields) {
                        let e = t.fields[0];
                        return ''.concat(e.name, ' ').concat(e.value);
                    }
                }
                if ((0, v.yE)(null !== (t = e.flags) && void 0 !== t ? t : 0, M.iLy.IS_VOICE_MESSAGE)) return U.Z.Messages.VOICE_MESSAGES_SENT_NOTIFICATION;
                if (void 0 !== e.attachments && e.attachments.length > 0) {
                    let t = e.attachments[0].filename;
                    return U.Z.Messages.NOTIFICATION_BODY_ATTACHMENT.format({ filename: t });
                }
                return '';
            })(t)),
        {
            icon: n.getAvatarURL(e.guild_id, 128),
            title: S,
            body: I
        }
    );
}
