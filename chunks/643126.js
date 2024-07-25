n(47120);
var i = n(735250),
  s = n(470079),
  a = n(120356),
  r = n.n(a),
  l = n(512722),
  o = n.n(l),
  c = n(481060),
  d = n(100527),
  u = n(484459),
  _ = n(103575),
  h = n(285952),
  E = n(409216),
  I = n(63063),
  m = n(976401),
  g = n(333454),
  p = n(864441),
  T = n(981631),
  f = n(689938),
  S = n(235940);

function C(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
value: n,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = n, e;
}
let N = {
  HOST: 5,
  LISTENER: 4
};
class A extends s.PureComponent {
  isHost() {
let {
  currentUser: e,
  host: t
} = this.props;
return e.id === (null == t ? void 0 : t.id);
  }
  renderTitle() {
return (0, i.jsxs)('div', {
  children: [
    (0, i.jsx)(p.Z, {
      children: this.isHost() ? f.Z.Messages.SPOTIFY_LISTEN_ALONG_TITLE_HOST.format({
        count: this.props.party.length
      }) : f.Z.Messages.SPOTIFY_LISTEN_ALONG_TITLE_LISTENER
    }),
    (0, i.jsx)(g.Z, {
      children: f.Z.Messages.SPOTIFY_LISTEN_ALONG_SUBTITLE_LISTENER
    })
  ]
});
  }
  renderStopListeningButton() {
let {
  onStopListening: e
} = this.props;
return this.isHost() ? null : (0, i.jsx)(m.Z, {
  tooltipText: f.Z.Messages.SPOTIFY_LISTEN_ALONG_STOP,
  onClick: e,
  icon: c.CloseSmallIcon
});
  }
  renderHelpIcon() {
return this.isHost() ? (0, i.jsx)(m.Z, {
  tooltipText: f.Z.Messages.SPOTIFY_LISTEN_ALONG_INFO,
  onClick: () => {
    window.open(I.Z.getArticleURL(T.BhN.SPOTIFY_CONNECTION), '_blank');
  },
  icon: c.CircleInformationIcon
}) : null;
  }
  render() {
return (0, i.jsxs)('div', {
  className: S.listeningAlong,
  children: [
    this.renderTitle(),
    (0, i.jsx)(h.Z, {
      justify: h.Z.Justify.END,
      className: S.party,
      children: (0, i.jsx)(E.Z, {
        users: this.props.party,
        max: this.isHost() ? N.HOST : N.LISTENER,
        renderUser: this.renderPartyMember,
        renderMoreUsers: this.renderPartyMemberOverflow
      })
    }),
    (0, i.jsxs)('div', {
      className: S.icons,
      children: [
        this.renderHelpIcon(),
        this.renderStopListeningButton()
      ]
    })
  ]
});
  }
  constructor(...e) {
super(...e), C(this, 'renderPartyMember', (e, t) => {
  let n;
  if (null == e)
    return null;
  let {
    host: a,
    onUserContextMenu: l
  } = this.props;
  return n = (null == a ? void 0 : a.id) === e.id ? f.Z.Messages.SPOTIFY_LISTEN_ALONG_HOST : f.Z.Messages.SPOTIFY_LISTEN_ALONG_LISTENER, (0, i.jsx)(c.Popout, {
    preload: () => (0, u.W)(e.id, e.getAvatarURL(void 0, 80)),
    renderPopout: t => (o()(null != e, ''), (0, i.jsx)(_.Z, {
      ...t,
      location: 'ListeningAlong',
      userId: e.id,
      newAnalyticsLocations: [d.Z.AVATAR]
    })),
    position: 'top',
    align: 'center',
    children: a => (0, i.jsx)(c.Tooltip, {
      text: n,
      children: n => {
        let {
          onMouseEnter: i,
          onMouseLeave: o
        } = n;
        return (0, s.createElement)(c.Avatar, {
          ...a,
          key: e.id,
          src: e.getAvatarURL(void 0, 24),
          size: c.AvatarSizes.SIZE_24,
          className: r()(S.avatar, t),
          'aria-label': e.username,
          onMouseEnter: i,
          onMouseLeave: o,
          onContextMenu: t => void(null != e && (null == l || l(t, e)))
        });
      }
    })
  }, e.id);
}), C(this, 'renderPartyMemberOverflow', (e, t, n) => {
  let {
    renderOverflowPopout: s
  } = this.props;
  return (0, i.jsx)(c.Popout, {
    renderPopout: s,
    children: n => (0, i.jsx)(c.Tooltip, {
      text: f.Z.Messages.SPOTIFY_LISTEN_ALONG_LISTENERS,
      children: s => (0, i.jsx)('div', {
        className: r()(S.overflow, t),
        ...s,
        ...n,
        children: e
      })
    })
  }, n);
});
  }
}
t.Z = A;