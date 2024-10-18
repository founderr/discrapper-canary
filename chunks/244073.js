n.d(t, {
    Z: function () {
        return M;
    }
}),
    n(47120);
var i = n(735250),
    s = n(470079),
    r = n(120356),
    a = n.n(r),
    o = n(613828),
    l = n(442837),
    c = n(481060),
    d = n(846027),
    u = n(925549),
    h = n(287734),
    p = n(933557),
    f = n(600164),
    _ = n(870569),
    E = n(345243),
    g = n(873596),
    m = n(917405),
    I = n(430824),
    Z = n(131951),
    v = n(699516),
    C = n(594174),
    S = n(979651),
    x = n(362446),
    T = n(518084),
    N = n(981631),
    O = n(689938),
    A = n(945768),
    y = n(663031);
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
class L extends s.PureComponent {
    handleDisconnect() {
        h.default.selectVoiceChannel(null);
    }
    renderChannelLink(e) {
        let { guild: t } = this.props,
            n = (0, p.F6)(e, C.default, v.Z),
            s = null != t ? ''.concat(n, ' / ').concat(t.name) : n,
            r = null != t ? t.id : N.ME;
        return (0, i.jsx)(o.rU, {
            to: N.Z5c.CHANNEL(r),
            onClick: (t) => {
                t.stopPropagation(), u.Z.channelListScrollTo(r, e.id);
            },
            children: (0, i.jsx)(E.Z, {
                className: y.channel,
                children: s
            })
        });
    }
    render() {
        let { className: e, contentClassName: t, pinned: n, lobbyId: s, channel: r, quality: o, lastPing: l, hasVideo: d, connectionState: u, deaf: h, mute: p } = this.props;
        return null == r
            ? null
            : (0, i.jsx)(T.ZP.Bar, {
                  className: a()(e, A.controls, { [A.unpinned]: !n }),
                  children: (0, i.jsxs)(T.ZP.Content, {
                      className: a()(t, A.content),
                      dynamicSize: !0,
                      children: [
                          (0, i.jsx)('div', {
                              className: y.inner,
                              children: (0, i.jsx)(c.Popout, {
                                  renderPopout: () => this.renderPopout(r.id),
                                  position: 'top',
                                  children: (e) =>
                                      (0, i.jsx)(c.Clickable, {
                                          ...e,
                                          children: (0, i.jsx)(m.Z, {
                                              channelId: r.id,
                                              quality: o,
                                              lastPing: l,
                                              hasVideo: d,
                                              state: u,
                                              children: this.renderChannelLink(r)
                                          })
                                      })
                              })
                          }),
                          (0, i.jsxs)(f.Z, {
                              grow: 0,
                              children: [
                                  (0, i.jsx)(_.Z, {
                                      tooltipText: p ? O.Z.Messages.UNMUTE : O.Z.Messages.MUTE,
                                      icon: p ? c.MicrophoneSlashIcon : c.MicrophoneIcon,
                                      iconForeground: p ? A.strikethrough : null,
                                      onClick: this.handleToggleSelfMute
                                  }),
                                  (0, i.jsx)(_.Z, {
                                      tooltipText: h ? O.Z.Messages.UNDEAFEN : O.Z.Messages.DEAFEN,
                                      icon: h ? c.HeadphonesSlashIcon : c.HeadphonesIcon,
                                      onClick: this.handleToggleSelfDeaf,
                                      iconForeground: h ? A.strikethrough : null
                                  }),
                                  null == s &&
                                      (0, i.jsx)(_.Z, {
                                          tooltipText: O.Z.Messages.DISCONNECT_SELF,
                                          onClick: this.handleDisconnect,
                                          icon: c.PhoneHangUpIcon
                                      })
                              ]
                          })
                      ]
                  })
              });
    }
    constructor(...e) {
        super(...e),
            R(this, 'handleToggleSelfMute', () => {
                let { context: e } = this.props;
                d.Z.toggleSelfMute({
                    context: e,
                    location: 'Overlay Controls'
                });
            }),
            R(this, 'handleToggleSelfDeaf', () => {
                let { context: e } = this.props;
                d.Z.toggleSelfDeaf({
                    context: e,
                    location: 'Overlay Controls'
                });
            }),
            R(this, 'renderPopout', (e) => {
                let { lobbyId: t } = this.props;
                return (0, i.jsx)(g.Z, {
                    channelId: e,
                    lobbyId: t,
                    isOverlay: !0
                });
            });
    }
}
function M(e) {
    let { context: t, lobbyId: n, channel: s, ...r } = e,
        a = (0, l.e7)([I.Z], () => I.Z.getGuild(null == s ? void 0 : s.getGuildId())),
        o = (0, l.e7)([S.Z], () => null != s && S.Z.hasVideo(s.id)),
        [c, d] = (0, l.Wu)([Z.Z], () => [Z.Z.isSelfMute(t) || Z.Z.isSelfMutedTemporarily(t), Z.Z.isSelfDeaf(t)]),
        [u, h, p] = (0, l.Wu)([x.Z], () => [x.Z.getConnectionState(n), x.Z.getLastPing(n), x.Z.getQuality(n)]);
    return (0, i.jsx)(L, {
        ...r,
        context: t,
        lobbyId: n,
        channel: s,
        guild: a,
        hasVideo: o,
        mute: c,
        deaf: d,
        connectionState: u,
        lastPing: h,
        quality: p
    });
}
