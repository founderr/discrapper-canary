n.d(t, {
    Dl: function () {
        return f;
    },
    Ms: function () {
        return l;
    },
    Ot: function () {
        return c;
    },
    T: function () {
        return o;
    },
    Uj: function () {
        return d;
    },
    wS: function () {
        return u;
    }
});
var r = n(544891),
    i = n(570140),
    a = n(359119),
    s = n(981631);
function o(e, t) {
    return (
        i.Z.dispatch({
            type: 'DISMISS_CHANNEL_SAFETY_WARNINGS',
            channelId: e,
            warningIds: t
        }),
        r.tn.post({
            url: s.ANM.CHANNEL_SAFETY_WARNINGS_ACK(e),
            body: { warning_ids: t },
            oldFormErrors: !0,
            rejectWithError: !1
        })
    );
}
function l(e, t, n) {
    i.Z.dispatch({
        type: 'CHANNEL_SAFETY_WARNING_FEEDBACK',
        channelId: e,
        warningId: t,
        feedbackType: n
    });
}
function u(e) {
    i.Z.dispatch({
        type: 'CLEAR_CHANNEL_SAFETY_WARNINGS',
        channelId: e
    });
}
function c(e) {
    i.Z.dispatch({
        type: 'ACKNOWLEDGE_CHANNEL_SAFETY_WARNING_TOOLTIP',
        channelId: e
    });
}
function d(e) {
    return r.tn.post({
        url: s.ANM.SAFETY_WARNING_FALSE_POSITIVE(e),
        rejectWithError: !1
    });
}
function f(e) {
    return r.tn.post({
        url: s.ANM.ADD_SAFETY_WARNING(e),
        body: { safety_warning_type: a.pj.STRANGER_DANGER },
        rejectWithError: !1
    });
}
