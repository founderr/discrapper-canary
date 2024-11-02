n.d(t, {
    EB: function () {
        return I;
    },
    cl: function () {
        return E;
    }
}),
    n(47120);
var r = n(392711),
    i = n.n(r),
    a = n(442837),
    s = n(544891),
    o = n(570140),
    l = n(592125),
    u = n(709054),
    c = n(238349),
    d = n(660189);
n(682474);
var f = n(981631);
function _(e, t, n) {
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
class h {
    get(e) {
        return !this._set.hasOwnProperty(e) && (this._set[e] = this._defaultValueFunc()), this._set[e];
    }
    delete(e) {
        delete this._set[e];
    }
    hasNext() {
        return !i().isEmpty(this._set);
    }
    next() {
        return u.default.keys(this._set)[0];
    }
    constructor(e) {
        _(this, '_set', void 0), _(this, '_defaultValueFunc', void 0), (this._set = {}), (this._defaultValueFunc = e);
    }
}
let p = new (class e {
        request(e, t) {
            this.requested.get(e).add(t);
        }
        hasRequested(e, t) {
            return this.requested.get(e).has(t);
        }
        finishRequesting(e, t) {
            let n = this.requested.get(e);
            t.forEach((e) => n.delete(e)), p.compact(e);
        }
        getRequested(e) {
            return this.requested.get(e);
        }
        getNextBatch(e, t) {
            return Array.from(this.requested.get(e)).slice(0, t);
        }
        hasNext() {
            return this.requested.hasNext();
        }
        next() {
            return this.requested.next();
        }
        compact(e) {
            0 === this.requested.get(e).size && this.requested.delete(e);
        }
        constructor() {
            _(this, 'requested', void 0), (this.requested = new h(() => new Set()));
        }
    })(),
    m = null;
function g(e, t) {
    return !e && null == t;
}
function E(e) {
    var t, n;
    let { loaded: r, firstMessage: i } = (0, a.cj)([d.Z], () => d.Z.getMessage(e.id)),
        s = (0, a.e7)([l.Z], () => l.Z.getChannel(e.parent_id));
    if (null != s && ((t = r), (n = i), !t && null == n))
        (function (e, t) {
            if (p.hasRequested(e.id, t)) return;
            let n = (0, c.U)(e.id),
                r = n.findIndex((e) => e === t),
                i = n.slice(r, r + 5).filter((t) => !p.hasRequested(e.id, t));
            v(e, i);
        })(s, e.id);
    return {
        loaded: r,
        firstMessage: i
    };
}
function v(e, t) {
    let n = !1;
    t.forEach((t) => {
        var r, i;
        let { loaded: a, firstMessage: s } = d.Z.getMessage(t);
        if (((r = a), (i = s), !r && null == i)) p.request(e.id, t), (n = !0);
    }),
        n && null == m && (m = setTimeout(S, 0));
}
function I(e) {
    v(e, (0, c.U)(e.id).slice(0, 10));
}
async function S() {
    try {
        for (; p.hasNext(); ) await T(p.next());
    } finally {
        m = null;
    }
}
async function T(e) {
    let t = p.getNextBatch(e, 10);
    try {
        var n;
        if (0 === t.length) return;
        let r = null === (n = l.Z.getChannel(e)) || void 0 === n ? void 0 : n.guild_id;
        if (null == r) return;
        let {
            body: { threads: i }
        } = await s.tn.post({
            url: f.ANM.FORUM_POSTS(e),
            body: { thread_ids: t }
        });
        o.Z.dispatch({
            type: 'LOAD_FORUM_POSTS',
            guildId: r,
            threads: i
        });
    } catch (e) {
    } finally {
        p.finishRequesting(e, t);
    }
}
