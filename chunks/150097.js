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
    E = n(695346),
    T = n(131704),
    I = n(433355),
    f = n(592125),
    g = n(430824),
    N = n(19780),
    S = n(699516),
    C = n(944486),
    A = n(914010),
    O = n(885110),
    Z = n(9156),
    h = n(594174),
    m = n(630388),
    v = n(5192),
    D = n(352736),
    p = n(51144),
    R = n(981631),
    M = n(124368),
    L = n(689938);
let U = '> -# *';
function y(e, t, n) {
    let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
    if (t.hasFlag(R.xW$.SPAMMER) || n.isManaged()) return !1;
    let l = n.getGuildId();
    return !((null != l && o.Z.isLurking(l)) || (!i.ignoreSameUser && t.id === e.id) || S.Z.isBlocked(t.id) || (!i.ignoreStatus && O.Z.getStatus() === R.Skl.DND) || E.QZ.getSetting() || (!i.ignoreNoMessagesSetting && Z.ZP.allowNoMessages(n))) && !0;
}
function P(e, t) {
    var n;
    let i = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        l = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
    if (null != e.flags && (0, m.yE)(e.flags, R.iLy.SUPPRESS_NOTIFICATIONS)) return !1;
    let s = f.Z.getChannel(t);
    e.type === R.uaV.THREAD_STARTER_MESSAGE && (s = f.Z.getChannel(null == s ? void 0 : s.parent_id));
    let o = h.default.getCurrentUser(),
        u = h.default.getUser(null === (n = e.author) || void 0 === n ? void 0 : n.id);
    if (
        null == s ||
        null == o ||
        null == u ||
        (s.type === R.d4z.GROUP_DM && e.type === R.uaV.RECIPIENT_REMOVE) ||
        !y(o, u, s, {
            ignoreStatus: l,
            ignoreSameUser: R.V$x.SELF_MENTIONABLE_SYSTEM.has(e.type)
        }) ||
        a.Z.isMessageRequest(t)
    )
        return !1;
    if (!i) {
        let e = C.Z.getChannelId(A.Z.getGuildId());
        if (e === s.id || I.ZP.getCurrentSidebarChannelId(e) === s.id) return !1;
    }
    if (S.Z.isBlockedForMessage(e) || (void 0 !== e.activity_instance && null != e.interaction && e.interaction.user.id === o.id)) return !1;
    if (T.Ec.has(s.type)) {
        if (_.Z.isMuted(s.id)) return !1;
        let t = (0, c.J)(s);
        return (
            t !== M.iN.NO_MESSAGES &&
            (t === M.iN.ALL_MESSAGES ||
                (0, r.Hl)({
                    rawMessage: e,
                    userId: o.id,
                    suppressEveryone: !1,
                    suppressRoles: !1
                }))
        );
    }
    {
        let t = !T.tx.has(s.type) || N.Z.getChannelId() === s.id;
        if (Z.ZP.allowAllMessages(s) && t) return !0;
        let n = Z.ZP.isSuppressEveryoneEnabled(s.getGuildId()),
            i = Z.ZP.isSuppressRolesEnabled(s.getGuildId());
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
    if (C.Z.getChannelId(A.Z.getGuildId()) !== t) return !1;
    let i = f.Z.getChannel(t);
    e.type === R.uaV.THREAD_STARTER_MESSAGE && (i = f.Z.getChannel(null == i ? void 0 : i.parent_id));
    let l = h.default.getCurrentUser(),
        s = h.default.getUser(null === (n = e.author) || void 0 === n ? void 0 : n.id);
    return !(null == i || null == l || null == s || i.isManaged() || s.hasFlag(R.xW$.SPAMMER) || S.Z.isBlockedForMessage(e) || s.id === l.id || O.Z.getStatus() === R.Skl.DND || E.QZ.getSetting() || Z.ZP.allowNoMessages(i)) && !0;
}
function F(e, t) {
    let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        l = h.default.getCurrentUser(),
        s = h.default.getUser(e.ownerId);
    return (
        !(
            null == t ||
            null == l ||
            null == s ||
            !y(l, s, t, {
                ignoreStatus: i,
                ignoreNoMessagesSetting: !0
            }) ||
            Z.ZP.isGuildOrCategoryOrChannelMuted(t.guild_id, t.id)
        ) &&
        (!!n || C.Z.getChannelId(A.Z.getGuildId()) !== t.id) &&
        Z.ZP.getNewForumThreadsCreated(t)
    );
}
let w = (e, t, n) =>
    ''
        .concat(e, ' (')
        .concat((0, i.F6)(t, h.default, S.Z, !0))
        .concat(null != n ? ', '.concat((0, i.F6)(n, h.default, S.Z)) : '', ')');
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
function k(e, t, n) {
    var o, a, r, _, c, E;
    let T;
    let I = v.ZP.getName(e.getGuildId(), e.id, n),
        N = I;
    switch (e.type) {
        case R.d4z.GUILD_ANNOUNCEMENT:
        case R.d4z.GUILD_TEXT:
        case R.d4z.GUILD_VOICE:
        case R.d4z.ANNOUNCEMENT_THREAD:
        case R.d4z.PUBLIC_THREAD:
        case R.d4z.PRIVATE_THREAD:
            let C = f.Z.getChannel(e.parent_id);
            t.type === R.uaV.THREAD_STARTER_MESSAGE && null != C ? (N = w(N, C, f.Z.getChannel(C.parent_id))) : (0, d.Z)(t) ? null != g.Z.getGuild(e.getGuildId()) && (N = w(N, e, C)) : (N = w(N, e, C));
            break;
        case R.d4z.GROUP_DM:
            !(e.isManaged() && n.bot && N === (0, i.F6)(e, h.default, S.Z)) && (N = ''.concat(N, ' (').concat((0, i.F6)(e, h.default, S.Z, !0), ')'));
    }
    let A = t.content;
    if ((0, d.Z)(t) && null == (A = D.Z.stringify(t, e))) throw (new l.Z('NotificationTextUtils').warn('SystemMessageUtils.stringify(...) could not convert', t), Error('failed to stringify system message'));
    let O = null !== (o = t.sticker_items) && void 0 !== o ? o : t.stickers;
    if ((0, s.s)(t)) T = L.Z.Messages.MESSAGE_FORWARDED_NOTIFICATION_BODY;
    else if (null != t.activity && null != t.application)
        T =
            t.activity.type === R.mFx.JOIN
                ? b(e, L.Z.Messages.NOTIFICATION_MESSAGE_CREATE_GUILD_ACTIVITY_JOIN, L.Z.Messages.NOTIFICATION_MESSAGE_CREATE_GROUP_DM_ACTIVITY_JOIN, L.Z.Messages.NOTIFICATION_MESSAGE_CREATE_DM_ACTIVITY_JOIN).format({
                      user: I,
                      game: t.application.name
                  })
                : t.activity.type === R.mFx.JOIN_REQUEST
                  ? b(e, L.Z.Messages.NOTIFICATION_MESSAGE_CREATE_DM_ACTIVITY_JOIN_REQUEST, L.Z.Messages.NOTIFICATION_MESSAGE_CREATE_DM_ACTIVITY_JOIN_REQUEST, L.Z.Messages.NOTIFICATION_MESSAGE_CREATE_DM_ACTIVITY_JOIN_REQUEST).format({
                        user: I,
                        game: t.application.name
                    })
                  : '';
    else if (null != t.activity && t.activity.type === R.mFx.LISTEN) T = b(e, L.Z.Messages.NOTIFICATION_MESSAGE_CREATE_GUILD_ACTIVITY_LISTEN, L.Z.Messages.NOTIFICATION_MESSAGE_CREATE_GROUP_DM_ACTIVITY_LISTEN, L.Z.Messages.NOTIFICATION_MESSAGE_CREATE_DM_ACTIVITY_LISTEN).format({ user: I });
    else if (null != O && O.length > 0) T = L.Z.Messages.STICKER_NOTIFICATION_BODY.format({ stickerName: O[0].name });
    else if (t.type === R.uaV.PREMIUM_REFERRAL) T = L.Z.Messages.SHARE_NITRO_EMBEDDED_MESSAGE_BODY_SHORT.format({ username: p.ZP.getName(n) });
    else if (null != t.poll) T = L.Z.Messages.POLL_SENT_NOTIFICATION.format({ question: t.poll.question.text });
    else if (t.type === R.uaV.POLL_RESULT) {
        let e = null === (_ = t.embeds) || void 0 === _ ? void 0 : null === (r = _[0]) || void 0 === r ? void 0 : null === (a = r.fields) || void 0 === a ? void 0 : a.find((e) => 'poll_question_text' === e.name),
            n = null !== (c = null == e ? void 0 : e.value) && void 0 !== c ? c : '';
        T = L.Z.Messages.POLL_RESULTS_NOTIFICATION.format({ question: n });
    } else
        T =
            0 !== A.length && e.type === R.d4z.DM && A.startsWith(U)
                ? null !==
                      (E = (function (e) {
                          let t = h.default.getCurrentUser();
                          return null == t ? null : [''.concat(L.Z.Messages.USER_PROFILE_REACTED_TO_STATUS.format({ username: p.ZP.getName(t) })), ''.concat(L.Z.Messages.USER_PROFILE_REPLIED_TO_STATUS.format({ username: p.ZP.getName(t) })), ''.concat(L.Z.Messages.USER_PROFILE_REACTED_TO_AVATAR.format({ username: p.ZP.getName(t) })), ''.concat(L.Z.Messages.USER_PROFILE_REPLIED_TO_AVATAR.format({ username: p.ZP.getName(t) }))].some((t) => e.startsWith(''.concat(U).concat(t))) ? L.Z.Messages.USER_PROFILE_NOTIFICATION_BODY : null;
                      })(A)) && void 0 !== E
                    ? E
                    : u.ZP.unparse(A, e.id, !0)
                : u.ZP.unparse(A, e.id, !0);
    return (
        0 === T.length &&
            (T = (function (e) {
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
                if ((0, m.yE)(null !== (t = e.flags) && void 0 !== t ? t : 0, R.iLy.IS_VOICE_MESSAGE)) return L.Z.Messages.VOICE_MESSAGES_SENT_NOTIFICATION;
                if (void 0 !== e.attachments && e.attachments.length > 0) {
                    let t = e.attachments[0].filename;
                    return L.Z.Messages.NOTIFICATION_BODY_ATTACHMENT.format({ filename: t });
                }
                return '';
            })(t)),
        {
            icon: n.getAvatarURL(e.guild_id, 128),
            title: N,
            body: T
        }
    );
}
