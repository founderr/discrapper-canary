n.d(t, {
    $A: function () {
        return J;
    },
    $B: function () {
        return et;
    },
    $j: function () {
        return y;
    },
    AN: function () {
        return R;
    },
    AS: function () {
        return O;
    },
    Av: function () {
        return W;
    },
    Dg: function () {
        return x;
    },
    Er: function () {
        return ea;
    },
    Gs: function () {
        return er;
    },
    H3: function () {
        return G;
    },
    JA: function () {
        return X;
    },
    LD: function () {
        return eo;
    },
    P8: function () {
        return ei;
    },
    QO: function () {
        return Q;
    },
    QP: function () {
        return A;
    },
    Qx: function () {
        return F;
    },
    R$: function () {
        return ec;
    },
    Tr: function () {
        return w;
    },
    UC: function () {
        return ef;
    },
    Uc: function () {
        return B;
    },
    V8: function () {
        return U;
    },
    WA: function () {
        return q;
    },
    XR: function () {
        return eh;
    },
    YE: function () {
        return e_;
    },
    Yh: function () {
        return V;
    },
    Yn: function () {
        return I;
    },
    Z: function () {
        return C;
    },
    Zq: function () {
        return z;
    },
    ad: function () {
        return L;
    },
    dX: function () {
        return j;
    },
    ed: function () {
        return H;
    },
    ef: function () {
        return el;
    },
    fC: function () {
        return N;
    },
    h7: function () {
        return T;
    },
    iA: function () {
        return D;
    },
    jg: function () {
        return K;
    },
    kS: function () {
        return em;
    },
    mC: function () {
        return ee;
    },
    mN: function () {
        return $;
    },
    n4: function () {
        return eE;
    },
    pM: function () {
        return S;
    },
    pk: function () {
        return ed;
    },
    ru: function () {
        return eu;
    },
    u$: function () {
        return en;
    },
    uA: function () {
        return P;
    },
    ux: function () {
        return eg;
    },
    vA: function () {
        return Z.vA;
    },
    w5: function () {
        return Y;
    },
    y7: function () {
        return es;
    },
    yf: function () {
        return ep;
    },
    ym: function () {
        return k;
    }
});
var r,
    i,
    a,
    s,
    o,
    l,
    u,
    c,
    d,
    f,
    _,
    p,
    h,
    m,
    g,
    E,
    v,
    b,
    I,
    T,
    S,
    y,
    A,
    N,
    C,
    R,
    O,
    D,
    L,
    x,
    w,
    M,
    P,
    k,
    U,
    B,
    G,
    Z = n(268146);
((r = I || (I = {})).DEFAULT = 'default'), (r.STREAM = 'stream'), ((i = T || (T = {})).AUDIO_INPUT = 'audioinput'), (i.AUDIO_OUTPUT = 'audiooutput'), (i.VIDEO_INPUT = 'videoinput'), ((a = S || (S = {})).PUSH_TO_TALK = 'PUSH_TO_TALK'), (a.VOICE_ACTIVITY = 'VOICE_ACTIVITY'), ((s = y || (y = {})).DISCONNECTED = 'DISCONNECTED'), (s.CONNECTING = 'CONNECTING'), (s.CONNECTED = 'CONNECTED'), (s.NO_ROUTE = 'NO_ROUTE'), (s.ICE_CHECKING = 'ICE_CHECKING'), (s.DTLS_CONNECTING = 'DTLS_CONNECTING'), ((o = A || (A = {}))[(o.TRANSPORT = 1)] = 'TRANSPORT'), (o[(o.OUTBOUND = 2)] = 'OUTBOUND'), (o[(o.INBOUND = 4)] = 'INBOUND'), (o[(o.ALL = 7)] = 'ALL'), ((l = N || (N = {})).MANUAL_DISABLE = 'video_manual_disable'), (l.MANUAL_ENABLE = 'video_manual_enable'), (l.MANUAL_REENABLE = 'video_manual_reenable'), (l.AUTO_DISABLE = 'video_auto_disable'), (l.AUTO_ENABLE = 'video_auto_enable'), (l.AUTO_DOWNGRADE = 'video_auto_downgrade'), (l.AUTO_UPGRADE = 'video_auto_upgrade,'), ((u = C || (C = {})).NO_OVERRIDE = 'no_override'), (u.HIGH = 'high'), (u.LOW = 'low');
let F = 100,
    V = 18,
    j = 64000,
    H = 128000,
    Y = 'default',
    W = 'disabled',
    K = 0.1,
    z = -40,
    q = -25,
    Q = 1 / 15,
    X = 0.8,
    J = 600000,
    $ = 150000,
    ee = 10000000,
    et = 5000,
    en = 15000,
    er = 30,
    ei = 20,
    ea = 12,
    es = 100,
    eo = 50,
    el = 1280,
    eu = 720,
    ec = 30,
    ed = 1500000,
    ef = 150000,
    e_ = 3500000,
    ep = 9000000,
    eh = ['remoteSinkWantsPixelCount', 'remoteSinkWantsMaxFramerate', 'encodingVideoMinBitRate', 'encodingVideoMaxBitRate', 'encodingVideoBitRate', 'streamParameters'],
    em = {
        videoBudget: {
            width: 1280,
            height: 720,
            framerate: er
        },
        videoCapture: {
            width: 1280,
            height: 720,
            framerate: 30
        },
        videoBitrate: {
            min: 150000,
            max: 2500000
        },
        desktopBitrate: {
            min: 500000,
            max: 3500000,
            target: 600000
        },
        videoBitrateFloor: 150000
    },
    eg = 60000,
    eE = '>=22.0.0';
