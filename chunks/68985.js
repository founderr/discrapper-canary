var r,
    i = n(47120);
var a = n(442837),
    o = n(570140),
    s = n(626135),
    l = n(261376),
    u = n(981631);
function c(e, t, n) {
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
let d = 'daily_cap',
    _ = 3,
    E = {
        numberOfDCsShownToday: 0,
        dailyCapPeriodStart: null,
        dismissibleContentSeenDuringSession: new Set(),
        dailyCapOverridden: !1,
        renderedAtTimestamps: new Map(),
        lastDCDismissed: null
    };
function f() {
    E = {
        ...E,
        dismissibleContentSeenDuringSession: new Set(),
        renderedAtTimestamps: new Map()
    };
}
function h(e) {
    let { value: t } = e;
    E.dailyCapOverridden = t;
}
function p(e) {
    let { dismissibleContent: t } = e,
        n = new Date();
    if ((E.renderedAtTimestamps.set(t, n.getTime()), !(l.O.has(t) || E.dailyCapOverridden || E.dismissibleContentSeenDuringSession.has(t)))) {
        if ((E.dismissibleContentSeenDuringSession.add(t), null == E.dailyCapPeriodStart)) {
            let e = new Date();
            e.setHours(0, 0, 0, 0), (E.dailyCapPeriodStart = e.getTime());
        }
        (E.numberOfDCsShownToday += 1),
            E.numberOfDCsShownToday > _ &&
                s.default.track(u.rMx.DCF_CAP_EXCEEDED, {
                    cap_type: d,
                    dismissible_content: t,
                    shown_dcs: E.numberOfDCsShownToday
                });
    }
}
function m(e) {
    let { dismissibleContent: t } = e;
    (E.lastDCDismissed = t), E.renderedAtTimestamps.delete(t);
}
function I() {
    (E.dailyCapPeriodStart = null), (E.numberOfDCsShownToday = 0), (E.dismissibleContentSeenDuringSession = new Set()), (E.lastDCDismissed = null);
}
class T extends (r = a.ZP.PersistedStore) {
    initialize(e) {
        if (null != e) {
            var t;
            (E.numberOfDCsShownToday = null !== (t = e.numberOfDCsShownToday) && void 0 !== t ? t : 0), (E.dailyCapPeriodStart = e.dailyCapPeriodStart), (E.dailyCapOverridden = e.dailyCapOverridden);
        }
        (E.dismissibleContentSeenDuringSession = new Set()), (E.lastDCDismissed = null);
    }
    getState() {
        return E;
    }
    get dailyCapOverridden() {
        return E.dailyCapOverridden;
    }
    get lastDCDismissed() {
        return E.lastDCDismissed;
    }
    getRenderedAtTimestamp(e) {
        return E.renderedAtTimestamps.get(e);
    }
    hasUserHitDCCap(e) {
        if ((null != e && (l.O.has(e) || E.dailyCapOverridden)) || (null != e && E.dismissibleContentSeenDuringSession.has(e))) return !1;
        let t = new Date();
        return t.setHours(0, 0, 0, 0), null != E.dailyCapPeriodStart && E.dailyCapPeriodStart < t.getTime() && ((E.numberOfDCsShownToday = 0), (E.dailyCapPeriodStart = null)), E.numberOfDCsShownToday >= _;
    }
}
c(T, 'displayName', 'DismissibleContentFrameworkStore'),
    c(T, 'persistKey', 'DismissibleContentFrameworkStore'),
    c(T, 'migrations', [(e) => ({ ...e })]),
    (t.Z = new T(o.Z, {
        LOGOUT: f,
        DCF_DAILY_CAP_OVERRIDE: h,
        DCF_HANDLE_DC_SHOWN: p,
        DCF_HANDLE_DC_DISMISSED: m,
        DCF_RESET: I
    }));
