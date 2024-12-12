r.d(n, {
    $G: function () {
        return v;
    },
    BU: function () {
        return y;
    },
    Fr: function () {
        return O;
    },
    Fz: function () {
        return R;
    },
    Ko: function () {
        return p;
    },
    Pe: function () {
        return D;
    },
    WU: function () {
        return C;
    },
    cl: function () {
        return S;
    },
    g9: function () {
        return I;
    },
    jW: function () {
        return E;
    },
    kG: function () {
        return N;
    },
    qc: function () {
        return T;
    },
    zV: function () {
        return b;
    }
});
var i = r(47120);
var a = r(724458);
var s = r(392711),
    o = r.n(s),
    l = r(349033),
    u = r(999650),
    c = r(731290),
    d = r(594174),
    f = r(709054),
    _ = r(981631),
    h = r(388032);
function p(e) {
    switch (e) {
        case _.dCx.FILTER_FROM:
            return h.intl.string(h.t.E466pK);
        case _.dCx.FILTER_MENTIONS:
            return h.intl.string(h.t.BYvFWl);
        case _.dCx.FILTER_HAS:
            return h.intl.string(h.t.bhSYbW);
        case _.dCx.FILTER_BEFORE:
        case _.dCx.FILTER_ON:
        case _.dCx.FILTER_AFTER:
            return h.intl.string(h.t.Zbbc1N);
        case _.dCx.FILTER_IN:
            return h.intl.string(h.t['GpM+//']);
        case _.dCx.FILTER_FILE_TYPE:
            return h.intl.string(h.t.FXcAFR);
        case _.dCx.FILTER_FILE_NAME:
            return h.intl.string(h.t.uAbFDA);
        case _.dCx.FILTER_PINNED:
            return h.intl.string(h.t.UJxL3d);
    }
}
let m = {
    [_.dCx.FILTER_BEFORE]: !0,
    [_.dCx.FILTER_AFTER]: !0,
    [_.dCx.FILTER_ON]: !0
};
function g(e) {
    let n = u.ZP[e],
        r = null != n ? n.queryKey : null;
    return null == r && (r = 'content'), r;
}
function E(e, n) {
    if (c.Z.didAgree(n)) {
        let n = d.default.getCurrentUser();
        null != n && (e.include_nsfw = null == n.nsfwAllowed || n.nsfwAllowed);
    }
}
function v(e) {
    let n = {};
    for (let [r, i] of (e.forEach((e) => {
        let { type: r } = e;
        if (_.TNx.test(r)) return;
        switch (r) {
            case _.dCx.ANSWER_BEFORE:
            case _.dCx.ANSWER_ON:
            case _.dCx.ANSWER_AFTER:
                let i = e.getData('start'),
                    a = e.getData('end');
                i && (n.min_id = f.default.fromTimestamp(i)), a && (n.max_id = f.default.fromTimestamp(a));
                return;
        }
        let s = g(r);
        null == n[s] && (n[s] = new Set());
        let o = n[s];
        switch (r) {
            case _.dCx.ANSWER_USERNAME_FROM:
            case _.dCx.ANSWER_USERNAME_MENTIONS:
                o.add(e.getData('userId'));
                break;
            case _.dCx.ANSWER_FILE_TYPE:
            case _.dCx.ANSWER_FILE_NAME:
                o.add(e.getMatch(1));
                break;
            case _.dCx.ANSWER_IN:
                o.add(e.getData('channel').id);
                break;
            case _.dCx.ANSWER_HAS:
                o.add(e.getData('has'));
                break;
            case _.dCx.ANSWER_PINNED:
                o.add(e.getData('pinned'));
                break;
            default:
                o.add(e.getFullMatch().trim());
        }
    }),
    Object.entries(n)))
        i instanceof Set && (n[r] = Array.from(i));
    return n.content && ((n.content = n.content.join(' ').trim()), !n.content && delete n.content), n;
}
function I(e, n, r) {
    let i, a;
    let s = e.find((s, o) => (n >= s.start && n <= s.end && r >= s.start && r <= s.end ? (null != e[o + 1] && (a = e[o + 1]), !0) : ((i = s), !1)));
    return null == s
        ? null
        : {
              previousToken: i,
              currentToken: s,
              nextToken: a,
              focusOffset: n,
              anchorOffset: r
          };
}
function T(e, n) {
    let r;
    let { currentToken: i, nextToken: a, previousToken: s } = (e = null != e ? e : {});
    if (0 === n.length)
        return {
            type: _.Sap.EMPTY,
            filter: null,
            token: null
        };
    if (null == i)
        return {
            type: _.Sap.FILTER_ALL,
            filter: null,
            token: null
        };
    if (_.TNx.test(i.type)) {
        if (null == a || a.type === l.ZP.NON_TOKEN_TYPE)
            return {
                type: _.Sap.FILTER,
                filter: i.type,
                token: a
            };
        if (null != a && !_.KA4.test(a.type))
            return {
                type: _.Sap.FILTER,
                filter: i.type,
                token: null
            };
    }
    return i.type === l.ZP.NON_TOKEN_TYPE && null != s && _.TNx.test(s.type)
        ? {
              type: _.Sap.FILTER,
              filter: s.type,
              token: i
          }
        : (i.type === l.ZP.NON_TOKEN_TYPE && (r = i),
          {
              type: _.Sap.FILTER_ALL,
              filter: null,
              token: r
          });
}
function b(e, n) {
    let r = [];
    return (
        o()(e).forEach((e) => {
            if (null == e || 0 === e.results.length) return;
            let i = e.group;
            r = r.concat(
                e.results.map((e) => {
                    let r = e.text;
                    if (n === _.Sap.FILTER_ALL) {
                        var a;
                        i = null !== (a = e.group) && void 0 !== a ? a : i;
                        let n = u.ZP[i];
                        (null == n ? void 0 : n.key) != null && (null == n ? void 0 : n.key) !== '' && (r = ''.concat(n.key, ' ').concat(r));
                    }
                    return r;
                })
            );
        }),
        r.filter((e) => e)
    );
}
function y(e) {
    return e.reduce((e, n) => (null == n ? e : n.results.length + e), 0);
}
function S(e) {
    return null == e ? '' : e.map((e) => e.getFullMatch()).join('');
}
let A = new l.ZP();
function N(e) {
    return A.tokenize(e);
}
function C() {
    return A.clearCache();
}
function R(e) {
    return null != e ? m[e] : null;
}
function O(e, n) {
    let r = _.TNx.test(e.type);
    return (null != n || !r) && (null == n || !r || !!_.KA4.test(n.type)) && !0;
}
function D() {
    (0, u.Pe)(),
        A.reset(),
        o()(u.ZP).forOwn((e, n) =>
            A.addRule({
                type: n,
                ...e
            })
        );
}
