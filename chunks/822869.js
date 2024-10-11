t.d(n, {
    Ad: function () {
        return f;
    },
    Lb: function () {
        return u;
    },
    ZF: function () {
        return d;
    },
    gP: function () {
        return s;
    },
    mh: function () {
        return _;
    },
    sF: function () {
        return o;
    },
    xp: function () {
        return c;
    }
});
var i = t(470079),
    r = t(392711),
    a = t(626135),
    l = t(981631);
function u(e, n, t) {
    a.default.track(l.rMx.FORWARD_MESSAGE_STARTED, {
        channel_id: e,
        message_id: n,
        source: t
    });
}
function o(e) {
    let { channelId: n, messageId: t, numDestinationChanges: i, numQueryChanges: r } = e;
    a.default.track(l.rMx.FORWARD_MESSAGE_CANCELLED, {
        channel_id: n,
        message_id: t,
        num_destination_changes: i,
        num_query_changes: r
    });
}
function s(e) {
    let { channelId: n, messageId: t, hasError: i, hasContextMessage: r, numDestinations: u, numDestinationChanges: o, numQueryChanges: s, anyDestinationHasSlowmode: c } = e;
    a.default.track(l.rMx.FORWARD_MESSAGE_SENT, {
        channel_id: n,
        message_id: t,
        has_error: i,
        has_context_message: r,
        num_destinations: u,
        num_destination_changes: o,
        num_query_changes: s,
        any_destination_has_slowmode: c
    });
}
function c(e, n) {
    a.default.track(l.rMx.FORWARD_COPY_LINK, {
        channel_id: e,
        message_id: n
    });
}
function d() {
    return i.useMemo(
        () =>
            (0, r.once)((e, n, t) => {
                a.default.track(l.rMx.FORWARD_ADD_RECIPIENT, {
                    channel_id: e,
                    message_id: n,
                    has_query: t
                });
            }),
        []
    );
}
function _() {
    return i.useMemo(
        () =>
            (0, r.once)((e, n) => {
                a.default.track(l.rMx.FORWARD_EDIT_SEARCH, {
                    channel_id: e,
                    message_id: n
                });
            }),
        []
    );
}
function f() {
    return i.useMemo(
        () =>
            (0, r.once)((e, n) => {
                a.default.track(l.rMx.FORWARD_EDIT_CONTEXT_MESSAGE, {
                    channel_id: e,
                    message_id: n
                });
            }),
        []
    );
}
