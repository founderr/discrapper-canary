n.d(t, {
    Dk: function () {
        return o;
    },
    Ix: function () {
        return s;
    },
    me: function () {
        return a;
    }
});
var r = n(544891),
    i = n(981631);
async function a(e, t, n, a, o) {
    return (
        await r.tn.post({
            url: i.ANM.STAGE_INSTANCES,
            body: {
                channel_id: e,
                topic: t,
                privacy_level: n,
                guild_scheduled_event_id: o,
                send_start_notification: a
            }
        })
    ).body;
}
async function o(e, t, n) {
    return (
        await r.tn.patch({
            url: i.ANM.STAGE_INSTANCE(e),
            body: {
                topic: t,
                privacy_level: n
            }
        })
    ).body;
}
function s(e) {
    return r.tn.del(i.ANM.STAGE_INSTANCE(e));
}
