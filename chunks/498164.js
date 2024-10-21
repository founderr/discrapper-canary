n(315314), n(610138), n(216116), n(78328), n(815648), n(47120);
var i,
    a,
    s = n(200651);
n(192379);
var r = n(756647),
    l = n(481060),
    o = n(570140),
    c = n(355467),
    d = n(899742),
    u = n(457330),
    _ = n(533307),
    E = n(447543),
    h = n(962220),
    m = n(69580),
    I = n(703656),
    p = n(314897),
    g = n(553795),
    T = n(594174),
    S = n(626135),
    f = n(585483),
    C = n(591759),
    N = n(998502),
    A = n(996106),
    v = n(186901),
    Z = n(981631);
function L(e, t) {
    if (null != e)
        S.default.track(Z.rMx.EXTERNAL_DYNAMIC_LINK_RECEIVED, {
            invite_code: null,
            has_auth_token: null,
            is_backgrounded: null,
            fingerprint: (0, r.s)(e),
            link_type: t
        });
}
((a = i || (i = {})).SETTINGS = 'settings'),
    (a.CHANGELOG = 'changelog'),
    (a.LIBRARY = 'library'),
    (a.STORE = 'store'),
    (a.INVITE = 'invite'),
    (a.CHANNEL = 'channel'),
    (a.GUILD_SETTINGS = 'guild_settings'),
    (a.QUEST_HOME = 'quest_home'),
    (a.DISCOVERY_GAME = 'discovery_game'),
    (t.Z = {
        [Z.Etm.INVITE_BROWSER]: {
            scope: v.cE,
            async handler(e) {
                let {
                        args: { code: t }
                    } = e,
                    { invite: n } = await E.Z.resolveInvite(t, 'Desktop Modal');
                if (null == n) throw new A.Z({ errorCode: Z.lTL.INVALID_INVITE }, 'Invalid invite id: '.concat(t));
                return (
                    p.default.isAuthenticated()
                        ? o.Z.dispatch({
                              type: 'INVITE_MODAL_OPEN',
                              invite: n,
                              code: t,
                              context: Z.IlC.APP
                          })
                        : (0, I.dL)(Z.Z5c.INVITE(t)),
                    {
                        invite: n,
                        code: t
                    }
                );
            }
        },
        [Z.Etm.GUILD_TEMPLATE_BROWSER]: {
            scope: v.cE,
            async handler(e) {
                let {
                    args: { code: t }
                } = e;
                if (null == T.default.getCurrentUser()) return;
                let { guildTemplate: i } = await h.Z.resolveGuildTemplate(t);
                if (null == i) throw new A.Z({ errorCode: Z.lTL.INVALID_GUILD_TEMPLATE }, 'Invalid guild template id: '.concat(t));
                return (
                    N.ZP.focus(),
                    (0, l.openModalLazy)(async () => {
                        let { default: e } = await Promise.all([n.e('10778'), n.e('64391')]).then(n.bind(n, 766775));
                        return (t) =>
                            (0, s.jsx)(e, {
                                ...t,
                                guildTemplate: i
                            });
                    }),
                    {
                        guildTemplate: i,
                        code: t
                    }
                );
            }
        },
        [Z.Etm.GIFT_CODE_BROWSER]: {
            scope: v.cE,
            handler(e) {
                let {
                    args: { code: t }
                } = e;
                return new Promise((e, i) => {
                    o.Z.wait(() => {
                        _.Z.resolveGiftCode(t, !0, !0)
                            .then((i) => {
                                let { giftCode: a } = i;
                                N.ZP.focus(),
                                    S.default.track(Z.rMx.OPEN_MODAL, {
                                        type: 'gift_accept',
                                        location: Z.SaU
                                    }),
                                    (0, l.openModalLazy)(async () => {
                                        let { default: e } = await Promise.all([n.e('92446'), n.e('89793')]).then(n.bind(n, 409858));
                                        return (n) =>
                                            (0, s.jsx)(e, {
                                                code: t,
                                                ...n
                                            });
                                    }),
                                    e({ giftCode: a });
                            })
                            .catch(() => i(new A.Z({ errorCode: Z.lTL.INVALID_GIFT_CODE }, 'Invalid gift code: '.concat(t))));
                    });
                });
            }
        },
        [Z.Etm.DEEP_LINK]: {
            scope: v.cE,
            handler(e) {
                let {
                    args: { type: t, params: n }
                } = e;
                switch ((N.ZP.focus(), t)) {
                    case v.jE.USER_SETTINGS:
                        null != n && ((0, I.dL)(Z.Z5c.SETTINGS(n.section, n.subsection)), L(n.fingerprint, 'settings'));
                        break;
                    case v.jE.CHANGELOG:
                        null != n && ((0, I.dL)(C.Z.formatPathWithQuery(Z.Z5c.CHANGELOGS(n.date), n.query)), L(n.fingerprint, 'changelog'));
                        break;
                    case v.jE.LIBRARY:
                        (0, I.dL)(Z.Z5c.APPLICATION_LIBRARY), null != n && L(n.fingerprint, 'library');
                        break;
                    case v.jE.STORE_HOME:
                        (0, I.dL)(Z.Z5c.APPLICATION_STORE), null != n && L(n.fingerprint, 'store');
                        break;
                    case v.jE.STORE_LISTING:
                        null != n && ((0, I.dL)(Z.Z5c.APPLICATION_STORE_LISTING_SKU(n.skuId, n.slug)), L(n.fingerprint, 'store'));
                        break;
                    case v.jE.PICK_GUILD_SETTINGS:
                        null != n &&
                            ((0, I.dL)({
                                pathname: Z.Z5c.PICK_GUILD_SETTINGS(n.section, n.subsection),
                                search: n.search
                            }),
                            L(n.fingerprint, 'guild_settings'));
                        break;
                    case v.jE.CHANNEL:
                        null != n &&
                            ((0, I.dL)({
                                pathname: Z.Z5c.CHANNEL(n.guildId, n.channelId, n.messageId),
                                search: n.search
                            }),
                            L(n.fingerprint, 'channel'));
                        break;
                    case v.jE.QUEST_HOME:
                        null != n
                            ? ((0, I.dL)({
                                  pathname: Z.Z5c.QUEST_HOME,
                                  hash: n.questId
                              }),
                              L(n.fingerprint, 'quest_home'))
                            : (0, I.dL)(Z.Z5c.QUEST_HOME);
                        break;
                    case v.jE.DISCOVERY_GAME_RESULTS:
                        null != n &&
                            ((0, I.dL)({
                                pathname: Z.Z5c.GLOBAL_DISCOVERY_SERVERS,
                                search: '?game='.concat(n.gameId)
                            }),
                            L(n.fingerprint, 'discovery_game'));
                        break;
                    case v.jE.OAUTH2:
                        let i = new URL(Z.Z5c.OAUTH2_AUTHORIZE, window.location.origin);
                        i.search = n.search;
                        let a = (0, m.getOAuth2AuthorizeProps)(i.toString());
                        if (null != a) return (0, m.openOAuth2ModalWithCreateGuildModal)(a), !0;
                        return !1;
                }
            }
        },
        [Z.Etm.BROWSER_HANDOFF]: {
            scope: v.CN,
            handler(e) {
                let {
                    args: { handoffToken: t, fingerprint: n }
                } = e;
                N.ZP.focus(null, !0), (0, d.lx)(t, n);
            }
        },
        [Z.Etm.CONNECTIONS_CALLBACK]: {
            scope: v.cE,
            handler: async (e) => {
                let {
                    args: { providerType: t, code: n, openid_params: i, state: a }
                } = e;
                if (!g.Z.hasPendingAuthorizedState(a)) throw new A.Z({ errorCode: Z.lTL.INVALID_CONNECTION_CALLBACK_STATE }, 'Provider authorization did not originate from this discord client');
                try {
                    return (
                        g.Z.deletePendingAuthorizedState(a),
                        await u.Z.callback(t, {
                            code: n,
                            openid_params: i,
                            state: a
                        })
                    );
                } catch (e) {
                    if ((null == e ? void 0 : e.status) === 400) throw new A.Z({ errorCode: Z.lTL.BAD_REQUEST_FOR_PROVIDER }, 'Bad request for provider');
                    throw (f.S.dispatch(Z.CkL.CONNECTIONS_CALLBACK_ERROR), e);
                }
            }
        },
        [Z.Etm.BRAINTREE_POPUP_BRIDGE_CALLBACK]: {
            scope: v.cE,
            handler(e) {
                let {
                    args: { state: t, path: n, query: i }
                } = e;
                return (0, c.rt)({
                    paymentSourceType: Z.HeQ.PAYPAL,
                    state: t,
                    path: n,
                    query: i
                });
            }
        },
        [Z.Etm.BILLING_POPUP_BRIDGE_CALLBACK]: {
            scope: v.cE,
            handler(e) {
                let {
                    args: { state: t, path: n, query: i, payment_source_type: a }
                } = e;
                return (0, c.rt)({
                    paymentSourceType: a,
                    state: t,
                    path: n,
                    query: i
                });
            }
        }
    });
