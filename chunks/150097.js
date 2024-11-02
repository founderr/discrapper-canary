e.d(n, {
    FI: function () {
        return L;
    },
    LL: function () {
        return O;
    },
    N_: function () {
        return G;
    },
    Xi: function () {
        return M;
    },
    eF: function () {
        return U;
    }
}),
    e(789020),
    e(411104);
var i = e(933557),
    l = e(710845),
    o = e(978003),
    a = e(41776),
    u = e(355298),
    r = e(957730),
    s = e(572804),
    d = e(901461);
e(734934);
var c = e(569471),
    f = e(723170),
    g = e(695346),
    E = e(131704),
    _ = e(433355),
    N = e(592125),
    h = e(430824),
    I = e(19780),
    p = e(699516),
    T = e(944486),
    S = e(914010),
    C = e(885110),
    v = e(9156),
    m = e(594174),
    Z = e(630388),
    A = e(5192),
    y = e(352736),
    P = e(51144),
    R = e(981631),
    b = e(124368),
    D = e(388032);
function O(t, n, e) {
    let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
    if (n.hasFlag(R.xW$.SPAMMER) || e.isManaged()) return !1;
    let l = e.getGuildId();
    return !((null != l && a.Z.isLurking(l)) || (!i.ignoreSameUser && n.id === t.id) || p.Z.isBlocked(n.id) || (!i.ignoreStatus && C.Z.getStatus() === R.Skl.DND) || g.QZ.getSetting() || (!i.ignoreNoMessagesSetting && v.ZP.allowNoMessages(e))) && !0;
}
function U(t, n) {
    var e;
    let i = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        l = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
    if (null != t.flags && (0, Z.yE)(t.flags, R.iLy.SUPPRESS_NOTIFICATIONS)) return !1;
    let o = N.Z.getChannel(n);
    t.type === R.uaV.THREAD_STARTER_MESSAGE && (o = N.Z.getChannel(null == o ? void 0 : o.parent_id));
    let a = m.default.getCurrentUser(),
        r = m.default.getUser(null === (e = t.author) || void 0 === e ? void 0 : e.id);
    if (
        null == o ||
        null == a ||
        null == r ||
        (o.type === R.d4z.GROUP_DM && t.type === R.uaV.RECIPIENT_REMOVE) ||
        !O(a, r, o, {
            ignoreStatus: l,
            ignoreSameUser: R.V$x.SELF_MENTIONABLE_SYSTEM.has(t.type)
        }) ||
        u.Z.isMessageRequest(n)
    )
        return !1;
    if (!i) {
        let t = T.Z.getChannelId(S.Z.getGuildId());
        if (t === o.id || _.ZP.getCurrentSidebarChannelId(t) === o.id) return !1;
    }
    if (p.Z.isBlockedForMessage(t) || (void 0 !== t.activity_instance && null != t.interaction && t.interaction.user.id === a.id)) return !1;
    if (E.Ec.has(o.type)) {
        if (c.Z.isMuted(o.id)) return !1;
        let n = (0, f.J)(o);
        return (
            n !== b.iN.NO_MESSAGES &&
            (n === b.iN.ALL_MESSAGES ||
                (0, s.Hl)({
                    rawMessage: t,
                    userId: a.id,
                    suppressEveryone: !1,
                    suppressRoles: !1
                }))
        );
    }
    {
        let n = !E.tx.has(o.type) || I.Z.getChannelId() === o.id;
        if (v.ZP.allowAllMessages(o) && n) return !0;
        let e = v.ZP.isSuppressEveryoneEnabled(o.getGuildId()),
            i = v.ZP.isSuppressRolesEnabled(o.getGuildId());
        return (0, s.Hl)({
            rawMessage: t,
            userId: a.id,
            suppressEveryone: e,
            suppressRoles: i
        });
    }
}
function G(t, n) {
    var e;
    if (T.Z.getChannelId(S.Z.getGuildId()) !== n) return !1;
    let i = N.Z.getChannel(n);
    t.type === R.uaV.THREAD_STARTER_MESSAGE && (i = N.Z.getChannel(null == i ? void 0 : i.parent_id));
    let l = m.default.getCurrentUser(),
        o = m.default.getUser(null === (e = t.author) || void 0 === e ? void 0 : e.id);
    return !(null == i || null == l || null == o || i.isManaged() || o.hasFlag(R.xW$.SPAMMER) || p.Z.isBlockedForMessage(t) || o.id === l.id || C.Z.getStatus() === R.Skl.DND || g.QZ.getSetting() || v.ZP.allowNoMessages(i)) && !0;
}
function L(t, n) {
    let e = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        l = m.default.getCurrentUser(),
        o = m.default.getUser(t.ownerId);
    return (
        !(
            null == n ||
            null == l ||
            null == o ||
            !O(l, o, n, {
                ignoreStatus: i,
                ignoreNoMessagesSetting: !0
            }) ||
            v.ZP.isGuildOrCategoryOrChannelMuted(n.guild_id, n.id)
        ) &&
        (!!e || T.Z.getChannelId(S.Z.getGuildId()) !== n.id) &&
        v.ZP.getNewForumThreadsCreated(n)
    );
}
let w = (t, n, e) =>
    ''
        .concat(t, ' (')
        .concat((0, i.F6)(n, m.default, p.Z, !0))
        .concat(null != e ? ', '.concat((0, i.F6)(e, m.default, p.Z)) : '', ')');
