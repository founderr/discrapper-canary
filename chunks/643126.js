n(47120);
var i = n(735250),
  s = n(470079),
  l = n(120356),
  a = n.n(l),
  r = n(512722),
  o = n.n(r),
  c = n(481060),
  u = n(100527),
  d = n(484459),
  E = n(103575),
  h = n(285952),
  _ = n(409216),
  I = n(63063),
  m = n(976401),
  g = n(333454),
  p = n(864441),
  T = n(981631),
  N = n(689938),
  S = n(15245);

function C(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let A = {
  HOST: 5,
  LISTENER: 4
};
class f extends s.PureComponent {
  isHost() {
    let {
      currentUser: e,
      host: t
    } = this.props;
    return e.id === (null == t ? void 0 : t.id)
  }
  renderTitle() {
    return (0, i.jsxs)("div", {
      children: [(0, i.jsx)(p.Z, {
        children: this.isHost() ? N.Z.Messages.SPOTIFY_LISTEN_ALONG_TITLE_HOST.format({
          count: this.props.party.length
        }) : N.Z.Messages.SPOTIFY_LISTEN_ALONG_TITLE_LISTENER
      }), (0, i.jsx)(g.Z, {
        children: N.Z.Messages.SPOTIFY_LISTEN_ALONG_SUBTITLE_LISTENER
      })]
    })
  }
  renderStopListeningButton() {
    let {
      onStopListening: e
    } = this.props;
    return this.isHost() ? null : (0, i.jsx)(m.Z, {
      tooltipText: N.Z.Messages.SPOTIFY_LISTEN_ALONG_STOP,
      onClick: e,
      icon: c.CloseSmallIcon
    })
  }
  renderHelpIcon() {
    return this.isHost() ? (0, i.jsx)(m.Z, {
      tooltipText: N.Z.Messages.SPOTIFY_LISTEN_ALONG_INFO,
      onClick: () => {
        window.open(I.Z.getArticleURL(T.BhN.SPOTIFY_CONNECTION), "_blank")
      },
      icon: c.CircleInformationIcon
    }) : null
  }
  render() {
    return (0, i.jsxs)("div", {
      className: S.listeningAlong,
      children: [this.renderTitle(), (0, i.jsx)(h.Z, {
        justify: h.Z.Justify.END,
        className: S.party,
        children: (0, i.jsx)(_.Z, {
          users: this.props.party,
          max: this.isHost() ? A.HOST : A.LISTENER,
          renderUser: this.renderPartyMember,
          renderMoreUsers: this.renderPartyMemberOverflow
        })
      }), (0, i.jsxs)("div", {
        className: S.icons,
        children: [this.renderHelpIcon(), this.renderStopListeningButton()]
      })]
    })
  }
  constructor(...e) {
    super(...e), C(this, "renderPartyMember", (e, t) => {
      let n;
      if (null == e) return null;
      let {
        host: l,
        onUserContextMenu: r
      } = this.props;
      return n = (null == l ? void 0 : l.id) === e.id ? N.Z.Messages.SPOTIFY_LISTEN_ALONG_HOST : N.Z.Messages.SPOTIFY_LISTEN_ALONG_LISTENER, (0, i.jsx)(c.Popout, {
        preload: () => (0, d.W)(e.id, e.getAvatarURL(void 0, 80)),
        renderPopout: t => (o()(null != e, ""), (0, i.jsx)(E.Z, {
          ...t,
          location: "ListeningAlong",
          userId: e.id,
          newAnalyticsLocations: [u.Z.AVATAR]
        })),
        position: "top",
        align: "center",
        children: l => (0, i.jsx)(c.Tooltip, {
          text: n,
          children: n => {
            let {
              onMouseEnter: i,
              onMouseLeave: o
            } = n;
            return (0, s.createElement)(c.Avatar, {
              ...l,
              key: e.id,
              src: e.getAvatarURL(void 0, 24),
              size: c.AvatarSizes.SIZE_24,
              className: a()(S.avatar, t),
              "aria-label": e.username,
              onMouseEnter: i,
              onMouseLeave: o,
              onContextMenu: t => void(null != e && (null == r || r(t, e)))
            })
          }
        })
      }, e.id)
    }), C(this, "renderPartyMemberOverflow", (e, t, n) => {
      let {
        renderOverflowPopout: s
      } = this.props;
      return (0, i.jsx)(c.Popout, {
        renderPopout: s,
        children: n => (0, i.jsx)(c.Tooltip, {
          text: N.Z.Messages.SPOTIFY_LISTEN_ALONG_LISTENERS,
          children: s => (0, i.jsx)("div", {
            className: a()(S.overflow, t),
            ...s,
            ...n,
            children: e
          })
        })
      }, n)
    })
  }
}
t.Z = f