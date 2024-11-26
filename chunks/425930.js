r.d(t, {
    N: function () {
        return _;
    }
});
var a = r(370336),
    n = r(263449);
function _(e, t = {}, r = (0, n.nZ)()) {
    let { message: _, name: o, email: E, url: i, source: c, associatedEventId: s, tags: l } = e,
        I = {
            contexts: {
                feedback: (0, a.Jr)({
                    contact_email: E,
                    name: o,
                    message: _,
                    url: i,
                    source: c,
                    associated_event_id: s
                })
            },
            type: 'feedback',
            level: 'info',
            tags: l
        },
        u = (r && r.getClient()) || (0, n.s3)();
    return u && u.emit('beforeSendFeedback', I, t), r.captureEvent(I, t);
}
