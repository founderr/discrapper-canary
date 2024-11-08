n.d(t, {
    L9: function () {
        return _;
    },
    LY: function () {
        return r;
    },
    ND: function () {
        return p;
    },
    WC: function () {
        return g;
    },
    aW: function () {
        return f;
    },
    af: function () {
        return b;
    },
    k0: function () {
        return S;
    },
    km: function () {
        return I;
    },
    no: function () {
        return h;
    },
    o6: function () {
        return v;
    },
    tI: function () {
        return a;
    },
    ws: function () {
        return i;
    },
    z8: function () {
        return E;
    }
}),
    n(411104);
var r,
    i,
    a,
    s,
    o,
    l,
    u = n(981631),
    c = n(474936),
    d = n(388032);
function f(e) {
    switch (e) {
        case 480:
            return 480;
        case 720:
            return 720;
        case 1080:
            return 1080;
        case 1440:
            return 1440;
        case 0:
            return 0;
        default:
            throw Error('Unknown resolution: '.concat(e));
    }
}
function _(e) {
    switch (e) {
        case 5:
            return 5;
        case 15:
            return 15;
        case 30:
            return 30;
        case 60:
            return 60;
        default:
            throw Error('Unknown frame rate: '.concat(e));
    }
}
((s = r || (r = {}))[(s.RESOLUTION_480 = 480)] = 'RESOLUTION_480'), (s[(s.RESOLUTION_720 = 720)] = 'RESOLUTION_720'), (s[(s.RESOLUTION_1080 = 1080)] = 'RESOLUTION_1080'), (s[(s.RESOLUTION_1440 = 1440)] = 'RESOLUTION_1440'), (s[(s.RESOLUTION_SOURCE = 0)] = 'RESOLUTION_SOURCE'), ((o = i || (i = {}))[(o.FPS_5 = 5)] = 'FPS_5'), (o[(o.FPS_15 = 15)] = 'FPS_15'), (o[(o.FPS_30 = 30)] = 'FPS_30'), (o[(o.FPS_60 = 60)] = 'FPS_60'), ((l = a || (a = {}))[(l.PRESET_VIDEO = 1)] = 'PRESET_VIDEO'), (l[(l.PRESET_DOCUMENTS = 2)] = 'PRESET_DOCUMENTS'), (l[(l.PRESET_CUSTOM = 3)] = 'PRESET_CUSTOM');
let h = {
        2: [
            {
                resolution: 0,
                fps: 15
            },
            {
                resolution: 0,
                fps: 5
            }
        ],
        1: [
            {
                resolution: 1440,
                fps: 60
            },
            {
                resolution: 1080,
                fps: 60
            },
            {
                resolution: 720,
                fps: 60
            },
            {
                resolution: 720,
                fps: 30
            }
        ],
        3: []
    },
    p = [
        {
            resolution: 0,
            fps: 60,
            quality: c.ys.HIGH_STREAMING_QUALITY
        },
        {
            resolution: 0,
            fps: 30,
            quality: c.ys.HIGH_STREAMING_QUALITY
        },
        {
            resolution: 0,
            fps: 15,
            quality: c.ys.HIGH_STREAMING_QUALITY
        },
        {
            resolution: 0,
            fps: 5,
            preset: 2
        },
        {
            resolution: 1440,
            fps: 60,
            guildPremiumTier: u.Eu4.TIER_2,
            quality: c.ys.MID_STREAMING_QUALITY
        },
        {
            resolution: 1440,
            fps: 30,
            guildPremiumTier: u.Eu4.TIER_2,
            quality: c.ys.MID_STREAMING_QUALITY
        },
        {
            resolution: 1440,
            fps: 15,
            guildPremiumTier: u.Eu4.TIER_2,
            quality: c.ys.MID_STREAMING_QUALITY
        },
        {
            resolution: 1080,
            fps: 60,
            guildPremiumTier: u.Eu4.TIER_2,
            quality: c.ys.MID_STREAMING_QUALITY
        },
        {
            resolution: 1080,
            fps: 30,
            guildPremiumTier: u.Eu4.TIER_2,
            quality: c.ys.MID_STREAMING_QUALITY
        },
        {
            resolution: 1080,
            fps: 15,
            guildPremiumTier: u.Eu4.TIER_2,
            quality: c.ys.MID_STREAMING_QUALITY
        },
        {
            resolution: 720,
            fps: 60,
            guildPremiumTier: u.Eu4.TIER_1,
            quality: c.ys.MID_STREAMING_QUALITY
        },
        {
            resolution: 720,
            fps: 30
        },
        {
            resolution: 720,
            fps: 15
        },
        {
            resolution: 720,
            fps: 5
        },
        {
            resolution: 480,
            fps: 60,
            guildPremiumTier: u.Eu4.TIER_1,
            quality: c.ys.MID_STREAMING_QUALITY
        },
        {
            resolution: 480,
            fps: 30
        },
        {
            resolution: 480,
            fps: 15
        },
        {
            resolution: 480,
            fps: 5
        }
    ];
function m(e, t) {
    return {
        value: e,
        get label() {
            return null != t ? t() : e;
        }
    };
}
let g = [m(720), m(1080), m(1440), m(0, () => d.intl.string(d.t.XjXqzs))],
    E = [m(720), m(1080), m(1440)],
    v = (e) => (0 === e ? d.intl.string(d.t.XjXqzs) : d.intl.formatToPlainString(d.t.TEOC0N, { resolution: e })),
    I = [m(480, () => v(480)), m(720, () => v(720)), m(1080, () => v(1080)), m(1440, () => v(1440)), m(0, () => v(0))],
    S = [m(15), m(30), m(60)],
    b = [m(15, () => d.intl.formatToPlainString(d.t['bW+JCQ'], { value: 15 })), m(30, () => d.intl.formatToPlainString(d.t['bW+JCQ'], { value: 30 })), m(60, () => d.intl.formatToPlainString(d.t['bW+JCQ'], { value: 60 }))];
