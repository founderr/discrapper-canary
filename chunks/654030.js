var r,
    i = n(47120);
var a = n(735250),
    o = n(470079),
    s = n(442837),
    l = n(481060),
    u = n(278323),
    c = n(224706),
    d = n(763472),
    _ = n(498179),
    E = n(276852),
    f = n(994339),
    h = n(275920),
    p = n(917621),
    m = n(431583),
    I = n(592745),
    T = n(952164),
    g = n(768419),
    S = n(456432),
    A = n(347475),
    v = n(789407),
    N = n(598077),
    O = n(757266),
    R = n(831506),
    C = n(271383),
    y = n(283595),
    L = n(293273),
    b = n(594174),
    D = n(181106),
    M = n(417363),
    P = n(768581),
    U = n(358085),
    w = n(804739),
    x = n(410575),
    G = n(981631),
    k = n(701488);
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
let F = { spotify: 'Spotify' };
class Z extends (r = o.PureComponent) {
    getCoverImage() {
        let { activity: e, connectedApplication: t, application: n, isPreview: r, message: i } = this.props;
        if (null != n && (r || (null != i && (0, f.Z)(e, i, n.id)))) {
            let t = (0, E.Z)(e, n.id);
            if (null != t) return t;
        }
        return null == n || n instanceof v.ZP
            ? null
            : P.ZP.getApplicationIconURL({
                  id: n.id,
                  icon: null != t ? t.coverImage : n.coverImage,
                  size: k.cc
              });
    }
    handleOpenSpotifyTrack(e) {
        (0, T.aG)(e);
    }
    handleOpenSpotifyArtist(e, t, n) {
        (0, T.d$)(e, t, n);
    }
    handleOpenSpotifyAlbum(e, t) {
        (0, T.Z5)(e, t);
    }
    shouldRenderCustomButton() {
        let { isLaunchable: e, application: t } = this.props;
        return null != t && null != t.primarySkuId && !e && U.isPlatformEmbedded;
    }
    render() {
        return (0, a.jsx)(x.Z, {
            section: x.Z.Sections.APPLICATION_EMBED,
            children: this.renderEmbed()
        });
    }
    constructor(...e) {
        super(...e),
            B(this, 'state', { sending: !1 }),
            B(this, 'handleJoin', () => {
                let { activity: e, analyticsLocations: t, userId: n, message: r, guildId: i, channelId: a } = this.props;
                if (null != e && null != n && null != r && null != e.session_id && null != e.application_id) {
                    var o, s;
                    c.Z.join({
                        userId: n,
                        sessionId: e.session_id,
                        applicationId: e.application_id,
                        channelId: a,
                        messageId: r.id,
                        source: G.Sbl.MESSAGE_EMBED,
                        analyticsLocations: t,
                        partyId: null === (o = e.party) || void 0 === o ? void 0 : o.id
                    }),
                        (0, h.Z)({
                            type: G.q5t.JOIN,
                            source: G.Sbl.MESSAGE_EMBED,
                            userId: n,
                            guildId: i,
                            channelId: a,
                            applicationId: e.application_id,
                            partyId: null === (s = e.party) || void 0 === s ? void 0 : s.id,
                            messageId: r.id,
                            analyticsLocations: t
                        });
                }
            }),
            B(this, 'handleInvite', async () => {
                let { activity: e, channelId: t } = this.props;
                if (null != e && null != t)
                    try {
                        this.setState({ sending: !0 }),
                            await u.Z.sendActivityInvite({
                                type: G.mFx.JOIN,
                                channelId: t,
                                activity: e,
                                location: G.Sbl.MESSAGE_EMBED
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
                (0, l.openModal)((e) =>
                    (0, a.jsx)(m.default, {
                        source: 'Game Invite',
                        ...e
                    })
                );
            }),
            B(this, 'renderUserPopout', (e, t) => {
                let { channelId: n, guildId: r, message: i, analyticsLocations: o } = this.props;
                return null == n
                    ? null
                    : (0, a.jsx)(A.Z, {
                          ...t,
                          userId: e.id,
                          guildId: null != r ? r : void 0,
                          channelId: n,
                          messageId: null == i ? void 0 : i.id,
                          newAnalyticsLocations: o
                      });
            }),
            B(this, 'renderSpotifyJoinButton', (e) => {
                let { channelId: t, guildId: n } = this.props;
                return (0, a.jsx)(S.Z, {
                    guildId: null != n ? n : void 0,
                    channelId: t,
                    source: 'Invite Embed',
                    ...e
                });
            }),
            B(this, 'renderCustomButton', (e) => {
                let { application: t } = this.props;
                return (0, a.jsx)(_.Z, {
                    ...e,
                    source: G.Sbl.MESSAGE_EMBED,
                    application: t
                });
            }),
            B(this, 'renderEmbed', () => {
                let e;
                let { activity: t, partyId: n, myPartyId: r, application: i, partyMembers: o, isPreview: s, isLaunching: l, isSender: u, activityActionType: c, className: d, channelId: _, message: E, hideParty: f, isSyncable: h, isLaunchable: m, guildId: I } = this.props;
                if (null != i) e = i.name;
                else if (null != n) {
                    let [t] = n.split(':');
                    e = F[t];
                }
                return (0, a.jsx)(p.Z, {
                    activity: t,
                    partyId: n,
                    myPartyId: r,
                    applicationId: null != i ? i.id : null,
                    name: e,
                    partyMembers: o,
                    className: d,
                    coverImage: this.getCoverImage(),
                    isPreview: s,
                    isGameLaunchable: m,
                    isLoading: l || this.state.sending,
                    activityActionType: c,
                    isInBrowser: !U.isPlatformEmbedded,
                    isSyncable: h,
                    isSender: u,
                    channelId: _,
                    guildId: null != I ? I : void 0,
                    message: E,
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
B(Z, 'defaultProps', { isPreview: !1 }),
    (t.Z = s.ZP.connectStores([g.Z, R.Z, L.Z, y.Z, I.Z, M.Z, O.Z, D.Z, b.default, C.ZP], (e) => {
        let { activity: t, analyticsLocations: n, application: r, partyId: i, userId: a, guildId: o } = e,
            { id: s } = null != r ? r : {},
            l = null != t && null != t.party && t.party.id === i ? R.Z.getParty(t.party.id) : null,
            u = null != s ? L.Z.getApplicationActivity(s) : L.Z.findActivity((e) => e.type === G.IIU.LISTENING),
            c = !1;
        null != s && (c = D.Z.getState(s, G.mFx.JOIN) === G.OcF.LOADING);
        let d = Array.from(null != l ? l : []).map((e) => {
                let t = null != o ? C.ZP.getMember(o, e) : null,
                    n = null != t ? t.nick : null,
                    r = b.default.getUser(e),
                    i = null == r;
                return (
                    null == r && (r = new N.Z({ discriminator: '0005' })),
                    {
                        user: r,
                        unknownUser: i,
                        nick: n
                    }
                );
            }),
            _ = null != t && g.Z.canPlay(t),
            E = g.Z.getSyncingWith(),
            f = null != E && null != a && E.userId === a,
            h = _ && !f;
        return {
            analyticsLocations: n,
            partyMembers: d,
            connectedApplication: null != s ? O.Z.getApplication(s) : null,
            myPartyId: null != u && null != u.party ? u.party.id : null,
            isLaunching: c,
            isSyncable: h,
            isLaunchable:
                null != s &&
                (0, w.t)({
                    LibraryApplicationStore: y.Z,
                    LaunchableGameStore: I.Z,
                    DispatchApplicationStore: M.Z,
                    ConnectedAppsStore: O.Z,
                    applicationId: s
                })
        };
    })(Z));
