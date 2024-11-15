n.d(t, {
    $1: function () {
        return g;
    },
    YT: function () {
        return v;
    },
    pn: function () {
        return b;
    }
}),
    n(411104);
var r,
    i,
    a = n(570140),
    s = n(923928),
    o = n(593472),
    l = n(594190),
    u = n(77498),
    c = n(594174),
    d = n(626135),
    f = n(358085),
    _ = n(998502),
    p = n(789465),
    h = n(981631);
let m = {
    development: [0, 0, 0, 0],
    canary: [1, 0, 30, 10],
    ptb: [1, 0, 1005, 2],
    stable: [1, 0, 9001, 2]
};
function g() {
    var e;
    return !(null === _.ZP || void 0 === _.ZP ? void 0 : null === (e = _.ZP.isModuleVersionAtLeast) || void 0 === e ? void 0 : e.call(_.ZP, 'discord_hook', m));
}
async function E() {
    if (!(0, f.isWindows)()) return Promise.reject(Error('Hook is only available on Windows'));
    if (g()) return Promise.reject(Error('Hook module is too old'));
    await _.ZP.ensureModule('discord_hook');
    let e = await _.ZP.requireModule('discord_hook');
    return (
        (function (e) {
            if (null == e.setFlags) return;
            let t = 0,
                n = p.Z.getCurrentConfig({ location: 'edd7d3_1' }, { autoTrackExposure: !1 });
            n.enableCrashReporting && (console.log('Hook: Enabling crash reporting.'), (t |= 1));
            let r = c.default.getCurrentUser();
            null != r && (r.isStaff() || n.enableCrashTrigger) && (console.log('Hook: Enabling crash trigger.'), (t |= 2)), e.setFlags(t);
        })(e),
        e
    );
}
((i = r || (r = {}))[(i.None = 0)] = 'None'), (i[(i.EnableCrashReporting = 1)] = 'EnableCrashReporting'), (i[(i.EnableCrashTrigger = 2)] = 'EnableCrashTrigger');
function v(e, t) {
    return E().then((n) => {
        var r;
        let i = null === (r = l.ZP.getGameForPID(e)) || void 0 === r ? void 0 : r.name,
            c = u.Z.getGameByName(i),
            f = null;
        return new Promise((r) => {
            let u = (e, n) => {
                    d.default.track(h.rMx.HOOK_RESULT, {
                        game_name: i,
                        game_id: null == c ? null : c.id,
                        success: n,
                        error: e,
                        ...t
                    }),
                        null != f && (clearTimeout(f), (f = null)),
                        n ? r() : r((e = null != e ? e : 'Unknown hook error'));
                },
                _ = l.ZP.getOverlayOptionsForPID(e),
                p = {
                    ...o.r,
                    ..._,
                    elevate: l.ZP.shouldElevateProcessForPID(e)
                };
            null == p.allowHook || p.allowHook
                ? ((f = setTimeout(() => {
                      n.cancelAttachToProcess(e), u('Timed out waiting for hook response', !1);
                  }, 120000)),
                  n.attachToProcess(e, p, u),
                  a.Z.wait(() => s.Z.clearElevatedProcess()))
                : r('Hook is disabled for this game');
        });
    });
}
function b(e) {
    return E().then((t) => {
        t.cancelAttachToProcess(e);
    });
}
