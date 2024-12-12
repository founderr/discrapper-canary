var i,
    a = r(442837),
    s = r(570140);
function o(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let l = {};
function u() {
    l = {};
}
function c(e) {
    l[e.id] = {
        loading: !1,
        note: e.note
    };
}
function d(e) {
    let { userId: n } = e;
    l[n] = {
        loading: !0,
        note: null
    };
}
function f(e) {
    let { userId: n, note: r } = e;
    l[n] = {
        loading: !1,
        note: null == r ? void 0 : r.note
    };
}
class _ extends (i = a.ZP.Store) {
    getNote(e) {
        return l[e];
    }
}
o(_, 'displayName', 'NoteStore'),
    (n.Z = new _(s.Z, {
        CONNECTION_OPEN: u,
        OVERLAY_INITIALIZE: u,
        USER_NOTE_UPDATE: c,
        USER_NOTE_LOAD_START: d,
        USER_NOTE_LOADED: f
    }));
