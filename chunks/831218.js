n(47120);
var i,
    l,
    r,
    o = n(200651),
    a = n(192379),
    s = n(299608),
    c = n.n(s),
    u = n(91192),
    d = n(924826),
    h = n(442837),
    p = n(902704),
    m = n(481060),
    f = n(925549),
    g = n(607070),
    C = n(367907),
    v = n(453542),
    _ = n(702321),
    x = n(82295),
    I = n(313201),
    b = n(540059),
    E = n(860144),
    S = n(214852),
    Z = n(518311),
    N = n(355298),
    y = n(869404),
    T = n(333984),
    j = n(210887),
    A = n(592125),
    P = n(158776),
    R = n(55589),
    M = n(515753),
    w = n(981631),
    L = n(388032),
    D = n(312565);
function O(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
((r = i || (i = {}))[(r.PAGES = 0)] = 'PAGES'), (r[(r.DMS = 1)] = 'DMS');
let k = a.memo(function () {
    return (0, o.jsxs)('svg', {
        width: '184',
        height: '428',
        viewBox: '0 0 184 428',
        className: D.empty,
        children: [
            (0, o.jsx)('rect', {
                x: 40,
                y: 6,
                width: 144,
                height: 20,
                rx: 10
            }),
            (0, o.jsx)('circle', {
                cx: 16,
                cy: 16,
                r: 16
            }),
            (0, o.jsx)('rect', {
                x: 40,
                y: 50,
                width: 144,
                height: 20,
                rx: 10,
                opacity: 0.9
            }),
            (0, o.jsx)('circle', {
                cx: 16,
                cy: 60,
                r: 16,
                opacity: 0.9
            }),
            (0, o.jsx)('rect', {
                x: 40,
                y: 94,
                width: 144,
                height: 20,
                rx: 10,
                opacity: 0.8
            }),
            (0, o.jsx)('circle', {
                cx: 16,
                cy: 104,
                r: 16,
                opacity: 0.8
            }),
            (0, o.jsx)('rect', {
                x: 40,
                y: 138,
                width: 144,
                height: 20,
                rx: 10,
                opacity: 0.7
            }),
            (0, o.jsx)('circle', {
                cx: 16,
                cy: 148,
                r: 16,
                opacity: 0.7
            }),
            (0, o.jsx)('rect', {
                x: 40,
                y: 182,
                width: 144,
                height: 20,
                rx: 10,
                opacity: 0.6
            }),
            (0, o.jsx)('circle', {
                cx: 16,
                cy: 192,
                r: 16,
                opacity: 0.6
            }),
            (0, o.jsx)('rect', {
                x: 40,
                y: 226,
                width: 144,
                height: 20,
                rx: 10,
                opacity: 0.5
            }),
            (0, o.jsx)('circle', {
                cx: 16,
                cy: 236,
                r: 16,
                opacity: 0.5
            }),
            (0, o.jsx)('rect', {
                x: 40,
                y: 270,
                width: 144,
                height: 20,
                rx: 10,
                opacity: 0.4
            }),
            (0, o.jsx)('circle', {
                cx: 16,
                cy: 280,
                r: 16,
                opacity: 0.4
            }),
            (0, o.jsx)('rect', {
                x: 40,
                y: 314,
                width: 144,
                height: 20,
                rx: 10,
                opacity: 0.3
            }),
            (0, o.jsx)('circle', {
                cx: 16,
                cy: 324,
                r: 16,
                opacity: 0.3
            }),
            (0, o.jsx)('rect', {
                x: 40,
                y: 358,
                width: 144,
                height: 20,
                rx: 10,
                opacity: 0.2
            }),
            (0, o.jsx)('circle', {
                cx: 16,
                cy: 368,
                r: 16,
                opacity: 0.2
            }),
            (0, o.jsx)('rect', {
                x: 40,
                y: 402,
                width: 144,
                height: 20,
                rx: 10,
                opacity: 0.1
            }),
            (0, o.jsx)('circle', {
                cx: 16,
                cy: 412,
                r: 16,
                opacity: 0.1
            })
        ]
    });
});
class G extends (l = a.Component) {
    static getDerivedStateFromProps(e) {
        let { children: t, privateChannelIds: n } = e;
        if (null == t)
            return {
                preRenderedChildren: 0,
                nonNullChildren: [],
                totalRowCount: n.length
            };
        {
            let e = t.filter((e) => null != e),
                i = e.length;
            return {
                preRenderedChildren: i,
                nonNullChildren: e,
                totalRowCount: i + n.length
            };
        }
    }
    componentDidMount() {
        let { selectedChannelId: e, homeLink: t } = this.props;
        null != e && null != t && t.indexOf(e) >= 0 && this.scrollToChannel(e), this.reportAnalytics();
    }
    shouldComponentUpdate(e) {
        return !(0, p.Z)(this.props, e, ['children']);
    }
    componentDidUpdate(e) {
        let { selectedChannelId: t, homeLink: n } = this.props;
        null != t && t !== e.selectedChannelId ? this.scrollToChannel(t) : null == t && n !== e.homeLink && this.scrollToChannel(null), this.reportAnalytics();
    }
    scrollToChannel(e) {
        if (null == this._list) return;
        let { padding: t } = this.props,
            { preRenderedChildren: n } = this.state,
            i = null != e ? this.props.privateChannelIds.indexOf(e) : -1,
            l = 0;
        i < 0 || null == e
            ? this._list.scrollTo({ to: l })
            : ((l += 44 * (i + n) + t),
              this._list.scrollIntoViewRect({
                  start: Math.max(l - 8, 0),
                  end: l + 44 + 8
              }));
    }
    render() {
        let { privateChannelIds: e, padding: t } = this.props,
            { preRenderedChildren: n } = this.state;
        return (0, o.jsx)(u.SJ, {
            children: (i) => {
                let { ref: l, role: r, ...a } = i;
                return (0, o.jsx)(m.FocusJumpSection, {
                    children: (i) =>
                        (0, o.jsx)(m.List, {
                            fade: !0,
                            innerRole: r,
                            innerAriaLabel: L.intl.string(L.t.YUU0RE),
                            innerTag: 'ul',
                            ref: (e) => {
                                var t;
                                (this._list = e), (this.props.listRef.current = e), (l.current = null !== (t = null == e ? void 0 : e.getScrollerNode()) && void 0 !== t ? t : null);
                            },
                            onScroll: this.handleScroll,
                            className: D.scroller,
                            sectionHeight: this.getSectionHeight,
                            paddingTop: t,
                            paddingBottom: 8,
                            rowHeight: this.getRowHeight,
                            renderSection: this.renderSection,
                            renderRow: this.renderRow,
                            sections: [n, Math.max(e.length, 1)],
                            ...a,
                            ...i
                        })
                });
            }
        });
    }
    constructor(...e) {
        super(...e),
            O(this, 'state', {
                initialized: !1,
                preRenderedChildren: 0,
                totalRowCount: 0,
                nonNullChildren: []
            }),
            O(this, '_list', null),
            O(this, 'hasReportedAnalytics', !1),
            O(this, 'reportAnalytics', () => {
                var e;
                if (this.hasReportedAnalytics) return;
                let t = null === (e = this._list) || void 0 === e ? void 0 : e.getScrollerState();
                if (null == t) return;
                let { privateChannelIds: n, channels: i } = this.props;
                if (0 === n.length) return;
                let l = a.Children.count(this.props.children);
                if (null == t) return;
                let r = Math.round((t.offsetHeight - 44 * l) / 44),
                    o = r > n.length ? n.slice(0, r + 1) : n,
                    s = o.map((e) => (null != i[e] ? i[e].getRecipientId() : null)),
                    c = n.some((e) => (0, _.Z)(e)),
                    u = {
                        num_users_visible: o.length,
                        num_users_visible_with_mobile_indicator: s.filter((e) => null != e && P.Z.isMobileOnline(e)).length
                    };
                (this.hasReportedAnalytics = !0),
                    C.ZP.trackWithMetadata(w.rMx.DM_LIST_VIEWED, {
                        ...u,
                        ...(0, v.X)(),
                        visible_user_ids: s.filter((e) => null != e),
                        changelog_dm_visible: c
                    });
            }),
            O(this, 'getSectionHeight', (e) => {
                let { showDMHeader: t, isVisualRefreshEnabled: n } = this.props;
                return 0 === e ? 0 : t ? (n ? 24 : 40) : 0;
            }),
            O(
                this,
                'handleScroll',
                c()(() => {
                    if (null != this._list) {
                        let e = this._list.getScrollerNode();
                        null != e && f.Z.updateChannelListScroll(w.ME, e.scrollTop);
                    }
                }, 100)
            ),
            O(this, 'renderDM', (e, t) => {
                let { privateChannelIds: n, channels: i, selectedChannelId: l } = this.props,
                    { totalRowCount: r, preRenderedChildren: a } = this.state,
                    s = i[n[t]];
                return null == s
                    ? null
                    : (0, o.jsx)(
                          M.ZP,
                          {
                              channel: s,
                              selected: s.id === l,
                              'aria-posinset': a + t + 1,
                              'aria-setsize': r
                          },
                          s.id
                      );
            }),
            O(this, 'renderChild', (e) => {
                let { nonNullChildren: t, totalRowCount: n } = this.state,
                    i = t[e];
                return a.isValidElement(i)
                    ? a.cloneElement(i, {
                          'aria-setsize': n,
                          'aria-posinset': e + 1
                      })
                    : i;
            }),
            O(this, 'renderRow', (e) => {
                let { section: t, row: n } = e,
                    { privateChannelIds: i } = this.props;
                return 0 === t ? this.renderChild(n) : 0 === n && 0 === i.length ? (0, o.jsx)(k, {}, 'no-private-channels') : this.renderDM(t, n);
            }),
            O(this, 'renderSection', (e) => {
                let { section: t } = e,
                    { showDMHeader: n } = this.props;
                return 0 !== t && n
                    ? (0, o.jsxs)(
                          x.Z,
                          {
                              className: D.privateChannelsHeaderContainer,
                              children: [
                                  (0, o.jsx)('span', {
                                      className: D.headerText,
                                      children: L.intl.string(L.t.YUU0RE)
                                  }),
                                  (0, o.jsx)(Z.Z, {
                                      tooltip: L.intl.string(L.t['6Urw1t']),
                                      tooltipPosition: 'top',
                                      popoutAlign: 'left',
                                      iconClassName: D.privateChannelRecipientsInviteButtonIcon,
                                      icon: m.PlusSmallIcon,
                                      subscribeToGlobalHotkey: !0
                                  })
                              ]
                          },
                          t
                      )
                    : null;
            }),
            O(this, 'getRowHeight', (e, t) => {
                let { privateChannelIds: n, isVisualRefreshEnabled: i, channels: l } = this.props,
                    r = 44;
                if (i) {
                    if (0 === e) {
                        let { nonNullChildren: e } = this.state,
                            n = e[t];
                        if (a.isValidElement(n)) {
                            var o;
                            (null === (o = n.key) || void 0 === o ? void 0 : o.startsWith('section-divider')) ? (r = 25) : 'dm-quick-launcher' === n.key && (r = 91);
                        }
                    } else {
                        let e = l[n[t]];
                        r = (null == e ? void 0 : e.isGroupDM()) ? 50 : 48;
                    }
                }
                return 1 === e && 0 === t && 0 === n.length ? 428 : r;
            });
    }
}
O(G, 'defaultProps', { padding: 8 });
t.Z = (e) => {
    let t = (0, b.Q3)('ConnectedPrivateChannelsList'),
        { version: n, theme: i, children: l, showDMHeader: r } = e,
        s = a.Children.count(l),
        c = A.Z.getMutablePrivateChannels(),
        p = (0, y.k1)(c),
        m = (0, h.Wu)(
            [R.Z, N.Z, T.Z],
            () => {
                let e = R.Z.getPrivateChannelIds();
                return (0, y.tU)(e, [N.Z, T.Z]);
            },
            []
        );
    (0, S.z)(E.R);
    let f = (0, h.cj)([g.Z, j.Z, A.Z], () => ({
            theme: j.Z.darkSidebar ? w.BRd.DARK : i,
            keyboardModeEnabled: g.Z.keyboardModeEnabled,
            version: null != n ? ''.concat(n, ':').concat(A.Z.getPrivateChannelsVersion()) : A.Z.getPrivateChannelsVersion()
        })),
        C = a.useRef(null),
        v = a.useCallback((e) => {
            let t = C.current,
                n = document.querySelector(e);
            null != t &&
                null != n &&
                t.scrollIntoViewNode({
                    node: n,
                    callback: () => {
                        requestAnimationFrame(() => {
                            var t;
                            return null === (t = document.querySelector(e)) || void 0 === t ? void 0 : t.focus({ preventScroll: !0 });
                        });
                    }
                });
        }, []),
        _ = a.useCallback(
            () =>
                new Promise((e) => {
                    let t = C.current;
                    if (null == t) return e();
                    t.scrollToTop({ callback: () => requestAnimationFrame(() => e()) });
                }),
            []
        ),
        x = a.useCallback(
            () =>
                new Promise((e) => {
                    let t = C.current;
                    if (null == t) return e();
                    t.scrollToBottom({
                        callback() {
                            requestAnimationFrame(() => setTimeout(e, 100));
                        }
                    });
                }),
            []
        ),
        Z = (0, I.Dt)(),
        P = (0, d.ZP)({
            id: 'private-channels-'.concat(Z),
            isEnabled: f.keyboardModeEnabled,
            scrollToStart: _,
            scrollToEnd: x,
            defaultFocused: (s + (r ? 1 : 0)).toString(),
            setFocus: v
        });
    return (0, o.jsx)(u.bG, {
        navigator: P,
        children: (0, o.jsx)(G, {
            isVisualRefreshEnabled: t,
            channels: p,
            privateChannelIds: m,
            listRef: C,
            theme: i,
            version: n,
            ...e,
            children: l,
            ...f
        })
    });
};
