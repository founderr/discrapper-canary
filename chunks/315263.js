n.r(t),
    n.d(t, {
        default: function () {
            return w;
        }
    });
var r = n(47120);
var i = n(729594),
    a = n(873546),
    o = n(636977),
    s = n(570140),
    l = n(447543),
    u = n(230711),
    c = n(581364),
    d = n(132871),
    _ = n(963202),
    E = n(960904),
    f = n(830121),
    h = n(831565),
    p = n(15274),
    m = n(924301),
    I = n(543842),
    T = n(754688),
    g = n(336197),
    S = n(977156),
    A = n(540709),
    v = n(881706),
    N = n(701190),
    O = n(944486),
    R = n(914010),
    C = n(771845),
    y = n(626135),
    b = n(591759);
n(782568);
var L = n(981631),
    D = n(46140);
async function M(e, t) {
    await s.Z.dispatch({
        type: 'INVITE_MODAL_OPEN',
        invite: e,
        code: t,
        context: L.IlC.APP
    });
}
async function P(e) {
    var t;
    let n = N.Z.getInvite(e.code);
    if (null == n) {
        let { invite: t } = await l.Z.resolveInvite(e.code, 'Markdown Link');
        n = t;
    }
    if (null == n) return;
    if (n.state === L.r2o.EXPIRED || n.state === L.r2o.BANNED || n.state === L.r2o.ERROR) {
        await M(n, e.code);
        return;
    }
    let r = C.ZP.getFlattenedGuildIds(),
        i = null == n ? void 0 : null === (t = n.guild) || void 0 === t ? void 0 : t.id;
    null != i && r.includes(i) ? l.Z.transitionToInviteSync(n) : await M(n, e.code);
}
let U = {
    skipExtensionCheck: void 0,
    analyticsLocations: []
};
function w(e) {
    let { skipExtensionCheck: t, analyticsLocations: r } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : U,
        s = (0, f.zO)(e);
    if (null != s && (s.type === E.g.INVITE || s.type === E.g.EMBEDDED_ACTIVITY_INVITE)) return (e) => (null == e || e.preventDefault(), P(s), !0);
    if (null != s && s.type === E.g.APP_DIRECTORY_PROFILE)
        return (e) => {
            var t;
            null == e || e.preventDefault();
            let { code: r } = s,
                i = null !== (t = R.Z.getGuildId()) && void 0 !== t ? t : void 0;
            return (
                y.default.track(L.rMx.APP_DIRECTORY_PROFILE_EMBED_URL_CLICKED, {
                    application_id: r,
                    device_platform: a.tq ? 'mobile_web' : 'desktop_web',
                    guild_id: i,
                    channel_id: O.Z.getChannelId()
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
                            entrypoint: { name: d.ApplicationDirectoryEntrypointNames.APPLICATION_DIRECTORY_URL }
                        });
                    }),
                !0
            );
        };
    if (null != s && s.type === E.g.GUILD_PRODUCT)
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
    if (null != s && s.type === E.g.QUESTS_EMBED && (0, S.cB)({ location: D.dr.EMBED_MOBILE }))
        return (e) => (
            null == e || e.preventDefault(),
            Promise.resolve()
                .then(n.bind(n, 341907))
                .then((e) => {
                    let { navigateToQuestHome: t } = e;
                    t(D.dr.CODED_LINK, o.j.QUEST_SHARE_LINK, s.code);
                }),
            !0
        );
    if (null != s && s.type === E.g.DISCOVERY_GAME && (0, _.rx)('discovery_coded_link') && (0, h.a)({ location: 'discovery_coded_link' })) return (e) => (null == e || e.preventDefault(), (0, g.Z)(L.Z5c.GLOBAL_DISCOVERY_SERVERS, { search: '?game='.concat(s.code) }), !0);
    let { path: l, hostname: N = '', host: C, query: M, hash: w } = i.parse(e),
        x = b.Z.isDiscordHostname(N) || b.Z.isDiscordLocalhost(C, N);
    if (x && (null == l ? void 0 : l.startsWith('/application-directory'))) {
        let e;
        let t = l.split('/'),
            [, , r, i] = t;
        5 === t.length && (e = t[4]);
        let o = null != r && (0, c.BH)(r) ? r : void 0;
        return (t) => {
            var s;
            null == t || t.preventDefault();
            let { ApplicationDirectoryProfileSections: l } = n(272242),
                { ApplicationDirectoryViews: u } = n(132871),
                c = null !== (s = R.Z.getGuildId()) && void 0 !== s ? s : void 0,
                _ = u.HOME;
            return (
                'search' === r && (_ = u.SEARCH),
                null != o &&
                    ((_ = u.APPLICATION),
                    y.default.track(L.rMx.APP_DIRECTORY_PROFILE_EMBED_URL_CLICKED, {
                        application_id: o,
                        device_platform: a.tq ? 'mobile_web' : 'desktop_web',
                        guild_id: c,
                        channel_id: O.Z.getChannelId()
                    })),
                Promise.resolve()
                    .then(n.bind(n, 147890))
                    .then((t) => {
                        let { goToAppDirectory: n } = t;
                        n({
                            view: _,
                            applicationId: o,
                            guildId: c,
                            applicationSection: (0, I.Z)(l, i),
                            entrypoint: { name: d.ApplicationDirectoryEntrypointNames.APPLICATION_DIRECTORY_URL },
                            skuId: e
                        });
                    }),
                !0
            );
        };
    }
    if (null != l && x && b.Z.isAppRoute(l)) {
        let e = {
            navigationReplace: !1,
            openChannel: !0
        };
        return null != M && (e.search = M), null != w && (e.hash = w), (t) => (null == t || t.preventDefault(), (0, g.Z)(l, e), !0);
    }
    if (null != l && x) {
        let { getOAuth2AuthorizeProps: t, openOAuth2ModalWithCreateGuildModal: r } = n(69580),
            i = t(e);
        if (null != i) return (e) => (null == e || e.preventDefault(), r(i), !0);
    }
    let G = (0, T.Ao)(l);
    if (null != l && x && null != G)
        return (e) => {
            null == e || e.preventDefault();
            let t = R.Z.getGuildId();
            null != G.guildId && '' !== G.guildId && G.guildId !== t && (0, g.Z)(L.Z5c.CHANNEL(G.guildId));
            let n = m.ZP.getGuildScheduledEvent(G.guildEventId);
            return null != n && (0, p.bO)({ eventId: n.id }), !0;
        };
    if (x && (null == l ? void 0 : l.startsWith('/settings/'))) {
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
    if (!t && null != (0, v.v)(e)) return (t) => (null == t || t.preventDefault(), A.Z.show(e), !0);
}
