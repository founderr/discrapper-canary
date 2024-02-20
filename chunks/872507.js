"use strict";
n.r(t), n.d(t, {
  default: function() {
    return s
  }
}), n("808653");
var r = n("811022"),
  i = n("49671"),
  o = n("921278"),
  l = n("50885");
let u = new r.default("ProcessUtilsElectron");
class a extends o.ProcessUtils {
  setupReportingTimer() {
    var e, t;
    let n = null === i.default || void 0 === i.default ? void 0 : null === (e = i.default.processUtils) || void 0 === e ? void 0 : e.setMemoryInformation;
    if (null == n) {
      u.log("setMemoryInformation not available.");
      return
    }(null === (t = performance.memory) || void 0 === t ? void 0 : t.usedJSHeapSize) == null && u.error("usedJSHeapSize is not available.");
    setInterval(() => {
      var e, t, r;
      let i = null !== (t = null === (e = performance.memory) || void 0 === e ? void 0 : e.usedJSHeapSize) && void 0 !== t ? t : 0;
      n({
        memoryUsageKB: null !== (r = this.lastMemoryUsageKB) && void 0 !== r ? r : 0,
        usedJSHeapSizeKB: Math.ceil(i / 1024)
      })
    }, 1e4)
  }
  getProcessUptime() {
    var e, t;
    return null === i.default || void 0 === i.default ? void 0 : null === (t = i.default.processUtils) || void 0 === t ? void 0 : null === (e = t.getProcessUptime) || void 0 === e ? void 0 : e.call(t)
  }
  getCurrentCPUUsagePercent() {
    var e, t;
    return null === i.default || void 0 === i.default ? void 0 : null === (t = i.default.processUtils) || void 0 === t ? void 0 : null === (e = t.getCurrentCPUUsagePercent) || void 0 === e ? void 0 : e.call(t)
  }
  getCurrentMemoryUsageKB() {
    let e = a.getCurrentMemoryUsageKBCore();
    return this.lastMemoryUsageKB = e, e
  }
  static getCurrentMemoryUsageKBCore() {
    try {
      let e = l.default.getDiscordMemoryUsage();
      if (null == e) return 0;
      let t = Object.values(e).reduce((e, t) => e + t, 0);
      return Math.ceil(t / 1024)
    } catch (e) {
      return 0
    }
  }
  getMemoryUsageDetails() {
    return l.default.getDiscordMemoryUsage()
  }
  getMemoryUsageElectronRenderer() {
    try {
      return l.default.getDiscordMemoryUsageElectronRenderer()
    } catch (e) {
      return null
    }
  }
  getMemoryUsageElectronRendererUsedHeapSize() {
    var e, t;
    return null === i.default || void 0 === i.default ? void 0 : null === (t = i.default.processUtils) || void 0 === t ? void 0 : null === (e = t.getUsedHeapSize) || void 0 === e ? void 0 : e.call(t)
  }
  constructor() {
    var e, t;
    super(), this.lastMemoryUsageKB = void 0, this.cpuCoreCount = null === i.default || void 0 === i.default ? void 0 : null === (t = i.default.processUtils) || void 0 === t ? void 0 : null === (e = t.getCPUCoreCount) || void 0 === e ? void 0 : e.call(t), this.setupReportingTimer()
  }
}
var s = new a