"use strict";
n.r(t), n.d(t, {
  init: function() {
    return u
  }
});
var i = n("771281"),
  a = n("95410"),
  l = n("599110"),
  s = n("49111");
let r = window.DiscordNative,
  o = "".concat(s.AnalyticEvents.APP_NATIVE_CRASH, "Storage");
async function u() {
  var e;
  if (__OVERLAY__) return;
  let t = null == r ? void 0 : null === (e = r.processUtils) || void 0 === e ? void 0 : e.getLastCrash;
  if (null == t) {
    console.log("AppCrashedFatalReport: getLastCrash not supported.");
    return
  }
  let n = await t(),
    u = a.default.get(o, {}),
    d = function(e, t) {
      var n, a, l, s, r, o, u, d, c, f, E, h, _, C, S, g, T, m, p;
      let I = (null == e ? void 0 : e.lastId) !== (null == t ? void 0 : t.id) && (null == t ? void 0 : t.id) != null;

      function A(e) {
        return (null == t ? void 0 : t.storedInformation) != null && 1 === t.storedInformation[e]
      }

      function N(e) {
        return (null == t ? void 0 : t.storedInformation) == null || null == t.storedInformation[e] ? null : t.storedInformation[e]
      }
      let O = null !== (u = null == t ? void 0 : t.rendererCrashExitCode) && void 0 !== u ? u : null,
        v = {
          did_crash: I || null != O && 0 !== O,
          renderer_crash_reason: null !== (d = null == t ? void 0 : t.rendererCrashReason) && void 0 !== d ? d : null,
          renderer_crash_exit_code: O,
          had_rtc_connection: A(i.StoredCrashInformation.HasRTCConnection),
          was_sending_video: A(i.StoredCrashInformation.IsSendingVideo),
          was_sending_stream: A(i.StoredCrashInformation.IsSendingStream),
          was_receiving_video: A(i.StoredCrashInformation.IsReceivingVideo),
          was_receiving_stream: A(i.StoredCrashInformation.IsReceivingStream),
          video_media_session_id: N(i.StoredCrashInformation.VideoMediaSessionId),
          stream_media_session_id: N(i.StoredCrashInformation.StreamMediaSessionId),
          last_memory_usage_kb: null !== (c = null == t ? void 0 : null === (n = t.lastMemoryInformation) || void 0 === n ? void 0 : n.memoryUsageKB) && void 0 !== c ? c : null,
          last_used_js_heap_size_kb: null !== (f = null == t ? void 0 : null === (a = t.lastMemoryInformation) || void 0 === a ? void 0 : a.usedJSHeapSizeKB) && void 0 !== f ? f : null,
          last_memory_usage_uptime: null !== (E = null == t ? void 0 : null === (l = t.lastMemoryInformation) || void 0 === l ? void 0 : l.uptimeSeconds) && void 0 !== E ? E : null,
          highest_memory_usage_kb: null !== (h = null == t ? void 0 : null === (s = t.highestMemoryInformation) || void 0 === s ? void 0 : s.memoryUsageKB) && void 0 !== h ? h : null,
          highest_used_js_heap_size_kb: null !== (_ = null == t ? void 0 : null === (r = t.highestMemoryInformation) || void 0 === r ? void 0 : r.usedJSHeapSizeKB) && void 0 !== _ ? _ : null,
          highest_memory_usage_uptime: null !== (C = null == t ? void 0 : null === (o = t.highestMemoryInformation) || void 0 === o ? void 0 : o.uptimeSeconds) && void 0 !== C ? C : null
        };
      if (!I || null == t) return {
        electron_crash_reporter_did_crash: !1,
        minidump_exception_type: null,
        minidump_exception_module_name: null,
        minidump_relative_crash_address: null,
        minidump_exception_module_version: null,
        minidump_exception_module_code_id: null,
        ...v
      };
      console.log("AppCrashedFatalReport lastCrash:", t, I);
      let R = null == t ? void 0 : t.minidumpInformation;
      return {
        electron_crash_reporter_did_crash: I,
        minidump_exception_type: null !== (S = null == R ? void 0 : R.exceptionString) && void 0 !== S ? S : null,
        minidump_exception_module_name: null !== (g = null == R ? void 0 : R.exceptionModuleName) && void 0 !== g ? g : null,
        minidump_relative_crash_address: null !== (T = null == R ? void 0 : R.relativeCrashAddress) && void 0 !== T ? T : null,
        minidump_exception_module_version: null !== (m = null == R ? void 0 : R.exceptionModuleVersion) && void 0 !== m ? m : null,
        minidump_exception_module_code_id: null !== (p = null == R ? void 0 : R.exceptionModuleCodeId) && void 0 !== p ? p : null,
        ...v
      }
    }(u, n);
  l.default.track(s.AnalyticEvents.APP_NATIVE_CRASH, d), a.default.set(o, {
    lastId: null == n ? void 0 : n.id
  })
}