t.r(n),
    t.d(n, {
        INVITE_OPTIONS_100_TIMES: function () {
            return d;
        },
        INVITE_OPTIONS_10_TIMES: function () {
            return _;
        },
        INVITE_OPTIONS_12_HOURS: function () {
            return S;
        },
        INVITE_OPTIONS_1_DAY: function () {
            return N;
        },
        INVITE_OPTIONS_1_HOUR: function () {
            return s;
        },
        INVITE_OPTIONS_25_TIMES: function () {
            return I;
        },
        INVITE_OPTIONS_30_MINUTES: function () {
            return f;
        },
        INVITE_OPTIONS_50_TIMES: function () {
            return l;
        },
        INVITE_OPTIONS_5_TIMES: function () {
            return c;
        },
        INVITE_OPTIONS_6_HOURS: function () {
            return T;
        },
        INVITE_OPTIONS_7_DAYS: function () {
            return O;
        },
        INVITE_OPTIONS_FOREVER: function () {
            return m;
        },
        INVITE_OPTIONS_ONCE: function () {
            return o;
        },
        INVITE_OPTIONS_UNLIMITED: function () {
            return i;
        },
        MAX_AGE_OPTIONS: function () {
            return p;
        },
        MAX_USES_OPTIONS: function () {
            return u;
        }
    });
var a = t(388032);
function r(e, n) {
    return {
        value: e,
        get label() {
            return n();
        }
    };
}
let i = r(0, () => a.intl.formatToPlainString(a.t['r/IcuL'], { maxUses: 0 })),
    o = r(1, () => a.intl.formatToPlainString(a.t['r/IcuL'], { maxUses: 1 })),
    c = r(5, () => a.intl.formatToPlainString(a.t['r/IcuL'], { maxUses: 5 })),
    _ = r(10, () => a.intl.formatToPlainString(a.t['r/IcuL'], { maxUses: 10 })),
    I = r(25, () => a.intl.formatToPlainString(a.t['r/IcuL'], { maxUses: 25 })),
    l = r(50, () => a.intl.formatToPlainString(a.t['r/IcuL'], { maxUses: 50 })),
    d = r(100, () => a.intl.formatToPlainString(a.t['r/IcuL'], { maxUses: 100 })),
    u = [i, o, c, _, I, l, d],
    f = r(1800, () => a.intl.formatToPlainString(a.t.iXLF9f, { minutes: 30 })),
    s = r(3600, () => a.intl.formatToPlainString(a.t.xCjYxM, { hours: 1 })),
    T = r(21600, () => a.intl.formatToPlainString(a.t.xCjYxM, { hours: 6 })),
    S = r(43200, () => a.intl.formatToPlainString(a.t.xCjYxM, { hours: 12 })),
    N = r(86400, () => a.intl.formatToPlainString(a.t.k2UNz8, { days: 1 })),
    O = r(604800, () => a.intl.formatToPlainString(a.t.k2UNz8, { days: 7 })),
    m = r(0, () => a.intl.string(a.t.PqEzn5)),
    p = [f, s, T, S, N, O, m];
