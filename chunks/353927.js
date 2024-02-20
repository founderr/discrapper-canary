"use strict";
n.r(t), n.d(t, {
  DesktopSources: function() {
    return G.DesktopSources
  },
  MediaEngineContextTypes: function() {
    return T
  },
  DeviceTypes: function() {
    return I
  },
  InputModes: function() {
    return v
  },
  ConnectionStates: function() {
    return C
  },
  StatsFilter: function() {
    return A
  },
  VideoToggleReason: function() {
    return R
  },
  DEFAULT_VOLUME: function() {
    return x
  },
  DEFAULT_STREAM_VOLUME: function() {
    return F
  },
  DEFAULT_VOICE_BITRATE: function() {
    return V
  },
  DEFAULT_SOUNDSHARE_VOICE_BITRATE: function() {
    return B
  },
  DEFAULT_DEVICE_ID: function() {
    return H
  },
  DISABLED_DEVICE_ID: function() {
    return j
  },
  DEFAULT_PRIORITY_SPEAKER_DUCKING: function() {
    return Y
  },
  DEFAULT_CALL_BITRATE: function() {
    return W
  },
  DEFAULT_CALL_MIN_BITRATE: function() {
    return K
  },
  DEFAULT_CALL_MAX_BITRATE: function() {
    return z
  },
  PING_INTERVAL: function() {
    return q
  },
  VIDEO_QUALITY_FRAMRATE_NOT_SPEAKING_TIMEOUT: function() {
    return Q
  },
  VIDEO_QUALITY_FRAMERATE: function() {
    return X
  },
  VIDEO_QUALITY_FRAMERATE_MUTED: function() {
    return Z
  },
  VIDEO_QUALITY_FRAMERATE_MUTED_2: function() {
    return J
  },
  DESKTOP_BITRATE: function() {
    return $
  },
  DESKTOP_BITRATE_ENHANCED: function() {
    return ee
  },
  MEDIA_SINK_WANTS_PROPERTIES: function() {
    return et
  },
  defaultVideoQualityOptions: function() {
    return en
  },
  VIEWERSIDE_CLIP_KFI_MS: function() {
    return ei
  },
  Features: function() {
    return N
  },
  MediaEngineImplementations: function() {
    return y
  },
  AudioSubsystems: function() {
    return O
  },
  Codecs: function() {
    return D
  },
  SpeakingFlags: function() {
    return b
  },
  MediaTypes: function() {
    return P
  },
  ResolutionTypes: function() {
    return M
  },
  ExperimentFlags: function() {
    return U
  },
  VideoQualityMode: function() {
    return w
  },
  NoiseCancellerError: function() {
    return k
  }
});
var i, r, s, a, o, l, u, c, d, p, h, f, E, _, m, S, g, T, I, v, C, A, R, N, y, O, D, b, P, L, M, U, w, k, G = n("771281");
(i = T || (T = {})).DEFAULT = "default", i.STREAM = "stream", (r = I || (I = {})).AUDIO_INPUT = "audioinput", r.AUDIO_OUTPUT = "audiooutput", r.VIDEO_INPUT = "videoinput", (s = v || (v = {})).PUSH_TO_TALK = "PUSH_TO_TALK", s.VOICE_ACTIVITY = "VOICE_ACTIVITY", (a = C || (C = {})).DISCONNECTED = "DISCONNECTED", a.CONNECTING = "CONNECTING", a.CONNECTED = "CONNECTED", a.NO_ROUTE = "NO_ROUTE", a.ICE_CHECKING = "ICE_CHECKING", a.DTLS_CONNECTING = "DTLS_CONNECTING", (o = A || (A = {}))[o.TRANSPORT = 1] = "TRANSPORT", o[o.OUTBOUND = 2] = "OUTBOUND", o[o.INBOUND = 4] = "INBOUND", o[o.ALL = 7] = "ALL", (l = R || (R = {})).MANUAL_DISABLE = "video_manual_disable", l.MANUAL_ENABLE = "video_manual_enable", l.MANUAL_REENABLE = "video_manual_reenable", l.AUTO_DISABLE = "video_auto_disable", l.AUTO_ENABLE = "video_auto_enable", l.AUTO_DOWNGRADE = "video_auto_downgrade", l.AUTO_UPGRADE = "video_auto_upgrade,";
let x = 100,
  F = 18,
  V = 64e3,
  B = 128e3,
  H = "default",
  j = "disabled",
  Y = .1,
  W = 6e5,
  K = 15e4,
  z = 1e7,
  q = 5e3,
  Q = 15e3,
  X = 30,
  Z = 20,
  J = 12,
  $ = 4e6,
  ee = 8e6,
  et = ["remoteSinkWantsPixelCount", "remoteSinkWantsMaxFramerate", "encodingVideoMinBitRate", "encodingVideoMaxBitRate", "encodingVideoBitRate", "streamParameters"],
  en = {
    videoBudget: {
      width: 1280,
      height: 720,
      framerate: X
    },
    videoCapture: {
      width: 1280,
      height: 720,
      framerate: X
    },
    videoBitrate: {
      min: 15e4,
      max: 25e5
    },
    desktopBitrate: {
      min: 5e5,
      max: $,
      target: 6e5
    },
    videoBitrateFloor: 15e4
  },
  ei = 6e4;
