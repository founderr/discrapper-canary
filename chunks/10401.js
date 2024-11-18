n(47120);
var i,
    l,
    r,
    a,
    s = n(873546),
    o = n(442837),
    c = n(570140),
    d = n(38618),
    u = n(268967),
    h = n(188785);
let p = {},
    m = {},
    f = !0,
    g = {},
    C = !1;
function x() {
    return u.Z;
}
function _() {
    if (((g = {}), !f))
        for (let [e, t] of Object.entries(u.Z)) {
            let n = !1 !== p[e];
            if (((g[e] = n), n && null != t.prerequisites)) for (let n of t.prerequisites) !1 !== p[n] && (g[e] = !1);
        }
}
class v extends (i = o.ZP.Store) {
    initialize() {
        _(), this.mustEmitChanges((e) => 'CONNECTION_OPEN' !== e.type), this.waitFor(d.Z);
    }
    shouldShow(e) {
        var t;
        return !(!C || f || h.a || ((t = e), s.tq && ['writing-messages', 'organize-by-topic'].includes(t))) && (g[e] || !1);
    }
    shouldShowAnyIndicators() {
        return !f;
    }
    getIndicators() {
        return m;
    }
    getData() {
        return u.Z;
    }
    getDefinition(e) {
        let t = this.getData();
        return null != t ? t[e] : null;
    }
}
(a = 'TutorialIndicatorStore'),
    (r = 'displayName') in (l = v)
        ? Object.defineProperty(l, r, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (l[r] = a),
    (t.Z = new v(c.Z, {
        CONNECTION_OPEN: function (e) {
            let { tutorial: t } = e;
            (C = !0), (f = !0), (p = {}), null != t && ((f = t.indicators_suppressed), t.indicators_confirmed.forEach((e) => (p[e] = !1))), _();
        },
        CONNECTION_CLOSED: function () {
            C = !1;
        },
        TUTORIAL_INDICATOR_DISMISS: function (e) {
            (p = {
                ...p,
                [e.tutorialId]: !1
            }),
                (m = { ...m }),
                delete m[e.tutorialId],
                _();
        },
        TUTORIAL_INDICATOR_SHOW: function (e) {
            m = {
                ...m,
                [e.tutorialId]: e.renderData
            };
        },
        TUTORIAL_INDICATOR_HIDE: function (e) {
            (m = { ...m }), delete m[e.tutorialId];
        },
        TUTORIAL_INDICATOR_SUPPRESS_ALL: function () {
            f = !0;
        }
    }));
