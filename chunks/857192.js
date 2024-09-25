n.r(t);
var r,
    i = n(789020);
var a = n(261470),
    o = n(213919),
    s = n(442837),
    l = n(544891),
    u = n(433517),
    c = n(570140),
    d = n(179658),
    _ = n(70956),
    E = n(960048),
    f = n(981631);
function h(e, t, n) {
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
let p = (() => {
        let e = ''.concat(location.protocol, '//').concat(location.host, '/__development/source_maps'),
            t = null,
            n = new a.Z(5 * _.Z.Millis.SECOND, 1 * _.Z.Millis.MINUTE, !0),
            r = () => {
                l.tn
                    .put({
                        url: e,
                        headers: { Authorization: o.getToken() },
                        oldFormErrors: !0
                    })
                    .then(
                        (e) => {
                            401 === e.status || 403 === e.status ? ((t = null), (0, d.y)({ sourceMapsEnabled: !1 })) : 200 !== e.status ? (t = setTimeout(r, n.fail())) : (n.succeed(), (t = setTimeout(r, e.body.sourceMapCookieTTLSeconds * _.Z.Millis.SECOND * 0.75)));
                        },
                        () => {
                            t = setTimeout(r, n.fail());
                        }
                    );
            };
        return {
            set: (n) => {
                if (n !== (null != t))
                    n
                        ? (t = setTimeout(r, 0))
                        : (clearTimeout(t),
                          (t = null),
                          l.tn.del({
                              url: e,
                              headers: { Authorization: o.getToken() },
                              oldFormErrors: !0
                          }));
            }
        };
    })(),
    m = 'DeveloperOptionsStore',
    I = {
        trace: !1,
        canary: !1,
        logGatewayEvents: !1,
        logOverlayEvents: !1,
        logAnalyticsEvents: !1,
        sourceMapsEnabled: !1,
        axeEnabled: !1,
        cssDebuggingEnabled: !1,
        layoutDebuggingEnabled: !1,
        analyticsDebuggerEnabled: !1,
        bugReporterEnabled: !0,
        idleStatusIndicatorEnabled: !1,
        appDirectoryIncludesInactiveCollections: !1,
        isStreamInfoOverlayEnabled: !1
    },
    T = { ...I };
function g(e) {
    (T = {
        ...I,
        ...T,
        ...e
    }),
        p.set(T.sourceMapsEnabled),
        u.K.set(m, T);
}
function S(e) {
    let { settings: t } = e;
    g(t);
}
function A(e) {
    g(I);
}
function v(e) {
    var t;
    let n = ((null !== (t = e.user.flags) && void 0 !== t ? t : 0) & f.xW$.STAFF) === f.xW$.STAFF,
        r = n || null != e.user.personal_connection_id;
    n && p.set(T.sourceMapsEnabled), E.Z.setTags({ isStaff: r.toString() });
}
class N extends (r = s.ZP.Store) {
    initialize() {
        let e = u.K.get(m);
        null != e &&
            (T = {
                ...I,
                ...e
            });
    }
    get isTracingRequests() {
        return T.trace;
    }
    get isForcedCanary() {
        return T.canary;
    }
    get isLoggingGatewayEvents() {
        return T.logGatewayEvents;
    }
    get isLoggingOverlayEvents() {
        return T.logOverlayEvents;
    }
    get isLoggingAnalyticsEvents() {
        return T.logAnalyticsEvents;
    }
    get isAxeEnabled() {
        return T.axeEnabled;
    }
    get cssDebuggingEnabled() {
        return T.cssDebuggingEnabled;
    }
    get layoutDebuggingEnabled() {
        return T.layoutDebuggingEnabled;
    }
    get sourceMapsEnabled() {
        return T.sourceMapsEnabled;
    }
    get isAnalyticsDebuggerEnabled() {
        return T.analyticsDebuggerEnabled;
    }
    get isBugReporterEnabled() {
        return T.bugReporterEnabled;
    }
    get isIdleStatusIndicatorEnabled() {
        return T.idleStatusIndicatorEnabled;
    }
    get appDirectoryIncludesInactiveCollections() {
        return T.appDirectoryIncludesInactiveCollections;
    }
    get isStreamInfoOverlayEnabled() {
        return T.isStreamInfoOverlayEnabled;
    }
    getDebugOptionsHeaderValue() {
        return (
            Object.keys(T).map((e) => T[e]),
            Object.keys(T)
                .filter((e) => T[e])
                .join(',')
        );
    }
}
h(N, 'displayName', 'DeveloperOptionsStore'),
    (t.default = new N(c.Z, {
        LOGOUT: A,
        CONNECTION_OPEN: v,
        DEVELOPER_OPTIONS_UPDATE_SETTINGS: S
    }));
