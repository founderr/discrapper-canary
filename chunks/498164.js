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
    p = n(185669),
    g = n(962220),
    f = n(69580),
    _ = n(703656),
    E = n(314897),
    I = n(553795),
    C = n(594174),
    v = n(626135),
    N = n(585483),
    T = n(591759),
    S = n(998502),
    A = n(996106),
    x = n(186901),
    b = n(981631);
function Z(e, t) {
    if (null != e)
        v.default.track(b.rMx.EXTERNAL_DYNAMIC_LINK_RECEIVED, {
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
        [b.Etm.INVITE_BROWSER]: {
            scope: x.cE,
            async handler(e) {
                let {
                        args: { code: t }
                    } = e,
                    { invite: n } = await m.Z.resolveInvite(t, 'Desktop Modal');
                if (null == n) throw new A.Z({ errorCode: b.lTL.INVALID_INVITE }, 'Invalid invite id: '.concat(t));
                return (
                    E.default.isAuthenticated()
                        ? o.Z.dispatch({
                              type: 'INVITE_MODAL_OPEN',
                              invite: n,
                              code: t,
                              context: b.IlC.APP
                          })
                        : (0, _.dL)(b.Z5c.INVITE(t)),
                    {
                        invite: n,
                        code: t
                    }
                );
            }
        },
        [b.Etm.GUILD_TEMPLATE_BROWSER]: {
            scope: x.cE,
            async handler(e) {
                let {
                    args: { code: t }
                } = e;
                if (null == C.default.getCurrentUser()) return;
                let { guildTemplate: i } = await g.Z.resolveGuildTemplate(t);
                if (null == i) throw new A.Z({ errorCode: b.lTL.INVALID_GUILD_TEMPLATE }, 'Invalid guild template id: '.concat(t));
                return (
                    S.ZP.focus(),
                    (0, s.openModalLazy)(async () => {
                        let { default: e } = await Promise.all([n.e('10778'), n.e('27815')]).then(n.bind(n, 766775));
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
        [b.Etm.GIFT_CODE_BROWSER]: {
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
                                S.ZP.focus(),
                                    v.default.track(b.rMx.OPEN_MODAL, {
                                        type: 'gift_accept',
                                        location: b.SaU
                                    }),
                                    (0, s.openModalLazy)(async () => {
                                        let { default: e } = await Promise.all([n.e('92446'), n.e('89793')]).then(n.bind(n, 409858));
                                        return (n) =>
                                            (0, l.jsx)(e, {
                                                code: t,
                                                ...n
                                            });
                                    }),
                                    e({ giftCode: r });
                            })
                            .catch(() => i(new A.Z({ errorCode: b.lTL.INVALID_GIFT_CODE }, 'Invalid gift code: '.concat(t))));
                    });
                });
            }
        },
        [b.Etm.DEEP_LINK]: {
            scope: x.cE,
            handler(e) {
                let {
                    args: { type: t, params: n }
                } = e;
                switch ((S.ZP.focus(), t)) {
                    case x.jE.USER_SETTINGS:
                        null != n && ((0, _.dL)(b.Z5c.SETTINGS(n.section, n.subsection)), Z(n.fingerprint, 'settings'));
                        break;
                    case x.jE.CHANGELOG:
                        null != n && ((0, _.dL)(T.Z.formatPathWithQuery(b.Z5c.CHANGELOGS(n.date), n.query)), Z(n.fingerprint, 'changelog'));
                        break;
                    case x.jE.LIBRARY:
                        (0, _.dL)(b.Z5c.APPLICATION_LIBRARY), null != n && Z(n.fingerprint, 'library');
                        break;
                    case x.jE.STORE_HOME:
                        (0, _.dL)(b.Z5c.APPLICATION_STORE), null != n && Z(n.fingerprint, 'store');
                        break;
                    case x.jE.STORE_LISTING:
                        null != n && ((0, _.dL)(b.Z5c.APPLICATION_STORE_LISTING_SKU(n.skuId, n.slug)), Z(n.fingerprint, 'store'));
                        break;
                    case x.jE.PICK_GUILD_SETTINGS:
                        null != n &&
                            ((0, _.dL)({
                                pathname: b.Z5c.PICK_GUILD_SETTINGS(n.section, n.subsection),
                                search: n.search
                            }),
                            Z(n.fingerprint, 'guild_settings'));
                        break;
                    case x.jE.CHANNEL:
                        null != n &&
                            ((0, _.dL)({
                                pathname: b.Z5c.CHANNEL(n.guildId, n.channelId, n.messageId),
                                search: n.search
                            }),
                            Z(n.fingerprint, 'channel'));
                        break;
                    case x.jE.QUEST_HOME:
                        null != n
                            ? ((0, _.dL)({
                                  pathname: b.Z5c.QUEST_HOME,
                                  hash: n.questId
                              }),
                              Z(n.fingerprint, 'quest_home'))
                            : (0, _.dL)(b.Z5c.QUEST_HOME);
                        break;
                    case x.jE.DISCOVERY_GAME_RESULTS:
                        null != n &&
                            ((0, _.dL)({
                                pathname: b.Z5c.GLOBAL_DISCOVERY_SERVERS,
                                search: '?game='.concat(n.gameId)
                            }),
                            Z(n.fingerprint, 'discovery_game'));
                        break;
                    case x.jE.OAUTH2:
                        let i = new URL(b.Z5c.OAUTH2_AUTHORIZE, window.location.origin);
                        i.search = n.search;
                        let r = (0, f.getOAuth2AuthorizeProps)(i.toString());
                        if (null != r) return (0, f.openOAuth2ModalWithCreateGuildModal)(r), !0;
                        return !1;
                }
            }
        },
        [b.Etm.BROWSER_HANDOFF]: {
            scope: x.CN,
            handler(e) {
                let {
                    args: { handoffToken: t, fingerprint: n }
                } = e;
                S.ZP.focus(null, !0), (0, d.lx)(t, n);
            }
        },
        [b.Etm.CONNECTIONS_CALLBACK]: {
            scope: x.cE,
            handler: async (e) => {
                let {
                    args: { providerType: t, code: n, openid_params: i, state: r }
                } = e;
                if (!p.g.getCurrentConfig({ location: 'private.CONNECTIONS_CALLBACK' }).enabled && !I.Z.hasPendingAuthorizedState(r)) throw new A.Z({ errorCode: b.lTL.INVALID_CONNECTION_CALLBACK_STATE }, 'Provider authorization did not originate from this discord client');
                try {
                    return (
                        I.Z.deletePendingAuthorizedState(r),
                        await u.Z.callback(t, {
                            code: n,
                            openid_params: i,
                            state: r
                        })
                    );
                } catch (e) {
                    if ((null == e ? void 0 : e.status) === 400) throw new A.Z({ errorCode: b.lTL.BAD_REQUEST_FOR_PROVIDER }, 'Bad request for provider');
                    throw (N.S.dispatch(b.CkL.CONNECTIONS_CALLBACK_ERROR), e);
                }
            }
        },
        [b.Etm.BRAINTREE_POPUP_BRIDGE_CALLBACK]: {
            scope: x.cE,
            handler(e) {
                let {
                    args: { state: t, path: n, query: i }
                } = e;
                return (0, c.rt)({
                    paymentSourceType: b.HeQ.PAYPAL,
                    state: t,
                    path: n,
                    query: i
                });
            }
        },
        [b.Etm.BILLING_POPUP_BRIDGE_CALLBACK]: {
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
