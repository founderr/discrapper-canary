n.d(t, {
    VF: function () {
        return L;
    },
    WW: function () {
        return R;
    },
    XO: function () {
        return N;
    },
    Yp: function () {
        return A;
    },
    hC: function () {
        return D;
    },
    o9: function () {
        return O;
    },
    zC: function () {
        return C;
    }
});
var r = n(692547),
    i = n(481060),
    a = n(15385),
    s = n(709586),
    o = n(123245),
    l = n(981631);
n(474936);
var u = n(388032);
let c = () => ({
        color: r.Z.unsafe_rawColors.PREMIUM_PERK_GREEN.css,
        icon: i.ImagesIcon,
        description: u.intl.string(u.t.iGuEFR)
    }),
    d = function () {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : r.Z.unsafe_rawColors.PREMIUM_PERK_ORANGE.css;
        return {
            color: e,
            icon: i.GifIcon,
            description: u.intl.string(u.t['94l3Ul'])
        };
    },
    f = () => ({
        color: r.Z.unsafe_rawColors.PREMIUM_PERK_GREEN.css,
        icon: i.ImagesIcon,
        description: u.intl.string(u.t['n/HqCg'])
    }),
    _ = () => ({
        color: r.Z.unsafe_rawColors.PREMIUM_PERK_GREEN.css,
        icon: i.GifIcon,
        description: u.intl.string(u.t.AU0zcX)
    }),
    p = () => ({
        color: r.Z.unsafe_rawColors.PREMIUM_PERK_ORANGE.css,
        icon: i.ShieldUserIcon,
        description: u.intl.string(u.t.zZe94u)
    }),
    h = function () {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : r.Z.unsafe_rawColors.PREMIUM_PERK_PURPLE.css;
        return {
            color: e,
            icon: i.StickerIcon,
            description: u.intl.string(u.t.ZwOSdn)
        };
    },
    m = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : r.Z.unsafe_rawColors.PREMIUM_PERK_PURPLE.css,
            n = 0,
            a = 0;
        switch (e) {
            case l.Eu4.TIER_1:
                (n = 15), (a = 100);
                break;
            case l.Eu4.TIER_2:
                (n = 30), (a = 150);
                break;
            case l.Eu4.TIER_3:
                (n = 60), (a = 250);
        }
        return {
            color: t,
            icon: i.StickerIcon,
            description: u.intl.formatToPlainString(u.t['12vFYG'], {
                numStickers: n,
                numEmojis: a
            })
        };
    },
    g = () => ({
        color: r.Z.unsafe_rawColors.PREMIUM_PERK_GOLD.css,
        icon: i.StarIcon,
        description: u.intl.string(u.t['ThRK/v'])
    }),
    E = () => ({
        icon: a.Z,
        description: u.intl.string(u.t.a7LWeH)
    }),
    v = () => ({
        icon: s.Z,
        color: r.Z.unsafe_rawColors.PREMIUM_PERK_PINK.css,
        description: u.intl.string(u.t.QouJkp)
    }),
    b = () => ({
        icon: i.ShieldUserIcon,
        color: r.Z.unsafe_rawColors.PREMIUM_PERK_YELLOW.css,
        description: u.intl.string(u.t['3MpIx8'])
    }),
    I = () => ({
        color: r.Z.unsafe_rawColors.PREMIUM_PERK_BLUE.css,
        icon: i.ReactionIcon,
        description: u.intl.string(u.t.gAeHJS)
    }),
    T = function () {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : u.intl.string(u.t.SQV8g4);
        return {
            color: r.Z.unsafe_rawColors.PREMIUM_PERK_BLUE.css,
            icon: i.ReactionIcon,
            description: e
        };
    },
    S = () => ({
        color: r.Z.unsafe_rawColors.PREMIUM_PERK_PURPLE.css,
        icon: o.Z,
        description: u.intl.string(u.t.Tm40TU)
    }),
    y = function () {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : r.Z.unsafe_rawColors.PREMIUM_PERK_GREEN.css;
        return {
            color: e,
            icon: i.ScreenArrowIcon,
            description: u.intl.string(u.t.oIKhwc)
        };
    };
function A() {
    return [p(), f(), h(), T()];
}
function N() {
    return [p(), m(l.Eu4.TIER_2), y(), T()];
}
function C() {
    return [m(l.Eu4.TIER_3, r.Z.unsafe_rawColors.PREMIUM_PERK_GREEN.css), S(), g(), T()];
}
function R() {
    return [g(), _(), m(l.Eu4.TIER_3), T()];
}
function O() {
    return [c(), h(), d(), T()];
}
function D() {
    return [h(), T()];
}
function L() {
    return [v(), b(), E(), I()];
}
