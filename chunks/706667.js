r.d(n, {
    Z: function () {
        return f;
    }
});
var i = r(47120);
var a = r(192379),
    s = r(442837),
    o = r(135869),
    l = r(763296),
    u = r(242291),
    c = r(22382),
    d = r(747071);
function f(e, n) {
    let { currentPreviewRef: r } = a.useContext(o.Z),
        [i, f] = a.useState(!1),
        _ = (0, s.e7)([l.Z], () => l.Z.isPlayingSound(e.soundId), [e]),
        h = a.useCallback(
            (i) => {
                null != r.current && r.current.pause(), null != n && (0, u.GN)(e, n, i);
            },
            [e, r, n]
        ),
        p = a.useCallback(() => {
            let n = new Audio((0, c.Z)(e.soundId));
            null != r.current && r.current.pause(), (r.current = n), (n.currentTime = 0), (n.volume = (0, d.Z)(e.volume)), n.play(), f(!0), n.addEventListener('pause', () => f(!1), { once: !0 });
        }, [e, r]);
    return (
        a.useCallback(
            () => () => {
                var e;
                return null === (e = r.current) || void 0 === e ? void 0 : e.pause();
            },
            [r]
        ),
        {
            playSoundboardSound: h,
            isPlayingSound: _,
            previewSound: p,
            isPreviewingSound: i
        }
    );
}
