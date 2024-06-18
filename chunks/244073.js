"use strict";
n.d(t, {
  Z: function() {
    return L
  }
}), n(47120);
var i = n(735250),
  s = n(470079),
  l = n(120356),
  o = n.n(l),
  a = n(613828),
  r = n(442837),
  c = n(481060),
  d = n(846027),
  u = n(925549),
  h = n(287734),
  p = n(324315),
  f = n(933557),
  E = n(873596),
  g = n(430824),
  m = n(131951),
  Z = n(699516),
  I = n(594174),
  S = n(979651),
  _ = n(362446),
  C = n(285952),
  v = n(547881),
  x = n(976401),
  N = n(333454),
  T = n(981631),
  O = n(689938),
  A = n(405572),
  y = n(726271);

function R(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
class M extends s.PureComponent {
  handleDisconnect() {
    h.default.selectVoiceChannel(null)
  }
  renderChannelLink(e) {
    let {
      guild: t
    } = this.props, n = (0, f.F6)(e, I.default, Z.Z), s = null != t ? "".concat(n, " / ").concat(t.name) : n, l = null != t ? t.id : T.ME;
    return (0, i.jsx)(a.rU, {
      to: T.Z5c.CHANNEL(l),
      onClick: t => {
        t.stopPropagation(), u.Z.channelListScrollTo(l, e.id)
      },
      children: (0, i.jsx)(N.Z, {
        className: y.channel,
        children: s
      })
    })
  }
  render() {
    let {
      className: e,
      contentClassName: t,
      pinned: n,
      lobbyId: s,
      channel: l,
      quality: a,
      lastPing: r,
      hasVideo: d,
      connectionState: u,
      deaf: h,
      mute: f
    } = this.props;
    return null == l ? null : (0, i.jsx)(v.ZP.Bar, {
      className: o()(e, A.controls, {
        [A.unpinned]: !n
      }),
      children: (0, i.jsxs)(v.ZP.Content, {
        className: o()(t, A.content),
        dynamicSize: !0,
        children: [(0, i.jsx)("div", {
          className: y.inner,
          children: (0, i.jsx)(c.Popout, {
            renderPopout: () => this.renderPopout(l.id),
            position: "top",
            children: e => (0, i.jsx)(c.Clickable, {
              ...e,
              children: (0, i.jsx)(p.Z, {
                channelId: l.id,
                statusTextClassName: y.statusWithPopout,
                quality: a,
                lastPing: r,
                hasVideo: d,
                state: u,
                children: this.renderChannelLink(l)
              })
            })
          })
        }), (0, i.jsxs)(C.Z, {
          grow: 0,
          children: [(0, i.jsx)(x.Z, {
            tooltipText: f ? O.Z.Messages.UNMUTE : O.Z.Messages.MUTE,
            icon: f ? c.MicrophoneSlashIcon : c.MicrophoneIcon,
            iconForeground: f ? A.strikethrough : null,
            onClick: this.handleToggleSelfMute
          }), (0, i.jsx)(x.Z, {
            tooltipText: h ? O.Z.Messages.UNDEAFEN : O.Z.Messages.DEAFEN,
            icon: h ? c.HeadphonesSlashIcon : c.HeadphonesIcon,
            onClick: this.handleToggleSelfDeaf,
            iconForeground: h ? A.strikethrough : null
          }), null == s && (0, i.jsx)(x.Z, {
            tooltipText: O.Z.Messages.DISCONNECT_SELF,
            onClick: this.handleDisconnect,
            icon: c.PhoneHangUpIcon
          })]
        })]
      })
    })
  }
  constructor(...e) {
    super(...e), R(this, "handleToggleSelfMute", () => {
      let {
        context: e
      } = this.props;
      d.Z.toggleSelfMute({
        context: e
      })
    }), R(this, "handleToggleSelfDeaf", () => {
      let {
        context: e
      } = this.props;
      d.Z.toggleSelfDeaf({
        context: e
      })
    }), R(this, "renderPopout", e => {
      let {
        lobbyId: t
      } = this.props;
      return (0, i.jsx)(E.Z, {
        channelId: e,
        lobbyId: t,
        isOverlay: !0
      })
    })
  }
}

function L(e) {
  let {
    context: t,
    lobbyId: n,
    channel: s,
    ...l
  } = e, o = (0, r.e7)([g.Z], () => g.Z.getGuild(null == s ? void 0 : s.getGuildId())), a = (0, r.e7)([S.Z], () => null != s && S.Z.hasVideo(s.id)), [c, d] = (0, r.Wu)([m.Z], () => [m.Z.isSelfMute(t) || m.Z.isSelfMutedTemporarily(t), m.Z.isSelfDeaf(t)]), [u, h, p] = (0, r.Wu)([_.Z], () => [_.Z.getConnectionState(n), _.Z.getLastPing(n), _.Z.getQuality(n)]);
  return (0, i.jsx)(M, {
    ...l,
    context: t,
    lobbyId: n,
    channel: s,
    guild: o,
    hasVideo: a,
    mute: c,
    deaf: d,
    connectionState: u,
    lastPing: h,
    quality: p
  })
}