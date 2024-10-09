var i,
    a,
    s = n(735250);
n(470079);
var r = n(756647),
    l = n(481060),
    o = n(570140),
    c = n(355467),
    d = n(899742),
    u = n(457330),
    _ = n(533307),
    E = n(447543),
    h = n(962220),
    m = n(703656),
    I = n(314897),
    p = n(594174),
    g = n(626135),
    T = n(585483),
    f = n(591759),
    S = n(998502),
    C = n(996106),
    N = n(186901),
    A = n(981631);
function v(e, t) {
    if (null != e)
        g.default.track(A.rMx.EXTERNAL_DYNAMIC_LINK_RECEIVED, {
            invite_code: null,
            has_auth_token: null,
            is_backgrounded: null,
            fingerprint: (0, r.s)(e),
            link_type: t
        });
}
((i = a || (a = {})).SETTINGS = 'settings'),
    (i.CHANGELOG = 'changelog'),
    (i.LIBRARY = 'library'),
    (i.STORE = 'store'),
    (i.INVITE = 'invite'),
    (i.CHANNEL = 'channel'),
    (i.GUILD_SETTINGS = 'guild_settings'),
    (i.QUEST_HOME = 'quest_home'),
    (i.DISCOVERY_GAME = 'discovery_game'),
    (t.Z = {
        [A.Etm.INVITE_BROWSER]: {
            scope: N.cE,
            async handler(e) {
                let {
                        args: { code: t }
                    } = e,
                    { invite: n } = await E.Z.resolveInvite(t, 'Desktop Modal');
                if (null == n) throw new C.Z({ errorCode: A.lTL.INVALID_INVITE }, 'Invalid invite id: '.concat(t));
                return (
                    I.default.isAuthenticated()
                        ? o.Z.dispatch({
                              type: 'INVITE_MODAL_OPEN',
                              invite: n,
                              code: t,
                              context: A.IlC.APP
                          })
                        : (0, m.dL)(A.Z5c.INVITE(t)),
                    {
                        invite: n,
                        code: t
                    }
                );
            }
        },
        [A.Etm.GUILD_TEMPLATE_BROWSER]: {
            scope: N.cE,
            async handler(e) {
                let {
                    args: { code: t }
                } = e;
                if (null == p.default.getCurrentUser()) return;
                let { guildTemplate: i } = await h.Z.resolveGuildTemplate(t);
                if (null == i) throw new C.Z({ errorCode: A.lTL.INVALID_GUILD_TEMPLATE }, 'Invalid guild template id: '.concat(t));
                return (
                    S.ZP.focus(),
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
        [A.Etm.GIFT_CODE_BROWSER]: {
            scope: N.cE,
            handler(e) {
                let {
                    args: { code: t }
                } = e;
                return new Promise((e, i) => {
                    o.Z.wait(() => {
                        _.Z.resolveGiftCode(t, !0, !0)
                            .then((i) => {
                                let { giftCode: a } = i;
                                S.ZP.focus(),
                                    g.default.track(A.rMx.OPEN_MODAL, {
                                        type: 'gift_accept',
                                        location: A.SaU
                                    }),
                                    (0, l.openModalLazy)(async () => {
                                        let { default: e } = await Promise.all([n.e('92446'), n.e('37848')]).then(n.bind(n, 409858));
                                        return (n) =>
                                            (0, s.jsx)(e, {
                                                code: t,
                                                ...n
                                            });
                                    }),
                                    e({ giftCode: a });
                            })
                            .catch(() => i(new C.Z({ errorCode: A.lTL.INVALID_GIFT_CODE }, 'Invalid gift code: '.concat(t))));
                    });
                });
            }
        },
        [A.Etm.DEEP_LINK]: {
            scope: N.cE,
            handler(e) {
                let {
                    args: { type: t, params: n }
                } = e;
                switch ((S.ZP.focus(), t)) {
                    case N.jE.USER_SETTINGS:
                        null != n && ((0, m.dL)(A.Z5c.SETTINGS(n.section, n.subsection)), v(n.fingerprint, 'settings'));
                        break;
                    case N.jE.CHANGELOG:
                        null != n && ((0, m.dL)(f.Z.formatPathWithQuery(A.Z5c.CHANGELOGS(n.date), n.query)), v(n.fingerprint, 'changelog'));
                        break;
                    case N.jE.LIBRARY:
                        (0, m.dL)(A.Z5c.APPLICATION_LIBRARY), null != n && v(n.fingerprint, 'library');
                        break;
                    case N.jE.STORE_HOME:
                        (0, m.dL)(A.Z5c.APPLICATION_STORE), null != n && v(n.fingerprint, 'store');
                        break;
                    case N.jE.STORE_LISTING:
                        null != n && ((0, m.dL)(A.Z5c.APPLICATION_STORE_LISTING_SKU(n.skuId, n.slug)), v(n.fingerprint, 'store'));
                        break;
                    case N.jE.PICK_GUILD_SETTINGS:
                        null != n &&
                            ((0, m.dL)({
                                pathname: A.Z5c.PICK_GUILD_SETTINGS(n.section, n.subsection),
                                search: n.search
                            }),
                            v(n.fingerprint, 'guild_settings'));
                        break;
                    case N.jE.CHANNEL:
                        null != n &&
                            ((0, m.dL)({
                                pathname: A.Z5c.CHANNEL(n.guildId, n.channelId, n.messageId),
                                search: n.search
                            }),
                            v(n.fingerprint, 'channel'));
                        break;
                    case N.jE.QUEST_HOME:
                        null != n
                            ? ((0, m.dL)({
                                  pathname: A.Z5c.QUEST_HOME,
                                  hash: n.questId
                              }),
                              v(n.fingerprint, 'quest_home'))
                            : (0, m.dL)(A.Z5c.QUEST_HOME);
                        break;
                    case N.jE.DISCOVERY_GAME_RESULTS:
                        null != n &&
                            ((0, m.dL)({
                                pathname: A.Z5c.GLOBAL_DISCOVERY_SERVERS,
                                search: '?game='.concat(n.gameId)
                            }),
                            v(n.fingerprint, 'discovery_game'));
                }
            }
        },
        [A.Etm.BROWSER_HANDOFF]: {
            scope: N.CN,
            handler(e) {
                let {
                    args: { handoffToken: t, fingerprint: n }
                } = e;
                S.ZP.focus(null, !0), (0, d.lx)(t, n);
            }
        },
        [A.Etm.CONNECTIONS_CALLBACK]: {
            scope: N.cE,
            handler: async (e) => {
                let {
                    args: { providerType: t, code: n, openid_params: i, state: a }
                } = e;
                try {
                    return await u.Z.callback(t, {
                        code: n,
                        openid_params: i,
                        state: a
                    });
                } catch (e) {
                    if ((null == e ? void 0 : e.status) === 400) throw new C.Z({ errorCode: A.lTL.BAD_REQUEST_FOR_PROVIDER }, 'Bad request for provider');
                    throw (T.S.dispatch(A.CkL.CONNECTIONS_CALLBACK_ERROR), e);
                }
            }
        },
        [A.Etm.BRAINTREE_POPUP_BRIDGE_CALLBACK]: {
            scope: N.cE,
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
            scope: N.cE,
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
