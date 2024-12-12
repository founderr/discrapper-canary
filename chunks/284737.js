r.d(n, {
    CO: function () {
        return _;
    },
    Rz: function () {
        return p;
    },
    S1: function () {
        return h;
    },
    T_: function () {
        return l;
    },
    al: function () {
        return u;
    },
    dx: function () {
        return d;
    },
    gH: function () {
        return f;
    }
});
var i = r(392711);
var a = r(570140),
    s = r(228488),
    o = r(830917);
function l(e, n) {
    a.Z.dispatch({
        type: 'WINDOW_FOCUS',
        windowId: (0, o.ZY)(e),
        focused: n
    });
}
function u(e) {
    a.Z.dispatch({
        type: 'WINDOW_HIDDEN',
        windowId: (0, o.ZY)(e)
    });
}
let c = (0, i.memoize)((e) =>
    (0, i.debounce)((n, r) => {
        a.Z.dispatch({
            type: 'WINDOW_RESIZED',
            windowId: e,
            width: n,
            height: r
        });
    }, 100)
);
function d(e) {
    c((0, o.ZY)(e))(e.innerWidth, e.innerHeight);
}
function f(e) {
    let n = (0, o.ZY)(e);
    a.Z.dispatch({
        type: 'WINDOW_FULLSCREEN_CHANGE',
        windowId: n,
        isElementFullscreen: (0, s.rB)(null, e.document)
    });
}
function _(e) {
    let n = (0, o.ZY)(e);
    a.Z.dispatch({
        type: 'WINDOW_VISIBILITY_CHANGE',
        windowId: n,
        visible: 'visible' === e.document.visibilityState
    });
}
function h(e) {
    let n = (0, o.ZY)(e),
        r = e.document;
    a.Z.dispatch({
        type: 'WINDOW_INIT',
        windowId: n,
        isElementFullscreen: (0, s.rB)(null, r),
        focused: r.hasFocus(),
        width: e.innerWidth,
        height: e.innerHeight,
        visible: 'visible' === r.visibilityState
    });
}
function p(e) {
    a.Z.dispatch({
        type: 'WINDOW_UNLOAD',
        windowId: (0, o.ZY)(e)
    });
}
