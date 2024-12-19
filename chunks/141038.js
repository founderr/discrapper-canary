n.d(e, {
    Z: function () {
        return o;
    }
}),
    n(653041),
    n(47120);
var r = n(512722),
    i = n.n(r),
    l = n(90757),
    a = n.n(l),
    u = n(65154);
function o(t, e, n) {
    let r = window.DiscordNative;
    i()(null != r, "Can't get desktop sources outside of native app"),
        (e = null != e ? e : [u.vA.WINDOW, u.vA.SCREEN]),
        (n =
            null != n
                ? n
                : {
                      width: 150,
                      height: 150
                  });
    let l = [];
    return (
        e.includes(u.vA.SCREEN) && t.supports(u.AN.SCREEN_PREVIEWS) && (l.push(t.getScreenPreviews(n.width, n.height)), (e = e.filter((t) => t !== u.vA.SCREEN))),
        e.includes(u.vA.WINDOW) && t.supports(u.AN.WINDOW_PREVIEWS) && (l.push(t.getWindowPreviews(n.width, n.height)), (e = e.filter((t) => t !== u.vA.WINDOW))),
        0 !== e.length &&
            l.push(
                r.desktopCapture.getDesktopCaptureSources({
                    types: e,
                    thumbnailSize: n
                })
            ),
        Promise.all(l).then((t) => a()(t))
    );
}
