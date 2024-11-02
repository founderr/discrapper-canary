n.d(t, {
    M: function () {
        return d;
    }
});
var i = n(392711),
    r = n.n(i),
    l = n(283595),
    a = n(808506),
    s = n(996106),
    o = n(186901),
    c = n(981631);
let d = {
    [c.zMe.OVERLAY_UPDATE]: {
        scope: o.lH,
        handler(e) {
            let {
                args: { pid: t },
                socket: n
            } = e;
            if ('number' != typeof t || t < 10) throw new s.Z({ errorCode: c.lTL.INVALID_EVENT }, 'Invalid pid');
            return (e) => {
                let { prevState: i, dispatch: s } = e,
                    o = a.Z.enabled,
                    c = !0,
                    d = n.application.id;
                if (null != d) {
                    let e = l.Z.getActiveLibraryApplication(d);
                    null != e && (o = o && e.isOverlayEnabled()), (c = a.Z.isInputLocked(t));
                }
                let u = {
                    enabled: o,
                    locked: c
                };
                return !r().isEqual(u, i) && s(u), u;
            };
        }
    }
};
