n.d(t, {
    S1: function () {
        return f;
    }
});
var r = n(268146),
    i = n(433517),
    a = n(131951),
    s = n(594174),
    o = n(626135),
    l = n(729345),
    u = n(981631);
let c = window.DiscordNative,
    d = ''.concat(u.rMx.APP_NATIVE_CRASH, 'Storage');
async function f() {
    var e;
    if (__OVERLAY__) return;
    let t = null == c ? void 0 : null === (e = c.processUtils) || void 0 === e ? void 0 : e.getLastCrash;
    if (null == t) {
        console.log('AppCrashedFatalReport: getLastCrash not supported.');
        return;
    }
    let n = await t(),
        { didCrashReporterSeeCrash: a, didCrashOrUncleanExit: s } = (function (e, t) {
            var n;
            let r = (null == e ? void 0 : e.lastId) !== (null == t ? void 0 : t.id) && (null == t ? void 0 : t.id) != null,
                i = null !== (n = null == t ? void 0 : t.rendererCrashExitCode) && void 0 !== n ? n : null;
            return {
                didCrashReporterSeeCrash: r,
                didCrashOrUncleanExit: r || (null != i && 0 !== i)
            };
        })(i.K.get(d, {}), n),
        l = (function (e, t, n) {
            var i, a, s, o, l, u, c, d, f, _, h, p, m, g, E, v, I, S, b;
            function T(e) {
                return (null == n ? void 0 : n.storedInformation) != null && 1 === n.storedInformation[e];
            }
            function y(e) {
                return (null == n ? void 0 : n.storedInformation) == null || null == n.storedInformation[e] ? null : n.storedInformation[e];
            }
            let A = {
                did_crash: t,
                renderer_crash_reason: null !== (c = null == n ? void 0 : n.rendererCrashReason) && void 0 !== c ? c : null,
                renderer_crash_exit_code: null !== (d = null == n ? void 0 : n.rendererCrashExitCode) && void 0 !== d ? d : null,
                had_rtc_connection: T(r.X4.HasRTCConnection),
                was_sending_video: T(r.X4.IsSendingVideo),
                was_sending_stream: T(r.X4.IsSendingStream),
                was_receiving_video: T(r.X4.IsReceivingVideo),
                was_receiving_stream: T(r.X4.IsReceivingStream),
                video_media_session_id: y(r.X4.VideoMediaSessionId),
                stream_media_session_id: y(r.X4.StreamMediaSessionId),
                last_memory_usage_kb: null !== (f = null == n ? void 0 : null === (i = n.lastMemoryInformation) || void 0 === i ? void 0 : i.memoryUsageKB) && void 0 !== f ? f : null,
                last_used_js_heap_size_kb: null !== (_ = null == n ? void 0 : null === (a = n.lastMemoryInformation) || void 0 === a ? void 0 : a.usedJSHeapSizeKB) && void 0 !== _ ? _ : null,
                last_memory_usage_uptime: null !== (h = null == n ? void 0 : null === (s = n.lastMemoryInformation) || void 0 === s ? void 0 : s.uptimeSeconds) && void 0 !== h ? h : null,
                highest_memory_usage_kb: null !== (p = null == n ? void 0 : null === (o = n.highestMemoryInformation) || void 0 === o ? void 0 : o.memoryUsageKB) && void 0 !== p ? p : null,
                highest_used_js_heap_size_kb: null !== (m = null == n ? void 0 : null === (l = n.highestMemoryInformation) || void 0 === l ? void 0 : l.usedJSHeapSizeKB) && void 0 !== m ? m : null,
                highest_memory_usage_uptime: null !== (g = null == n ? void 0 : null === (u = n.highestMemoryInformation) || void 0 === u ? void 0 : u.uptimeSeconds) && void 0 !== g ? g : null
            };
            if (!e || null == n)
                return {
                    electron_crash_reporter_did_crash: !1,
                    minidump_exception_type: null,
                    minidump_exception_module_name: null,
                    minidump_relative_crash_address: null,
                    minidump_exception_module_version: null,
                    minidump_exception_module_code_id: null,
                    ...A
                };
            console.log('AppCrashedFatalReport lastCrash:', n, e);
            let N = null == n ? void 0 : n.minidumpInformation;
            return {
                electron_crash_reporter_did_crash: e,
                minidump_exception_type: null !== (E = null == N ? void 0 : N.exceptionString) && void 0 !== E ? E : null,
                minidump_exception_module_name: null !== (v = null == N ? void 0 : N.exceptionModuleName) && void 0 !== v ? v : null,
                minidump_relative_crash_address: null !== (I = null == N ? void 0 : N.relativeCrashAddress) && void 0 !== I ? I : null,
                minidump_exception_module_version: null !== (S = null == N ? void 0 : N.exceptionModuleVersion) && void 0 !== S ? S : null,
                minidump_exception_module_code_id: null !== (b = null == N ? void 0 : N.exceptionModuleCodeId) && void 0 !== b ? b : null,
                ...A
            };
        })(a, s, n);
    o.default.track(u.rMx.APP_NATIVE_CRASH, l), i.K.set(d, { lastId: null == n ? void 0 : n.id }), s && setTimeout(async () => await _(), 10000);
}
async function _() {
    var e, t;
    if (null !== (t = null === (e = s.default.getCurrentUser()) || void 0 === e ? void 0 : e.isStaff()) && void 0 !== t && t)
        try {
            await a.Z.getMediaEngine().writeAudioDebugState(), await (0, l.E)(u.GU0.RTC), console.log('Successfully uploaded debug files');
        } catch (e) {
            console.log('Failed to upload debug files');
        }
}
