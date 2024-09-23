n.d(t, {
    FI: function () {
        return P;
    },
    LL: function () {
        return L;
    },
    N_: function () {
        return G;
    },
    Xi: function () {
        return w;
    },
    eF: function () {
        return U;
    }
}),
    n(789020),
    n(411104);
var i = n(933557),
    l = n(710845),
    s = n(978003),
    o = n(41776),
    u = n(355298),
    a = n(957730),
    r = n(572804),
    d = n(901461);
n(734934);
var c = n(569471),
    _ = n(723170),
    E = n(695346),
    T = n(131704),
    f = n(433355),
    I = n(592125),
    N = n(430824),
    g = n(19780),
    C = n(699516),
    S = n(944486),
    A = n(914010),
    Z = n(885110),
    O = n(9156),
    h = n(594174),
    v = n(630388),
    m = n(5192),
    p = n(352736),
    D = n(51144),
    M = n(981631),
    R = n(124368),
    y = n(689938);
function L(e, t, n) {
    let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
    if (t.hasFlag(M.xW$.SPAMMER) || n.isManaged()) return !1;
    let l = n.getGuildId();
    return !((null != l && o.Z.isLurking(l)) || (!i.ignoreSameUser && t.id === e.id) || C.Z.isBlocked(t.id) || (!i.ignoreStatus && Z.Z.getStatus() === M.Skl.DND) || E.QZ.getSetting() || (!i.ignoreNoMessagesSetting && O.ZP.allowNoMessages(n))) && !0;
}
function U(e, t) {
    var n;
    let i = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        l = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
    if (null != e.flags && (0, v.yE)(e.flags, M.iLy.SUPPRESS_NOTIFICATIONS)) return !1;
    let s = I.Z.getChannel(t);
    e.type === M.uaV.THREAD_STARTER_MESSAGE && (s = I.Z.getChannel(null == s ? void 0 : s.parent_id));
    let o = h.default.getCurrentUser(),
        a = h.default.getUser(null === (n = e.author) || void 0 === n ? void 0 : n.id);
    if (
        null == s ||
        null == o ||
        null == a ||
        (s.type === M.d4z.GROUP_DM && e.type === M.uaV.RECIPIENT_REMOVE) ||
        !L(o, a, s, {
            ignoreStatus: l,
            ignoreSameUser: M.V$x.SELF_MENTIONABLE_SYSTEM.has(e.type)
        }) ||
        u.Z.isMessageRequest(t)
    )
        return !1;
    if (!i) {
        let e = S.Z.getChannelId(A.Z.getGuildId());
        if (e === s.id || f.ZP.getCurrentSidebarChannelId(e) === s.id) return !1;
    }
    if (C.Z.isBlockedForMessage(e) || (void 0 !== e.activity_instance && null != e.interaction && e.interaction.user.id === o.id)) return !1;
    if (T.Ec.has(s.type)) {
        if (c.Z.isMuted(s.id)) return !1;
        let t = (0, _.J)(s);
        return (
            t !== R.iN.NO_MESSAGES &&
            (t === R.iN.ALL_MESSAGES ||
                (0, r.Hl)({
                    rawMessage: e,
                    userId: o.id,
                    suppressEveryone: !1,
                    suppressRoles: !1
                }))
        );
    }
    {
        let t = !T.tx.has(s.type) || g.Z.getChannelId() === s.id;
        if (O.ZP.allowAllMessages(s) && t) return !0;
        let n = O.ZP.isSuppressEveryoneEnabled(s.getGuildId()),
            i = O.ZP.isSuppressRolesEnabled(s.getGuildId());
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
    if (S.Z.getChannelId(A.Z.getGuildId()) !== t) return !1;
    let i = I.Z.getChannel(t);
    e.type === M.uaV.THREAD_STARTER_MESSAGE && (i = I.Z.getChannel(null == i ? void 0 : i.parent_id));
    let l = h.default.getCurrentUser(),
        s = h.default.getUser(null === (n = e.author) || void 0 === n ? void 0 : n.id);
    return !(null == i || null == l || null == s || i.isManaged() || s.hasFlag(M.xW$.SPAMMER) || C.Z.isBlockedForMessage(e) || s.id === l.id || Z.Z.getStatus() === M.Skl.DND || E.QZ.getSetting() || O.ZP.allowNoMessages(i)) && !0;
}
function P(e, t) {
    let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        l = h.default.getCurrentUser(),
        s = h.default.getUser(e.ownerId);
    return (
        !(
            null == t ||
            null == l ||
            null == s ||
            !L(l, s, t, {
                ignoreStatus: i,
                ignoreNoMessagesSetting: !0
            }) ||
            O.ZP.isGuildOrCategoryOrChannelMuted(t.guild_id, t.id)
        ) &&
        (!!n || S.Z.getChannelId(A.Z.getGuildId()) !== t.id) &&
        O.ZP.getNewForumThreadsCreated(t)
    );
}
let F = (e, t, n) =>
    ''
        .concat(e, ' (')
        .concat((0, i.F6)(t, h.default, C.Z, !0))
        .concat(null != n ? ', '.concat((0, i.F6)(n, h.default, C.Z)) : '', ')');
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
function w(e, t, n) {
    var o, u, r, c, _;
    let E;
    let T = m.ZP.getName(e.getGuildId(), e.id, n),
        f = T;
    switch (e.type) {
        case M.d4z.GUILD_ANNOUNCEMENT:
        case M.d4z.GUILD_TEXT:
        case M.d4z.GUILD_VOICE:
        case M.d4z.ANNOUNCEMENT_THREAD:
        case M.d4z.PUBLIC_THREAD:
        case M.d4z.PRIVATE_THREAD:
            let g = I.Z.getChannel(e.parent_id);
            t.type === M.uaV.THREAD_STARTER_MESSAGE && null != g ? (f = F(f, g, I.Z.getChannel(g.parent_id))) : (0, d.Z)(t) ? null != N.Z.getGuild(e.getGuildId()) && (f = F(f, e, g)) : (f = F(f, e, g));
            break;
        case M.d4z.GROUP_DM:
            !(e.isManaged() && n.bot && f === (0, i.F6)(e, h.default, C.Z)) && (f = ''.concat(f, ' (').concat((0, i.F6)(e, h.default, C.Z, !0), ')'));
    }
    let S = t.content;
    if ((0, d.Z)(t) && null == (S = p.Z.stringify(t, e))) throw (new l.Z('NotificationTextUtils').warn('SystemMessageUtils.stringify(...) could not convert', t), Error('failed to stringify system message'));
    let A = null !== (o = t.sticker_items) && void 0 !== o ? o : t.stickers;
    if ((0, s.s)(t)) E = y.Z.Messages.MESSAGE_FORWARDED_NOTIFICATION_BODY;
    else if (null != t.activity && null != t.application)
        E =
            t.activity.type === M.mFx.JOIN
                ? b(e, y.Z.Messages.NOTIFICATION_MESSAGE_CREATE_GUILD_ACTIVITY_JOIN, y.Z.Messages.NOTIFICATION_MESSAGE_CREATE_GROUP_DM_ACTIVITY_JOIN, y.Z.Messages.NOTIFICATION_MESSAGE_CREATE_DM_ACTIVITY_JOIN).format({
                      user: T,
                      game: t.application.name
                  })
                : t.activity.type === M.mFx.JOIN_REQUEST
                  ? b(e, y.Z.Messages.NOTIFICATION_MESSAGE_CREATE_DM_ACTIVITY_JOIN_REQUEST, y.Z.Messages.NOTIFICATION_MESSAGE_CREATE_DM_ACTIVITY_JOIN_REQUEST, y.Z.Messages.NOTIFICATION_MESSAGE_CREATE_DM_ACTIVITY_JOIN_REQUEST).format({
                        user: T,
                        game: t.application.name
                    })
                  : '';
    else if (null != t.activity && t.activity.type === M.mFx.LISTEN) E = b(e, y.Z.Messages.NOTIFICATION_MESSAGE_CREATE_GUILD_ACTIVITY_LISTEN, y.Z.Messages.NOTIFICATION_MESSAGE_CREATE_GROUP_DM_ACTIVITY_LISTEN, y.Z.Messages.NOTIFICATION_MESSAGE_CREATE_DM_ACTIVITY_LISTEN).format({ user: T });
    else if (null != A && A.length > 0) E = y.Z.Messages.STICKER_NOTIFICATION_BODY.format({ stickerName: A[0].name });
    else if (t.type === M.uaV.PREMIUM_REFERRAL) E = y.Z.Messages.SHARE_NITRO_EMBEDDED_MESSAGE_BODY_SHORT.format({ username: D.ZP.getName(n) });
    else if (null != t.poll) E = y.Z.Messages.POLL_SENT_NOTIFICATION.format({ question: t.poll.question.text });
    else if (t.type === M.uaV.POLL_RESULT) {
        let e = null === (c = t.embeds) || void 0 === c ? void 0 : null === (r = c[0]) || void 0 === r ? void 0 : null === (u = r.fields) || void 0 === u ? void 0 : u.find((e) => 'poll_question_text' === e.name),
            n = null !== (_ = null == e ? void 0 : e.value) && void 0 !== _ ? _ : '';
        E = y.Z.Messages.POLL_RESULTS_NOTIFICATION.format({ question: n });
    } else E = 0 !== S.length && e.type === M.d4z.DM && !n.bot && S.startsWith('> -# *') ? (E = a.ZP.unparse(S, e.id, !0)).substring(0, 1) + E.substring(4) : a.ZP.unparse(S, e.id, !0);
    return (
        0 === E.length &&
            (E = (function (e) {
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
                if ((0, v.yE)(null !== (t = e.flags) && void 0 !== t ? t : 0, M.iLy.IS_VOICE_MESSAGE)) return y.Z.Messages.VOICE_MESSAGES_SENT_NOTIFICATION;
                if (void 0 !== e.attachments && e.attachments.length > 0) {
                    let t = e.attachments[0].filename;
                    return y.Z.Messages.NOTIFICATION_BODY_ATTACHMENT.format({ filename: t });
                }
                return '';
            })(t)),
        {
            icon: n.getAvatarURL(e.guild_id, 128),
            title: f,
            body: E
        }
    );
}
