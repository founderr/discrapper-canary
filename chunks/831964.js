n.d(t, {
    __: function () {
        return D;
    },
    dm: function () {
        return a;
    }
});
var s,
    a,
    r = n(91342),
    i = n(821721),
    o = n(290650),
    l = n(904505),
    c = n(845571),
    d = n(385874),
    _ = n(377679),
    u = n(230711),
    E = n(100527),
    T = n(906732),
    I = n(300284),
    R = n(526167),
    m = n(981631),
    g = n(526761),
    N = n(689938),
    C = n(509614),
    p = n(880511),
    f = n(985443),
    A = n(612253),
    S = n(832287),
    h = n(860528),
    M = n(872532),
    x = n(181708),
    b = n(158897),
    O = n(751125),
    v = n(386014),
    P = n(220046),
    L = n(371000),
    Z = n(825087);
((s = a || (a = {})).NEW_APP_STYLES = 'newAppStyles'), (s.REFERRAL_PROGRAM = 'referralProgram'), (s.SERVER_PROFILES = 'serverProfiles'), (s.SHOW_YOUR_STYLE = 'showYourStyle'), (s.YOUR_SPACE = 'yourSpace'), (s.EMOJIS = 'emojis'), (s.NO_LIMITS = 'noLimits');
let D = () => {
    let e = (0, R.rO)();
    return {
        emojis: {
            name: 'emojis',
            title: N.Z.Messages.PREMIUM_UPSELL_MOBILE_FEATURE_EMOJI_TITLE,
            description: N.Z.Messages.PREMIUM_MARKETING_EMOJI_PERK_TITLE,
            previewImage: C,
            videoUrl: e ? r.Z : x.Z,
            isCompact: !0
        },
        noLimits: {
            name: 'noLimits',
            title: N.Z.Messages.PREMIUM_MARKETING_BEST_OF_NITRO_NO_LIMITS_HEADER,
            description: N.Z.Messages.PREMIUM_MARKETING_BEST_OF_NITRO_NO_LIMITS_DESCRIPTION,
            previewImage: p,
            videoUrl: e ? o.Z : O.Z,
            isCompact: !0
        }
    };
};
t.ZP = (e) => {
    let { analyticsLocations: t } = (0, T.ZP)(E.Z.PREMIUM_MARKETING_BENTO_BOX),
        n = (0, I.Z)({
            scrollPosition: g.Y_.TRY_IT_OUT,
            analyticsLocations: t
        }),
        s = (0, R.rO)(),
        a = {
            referralProgram: {
                name: 'referralProgram',
                title: N.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_REFERRAL_PROGRAM_TITLE,
                description: N.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_REFERRAL_PROGRAM_SUBTITLE,
                descriptionCta: N.Z.Messages.MARKETING_PAGE_CTA_GET_NITRO,
                previewImage: h,
                videoUrl: s ? l.Z : v.Z
            },
            serverProfiles: {
                name: 'serverProfiles',
                title: N.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_SERVER_PROFILES_TITLE,
                description: N.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_SERVER_PRORFILES_SUBTITLE,
                descriptionCta: N.Z.Messages.MARKETING_PAGE_CTA_GET_NITRO,
                previewImage: M,
                videoUrl: s ? c.Z : P.Z
            },
            newAppStyles: {
                name: 'newAppStyles',
                title: N.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_NEW_APP_STYLES_TITLE,
                description: N.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_NEW_APP_STYLES_SUBTITLE,
                descriptionCta: N.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_NON_NITRO_NEW_APP_STYLES,
                previewImage: S,
                videoUrl: s ? i.Z : b.Z
            }
        },
        r = {
            showYourStyle: {
                name: 'showYourStyle',
                title: N.Z.Messages.MARKETING_PAGE_COMPARISON_TABLE_SHOW_OFF_YOUR_STYLE_SECTION_V2,
                description: N.Z.Messages.PREMIUM_MARKETING_BEST_OF_NITRO_PROFILE_STYLES_DESCRIPTION,
                descriptionCta: N.Z.Messages.TAKE_ME_THERE,
                previewImage: A,
                onClick: n,
                videoUrl: s ? d.Z : L.Z
            },
            yourSpace: {
                name: 'yourSpace',
                title: N.Z.Messages.PREMIUM_MARKETING_BEST_OF_NITRO_APP_STYLES_HEADER,
                description: N.Z.Messages.PREMIUM_MARKETING_BEST_OF_NITRO_APP_STYLES_DESCRIPTION,
                descriptionCta: N.Z.Messages.TAKE_ME_THERE,
                previewImage: f,
                onClick: () => {
                    u.Z.open(m.oAB.APPEARANCE, null, {
                        openWithoutBackstack: !0,
                        analyticsLocations: t
                    });
                },
                videoUrl: s ? _.Z : Z.Z
            }
        };
    return e ? r : a;
};
