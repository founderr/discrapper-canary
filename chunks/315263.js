n.r(t),
    n.d(t, {
        default: function () {
            return G;
        }
    });
var r = n(47120);
var i = n(729594),
    a = n(873546),
    o = n(636977),
    s = n(570140),
    l = n(447543),
    u = n(230711),
    c = n(367907),
    d = n(581364),
    _ = n(132871),
    E = n(963202),
    f = n(960904),
    h = n(830121),
    p = n(831565),
    m = n(15274),
    I = n(924301),
    T = n(543842),
    g = n(754688),
    S = n(336197),
    A = n(977156),
    v = n(341907),
    N = n(540709),
    O = n(881706),
    R = n(701190),
    C = n(944486),
    y = n(914010),
    L = n(771845),
    b = n(626135),
    D = n(591759);
n(782568);
var M = n(981631),
    P = n(46140);
async function U(e, t) {
    await s.Z.dispatch({
        type: 'INVITE_MODAL_OPEN',
        invite: e,
        code: t,
        context: M.IlC.APP
    });
}
async function w(e) {
    var t;
    let n = R.Z.getInvite(e.code);
    if (null == n) {
        let { invite: t } = await l.Z.resolveInvite(e.code, 'Markdown Link');
        n = t;
    }
    if (null == n) return;
    if (n.state === M.r2o.EXPIRED || n.state === M.r2o.BANNED || n.state === M.r2o.ERROR) {
        await U(n, e.code);
        return;
    }
    let r = L.ZP.getFlattenedGuildIds(),
        i = null == n ? void 0 : null === (t = n.guild) || void 0 === t ? void 0 : t.id;
    null != i && r.includes(i) ? l.Z.transitionToInviteSync(n) : await U(n, e.code);
}
let x = {
    skipExtensionCheck: void 0,
    analyticsLocations: []
};
function G(e) {
    let { skipExtensionCheck: t, analyticsLocations: r } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : x,
        s = (0, h.zO)(e);
    if (null != s && (s.type === f.g.INVITE || s.type === f.g.EMBEDDED_ACTIVITY_INVITE)) return (e) => (null == e || e.preventDefault(), w(s), !0);
    if (null != s && s.type === f.g.APP_DIRECTORY_PROFILE)
        return (e) => {
            var t;
            null == e || e.preventDefault();
            let { code: r } = s,
                i = null !== (t = y.Z.getGuildId()) && void 0 !== t ? t : void 0;
            return (
                b.default.track(M.rMx.APP_DIRECTORY_PROFILE_EMBED_URL_CLICKED, {
                    application_id: r,
                    device_platform: a.tq ? 'mobile_web' : 'desktop_web',
                    guild_id: i,
                    channel_id: C.Z.getChannelId()
                }),
                Promise.resolve()
                    .then(n.bind(n, 147890))
                    .then((e) => {
                        let { goToAppDirectory: t } = e,
                            { ApplicationDirectoryViews: a } = n(132871);
                        t({
                            view: a.APPLICATION,
                            applicationId: r,
                            guildId: i,
                            entrypoint: { name: _.ApplicationDirectoryEntrypointNames.APPLICATION_DIRECTORY_URL }
                        });
                    }),
                !0
            );
        };
    if (null != s && s.type === f.g.GUILD_PRODUCT)
        return (e) => {
            null == e || e.preventDefault();
            let [t, r] = s.code.split('-');
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
    if (null != s && s.type === f.g.QUESTS_EMBED && (0, A.cB)({ location: P.dr.EMBED_MOBILE }))
        return (e) => (
            null == e || e.preventDefault(),
            Promise.resolve()
                .then(n.bind(n, 341907))
                .then((e) => {
                    let { navigateToQuestHome: t } = e;
                    t(P.dr.CODED_LINK, o.j.QUEST_SHARE_LINK, s.code);
                }),
            !0
        );
    if (null != s && s.type === f.g.DISCOVERY_GAME && (0, E.rx)('discovery_coded_link') && (0, p.a)({ location: 'discovery_coded_link' })) return (e) => (null == e || e.preventDefault(), (0, S.Z)(M.Z5c.GLOBAL_DISCOVERY_SERVERS, { search: '?game='.concat(s.code) }), !0);
    let { path: l, hostname: R = '', host: L, query: U, hash: G } = i.parse(e),
        k = D.Z.isDiscordHostname(R) || D.Z.isDiscordLocalhost(L, R);
    if (k && (null == l ? void 0 : l.startsWith('/application-directory'))) {
        let e;
        let t = l.split('/'),
            [, , r, i] = t;
        5 === t.length && (e = t[4]);
        let o = null != r && (0, d.BH)(r) ? r : void 0;
        return (t) => {
            var s;
            null == t || t.preventDefault();
            let { ApplicationDirectoryProfileSections: l } = n(272242),
                { ApplicationDirectoryViews: u } = n(132871),
                c = null !== (s = y.Z.getGuildId()) && void 0 !== s ? s : void 0,
                d = u.HOME;
            return (
                'search' === r && (d = u.SEARCH),
                null != o &&
                    ((d = u.APPLICATION),
                    b.default.track(M.rMx.APP_DIRECTORY_PROFILE_EMBED_URL_CLICKED, {
                        application_id: o,
                        device_platform: a.tq ? 'mobile_web' : 'desktop_web',
                        guild_id: c,
                        channel_id: C.Z.getChannelId()
                    })),
                Promise.resolve()
                    .then(n.bind(n, 147890))
                    .then((t) => {
                        let { goToAppDirectory: n } = t;
                        n({
                            view: d,
                            applicationId: o,
                            guildId: c,
                            applicationSection: (0, T.Z)(l, i),
                            entrypoint: { name: _.ApplicationDirectoryEntrypointNames.APPLICATION_DIRECTORY_URL },
                            skuId: e
                        });
                    }),
                !0
            );
        };
    }
    if (null != l && k && D.Z.isAppRoute(l)) {
        let e = {
            navigationReplace: !1,
            openChannel: !0
        };
        return null != U && (e.search = U), null != G && (e.hash = G), (t) => (null == t || t.preventDefault(), (0, S.Z)(l, e), !0);
    }
    if (null != l && k) {
        let { getOAuth2AuthorizeProps: t, openOAuth2ModalWithCreateGuildModal: r } = n(69580),
            i = t(e);
        if (null != i) return (e) => (null == e || e.preventDefault(), null != s && s.type === f.g.APP_OAUTH2_LINK && c.ZP.trackWithMetadata(M.rMx.APP_OAUTH2_LINK_EMBED_URL_CLICKED, { application_id: i.clientId }), r(i), !0);
    }
    let B = (0, g.Ao)(l);
    if (null != l && k && null != B)
        return (e) => {
            null == e || e.preventDefault();
            let t = y.Z.getGuildId();
            null != B.guildId && '' !== B.guildId && B.guildId !== t && (0, S.Z)(M.Z5c.CHANNEL(B.guildId));
            let n = I.ZP.getGuildScheduledEvent(B.guildEventId);
            return null != n && (0, m.bO)({ eventId: n.id }), !0;
        };
    if (k && (null == l ? void 0 : l.startsWith('/settings/'))) {
        let { default: e } = n(357269),
            t = e(l);
        if (null != t)
            return (e) => (
                null == e || e.preventDefault(),
                u.Z.open(t.section, t.subsection, {
                    openWithoutBackstack: !1,
                    impressionSource: t.source,
                    analyticsLocations: r
                }),
                !0
            );
    }
    return k && (null == l ? void 0 : l.startsWith('/discovery/quests')) ? (e) => (null == e || e.preventDefault(), (0, v.navigateToQuestHome)(P.dr.BADGE, o.j.QUEST_BADGE), !0) : t || null == (0, O.v)(e) ? void 0 : (t) => (null == t || t.preventDefault(), N.Z.show(e), !0);
}
