n.d(t, {
    $G: function () {
        return I;
    },
    BU: function () {
        return A;
    },
    Fr: function () {
        return y;
    },
    Fz: function () {
        return C;
    },
    Ko: function () {
        return f;
    },
    Pe: function () {
        return L;
    },
    WU: function () {
        return R;
    },
    cl: function () {
        return v;
    },
    g9: function () {
        return T;
    },
    jW: function () {
        return m;
    },
    kG: function () {
        return O;
    },
    qc: function () {
        return g;
    },
    zV: function () {
        return S;
    }
});
var r = n(47120);
var i = n(724458);
var a = n(392711),
    o = n.n(a),
    s = n(349033),
    l = n(999650),
    u = n(731290),
    c = n(594174),
    d = n(709054),
    _ = n(981631),
    E = n(689938);
function f(e) {
    switch (e) {
        case _.dCx.FILTER_FROM:
            return E.Z.Messages.SEARCH_ANSWER_FROM;
        case _.dCx.FILTER_MENTIONS:
            return E.Z.Messages.SEARCH_ANSWER_MENTIONS;
        case _.dCx.FILTER_HAS:
            return E.Z.Messages.SEARCH_ANSWER_HAS;
        case _.dCx.FILTER_BEFORE:
        case _.dCx.FILTER_ON:
        case _.dCx.FILTER_AFTER:
            return E.Z.Messages.SEARCH_ANSWER_DATE;
        case _.dCx.FILTER_IN:
            return E.Z.Messages.SEARCH_ANSWER_IN;
        case _.dCx.FILTER_FILE_TYPE:
            return E.Z.Messages.SEARCH_ANSWER_FILE_TYPE;
        case _.dCx.FILTER_FILE_NAME:
            return E.Z.Messages.SEARCH_ANSWER_FILE_NAME;
        case _.dCx.FILTER_PINNED:
            return E.Z.Messages.SEARCH_ANSWER_BOOLEAN;
    }
}
let h = {
    [_.dCx.FILTER_BEFORE]: !0,
    [_.dCx.FILTER_AFTER]: !0,
    [_.dCx.FILTER_ON]: !0
};
function p(e) {
    let t = l.ZP[e],
        n = null != t ? t.queryKey : null;
    return null == n && (n = 'content'), n;
}
function m(e, t) {
    if (u.Z.didAgree(t)) {
        let t = c.default.getCurrentUser();
        null != t && (e.include_nsfw = null == t.nsfwAllowed || t.nsfwAllowed);
    }
}
function I(e) {
    let t = {};
    for (let [n, r] of (e.forEach((e) => {
        let { type: n } = e;
        if (_.TNx.test(n)) return;
        switch (n) {
            case _.dCx.ANSWER_BEFORE:
            case _.dCx.ANSWER_ON:
            case _.dCx.ANSWER_AFTER:
                let r = e.getData('start'),
                    i = e.getData('end');
                r && (t.min_id = d.default.fromTimestamp(r)), i && (t.max_id = d.default.fromTimestamp(i));
                return;
        }
        let a = p(n);
        null == t[a] && (t[a] = new Set());
        let o = t[a];
        switch (n) {
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
    Object.entries(t)))
        r instanceof Set && (t[n] = Array.from(r));
    return t.content && ((t.content = t.content.join(' ').trim()), !t.content && delete t.content), t;
}
function T(e, t, n) {
    let r, i;
    let a = e.find((a, o) => (t >= a.start && t <= a.end && n >= a.start && n <= a.end ? (null != e[o + 1] && (i = e[o + 1]), !0) : ((r = a), !1)));
    return null == a
        ? null
        : {
              previousToken: r,
              currentToken: a,
              nextToken: i,
              focusOffset: t,
              anchorOffset: n
          };
}
function g(e, t) {
    let n;
    let { currentToken: r, nextToken: i, previousToken: a } = (e = null != e ? e : {});
    if (0 === t.length)
        return {
            type: _.Sap.EMPTY,
            filter: null,
            token: null
        };
    if (null == r)
        return {
            type: _.Sap.FILTER_ALL,
            filter: null,
            token: null
        };
    if (_.TNx.test(r.type)) {
        if (null == i || i.type === s.ZP.NON_TOKEN_TYPE)
            return {
                type: _.Sap.FILTER,
                filter: r.type,
                token: i
            };
        if (null != i && !_.KA4.test(i.type))
            return {
                type: _.Sap.FILTER,
                filter: r.type,
                token: null
            };
    }
    return r.type === s.ZP.NON_TOKEN_TYPE && null != a && _.TNx.test(a.type)
        ? {
              type: _.Sap.FILTER,
              filter: a.type,
              token: r
          }
        : (r.type === s.ZP.NON_TOKEN_TYPE && (n = r),
          {
              type: _.Sap.FILTER_ALL,
              filter: null,
              token: n
          });
}
function S(e, t) {
    let n = [];
    return (
        o()(e).forEach((e) => {
            if (null == e || 0 === e.results.length) return;
            let r = e.group;
            n = n.concat(
                e.results.map((e) => {
                    let n = e.text;
                    if (t === _.Sap.FILTER_ALL) {
                        var i;
                        r = null !== (i = e.group) && void 0 !== i ? i : r;
                        let t = l.ZP[r];
                        (null == t ? void 0 : t.key) != null && (null == t ? void 0 : t.key) !== '' && (n = ''.concat(t.key, ' ').concat(n));
                    }
                    return n;
                })
            );
        }),
        n.filter((e) => e)
    );
}
function A(e) {
    return e.reduce((e, t) => (null == t ? e : t.results.length + e), 0);
}
function v(e) {
    return null == e ? '' : e.map((e) => e.getFullMatch()).join('');
}
let N = new s.ZP();
function O(e) {
    return N.tokenize(e);
}
function R() {
    return N.clearCache();
}
function C(e) {
    return null != e ? h[e] : null;
}
function y(e, t) {
    let n = _.TNx.test(e.type);
    return (null != t || !n) && (null == t || !n || !!_.KA4.test(t.type)) && !0;
}
function L() {
    (0, l.Pe)(),
        N.reset(),
        o()(l.ZP).forOwn((e, t) =>
            N.addRule({
                type: t,
                ...e
            })
        );
}
