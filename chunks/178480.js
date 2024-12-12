r.d(n, {
    RB: function () {
        return f;
    },
    a3: function () {
        return l;
    },
    hn: function () {
        return d;
    },
    mH: function () {
        return c;
    },
    r: function () {
        return u;
    }
});
var i = r(695346),
    a = r(709054),
    s = r(497089),
    o = r(925928);
let l = function (e) {
        let n = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
        return (0, o.ZP)({
            since: e,
            getFormatter: n ? o.d0 : o.Zk
        });
    },
    u = (e, n) => e.acked || (n !== i.uL && a.default.compare(n, e.id) >= 0);
function c(e, n) {
    let r = a.default.fromTimestamp(new Date(n).getTime());
    return {
        acked: !1,
        forceUnacked: !0,
        other_user: e,
        kind: 'notification-center-item',
        local_id: 'incoming_friend_requests_'.concat(e.id, '_').concat(r),
        deeplink: 'https://discord.com/users/'.concat(e.id),
        type: s.O7.INCOMING_FRIEND_REQUESTS,
        id: r
    };
}
function d(e) {
    return {
        acked: !1,
        enableBadge: !0,
        id: a.default.fromTimestamp(new Date().getTime()),
        kind: 'notification-center-item',
        local_id: 'mobile_update_available_'.concat(e.build),
        type: s.O7.MOBILE_NATIVE_UPDATE_AVAILABLE,
        deeplink: e.urls.install.toString()
    };
}
let f = (e) => e.type === s.DY.RECENT_MENTION || e.type === s.DY.REPLY_MENTION;
