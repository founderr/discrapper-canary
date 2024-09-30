n.r(t),
    n.d(t, {
        default: function () {
            return x;
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
    A = n(341907),
    v = n(540709),
    N = n(881706),
    O = n(701190),
    R = n(944486),
    C = n(914010),
    y = n(771845),
    L = n(626135),
    b = n(591759);
n(782568);
var D = n(981631),
    M = n(46140);
async function P(e, t) {
    await s.Z.dispatch({
        type: 'INVITE_MODAL_OPEN',
        invite: e,
        code: t,
        context: D.IlC.APP
    });
}
async function U(e) {
    var t;
    let n = O.Z.getInvite(e.code);
    if (null == n) {
        let { invite: t } = await l.Z.resolveInvite(e.code, 'Markdown Link');
        n = t;
    }
    if (null == n) return;
    if (n.state === D.r2o.EXPIRED || n.state === D.r2o.BANNED || n.state === D.r2o.ERROR) {
        await P(n, e.code);
        return;
    }
    let r = y.ZP.getFlattenedGuildIds(),
        i = null == n ? void 0 : null === (t = n.guild) || void 0 === t ? void 0 : t.id;
    null != i && r.includes(i) ? l.Z.transitionToInviteSync(n) : await P(n, e.code);
}
let w = {
    skipExtensionCheck: void 0,
    analyticsLocations: []
};
function x(e) {
    let { skipExtensionCheck: t, analyticsLocations: r } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : w,
        s = (0, f.zO)(e);
    if (null != s && (s.type === E.g.INVITE || s.type === E.g.EMBEDDED_ACTIVITY_INVITE)) return (e) => (null == e || e.preventDefault(), U(s), !0);
    if (null != s && s.type === E.g.APP_DIRECTORY_PROFILE)
        return (e) => {
            var t;
            null == e || e.preventDefault();
            let { code: r } = s,
                i = null !== (t = C.Z.getGuildId()) && void 0 !== t ? t : void 0;
            return (
                L.default.track(D.rMx.APP_DIRECTORY_PROFILE_EMBED_URL_CLICKED, {
                    application_id: r,
                    device_platform: a.tq ? 'mobile_web' : 'desktop_web',
                    guild_id: i,
                    channel_id: R.Z.getChannelId()
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
    if (null != s && s.type === E.g.QUESTS_EMBED && (0, S.cB)({ location: M.dr.EMBED_MOBILE }))
        return (e) => (
            null == e || e.preventDefault(),
            Promise.resolve()
                .then(n.bind(n, 341907))
                .then((e) => {
                    let { navigateToQuestHome: t } = e;
                    t(M.dr.CODED_LINK, o.j.QUEST_SHARE_LINK, s.code);
                }),
            !0
        );
    if (null != s && s.type === E.g.DISCOVERY_GAME && (0, _.rx)('discovery_coded_link') && (0, h.a)({ location: 'discovery_coded_link' })) return (e) => (null == e || e.preventDefault(), (0, g.Z)(D.Z5c.GLOBAL_DISCOVERY_SERVERS, { search: '?game='.concat(s.code) }), !0);
    let { path: l, hostname: O = '', host: y, query: P, hash: x } = i.parse(e),
        G = b.Z.isDiscordHostname(O) || b.Z.isDiscordLocalhost(y, O);
    if (G && (null == l ? void 0 : l.startsWith('/application-directory'))) {
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
                c = null !== (s = C.Z.getGuildId()) && void 0 !== s ? s : void 0,
                _ = u.HOME;
            return (
                'search' === r && (_ = u.SEARCH),
                null != o &&
                    ((_ = u.APPLICATION),
                    L.default.track(D.rMx.APP_DIRECTORY_PROFILE_EMBED_URL_CLICKED, {
                        application_id: o,
                        device_platform: a.tq ? 'mobile_web' : 'desktop_web',
                        guild_id: c,
                        channel_id: R.Z.getChannelId()
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
    if (null != l && G && b.Z.isAppRoute(l)) {
        let e = {
            navigationReplace: !1,
            openChannel: !0
        };
        return null != P && (e.search = P), null != x && (e.hash = x), (t) => (null == t || t.preventDefault(), (0, g.Z)(l, e), !0);
    }
    if (null != l && G) {
        let { getOAuth2AuthorizeProps: t, openOAuth2ModalWithCreateGuildModal: r } = n(69580),
            i = t(e);
        if (null != i) return (e) => (null == e || e.preventDefault(), r(i), !0);
    }
    let k = (0, T.Ao)(l);
    if (null != l && G && null != k)
        return (e) => {
            null == e || e.preventDefault();
            let t = C.Z.getGuildId();
            null != k.guildId && '' !== k.guildId && k.guildId !== t && (0, g.Z)(D.Z5c.CHANNEL(k.guildId));
            let n = m.ZP.getGuildScheduledEvent(k.guildEventId);
            return null != n && (0, p.bO)({ eventId: n.id }), !0;
        };
    if (G && (null == l ? void 0 : l.startsWith('/settings/'))) {
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
    return G && (null == l ? void 0 : l.startsWith('/discovery/quests')) ? (e) => (null == e || e.preventDefault(), (0, A.navigateToQuestHome)(M.dr.BADGE, o.j.QUEST_BADGE), !0) : t || null == (0, N.v)(e) ? void 0 : (t) => (null == t || t.preventDefault(), v.Z.show(e), !0);
}
