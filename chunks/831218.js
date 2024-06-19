n(47120);
var l, i, s, r = n(735250),
  a = n(470079),
  o = n(299608),
  u = n.n(o),
  c = n(91192),
  d = n(924826),
  h = n(442837),
  g = n(902704),
  p = n(481060),
  m = n(925549),
  C = n(607070),
  E = n(367907),
  f = n(453542),
  _ = n(762914),
  I = n(702321),
  N = n(518311),
  Z = n(355298),
  S = n(869404),
  x = n(333984),
  T = n(210887),
  L = n(592125),
  v = n(158776),
  A = n(55589),
  M = n(153124),
  R = n(151827),
  O = n(515753),
  P = n(981631),
  j = n(689938),
  b = n(367358);

function D(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}(s = l || (l = {}))[s.PAGES = 0] = "PAGES", s[s.DMS = 1] = "DMS";
let y = a.memo(function() {
  return (0, r.jsxs)("svg", {
    width: "184",
    height: "428",
    viewBox: "0 0 184 428",
    className: b.empty,
    children: [(0, r.jsx)("rect", {
      x: 40,
      y: 6,
      width: 144,
      height: 20,
      rx: 10
    }), (0, r.jsx)("circle", {
      cx: 16,
      cy: 16,
      r: 16
    }), (0, r.jsx)("rect", {
      x: 40,
      y: 50,
      width: 144,
      height: 20,
      rx: 10,
      opacity: .9
    }), (0, r.jsx)("circle", {
      cx: 16,
      cy: 60,
      r: 16,
      opacity: .9
    }), (0, r.jsx)("rect", {
      x: 40,
      y: 94,
      width: 144,
      height: 20,
      rx: 10,
      opacity: .8
    }), (0, r.jsx)("circle", {
      cx: 16,
      cy: 104,
      r: 16,
      opacity: .8
    }), (0, r.jsx)("rect", {
      x: 40,
      y: 138,
      width: 144,
      height: 20,
      rx: 10,
      opacity: .7
    }), (0, r.jsx)("circle", {
      cx: 16,
      cy: 148,
      r: 16,
      opacity: .7
    }), (0, r.jsx)("rect", {
      x: 40,
      y: 182,
      width: 144,
      height: 20,
      rx: 10,
      opacity: .6
    }), (0, r.jsx)("circle", {
      cx: 16,
      cy: 192,
      r: 16,
      opacity: .6
    }), (0, r.jsx)("rect", {
      x: 40,
      y: 226,
      width: 144,
      height: 20,
      rx: 10,
      opacity: .5
    }), (0, r.jsx)("circle", {
      cx: 16,
      cy: 236,
      r: 16,
      opacity: .5
    }), (0, r.jsx)("rect", {
      x: 40,
      y: 270,
      width: 144,
      height: 20,
      rx: 10,
      opacity: .4
    }), (0, r.jsx)("circle", {
      cx: 16,
      cy: 280,
      r: 16,
      opacity: .4
    }), (0, r.jsx)("rect", {
      x: 40,
      y: 314,
      width: 144,
      height: 20,
      rx: 10,
      opacity: .3
    }), (0, r.jsx)("circle", {
      cx: 16,
      cy: 324,
      r: 16,
      opacity: .3
    }), (0, r.jsx)("rect", {
      x: 40,
      y: 358,
      width: 144,
      height: 20,
      rx: 10,
      opacity: .2
    }), (0, r.jsx)("circle", {
      cx: 16,
      cy: 368,
      r: 16,
      opacity: .2
    }), (0, r.jsx)("rect", {
      x: 40,
      y: 402,
      width: 144,
      height: 20,
      rx: 10,
      opacity: .1
    }), (0, r.jsx)("circle", {
      cx: 16,
      cy: 412,
      r: 16,
      opacity: .1
    })]
  })
});
class U extends(i = a.Component) {
  static getDerivedStateFromProps(e) {
    let {
      children: t,
      privateChannelIds: n
    } = e;
    if (null == t) return {
      preRenderedChildren: 0,
      nonNullChildren: [],
      totalRowCount: n.length
    };
    {
      let e = t.filter(e => null != e),
        l = e.length;
      return {
        preRenderedChildren: l,
        nonNullChildren: e,
        totalRowCount: l + n.length
      }
    }
  }
  componentDidMount() {
    let {
      selectedChannelId: e,
      homeLink: t
    } = this.props;
    null != e && null != t && t.indexOf(e) >= 0 && this.scrollToChannel(e), this.reportAnalytics()
  }
  shouldComponentUpdate(e) {
    return !(0, g.Z)(this.props, e, ["children"])
  }
  componentDidUpdate(e) {
    let {
      selectedChannelId: t,
      homeLink: n
    } = this.props;
    null != t && t !== e.selectedChannelId ? this.scrollToChannel(t) : null == t && n !== e.homeLink && this.scrollToChannel(null), this.reportAnalytics()
  }
  scrollToChannel(e) {
    if (null == this._list) return;
    let {
      padding: t
    } = this.props, {
      preRenderedChildren: n
    } = this.state, l = null != e ? this.props.privateChannelIds.indexOf(e) : -1, i = 0;
    l < 0 || null == e ? this._list.scrollTo({
      to: i
    }) : (i += 44 * (l + n) + t, this._list.scrollIntoViewRect({
      start: Math.max(i - 8, 0),
      end: i + 44 + 8
    }))
  }
  render() {
    let {
      privateChannelIds: e,
      padding: t
    } = this.props, {
      preRenderedChildren: n
    } = this.state;
    return (0, r.jsx)(c.SJ, {
      children: l => {
        let {
          ref: i,
          role: s,
          ...a
        } = l;
        return (0, r.jsx)(p.FocusJumpSection, {
          children: l => (0, r.jsx)(p.List, {
            fade: !0,
            innerRole: s,
            innerAriaLabel: j.Z.Messages.DIRECT_MESSAGES,
            innerTag: "ul",
            ref: e => {
              var t;
              this._list = e, this.props.listRef.current = e, i.current = null !== (t = null == e ? void 0 : e.getScrollerNode()) && void 0 !== t ? t : null
            },
            onScroll: this.handleScroll,
            className: b.scroller,
            sectionHeight: this.getSectionHeight,
            paddingTop: t,
            paddingBottom: 8,
            rowHeight: this.getRowHeight,
            renderSection: this.renderSection,
            renderRow: this.renderRow,
            sections: [n, Math.max(e.length, 1)],
            ...a,
            ...l
          })
        })
      }
    })
  }
  constructor(...e) {
    super(...e), D(this, "state", {
      initialized: !1,
      preRenderedChildren: 0,
      totalRowCount: 0,
      nonNullChildren: []
    }), D(this, "_list", null), D(this, "hasReportedAnalytics", !1), D(this, "reportAnalytics", () => {
      var e;
      if (this.hasReportedAnalytics) return;
      let t = null === (e = this._list) || void 0 === e ? void 0 : e.getScrollerState();
      if (null == t) return;
      let {
        privateChannelIds: n,
        channels: l
      } = this.props;
      if (0 === n.length) return;
      let i = a.Children.count(this.props.children);
      if (null == t) return;
      let s = Math.round((t.offsetHeight - 44 * i) / 44),
        r = s > n.length ? n.slice(0, s + 1) : n,
        o = r.map(e => null != l[e] ? l[e].getRecipientId() : null),
        u = n.some(e => (0, I.Z)(e)),
        c = {
          num_users_visible: r.length,
          num_users_visible_with_mobile_indicator: o.filter(e => null != e && v.Z.isMobileOnline(e)).length
        };
      this.hasReportedAnalytics = !0, E.ZP.trackWithMetadata(P.rMx.DM_LIST_VIEWED, {
        ...c,
        ...(0, f.X)(),
        changelog_dm_visible: u
      })
    }), D(this, "getSectionHeight", e => {
      let {
        showDMHeader: t
      } = this.props;
      return 0 === e ? 0 : t ? 40 : 0
    }), D(this, "handleScroll", u()(() => {
      if (null != this._list) {
        let e = this._list.getScrollerNode();
        null != e && m.Z.updateChannelListScroll(P.ME, e.scrollTop)
      }
    }, 100)), D(this, "renderDM", (e, t) => {
      let {
        privateChannelIds: n,
        channels: l,
        selectedChannelId: i
      } = this.props, {
        totalRowCount: s,
        preRenderedChildren: a
      } = this.state, o = l[n[t]];
      return null == o ? null : (0, r.jsx)(O.ZP, {
        channel: o,
        selected: o.id === i,
        "aria-posinset": a + t + 1,
        "aria-setsize": s
      }, o.id)
    }), D(this, "renderChild", e => {
      let {
        nonNullChildren: t,
        totalRowCount: n
      } = this.state, l = t[e];
      return a.isValidElement(l) ? a.cloneElement(l, {
        "aria-setsize": n,
        "aria-posinset": e + 1
      }) : l
    }), D(this, "renderRow", e => {
      let {
        section: t,
        row: n
      } = e, {
        privateChannelIds: l
      } = this.props;
      return 0 === t ? this.renderChild(n) : 0 === n && 0 === l.length ? (0, r.jsx)(y, {}, "no-private-channels") : this.renderDM(t, n)
    }), D(this, "renderSection", e => {
      let {
        section: t
      } = e, {
        showDMHeader: n
      } = this.props;
      return 0 !== t && n ? (0, r.jsxs)(R.Z, {
        className: b.privateChannelsHeaderContainer,
        children: [(0, r.jsx)("span", {
          className: b.headerText,
          children: j.Z.Messages.DIRECT_MESSAGES
        }), (0, r.jsx)(N.Z, {
          tooltip: j.Z.Messages.CREATE_DM,
          tooltipPosition: "top",
          popoutAlign: "left",
          iconClassName: b.privateChannelRecipientsInviteButtonIcon,
          icon: p.PlusSmallIcon,
          subscribeToGlobalHotkey: !0
        })]
      }, t) : null
    }), D(this, "getRowHeight", (e, t) => {
      let {
        privateChannelIds: n
      } = this.props;
      return 1 === e && 0 === t && 0 === n.length ? 428 : 44
    })
  }
}
D(U, "defaultProps", {
  padding: 8
});
t.Z = e => {
  let {
    version: t,
    theme: n,
    children: l,
    showDMHeader: i
  } = e, s = a.Children.count(l), o = L.Z.getMutablePrivateChannels(), u = (0, S.k1)(o), g = (0, h.Wu)([A.Z, Z.Z, x.Z], () => {
    let e = A.Z.getPrivateChannelIds(),
      t = (0, S.tU)(e, [Z.Z, x.Z]);
    return (0, _.Ce)(t)
  }, []), p = (0, h.cj)([C.Z, T.Z, L.Z], () => ({
    theme: T.Z.darkSidebar ? P.BRd.DARK : n,
    keyboardModeEnabled: C.Z.keyboardModeEnabled,
    version: null != t ? "".concat(t, ":").concat(L.Z.getPrivateChannelsVersion()) : L.Z.getPrivateChannelsVersion()
  })), m = a.useRef(null), E = a.useCallback(e => {
    let t = m.current,
      n = document.querySelector(e);
    null != t && null != n && t.scrollIntoViewNode({
      node: n,
      callback: () => {
        requestAnimationFrame(() => {
          var t;
          return null === (t = document.querySelector(e)) || void 0 === t ? void 0 : t.focus({
            preventScroll: !0
          })
        })
      }
    })
  }, []), f = a.useCallback(() => new Promise(e => {
    let t = m.current;
    if (null == t) return e();
    t.scrollToTop({
      callback: () => requestAnimationFrame(() => e())
    })
  }), []), I = a.useCallback(() => new Promise(e => {
    let t = m.current;
    if (null == t) return e();
    t.scrollToBottom({
      callback() {
        requestAnimationFrame(() => setTimeout(e, 100))
      }
    })
  }), []), N = (0, M.Dt)(), v = (0, d.ZP)({
    id: "private-channels-".concat(N),
    isEnabled: p.keyboardModeEnabled,
    scrollToStart: f,
    scrollToEnd: I,
    defaultFocused: (s + (i ? 1 : 0)).toString(),
    setFocus: E
  });
  return (0, r.jsx)(c.bG, {
    navigator: v,
    children: (0, r.jsx)(U, {
      channels: u,
      privateChannelIds: g,
      listRef: m,
      theme: n,
      version: t,
      ...e,
      children: l,
      ...p
    })
  })
}