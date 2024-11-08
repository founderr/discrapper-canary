n.d(t, {
    Xy: function () {
        return d;
    },
    e4: function () {
        return s;
    },
    gN: function () {
        return u;
    },
    hi: function () {
        return h;
    },
    qR: function () {
        return c;
    },
    r_: function () {
        return m;
    }
});
var i = n(544891),
    r = n(570140),
    l = n(893776),
    a = n(290323),
    o = n(981631);
async function s(e) {
    await i.tn.put({
        url: o.ANM.CHANNEL_RECIPIENT_ME(e),
        body: { consent_status: a.h.ACCEPTED }
    }),
        r.Z.dispatch({
            type: 'MESSAGE_REQUEST_ACCEPT_OPTIMISTIC',
            channelId: e
        });
}
function c(e) {
    return i.tn.put({
        url: o.ANM.CHANNEL_RECIPIENT_ME(e),
        body: { consent_status: a.h.UNSPECIFIED }
    });
}
function d(e) {
    return i.tn.put({
        url: o.ANM.CHANNEL_RECIPIENT_ME(e),
        body: { consent_status: a.h.PENDING }
    });
}
function u(e) {
    return i.tn.del({ url: o.ANM.CHANNEL_RECIPIENT_ME(e) });
}
function m(e) {
    return i.tn.put({
        url: o.ANM.CHANNEL_RECIPIENT_REJECT_BATCH(),
        body: { channel_ids: e }
    });
}
function h() {
    l.Z.getLocationMetadata();
}
