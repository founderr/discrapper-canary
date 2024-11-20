n.d(t, {
    XX: function () {
        return D;
    },
    ul: function () {
        return w;
    }
}),
    n(47120);
var i,
    l = n(200651),
    r = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(149765),
    c = n(846519),
    d = n(481060),
    u = n(475179),
    h = n(239091),
    p = n(287734),
    m = n(872810),
    f = n(888651),
    g = n(100527),
    C = n(258609),
    x = n(257115),
    _ = n(569545),
    v = n(102172),
    I = n(525925),
    E = n(701362),
    b = n(224184),
    Z = n(184301),
    N = n(347475),
    S = n(597998),
    T = n(314897),
    j = n(430824),
    A = n(496675),
    y = n(979651),
    P = n(981631),
    M = n(927923),
    L = n(70722),
    R = n(388032),
    k = n(697529);
function O(e, t, n) {
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
function D(e) {
    let { numUsers: t } = e;
    return (0, l.jsx)('div', {
        className: k.moreContainer,
        children: (0, l.jsxs)(d.Text, {
            color: 'text-muted',
            variant: 'text-sm/medium',
            children: ['+', t]
        })
    });
}
function w(e) {
    let { numAudience: t, collapsed: n } = e,
        i = n ? t : R.intl.formatToPlainString(R.t['+v2pNz'], { count: t });
    return (0, l.jsxs)('div', {
        className: s()(k.audienceContainer, { [k.audienceContainerCollapsed]: n }),
        children: [
            (0, l.jsx)('div', {
                className: k.audienceIconContainer,
                children: (0, l.jsx)(d.HeadphonesIcon, {
                    size: 'md',
                    color: 'currentColor',
                    className: k.audienceIcon
                })
            }),
            (0, l.jsx)(d.Text, {
                color: 'text-muted',
                variant: 'text-sm/medium',
                children: i
            })
        ]
    });
}
class B extends (i = r.PureComponent) {
    get canWatchStream() {
        let { channel: e, isStreaming: t } = this.props;
        return t && (0, v.p9)(e, y.Z, j.Z, A.Z, C.Z)[0];
    }
    render() {
        let { userPopoutOpen: e } = this.state,
            { connectUserDragSource: t, canDrag: n, isSelfOnOtherClient: i, user: r, channel: a } = this.props,
            s = (0, l.jsx)('div', {
                className: k.draggable,
                'data-dnd-name': a.name,
                onMouseEnter: i ? void 0 : this.handleMouseEnter,
                onMouseLeave: i ? void 0 : this.handleHidePreview,
                children: (0, l.jsx)(d.Popout, {
                    preload: () =>
                        (0, Z.Z)(r.id, r.getAvatarURL(a.guild_id, 80), {
                            guildId: a.guild_id,
                            channelId: a.id
                        }),
                    position: 'right',
                    renderPopout: this.renderUserPopout,
                    shouldShow: e,
                    onRequestClose: this.handleCloseUserPopout,
                    children: (e) => this.renderUser(e)
                })
            });
        return n ? t(s) : s;
    }
    constructor(...e) {
        super(...e),
            O(this, 'domElementRef', r.createRef()),
            O(this, 'state', {
                userPopoutOpen: !1,
                isHoveringHangStatus: !1
            }),
            O(
                this,
                'setIsHoveringHangStatusDelayed',
                new c.sW(500, () => {
                    this.setState({ isHoveringHangStatus: !0 });
                })
            ),
            O(this, 'handleClickUser', () => {
                this.setState({ userPopoutOpen: !this.state.userPopoutOpen });
            }),
            O(this, 'handleCloseUserPopout', () => {
                this.setState({ userPopoutOpen: !1 });
            }),
            O(this, 'handleHidePreview', () => {
                let { hidePreview: e, isStreaming: t, user: n, showHangStatus: i } = this.props;
                (t || i) && (null == e || e(n.id)), this.setState({ isHoveringHangStatus: !1 });
            }),
            O(this, 'handleMouseEnter', () => {
                let { user: e, showPreview: t, isStreaming: n, showHangStatus: i } = this.props;
                (n || i) && !this.state.userPopoutOpen && (null == t || t(e.id));
            }),
            O(this, 'handleHoverHangStatus', (e) => {
                let { previewIsOpen: t } = this.props;
                e && t ? this.setIsHoveringHangStatusDelayed.delay() : !e && this.setIsHoveringHangStatusDelayed.isDelayed() && this.setIsHoveringHangStatusDelayed.cancel();
            }),
            O(this, 'handleHoverIcons', (e) => {
                e && (this.setIsHoveringHangStatusDelayed.cancel(), this.setState({ isHoveringHangStatus: !1 }));
            }),
            O(this, 'handleWatchStream', () => {
                let { user: e, channel: t, isWatching: n, hidePreview: i } = this.props;
                if (!this.canWatchStream) return;
                let l = {
                    streamType: L.lo.GUILD,
                    ownerId: e.id,
                    channelId: t.id,
                    guildId: t.guild_id
                };
                T.default.getId() !== e.id && p.default.selectVoiceChannel(t.id), n ? ((0, I.Z)(l), u.Z.selectParticipant(l.channelId, (0, _.V9)(l))) : (0, m.iV)(l), null == i || i(e.id);
            }),
            O(this, 'handleJoinVoice', () => {
                let { user: e, channel: t, hidePreview: n } = this.props;
                A.Z.can(o.$e(P.Plq.CONNECT, P.Plq.VIEW_CHANNEL), t) && (p.default.selectVoiceChannel(t.id), null == n || n(e.id));
            }),
            O(this, 'handleUserContextMenu', (e) => {
                let { channel: t, user: i } = this.props;
                (0, h.jW)(e, async () => {
                    let { default: e } = await Promise.all([n.e('79695'), n.e('92453'), n.e('13125'), n.e('91864')]).then(n.bind(n, 757387));
                    return (n) =>
                        (0, l.jsx)(e, {
                            ...n,
                            user: i,
                            guildId: t.guild_id,
                            channel: t,
                            showMediaItems: !0,
                            showStageChannelItems: t.isGuildStageVoice()
                        });
                });
            }),
            O(this, 'renderUserPopout', (e) => {
                let { channel: t, user: n } = this.props,
                    i = t.getGuildId();
                return (0, l.jsx)(N.Z, {
                    userId: n.id,
                    guildId: null != i ? i : void 0,
                    channelId: t.id,
                    newAnalyticsLocations: [g.Z.VOICE_USER],
                    ...e
                });
            }),
            O(this, 'renderStreamPopout', () => {
                let { user: e, channel: t, previewIsOpen: n, location: i } = this.props;
                return (0, l.jsx)(E.Z, {
                    user: e,
                    channel: t,
                    onWatch: this.handleWatchStream,
                    previewIsOpen: n,
                    location: i
                });
            }),
            O(this, 'renderHangStatusPopout', () => {
                let { hangStatusActivity: e, previewIsOpen: t, user: n, channel: i } = this.props;
                return (0, l.jsx)(b.Z, {
                    userId: n.id,
                    channel: i,
                    hangStatusActivity: e,
                    previewIsOpen: t
                });
            }),
            O(this, 'renderUser', (e) => {
                let { isSelfOnOtherClient: t, otherClientSessionType: n, voicePlatform: i, shouldShowPreview: r, mute: a, localMute: o, localVideoDisabled: c, speaking: u, disconnected: h, user: p, deaf: m, priority: f, collapsed: g, isStreaming: C, isGuest: _, nick: v, video: I, serverMute: E, serverDeaf: b, tabIndex: Z, embeddedApplication: N, channel: T, hangStatusActivity: j, showHangStatus: A, isSelf: y, application: P } = this.props,
                    { userPopoutOpen: L, isHoveringHangStatus: O } = this.state,
                    D = M.al.has(null != n ? n : ''),
                    w = {
                        user: p,
                        speaking: u,
                        disconnected: h,
                        mute: a,
                        localMute: o,
                        localVideoDisabled: c,
                        isStreaming: C,
                        isGuest: _,
                        video: I,
                        priority: f,
                        deaf: m,
                        nick: v,
                        collapsed: g,
                        overlap: g,
                        serverMute: E,
                        serverDeaf: b,
                        tabIndex: Z,
                        otherClientSessionType: n,
                        voicePlatform: i,
                        embeddedApplication: N,
                        avatarContainerClass: s()({ [k.userAvatar]: !0 }),
                        disabled: t && !D,
                        selected: L,
                        onClick: D ? void 0 : this.handleClickUser,
                        onDoubleClick: this.handleWatchStream,
                        onContextMenu: this.handleUserContextMenu,
                        guildId: T.guild_id,
                        hangStatusActivity: j,
                        showHangStatus: A,
                        isSelf: y,
                        application: P,
                        channelId: T.id
                    };
                if (t) {
                    var B;
                    return (0, l.jsx)(d.Tooltip, {
                        text: null !== (B = (0, x.Z)(n)) && void 0 !== B ? B : R.intl.string(R.t.IyYqqa),
                        children: (e) => {
                            let { onClick: t, onContextMenu: n, ...i } = e;
                            return (0, l.jsx)(S.ZP, {
                                ...w,
                                ...i
                            });
                        }
                    });
                }
                return (0, l.jsx)(d.Popout, {
                    position: 'right',
                    renderPopout: (A && O) || !C ? this.renderHangStatusPopout : this.renderStreamPopout,
                    shouldShow: r && !L,
                    onRequestClose: this.handleHidePreview,
                    spacing: 0,
                    children: () =>
                        (0, l.jsx)(S.ZP, {
                            ...w,
                            onMouseDown: e.onMouseDown,
                            onKeyDown: e.onKeyDown,
                            handleHoverHangStatus: this.handleHoverHangStatus,
                            handleHoverIcons: this.handleHoverIcons
                        })
                });
            });
    }
}
O(B, 'defaultProps', { isSelfOnOtherClient: !1 }), (t.ZP = (0, f.$)(B));
