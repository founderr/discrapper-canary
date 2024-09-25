n.d(t, {
    Z: function () {
        return E;
    }
});
var r = n(411104);
var i = n(430198),
    a = n(557135),
    o = n(66999),
    s = n(592125),
    l = n(496675),
    u = n(944486),
    c = n(979651);
let d = 10000;
class _ extends Error {}
async function E(e) {
    let { channelId: t, timeoutMs: n = d, bypassChangeModal: r = !1 } = e,
        E = s.Z.getChannel(t);
    if (
        null == E ||
        !(await a.Z.handleVoiceConnect({
            bypassGuildIdCheck: !0,
            bypassChangeModal: r,
            channel: E,
            connected: c.Z.isInChannel(t),
            needSubscriptionToAccess: (0, o.$)(t, s.Z, i.Z, l.Z).needSubscriptionToAccess
        }))
    )
        return !1;
    let f = new Promise((e, r) => {
        let i = setTimeout(() => {
            r(new _('Joining voice channel has timed out.'));
        }, n);
        u.Z.addConditionalChangeListener(() => u.Z.getVoiceChannelId() !== t || (clearTimeout(i), e(), !1));
    });
    try {
        await f;
    } catch (e) {
        if (e instanceof _) return !1;
        throw e;
    }
    return !0;
}
