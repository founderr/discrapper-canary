e.d(n, {
    Xy: function () {
        return s;
    },
    e4: function () {
        return l;
    },
    gN: function () {
        return c;
    },
    hi: function () {
        return f;
    },
    qR: function () {
        return d;
    },
    r_: function () {
        return E;
    }
});
var i = e(544891),
    r = e(570140),
    o = e(893776),
    a = e(290323),
    u = e(981631);
async function l(t) {
    await i.tn.put({
        url: u.ANM.CHANNEL_RECIPIENT_ME(t),
        body: { consent_status: a.h.ACCEPTED }
    }),
        r.Z.dispatch({
            type: 'MESSAGE_REQUEST_ACCEPT_OPTIMISTIC',
            channelId: t
        });
}
function d(t) {
    return i.tn.put({
        url: u.ANM.CHANNEL_RECIPIENT_ME(t),
        body: { consent_status: a.h.UNSPECIFIED }
    });
}
function s(t) {
    return i.tn.put({
        url: u.ANM.CHANNEL_RECIPIENT_ME(t),
        body: { consent_status: a.h.PENDING }
    });
}
function c(t) {
    return i.tn.del({ url: u.ANM.CHANNEL_RECIPIENT_ME(t) });
}
function E(t) {
    return i.tn.put({
        url: u.ANM.CHANNEL_RECIPIENT_REJECT_BATCH(),
        body: { channel_ids: t }
    });
}
function f() {
    o.Z.getLocationMetadata();
}
