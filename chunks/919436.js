"use strict";
n.r(t), n("411104"), n("47120");
var l, a = n("735250"),
  s = n("470079"),
  i = n("920906"),
  r = n("924826"),
  o = n("442837"),
  u = n("481060"),
  d = n("239091"),
  c = n("358221"),
  f = n("43267"),
  h = n("933557"),
  m = n("93687"),
  C = n("266076"),
  p = n("199902"),
  g = n("19780"),
  E = n("306680"),
  S = n("944486"),
  _ = n("594174"),
  I = n("451478"),
  N = n("880080"),
  T = n("682662"),
  A = n("662146"),
  L = n("674552"),
  v = n("981631"),
  x = n("134751");

function R(e, t, n) {
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

function y(e) {
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
      immediate: !I.default.isFocused(),
      height: 1,
      opacity: 1,
      scale: 1,
      config: y
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
      config: y
    }).start().then(e)
  }
  componentWillLeave(e) {
    let {
      controller: t
    } = this.state;
    this.setState({
      animating: !0
    }, () => t.update({
      immediate: !I.default.isFocused(),
      height: 0,
      opacity: 0,
      scale: 0,
      config: y
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
    } = this.props, t = e.type === v.ChannelTypes.DM ? _.default.getUser(e.getRecipientId()) : null;
    return null != t ? t.getAvatarURL(void 0, 48, !1) : (0, f.getChannelIconURL)(e)
  }
  render() {
    let {
      channel: e,
      channelName: t,
      selected: n,
      badge: l,
      audio: s,
      video: o,
      stream: d,
      isCurrentUserInThisDMCall: c,
      unread: f,
      isGDMFacepileEnabled: h
    } = this.props, {
      hovered: m,
      animating: p
    } = this.state, g = e.isMultiUserDM() && null == e.icon && h;
    return (0, a.jsx)(i.animated.div, {
      style: this.getAnimatedStyle(),
      children: (0, a.jsxs)(T.ListItem, {
        children: [(0, a.jsx)(N.default, {
          hovered: !p && m,
          selected: !p && n,
          unread: !p && f,
          className: x.pill
        }), (0, a.jsx)(A.default, {
          text: null != t ? t : "",
          selected: n,
          children: (0, a.jsx)(u.BlobMask, {
            selected: n || m,
            lowerBadge: l > 0 ? (0, L.renderMentionBadge)(l) : null,
            upperBadge: (0, L.renderMediaBadge)({
              audio: s,
              video: o,
              screenshare: d,
              isCurrentUserConnected: c
            }),
            lowerBadgeSize: {
              width: (0, u.getBadgeWidthForValue)(l)
            },
            children: (0, a.jsx)(r.ListNavigatorItem, {
              id: e.id,
              children: l => (0, a.jsx)(u.NavItem, {
                to: v.Routes.CHANNEL(v.ME, e.id),
                onMouseEnter: () => this.setState({
                  hovered: !0
                }),
                onMouseLeave: () => this.setState({
                  hovered: !1
                }),
                selected: n || m,
                ariaLabel: null != t ? t : "",
                onContextMenu: this.handleContextMenu,
                icon: g ? void 0 : this.getChannelIcon(),
                backgroundStyle: g ? "on-hover" : "always",
                children: g ? (0, a.jsx)(C.default, {
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
    super(...e), R(this, "state", {
      hovered: !1,
      animating: !0,
      controller: new i.Controller({
        scale: 0,
        height: 0,
        opacity: 0,
        config: y
      })
    }), R(this, "handleContextMenu", e => {
      let {
        channel: t
      } = this.props, l = t.type === v.ChannelTypes.DM ? _.default.getUser(t.getRecipientId()) : null;
      null != l ? (0, d.openContextMenuLazy)(e, async () => {
        let {
          default: e
        } = await Promise.all([n.e("99387"), n.e("36441"), n.e("56826")]).then(n.bind(n, "131404"));
        return n => (0, a.jsx)(e, {
          ...n,
          channel: t,
          user: l
        })
      }) : (0, d.openContextMenuLazy)(e, async () => {
        let {
          default: e
        } = await Promise.all([n.e("99387"), n.e("25421")]).then(n.bind(n, "354741"));
        return n => (0, a.jsx)(e, {
          ...n,
          channel: t,
          selected: !1
        })
      })
    })
  }
}
R(O, "defaultProps", {
  badge: 0,
  audio: !1,
  video: !1,
  isCurrentUserInThisDMCall: !1
}), t.default = s.forwardRef(function(e, t) {
  let n = e.channel.id,
    l = (0, h.default)(e.channel),
    s = (0, o.useStateFromStores)([g.default], () => g.default.getChannelId(), []),
    i = (0, o.useStateFromStores)([c.default], () => null != s ? c.default.getMode(s) : v.ChannelModes.VOICE, [s]),
    r = (0, o.useStateFromStores)([p.default], () => p.default.getAllApplicationStreamsForChannel(n).length > 0),
    u = (0, o.useStateFromStores)([S.default], () => S.default.getChannelId(), []),
    d = (0, o.useStateFromStores)([E.default], () => E.default.getMentionCount(n), [n]),
    {
      isFacepileEnabled: f
    } = m.default.useExperiment({
      location: "unread_direct_message"
    }, {
      autoTrackExposure: !1
    }),
    C = s === n,
    _ = !1,
    I = !1;
  return C && (_ = i === v.ChannelModes.VOICE, I = i === v.ChannelModes.VIDEO), (0, a.jsx)(O, {
    ...e,
    ref: t,
    channelName: l,
    unread: d > 0,
    selected: u === n,
    badge: d,
    audio: _,
    video: I,
    stream: r,
    isCurrentUserInThisDMCall: C,
    isGDMFacepileEnabled: f
  })
})