_.d(E, {
    B: function () {
        return N;
    },
    J: function () {
        return u;
    }
}),
    _(789020);
var t = _(442837),
    n = _(592125),
    s = _(9156),
    a = _(630388),
    M = _(569471),
    r = _(124368),
    S = _(981631);
function u(e) {
    let E = M.Z.flags(e.id);
    if (null == E) return r.iN.NO_MESSAGES;
    if ((0, a.yE)(E, r.iN.ALL_MESSAGES)) return r.iN.ALL_MESSAGES;
    if ((0, a.yE)(E, r.iN.ONLY_MENTIONS)) return r.iN.ONLY_MENTIONS;
    if ((0, a.yE)(E, r.iN.NO_MESSAGES)) return r.iN.NO_MESSAGES;
    let _ = n.Z.getChannel(e.parent_id);
    if (null == _ || s.ZP.isGuildOrCategoryOrChannelMuted(_.guild_id, _.id)) return r.iN.NO_MESSAGES;
    let t = s.ZP.resolvedMessageNotifications(_);
    return t === S.bL.NO_MESSAGES ? r.iN.NO_MESSAGES : t === S.bL.ONLY_MENTIONS ? r.iN.ONLY_MENTIONS : r.iN.ALL_MESSAGES;
}
function N(e) {
    return (0, t.e7)([M.Z, s.ZP, n.Z], () => u(e), [e]);
}