((c = R || (R = {})).AUTO_ENABLE = 'AUTO_ENABLE'),
    (c.ATTENUATION = 'ATTENUATION'),
    (c.AUDIO_INPUT_DEVICE = 'AUDIO_INPUT_DEVICE'),
    (c.AUDIO_OUTPUT_DEVICE = 'AUDIO_OUTPUT_DEVICE'),
    (c.VOICE_PROCESSING = 'VOICE_PROCESSING'),
    (c.QOS = 'QOS'),
    (c.NATIVE_PING = 'NATIVE_PING'),
    (c.LEGACY_AUDIO_SUBSYSTEM = 'LEGACY_AUDIO_SUBSYSTEM'),
    (c.EXPERIMENTAL_AUDIO_SUBSYSTEM = 'EXPERIMENTAL_AUDIO_SUBSYSTEM'),
    (c.AUTOMATIC_AUDIO_SUBSYSTEM = 'AUTOMATIC_AUDIO_SUBSYSTEM'),
    (c.AUDIO_SUBSYSTEM_DEFERRED_SWITCH = 'AUDIO_SUBSYSTEM_DEFERRED_SWITCH'),
    (c.DEBUG_LOGGING = 'DEBUG_LOGGING'),
    (c.AUTOMATIC_VAD = 'AUTOMATIC_VAD'),
    (c.VOICE_PANNING = 'VOICE_PANNING'),
    (c.DIAGNOSTICS = 'DIAGNOSTICS'),
    (c.VIDEO = 'VIDEO'),
    (c.DESKTOP_CAPTURE = 'DESKTOP_CAPTURE'),
    (c.DESKTOP_CAPTURE_FORMAT = 'DESKTOP_CAPTURE_FORMAT'),
    (c.DESKTOP_CAPTURE_APPLICATIONS = 'DESKTOP_CAPTURE_APPLICATIONS'),
    (c.SOUNDSHARE = 'SOUNDSHARE'),
    (c.LOOPBACK = 'LOOPBACK'),
    (c.VIDEO_HOOK = 'VIDEO_HOOK'),
    (c.EXPERIMENTAL_SOUNDSHARE = 'EXPERIMENTAL_SOUNDSHARE'),
    (c.WUMPUS_VIDEO = 'WUMPUS_VIDEO'),
    (c.ELEVATED_HOOK = 'ELEVATED_HOOK'),
    (c.HYBRID_VIDEO = 'HYBRID_VIDEO'),
    (c.OPEN_H264 = 'OPEN_H264'),
    (c.EXPERIMENTAL_ENCODERS = 'EXPERIMENTAL_ENCODERS'),
    (c.REMOTE_LOCUS_NETWORK_CONTROL = 'REMOTE_LOCUS_NETWORK_CONTROL'),
    (c.SCREEN_PREVIEWS = 'SCREEN_PREVIEWS'),
    (c.WINDOW_PREVIEWS = 'WINDOW_PREVIEWS'),
    (c.AUDIO_DEBUG_STATE = 'AUDIO_DEBUG_STATE'),
    (c.AEC_DUMP = 'AEC_DUMP'),
    (c.DISABLE_VIDEO = 'DISABLE_VIDEO'),
    (c.CONNECTION_REPLAY = 'CONNECTION_REPLAY'),
    (c.SIMULCAST = 'SIMULCAST'),
    (c.RTC_REGION_RANKING = 'RTC_REGION_RANKING'),
    (c.DIRECT_VIDEO = 'DIRECT_VIDEO'),
    (c.ELECTRON_VIDEO = 'ELECTRON_VIDEO'),
    (c.MEDIAPIPE = 'MEDIAPIPE'),
    (c.FIXED_KEYFRAME_INTERVAL = 'FIXED_KEYFRAME_INTERVAL'),
    (c.SAMPLE_PLAYBACK = 'SAMPLE_PLAYBACK'),
    (c.FIRST_FRAME_CALLBACK = 'FIRST_FRAME_CALLBACK'),
    (c.REMOTE_USER_MULTI_STREAM = 'REMOTE_USER_MULTI_STREAM'),
    (c.NOISE_SUPPRESSION = 'NOISE_SUPPRESSION'),
    (c.NOISE_CANCELLATION = 'NOISE_CANCELLATION'),
    (c.AUTOMATIC_GAIN_CONTROL = 'AUTOMATIC_GAIN_CONTROL'),
    (c.CLIPS = 'CLIPS'),
    (c.SPEED_TEST = 'SPEED_TEST'),
    (c.IMAGE_QUALITY_MEASUREMENT = 'IMAGE_QUALITY_MEASUREMENT'),
    (c.AMD_EXPERIMENTAL_RATE_CONTROL = 'AMD_EXPERIMENTAL_RATE_CONTROL'),
    (c.GO_LIVE_HARDWARE = 'GO_LIVE_HARDWARE'),
    (c.SCREEN_CAPTURE_KIT = 'SCREEN_CAPTURE_KIT'),
    (c.CAPTURE_TIMEOUT_EXPERIMENTS = 'CAPTURE_TIMEOUT_EXPERIMENTS'),
    (c.SCREEN_SOUNDSHARE = 'SCREEN_SOUNDSHARE'),
    (c.NATIVE_SCREENSHARE_PICKER = 'NATIVE_SCREENSHARE_PICKER'),
    (c.MLS_PAIRWISE_FINGERPRINTS = 'MLS_PAIRWISE_FINGERPRINTS'),
    ((d = O || (O = {})).NATIVE = 'NATIVE'),
    (d.WEBRTC = 'WEBRTC'),
    (d.DUMMY = 'DUMMY'),
    ((f = D || (D = {})).LEGACY = 'legacy'),
    (f.STANDARD = 'standard'),
    (f.EXPERIMENTAL = 'experimental'),
    (f.AUTOMATIC = 'automatic'),
    ((_ = L || (L = {})).OPUS = 'opus'),
    (_.VP8 = 'VP8'),
    (_.VP9 = 'VP9'),
    (_.H264 = 'H264'),
    (_.RTX = 'rtx'),
    (_.TEST = 'TEST'),
    ((p = x || (x = {}))[(p.NONE = 0)] = 'NONE'),
    (p[(p.VOICE = 1)] = 'VOICE'),
    (p[(p.SOUNDSHARE = 2)] = 'SOUNDSHARE'),
    (p[(p.PRIORITY = 4)] = 'PRIORITY'),
    ((h = w || (w = {})).AUDIO = 'audio'),
    (h.VIDEO = 'video'),
    (h.SCREEN = 'screen'),
    (h.TEST = 'test'),
    ((m = M || (M = {})).PLAYING = 'playing'),
    (m.PAUSED = 'paused'),
    ((g = P || (P = {})).FIXED = 'fixed'),
    (g.SOURCE = 'source'),
    ((k || (k = {})).REMB = 'remb'),
    ((E = U || (U = {})).VIDEOTOOLBOX_RATE_CONTROL = 'videotoolbox_rate_control'),
    (E.SIGNAL_AV1 = 'signal_av1'),
    (E.SIGNAL_AV1_DECODE = 'signal_av1_decode'),
    (E.SIGNAL_AV1_HARDWARE_DECODE = 'signal_av1_hardware_decode'),
    (E.STREAMER_CLIP = 'streamer_clip'),
    (E.VIEWER_CLIP = 'viewer_clip'),
    (E.MUTE_BEFORE_PROCESSING = 'mute_before_processing'),
    (E.PTT_BEFORE_PROCESSING = 'ptt_before_processing'),
    (E.SKIP_ENCODE = 'skip_encode'),
    (E.RESET_DECODER_ON_ERRORS = 'reset_decoder_on_errors'),
    (E.SOFTWARE_FALLBACK_ON_ERRORS = 'software_fallback_on_errors'),
    (E.SOFTWARE_FALLBACK_ON_CONSECUTIVE_ERRORS = 'software_fallback_on_consecutive_errors'),
    ((v = B || (B = {}))[(v.AUTO = 1)] = 'AUTO'),
    (v[(v.FULL = 2)] = 'FULL'),
    ((b = G || (G = {}))[(b.CPU_OVERUSE = 1)] = 'CPU_OVERUSE'),
    (b[(b.FAILED = 2)] = 'FAILED'),
    (b[(b.VAD_CPU_OVERUSE = 3)] = 'VAD_CPU_OVERUSE'),
    (b[(b.INITIALIZED = 4)] = 'INITIALIZED');
