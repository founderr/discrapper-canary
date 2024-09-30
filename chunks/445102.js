n.d(t, {
    Z: function () {
        return i;
    }
});
var o = n(131951),
    a = n(626135),
    s = n(981631);
function i(e, t, n, i, l) {
    let r = o.Z.getSettings(),
        u = o.Z.getInputDeviceId(),
        c = o.Z.getInputDevices()[u],
        d = o.Z.getOutputDeviceId(),
        _ = o.Z.getOutputDevices()[d],
        m = o.Z.getVideoDeviceId(),
        b = o.Z.getVideoDevices()[m],
        E = o.Z.getNoiseCancellation(),
        h = o.Z.getMediaEngine().getAudioSubsystem(),
        f = o.Z.getMediaEngine().getAudioLayer();
    a.default.track(s.rMx.CALL_REPORT_PROBLEM, {
        rating: null != e ? e : 'no response',
        reason_code: t,
        reason_description: n,
        feedback: i,
        audio_input_mode: r.mode,
        automatic_audio_input_sensitivity_enabled: r.modeOptions.autoThreshold,
        audio_input_sensitivity: r.modeOptions.threshold,
        echo_cancellation_enabled: r.echoCancellation,
        noise_suppression_enabled: r.noiseSuppression,
        automatic_gain_control_enabled: r.automaticGainControl,
        voice_output_volume: r.outputVolume,
        noise_cancellation_enabled: E,
        input_device_name: null == c ? void 0 : c.name,
        output_device_name: null == _ ? void 0 : _.name,
        video_device_name: null == b ? void 0 : b.name,
        audio_subsystem: h,
        audio_layer: f,
        automatic_audio_subsystem: r.automaticAudioSubsystem,
        ...l
    });
}
