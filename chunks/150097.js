n.d(t, {
    FI: function () {
        return F;
    },
    LL: function () {
        return L;
    },
    N_: function () {
        return U;
    },
    Xi: function () {
        return w;
    },
    eF: function () {
        return G;
    }
}),
    n(789020),
    n(411104);
var i = n(933557),
    l = n(710845),
    o = n(978003),
    a = n(41776),
    s = n(355298),
    u = n(957730),
    r = n(572804),
    d = n(901461);
n(734934);
var c = n(569471),
    _ = n(723170),
    E = n(695346),
    f = n(131704),
    I = n(433355),
    T = n(592125),
    N = n(430824),
    g = n(19780),
    A = n(699516),
    C = n(944486),
    S = n(914010),
    Z = n(885110),
    h = n(9156),
    O = n(594174),
    p = n(630388),
    m = n(5192),
    v = n(352736),
    D = n(51144),
    R = n(981631),
    M = n(124368),
    y = n(689938);
function L(e, t, n) {
    let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
    if (t.hasFlag(R.xW$.SPAMMER) || n.isManaged()) return !1;
    let l = n.getGuildId();
    return !((null != l && a.Z.isLurking(l)) || (!i.ignoreSameUser && t.id === e.id) || A.Z.isBlocked(t.id) || (!i.ignoreStatus && Z.Z.getStatus() === R.Skl.DND) || E.QZ.getSetting() || (!i.ignoreNoMessagesSetting && h.ZP.allowNoMessages(n))) && !0;
}
function G(e, t) {
    var n;
    let i = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        l = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
    if (null != e.flags && (0, p.yE)(e.flags, R.iLy.SUPPRESS_NOTIFICATIONS)) return !1;
    let o = T.Z.getChannel(t);
    e.type === R.uaV.THREAD_STARTER_MESSAGE && (o = T.Z.getChannel(null == o ? void 0 : o.parent_id));
    let a = O.default.getCurrentUser(),
        u = O.default.getUser(null === (n = e.author) || void 0 === n ? void 0 : n.id);
    if (
        null == o ||
        null == a ||
        null == u ||
        (o.type === R.d4z.GROUP_DM && e.type === R.uaV.RECIPIENT_REMOVE) ||
        !L(a, u, o, {
            ignoreStatus: l,
            ignoreSameUser: R.V$x.SELF_MENTIONABLE_SYSTEM.has(e.type)
        }) ||
        s.Z.isMessageRequest(t)
    )
        return !1;
    if (!i) {
        let e = C.Z.getChannelId(S.Z.getGuildId());
        if (e === o.id || I.ZP.getCurrentSidebarChannelId(e) === o.id) return !1;
    }
    if (A.Z.isBlockedForMessage(e) || (void 0 !== e.activity_instance && null != e.interaction && e.interaction.user.id === a.id)) return !1;
    if (f.Ec.has(o.type)) {
        if (c.Z.isMuted(o.id)) return !1;
        let t = (0, _.J)(o);
        return (
            t !== M.iN.NO_MESSAGES &&
            (t === M.iN.ALL_MESSAGES ||
                (0, r.Hl)({
                    rawMessage: e,
                    userId: a.id,
                    suppressEveryone: !1,
                    suppressRoles: !1
                }))
        );
    }
    {
        let t = !f.tx.has(o.type) || g.Z.getChannelId() === o.id;
        if (h.ZP.allowAllMessages(o) && t) return !0;
        let n = h.ZP.isSuppressEveryoneEnabled(o.getGuildId()),
            i = h.ZP.isSuppressRolesEnabled(o.getGuildId());
        return (0, r.Hl)({
            rawMessage: e,
            userId: a.id,
            suppressEveryone: n,
            suppressRoles: i
        });
    }
}
function U(e, t) {
    var n;
    if (C.Z.getChannelId(S.Z.getGuildId()) !== t) return !1;
    let i = T.Z.getChannel(t);
    e.type === R.uaV.THREAD_STARTER_MESSAGE && (i = T.Z.getChannel(null == i ? void 0 : i.parent_id));
    let l = O.default.getCurrentUser(),
        o = O.default.getUser(null === (n = e.author) || void 0 === n ? void 0 : n.id);
    return !(null == i || null == l || null == o || i.isManaged() || o.hasFlag(R.xW$.SPAMMER) || A.Z.isBlockedForMessage(e) || o.id === l.id || Z.Z.getStatus() === R.Skl.DND || E.QZ.getSetting() || h.ZP.allowNoMessages(i)) && !0;
}
function F(e, t) {
    let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        l = O.default.getCurrentUser(),
        o = O.default.getUser(e.ownerId);
    return (
        !(
            null == t ||
            null == l ||
            null == o ||
            !L(l, o, t, {
                ignoreStatus: i,
                ignoreNoMessagesSetting: !0
            }) ||
            h.ZP.isGuildOrCategoryOrChannelMuted(t.guild_id, t.id)
        ) &&
        (!!n || C.Z.getChannelId(S.Z.getGuildId()) !== t.id) &&
        h.ZP.getNewForumThreadsCreated(t)
    );
}
let P = (e, t, n) =>
    ''
        .concat(e, ' (')
        .concat((0, i.F6)(t, O.default, A.Z, !0))
        .concat(null != n ? ', '.concat((0, i.F6)(n, O.default, A.Z)) : '', ')');
