var i = n(200651);
n(192379);
var r = n(481060),
    l = n(570140),
    a = n(813615),
    s = n(812206),
    o = n(69580),
    c = n(808506),
    d = n(358085),
    u = n(998502),
    h = n(996106),
    m = n(703912),
    p = n(852926),
    g = n(981631);
t.Z = (0, m.Z)(
    (e) => {
        var t;
        let { clientId: n, authorizations: c, scopes: d, parsedPermissions: u, responseType: m, redirectUri: f, codeChallenge: _, codeChallengeMethod: E, state: I, guildId: C, channelId: v, prompt: S, disableGuildSelect: N, disclosures: T, integrationType: x, pid: b } = e,
            A = 'OAuth2Authorize_'.concat(n, '_').concat(C, '_').concat(v),
            Z = null != x ? (null == c ? void 0 : c.get(x)) : void 0,
            y = null !== (t = null == Z ? void 0 : Z.application) && void 0 !== t ? t : s.Z.getApplication(n);
        return new Promise((e, t) => {
            let s = (0, p.jU)(b),
                Z = (i) => {
                    let { clientId: r, location: a } = i;
                    if (null == r || r === n) s.lock(), l.Z.unsubscribe('OVERLAY_OAUTH2_AUTHORIZE_MODAL_CLOSE', Z), null != location ? e(a) : t(new h.Z({ errorCode: g.lTL.OAUTH2_ERROR }, 'User cancelled authorization'));
                };
            if (s.context === g.IlC.OVERLAY) {
                l.Z.subscribe('OVERLAY_OAUTH2_AUTHORIZE_MODAL_CLOSE', Z),
                    l.Z.dispatch({
                        type: 'OVERLAY_OAUTH2_AUTHORIZE_MODAL_OPEN',
                        clientId: n,
                        authorizeProps: {
                            authorizations: c,
                            clientId: n,
                            scopes: null != d ? d : [],
                            disclosures: null != T ? T : [],
                            responseType: m,
                            redirectUri: f,
                            codeChallenge: _,
                            codeChallengeMethod: E,
                            state: I,
                            permissions: u.toString(),
                            guildId: C,
                            channelId: v,
                            prompt: S,
                            disableGuildSelect: 'boolean' == typeof N ? N : 'true' === N,
                            integrationType: x
                        }
                    });
                return;
            }
            (0, r.openModal)(
                (e) =>
                    (0, i.jsx)(o.OAuth2AuthorizeModal, {
                        ...e,
                        authorizations: c,
                        clientId: n,
                        scopes: null != d ? d : [],
                        disclosures: null != T ? T : [],
                        callback: Z,
                        responseType: m,
                        redirectUri: f,
                        codeChallenge: _,
                        codeChallengeMethod: E,
                        state: I,
                        permissions: u,
                        guildId: C,
                        channelId: v,
                        prompt: S,
                        disableGuildSelect: 'boolean' == typeof N ? N : 'true' === N,
                        integrationType: x
                    }),
                {
                    modalKey: A,
                    onCloseRequest: () => {
                        (0, r.closeModal)(A), t(new h.Z({ errorCode: g.lTL.OAUTH2_ERROR }, 'User cancelled authorization'));
                    }
                },
                null != y && (0, a.Z)(y, v) ? r.POPOUT_MODAL_CONTEXT : r.DEFAULT_MODAL_CONTEXT
            );
        });
    },
    function (e, t, n) {
        if (c.Z.isReady(null != n ? n : 0) || !d.isPlatformEmbedded) return;
        let i = (0, a.Z)(e, t) ? g.KJ3.CHANNEL_CALL_POPOUT : null;
        (0, d.isWindows)() ? u.ZP.minimize(i) : u.ZP.restore(i), u.ZP.focus(i);
    }
);
