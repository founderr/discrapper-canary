let r, i;
var a,
    o = n(47120);
var s = n(442837),
    l = n(570140),
    u = n(981631),
    c = n(354459);
function d(e, t, n) {
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
let _ = new Map(),
    E = {},
    f = u.VD2.BOTTOM_RIGHT,
    h = {
        [c.cL.VIDEO]: c.l8[c.cL.VIDEO],
        [c.cL.CAMERA_PREVIEW]: c.l8[c.cL.CAMERA_PREVIEW]
    };
function p(e) {
    var t, n;
    let { id: a, component: o, props: s } = e;
    if (null != _.get(a)) return;
    let l = {
        id: a,
        component: o,
        position: null !== (t = s.position) && void 0 !== t ? t : f,
        props: s,
        docked: null !== (n = s.docked) && void 0 !== n && n
    };
    _.set(a, l), o === u.NYg.VIDEO ? null == r && (r = a) : o === u.NYg.EMBED_IFRAME && null == i && (i = a);
}
function m(e) {
    let { id: t } = e;
    if (!_.has(t)) return !1;
    {
        _.delete(t);
        let e = Array.from(_.keys());
        r === t
            ? (r = e.find((e) => {
                  let t = _.get(e);
                  return null != t && t.component === u.NYg.VIDEO;
              }))
            : i === t &&
              (i = e.find((e) => {
                  let t = _.get(e);
                  return null != t && t.component === u.NYg.EMBED_IFRAME;
              }));
    }
}
function I(e) {
    let { id: t, position: n } = e;
    if (null == t || (r !== t && i !== t)) return !1;
    {
        let e = new Map();
        _.forEach((t, r) => {
            e.set(r, {
                ...t,
                position: n
            });
        }),
            (_ = e),
            (f = n);
    }
}
function T(e) {
    let { width: t, pipType: n } = e;
    h[n] = t;
}
function g(e) {
    let { id: t, rect: n } = e;
    E[t] = n;
}
function S(e) {
    let { id: t } = e;
    if (r !== t && i !== t) return !1;
    {
        let e = _.get(t);
        if (null == e) return !1;
        _.set(t, {
            ...e,
            hidden: !0
        });
    }
}
function A(e) {
    let { id: t } = e;
    if (r !== t && i !== t) return !1;
    {
        let e = _.get(t);
        if (null == e) return !1;
        _.set(t, {
            ...e,
            hidden: !1
        });
    }
}
function v(e) {
    let { id: t } = e,
        n = _.get(t);
    null != n && (n.component === u.NYg.VIDEO ? (r = t) : n.component === u.NYg.EMBED_IFRAME && (i = t));
}
function N() {
    (r = null), (i = null), (_ = new Map());
}
class O extends (a = s.ZP.PersistedStore) {
    initialize(e) {
        if (null == e) {
            (f = u.VD2.BOTTOM_RIGHT),
                (h = {
                    [c.cL.VIDEO]: c.l8[c.cL.VIDEO],
                    [c.cL.CAMERA_PREVIEW]: c.l8[c.cL.CAMERA_PREVIEW]
                });
            return;
        }
        (f = e.openPosition), (h = e.pipWidths);
    }
    get pipWindow() {
        var e;
        return null == r && null == i ? null : _.get(null !== (e = null != r ? r : i) && void 0 !== e ? e : '');
    }
    get pipVideoWindow() {
        return null == r ? null : _.get(r);
    }
    get pipActivityWindow() {
        return null == i ? null : _.get(i);
    }
    get pipWindows() {
        return _;
    }
    pipWidth(e) {
        return h[e];
    }
    isEmbeddedActivityHidden() {
        return null == i;
    }
    getDockedRect(e) {
        return E[e];
    }
    isOpen(e) {
        return null != e && _.has(e);
    }
    getState() {
        return {
            openPosition: f,
            pipWidths: h
        };
    }
}
d(O, 'displayName', 'PictureInPictureStore'),
    d(O, 'persistKey', 'PictureInPictureStore'),
    d(O, 'migrations', [
        (e) => {
            var t, n;
            return {
                pipWidths: {
                    [c.cL.VIDEO]: null !== (t = e.pipWidth) && void 0 !== t ? t : c.l8[c.cL.VIDEO],
                    [c.cL.CAMERA_PREVIEW]: c.l8[c.cL.CAMERA_PREVIEW]
                },
                openPosition: null !== (n = e.openPosition) && void 0 !== n ? n : u.VD2.BOTTOM_RIGHT
            };
        }
    ]),
    (t.Z = new O(l.Z, {
        PICTURE_IN_PICTURE_OPEN: p,
        PICTURE_IN_PICTURE_CLOSE: m,
        PICTURE_IN_PICTURE_MOVE: I,
        PICTURE_IN_PICTURE_RESIZE: T,
        PICTURE_IN_PICTURE_HIDE: S,
        PICTURE_IN_PICTURE_SHOW: A,
        PICTURE_IN_PICTURE_UPDATE_RECT: g,
        PICTURE_IN_PICTURE_UPDATE_SELECTED_WINDOW: v,
        LOGOUT: N
    }));
