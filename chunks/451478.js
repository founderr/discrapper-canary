n(47120);
var r,
    i,
    a,
    s,
    o = n(512722),
    l = n.n(o),
    u = n(442837),
    c = n(570140),
    d = n(830917);
let f = null,
    _ = new Map();
function p(e) {
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
class h extends (r = u.ZP.Store) {
    isFocused() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, d.UU)();
        return p(e).focused;
    }
    isVisible() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, d.UU)();
        return p(e).visible;
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
        return f;
    }
    isElementFullScreen() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, d.UU)();
        return p(e).isElementFullscreen;
    }
    windowSize() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, d.UU)();
        return p(e).windowSize;
    }
}
(s = 'WindowStore'),
    (a = 'displayName') in (i = h)
        ? Object.defineProperty(i, a, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (i[a] = s);
let m = new h(c.Z, {
    WINDOW_INIT: function (e) {
        l()(!_.has(e.windowId), 'Window initialized multiple times');
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
            i && (f = e.windowId),
            !0
        );
    },
    WINDOW_FULLSCREEN_CHANGE: function (e) {
        let t = p(e.windowId);
        return (
            t.isElementFullscreen !== e.isElementFullscreen &&
            (_.set(e.windowId, {
                ...t,
                isElementFullscreen: e.isElementFullscreen
            }),
            !0)
        );
    },
    WINDOW_FOCUS: function (e) {
        let t = p(e.windowId);
        return (
            t.focused !== e.focused &&
            (e.focused && (f = e.windowId),
            _.set(e.windowId, {
                ...t,
                focused: e.focused
            }),
            !0)
        );
    },
    WINDOW_RESIZED: function (e) {
        let t = p(e.windowId);
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
    },
    WINDOW_UNLOAD: function (e) {
        return _.delete(e.windowId), f === e.windowId && (f = null), !0;
    },
    WINDOW_VISIBILITY_CHANGE: function (e) {
        let t = p(e.windowId);
        return (
            t.visible !== e.visible &&
            (_.set(e.windowId, {
                ...t,
                visible: e.visible
            }),
            !0)
        );
    }
});
Promise.resolve()
    .then(n.bind(n, 626135))
    .then((e) => {
        let { addExtraAnalyticsDecorator: t } = e;
        t((e) => {
            e.client_app_state = m.isFocused() ? 'focused' : 'unfocused';
        });
    }),
    (t.Z = m);
