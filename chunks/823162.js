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
var i = e(544891),
    o = e(570140),
    s = e(893776),
    r = e(290323),
    a = e(981631);
async function c(t) {
    await i.tn.put({
        url: a.ANM.CHANNEL_RECIPIENT_ME(t),
        body: { consent_status: r.h.ACCEPTED }
    }),
        o.Z.dispatch({
            type: 'MESSAGE_REQUEST_ACCEPT_OPTIMISTIC',
            channelId: t
        });
}
function l(t) {
    return i.tn.put({
        url: a.ANM.CHANNEL_RECIPIENT_ME(t),
        body: { consent_status: r.h.UNSPECIFIED }
    });
}
function u(t) {
    return i.tn.put({
        url: a.ANM.CHANNEL_RECIPIENT_ME(t),
        body: { consent_status: r.h.PENDING }
    });
}
function d(t) {
    return i.tn.del({ url: a.ANM.CHANNEL_RECIPIENT_ME(t) });
}
function E(t) {
    return i.tn.put({
        url: a.ANM.CHANNEL_RECIPIENT_REJECT_BATCH(),
        body: { channel_ids: t }
    });
}
function N() {
    s.Z.getLocationMetadata();
}
