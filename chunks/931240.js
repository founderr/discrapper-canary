n.d(t, {
    Ii: function () {
        return g;
    },
    LX: function () {
        return _;
    },
    WJ: function () {
        return d;
    },
    aH: function () {
        return m;
    },
    mf: function () {
        return p;
    },
    nE: function () {
        return f;
    },
    nr: function () {
        return E;
    }
}),
    n(47120);
var r = n(544891),
    i = n(570140),
    a = n(479531),
    s = n(314897),
    o = n(594174),
    l = n(970606),
    u = n(308083),
    c = n(981631);
async function d(e) {
    let t = await r.tn.get({ url: c.ANM.GUILD_CLAN_DISCOVERY_INFO(e) });
    return (0, u.Gh)(t.body);
}
async function f(e, t, n) {
    try {
        null != e &&
            !0 === t &&
            (0, l.hx)({
                guildId: e,
                userId: s.default.getId(),
                source: n
            });
        let a = await r.tn.put({
            url: c.ANM.USER_SET_CLAN_IDENTITY,
            body: {
                identity_guild_id: e,
                identity_enabled: t
            }
        });
        i.Z.dispatch({
            type: 'CURRENT_USER_UPDATE',
            user: {
                ...o.default.getCurrentUser(),
                ...a.body
            }
        });
    } catch (e) {
        return;
    }
}
function _() {
    i.Z.dispatch({ type: 'CLAN_SETUP_RESET' });
}
function p(e, t) {
    i.Z.dispatch({
        type: 'CLAN_SETTINGS_UPDATE',
        guildId: e,
        updates: t
    });
}
let h = (e) => {
    var t, n, r, i, a, s;
    return {
        tag: e.tag,
        gameApplicationIds: new Set(null !== (r = e.game_application_ids) && void 0 !== r ? r : []),
        interests: new Set(null !== (i = e.search_terms) && void 0 !== i ? i : []),
        playstyle: e.play_style,
        description: e.description,
        wildcardDescriptors: e.wildcard_descriptors,
        verificationForm: {
            description: null !== (a = null === (t = e.verification_form) || void 0 === t ? void 0 : t.description) && void 0 !== a ? a : '',
            formFields: null !== (s = null === (n = e.verification_form) || void 0 === n ? void 0 : n.form_fields) && void 0 !== s ? s : [],
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
async function m(e) {
    i.Z.dispatch({ type: 'CLAN_SETTINGS_FETCH_START' });
    let t = await r.tn.get({ url: c.ANM.CLAN_SETTINGS(e) });
    i.Z.dispatch({
        type: 'CLAN_SETTINGS_FETCH_SUCCESS',
        guildId: e,
        settings: h(t.body)
    });
}
async function g(e, t) {
    i.Z.dispatch({
        type: 'CLAN_SETTINGS_SUBMIT',
        guildId: e
    });
    try {
        var n, s, o, l;
        let a = await r.tn.patch({
            url: c.ANM.CLAN_SETTINGS(e),
            body: {
                tag: t.tag,
                description: t.description,
                play_style: t.playstyle,
                search_terms: Array.from(null !== (s = t.interests) && void 0 !== s ? s : new Set()),
                game_application_ids: Array.from(null !== (o = t.gameApplicationIds) && void 0 !== o ? o : new Set()),
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
        return i.Z.dispatch({ type: 'CLAN_SETTINGS_SUBMIT_SUCCESS' }), a.body;
    } catch (e) {
        throw (
            (i.Z.dispatch({
                type: 'CLAN_SETTINGS_SUBMIT_ERROR',
                error: new a.Z(e)
            }),
            e)
        );
    }
}
async function E(e) {
    try {
        await r.tn.post({ url: c.ANM.DISABLE_CLAN(e) });
    } catch (e) {
        throw e;
    }
}
