n.d(t, {
    T: function () {
        return T;
    }
}),
    n(47120);
var r,
    i = n(392711),
    a = n.n(i),
    s = n(661869),
    o = n(876215),
    l = n(442837),
    u = n(570140),
    c = n(158776),
    d = n(146282),
    _ = n(26033),
    E = n(180335),
    f = n(561308),
    h = n(981631);
function p(e, t, n) {
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
let I = new Set([o.s.LISTENED_SESSION]),
    m = new Map();
function T(e) {
    return ''.concat(e.author_id, ':').concat(e.id);
}
function S(e) {
    let t = new Set(),
        n = new Set();
    for (let r of e) {
        let e = (function (e) {
            return (0, f.n2)(e) ? null : (0, f.kr)(e) && e.author_type === s.i.USER ? c.Z.getActivities(e.author_id).find((t) => (t.type === h.IIU.PLAYING && (0, _.m9)(e) ? (0, E.cN)(e, t) : !!(t.type === h.IIU.LISTENING && (0, _.dU)(e)) && (0, E.pB)(e, t))) : void 0;
        })(r.content);
        if (void 0 !== e) {
            let i = T(r.content);
            n.add(i), e !== m.get(i) && (t.add(i), m.set(i, e));
        }
    }
    return {
        updatedKeys: t,
        matchedKeys: n
    };
}
function g() {
    let e = !1,
        t = Array.from(m.keys()),
        n = new Set(),
        r = new Set();
    for (let t of d.Z.getFeeds().values()) {
        let { updatedKeys: i, matchedKeys: a } = S(n.size > 0 ? t.entries.filter((e) => !n.has(T(e.content))) : t.entries);
        for (let e of i) n.add(e);
        for (let e of a) r.add(e);
        e = e || i.size > 0;
    }
    for (let n of a().difference(t, [...r])) m.delete(n), (e = !0);
    return e;
}
class A extends (r = l.ZP.Store) {
    initialize() {
        this.waitFor(d.Z, c.Z), this.syncWith([c.Z], g);
    }
    getMatchingActivity(e) {
        return (0, f.n2)(e) ? null : m.get(T(e));
    }
    constructor(...e) {
        super(...e), p(this, 'canRenderContent', (e) => !(0, f.n2)(e) && (!I.has(e.content_type) || null != this.getMatchingActivity(e)));
    }
}
p(A, 'displayName', 'ContentInventoryActivityStore'),
    (t.Z = new A(u.Z, {
        CONNECTION_OPEN: function () {
            m.clear();
        },
        CONTENT_INVENTORY_SET_FEED: function (e) {
            let { feed: t } = e,
                { updatedKeys: n } = S(t.entries);
            return n.size > 0;
        }
    }));
