n.d(t, {
  Z: function() {
    return D
  }
}), n(47120);
var l = n(735250);
n(470079);
var i = n(120356),
  s = n.n(i),
  r = n(442837),
  a = n(481060),
  o = n(493683),
  u = n(239091),
  c = n(146773),
  d = n(867176),
  h = n(619915),
  g = n(201895),
  p = n(873696),
  m = n(66999),
  C = n(22082),
  E = n(665906),
  f = n(592125),
  _ = n(430824),
  I = n(496675),
  N = n(306680),
  Z = n(9156),
  S = n(594174),
  x = n(109446),
  T = n(98597),
  L = n(648501),
  v = n(473403),
  A = n(304471),
  M = n(981631),
  R = n(647086),
  O = n(47705);

function P(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
class j extends T.ZP {
  componentWillUnmount() {
    this.resetTextChannelPopoutTimers()
  }
  resetTextChannelPopoutTimers() {
    clearTimeout(this.enterTimer), clearTimeout(this.exitTimer)
  }
  renderChannelInfo() {
    let {
      channelInfo: e
    } = this.props;
    return null == e ? null : (0, l.jsx)("div", {
      className: O.channelInfo,
      children: e
    })
  }
  render() {
    let {
      channel: e,
      guild: t,
      selected: n,
      muted: i,
      unread: r,
      hasActiveThreads: o,
      hasMoreActiveThreads: u,
      mentionCount: c,
      connectChannelDropTarget: d,
      connectChannelDragSource: h,
      connectDragPreview: m,
      canReorderChannel: C,
      isSubscriptionGated: E,
      isFavoriteSuggestion: f,
      subtitle: _,
      forceTopLevelThread: I,
      embeddedApps: N,
      resolvedUnreadSetting: Z,
      withGuildIcon: S,
      enableActivities: x
    } = this.props, T = x && null != N && N.length > 0, L = (0, p.D)(_), A = (0, l.jsx)("li", {
      className: s()(this.getClassName(), {
        [O.disabled]: this.isDisabled(),
        [O.selected]: n
      }),
      "data-dnd-name": e.name,
      onMouseEnter: u || T ? this.handleMouseEnter : void 0,
      onMouseLeave: u || T ? this.handleMouseLeave : void 0,
      children: (0, l.jsx)(a.Popout, {
        position: "right",
        renderPopout: this.renderPopout,
        spacing: 0,
        onRequestClose: this.handleClosePopout,
        shouldShow: u && this.state.shouldShowThreadsPopout || T && this.state.shouldShowActivities,
        children: () => (0, l.jsxs)(v.Z, {
          className: O.iconVisibility,
          channel: e,
          guild: t,
          selected: !f && n,
          muted: i,
          unread: r,
          mentionCount: c,
          hasActiveThreads: o,
          subtitle: null == L ? void 0 : L.subtitle,
          subtitleColor: null == L ? void 0 : L.color,
          onMouseDown: this.handleMouseDown,
          onContextMenu: this.handleContextMenu,
          connectDragPreview: C ? m : null,
          isFavoriteSuggestion: f,
          channelTypeOverride: I ? M.d4z.GUILD_TEXT : void 0,
          resolvedUnreadSetting: Z,
          withGuildIcon: S,
          "aria-label": (0, g.ZP)({
            channel: e,
            unread: r,
            mentionCount: c,
            isSubscriptionGated: E
          }),
          children: [f && this.renderAcceptSuggestionButton(), f && this.renderRemoveSuggestionButton(), !f && this.renderInviteButton(), !f && this.renderEditButton(), !f && this.renderChannelInfo()]
        })
      })
    });
    return C ? d(h(A)) : A
  }
  constructor(...e) {
    super(...e), P(this, "state", {
      shouldShowThreadsPopout: !1,
      shouldShowActivities: !1
    }), P(this, "enterTimer", 0), P(this, "exitTimer", 0), P(this, "handleMouseEnter", () => {
      if (!!this.props.canShowThreadPreviewForUser || null != this.props.embeddedApps) this.resetTextChannelPopoutTimers(), this.enterTimer = setTimeout(() => {
        null != this.props.embeddedApps && this.props.embeddedApps.length > 0 ? this.setState({
          shouldShowActivities: !0
        }) : this.props.canShowThreadPreviewForUser && this.setState({
          shouldShowThreadsPopout: !0
        })
      }, 200)
    }), P(this, "handleMouseLeave", () => {
      this.resetTextChannelPopoutTimers(), this.exitTimer = setTimeout(() => {
        this.state.shouldShowActivities && this.setState({
          shouldShowActivities: !1
        }), this.state.shouldShowThreadsPopout && this.setState({
          shouldShowThreadsPopout: !1
        })
      }, 250)
    }), P(this, "handleThreadsPopoutClose", () => {
      this.resetTextChannelPopoutTimers(), this.setState({
        shouldShowThreadsPopout: !1
      })
    }), P(this, "handleActivitiesPopoutClose", () => {
      this.resetTextChannelPopoutTimers(), this.setState({
        shouldShowActivities: !1
      })
    }), P(this, "handleClosePopout", () => {
      this.state.shouldShowActivities && this.handleActivitiesPopoutClose(), this.state.shouldShowThreadsPopout && this.handleThreadsPopoutClose()
    }), P(this, "handleMouseDown", () => {
      this.handleActivitiesPopoutClose(), this.handleThreadsPopoutClose();
      let {
        channel: e
      } = this.props, t = e.getGuildId();
      o.Z.preload(null != t ? t : M.ME, e.id)
    }), P(this, "renderPopout", e => {
      let {
        channel: t,
        sorting: n,
        embeddedApps: i
      } = this.props, {
        shouldShowActivities: s
      } = this.state;
      return null != i && i.length > 0 && s && !n ? (0, l.jsx)(A.Z, {
        onAction: this.handleActivitiesPopoutClose,
        channel: t
      }) : (0, l.jsx)(x.Z, {
        ...e,
        channel: this.props.channel
      })
    }), P(this, "handleContextMenu", e => {
      let {
        channel: t
      } = this.props;
      if (t.type === M.d4z.GROUP_DM) {
        (0, u.jW)(e, async () => {
          let {
            default: e
          } = await Promise.all([n.e("99387"), n.e("79695"), n.e("25421")]).then(n.bind(n, 354741));
          return n => (0, l.jsx)(e, {
            ...n,
            channel: t,
            selected: !0
          })
        });
        return
      }
      if (t.type === M.d4z.DM) {
        let i = S.default.getUser(t.getRecipientId());
        null != i && (0, u.jW)(e, async () => {
          let {
            default: e
          } = await Promise.all([n.e("99387"), n.e("79695"), n.e("32006"), n.e("56826")]).then(n.bind(n, 131404));
          return n => (0, l.jsx)(e, {
            ...n,
            user: i,
            channel: t,
            showModalItems: !1
          })
        });
        return
      }
      let i = _.Z.getGuild(t.getGuildId());
      null != i && (0, u.jW)(e, async () => {
        let {
          default: e
        } = await Promise.all([n.e("99387"), n.e("79695"), n.e("18320"), n.e("54310")]).then(n.bind(n, 373651));
        return n => (0, l.jsx)(e, {
          ...n,
          channel: t,
          guild: i
        })
      })
    })
  }
}
let b = (0, c.B)(j);

function D(e) {
  let {
    channel: t,
    guild: n,
    disableSorting: i,
    isFavoriteCategory: s,
    muted: a,
    selected: o
  } = e, {
    hasActiveThreads: u,
    hasMoreActiveThreads: c
  } = (0, E.JQ)(t), g = (0, r.cj)([N.ZP], () => ({
    unread: N.ZP.hasUnread(t.id),
    ackMessageId: N.ZP.ackMessageId(t.id),
    mentionCount: N.ZP.getMentionCount(t.id)
  })), p = (0, r.e7)([Z.ZP], () => Z.ZP.resolveUnreadSetting(t)), _ = (0, r.cj)([f.Z, I.Z], () => {
    let e = f.Z.getChannel(t.parent_id);
    return {
      canManageChannel: I.Z.can(M.Plq.MANAGE_CHANNELS, t),
      canReorderChannel: !0 !== i && (n.id === R._ || (null != e ? I.Z.can(M.Plq.MANAGE_CHANNELS, e) : I.Z.can(M.Plq.MANAGE_CHANNELS, n)))
    }
  }), x = (0, r.e7)([C.Z], () => C.Z.shouldIndicateNewChannel(n.id, t.id)), {
    needSubscriptionToAccess: T,
    isSubscriptionGated: v
  } = (0, m.Z)(t.id), A = (0, r.e7)([Z.ZP], () => Z.ZP.isFavorite(n.id, t.id)), O = (0, r.e7)([S.default], () => {
    let e = S.default.getCurrentUser();
    return null != e && (!t.isNSFW() || e.nsfwAllowed)
  }, [t]), P = (0, d.NX)(t.id, !1, "webGuildTextChannel"), j = (0, L.Z)({
    channel: t,
    isChannelCollapsed: !1,
    isChannelSelected: o,
    isSubscriptionGated: v,
    needSubscriptionToAccess: T,
    isNewChannel: x,
    muted: a,
    enableActivities: P,
    resolvedUnreadSetting: p
  }), D = (0, h.ZP)(t);
  return (0, l.jsx)(b, {
    ...g,
    ..._,
    ...e,
    hasActiveThreads: u,
    hasMoreActiveThreads: c,
    isSubscriptionGated: v,
    needSubscriptionToAccess: T,
    isNewChannel: x && e.canBeNewChannel,
    isFavoriteSuggestion: s && !A,
    canShowThreadPreviewForUser: O,
    channelInfo: j,
    embeddedApps: D,
    resolvedUnreadSetting: p,
    hasChannelInfo: null != j,
    enableActivities: P
  })
}