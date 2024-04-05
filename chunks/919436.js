"use strict";
n.r(t), n("411104"), n("47120");
var l, a = n("735250"),
  s = n("470079"),
  i = n("718017"),
  r = n("924826"),
  o = n("442837"),
  u = n("481060"),
  d = n("239091"),
  c = n("358221"),
  f = n("43267"),
  h = n("933557"),
  p = n("266076"),
  C = n("199902"),
  m = n("19780"),
  g = n("306680"),
  E = n("944486"),
  S = n("594174"),
  _ = n("451478"),
  I = n("880080"),
  N = n("26290"),
  T = n("15434"),
  A = n("682662"),
  L = n("662146"),
  v = n("674552"),
  x = n("981631"),
  R = n("538777");

function y(e, t, n) {
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

function O(e) {
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
class D extends(l = s.PureComponent) {
  componentWillEnter(e) {
    let {
      controller: t
    } = this.state;
    e(), t.update({
      immediate: !_.default.isFocused(),
      height: 1,
      opacity: 1,
      scale: 1,
      config: O
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
      config: O
    }).start().then(e)
  }
  componentWillLeave(e) {
    let {
      controller: t
    } = this.state;
    this.setState({
      animating: !0
    }, () => t.update({
      immediate: !_.default.isFocused(),
      height: 0,
      opacity: 0,
      scale: 0,
      config: O
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
    } = this.props, t = e.type === x.ChannelTypes.DM ? S.default.getUser(e.getRecipientId()) : null;
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
      unread: f
    } = this.props, {
      hovered: h,
      animating: C
    } = this.state;
    return (0, a.jsx)(i.animated.div, {
      style: this.getAnimatedStyle(),
      children: (0, a.jsxs)(A.ListItem, {
        children: [(0, a.jsx)(I.default, {
          hovered: !C && h,
          selected: !C && n,
          unread: !C && f,
          className: R.pill
        }), (0, a.jsx)(L.default, {
          text: null != t ? t : "",
          selected: n,
          children: (0, a.jsx)(u.BlobMask, {
            selected: n || h,
            lowerBadge: l > 0 ? (0, v.renderMentionBadge)(l) : null,
            upperBadge: (0, v.renderMediaBadge)({
              audio: s,
              video: o,
              screenshare: d,
              isCurrentUserConnected: c
            }),
            lowerBadgeWidth: (0, N.getBadgeWidthForValue)(l),
            children: (() => {
              let l = e.isMultiUserDM();
              return (0, a.jsx)(r.ListNavigatorItem, {
                id: e.id,
                children: s => (0, a.jsx)(T.default, {
                  to: x.Routes.CHANNEL(x.ME, e.id),
                  onMouseEnter: () => this.setState({
                    hovered: !0
                  }),
                  onMouseLeave: () => this.setState({
                    hovered: !1
                  }),
                  selected: n || h,
                  ariaLabel: null != t ? t : "",
                  onContextMenu: this.handleContextMenu,
                  icon: l ? void 0 : this.getChannelIcon(),
                  children: l ? (0, a.jsx)(p.default, {
                    channel: e,
                    size: u.AvatarSizes.SIZE_48,
                    facepileSizeOverride: 36,
                    experimentLocation: "unread_gdm",
                    "aria-hidden": !0
                  }) : void 0,
                  ...s
                })
              })
            })()
          })
        })]
      })
    })
  }
  constructor(...e) {
    super(...e), y(this, "state", {
      hovered: !1,
      animating: !0,
      controller: new i.Controller({
        scale: 0,
        height: 0,
        opacity: 0,
        config: O
      })
    }), y(this, "handleContextMenu", e => {
      let {
        channel: t
      } = this.props, l = t.type === x.ChannelTypes.DM ? S.default.getUser(t.getRecipientId()) : null;
      null != l ? (0, d.openContextMenuLazy)(e, async () => {
        let {
          default: e
        } = await Promise.all([n.e("99387"), n.e("79695"), n.e("85559"), n.e("56826")]).then(n.bind(n, "131404"));
        return n => (0, a.jsx)(e, {
          ...n,
          channel: t,
          user: l
        })
      }) : (0, d.openContextMenuLazy)(e, async () => {
        let {
          default: e
        } = await Promise.all([n.e("79695"), n.e("25421")]).then(n.bind(n, "354741"));
        return n => (0, a.jsx)(e, {
          ...n,
          channel: t,
          selected: !1
        })
      })
    })
  }
}
y(D, "defaultProps", {
  badge: 0,
  audio: !1,
  video: !1,
  isCurrentUserInThisDMCall: !1
}), t.default = s.forwardRef(function(e, t) {
  let n = e.channel.id,
    l = (0, h.default)(e.channel),
    s = (0, o.useStateFromStores)([m.default], () => m.default.getChannelId(), []),
    i = (0, o.useStateFromStores)([c.default], () => null != s ? c.default.getMode(s) : x.ChannelModes.VOICE, [s]),
    r = (0, o.useStateFromStores)([C.default], () => C.default.getAllApplicationStreamsForChannel(n).length > 0),
    u = (0, o.useStateFromStores)([E.default], () => E.default.getChannelId(), []),
    d = (0, o.useStateFromStores)([g.default], () => g.default.getMentionCount(n), [n]),
    f = s === n,
    p = !1,
    S = !1;
  return f && (p = i === x.ChannelModes.VOICE, S = i === x.ChannelModes.VIDEO), (0, a.jsx)(D, {
    ...e,
    ref: t,
    channelName: l,
    unread: d > 0,
    selected: u === n,
    badge: d,
    audio: p,
    video: S,
    stream: r,
    isCurrentUserInThisDMCall: f
  })
})