n.d(t, {
    Z: function () {
        return a;
    }
}),
    n(653041),
    n(47120);
var r = n(512722),
    i = n.n(r),
    u = n(90757),
    l = n.n(u),
    o = n(65154);
function a(e, t, n) {
    let r = window.DiscordNative;
    i()(null != r, "Can't get desktop sources outside of native app"),
        (t = null != t ? t : [o.vA.WINDOW, o.vA.SCREEN]),
        (n =
            null != n
                ? n
                : {
                      width: 150,
                      height: 150
                  });
    let u = [];
    return (
        t.includes(o.vA.SCREEN) && e.supports(o.AN.SCREEN_PREVIEWS) && (u.push(e.getScreenPreviews(n.width, n.height)), (t = t.filter((e) => e !== o.vA.SCREEN))),
        t.includes(o.vA.WINDOW) && e.supports(o.AN.WINDOW_PREVIEWS) && (u.push(e.getWindowPreviews(n.width, n.height)), (t = t.filter((e) => e !== o.vA.WINDOW))),
        0 !== t.length &&
            u.push(
                r.desktopCapture.getDesktopCaptureSources({
                    types: t,
                    thumbnailSize: n
                })
            ),
        Promise.all(u).then((e) => l()(e))
    );
}
