n.d(t, {
    Z: function () {
        return f;
    }
});
var l = n(553813),
    s = n.n(l),
    i = n(375964),
    r = n(579806),
    a = n(131951),
    o = n(358085),
    c = n(70722),
    d = n(65154),
    u = n(689938);
function f() {
    if (!a.Z.supports(d.AN.SOUNDSHARE)) return i.GO_LIVE_SCREENSHARE_NO_SOUND;
    if ((0, o.isWindows)() && !s().satisfies(null === r.Z || void 0 === r.Z ? void 0 : r.Z.os.release, c.I9)) return u.Z.Messages.GO_LIVE_SCREENSHARE_UPDATE_WINDOWS_FOR_SOUNDSHARE;
    if ((0, o.isMac)() && !s().satisfies(null === r.Z || void 0 === r.Z ? void 0 : r.Z.os.release, c.Ec)) return u.Z.Messages.GO_LIVE_SCREENSHARE_UPDATE_MACOS_FOR_SOUNDSHARE;
    return null;
}
