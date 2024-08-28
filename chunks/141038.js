n.d(t, {
    Z: function () {
        return l;
    }
}),
    n(653041),
    n(47120);
var r = n(512722),
    i = n.n(r),
    a = n(90757),
    s = n.n(a),
    o = n(65154);
function l(e, t, n) {
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
    let a = [];
    return (
        t.includes(o.vA.SCREEN) && e.supports(o.AN.SCREEN_PREVIEWS) && (a.push(e.getScreenPreviews(n.width, n.height)), (t = t.filter((e) => e !== o.vA.SCREEN))),
        t.includes(o.vA.WINDOW) && e.supports(o.AN.WINDOW_PREVIEWS) && (a.push(e.getWindowPreviews(n.width, n.height)), (t = t.filter((e) => e !== o.vA.WINDOW))),
        0 !== t.length &&
            a.push(
                r.desktopCapture.getDesktopCaptureSources({
                    types: t,
                    thumbnailSize: n
                })
            ),
        Promise.all(a).then((e) => s()(e))
    );
}
