n(47120);
var i,
    a = n(200651),
    s = n(192379),
    r = n(442837),
    l = n(481060),
    o = n(278323),
    c = n(224706),
    u = n(763472),
    d = n(498179),
    _ = n(276852),
    E = n(994339),
    I = n(275920),
    m = n(917621),
    f = n(431583),
    T = n(592745),
    h = n(952164),
    N = n(768419),
    p = n(456432),
    C = n(347475),
    g = n(789407),
    S = n(598077),
    A = n(757266),
    x = n(831506),
    R = n(271383),
    v = n(283595),
    O = n(293273),
    M = n(594174),
    L = n(181106),
    Z = n(417363),
    b = n(768581),
    P = n(358085),
    D = n(804739),
    j = n(410575),
    U = n(981631),
    y = n(701488);
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
let k = { spotify: 'Spotify' };
class G extends (i = s.PureComponent) {
    getCoverImage() {
        let { activity: e, connectedApplication: t, application: n, isPreview: i, message: a } = this.props;
        if (null != n && (i || (null != a && (0, E.Z)(e, a, n.id)))) {
            let t = (0, _.Z)(e, n.id);
            if (null != t) return t;
        }
        return null == n || n instanceof g.ZP
            ? null
            : b.ZP.getApplicationIconURL({
                  id: n.id,
                  icon: null != t ? t.coverImage : n.coverImage,
                  size: y.cc
              });
    }
    handleOpenSpotifyTrack(e) {
        (0, h.aG)(e);
    }
    handleOpenSpotifyArtist(e, t, n) {
        (0, h.d$)(e, t, n);
    }
    handleOpenSpotifyAlbum(e, t) {
        (0, h.Z5)(e, t);
    }
    shouldRenderCustomButton() {
        let { isLaunchable: e, application: t } = this.props;
        return null != t && null != t.primarySkuId && !e && P.isPlatformEmbedded;
    }
    render() {
        return (0, a.jsx)(j.Z, {
            section: j.Z.Sections.APPLICATION_EMBED,
            children: this.renderEmbed()
        });
    }
    constructor(...e) {
        super(...e),
            B(this, 'state', { sending: !1 }),
            B(this, 'handleJoin', () => {
                let { activity: e, analyticsLocations: t, userId: n, message: i, guildId: a, channelId: s } = this.props;
                if (null != e && null != n && null != i && null != e.session_id && null != e.application_id) {
                    var r, l;
                    c.Z.join({
                        userId: n,
                        sessionId: e.session_id,
                        applicationId: e.application_id,
                        channelId: s,
                        messageId: i.id,
                        source: U.Sbl.MESSAGE_EMBED,
                        analyticsLocations: t,
                        partyId: null === (r = e.party) || void 0 === r ? void 0 : r.id
                    }),
                        (0, I.Z)({
                            type: U.q5t.JOIN,
                            source: U.Sbl.MESSAGE_EMBED,
                            userId: n,
                            guildId: a,
                            channelId: s,
                            applicationId: e.application_id,
                            partyId: null === (l = e.party) || void 0 === l ? void 0 : l.id,
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
                            await o.Z.sendActivityInvite({
                                type: U.mFx.JOIN,
                                channelId: t,
                                activity: e,
                                location: U.Sbl.MESSAGE_EMBED
                            });
                    } finally {
                        this.setState({ sending: !1 });
                    }
            }),
            B(this, 'handleSync', () => {
                let { activity: e, userId: t } = this.props;
                null != e && null != t && u.Z_(e, t);
            }),
            B(this, 'handleDownloadApp', () => {
                (0, l.openModal)((e) =>
                    (0, a.jsx)(f.default, {
                        source: 'Game Invite',
                        ...e
                    })
                );
            }),
            B(this, 'renderUserPopout', (e, t) => {
                let { channelId: n, guildId: i, message: s, analyticsLocations: r } = this.props;
                return null == n
                    ? null
                    : (0, a.jsx)(C.Z, {
                          ...t,
                          userId: e.id,
                          guildId: null != i ? i : void 0,
                          channelId: n,
                          messageId: null == s ? void 0 : s.id,
                          newAnalyticsLocations: r
                      });
            }),
            B(this, 'renderSpotifyJoinButton', (e) => {
                let { channelId: t, guildId: n } = this.props;
                return (0, a.jsx)(p.Z, {
                    guildId: null != n ? n : void 0,
                    channelId: t,
                    source: 'Invite Embed',
                    ...e
                });
            }),
            B(this, 'renderCustomButton', (e) => {
                let { application: t } = this.props;
                return (0, a.jsx)(d.Z, {
                    ...e,
                    source: U.Sbl.MESSAGE_EMBED,
                    application: t
                });
            }),
            B(this, 'renderEmbed', () => {
                let e;
                let { activity: t, partyId: n, myPartyId: i, application: s, partyMembers: r, isPreview: l, isLaunching: o, isSender: c, activityActionType: u, className: d, channelId: _, message: E, hideParty: I, isSyncable: f, isLaunchable: T, guildId: h } = this.props;
                if (null != s) e = s.name;
                else if (null != n) {
                    let [t] = n.split(':');
                    e = k[t];
                }
                return (0, a.jsx)(m.Z, {
                    activity: t,
                    partyId: n,
                    myPartyId: i,
                    applicationId: null != s ? s.id : null,
                    name: e,
                    partyMembers: r,
                    className: d,
                    coverImage: this.getCoverImage(),
                    isPreview: l,
                    isGameLaunchable: T,
                    isLoading: o || this.state.sending,
                    activityActionType: u,
                    isInBrowser: !P.isPlatformEmbedded,
                    isSyncable: f,
                    isSender: c,
                    channelId: _,
                    guildId: null != h ? h : void 0,
                    message: E,
                    hideParty: I,
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
B(G, 'defaultProps', { isPreview: !1 }),
    (t.Z = r.ZP.connectStores([N.Z, x.Z, O.Z, v.Z, T.Z, Z.Z, A.Z, L.Z, M.default, R.ZP], (e) => {
        let { activity: t, analyticsLocations: n, application: i, partyId: a, userId: s, guildId: r } = e,
            { id: l } = null != i ? i : {},
            o = null != t && null != t.party && t.party.id === a ? x.Z.getParty(t.party.id) : null,
            c = null != l ? O.Z.getApplicationActivity(l) : O.Z.findActivity((e) => e.type === U.IIU.LISTENING),
            u = !1;
        null != l && (u = L.Z.getState(l, U.mFx.JOIN) === U.OcF.LOADING);
        let d = Array.from(null != o ? o : []).map((e) => {
                let t = null != r ? R.ZP.getMember(r, e) : null,
                    n = null != t ? t.nick : null,
                    i = M.default.getUser(e),
                    a = null == i;
                return (
                    null == i && (i = new S.Z({ discriminator: '0005' })),
                    {
                        user: i,
                        unknownUser: a,
                        nick: n
                    }
                );
            }),
            _ = null != t && N.Z.canPlay(t),
            E = N.Z.getSyncingWith(),
            I = null != E && null != s && E.userId === s;
        return {
            analyticsLocations: n,
            partyMembers: d,
            connectedApplication: null != l ? A.Z.getApplication(l) : null,
            myPartyId: null != c && null != c.party ? c.party.id : null,
            isLaunching: u,
            isSyncable: _ && !I,
            isLaunchable:
                null != l &&
                (0, D.t)({
                    LibraryApplicationStore: v.Z,
                    LaunchableGameStore: T.Z,
                    DispatchApplicationStore: Z.Z,
                    ConnectedAppsStore: A.Z,
                    applicationId: l
                })
        };
    })(G));
