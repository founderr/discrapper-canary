t.d(n, {
    MY: function () {
        return u;
    },
    RC: function () {
        return a;
    },
    UF: function () {
        return r;
    }
});
var i = t(857595),
    o = t(607070),
    l = t(981631);
function E(e) {
    return l.yqN.ZOOM_SCALES[Math.max(0, Math.min(l.yqN.ZOOM_SCALES.indexOf(o.Z.zoom) + e, l.yqN.ZOOM_SCALES.length - 1))];
}
let r = {
        binds: ['mod+plus'],
        comboKeysBindGlobal: !0,
        action: () => ((0, i.cq)(E(1)), !1)
    },
    a = {
        binds: ['mod+minus'],
        comboKeysBindGlobal: !0,
        action: () => ((0, i.cq)(E(-1)), !1)
    },
    u = {
        binds: ['mod+0'],
        comboKeysBindGlobal: !0,
        action: () => ((0, i.cq)(l.yqN.ZOOM_DEFAULT), !1)
    };
n.ZP =
    12633 == t.j
        ? {
              ZOOM_IN: r,
              ZOOM_OUT: a,
              ZOOM_RESET: u
          }
        : null;
