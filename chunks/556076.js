r.d(n, {
    y: function () {
        return s;
    }
});
var i = r(544891),
    a = r(981631);
function s(e, n) {
    i.tn.post({
        url: a.ANM.VOICE_CHANNEL_NOTIFICATIONS(e),
        query: { first_user: n },
        rejectWithError: !0
    });
}
