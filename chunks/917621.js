var r = n(47120);
var i = n(653041);
var a = n(735250),
    o = n(470079),
    s = n(120356),
    l = n.n(s),
    u = n(692547),
    c = n(481060),
    d = n(600164),
    _ = n(424678),
    E = n(184301),
    f = n(237583),
    h = n(598077),
    p = n(63063),
    m = n(153066),
    I = n(51144),
    T = n(620662),
    g = n(994339),
    S = n(503438),
    A = n(981631),
    v = n(616922),
    N = n(689938),
    O = n(812301);
function R(e, t, n) {
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
let C = 6;
class y extends o.PureComponent {
    render() {
        let { member: e, className: t, guildId: n } = this.props;
        return (0, a.jsx)(c.Popout, {
            renderPopout: this.renderUserPopout,
            position: 'left',
            preload: () => (0, E.Z)(e.user.id, e.user.getAvatarURL(n, 80), { guildId: n }),
            children: (r) => {
                var i;
                return (0, a.jsx)(c.Tooltip, {
                    text: e.unknownUser ? null : null !== (i = e.nick) && void 0 !== i ? i : I.ZP.getName(e.user),
                    children: (i) =>
                        (0, a.jsx)(c.Clickable, {
                            className: e.unknownUser ? O.partyMember : O.partyMemberKnown,
                            ...i,
                            ...r,
                            children: (0, a.jsx)(c.Avatar, {
                                src: e.user.getAvatarURL(n, 24),
                                size: c.AvatarSizes.SIZE_24,
                                className: l()(O.partyAvatar, t),
                                'aria-label': e.user.username
                            })
                        })
                });
            }
        });
    }
    constructor(...e) {
        super(...e),
            R(this, 'renderUserPopout', (e) => {
                let { renderUserPopout: t, member: n } = this.props;
                return n.unknownUser ? null : t(n.user, e);
            });
    }
}
class L extends o.PureComponent {
    isDeadInvite() {
        let { isPreview: e, message: t, activity: n, applicationId: r } = this.props;
        return !e && !(null != t && (0, g.Z)(n, t, r));
    }
    getPartySize() {
        let { activity: e } = this.props;
        return null == e || null == e.party || null == e.party.size || e.party.size.length < 2 ? [-1, -1] : e.party.size;
    }
    getActionableMode() {
        return [A.mFx.LISTEN, A.mFx].includes(this.props.activityActionType) || this.props.isPreview || this.canJoin() ? 'Actionable' : 'NotActionable';
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
        let { activity: e, isPreview: t, isGameLaunchable: n, isInBrowser: r } = this.props;
        return !!t || (!(this.isDeadInvite() || !this.isActionType(A.mFx.JOIN) || !(0, T.Z)(e, A.xjy.JOIN) || !this.hasPartySize() || this.isPartyFull() || r || !n || this.isInParty()) && !0);
    }
    canSendInvite() {
        let { activity: e, isPreview: t } = this.props;
        return !!t || (!(this.isDeadInvite() || !this.isActionType(A.mFx.JOIN_REQUEST) || !(0, T.Z)(e, A.xjy.JOIN) || !this.hasPartySize() || this.isPartyFull()) && !0);
    }
    canSync() {
        let { activity: e, isPreview: t, isSyncable: n, isInBrowser: r } = this.props;
        return !!t || (!((!this.isActionType(A.mFx.LISTEN) && !this.isActionType(A.mFx.WATCH)) || this.isDeadInvite() || !(0, T.Z)(e, A.xjy.SYNC) || r || !n || this.isInParty()) && !0);
    }
    getHelpdeskArticleURL() {
        let { partyId: e } = this.props;
        return null != e && (0, v.Ps)(e) ? A.BhN.SPOTIFY_CONNECTION : A.BhN.RICH_PRESENCE_INTRODUCTION;
    }
    renderHeaderText() {
        let { activityActionType: e, name: t } = this.props;
        switch (e) {
            case A.mFx.LISTEN:
                return N.Z.Messages.INVITE_EMBED_INVITE_TO_LISTEN.format({ name: t });
            case A.mFx.WATCH:
                return N.Z.Messages.INVITE_EMBED_INVITE_TO_WATCH.format({ name: t });
            case A.mFx.JOIN:
                return N.Z.Messages.INVITE_EMBED_INVITE_TO_JOIN_GROUP;
            case A.mFx.JOIN_REQUEST:
            default:
                return N.Z.Messages.INVITE_EMBED_ASK_TO_JOIN;
        }
    }
    renderPartyStatus() {
        let { activityActionType: e, isGameLaunchable: t, isSyncable: n, isPreview: r, isInBrowser: i, name: o, activity: s } = this.props,
            [l, u] = this.getPartySize();
        if (this.isDeadInvite())
            switch (e) {
                case A.mFx.LISTEN:
                    return N.Z.Messages.INVITE_EMBED_LISTEN_HAS_ENDED;
                case A.mFx.WATCH:
                    return N.Z.Messages.INVITE_EMBED_WATCH_HAS_ENDED;
                case A.mFx.JOIN:
                case A.mFx.JOIN_REQUEST:
                default:
                    return N.Z.Messages.INVITE_EMBED_GAME_HAS_ENDED;
            }
        if (i && !r && e === A.mFx.JOIN) return N.Z.Messages.INVITE_EMBED_JOIN_VIA_DESKTOP_APP;
        if (this.isActionType(A.mFx.LISTEN) || this.isActionType(A.mFx.WATCH)) {
            if (null != s && null != s.details && null != s.state && (0, S.Z)(s)) {
                let e = (e, t) =>
                    null != s.state
                        ? (0, a.jsx)(
                              _.Z,
                              {
                                  artists: s.state,
                                  linkClassName: O.textLink,
                                  canOpen: null != s.sync_id,
                                  onOpenSpotifyArtist: this.handleOpenSpotifyArtist
                              },
                              t
                          )
                        : null;
                return [
                    (0, a.jsx)(
                        'div',
                        {
                            className: O.details,
                            children: (0, a.jsx)(c.Anchor, {
                                className: O.textLink,
                                onClick: this.handleOpenSpotifyTrack,
                                children: s.details
                            })
                        },
                        'details'
                    ),
                    (0, a.jsx)(
                        'div',
                        {
                            className: O.state,
                            children: N.Z.Messages.USER_ACTIVITY_LISTENING_ARTISTS.format({
                                artists: s.state,
                                artistsHook: e
                            })
                        },
                        'state'
                    )
                ];
            }
            return this.isActionType(A.mFx.LISTEN) ? N.Z.Messages.USER_ACTIVITY_LISTEN_ALONG : N.Z.Messages.USER_ACTIVITY_WATCH_ALONG;
        }
        return this.isActionType(A.mFx.JOIN_REQUEST) ? (this.isPartyFull() ? N.Z.Messages.INVITE_EMBED_FULL_GROUP : N.Z.Messages.INVITE_EMBED_NUM_OPEN_SLOTS.format({ number: u - l })) : this.isInParty() ? N.Z.Messages.INVITE_EMBED_IN_GROUP : t || n || r ? (this.isPartyFull() ? N.Z.Messages.INVITE_EMBED_FULL_GROUP : this.hasPartySize() ? N.Z.Messages.INVITE_EMBED_NUM_OPEN_SLOTS.format({ number: u - l }) : N.Z.Messages.JOIN) : N.Z.Messages.USER_ACTIVITY_NOT_DETECTED.format({ name: o });
    }
    renderActionButton() {
        let { isInBrowser: e, isPreview: t, isGameLaunchable: n, isSender: r, partyId: i, activity: o, message: s, renderSpotifyJoinButton: l, renderCustomButton: u } = this.props,
            d = {
                className: O.actionButton,
                size: c.Button.Sizes.SMALL
            },
            _ = null != u ? u(d) : null;
        if (null != _) return _;
        if (!this.isDeadInvite() && this.isActionType(A.mFx.LISTEN) && null != i && null != s && null != o && (0, v.Ps)(i))
            return l({
                ...d,
                activity: o,
                user: s.author
            });
        let E = () => {
            if (!t && e && !this.isDeadInvite())
                return {
                    children: N.Z.Messages.USER_ACTIVITY_ACTION_DOWNLOAD_APP,
                    onClick: this.handleDownloadApp
                };
            if (this.canJoin())
                return {
                    children: N.Z.Messages.JOIN,
                    onClick: this.handleJoin
                };
            if (this.canSync())
                return {
                    children: N.Z.Messages.JOIN,
                    onClick: this.handleSync
                };
            if (this.canSendInvite())
                return {
                    children: N.Z.Messages.INVITE_EMBED_INVITE_TO_JOIN,
                    onClick: this.handleInvite,
                    disabled: r
                };
            return {
                children: this.isActionType(A.mFx.JOIN_REQUEST) ? N.Z.Messages.INVITE_EMBED_INVITE_TO_JOIN : N.Z.Messages.JOIN,
                disabled: !0
            };
        };
        return (0, a.jsx)(c.Button, {
            ...d,
            ...E(),
            color: (e || n) && !this.isDeadInvite() ? c.Button.Colors.GREEN : c.Button.Colors.PRIMARY,
            submitting: this.props.isLoading
        });
    }
    renderMoreUsers(e, t, n) {
        return (0, a.jsx)(
            'div',
            {
                className: O.moreUsers,
                children: e
            },
            n
        );
    }
    renderParty() {
        let { partyId: e, partyMembers: t, hideParty: n, guildId: r } = this.props,
            [i, o] = this.getPartySize(),
            s = this.hasPartySize() || this.isActionType(A.mFx.LISTEN) || this.isActionType(A.mFx.WATCH);
        if (null == e || this.isDeadInvite() || !s || n) return null;
        let l = [...t],
            u = Math.min(i, C);
        for (; l.length < u; )
            l.push({
                user: new h.Z({ discriminator: '0005' }),
                unknownUser: !0
            });
        let c = Math.min(o, 100 + C);
        for (; l.length < c; ) l.push(null);
        return (0, a.jsx)(f.Z, {
            guildId: r,
            className: O.partyMembers,
            users: l,
            max: o > 0 ? Math.min(o, C) : C,
            renderUser: this.renderUser,
            renderMoreUsers: this.renderMoreUsers
        });
    }
    render() {
        let { className: e, coverImage: t, name: n, activity: r } = this.props,
            i = this.isActionType(A.mFx.JOIN) || this.isActionType(A.mFx.JOIN_REQUEST),
            o = this.isDeadInvite(),
            s = null;
        null == t || null == r || i
            ? !i && o && (s = (0, a.jsx)('div', { className: O.artworkSpotifySessionEnded }))
            : (s = (0, a.jsx)('img', {
                  alt: '',
                  src: t,
                  className: (0, m.l)(O, 'artwork', this.getActionableMode())
              }));
        let _ = null != r && null != s && null != r.assets && null != r.assets.large_text && '' !== r.assets.large_text && !o && (0, S.Z)(r) ? r.assets.large_text : null,
            E =
                null != _
                    ? (0, a.jsx)(c.Tooltip, {
                          text: _,
                          children: (e) => {
                              let { onMouseEnter: t, onMouseLeave: n } = e;
                              return (0, a.jsx)(c.Anchor, {
                                  onClick: this.handleOpenSpotifyAlbum,
                                  onMouseEnter: t,
                                  onMouseLeave: n,
                                  children: s
                              });
                          }
                      })
                    : s;
        return (0, a.jsxs)('div', {
            className: l()(O.invite, e),
            children: [
                (0, a.jsx)('div', {
                    className: O.coverImageWrapper,
                    children: (0, a.jsx)('div', {
                        className: l()((0, m.l)(O, 'coverImage', this.getActionableMode()), null != s ? O.blurred : null),
                        style: { backgroundImage: null != t ? "url('".concat(t, "')") : void 0 }
                    })
                }),
                (0, a.jsxs)(d.Z, {
                    className: O.fullHeight,
                    children: [
                        (0, a.jsxs)(d.Z, {
                            direction: d.Z.Direction.VERTICAL,
                            children: [
                                (0, a.jsx)('div', {
                                    className: O.header,
                                    children: this.renderHeaderText()
                                }),
                                (0, a.jsx)(d.Z.Child, {
                                    className: O.partyStatus,
                                    children: this.renderPartyStatus()
                                }),
                                (0, a.jsxs)(d.Z, {
                                    align: d.Z.Align.END,
                                    children: [
                                        (0, a.jsxs)(d.Z, {
                                            align: d.Z.Align.CENTER,
                                            className: O.actionAndParty,
                                            basis: 0,
                                            style: { marginRight: 0 },
                                            children: [this.renderActionButton(), this.renderParty()]
                                        }),
                                        null == s && i
                                            ? (0, a.jsx)('div', {
                                                  className: O.name,
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
                (0, a.jsx)(c.Anchor, {
                    href: p.Z.getArticleURL(this.getHelpdeskArticleURL()),
                    className: O.helpIcon,
                    children: (0, a.jsx)(c.CircleQuestionIcon, {
                        color: u.Z.unsafe_rawColors.PRIMARY_300.css,
                        size: 'xxs'
                    })
                })
            ]
        });
    }
    constructor(...e) {
        super(...e),
            R(this, 'handleJoin', () => {
                let { onJoin: e } = this.props;
                null == e || e();
            }),
            R(this, 'handleInvite', () => {
                let { onInvite: e } = this.props;
                null == e || e();
            }),
            R(this, 'handleSync', () => {
                let { onSync: e } = this.props;
                null == e || e();
            }),
            R(this, 'handleDownloadApp', () => {
                let { onDownloadApp: e } = this.props;
                null == e || e();
            }),
            R(this, 'handleOpenSpotifyTrack', () => {
                let { activity: e, onOpenSpotifyTrack: t } = this.props;
                null != e && (null == t || t(e));
            }),
            R(this, 'handleOpenSpotifyArtist', (e) => {
                let { activity: t, onOpenSpotifyArtist: n, message: r } = this.props;
                null != t && null != r && (null == n || n(t, r.author.id, e));
            }),
            R(this, 'handleOpenSpotifyAlbum', () => {
                let { activity: e, onOpenSpotifyAlbum: t, message: n } = this.props;
                null != e && null != n && (null == t || t(e, n.author.id));
            }),
            R(this, 'renderUser', (e, t, n) => {
                let { renderUserPopout: r, guildId: i } = this.props;
                return null != e
                    ? (0, a.jsx)(
                          y,
                          {
                              member: e,
                              renderUserPopout: r,
                              className: t,
                              guildId: i
                          },
                          n
                      )
                    : (0, a.jsx)('div', { className: l()(O.partyMemberEmpty, t) }, n);
            });
    }
}
t.Z = L;
