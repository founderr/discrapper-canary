n.d(t, {
    Y: function () {
        return i;
    }
}),
    n(789020),
    n(47120);
var i,
    l,
    r,
    s = n(200651),
    a = n(192379),
    o = n(120356),
    c = n.n(o),
    u = n(512722),
    d = n.n(u),
    h = n(780384),
    m = n(481060),
    p = n(438139),
    f = n(410030),
    g = n(726542),
    C = n(600164),
    x = n(686546),
    v = n(111028),
    _ = n(925329),
    I = n(810568),
    E = n(168524),
    b = n(565138),
    S = n(833858),
    Z = n(223135),
    T = n(707409),
    N = n(769654),
    j = n(424678),
    A = n(750154),
    y = n(768581),
    P = n(630388),
    M = n(153066),
    R = n(740265),
    L = n(122810),
    k = n(833664),
    O = n(503438),
    w = n(802856),
    D = n(420660),
    U = n(39628),
    B = n(701488),
    H = n(981631),
    F = n(388032),
    G = n(148334);
function V(e, t, n) {
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
((r = i || (i = {})).ACTIVITY_FEED = 'ActivityFeed'), (r.STREAM_PREVIEW = 'StreamPreview'), (r.VOICE_CHANNEL = 'VoiceChannel');
let z = {
        StreamPreview: [108, 60],
        VoiceChannel: [108, 60],
        ActivityFeed: [900, 500]
    },
    { getAssetImage: W } = n(81063),
    Y = (0, p.Z)(
        class extends a.PureComponent {
            render() {
                return (0, s.jsx)('div', {
                    className: G.timestamp,
                    children: this.props.message
                });
            }
        }
    );
function K(e) {
    let { activity: t } = e,
        n = (0, f.ZP)(),
        i = (function (e) {
            let { activity: t } = e,
                n = null;
            return (0, O.Z)(t) && (n = H.ABu.SPOTIFY), null != t.platform && [H.M7m.PS4, H.M7m.PS5].includes(t.platform) && (n = H.ABu.PLAYSTATION), n;
        })({ activity: t });
    if (null == i) return null;
    let l = g.Z.get(i);
    return (0, s.jsx)('img', {
        alt: '',
        src: (0, h.ap)(n) ? l.icon.lightSVG : l.icon.darkSVG,
        className: G.platformIcon
    });
}
class q extends (l = a.PureComponent) {
    get activity() {
        let { activity: e, activityGuild: t } = this.props;
        return null != t && (null == e ? void 0 : e.type) !== H.IIU.PLAYING && (null == e ? void 0 : e.type) !== H.IIU.WATCHING && (null == e ? void 0 : e.type) !== H.IIU.LISTENING && (null == e ? void 0 : e.type) !== H.IIU.HANG_STATUS
            ? {
                  type: H.IIU.PLAYING,
                  name: F.intl.string(F.t.eXan7O)
              }
            : e;
    }
    getTypeClass(e, t) {
        return (0, M.l)(G, e, this.props.type, t);
    }
    isStreamerOnTypeActivityFeed() {
        return (0, D.Z)(this.activity) && 'ActivityFeed' === this.props.type;
    }
    renderHeader(e) {
        let t;
        let { hideHeader: n, activityGuild: i, showChannelDetails: l, renderHeaderAccessory: r } = this.props,
            a = this.activity;
        if (n || null == a) return null;
        let { name: o } = a;
        switch (a.type) {
            case H.IIU.STREAMING:
                t = F.intl.formatToPlainString(F.t.Dzgz4u, {
                    platform: [H.ABu.TWITCH, H.ABu.YOUTUBE].includes(o.toLowerCase()) ? o : g.Z.get(H.ABu.TWITCH).name
                });
                break;
            case H.IIU.LISTENING:
                t = F.intl.formatToPlainString(F.t['5sYPnp'], { name: o });
                break;
            case H.IIU.WATCHING:
                t = F.intl.formatToPlainString(F.t.Ge29Z2, { name: o });
                break;
            case H.IIU.PLAYING:
                t = (0, R.Z)(a);
                break;
            case H.IIU.COMPETING:
                t = F.intl.formatToPlainString(F.t.SQCo6O, { name: o });
        }
        if (null != i) {
            var u;
            t = (0, P.yE)(null !== (u = null == a ? void 0 : a.flags) && void 0 !== u ? u : 0, H.xjy.EMBEDDED) ? (a.type === H.IIU.WATCHING ? F.intl.formatToPlainString(F.t['M/L8oq'], { guildName: i.name }) : F.intl.formatToPlainString(F.t['4chKQk'], { guildName: i.name })) : F.intl.formatToPlainString(F.t.sddlGB, { server: i.name });
        }
        return (
            (null == a ? void 0 : a.type) === H.IIU.HANG_STATUS && (t = F.intl.string(F.t['74vS//'])),
            (0, s.jsxs)('div', {
                className: G.headerContainer,
                children: [
                    (0, s.jsx)(m.Heading, {
                        className: c()((0, M.l)(G, 'headerText', e ? 'EmptyBody' : 'Normal')),
                        variant: l ? 'text-xs/semibold' : 'eyebrow',
                        children: (0, s.jsx)(v.Z, { children: t })
                    }),
                    null == r ? void 0 : r()
                ]
            })
        );
    }
    renderXboxImage() {
        return (0, s.jsx)('div', {
            className: G.assets,
            children: (0, s.jsx)('img', {
                alt: '',
                src: g.Z.get(H.ABu.XBOX).icon.customPNG,
                className: c()(this.getTypeClass('assetsLargeImage', 'Xbox'))
            })
        });
    }
    renderImage(e) {
        var t, n, i;
        let l, r;
        if (e.type === H.IIU.HANG_STATUS)
            return (0, s.jsx)('div', {
                className: G.assets,
                children: (0, s.jsx)(Z.Z, {
                    hangStatusActivity: e,
                    className: c()(G.assetsHangStatus, this.getTypeClass('assetsSmallImage', 'WithoutLargeImage'))
                })
            });
        let { type: o } = this.props,
            { assets: u, application_id: d } = e;
        if (null == u || (null == u.large_image && null == u.small_image)) return null;
        (0, D.Z)(e) && (l = z[o]);
        let h = (0, O.Z)(e),
            p =
                null != u.large_image
                    ? (0, s.jsx)('img', {
                          alt: null !== (t = u.large_text) && void 0 !== t ? t : '',
                          src: W(d, u.large_image, null != l ? l : [B.Si.LARGE, B.Si.LARGE]),
                          className: c()(this.getTypeClass('assetsLargeImage', this.isStreamerOnTypeActivityFeed() ? H.ABu.TWITCH : ''), {
                              [null !== (n = this.getTypeClass('assetsLargeMask')) && void 0 !== n ? n : '']: null != u.small_image,
                              [G.assetsLargeImageSpotify]: h
                          })
                      })
                    : null;
        if (h)
            p = (0, s.jsx)(m.Anchor, {
                onClick: this.handleOpenSpotifyAlbum,
                children: p
            });
        else if ((0, A.dS)(e)) {
            let t = (0, A.rq)(e);
            if (null == t) return null;
            p = (0, s.jsx)(x.ZP, {
                mask: x.ZP.Masks.SQUIRCLE,
                width: B.Si.SMALL,
                height: B.Si.SMALL,
                children: (0, s.jsx)('img', {
                    src:
                        null !==
                            (i = y.ZP.getGuildIconURL({
                                id: t.guildId,
                                icon: u.small_image,
                                size: B.Si.SMALL
                            })) && void 0 !== i
                            ? i
                            : void 0,
                    className: G.assetsLargeImageVoiceChannel,
                    alt: ''
                })
            });
        }
        return (this.isStreamerOnTypeActivityFeed() &&
            null != e.url &&
            '' !== e.url &&
            (p = (0, s.jsxs)('div', {
                className: G.twitchImageContainer,
                children: [
                    (0, s.jsxs)('div', {
                        className: G.twitchImageOverlay,
                        children: [
                            (0, s.jsx)(m.H, {
                                className: G.streamName,
                                children: e.name
                            }),
                            (0, s.jsx)('div', {
                                className: G.streamGame,
                                children: F.intl.format(F.t.gmCZRU, { game: e.details })
                            })
                        ]
                    }),
                    (0, s.jsx)(m.Anchor, {
                        className: G.twitchBackgroundImage,
                        href: e.url,
                        children: p
                    })
                ]
            })),
        !(0, A.dS)(e) &&
            null != u.small_image &&
            (r = (0, s.jsx)(m.Tooltip, {
                text: '' !== u.small_text ? u.small_text : null,
                position: 'top',
                children: (e) => {
                    var t;
                    return (0, s.jsx)('img', {
                        alt: null !== (t = u.small_text) && void 0 !== t ? t : '',
                        src: W(d, u.small_image, [B.Si.SMALL, B.Si.SMALL]),
                        className: this.getTypeClass('assetsSmallImage', null == p ? 'WithoutLargeImage' : void 0),
                        ...e
                    });
                }
            })),
        null == p)
            ? (0, s.jsx)('div', {
                  className: G.assets,
                  children: r
              })
            : (0, s.jsxs)('div', {
                  className: G.assets,
                  children: [
                      (0, s.jsx)(m.Tooltip, {
                          text: null != u.large_text ? u.large_text : null,
                          position: 'top',
                          children: (e) => {
                              let { onMouseEnter: t, onMouseLeave: n } = e;
                              return null != p
                                  ? a.cloneElement(p, {
                                        onMouseEnter: t,
                                        onMouseLeave: n
                                    })
                                  : null;
                          }
                      }),
                      r
                  ]
              });
    }
    renderGameImage(e) {
        let { user: t, type: n, application: i, activityGuild: l } = this.props;
        return null != e.assets || (0, L.Z)(e) || e.type !== H.IIU.PLAYING || 'ActivityFeed' === n || t.bot
            ? null
            : null == i && null != l
              ? (0, s.jsx)('div', { className: c()(G.gameIcon, G.screenshareIcon) })
              : (0, s.jsx)(_.Z, {
                    className: G.gameIcon,
                    game: i
                });
    }
    renderName(e) {
        let { user: t, application: n, hideName: i } = this.props;
        if (i) return null;
        let { details: l, type: r } = e;
        if (r === H.IIU.CUSTOM_STATUS) return null;
        let a = (0, k.Z)(e),
            o = e.name,
            u = o;
        return (r === H.IIU.HANG_STATUS
            ? (u = (0, S.O8)(e))
            : a && null != n
              ? (u = (0, s.jsx)('span', {
                    className: G.activityName,
                    children: u
                }))
              : !a &&
                ((o = l),
                (u = l),
                (0, O.Z)(e) && null != e.sync_id && null != l
                    ? (u = (0, s.jsx)(m.Anchor, {
                          className: G.bodyLink,
                          onClick: this.handleOpenSpotifyTrack,
                          children: l
                      }))
                    : (0, A.dS)(e) && (u = e.name)),
        null == u)
            ? null
            : (0, s.jsx)(m.Text, {
                  title: o,
                  variant: 'text-sm/semibold',
                  className: c()((0, M.l)(G, 'name', t.bot ? 'wrap' : 'normal')),
                  children: u
              });
    }
    renderDetails(e) {
        let t;
        let { details: n, state: i } = e,
            { activityGuild: l } = this.props,
            r = n,
            a = n;
        if (e.type === H.IIU.CUSTOM_STATUS) r = i;
        else if (e.type === H.IIU.HANG_STATUS)
            (r = null != l ? F.intl.formatToPlainString(F.t.IAZiW1, { guildName: l.name }) : void 0),
                (t =
                    null != l
                        ? () => {
                              (0, N.X)(l.id);
                          }
                        : void 0);
        else if (!(0, k.Z)(e)) {
            if (((r = i), (a = i), (0, O.Z)(e) && null != i))
                r = F.intl.format(F.t.uU9le3, {
                    artists: a,
                    artistsHook: (t, n) =>
                        (0, s.jsx)(
                            j.Z,
                            {
                                artists: i,
                                linkClassName: G.bodyLink,
                                canOpen: null != e.sync_id,
                                onOpenSpotifyArtist: this.handleOpenSpotifyArtist
                            },
                            n
                        )
                });
            else if ((0, A.dS)(e)) {
                var o;
                r = null === (o = e.assets) || void 0 === o ? void 0 : o.small_text;
            }
        }
        return null == r || '' === r
            ? null
            : ((0, D.Z)(e) && (r = F.intl.formatToPlainString(F.t.gmCZRU, { game: r })), null != t)
              ? (0, s.jsx)(m.Clickable, {
                    onClick: t,
                    title: null != a ? a : void 0,
                    className: G.clickableDetails,
                    children: r
                })
              : (0, s.jsx)('div', {
                    title: null != a ? a : void 0,
                    className: (0, D.Z)(e) || (0, O.Z)(e) ? G.detailsWrap : G.details,
                    children: r
                });
    }
    renderChannelDetails(e) {
        let { activityGuild: t, showChannelDetails: n, channel: i } = this.props;
        return n && null != t
            ? null == i
                ? (0, s.jsx)('div', {
                      className: (0, D.Z)(e) || (0, O.Z)(e) ? G.detailsWrap : G.details,
                      children: F.intl.format(F.t['hq/Qzc'], { guildName: t.name })
                  })
                : (0, s.jsxs)('div', {
                      className: c()((0, D.Z)(e) || (0, O.Z)(e) ? G.detailsWrap : G.details, G.guildDetails),
                      children: [
                          (0, s.jsx)(b.Z, {
                              guild: t,
                              size: b.Z.Sizes.SMOL,
                              className: G.guildIcon
                          }),
                          (0, s.jsx)(m.ChevronSmallRightIcon, {
                              size: 'xxs',
                              color: 'currentColor'
                          }),
                          (0, s.jsxs)('div', {
                              className: G.voiceChannelInfo,
                              children: [
                                  (0, s.jsx)(m.VoiceNormalIcon, {
                                      size: 'xxs',
                                      color: 'currentColor'
                                  }),
                                  (0, s.jsx)(m.Text, {
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
        if (!(0, k.Z)(e) || (0, O.Z)(e)) return null;
        let { timestamps: n } = e;
        return null == n
            ? null
            : (0, L.Z)(e)
              ? (0, s.jsx)(Y, { timestamps: n })
              : (0, s.jsx)(T.ZP, {
                    start: n.start,
                    location: T.ZP.Locations.USER_ACTIVITY,
                    className: G.playTime,
                    isApplicationStreaming: null != t
                });
    }
    renderTimeBar(e) {
        if (!(0, O.Z)(e)) return null;
        let { timestamps: t } = e;
        if (null == t) return null;
        let { start: n, end: i } = t;
        return null == n || null == i
            ? null
            : (0, s.jsx)(U.Z, {
                  start: n,
                  end: i,
                  className: this.getTypeClass('timeBar'),
                  themed: 'VoiceChannel' === this.props.type
              });
    }
    renderState(e, t) {
        var n, i;
        let l;
        let { state: r, party: a, assets: o } = e,
            c = r,
            u = r;
        return (!(0, k.Z)(e) &&
            ((c = null == o ? void 0 : o.large_text),
            (u = null == o ? void 0 : o.large_text),
            (0, O.Z)(e) &&
                null != c &&
                (c = F.intl.format(F.t.vOLBEx, {
                    album: u,
                    albumHook: (t, n) =>
                        null != e.sync_id && null != u
                            ? (0, s.jsx)(
                                  m.Anchor,
                                  {
                                      className: G.bodyLink,
                                      onClick: this.handleOpenSpotifyAlbum,
                                      children: u
                                  },
                                  n
                              )
                            : u
                }))),
        (null != c && '' !== c && e.type !== H.IIU.CUSTOM_STATUS) || (0, A.dS)(e))
            ? ((null == a ? void 0 : a.size) == null && [B.Zc].includes(null !== (n = e.application_id) && void 0 !== n ? n : '')
                  ? (l = F.intl.formatToPlainString(F.t['u//9Bw'], {
                        count: '0',
                        max: null !== (i = null == t ? void 0 : t.getMaxParticipants()) && void 0 !== i ? i : 0
                    }))
                  : (0, A.dS)(e) && (null == a ? void 0 : a.size) != null
                    ? (l = F.intl.formatToPlainString(F.t['JC/3x8'], {
                          numSpeakers: a.size[0],
                          numListeners: a.size[1] - a.size[0]
                      }))
                    : (null == a ? void 0 : a.size) != null &&
                      a.size.length >= 2 &&
                      (l = F.intl.formatToPlainString(F.t['u//9Bw'], {
                          count: a.size[0],
                          max: a.size[1]
                      })),
              (0, s.jsxs)('div', {
                  className: G.state,
                  children: [
                      (0, s.jsx)('span', {
                          title: u,
                          children: c
                      }),
                      null != l
                          ? (0, s.jsxs)('span', {
                                children: [' ', l]
                            })
                          : null
                  ]
              }))
            : null;
    }
    render() {
        let e;
        let { type: t, renderActions: n, className: i, application: l, showReactions: r, onClose: a, onOpenGameProfileModal: o } = this.props,
            u = this.activity;
        if (null == u || u.type === H.IIU.CUSTOM_STATUS) return null;
        let d = 'ActivityFeed' === t,
            h = 'StreamPreview' === t,
            p = !1;
        (0, w.Z)(u) ? ((e = this.renderXboxImage()), (p = !0)) : null == (e = this.renderImage(u)) && (p = null != (e = this.renderGameImage(u)));
        let f = this.renderName(u),
            g = this.renderDetails(u),
            x = this.renderState(u, l),
            v = this.renderTimePlayed(u),
            _ = this.renderChannelDetails(u),
            I = null != n ? n() : null,
            E = this.renderTimeBar(u),
            b = ![e, f, g, x, v, E, I].some((e) => null != e);
        return (0, s.jsxs)('div', {
            className: c()(this.getTypeClass('activity'), i),
            children: [
                this.renderHeader(b),
                (0, s.jsx)('div', {
                    className: c()(p ? G.bodyAlignCenter : G.bodyNormal, r && !h && G.wrap),
                    children: (0, s.jsxs)('div', {
                        className: G.activityDetails,
                        children: [
                            e,
                            this.isStreamerOnTypeActivityFeed()
                                ? null
                                : (0, s.jsxs)(C.Z.Child, {
                                      className: c()((0, M.l)(G, 'content', p ? 'GameImage' : null != e ? 'Images' : 'NoImages', t)),
                                      children: [
                                          (0, s.jsxs)(m.Clickable, {
                                              className: c()(null != o && G.openGameProfile),
                                              onClick:
                                                  null != o
                                                      ? (e) => {
                                                            o(e), null == a || a();
                                                        }
                                                      : void 0,
                                              children: [f, g, x, v]
                                          }),
                                          _,
                                          h ? null : E,
                                          d ? I : null
                                      ]
                                  })
                        ]
                    })
                }),
                h ? I : null,
                (0, s.jsx)(K, { activity: u })
            ]
        });
    }
    constructor(...e) {
        super(...e),
            V(this, 'handleOpenSpotifyTrack', () => {
                let { activity: e, onOpenSpotifyTrack: t } = this.props;
                d()(null != e, 'Spotify activity was null'), null == t || t(e);
            }),
            V(this, 'handleOpenSpotifyArtist', (e) => {
                let { activity: t, onOpenSpotifyArtist: n, user: i } = this.props;
                d()(null != t, 'Spotify activity was null'), null == n || n(t, i.id, e);
            }),
            V(this, 'handleOpenSpotifyAlbum', () => {
                let { activity: e, onOpenSpotifyAlbum: t, user: n } = this.props;
                d()(null != e, 'Spotify activity was null'), null == t || t(e, n.id);
            });
    }
}
V(q, 'Types', i);
let X = (e) => {
    var t, n, i;
    let l = (0, E.Z)({
        location: 'UserActivity',
        applicationId: null !== (i = null === (t = e.application) || void 0 === t ? void 0 : t.id) && void 0 !== i ? i : null === (n = e.activity) || void 0 === n ? void 0 : n.application_id,
        source: I.m1.UserProfile,
        sourceUserId: e.user.id,
        trackEntryPointImpression: !0
    });
    return (0, s.jsx)(q, {
        ...e,
        onOpenGameProfileModal: l
    });
};
(X.Types = i), (t.Z = X);
