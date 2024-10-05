i.d(n, {
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
var t = i(470079),
    o = i(392711),
    a = i(626135),
    c = i(981631);
function r(e, n, i) {
    a.default.track(c.rMx.FORWARD_MESSAGE_STARTED, {
        channel_id: e,
        message_id: n,
        source: i
    });
}
function l(e) {
    let { channelId: n, messageId: i, numDestinationChanges: t, numQueryChanges: o } = e;
    a.default.track(c.rMx.FORWARD_MESSAGE_CANCELLED, {
        channel_id: n,
        message_id: i,
        num_destination_changes: t,
        num_query_changes: o
    });
}
function s(e) {
    let { channelId: n, messageId: i, hasError: t, hasContextMessage: o, numDestinations: r, numDestinationChanges: l, numQueryChanges: s, anyDestinationHasSlowmode: d } = e;
    a.default.track(c.rMx.FORWARD_MESSAGE_SENT, {
        channel_id: n,
        message_id: i,
        has_error: t,
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
    return t.useMemo(
        () =>
            (0, o.once)((e, n, i) => {
                a.default.track(c.rMx.FORWARD_ADD_RECIPIENT, {
                    channel_id: e,
                    message_id: n,
                    has_query: i
                });
            }),
        []
    );
}
function _() {
    return t.useMemo(
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
    return t.useMemo(
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