function k(t, n, e, i) {
    switch (t.type) {
        case R.d4z.GUILD_ANNOUNCEMENT:
        case R.d4z.GUILD_TEXT:
            return n;
        case R.d4z.GROUP_DM:
            return e;
        case R.d4z.DM:
        default:
            return i;
    }
}
function M(t, n, e) {
    let a;
    let u = A.ZP.getName(t.getGuildId(), t.id, e),
        s = u;
    switch (t.type) {
        case R.d4z.GUILD_ANNOUNCEMENT:
        case R.d4z.GUILD_TEXT:
        case R.d4z.GUILD_VOICE:
        case R.d4z.ANNOUNCEMENT_THREAD:
        case R.d4z.PUBLIC_THREAD:
        case R.d4z.PRIVATE_THREAD:
            let c = N.Z.getChannel(t.parent_id);
            n.type === R.uaV.THREAD_STARTER_MESSAGE && null != c ? (s = w(s, c, N.Z.getChannel(c.parent_id))) : (0, d.Z)(n) ? null != h.Z.getGuild(t.getGuildId()) && (s = w(s, t, c)) : (s = w(s, t, c));
            break;
        case R.d4z.GROUP_DM:
            !(t.isManaged() && e.bot && s === (0, i.F6)(t, m.default, p.Z)) && (s = ''.concat(s, ' (').concat((0, i.F6)(t, m.default, p.Z, !0), ')'));
    }
    let f = n.content;
    if ((0, d.Z)(n) && null == (f = y.Z.stringify(n, t))) throw (new l.Z('NotificationTextUtils').warn('SystemMessageUtils.stringify(...) could not convert', n), Error('failed to stringify system message'));
    let g = 'sticker_items' in n ? n.sticker_items : n.stickers;
    if ('message_reference' in n ? (0, o.s)(n) : (0, o.Z)(n)) a = D.intl.string(D.t['9ddYKi']);
    else if (null != n.activity && null != n.application)
        a =
            n.activity.type === R.mFx.JOIN
                ? D.intl.formatToPlainString(k(t, D.t.E8CgCg, D.t.c6KHWF, D.t.Fy7rJC), {
                      user: u,
                      game: n.application.name
                  })
                : n.activity.type === R.mFx.JOIN_REQUEST
                  ? D.intl.formatToPlainString(k(t, D.t['/TD0lZ'], D.t['/TD0lZ'], D.t['/TD0lZ']), {
                        user: u,
                        game: n.application.name
                    })
                  : '';
    else if (null != n.activity && n.activity.type === R.mFx.LISTEN) {
        let n = k(t, D.t.SaDdmJ, D.t.qsODho, D.t.WeiMTU);
        a = D.intl.formatToPlainString(n, { user: u });
    } else if (null != g && g.length > 0) a = D.intl.formatToPlainString(D.t.zY4v1N, { stickerName: g[0].name });
    else if (n.type === R.uaV.PREMIUM_REFERRAL) a = D.intl.formatToPlainString(D.t.lieTqa, { username: P.ZP.getName(e) });
    else if (null != n.poll) a = D.intl.formatToPlainString(D.t.ImizdH, { question: n.poll.question.text });
    else if (n.type === R.uaV.POLL_RESULT) {
        var E, _, I;
        let t = null === (I = n.embeds) || void 0 === I ? void 0 : null === (_ = I[0]) || void 0 === _ ? void 0 : null === (E = _.fields) || void 0 === E ? void 0 : E.find((t) => ('name' in t ? t.name : t.rawName) === 'poll_question_text'),
            e = null != t ? ('value' in t ? t.value : t.rawValue) : '';
        a = D.intl.formatToPlainString(D.t['9WrecH'], { question: e });
    } else a = 0 !== f.length && t.type === R.d4z.DM && !e.bot && f.startsWith('> -# *') ? (a = r.ZP.unparse(f, t.id, !0)).substring(0, 1) + a.substring(4) : r.ZP.unparse(f, t.id, !0);
    return (
        0 === a.length &&
            (a = (function (t) {
                var n;
                if (void 0 !== t.embeds && t.embeds.length > 0) {
                    let n = t.embeds[0],
                        e = 'description' in n ? n.description : n.rawDescription,
                        i = 'title' in n ? n.title : n.rawTitle;
                    if (null != e) return null != i ? ''.concat(i, ' ').concat(e) : e;
                    if (null != i) return i;
                    if (null != n.fields) {
                        let t = n.fields[0],
                            e = 'name' in t ? t.name : t.rawName,
                            i = 'value' in t ? t.value : t.rawValue;
                        return ''.concat(e, ' ').concat(i);
                    }
                }
                if ((0, Z.yE)(null !== (n = t.flags) && void 0 !== n ? n : 0, R.iLy.IS_VOICE_MESSAGE)) return D.intl.string(D.t.slFYgo);
                if (void 0 !== t.attachments && t.attachments.length > 0) {
                    let n = t.attachments[0].filename;
                    return D.intl.formatToPlainString(D.t['51OkwM'], { filename: n });
                }
                return '';
            })(n)),
        {
            icon: e.getAvatarURL(t.guild_id, 128),
            title: s,
            body: a
        }
    );
}
