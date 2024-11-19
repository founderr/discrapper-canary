n.d(t, {
    Z: function () {
        return s;
    }
}),
    n(653041),
    n(47120);
var r = n(512722),
    i = n.n(r),
    o = n(90757),
    a = n.n(o),
    l = n(65154);
function s(e, t, n) {
    let r = window.DiscordNative;
    i()(null != r, "Can't get desktop sources outside of native app"),
        (t = null != t ? t : [l.vA.WINDOW, l.vA.SCREEN]),
        (n =
            null != n
                ? n
                : {
                      width: 150,
                      height: 150
                  });
    let o = [];
    return (
        t.includes(l.vA.SCREEN) && e.supports(l.AN.SCREEN_PREVIEWS) && (o.push(e.getScreenPreviews(n.width, n.height)), (t = t.filter((e) => e !== l.vA.SCREEN))),
        t.includes(l.vA.WINDOW) && e.supports(l.AN.WINDOW_PREVIEWS) && (o.push(e.getWindowPreviews(n.width, n.height)), (t = t.filter((e) => e !== l.vA.WINDOW))),
        0 !== t.length &&
            o.push(
                r.desktopCapture.getDesktopCaptureSources({
                    types: t,
                    thumbnailSize: n
                })
            ),
        Promise.all(o).then((e) => a()(e))
    );
}
