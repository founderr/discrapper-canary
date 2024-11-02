e.d(t, {
    B: function () {
        return c;
    },
    J: function () {
        return s;
    }
}),
    e(789020);
var i = e(442837),
    r = e(592125),
    l = e(9156),
    u = e(630388),
    a = e(569471),
    d = e(124368),
    o = e(981631);
function s(n) {
    let t = a.Z.flags(n.id);
    if (null == t) return d.iN.NO_MESSAGES;
    if ((0, u.yE)(t, d.iN.ALL_MESSAGES)) return d.iN.ALL_MESSAGES;
    if ((0, u.yE)(t, d.iN.ONLY_MENTIONS)) return d.iN.ONLY_MENTIONS;
    if ((0, u.yE)(t, d.iN.NO_MESSAGES)) return d.iN.NO_MESSAGES;
    let e = r.Z.getChannel(n.parent_id);
    if (null == e || l.ZP.isGuildOrCategoryOrChannelMuted(e.guild_id, e.id)) return d.iN.NO_MESSAGES;
    let i = l.ZP.resolvedMessageNotifications(e);
    return i === o.bL.NO_MESSAGES ? d.iN.NO_MESSAGES : i === o.bL.ONLY_MENTIONS ? d.iN.ONLY_MENTIONS : d.iN.ALL_MESSAGES;
}
function c(n) {
    return (0, i.e7)([a.Z, l.ZP, r.Z], () => s(n), [n]);
}
