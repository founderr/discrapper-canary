n.d(t, {
    T: function () {
        return v;
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
    f = n(26033),
    _ = n(180335),
    p = n(561308),
    h = n(981631);
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
let g = new Set([o.s.LISTENED_SESSION]),
    E = new Map();
function v(e) {
    return ''.concat(e.author_id, ':').concat(e.id);
}
function I(e) {
    let t = new Set(),
        n = new Set();
    for (let r of e) {
        let e = (function (e) {
            return (0, p.n2)(e) ? null : (0, p.kr)(e) && e.author_type === s.i.USER ? c.Z.getActivities(e.author_id).find((t) => (t.type === h.IIU.PLAYING && (0, f.m9)(e) ? (0, _.cN)(e, t) : !!(t.type === h.IIU.LISTENING && (0, f.dU)(e)) && (0, _.pB)(e, t))) : void 0;
        })(r.content);
        if (void 0 !== e) {
            let i = v(r.content);
            n.add(i), e !== E.get(i) && (t.add(i), E.set(i, e));
        }
    }
    return {
        updatedKeys: t,
        matchedKeys: n
    };
}
function b() {
    let e = !1,
        t = Array.from(E.keys()),
        n = new Set(),
        r = new Set();
    for (let t of d.Z.getFeeds().values()) {
        let { updatedKeys: i, matchedKeys: a } = I(n.size > 0 ? t.entries.filter((e) => !n.has(v(e.content))) : t.entries);
        for (let e of i) n.add(e);
        for (let e of a) r.add(e);
        e = e || i.size > 0;
    }
    for (let n of a().difference(t, [...r])) E.delete(n), (e = !0);
    return e;
}
class T extends (r = l.ZP.Store) {
    initialize() {
        this.waitFor(d.Z, c.Z), this.syncWith([c.Z], b);
    }
    getMatchingActivity(e) {
        return (0, p.n2)(e) ? null : E.get(v(e));
    }
    constructor(...e) {
        super(...e), m(this, 'canRenderContent', (e) => !(0, p.n2)(e) && (!g.has(e.content_type) || null != this.getMatchingActivity(e)));
    }
}
m(T, 'displayName', 'ContentInventoryActivityStore'),
    (t.Z = new T(u.Z, {
        CONNECTION_OPEN: function () {
            E.clear();
        },
        CONTENT_INVENTORY_SET_FEED: function (e) {
            let { feed: t } = e,
                { updatedKeys: n } = I(t.entries);
            return n.size > 0;
        }
    }));
