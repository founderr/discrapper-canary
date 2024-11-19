n.r(t), n(789020);
var r,
    i,
    a,
    s,
    o = n(261470),
    l = n(213919),
    u = n(442837),
    c = n(544891),
    d = n(433517),
    f = n(570140),
    _ = n(179658),
    p = n(70956),
    h = n(960048),
    m = n(981631);
let g = (() => {
        let e = ''.concat(location.protocol, '//').concat(location.host, '/__development/source_maps'),
            t = null,
            n = new o.Z(5 * p.Z.Millis.SECOND, 1 * p.Z.Millis.MINUTE, !0),
            r = () => {
                c.tn
                    .put({
                        url: e,
                        headers: { Authorization: l.getToken() },
                        oldFormErrors: !0,
                        rejectWithError: !0
                    })
                    .then(
                        (e) => {
                            401 === e.status || 403 === e.status ? ((t = null), (0, _.y)({ sourceMapsEnabled: !1 })) : 200 !== e.status ? (t = setTimeout(r, n.fail())) : (n.succeed(), (t = setTimeout(r, e.body.sourceMapCookieTTLSeconds * p.Z.Millis.SECOND * 0.75)));
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
                          c.tn.del({
                              url: e,
                              headers: { Authorization: l.getToken() },
                              oldFormErrors: !0,
                              rejectWithError: !0
                          }));
            }
        };
    })(),
    E = 'DeveloperOptionsStore',
    v = {
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
    b = { ...v };
function I(e) {
    (b = {
        ...v,
        ...b,
        ...e
    }),
        g.set(b.sourceMapsEnabled),
        d.K.set(E, b);
}
class S extends (r = u.ZP.Store) {
    initialize() {
        let e = d.K.get(E);
        null != e &&
            (b = {
                ...v,
                ...e
            });
    }
    get isTracingRequests() {
        return b.trace;
    }
    get isForcedCanary() {
        return b.canary;
    }
    get isLoggingGatewayEvents() {
        return b.logGatewayEvents;
    }
    get isLoggingOverlayEvents() {
        return b.logOverlayEvents;
    }
    get isLoggingAnalyticsEvents() {
        return b.logAnalyticsEvents;
    }
    get isAxeEnabled() {
        return b.axeEnabled;
    }
    get cssDebuggingEnabled() {
        return b.cssDebuggingEnabled;
    }
    get layoutDebuggingEnabled() {
        return b.layoutDebuggingEnabled;
    }
    get sourceMapsEnabled() {
        return b.sourceMapsEnabled;
    }
    get isAnalyticsDebuggerEnabled() {
        return b.analyticsDebuggerEnabled;
    }
    get isBugReporterEnabled() {
        return b.bugReporterEnabled;
    }
    get isIdleStatusIndicatorEnabled() {
        return b.idleStatusIndicatorEnabled;
    }
    get appDirectoryIncludesInactiveCollections() {
        return b.appDirectoryIncludesInactiveCollections;
    }
    get isStreamInfoOverlayEnabled() {
        return b.isStreamInfoOverlayEnabled;
    }
    getDebugOptionsHeaderValue() {
        return (
            Object.keys(b).map((e) => b[e]),
            Object.keys(b)
                .filter((e) => b[e])
                .join(',')
        );
    }
}
(s = 'DeveloperOptionsStore'),
    (a = 'displayName') in (i = S)
        ? Object.defineProperty(i, a, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (i[a] = s),
    (t.default = new S(f.Z, {
        LOGOUT: function (e) {
            I(v);
        },
        CONNECTION_OPEN: function (e) {
            var t;
            let n = ((null !== (t = e.user.flags) && void 0 !== t ? t : 0) & m.xW$.STAFF) === m.xW$.STAFF,
                r = n || null != e.user.personal_connection_id;
            n && g.set(b.sourceMapsEnabled), h.Z.setTags({ isStaff: r.toString() });
        },
        DEVELOPER_OPTIONS_UPDATE_SETTINGS: function (e) {
            let { settings: t } = e;
            I(t);
        }
    }));
