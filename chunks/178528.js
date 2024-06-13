"use strict";
n.r(t), n.d(t, {
  default: function() {
    return V
  }
}), n("47120");
var i = n("735250"),
  a = n("470079"),
  l = n("920906"),
  s = n("442837"),
  o = n("481060"),
  r = n("619915"),
  d = n("554747"),
  u = n("373274"),
  c = n("315174"),
  f = n("840780"),
  h = n("905423"),
  p = n("680089"),
  m = n("58468"),
  g = n("796974"),
  E = n("324067"),
  S = n("984933"),
  v = n("888369"),
  y = n("430824"),
  O = n("496675"),
  T = n("878884"),
  C = n("19780"),
  I = n("944486"),
  N = n("9156"),
  _ = n("938475"),
  A = n("937482"),
  x = n("547881"),
  R = n("669083"),
  L = n("711553"),
  M = n("981631"),
  D = n("647086"),
  b = n("689938"),
  j = n("589131");

function k(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let P = 54;
class w extends a.PureComponent {
  static getDerivedStateFromProps(e) {
    let {
      guild: t
    } = e;
    return null == t || null == t.banner ? {
      renderBanner: !1,
      bannerVisible: !1
    } : null
  }
  componentDidMount() {
    let {
      guildId: e
    } = this.props, {
      scrollTop: t
    } = g.default.getGuildDimensions(e);
    this.setAnimatedValue(null != t ? t : 0)
  }
  componentDidUpdate(e) {
    let {
      guild: t,
      guildId: n
    } = this.props;
    if (e.guild !== t) {
      let {
        scrollTop: e
      } = g.default.getGuildDimensions(n);
      this.setAnimatedValue(null != e ? e : 0)
    }
  }
  renderSettings(e) {
    let {
      closePopout: t
    } = e;
    return (0, i.jsx)(R.default, {
      onClose: t
    })
  }
  setAnimatedValue(e) {
    let {
      guild: t
    } = this.props, n = null == t ? void 0 : t.hasCommunityInfoSubheader();
    null != t && (null != t.banner || n) && (null != t.banner ? this.setAnimatedValueForBanner(e) : this.setAnimatedValueForCommunityInfo(e))
  }
  setAnimatedValueForBanner(e) {
    let {
      renderBanner: t,
      communityInfoVisible: n,
      bannerVisible: i,
      controller: a
    } = this.state;
    (e >= P && i || e < P && !i) && (i = !i), (e >= 78 && !t || e < 78 && t) && (t = !t), n = i, (t !== this.state.renderBanner || i !== this.state.bannerVisible || n !== this.state.communityInfoVisible) && this.setState({
      renderBanner: t,
      bannerVisible: i,
      communityInfoVisible: n
    }), a.update({
      value: Math.min(1, Math.max(0, 1 - e / 78)),
      immediate: !0
    }).start()
  }
  setAnimatedValueForCommunityInfo(e) {
    let {
      communityInfoVisible: t,
      controller: n
    } = this.state;
    (e >= 20 && t || e < 20 && !t) && this.setState({
      communityInfoVisible: !t
    }), n.update({
      value: Math.min(1, Math.max(0, 1 - e / 20)),
      immediate: !0
    }).start()
  }
  render() {
    let {
      onDragStart: e,
      ...t
    } = this.props, {
      guild: n
    } = t, {
      controller: a,
      renderBanner: l,
      bannerVisible: s,
      communityInfoVisible: r
    } = this.state, d = n.id === D.FAVORITES_RAW_GUILD_ID ? u.FavoritesChannelList : u.GuildChannelList;
    return (0, i.jsxs)(L.default, {
      header: (0, i.jsx)(c.default, {
        guild: n,
        controller: a,
        renderBanner: l,
        bannerVisible: s,
        className: j.guildHeader,
        headerClassName: j.guildHeaderInner,
        onMouseDown: e,
        disableBannerAnimation: !1,
        communityInfoVisible: r,
        children: (0, i.jsx)(o.Popout, {
          position: "right",
          renderPopout: this.renderSettings,
          children: e => (0, i.jsx)(x.default.Icon, {
            icon: A.default,
            label: b.default.Messages.SETTINGS,
            ...e
          })
        })
      }),
      children: [(0, i.jsx)("div", {
        className: j.channelList,
        children: (0, i.jsx)(d, {
          ...t,
          guild: n,
          disableManageChannels: !0,
          onScroll: null != n && null != n.banner ? this.handleScroll : null
        })
      }), (0, i.jsx)("section", {
        className: j.panels,
        "aria-label": b.default.Messages.ACCOUNT_A11Y_LABEL,
        children: (0, i.jsx)(f.default, {
          guildId: n.id
        })
      })]
    })
  }
  constructor(...e) {
    super(...e), k(this, "state", {
      controller: new l.Controller({
        value: 1,
        immediate: !0
      }),
      renderBanner: !1,
      bannerVisible: !1,
      communityInfoVisible: !1
    }), k(this, "handleScroll", e => {
      let {
        scrollTop: t
      } = e;
      this.setAnimatedValue(t)
    })
  }
}

function V(e) {
  var t;
  let {
    guildId: n
  } = e, a = (0, s.useStateFromStores)([y.default], () => y.default.getGuild(n)), l = (0, s.useStateFromStores)([S.default], () => S.default.getChannels(n)), o = (0, s.useStateFromStores)([E.default], () => E.default.getCategories(n)), {
    mutedChannels: u,
    collapseMuted: c
  } = (0, s.useStateFromStoresObject)([N.default], () => ({
    mutedChannels: N.default.getMutedChannels(n),
    collapseMuted: N.default.isGuildCollapsed(n)
  })), f = (0, s.useStateFromStores)([_.default], () => _.default.getVoiceStates(n)), A = (0, s.useStateFromStores)([m.default], () => m.default.getCollapsed()), {
    scrollTo: x
  } = (0, s.useStateFromStores)([g.default], () => g.default.getGuildDimensions(n)), R = (0, h.default)(e => {
    let {
      channelId: t
    } = e;
    return t
  }), L = (0, s.useStateFromStores)([I.default], () => I.default.getVoiceChannelId()), D = (0, s.useStateFromStores)([O.default], () => O.default.getGuildVersion(n)), b = (0, s.useStateFromStores)([p.default], () => p.default.version), j = (0, s.useStateFromStores)([v.default], () => v.default.getGuildChangeSentinel(n)), k = (0, r.useEmbeddedAppsByChannel)(null == a ? void 0 : a.id), P = (0, d.useActiveEventsByChannel)(null == a ? void 0 : a.id), V = null !== (t = null == a ? void 0 : a.hasFeature(M.GuildFeatures.COMMUNITY)) && void 0 !== t && t, U = (0, s.useStateFromStores)([C.default], () => C.default.getChannelId()), B = (0, s.useStateFromStores)([T.default], () => T.default.desyncedVoiceStatesCount);
  return (0, i.jsx)(w, {
    guildId: n,
    guild: a,
    channels: l,
    categories: o,
    mutedChannels: u,
    scrollToChannel: x,
    selectedChannelId: R,
    selectedVoiceChannelId: L,
    voiceStates: f,
    rtcConnectedChannelId: U,
    rtcDesyncedVoiceStatesCount: B,
    collapsedChannels: A,
    collapseMuted: c,
    guildReadStateSentinel: j,
    permissionVersion: D,
    categoryCollapseVersion: b,
    embeddedAppsByChannel: k,
    activeEventsByChannel: P,
    showNewUnreadsBar: V,
    optInEnabled: !1
  })
}