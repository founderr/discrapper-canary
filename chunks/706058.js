t.d(e, {
    Dk: function () {
        return a;
    },
    Ix: function () {
        return r;
    },
    me: function () {
        return l;
    }
});
var i = t(544891),
    s = t(981631);
async function l(n, e, t, l, a) {
    return (
        await i.tn.post({
            url: s.ANM.STAGE_INSTANCES,
            body: {
                channel_id: n,
                topic: e,
                privacy_level: t,
                guild_scheduled_event_id: a,
                send_start_notification: l
            }
        })
    ).body;
}
async function a(n, e, t) {
    return (
        await i.tn.patch({
            url: s.ANM.STAGE_INSTANCE(n),
            body: {
                topic: e,
                privacy_level: t
            }
        })
    ).body;
}
function r(n) {
    return i.tn.del(s.ANM.STAGE_INSTANCE(n));
}
