I.r(t),
    I.d(t, {
        INVITE_OPTIONS_100_TIMES: function () {
            return N;
        },
        INVITE_OPTIONS_10_TIMES: function () {
            return i;
        },
        INVITE_OPTIONS_12_HOURS: function () {
            return l;
        },
        INVITE_OPTIONS_1_DAY: function () {
            return f;
        },
        INVITE_OPTIONS_1_HOUR: function () {
            return o;
        },
        INVITE_OPTIONS_25_TIMES: function () {
            return a;
        },
        INVITE_OPTIONS_30_MINUTES: function () {
            return O;
        },
        INVITE_OPTIONS_50_TIMES: function () {
            return E;
        },
        INVITE_OPTIONS_5_TIMES: function () {
            return u;
        },
        INVITE_OPTIONS_6_HOURS: function () {
            return T;
        },
        INVITE_OPTIONS_7_DAYS: function () {
            return c;
        },
        INVITE_OPTIONS_FOREVER: function () {
            return P;
        },
        INVITE_OPTIONS_ONCE: function () {
            return s;
        },
        INVITE_OPTIONS_UNLIMITED: function () {
            return r;
        },
        MAX_AGE_OPTIONS: function () {
            return m;
        },
        MAX_USES_OPTIONS: function () {
            return S;
        }
    });
var n = I(689938);
function _(e, t) {
    return {
        value: e,
        get label() {
            return t();
        }
    };
}
let r = _(0, () => n.Z.Messages.MAX_USES.format({ maxUses: 0 })),
    s = _(1, () => n.Z.Messages.MAX_USES.format({ maxUses: 1 })),
    u = _(5, () => n.Z.Messages.MAX_USES.format({ maxUses: 5 })),
    i = _(10, () => n.Z.Messages.MAX_USES.format({ maxUses: 10 })),
    a = _(25, () => n.Z.Messages.MAX_USES.format({ maxUses: 25 })),
    E = _(50, () => n.Z.Messages.MAX_USES.format({ maxUses: 50 })),
    N = _(100, () => n.Z.Messages.MAX_USES.format({ maxUses: 100 })),
    S = [r, s, u, i, a, E, N],
    O = _(1800, () => n.Z.Messages.DURATION_MINUTES.format({ minutes: 30 })),
    o = _(3600, () => n.Z.Messages.DURATION_HOURS.format({ hours: 1 })),
    T = _(21600, () => n.Z.Messages.DURATION_HOURS.format({ hours: 6 })),
    l = _(43200, () => n.Z.Messages.DURATION_HOURS.format({ hours: 12 })),
    f = _(86400, () => n.Z.Messages.DURATION_DAYS.format({ days: 1 })),
    c = _(604800, () => n.Z.Messages.DURATION_DAYS.format({ days: 7 })),
    P = _(0, () => n.Z.Messages.MAX_AGE_NEVER),
    m = [O, o, T, l, f, c, P];
