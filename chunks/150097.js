n.d(e, {
    FI: function () {
        return k;
    },
    LL: function () {
        return U;
    },
    N_: function () {
        return L;
    },
    Xi: function () {
        return F;
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
    u = n(355298),
    r = n(957730),
    s = n(850908),
    d = n(572804),
    c = n(901461);
n(734934);
var f = n(569471),
    g = n(723170),
    E = n(695346),
    _ = n(131704),
    N = n(433355),
    I = n(592125),
    h = n(430824),
    p = n(19780),
    T = n(699516),
    S = n(944486),
    C = n(914010),
    m = n(885110),
    Z = n(9156),
    v = n(594174),
    A = n(630388),
    y = n(5192),
    P = n(352736),
    R = n(51144),
    b = n(981631),
    O = n(124368),
    D = n(388032);
function U(t, e, n) {
    let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
    if (e.hasFlag(b.xW$.SPAMMER) || n.isManaged()) return !1;
    let l = n.getGuildId();
    return !((null != l && a.Z.isLurking(l)) || (!i.ignoreSameUser && e.id === t.id) || T.Z.isBlockedOrIgnored(e.id) || (!i.ignoreStatus && m.Z.getStatus() === b.Skl.DND) || E.QZ.getSetting() || (!i.ignoreNoMessagesSetting && Z.ZP.allowNoMessages(n))) && !0;
}
function G(t, e) {
    var n;
    let i = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        l = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
    if (null != t.flags && (0, A.yE)(t.flags, b.iLy.SUPPRESS_NOTIFICATIONS)) return !1;
    let o = I.Z.getChannel(e);
    t.type === b.uaV.THREAD_STARTER_MESSAGE && (o = I.Z.getChannel(null == o ? void 0 : o.parent_id));
    let a = v.default.getCurrentUser(),
        r = v.default.getUser(null === (n = t.author) || void 0 === n ? void 0 : n.id);
    if (
        null == o ||
        null == a ||
        null == r ||
        (o.type === b.d4z.GROUP_DM && t.type === b.uaV.RECIPIENT_REMOVE) ||
        !U(a, r, o, {
            ignoreStatus: l,
            ignoreSameUser: b.V$x.SELF_MENTIONABLE_SYSTEM.has(t.type)
        }) ||
        u.Z.isMessageRequest(e)
    )
        return !1;
    if (!i) {
        let t = S.Z.getChannelId(C.Z.getGuildId());
        if (t === o.id || N.ZP.getCurrentSidebarChannelId(t) === o.id) return !1;
    }
    if (T.Z.isBlockedOrIgnoredForMessage(t) || (void 0 !== t.activity_instance && null != t.interaction && t.interaction.user.id === a.id)) return !1;
    if (_.Ec.has(o.type)) {
        if (f.Z.isMuted(o.id)) return !1;
        let e = (0, g.J)(o);
        return (
            e !== O.iN.NO_MESSAGES &&
            (e === O.iN.ALL_MESSAGES ||
                (0, d.Hl)({
                    rawMessage: t,
                    userId: a.id,
                    suppressEveryone: !1,
                    suppressRoles: !1
                }))
        );
    }
    {
        let e = !_.tx.has(o.type) || p.Z.getChannelId() === o.id;
        if (Z.ZP.allowAllMessages(o) && e) return !0;
        let n = Z.ZP.isSuppressEveryoneEnabled(o.getGuildId()),
            i = Z.ZP.isSuppressRolesEnabled(o.getGuildId());
        return (0, d.Hl)({
            rawMessage: t,
            userId: a.id,
            suppressEveryone: n,
            suppressRoles: i
        });
    }
}
function L(t, e) {
    var n;
    if (S.Z.getChannelId(C.Z.getGuildId()) !== e) return !1;
    let i = I.Z.getChannel(e);
    t.type === b.uaV.THREAD_STARTER_MESSAGE && (i = I.Z.getChannel(null == i ? void 0 : i.parent_id));
    let l = v.default.getCurrentUser(),
        o = v.default.getUser(null === (n = t.author) || void 0 === n ? void 0 : n.id);
    return !(null == i || null == l || null == o || i.isManaged() || o.hasFlag(b.xW$.SPAMMER) || T.Z.isBlockedOrIgnoredForMessage(t) || o.id === l.id || m.Z.getStatus() === b.Skl.DND || E.QZ.getSetting() || Z.ZP.allowNoMessages(i)) && !0;
}
function k(t, e) {
    let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        l = v.default.getCurrentUser(),
        o = v.default.getUser(t.ownerId);
    return (
        !(
            null == e ||
            null == l ||
            null == o ||
            !U(l, o, e, {
                ignoreStatus: i,
                ignoreNoMessagesSetting: !0
            }) ||
            Z.ZP.isGuildOrCategoryOrChannelMuted(e.guild_id, e.id)
        ) &&
        (!!n || S.Z.getChannelId(C.Z.getGuildId()) !== e.id) &&
        Z.ZP.getNewForumThreadsCreated(e)
    );
}
let w = (t, e, n) =>
    ''
        .concat(t, ' (')
        .concat((0, i.F6)(e, v.default, T.Z, !0))
        .concat(null != n ? ', '.concat((0, i.F6)(n, v.default, T.Z)) : '', ')');
function M(t, e, n, i) {
    switch (t.type) {
        case b.d4z.GUILD_ANNOUNCEMENT:
        case b.d4z.GUILD_TEXT:
            return e;
        case b.d4z.GROUP_DM:
            return n;
        case b.d4z.DM:
        default:
            return i;
    }
}
function F(t, e, n) {
    let a;
    let u = y.ZP.getName(t.getGuildId(), t.id, n),
        d = u;
    switch (t.type) {
        case b.d4z.GUILD_ANNOUNCEMENT:
        case b.d4z.GUILD_TEXT:
        case b.d4z.GUILD_VOICE:
        case b.d4z.ANNOUNCEMENT_THREAD:
        case b.d4z.PUBLIC_THREAD:
        case b.d4z.PRIVATE_THREAD:
            let f = I.Z.getChannel(t.parent_id);
            e.type === b.uaV.THREAD_STARTER_MESSAGE && null != f ? (d = w(d, f, I.Z.getChannel(f.parent_id))) : (0, c.Z)(e) ? null != h.Z.getGuild(t.getGuildId()) && (d = w(d, t, f)) : (d = w(d, t, f));
            break;
        case b.d4z.GROUP_DM:
            !(t.isManaged() && n.bot && d === (0, i.F6)(t, v.default, T.Z)) && (d = ''.concat(d, ' (').concat((0, i.F6)(t, v.default, T.Z, !0), ')'));
    }
    let g = e.content;
    if ((0, c.Z)(e) && null == (g = P.Z.stringify(e, t))) throw (new l.Z('NotificationTextUtils').warn('SystemMessageUtils.stringify(...) could not convert', e), Error('failed to stringify system message'));
    let E = 'sticker_items' in e ? e.sticker_items : 'stickerItems' in e ? e.stickerItems : e.stickers;
    if ('message_reference' in e ? (0, o.s)(e) : (0, o.Z)(e)) a = D.intl.string(D.t['9ddYKi']);
    else if (null != e.activity && null != e.application)
        a =
            e.activity.type === b.mFx.JOIN
                ? D.intl.formatToPlainString(M(t, D.t.E8CgCg, D.t.c6KHWF, D.t.Fy7rJC), {
                      user: u,
                      game: e.application.name
                  })
                : e.activity.type === b.mFx.JOIN_REQUEST
                  ? D.intl.formatToPlainString(M(t, D.t['/TD0lZ'], D.t['/TD0lZ'], D.t['/TD0lZ']), {
                        user: u,
                        game: e.application.name
                    })
                  : '';
    else if (null != e.activity && e.activity.type === b.mFx.LISTEN) {
        let e = M(t, D.t.SaDdmJ, D.t.qsODho, D.t.WeiMTU);
        a = D.intl.formatToPlainString(e, { user: u });
    } else if (null != E && E.length > 0) a = D.intl.formatToPlainString(D.t.zY4v1N, { stickerName: E[0].name });
    else if (e.type === b.uaV.PREMIUM_REFERRAL) a = D.intl.formatToPlainString(D.t.lieTqa, { username: R.ZP.getName(n) });
    else if (null != e.poll) a = D.intl.formatToPlainString(D.t.ImizdH, { question: e.poll.question.text });
    else if (e.type === b.uaV.POLL_RESULT) {
        var _, N, p;
        let t = null === (p = e.embeds) || void 0 === p ? void 0 : null === (N = p[0]) || void 0 === N ? void 0 : null === (_ = N.fields) || void 0 === _ ? void 0 : _.find((t) => ('name' in t ? t.name : t.rawName) === 'poll_question_text'),
            n = null != t ? ('value' in t ? t.value : t.rawValue) : '';
        a = D.intl.formatToPlainString(D.t['9WrecH'], { question: n });
    } else a = 0 !== g.length && t.type === b.d4z.DM && !n.bot && g.startsWith('> -# *') ? (a = r.ZP.unparse(g, t.id, !0)).substring(0, 1) + a.substring(4) : r.ZP.unparse(g, t.id, !0);
    return (
        0 === a.length &&
            (a = (function (t) {
                var e;
                if (void 0 !== t.embeds && t.embeds.length > 0) {
                    let e = t.embeds[0],
                        n = 'description' in e ? e.description : e.rawDescription,
                        i = 'title' in e ? e.title : e.rawTitle;
                    if (null != n) return null != i ? ''.concat(i, ' ').concat(n) : n;
                    if (null != i) return i;
                    if (null != e.fields && e.fields.length > 0) {
                        let t = e.fields[0],
                            n = 'name' in t ? t.name : t.rawName,
                            i = 'value' in t ? t.value : t.rawValue;
                        return ''.concat(n, ' ').concat(i);
                    }
                }
                if ((0, A.yE)(null !== (e = t.flags) && void 0 !== e ? e : 0, b.iLy.IS_VOICE_MESSAGE)) return D.intl.string(D.t.slFYgo);
                if (void 0 !== t.attachments && t.attachments.length > 0) {
                    let e = (0, s.Z)(t.attachments[0]);
                    return D.intl.formatToPlainString(D.t['51OkwM'], { filename: e });
                }
                return '';
            })(e)),
        {
            icon: n.getAvatarURL(t.guild_id, 128),
            title: d,
            body: a
        }
    );
}
