var i = r(653041);
var a = r(981631);
let s = [],
    o = !1;
function l() {
    let e = window.navigator.connection;
    return null == e
        ? {
              type: a.IWh.UNKNOWN,
              effectiveSpeed: a.IyS.UNKNOWN
          }
        : {
              type: null != e.type ? e.type : a.IWh.UNKNOWN,
              effectiveSpeed: e.effectiveType
          };
}
function u() {
    if (!0 === o) return;
    let e = window.navigator.connection;
    null != e && ((o = !0), e.addEventListener('change', d));
}
function c() {
    if (!1 === o) return;
    let e = window.navigator.connection;
    null != e && 0 === s.length && null != e && (e.removeEventListener('change', d), (o = !1));
}
function d() {
    let e = l();
    s.forEach((n) => n(e));
}
function f(e) {
    s.push(e), u();
}
function _(e) {
    let n = s.indexOf(e);
    -1 !== n && (s.splice(n, 1), c());
}
n.Z = {
    addOnlineCallback(e) {
        window.addEventListener('online', e);
    },
    removeOnlineCallback(e) {
        window.removeEventListener('online', e);
    },
    addOfflineCallback(e) {
        window.addEventListener('offline', e);
    },
    removeOfflineCallback(e) {
        window.removeEventListener('offline', e);
    },
    addChangeCallback(e) {
        f(e);
    },
    removeChangeCallback(e) {
        _(e);
    },
    getNetworkInformation: () => Promise.resolve(l()),
    isOnline() {
        let e = navigator.onLine;
        return void 0 === e || e;
    }
};
