n.d(t, {
    Z: function () {
        return M;
    }
}),
    n(47120);
var i = n(200651),
    s = n(192379),
    r = n(120356),
    a = n.n(r),
    l = n(568611),
    o = n(442837),
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
    x = n(131951),
    Z = n(699516),
    S = n(594174),
    C = n(979651),
    I = n(362446),
    y = n(518084),
    N = n(981631),
    T = n(388032),
    b = n(963656),
    O = n(382290);
function j(e, t, n) {
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
class A extends s.PureComponent {
    handleDisconnect() {
        h.default.selectVoiceChannel(null);
    }
    renderChannelLink(e) {
        let { guild: t } = this.props,
            n = (0, p.F6)(e, S.default, Z.Z),
            s = null != t ? ''.concat(n, ' / ').concat(t.name) : n,
            r = null != t ? t.id : N.ME;
        return (0, i.jsx)(l.rU, {
            to: N.Z5c.CHANNEL(r),
            onClick: (t) => {
                t.stopPropagation(), u.Z.channelListScrollTo(r, e.id);
            },
            children: (0, i.jsx)(m.Z, {
                className: O.channel,
                children: s
            })
        });
    }
    render() {
        let { className: e, contentClassName: t, pinned: n, lobbyId: s, channel: r, quality: l, lastPing: o, hasVideo: d, connectionState: u, deaf: h, mute: p } = this.props;
        return null == r
            ? null
            : (0, i.jsx)(y.ZP.Bar, {
                  className: a()(e, b.controls, { [b.unpinned]: !n }),
                  children: (0, i.jsxs)(y.ZP.Content, {
                      className: a()(t, b.content),
                      dynamicSize: !0,
                      children: [
                          (0, i.jsx)('div', {
                              className: O.inner,
                              children: (0, i.jsx)(c.Popout, {
                                  renderPopout: () => this.renderPopout(r.id),
                                  position: 'top',
                                  children: (e) =>
                                      (0, i.jsx)(c.Clickable, {
                                          ...e,
                                          children: (0, i.jsx)(_.Z, {
                                              channelId: r.id,
                                              quality: l,
                                              lastPing: o,
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
                                  null == s &&
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
            j(this, 'handleToggleSelfMute', () => {
                let { context: e } = this.props;
                d.Z.toggleSelfMute({
                    context: e,
                    location: 'Overlay Controls'
                });
            }),
            j(this, 'handleToggleSelfDeaf', () => {
                let { context: e } = this.props;
                d.Z.toggleSelfDeaf({
                    context: e,
                    location: 'Overlay Controls'
                });
            }),
            j(this, 'renderPopout', (e) => {
                let { lobbyId: t } = this.props;
                return (0, i.jsx)(v.Z, {
                    channelId: e,
                    lobbyId: t,
                    isOverlay: !0
                });
            });
    }
}
function M(e) {
    let { context: t, lobbyId: n, channel: s, ...r } = e,
        a = (0, o.e7)([E.Z], () => E.Z.getGuild(null == s ? void 0 : s.getGuildId())),
        l = (0, o.e7)([C.Z], () => null != s && C.Z.hasVideo(s.id)),
        [c, d] = (0, o.Wu)([x.Z], () => [x.Z.isSelfMute(t) || x.Z.isSelfMutedTemporarily(t), x.Z.isSelfDeaf(t)]),
        [u, h, p] = (0, o.Wu)([I.Z], () => [I.Z.getConnectionState(n), I.Z.getLastPing(n), I.Z.getQuality(n)]);
    return (0, i.jsx)(A, {
        ...r,
        context: t,
        lobbyId: n,
        channel: s,
        guild: a,
        hasVideo: l,
        mute: c,
        deaf: d,
        connectionState: u,
        lastPing: h,
        quality: p
    });
}
