e.d(t, {
    B: function () {
        return s;
    },
    J: function () {
        return c;
    }
}),
    e(789020);
var r = e(442837),
    i = e(592125),
    u = e(9156),
    l = e(630388),
    a = e(569471),
    o = e(124368),
    d = e(981631);
function c(n) {
    let t = a.Z.flags(n.id);
    if (null == t) return o.iN.NO_MESSAGES;
    if ((0, l.yE)(t, o.iN.ALL_MESSAGES)) return o.iN.ALL_MESSAGES;
    if ((0, l.yE)(t, o.iN.ONLY_MENTIONS)) return o.iN.ONLY_MENTIONS;
    if ((0, l.yE)(t, o.iN.NO_MESSAGES)) return o.iN.NO_MESSAGES;
    let e = i.Z.getChannel(n.parent_id);
    if (null == e || u.ZP.isGuildOrCategoryOrChannelMuted(e.guild_id, e.id)) return o.iN.NO_MESSAGES;
    let r = u.ZP.resolvedMessageNotifications(e);
    return r === d.bL.NO_MESSAGES ? o.iN.NO_MESSAGES : r === d.bL.ONLY_MENTIONS ? o.iN.ONLY_MENTIONS : o.iN.ALL_MESSAGES;
}
function s(n) {
    return (0, r.e7)([a.Z, u.ZP, i.Z], () => c(n), [n]);
}
