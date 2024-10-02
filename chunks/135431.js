n.d(t, {
    Eb: function () {
        return h;
    },
    Er: function () {
        return m;
    },
    LO: function () {
        return p;
    }
});
var r = n(315314);
var i = n(610138);
var a = n(216116);
var o = n(78328);
var s = n(815648);
var l = n(47120);
var u = n(873546),
    c = n(149765),
    d = n(69580),
    _ = n(626135),
    E = n(49012),
    f = n(981631);
function h(e) {
    let { customInstallUrl: t, installParams: n, integrationTypesConfig: r } = e;
    return null != t || null != n || (null != r && Object.values(r).some((e) => (null == e ? void 0 : e.oauth2_install_params) != null || (null == e ? void 0 : e.oauth2InstallParams) != null));
}
function p(e) {
    let { applicationId: t, customInstallUrl: n, installParams: r, integrationTypesConfig: i, guildId: a, channelId: o, disableGuildSelect: s, source: l, oauth2Callback: h } = e;
    if (null != n) {
        _.default.track(f.rMx.APPLICATION_ADD_TO_SERVER_CLICKED, {
            application_id: t,
            guild_id: a,
            auth_type: 'custom_url',
            source: l,
            device_platform: u.tq ? 'mobile_web' : 'desktop_web'
        }),
            (0, E.q)({ href: n });
        return;
    }
    if (null != i && Object.values(i).some((e) => (null == e ? void 0 : e.oauth2_install_params) != null || (null == e ? void 0 : e.oauth2InstallParams) != null)) {
        _.default.track(f.rMx.APPLICATION_ADD_TO_SERVER_CLICKED, {
            application_id: t,
            guild_id: a,
            auth_type: 'in_app',
            source: l,
            device_platform: u.tq ? 'mobile_web' : 'desktop_web'
        }),
            (0, d.openOAuth2Modal)({
                clientId: t,
                guildId: a,
                channelId: o,
                disableGuildSelect: s,
                callback: h
            });
        return;
    }
    null != r &&
        (_.default.track(f.rMx.APPLICATION_ADD_TO_SERVER_CLICKED, {
            application_id: t,
            guild_id: a,
            auth_type: 'in_app',
            source: l,
            device_platform: u.tq ? 'mobile_web' : 'desktop_web'
        }),
        (0, d.openOAuth2Modal)({
            clientId: t,
            guildId: a,
            channelId: o,
            disableGuildSelect: s,
            scopes: r.scopes,
            permissions: null != r.permissions ? c.vB(r.permissions) : void 0,
            callback: h
        }));
}
function m(e) {
    let { applicationId: t, customInstallUrl: n, installParams: r, integrationTypesConfig: i } = e;
    if (null != n) return null;
    if (null != i && Object.values(i).some((e) => (null == e ? void 0 : e.oauth2_install_params) != null || (null == e ? void 0 : e.oauth2InstallParams) != null)) {
        let e = new URL(f.Z5c.OAUTH2_AUTHORIZE, window.location.origin);
        return e.searchParams.set('client_id', t), e.toString();
    }
    if (null != r) {
        let e = new URL(f.Z5c.OAUTH2_AUTHORIZE, window.location.origin);
        return e.searchParams.set('client_id', t), e.searchParams.set('scope', r.scopes.join(' ')), null != r.permissions && e.searchParams.set('permissions', r.permissions), e.toString();
    }
}
