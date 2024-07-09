n(47120);
var i, a = n(735250), s = n(470079), r = n(442837), l = n(481060), o = n(278323), c = n(224706), d = n(763472), u = n(498179), _ = n(276852), E = n(994339), m = n(275920), I = n(431583), T = n(592745), h = n(952164), N = n(768419), p = n(456432), f = n(103575), C = n(789407), g = n(598077), S = n(757266), A = n(831506), x = n(271383), R = n(283595), O = n(293273), M = n(594174), v = n(181106), L = n(417363), Z = n(243769), P = n(768581), b = n(358085), D = n(804739), j = n(410575), U = n(981631), y = n(701488);
function B(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e;
}
let k = { spotify: 'Spotify' };
class G extends (i = s.PureComponent) {
    getCoverImage() {
        let {
            activity: e,
            connectedApplication: t,
            application: n,
            isPreview: i,
            message: a
        } = this.props;
        if (null != n && (i || null != a && (0, E.Z)(e, a, n.id))) {
            let t = (0, _.Z)(e, n.id);
            if (null != t)
                return t;
        }
        return null == n || n instanceof C.ZP ? null : P.ZP.getApplicationIconURL({
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
        let {
            isLaunchable: e,
            application: t
        } = this.props;
        return null != t && null != t.primarySkuId && !e && b.isPlatformEmbedded;
    }
    render() {
        return (0, a.jsx)(j.Z, {
            section: j.Z.Sections.APPLICATION_EMBED,
            children: this.renderEmbed()
        });
    }
    constructor(...e) {
        super(...e), B(this, 'state', { sending: !1 }), B(this, 'handleJoin', () => {
            let {
                activity: e,
                analyticsLocations: t,
                userId: n,
                message: i,
                channelId: a
            } = this.props;
            if (null != e && null != n && null != i && null != e.session_id && null != e.application_id) {
                var s;
                c.Z.join({
                    userId: n,
                    sessionId: e.session_id,
                    applicationId: e.application_id,
                    channelId: a,
                    messageId: i.id
                }), (0, m.Z)({
                    type: U.q5t.JOIN,
                    source: U.Sbl.MESSAGE_EMBED,
                    userId: n,
                    applicationId: e.application_id,
                    partyId: null === (s = e.party) || void 0 === s ? void 0 : s.id,
                    messageId: i.id,
                    analyticsLocations: t
                });
            }
        }), B(this, 'handleInvite', async () => {
            let {
                activity: e,
                channelId: t
            } = this.props;
            if (null != e && null != t)
                try {
                    this.setState({ sending: !0 }), await o.Z.sendActivityInvite({
                        type: U.mFx.JOIN,
                        channelId: t,
                        activity: e,
                        location: U.Sbl.MESSAGE_EMBED
                    });
                } finally {
                    this.setState({ sending: !1 });
                }
        }), B(this, 'handleSync', () => {
            let {
                activity: e,
                userId: t
            } = this.props;
            null != e && null != t && d.Z_(e, t);
        }), B(this, 'handleDownloadApp', () => {
            (0, l.openModal)(e => (0, a.jsx)(I.default, {
                source: 'Game Invite',
                ...e
            }));
        }), B(this, 'renderUserPopout', (e, t) => {
            let {
                channelId: n,
                guildId: i,
                message: s,
                analyticsLocations: r
            } = this.props;
            return null == n ? null : (0, a.jsx)(f.Z, {
                ...t,
                location: 'ActivityInviteEmbed',
                userId: e.id,
                guildId: null != i ? i : void 0,
                channelId: n,
                messageId: null == s ? void 0 : s.id,
                newAnalyticsLocations: r
            });
        }), B(this, 'renderSpotifyJoinButton', e => {
            let {
                channelId: t,
                guildId: n
            } = this.props;
            return (0, a.jsx)(p.Z, {
                guildId: null != n ? n : void 0,
                channelId: t,
                source: 'Invite Embed',
                ...e
            });
        }), B(this, 'renderCustomButton', e => {
            let {application: t} = this.props;
            return (0, a.jsx)(u.Z, {
                ...e,
                source: U.Sbl.MESSAGE_EMBED,
                application: t
            });
        }), B(this, 'renderEmbed', () => {
            let e;
            let {
                activity: t,
                partyId: n,
                myPartyId: i,
                application: s,
                partyMembers: r,
                isPreview: l,
                isLaunching: o,
                isSender: c,
                activityActionType: d,
                className: u,
                channelId: _,
                message: E,
                hideParty: m,
                isSyncable: I,
                isLaunchable: T,
                guildId: h
            } = this.props;
            if (null != s)
                e = s.name;
            else if (null != n) {
                let [t] = n.split(':');
                e = k[t];
            }
            return (0, a.jsx)(Z.Z, {
                activity: t,
                partyId: n,
                myPartyId: i,
                applicationId: null != s ? s.id : null,
                name: e,
                partyMembers: r,
                className: u,
                coverImage: this.getCoverImage(),
                isPreview: l,
                isGameLaunchable: T,
                isLoading: o || this.state.sending,
                activityActionType: d,
                isInBrowser: !b.isPlatformEmbedded,
                isSyncable: I,
                isSender: c,
                channelId: _,
                guildId: null != h ? h : void 0,
                message: E,
                hideParty: m,
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
B(G, 'defaultProps', { isPreview: !1 }), t.Z = r.ZP.connectStores([
    N.Z,
    A.Z,
    O.Z,
    R.Z,
    T.Z,
    L.Z,
    S.Z,
    v.Z,
    M.default,
    x.ZP
], e => {
    let {
            activity: t,
            analyticsLocations: n,
            application: i,
            partyId: a,
            userId: s,
            guildId: r
        } = e, {id: l} = null != i ? i : {}, o = null != t && null != t.party && t.party.id === a ? A.Z.getParty(t.party.id) : null, c = null != l ? O.Z.getApplicationActivity(l) : O.Z.findActivity(e => e.type === U.IIU.LISTENING), d = !1;
    null != l && (d = v.Z.getState(l, U.mFx.JOIN) === U.OcF.LOADING);
    let u = Array.from(null != o ? o : []).map(e => {
            let t = null != r ? x.ZP.getMember(r, e) : null, n = null != t ? t.nick : null, i = M.default.getUser(e), a = null == i;
            return null == i && (i = new g.Z({ discriminator: '0005' })), {
                user: i,
                unknownUser: a,
                nick: n
            };
        }), _ = null != t && N.Z.canPlay(t), E = N.Z.getSyncingWith(), m = null != E && null != s && E.userId === s;
    return {
        analyticsLocations: n,
        partyMembers: u,
        connectedApplication: null != l ? S.Z.getApplication(l) : null,
        myPartyId: null != c && null != c.party ? c.party.id : null,
        isLaunching: d,
        isSyncable: _ && !m,
        isLaunchable: null != l && (0, D.t)({
            LibraryApplicationStore: R.Z,
            LaunchableGameStore: T.Z,
            DispatchApplicationStore: L.Z,
            ConnectedAppsStore: S.Z,
            applicationId: l
        })
    };
})(G);
