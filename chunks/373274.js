n.d(t, {
  E: function() {
    return eh
  },
  j: function() {
    return ed
  }
}), n(47120), n(653041);
var l, i = n(735250),
  s = n(470079),
  r = n(392711),
  a = n.n(r),
  o = n(91192),
  u = n(924826),
  c = n(442837),
  d = n(481060),
  h = n(925549),
  g = n(260300),
  p = n(410575),
  m = n(607070),
  C = n(100527),
  E = n(906732),
  f = n(362658),
  _ = n(583962),
  I = n(915885),
  N = n(258871),
  Z = n(216306),
  S = n(398758),
  x = n(220444),
  T = n(31022),
  L = n(10401),
  v = n(131704),
  A = n(592125),
  M = n(796974),
  R = n(984933),
  O = n(914010),
  P = n(153124),
  j = n(540126),
  b = n(734307),
  D = n(854444),
  y = n(688265),
  U = n(896053),
  G = n(301342),
  w = n(906817),
  k = n(429122),
  B = n(285573),
  V = n(519358),
  H = n(910595),
  F = n(466935),
  W = n(120818),
  Y = n(61642),
  z = n(848442),
  K = n(53425),
  q = n(424785),
  Q = n(770202),
  J = n(79556),
  X = n(428127),
  $ = n(950969),
  ee = n(233657),
  et = n(831700),
  en = n(443063),
  el = n(327530),
  ei = n(981631),
  es = n(176505),
  er = n(689938),
  ea = n(857100);

