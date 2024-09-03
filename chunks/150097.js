n.d(t, {
    FI: function () {
        return P;
    },
    LL: function () {
        return y;
    },
    N_: function () {
        return G;
    },
    Xi: function () {
        return b;
    },
    eF: function () {
        return U;
    }
}),
    n(789020),
    n(411104);
var i = n(933557),
    l = n(710845),
    o = n(978003),
    s = n(41776),
    u = n(355298),
    a = n(957730),
    r = n(572804),
    d = n(901461);
n(734934);
var c = n(569471),
    _ = n(723170),
    E = n(695346),
    T = n(131704),
    I = n(433355),
    f = n(592125),
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
    L = n(689938);
function y(e, t, n) {
    let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
    if (t.hasFlag(M.xW$.SPAMMER) || n.isManaged()) return !1;
    let l = n.getGuildId();
    return !((null != l && s.Z.isLurking(l)) || (!i.ignoreSameUser && t.id === e.id) || C.Z.isBlocked(t.id) || (!i.ignoreStatus && Z.Z.getStatus() === M.Skl.DND) || E.QZ.getSetting() || (!i.ignoreNoMessagesSetting && O.ZP.allowNoMessages(n))) && !0;
}
function U(e, t) {
    var n;
    let i = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        l = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
    if (null != e.flags && (0, v.yE)(e.flags, M.iLy.SUPPRESS_NOTIFICATIONS)) return !1;
    let o = f.Z.getChannel(t);
    e.type === M.uaV.THREAD_STARTER_MESSAGE && (o = f.Z.getChannel(null == o ? void 0 : o.parent_id));
    let s = h.default.getCurrentUser(),
        a = h.default.getUser(null === (n = e.author) || void 0 === n ? void 0 : n.id);
    if (
        null == o ||
        null == s ||
        null == a ||
        (o.type === M.d4z.GROUP_DM && e.type === M.uaV.RECIPIENT_REMOVE) ||
        !y(s, a, o, {
            ignoreStatus: l,
            ignoreSameUser: M.V$x.SELF_MENTIONABLE_SYSTEM.has(e.type)
        }) ||
        u.Z.isMessageRequest(t)
    )
        return !1;
    if (!i) {
        let e = S.Z.getChannelId(A.Z.getGuildId());
        if (e === o.id || I.ZP.getCurrentSidebarChannelId(e) === o.id) return !1;
    }
    if (C.Z.isBlockedForMessage(e) || (void 0 !== e.activity_instance && null != e.interaction && e.interaction.user.id === s.id)) return !1;
    if (T.Ec.has(o.type)) {
        if (c.Z.isMuted(o.id)) return !1;
        let t = (0, _.J)(o);
        return (
            t !== R.iN.NO_MESSAGES &&
            (t === R.iN.ALL_MESSAGES ||
                (0, r.Hl)({
                    rawMessage: e,
                    userId: s.id,
                    suppressEveryone: !1,
                    suppressRoles: !1
                }))
        );
    }
    {
        let t = !T.tx.has(o.type) || g.Z.getChannelId() === o.id;
        if (O.ZP.allowAllMessages(o) && t) return !0;
        let n = O.ZP.isSuppressEveryoneEnabled(o.getGuildId()),
            i = O.ZP.isSuppressRolesEnabled(o.getGuildId());
        return (0, r.Hl)({
            rawMessage: e,
            userId: s.id,
            suppressEveryone: n,
            suppressRoles: i
        });
    }
}
function G(e, t) {
    var n;
    if (S.Z.getChannelId(A.Z.getGuildId()) !== t) return !1;
    let i = f.Z.getChannel(t);
    e.type === M.uaV.THREAD_STARTER_MESSAGE && (i = f.Z.getChannel(null == i ? void 0 : i.parent_id));
    let l = h.default.getCurrentUser(),
        o = h.default.getUser(null === (n = e.author) || void 0 === n ? void 0 : n.id);
    return !(null == i || null == l || null == o || i.isManaged() || o.hasFlag(M.xW$.SPAMMER) || C.Z.isBlockedForMessage(e) || o.id === l.id || Z.Z.getStatus() === M.Skl.DND || E.QZ.getSetting() || O.ZP.allowNoMessages(i)) && !0;
}
function P(e, t) {
    let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        l = h.default.getCurrentUser(),
        o = h.default.getUser(e.ownerId);
    return (
        !(
            null == t ||
            null == l ||
            null == o ||
            !y(l, o, t, {
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
function w(e, t, n, i) {
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
function b(e, t, n) {
    var s, u, r, c, _;
    let E;
    let T = m.ZP.getName(e.getGuildId(), e.id, n),
        I = T;
    switch (e.type) {
        case M.d4z.GUILD_ANNOUNCEMENT:
        case M.d4z.GUILD_TEXT:
        case M.d4z.GUILD_VOICE:
        case M.d4z.ANNOUNCEMENT_THREAD:
        case M.d4z.PUBLIC_THREAD:
        case M.d4z.PRIVATE_THREAD:
            let g = f.Z.getChannel(e.parent_id);
            t.type === M.uaV.THREAD_STARTER_MESSAGE && null != g ? (I = F(I, g, f.Z.getChannel(g.parent_id))) : (0, d.Z)(t) ? null != N.Z.getGuild(e.getGuildId()) && (I = F(I, e, g)) : (I = F(I, e, g));
            break;
        case M.d4z.GROUP_DM:
            !(e.isManaged() && n.bot && I === (0, i.F6)(e, h.default, C.Z)) && (I = ''.concat(I, ' (').concat((0, i.F6)(e, h.default, C.Z, !0), ')'));
    }
    let S = t.content;
    if ((0, d.Z)(t) && null == (S = p.Z.stringify(t, e))) throw (new l.Z('NotificationTextUtils').warn('SystemMessageUtils.stringify(...) could not convert', t), Error('failed to stringify system message'));
    let A = null !== (s = t.sticker_items) && void 0 !== s ? s : t.stickers;
    if ((0, o.s)(t)) E = L.Z.Messages.MESSAGE_FORWARDED_NOTIFICATION_BODY;
    else if (null != t.activity && null != t.application)
        E =
            t.activity.type === M.mFx.JOIN
                ? w(e, L.Z.Messages.NOTIFICATION_MESSAGE_CREATE_GUILD_ACTIVITY_JOIN, L.Z.Messages.NOTIFICATION_MESSAGE_CREATE_GROUP_DM_ACTIVITY_JOIN, L.Z.Messages.NOTIFICATION_MESSAGE_CREATE_DM_ACTIVITY_JOIN).format({
                      user: T,
                      game: t.application.name
                  })
                : t.activity.type === M.mFx.JOIN_REQUEST
                  ? w(e, L.Z.Messages.NOTIFICATION_MESSAGE_CREATE_DM_ACTIVITY_JOIN_REQUEST, L.Z.Messages.NOTIFICATION_MESSAGE_CREATE_DM_ACTIVITY_JOIN_REQUEST, L.Z.Messages.NOTIFICATION_MESSAGE_CREATE_DM_ACTIVITY_JOIN_REQUEST).format({
                        user: T,
                        game: t.application.name
                    })
                  : '';
    else if (null != t.activity && t.activity.type === M.mFx.LISTEN) E = w(e, L.Z.Messages.NOTIFICATION_MESSAGE_CREATE_GUILD_ACTIVITY_LISTEN, L.Z.Messages.NOTIFICATION_MESSAGE_CREATE_GROUP_DM_ACTIVITY_LISTEN, L.Z.Messages.NOTIFICATION_MESSAGE_CREATE_DM_ACTIVITY_LISTEN).format({ user: T });
    else if (null != A && A.length > 0) E = L.Z.Messages.STICKER_NOTIFICATION_BODY.format({ stickerName: A[0].name });
    else if (t.type === M.uaV.PREMIUM_REFERRAL) E = L.Z.Messages.SHARE_NITRO_EMBEDDED_MESSAGE_BODY_SHORT.format({ username: D.ZP.getName(n) });
    else if (null != t.poll) E = L.Z.Messages.POLL_SENT_NOTIFICATION.format({ question: t.poll.question.text });
    else if (t.type === M.uaV.POLL_RESULT) {
        let e = null === (c = t.embeds) || void 0 === c ? void 0 : null === (r = c[0]) || void 0 === r ? void 0 : null === (u = r.fields) || void 0 === u ? void 0 : u.find((e) => 'poll_question_text' === e.name),
            n = null !== (_ = null == e ? void 0 : e.value) && void 0 !== _ ? _ : '';
        E = L.Z.Messages.POLL_RESULTS_NOTIFICATION.format({ question: n });
    } else E = a.ZP.unparse(S, e.id, !0);
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
                if ((0, v.yE)(null !== (t = e.flags) && void 0 !== t ? t : 0, M.iLy.IS_VOICE_MESSAGE)) return L.Z.Messages.VOICE_MESSAGES_SENT_NOTIFICATION;
                if (void 0 !== e.attachments && e.attachments.length > 0) {
                    let t = e.attachments[0].filename;
                    return L.Z.Messages.NOTIFICATION_BODY_ATTACHMENT.format({ filename: t });
                }
                return '';
            })(t)),
        {
            icon: n.getAvatarURL(e.guild_id, 128),
            title: I,
            body: E
        }
    );
}
