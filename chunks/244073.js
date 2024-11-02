n.d(t, {
    Z: function () {
        return P;
    }
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    s = n(120356),
    o = n.n(s),
    a = n(568611),
    l = n(442837),
    c = n(481060),
    d = n(846027),
    u = n(925549),
    h = n(287734),
    p = n(933557),
    f = n(600164),
    g = n(870569),
    m = n(345243),
    v = n(873596),
    _ = n(917405),
    E = n(430824),
    Z = n(131951),
    x = n(699516),
    I = n(594174),
    C = n(979651),
    S = n(362446),
    y = n(518084),
    N = n(981631),
    T = n(388032),
    b = n(945768),
    O = n(663031);
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
class A extends r.PureComponent {
    handleDisconnect() {
        h.default.selectVoiceChannel(null);
    }
    renderChannelLink(e) {
        let { guild: t } = this.props,
            n = (0, p.F6)(e, I.default, x.Z),
            r = null != t ? ''.concat(n, ' / ').concat(t.name) : n,
            s = null != t ? t.id : N.ME;
        return (0, i.jsx)(a.rU, {
            to: N.Z5c.CHANNEL(s),
            onClick: (t) => {
                t.stopPropagation(), u.Z.channelListScrollTo(s, e.id);
            },
            children: (0, i.jsx)(m.Z, {
                className: O.channel,
                children: r
            })
        });
    }
    render() {
        let { className: e, contentClassName: t, pinned: n, lobbyId: r, channel: s, quality: a, lastPing: l, hasVideo: d, connectionState: u, deaf: h, mute: p } = this.props;
        return null == s
            ? null
            : (0, i.jsx)(y.ZP.Bar, {
                  className: o()(e, b.controls, { [b.unpinned]: !n }),
                  children: (0, i.jsxs)(y.ZP.Content, {
                      className: o()(t, b.content),
                      dynamicSize: !0,
                      children: [
                          (0, i.jsx)('div', {
                              className: O.inner,
                              children: (0, i.jsx)(c.Popout, {
                                  renderPopout: () => this.renderPopout(s.id),
                                  position: 'top',
                                  children: (e) =>
                                      (0, i.jsx)(c.Clickable, {
                                          ...e,
                                          children: (0, i.jsx)(_.Z, {
                                              channelId: s.id,
                                              quality: a,
                                              lastPing: l,
                                              hasVideo: d,
                                              state: u,
                                              children: this.renderChannelLink(s)
                                          })
                                      })
                              })
                          }),
                          (0, i.jsxs)(f.Z, {
                              grow: 0,
                              children: [
                                  (0, i.jsx)(g.Z, {
                                      tooltipText: p ? T.intl.string(T.t.YqAjX1) : T.intl.string(T.t['w4m94+']),
                                      icon: p ? c.MicrophoneSlashIcon : c.MicrophoneIcon,
                                      iconForeground: p ? b.strikethrough : null,
                                      onClick: this.handleToggleSelfMute
                                  }),
                                  (0, i.jsx)(g.Z, {
                                      tooltipText: h ? T.intl.string(T.t['2US87+']) : T.intl.string(T.t.wjcRFR),
                                      icon: h ? c.HeadphonesSlashIcon : c.HeadphonesIcon,
                                      onClick: this.handleToggleSelfDeaf,
                                      iconForeground: h ? b.strikethrough : null
                                  }),
                                  null == r &&
                                      (0, i.jsx)(g.Z, {
                                          tooltipText: T.intl.string(T.t['6vrfgo']),
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
                return (0, i.jsx)(v.Z, {
                    channelId: e,
                    lobbyId: t,
                    isOverlay: !0
                });
            });
    }
}
function P(e) {
    let { context: t, lobbyId: n, channel: r, ...s } = e,
        o = (0, l.e7)([E.Z], () => E.Z.getGuild(null == r ? void 0 : r.getGuildId())),
        a = (0, l.e7)([C.Z], () => null != r && C.Z.hasVideo(r.id)),
        [c, d] = (0, l.Wu)([Z.Z], () => [Z.Z.isSelfMute(t) || Z.Z.isSelfMutedTemporarily(t), Z.Z.isSelfDeaf(t)]),
        [u, h, p] = (0, l.Wu)([S.Z], () => [S.Z.getConnectionState(n), S.Z.getLastPing(n), S.Z.getQuality(n)]);
    return (0, i.jsx)(A, {
        ...s,
        context: t,
        lobbyId: n,
        channel: r,
        guild: o,
        hasVideo: a,
        mute: c,
        deaf: d,
        connectionState: u,
        lastPing: h,
        quality: p
    });
}
