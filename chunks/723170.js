n.d(t, {
    B: function () {
        return _;
    },
    J: function () {
        return d;
    }
});
var r = n(789020);
var i = n(442837),
    a = n(592125),
    o = n(9156),
    s = n(630388),
    l = n(569471),
    u = n(124368),
    c = n(981631);
function d(e) {
    let t = l.Z.flags(e.id);
    if (null == t) return u.iN.NO_MESSAGES;
    if ((0, s.yE)(t, u.iN.ALL_MESSAGES)) return u.iN.ALL_MESSAGES;
    if ((0, s.yE)(t, u.iN.ONLY_MENTIONS)) return u.iN.ONLY_MENTIONS;
    if ((0, s.yE)(t, u.iN.NO_MESSAGES)) return u.iN.NO_MESSAGES;
    let n = a.Z.getChannel(e.parent_id);
    if (null == n || o.ZP.isGuildOrCategoryOrChannelMuted(n.guild_id, n.id)) return u.iN.NO_MESSAGES;
    let r = o.ZP.resolvedMessageNotifications(n);
    return r === c.bL.NO_MESSAGES ? u.iN.NO_MESSAGES : r === c.bL.ONLY_MENTIONS ? u.iN.ONLY_MENTIONS : u.iN.ALL_MESSAGES;
}
function _(e) {
    return (0, i.e7)([l.Z, o.ZP, a.Z], () => d(e), [e]);
}
