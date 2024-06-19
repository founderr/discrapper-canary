n.d(t, {
  Z: function() {
    return l
  }
});
var a = n(131951),
  o = n(626135),
  s = n(981631);

function l(e, t, n, l, i) {
  let u = a.Z.getSettings(),
    r = a.Z.getInputDeviceId(),
    c = a.Z.getInputDevices()[r],
    d = a.Z.getOutputDeviceId(),
    _ = a.Z.getOutputDevices()[d],
    E = a.Z.getVideoDeviceId(),
    O = a.Z.getVideoDevices()[E],
    C = a.Z.getNoiseCancellation();
  o.default.track(s.rMx.CALL_REPORT_PROBLEM, {
    rating: null != e ? e : "no response",
    reason_code: t,
    reason_description: n,
    feedback: l,
    audio_input_mode: u.mode,
    automatic_audio_input_sensitivity_enabled: u.modeOptions.autoThreshold,
    audio_input_sensitivity: u.modeOptions.threshold,
    echo_cancellation_enabled: u.echoCancellation,
    noise_suppression_enabled: u.noiseSuppression,
    automatic_gain_control_enabled: u.automaticGainControl,
    voice_output_volume: u.outputVolume,
    noise_cancellation_enabled: C,
    input_device_name: null == c ? void 0 : c.name,
    output_device_name: null == _ ? void 0 : _.name,
    video_device_name: null == O ? void 0 : O.name,
    ...i
  })
}