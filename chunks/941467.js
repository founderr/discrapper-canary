var r = n(47120);
var i = n(147913),
    a = n(405656);
function o(e, t, n) {
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
class s extends i.Z {
    constructor(...e) {
        super(...e),
            o(this, 'actions', {
                USER_SETTINGS_PROTO_UPDATE: a.Pe,
                I18N_LOAD_SUCCESS: a.Pe,
                POST_CONNECTION_OPEN: a.Pe
            });
    }
}
t.Z = new s();
