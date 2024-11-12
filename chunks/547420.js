e.d(t, {
    MY: function () {
        return d;
    },
    RC: function () {
        return a;
    },
    UF: function () {
        return u;
    }
});
var i = e(857595),
    l = e(607070),
    o = e(981631);
function r(n) {
    return o.yqN.ZOOM_SCALES[Math.max(0, Math.min(o.yqN.ZOOM_SCALES.indexOf(l.Z.zoom) + n, o.yqN.ZOOM_SCALES.length - 1))];
}
let u = {
        binds: ['mod+plus'],
        comboKeysBindGlobal: !0,
        action: () => ((0, i.cq)(r(1)), !1)
    },
    a = {
        binds: ['mod+minus'],
        comboKeysBindGlobal: !0,
        action: () => ((0, i.cq)(r(-1)), !1)
    },
    d = {
        binds: ['mod+0'],
        comboKeysBindGlobal: !0,
        action: () => ((0, i.cq)(o.yqN.ZOOM_DEFAULT), !1)
    };
t.ZP =
    12633 == e.j
        ? {
              ZOOM_IN: u,
              ZOOM_OUT: a,
              ZOOM_RESET: d
          }
        : null;
