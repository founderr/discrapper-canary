r.d(n, {
    Z: function () {
        return h;
    }
});
var i = r(411104);
var a = r(430198),
    s = r(557135),
    o = r(66999),
    l = r(592125),
    u = r(496675),
    c = r(944486),
    d = r(979651);
let f = 10000;
class _ extends Error {}
async function h(e) {
    let { channelId: n, timeoutMs: r = f, bypassChangeModal: i = !1 } = e,
        h = l.Z.getChannel(n);
    if (
        null == h ||
        !(await s.Z.handleVoiceConnect({
            bypassGuildIdCheck: !0,
            bypassChangeModal: i,
            channel: h,
            connected: d.Z.isInChannel(n),
            needSubscriptionToAccess: (0, o.$)(n, l.Z, a.Z, u.Z).needSubscriptionToAccess
        }))
    )
        return !1;
    let p = new Promise((e, i) => {
        let a = setTimeout(() => {
            i(new _('Joining voice channel has timed out.'));
        }, r);
        c.Z.addConditionalChangeListener(() => c.Z.getVoiceChannelId() !== n || (clearTimeout(a), e(), !1));
    });
    try {
        await p;
    } catch (e) {
        if (e instanceof _) return !1;
        throw e;
    }
    return !0;
}
