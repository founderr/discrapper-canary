var r = n(653041);
var i = n(47120);
var a = n(147913),
    o = n(579806);
n(987170);
var s = n(998502);
function l(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let u = [0, 0];
function c(e) {
    let t = e.toString(16);
    for (; t.length < 4; ) t = '0' + t;
    return t;
}
let d = [];
function _(e) {
    for (let t of e) if (t[0] === u[0] && t[1] === u[1]) return !0;
    return !1;
}
let E = !1;
function f() {
    let e = {};
    for (let t of d)
        if (_(t.gpus)) {
            let n = t.experiment.getCurrentConfig({ location: 'updateFlags' });
            e = {
                ...e,
                ...n
            };
        }
    s.ZP.setChromiumSwitches(e);
}
class h extends a.Z {
    constructor(...e) {
        super(...e),
            l(this, 'actions', {
                POST_CONNECTION_OPEN: async () => {
                    try {
                        var e, t, n, r;
                        if (E || (null === (t = window.DiscordNative) || void 0 === t ? void 0 : null === (e = t.gpuSettings) || void 0 === e ? void 0 : e.setChromiumSwitches) == null) return;
                        let i = await o.Z.processUtils.getSystemInfo();
                        for (let e of null !== (r = null === (n = i.electronGPUInfo) || void 0 === n ? void 0 : n.gpuDevice) && void 0 !== r ? r : []) !0 === e.active && (u = [e.vendorId, e.deviceId]);
                        for (let e of ((E = !0), d)) _(e.gpus) && e.experiment.subscribe({ location: 'GPU experiment subscription' }, f);
                        f();
                    } catch (e) {}
                }
            });
    }
}
t.Z = new h();
