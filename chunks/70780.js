r.d(n, {
    J: function () {
        return s;
    },
    o: function () {
        return o;
    }
});
var i = r(544891),
    a = r(570140);
function s() {
    var e;
    return i.tn.get({
        url: ''.concat(((e = 'https:'), 'https:')).concat(window.GLOBAL_ENV.RTC_LATENCY_ENDPOINT),
        rejectWithError: !1
    });
}
function o(e, n) {
    a.Z.dispatch({
        type: 'RTC_LATENCY_TEST_COMPLETE',
        latencyRankedRegions: e,
        geoRankedRegions: n
    });
}
