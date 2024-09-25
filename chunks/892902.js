var r,
    i = n(47120);
var a = n(442837),
    o = n(570140),
    s = n(69004);
function l(e, t, n) {
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
let u = 196606,
    c = new s.Z(u),
    d = 0,
    _ = new s.Z(u),
    E = new s.Z(u);
function f(e, t, n) {
    var r;
    let i = null !== (r = c.get(e)) && void 0 !== r ? r : new Map();
    i.set(t, n), c.set(e, i), d++;
}
function h(e) {
    let t = _.get(e);
    null != t && E.delete(t), _.delete(e), c.delete(e), d++;
}
function p(e) {
    let { componentId: t, messageId: n } = e,
        r = c.get(n);
    if (null == r || !r.has(t)) return !1;
    r.delete(t), 0 === r.size && c.delete(n), d++;
}
function m() {
    c.clear(), _.clear(), E.clear(), d++;
}
function I(e) {
    let { messageId: t, nonce: n, componentId: r, state: i } = e;
    _.set(t, n),
        E.set(n, {
            messageId: t,
            componentId: r
        }),
        f(t, r, i);
}
function T(e) {
    let { rootContainerId: t, componentId: n, state: r } = e;
    f(t, n, r);
}
function g(e) {
    let { message: t } = e;
    if (null == t.id || !c.has(t.id)) return !1;
    h(t.id);
}
function S(e) {
    let { id: t } = e;
    if (!c.has(t)) return !1;
    h(t);
}
function A(e) {
    let { nonce: t } = e;
    if (null == t) return !1;
    let n = E.get(t);
    if (null == n) return !1;
    _.delete(n.messageId), E.delete(t), d++;
}
function v(e) {
    let { nonce: t } = e;
    if (null == t) return !1;
    let n = E.get(t);
    if (null == n) return !1;
    p(n);
}
function N(e) {
    let { customId: t } = e;
    c.delete(t), d++;
}
class O extends (r = a.ZP.Store) {
    getInteractionComponentStates() {
        return c;
    }
    getInteractionComponentStateVersion() {
        return d;
    }
    getInteractionComponentState(e, t) {
        var n;
        let r = c.get(e);
        return null == r ? null : null !== (n = r.get(t)) && void 0 !== n ? n : null;
    }
}
l(O, 'displayName', 'LocalInteractionComponentStateStore'),
    (t.Z = new O(o.Z, {
        LOGOUT: m,
        QUEUE_INTERACTION_COMPONENT_STATE: I,
        SET_INTERACTION_COMPONENT_STATE: T,
        MESSAGE_DELETE: S,
        MESSAGE_UPDATE: g,
        INTERACTION_SUCCESS: A,
        INTERACTION_FAILURE: v,
        CLEAR_INTERACTION_MODAL_STATE: N
    }));
