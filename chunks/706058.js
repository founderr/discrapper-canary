e.d(t, {
    Dk: function () {
        return c;
    },
    Ix: function () {
        return o;
    },
    me: function () {
        return r;
    }
});
var i = e(544891),
    l = e(981631);
async function r(n, t, e, r, c) {
    return (
        await i.tn.post({
            url: l.ANM.STAGE_INSTANCES,
            body: {
                channel_id: n,
                topic: t,
                privacy_level: e,
                guild_scheduled_event_id: c,
                send_start_notification: r
            }
        })
    ).body;
}
async function c(n, t, e) {
    return (
        await i.tn.patch({
            url: l.ANM.STAGE_INSTANCE(n),
            body: {
                topic: t,
                privacy_level: e
            }
        })
    ).body;
}
function o(n) {
    return i.tn.del(l.ANM.STAGE_INSTANCE(n));
}