(u = N || (N = {})).AUTO_ENABLE = "AUTO_ENABLE", u.ATTENUATION = "ATTENUATION", u.AUDIO_INPUT_DEVICE = "AUDIO_INPUT_DEVICE", u.AUDIO_OUTPUT_DEVICE = "AUDIO_OUTPUT_DEVICE", u.VOICE_PROCESSING = "VOICE_PROCESSING", u.QOS = "QOS", u.NATIVE_PING = "NATIVE_PING", u.LEGACY_AUDIO_SUBSYSTEM = "LEGACY_AUDIO_SUBSYSTEM", u.EXPERIMENTAL_AUDIO_SUBSYSTEM = "EXPERIMENTAL_AUDIO_SUBSYSTEM", u.DEBUG_LOGGING = "DEBUG_LOGGING", u.AUTOMATIC_VAD = "AUTOMATIC_VAD", u.VOICE_PANNING = "VOICE_PANNING", u.DIAGNOSTICS = "DIAGNOSTICS", u.VIDEO = "VIDEO", u.DESKTOP_CAPTURE = "DESKTOP_CAPTURE", u.DESKTOP_CAPTURE_FORMAT = "DESKTOP_CAPTURE_FORMAT", u.DESKTOP_CAPTURE_APPLICATIONS = "DESKTOP_CAPTURE_APPLICATIONS", u.SOUNDSHARE = "SOUNDSHARE", u.LOOPBACK = "LOOPBACK", u.VIDEO_HOOK = "VIDEO_HOOK", u.EXPERIMENTAL_SOUNDSHARE = "EXPERIMENTAL_SOUNDSHARE", u.WUMPUS_VIDEO = "WUMPUS_VIDEO", u.ELEVATED_HOOK = "ELEVATED_HOOK", u.HYBRID_VIDEO = "HYBRID_VIDEO", u.OPEN_H264 = "OPEN_H264", u.EXPERIMENTAL_ENCODERS = "EXPERIMENTAL_ENCODERS", u.REMOTE_LOCUS_NETWORK_CONTROL = "REMOTE_LOCUS_NETWORK_CONTROL", u.SCREEN_PREVIEWS = "SCREEN_PREVIEWS", u.WINDOW_PREVIEWS = "WINDOW_PREVIEWS", u.AUDIO_DEBUG_STATE = "AUDIO_DEBUG_STATE", u.AEC_DUMP = "AEC_DUMP", u.DISABLE_VIDEO = "DISABLE_VIDEO", u.CONNECTION_REPLAY = "CONNECTION_REPLAY", u.SIMULCAST = "SIMULCAST", u.RTC_REGION_RANKING = "RTC_REGION_RANKING", u.DIRECT_VIDEO = "DIRECT_VIDEO", u.ELECTRON_VIDEO = "ELECTRON_VIDEO", u.MEDIAPIPE = "MEDIAPIPE", u.FIXED_KEYFRAME_INTERVAL = "FIXED_KEYFRAME_INTERVAL", u.SAMPLE_PLAYBACK = "SAMPLE_PLAYBACK", u.FIRST_FRAME_CALLBACK = "FIRST_FRAME_CALLBACK", u.REMOTE_USER_MULTI_STREAM = "REMOTE_USER_MULTI_STREAM", u.NOISE_SUPPRESSION = "NOISE_SUPPRESSION", u.NOISE_CANCELLATION = "NOISE_CANCELLATION", u.AUTOMATIC_GAIN_CONTROL = "AUTOMATIC_GAIN_CONTROL", u.CLIPS = "CLIPS", u.SPEED_TEST = "SPEED_TEST", u.IMAGE_QUALITY_MEASUREMENT = "IMAGE_QUALITY_MEASUREMENT", u.AMD_EXPERIMENTAL_RATE_CONTROL = "AMD_EXPERIMENTAL_RATE_CONTROL", u.GO_LIVE_HARDWARE = "GO_LIVE_HARDWARE", u.SCREEN_CAPTURE_KIT = "SCREEN_CAPTURE_KIT", u.CAPTURE_TIMEOUT_EXPERIMENTS = "CAPTURE_TIMEOUT_EXPERIMENTS", u.SCREEN_SOUNDSHARE = "SCREEN_SOUNDSHARE", (c = y || (y = {})).NATIVE = "NATIVE", c.WEBRTC = "WEBRTC", c.DUMMY = "DUMMY", (d = O || (O = {})).LEGACY = "legacy", d.STANDARD = "standard", d.EXPERIMENTAL = "experimental", (p = D || (D = {})).OPUS = "opus", p.VP8 = "VP8", p.VP9 = "VP9", p.H264 = "H264", p.RTX = "rtx", p.TEST = "TEST", (h = b || (b = {}))[h.NONE = 0] = "NONE", h[h.VOICE = 1] = "VOICE", h[h.SOUNDSHARE = 2] = "SOUNDSHARE", h[h.PRIORITY = 4] = "PRIORITY", (f = P || (P = {})).AUDIO = "audio", f.VIDEO = "video", f.SCREEN = "screen", f.TEST = "test", (E = L || (L = {})).PLAYING = "playing", E.PAUSED = "paused", (_ = M || (M = {})).FIXED = "fixed", _.SOURCE = "source", (m = U || (U = {})).VIDEOTOOLBOX_RATE_CONTROL = "videotoolbox_rate_control", m.SIGNAL_H265_SUPPORT = "signal_h265_support", m.SIGNAL_H265_DECODE_SUPPORT = "signal_h265_decode_support", m.SIGNAL_AV1_SUPPORT = "signal_av1_support", m.STREAMER_CLIP = "streamer_clip", m.VIEWER_CLIP = "viewer_clip", (S = w || (w = {}))[S.AUTO = 1] = "AUTO", S[S.FULL = 2] = "FULL", (g = k || (k = {}))[g.CPU_OVERUSE = 1] = "CPU_OVERUSE", g[g.FAILED = 2] = "FAILED", g[g.VAD_CPU_OVERUSE = 3] = "VAD_CPU_OVERUSE", g[g.INITIALIZED = 4] = "INITIALIZED"