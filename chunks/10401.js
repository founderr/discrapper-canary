n(47120);
var i,
    l,
    r,
    s,
    a = n(873546),
    o = n(442837),
    c = n(570140),
    u = n(38618),
    d = n(268967),
    h = n(188785);
let m = {},
    p = {},
    f = !0,
    g = {},
    C = !1;
function x() {
    return d.Z;
}
function v() {
    if (((g = {}), !f))
        for (let [e, t] of Object.entries(d.Z)) {
            let n = !1 !== m[e];
            if (((g[e] = n), n && null != t.prerequisites)) for (let n of t.prerequisites) !1 !== m[n] && (g[e] = !1);
        }
}
class _ extends (i = o.ZP.Store) {
    initialize() {
        v(), this.mustEmitChanges((e) => 'CONNECTION_OPEN' !== e.type), this.waitFor(u.Z);
    }
    shouldShow(e) {
        var t;
        return !(!C || f || h.a || ((t = e), a.tq && ['writing-messages', 'organize-by-topic'].includes(t))) && (g[e] || !1);
    }
    shouldShowAnyIndicators() {
        return !f;
    }
    getIndicators() {
        return p;
    }
    getData() {
        return d.Z;
    }
    getDefinition(e) {
        let t = this.getData();
        return null != t ? t[e] : null;
    }
}
(s = 'TutorialIndicatorStore'),
    (r = 'displayName') in (l = _)
        ? Object.defineProperty(l, r, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (l[r] = s),
    (t.Z = new _(c.Z, {
        CONNECTION_OPEN: function (e) {
            let { tutorial: t } = e;
            (C = !0), (f = !0), (m = {}), null != t && ((f = t.indicators_suppressed), t.indicators_confirmed.forEach((e) => (m[e] = !1))), v();
        },
        CONNECTION_CLOSED: function () {
            C = !1;
        },
        TUTORIAL_INDICATOR_DISMISS: function (e) {
            (m = {
                ...m,
                [e.tutorialId]: !1
            }),
                (p = { ...p }),
                delete p[e.tutorialId],
                v();
        },
        TUTORIAL_INDICATOR_SHOW: function (e) {
            p = {
                ...p,
                [e.tutorialId]: e.renderData
            };
        },
        TUTORIAL_INDICATOR_HIDE: function (e) {
            (p = { ...p }), delete p[e.tutorialId];
        },
        TUTORIAL_INDICATOR_SUPPRESS_ALL: function () {
            f = !0;
        }
    }));
