"use strict";
E.r(_), E.d(_, {
  default: function() {
    return r
  }
});
var t = E("805833"),
  o = E("303365"),
  n = E("75247"),
  a = E("661496"),
  r = {
    Emitter: t.default,
    Store: n.default,
    PersistedStore: o.default,
    DeviceSettingsStore: o.DeviceSettingsStore,
    OfflineCacheStore: o.OfflineCacheStore,
    connectStores: a.default,
    initialize() {
      n.default.initialize()
    },
    get initialized() {
      return n.default.initialized
    },
    destroy() {
      o.default.destroy()
    }
  }