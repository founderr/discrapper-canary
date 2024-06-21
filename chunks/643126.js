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
  N = n(981631),
  T = n(689938),
  C = n(15245);

function S(e, t, n) {
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
        children: this.isHost() ? T.Z.Messages.SPOTIFY_LISTEN_ALONG_TITLE_HOST.format({
          count: this.props.party.length
        }) : T.Z.Messages.SPOTIFY_LISTEN_ALONG_TITLE_LISTENER
      }), (0, i.jsx)(g.Z, {
        children: T.Z.Messages.SPOTIFY_LISTEN_ALONG_SUBTITLE_LISTENER
      })]
    })
  }
  renderStopListeningButton() {
    let {
      onStopListening: e
    } = this.props;
    return this.isHost() ? null : (0, i.jsx)(m.Z, {
      tooltipText: T.Z.Messages.SPOTIFY_LISTEN_ALONG_STOP,
      onClick: e,
      icon: c.CloseSmallIcon
    })
  }
  renderHelpIcon() {
    return this.isHost() ? (0, i.jsx)(m.Z, {
      tooltipText: T.Z.Messages.SPOTIFY_LISTEN_ALONG_INFO,
      onClick: () => {
        window.open(I.Z.getArticleURL(N.BhN.SPOTIFY_CONNECTION), "_blank")
      },
      icon: c.CircleInformationIcon
    }) : null
  }
  render() {
    return (0, i.jsxs)("div", {
      className: C.listeningAlong,
      children: [this.renderTitle(), (0, i.jsx)(h.Z, {
        justify: h.Z.Justify.END,
        className: C.party,
        children: (0, i.jsx)(_.Z, {
          users: this.props.party,
          max: this.isHost() ? A.HOST : A.LISTENER,
          renderUser: this.renderPartyMember,
          renderMoreUsers: this.renderPartyMemberOverflow
        })
      }), (0, i.jsxs)("div", {
        className: C.icons,
        children: [this.renderHelpIcon(), this.renderStopListeningButton()]
      })]
    })
  }
  constructor(...e) {
    super(...e), S(this, "renderPartyMember", (e, t) => {
      let n;
      if (null == e) return null;
      let {
        host: l,
        onUserContextMenu: r
      } = this.props;
      return n = (null == l ? void 0 : l.id) === e.id ? T.Z.Messages.SPOTIFY_LISTEN_ALONG_HOST : T.Z.Messages.SPOTIFY_LISTEN_ALONG_LISTENER, (0, i.jsx)(c.Popout, {
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
              className: a()(C.avatar, t),
              "aria-label": e.username,
              onMouseEnter: i,
              onMouseLeave: o,
              onContextMenu: t => void(null != e && (null == r || r(t, e)))
            })
          }
        })
      }, e.id)
    }), S(this, "renderPartyMemberOverflow", (e, t, n) => {
      let {
        renderOverflowPopout: s
      } = this.props;
      return (0, i.jsx)(c.Popout, {
        renderPopout: s,
        children: n => (0, i.jsx)(c.Tooltip, {
          text: T.Z.Messages.SPOTIFY_LISTEN_ALONG_LISTENERS,
          children: s => (0, i.jsx)("div", {
            className: a()(C.overflow, t),
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