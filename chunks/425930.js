r.d(t, {
    N: function () {
        return _;
    }
});
var n = r(370336),
    a = r(263449);
function _(e, t = {}, r = (0, a.nZ)()) {
    let { message: _, name: o, email: i, url: E, source: c, associatedEventId: s, tags: l } = e,
        u = {
            contexts: {
                feedback: (0, n.Jr)({
                    contact_email: i,
                    name: o,
                    message: _,
                    url: E,
                    source: c,
                    associated_event_id: s
                })
            },
            type: 'feedback',
            level: 'info',
            tags: l
        },
        I = (r && r.getClient()) || (0, a.s3)();
    return I && I.emit('beforeSendFeedback', u, t), r.captureEvent(u, t);
}
