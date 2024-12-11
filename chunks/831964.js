n.d(t, {
    __: function () {
        return w;
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
    d = n(63063),
    u = n(981631),
    m = n(526761),
    g = n(388032),
    f = n(509614),
    p = n(880511),
    _ = n(985443),
    h = n(612253),
    E = n(832287),
    b = n(872532),
    x = n(91342),
    C = n(181708),
    T = n(821721),
    v = n(158897),
    N = n(290650),
    I = n(751125),
    S = n(904505),
    R = n(712626),
    A = n(386014),
    j = n(845571),
    P = n(220046),
    Z = n(385874),
    M = n(371000),
    B = n(377679),
    O = n(825087);
((i = r || (r = {})).NEW_APP_STYLES = 'newAppStyles'), (i.REFERRAL_PROGRAM = 'referralProgram'), (i.SERVER_PROFILES = 'serverProfiles'), (i.SHOW_YOUR_STYLE = 'showYourStyle'), (i.YOUR_SPACE = 'yourSpace'), (i.EMOJIS = 'emojis'), (i.NO_LIMITS = 'noLimits');
let w = () => {
    let e = (0, c.rO)();
    return {
        emojis: {
            name: 'emojis',
            title: g.intl.string(g.t.zY5PPT),
            description: g.intl.string(g.t.R5Xag4),
            previewImage: f,
            videoUrl: e ? x.Z : C.Z,
            isCompact: !0
        },
        noLimits: {
            name: 'noLimits',
            title: g.intl.string(g.t['6b3ydH']),
            description: g.intl.string(g.t['Y+IJys']),
            previewImage: p,
            videoUrl: e ? N.Z : I.Z,
            isCompact: !0
        }
    };
};
t.ZP = (e) => {
    let { analyticsLocations: t } = (0, l.ZP)(s.Z.PREMIUM_MARKETING_BENTO_BOX),
        n = (0, o.Z)({
            scrollPosition: m.Y_.TRY_IT_OUT,
            analyticsLocations: t
        }),
        i = () => {
            a.Z.open(u.oAB.APPEARANCE, null, {
                openWithoutBackstack: !0,
                analyticsLocations: t
            });
        },
        r = (0, c.rO)(),
        f = d.Z.getArticleURL(u.BhN.REFERRAL_PROGRAM),
        p = {
            serverProfiles: {
                name: 'serverProfiles',
                title: g.intl.string(g.t.I9TYMj),
                description: g.intl.string(g.t.HMSHeH),
                descriptionCta: g.intl.string(g.t.jVcuVV),
                onClick: n,
                previewImage: b,
                videoUrl: r ? j.Z : P.Z
            },
            referralProgram: {
                name: 'referralProgram',
                title: g.intl.string(g.t.tPY4o6),
                description: g.intl.format(g.t.jRPQUF, { learnMoreLink: f }),
                previewImage: R.Z,
                videoUrl: r ? S.Z : A.Z
            },
            newAppStyles: {
                name: 'newAppStyles',
                title: g.intl.string(g.t.XQCSrq),
                description: g.intl.string(g.t.HC5wVV),
                descriptionCta: g.intl.string(g.t.jVcuVV),
                onClick: i,
                previewImage: E,
                videoUrl: r ? T.Z : v.Z
            }
        },
        x = {
            showYourStyle: {
                name: 'showYourStyle',
                title: g.intl.string(g.t.Ij3Zmp),
                description: g.intl.string(g.t.UsOUxc),
                descriptionCta: g.intl.string(g.t.jVcuVV),
                previewImage: h,
                onClick: n,
                videoUrl: r ? Z.Z : M.Z
            },
            yourSpace: {
                name: 'yourSpace',
                title: g.intl.string(g.t.Wme3nZ),
                description: g.intl.string(g.t['/aAIqa']),
                descriptionCta: g.intl.string(g.t.jVcuVV),
                previewImage: _,
                onClick: i,
                videoUrl: r ? B.Z : O.Z
            }
        };
    return e ? x : p;
};
