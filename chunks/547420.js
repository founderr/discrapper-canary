e.d(t, {
    MY: function () {
        return u;
    },
    RC: function () {
        return s;
    },
    UF: function () {
        return d;
    }
});
var i = e(857595),
    o = e(607070),
    r = e(981631);
function l(n) {
    return r.yqN.ZOOM_SCALES[Math.max(0, Math.min(r.yqN.ZOOM_SCALES.indexOf(o.Z.zoom) + n, r.yqN.ZOOM_SCALES.length - 1))];
}
let d = {
        binds: ['mod+plus'],
        comboKeysBindGlobal: !0,
        action: () => ((0, i.cq)(l(1)), !1)
    },
    s = {
        binds: ['mod+minus'],
        comboKeysBindGlobal: !0,
        action: () => ((0, i.cq)(l(-1)), !1)
    },
    u = {
        binds: ['mod+0'],
        comboKeysBindGlobal: !0,
        action: () => ((0, i.cq)(r.yqN.ZOOM_DEFAULT), !1)
    };
t.ZP =
    12633 == e.j
        ? {
              ZOOM_IN: d,
              ZOOM_OUT: s,
              ZOOM_RESET: u
          }
        : null;
