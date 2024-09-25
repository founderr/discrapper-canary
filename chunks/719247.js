n.d(t, {
    T: function () {
        return g;
    }
});
var r,
    i = n(47120);
var a = n(392711),
    o = n.n(a),
    s = n(661869),
    l = n(876215),
    u = n(442837),
    c = n(570140),
    d = n(158776),
    _ = n(146282),
    E = n(26033),
    f = n(180335),
    h = n(561308),
    p = n(981631);
function m(e, t, n) {
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
let I = new Set([l.s.LISTENED_SESSION]),
    T = new Map();
function g(e) {
    return ''.concat(e.author_id, ':').concat(e.id);
}
function S(e) {
    return (0, h.n2)(e) ? null : (0, h.kr)(e) && e.author_type === s.i.USER ? d.Z.getActivities(e.author_id).find((t) => (t.type === p.IIU.PLAYING && (0, E.m9)(e) ? (0, f.cN)(e, t) : !!(t.type === p.IIU.LISTENING && (0, E.dU)(e)) && (0, f.pB)(e, t))) : void 0;
}
function A(e) {
    let t = new Set(),
        n = new Set();
    for (let r of e) {
        let e = S(r.content);
        if (void 0 !== e) {
            let i = g(r.content);
            n.add(i), e !== T.get(i) && (t.add(i), T.set(i, e));
        }
    }
    return {
        updatedKeys: t,
        matchedKeys: n
    };
}
function v(e) {
    let { feed: t } = e,
        { updatedKeys: n } = A(t.entries);
    return n.size > 0;
}
function N() {
    T.clear();
}
function O() {
    let e = !1,
        t = Array.from(T.keys()),
        n = new Set(),
        r = new Set();
    for (let t of _.Z.getFeeds().values()) {
        let { updatedKeys: i, matchedKeys: a } = A(n.size > 0 ? t.entries.filter((e) => !n.has(g(e.content))) : t.entries);
        for (let e of i) n.add(e);
        for (let e of a) r.add(e);
        e = e || i.size > 0;
    }
    for (let n of o().difference(t, [...r])) T.delete(n), (e = !0);
    return e;
}
class R extends (r = u.ZP.Store) {
    initialize() {
        this.waitFor(_.Z, d.Z), this.syncWith([d.Z], O);
    }
    getMatchingActivity(e) {
        return (0, h.n2)(e) ? null : T.get(g(e));
    }
    constructor(...e) {
        super(...e), m(this, 'canRenderContent', (e) => !(0, h.n2)(e) && (!I.has(e.content_type) || null != this.getMatchingActivity(e)));
    }
}
m(R, 'displayName', 'ContentInventoryActivityStore'),
    (t.Z = new R(c.Z, {
        CONNECTION_OPEN: N,
        CONTENT_INVENTORY_SET_FEED: v
    }));
