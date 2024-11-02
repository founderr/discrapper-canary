var r,
    i,
    a,
    s,
    o = n(442837),
    l = n(570140),
    u = n(585483),
    c = n(981631);
let d = null,
    f = 0;
function _() {
    d = null;
}
class h extends (s = o.ZP.Store) {
    isOpen() {
        return null != d;
    }
    get version() {
        return f;
    }
    getContextMenu() {
        return d;
    }
    close() {
        return !!this.isOpen() && (u.S.dispatch(c.CkL.CONTEXT_MENU_CLOSE), !0);
    }
}
(a = 'ContextMenuStore'),
    (i = 'displayName') in (r = h)
        ? Object.defineProperty(r, i, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (r[i] = a),
    (t.Z = new h(l.Z, {
        CONTEXT_MENU_OPEN: function (e) {
            let { contextMenu: t } = e;
            f++, (d = t);
        },
        LAYER_PUSH: _,
        CONTEXT_MENU_CLOSE: _,
        OVERLAY_SET_UI_LOCKED: _,
        OVERLAY_DEACTIVATE_ALL_REGIONS: _
    }));
