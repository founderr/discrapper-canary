n(315314), n(610138), n(216116), n(78328), n(815648), n(47120);
var i,
    r,
    l = n(200651);
n(192379);
var a = n(756647),
    s = n(481060),
    o = n(570140),
    c = n(355467),
    d = n(899742),
    u = n(457330),
    h = n(533307),
    m = n(447543),
    p = n(962220),
    g = n(69580),
    f = n(703656),
    _ = n(314897),
    E = n(553795),
    I = n(594174),
    C = n(626135),
    v = n(585483),
    S = n(591759),
    N = n(998502),
    T = n(996106),
    x = n(186901),
    A = n(981631);
function b(e, t) {
    if (null != e)
        C.default.track(A.rMx.EXTERNAL_DYNAMIC_LINK_RECEIVED, {
            invite_code: null,
            has_auth_token: null,
            is_backgrounded: null,
            fingerprint: (0, a.s)(e),
            link_type: t
        });
}
((r = i || (i = {})).SETTINGS = 'settings'),
    (r.CHANGELOG = 'changelog'),
    (r.LIBRARY = 'library'),
    (r.STORE = 'store'),
    (r.INVITE = 'invite'),
    (r.CHANNEL = 'channel'),
    (r.GUILD_SETTINGS = 'guild_settings'),
    (r.QUEST_HOME = 'quest_home'),
    (r.DISCOVERY_GAME = 'discovery_game'),
    (t.Z = {
        [A.Etm.INVITE_BROWSER]: {
            scope: x.cE,
            async handler(e) {
                let {
                        args: { code: t }
                    } = e,
                    { invite: n } = await m.Z.resolveInvite(t, 'Desktop Modal');
                if (null == n) throw new T.Z({ errorCode: A.lTL.INVALID_INVITE }, 'Invalid invite id: '.concat(t));
                return (
                    _.default.isAuthenticated()
                        ? o.Z.dispatch({
                              type: 'INVITE_MODAL_OPEN',
                              invite: n,
                              code: t,
                              context: A.IlC.APP
                          })
                        : (0, f.dL)(A.Z5c.INVITE(t)),
                    {
                        invite: n,
                        code: t
                    }
                );
            }
        },
        [A.Etm.GUILD_TEMPLATE_BROWSER]: {
            scope: x.cE,
            async handler(e) {
                let {
                    args: { code: t }
                } = e;
                if (null == I.default.getCurrentUser()) return;
                let { guildTemplate: i } = await p.Z.resolveGuildTemplate(t);
                if (null == i) throw new T.Z({ errorCode: A.lTL.INVALID_GUILD_TEMPLATE }, 'Invalid guild template id: '.concat(t));
                return (
                    N.ZP.focus(),
                    (0, s.openModalLazy)(async () => {
                        let { default: e } = await Promise.all([n.e('10778'), n.e('90627')]).then(n.bind(n, 766775));
                        return (t) =>
                            (0, l.jsx)(e, {
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
        [A.Etm.GIFT_CODE_BROWSER]: {
            scope: x.cE,
            handler(e) {
                let {
                    args: { code: t }
                } = e;
                return new Promise((e, i) => {
                    o.Z.wait(() => {
                        h.Z.resolveGiftCode(t, !0, !0)
                            .then((i) => {
                                let { giftCode: r } = i;
                                N.ZP.focus(),
                                    C.default.track(A.rMx.OPEN_MODAL, {
                                        type: 'gift_accept',
                                        location: A.SaU
                                    }),
                                    (0, s.openModalLazy)(async () => {
                                        let { default: e } = await Promise.all([n.e('92446'), n.e('73828')]).then(n.bind(n, 409858));
                                        return (n) =>
                                            (0, l.jsx)(e, {
                                                code: t,
                                                ...n
                                            });
                                    }),
                                    e({ giftCode: r });
                            })
                            .catch(() => i(new T.Z({ errorCode: A.lTL.INVALID_GIFT_CODE }, 'Invalid gift code: '.concat(t))));
                    });
                });
            }
        },
        [A.Etm.DEEP_LINK]: {
            scope: x.cE,
            handler(e) {
                let {
                    args: { type: t, params: n }
                } = e;
                switch ((N.ZP.focus(), t)) {
                    case x.jE.USER_SETTINGS:
                        null != n && ((0, f.dL)(A.Z5c.SETTINGS(n.section, n.subsection)), b(n.fingerprint, 'settings'));
                        break;
                    case x.jE.CHANGELOG:
                        null != n && ((0, f.dL)(S.Z.formatPathWithQuery(A.Z5c.CHANGELOGS(n.date), n.query)), b(n.fingerprint, 'changelog'));
                        break;
                    case x.jE.LIBRARY:
                        (0, f.dL)(A.Z5c.APPLICATION_LIBRARY), null != n && b(n.fingerprint, 'library');
                        break;
                    case x.jE.STORE_HOME:
                        (0, f.dL)(A.Z5c.APPLICATION_STORE), null != n && b(n.fingerprint, 'store');
                        break;
                    case x.jE.STORE_LISTING:
                        null != n && ((0, f.dL)(A.Z5c.APPLICATION_STORE_LISTING_SKU(n.skuId, n.slug)), b(n.fingerprint, 'store'));
                        break;
                    case x.jE.PICK_GUILD_SETTINGS:
                        null != n &&
                            ((0, f.dL)({
                                pathname: A.Z5c.PICK_GUILD_SETTINGS(n.section, n.subsection),
                                search: n.search
                            }),
                            b(n.fingerprint, 'guild_settings'));
                        break;
                    case x.jE.CHANNEL:
                        null != n &&
                            ((0, f.dL)({
                                pathname: A.Z5c.CHANNEL(n.guildId, n.channelId, n.messageId),
                                search: n.search
                            }),
                            b(n.fingerprint, 'channel'));
                        break;
                    case x.jE.QUEST_HOME:
                        null != n
                            ? ((0, f.dL)({
                                  pathname: A.Z5c.QUEST_HOME,
                                  hash: n.questId
                              }),
                              b(n.fingerprint, 'quest_home'))
                            : (0, f.dL)(A.Z5c.QUEST_HOME);
                        break;
                    case x.jE.DISCOVERY_GAME_RESULTS:
                        null != n &&
                            ((0, f.dL)({
                                pathname: A.Z5c.GLOBAL_DISCOVERY_SERVERS,
                                search: '?game='.concat(n.gameId)
                            }),
                            b(n.fingerprint, 'discovery_game'));
                        break;
                    case x.jE.OAUTH2:
                        let i = new URL(A.Z5c.OAUTH2_AUTHORIZE, window.location.origin);
                        i.search = n.search;
                        let r = (0, g.getOAuth2AuthorizeProps)(i.toString());
                        if (null != r) return (0, g.openOAuth2ModalWithCreateGuildModal)(r), !0;
                        return !1;
                }
            }
        },
        [A.Etm.BROWSER_HANDOFF]: {
            scope: x.CN,
            handler(e) {
                let {
                    args: { handoffToken: t, fingerprint: n }
                } = e;
                N.ZP.focus(null, !0), (0, d.lx)(t, n);
            }
        },
        [A.Etm.CONNECTIONS_CALLBACK]: {
            scope: x.cE,
            handler: async (e) => {
                let {
                    args: { providerType: t, code: n, openid_params: i, state: r }
                } = e;
                if (!E.Z.hasPendingAuthorizedState(r)) throw new T.Z({ errorCode: A.lTL.INVALID_CONNECTION_CALLBACK_STATE }, 'Provider authorization did not originate from this discord client');
                try {
                    return (
                        E.Z.deletePendingAuthorizedState(r),
                        await u.Z.callback(t, {
                            code: n,
                            openid_params: i,
                            state: r
                        })
                    );
                } catch (e) {
                    if ((null == e ? void 0 : e.status) === 400) throw new T.Z({ errorCode: A.lTL.BAD_REQUEST_FOR_PROVIDER }, 'Bad request for provider');
                    throw (v.S.dispatch(A.CkL.CONNECTIONS_CALLBACK_ERROR), e);
                }
            }
        },
        [A.Etm.BRAINTREE_POPUP_BRIDGE_CALLBACK]: {
            scope: x.cE,
            handler(e) {
                let {
                    args: { state: t, path: n, query: i }
                } = e;
                return (0, c.rt)({
                    paymentSourceType: A.HeQ.PAYPAL,
                    state: t,
                    path: n,
                    query: i
                });
            }
        },
        [A.Etm.BILLING_POPUP_BRIDGE_CALLBACK]: {
            scope: x.cE,
            handler(e) {
                let {
                    args: { state: t, path: n, query: i, payment_source_type: r }
                } = e;
                return (0, c.rt)({
                    paymentSourceType: r,
                    state: t,
                    path: n,
                    query: i
                });
            }
        }
    });
