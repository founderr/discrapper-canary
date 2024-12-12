let i, a;
var s,
    o = r(47120);
var l = r(442837),
    u = r(570140),
    c = r(981631),
    d = r(354459);
function f(e, n, r) {
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
let _ = new Map(),
    h = {},
    p = c.VD2.BOTTOM_RIGHT,
    m = {
        [d.cL.VIDEO]: d.l8[d.cL.VIDEO],
        [d.cL.CAMERA_PREVIEW]: d.l8[d.cL.CAMERA_PREVIEW]
    };
function g(e) {
    var n, r;
    let { id: s, component: o, props: l } = e;
    if (null != _.get(s)) return;
    let u = {
        id: s,
        component: o,
        position: null !== (n = l.position) && void 0 !== n ? n : p,
        props: l,
        docked: null !== (r = l.docked) && void 0 !== r && r
    };
    _.set(s, u), o === c.NYg.VIDEO ? null == i && (i = s) : o === c.NYg.EMBED_IFRAME && null == a && (a = s);
}
function E(e) {
    let { id: n } = e;
    if (!_.has(n)) return !1;
    {
        _.delete(n);
        let e = Array.from(_.keys());
        i === n
            ? (i = e.find((e) => {
                  let n = _.get(e);
                  return null != n && n.component === c.NYg.VIDEO;
              }))
            : a === n &&
              (a = e.find((e) => {
                  let n = _.get(e);
                  return null != n && n.component === c.NYg.EMBED_IFRAME;
              }));
    }
}
function v(e) {
    let { id: n, position: r } = e;
    if (null == n || (i !== n && a !== n)) return !1;
    {
        let e = new Map();
        _.forEach((n, i) => {
            e.set(i, {
                ...n,
                position: r
            });
        }),
            (_ = e),
            (p = r);
    }
}
function I(e) {
    let { width: n, pipType: r } = e;
    m[r] = n;
}
function T(e) {
    let { id: n, rect: r } = e;
    h[n] = r;
}
function b(e) {
    let { id: n } = e;
    if (i !== n && a !== n) return !1;
    {
        let e = _.get(n);
        if (null == e) return !1;
        _.set(n, {
            ...e,
            hidden: !0
        });
    }
}
function y(e) {
    let { id: n } = e;
    if (i !== n && a !== n) return !1;
    {
        let e = _.get(n);
        if (null == e) return !1;
        _.set(n, {
            ...e,
            hidden: !1
        });
    }
}
function S(e) {
    let { id: n } = e,
        r = _.get(n);
    null != r && (r.component === c.NYg.VIDEO ? (i = n) : r.component === c.NYg.EMBED_IFRAME && (a = n));
}
function A() {
    (i = null), (a = null), (_ = new Map());
}
class N extends (s = l.ZP.PersistedStore) {
    initialize(e) {
        if (null == e) {
            (p = c.VD2.BOTTOM_RIGHT),
                (m = {
                    [d.cL.VIDEO]: d.l8[d.cL.VIDEO],
                    [d.cL.CAMERA_PREVIEW]: d.l8[d.cL.CAMERA_PREVIEW]
                });
            return;
        }
        (p = e.openPosition), (m = e.pipWidths);
    }
    get pipWindow() {
        var e;
        return null == i && null == a ? null : _.get(null !== (e = null != i ? i : a) && void 0 !== e ? e : '');
    }
    get pipVideoWindow() {
        return null == i ? null : _.get(i);
    }
    get pipActivityWindow() {
        return null == a ? null : _.get(a);
    }
    get pipWindows() {
        return _;
    }
    pipWidth(e) {
        return m[e];
    }
    isEmbeddedActivityHidden() {
        return null == a;
    }
    getDockedRect(e) {
        return h[e];
    }
    isOpen(e) {
        return null != e && _.has(e);
    }
    getState() {
        return {
            openPosition: p,
            pipWidths: m
        };
    }
}
f(N, 'displayName', 'PictureInPictureStore'),
    f(N, 'persistKey', 'PictureInPictureStore'),
    f(N, 'migrations', [
        (e) => {
            var n, r;
            return {
                pipWidths: {
                    [d.cL.VIDEO]: null !== (n = e.pipWidth) && void 0 !== n ? n : d.l8[d.cL.VIDEO],
                    [d.cL.CAMERA_PREVIEW]: d.l8[d.cL.CAMERA_PREVIEW]
                },
                openPosition: null !== (r = e.openPosition) && void 0 !== r ? r : c.VD2.BOTTOM_RIGHT
            };
        }
    ]),
    (n.Z = new N(u.Z, {
        PICTURE_IN_PICTURE_OPEN: g,
        PICTURE_IN_PICTURE_CLOSE: E,
        PICTURE_IN_PICTURE_MOVE: v,
        PICTURE_IN_PICTURE_RESIZE: I,
        PICTURE_IN_PICTURE_HIDE: b,
        PICTURE_IN_PICTURE_SHOW: y,
        PICTURE_IN_PICTURE_UPDATE_RECT: T,
        PICTURE_IN_PICTURE_UPDATE_SELECTED_WINDOW: S,
        LOGOUT: A
    }));
