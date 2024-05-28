"use strict";
n.r(t), n.d(t, {
  default: function() {
    return V
  }
}), n("47120");
var i = n("735250"),
  a = n("470079"),
  l = n("120356"),
  s = n.n(l),
  o = n("613828"),
  r = n("442837"),
  d = n("481060"),
  u = n("846027"),
  c = n("925549"),
  f = n("287734"),
  h = n("324315"),
  p = n("236756"),
  E = n("933557"),
  m = n("430824"),
  g = n("131951"),
  S = n("699516"),
  v = n("594174"),
  C = n("979651"),
  y = n("362446"),
  _ = n("285952"),
  O = n("389320"),
  T = n("242315"),
  N = n("381238"),
  I = n("357727"),
  A = n("779863"),
  x = n("547881"),
  R = n("976401"),
  L = n("333454"),
  M = n("981631"),
  D = n("689938"),
  b = n("405572"),
  P = n("726271");

function w(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}

function k(e) {
  let {
    lobbyId: t
  } = e, n = (0, r.useStateFromStoresObject)([y.default], () => ({
    connectionState: y.default.getConnectionState(t),
    hostname: y.default.getHostname(t),
    averagePing: y.default.getAveragePing(t),
    lastPing: y.default.getLastPing(t),
    pings: y.default.getPings(),
    outboundLossRate: y.default.getOutboundLossRate(t)
  }));
  return (0, i.jsx)(p.default, {
    ...n
  })
}
class j extends a.PureComponent {
  handleDisconnect() {
    f.default.selectVoiceChannel(null)
  }
  renderChannelLink(e) {
    let {
      guild: t
    } = this.props, n = (0, E.computeChannelName)(e, v.default, S.default), a = null != t ? "".concat(n, " / ").concat(t.name) : n, l = null != t ? t.id : M.ME;
    return (0, i.jsx)(o.Link, {
      to: M.Routes.CHANNEL(l),
      onClick: t => {
        t.stopPropagation(), c.default.channelListScrollTo(l, e.id)
      },
      children: (0, i.jsx)(L.default, {
        className: P.channel,
        children: a
      })
    })
  }
  render() {
    let {
      className: e,
      contentClassName: t,
      pinned: n,
      lobbyId: a,
      channel: l,
      quality: o,
      lastPing: r,
      hasVideo: u,
      connectionState: c,
      deaf: f,
      mute: p
    } = this.props;
    return null == l ? null : (0, i.jsx)(x.default.Bar, {
      className: s()(e, b.controls, {
        [b.unpinned]: !n
      }),
      children: (0, i.jsxs)(x.default.Content, {
        className: s()(t, b.content),
        dynamicSize: !0,
        children: [(0, i.jsx)("div", {
          className: P.inner,
          children: (0, i.jsx)(d.Popout, {
            renderPopout: this.renderPopout,
            position: "top",
            children: e => (0, i.jsx)(d.Clickable, {
              ...e,
              children: (0, i.jsx)(h.default, {
                statusTextClassName: P.statusWithPopout,
                quality: o,
                lastPing: r,
                hasVideo: u,
                state: c,
                children: this.renderChannelLink(l)
              })
            })
          })
        }), (0, i.jsxs)(_.default, {
          grow: 0,
          children: [(0, i.jsx)(R.default, {
            tooltipText: p ? D.default.Messages.UNMUTE : D.default.Messages.MUTE,
            icon: p ? A.default : I.default,
            iconForeground: p ? b.strikethrough : null,
            onClick: this.handleToggleSelfMute
          }), (0, i.jsx)(R.default, {
            tooltipText: f ? D.default.Messages.UNDEAFEN : D.default.Messages.DEAFEN,
            icon: f ? N.default : T.default,
            onClick: this.handleToggleSelfDeaf,
            iconForeground: f ? b.strikethrough : null
          }), null == a && (0, i.jsx)(R.default, {
            tooltipText: D.default.Messages.DISCONNECT_SELF,
            onClick: this.handleDisconnect,
            icon: O.default
          })]
        })]
      })
    })
  }
  constructor(...e) {
    super(...e), w(this, "handleToggleSelfMute", () => {
      let {
        context: e
      } = this.props;
      u.default.toggleSelfMute({
        context: e
      })
    }), w(this, "handleToggleSelfDeaf", () => {
      let {
        context: e
      } = this.props;
      u.default.toggleSelfDeaf({
        context: e
      })
    }), w(this, "renderPopout", () => {
      let {
        lobbyId: e
      } = this.props;
      return (0, i.jsx)(k, {
        lobbyId: e
      })
    })
  }
}

function V(e) {
  let {
    context: t,
    lobbyId: n,
    channel: a,
    ...l
  } = e, s = (0, r.useStateFromStores)([m.default], () => m.default.getGuild(null == a ? void 0 : a.getGuildId())), o = (0, r.useStateFromStores)([C.default], () => null != a && C.default.hasVideo(a.id)), [d, u] = (0, r.useStateFromStoresArray)([g.default], () => [g.default.isSelfMute(t) || g.default.isSelfMutedTemporarily(t), g.default.isSelfDeaf(t)]), [c, f, h] = (0, r.useStateFromStoresArray)([y.default], () => [y.default.getConnectionState(n), y.default.getLastPing(n), y.default.getQuality(n)]);
  return (0, i.jsx)(j, {
    ...l,
    context: t,
    lobbyId: n,
    channel: a,
    guild: s,
    hasVideo: o,
    mute: d,
    deaf: u,
    connectionState: c,
    lastPing: f,
    quality: h
  })
}