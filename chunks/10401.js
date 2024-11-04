n(47120);
var i,
    l,
    a,
    r,
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
function v() {
    if (((g = {}), !f))
        for (let [e, t] of Object.entries(u.Z)) {
            let n = !1 !== p[e];
            if (((g[e] = n), n && null != t.prerequisites)) for (let n of t.prerequisites) !1 !== p[n] && (g[e] = !1);
        }
}
class _ extends (i = o.ZP.Store) {
    initialize() {
        v(), this.mustEmitChanges((e) => 'CONNECTION_OPEN' !== e.type), this.waitFor(d.Z);
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
(r = 'TutorialIndicatorStore'),
    (a = 'displayName') in (l = _)
        ? Object.defineProperty(l, a, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (l[a] = r),
    (t.Z = new _(c.Z, {
        CONNECTION_OPEN: function (e) {
            let { tutorial: t } = e;
            (C = !0), (f = !0), (p = {}), null != t && ((f = t.indicators_suppressed), t.indicators_confirmed.forEach((e) => (p[e] = !1))), v();
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
                v();
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
