n.d(t, {
    WU: function () {
        return _;
    },
    Xe: function () {
        return l;
    }
});
var r = n(47120);
var i = n(789020);
var a = n(653041);
function o(e, t, n) {
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
let s = /.+/g,
    l = 'NON_TOKEN';
function u(e, t, n) {
    if (null == t) return null;
    for (let r = 0; r < t.length; r++) {
        let i;
        let a = t[r],
            o = c(e.match(a.regex), n);
        if (null != o) {
            let { cache: e } = a;
            if ((null != e && null != (i = e.get(o[0])) && ((i = new _(i)).start = o.index), null == i)) {
                if (((i = new _(o, a.type)), null != a.validator && !a.validator(i))) continue;
                null != e && !(null == e ? void 0 : e.has(o[0])) && e.set(o[0], i);
            }
            return i;
        }
    }
    return null;
}
function c(e, t) {
    if (null == e) return null;
    let n = [...e];
    return (n.index = t), n;
}
class d {
    reset(e) {
        (this._rules = []), (this._followers = {}), (this._nonTokenType = null != e ? e : l);
    }
    addRule(e) {
        let t;
        let { type: n, follows: r, validator: i } = e,
            { regex: a } = e;
        if (('^' !== a.source.charAt(0) && (a = new RegExp('^'.concat(a.source), a.flags)), null != i && (t = new Map()), null == r)) {
            this._rules.push({
                regex: a,
                type: n,
                validator: i,
                cache: t
            });
            return;
        }
        r.forEach((e) => {
            null == this._followers[e] && (this._followers[e] = []),
                this._followers[e].push({
                    regex: a,
                    type: n,
                    validator: i,
                    cache: t
                });
        });
    }
    tokenize(e) {
        let t,
            n = e,
            r = '',
            i = 0,
            a = [];
        for (; n.length > 0; ) {
            let e = this._getMatch(n, t, i + r.length);
            null != e ? (null != r && '' !== r && a.push(new _(c(r.match(s), i), this._nonTokenType)), (t = e), a.push(e), (i += t.length + r.length), (n = n.substring(t.length)), (r = '')) : ((r += n[0]), (n = n.substring(1)));
        }
        return null != r && '' !== r && a.push(new _(c(r.match(s), i), this._nonTokenType)), a;
    }
    clearCache() {
        for (let e in (this._rules.forEach((e) => {
            var t;
            return null === (t = e.cache) || void 0 === t ? void 0 : t.clear();
        }),
        this._followers))
            this._followers[e].forEach((e) => {
                var t;
                return null === (t = e.cache) || void 0 === t ? void 0 : t.clear();
            });
    }
    _getMatch(e, t, n) {
        let r;
        let i = null != t ? t.type : null;
        return (null == t ? void 0 : t.end) === n && (r = u(e, this._followers[String(i)], n)), null == r && (r = u(e, this._rules, n)), r;
    }
    constructor(e = [], t) {
        o(this, '_rules', []), o(this, '_followers', {}), o(this, '_nonTokenType', l), this.reset(t), e.forEach((e) => this.addRule(e));
    }
}
o(d, 'NON_TOKEN_TYPE', void 0), o(d, 'Token', void 0);
class _ {
    get end() {
        return this.start + this.length;
    }
    get length() {
        return this.match[0].length;
    }
    valueOf() {
        return this.match[0];
    }
    getFullMatch() {
        return this.match[0];
    }
    getMatch() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return this.match[e];
    }
    setData(e, t) {
        null == this._data && (this._data = new Map()), this._data.set(e, t);
    }
    getData(e) {
        if (null != this._data) return this._data.get(e);
    }
    constructor(e, t) {
        if ((o(this, 'match', void 0), o(this, 'start', void 0), o(this, 'type', void 0), o(this, '_data', void 0), e instanceof _)) (this.match = [...e.match]), (this.start = e.start), (this.type = e.type), null != e._data && (this._data = e._data);
        else if (null != e) {
            var n;
            (this.match = [...e]), (this.start = 'string' == typeof e ? 0 : null !== (n = e.index) && void 0 !== n ? n : 0), (this.type = t);
        } else (this.match = []), (this.start = 0), (this.type = t);
    }
}
(d.NON_TOKEN_TYPE = l), (d.Token = _), (t.ZP = d);
