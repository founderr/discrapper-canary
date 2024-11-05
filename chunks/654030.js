n(47120);
var i,
    r = n(200651),
    l = n(192379),
    a = n(442837),
    o = n(481060),
    s = n(278323),
    c = n(224706),
    d = n(763472),
    u = n(498179),
    m = n(276852),
    h = n(994339),
    f = n(275920),
    p = n(917621),
    g = n(431583),
    _ = n(592745),
    C = n(952164),
    E = n(768419),
    I = n(456432),
    x = n(347475),
    v = n(789407),
    N = n(598077),
    T = n(757266),
    S = n(831506),
    b = n(271383),
    A = n(283595),
    j = n(293273),
    Z = n(594174),
    R = n(181106),
    P = n(417363),
    y = n(768581),
    L = n(358085),
    O = n(804739),
    M = n(410575),
    k = n(981631),
    D = n(701488);
function B(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let w = { spotify: 'Spotify' };
class U extends (i = l.PureComponent) {
    getCoverImage() {
        let { activity: e, connectedApplication: t, application: n, isPreview: i, message: r } = this.props;
        if (null != n && (i || (null != r && (0, h.Z)(e, r, n.id)))) {
            let t = (0, m.Z)(e, n.id);
            if (null != t) return t;
        }
        return null == n || n instanceof v.ZP
            ? null
            : y.ZP.getApplicationIconURL({
                  id: n.id,
                  icon: null != t ? t.coverImage : n.coverImage,
                  size: D.cc
              });
    }
    handleOpenSpotifyTrack(e) {
        (0, C.aG)(e);
    }
    handleOpenSpotifyArtist(e, t, n) {
        (0, C.d$)(e, t, n);
    }
    handleOpenSpotifyAlbum(e, t) {
        (0, C.Z5)(e, t);
    }
    shouldRenderCustomButton() {
        let { isLaunchable: e, application: t } = this.props;
        return null != t && null != t.primarySkuId && !e && L.isPlatformEmbedded;
    }
    render() {
        return (0, r.jsx)(M.Z, {
            section: M.Z.Sections.APPLICATION_EMBED,
            children: this.renderEmbed()
        });
    }
    constructor(...e) {
        super(...e),
            B(this, 'state', { sending: !1 }),
            B(this, 'handleJoin', () => {
                let { activity: e, analyticsLocations: t, userId: n, message: i, guildId: r, channelId: l } = this.props;
                if (null != e && null != n && null != i && null != e.session_id && null != e.application_id) {
                    var a, o;
                    c.Z.join({
                        userId: n,
                        sessionId: e.session_id,
                        applicationId: e.application_id,
                        channelId: l,
                        messageId: i.id,
                        source: k.Sbl.MESSAGE_EMBED,
                        analyticsLocations: t,
                        partyId: null === (a = e.party) || void 0 === a ? void 0 : a.id
                    }),
                        (0, f.Z)({
                            type: k.q5t.JOIN,
                            source: k.Sbl.MESSAGE_EMBED,
                            userId: n,
                            guildId: r,
                            channelId: l,
                            applicationId: e.application_id,
                            partyId: null === (o = e.party) || void 0 === o ? void 0 : o.id,
                            messageId: i.id,
                            analyticsLocations: t
                        });
                }
            }),
            B(this, 'handleInvite', async () => {
                let { activity: e, channelId: t } = this.props;
                if (null != e && null != t)
                    try {
                        this.setState({ sending: !0 }),
                            await s.Z.sendActivityInvite({
                                type: k.mFx.JOIN,
                                channelId: t,
                                activity: e,
                                location: k.Sbl.MESSAGE_EMBED
                            });
                    } finally {
                        this.setState({ sending: !1 });
                    }
            }),
            B(this, 'handleSync', () => {
                let { activity: e, userId: t } = this.props;
                null != e && null != t && d.Z_(e, t);
            }),
            B(this, 'handleDownloadApp', () => {
                (0, o.openModal)((e) =>
                    (0, r.jsx)(g.default, {
                        source: 'Game Invite',
                        ...e
                    })
                );
            }),
            B(this, 'renderUserPopout', (e, t) => {
                let { channelId: n, guildId: i, message: l, analyticsLocations: a } = this.props;
                return null == n
                    ? null
                    : (0, r.jsx)(x.Z, {
                          ...t,
                          userId: e.id,
                          guildId: null != i ? i : void 0,
                          channelId: n,
                          messageId: null == l ? void 0 : l.id,
                          newAnalyticsLocations: a
                      });
            }),
            B(this, 'renderSpotifyJoinButton', (e) => {
                let { channelId: t, guildId: n } = this.props;
                return (0, r.jsx)(I.Z, {
                    guildId: null != n ? n : void 0,
                    channelId: t,
                    source: 'Invite Embed',
                    ...e
                });
            }),
            B(this, 'renderCustomButton', (e) => {
                let { application: t } = this.props;
                return (0, r.jsx)(u.Z, {
                    ...e,
                    source: k.Sbl.MESSAGE_EMBED,
                    application: t
                });
            }),
            B(this, 'renderEmbed', () => {
                let e;
                let { activity: t, partyId: n, myPartyId: i, application: l, partyMembers: a, isPreview: o, isLaunching: s, isSender: c, activityActionType: d, className: u, channelId: m, message: h, hideParty: f, isSyncable: g, isLaunchable: _, guildId: C } = this.props;
                if (null != l) e = l.name;
                else if (null != n) {
                    let [t] = n.split(':');
                    e = w[t];
                }
                return (0, r.jsx)(p.Z, {
                    activity: t,
                    partyId: n,
                    myPartyId: i,
                    applicationId: null != l ? l.id : null,
                    name: e,
                    partyMembers: a,
                    className: u,
                    coverImage: this.getCoverImage(),
                    isPreview: o,
                    isGameLaunchable: _,
                    isLoading: s || this.state.sending,
                    activityActionType: d,
                    isInBrowser: !L.isPlatformEmbedded,
                    isSyncable: g,
                    isSender: c,
                    channelId: m,
                    guildId: null != C ? C : void 0,
                    message: h,
                    hideParty: f,
                    onJoin: this.handleJoin,
                    onInvite: this.handleInvite,
                    onSync: this.handleSync,
                    onDownloadApp: this.handleDownloadApp,
                    onOpenSpotifyTrack: this.handleOpenSpotifyTrack,
                    onOpenSpotifyArtist: this.handleOpenSpotifyArtist,
                    onOpenSpotifyAlbum: this.handleOpenSpotifyAlbum,
                    renderUserPopout: this.renderUserPopout,
                    renderSpotifyJoinButton: this.renderSpotifyJoinButton,
                    renderCustomButton: this.shouldRenderCustomButton() ? this.renderCustomButton : null
                });
            });
    }
}
B(U, 'defaultProps', { isPreview: !1 }),
    (t.Z = a.ZP.connectStores([E.Z, S.Z, j.Z, A.Z, _.Z, P.Z, T.Z, R.Z, Z.default, b.ZP], (e) => {
        let { activity: t, analyticsLocations: n, application: i, partyId: r, userId: l, guildId: a } = e,
            { id: o } = null != i ? i : {},
            s = null != t && null != t.party && t.party.id === r ? S.Z.getParty(t.party.id) : null,
            c = null != o ? j.Z.getApplicationActivity(o) : j.Z.findActivity((e) => e.type === k.IIU.LISTENING),
            d = !1;
        null != o && (d = R.Z.getState(o, k.mFx.JOIN) === k.OcF.LOADING);
        let u = Array.from(null != s ? s : []).map((e) => {
                let t = null != a ? b.ZP.getMember(a, e) : null,
                    n = null != t ? t.nick : null,
                    i = Z.default.getUser(e),
                    r = null == i;
                return (
                    null == i && (i = new N.Z({ discriminator: '0005' })),
                    {
                        user: i,
                        unknownUser: r,
                        nick: n
                    }
                );
            }),
            m = null != t && E.Z.canPlay(t),
            h = E.Z.getSyncingWith(),
            f = null != h && null != l && h.userId === l;
        return {
            analyticsLocations: n,
            partyMembers: u,
            connectedApplication: null != o ? T.Z.getApplication(o) : null,
            myPartyId: null != c && null != c.party ? c.party.id : null,
            isLaunching: d,
            isSyncable: m && !f,
            isLaunchable:
                null != o &&
                (0, O.t)({
                    LibraryApplicationStore: A.Z,
                    LaunchableGameStore: _.Z,
                    DispatchApplicationStore: P.Z,
                    ConnectedAppsStore: T.Z,
                    applicationId: o
                })
        };
    })(U));
