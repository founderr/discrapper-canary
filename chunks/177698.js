var i = n(200651);
n(192379);
var r = n(481060),
    l = n(570140),
    a = n(531826),
    o = n(812206),
    s = n(69580),
    c = n(371651),
    d = n(808506),
    u = n(358085),
    h = n(998502),
    m = n(145597),
    p = n(996106),
    g = n(703912),
    f = n(852926),
    _ = n(981631);
t.Z = (0, g.Z)(
    (e) => {
        var t;
        let { clientId: n, authorizations: d, scopes: u, parsedPermissions: h, responseType: g, redirectUri: E, codeChallenge: I, codeChallengeMethod: C, state: v, guildId: N, channelId: S, prompt: T, disableGuildSelect: b, disclosures: x, integrationType: A, pid: Z } = e,
            L = 'OAuth2Authorize_'.concat(n, '_').concat(N, '_').concat(S),
            P = null != A ? (null == d ? void 0 : d.get(A)) : void 0,
            y = null !== (t = null == P ? void 0 : P.application) && void 0 !== t ? t : o.Z.getApplication(n);
        return new Promise((e, t) => {
            let o = (0, f.jU)(Z),
                P = (i) => {
                    let { clientId: r, location: a } = i;
                    if (null == r || r === n) o.lock(), l.Z.unsubscribe('OVERLAY_OAUTH2_AUTHORIZE_MODAL_CLOSE', P), null != location ? e(a) : t(new p.Z({ errorCode: _.lTL.OAUTH2_ERROR }, 'User cancelled authorization'));
                },
                O = c.Z.isOverlayOOPEnabledForPid(null != Z ? Z : (0, m.QF)());
            if (o.context === _.IlC.OVERLAY && !O) {
                l.Z.subscribe('OVERLAY_OAUTH2_AUTHORIZE_MODAL_CLOSE', P),
                    l.Z.dispatch({
                        type: 'OVERLAY_OAUTH2_AUTHORIZE_MODAL_OPEN',
                        clientId: n,
                        authorizeProps: {
                            authorizations: d,
                            clientId: n,
                            scopes: null != u ? u : [],
                            disclosures: null != x ? x : [],
                            responseType: g,
                            redirectUri: E,
                            codeChallenge: I,
                            codeChallengeMethod: C,
                            state: v,
                            permissions: h.toString(),
                            guildId: N,
                            channelId: S,
                            prompt: T,
                            disableGuildSelect: 'boolean' == typeof b ? b : 'true' === b,
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
                        disclosures: null != x ? x : [],
                        callback: P,
                        responseType: g,
                        redirectUri: E,
                        codeChallenge: I,
                        codeChallengeMethod: C,
                        state: v,
                        permissions: h,
                        guildId: N,
                        channelId: S,
                        prompt: T,
                        disableGuildSelect: 'boolean' == typeof b ? b : 'true' === b,
                        integrationType: A
                    }),
                {
                    modalKey: L,
                    onCloseRequest: () => {
                        (0, r.closeModal)(L), t(new p.Z({ errorCode: _.lTL.OAUTH2_ERROR }, 'User cancelled authorization'));
                    }
                },
                null != y &&
                    null !=
                        (0, a.ZP)({
                            application: y,
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
