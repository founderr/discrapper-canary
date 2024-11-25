e.d(n, {
    Xy: function () {
        return u;
    },
    e4: function () {
        return c;
    },
    gN: function () {
        return d;
    },
    hi: function () {
        return N;
    },
    qR: function () {
        return l;
    },
    r_: function () {
        return E;
    }
});
var o = e(544891),
    r = e(570140),
    i = e(893776),
    s = e(290323),
    a = e(981631);
async function c(t) {
    await o.tn.put({
        url: a.ANM.CHANNEL_RECIPIENT_ME(t),
        body: { consent_status: s.h.ACCEPTED },
        rejectWithError: !1
    }),
        r.Z.dispatch({
            type: 'MESSAGE_REQUEST_ACCEPT_OPTIMISTIC',
            channelId: t
        });
}
function l(t) {
    return o.tn.put({
        url: a.ANM.CHANNEL_RECIPIENT_ME(t),
        body: { consent_status: s.h.UNSPECIFIED },
        rejectWithError: !1
    });
}
function u(t) {
    return o.tn.put({
        url: a.ANM.CHANNEL_RECIPIENT_ME(t),
        body: { consent_status: s.h.PENDING },
        rejectWithError: !1
    });
}
function d(t) {
    return o.tn.del({
        url: a.ANM.CHANNEL_RECIPIENT_ME(t),
        rejectWithError: !1
    });
}
function E(t) {
    return o.tn.put({
        url: a.ANM.CHANNEL_RECIPIENT_REJECT_BATCH(),
        body: { channel_ids: t },
        rejectWithError: !1
    });
}
function N() {
    i.Z.getLocationMetadata();
}
