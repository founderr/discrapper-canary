n(47120);
var i,
    l,
    a,
    r = n(200651),
    s = n(192379),
    o = n(299608),
    c = n.n(o),
    u = n(91192),
    d = n(924826),
    h = n(442837),
    p = n(902704),
    f = n(481060),
    _ = n(925549),
    m = n(607070),
    g = n(367907),
    C = n(453542),
    I = n(702321),
    E = n(485267),
    N = n(82295),
    x = n(313201),
    S = n(860144),
    v = n(214852),
    Z = n(518311),
    T = n(355298),
    b = n(869404),
    A = n(333984),
    M = n(249978),
    R = n(210887),
    L = n(592125),
    y = n(158776),
    P = n(55589),
    O = n(515753),
    j = n(981631),
    D = n(689938),
    w = n(156762);
function U(e, t, n) {
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
((a = i || (i = {}))[(a.PAGES = 0)] = 'PAGES'), (a[(a.DMS = 1)] = 'DMS');
let G = s.memo(function () {
    return (0, r.jsxs)('svg', {
        width: '184',
        height: '428',
        viewBox: '0 0 184 428',
        className: w.empty,
        children: [
            (0, r.jsx)('rect', {
                x: 40,
                y: 6,
                width: 144,
                height: 20,
                rx: 10
            }),
            (0, r.jsx)('circle', {
                cx: 16,
                cy: 16,
                r: 16
            }),
            (0, r.jsx)('rect', {
                x: 40,
                y: 50,
                width: 144,
                height: 20,
                rx: 10,
                opacity: 0.9
            }),
            (0, r.jsx)('circle', {
                cx: 16,
                cy: 60,
                r: 16,
                opacity: 0.9
            }),
            (0, r.jsx)('rect', {
                x: 40,
                y: 94,
                width: 144,
                height: 20,
                rx: 10,
                opacity: 0.8
            }),
            (0, r.jsx)('circle', {
                cx: 16,
                cy: 104,
                r: 16,
                opacity: 0.8
            }),
            (0, r.jsx)('rect', {
                x: 40,
                y: 138,
                width: 144,
                height: 20,
                rx: 10,
                opacity: 0.7
            }),
            (0, r.jsx)('circle', {
                cx: 16,
                cy: 148,
                r: 16,
                opacity: 0.7
            }),
            (0, r.jsx)('rect', {
                x: 40,
                y: 182,
                width: 144,
                height: 20,
                rx: 10,
                opacity: 0.6
            }),
            (0, r.jsx)('circle', {
                cx: 16,
                cy: 192,
                r: 16,
                opacity: 0.6
            }),
            (0, r.jsx)('rect', {
                x: 40,
                y: 226,
                width: 144,
                height: 20,
                rx: 10,
                opacity: 0.5
            }),
            (0, r.jsx)('circle', {
                cx: 16,
                cy: 236,
                r: 16,
                opacity: 0.5
            }),
            (0, r.jsx)('rect', {
                x: 40,
                y: 270,
                width: 144,
                height: 20,
                rx: 10,
                opacity: 0.4
            }),
            (0, r.jsx)('circle', {
                cx: 16,
                cy: 280,
                r: 16,
                opacity: 0.4
            }),
            (0, r.jsx)('rect', {
                x: 40,
                y: 314,
                width: 144,
                height: 20,
                rx: 10,
                opacity: 0.3
            }),
            (0, r.jsx)('circle', {
                cx: 16,
                cy: 324,
                r: 16,
                opacity: 0.3
            }),
            (0, r.jsx)('rect', {
                x: 40,
                y: 358,
                width: 144,
                height: 20,
                rx: 10,
                opacity: 0.2
            }),
            (0, r.jsx)('circle', {
                cx: 16,
                cy: 368,
                r: 16,
                opacity: 0.2
            }),
            (0, r.jsx)('rect', {
                x: 40,
                y: 402,
                width: 144,
                height: 20,
                rx: 10,
                opacity: 0.1
            }),
            (0, r.jsx)('circle', {
                cx: 16,
                cy: 412,
                r: 16,
                opacity: 0.1
            })
        ]
    });
});
class k extends (l = s.Component) {
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
        return (0, r.jsx)(u.SJ, {
            children: (i) => {
                let { ref: l, role: a, ...s } = i;
                return (0, r.jsx)(f.FocusJumpSection, {
                    children: (i) =>
                        (0, r.jsx)(f.List, {
                            fade: !0,
                            innerRole: a,
                            innerAriaLabel: D.Z.Messages.DIRECT_MESSAGES,
                            innerTag: 'ul',
                            ref: (e) => {
                                var t;
                                (this._list = e), (this.props.listRef.current = e), (l.current = null !== (t = null == e ? void 0 : e.getScrollerNode()) && void 0 !== t ? t : null);
                            },
                            onScroll: this.handleScroll,
                            className: w.scroller,
                            sectionHeight: this.getSectionHeight,
                            paddingTop: t,
                            paddingBottom: 8,
                            rowHeight: this.getRowHeight,
                            renderSection: this.renderSection,
                            renderRow: this.renderRow,
                            sections: [n, Math.max(e.length, 1)],
                            ...s,
                            ...i
                        })
                });
            }
        });
    }
    constructor(...e) {
        super(...e),
            U(this, 'state', {
                initialized: !1,
                preRenderedChildren: 0,
                totalRowCount: 0,
                nonNullChildren: []
            }),
            U(this, '_list', null),
            U(this, 'hasReportedAnalytics', !1),
            U(this, 'reportAnalytics', () => {
                var e;
                if (this.hasReportedAnalytics) return;
                let t = null === (e = this._list) || void 0 === e ? void 0 : e.getScrollerState();
                if (null == t) return;
                let { privateChannelIds: n, channels: i } = this.props;
                if (0 === n.length) return;
                let l = s.Children.count(this.props.children);
                if (null == t) return;
                let a = Math.round((t.offsetHeight - 44 * l) / 44),
                    r = a > n.length ? n.slice(0, a + 1) : n,
                    o = r.map((e) => (null != i[e] ? i[e].getRecipientId() : null)),
                    c = n.some((e) => (0, I.Z)(e)),
                    u = {
                        num_users_visible: r.length,
                        num_users_visible_with_mobile_indicator: o.filter((e) => null != e && y.Z.isMobileOnline(e)).length
                    };
                (this.hasReportedAnalytics = !0),
                    g.ZP.trackWithMetadata(j.rMx.DM_LIST_VIEWED, {
                        ...u,
                        ...(0, C.X)(),
                        visible_user_ids: o.filter((e) => null != e),
                        changelog_dm_visible: c
                    });
            }),
            U(this, 'getSectionHeight', (e) => {
                let { showDMHeader: t } = this.props;
                return 0 === e ? 0 : t ? 40 : 0;
            }),
            U(
                this,
                'handleScroll',
                c()(() => {
                    if (null != this._list) {
                        let e = this._list.getScrollerNode();
                        null != e && _.Z.updateChannelListScroll(j.ME, e.scrollTop);
                    }
                }, 100)
            ),
            U(this, 'renderDM', (e, t) => {
                let { privateChannelIds: n, channels: i, selectedChannelId: l } = this.props,
                    { totalRowCount: a, preRenderedChildren: s } = this.state,
                    o = i[n[t]];
                return null == o
                    ? null
                    : (0, r.jsx)(
                          O.ZP,
                          {
                              channel: o,
                              selected: o.id === l,
                              'aria-posinset': s + t + 1,
                              'aria-setsize': a
                          },
                          o.id
                      );
            }),
            U(this, 'renderChild', (e) => {
                let { nonNullChildren: t, totalRowCount: n } = this.state,
                    i = t[e];
                return s.isValidElement(i)
                    ? s.cloneElement(i, {
                          'aria-setsize': n,
                          'aria-posinset': e + 1
                      })
                    : i;
            }),
            U(this, 'renderRow', (e) => {
                let { section: t, row: n } = e,
                    { privateChannelIds: i } = this.props;
                return 0 === t ? this.renderChild(n) : 0 === n && 0 === i.length ? (0, r.jsx)(G, {}, 'no-private-channels') : this.renderDM(t, n);
            }),
            U(this, 'renderSection', (e) => {
                let { section: t } = e,
                    { showDMHeader: n } = this.props;
                return 0 !== t && n
                    ? (0, r.jsxs)(
                          N.Z,
                          {
                              className: w.privateChannelsHeaderContainer,
                              children: [
                                  (0, r.jsx)('span', {
                                      className: w.headerText,
                                      children: D.Z.Messages.DIRECT_MESSAGES
                                  }),
                                  (0, r.jsx)(Z.Z, {
                                      tooltip: D.Z.Messages.CREATE_DM,
                                      tooltipPosition: 'top',
                                      popoutAlign: 'left',
                                      iconClassName: w.privateChannelRecipientsInviteButtonIcon,
                                      icon: f.PlusSmallIcon,
                                      subscribeToGlobalHotkey: !0
                                  })
                              ]
                          },
                          t
                      )
                    : null;
            }),
            U(this, 'getRowHeight', (e, t) => {
                let { privateChannelIds: n } = this.props;
                return 1 === e && 0 === t && 0 === n.length ? 428 : 44;
            });
    }
}
U(k, 'defaultProps', { padding: 8 });
t.Z = (e) => {
    let { version: t, theme: n, children: i, showDMHeader: l } = e,
        a = s.Children.count(i),
        o = L.Z.getMutablePrivateChannels(),
        c = (0, b.k1)(o),
        p = (0, h.Wu)(
            [P.Z, T.Z, A.Z],
            () => {
                let e = P.Z.getPrivateChannelIds();
                return (0, b.tU)(e, [T.Z, A.Z]);
            },
            []
        );
    (0, v.z)(S.R);
    let { recentActivityStatusEnabled: f } = (0, M.U)({ location: 'PrivateChannelsList' });
    s.useEffect(() => {
        f && (0, E.Jn)();
    }, [f]);
    let _ = (0, h.cj)([m.Z, R.Z, L.Z], () => ({
            theme: R.Z.darkSidebar ? j.BRd.DARK : n,
            keyboardModeEnabled: m.Z.keyboardModeEnabled,
            version: null != t ? ''.concat(t, ':').concat(L.Z.getPrivateChannelsVersion()) : L.Z.getPrivateChannelsVersion()
        })),
        g = s.useRef(null),
        C = s.useCallback((e) => {
            let t = g.current,
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
        I = s.useCallback(
            () =>
                new Promise((e) => {
                    let t = g.current;
                    if (null == t) return e();
                    t.scrollToTop({ callback: () => requestAnimationFrame(() => e()) });
                }),
            []
        ),
        N = s.useCallback(
            () =>
                new Promise((e) => {
                    let t = g.current;
                    if (null == t) return e();
                    t.scrollToBottom({
                        callback() {
                            requestAnimationFrame(() => setTimeout(e, 100));
                        }
                    });
                }),
            []
        ),
        Z = (0, x.Dt)(),
        y = (0, d.ZP)({
            id: 'private-channels-'.concat(Z),
            isEnabled: _.keyboardModeEnabled,
            scrollToStart: I,
            scrollToEnd: N,
            defaultFocused: (a + (l ? 1 : 0)).toString(),
            setFocus: C
        });
    return (0, r.jsx)(u.bG, {
        navigator: y,
        children: (0, r.jsx)(k, {
            channels: c,
            privateChannelIds: p,
            listRef: g,
            theme: n,
            version: t,
            ...e,
            children: i,
            ..._
        })
    });
};
