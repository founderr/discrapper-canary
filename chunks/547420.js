i.d(t, {
    MY: function () {
        return c;
    },
    RC: function () {
        return d;
    },
    UF: function () {
        return s;
    }
});
var o = i(857595),
    r = i(607070),
    E = i(981631);
function e(n) {
    return E.yqN.ZOOM_SCALES[Math.max(0, Math.min(E.yqN.ZOOM_SCALES.indexOf(r.Z.zoom) + n, E.yqN.ZOOM_SCALES.length - 1))];
}
let s = {
        binds: ['mod+plus'],
        comboKeysBindGlobal: !0,
        action: () => ((0, o.cq)(e(1)), !1)
    },
    d = {
        binds: ['mod+minus'],
        comboKeysBindGlobal: !0,
        action: () => ((0, o.cq)(e(-1)), !1)
    },
    c = {
        binds: ['mod+0'],
        comboKeysBindGlobal: !0,
        action: () => ((0, o.cq)(E.yqN.ZOOM_DEFAULT), !1)
    };
t.ZP =
    12633 == i.j
        ? {
              ZOOM_IN: s,
              ZOOM_OUT: d,
              ZOOM_RESET: c
          }
        : null;
