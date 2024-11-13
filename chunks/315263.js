n.r(t),
    n.d(t, {
        default: function () {
            return M;
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
    f = n(960904),
    _ = n(830121),
    p = n(15274),
    h = n(924301),
    m = n(543842),
    g = n(754688),
    E = n(336197),
    v = n(977156),
    I = n(341907),
    b = n(540709),
    S = n(881706),
    T = n(701190),
    y = n(944486),
    A = n(914010),
    N = n(771845),
    C = n(626135),
    R = n(591759);
n(782568);
var O = n(981631),
    D = n(46140);
async function L(e, t) {
    await s.Z.dispatch({
        type: 'INVITE_MODAL_OPEN',
        invite: e,
        code: t,
        context: O.IlC.APP
    });
}
async function x(e) {
    var t;
    let n = T.Z.getInvite(e.code);
    if (null == n) {
        let { invite: t } = await o.Z.resolveInvite(e.code, 'Markdown Link');
        n = t;
    }
    if (null == n) return;
    if (n.state === O.r2o.EXPIRED || n.state === O.r2o.BANNED || n.state === O.r2o.ERROR) {
        await L(n, e.code);
        return;
    }
    let r = N.ZP.getFlattenedGuildIds(),
        i = null == n ? void 0 : null === (t = n.guild) || void 0 === t ? void 0 : t.id;
    null != i && r.includes(i) ? o.Z.transitionToInviteSync(n) : await L(n, e.code);
}
let w = {
    skipExtensionCheck: void 0,
    analyticsLocations: []
};
function M(e) {
    let { skipExtensionCheck: t, analyticsLocations: s } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : w,
        o = (0, _.zO)(e);
    if (null != o && (o.type === f.g.INVITE || o.type === f.g.EMBEDDED_ACTIVITY_INVITE)) return (e) => (null == e || e.preventDefault(), x(o), !0);
    if (null != o && o.type === f.g.APP_DIRECTORY_PROFILE)
        return (e) => {
            var t;
            null == e || e.preventDefault();
            let { code: r } = o,
                a = null !== (t = A.Z.getGuildId()) && void 0 !== t ? t : void 0;
            return (
                C.default.track(O.rMx.APP_DIRECTORY_PROFILE_EMBED_URL_CLICKED, {
                    application_id: r,
                    device_platform: i.tq ? 'mobile_web' : 'desktop_web',
                    guild_id: a,
                    channel_id: y.Z.getChannelId()
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
    if (null != o && o.type === f.g.GUILD_PRODUCT)
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
    if (null != o && o.type === f.g.QUESTS_EMBED && (0, v.cB)({ location: D.dr.EMBED_MOBILE }))
        return (e) => (
            null == e || e.preventDefault(),
            Promise.resolve()
                .then(n.bind(n, 341907))
                .then((e) => {
                    let { navigateToQuestHome: t } = e;
                    t(D.dr.CODED_LINK, a.j.QUEST_SHARE_LINK, o.code);
                }),
            !0
        );
    let { pathname: T, hostname: N = '', host: L, query: M, hash: P } = r.parse(e),
        k = R.Z.isDiscordHostname(N) || R.Z.isDiscordLocalhost(L, N);
    if (k && (null == T ? void 0 : T.startsWith('/application-directory'))) {
        let e;
        let t = T.split('/'),
            [, , r, a] = t;
        5 === t.length && (e = t[4]);
        let s = null != r && (0, c.BH)(r) ? r : void 0;
        return (t) => {
            var o;
            null == t || t.preventDefault();
            let { ApplicationDirectoryProfileSections: l } = n(272242),
                { ApplicationDirectoryViews: u } = n(132871),
                c = null !== (o = A.Z.getGuildId()) && void 0 !== o ? o : void 0,
                f = u.HOME;
            return (
                'search' === r && (f = u.SEARCH),
                null != s &&
                    ((f = u.APPLICATION),
                    C.default.track(O.rMx.APP_DIRECTORY_PROFILE_EMBED_URL_CLICKED, {
                        application_id: s,
                        device_platform: i.tq ? 'mobile_web' : 'desktop_web',
                        guild_id: c,
                        channel_id: y.Z.getChannelId()
                    })),
                n
                    .e('56630')
                    .then(n.bind(n, 147890))
                    .then((t) => {
                        let { goToAppDirectory: n } = t;
                        n({
                            view: f,
                            applicationId: s,
                            guildId: c,
                            applicationSection: (0, m.Z)(l, a),
                            entrypoint: { name: d.ApplicationDirectoryEntrypointNames.APPLICATION_DIRECTORY_URL },
                            skuId: e
                        });
                    }),
                !0
            );
        };
    }
    if (null != T && k && R.Z.isAppRoute(T)) {
        let e = {
            navigationReplace: !1,
            openChannel: !0
        };
        return null != M && (e.search = M), null != P && (e.hash = P), (t) => (null == t || t.preventDefault(), (0, E.Z)(T, e), !0);
    }
    if (null != T && k) {
        let { getOAuth2AuthorizeProps: t, openOAuth2ModalWithCreateGuildModal: r } = n(69580),
            i = t(e);
        if (null != i) return (e) => (null == e || e.preventDefault(), null != o && o.type === f.g.APP_OAUTH2_LINK && u.ZP.trackWithMetadata(O.rMx.APP_OAUTH2_LINK_EMBED_URL_CLICKED, { application_id: i.clientId }), r(i), !0);
    }
    let U = (0, g.Ao)(T);
    if (null != T && k && null != U)
        return (e) => {
            null == e || e.preventDefault();
            let t = A.Z.getGuildId();
            null != U.guildId && '' !== U.guildId && U.guildId !== t && (0, E.Z)(O.Z5c.CHANNEL(U.guildId));
            let n = h.ZP.getGuildScheduledEvent(U.guildEventId);
            return null != n && (0, p.bO)({ eventId: n.id }), !0;
        };
    if (k && (null == T ? void 0 : T.startsWith('/settings/'))) {
        let { default: e } = n(357269),
            t = e(T);
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
    return k && (null == T ? void 0 : T.startsWith('/discovery/quests')) ? (e) => (null == e || e.preventDefault(), (0, I.navigateToQuestHome)(D.dr.BADGE, a.j.QUEST_BADGE), !0) : t || null == (0, S.v)(e) ? void 0 : (t) => (null == t || t.preventDefault(), b.Z.show(e), !0);
}
