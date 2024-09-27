var i = n(735250);
n(470079);
var a = n(481060),
    s = n(570140),
    r = n(813615),
    l = n(812206),
    o = n(69580),
    c = n(808506),
    d = n(358085),
    u = n(998502),
    _ = n(996106),
    h = n(703912),
    E = n(852926),
    m = n(981631);
t.Z = (0, h.Z)(
    (e) => {
        var t;
        let { clientId: n, authorizations: c, scopes: d, parsedPermissions: u, responseType: h, redirectUri: I, codeChallenge: g, codeChallengeMethod: p, state: T, guildId: f, channelId: S, prompt: C, disableGuildSelect: N, disclosures: A, integrationType: v, pid: Z } = e,
            L = 'OAuth2Authorize_'.concat(n, '_').concat(f, '_').concat(S),
            R = null != v ? (null == c ? void 0 : c.get(v)) : void 0,
            O = null !== (t = null == R ? void 0 : R.application) && void 0 !== t ? t : l.Z.getApplication(n);
        return new Promise((e, t) => {
            let l = (0, E.jU)(Z),
                R = (i) => {
                    let { clientId: a, location: r } = i;
                    if (null == a || a === n) l.lock(), s.Z.unsubscribe('OVERLAY_OAUTH2_AUTHORIZE_MODAL_CLOSE', R), null != location ? e(r) : t(new _.Z({ errorCode: m.lTL.OAUTH2_ERROR }, 'User cancelled authorization'));
                };
            if (l.context === m.IlC.OVERLAY) {
                s.Z.subscribe('OVERLAY_OAUTH2_AUTHORIZE_MODAL_CLOSE', R),
                    s.Z.dispatch({
                        type: 'OVERLAY_OAUTH2_AUTHORIZE_MODAL_OPEN',
                        clientId: n,
                        authorizeProps: {
                            authorizations: c,
                            clientId: n,
                            scopes: null != d ? d : [],
                            disclosures: null != A ? A : [],
                            responseType: h,
                            redirectUri: I,
                            codeChallenge: g,
                            codeChallengeMethod: p,
                            state: T,
                            permissions: u.toString(),
                            guildId: f,
                            channelId: S,
                            prompt: C,
                            disableGuildSelect: 'boolean' == typeof N ? N : 'true' === N,
                            integrationType: v
                        }
                    });
                return;
            }
            (0, a.openModal)(
                (e) =>
                    (0, i.jsx)(o.OAuth2AuthorizeModal, {
                        ...e,
                        authorizations: c,
                        clientId: n,
                        scopes: null != d ? d : [],
                        disclosures: null != A ? A : [],
                        callback: R,
                        responseType: h,
                        redirectUri: I,
                        codeChallenge: g,
                        codeChallengeMethod: p,
                        state: T,
                        permissions: u,
                        guildId: f,
                        channelId: S,
                        prompt: C,
                        disableGuildSelect: 'boolean' == typeof N ? N : 'true' === N,
                        integrationType: v
                    }),
                {
                    modalKey: L,
                    onCloseRequest: () => {
                        (0, a.closeModal)(L), t(new _.Z({ errorCode: m.lTL.OAUTH2_ERROR }, 'User cancelled authorization'));
                    }
                },
                null != O && (0, r.Z)(O, S) ? a.POPOUT_MODAL_CONTEXT : a.DEFAULT_MODAL_CONTEXT
            );
        });
    },
    function (e, t, n) {
        if (c.Z.isReady(null != n ? n : 0) || !d.isPlatformEmbedded) return;
        let i = (0, r.Z)(e, t) ? m.KJ3.CHANNEL_CALL_POPOUT : null;
        (0, d.isWindows)() ? u.ZP.minimize(i) : u.ZP.restore(i), u.ZP.focus(i);
    }
);
