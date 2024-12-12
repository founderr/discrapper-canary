r.d(n, {
    Gk: function () {
        return l;
    },
    Ni: function () {
        return o;
    },
    PV: function () {
        return s;
    },
    d$: function () {
        return a;
    }
});
var i = r(570140);
function a() {
    i.Z.dispatch({ type: 'FRIENDS_LIST_GIFT_INTENTS_SHOWN' });
}
function s(e) {
    i.Z.dispatch({
        type: 'MESSAGE_GIFT_INTENT_SHOWN',
        recipientUserId: e
    });
}
function o(e) {
    i.Z.dispatch({
        type: 'GIFT_INTENT_FLOW_PURCHASED_GIFT',
        recipientUserId: e
    });
}
function l() {
    i.Z.dispatch({ type: 'FRIENDS_TAB_BADGE_DISMISS' });
}
