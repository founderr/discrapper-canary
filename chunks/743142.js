n.d(t, {
    F: function () {
        return r;
    },
    L: function () {
        return o;
    }
});
var i,
    r,
    s = n(754688),
    a = n(981631),
    l = n(176505);
function o(e) {
    let t = decodeURIComponent(e),
        n = (0, s.Qj)(t);
    return null != n && n.channelId === l.oC.ROLE_SUBSCRIPTIONS ? 'role_subscription' : t === a.Z5c.SETTINGS(a.oAB.SUBSCRIPTIONS, 'role-subscriptions') ? 'role_subscription_setting' : void 0;
}
((i = r || (r = {})).ROLE_SUBSCRIPTION = 'role_subscription'), (i.ROLE_SUBSCRIPTION_SETTING = 'role_subscription_setting');
