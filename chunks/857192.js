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
                        oldFormErrors: !0
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
                              oldFormErrors: !0
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
    I = { ...v };
function b(e) {
    (I = {
        ...v,
        ...I,
        ...e
    }),
        g.set(I.sourceMapsEnabled),
        d.K.set(E, I);
}
class S extends (r = u.ZP.Store) {
    initialize() {
        let e = d.K.get(E);
        null != e &&
            (I = {
                ...v,
                ...e
            });
    }
    get isTracingRequests() {
        return I.trace;
    }
    get isForcedCanary() {
        return I.canary;
    }
    get isLoggingGatewayEvents() {
        return I.logGatewayEvents;
    }
    get isLoggingOverlayEvents() {
        return I.logOverlayEvents;
    }
    get isLoggingAnalyticsEvents() {
        return I.logAnalyticsEvents;
    }
    get isAxeEnabled() {
        return I.axeEnabled;
    }
    get cssDebuggingEnabled() {
        return I.cssDebuggingEnabled;
    }
    get layoutDebuggingEnabled() {
        return I.layoutDebuggingEnabled;
    }
    get sourceMapsEnabled() {
        return I.sourceMapsEnabled;
    }
    get isAnalyticsDebuggerEnabled() {
        return I.analyticsDebuggerEnabled;
    }
    get isBugReporterEnabled() {
        return I.bugReporterEnabled;
    }
    get isIdleStatusIndicatorEnabled() {
        return I.idleStatusIndicatorEnabled;
    }
    get appDirectoryIncludesInactiveCollections() {
        return I.appDirectoryIncludesInactiveCollections;
    }
    get isStreamInfoOverlayEnabled() {
        return I.isStreamInfoOverlayEnabled;
    }
    getDebugOptionsHeaderValue() {
        return (
            Object.keys(I).map((e) => I[e]),
            Object.keys(I)
                .filter((e) => I[e])
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
            b(v);
        },
        CONNECTION_OPEN: function (e) {
            var t;
            let n = ((null !== (t = e.user.flags) && void 0 !== t ? t : 0) & m.xW$.STAFF) === m.xW$.STAFF,
                r = n || null != e.user.personal_connection_id;
            n && g.set(I.sourceMapsEnabled), h.Z.setTags({ isStaff: r.toString() });
        },
        DEVELOPER_OPTIONS_UPDATE_SETTINGS: function (e) {
            let { settings: t } = e;
            b(t);
        }
    }));
