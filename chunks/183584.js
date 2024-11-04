n.d(t, {
    IN: function () {
        return o;
    },
    oZ: function () {
        return s;
    }
}),
    n(200651),
    n(192379);
var i = n(570140);
n(238246), n(788983), n(592125), n(19780);
var l = n(237997);
n(998502), n(487029);
var r = n(710111);
n(981631), n(388032);
let a = {
    width: r.FW.width,
    height: r.FW.height,
    resizable: !1,
    movable: !1,
    alwaysOnTop: !0,
    frame: !1,
    transparent: !0,
    hasShadow: !1,
    skipTaskbar: !0,
    menubar: !0,
    backgroundColor: '#00000000',
    titleBarStyle: null
};
function o(e, t) {
    i.Z.dispatch({
        type: 'OVERLAY_SET_INPUT_LOCKED',
        locked: !1,
        pid: t
    }),
        i.Z.dispatch({
            type: 'SOUNDBOARD_SET_OVERLAY_ENABLED',
            pid: t,
            enabled: !0,
            keepOpen: e
        });
}
function s(e) {
    i.Z.dispatch({
        type: 'SOUNDBOARD_SET_OVERLAY_ENABLED',
        pid: e,
        enabled: !1
    }),
        !l.Z.isLocked(e) &&
            i.Z.dispatch({
                type: 'OVERLAY_SET_INPUT_LOCKED',
                locked: !0,
                pid: e
            });
}
r.FW.padding, a.width, a.height;
