n.d(t, {
    Y: function () {
        return i;
    }
}),
    n(789020),
    n(47120);
var i,
    s,
    a,
    l = n(735250),
    r = n(470079),
    o = n(120356),
    c = n.n(o),
    u = n(512722),
    d = n.n(u),
    h = n(780384),
    m = n(481060),
    p = n(438139),
    _ = n(410030),
    f = n(726542),
    E = n(600164),
    g = n(686546),
    C = n(111028),
    I = n(925329),
    x = n(810568),
    T = n(168524),
    S = n(565138),
    v = n(833858),
    N = n(223135),
    A = n(707409),
    Z = n(769654),
    M = n(424678),
    b = n(750154),
    R = n(768581),
    L = n(630388),
    P = n(153066),
    j = n(740265),
    O = n(122810),
    y = n(833664),
    D = n(503438),
    k = n(802856),
    U = n(420660),
    w = n(39628),
    B = n(701488),
    H = n(981631),
    G = n(689938),
    V = n(542268);
function F(e, t, n) {
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
((a = i || (i = {})).USER_POPOUT = 'UserPopout'), (a.USER_POPOUT_V2 = 'UserPopoutV2'), (a.ACTIVITY_FEED = 'ActivityFeed'), (a.PROFILE = 'Profile'), (a.PROFILE_V2 = 'ProfileV2'), (a.STREAM_PREVIEW = 'StreamPreview'), (a.VOICE_CHANNEL = 'VoiceChannel'), (a.SIMPLIFIED_PROFILE = 'SimplifiedProfile'), (a.BITE_SIZE_POPOUT = 'BiteSizePopout');
let W = {
        StreamPreview: [108, 60],
        UserPopout: [108, 60],
        UserPopoutV2: [108, 60],
        BiteSizePopout: [108, 60],
        VoiceChannel: [108, 60],
        Profile: [162, 90],
        ProfileV2: [162, 90],
        SimplifiedProfile: [162, 90],
        ActivityFeed: [900, 500]
    },
    { getAssetImage: z } = n(81063),
    Y = (0, p.Z)(
        class extends r.PureComponent {
            render() {
                return (0, l.jsx)('div', {
                    className: V.timestamp,
                    children: this.props.message
                });
            }
        }
    );
function K(e) {
    let { activity: t } = e,
        n = null;
    return (0, D.Z)(t) && (n = H.ABu.SPOTIFY), null != t.platform && [H.M7m.PS4, H.M7m.PS5].includes(t.platform) && (n = H.ABu.PLAYSTATION), n;
}
function q(e) {
    let { activity: t } = e,
        n = (0, _.ZP)(),
        i = K({ activity: t });
    if (null == i) return null;
    let s = f.Z.get(i);
    return (0, l.jsx)('img', {
        alt: '',
        src: (0, h.ap)(n) ? s.icon.lightSVG : s.icon.darkSVG,
        className: V.platformIcon
    });
}
class X extends (s = r.PureComponent) {
    get activity() {
        let { activity: e, activityGuild: t } = this.props;
        return null != t && (null == e ? void 0 : e.type) !== H.IIU.PLAYING && (null == e ? void 0 : e.type) !== H.IIU.WATCHING && (null == e ? void 0 : e.type) !== H.IIU.LISTENING && (null == e ? void 0 : e.type) !== H.IIU.HANG_STATUS
            ? {
                  type: H.IIU.PLAYING,
                  name: G.Z.Messages.SHARING_SCREEN
              }
            : e;
    }
    getTypeClass(e, t) {
        return (0, P.l)(V, e, this.props.type, t);
    }
    isStreamerOnTypeProfile() {
        return (0, U.Z)(this.activity) && ('Profile' === this.props.type || 'ProfileV2' === this.props.type);
    }
    isStreamerOnTypeActivityFeed() {
        return (0, U.Z)(this.activity) && 'ActivityFeed' === this.props.type;
    }
    renderHeader(e) {
        let t;
        let { hideHeader: n, activityGuild: i, showChannelDetails: s, renderHeaderAccessory: a, type: r } = this.props,
            o = this.activity;
        if (n || null == o) return null;
        let { name: u } = o;
        switch (o.type) {
            case H.IIU.STREAMING:
                t = G.Z.Messages.USER_ACTIVITY_HEADER_LIVE_ON_PLATFORM.format({
                    platform: [H.ABu.TWITCH, H.ABu.YOUTUBE].includes(u.toLowerCase()) ? u : f.Z.get(H.ABu.TWITCH).name
                });
                break;
            case H.IIU.LISTENING:
                t = G.Z.Messages.USER_ACTIVITY_HEADER_LISTENING.format({ name: u });
                break;
            case H.IIU.WATCHING:
                t = G.Z.Messages.USER_ACTIVITY_HEADER_WATCHING.format({ name: u });
                break;
            case H.IIU.PLAYING:
                t = (0, j.Z)(o);
                break;
            case H.IIU.COMPETING:
                t = G.Z.Messages.USER_ACTIVITY_HEADER_COMPETING.format({ name: u });
        }
        if (null != i) {
            var d;
            t = (0, L.yE)(null !== (d = null == o ? void 0 : o.flags) && void 0 !== d ? d : 0, H.xjy.EMBEDDED) ? (o.type === H.IIU.WATCHING ? G.Z.Messages.EMBEDDED_ACTIVITIES_WATCHING_IN_GUILD.format({ guildName: i.name }) : G.Z.Messages.EMBEDDED_ACTIVITIES_PLAYING_IN_GUILD.format({ guildName: i.name })) : G.Z.Messages.USER_ACTIVITY_HEADER_STREAMING_TO_GUILD.format({ server: i.name });
        }
        return (
            (null == o ? void 0 : o.type) === H.IIU.HANG_STATUS && (t = G.Z.Messages.STATUS_LEAD_IN_JUST),
            (0, l.jsxs)('div', {
                className: V.headerContainer,
                children: [
                    (0, l.jsx)(m.Heading, {
                        className: c()((0, P.l)(V, 'headerText', e ? 'EmptyBody' : 'Normal')),
                        variant: s ? 'text-xs/semibold' : 'eyebrow',
                        color: 'ProfileV2' === r ? 'header-primary' : void 0,
                        children: (0, l.jsx)(C.Z, { children: t })
                    }),
                    null == a ? void 0 : a()
                ]
            })
        );
    }
    renderXboxImage() {
        return (0, l.jsx)('div', {
            className: V.assets,
            children: (0, l.jsx)('img', {
                alt: '',
                src: f.Z.get(H.ABu.XBOX).icon.customPNG,
                className: c()(this.getTypeClass('assetsLargeImage', 'Xbox'))
            })
        });
    }
    renderImage(e) {
        var t, n, i;
        let s, a;
        if (e.type === H.IIU.HANG_STATUS)
            return (0, l.jsx)('div', {
                className: V.assets,
                children: (0, l.jsx)(N.Z, {
                    hangStatusActivity: e,
                    className: c()(V.assetsHangStatus, this.getTypeClass('assetsSmallImage', 'WithoutLargeImage'))
                })
            });
        let { type: o } = this.props,
            { assets: u, application_id: d } = e;
        if (null == u || (null == u.large_image && null == u.small_image)) return null;
        (0, U.Z)(e) && (s = W[o]);
        let h = (0, D.Z)(e),
            p =
                null != u.large_image
                    ? (0, l.jsx)('img', {
                          alt: null !== (t = u.large_text) && void 0 !== t ? t : '',
                          src: z(d, u.large_image, null != s ? s : [B.Si.LARGE, B.Si.LARGE]),
                          className: c()(this.getTypeClass('assetsLargeImage', this.isStreamerOnTypeProfile() || this.isStreamerOnTypeActivityFeed() ? H.ABu.TWITCH : ''), { [null !== (n = this.getTypeClass('assetsLargeMask')) && void 0 !== n ? n : '']: null != u.small_image }, { [V.assetsLargeImageSpotify]: h })
                      })
                    : null;
        if (h)
            p = (0, l.jsx)(m.Anchor, {
                onClick: this.handleOpenSpotifyAlbum,
                children: p
            });
        else if ((0, b.dS)(e)) {
            let t = (0, b.rq)(e);
            if (null == t) return null;
            p = (0, l.jsx)(g.ZP, {
                mask: g.ZP.Masks.SQUIRCLE,
                width: B.Si.SMALL,
                height: B.Si.SMALL,
                children: (0, l.jsx)('img', {
                    src:
                        null !==
                            (i = R.ZP.getGuildIconURL({
                                id: t.guildId,
                                icon: u.small_image,
                                size: B.Si.SMALL
                            })) && void 0 !== i
                            ? i
                            : void 0,
                    className: V.assetsLargeImageVoiceChannel,
                    alt: ''
                })
            });
        }
        return (this.isStreamerOnTypeActivityFeed() &&
            null != e.url &&
            '' !== e.url &&
            (p = (0, l.jsxs)('div', {
                className: V.twitchImageContainer,
                children: [
                    (0, l.jsxs)('div', {
                        className: V.twitchImageOverlay,
                        children: [
                            (0, l.jsx)(m.H, {
                                className: V.streamName,
                                children: e.name
                            }),
                            (0, l.jsx)('div', {
                                className: V.streamGame,
                                children: G.Z.Messages.STREAMER_PLAYING.format({ game: e.details })
                            })
                        ]
                    }),
                    (0, l.jsx)(m.Anchor, {
                        className: V.twitchBackgroundImage,
                        href: e.url,
                        children: p
                    })
                ]
            })),
        !(0, b.dS)(e) &&
            null != u.small_image &&
            (a = (0, l.jsx)(m.Tooltip, {
                text: '' !== u.small_text ? u.small_text : null,
                position: 'top',
                children: (e) => {
                    var t;
                    return (0, l.jsx)('img', {
                        alt: null !== (t = u.small_text) && void 0 !== t ? t : '',
                        src: z(d, u.small_image, [B.Si.SMALL, B.Si.SMALL]),
                        className: this.getTypeClass('assetsSmallImage', null == p ? 'WithoutLargeImage' : void 0),
                        ...e
                    });
                }
            })),
        null == p)
            ? (0, l.jsx)('div', {
                  className: V.assets,
                  children: a
              })
            : (0, l.jsxs)('div', {
                  className: V.assets,
                  children: [
                      (0, l.jsx)(m.Tooltip, {
                          text: null != u.large_text ? u.large_text : null,
                          position: 'top',
                          children: (e) => {
                              let { onMouseEnter: t, onMouseLeave: n } = e;
                              return null != p
                                  ? r.cloneElement(p, {
                                        onMouseEnter: t,
                                        onMouseLeave: n
                                    })
                                  : null;
                          }
                      }),
                      a
                  ]
              });
    }
    renderGameImage(e) {
        let { user: t, type: n, application: i, activityGuild: s } = this.props;
        return null != e.assets || (0, O.Z)(e) || e.type !== H.IIU.PLAYING || 'ActivityFeed' === n || t.bot
            ? null
            : null == i && null != s
              ? (0, l.jsx)('div', { className: c()(V.gameIcon, V.screenshareIcon) })
              : (0, l.jsx)(I.Z, {
                    className: V.gameIcon,
                    game: i
                });
    }
    renderName(e) {
        let { user: t, application: n, hideName: i } = this.props;
        if (i) return null;
        let { details: s, type: a } = e;
        if (a === H.IIU.CUSTOM_STATUS) return null;
        let r = (0, y.Z)(e),
            o = e.name,
            u = o;
        if (
            (a === H.IIU.HANG_STATUS
                ? (u = (0, v.O8)(e))
                : r && null != n
                  ? (u = (0, l.jsx)('span', {
                        className: V.activityName,
                        children: u
                    }))
                  : !r &&
                    ((o = s),
                    (u = s),
                    (0, D.Z)(e) && null != e.sync_id && null != s
                        ? (u = (0, l.jsx)(m.Anchor, {
                              className: V.bodyLink,
                              onClick: this.handleOpenSpotifyTrack,
                              children: s
                          }))
                        : (0, b.dS)(e) && (u = e.name)),
            null == u)
        )
            return null;
        let d = null != K({ activity: e }) && 'BiteSizePopout' === this.props.type;
        return (0, l.jsx)(m.Text, {
            title: o,
            variant: 'text-sm/semibold',
            className: c()((0, P.l)(V, 'name', t.bot || this.isStreamerOnTypeProfile() ? 'wrap' : 'normal'), d && V.namePlatformIconMarginBiteSizePopout),
            children: u
        });
    }
    renderDetails(e) {
        let t;
        let { details: n, state: i } = e,
            { activityGuild: s } = this.props,
            a = n,
            r = n;
        if (e.type === H.IIU.CUSTOM_STATUS) a = i;
        else if (e.type === H.IIU.HANG_STATUS)
            (a = null != s ? G.Z.Messages.HANG_STATUS_LOCATION.format({ guildName: s.name }) : null),
                (t =
                    null != s
                        ? () => {
                              (0, Z.X)(s.id);
                          }
                        : void 0);
        else if (!(0, y.Z)(e)) {
            if (((r = a = i), (0, D.Z)(e) && null != i))
                a = G.Z.Messages.USER_ACTIVITY_LISTENING_ARTISTS.format({
                    artists: r,
                    artistsHook: (t, n) =>
                        (0, l.jsx)(
                            M.Z,
                            {
                                artists: i,
                                linkClassName: V.bodyLink,
                                canOpen: null != e.sync_id,
                                onOpenSpotifyArtist: this.handleOpenSpotifyArtist
                            },
                            n
                        )
                });
            else if ((0, b.dS)(e)) {
                var o;
                a = null === (o = e.assets) || void 0 === o ? void 0 : o.small_text;
            }
        }
        return null == a || 0 === a.length
            ? null
            : ((0, U.Z)(e) && (a = G.Z.Messages.STREAMER_PLAYING.format({ game: a })), null != t)
              ? (0, l.jsx)(m.Clickable, {
                    onClick: t,
                    title: null != r ? r : void 0,
                    className: V.clickableDetails,
                    children: a
                })
              : (0, l.jsx)('div', {
                    title: null != r ? r : void 0,
                    className: (0, U.Z)(e) || (0, D.Z)(e) ? V.detailsWrap : V.details,
                    children: a
                });
    }
    renderChannelDetails(e) {
        let { activityGuild: t, showChannelDetails: n, channel: i } = this.props;
        return n && null != t
            ? null == i
                ? (0, l.jsx)('div', {
                      className: (0, U.Z)(e) || (0, D.Z)(e) ? V.detailsWrap : V.details,
                      children: G.Z.Messages.USER_PROFILE_IN_GUILD_DETAILS.format({ guildName: t.name })
                  })
                : (0, l.jsxs)('div', {
                      className: c()((0, U.Z)(e) || (0, D.Z)(e) ? V.detailsWrap : V.details, V.guildDetails),
                      children: [
                          (0, l.jsx)(S.Z, {
                              guild: t,
                              size: S.Z.Sizes.SMOL,
                              className: V.guildIcon
                          }),
                          (0, l.jsx)(m.ChevronSmallRightIcon, {
                              size: 'xxs',
                              color: 'currentColor'
                          }),
                          (0, l.jsxs)('div', {
                              className: V.voiceChannelInfo,
                              children: [
                                  (0, l.jsx)(m.VoiceNormalIcon, {
                                      size: 'xxs',
                                      color: 'currentColor'
                                  }),
                                  (0, l.jsx)(m.Text, {
                                      variant: 'text-xs/normal',
                                      children: null == i ? void 0 : i.name
                                  })
                              ]
                          })
                      ]
                  })
            : null;
    }
    renderTimePlayed(e) {
        let { activityGuild: t } = this.props;
        if (!(0, y.Z)(e) || (0, D.Z)(e)) return null;
        let { timestamps: n } = e;
        return null == n
            ? null
            : (0, O.Z)(e)
              ? (0, l.jsx)(Y, { timestamps: n })
              : (0, l.jsx)(A.ZP, {
                    start: n.start,
                    location: A.ZP.Locations.USER_ACTIVITY,
                    className: V.playTime,
                    isApplicationStreaming: null != t
                });
    }
    renderTimeBar(e) {
        if (!(0, D.Z)(e)) return null;
        let { timestamps: t } = e;
        if (null == t) return null;
        let { start: n, end: i } = t;
        return null == n || null == i
            ? null
            : (0, l.jsx)(w.Z, {
                  start: n,
                  end: i,
                  className: this.getTypeClass('timeBar'),
                  themed: 'VoiceChannel' === this.props.type || 'UserPopout' === this.props.type || 'UserPopoutV2' === this.props.type || 'ProfileV2' === this.props.type || 'SimplifiedProfile' === this.props.type || 'BiteSizePopout' === this.props.type
              });
    }
    renderState(e, t) {
        var n, i;
        let s;
        let { state: a, party: r, assets: o } = e,
            c = a,
            u = c;
        return (!(0, y.Z)(e) &&
            ((u = c = null == o ? void 0 : o.large_text),
            (0, D.Z)(e) &&
                null != c &&
                (c = G.Z.Messages.USER_ACTIVITY_LISTENING_ALBUM.format({
                    album: u,
                    albumHook: (t, n) =>
                        null != e.sync_id && null != u
                            ? (0, l.jsx)(
                                  m.Anchor,
                                  {
                                      className: V.bodyLink,
                                      onClick: this.handleOpenSpotifyAlbum,
                                      children: u
                                  },
                                  n
                              )
                            : u
                }))),
        (null != c && 0 !== c.length && e.type !== H.IIU.CUSTOM_STATUS) || (0, b.dS)(e))
            ? ((null == r ? void 0 : r.size) == null && [B.Zc].includes(null !== (n = e.application_id) && void 0 !== n ? n : '')
                  ? (s = G.Z.Messages.USER_ACTIVITY_STATE_SIZE.format({
                        count: '0',
                        max: null !== (i = null == t ? void 0 : t.getMaxParticipants()) && void 0 !== i ? i : 0
                    }))
                  : (0, b.dS)(e) && (null == r ? void 0 : r.size) != null
                    ? (s = G.Z.Messages.USER_ACTIVITY_STAGE_STATE_SIZE.format({
                          numSpeakers: r.size[0],
                          numListeners: r.size[1] - r.size[0]
                      }))
                    : (null == r ? void 0 : r.size) != null &&
                      r.size.length >= 2 &&
                      (s = G.Z.Messages.USER_ACTIVITY_STATE_SIZE.format({
                          count: r.size[0],
                          max: r.size[1]
                      })),
              (0, l.jsxs)('div', {
                  className: V.state,
                  children: [
                      (0, l.jsx)('span', {
                          title: u,
                          children: c
                      }),
                      null != s
                          ? (0, l.jsxs)('span', {
                                children: [' ', s]
                            })
                          : null
                  ]
              }))
            : null;
    }
    render() {
        let e;
        let { type: t, renderActions: n, className: i, application: s, showReactions: a, onClose: r, onOpenGameProfileModal: o } = this.props,
            u = this.activity;
        if (null == u || u.type === H.IIU.CUSTOM_STATUS) return null;
        let d = 'UserPopout' === t || 'UserPopoutV2' === t || 'BiteSizePopout' === t,
            h = 'Profile' === t || 'ProfileV2' === t || 'SimplifiedProfile' === t,
            p = 'ActivityFeed' === t,
            _ = 'StreamPreview' === t,
            f = !1;
        (0, k.Z)(u) ? ((e = this.renderXboxImage()), (f = !0)) : null == (e = this.renderImage(u)) && (f = null != (e = this.renderGameImage(u)));
        let g = this.renderName(u),
            C = this.renderDetails(u),
            I = this.renderState(u, s),
            x = this.renderTimePlayed(u),
            T = this.renderChannelDetails(u),
            S = null != n ? n() : null,
            v = this.renderTimeBar(u),
            N = ![e, g, C, I, x, v, S].some((e) => null != e);
        return (0, l.jsxs)('div', {
            className: c()(this.getTypeClass('activity'), i),
            children: [
                this.renderHeader(N),
                (0, l.jsx)('div', {
                    className: c()(f ? V.bodyAlignCenter : V.bodyNormal, a && !d && !_ && V.wrap),
                    children: (0, l.jsxs)('div', {
                        className: V.activityDetails,
                        children: [
                            e,
                            this.isStreamerOnTypeActivityFeed()
                                ? null
                                : (0, l.jsxs)(E.Z.Child, {
                                      className: c()((0, P.l)(V, 'content', f ? 'GameImage' : null != e ? 'Images' : 'NoImages', t)),
                                      children: [
                                          (0, l.jsxs)(m.Clickable, {
                                              className: c()(null != o && V.openGameProfile),
                                              onClick:
                                                  null != o
                                                      ? () => {
                                                            o(), null == r || r();
                                                        }
                                                      : void 0,
                                              children: [g, C, I, x]
                                          }),
                                          T,
                                          d || _ ? null : v,
                                          p ? S : null
                                      ]
                                  }),
                            h
                                ? (0, l.jsx)('div', {
                                      className: V.actions,
                                      children: S
                                  })
                                : null
                        ]
                    })
                }),
                d ? v : null,
                d || _ ? S : null,
                (0, l.jsx)(q, { activity: u })
            ]
        });
    }
    constructor(...e) {
        super(...e),
            F(this, 'handleOpenSpotifyTrack', () => {
                let { activity: e, onOpenSpotifyTrack: t } = this.props;
                d()(null != e, 'Spotify activity was null'), null == t || t(e);
            }),
            F(this, 'handleOpenSpotifyArtist', (e) => {
                let { activity: t, onOpenSpotifyArtist: n, user: i } = this.props;
                d()(null != t, 'Spotify activity was null'), null == n || n(t, i.id, e);
            }),
            F(this, 'handleOpenSpotifyAlbum', () => {
                let { activity: e, onOpenSpotifyAlbum: t, user: n } = this.props;
                d()(null != e, 'Spotify activity was null'), null == t || t(e, n.id);
            });
    }
}
F(X, 'Types', i);
let Q = (e) => {
    var t, n, i;
    let s = (0, T.Z)({
        location: 'UserActivity',
        applicationId: null !== (i = null === (t = e.application) || void 0 === t ? void 0 : t.id) && void 0 !== i ? i : null === (n = e.activity) || void 0 === n ? void 0 : n.application_id,
        source: x.m1.UserProfile,
        sourceUserId: e.user.id,
        trackEntryPointImpression: !0
    });
    return (0, l.jsx)(X, {
        ...e,
        onOpenGameProfileModal: s
    });
};
(Q.Types = i), (t.Z = Q);
