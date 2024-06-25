n.d(t, {
  Z: function() {
    return F
  }
}), n(411104), n(47120);
var l, i = n(735250),
  s = n(470079),
  r = n(120356),
  a = n.n(r),
  o = n(873546),
  u = n(442837),
  c = n(481060),
  d = n(239091),
  h = n(134616),
  p = n(714338),
  g = n(212819),
  m = n(14429),
  C = n(592125),
  E = n(888369),
  f = n(430824),
  _ = n(306680),
  I = n(944486),
  N = n(938475),
  Z = n(387204),
  S = n(107828),
  x = n(153124),
  L = n(585483),
  T = n(63063),
  v = n(51596),
  A = n(823385),
  M = n(670512),
  R = n(981631),
  O = n(689938),
  P = n(163282);

function b(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let j = 10,
  y = () => (0, i.jsxs)("div", {
    className: P.emptyState,
    children: [(0, i.jsx)("div", {
      className: P.emptyStateNote,
      children: O.Z.Messages.QUICKSWITCHER_EMPTY_TEXT
    }), (0, i.jsx)("div", {
      className: P.emptyStateCTA,
      children: (0, i.jsx)(c.Anchor, {
        href: T.Z.getArticleURL(R.BhN.QUICK_SWITCHER_TUTORIAL),
        children: O.Z.Messages.QUICKSWITCHER_EMPTY_CTA
      })
    })]
  });
class D extends(l = s.Component) {
  render() {
    let e = f.Z.getGuild(this.props.channel.guild_id);
    return (0, i.jsx)(S.$W, {
      ...this.props,
      children: (0, i.jsx)("div", {
        className: P.miscContainer,
        children: null != e ? e.name : null
      })
    })
  }
}
b(D, "defaultProps", {
  unread: !1
});
let U = u.ZP.connectStores([_.ZP, C.Z], e => {
    let {
      channel: t
    } = e;
    return {
      unread: _.ZP.hasUnread(t.id),
      mentions: _.ZP.getMentionCount(t.id),
      category: C.Z.getChannel(t.parent_id)
    }
  })(D),
  G = u.ZP.connectStores([N.ZP], e => {
    let {
      channel: t
    } = e;
    if (null == t.guild_id) throw Error("ConnectedVoiceChannel - somehow we got a voice channel with no guild_id...");
    return {
      voiceStates: N.ZP.getVoiceStates(t.guild_id)[t.id]
    }
  })(D),
  w = u.ZP.connectStores([E.default], e => {
    let {
      guild: t
    } = e;
    return {
      unread: E.default.hasUnread(t.id)
    }
  })(S.ic),
  k = u.ZP.connectStores([_.ZP], e => {
    let {
      channel: t
    } = e;
    return {
      mentions: _.ZP.getMentionCount(t.id)
    }
  })(S.PZ),
  B = u.ZP.connectStores([C.Z, _.ZP], e => {
    let {
      user: t
    } = e, n = C.Z.getDMFromUserId(t.id);
    return {
      mentions: null != n ? _.ZP.getMentionCount(n) : 0
    }
  })(S.n5);

function V(e, t, n) {
  return (0, i.jsx)(c.Tooltip, {
    text: n,
    children: e => (0, i.jsx)("span", {
      ...e,
      className: P.autocompleteQuerySymbol,
      children: t
    })
  }, e)
}
class H extends s.PureComponent {
  componentDidMount() {
    p.Z.disable(), p.Z.enableTemp(h.u)
  }
  componentWillUnmount() {
    p.Z.disableTemp(), p.Z.enable()
  }
  componentDidUpdate(e, t) {
    let {
      mouseFocusDisabled: n,
      query: l
    } = this.state, {
      selectedIndex: i
    } = this.props, {
      current: s
    } = this.scrollerRef;
    if (null != s) l !== t.query ? s.scrollTo({
      to: 0
    }) : n && i >= 0 && s.scrollToIndex({
      section: 0,
      row: i,
      padding: 10
    })
  }
  close() {
    (0, v.Cp)()
  }
  search(e) {
    this.setState({
      query: e
    }), (0, v.yC)(e)
  }
  renderInput() {
    let {
      selectedIndex: e,
      results: t
    } = this.props, {
      query: n
    } = this.state, l = t.length > 0 && "" !== n;
    return (0, i.jsx)(c.FocusRing, {
      children: (0, i.jsx)("input", {
        className: P.input,
        "aria-label": O.Z.Messages.QUICK_SWITCHER,
        ref: this.inputRef,
        type: "text",
        role: "combobox",
        "aria-controls": this._listId,
        "aria-expanded": l,
        "aria-activedescendant": l ? this.getRowId(e) : void 0,
        "aria-autocomplete": "list",
        placeholder: O.Z.Messages.QUICKSWITCHER_PLACEHOLDER,
        onChange: this.handleInputChange,
        onKeyDown: this.handleKeyDown,
        value: this.state.query,
        spellCheck: !1,
        autoFocus: !0
      })
    })
  }
  renderSection() {
    return null
  }
  renderResults() {
    let {
      query: e
    } = this.state, {
      results: t
    } = this.props;
    return 0 === t.length && e.length > 0 ? (0, i.jsx)(y, {}) : 0 === t.length ? null : (0, i.jsx)(c.ListAuto, {
      innerId: this._listId,
      innerRole: "listbox",
      "aria-label": O.Z.Messages.QUICK_SWITCHER_RESULTS_LABEL,
      ref: this.scrollerRef,
      sectionHeight: 0,
      rowHeight: 34,
      paddingBottom: j,
      sections: [t.length],
      className: P.scroller,
      renderRow: this.renderRow,
      renderSection: this.renderSection
    })
  }
  focusNode(e) {
    L.S.dispatch(R.CkL.QUICKSWITCHER_RESULT_FOCUS, {
      node: e
    })
  }
  getRowId(e) {
    return "quick-switcher-".concat(this._listId, "-item-").concat(e)
  }
  renderProtip() {
    return (0, i.jsx)(Z.Z, {
      className: a()(P.protip, {
        [P.hasContent]: this.state.query.length > 0
      }),
      type: Z.Z.Types.INLINE,
      children: O.Z.Messages.QUICKSWITCHER_PROTIP.format({
        userSymbolHook: (e, t) => V(t, g.xQ.USER, O.Z.Messages.QUICKSWITCHER_PROTIP_USERNAMES),
        textChannelSymbolHook: (e, t) => V(t, g.xQ.TEXT_CHANNEL, O.Z.Messages.QUICKSWITCHER_PROTIP_TEXT_CHANNELS),
        voiceChannelSymbolHook: (e, t) => V(t, g.xQ.VOICE_CHANNEL, O.Z.Messages.QUICKSWITCHER_PROTIP_VOICE_CHANNELS),
        guildSymbolHook: (e, t) => V(t, g.xQ.GUILD, O.Z.Messages.QUICKSWITCHER_PROTIP_GUILDS),
        helpdeskArticle: T.Z.getArticleURL(R.BhN.QUICK_SWITCHER_TUTORIAL)
      })
    })
  }
  renderTutorial() {
    let {
      query: e
    } = this.state, {
      seenTutorial: t,
      results: n
    } = this.props;
    return t ? null : (0, i.jsx)(M.Z, {
      hasQuery: e.length > 0 && n.length > 0
    })
  }
  render() {
    return (0, i.jsx)(c.ModalRoot, {
      "aria-label": O.Z.Messages.QUICK_SWITCHER,
      size: c.ModalSize.DYNAMIC,
      transitionState: this.props.transitionState,
      className: a()(P.container, o.tq && P.mobileContainer),
      fullscreenOnMobile: !1,
      children: (0, i.jsxs)("div", {
        className: a()(P.quickswitcher, o.tq && P.mobileQuickswitcher),
        onMouseMove: this.handleMouseMove,
        children: [this.renderInput(), this.renderResults(), this.renderProtip(), this.renderTutorial()]
      })
    })
  }
  constructor(...e) {
    super(...e), b(this, "scrollerRef", s.createRef()), b(this, "inputRef", s.createRef()), b(this, "_listId", (0, x.hQ)()), b(this, "state", {
      query: this.props.query,
      mouseFocusDisabled: !0
    }), b(this, "handleInputChange", () => {
      let {
        current: e
      } = this.inputRef;
      null != e && this.search(e.value)
    }), b(this, "handleMouseMove", () => {
      let {
        mouseFocusDisabled: e
      } = this.state;
      if (!1 !== e) this.setState({
        mouseFocusDisabled: !1
      })
    }), b(this, "focusResult", e => {
      if (!this.state.mouseFocusDisabled)(0, v.tF)(this.props.results.indexOf(e))
    }), b(this, "selectResult", e => {
      (0, v.Se)(e, this.props.queryMode === g.h8.TEXT_CHANNEL)
    }), b(this, "handleContextMenu", e => {
      let t = this.props.results[this.props.selectedIndex];
      switch (t.type) {
        case g.h8.GUILD:
          return (0, d.jW)(e, async () => {
            let {
              default: e
            } = await Promise.all([n.e("49237"), n.e("99387"), n.e("96427"), n.e("33053"), n.e("19464"), n.e("7654"), n.e("41662"), n.e("44156"), n.e("85093"), n.e("85552"), n.e("58227"), n.e("43502"), n.e("27577"), n.e("33213")]).then(n.bind(n, 545135));
            return n => (0, i.jsx)(e, {
              ...n,
              guild: t.record,
              onSelect: v.Cp,
              hideSettings: !0
            })
          });
        case g.h8.TEXT_CHANNEL:
        case g.h8.VOICE_CHANNEL:
          let l = t.record,
            s = f.Z.getGuild(l.getGuildId());
          if (null == s) return;
          switch (l.type) {
            case R.d4z.GUILD_TEXT:
            case R.d4z.GUILD_ANNOUNCEMENT:
            case R.d4z.GUILD_FORUM:
            case R.d4z.GUILD_MEDIA:
              return (0, d.jW)(e, async () => {
                let {
                  default: e
                } = await Promise.all([n.e("99387"), n.e("79695"), n.e("18320"), n.e("54310")]).then(n.bind(n, 373651));
                return t => (0, i.jsx)(e, {
                  ...t,
                  channel: l,
                  guild: s,
                  onSelect: v.Cp
                })
              });
            case R.d4z.GUILD_VOICE:
            case R.d4z.GUILD_STAGE_VOICE:
              return (0, d.jW)(e, async () => {
                let {
                  default: e
                } = await Promise.all([n.e("79695"), n.e("18320"), n.e("83331")]).then(n.bind(n, 213202));
                return t => (0, i.jsx)(e, {
                  ...t,
                  channel: l,
                  guild: s,
                  onSelect: v.Cp
                })
              });
            case R.d4z.ANNOUNCEMENT_THREAD:
            case R.d4z.PUBLIC_THREAD:
            case R.d4z.PRIVATE_THREAD:
              return (0, d.jW)(e, async () => {
                let {
                  default: e
                } = await n.e("40157").then(n.bind(n, 422200));
                return t => (0, i.jsx)(e, {
                  ...t,
                  channel: l,
                  onSelect: v.Cp
                })
              });
            case R.d4z.GUILD_STORE:
              return (0, d.jW)(e, async () => {
                let {
                  default: e
                } = await n.e("99905").then(n.bind(n, 649400));
                return t => (0, i.jsx)(e, {
                  ...t,
                  channel: l,
                  guild: s,
                  onSelect: v.Cp
                })
              });
            case R.d4z.GUILD_DIRECTORY:
              return (0, d.jW)(e, async () => {
                let {
                  default: e
                } = await n.e("70623").then(n.bind(n, 99334));
                return t => (0, i.jsx)(e, {
                  ...t,
                  channel: l
                })
              })
          }
          break;
        case g.h8.GROUP_DM:
          return (0, d.jW)(e, async () => {
            let {
              default: e
            } = await Promise.all([n.e("99387"), n.e("79695"), n.e("25421")]).then(n.bind(n, 354741));
            return n => (0, i.jsx)(e, {
              ...n,
              channel: t.record,
              selected: I.Z.getChannelId() === t.record.id,
              onSelect: v.Cp
            })
          });
        case g.h8.USER:
          return (0, d.jW)(e, async () => {
            let {
              default: e
            } = await Promise.all([n.e("99387"), n.e("79695"), n.e("32006"), n.e("69220")]).then(n.bind(n, 881351));
            return n => (0, i.jsx)(e, {
              ...n,
              user: t.record,
              onSelect: v.Cp
            })
          })
      }
    }), b(this, "handleKeyDown", e => {
      let {
        mouseFocusDisabled: t,
        query: n
      } = this.state, {
        results: l
      } = this.props;
      !1 === t && this.setState({
        mouseFocusDisabled: !0
      });
      let i = e.key.toLowerCase(),
        {
          selectedIndex: s
        } = this.props;
      switch (i) {
        case "escape":
          e.preventDefault(), e.stopPropagation(), n.length > 0 ? this.search("") : (0, v.Cp)();
          return;
        case "k":
          (!0 === e.ctrlKey || !0 === e.metaKey) && (e.preventDefault(), e.stopPropagation(), (0, v.Cp)());
          return;
        case "enter": {
          if (-1 === s) return;
          if (e.preventDefault(), e.altKey) return this.handleContextMenu(e);
          let t = l[s];
          null != t && this.selectResult(t);
          return
        }
        case "arrowup":
          s = (0, g.gJ)(g.a8.UP, s, l);
          break;
        case "arrowdown":
          s = (0, g.gJ)(g.a8.DOWN, s, l);
          break;
        case "n":
          if (!e.ctrlKey) return;
          s = (0, g.gJ)(g.a8.DOWN, s, l);
          break;
        case "p":
          if (!e.ctrlKey) return;
          s = (0, g.gJ)(g.a8.UP, s, l);
          break;
        default:
          return
      }
      e.preventDefault(), (0, v.tF)(s)
    }), b(this, "renderRow", e => {
      let {
        row: t
      } = e, n = this.props.results[t], {
        selectedIndex: l
      } = this.props, {
        showScores: s
      } = m.Z.getCurrentConfig({
        location: "62f4be_1"
      }, {
        autoTrackExposure: !1
      });
      switch (n.type) {
        case g.h8.HEADER:
          return (0, i.jsx)(S.h4, {
            children: n.record.text
          }, "".concat(n.type, "-").concat(n.record.id));
        case g.h8.TEXT_CHANNEL:
          return (0, i.jsx)(U, {
            id: this.getRowId(t),
            focused: l >= 0 && t === l,
            onClick: () => this.selectResult(n),
            onMouseEnter: () => this.focusResult(n),
            onFocus: this.focusNode,
            onContextMenu: this.handleContextMenu,
            channel: n.record,
            score: s ? n.score : void 0
          }, "".concat(n.type, "-").concat(n.record.id));
        case g.h8.VOICE_CHANNEL:
          return (0, i.jsx)(G, {
            id: this.getRowId(t),
            focused: l >= 0 && t === l,
            onClick: () => this.selectResult(n),
            onMouseEnter: () => this.focusResult(n),
            onFocus: this.focusNode,
            onContextMenu: this.handleContextMenu,
            channel: n.record,
            score: s ? n.score : void 0
          }, "".concat(n.type, "-").concat(n.record.id));
        case g.h8.GUILD:
          return (0, i.jsx)(w, {
            id: this.getRowId(t),
            focused: l >= 0 && t === l,
            onClick: () => this.selectResult(n),
            onMouseEnter: () => this.focusResult(n),
            onFocus: this.focusNode,
            onContextMenu: this.handleContextMenu,
            guild: n.record,
            score: s ? n.score : void 0
          }, "".concat(n.type, "-").concat(n.record.id));
        case g.h8.USER:
          return (0, i.jsx)(B, {
            id: this.getRowId(t),
            focused: l >= 0 && t === l,
            onClick: () => this.selectResult(n),
            onMouseEnter: () => this.focusResult(n),
            onFocus: this.focusNode,
            onContextMenu: this.handleContextMenu,
            user: n.record,
            comparator: n.comparator,
            score: s ? n.score : void 0
          }, "".concat(n.type, "-").concat(n.record.id));
        case g.h8.GROUP_DM:
          return (0, i.jsx)(k, {
            id: this.getRowId(t),
            focused: l >= 0 && t === l,
            onClick: () => this.selectResult(n),
            onMouseEnter: () => this.focusResult(n),
            onFocus: this.focusNode,
            onContextMenu: this.handleContextMenu,
            channel: n.record,
            score: s ? n.score : void 0
          }, "".concat(n.type, "-").concat(n.record.id));
        case g.h8.APPLICATION:
          return (0, i.jsx)(S.Mx, {
            id: this.getRowId(t),
            focused: l >= 0 && t === l,
            onClick: () => this.selectResult(n),
            onMouseEnter: () => this.focusResult(n),
            onFocus: this.focusNode,
            application: n.record
          }, "".concat(n.type, "-").concat(n.record.id));
        case g.h8.LINK:
          return (0, i.jsx)(S.rU, {
            focused: l >= 0 && t === l,
            onClick: () => this.selectResult(n),
            onMouseEnter: () => this.focusResult(n),
            onFocus: this.focusNode,
            onContextMenu: this.handleContextMenu,
            link: n.record,
            score: s ? n.score : void 0,
            id: this.getRowId(t)
          }, "".concat(n.type, "-").concat(n.record.id));
        default:
          return null
      }
    })
  }
}

function F(e) {
  let t = (0, u.cj)([A.Z], () => A.Z.getProps());
  return (0, i.jsx)(H, {
    ...t,
    ...e
  })
}