n.r(t),
    n.d(t, {
        default: function () {
            return M;
        }
    }),
    n(47120),
    n(610138),
    n(216116),
    n(78328),
    n(815648);
var r = n(873546),
    i = n(636977),
    a = n(570140),
    s = n(447543),
    o = n(230711),
    l = n(367907),
    u = n(132871),
    c = n(421474),
    d = n(960904),
    f = n(830121),
    _ = n(352057),
    p = n(15274),
    h = n(924301),
    m = n(543842),
    g = n(754688),
    E = n(336197),
    v = n(977156),
    I = n(341907),
    T = n(540709),
    b = n(881706),
    S = n(701190),
    y = n(944486),
    A = n(914010),
    N = n(771845),
    C = n(626135),
    R = n(591759),
    O = n(782568),
    D = n(981631),
    L = n(46140);
async function x(e, t) {
    await a.Z.dispatch({
        type: 'INVITE_MODAL_OPEN',
        invite: e,
        code: t,
        context: D.IlC.APP
    });
}
async function w(e) {
    var t;
    let n = S.Z.getInvite(e.code);
    if (null == n) {
        let { invite: t } = await s.Z.resolveInvite(e.code, 'Markdown Link');
        n = t;
    }
    if (null == n) return;
    if (n.state === D.r2o.EXPIRED || n.state === D.r2o.BANNED || n.state === D.r2o.ERROR) {
        await x(n, e.code);
        return;
    }
    let r = N.ZP.getFlattenedGuildIds(),
        i = null == n ? void 0 : null === (t = n.guild) || void 0 === t ? void 0 : t.id;
    null != i && r.includes(i) ? s.Z.transitionToInviteSync(n) : await x(n, e.code);
}
let P = {
    skipExtensionCheck: void 0,
    analyticsLocations: []
};
function M(e) {
    var t;
    let { skipExtensionCheck: a, analyticsLocations: s } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : P,
        S = (0, f.zO)(e);
    if (null != S && (S.type === d.g.INVITE || S.type === d.g.EMBEDDED_ACTIVITY_INVITE)) return (e) => (null == e || e.preventDefault(), w(S), !0);
    if (null != S && (S.type === d.g.APP_DIRECTORY_PROFILE || S.type === d.g.APP_DIRECTORY_STOREFRONT || S.type === d.g.APP_DIRECTORY_STOREFRONT_SKU))
        return (t) => {
            var i, a;
            null == t || t.preventDefault();
            let { code: s } = S,
                { applicationId: o, skuId: l } =
                    S.type === d.g.APP_DIRECTORY_PROFILE || S.type === d.g.APP_DIRECTORY_STOREFRONT
                        ? {
                              applicationId: s,
                              skuId: void 0
                          }
                        : null !== (i = (0, c.Q)(s)) && void 0 !== i
                          ? i
                          : {
                                applicationId: void 0,
                                skuId: void 0
                            },
                f = null !== (a = A.Z.getGuildId()) && void 0 !== a ? a : void 0;
            if (null == o) (0, O.Z)(e);
            else {
                C.default.track(D.rMx.APP_DIRECTORY_PROFILE_EMBED_URL_CLICKED, {
                    application_id: o,
                    device_platform: r.tq ? 'mobile_web' : 'desktop_web',
                    guild_id: f,
                    channel_id: y.Z.getChannelId()
                });
                (0, _.K0)({ location: 'embedded_link' })
                    ? n
                          .e('11866')
                          .then(n.bind(n, 749681))
                          .then((e) => {
                              let { transitionToGlobalDiscovery: t } = e,
                                  { GlobalDiscoveryTab: r } = n(49898),
                                  { GlobalDiscoveryAppsSections: i } = n(979007);
                              t({
                                  tab: r.APPS,
                                  applicationId: o,
                                  section: (0, m.Z)(i, S.type === d.g.APP_DIRECTORY_PROFILE ? i.ABOUT : i.STORE),
                                  skuId: l
                              });
                          })
                    : n
                          .e('56630')
                          .then(n.bind(n, 147890))
                          .then((e) => {
                              let { goToAppDirectory: t } = e,
                                  { ApplicationDirectoryViews: r } = n(132871),
                                  { ApplicationDirectoryProfileSections: i } = n(272242);
                              t({
                                  view: r.APPLICATION,
                                  applicationId: o,
                                  guildId: f,
                                  applicationSection: (0, m.Z)(i, S.type === d.g.APP_DIRECTORY_PROFILE ? i.ABOUT : i.STORE),
                                  entrypoint: { name: u.ApplicationDirectoryEntrypointNames.APPLICATION_DIRECTORY_URL },
                                  skuId: l
                              });
                          });
            }
            return !0;
        };
    if (null != S && S.type === d.g.GUILD_PRODUCT)
        return (e) => {
            null == e || e.preventDefault();
            let [t, r] = S.code.split('-');
            return (
                n
                    .e('84239')
                    .then(n.bind(n, 838433))
                    .then((e) => {
                        let { openGuildProductLink: n } = e;
                        n(t, r);
                    }),
                !0
            );
        };
    if (null != S && S.type === d.g.QUESTS_EMBED && (0, v.cB)({ location: L.dr.EMBED_MOBILE }))
        return (e) => (
            null == e || e.preventDefault(),
            Promise.resolve()
                .then(n.bind(n, 341907))
                .then((e) => {
                    let { navigateToQuestHome: t } = e;
                    t(L.dr.CODED_LINK, i.j.QUEST_SHARE_LINK, S.code);
                }),
            !0
        );
    let { host: N, hostname: x, pathname: M, search: k, hash: U } = null !== (t = R.Z.toURLSafe(e)) && void 0 !== t ? t : {},
        B = R.Z.isDiscordHostname(null != x ? x : null) || R.Z.isDiscordLocalhost(null != N ? N : null, null != x ? x : null);
    if (B && ((null == M ? void 0 : M.startsWith('/application-directory')) || (null == M ? void 0 : M.startsWith('/discovery/applications')))) {
        let e = M.split('/'),
            t = null == M ? void 0 : M.startsWith('/discovery/applications'),
            r = e[t ? 3 : 2],
            i = 'search' === r,
            a = t && 'categories' === r && 'featured' !== e[4];
        return (t) => {
            var r, s, o, l;
            if ((null == t || t.preventDefault(), (0, _.K0)({ location: 'embedded_link' }))) {
                let t, l, u;
                if (i) {
                    let e = new URLSearchParams(k);
                    (t = null !== (r = e.get('q')) && void 0 !== r ? r : void 0), (l = null !== (s = e.get('category_id')) && void 0 !== s ? s : void 0), (u = null !== (o = e.get('page')) && void 0 !== o ? o : void 0);
                } else a && (l = e[4]);
                n.e('11866')
                    .then(n.bind(n, 749681))
                    .then((e) => {
                        let { transitionToGlobalDiscovery: r } = e,
                            { GlobalDiscoveryTab: i } = n(49898);
                        r({
                            tab: i.APPS,
                            categoryId: null == l || Number.isNaN(l) ? void 0 : Number(l),
                            page: null == u || Number.isNaN(u) ? void 0 : Number(u),
                            query: t
                        });
                    });
            } else {
                let { ApplicationDirectoryViews: e } = n(132871),
                    t = null !== (l = A.Z.getGuildId()) && void 0 !== l ? l : void 0,
                    r = i || a ? e.SEARCH : e.HOME;
                n.e('56630')
                    .then(n.bind(n, 147890))
                    .then((e) => {
                        let { goToAppDirectory: n } = e;
                        n({
                            view: r,
                            guildId: t,
                            entrypoint: { name: u.ApplicationDirectoryEntrypointNames.APPLICATION_DIRECTORY_URL }
                        });
                    });
            }
            return !0;
        };
    }
    if (null != M && B && R.Z.isAppRoute(M)) {
        let e = {
            navigationReplace: !1,
            openChannel: !0
        };
        return null != k && (e.search = k), null != U && (e.hash = U), (t) => (null == t || t.preventDefault(), (0, E.Z)(M, e), !0);
    }
    if (null != M && B) {
        let { getOAuth2AuthorizeProps: t, openOAuth2ModalWithCreateGuildModal: r } = n(69580),
            i = t(e);
        if (null != i) return (e) => (null == e || e.preventDefault(), null != S && S.type === d.g.APP_OAUTH2_LINK && l.ZP.trackWithMetadata(D.rMx.APP_OAUTH2_LINK_EMBED_URL_CLICKED, { application_id: i.clientId }), r(i), !0);
    }
    let G = (0, g.Ao)(M);
    if (null != M && B && null != G)
        return (e) => {
            null == e || e.preventDefault();
            let t = A.Z.getGuildId();
            null != G.guildId && '' !== G.guildId && G.guildId !== t && (0, E.Z)(D.Z5c.CHANNEL(G.guildId));
            let n = h.ZP.getGuildScheduledEvent(G.guildEventId);
            return null != n && (0, p.bO)({ eventId: n.id }), !0;
        };
    if (B && (null == M ? void 0 : M.startsWith('/settings/'))) {
        let { default: e } = n(357269),
            t = e(M);
        if (null != t)
            return (e) => (
                null == e || e.preventDefault(),
                o.Z.open(t.section, t.subsection, {
                    openWithoutBackstack: !1,
                    impressionSource: t.source,
                    analyticsLocations: s
                }),
                !0
            );
    }
    return B && (null == M ? void 0 : M.startsWith('/discovery/quests')) ? (e) => (null == e || e.preventDefault(), (0, I.navigateToQuestHome)(L.dr.BADGE, i.j.QUEST_BADGE), !0) : a || null == (0, b.v)(e) ? void 0 : (t) => (null == t || t.preventDefault(), T.Z.show(e), !0);
}
