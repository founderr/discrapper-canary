"use strict";
n.r(t), n.d(t, {
  default: function() {
    return w
  }
}), n("222007");
var i = n("37983"),
  a = n("884691"),
  l = n("414456"),
  s = n.n(l),
  o = n("90915"),
  r = n("446674"),
  d = n("77078"),
  u = n("629109"),
  c = n("406189"),
  f = n("987317"),
  h = n("412026"),
  p = n("331306"),
  E = n("679653"),
  g = n("305961"),
  m = n("42887"),
  S = n("27618"),
  v = n("697218"),
  I = n("800762"),
  y = n("783419"),
  _ = n("145131"),
  N = n("293137"),
  T = n("272339"),
  O = n("200639"),
  C = n("849467"),
  A = n("97347"),
  x = n("560995"),
  R = n("962541"),
  M = n("762489"),
  L = n("49111"),
  D = n("782340"),
  j = n("79415"),
  P = n("833076");

function b(e) {
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
class k extends a.PureComponent {
  handleDisconnect() {
    f.default.selectVoiceChannel(null)
  }
  renderLobby() {
    return (0, i.jsx)(M.default, {
      className: P.channel,
      children: D.default.Messages.LOBBY
    })
  }
  renderChannelLink(e) {
    let {
      guild: t
    } = this.props, n = (0, E.computeChannelName)(e, v.default, S.default), a = null != t ? "".concat(n, " / ").concat(t.name) : n, l = null != t ? t.id : L.ME;
    return (0, i.jsx)(o.Link, {
      to: L.Routes.CHANNEL(l),
      onClick: t => {
        t.stopPropagation(), c.default.channelListScrollTo(l, e.id)
      },
      children: (0, i.jsx)(M.default, {
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
    return null == l && null == a ? null : (0, i.jsx)(x.default.Bar, {
      className: s(e, j.controls, {
        [j.unpinned]: !n
      }),
      children: (0, i.jsxs)(x.default.Content, {
        className: s(t, j.content),
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
                children: null != l ? this.renderChannelLink(l) : this.renderLobby()
              })
            })
          })
        }), (0, i.jsxs)(_.default, {
          grow: 0,
          children: [(0, i.jsx)(R.default, {
            tooltipText: p ? D.default.Messages.UNMUTE : D.default.Messages.MUTE,
            icon: p ? A.default : C.default,
            iconForeground: p ? j.strikethrough : null,
            onClick: this.handleToggleSelfMute
          }), (0, i.jsx)(R.default, {
            tooltipText: f ? D.default.Messages.UNDEAFEN : D.default.Messages.DEAFEN,
            icon: f ? O.default : T.default,
            onClick: this.handleToggleSelfDeaf,
            iconForeground: f ? j.strikethrough : null
          }), null == a && (0, i.jsx)(R.default, {
            tooltipText: D.default.Messages.DISCONNECT_SELF,
            onClick: this.handleDisconnect,
            icon: N.default
          })]
        })]
      })
    })
  }
  constructor(...e) {
    super(...e), this.handleToggleSelfMute = () => {
      let {
        context: e
      } = this.props;
      u.default.toggleSelfMute({
        context: e
      })
    }, this.handleToggleSelfDeaf = () => {
      let {
        context: e
      } = this.props;
      u.default.toggleSelfDeaf({
        context: e
      })
    }, this.renderPopout = () => {
      let {
        lobbyId: e
      } = this.props;
      return (0, i.jsx)(b, {
        lobbyId: e
      })
    }
  }
}

function w(e) {
  let {
    context: t,
    lobbyId: n,
    channel: a,
    ...l
  } = e, s = (0, r.useStateFromStores)([g.default], () => g.default.getGuild(null == a ? void 0 : a.getGuildId())), o = (0, r.useStateFromStores)([I.default], () => null != a && I.default.hasVideo(a.id)), [d, u] = (0, r.useStateFromStoresArray)([m.default], () => [m.default.isSelfMute(t) || m.default.isSelfMutedTemporarily(t), m.default.isSelfDeaf(t)]), [c, f, h] = (0, r.useStateFromStoresArray)([y.default], () => [y.default.getConnectionState(n), y.default.getLastPing(n), y.default.getQuality(n)]);
  return (0, i.jsx)(k, {
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