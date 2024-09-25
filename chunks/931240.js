n.d(t, {
    Ii: function () {
        return g;
    },
    LX: function () {
        return h;
    },
    WJ: function () {
        return E;
    },
    Zx: function () {
        return A;
    },
    _9: function () {
        return p;
    },
    aH: function () {
        return T;
    },
    mf: function () {
        return m;
    },
    nE: function () {
        return f;
    },
    nr: function () {
        return S;
    },
    sv: function () {
        return _;
    }
});
var r = n(47120);
var i = n(544891),
    a = n(570140),
    o = n(479531),
    s = n(314897),
    l = n(594174),
    u = n(970606),
    c = n(981631),
    d = n(976757);
async function _(e, t) {
    a.Z.dispatch({
        type: 'CLAN_SETUP_SUBMIT',
        guildId: e
    });
    try {
        var n, r, s, l;
        await i.tn.post({
            url: c.ANM.GUILD_CONVERT_TO_CLAN(e),
            body: {
                tag: t.tag,
                description: t.description,
                play_style: t.playstyle,
                search_terms: Array.from(null !== (r = t.interests) && void 0 !== r ? r : new Set()),
                game_application_ids: Array.from(null !== (s = t.gameApplicationIds) && void 0 !== s ? s : new Set()),
                verification_form: { form_fields: null !== (l = null === (n = t.verificationForm) || void 0 === n ? void 0 : n.formFields) && void 0 !== l ? l : [] },
                badge: t.badgeKind,
                badge_color_primary: t.badgePrimaryColor,
                badge_color_secondary: t.badgeSecondaryColor,
                banner: t.banner,
                brand_color_primary: t.brandPrimaryColor,
                brand_color_secondary: t.brandSecondaryColor,
                wildcard_descriptors: t.wildcardDescriptors
            }
        }),
            a.Z.dispatch({
                type: 'CLAN_SETUP_SUCCESS',
                guildId: e
            });
    } catch (t) {
        throw (
            (a.Z.dispatch({
                type: 'CLAN_SETUP_ERROR',
                guildId: e,
                error: new o.Z(t)
            }),
            t)
        );
    }
}
async function E(e) {
    let t = await i.tn.get({ url: c.ANM.GUILD_CLAN_DISCOVERY_INFO(e) });
    return (0, d.Gh)(t.body);
}
async function f(e, t, n) {
    try {
        null != e &&
            !0 === t &&
            (0, u.hx)({
                guildId: e,
                userId: s.default.getId(),
                source: n
            });
        let r = await i.tn.put({
            url: c.ANM.USER_SET_CLAN_IDENTITY,
            body: {
                identity_guild_id: e,
                identity_enabled: t
            }
        });
        a.Z.dispatch({
            type: 'CURRENT_USER_UPDATE',
            user: {
                ...l.default.getCurrentUser(),
                ...r.body
            }
        });
    } catch (e) {
        return;
    }
}
function h() {
    a.Z.dispatch({ type: 'CLAN_SETUP_RESET' });
}
function p(e, t) {
    a.Z.dispatch({
        type: 'CLAN_SETUP_UPDATE',
        guildId: e,
        updates: t
    });
}
function m(e, t) {
    a.Z.dispatch({
        type: 'CLAN_SETTINGS_UPDATE',
        guildId: e,
        updates: t
    });
}
let I = (e) => {
    var t, n, r, i, a, o;
    return {
        tag: e.tag,
        gameApplicationIds: new Set(null !== (r = e.game_application_ids) && void 0 !== r ? r : []),
        interests: new Set(null !== (i = e.search_terms) && void 0 !== i ? i : []),
        playstyle: e.play_style,
        description: e.description,
        wildcardDescriptors: e.wildcard_descriptors,
        verificationForm: {
            description: null !== (a = null === (t = e.verification_form) || void 0 === t ? void 0 : t.description) && void 0 !== a ? a : '',
            formFields: null !== (o = null === (n = e.verification_form) || void 0 === n ? void 0 : n.form_fields) && void 0 !== o ? o : [],
            version: ''
        },
        badgeKind: e.badge,
        badgePrimaryColor: e.badge_color_primary,
        badgeSecondaryColor: e.badge_color_secondary,
        banner: e.banner,
        brandPrimaryColor: e.brand_color_primary,
        brandSecondaryColor: e.brand_color_secondary
    };
};
async function T(e) {
    a.Z.dispatch({ type: 'CLAN_SETTINGS_FETCH_START' });
    let t = await i.tn.get({ url: c.ANM.CLAN_SETTINGS(e) });
    a.Z.dispatch({
        type: 'CLAN_SETTINGS_FETCH_SUCCESS',
        guildId: e,
        settings: I(t.body)
    });
}
async function g(e, t) {
    a.Z.dispatch({
        type: 'CLAN_SETTINGS_SUBMIT',
        guildId: e
    });
    try {
        var n, r, s, l;
        let o = await i.tn.patch({
            url: c.ANM.CLAN_SETTINGS(e),
            body: {
                tag: t.tag,
                description: t.description,
                play_style: t.playstyle,
                search_terms: Array.from(null !== (r = t.interests) && void 0 !== r ? r : new Set()),
                game_application_ids: Array.from(null !== (s = t.gameApplicationIds) && void 0 !== s ? s : new Set()),
                verification_form: { form_fields: null !== (l = null === (n = t.verificationForm) || void 0 === n ? void 0 : n.formFields) && void 0 !== l ? l : [] },
                badge: t.badgeKind,
                badge_color_primary: t.badgePrimaryColor,
                badge_color_secondary: t.badgeSecondaryColor,
                banner: t.banner,
                brand_color_primary: t.brandPrimaryColor,
                brand_color_secondary: t.brandSecondaryColor,
                wildcard_descriptors: t.wildcardDescriptors
            }
        });
        return a.Z.dispatch({ type: 'CLAN_SETTINGS_SUBMIT_SUCCESS' }), o.body;
    } catch (e) {
        throw (
            (a.Z.dispatch({
                type: 'CLAN_SETTINGS_SUBMIT_ERROR',
                error: new o.Z(e)
            }),
            e)
        );
    }
}
async function S(e) {
    try {
        await i.tn.post({ url: c.ANM.DISABLE_CLAN(e) });
    } catch (e) {
        throw e;
    }
}
async function A(e) {
    try {
        await i.tn.post({ url: c.ANM.JOIN_WUMPUS_FEEDBACK_SQUAD(e) });
    } catch (e) {
        throw e;
    }
}
