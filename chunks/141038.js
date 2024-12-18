n.d(e, {
    Z: function () {
        return u;
    }
}),
    n(653041),
    n(47120);
var r = n(512722),
    i = n.n(r),
    l = n(90757),
    a = n.n(l),
    o = n(65154);
function u(t, e, n) {
    let r = window.DiscordNative;
    i()(null != r, "Can't get desktop sources outside of native app"),
        (e = null != e ? e : [o.vA.WINDOW, o.vA.SCREEN]),
        (n =
            null != n
                ? n
                : {
                      width: 150,
                      height: 150
                  });
    let l = [];
    return (
        e.includes(o.vA.SCREEN) && t.supports(o.AN.SCREEN_PREVIEWS) && (l.push(t.getScreenPreviews(n.width, n.height)), (e = e.filter((t) => t !== o.vA.SCREEN))),
        e.includes(o.vA.WINDOW) && t.supports(o.AN.WINDOW_PREVIEWS) && (l.push(t.getWindowPreviews(n.width, n.height)), (e = e.filter((t) => t !== o.vA.WINDOW))),
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
