"use strict";
n.r(t), n.d(t, {
  default: function() {
    return O
  }
}), n("702976");
var r = n("981980"),
  i = n("171718"),
  o = n("446674"),
  l = n("872717"),
  u = n("95410"),
  a = n("913144"),
  s = n("527015"),
  E = n("718517"),
  _ = n("286235"),
  c = n("49111");
let d = (() => {
    let e = "".concat(location.protocol, "//").concat(location.host, "/__development/source_maps"),
      t = null,
      n = new r.default(5 * E.default.Millis.SECOND, 1 * E.default.Millis.MINUTE, !0),
      o = () => {
        l.default.put({
          url: e,
          headers: {
            Authorization: i.default.getToken()
          },
          oldFormErrors: !0
        }).then(e => {
          401 === e.status || 403 === e.status ? (t = null, (0, s.setDeveloperOptionSettings)({
            sourceMapsEnabled: !1
          })) : 200 !== e.status ? t = setTimeout(o, n.fail()) : (n.succeed(), t = setTimeout(o, e.body.sourceMapCookieTTLSeconds * E.default.Millis.SECOND * .75))
        }, () => {
          t = setTimeout(o, n.fail())
        })
      };
    return {
      set: n => {
        let r = null != t;
        n !== r && (n ? t = setTimeout(o, 0) : (clearTimeout(t), t = null, l.default.delete({
          url: e,
          headers: {
            Authorization: i.default.getToken()
          },
          oldFormErrors: !0
        })))
      }
    }
  })(),
  T = "DeveloperOptionsStore",
  A = {
    trace: !1,
    canary: !1,
    logGatewayEvents: !1,
    logOverlayEvents: !1,
    logAnalyticsEvents: !1,
    sourceMapsEnabled: !1,
    axeEnabled: !1,
    analyticsDebuggerEnabled: !1,
    bugReporterEnabled: !0,
    idleStatusIndicatorEnabled: !1,
    appDirectoryIncludesInactiveCollections: !1
  },
  I = {
    ...A
  };

function S(e) {
  I = {
    ...A,
    ...I,
    ...e
  }, d.set(I.sourceMapsEnabled), u.default.set(T, I)
}
class f extends o.default.Store {
  initialize() {
    let e = u.default.get(T);
    null != e && (I = {
      ...A,
      ...e
    })
  }
  get isTracingRequests() {
    return I.trace
  }
  get isForcedCanary() {
    return I.canary
  }
  get isLoggingGatewayEvents() {
    return I.logGatewayEvents
  }
  get isLoggingOverlayEvents() {
    return I.logOverlayEvents
  }
  get isLoggingAnalyticsEvents() {
    return I.logAnalyticsEvents
  }
  get isAxeEnabled() {
    return I.axeEnabled
  }
  get sourceMapsEnabled() {
    return I.sourceMapsEnabled
  }
  get isAnalyticsDebuggerEnabled() {
    return I.analyticsDebuggerEnabled
  }
  get isBugReporterEnabled() {
    return I.bugReporterEnabled
  }
  get isIdleStatusIndicatorEnabled() {
    return I.idleStatusIndicatorEnabled
  }
  get appDirectoryIncludesInactiveCollections() {
    return I.appDirectoryIncludesInactiveCollections
  }
  getDebugOptionsHeaderValue() {
    Object.keys(I).map(e => I[e]);
    let e = Object.keys(I).filter(e => I[e]);
    return e.join(",")
  }
}
f.displayName = "DeveloperOptionsStore";
var O = new f(a.default, {
  LOGOUT: function(e) {
    S(A)
  },
  CONNECTION_OPEN: function(e) {
    var t;
    let n = ((null !== (t = e.user.flags) && void 0 !== t ? t : 0) & c.UserFlags.STAFF) === c.UserFlags.STAFF,
      r = n || null != e.user.personal_connection_id;
    n && d.set(I.sourceMapsEnabled), _.default.setTags({
      isStaff: r.toString()
    })
  },
  DEVELOPER_OPTIONS_UPDATE_SETTINGS: function(e) {
    let {
      settings: t
    } = e;
    S(t)
  }
})