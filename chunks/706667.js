n.d(t, {
    Z: function () {
        return d;
    }
});
var r = n(47120);
var i = n(470079),
    a = n(442837),
    o = n(135869),
    s = n(763296),
    l = n(242291),
    u = n(22382),
    c = n(747071);
function d(e, t) {
    let { currentPreviewRef: n } = i.useContext(o.Z),
        [r, d] = i.useState(!1),
        _ = (0, a.e7)([s.Z], () => s.Z.isPlayingSound(e.soundId), [e]),
        E = i.useCallback(
            (r) => {
                null != n.current && n.current.pause(), null != t && (0, l.GN)(e, t, r);
            },
            [e, n, t]
        ),
        f = i.useCallback(() => {
            let t = new Audio((0, u.Z)(e.soundId));
            null != n.current && n.current.pause(), (n.current = t), (t.currentTime = 0), (t.volume = (0, c.Z)(e.volume)), t.play(), d(!0), t.addEventListener('pause', () => d(!1), { once: !0 });
        }, [e, n]);
    return (
        i.useCallback(
            () => () => {
                var e;
                return null === (e = n.current) || void 0 === e ? void 0 : e.pause();
            },
            [n]
        ),
        {
            playSoundboardSound: E,
            isPlayingSound: _,
            previewSound: f,
            isPreviewingSound: r
        }
    );
}
