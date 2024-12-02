n.r(t),
    n.d(t, {
        default: function () {
            return w;
        }
    }),
    n(47120);
var r = n(873546),
    i = n(636977),
    a = n(570140),
    s = n(447543),
    o = n(230711),
    l = n(367907),
    u = n(581364),
    c = n(132871),
    d = n(960904),
    f = n(830121),
    _ = n(15274),
    p = n(924301),
    h = n(543842),
    m = n(754688),
    g = n(336197),
    E = n(977156),
    v = n(341907),
    I = n(540709),
    T = n(881706),
    b = n(701190),
    S = n(944486),
    y = n(914010),
    A = n(771845),
    N = n(626135),
    C = n(591759);
n(782568);
var R = n(981631),
    O = n(46140);
async function D(e, t) {
    await a.Z.dispatch({
        type: 'INVITE_MODAL_OPEN',
        invite: e,
        code: t,
        context: R.IlC.APP
    });
}
async function L(e) {
    var t;
    let n = b.Z.getInvite(e.code);
    if (null == n) {
        let { invite: t } = await s.Z.resolveInvite(e.code, 'Markdown Link');
        n = t;
    }
    if (null == n) return;
    if (n.state === R.r2o.EXPIRED || n.state === R.r2o.BANNED || n.state === R.r2o.ERROR) {
        await D(n, e.code);
        return;
    }
    let r = A.ZP.getFlattenedGuildIds(),
        i = null == n ? void 0 : null === (t = n.guild) || void 0 === t ? void 0 : t.id;
    null != i && r.includes(i) ? s.Z.transitionToInviteSync(n) : await D(n, e.code);
}
let x = {
    skipExtensionCheck: void 0,
    analyticsLocations: []
};
function w(e) {
    var t;
    let { skipExtensionCheck: a, analyticsLocations: s } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : x,
        b = (0, f.zO)(e);
    if (null != b && (b.type === d.g.INVITE || b.type === d.g.EMBEDDED_ACTIVITY_INVITE)) return (e) => (null == e || e.preventDefault(), L(b), !0);
    if (null != b && b.type === d.g.APP_DIRECTORY_PROFILE)
        return (e) => {
            var t;
            null == e || e.preventDefault();
            let { code: i } = b,
                a = null !== (t = y.Z.getGuildId()) && void 0 !== t ? t : void 0;
            return (
                N.default.track(R.rMx.APP_DIRECTORY_PROFILE_EMBED_URL_CLICKED, {
                    application_id: i,
                    device_platform: r.tq ? 'mobile_web' : 'desktop_web',
                    guild_id: a,
                    channel_id: S.Z.getChannelId()
                }),
                n
                    .e('56630')
                    .then(n.bind(n, 147890))
                    .then((e) => {
                        let { goToAppDirectory: t } = e,
                            { ApplicationDirectoryViews: r } = n(132871);
                        t({
                            view: r.APPLICATION,
                            applicationId: i,
                            guildId: a,
                            entrypoint: { name: c.ApplicationDirectoryEntrypointNames.APPLICATION_DIRECTORY_URL }
                        });
                    }),
                !0
            );
        };
    if (null != b && b.type === d.g.GUILD_PRODUCT)
        return (e) => {
            null == e || e.preventDefault();
            let [t, r] = b.code.split('-');
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
    if (null != b && b.type === d.g.QUESTS_EMBED && (0, E.cB)({ location: O.dr.EMBED_MOBILE }))
        return (e) => (
            null == e || e.preventDefault(),
            Promise.resolve()
                .then(n.bind(n, 341907))
                .then((e) => {
                    let { navigateToQuestHome: t } = e;
                    t(O.dr.CODED_LINK, i.j.QUEST_SHARE_LINK, b.code);
                }),
            !0
        );
    let { host: A, hostname: D, pathname: w, search: P, hash: M } = null !== (t = C.Z.toURLSafe(e)) && void 0 !== t ? t : {},
        k = C.Z.isDiscordHostname(null != D ? D : null) || C.Z.isDiscordLocalhost(null != A ? A : null, null != D ? D : null);
    if (k && (null == w ? void 0 : w.startsWith('/application-directory'))) {
        let e;
        let t = w.split('/'),
            [, , i, a] = t;
        5 === t.length && (e = t[4]);
        let s = null != i && (0, u.BH)(i) ? i : void 0;
        return (t) => {
            var o;
            null == t || t.preventDefault();
            let { ApplicationDirectoryProfileSections: l } = n(272242),
                { ApplicationDirectoryViews: u } = n(132871),
                d = null !== (o = y.Z.getGuildId()) && void 0 !== o ? o : void 0,
                f = u.HOME;
            return (
                'search' === i && (f = u.SEARCH),
                null != s &&
                    ((f = u.APPLICATION),
                    N.default.track(R.rMx.APP_DIRECTORY_PROFILE_EMBED_URL_CLICKED, {
                        application_id: s,
                        device_platform: r.tq ? 'mobile_web' : 'desktop_web',
                        guild_id: d,
                        channel_id: S.Z.getChannelId()
                    })),
                n
                    .e('56630')
                    .then(n.bind(n, 147890))
                    .then((t) => {
                        let { goToAppDirectory: n } = t;
                        n({
                            view: f,
                            applicationId: s,
                            guildId: d,
                            applicationSection: (0, h.Z)(l, a),
                            entrypoint: { name: c.ApplicationDirectoryEntrypointNames.APPLICATION_DIRECTORY_URL },
                            skuId: e
                        });
                    }),
                !0
            );
        };
    }
    if (null != w && k && C.Z.isAppRoute(w)) {
        let e = {
            navigationReplace: !1,
            openChannel: !0
        };
        return null != P && (e.search = P), null != M && (e.hash = M), (t) => (null == t || t.preventDefault(), (0, g.Z)(w, e), !0);
    }
    if (null != w && k) {
        let { getOAuth2AuthorizeProps: t, openOAuth2ModalWithCreateGuildModal: r } = n(69580),
            i = t(e);
        if (null != i) return (e) => (null == e || e.preventDefault(), null != b && b.type === d.g.APP_OAUTH2_LINK && l.ZP.trackWithMetadata(R.rMx.APP_OAUTH2_LINK_EMBED_URL_CLICKED, { application_id: i.clientId }), r(i), !0);
    }
    let U = (0, m.Ao)(w);
    if (null != w && k && null != U)
        return (e) => {
            null == e || e.preventDefault();
            let t = y.Z.getGuildId();
            null != U.guildId && '' !== U.guildId && U.guildId !== t && (0, g.Z)(R.Z5c.CHANNEL(U.guildId));
            let n = p.ZP.getGuildScheduledEvent(U.guildEventId);
            return null != n && (0, _.bO)({ eventId: n.id }), !0;
        };
    if (k && (null == w ? void 0 : w.startsWith('/settings/'))) {
        let { default: e } = n(357269),
            t = e(w);
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
    return k && (null == w ? void 0 : w.startsWith('/discovery/quests')) ? (e) => (null == e || e.preventDefault(), (0, v.navigateToQuestHome)(O.dr.BADGE, i.j.QUEST_BADGE), !0) : a || null == (0, T.v)(e) ? void 0 : (t) => (null == t || t.preventDefault(), I.Z.show(e), !0);
}
