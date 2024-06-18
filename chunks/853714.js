"use strict";
t(47120);
var n = t(735250),
  i = t(470079),
  l = t(120356),
  a = t.n(l),
  r = t(699581),
  o = t(91192),
  c = t(374470),
  d = t(442837),
  u = t(481060),
  E = t(480137),
  _ = t(239091),
  I = t(497321),
  T = t(724757),
  N = t(210887),
  m = t(387667),
  S = t(598077),
  h = t(592125),
  g = t(430824),
  C = t(246946),
  x = t(594174),
  R = t(274730),
  L = t(823379),
  O = t(51144),
  A = t(987707),
  p = t(999382),
  M = t(501801),
  f = t(603784),
  D = t(981631),
  v = t(689938),
  j = t(807754),
  Z = t(576107),
  U = t(972667);

function G(e, s, t) {
  return s in e ? Object.defineProperty(e, s, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[s] = t, e
}
class P extends i.PureComponent {
  render() {
    let {
      onHeaderClick: e,
      guildId: s,
      guild: t,
      ...i
    } = this.props;
    return null == s ? null : (0, n.jsx)(f.Z, {
      ...i,
      guildId: s,
      guild: t,
      onHeaderClick: this.handleHeaderClick,
      onUserContextMenu: this.handleUserContextMenu,
      onChannelContextMenu: this.handleChannelContextMenu,
      onTargetContextMenu: this.handleTargetContextMenu
    })
  }
  constructor(...e) {
    super(...e), G(this, "handleHeaderClick", () => {
      let {
        onHeaderClick: e,
        log: s
      } = this.props;
      null == e || e(s)
    }), G(this, "handleUserContextMenu", e => {
      let {
        log: s,
        guildId: i
      } = this.props, {
        user: l
      } = s;
      null != l && null != i && (0, _.jW)(e, async () => {
        let {
          default: e
        } = await Promise.all([t.e("99387"), t.e("50929")]).then(t.bind(t, 595011));
        return s => (0, n.jsx)(e, {
          ...s,
          guildId: i,
          user: l
        })
      })
    }), G(this, "handleChannelContextMenu", e => {
      let {
        log: s,
        guildId: i
      } = this.props, l = g.Z.getGuild(i);
      null != s.options.channel && null != l && (0, _.jW)(e, async () => {
        let {
          default: e
        } = await t.e("51529").then(t.bind(t, 228620));
        return t => (0, n.jsx)(e, {
          ...t,
          channel: s.options.channel
        })
      })
    }), G(this, "handleTargetContextMenu", e => {
      let {
        log: s,
        guildId: i
      } = this.props;
      switch (s.targetType) {
        case D.KFR.CHANNEL:
        case D.KFR.CHANNEL_OVERWRITE:
          let l = h.Z.getChannel(s.targetId),
            a = g.Z.getGuild(i);
          if (null != l && null != a) return (0, _.jW)(e, async () => {
            let {
              default: e
            } = await t.e("51529").then(t.bind(t, 228620));
            return s => (0, n.jsx)(e, {
              ...s,
              channel: l
            })
          });
          return (0, _.jW)(e, async () => {
            let {
              default: e
            } = await t.e("5396").then(t.bind(t, 731646));
            return t => (0, n.jsx)(e, {
              ...t,
              id: s.targetId,
              label: v.Z.Messages.COPY_ID_UNKNOWN
            })
          });
        case D.KFR.USER:
          let r = x.default.getUser(s.targetId);
          if (null != r && null != i) return (0, _.jW)(e, async () => {
            let {
              default: e
            } = await Promise.all([t.e("99387"), t.e("50929")]).then(t.bind(t, 595011));
            return s => (0, n.jsx)(e, {
              ...s,
              guildId: i,
              user: r
            })
          })
      }
      return null
    })
  }
}

function b(e) {
  let {
    logs: s,
    guildId: t,
    guild: l,
    expandedId: a,
    lastExpandedId: r,
    scroller: c,
    setExpandedRef: d,
    setLastExpandedRef: u,
    onHeaderClick: E,
    onContentClick: _
  } = e, I = i.useRef(c);
  i.useEffect(() => {
    I.current = c
  }, [c]);
  let N = (0, T.Z)("audit-log", I);
  return (0, n.jsx)(o.bG, {
    navigator: N,
    children: (0, n.jsx)(o.SJ, {
      children: e => {
        let {
          ref: i,
          ...o
        } = e;
        return (0, n.jsx)("div", {
          ref: i,
          ...o,
          children: s.map(e => {
            let s = a === e.id,
              i = r === e.id;
            return (0, n.jsx)(P, {
              guildId: t,
              guild: l,
              ref: s ? d : i ? u : null,
              className: j.row,
              onHeaderClick: E,
              onContentClick: _,
              log: e,
              expanded: s
            }, e.id)
          })
        })
      }
    })
  })
}
class B extends i.PureComponent {
  componentDidMount() {
    (0, E.bY)(this.props.guildId), document.addEventListener("click", this.handleOutsideClick)
  }
  componentWillUnmount() {
    document.removeEventListener("click", this.handleOutsideClick)
  }
  componentDidUpdate(e, s) {
    this.state.expandedId !== s.expandedId && this.fixScroll(), !this.props.showLoadMore && this.props.logs.length !== e.logs.length && null != this._scrollerRef && this.isScrollerAtBottom() && (0, E.OY)(this.props.guildId, !0)
  }
  isScrollerAtBottom() {
    var e;
    return (null === (e = this._scrollerRef) || void 0 === e ? void 0 : e.isScrolledToBottom()) || !1
  }
  fixScroll() {
    let e = this._scrollerRef;
    if (null == e) return;
    let s = this.getRects(),
      t = this._prevRects;
    if (null == s.expanded || null == s.lastExpanded || null == t.expanded || s.expanded.top < s.lastExpanded.top) return;
    let n = t.expanded.height - s.lastExpanded.height,
      i = e.getScrollerState().scrollTop - n;
    e.scrollTo({
      to: i
    })
  }
  getRects() {
    let e = {
      lastExpanded: null,
      expanded: null
    };
    if (null != this._lastExpandedRef) {
      let s = r.findDOMNode(this._lastExpandedRef);
      (0, c.k)(s) && (e.lastExpanded = s.getBoundingClientRect())
    }
    if (null != this._expandedRef) {
      let s = r.findDOMNode(this._expandedRef);
      (0, c.k)(s) && (e.expanded = s.getBoundingClientRect())
    }
    return e
  }
  renderUserQuickSelectValue(e) {
    var s;
    return null !== (s = e.valueLabel) && void 0 !== s ? s : e.label
  }
  renderActionQuickSelectValue(e) {
    var s;
    return null !== (s = e.valueLabel) && void 0 !== s ? s : e.label
  }
  renderHeader() {
    return (0, n.jsxs)(n.Fragment, {
      children: [(0, n.jsxs)("div", {
        className: j.customHeader,
        children: [(0, n.jsx)(u.FormTitle, {
          tag: u.FormTitleTags.H1,
          className: j.formTitle,
          children: v.Z.Messages.GUILD_SETTINGS_LABEL_AUDIT_LOG
        }), this.renderHeaderDropdowns()]
      }), (0, n.jsx)(u.FormDivider, {
        className: j.divider
      })]
    })
  }
  renderSpinner() {
    return (0, n.jsx)(u.Spinner, {
      type: u.Spinner.Type.SPINNING_CIRCLE
    })
  }
  renderContent() {
    let {
      expandedId: e,
      lastExpandedId: s
    } = this.state, {
      logs: i,
      theme: l,
      hide: a,
      isInitialLoading: r,
      isLoading: o,
      hasError: c,
      guildId: d,
      guild: E
    } = this.props;
    if (a) return (0, n.jsx)(I.Z, {});
    if (o || r) return this.renderSpinner();
    if (0 === i.length) {
      let e = c ? v.Z.Messages.GUILD_SETTINGS_LABEL_AUDIT_LOG_ERROR_BODY : v.Z.Messages.GUILD_SETTINGS_LABEL_AUDIT_LOG_EMPTY_BODY,
        s = c ? v.Z.Messages.GUILD_SETTINGS_LABEL_AUDIT_LOG_ERROR_TITLE : v.Z.Messages.GUILD_SETTINGS_LABEL_AUDIT_LOG_EMPTY_TITLE;
      return (0, n.jsxs)(u.EmptyState, {
        theme: l,
        className: j.empty,
        children: [(0, n.jsx)(u.EmptyStateImage, {
          darkSrc: t(28269),
          lightSrc: t(357115),
          width: 272,
          height: 130
        }), (0, n.jsx)(u.EmptyStateText, {
          note: e,
          style: {
            maxWidth: 300
          },
          children: s
        })]
      })
    }
    return (0, n.jsx)(b, {
      logs: i,
      guildId: d,
      guild: E,
      expandedId: e,
      lastExpandedId: s,
      setExpandedRef: this.handleSetExpandedRef,
      setLastExpandedRef: this.handleSetLastExpandedRef,
      onHeaderClick: this.handleHeaderClick,
      onContentClick: this.handleContentClick,
      scroller: this._scrollerRef
    })
  }
  render() {
    let {
      isLoadingNextPage: e,
      hide: s,
      isLoading: t
    } = this.props;
    return (0, n.jsx)("div", {
      className: Z.customColumn,
      children: (0, n.jsx)("div", {
        className: Z.customContainer,
        children: (0, n.jsx)(u.AdvancedScrollerAuto, {
          className: a()(Z.customScroller, j.scroller),
          onScroll: this.handleOnScroll,
          ref: this.handleSetScrollerRef,
          children: (0, n.jsx)("div", {
            className: j.content,
            ref: this._contentRef,
            children: (0, n.jsxs)(u.FocusRingScope, {
              containerRef: this._contentRef,
              children: [this.renderHeader(), this.renderContent(), this.renderLoadMore(), !e || s || t ? null : this.renderSpinner()]
            })
          })
        })
      })
    })
  }
  constructor(...e) {
    super(...e), G(this, "_clickedInside", !1), G(this, "_scrollerRef", null), G(this, "_expandedRef", void 0), G(this, "_lastExpandedRef", void 0), G(this, "_prevRects", this.getRects()), G(this, "_contentRef", i.createRef()), G(this, "state", {
      expandedId: null,
      lastExpandedId: null,
      actionFilterQuery: ""
    }), G(this, "renderActionQuickSelectItem", (e, s) => {
      var t;
      let {
        actionFilter: i
      } = this.props, l = (0, m.Pw)(e.value), a = (0, m.p5)(e.value), r = e.value === i;
      return (0, n.jsxs)(u.ComboboxItem, {
        value: e.value,
        selectedColor: u.ComboboxItem.Colors.BRAND,
        children: [(0, n.jsx)(u.ComboboxItem.Icon, {
          children: (0, n.jsx)(M.mp, {
            themeOverride: r ? D.BRd.DARK : null,
            actionType: l,
            targetType: a,
            action: e.value
          })
        }), (0, n.jsx)(u.ComboboxItem.Label, {
          children: e.label
        }), (0, n.jsx)(u.ComboboxItem.Checkmark, {})]
      }, null !== (t = e.key) && void 0 !== t ? t : s)
    }), G(this, "renderUserQuickSelectItem", (e, s) => {
      var t;
      if (e.user instanceof S.Z) {
        let s = e.user;
        return (0, n.jsxs)(u.ComboboxItem, {
          value: s.id,
          selectedColor: u.ComboboxItem.Colors.BRAND,
          children: [(0, n.jsx)(u.ComboboxItem.Icon, {
            children: (0, n.jsx)(u.Avatar, {
              size: u.AvatarSizes.SIZE_32,
              src: s.getAvatarURL(this.props.guildId, 32),
              "aria-label": s.username,
              className: j.avatar
            })
          }), (0, n.jsxs)(u.ComboboxItem.Label, {
            children: [(0, n.jsx)(u.Text, {
              variant: "text-sm/normal",
              children: O.ZP.getUserTag(s, {
                mode: "username"
              })
            }), !s.isPomelo() && (0, n.jsxs)(u.Text, {
              variant: "text-xs/normal",
              className: j.discriminator,
              children: ["#", s.discriminator]
            })]
          }), (0, n.jsx)(u.ComboboxItem.Checkmark, {})]
        }, s.id)
      }
      return (0, n.jsxs)(u.ComboboxItem, {
        value: e.value,
        selectedColor: u.ComboboxItem.Colors.BRAND,
        children: [(0, n.jsx)(u.ComboboxItem.Icon, {
          children: (0, n.jsx)(u.GroupIcon, {
            size: "custom",
            color: "currentColor",
            width: 30,
            height: 30
          })
        }), (0, n.jsx)(u.ComboboxItem.Label, {
          children: e.label
        }), (0, n.jsx)(u.ComboboxItem.Checkmark, {})]
      }, null !== (t = e.key) && void 0 !== t ? t : s)
    }), G(this, "renderHeaderDropdowns", () => {
      var e, s;
      let {
        actionFilter: t,
        hide: i,
        userIdFilter: l,
        moderators: r
      } = this.props;
      if (i) return null;
      let o = R.Iv(),
        c = null !== (e = o.find(e => {
          let {
            value: s
          } = e;
          return t === s
        })) && void 0 !== e ? e : o[0],
        d = {
          label: v.Z.Messages.GUILD_SETTINGS_FILTER_ALL_USERS,
          valueLabel: v.Z.Messages.GUILD_SETTINGS_FILTER_ALL,
          value: null
        },
        E = [d, ...r].map(e => {
          var s;
          if (!(e instanceof S.Z)) return e;
          return {
            label: (s = e).username,
            value: s.id,
            user: s
          }
        }),
        _ = null !== (s = E.find(e => {
          let {
            value: s
          } = e;
          return s === l
        })) && void 0 !== s ? s : d;
      return (0, n.jsxs)("div", {
        className: j.quickSelect,
        children: [(0, n.jsx)(u.SearchableQuickSelect, {
          popoutClassName: a()(j.selectFilterPopout, U.elevationBorderHigh),
          items: E,
          renderItem: this.renderUserQuickSelectItem,
          renderValue: this.renderUserQuickSelectValue,
          value: _,
          onChange: this.handleFilterUserChange,
          label: v.Z.Messages.GUILD_SETTINGS_FILTER_USER,
          placeholder: v.Z.Messages.SEARCH_MEMBERS,
          popoutProps: {
            autoInvert: !1,
            position: "bottom"
          }
        }), (0, n.jsx)(u.SearchableQuickSelect, {
          placeholder: v.Z.Messages.SEARCH_ACTIONS,
          label: v.Z.Messages.GUILD_SETTINGS_FILTER_ACTION,
          popoutClassName: a()(j.selectFilterPopout, U.elevationBorderLow),
          items: o,
          renderItem: this.renderActionQuickSelectItem,
          renderValue: this.renderActionQuickSelectValue,
          value: c,
          onChange: this.handleFilterActionChange,
          popoutProps: {
            autoInvert: !1,
            position: "bottom"
          }
        })]
      })
    }), G(this, "renderLoadMore", () => {
      let {
        showLoadMore: e,
        hasOlderLogs: s,
        hide: t
      } = this.props;
      if (e && s && !t) return (0, n.jsx)(u.Button, {
        color: u.Button.Colors.PRIMARY,
        className: j.loadMore,
        onClick: this.handleFetchNextPage,
        children: v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_LOAD_MORE
      })
    }), G(this, "handleFilterActionChange", e => {
      (0, E.ZX)(e, this.props.guildId)
    }), G(this, "handleFilterUserChange", e => {
      (0, E.uo)(e, this.props.guildId)
    }), G(this, "handleHeaderClick", e => {
      let {
        expandedId: s
      } = this.state;
      s !== e.id ? (this._clickedInside = !0, this.setState({
        expandedId: e.id,
        lastExpandedId: s
      }), this._prevRects = this.getRects()) : (this._expandedRef = null, this._lastExpandedRef = null, null != s && (this._prevRects = this.getRects()), this.setState({
        expandedId: null,
        lastExpandedId: null
      }))
    }), G(this, "handleOutsideClick", () => {
      null == this.state.expandedId || this._clickedInside ? null != this.state.expandedId && (this._clickedInside = !1) : (this._expandedRef = null, this._lastExpandedRef = null, this.setState({
        expandedId: null,
        lastExpandedId: null
      }), this._prevRects = this.getRects())
    }), G(this, "handleContentClick", e => {
      this._clickedInside = !0, e.stopPropagation()
    }), G(this, "handleSetScrollerRef", e => {
      this._scrollerRef = e
    }), G(this, "handleOnScroll", () => {
      this.isScrollerAtBottom() && this.handleFetchNextPage()
    }), G(this, "handleFetchNextPage", () => {
      (0, E.OY)(this.props.guildId)
    }), G(this, "handleActionFilterQueryChange", e => {
      this.setState({
        actionFilterQuery: e
      })
    }), G(this, "handleActionFilterQueryClear", () => {
      this.setState({
        actionFilterQuery: ""
      })
    }), G(this, "handleSetExpandedRef", e => {
      this._expandedRef = e
    }), G(this, "handleSetLastExpandedRef", e => {
      this._lastExpandedRef = e
    })
  }
}
s.Z = d.ZP.connectStores([A.Z, p.Z, g.Z, N.Z, C.Z, x.default], () => {
  let e = p.Z.getGuildId(),
    s = g.Z.getGuild(e),
    t = A.Z.logs;
  return {
    guildId: e,
    guild: s,
    moderators: A.Z.userIds.map(e => x.default.getUser(e)).filter(L.lm),
    isInitialLoading: A.Z.isInitialLoading,
    isLoading: A.Z.isLoading,
    isLoadingNextPage: A.Z.isLoadingNextPage,
    showLoadMore: A.Z.groupedFetchCount > 2,
    hasError: A.Z.hasError,
    hasOlderLogs: A.Z.hasOlderLogs,
    logs: null != t && null != s ? R._$(t, s) : [],
    actionFilter: A.Z.actionFilter,
    userIdFilter: A.Z.userIdFilter,
    theme: N.Z.theme,
    hide: C.Z.enabled
  }
})(B)