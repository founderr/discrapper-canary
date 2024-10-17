n.r(t),
    n.d(t, {
        default: function () {
            return G;
        }
    }),
    n(47120);
var r = n(729594),
    i = n(873546),
    a = n(636977),
    s = n(570140),
    o = n(447543),
    l = n(230711),
    u = n(367907),
    c = n(581364),
    d = n(132871),
    _ = n(963202),
    E = n(960904),
    f = n(830121),
    h = n(15274),
    p = n(924301),
    I = n(543842),
    m = n(754688),
    T = n(336197),
    S = n(977156),
    g = n(341907),
    A = n(540709),
    N = n(881706),
    R = n(701190),
    O = n(944486),
    v = n(914010),
    C = n(771845),
    L = n(626135),
    D = n(591759);
n(782568);
var y = n(981631),
    b = n(49898),
    M = n(128449),
    P = n(46140);
async function U(e, t) {
    await s.Z.dispatch({
        type: 'INVITE_MODAL_OPEN',
        invite: e,
        code: t,
        context: y.IlC.APP
    });
}
async function w(e) {
    var t;
    let n = R.Z.getInvite(e.code);
    if (null == n) {
        let { invite: t } = await o.Z.resolveInvite(e.code, 'Markdown Link');
        n = t;
    }
    if (null == n) return;
    if (n.state === y.r2o.EXPIRED || n.state === y.r2o.BANNED || n.state === y.r2o.ERROR) {
        await U(n, e.code);
        return;
    }
    let r = C.ZP.getFlattenedGuildIds(),
        i = null == n ? void 0 : null === (t = n.guild) || void 0 === t ? void 0 : t.id;
    null != i && r.includes(i) ? o.Z.transitionToInviteSync(n) : await U(n, e.code);
}
let x = {
    skipExtensionCheck: void 0,
    analyticsLocations: []
};
function G(e) {
    let { skipExtensionCheck: t, analyticsLocations: s } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : x,
        o = (0, f.zO)(e);
    if (null != o && (o.type === E.g.INVITE || o.type === E.g.EMBEDDED_ACTIVITY_INVITE)) return (e) => (null == e || e.preventDefault(), w(o), !0);
    if (null != o && o.type === E.g.APP_DIRECTORY_PROFILE)
        return (e) => {
            var t;
            null == e || e.preventDefault();
            let { code: r } = o,
                a = null !== (t = v.Z.getGuildId()) && void 0 !== t ? t : void 0;
            return (
                L.default.track(y.rMx.APP_DIRECTORY_PROFILE_EMBED_URL_CLICKED, {
                    application_id: r,
                    device_platform: i.tq ? 'mobile_web' : 'desktop_web',
                    guild_id: a,
                    channel_id: O.Z.getChannelId()
                }),
                n
                    .e('56630')
                    .then(n.bind(n, 147890))
                    .then((e) => {
                        let { goToAppDirectory: t } = e,
                            { ApplicationDirectoryViews: i } = n(132871);
                        t({
                            view: i.APPLICATION,
                            applicationId: r,
                            guildId: a,
                            entrypoint: { name: d.ApplicationDirectoryEntrypointNames.APPLICATION_DIRECTORY_URL }
                        });
                    }),
                !0
            );
        };
    if (null != o && o.type === E.g.GUILD_PRODUCT)
        return (e) => {
            null == e || e.preventDefault();
            let [t, r] = o.code.split('-');
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
    if (null != o && o.type === E.g.QUESTS_EMBED && (0, S.cB)({ location: P.dr.EMBED_MOBILE }))
        return (e) => (
            null == e || e.preventDefault(),
            Promise.resolve()
                .then(n.bind(n, 341907))
                .then((e) => {
                    let { navigateToQuestHome: t } = e;
                    t(P.dr.CODED_LINK, a.j.QUEST_SHARE_LINK, o.code);
                }),
            !0
        );
    if (null != o && o.type === E.g.DISCOVERY_GAME && (0, _.rx)('discovery_coded_link'))
        return (e) => (
            null == e || e.preventDefault(),
            Promise.resolve()
                .then(n.bind(n, 749681))
                .then((e) => {
                    let { transitionToGlobalDiscovery: t } = e;
                    t({
                        tab: b.F$.SERVERS,
                        selectedServersTab: M.vf.GUILDS,
                        extra: { search: '?game='.concat(o.code) }
                    });
                }),
            !0
        );
    let { path: R, hostname: C = '', host: U, query: G, hash: k } = r.parse(e),
        B = D.Z.isDiscordHostname(C) || D.Z.isDiscordLocalhost(U, C);
    if (B && (null == R ? void 0 : R.startsWith('/application-directory'))) {
        let e;
        let t = R.split('/'),
            [, , r, a] = t;
        5 === t.length && (e = t[4]);
        let s = null != r && (0, c.BH)(r) ? r : void 0;
        return (t) => {
            var o;
            null == t || t.preventDefault();
            let { ApplicationDirectoryProfileSections: l } = n(272242),
                { ApplicationDirectoryViews: u } = n(132871),
                c = null !== (o = v.Z.getGuildId()) && void 0 !== o ? o : void 0,
                _ = u.HOME;
            return (
                'search' === r && (_ = u.SEARCH),
                null != s &&
                    ((_ = u.APPLICATION),
                    L.default.track(y.rMx.APP_DIRECTORY_PROFILE_EMBED_URL_CLICKED, {
                        application_id: s,
                        device_platform: i.tq ? 'mobile_web' : 'desktop_web',
                        guild_id: c,
                        channel_id: O.Z.getChannelId()
                    })),
                n
                    .e('56630')
                    .then(n.bind(n, 147890))
                    .then((t) => {
                        let { goToAppDirectory: n } = t;
                        n({
                            view: _,
                            applicationId: s,
                            guildId: c,
                            applicationSection: (0, I.Z)(l, a),
                            entrypoint: { name: d.ApplicationDirectoryEntrypointNames.APPLICATION_DIRECTORY_URL },
                            skuId: e
                        });
                    }),
                !0
            );
        };
    }
    if (null != R && B && D.Z.isAppRoute(R)) {
        let e = {
            navigationReplace: !1,
            openChannel: !0
        };
        return null != G && (e.search = G), null != k && (e.hash = k), (t) => (null == t || t.preventDefault(), (0, T.Z)(R, e), !0);
    }
    if (null != R && B) {
        let { getOAuth2AuthorizeProps: t, openOAuth2ModalWithCreateGuildModal: r } = n(69580),
            i = t(e);
        if (null != i) return (e) => (null == e || e.preventDefault(), null != o && o.type === E.g.APP_OAUTH2_LINK && u.ZP.trackWithMetadata(y.rMx.APP_OAUTH2_LINK_EMBED_URL_CLICKED, { application_id: i.clientId }), r(i), !0);
    }
    let F = (0, m.Ao)(R);
    if (null != R && B && null != F)
        return (e) => {
            null == e || e.preventDefault();
            let t = v.Z.getGuildId();
            null != F.guildId && '' !== F.guildId && F.guildId !== t && (0, T.Z)(y.Z5c.CHANNEL(F.guildId));
            let n = p.ZP.getGuildScheduledEvent(F.guildEventId);
            return null != n && (0, h.bO)({ eventId: n.id }), !0;
        };
    if (B && (null == R ? void 0 : R.startsWith('/settings/'))) {
        let { default: e } = n(357269),
            t = e(R);
        if (null != t)
            return (e) => (
                null == e || e.preventDefault(),
                l.Z.open(t.section, t.subsection, {
                    openWithoutBackstack: !1,
                    impressionSource: t.source,
                    analyticsLocations: s
                }),
                !0
            );
    }
    return B && (null == R ? void 0 : R.startsWith('/discovery/quests')) ? (e) => (null == e || e.preventDefault(), (0, g.navigateToQuestHome)(P.dr.BADGE, a.j.QUEST_BADGE), !0) : t || null == (0, N.v)(e) ? void 0 : (t) => (null == t || t.preventDefault(), A.Z.show(e), !0);
}