function eo(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
class eu extends(l = s.PureComponent) {
  componentDidMount() {
    this.setState({
      initialized: !0
    })
  }
  componentWillUnmount() {
    this.updateChannelListScroll.cancel()
  }
  componentDidUpdate(e, t) {
    let {
      scrollToChannel: n,
      guildId: l,
      selectedChannelId: i
    } = this.props, {
      initialized: s
    } = this.state, {
      scrollTop: r
    } = M.Z.getGuildDimensions(l);
    null != n ? (this.scrollToChannel(n), h.Z.clearChannelListScrollTo(l)) : l !== e.guildId ? null != r && this.scrollTo(r) : i !== e.selectedChannelId ? this.scrollToChannel(i) : !t.initialized && s && (null == r && null != i ? this.scrollToChannel(i, !1, el.yE, this.handleListScroll) : this.scrollTo(null != r ? r : 0, this.handleListScroll)), this.testShouldSkipTutorial()
  }
  getSectionRowsFromChannel(e) {
    return this.props.guildChannels.getSectionRowsFromChannel(e)
  }
  scrollTo(e, t) {
    var n;
    null === (n = this._list) || void 0 === n || n.scrollTo({
      to: e,
      animate: !1,
      callback: t
    })
  }
  scrollToChannel(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
      n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : el.yE,
      l = arguments.length > 3 ? arguments[3] : void 0,
      i = this._list,
      s = this.getSectionRowsFromChannel(e)[0];
    if (null != s && null != i) {
      if (null != s.threadOffset) {
        let [e] = i.getScrollPosition(s.section, s.row), r = s.threadOffset * el.Vf;
        i.scrollIntoViewRect({
          start: e + r,
          end: e + r + el.Vf,
          padding: n,
          animate: t,
          callback: l
        })
      } else i.scrollToIndex({
        section: s.section,
        row: s.row,
        animate: t,
        padding: n,
        callback: l
      })
    } else null == l || l()
  }
  isUnreadVisible() {
    let {
      guildChannels: e
    } = this.props, t = this._list;
    return null != t && t.getItems().some(n => {
      if ("row" !== n.type) return !1;
      let {
        section: l,
        row: i
      } = n;
      if (l < j.wd || e.isPlaceholderRow(l, i)) return !1;
      let s = e.getChannelFromSectionRow(l, i);
      if (null == s) return !1;
      let {
        channel: r,
        category: a
      } = s;
      return !!(0, v.vc)(r.record.type) && (!a.isCollapsed || !a.isMuted) && !r.isMuted && !!t.isItemVisible(l, i, !0) && (0, x.d)(r.record)
    })
  }
  renderTopUnread() {
    let {
      topMention: e,
      bottomUnread: t,
      bottomMention: n,
      isUnreadVisible: l
    } = this.state, {
      guildId: s,
      guildChannels: r,
      guildChannelsVersion: a
    } = this.props;
    return (0, i.jsx)("div", {
      className: ea.positionedContainer,
      children: (0, i.jsx)($.Z, {
        ref: this.unreadTopRef,
        textUnread: er.Z.Messages.NEW_UNREADS,
        textMention: er.Z.Messages.NEW_MENTIONS,
        hide: null == e && (l || null != t || null != n),
        className: ea.unreadTop,
        barClassName: ea.unreadBar,
        guildId: s,
        guildChannels: r,
        guildChannelsVersion: a,
        isVisible: this.isChannelVisible,
        onJumpTo: this.jumpToChannelWithMentionsAndUnreads,
        onCalculate: this.handleUnreadCalculate
      })
    })
  }
  renderBottomUnread() {
    let {
      guildId: e,
      guildChannels: t,
      guildChannelsVersion: n
    } = this.props, {
      bottomMention: l,
      isUnreadVisible: s
    } = this.state;
    return (0, i.jsx)($.Z, {
      reverse: !0,
      ref: this.unreadBottomRef,
      textUnread: er.Z.Messages.NEW_UNREADS,
      textMention: er.Z.Messages.NEW_MENTIONS,
      hide: null == l && s,
      className: ea.unreadBottom,
      barClassName: ea.unreadBar,
      guildId: e,
      guildChannels: t,
      guildChannelsVersion: n,
      isVisible: this.isChannelVisible,
      onJumpTo: this.jumpToChannelWithMentionsAndUnreads,
      onCalculate: this.handleUnreadCalculate
    })
  }
  renderList() {
    let {
      guildChannels: e,
      guild: t,
      guildBanner: n,
      hasGuildSubheader: l
    } = this.props, {
      ref: s,
      ...r
    } = this.context, a = 0;
    return null != n ? a = el.Q0 : t.hasCommunityInfoSubheader() && !l && (a = el.JD), (0, i.jsx)(d.FocusJumpSection, {
      children: t => (0, i.jsx)(d.List, {
        ref: this.setListRef,
        className: ea.scroller,
        fade: !0,
        customTheme: !0,
        sectionHeight: this.getSectionHeight,
        footerHeight: this.getSectionFooterHeight,
        rowHeight: this.getRowHeight,
        paddingTop: a,
        paddingBottom: el.$k,
        renderSection: this.renderSection,
        renderFooter: this.renderSectionFooter,
        renderRow: this.renderRow,
        onScroll: this.handleListScroll,
        onResize: this.handleResize,
        onContentResize: this.handleResize,
        sections: e.getSections(),
        innerAriaLabel: er.Z.Messages.CHANNELS,
        innerTag: "ul",
        getAnchorId: this.getAnchorId,
        ...r,
        ...t
      }, "guild-channels")
    })
  }
  render() {
    let {
      guildChannels: e,
      guildChannelsVersion: t,
      showNewUnreadsBar: n
    } = this.props;
    return (0, i.jsx)(s.Fragment, {
      children: (0, i.jsx)(P.FG, {
        children: l => (0, i.jsx)(d.HeadingLevel, {
          component: (0, i.jsx)(d.HiddenVisually, {
            children: (0, i.jsx)(d.H, {
              id: l,
              children: er.Z.Messages.CHANNELS
            })
          }),
          children: n ? (0, i.jsxs)(s.Fragment, {
            children: [(0, i.jsx)("div", {
              className: ea.positionedContainer,
              children: (0, i.jsx)(X.Z, {
                position: "top",
                guildChannels: e,
                guildChannelsVersion: t,
                jumpToVoiceChannels: this.jumpToVoiceChannels,
                jumpToChannel: this.jumpToChannel
              })
            }), this.renderList(), (0, i.jsx)(X.Z, {
              position: "bottom",
              guildChannels: e,
              guildChannelsVersion: t,
              jumpToVoiceChannels: this.jumpToVoiceChannels,
              jumpToChannel: this.jumpToChannel
            })]
          }) : (0, i.jsxs)(s.Fragment, {
            children: [this.renderTopUnread(), this.renderList(), this.renderBottomUnread()]
          })
        })
      })
    })
  }
  constructor(...e) {
    super(...e), eo(this, "_list", null), eo(this, "unreadTopRef", s.createRef()), eo(this, "unreadBottomRef", s.createRef()), eo(this, "state", {
      initialized: !1,
      isUnreadVisible: !0,
      topUnread: null,
      topMention: null,
      bottomUnread: null,
      bottomMention: null
    }), eo(this, "setListRef", e => {
      var t;
      let {
        ref: n
      } = this.context;
      n.current = null !== (t = null == e ? void 0 : e.getScrollerNode()) && void 0 !== t ? t : null, this._list = e
    }), eo(this, "jumpToVoiceChannels", () => {
      var e, t, n, l;
      let {
        guildChannels: i,
        voiceStates: s
      } = this.props, r = 0, a = null !== (n = null === (e = i.getCategoryFromSection(i.voiceChannelsSectionNumber)) || void 0 === e ? void 0 : e.getShownChannelIds()) && void 0 !== n ? n : [];
      for (let e = 0; e < a.length - 1; e++)
        if ((null !== (l = s[a[e]]) && void 0 !== l ? l : []).length > 0) {
          r = e + 1;
          break
        } null === (t = this._list) || void 0 === t || t.scrollToIndex({
        section: i.voiceChannelsSectionNumber,
        row: r,
        animate: !0,
        padding: el.yE
      })
    }), eo(this, "jumpToChannel", e => this.scrollToChannel(e, !0, el.Q1)), eo(this, "jumpToChannelWithMentionsAndUnreads", (e, t) => {
      let [n, l] = t;
      return this.scrollToChannel(e, !0, null != n && null != l ? el.Q1 : el.yE)
    }), eo(this, "isChannelVisible", (e, t) => {
      let n = this.getSectionRowsFromChannel(e),
        l = this._list;
      if (null == l) return !1;
      for (let {
          row: e,
          section: i
        }
        of n) {
        let [n, s] = l.getScrollPosition(i, e), r = l.getScrollerState();
        if (t && n + s < r.scrollTop + r.offsetHeight) return !0;
        if (!t && n > r.scrollTop) return !0
      }
      return !1
    }), eo(this, "getVisibleChannels", () => {
      let e = this._list;
      if (null == e) return [];
      let t = e.getItems(),
        n = e.getScrollerState(),
        l = [];
      for (var i = 0; i < t.length; i++) {
        let s = t[i];
        if ((0, d.isListItemRow)(s) && s.section >= this.props.guildChannels.favoritesSectionNumber) {
          let t = this.props.guildChannels.getChannelFromSectionRow(s.section, s.row),
            [i, r] = e.getScrollPosition(s.section, s.row);
          null != t && i + r < n.scrollTop + n.offsetHeight && i > n.scrollTop && l.push(t.channel.id)
        }
      }
      return l
    }), eo(this, "handleResize", () => {
      var e, t;
      let {
        showNewUnreadsBar: n
      } = this.props, l = null !== (t = null === (e = this._list) || void 0 === e ? void 0 : e.getScrollerState()) && void 0 !== t ? t : null;
      if (this.setState({
          isUnreadVisible: this.isUnreadVisible()
        }), n && null != l) {
        let {
          scrollTop: e
        } = l;
        this.updateChannelListScroll(e)
      }
    }), eo(this, "handleListScroll", () => {
      var e, t;
      let {
        onScroll: n
      } = this.props, l = null !== (t = null === (e = this._list) || void 0 === e ? void 0 : e.getScrollerState()) && void 0 !== t ? t : null;
      if (null != l) {
        let {
          scrollTop: e
        } = l;
        null != n && n(l), this.updateChannelListScroll(e)
      }
      null != this.unreadTopRef.current && this.unreadTopRef.current.calculateState(), null != this.unreadBottomRef.current && this.unreadBottomRef.current.calculateState()
    }), eo(this, "handleUnreadCalculate", (e, t, n) => {
      let l = this.isUnreadVisible();
      n ? this.setState({
        isUnreadVisible: l,
        bottomUnread: t,
        bottomMention: e
      }) : this.setState({
        isUnreadVisible: l,
        topUnread: t,
        topMention: e
      })
    }), eo(this, "updateChannelListScroll", a().throttle(e => {
      h.Z.updateChannelListScroll(this.props.guildId, e, this.getVisibleChannels())
    }, 100)), eo(this, "getSectionHeight", e => {
      let {
        guild: t,
        guildChannels: n
      } = this.props;
      return (0, w.EM)(e, t, n)
    }), eo(this, "getSectionFooterHeight", e => {
      let {
        guildChannels: t,
        voiceStates: n,
        selectedVoiceChannelId: l,
        selectedChannelId: i,
        optInEnabled: s,
        guildChannelsVersion: r
      } = this.props;
      return (0, k.dt)({
        sectionIndex: e,
        guildChannels: t,
        guildChannelsVersion: r,
        voiceStates: n,
        selectedChannelId: i,
        selectedVoiceChannelId: l,
        optInEnabled: s
      })
    }), eo(this, "getRowHeight", (e, t) => {
      let {
        guildChannels: n,
        voiceStates: l,
        stageChannelSpeakerVoiceStates: i,
        selectedVoiceChannelId: s,
        selectedGuildId: r
      } = this.props, a = el.Vf;
      if (e === j.zm) {
        let e = n.getCommunitySection();
        return e.isEmpty() ? 0 : e.getRow(t) === en.f.GUILD_PREMIUM_PROGRESS_BAR ? e.getRows().length > 1 ? _.aR : _.PD : a
      }
      if (n.isPlaceholderRow(e, t)) return 0;
      let o = n.getChannelFromSectionRow(e, t);
      if (null == o) return 0;
      let {
        channel: u,
        category: c
      } = o;
      if (u.record.type === ei.d4z.GUILD_CATEGORY) return 40;
      let {
        isFavoritesPerk: d
      } = f.Z.getCurrentConfig({
        location: "channel_list"
      }, {
        autoTrackExposure: !0
      });
      for (let e of (d && r === ei.I_8 && !u.record.isDM() && !u.record.isGroupDM() && !u.record.isGuildStageVoice() && (a = el.GQ), u.threadIds)) {
        a += el.Vf;
        let t = l[u.id];
        null != t && t.length > 0 && (a += (s === e ? t.length * el.Hb : el.Hb) + el.cx)
      }
      if (u.record.isGuildVoice()) {
        let e = l[u.id];
        if (null != e && e.length > 0) {
          let t = e.length * el.Hb;
          (u.isCollapsed || c.isCollapsed) && (t = el.Hb), a += t + el.cx
        }
        u.id === this.props.rtcConnectedChannelId && (a += this.props.rtcDesyncedVoiceStatesCount * el.Hb)
      }
      if (null != u.subtitle && (a += el.NY), u.record.isGuildStageVoice()) {
        var h, g;
        let e = null !== (h = l[u.id]) && void 0 !== h ? h : [],
          t = null !== (g = i[u.id]) && void 0 !== g ? g : [];
        if (null != e && e.length > 0) {
          let e = t.length * el.Hb;
          u.isCollapsed || c.isCollapsed ? e = Math.ceil(e / el.VE) : e += el.Hb, a += e + el.cx
        }
      }
      return a
    }), eo(this, "dismissRecents", () => {
      let {
        guild: e,
        guildChannels: t,
        selectedChannelId: n
      } = this.props, l = t.getCategoryFromSection(t.recentsSectionNumber);
      if (null == l) return;
      let i = null,
        s = l.getShownChannelAndThreadIds();
      null != n && s.includes(n) && (i = (0, Z.KY)(t)), (0, Z.Uo)(e.id, s, i)
    }), eo(this, "renderSection", e => {
      let {
        section: t
      } = e, {
        guildChannels: n,
        guildChannelsVersion: l,
        guild: s,
        selectedChannelId: r,
        disableManageChannels: a
      } = this.props;
      return (0, i.jsx)(w.ZP, {
        sectionIndex: t,
        guild: s,
        guildChannels: n,
        guildChannelsVersion: l,
        selectedChannelId: r,
        disableManageChannels: a
      }, (0, w.WW)(t, n))
    }), eo(this, "renderRow", e => {
      let {
        section: t,
        row: n
      } = e, {
        guild: l,
        selectedChannel: r,
        selectedChannelId: a,
        selectedVoiceChannel: o,
        selectedVoiceChannelId: u,
        guildChannels: c,
        voiceStates: d,
        disableManageChannels: h,
        stageChannelSpeakerVoiceStates: g,
        optInEnabled: p,
        withGuildIcon: m
      } = this.props;
      if (t === j.zm) {
        let e = c.getCommunitySection(),
          t = e.getRow(n);
        if (null == t) return null;
        switch (t) {
          case en.f.GUILD_HUB_HEADER_OPTIONS:
            return (0, i.jsx)(N.Z, {
              guild: l,
              channel: R.ZP.getDefaultChannel(l.id)
            }, en.f.GUILD_HUB_HEADER_OPTIONS);
          case en.f.GUILD_PREMIUM_PROGRESS_BAR:
            let s = e.getRows();
            return (0, i.jsx)(_.ZP, {
              guild: l,
              withMargin: s.length > 1
            }, en.f.GUILD_PREMIUM_PROGRESS_BAR);
          case en.f.GUILD_HOME:
            return (0, i.jsx)(H.Z, {
              guild: l,
              selected: a === es.oC.GUILD_HOME
            }, en.f.GUILD_HOME);
          case en.f.GUILD_SCHEDULED_EVENTS:
            return (0, i.jsx)(ee.Z, {
              guild: l,
              selected: a === en.f.GUILD_SCHEDULED_EVENTS
            }, en.f.GUILD_SCHEDULED_EVENTS);
          case en.f.GUILD_ROLE_SUBSCRIPTIONS:
            return (0, i.jsx)(Y.Z, {
              guild: l,
              selected: a === es.oC.ROLE_SUBSCRIPTIONS
            }, en.f.GUILD_ROLE_SUBSCRIPTIONS);
          case en.f.GUILD_SHOP:
            return (0, i.jsx)(z.Z, {
              guild: l,
              selected: a === es.oC.GUILD_SHOP
            }, en.f.GUILD_SHOP);
          case en.f.GUILD_MEMBER_APPLICATIONS:
            return (0, i.jsx)(F.Z, {
              guild: l,
              selected: a === es.oC.MEMBER_APPLICATIONS
            }, en.f.GUILD_MEMBER_APPLICATIONS);
          case en.f.GUILD_NEW_MEMBER_ACTIONS_PROGRESS_BAR:
            return (0, i.jsx)(W.T, {
              guild: l
            });
          case en.f.CHANNELS_AND_ROLES:
            return (0, i.jsx)(V.m, {
              guild: l,
              selected: a === es.oC.CHANNEL_BROWSER || a === es.oC.CUSTOMIZE_COMMUNITY
            }, en.f.CHANNELS_AND_ROLES);
          case en.f.GUILD_DIRECTORY:
            return (0, i.jsx)(B.Z, {
              guild: l,
              selectedChannelId: a,
              disableManageChannels: h
            }, en.f.GUILD_DIRECTORY);
          case en.f.GUILD_MOD_DASH_MEMBER_SAFETY:
            return (0, i.jsx)(I.Z, {
              guild: l,
              selected: a === es.oC.MEMBER_SAFETY
            }, en.f.GUILD_MOD_DASH_MEMBER_SAFETY);
          default:
            return null
        }
      }
      if (c.isPlaceholderRow(t, n)) return null;
      let C = c.getChannelFromSectionRow(t, n);
      if (null == C) return null;
      let {
        category: E,
        channel: f
      } = C, Z = E instanceof j.VR, S = f.record, x = "".concat(t).concat(f.id);
      switch (S.type) {
        case ei.d4z.GUILD_ANNOUNCEMENT:
        case ei.d4z.GUILD_TEXT:
        case ei.d4z.GUILD_FORUM:
        case ei.d4z.GUILD_MEDIA:
        case ei.d4z.DM:
        case ei.d4z.GROUP_DM:
          return (0, i.jsxs)(s.Fragment, {
            children: [(0, i.jsx)(J.Z, {
              channel: S,
              guild: l,
              position: f.position,
              selected: a === f.id,
              muted: f.isMuted,
              subtitle: f.subtitle,
              disableManageChannels: h,
              canBeNewChannel: p && t === c.recentsSectionNumber,
              isFavoriteCategory: Z,
              withGuildIcon: m
            }), f.threadCount > 0 ? (0, i.jsx)(K.Z, {
              withGuildIcon: m,
              channel: S,
              sortedThreadIds: f.threadIds,
              selectedChannel: null != r && (r.id === f.id || r.parent_id === S.id) ? r : null,
              selectedVoiceChannelId: (null == o ? void 0 : o.parent_id) === S.id ? u : null
            }) : null]
          }, x);
        case ei.d4z.GUILD_STAGE_VOICE:
          var T, L;
          return (0, i.jsx)(q.Z, {
            channel: S,
            guild: l,
            position: f.position,
            selected: a === f.id,
            connected: u === f.id,
            collapsed: f.isCollapsed || E.isCollapsed,
            voiceStates: null !== (T = d[f.id]) && void 0 !== T ? T : [],
            speakerVoiceStates: null !== (L = g[f.id]) && void 0 !== L ? L : [],
            disableManageChannels: h,
            isFavoriteCategory: Z
          }, x);
        case ei.d4z.GUILD_VOICE:
          return (0, i.jsx)(et.Z, {
            channel: S,
            guild: l,
            position: f.position,
            selected: a === f.id,
            connected: u === f.id,
            collapsed: f.isCollapsed || E.isCollapsed,
            voiceStates: d[f.id],
            subtitle: f.subtitle,
            disableManageChannels: h,
            showTutorial: f.isFirstVoiceChannel,
            isFavoriteCategory: Z,
            withGuildIcon: m
          }, x);
        case ei.d4z.GUILD_STORE:
          return (0, i.jsx)(Q.Z, {
            channel: S,
            guild: l,
            position: f.position,
            selected: a === f.id
          }, x);
        case ei.d4z.GUILD_CATEGORY:
          if (t !== c.voiceChannelsSectionNumber) return null;
          return (0, i.jsx)(G.kw, {
            channel: S
          }, "readonly-".concat(S.id));
        case ei.d4z.PUBLIC_THREAD:
        case ei.d4z.PRIVATE_THREAD:
          return (0, i.jsx)(J.Z, {
            channel: S,
            guild: l,
            position: f.position,
            selected: a === f.id,
            muted: f.isMuted,
            subtitle: f.subtitle,
            disableManageChannels: h,
            canBeNewChannel: !1,
            isFavoriteCategory: !1,
            forceTopLevelThread: !0
          }, x);
        default:
          return null
      }
    }), eo(this, "renderSectionFooter", e => {
      let {
        section: t
      } = e, {
        guildChannels: n,
        guildChannelsVersion: l,
        voiceStates: s,
        selectedChannelId: r,
        selectedVoiceChannelId: a,
        optInEnabled: o,
        guildId: u
      } = this.props;
      return (0, i.jsx)(k.ZP, {
        guildId: u,
        guildChannels: n,
        guildChannelsVersion: l,
        sectionIndex: t,
        voiceStates: s,
        selectedChannelId: r,
        selectedVoiceChannelId: a,
        optInEnabled: o
      }, (0, k.eo)(t, n, o))
    }), eo(this, "getAnchorId", (e, t) => {
      var n, l, i;
      let {
        guildChannels: s
      } = this.props;
      if (e !== j.zm) {
        if (null == t) return e === j.p2 ? "favorites-header" : e === s.recentsSectionNumber ? "recents-header" : e === s.voiceChannelsSectionNumber ? "voice-channels" : e === j.wd ? "uncategorized-header" : null === (i = s.getNamedCategoryFromSection(e)) || void 0 === i ? void 0 : i.id;
        if (!s.isPlaceholderRow(e, t)) return null === (l = s.getChannelFromSectionRow(e, t)) || void 0 === l ? void 0 : null === (n = l.channel) || void 0 === n ? void 0 : n.id
      }
    }), eo(this, "testShouldSkipTutorial", () => {
      if (!L.Z.shouldShow("voice-conversations")) return;
      let {
        guildChannels: e
      } = this.props, t = e.getFirstVoiceChannel();
      if (null == t) {
        g.Z.dismiss("voice-conversations");
        return
      }
      let n = this._list;
      if (null != n)
        for (let {
            section: e,
            row: l
          }
          of this.getSectionRowsFromChannel(t.id)) !n.isItemVisible(e, l) && g.Z.dismiss("voice-conversations")
    })
  }
}
eo(eu, "contextType", o.qB);
let ec = e => {
  let {
    guildId: t,
    selectedChannelId: n,
    selectedVoiceChannelId: l
  } = e, r = (0, c.e7)([m.Z], () => m.Z.keyboardModeEnabled), {
    analyticsLocations: a
  } = (0, E.ZP)(C.Z.GUILD_CHANNEL_LIST), d = (0, c.e7)([A.Z], () => A.Z.getChannel(n)), h = (0, c.e7)([A.Z], () => A.Z.getChannel(l)), g = (0, c.e7)([O.Z], () => O.Z.getGuildId()), f = (0, S.DM)(t), _ = s.useRef(null), I = s.useCallback((e, t) => {
    let n = _.current;
    if (null != n) {
      if (ei.Xyh.test(t) || (0, es.AB)(t)) n.scrollToChannel(t, !1, 2 * el.yE, () => {
        requestAnimationFrame(() => {
          var t;
          return null === (t = document.querySelector(e)) || void 0 === t ? void 0 : t.focus()
        })
      });
      else {
        var l;
        null === (l = document.querySelector(e)) || void 0 === l || l.focus()
      }
    }
  }, []), N = s.useCallback(() => new Promise(e => {
    let t = _.current;
    if (null == t) return e();
    t.scrollTo(0, () => requestAnimationFrame(() => e()))
  }), []), Z = s.useCallback(() => new Promise(e => {
    let t = _.current;
    if (null == t) return e();
    t.scrollTo(Number.MAX_SAFE_INTEGER, () => requestAnimationFrame(() => e()))
  }), []), x = (0, u.ZP)({
    id: "channels",
    defaultFocused: null != n ? n : void 0,
    isEnabled: r,
    setFocus: I,
    scrollToStart: N,
    scrollToEnd: Z
  }), L = x.setFocus;
  s.useEffect(() => {
    null != n && L(n)
  }, [n, L]);
  let v = (0, T.Z)(t);
  return (0, i.jsx)(E.Gt, {
    value: a,
    children: (0, i.jsx)(p.Z, {
      section: ei.jXE.GUILD_CHANNEL_LIST,
      children: (0, i.jsx)(o.bG, {
        navigator: x,
        children: (0, i.jsx)(eu, {
          ...e,
          listNavigator: x,
          ref: _,
          selectedChannel: d,
          selectedVoiceChannel: h,
          stageChannelSpeakerVoiceStates: v,
          selectedGuildId: g,
          optInEnabled: f
        })
      })
    })
  })
};

function ed(e) {
  let t = (0, D.o)(),
    {
      isFavoritesPerk: n
    } = (0, f.z)("favorites-channel-list");
  return (0, i.jsx)(ec, {
    ...e,
    guildChannels: t,
    guildChannelsVersion: 0,
    withGuildIcon: n
  })
}

function eh(e) {
  let t = (0, U.Z)(e.guild),
    n = (0, y.Z)(e.guild),
    l = a().uniq(n.concat(t)),
    s = (0, c.cj)([b.Z], () => b.Z.getGuild(e.guildId, l));
  return (0, i.jsx)(ec, {
    ...e,
    ...s
  })
}