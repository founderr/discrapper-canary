n.d(t, {
    EB: function () {
        return N;
    },
    cl: function () {
        return A;
    }
});
var r = n(47120);
var i = n(392711),
    a = n.n(i),
    o = n(442837),
    s = n(544891),
    l = n(570140),
    u = n(592125),
    c = n(709054),
    d = n(238349),
    _ = n(660189);
n(682474);
var E = n(981631);
function f(e, t, n) {
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
let h = 10,
    p = 5;
class m {
    get(e) {
        return !this._set.hasOwnProperty(e) && (this._set[e] = this._defaultValueFunc()), this._set[e];
    }
    delete(e) {
        delete this._set[e];
    }
    hasNext() {
        return !a().isEmpty(this._set);
    }
    next() {
        return c.default.keys(this._set)[0];
    }
    constructor(e) {
        f(this, '_set', void 0), f(this, '_defaultValueFunc', void 0), (this._set = {}), (this._defaultValueFunc = e);
    }
}
class I {
    request(e, t) {
        this.requested.get(e).add(t);
    }
    hasRequested(e, t) {
        return this.requested.get(e).has(t);
    }
    finishRequesting(e, t) {
        let n = this.requested.get(e);
        t.forEach((e) => n.delete(e)), T.compact(e);
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
        f(this, 'requested', void 0), (this.requested = new m(() => new Set()));
    }
}
let T = new I(),
    g = null;
function S(e, t) {
    return !e && null == t;
}
function A(e) {
    let { loaded: t, firstMessage: n } = (0, o.cj)([_.Z], () => _.Z.getMessage(e.id)),
        r = (0, o.e7)([u.Z], () => u.Z.getChannel(e.parent_id));
    return (
        null != r && S(t, n) && O(r, e.id),
        {
            loaded: t,
            firstMessage: n
        }
    );
}
function v(e, t) {
    let n = !1;
    t.forEach((t) => {
        let { loaded: r, firstMessage: i } = _.Z.getMessage(t);
        S(r, i) && (T.request(e.id, t), (n = !0));
    }),
        n && null == g && (g = setTimeout(R, 0));
}
function N(e) {
    v(e, (0, d.U)(e.id).slice(0, h));
}
function O(e, t) {
    if (T.hasRequested(e.id, t)) return;
    let n = (0, d.U)(e.id),
        r = n.findIndex((e) => e === t),
        i = n.slice(r, r + p).filter((t) => !T.hasRequested(e.id, t));
    v(e, i);
}
async function R() {
    try {
        for (; T.hasNext(); ) await C(T.next());
    } finally {
        g = null;
    }
}
async function C(e) {
    let t = T.getNextBatch(e, h);
    try {
        var n;
        if (0 === t.length) return;
        let r = null === (n = u.Z.getChannel(e)) || void 0 === n ? void 0 : n.guild_id;
        if (null == r) return;
        let {
            body: { threads: i }
        } = await s.tn.post({
            url: E.ANM.FORUM_POSTS(e),
            body: { thread_ids: t }
        });
        l.Z.dispatch({
            type: 'LOAD_FORUM_POSTS',
            guildId: r,
            threads: i
        });
    } catch (e) {
    } finally {
        T.finishRequesting(e, t);
    }
}
