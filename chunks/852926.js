n.d(t, {
    GC: function () {
        return g;
    },
    _X: function () {
        return p;
    },
    em: function () {
        return m;
    },
    jU: function () {
        return h;
    }
});
var i = n(13245),
    r = n(808506),
    l = n(998502),
    a = n(13140),
    s = n(996106),
    o = n(914946),
    c = n(186901),
    d = n(981631);
let u = ['207646673902501888'];
function h(e) {
    return null == e
        ? {
              lock: d.VqG,
              context: d.IlC.APP
          }
        : r.Z.isReady(e)
          ? (i.Z.setLocked(!1, e),
            {
                lock() {
                    i.Z.setLocked(!0, e);
                },
                context: d.IlC.OVERLAY
            })
          : (l.ZP.focus(null, !0),
            {
                lock() {
                    l.ZP.setForegroundProcess(e);
                },
                context: d.IlC.APP
            });
}
let m = async (e, t, n) => {
        if (((0, o.YK)(e, t), (null == n || '' === n) && (0, o.s9)(t))) return (e.authorization.scopes = [c.cE, c.CN]), Promise.resolve();
        if (null == n || '' === n) return Promise.reject(new s.Z({ closeCode: d.$VG.INVALID_CLIENTID }, 'No Client ID Specified'));
        let i = l.ZP.releaseChannel !== d.R5N.CANARY && !u.includes(n) && e.transport !== c.He.POST_MESSAGE;
        return await (0, o.vv)(n, i), (0, o.fy)(e, n, t);
    },
    p = () =>
        (0, o.tr)((e) => {
            let t = [];
            if (null != e.modeOptions.shortcut && Array.isArray(e.modeOptions.shortcut))
                t = e.modeOptions.shortcut.map((e) => {
                    var t;
                    return {
                        type: e[0],
                        code: e[1],
                        name: null !== (t = (0, a.H9)(e)) && void 0 !== t ? t : 'unknown'
                    };
                });
            return t;
        }),
    g = (e) =>
        (0, o.FJ)(e, (e) => {
            let t = '';
            return null != e.modeOptions.shortcut && Array.isArray(e.modeOptions.shortcut) && (t = (0, a.BB)(e.modeOptions.shortcut)), t;
        });
