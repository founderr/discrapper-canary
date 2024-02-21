"use strict";
n.r(t), n.d(t, {
  default: function() {
    return N
  }
}), n("222007");
var a = n("37983"),
  s = n("884691"),
  l = n("414456"),
  i = n.n(l),
  r = n("627445"),
  o = n.n(r),
  u = n("77078"),
  d = n("506885"),
  c = n("145131"),
  f = n("533403"),
  E = n("945330"),
  h = n("925877"),
  _ = n("701909"),
  C = n("962541"),
  I = n("762489"),
  S = n("329858"),
  m = n("49111"),
  p = n("782340"),
  T = n("32478");
let g = {
  HOST: 5,
  LISTENER: 4
};
class A extends s.PureComponent {
  isHost() {
    let {
      currentUser: e,
      host: t
    } = this.props;
    return e.id === (null == t ? void 0 : t.id)
  }
  renderTitle() {
    return (0, a.jsxs)("div", {
      children: [(0, a.jsx)(S.default, {
        children: this.isHost() ? p.default.Messages.SPOTIFY_LISTEN_ALONG_TITLE_HOST.format({
          count: this.props.party.length
        }) : p.default.Messages.SPOTIFY_LISTEN_ALONG_TITLE_LISTENER
      }), (0, a.jsx)(I.default, {
        children: p.default.Messages.SPOTIFY_LISTEN_ALONG_SUBTITLE_LISTENER
      })]
    })
  }
  renderStopListeningButton() {
    let {
      onStopListening: e
    } = this.props;
    return this.isHost() ? null : (0, a.jsx)(C.default, {
      tooltipText: p.default.Messages.SPOTIFY_LISTEN_ALONG_STOP,
      onClick: e,
      icon: E.default
    })
  }
  renderHelpIcon() {
    return this.isHost() ? (0, a.jsx)(C.default, {
      tooltipText: p.default.Messages.SPOTIFY_LISTEN_ALONG_INFO,
      onClick: () => {
        window.open(_.default.getArticleURL(m.HelpdeskArticles.SPOTIFY_CONNECTION), "_blank")
      },
      icon: h.default
    }) : null
  }
  render() {
    return (0, a.jsxs)("div", {
      className: T.listeningAlong,
      children: [this.renderTitle(), (0, a.jsx)(c.default, {
        justify: c.default.Justify.END,
        className: T.party,
        children: (0, a.jsx)(f.default, {
          users: this.props.party,
          max: this.isHost() ? g.HOST : g.LISTENER,
          renderUser: this.renderPartyMember,
          renderMoreUsers: this.renderPartyMemberOverflow
        })
      }), (0, a.jsxs)("div", {
        className: T.icons,
        children: [this.renderHelpIcon(), this.renderStopListeningButton()]
      })]
    })
  }
  constructor(...e) {
    super(...e), this.renderPartyMember = (e, t) => {
      let n;
      if (null == e) return null;
      let {
        host: l,
        renderUserPopout: r,
        onUserContextMenu: c
      } = this.props;
      return n = (null == l ? void 0 : l.id) === e.id ? p.default.Messages.SPOTIFY_LISTEN_ALONG_HOST : p.default.Messages.SPOTIFY_LISTEN_ALONG_LISTENER, (0, a.jsx)(u.Popout, {
        preload: () => (0, d.default)(e.id, e.getAvatarURL(void 0, 80)),
        renderPopout: t => (o(null != e, ""), r(t, e)),
        position: "top",
        align: "center",
        children: l => (0, a.jsx)(u.Tooltip, {
          text: n,
          children: n => {
            let {
              onMouseEnter: a,
              onMouseLeave: r
            } = n;
            return (0, s.createElement)(u.Avatar, {
              ...l,
              key: e.id,
              src: e.getAvatarURL(void 0, 24),
              size: u.AvatarSizes.SIZE_24,
              className: i(T.avatar, t),
              "aria-label": e.username,
              onMouseEnter: a,
              onMouseLeave: r,
              onContextMenu: t => void(null != e && (null == c || c(t, e)))
            })
          }
        })
      }, e.id)
    }, this.renderPartyMemberOverflow = (e, t, n) => {
      let {
        renderOverflowPopout: s
      } = this.props;
      return (0, a.jsx)(u.Popout, {
        renderPopout: s,
        children: n => (0, a.jsx)(u.Tooltip, {
          text: p.default.Messages.SPOTIFY_LISTEN_ALONG_LISTENERS,
          children: s => (0, a.jsx)("div", {
            className: i(T.overflow, t),
            ...s,
            ...n,
            children: e
          })
        })
      }, n)
    }
  }
}
var N = A