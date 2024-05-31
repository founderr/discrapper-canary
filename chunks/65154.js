"use strict";
n.r(t), n.d(t, {
  AudioSubsystems: function() {
    return M
  },
  Codecs: function() {
    return y
  },
  ConnectionStates: function() {
    return C
  },
  DEFAULT_CALL_BITRATE: function() {
    return z
  },
  DEFAULT_CALL_MAX_BITRATE: function() {
    return X
  },
  DEFAULT_CALL_MIN_BITRATE: function() {
    return Z
  },
  DEFAULT_DEVICE_ID: function() {
    return j
  },
  DEFAULT_PRIORITY_SPEAKER_DUCKING: function() {
    return K
  },
  DEFAULT_SOUNDSHARE_VOICE_BITRATE: function() {
    return Y
  },
  DEFAULT_STREAM_VOLUME: function() {
    return F
  },
  DEFAULT_VOICE_BITRATE: function() {
    return H
  },
  DEFAULT_VOLUME: function() {
    return x
  },
  DESKTOP_BITRATE: function() {
    return et
  },
  DESKTOP_BITRATE_ENHANCED: function() {
    return en
  },
  DESKTOP_LOW_QUALITY_STREAM_MAX_BITRATE: function() {
    return ei
  },
  DISABLED_DEVICE_ID: function() {
    return W
  },
  DesktopSources: function() {
    return V.DesktopSources
  },
  DeviceTypes: function() {
    return p
  },
  ExperimentFlags: function() {
    return w
  },
  Features: function() {
    return v
  },
  InputModes: function() {
    return O
  },
  MEDIA_SINK_WANTS_PROPERTIES: function() {
    return er
  },
  MediaEngineContextTypes: function() {
    return N
  },
  MediaEngineImplementations: function() {
    return D
  },
  MediaTypes: function() {
    return U
  },
  NoiseCancellerError: function() {
    return B
  },
  PING_INTERVAL: function() {
    return Q
  },
  ResolutionTypes: function() {
    return G
  },
  SimulcastOverrideQuality: function() {
    return L
  },
  SpeakingFlags: function() {
    return P
  },
  StatsFilter: function() {
    return R
  },
  VIDEO_QUALITY_FRAMERATE: function() {
    return J
  },
  VIDEO_QUALITY_FRAMERATE_MUTED: function() {
    return $
  },
  VIDEO_QUALITY_FRAMERATE_MUTED_2: function() {
    return ee
  },
  VIDEO_QUALITY_FRAMRATE_NOT_SPEAKING_TIMEOUT: function() {
    return q
  },
  VIEWERSIDE_CLIP_KFI_MS: function() {
    return ea
  },
  VideoQualityMode: function() {
    return k
  },
  VideoToggleReason: function() {
    return g
  },
  defaultVideoQualityOptions: function() {
    return es
  }
});
var i, r, s, a, o, l, u, d, _, c, E, I, T, f, S, h, A, m, N, p, O, C, R, g, L, v, D, M, y, P, U, b, G, w, k, B, V = n("268146");
(i = N || (N = {})).DEFAULT = "default", i.STREAM = "stream", (r = p || (p = {})).AUDIO_INPUT = "audioinput", r.AUDIO_OUTPUT = "audiooutput", r.VIDEO_INPUT = "videoinput", (s = O || (O = {})).PUSH_TO_TALK = "PUSH_TO_TALK", s.VOICE_ACTIVITY = "VOICE_ACTIVITY", (a = C || (C = {})).DISCONNECTED = "DISCONNECTED", a.CONNECTING = "CONNECTING", a.CONNECTED = "CONNECTED", a.NO_ROUTE = "NO_ROUTE", a.ICE_CHECKING = "ICE_CHECKING", a.DTLS_CONNECTING = "DTLS_CONNECTING", (o = R || (R = {}))[o.TRANSPORT = 1] = "TRANSPORT", o[o.OUTBOUND = 2] = "OUTBOUND", o[o.INBOUND = 4] = "INBOUND", o[o.ALL = 7] = "ALL", (l = g || (g = {})).MANUAL_DISABLE = "video_manual_disable", l.MANUAL_ENABLE = "video_manual_enable", l.MANUAL_REENABLE = "video_manual_reenable", l.AUTO_DISABLE = "video_auto_disable", l.AUTO_ENABLE = "video_auto_enable", l.AUTO_DOWNGRADE = "video_auto_downgrade", l.AUTO_UPGRADE = "video_auto_upgrade,", (u = L || (L = {})).NO_OVERRIDE = "no_override", u.HIGH = "high", u.LOW = "low";
let x = 100,
  F = 18,
  H = 64e3,
  Y = 128e3,
  j = "default",
  W = "disabled",
  K = .1,
  z = 6e5,
  Z = 15e4,
  X = 1e7,
  Q = 5e3,
  q = 15e3,
  J = 30,
  $ = 20,
  ee = 12,
  et = 4e6,
  en = 8e6,
  ei = 5e5,
  er = ["remoteSinkWantsPixelCount", "remoteSinkWantsMaxFramerate", "encodingVideoMinBitRate", "encodingVideoMaxBitRate", "encodingVideoBitRate", "streamParameters"],
  es = {
    videoBudget: {
      width: 1280,
      height: 720,
      framerate: J
    },
    videoCapture: {
      width: 1280,
      height: 720,
      framerate: 30
    },
    videoBitrate: {
      min: 15e4,
      max: 25e5
    },
    desktopBitrate: {
      min: 5e5,
      max: 4e6,
      target: 6e5
    },
    videoBitrateFloor: 15e4
  },
  ea = 6e4;
