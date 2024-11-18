r.d(t, {
    Z: function () {
        return l;
    }
}),
    r(653041),
    r(47120);
var n = r(512722),
    i = r.n(n),
    o = r(90757),
    a = r.n(o),
    s = r(65154);
function l(e, t, r) {
    let n = window.DiscordNative;
    i()(null != n, "Can't get desktop sources outside of native app"),
        (t = null != t ? t : [s.vA.WINDOW, s.vA.SCREEN]),
        (r =
            null != r
                ? r
                : {
                      width: 150,
                      height: 150
                  });
    let o = [];
    return (
        t.includes(s.vA.SCREEN) && e.supports(s.AN.SCREEN_PREVIEWS) && (o.push(e.getScreenPreviews(r.width, r.height)), (t = t.filter((e) => e !== s.vA.SCREEN))),
        t.includes(s.vA.WINDOW) && e.supports(s.AN.WINDOW_PREVIEWS) && (o.push(e.getWindowPreviews(r.width, r.height)), (t = t.filter((e) => e !== s.vA.WINDOW))),
        0 !== t.length &&
            o.push(
                n.desktopCapture.getDesktopCaptureSources({
                    types: t,
                    thumbnailSize: r
                })
            ),
        Promise.all(o).then((e) => a()(e))
    );
}
