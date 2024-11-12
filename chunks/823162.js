e.d(t, {
    Xy: function () {
        return c;
    },
    e4: function () {
        return o;
    },
    gN: function () {
        return s;
    },
    hi: function () {
        return E;
    },
    qR: function () {
        return d;
    },
    r_: function () {
        return f;
    }
});
var i = e(544891),
    r = e(570140),
    u = e(893776),
    l = e(290323),
    a = e(981631);
async function o(n) {
    await i.tn.put({
        url: a.ANM.CHANNEL_RECIPIENT_ME(n),
        body: { consent_status: l.h.ACCEPTED }
    }),
        r.Z.dispatch({
            type: 'MESSAGE_REQUEST_ACCEPT_OPTIMISTIC',
            channelId: n
        });
}
function d(n) {
    return i.tn.put({
        url: a.ANM.CHANNEL_RECIPIENT_ME(n),
        body: { consent_status: l.h.UNSPECIFIED }
    });
}
function c(n) {
    return i.tn.put({
        url: a.ANM.CHANNEL_RECIPIENT_ME(n),
        body: { consent_status: l.h.PENDING }
    });
}
function s(n) {
    return i.tn.del({ url: a.ANM.CHANNEL_RECIPIENT_ME(n) });
}
function f(n) {
    return i.tn.put({
        url: a.ANM.CHANNEL_RECIPIENT_REJECT_BATCH(),
        body: { channel_ids: n }
    });
}
function E() {
    u.Z.getLocationMetadata();
}
