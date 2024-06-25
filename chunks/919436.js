n(411104), n(47120);
var l, i = n(735250),
  s = n(470079),
  r = n(920906),
  a = n(91192),
  o = n(442837),
  u = n(481060),
  c = n(239091),
  d = n(358221),
  h = n(43267),
  p = n(933557),
  g = n(93687),
  m = n(266076),
  C = n(199902),
  E = n(19780),
  f = n(306680),
  _ = n(944486),
  I = n(594174),
  N = n(451478),
  Z = n(880080),
  S = n(682662),
  x = n(662146),
  L = n(674552),
  T = n(981631),
  v = n(129061);

function A(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let M = {
  friction: 28,
  tension: 600
};

function R(e) {
  switch (e) {
    case "height":
    case "opacity":
      return {
        duration: 150, ...M
      };
    case "scale":
      return {
        ...M
      };
    default:
      throw Error("DirectMessage: getSpringConfigs() - Invalid spring ".concat(String(e)))
  }
}
class O extends(l = s.PureComponent) {
  componentWillEnter(e) {
    let {
      controller: t
    } = this.state;
    e(), t.update({
      immediate: !N.Z.isFocused(),
      height: 1,
      opacity: 1,
      scale: 1,
      config: R
    }).start().then(() => this.setState({
      animating: !1
    }))
  }
  componentWillAppear(e) {
    let {
      controller: t
    } = this.state;
    t.update({
      immediate: !0,
      scale: 1,
      opacity: 1,
      height: 1,
      config: R
    }).start().then(e)
  }
  componentWillLeave(e) {
    let {
      controller: t
    } = this.state;
    this.setState({
      animating: !0
    }, () => t.update({
      immediate: !N.Z.isFocused(),
      height: 0,
      opacity: 0,
      scale: 0,
      config: R
    }).start().then(e))
  }
  componentWillUnmount() {
    this.state.controller.dispose()
  }
  getAnimatedStyle() {
    let {
      controller: e
    } = this.state, {
      opacity: t,
      height: n,
      scale: l
    } = e.springs;
    return {
      opacity: t,
      height: n.to([0, 1], [0, 56]),
      transform: l.to([0, 1], [.5, 1]).to(e => "scale(".concat(e, ")"))
    }
  }
  getChannelIcon() {
    let {
      channel: e
    } = this.props, t = e.type === T.d4z.DM ? I.default.getUser(e.getRecipientId()) : null;
    return null != t ? t.getAvatarURL(void 0, 48, !1) : (0, h.x)(e)
  }
  render() {
    let {
      channel: e,
      channelName: t,
      selected: n,
      badge: l,
      audio: s,
      video: o,
      stream: c,
      isCurrentUserInThisDMCall: d,
      unread: h,
      isGDMFacepileEnabled: p
    } = this.props, {
      hovered: g,
      animating: C
    } = this.state, E = e.isMultiUserDM() && null == e.icon && p;
    return (0, i.jsx)(r.animated.div, {
      style: this.getAnimatedStyle(),
      children: (0, i.jsxs)(S.H, {
        children: [(0, i.jsx)(Z.Z, {
          hovered: !C && g,
          selected: !C && n,
          unread: !C && h,
          className: v.pill
        }), (0, i.jsx)(x.Z, {
          text: null != t ? t : "",
          selected: n,
          children: (0, i.jsx)(u.BlobMask, {
            selected: n || g,
            lowerBadge: l > 0 ? (0, L.Ne)(l) : null,
            upperBadge: (0, L.Or)({
              audio: s,
              video: o,
              screenshare: c,
              isCurrentUserConnected: d
            }),
            lowerBadgeSize: {
              width: (0, u.getBadgeWidthForValue)(l)
            },
            children: (0, i.jsx)(a.mh, {
              id: e.id,
              children: l => (0, i.jsx)(u.NavItem, {
                to: T.Z5c.CHANNEL(T.ME, e.id),
                onMouseEnter: () => this.setState({
                  hovered: !0
                }),
                onMouseLeave: () => this.setState({
                  hovered: !1
                }),
                selected: n || g,
                ariaLabel: null != t ? t : "",
                onContextMenu: this.handleContextMenu,
                icon: E ? void 0 : this.getChannelIcon(),
                backgroundStyle: E ? "on-hover" : "always",
                children: E ? (0, i.jsx)(m.Z, {
                  channel: e,
                  size: u.AvatarSizes.SIZE_48,
                  facepileSizeOverride: u.AvatarSizes.SIZE_32,
                  experimentLocation: "unread_gdm",
                  "aria-hidden": !0
                }) : void 0,
                ...l
              })
            })
          })
        })]
      })
    })
  }
  constructor(...e) {
    super(...e), A(this, "state", {
      hovered: !1,
      animating: !0,
      controller: new r.Controller({
        scale: 0,
        height: 0,
        opacity: 0,
        config: R
      })
    }), A(this, "handleContextMenu", e => {
      let {
        channel: t
      } = this.props, l = t.type === T.d4z.DM ? I.default.getUser(t.getRecipientId()) : null;
      null != l ? (0, c.jW)(e, async () => {
        let {
          default: e
        } = await Promise.all([n.e("99387"), n.e("79695"), n.e("32006"), n.e("56826")]).then(n.bind(n, 131404));
        return n => (0, i.jsx)(e, {
          ...n,
          channel: t,
          user: l
        })
      }) : (0, c.jW)(e, async () => {
        let {
          default: e
        } = await Promise.all([n.e("99387"), n.e("79695"), n.e("25421")]).then(n.bind(n, 354741));
        return n => (0, i.jsx)(e, {
          ...n,
          channel: t,
          selected: !1
        })
      })
    })
  }
}
A(O, "defaultProps", {
  badge: 0,
  audio: !1,
  video: !1,
  isCurrentUserInThisDMCall: !1
}), t.Z = s.forwardRef(function(e, t) {
  let n = e.channel.id,
    l = (0, p.ZP)(e.channel),
    s = (0, o.e7)([E.Z], () => E.Z.getChannelId(), []),
    r = (0, o.e7)([d.Z], () => null != s ? d.Z.getMode(s) : T.WtW.VOICE, [s]),
    a = (0, o.e7)([C.Z], () => C.Z.getAllApplicationStreamsForChannel(n).length > 0),
    u = (0, o.e7)([_.Z], () => _.Z.getChannelId(), []),
    c = (0, o.e7)([f.ZP], () => f.ZP.getMentionCount(n), [n]),
    {
      isFacepileEnabled: h
    } = g.Z.useExperiment({
      location: "unread_direct_message"
    }, {
      autoTrackExposure: !1
    }),
    m = s === n,
    I = !1,
    N = !1;
  return m && (I = r === T.WtW.VOICE, N = r === T.WtW.VIDEO), (0, i.jsx)(O, {
    ...e,
    ref: t,
    channelName: l,
    unread: c > 0,
    selected: u === n,
    badge: c,
    audio: I,
    video: N,
    stream: a,
    isCurrentUserInThisDMCall: m,
    isGDMFacepileEnabled: h
  })
})