t.d(n, {
    Z: function () {
        return a;
    }
}),
    t(653041),
    t(47120);
var r = t(512722),
    i = t.n(r),
    u = t(90757),
    o = t.n(u),
    l = t(65154);
function a(e, n, t) {
    let r = window.DiscordNative;
    i()(null != r, "Can't get desktop sources outside of native app"),
        (n = null != n ? n : [l.vA.WINDOW, l.vA.SCREEN]),
        (t =
            null != t
                ? t
                : {
                      width: 150,
                      height: 150
                  });
    let u = [];
    return (
        n.includes(l.vA.SCREEN) && e.supports(l.AN.SCREEN_PREVIEWS) && (u.push(e.getScreenPreviews(t.width, t.height)), (n = n.filter((e) => e !== l.vA.SCREEN))),
        n.includes(l.vA.WINDOW) && e.supports(l.AN.WINDOW_PREVIEWS) && (u.push(e.getWindowPreviews(t.width, t.height)), (n = n.filter((e) => e !== l.vA.WINDOW))),
        0 !== n.length &&
            u.push(
                r.desktopCapture.getDesktopCaptureSources({
                    types: n,
                    thumbnailSize: t
                })
            ),
        Promise.all(u).then((e) => o()(e))
    );
}
