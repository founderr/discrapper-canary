r.d(n, {
    T: function () {
        return T;
    }
});
var i,
    a = r(47120);
var s = r(392711),
    o = r.n(s),
    l = r(661869),
    u = r(876215),
    c = r(442837),
    d = r(570140),
    f = r(158776),
    _ = r(146282),
    h = r(26033),
    p = r(180335),
    m = r(561308),
    g = r(981631);
function E(e, n, r) {
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
let v = new Set([u.s.LISTENED_SESSION]),
    I = new Map();
function T(e) {
    return ''.concat(e.author_id, ':').concat(e.id);
}
function b(e) {
    return (0, m.n2)(e) ? null : (0, m.kr)(e) && e.author_type === l.i.USER ? f.Z.getActivities(e.author_id).find((n) => (n.type === g.IIU.PLAYING && (0, h.m9)(e) ? (0, p.cN)(e, n) : !!(n.type === g.IIU.LISTENING && (0, h.dU)(e)) && (0, p.pB)(e, n))) : void 0;
}
function y(e) {
    let n = new Set(),
        r = new Set();
    for (let i of e) {
        let e = b(i.content);
        if (void 0 !== e) {
            let a = T(i.content);
            r.add(a), e !== I.get(a) && (n.add(a), I.set(a, e));
        }
    }
    return {
        updatedKeys: n,
        matchedKeys: r
    };
}
function S(e) {
    let { feed: n } = e,
        { updatedKeys: r } = y(n.entries);
    return r.size > 0;
}
function A() {
    I.clear();
}
function N() {
    let e = !1,
        n = Array.from(I.keys()),
        r = new Set(),
        i = new Set();
    for (let n of _.Z.getFeeds().values()) {
        let { updatedKeys: a, matchedKeys: s } = y(r.size > 0 ? n.entries.filter((e) => !r.has(T(e.content))) : n.entries);
        for (let e of a) r.add(e);
        for (let e of s) i.add(e);
        e = e || a.size > 0;
    }
    for (let r of o().difference(n, [...i])) I.delete(r), (e = !0);
    return e;
}
class C extends (i = c.ZP.Store) {
    initialize() {
        this.waitFor(_.Z, f.Z), this.syncWith([f.Z], N);
    }
    getMatchingActivity(e) {
        return (0, m.n2)(e) ? null : I.get(T(e));
    }
    constructor(...e) {
        super(...e), E(this, 'canRenderContent', (e) => !(0, m.n2)(e) && (!v.has(e.content_type) || null != this.getMatchingActivity(e)));
    }
}
E(C, 'displayName', 'ContentInventoryActivityStore'),
    (n.Z = new C(d.Z, {
        CONNECTION_OPEN: A,
        CONTENT_INVENTORY_SET_FEED: S
    }));
