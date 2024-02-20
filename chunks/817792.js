"use strict";
var t, o, I, T;
E.r(_), E.d(_, {
  DomainMigrationEventType: function() {
    return t
  },
  DomainMigrationMessageFrom: function() {
    return o
  },
  DOMAIN_MIGRATION_SUCCESS_KEY: function() {
    return r
  },
  sendPostMessage: function() {
    return a
  },
  extractMessage: function() {
    return n
  }
}), (I = t || (t = {}))[I.SKIP_MIGRATION = 0] = "SKIP_MIGRATION", I[I.SEND_DATA = 1] = "SEND_DATA", I[I.DATA_MIGRATED = 2] = "DATA_MIGRATED", I[I.DATA_MIGRATED_CONFIRMED = 3] = "DATA_MIGRATED_CONFIRMED", (T = o || (o = {}))[T.MIGRATION_SOURCE_DOMAIN = 0] = "MIGRATION_SOURCE_DOMAIN", T[T.MIGRATION_DESTINATION_DOMAIN = 1] = "MIGRATION_DESTINATION_DOMAIN";
let r = "domainMigrationSuccess";

function a(e, _, E) {
  let t = 0 === E ? window.GLOBAL_ENV.MIGRATION_DESTINATION_ORIGIN : window.GLOBAL_ENV.MIGRATION_SOURCE_ORIGIN;
  _.postMessage({
    domainMigrationEvent: e
  }, t)
}

function n(e, _) {
  var E;
  return ! function(e, _) {
    let E = 0 === _ ? window.GLOBAL_ENV.MIGRATION_DESTINATION_ORIGIN : window.GLOBAL_ENV.MIGRATION_SOURCE_ORIGIN;
    return e.origin === E && null != e.data.domainMigrationEvent && !0
  }(e, _) ? null : null === (E = e.data) || void 0 === E ? void 0 : E.domainMigrationEvent
}