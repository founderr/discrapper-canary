var r = n(653041);
var i = n(981631);
let a = [],
    o = !1;
function s() {
    let e = window.navigator.connection;
    return null == e
        ? {
              type: i.IWh.UNKNOWN,
              effectiveSpeed: i.IyS.UNKNOWN
          }
        : {
              type: null != e.type ? e.type : i.IWh.UNKNOWN,
              effectiveSpeed: e.effectiveType
          };
}
function l() {
    if (!0 === o) return;
    let e = window.navigator.connection;
    null != e && ((o = !0), e.addEventListener('change', c));
}
function u() {
    if (!1 === o) return;
    let e = window.navigator.connection;
    null != e && 0 === a.length && null != e && (e.removeEventListener('change', c), (o = !1));
}
function c() {
    let e = s();
    a.forEach((t) => t(e));
}
function d(e) {
    a.push(e), l();
}
function _(e) {
    let t = a.indexOf(e);
    -1 !== t && (a.splice(t, 1), u());
}
t.Z = {
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
        d(e);
    },
    removeChangeCallback(e) {
        _(e);
    },
    getNetworkInformation: () => Promise.resolve(s()),
    isOnline() {
        let e = navigator.onLine;
        return void 0 === e || e;
    }
};
