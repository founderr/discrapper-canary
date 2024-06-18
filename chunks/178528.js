"use strict";
n.d(t, {
  Z: function() {
    return w
  }
}), n(47120);
var i = n(735250),
  s = n(470079),
  l = n(920906),
  o = n(442837),
  a = n(481060),
  r = n(619915),
  c = n(554747),
  d = n(373274),
  u = n(315174),
  h = n(840780),
  p = n(905423),
  f = n(680089),
  E = n(58468),
  g = n(796974),
  m = n(324067),
  Z = n(984933),
  I = n(888369),
  S = n(430824),
  _ = n(496675),
  C = n(878884),
  v = n(19780),
  x = n(944486),
  N = n(9156),
  T = n(938475),
  O = n(547881),
  A = n(669083),
  y = n(711553),
  R = n(981631),
  M = n(647086),
  L = n(689938),
  P = n(449924);

function D(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let b = 54;
class j extends s.PureComponent {
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
    } = g.Z.getGuildDimensions(e);
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
      } = g.Z.getGuildDimensions(n);
      this.setAnimatedValue(null != e ? e : 0)
    }
  }
  renderSettings(e) {
    let {
      closePopout: t
    } = e;
    return (0, i.jsx)(A.Z, {
      onClose: t
    })
  }
  setAnimatedValue(e) {
    let {
      guild: t
    } = this.props, n = null == t ? void 0 : t.hasCommunityInfoSubheader();
    if (null != t && (null != t.banner || !!n)) null != t.banner ? this.setAnimatedValueForBanner(e) : this.setAnimatedValueForCommunityInfo(e)
  }
  setAnimatedValueForBanner(e) {
    let {
      renderBanner: t,
      communityInfoVisible: n,
      bannerVisible: i,
      controller: s
    } = this.state;
    (e >= b && i || e < b && !i) && (i = !i), (e >= 78 && !t || e < 78 && t) && (t = !t), n = i, (t !== this.state.renderBanner || i !== this.state.bannerVisible || n !== this.state.communityInfoVisible) && this.setState({
      renderBanner: t,
      bannerVisible: i,
      communityInfoVisible: n
    }), s.update({
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
      controller: s,
      renderBanner: l,
      bannerVisible: o,
      communityInfoVisible: r
    } = this.state, c = n.id === M._ ? d.j : d.E;
    return (0, i.jsxs)(y.Z, {
      header: (0, i.jsx)(u.ZP, {
        guild: n,
        controller: s,
        renderBanner: l,
        bannerVisible: o,
        className: P.guildHeader,
        headerClassName: P.guildHeaderInner,
        onMouseDown: e,
        disableBannerAnimation: !1,
        communityInfoVisible: r,
        children: (0, i.jsx)(a.Popout, {
          position: "right",
          renderPopout: this.renderSettings,
          children: e => (0, i.jsx)(O.ZP.Icon, {
            icon: a.SettingsIcon,
            label: L.Z.Messages.SETTINGS,
            ...e
          })
        })
      }),
      children: [(0, i.jsx)("div", {
        className: P.channelList,
        children: (0, i.jsx)(c, {
          ...t,
          guild: n,
          disableManageChannels: !0,
          onScroll: null != n && null != n.banner ? this.handleScroll : null
        })
      }), (0, i.jsx)("section", {
        className: P.panels,
        "aria-label": L.Z.Messages.ACCOUNT_A11Y_LABEL,
        children: (0, i.jsx)(h.Z, {
          guildId: n.id
        })
      })]
    })
  }
  constructor(...e) {
    super(...e), D(this, "state", {
      controller: new l.Controller({
        value: 1,
        immediate: !0
      }),
      renderBanner: !1,
      bannerVisible: !1,
      communityInfoVisible: !1
    }), D(this, "handleScroll", e => {
      let {
        scrollTop: t
      } = e;
      this.setAnimatedValue(t)
    })
  }
}

function w(e) {
  var t;
  let {
    guildId: n
  } = e, s = (0, o.e7)([S.Z], () => S.Z.getGuild(n)), l = (0, o.e7)([Z.ZP], () => Z.ZP.getChannels(n)), a = (0, o.e7)([m.Z], () => m.Z.getCategories(n)), {
    mutedChannels: d,
    collapseMuted: u
  } = (0, o.cj)([N.ZP], () => ({
    mutedChannels: N.ZP.getMutedChannels(n),
    collapseMuted: N.ZP.isGuildCollapsed(n)
  })), h = (0, o.e7)([T.ZP], () => T.ZP.getVoiceStates(n)), O = (0, o.e7)([E.Z], () => E.Z.getCollapsed()), {
    scrollTo: A
  } = (0, o.e7)([g.Z], () => g.Z.getGuildDimensions(n)), y = (0, p.Z)(e => {
    let {
      channelId: t
    } = e;
    return t
  }), M = (0, o.e7)([x.Z], () => x.Z.getVoiceChannelId()), L = (0, o.e7)([_.Z], () => _.Z.getGuildVersion(n)), P = (0, o.e7)([f.Z], () => f.Z.version), D = (0, o.e7)([I.default], () => I.default.getGuildChangeSentinel(n)), b = (0, r.QN)(null == s ? void 0 : s.id), w = (0, c.gM)(null == s ? void 0 : s.id), k = null !== (t = null == s ? void 0 : s.hasFeature(R.oNc.COMMUNITY)) && void 0 !== t && t, V = (0, o.e7)([v.Z], () => v.Z.getChannelId()), U = (0, o.e7)([C.Z], () => C.Z.desyncedVoiceStatesCount);
  return (0, i.jsx)(j, {
    guildId: n,
    guild: s,
    channels: l,
    categories: a,
    mutedChannels: d,
    scrollToChannel: A,
    selectedChannelId: y,
    selectedVoiceChannelId: M,
    voiceStates: h,
    rtcConnectedChannelId: V,
    rtcDesyncedVoiceStatesCount: U,
    collapsedChannels: O,
    collapseMuted: u,
    guildReadStateSentinel: D,
    permissionVersion: L,
    categoryCollapseVersion: P,
    embeddedAppsByChannel: b,
    activeEventsByChannel: w,
    showNewUnreadsBar: k,
    optInEnabled: !1
  })
}