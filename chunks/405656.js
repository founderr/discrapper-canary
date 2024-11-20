n.d(t, {
    $G: function () {
        return h;
    },
    BU: function () {
        return v;
    },
    Fr: function () {
        return A;
    },
    Fz: function () {
        return y;
    },
    Ko: function () {
        return f;
    },
    Pe: function () {
        return N;
    },
    WU: function () {
        return S;
    },
    cl: function () {
        return I;
    },
    g9: function () {
        return m;
    },
    jW: function () {
        return p;
    },
    kG: function () {
        return T;
    },
    qc: function () {
        return g;
    },
    zV: function () {
        return E;
    }
}),
    n(47120),
    n(724458);
var r = n(392711),
    i = n.n(r),
    a = n(349033),
    s = n(999650),
    o = n(731290),
    l = n(594174),
    u = n(709054),
    c = n(981631),
    d = n(388032);
function f(e) {
    switch (e) {
        case c.dCx.FILTER_FROM:
            return d.intl.string(d.t.E466pK);
        case c.dCx.FILTER_MENTIONS:
            return d.intl.string(d.t.BYvFWl);
        case c.dCx.FILTER_HAS:
            return d.intl.string(d.t.bhSYbW);
        case c.dCx.FILTER_BEFORE:
        case c.dCx.FILTER_ON:
        case c.dCx.FILTER_AFTER:
            return d.intl.string(d.t.Zbbc1N);
        case c.dCx.FILTER_IN:
            return d.intl.string(d.t['GpM+//']);
        case c.dCx.FILTER_FILE_TYPE:
            return d.intl.string(d.t.FXcAFR);
        case c.dCx.FILTER_FILE_NAME:
            return d.intl.string(d.t.uAbFDA);
        case c.dCx.FILTER_PINNED:
            return d.intl.string(d.t.UJxL3d);
    }
}
let _ = {
    [c.dCx.FILTER_BEFORE]: !0,
    [c.dCx.FILTER_AFTER]: !0,
    [c.dCx.FILTER_ON]: !0
};
function p(e, t) {
    if (o.Z.didAgree(t)) {
        let t = l.default.getCurrentUser();
        null != t && (e.include_nsfw = null == t.nsfwAllowed || t.nsfwAllowed);
    }
}
function h(e) {
    let t = {};
    for (let [n, r] of (e.forEach((e) => {
        let { type: n } = e;
        if (c.TNx.test(n)) return;
        switch (n) {
            case c.dCx.ANSWER_BEFORE:
            case c.dCx.ANSWER_ON:
            case c.dCx.ANSWER_AFTER:
                let r = e.getData('start'),
                    i = e.getData('end');
                r && (t.min_id = u.default.fromTimestamp(r)), i && (t.max_id = u.default.fromTimestamp(i));
                return;
        }
        let a = (function (e) {
            let t = s.ZP[e],
                n = null != t ? t.queryKey : null;
            return null == n && (n = 'content'), n;
        })(n);
        null == t[a] && (t[a] = new Set());
        let o = t[a];
        switch (n) {
            case c.dCx.ANSWER_USERNAME_FROM:
            case c.dCx.ANSWER_USERNAME_MENTIONS:
                o.add(e.getData('userId'));
                break;
            case c.dCx.ANSWER_FILE_TYPE:
            case c.dCx.ANSWER_FILE_NAME:
                o.add(e.getMatch(1));
                break;
            case c.dCx.ANSWER_IN:
                o.add(e.getData('channel').id);
                break;
            case c.dCx.ANSWER_HAS:
                o.add(e.getData('has'));
                break;
            case c.dCx.ANSWER_PINNED:
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
function m(e, t, n) {
    let r, i;
    let a = e.find((a, s) => (t >= a.start && t <= a.end && n >= a.start && n <= a.end ? (null != e[s + 1] && (i = e[s + 1]), !0) : ((r = a), !1)));
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
    let { currentToken: r, nextToken: i, previousToken: s } = (e = null != e ? e : {});
    if (0 === t.length)
        return {
            type: c.Sap.EMPTY,
            filter: null,
            token: null
        };
    if (null == r)
        return {
            type: c.Sap.FILTER_ALL,
            filter: null,
            token: null
        };
    if (c.TNx.test(r.type)) {
        if (null == i || i.type === a.ZP.NON_TOKEN_TYPE)
            return {
                type: c.Sap.FILTER,
                filter: r.type,
                token: i
            };
        if (null != i && !c.KA4.test(i.type))
            return {
                type: c.Sap.FILTER,
                filter: r.type,
                token: null
            };
    }
    return r.type === a.ZP.NON_TOKEN_TYPE && null != s && c.TNx.test(s.type)
        ? {
              type: c.Sap.FILTER,
              filter: s.type,
              token: r
          }
        : (r.type === a.ZP.NON_TOKEN_TYPE && (n = r),
          {
              type: c.Sap.FILTER_ALL,
              filter: null,
              token: n
          });
}
function E(e, t) {
    let n = [];
    return (
        i()(e).forEach((e) => {
            if (null == e || 0 === e.results.length) return;
            let r = e.group;
            n = n.concat(
                e.results.map((e) => {
                    let n = e.text;
                    if (t === c.Sap.FILTER_ALL) {
                        var i;
                        r = null !== (i = e.group) && void 0 !== i ? i : r;
                        let t = s.ZP[r];
                        (null == t ? void 0 : t.key) != null && (null == t ? void 0 : t.key) !== '' && (n = ''.concat(t.key, ' ').concat(n));
                    }
                    return n;
                })
            );
        }),
        n.filter((e) => e)
    );
}
function v(e) {
    return e.reduce((e, t) => (null == t ? e : t.results.length + e), 0);
}
function I(e) {
    return null == e ? '' : e.map((e) => e.getFullMatch()).join('');
}
let b = new a.ZP();
function T(e) {
    return b.tokenize(e);
}
function S() {
    return b.clearCache();
}
function y(e) {
    return null != e ? _[e] : null;
}
function A(e, t) {
    let n = c.TNx.test(e.type);
    return (null != t || !n) && (null == t || !n || !!c.KA4.test(t.type)) && !0;
}
function N() {
    (0, s.Pe)(),
        b.reset(),
        i()(s.ZP).forOwn((e, t) =>
            b.addRule({
                type: t,
                ...e
            })
        );
}
