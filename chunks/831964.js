n.d(t, {
    __: function () {
        return B;
    },
    dm: function () {
        return r;
    }
});
var i,
    r,
    a = n(230711),
    s = n(100527),
    l = n(906732),
    o = n(300284),
    c = n(526167),
    d = n(981631),
    u = n(526761),
    g = n(388032),
    m = n(509614),
    f = n(880511),
    _ = n(985443),
    p = n(612253),
    h = n(832287),
    E = n(860528),
    b = n(872532),
    x = n(91342),
    C = n(181708),
    v = n(821721),
    T = n(158897),
    N = n(290650),
    I = n(751125),
    S = n(904505),
    R = n(386014),
    A = n(845571),
    j = n(220046),
    P = n(385874),
    Z = n(371000),
    O = n(377679),
    M = n(825087);
((i = r || (r = {})).NEW_APP_STYLES = 'newAppStyles'), (i.REFERRAL_PROGRAM = 'referralProgram'), (i.SERVER_PROFILES = 'serverProfiles'), (i.SHOW_YOUR_STYLE = 'showYourStyle'), (i.YOUR_SPACE = 'yourSpace'), (i.EMOJIS = 'emojis'), (i.NO_LIMITS = 'noLimits');
let B = () => {
    let e = (0, c.rO)();
    return {
        emojis: {
            name: 'emojis',
            title: g.intl.string(g.t.zY5PPT),
            description: g.intl.string(g.t.R5Xag4),
            previewImage: m,
            videoUrl: e ? x.Z : C.Z,
            isCompact: !0
        },
        noLimits: {
            name: 'noLimits',
            title: g.intl.string(g.t['6b3ydH']),
            description: g.intl.string(g.t['Y+IJys']),
            previewImage: f,
            videoUrl: e ? N.Z : I.Z,
            isCompact: !0
        }
    };
};
t.ZP = (e) => {
    let { analyticsLocations: t } = (0, l.ZP)(s.Z.PREMIUM_MARKETING_BENTO_BOX),
        n = (0, o.Z)({
            scrollPosition: u.Y_.TRY_IT_OUT,
            analyticsLocations: t
        }),
        i = (0, c.rO)(),
        r = {
            referralProgram: {
                name: 'referralProgram',
                title: g.intl.string(g.t.tPY4o6),
                description: g.intl.string(g.t.JY0grK),
                descriptionCta: g.intl.string(g.t.JST6jo),
                previewImage: E,
                videoUrl: i ? S.Z : R.Z
            },
            serverProfiles: {
                name: 'serverProfiles',
                title: g.intl.string(g.t.I9TYMj),
                description: g.intl.string(g.t.HMSHeH),
                descriptionCta: g.intl.string(g.t.JST6jo),
                previewImage: b,
                videoUrl: i ? A.Z : j.Z
            },
            newAppStyles: {
                name: 'newAppStyles',
                title: g.intl.string(g.t.XQCSrq),
                description: g.intl.string(g.t.HC5wVV),
                descriptionCta: g.intl.string(g.t.d8o6lZ),
                previewImage: h,
                videoUrl: i ? v.Z : T.Z
            }
        },
        m = {
            showYourStyle: {
                name: 'showYourStyle',
                title: g.intl.string(g.t.Ij3Zmp),
                description: g.intl.string(g.t.UsOUxc),
                descriptionCta: g.intl.string(g.t.jVcuVV),
                previewImage: p,
                onClick: n,
                videoUrl: i ? P.Z : Z.Z
            },
            yourSpace: {
                name: 'yourSpace',
                title: g.intl.string(g.t.Wme3nZ),
                description: g.intl.string(g.t['/aAIqa']),
                descriptionCta: g.intl.string(g.t.jVcuVV),
                previewImage: _,
                onClick: () => {
                    a.Z.open(d.oAB.APPEARANCE, null, {
                        openWithoutBackstack: !0,
                        analyticsLocations: t
                    });
                },
                videoUrl: i ? O.Z : M.Z
            }
        };
    return e ? m : r;
};
