"use strict";
a.r(t), a("47120");
var n = a("735250"),
  s = a("470079"),
  l = a("120356"),
  i = a.n(l),
  r = a("512722"),
  o = a.n(r),
  u = a("481060"),
  d = a("100527"),
  c = a("484459"),
  f = a("103575"),
  E = a("285952"),
  h = a("409216"),
  _ = a("465670"),
  C = a("87888"),
  m = a("63063"),
  S = a("976401"),
  p = a("333454"),
  I = a("864441"),
  T = a("981631"),
  g = a("689938"),
  A = a("685054");

function N(e, t, a) {
  return t in e ? Object.defineProperty(e, t, {
    value: a,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = a, e
}
let v = {
  HOST: 5,
  LISTENER: 4
};
class R extends s.PureComponent {
  isHost() {
    let {
      currentUser: e,
      host: t
    } = this.props;
    return e.id === (null == t ? void 0 : t.id)
  }
  renderTitle() {
    return (0, n.jsxs)("div", {
      children: [(0, n.jsx)(I.default, {
        children: this.isHost() ? g.default.Messages.SPOTIFY_LISTEN_ALONG_TITLE_HOST.format({
          count: this.props.party.length
        }) : g.default.Messages.SPOTIFY_LISTEN_ALONG_TITLE_LISTENER
      }), (0, n.jsx)(p.default, {
        children: g.default.Messages.SPOTIFY_LISTEN_ALONG_SUBTITLE_LISTENER
      })]
    })
  }
  renderStopListeningButton() {
    let {
      onStopListening: e
    } = this.props;
    return this.isHost() ? null : (0, n.jsx)(S.default, {
      tooltipText: g.default.Messages.SPOTIFY_LISTEN_ALONG_STOP,
      onClick: e,
      icon: _.default
    })
  }
  renderHelpIcon() {
    return this.isHost() ? (0, n.jsx)(S.default, {
      tooltipText: g.default.Messages.SPOTIFY_LISTEN_ALONG_INFO,
      onClick: () => {
        window.open(m.default.getArticleURL(T.HelpdeskArticles.SPOTIFY_CONNECTION), "_blank")
      },
      icon: C.default
    }) : null
  }
  render() {
    return (0, n.jsxs)("div", {
      className: A.listeningAlong,
      children: [this.renderTitle(), (0, n.jsx)(E.default, {
        justify: E.default.Justify.END,
        className: A.party,
        children: (0, n.jsx)(h.default, {
          users: this.props.party,
          max: this.isHost() ? v.HOST : v.LISTENER,
          renderUser: this.renderPartyMember,
          renderMoreUsers: this.renderPartyMemberOverflow
        })
      }), (0, n.jsxs)("div", {
        className: A.icons,
        children: [this.renderHelpIcon(), this.renderStopListeningButton()]
      })]
    })
  }
  constructor(...e) {
    super(...e), N(this, "renderPartyMember", (e, t) => {
      let a;
      if (null == e) return null;
      let {
        host: l,
        onUserContextMenu: r
      } = this.props;
      return a = (null == l ? void 0 : l.id) === e.id ? g.default.Messages.SPOTIFY_LISTEN_ALONG_HOST : g.default.Messages.SPOTIFY_LISTEN_ALONG_LISTENER, (0, n.jsx)(u.Popout, {
        preload: () => (0, c.maybeFetchUserProfileForPopout)(e.id, e.getAvatarURL(void 0, 80)),
        renderPopout: t => (o()(null != e, ""), (0, n.jsx)(f.default, {
          ...t,
          location: "ListeningAlong",
          userId: e.id,
          newAnalyticsLocations: [d.default.AVATAR]
        })),
        position: "top",
        align: "center",
        children: l => (0, n.jsx)(u.Tooltip, {
          text: a,
          children: a => {
            let {
              onMouseEnter: n,
              onMouseLeave: o
            } = a;
            return (0, s.createElement)(u.Avatar, {
              ...l,
              key: e.id,
              src: e.getAvatarURL(void 0, 24),
              size: u.AvatarSizes.SIZE_24,
              className: i()(A.avatar, t),
              "aria-label": e.username,
              onMouseEnter: n,
              onMouseLeave: o,
              onContextMenu: t => void(null != e && (null == r || r(t, e)))
            })
          }
        })
      }, e.id)
    }), N(this, "renderPartyMemberOverflow", (e, t, a) => {
      let {
        renderOverflowPopout: s
      } = this.props;
      return (0, n.jsx)(u.Popout, {
        renderPopout: s,
        children: a => (0, n.jsx)(u.Tooltip, {
          text: g.default.Messages.SPOTIFY_LISTEN_ALONG_LISTENERS,
          children: s => (0, n.jsx)("div", {
            className: i()(A.overflow, t),
            ...s,
            ...a,
            children: e
          })
        })
      }, a)
    })
  }
}
t.default = R