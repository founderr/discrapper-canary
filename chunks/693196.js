n.d(t, {
    T: function () {
        return a;
    }
});
var i = n(526120),
    l = n(563534),
    s = n(734893),
    r = n(931261);
async function a(e, t) {
    if (null == e || !(0, r.s)(e)) return;
    let n = l.Z.getSettings(e);
    return (n === l.P && (await (0, i.cP)(e), (n = l.Z.getSettings(e))), n === l.P || null == n) ? void 0 : null != n.newMemberActions && null != n.newMemberActions.find((e) => e.channelId === t) ? s.j.TODO : null != n.resourceChannels && null != n.resourceChannels.find((e) => e.channelId === t) ? s.j.RESOURCE : void 0;
}
