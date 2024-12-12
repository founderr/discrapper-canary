n.d(t, {
    Z: function () {
        return a;
    }
});
var o = n(131951),
    i = n(626135),
    l = n(981631);
function a(e, t, n, a, s) {
    let r = o.Z.getSettings(),
        u = o.Z.getInputDeviceId(),
        c = o.Z.getInputDevices()[u],
        d = o.Z.getOutputDeviceId(),
        m = o.Z.getOutputDevices()[d],
        b = o.Z.getVideoDeviceId(),
        h = o.Z.getVideoDevices()[b],
        _ = o.Z.getNoiseCancellation(),
        g = o.Z.getMediaEngine().getAudioSubsystem(),
        p = o.Z.getMediaEngine().getAudioLayer();
    i.default.track(l.rMx.CALL_REPORT_PROBLEM, {
        rating: null != e ? e : 'no response',
        reason_code: t,
        reason_description: n,
        feedback: a,
        audio_input_mode: r.mode,
        automatic_audio_input_sensitivity_enabled: r.modeOptions.autoThreshold,
        audio_input_sensitivity: r.modeOptions.threshold,
        echo_cancellation_enabled: r.echoCancellation,
        noise_suppression_enabled: r.noiseSuppression,
        automatic_gain_control_enabled: r.automaticGainControl,
        voice_output_volume: r.outputVolume,
        noise_cancellation_enabled: _,
        input_device_name: null == c ? void 0 : c.name,
        output_device_name: null == m ? void 0 : m.name,
        video_device_name: null == h ? void 0 : h.name,
        audio_subsystem: g,
        audio_layer: p,
        automatic_audio_subsystem: r.automaticAudioSubsystem,
        ...s
    });
}
