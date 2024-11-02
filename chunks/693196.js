n.d(e, {
    T: function () {
        return a;
    }
});
var i = n(526120),
    l = n(563534),
    r = n(734893),
    d = n(931261);
async function a(t, e) {
    if (null == t || !(0, d.s)(t)) return;
    let n = l.Z.getSettings(t);
    return (n === l.P && (await (0, i.cP)(t), (n = l.Z.getSettings(t))), n === l.P || null == n) ? void 0 : null != n.newMemberActions && null != n.newMemberActions.find((t) => t.channelId === e) ? r.j.TODO : null != n.resourceChannels && null != n.resourceChannels.find((t) => t.channelId === e) ? r.j.RESOURCE : void 0;
}
