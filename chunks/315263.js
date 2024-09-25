n.r(t),
    n.d(t, {
        default: function () {
            return P;
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
    _ = n(960904),
    E = n(830121),
    f = n(15274),
    h = n(924301),
    p = n(543842),
    m = n(754688),
    I = n(336197),
    T = n(977156),
    g = n(540709),
    S = n(881706),
    A = n(701190),
    v = n(944486),
    N = n(914010),
    O = n(771845),
    R = n(626135),
    C = n(591759);
n(782568);
var y = n(981631),
    b = n(46140);
async function L(e, t) {
    await s.Z.dispatch({
        type: 'INVITE_MODAL_OPEN',
        invite: e,
        code: t,
        context: y.IlC.APP
    });
}
async function D(e) {
    var t;
    let n = A.Z.getInvite(e.code);
    if (null == n) {
        let { invite: t } = await l.Z.resolveInvite(e.code, 'Markdown Link');
        n = t;
    }
    if (null == n) return;
    if (n.state === y.r2o.EXPIRED || n.state === y.r2o.BANNED || n.state === y.r2o.ERROR) {
        await L(n, e.code);
        return;
    }
    let r = O.ZP.getFlattenedGuildIds(),
        i = null == n ? void 0 : null === (t = n.guild) || void 0 === t ? void 0 : t.id;
    null != i && r.includes(i) ? l.Z.transitionToInviteSync(n) : await L(n, e.code);
}
let M = {
    skipExtensionCheck: void 0,
    analyticsLocations: []
};
function P(e) {
    let { skipExtensionCheck: t, analyticsLocations: r } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : M,
        s = (0, E.zO)(e);
    if (null != s && (s.type === _.g.INVITE || s.type === _.g.EMBEDDED_ACTIVITY_INVITE)) return (e) => (null == e || e.preventDefault(), D(s), !0);
    if (null != s && s.type === _.g.APP_DIRECTORY_PROFILE)
        return (e) => {
            var t;
            null == e || e.preventDefault();
            let { code: r } = s,
                i = null !== (t = N.Z.getGuildId()) && void 0 !== t ? t : void 0;
            return (
                R.default.track(y.rMx.APP_DIRECTORY_PROFILE_EMBED_URL_CLICKED, {
                    application_id: r,
                    device_platform: a.tq ? 'mobile_web' : 'desktop_web',
                    guild_id: i,
                    channel_id: v.Z.getChannelId()
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
    if (null != s && s.type === _.g.GUILD_PRODUCT)
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
    if (null != s && s.type === _.g.QUESTS_EMBED && (0, T.cB)({ location: b.dr.EMBED_MOBILE }))
        return (e) => (
            null == e || e.preventDefault(),
            Promise.resolve()
                .then(n.bind(n, 341907))
                .then((e) => {
                    let { navigateToQuestHome: t } = e;
                    t(b.dr.CODED_LINK, o.j.QUEST_SHARE_LINK, s.code);
                }),
            !0
        );
    let { path: l, hostname: A = '', host: O, query: L, hash: P } = i.parse(e),
        U = C.Z.isDiscordHostname(A) || C.Z.isDiscordLocalhost(O, A);
    if (U && (null == l ? void 0 : l.startsWith('/application-directory'))) {
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
                c = null !== (s = N.Z.getGuildId()) && void 0 !== s ? s : void 0,
                _ = u.HOME;
            return (
                'search' === r && (_ = u.SEARCH),
                null != o &&
                    ((_ = u.APPLICATION),
                    R.default.track(y.rMx.APP_DIRECTORY_PROFILE_EMBED_URL_CLICKED, {
                        application_id: o,
                        device_platform: a.tq ? 'mobile_web' : 'desktop_web',
                        guild_id: c,
                        channel_id: v.Z.getChannelId()
                    })),
                Promise.resolve()
                    .then(n.bind(n, 147890))
                    .then((t) => {
                        let { goToAppDirectory: n } = t;
                        n({
                            view: _,
                            applicationId: o,
                            guildId: c,
                            applicationSection: (0, p.Z)(l, i),
                            entrypoint: { name: d.ApplicationDirectoryEntrypointNames.APPLICATION_DIRECTORY_URL },
                            skuId: e
                        });
                    }),
                !0
            );
        };
    }
    if (null != l && U && C.Z.isAppRoute(l)) {
        let e = {
            navigationReplace: !1,
            openChannel: !0
        };
        return null != L && (e.search = L), null != P && (e.hash = P), (t) => (null == t || t.preventDefault(), (0, I.Z)(l, e), !0);
    }
    if (null != l && U) {
        let { getOAuth2AuthorizeProps: t, openOAuth2ModalWithCreateGuildModal: r } = n(69580),
            i = t(e);
        if (null != i) return (e) => (null == e || e.preventDefault(), r(i), !0);
    }
    let w = (0, m.Ao)(l);
    if (null != l && U && null != w)
        return (e) => {
            null == e || e.preventDefault();
            let t = N.Z.getGuildId();
            null != w.guildId && '' !== w.guildId && w.guildId !== t && (0, I.Z)(y.Z5c.CHANNEL(w.guildId));
            let n = h.ZP.getGuildScheduledEvent(w.guildEventId);
            return null != n && (0, f.bO)({ eventId: n.id }), !0;
        };
    if (U && (null == l ? void 0 : l.startsWith('/settings/'))) {
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
    if (!t && null != (0, S.v)(e)) return (t) => (null == t || t.preventDefault(), g.Z.show(e), !0);
}
