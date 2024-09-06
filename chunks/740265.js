n.d(t, {
    Z: function () {
        return r;
    }
});
var i = n(726542),
    s = n(603113),
    a = n(981631),
    l = n(689938);
function r(e) {
    var t;
    let n = null !== (t = (0, s.Z)(e)) && void 0 !== t ? t : '';
    switch (n) {
        case a.M7m.PS4:
        case a.M7m.PS5:
            return l.Z.Messages.USER_ACTIVITY_HEADER_PLAYING_ON_PLATFORM.format({ platform: n.toUpperCase() });
        case a.M7m.XBOX:
        case a.M7m.SAMSUNG:
            return l.Z.Messages.USER_ACTIVITY_HEADER_PLAYING_ON_PLATFORM.format({ platform: i.Z.get(n).name });
        default:
            return l.Z.Messages.USER_ACTIVITY_HEADER_PLAYING;
    }
}
