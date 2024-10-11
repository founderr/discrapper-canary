t.d(n, {
    Ad: function () {
        return f;
    },
    Lb: function () {
        return s;
    },
    ZF: function () {
        return d;
    },
    gP: function () {
        return o;
    },
    mh: function () {
        return _;
    },
    sF: function () {
        return u;
    },
    xp: function () {
        return c;
    }
});
var a = t(470079),
    r = t(392711),
    i = t(626135),
    l = t(981631);
function s(e, n, t) {
    i.default.track(l.rMx.FORWARD_MESSAGE_STARTED, {
        channel_id: e,
        message_id: n,
        source: t
    });
}
function u(e) {
    let { channelId: n, messageId: t, numDestinationChanges: a, numQueryChanges: r } = e;
    i.default.track(l.rMx.FORWARD_MESSAGE_CANCELLED, {
        channel_id: n,
        message_id: t,
        num_destination_changes: a,
        num_query_changes: r
    });
}
function o(e) {
    let { channelId: n, messageId: t, hasError: a, hasContextMessage: r, numDestinations: s, numDestinationChanges: u, numQueryChanges: o, anyDestinationHasSlowmode: c } = e;
    i.default.track(l.rMx.FORWARD_MESSAGE_SENT, {
        channel_id: n,
        message_id: t,
        has_error: a,
        has_context_message: r,
        num_destinations: s,
        num_destination_changes: u,
        num_query_changes: o,
        any_destination_has_slowmode: c
    });
}
function c(e, n) {
    i.default.track(l.rMx.FORWARD_COPY_LINK, {
        channel_id: e,
        message_id: n
    });
}
function d() {
    return a.useMemo(
        () =>
            (0, r.once)((e, n, t) => {
                i.default.track(l.rMx.FORWARD_ADD_RECIPIENT, {
                    channel_id: e,
                    message_id: n,
                    has_query: t
                });
            }),
        []
    );
}
function _() {
    return a.useMemo(
        () =>
            (0, r.once)((e, n) => {
                i.default.track(l.rMx.FORWARD_EDIT_SEARCH, {
                    channel_id: e,
                    message_id: n
                });
            }),
        []
    );
}
function f() {
    return a.useMemo(
        () =>
            (0, r.once)((e, n) => {
                i.default.track(l.rMx.FORWARD_EDIT_CONTEXT_MESSAGE, {
                    channel_id: e,
                    message_id: n
                });
            }),
        []
    );
}
