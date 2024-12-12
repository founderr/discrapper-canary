var i = n(200651);
n(192379);
var r = n(481060),
    l = n(570140),
    a = n(531826),
    o = n(812206),
    s = n(69580),
    c = n(32300),
    d = n(808506),
    u = n(358085),
    h = n(998502),
    m = n(996106),
    p = n(703912),
    g = n(852926),
    f = n(981631);
t.Z = (0, p.Z)(
    (e) => {
        var t;
        let { clientId: n, authorizations: d, scopes: u, parsedPermissions: h, responseType: p, redirectUri: _, codeChallenge: E, codeChallengeMethod: I, state: C, guildId: v, channelId: S, prompt: N, disableGuildSelect: T, disclosures: b, integrationType: A, pid: x } = e,
            Z = 'OAuth2Authorize_'.concat(n, '_').concat(v, '_').concat(S),
            L = null != A ? (null == d ? void 0 : d.get(A)) : void 0,
            P = null !== (t = null == L ? void 0 : L.application) && void 0 !== t ? t : o.Z.getApplication(n);
        return new Promise((e, t) => {
            let o = (0, g.jU)(x),
                L = (i) => {
                    let { clientId: r, location: a } = i;
                    if (null == r || r === n) o.lock(), l.Z.unsubscribe('OVERLAY_OAUTH2_AUTHORIZE_MODAL_CLOSE', L), null != location ? e(a) : t(new m.Z({ errorCode: f.lTL.OAUTH2_ERROR }, 'User cancelled authorization'));
                },
                y = (0, c.R)();
            if (o.context === f.IlC.OVERLAY && !y) {
                l.Z.subscribe('OVERLAY_OAUTH2_AUTHORIZE_MODAL_CLOSE', L),
                    l.Z.dispatch({
                        type: 'OVERLAY_OAUTH2_AUTHORIZE_MODAL_OPEN',
                        clientId: n,
                        authorizeProps: {
                            authorizations: d,
                            clientId: n,
                            scopes: null != u ? u : [],
                            disclosures: null != b ? b : [],
                            responseType: p,
                            redirectUri: _,
                            codeChallenge: E,
                            codeChallengeMethod: I,
                            state: C,
                            permissions: h.toString(),
                            guildId: v,
                            channelId: S,
                            prompt: N,
                            disableGuildSelect: 'boolean' == typeof T ? T : 'true' === T,
                            integrationType: A
                        }
                    });
                return;
            }
            (0, r.openModal)(
                (e) =>
                    (0, i.jsx)(s.OAuth2AuthorizeModal, {
                        ...e,
                        authorizations: d,
                        clientId: n,
                        scopes: null != u ? u : [],
                        disclosures: null != b ? b : [],
                        callback: L,
                        responseType: p,
                        redirectUri: _,
                        codeChallenge: E,
                        codeChallengeMethod: I,
                        state: C,
                        permissions: h,
                        guildId: v,
                        channelId: S,
                        prompt: N,
                        disableGuildSelect: 'boolean' == typeof T ? T : 'true' === T,
                        integrationType: A
                    }),
                {
                    modalKey: Z,
                    onCloseRequest: () => {
                        (0, r.closeModal)(Z), t(new m.Z({ errorCode: f.lTL.OAUTH2_ERROR }, 'User cancelled authorization'));
                    }
                },
                null != P &&
                    null !=
                        (0, a.ZP)({
                            application: P,
                            channelId: S
                        })
                    ? r.POPOUT_MODAL_CONTEXT
                    : r.DEFAULT_MODAL_CONTEXT
            );
        });
    },
    function (e, t, n) {
        if (d.Z.isReady(null != n ? n : 0) || !u.isPlatformEmbedded) return;
        let i = (0, a.ZP)({
            application: e,
            channelId: t
        });
        (0, u.isWindows)() ? h.ZP.minimize(i) : h.ZP.restore(i), h.ZP.focus(i);
    }
);
