t.d(n, {
    Dk: function () {
        return s;
    },
    Ix: function () {
        return r;
    },
    me: function () {
        return a;
    }
});
var l = t(544891),
    i = t(981631);
async function a(e, n, t, a, s) {
    return (
        await l.tn.post({
            url: i.ANM.STAGE_INSTANCES,
            body: {
                channel_id: e,
                topic: n,
                privacy_level: t,
                guild_scheduled_event_id: s,
                send_start_notification: a
            }
        })
    ).body;
}
async function s(e, n, t) {
    return (
        await l.tn.patch({
            url: i.ANM.STAGE_INSTANCE(e),
            body: {
                topic: n,
                privacy_level: t
            }
        })
    ).body;
}
function r(e) {
    return l.tn.del(i.ANM.STAGE_INSTANCE(e));
}
