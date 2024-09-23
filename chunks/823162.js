t.d(n, {
    Xy: function () {
        return d;
    },
    e4: function () {
        return s;
    },
    gN: function () {
        return E;
    },
    hi: function () {
        return _;
    },
    qR: function () {
        return l;
    },
    r_: function () {
        return c;
    }
});
var i = t(544891),
    r = t(570140),
    o = t(893776),
    a = t(290323),
    u = t(981631);
async function s(e) {
    await i.tn.put({
        url: u.ANM.CHANNEL_RECIPIENT_ME(e),
        body: { consent_status: a.h.ACCEPTED }
    }),
        r.Z.dispatch({
            type: 'MESSAGE_REQUEST_ACCEPT_OPTIMISTIC',
            channelId: e
        });
}
function l(e) {
    return i.tn.put({
        url: u.ANM.CHANNEL_RECIPIENT_ME(e),
        body: { consent_status: a.h.UNSPECIFIED }
    });
}
function d(e) {
    return i.tn.put({
        url: u.ANM.CHANNEL_RECIPIENT_ME(e),
        body: { consent_status: a.h.PENDING }
    });
}
function E(e) {
    return i.tn.del({ url: u.ANM.CHANNEL_RECIPIENT_ME(e) });
}
function c(e) {
    return i.tn.put({
        url: u.ANM.CHANNEL_RECIPIENT_REJECT_BATCH(),
        body: { channel_ids: e }
    });
}
function _() {
    o.Z.getLocationMetadata();
}
