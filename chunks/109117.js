r.d(n, {
    S1: function () {
        return _;
    }
});
var i = r(268146),
    a = r(433517),
    s = r(131951),
    o = r(594174),
    l = r(626135),
    u = r(729345),
    c = r(981631);
let d = window.DiscordNative,
    f = ''.concat(c.rMx.APP_NATIVE_CRASH, 'Storage');
async function _() {
    var e;
    if (__OVERLAY__) return;
    let n = null == d ? void 0 : null === (e = d.processUtils) || void 0 === e ? void 0 : e.getLastCrash;
    if (null == n) {
        console.log('AppCrashedFatalReport: getLastCrash not supported.');
        return;
    }
    let r = await n(),
        { didCrashReporterSeeCrash: i, didCrashOrUncleanExit: s } = h(a.K.get(f, {}), r),
        o = m(i, s, r);
    l.default.track(c.rMx.APP_NATIVE_CRASH, o), a.K.set(f, { lastId: null == r ? void 0 : r.id }), s && setTimeout(async () => await p(), 10000);
}
function h(e, n) {
    var r;
    let i = (null == e ? void 0 : e.lastId) !== (null == n ? void 0 : n.id) && (null == n ? void 0 : n.id) != null,
        a = null !== (r = null == n ? void 0 : n.rendererCrashExitCode) && void 0 !== r ? r : null,
        s = i || (null != a && 0 !== a);
    return {
        didCrashReporterSeeCrash: i,
        didCrashOrUncleanExit: s
    };
}
async function p() {
    var e, n;
    if (null !== (n = null === (e = o.default.getCurrentUser()) || void 0 === e ? void 0 : e.isStaff()) && void 0 !== n && n)
        try {
            await s.Z.getMediaEngine().writeAudioDebugState(), await (0, u.E)(c.GU0.RTC), console.log('Successfully uploaded debug files');
        } catch (e) {
            console.log('Failed to upload debug files');
        }
}
function m(e, n, r) {
    var a, s, o, l, u, c, d, f, _, h, p, m, g, E, v, I, T, b, y;
    function S(e) {
        return (null == r ? void 0 : r.storedInformation) != null && 1 === r.storedInformation[e];
    }
    function A(e) {
        return (null == r ? void 0 : r.storedInformation) == null || null == r.storedInformation[e] ? null : r.storedInformation[e];
    }
    let N = {
        did_crash: n,
        renderer_crash_reason: null !== (d = null == r ? void 0 : r.rendererCrashReason) && void 0 !== d ? d : null,
        renderer_crash_exit_code: null !== (f = null == r ? void 0 : r.rendererCrashExitCode) && void 0 !== f ? f : null,
        had_rtc_connection: S(i.X4.HasRTCConnection),
        was_sending_video: S(i.X4.IsSendingVideo),
        was_sending_stream: S(i.X4.IsSendingStream),
        was_receiving_video: S(i.X4.IsReceivingVideo),
        was_receiving_stream: S(i.X4.IsReceivingStream),
        video_media_session_id: A(i.X4.VideoMediaSessionId),
        stream_media_session_id: A(i.X4.StreamMediaSessionId),
        last_memory_usage_kb: null !== (_ = null == r ? void 0 : null === (a = r.lastMemoryInformation) || void 0 === a ? void 0 : a.memoryUsageKB) && void 0 !== _ ? _ : null,
        last_used_js_heap_size_kb: null !== (h = null == r ? void 0 : null === (s = r.lastMemoryInformation) || void 0 === s ? void 0 : s.usedJSHeapSizeKB) && void 0 !== h ? h : null,
        last_memory_usage_uptime: null !== (p = null == r ? void 0 : null === (o = r.lastMemoryInformation) || void 0 === o ? void 0 : o.uptimeSeconds) && void 0 !== p ? p : null,
        highest_memory_usage_kb: null !== (m = null == r ? void 0 : null === (l = r.highestMemoryInformation) || void 0 === l ? void 0 : l.memoryUsageKB) && void 0 !== m ? m : null,
        highest_used_js_heap_size_kb: null !== (g = null == r ? void 0 : null === (u = r.highestMemoryInformation) || void 0 === u ? void 0 : u.usedJSHeapSizeKB) && void 0 !== g ? g : null,
        highest_memory_usage_uptime: null !== (E = null == r ? void 0 : null === (c = r.highestMemoryInformation) || void 0 === c ? void 0 : c.uptimeSeconds) && void 0 !== E ? E : null
    };
    if (!e || null == r)
        return {
            electron_crash_reporter_did_crash: !1,
            minidump_exception_type: null,
            minidump_exception_module_name: null,
            minidump_relative_crash_address: null,
            minidump_exception_module_version: null,
            minidump_exception_module_code_id: null,
            ...N
        };
    console.log('AppCrashedFatalReport lastCrash:', r, e);
    let C = null == r ? void 0 : r.minidumpInformation;
    return {
        electron_crash_reporter_did_crash: e,
        minidump_exception_type: null !== (v = null == C ? void 0 : C.exceptionString) && void 0 !== v ? v : null,
        minidump_exception_module_name: null !== (I = null == C ? void 0 : C.exceptionModuleName) && void 0 !== I ? I : null,
        minidump_relative_crash_address: null !== (T = null == C ? void 0 : C.relativeCrashAddress) && void 0 !== T ? T : null,
        minidump_exception_module_version: null !== (b = null == C ? void 0 : C.exceptionModuleVersion) && void 0 !== b ? b : null,
        minidump_exception_module_code_id: null !== (y = null == C ? void 0 : C.exceptionModuleCodeId) && void 0 !== y ? y : null,
        ...N
    };
}
