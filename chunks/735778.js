r.d(n, {
    A: function () {
        return o;
    },
    l: function () {
        return s;
    }
});
var i = r(818083),
    a = r(987338);
let s = (0, i.B)({
    kind: 'user',
    id: '2024-07_friend_request_spam_inbox',
    label: 'Friend request spam inbox',
    defaultConfig: { enabled: !1 },
    commonTriggerPoint: a.$P.CONNECTION_OPEN,
    treatments: [
        {
            id: 1,
            label: 'Separate spam friend requests into separate inbox and suppress notifications',
            config: { enabled: !0 }
        }
    ]
});
function o(e) {
    let { location: n } = e;
    return s.getCurrentConfig({ location: n }, { autoTrackExposure: !1 }).enabled;
}
