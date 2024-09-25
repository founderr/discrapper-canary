var r,
    i = n(47120);
var a = n(512722),
    o = n.n(a),
    s = n(442837),
    l = n(570140),
    u = n(830917);
function c(e, t, n) {
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
let d = null,
    _ = new Map();
function E(e) {
    let t = _.get(e);
    return null == t
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
        : t;
}
function f(e) {
    o()(!_.has(e.windowId), 'Window initialized multiple times');
    let { width: t, height: n, isElementFullscreen: r, focused: i, visible: a } = e;
    return (
        _.set(e.windowId, {
            windowSize: {
                width: t,
                height: n
            },
            isElementFullscreen: r,
            focused: i,
            visible: a
        }),
        i && (d = e.windowId),
        !0
    );
}
function h(e) {
    let t = E(e.windowId);
    return (
        t.isElementFullscreen !== e.isElementFullscreen &&
        (_.set(e.windowId, {
            ...t,
            isElementFullscreen: e.isElementFullscreen
        }),
        !0)
    );
}
function p(e) {
    let t = E(e.windowId);
    return (
        t.focused !== e.focused &&
        (e.focused && (d = e.windowId),
        _.set(e.windowId, {
            ...t,
            focused: e.focused
        }),
        !0)
    );
}
function m(e) {
    let t = E(e.windowId);
    return (
        t.visible !== e.visible &&
        (_.set(e.windowId, {
            ...t,
            visible: e.visible
        }),
        !0)
    );
}
function I(e) {
    let t = E(e.windowId);
    return (
        (t.windowSize.width !== e.width || t.windowSize.height !== e.height) &&
        (_.set(e.windowId, {
            ...t,
            windowSize: {
                width: e.width,
                height: e.height
            }
        }),
        !0)
    );
}
function T(e) {
    return _.delete(e.windowId), d === e.windowId && (d = null), !0;
}
class g extends (r = s.ZP.Store) {
    isFocused() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, u.UU)();
        return E(e).focused;
    }
    isVisible() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, u.UU)();
        return E(e).visible;
    }
    getFocusedWindowId() {
        let e = null;
        return (
            _.forEach((t, n) => {
                t.focused && (e = n);
            }),
            e
        );
    }
    getLastFocusedWindowId() {
        return d;
    }
    isElementFullScreen() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, u.UU)();
        return E(e).isElementFullscreen;
    }
    windowSize() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, u.UU)();
        return E(e).windowSize;
    }
}
c(g, 'displayName', 'WindowStore');
let S = new g(l.Z, {
    WINDOW_INIT: f,
    WINDOW_FULLSCREEN_CHANGE: h,
    WINDOW_FOCUS: p,
    WINDOW_RESIZED: I,
    WINDOW_UNLOAD: T,
    WINDOW_VISIBILITY_CHANGE: m
});
Promise.resolve()
    .then(n.bind(n, 626135))
    .then((e) => {
        let { addExtraAnalyticsDecorator: t } = e;
        t((e) => {
            e.client_app_state = S.isFocused() ? 'focused' : 'unfocused';
        });
    }),
    (t.Z = S);
