n.d(t, {
    Ad: function () {
        return h;
    },
    Lb: function () {
        return o;
    },
    ZF: function () {
        return d;
    },
    gP: function () {
        return c;
    },
    mh: function () {
        return m;
    },
    sF: function () {
        return s;
    },
    xp: function () {
        return u;
    }
});
var i = n(192379),
    r = n(392711),
    l = n(626135),
    a = n(981631);
function o(e, t, n) {
    l.default.track(a.rMx.FORWARD_MESSAGE_STARTED, {
        channel_id: e,
        message_id: t,
        source: n
    });
}
function s(e) {
    let { channelId: t, messageId: n, numDestinationChanges: i, numQueryChanges: r } = e;
    l.default.track(a.rMx.FORWARD_MESSAGE_CANCELLED, {
        channel_id: t,
        message_id: n,
        num_destination_changes: i,
        num_query_changes: r
    });
}
function c(e) {
    let { channelId: t, messageId: n, hasError: i, hasContextMessage: r, numDestinations: o, numDestinationChanges: s, numQueryChanges: c, anyDestinationHasSlowmode: u } = e;
    l.default.track(a.rMx.FORWARD_MESSAGE_SENT, {
        channel_id: t,
        message_id: n,
        has_error: i,
        has_context_message: r,
        num_destinations: o,
        num_destination_changes: s,
        num_query_changes: c,
        any_destination_has_slowmode: u
    });
}
function u(e, t) {
    l.default.track(a.rMx.FORWARD_COPY_LINK, {
        channel_id: e,
        message_id: t
    });
}
function d() {
    return i.useMemo(
        () =>
            (0, r.once)((e, t, n) => {
                l.default.track(a.rMx.FORWARD_ADD_RECIPIENT, {
                    channel_id: e,
                    message_id: t,
                    has_query: n
                });
            }),
        []
    );
}
function m() {
    return i.useMemo(
        () =>
            (0, r.once)((e, t) => {
                l.default.track(a.rMx.FORWARD_EDIT_SEARCH, {
                    channel_id: e,
                    message_id: t
                });
            }),
        []
    );
}
function h() {
    return i.useMemo(
        () =>
            (0, r.once)((e, t) => {
                l.default.track(a.rMx.FORWARD_EDIT_CONTEXT_MESSAGE, {
                    channel_id: e,
                    message_id: t
                });
            }),
        []
    );
}
