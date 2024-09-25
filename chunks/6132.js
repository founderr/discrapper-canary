var r,
    i = n(442837),
    a = n(570140),
    o = n(981631);
function s(e, t, n) {
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
let l = 0;
function u(e) {
    let { port: t } = e;
    l = o.V6Z - t;
}
class c extends (r = i.ZP.Store) {
    getId() {
        return l;
    }
}
s(c, 'displayName', 'InstanceIdStore'), (t.Z = new c(a.Z, { RPC_SERVER_READY: u }));
