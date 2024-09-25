n.d(t, {
    Xy: function () {
        return u;
    },
    e4: function () {
        return c;
    },
    gN: function () {
        return N;
    },
    hi: function () {
        return I;
    },
    qR: function () {
        return E;
    },
    r_: function () {
        return T;
    }
});
var s = n(544891),
    o = n(570140),
    r = n(893776),
    a = n(290323),
    i = n(981631);
async function c(e) {
    await s.tn.put({
        url: i.ANM.CHANNEL_RECIPIENT_ME(e),
        body: { consent_status: a.h.ACCEPTED }
    }),
        o.Z.dispatch({
            type: 'MESSAGE_REQUEST_ACCEPT_OPTIMISTIC',
            channelId: e
        });
}
function E(e) {
    return s.tn.put({
        url: i.ANM.CHANNEL_RECIPIENT_ME(e),
        body: { consent_status: a.h.UNSPECIFIED }
    });
}
function u(e) {
    return s.tn.put({
        url: i.ANM.CHANNEL_RECIPIENT_ME(e),
        body: { consent_status: a.h.PENDING }
    });
}
function N(e) {
    return s.tn.del({ url: i.ANM.CHANNEL_RECIPIENT_ME(e) });
}
function T(e) {
    return s.tn.put({
        url: i.ANM.CHANNEL_RECIPIENT_REJECT_BATCH(),
        body: { channel_ids: e }
    });
}
function I() {
    r.Z.getLocationMetadata();
}
