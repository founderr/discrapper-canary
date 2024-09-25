n.d(t, {
    Ad: function () {
        return E;
    },
    Lb: function () {
        return s;
    },
    ZF: function () {
        return d;
    },
    gP: function () {
        return u;
    },
    mh: function () {
        return _;
    },
    sF: function () {
        return l;
    },
    xp: function () {
        return c;
    }
});
var r = n(470079),
    i = n(392711);
var a = n(626135),
    o = n(981631);
function s(e, t, n) {
    a.default.track(o.rMx.FORWARD_MESSAGE_STARTED, {
        channel_id: e,
        message_id: t,
        source: n
    });
}
function l(e) {
    let { channelId: t, messageId: n, numDestinationChanges: r, numQueryChanges: i } = e;
    a.default.track(o.rMx.FORWARD_MESSAGE_CANCELLED, {
        channel_id: t,
        message_id: n,
        num_destination_changes: r,
        num_query_changes: i
    });
}
function u(e) {
    let { channelId: t, messageId: n, hasError: r, hasContextMessage: i, numDestinations: s, numDestinationChanges: l, numQueryChanges: u, anyDestinationHasSlowmode: c } = e;
    a.default.track(o.rMx.FORWARD_MESSAGE_SENT, {
        channel_id: t,
        message_id: n,
        has_error: r,
        has_context_message: i,
        num_destinations: s,
        num_destination_changes: l,
        num_query_changes: u,
        any_destination_has_slowmode: c
    });
}
function c(e, t) {
    a.default.track(o.rMx.FORWARD_COPY_LINK, {
        channel_id: e,
        message_id: t
    });
}
function d() {
    return r.useMemo(
        () =>
            (0, i.once)((e, t, n) => {
                a.default.track(o.rMx.FORWARD_ADD_RECIPIENT, {
                    channel_id: e,
                    message_id: t,
                    has_query: n
                });
            }),
        []
    );
}
function _() {
    return r.useMemo(
        () =>
            (0, i.once)((e, t) => {
                a.default.track(o.rMx.FORWARD_EDIT_SEARCH, {
                    channel_id: e,
                    message_id: t
                });
            }),
        []
    );
}
function E() {
    return r.useMemo(
        () =>
            (0, i.once)((e, t) => {
                a.default.track(o.rMx.FORWARD_EDIT_CONTEXT_MESSAGE, {
                    channel_id: e,
                    message_id: t
                });
            }),
        []
    );
}
