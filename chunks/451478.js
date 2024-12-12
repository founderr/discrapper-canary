var i,
    a = r(47120);
var s = r(512722),
    o = r.n(s),
    l = r(442837),
    u = r(570140),
    c = r(830917);
function d(e, n, r) {
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
let f = null,
    _ = new Map();
function h(e) {
    let n = _.get(e);
    return null == n
        ? (console.warn('Window state not initialized', e),
          {
              isElementFullscreen: !1,
              focused: !1,
              windowSize: {
                  width: 0,
                  height: 0
              },
              visible: !1
          })
        : n;
}
function p(e) {
    o()(!_.has(e.windowId), 'Window initialized multiple times');
    let { width: n, height: r, isElementFullscreen: i, focused: a, visible: s } = e;
    return (
        _.set(e.windowId, {
            windowSize: {
                width: n,
                height: r
            },
            isElementFullscreen: i,
            focused: a,
            visible: s
        }),
        a && (f = e.windowId),
        !0
    );
}
function m(e) {
    let n = h(e.windowId);
    return (
        n.isElementFullscreen !== e.isElementFullscreen &&
        (_.set(e.windowId, {
            ...n,
            isElementFullscreen: e.isElementFullscreen
        }),
        !0)
    );
}
function g(e) {
    let n = h(e.windowId);
    return (
        n.focused !== e.focused &&
        (e.focused && (f = e.windowId),
        _.set(e.windowId, {
            ...n,
            focused: e.focused
        }),
        !0)
    );
}
function E(e) {
    let n = h(e.windowId);
    return (
        n.visible !== e.visible &&
        (_.set(e.windowId, {
            ...n,
            visible: e.visible
        }),
        !0)
    );
}
function v(e) {
    let n = h(e.windowId);
    return (
        (n.windowSize.width !== e.width || n.windowSize.height !== e.height) &&
        (_.set(e.windowId, {
            ...n,
            windowSize: {
                width: e.width,
                height: e.height
            }
        }),
        !0)
    );
}
function I(e) {
    return _.delete(e.windowId), f === e.windowId && (f = null), !0;
}
class T extends (i = l.ZP.Store) {
    isFocused() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, c.UU)();
        return h(e).focused;
    }
    isVisible() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, c.UU)();
        return h(e).visible;
    }
    getFocusedWindowId() {
        let e = null;
        return (
            _.forEach((n, r) => {
                n.focused && (e = r);
            }),
            e
        );
    }
    getLastFocusedWindowId() {
        return f;
    }
    isElementFullScreen() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, c.UU)();
        return h(e).isElementFullscreen;
    }
    windowSize() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, c.UU)();
        return h(e).windowSize;
    }
}
d(T, 'displayName', 'WindowStore');
let b = new T(u.Z, {
    WINDOW_INIT: p,
    WINDOW_FULLSCREEN_CHANGE: m,
    WINDOW_FOCUS: g,
    WINDOW_RESIZED: v,
    WINDOW_UNLOAD: I,
    WINDOW_VISIBILITY_CHANGE: E
});
Promise.resolve()
    .then(r.bind(r, 626135))
    .then((e) => {
        let { addExtraAnalyticsDecorator: n } = e;
        n((e) => {
            e.client_app_state = b.isFocused() ? 'focused' : 'unfocused';
        });
    }),
    (n.Z = b);
