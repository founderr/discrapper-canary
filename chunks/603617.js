t.r(n),
    t.d(n, {
        INVITE_OPTIONS_100_TIMES: function () {
            return s;
        },
        INVITE_OPTIONS_10_TIMES: function () {
            return c;
        },
        INVITE_OPTIONS_12_HOURS: function () {
            return N;
        },
        INVITE_OPTIONS_1_DAY: function () {
            return m;
        },
        INVITE_OPTIONS_1_HOUR: function () {
            return f;
        },
        INVITE_OPTIONS_25_TIMES: function () {
            return u;
        },
        INVITE_OPTIONS_30_MINUTES: function () {
            return I;
        },
        INVITE_OPTIONS_50_TIMES: function () {
            return d;
        },
        INVITE_OPTIONS_5_TIMES: function () {
            return l;
        },
        INVITE_OPTIONS_6_HOURS: function () {
            return T;
        },
        INVITE_OPTIONS_7_DAYS: function () {
            return g;
        },
        INVITE_OPTIONS_FOREVER: function () {
            return h;
        },
        INVITE_OPTIONS_ONCE: function () {
            return o;
        },
        INVITE_OPTIONS_UNLIMITED: function () {
            return r;
        },
        MAX_AGE_OPTIONS: function () {
            return E;
        },
        MAX_USES_OPTIONS: function () {
            return _;
        }
    });
var i = t(388032);
function a(e, n) {
    return {
        value: e,
        get label() {
            return n();
        }
    };
}
let r = a(0, () => i.intl.formatToPlainString(i.t['r/IcuL'], { maxUses: 0 })),
    o = a(1, () => i.intl.formatToPlainString(i.t['r/IcuL'], { maxUses: 1 })),
    l = a(5, () => i.intl.formatToPlainString(i.t['r/IcuL'], { maxUses: 5 })),
    c = a(10, () => i.intl.formatToPlainString(i.t['r/IcuL'], { maxUses: 10 })),
    u = a(25, () => i.intl.formatToPlainString(i.t['r/IcuL'], { maxUses: 25 })),
    d = a(50, () => i.intl.formatToPlainString(i.t['r/IcuL'], { maxUses: 50 })),
    s = a(100, () => i.intl.formatToPlainString(i.t['r/IcuL'], { maxUses: 100 })),
    _ = [r, o, l, c, u, d, s],
    I = a(1800, () => i.intl.formatToPlainString(i.t.iXLF9f, { minutes: 30 })),
    f = a(3600, () => i.intl.formatToPlainString(i.t.xCjYxM, { hours: 1 })),
    T = a(21600, () => i.intl.formatToPlainString(i.t.xCjYxM, { hours: 6 })),
    N = a(43200, () => i.intl.formatToPlainString(i.t.xCjYxM, { hours: 12 })),
    m = a(86400, () => i.intl.formatToPlainString(i.t.k2UNz8, { days: 1 })),
    g = a(604800, () => i.intl.formatToPlainString(i.t.k2UNz8, { days: 7 })),
    h = a(0, () => i.intl.string(i.t.PqEzn5)),
    E = [I, f, T, N, m, g, h];
