r.d(n, {
    Hl: function () {
        return l;
    },
    Sz: function () {
        return u;
    },
    ZP: function () {
        return o;
    }
});
var i = r(592125),
    a = r(271383),
    s = r(430824);
function o(e) {
    let { message: n, userId: r, suppressEveryone: i = !1, suppressRoles: a = !1 } = e;
    return u({
        userId: r,
        channelId: n.channel_id,
        mentionEveryone: n.mentionEveryone,
        mentionUsers: n.mentions,
        mentionRoles: n.mentionRoles,
        suppressEveryone: i,
        suppressRoles: a
    });
}
function l(e) {
    var n, r, i, a;
    let { rawMessage: s, userId: o, suppressEveryone: l = !1, suppressRoles: c = !1 } = e;
    return u({
        userId: o,
        channelId: s.channel_id,
        mentionEveryone: null !== (r = s.mention_everyone) && void 0 !== r && r,
        mentionUsers: null !== (i = null === (n = s.mentions) || void 0 === n ? void 0 : n.map((e) => e.id)) && void 0 !== i ? i : [],
        mentionRoles: null !== (a = s.mention_roles) && void 0 !== a ? a : [],
        suppressEveryone: l,
        suppressRoles: c
    });
}
function u(e) {
    let { userId: n, channelId: r, mentionEveryone: o, mentionUsers: l, mentionRoles: u, suppressEveryone: c = !1, suppressRoles: d = !1 } = e;
    if ((o && !c) || l.includes(n)) return !0;
    if (d || null == u || 0 === u.length) return !1;
    let f = i.Z.getChannel(r);
    if (null == f) return !1;
    let _ = f.getGuildId();
    if (null == _ || null == s.Z.getGuild(_)) return !1;
    let h = a.ZP.getMember(_, n);
    return null != h && u.some((e) => h.roles.includes(e));
}