function b(e, t, n, i) {
    switch (e.type) {
        case R.d4z.GUILD_ANNOUNCEMENT:
        case R.d4z.GUILD_TEXT:
            return t;
        case R.d4z.GROUP_DM:
            return n;
        case R.d4z.DM:
        default:
            return i;
    }
}
function w(e, t, n) {
    let a;
    let s = m.ZP.getName(e.getGuildId(), e.id, n),
        r = s;
    switch (e.type) {
        case R.d4z.GUILD_ANNOUNCEMENT:
        case R.d4z.GUILD_TEXT:
        case R.d4z.GUILD_VOICE:
        case R.d4z.ANNOUNCEMENT_THREAD:
        case R.d4z.PUBLIC_THREAD:
        case R.d4z.PRIVATE_THREAD:
            let c = T.Z.getChannel(e.parent_id);
            t.type === R.uaV.THREAD_STARTER_MESSAGE && null != c ? (r = P(r, c, T.Z.getChannel(c.parent_id))) : (0, d.Z)(t) ? null != N.Z.getGuild(e.getGuildId()) && (r = P(r, e, c)) : (r = P(r, e, c));
            break;
        case R.d4z.GROUP_DM:
            !(e.isManaged() && n.bot && r === (0, i.F6)(e, O.default, A.Z)) && (r = ''.concat(r, ' (').concat((0, i.F6)(e, O.default, A.Z, !0), ')'));
    }
    let _ = t.content;
    if ((0, d.Z)(t) && null == (_ = v.Z.stringify(t, e))) throw (new l.Z('NotificationTextUtils').warn('SystemMessageUtils.stringify(...) could not convert', t), Error('failed to stringify system message'));
    let E = 'sticker_items' in t ? t.sticker_items : t.stickers;
    if ('message_reference' in t ? (0, o.s)(t) : (0, o.Z)(t)) a = y.Z.Messages.MESSAGE_FORWARDED_NOTIFICATION_BODY;
    else if (null != t.activity && null != t.application)
        a =
            t.activity.type === R.mFx.JOIN
                ? b(e, y.Z.Messages.NOTIFICATION_MESSAGE_CREATE_GUILD_ACTIVITY_JOIN, y.Z.Messages.NOTIFICATION_MESSAGE_CREATE_GROUP_DM_ACTIVITY_JOIN, y.Z.Messages.NOTIFICATION_MESSAGE_CREATE_DM_ACTIVITY_JOIN).format({
                      user: s,
                      game: t.application.name
                  })
                : t.activity.type === R.mFx.JOIN_REQUEST
                  ? b(e, y.Z.Messages.NOTIFICATION_MESSAGE_CREATE_DM_ACTIVITY_JOIN_REQUEST, y.Z.Messages.NOTIFICATION_MESSAGE_CREATE_DM_ACTIVITY_JOIN_REQUEST, y.Z.Messages.NOTIFICATION_MESSAGE_CREATE_DM_ACTIVITY_JOIN_REQUEST).format({
                        user: s,
                        game: t.application.name
                    })
                  : '';
    else if (null != t.activity && t.activity.type === R.mFx.LISTEN) a = b(e, y.Z.Messages.NOTIFICATION_MESSAGE_CREATE_GUILD_ACTIVITY_LISTEN, y.Z.Messages.NOTIFICATION_MESSAGE_CREATE_GROUP_DM_ACTIVITY_LISTEN, y.Z.Messages.NOTIFICATION_MESSAGE_CREATE_DM_ACTIVITY_LISTEN).format({ user: s });
    else if (null != E && E.length > 0) a = y.Z.Messages.STICKER_NOTIFICATION_BODY.format({ stickerName: E[0].name });
    else if (t.type === R.uaV.PREMIUM_REFERRAL) a = y.Z.Messages.SHARE_NITRO_EMBEDDED_MESSAGE_BODY_SHORT.format({ username: D.ZP.getName(n) });
    else if (null != t.poll) a = y.Z.Messages.POLL_SENT_NOTIFICATION.format({ question: t.poll.question.text });
    else if (t.type === R.uaV.POLL_RESULT) {
        var f, I, g;
        let e = null === (g = t.embeds) || void 0 === g ? void 0 : null === (I = g[0]) || void 0 === I ? void 0 : null === (f = I.fields) || void 0 === f ? void 0 : f.find((e) => ('name' in e ? e.name : e.rawName) === 'poll_question_text'),
            n = null != e ? ('value' in e ? e.value : e.rawValue) : '';
        a = y.Z.Messages.POLL_RESULTS_NOTIFICATION.format({ question: n });
    } else a = 0 !== _.length && e.type === R.d4z.DM && !n.bot && _.startsWith('> -# *') ? (a = u.ZP.unparse(_, e.id, !0)).substring(0, 1) + a.substring(4) : u.ZP.unparse(_, e.id, !0);
    return (
        0 === a.length &&
            (a = (function (e) {
                var t;
                if (void 0 !== e.embeds && e.embeds.length > 0) {
                    let t = e.embeds[0],
                        n = 'description' in t ? t.description : t.rawDescription,
                        i = 'title' in t ? t.title : t.rawTitle;
                    if (null != n) return null != i ? ''.concat(i, ' ').concat(n) : n;
                    if (null != i) return i;
                    if (null != t.fields) {
                        let e = t.fields[0],
                            n = 'name' in e ? e.name : e.rawName,
                            i = 'value' in e ? e.value : e.rawValue;
                        return ''.concat(n, ' ').concat(i);
                    }
                }
                if ((0, p.yE)(null !== (t = e.flags) && void 0 !== t ? t : 0, R.iLy.IS_VOICE_MESSAGE)) return y.Z.Messages.VOICE_MESSAGES_SENT_NOTIFICATION;
                if (void 0 !== e.attachments && e.attachments.length > 0) {
                    let t = e.attachments[0].filename;
                    return y.Z.Messages.NOTIFICATION_BODY_ATTACHMENT.format({ filename: t });
                }
                return '';
            })(t)),
        {
            icon: n.getAvatarURL(e.guild_id, 128),
            title: r,
            body: a
        }
    );
}
