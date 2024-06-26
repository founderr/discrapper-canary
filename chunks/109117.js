"use strict";
n.d(t, {
  S1: function() {
    return d
  }
});
var i = n(268146),
  r = n(433517),
  s = n(131951),
  o = n(594174),
  a = n(626135),
  l = n(729345),
  u = n(981631);
let _ = window.DiscordNative,
  c = "".concat(u.rMx.APP_NATIVE_CRASH, "Storage");
async function d() {
  var e;
  if (__OVERLAY__) return;
  let t = null == _ ? void 0 : null === (e = _.processUtils) || void 0 === e ? void 0 : e.getLastCrash;
  if (null == t) {
    console.log("AppCrashedFatalReport: getLastCrash not supported.");
    return
  }
  let n = await t(),
    {
      didCrashReporterSeeCrash: s,
      didCrashOrUncleanExit: o
    } = function(e, t) {
      var n;
      let i = (null == e ? void 0 : e.lastId) !== (null == t ? void 0 : t.id) && (null == t ? void 0 : t.id) != null,
        r = null !== (n = null == t ? void 0 : t.rendererCrashExitCode) && void 0 !== n ? n : null;
      return {
        didCrashReporterSeeCrash: i,
        didCrashOrUncleanExit: i || null != r && 0 !== r
      }
    }(r.K.get(c, {}), n),
    l = function(e, t, n) {
      var r, s, o, a, l, u, _, c, d, E, I, T, h, f, S, N, A, m, O;

      function p(e) {
        return (null == n ? void 0 : n.storedInformation) != null && 1 === n.storedInformation[e]
      }

      function R(e) {
        return (null == n ? void 0 : n.storedInformation) == null || null == n.storedInformation[e] ? null : n.storedInformation[e]
      }
      let g = {
        did_crash: t,
        renderer_crash_reason: null !== (_ = null == n ? void 0 : n.rendererCrashReason) && void 0 !== _ ? _ : null,
        renderer_crash_exit_code: null !== (c = null == n ? void 0 : n.rendererCrashExitCode) && void 0 !== c ? c : null,
        had_rtc_connection: p(i.X4.HasRTCConnection),
        was_sending_video: p(i.X4.IsSendingVideo),
        was_sending_stream: p(i.X4.IsSendingStream),
        was_receiving_video: p(i.X4.IsReceivingVideo),
        was_receiving_stream: p(i.X4.IsReceivingStream),
        video_media_session_id: R(i.X4.VideoMediaSessionId),
        stream_media_session_id: R(i.X4.StreamMediaSessionId),
        last_memory_usage_kb: null !== (d = null == n ? void 0 : null === (r = n.lastMemoryInformation) || void 0 === r ? void 0 : r.memoryUsageKB) && void 0 !== d ? d : null,
        last_used_js_heap_size_kb: null !== (E = null == n ? void 0 : null === (s = n.lastMemoryInformation) || void 0 === s ? void 0 : s.usedJSHeapSizeKB) && void 0 !== E ? E : null,
        last_memory_usage_uptime: null !== (I = null == n ? void 0 : null === (o = n.lastMemoryInformation) || void 0 === o ? void 0 : o.uptimeSeconds) && void 0 !== I ? I : null,
        highest_memory_usage_kb: null !== (T = null == n ? void 0 : null === (a = n.highestMemoryInformation) || void 0 === a ? void 0 : a.memoryUsageKB) && void 0 !== T ? T : null,
        highest_used_js_heap_size_kb: null !== (h = null == n ? void 0 : null === (l = n.highestMemoryInformation) || void 0 === l ? void 0 : l.usedJSHeapSizeKB) && void 0 !== h ? h : null,
        highest_memory_usage_uptime: null !== (f = null == n ? void 0 : null === (u = n.highestMemoryInformation) || void 0 === u ? void 0 : u.uptimeSeconds) && void 0 !== f ? f : null
      };
      if (!e || null == n) return {
        electron_crash_reporter_did_crash: !1,
        minidump_exception_type: null,
        minidump_exception_module_name: null,
        minidump_relative_crash_address: null,
        minidump_exception_module_version: null,
        minidump_exception_module_code_id: null,
        ...g
      };
      console.log("AppCrashedFatalReport lastCrash:", n, e);
      let C = null == n ? void 0 : n.minidumpInformation;
      return {
        electron_crash_reporter_did_crash: e,
        minidump_exception_type: null !== (S = null == C ? void 0 : C.exceptionString) && void 0 !== S ? S : null,
        minidump_exception_module_name: null !== (N = null == C ? void 0 : C.exceptionModuleName) && void 0 !== N ? N : null,
        minidump_relative_crash_address: null !== (A = null == C ? void 0 : C.relativeCrashAddress) && void 0 !== A ? A : null,
        minidump_exception_module_version: null !== (m = null == C ? void 0 : C.exceptionModuleVersion) && void 0 !== m ? m : null,
        minidump_exception_module_code_id: null !== (O = null == C ? void 0 : C.exceptionModuleCodeId) && void 0 !== O ? O : null,
        ...g
      }
    }(s, o, n);
  a.default.track(u.rMx.APP_NATIVE_CRASH, l), r.K.set(c, {
    lastId: null == n ? void 0 : n.id
  }), o && setTimeout(async () => await E(), 1e4)
}
async function E() {
  var e, t;
  if (null !== (t = null === (e = o.default.getCurrentUser()) || void 0 === e ? void 0 : e.isStaff()) && void 0 !== t && t) try {
    await s.Z.getMediaEngine().writeAudioDebugState(), await (0, l.E)(u.GU0.RTC), console.log("Successfully uploaded debug files")
  } catch (e) {
    console.log("Failed to upload debug files")
  }
}