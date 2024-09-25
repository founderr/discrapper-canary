var r,
    i = n(442837),
    a = n(570140),
    o = n(585483),
    s = n(981631);
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
let u = null,
    c = 0;
function d(e) {
    let { contextMenu: t } = e;
    c++, (u = t);
}
function _() {
    u = null;
}
class E extends (r = i.ZP.Store) {
    isOpen() {
        return null != u;
    }
    get version() {
        return c;
    }
    getContextMenu() {
        return u;
    }
    close() {
        return !!this.isOpen() && (o.S.dispatch(s.CkL.CONTEXT_MENU_CLOSE), !0);
    }
}
l(E, 'displayName', 'ContextMenuStore'),
    (t.Z = new E(a.Z, {
        CONTEXT_MENU_OPEN: d,
        LAYER_PUSH: _,
        CONTEXT_MENU_CLOSE: _,
        OVERLAY_SET_UI_LOCKED: _,
        OVERLAY_DEACTIVATE_ALL_REGIONS: _
    }));
