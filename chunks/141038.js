t.d(n, {
    Z: function () {
        return a;
    }
}),
    t(653041),
    t(47120);
var r = t(512722),
    i = t.n(r),
    l = t(90757),
    u = t.n(l),
    o = t(65154);
function a(e, n, t) {
    let r = window.DiscordNative;
    i()(null != r, "Can't get desktop sources outside of native app"),
        (n = null != n ? n : [o.vA.WINDOW, o.vA.SCREEN]),
        (t =
            null != t
                ? t
                : {
                      width: 150,
                      height: 150
                  });
    let l = [];
    return (
        n.includes(o.vA.SCREEN) && e.supports(o.AN.SCREEN_PREVIEWS) && (l.push(e.getScreenPreviews(t.width, t.height)), (n = n.filter((e) => e !== o.vA.SCREEN))),
        n.includes(o.vA.WINDOW) && e.supports(o.AN.WINDOW_PREVIEWS) && (l.push(e.getWindowPreviews(t.width, t.height)), (n = n.filter((e) => e !== o.vA.WINDOW))),
        0 !== n.length &&
            l.push(
                r.desktopCapture.getDesktopCaptureSources({
                    types: n,
                    thumbnailSize: t
                })
            ),
        Promise.all(l).then((e) => u()(e))
    );
}