(d = v || (v = {})).AUTO_ENABLE = "AUTO_ENABLE", d.ATTENUATION = "ATTENUATION", d.AUDIO_INPUT_DEVICE = "AUDIO_INPUT_DEVICE", d.AUDIO_OUTPUT_DEVICE = "AUDIO_OUTPUT_DEVICE", d.VOICE_PROCESSING = "VOICE_PROCESSING", d.QOS = "QOS", d.NATIVE_PING = "NATIVE_PING", d.LEGACY_AUDIO_SUBSYSTEM = "LEGACY_AUDIO_SUBSYSTEM", d.EXPERIMENTAL_AUDIO_SUBSYSTEM = "EXPERIMENTAL_AUDIO_SUBSYSTEM", d.DEBUG_LOGGING = "DEBUG_LOGGING", d.AUTOMATIC_VAD = "AUTOMATIC_VAD", d.VOICE_PANNING = "VOICE_PANNING", d.DIAGNOSTICS = "DIAGNOSTICS", d.VIDEO = "VIDEO", d.DESKTOP_CAPTURE = "DESKTOP_CAPTURE", d.DESKTOP_CAPTURE_FORMAT = "DESKTOP_CAPTURE_FORMAT", d.DESKTOP_CAPTURE_APPLICATIONS = "DESKTOP_CAPTURE_APPLICATIONS", d.SOUNDSHARE = "SOUNDSHARE", d.LOOPBACK = "LOOPBACK", d.VIDEO_HOOK = "VIDEO_HOOK", d.EXPERIMENTAL_SOUNDSHARE = "EXPERIMENTAL_SOUNDSHARE", d.WUMPUS_VIDEO = "WUMPUS_VIDEO", d.ELEVATED_HOOK = "ELEVATED_HOOK", d.HYBRID_VIDEO = "HYBRID_VIDEO", d.OPEN_H264 = "OPEN_H264", d.EXPERIMENTAL_ENCODERS = "EXPERIMENTAL_ENCODERS", d.REMOTE_LOCUS_NETWORK_CONTROL = "REMOTE_LOCUS_NETWORK_CONTROL", d.SCREEN_PREVIEWS = "SCREEN_PREVIEWS", d.WINDOW_PREVIEWS = "WINDOW_PREVIEWS", d.AUDIO_DEBUG_STATE = "AUDIO_DEBUG_STATE", d.AEC_DUMP = "AEC_DUMP", d.DISABLE_VIDEO = "DISABLE_VIDEO", d.CONNECTION_REPLAY = "CONNECTION_REPLAY", d.SIMULCAST = "SIMULCAST", d.RTC_REGION_RANKING = "RTC_REGION_RANKING", d.DIRECT_VIDEO = "DIRECT_VIDEO", d.ELECTRON_VIDEO = "ELECTRON_VIDEO", d.MEDIAPIPE = "MEDIAPIPE", d.FIXED_KEYFRAME_INTERVAL = "FIXED_KEYFRAME_INTERVAL", d.SAMPLE_PLAYBACK = "SAMPLE_PLAYBACK", d.FIRST_FRAME_CALLBACK = "FIRST_FRAME_CALLBACK", d.REMOTE_USER_MULTI_STREAM = "REMOTE_USER_MULTI_STREAM", d.NOISE_SUPPRESSION = "NOISE_SUPPRESSION", d.NOISE_CANCELLATION = "NOISE_CANCELLATION", d.AUTOMATIC_GAIN_CONTROL = "AUTOMATIC_GAIN_CONTROL", d.CLIPS = "CLIPS", d.SPEED_TEST = "SPEED_TEST", d.IMAGE_QUALITY_MEASUREMENT = "IMAGE_QUALITY_MEASUREMENT", d.AMD_EXPERIMENTAL_RATE_CONTROL = "AMD_EXPERIMENTAL_RATE_CONTROL", d.GO_LIVE_HARDWARE = "GO_LIVE_HARDWARE", d.SCREEN_CAPTURE_KIT = "SCREEN_CAPTURE_KIT", d.CAPTURE_TIMEOUT_EXPERIMENTS = "CAPTURE_TIMEOUT_EXPERIMENTS", d.SCREEN_SOUNDSHARE = "SCREEN_SOUNDSHARE", (_ = D || (D = {})).NATIVE = "NATIVE", _.WEBRTC = "WEBRTC", _.DUMMY = "DUMMY", (c = M || (M = {})).LEGACY = "legacy", c.STANDARD = "standard", c.EXPERIMENTAL = "experimental", (E = y || (y = {})).OPUS = "opus", E.VP8 = "VP8", E.VP9 = "VP9", E.H264 = "H264", E.RTX = "rtx", E.TEST = "TEST", (I = P || (P = {}))[I.NONE = 0] = "NONE", I[I.VOICE = 1] = "VOICE", I[I.SOUNDSHARE = 2] = "SOUNDSHARE", I[I.PRIORITY = 4] = "PRIORITY", (T = U || (U = {})).AUDIO = "audio", T.VIDEO = "video", T.SCREEN = "screen", T.TEST = "test", (f = b || (b = {})).PLAYING = "playing", f.PAUSED = "paused", (S = G || (G = {})).FIXED = "fixed", S.SOURCE = "source", (h = w || (w = {})).VIDEOTOOLBOX_RATE_CONTROL = "videotoolbox_rate_control", h.SIGNAL_H265_SUPPORT = "signal_h265_support", h.SIGNAL_H265_DECODE_SUPPORT = "signal_h265_decode_support", h.SIGNAL_AV1_SUPPORT = "signal_av1_support", h.SIGNAL_AV1_HARDWARE_DECODE = "signal_av1_hardware_decode", h.STREAMER_CLIP = "streamer_clip", h.VIEWER_CLIP = "viewer_clip", h.MUTE_BEFORE_PROCESSING = "mute_before_processing", h.PTT_BEFORE_PROCESSING = "ptt_before_processing", h.SKIP_ENCODE = "skip_encode", h.RESET_DECODER_ON_ERRORS = "reset_decoder_on_errors", h.SOFTWARE_FALLBACK_ON_ERRORS = "software_fallback_on_errors", h.SOFTWARE_FALLBACK_ON_CONSECUTIVE_ERRORS = "software_fallback_on_consecutive_errors", h.GOLIVE_SIMULCAST = "golive_simulcast", (A = k || (k = {}))[A.AUTO = 1] = "AUTO", A[A.FULL = 2] = "FULL", (m = B || (B = {}))[m.CPU_OVERUSE = 1] = "CPU_OVERUSE", m[m.FAILED = 2] = "FAILED", m[m.VAD_CPU_OVERUSE = 3] = "VAD_CPU_OVERUSE", m[m.INITIALIZED = 4] = "INITIALIZED"