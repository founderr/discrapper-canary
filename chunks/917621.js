n(47120), n(653041);
var i = n(735250),
    a = n(470079),
    s = n(120356),
    l = n.n(s),
    r = n(692547),
    o = n(481060),
    c = n(600164),
    d = n(424678),
    u = n(184301),
    _ = n(237583),
    E = n(598077),
    I = n(63063),
    m = n(153066),
    T = n(51144),
    N = n(620662),
    h = n(994339),
    C = n(503438),
    p = n(981631),
    f = n(616922),
    A = n(689938),
    g = n(812301);
function S(e, t, n) {
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
class M extends a.PureComponent {
    render() {
        let { member: e, className: t, guildId: n } = this.props;
        return (0, i.jsx)(o.Popout, {
            renderPopout: this.renderUserPopout,
            position: 'left',
            preload: () => (0, u.Z)(e.user.id, e.user.getAvatarURL(n, 80), { guildId: n }),
            children: (a) => {
                var s;
                return (0, i.jsx)(o.Tooltip, {
                    text: e.unknownUser ? null : null !== (s = e.nick) && void 0 !== s ? s : T.ZP.getName(e.user),
                    children: (s) =>
                        (0, i.jsx)(o.Clickable, {
                            className: e.unknownUser ? g.partyMember : g.partyMemberKnown,
                            ...s,
                            ...a,
                            children: (0, i.jsx)(o.Avatar, {
                                src: e.user.getAvatarURL(n, 24),
                                size: o.AvatarSizes.SIZE_24,
                                className: l()(g.partyAvatar, t),
                                'aria-label': e.user.username
                            })
                        })
                });
            }
        });
    }
    constructor(...e) {
        super(...e),
            S(this, 'renderUserPopout', (e) => {
                let { renderUserPopout: t, member: n } = this.props;
                return n.unknownUser ? null : t(n.user, e);
            });
    }
}
class O extends a.PureComponent {
    isDeadInvite() {
        let { isPreview: e, message: t, activity: n, applicationId: i } = this.props;
        return !e && !(null != t && (0, h.Z)(n, t, i));
    }
    getPartySize() {
        let { activity: e } = this.props;
        return null == e || null == e.party || null == e.party.size || e.party.size.length < 2 ? [-1, -1] : e.party.size;
    }
    getActionableMode() {
        return [p.mFx.LISTEN, p.mFx].includes(this.props.activityActionType) || this.props.isPreview || this.canJoin() ? 'Actionable' : 'NotActionable';
    }
    isInParty() {
        let { activity: e, myPartyId: t, isPreview: n } = this.props;
        return !n && null != e && null != e.party && t === e.party.id;
    }
    isPartyFull() {
        let [e, t] = this.getPartySize();
        return e > -1 && e >= t;
    }
    hasPartySize() {
        let [e, t] = this.getPartySize();
        return e > -1 && t > -1;
    }
    isActionType(e) {
        return this.props.activityActionType === e;
    }
    canJoin() {
        let { activity: e, isPreview: t, isGameLaunchable: n, isInBrowser: i } = this.props;
        return !!t || (!(this.isDeadInvite() || !this.isActionType(p.mFx.JOIN) || !(0, N.Z)(e, p.xjy.JOIN) || !this.hasPartySize() || this.isPartyFull() || i || !n || this.isInParty()) && !0);
    }
    canSendInvite() {
        let { activity: e, isPreview: t } = this.props;
        return !!t || (!(this.isDeadInvite() || !this.isActionType(p.mFx.JOIN_REQUEST) || !(0, N.Z)(e, p.xjy.JOIN) || !this.hasPartySize() || this.isPartyFull()) && !0);
    }
    canSync() {
        let { activity: e, isPreview: t, isSyncable: n, isInBrowser: i } = this.props;
        return !!t || (!((!this.isActionType(p.mFx.LISTEN) && !this.isActionType(p.mFx.WATCH)) || this.isDeadInvite() || !(0, N.Z)(e, p.xjy.SYNC) || i || !n || this.isInParty()) && !0);
    }
    getHelpdeskArticleURL() {
        let { partyId: e } = this.props;
        return null != e && (0, f.Ps)(e) ? p.BhN.SPOTIFY_CONNECTION : p.BhN.RICH_PRESENCE_INTRODUCTION;
    }
    renderHeaderText() {
        let { activityActionType: e, name: t } = this.props;
        switch (e) {
            case p.mFx.LISTEN:
                return A.Z.Messages.INVITE_EMBED_INVITE_TO_LISTEN.format({ name: t });
            case p.mFx.WATCH:
                return A.Z.Messages.INVITE_EMBED_INVITE_TO_WATCH.format({ name: t });
            case p.mFx.JOIN:
                return A.Z.Messages.INVITE_EMBED_INVITE_TO_JOIN_GROUP;
            case p.mFx.JOIN_REQUEST:
            default:
                return A.Z.Messages.INVITE_EMBED_ASK_TO_JOIN;
        }
    }
    renderPartyStatus() {
        let { activityActionType: e, isGameLaunchable: t, isSyncable: n, isPreview: a, isInBrowser: s, name: l, activity: r } = this.props,
            [c, u] = this.getPartySize();
        if (this.isDeadInvite())
            switch (e) {
                case p.mFx.LISTEN:
                    return A.Z.Messages.INVITE_EMBED_LISTEN_HAS_ENDED;
                case p.mFx.WATCH:
                    return A.Z.Messages.INVITE_EMBED_WATCH_HAS_ENDED;
                case p.mFx.JOIN:
                case p.mFx.JOIN_REQUEST:
                default:
                    return A.Z.Messages.INVITE_EMBED_GAME_HAS_ENDED;
            }
        if (s && !a && e === p.mFx.JOIN) return A.Z.Messages.INVITE_EMBED_JOIN_VIA_DESKTOP_APP;
        if (this.isActionType(p.mFx.LISTEN) || this.isActionType(p.mFx.WATCH))
            return null != r && null != r.details && null != r.state && (0, C.Z)(r)
                ? [
                      (0, i.jsx)(
                          'div',
                          {
                              className: g.details,
                              children: (0, i.jsx)(o.Anchor, {
                                  className: g.textLink,
                                  onClick: this.handleOpenSpotifyTrack,
                                  children: r.details
                              })
                          },
                          'details'
                      ),
                      (0, i.jsx)(
                          'div',
                          {
                              className: g.state,
                              children: A.Z.Messages.USER_ACTIVITY_LISTENING_ARTISTS.format({
                                  artists: r.state,
                                  artistsHook: (e, t) =>
                                      null != r.state
                                          ? (0, i.jsx)(
                                                d.Z,
                                                {
                                                    artists: r.state,
                                                    linkClassName: g.textLink,
                                                    canOpen: null != r.sync_id,
                                                    onOpenSpotifyArtist: this.handleOpenSpotifyArtist
                                                },
                                                t
                                            )
                                          : null
                              })
                          },
                          'state'
                      )
                  ]
                : this.isActionType(p.mFx.LISTEN)
                  ? A.Z.Messages.USER_ACTIVITY_LISTEN_ALONG
                  : A.Z.Messages.USER_ACTIVITY_WATCH_ALONG;
        return this.isActionType(p.mFx.JOIN_REQUEST) ? (this.isPartyFull() ? A.Z.Messages.INVITE_EMBED_FULL_GROUP : A.Z.Messages.INVITE_EMBED_NUM_OPEN_SLOTS.format({ number: u - c })) : this.isInParty() ? A.Z.Messages.INVITE_EMBED_IN_GROUP : t || n || a ? (this.isPartyFull() ? A.Z.Messages.INVITE_EMBED_FULL_GROUP : this.hasPartySize() ? A.Z.Messages.INVITE_EMBED_NUM_OPEN_SLOTS.format({ number: u - c }) : A.Z.Messages.JOIN) : A.Z.Messages.USER_ACTIVITY_NOT_DETECTED.format({ name: l });
    }
    renderActionButton() {
        let { isInBrowser: e, isPreview: t, isGameLaunchable: n, isSender: a, partyId: s, activity: l, message: r, renderSpotifyJoinButton: c, renderCustomButton: d } = this.props,
            u = {
                className: g.actionButton,
                size: o.Button.Sizes.SMALL
            },
            _ = null != d ? d(u) : null;
        return null != _
            ? _
            : !this.isDeadInvite() && this.isActionType(p.mFx.LISTEN) && null != s && null != r && null != l && (0, f.Ps)(s)
              ? c({
                    ...u,
                    activity: l,
                    user: r.author
                })
              : (0, i.jsx)(o.Button, {
                    ...u,
                    ...(() => {
                        if (!t && e && !this.isDeadInvite())
                            return {
                                children: A.Z.Messages.USER_ACTIVITY_ACTION_DOWNLOAD_APP,
                                onClick: this.handleDownloadApp
                            };
                        if (this.canJoin())
                            return {
                                children: A.Z.Messages.JOIN,
                                onClick: this.handleJoin
                            };
                        if (this.canSync())
                            return {
                                children: A.Z.Messages.JOIN,
                                onClick: this.handleSync
                            };
                        if (this.canSendInvite())
                            return {
                                children: A.Z.Messages.INVITE_EMBED_INVITE_TO_JOIN,
                                onClick: this.handleInvite,
                                disabled: a
                            };
                        return {
                            children: this.isActionType(p.mFx.JOIN_REQUEST) ? A.Z.Messages.INVITE_EMBED_INVITE_TO_JOIN : A.Z.Messages.JOIN,
                            disabled: !0
                        };
                    })(),
                    color: (e || n) && !this.isDeadInvite() ? o.Button.Colors.GREEN : o.Button.Colors.PRIMARY,
                    submitting: this.props.isLoading
                });
    }
    renderMoreUsers(e, t, n) {
        return (0, i.jsx)(
            'div',
            {
                className: g.moreUsers,
                children: e
            },
            n
        );
    }
    renderParty() {
        let { partyId: e, partyMembers: t, hideParty: n, guildId: a } = this.props,
            [s, l] = this.getPartySize(),
            r = this.hasPartySize() || this.isActionType(p.mFx.LISTEN) || this.isActionType(p.mFx.WATCH);
        if (null == e || this.isDeadInvite() || !r || n) return null;
        let o = [...t],
            c = Math.min(s, 6);
        for (; o.length < c; )
            o.push({
                user: new E.Z({ discriminator: '0005' }),
                unknownUser: !0
            });
        let d = Math.min(l, 106);
        for (; o.length < d; ) o.push(null);
        return (0, i.jsx)(_.Z, {
            guildId: a,
            className: g.partyMembers,
            users: o,
            max: l > 0 ? Math.min(l, 6) : 6,
            renderUser: this.renderUser,
            renderMoreUsers: this.renderMoreUsers
        });
    }
    render() {
        let { className: e, coverImage: t, name: n, activity: a } = this.props,
            s = this.isActionType(p.mFx.JOIN) || this.isActionType(p.mFx.JOIN_REQUEST),
            d = this.isDeadInvite(),
            u = null;
        null == t || null == a || s
            ? !s && d && (u = (0, i.jsx)('div', { className: g.artworkSpotifySessionEnded }))
            : (u = (0, i.jsx)('img', {
                  alt: '',
                  src: t,
                  className: (0, m.l)(g, 'artwork', this.getActionableMode())
              }));
        let _ = null != a && null != u && null != a.assets && null != a.assets.large_text && '' !== a.assets.large_text && !d && (0, C.Z)(a) ? a.assets.large_text : null,
            E =
                null != _
                    ? (0, i.jsx)(o.Tooltip, {
                          text: _,
                          children: (e) => {
                              let { onMouseEnter: t, onMouseLeave: n } = e;
                              return (0, i.jsx)(o.Anchor, {
                                  onClick: this.handleOpenSpotifyAlbum,
                                  onMouseEnter: t,
                                  onMouseLeave: n,
                                  children: u
                              });
                          }
                      })
                    : u;
        return (0, i.jsxs)('div', {
            className: l()(g.invite, e),
            children: [
                (0, i.jsx)('div', {
                    className: g.coverImageWrapper,
                    children: (0, i.jsx)('div', {
                        className: l()((0, m.l)(g, 'coverImage', this.getActionableMode()), null != u ? g.blurred : null),
                        style: { backgroundImage: null != t ? "url('".concat(t, "')") : void 0 }
                    })
                }),
                (0, i.jsxs)(c.Z, {
                    className: g.fullHeight,
                    children: [
                        (0, i.jsxs)(c.Z, {
                            direction: c.Z.Direction.VERTICAL,
                            children: [
                                (0, i.jsx)('div', {
                                    className: g.header,
                                    children: this.renderHeaderText()
                                }),
                                (0, i.jsx)(c.Z.Child, {
                                    className: g.partyStatus,
                                    children: this.renderPartyStatus()
                                }),
                                (0, i.jsxs)(c.Z, {
                                    align: c.Z.Align.END,
                                    children: [
                                        (0, i.jsxs)(c.Z, {
                                            align: c.Z.Align.CENTER,
                                            className: g.actionAndParty,
                                            basis: 0,
                                            style: { marginRight: 0 },
                                            children: [this.renderActionButton(), this.renderParty()]
                                        }),
                                        null == u && s
                                            ? (0, i.jsx)('div', {
                                                  className: g.name,
                                                  children: n
                                              })
                                            : null
                                    ]
                                })
                            ]
                        }),
                        E
                    ]
                }),
                (0, i.jsx)(o.Anchor, {
                    href: I.Z.getArticleURL(this.getHelpdeskArticleURL()),
                    className: g.helpIcon,
                    children: (0, i.jsx)(o.CircleQuestionIcon, {
                        color: r.Z.unsafe_rawColors.PRIMARY_300.css,
                        size: 'xxs'
                    })
                })
            ]
        });
    }
    constructor(...e) {
        super(...e),
            S(this, 'handleJoin', () => {
                let { onJoin: e } = this.props;
                null == e || e();
            }),
            S(this, 'handleInvite', () => {
                let { onInvite: e } = this.props;
                null == e || e();
            }),
            S(this, 'handleSync', () => {
                let { onSync: e } = this.props;
                null == e || e();
            }),
            S(this, 'handleDownloadApp', () => {
                let { onDownloadApp: e } = this.props;
                null == e || e();
            }),
            S(this, 'handleOpenSpotifyTrack', () => {
                let { activity: e, onOpenSpotifyTrack: t } = this.props;
                null != e && (null == t || t(e));
            }),
            S(this, 'handleOpenSpotifyArtist', (e) => {
                let { activity: t, onOpenSpotifyArtist: n, message: i } = this.props;
                null != t && null != i && (null == n || n(t, i.author.id, e));
            }),
            S(this, 'handleOpenSpotifyAlbum', () => {
                let { activity: e, onOpenSpotifyAlbum: t, message: n } = this.props;
                null != e && null != n && (null == t || t(e, n.author.id));
            }),
            S(this, 'renderUser', (e, t, n) => {
                let { renderUserPopout: a, guildId: s } = this.props;
                return null != e
                    ? (0, i.jsx)(
                          M,
                          {
                              member: e,
                              renderUserPopout: a,
                              className: t,
                              guildId: s
                          },
                          n
                      )
                    : (0, i.jsx)('div', { className: l()(g.partyMemberEmpty, t) }, n);
            });
    }
}
t.Z = O;
