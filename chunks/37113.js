n.d(t, {
    L9: function () {
        return d;
    },
    LY: function () {
        return r;
    },
    ND: function () {
        return E;
    },
    WC: function () {
        return h;
    },
    aW: function () {
        return c;
    },
    af: function () {
        return g;
    },
    k0: function () {
        return T;
    },
    km: function () {
        return I;
    },
    no: function () {
        return _;
    },
    o6: function () {
        return m;
    },
    tI: function () {
        return a;
    },
    ws: function () {
        return i;
    },
    z8: function () {
        return p;
    }
});
var r,
    i,
    a,
    o = n(411104);
var s = n(981631),
    l = n(474936),
    u = n(689938);
function c(e) {
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
function d(e) {
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
!(function (e) {
    (e[(e.RESOLUTION_480 = 480)] = 'RESOLUTION_480'), (e[(e.RESOLUTION_720 = 720)] = 'RESOLUTION_720'), (e[(e.RESOLUTION_1080 = 1080)] = 'RESOLUTION_1080'), (e[(e.RESOLUTION_1440 = 1440)] = 'RESOLUTION_1440'), (e[(e.RESOLUTION_SOURCE = 0)] = 'RESOLUTION_SOURCE');
})(r || (r = {})),
    !(function (e) {
        (e[(e.FPS_5 = 5)] = 'FPS_5'), (e[(e.FPS_15 = 15)] = 'FPS_15'), (e[(e.FPS_30 = 30)] = 'FPS_30'), (e[(e.FPS_60 = 60)] = 'FPS_60');
    })(i || (i = {})),
    !(function (e) {
        (e[(e.PRESET_VIDEO = 1)] = 'PRESET_VIDEO'), (e[(e.PRESET_DOCUMENTS = 2)] = 'PRESET_DOCUMENTS'), (e[(e.PRESET_CUSTOM = 3)] = 'PRESET_CUSTOM');
    })(a || (a = {}));
let _ = {
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
    E = [
        {
            resolution: 0,
            fps: 60,
            quality: l.ys.HIGH_STREAMING_QUALITY
        },
        {
            resolution: 0,
            fps: 30,
            quality: l.ys.HIGH_STREAMING_QUALITY
        },
        {
            resolution: 0,
            fps: 15,
            quality: l.ys.HIGH_STREAMING_QUALITY
        },
        {
            resolution: 0,
            fps: 5,
            preset: 2
        },
        {
            resolution: 1440,
            fps: 60,
            guildPremiumTier: s.Eu4.TIER_2,
            quality: l.ys.MID_STREAMING_QUALITY
        },
        {
            resolution: 1440,
            fps: 30,
            guildPremiumTier: s.Eu4.TIER_2,
            quality: l.ys.MID_STREAMING_QUALITY
        },
        {
            resolution: 1440,
            fps: 15,
            guildPremiumTier: s.Eu4.TIER_2,
            quality: l.ys.MID_STREAMING_QUALITY
        },
        {
            resolution: 1080,
            fps: 60,
            guildPremiumTier: s.Eu4.TIER_2,
            quality: l.ys.MID_STREAMING_QUALITY
        },
        {
            resolution: 1080,
            fps: 30,
            guildPremiumTier: s.Eu4.TIER_2,
            quality: l.ys.MID_STREAMING_QUALITY
        },
        {
            resolution: 1080,
            fps: 15,
            guildPremiumTier: s.Eu4.TIER_2,
            quality: l.ys.MID_STREAMING_QUALITY
        },
        {
            resolution: 720,
            fps: 60,
            guildPremiumTier: s.Eu4.TIER_1,
            quality: l.ys.MID_STREAMING_QUALITY
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
            guildPremiumTier: s.Eu4.TIER_1,
            quality: l.ys.MID_STREAMING_QUALITY
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
function f(e, t) {
    return {
        value: e,
        get label() {
            return null != t ? t() : e;
        }
    };
}
let h = [f(720), f(1080), f(1440), f(0, () => u.Z.Messages.SCREENSHARE_SOURCE)],
    p = [f(720), f(1080), f(1440)],
    m = (e) => (0 === e ? u.Z.Messages.SCREENSHARE_SOURCE : u.Z.Messages.SCREENSHARE_RESOLUTION_ABBREVIATED.format({ resolution: e })),
    I = [f(480, () => m(480)), f(720, () => m(720)), f(1080, () => m(1080)), f(1440, () => m(1440)), f(0, () => m(0))],
    T = [f(15), f(30), f(60)],
    g = [f(15, () => u.Z.Messages.STREAM_FPS_OPTION.format({ value: 15 })), f(30, () => u.Z.Messages.STREAM_FPS_OPTION.format({ value: 30 })), f(60, () => u.Z.Messages.STREAM_FPS_OPTION.format({ value: 60 }))];
