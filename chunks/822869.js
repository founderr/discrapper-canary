t.d(n, {
    Ad: function () {
        return f;
    },
    Lb: function () {
        return r;
    },
    ZF: function () {
        return u;
    },
    gP: function () {
        return s;
    },
    mh: function () {
        return _;
    },
    sF: function () {
        return l;
    },
    xp: function () {
        return d;
    }
});
var i = t(470079),
    o = t(392711),
    a = t(626135),
    c = t(981631);
function r(e, n, t) {
    a.default.track(c.rMx.FORWARD_MESSAGE_STARTED, {
        channel_id: e,
        message_id: n,
        source: t
    });
}
function l(e) {
    let { channelId: n, messageId: t, numDestinationChanges: i, numQueryChanges: o } = e;
    a.default.track(c.rMx.FORWARD_MESSAGE_CANCELLED, {
        channel_id: n,
        message_id: t,
        num_destination_changes: i,
        num_query_changes: o
    });
}
function s(e) {
    let { channelId: n, messageId: t, hasError: i, hasContextMessage: o, numDestinations: r, numDestinationChanges: l, numQueryChanges: s, anyDestinationHasSlowmode: d } = e;
    a.default.track(c.rMx.FORWARD_MESSAGE_SENT, {
        channel_id: n,
        message_id: t,
        has_error: i,
        has_context_message: o,
        num_destinations: r,
        num_destination_changes: l,
        num_query_changes: s,
        any_destination_has_slowmode: d
    });
}
function d(e, n) {
    a.default.track(c.rMx.FORWARD_COPY_LINK, {
        channel_id: e,
        message_id: n
    });
}
function u() {
    return i.useMemo(
        () =>
            (0, o.once)((e, n, t) => {
                a.default.track(c.rMx.FORWARD_ADD_RECIPIENT, {
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
            (0, o.once)((e, n) => {
                a.default.track(c.rMx.FORWARD_EDIT_SEARCH, {
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
            (0, o.once)((e, n) => {
                a.default.track(c.rMx.FORWARD_EDIT_CONTEXT_MESSAGE, {
                    channel_id: e,
                    message_id: n
                });
            }),
        []
    );
}
