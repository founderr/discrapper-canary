n.d(t, {
    Z: function () {
        return c;
    }
});
var r = n(653041);
var i = n(47120);
var a = n(512722),
    o = n.n(a),
    s = n(90757),
    l = n.n(s),
    u = n(65154);
function c(e, t, n) {
    let r = window.DiscordNative;
    o()(null != r, "Can't get desktop sources outside of native app"),
        (t = null != t ? t : [u.vA.WINDOW, u.vA.SCREEN]),
        (n =
            null != n
                ? n
                : {
                      width: 150,
                      height: 150
                  });
    let i = [];
    return (
        t.includes(u.vA.SCREEN) && e.supports(u.AN.SCREEN_PREVIEWS) && (i.push(e.getScreenPreviews(n.width, n.height)), (t = t.filter((e) => e !== u.vA.SCREEN))),
        t.includes(u.vA.WINDOW) && e.supports(u.AN.WINDOW_PREVIEWS) && (i.push(e.getWindowPreviews(n.width, n.height)), (t = t.filter((e) => e !== u.vA.WINDOW))),
        0 !== t.length &&
            i.push(
                r.desktopCapture.getDesktopCaptureSources({
                    types: t,
                    thumbnailSize: n
                })
            ),
        Promise.all(i).then((e) => l()(e))
    );
}
