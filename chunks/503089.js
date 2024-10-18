n.d(t, {
    $x: function () {
        return C;
    },
    d7: function () {
        return E;
    },
    w6: function () {
        return N;
    }
}),
    n(653041),
    n(390547),
    n(47120);
var i = n(735250),
    s = n(470079),
    r = n(990547),
    l = n(692547),
    o = n(481060),
    a = n(213609),
    c = n(252618),
    u = n(243778),
    d = n(126848),
    h = n(207874),
    m = n(585483),
    p = n(960048),
    f = n(410575),
    x = n(493544),
    b = n(981631),
    v = n(689938),
    S = n(11377);
function j(e, t, n) {
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
let g = Object.freeze({
        shouldPreventNavigation: !1,
        onPreventNavigation: null,
        sidebarOpen: !0
    }),
    C = 1.4,
    N = 15,
    E = 2;
function T(e) {
    var t, n;
    let { section: s, setPreventNavigation: l, scrollerRef: o } = e;
    (0, a.Z)({
        type: r.ImpressionTypes.PANE,
        name: null == s ? void 0 : s.impressionName,
        properties: null == s ? void 0 : s.impressionProperties
    });
    let c = null !== (t = null == s ? void 0 : s.element) && void 0 !== t ? t : b.VqG,
        u = null !== (n = null == s ? void 0 : s.elementProps) && void 0 !== n ? n : {};
    return (0, i.jsx)(f.Z, {
        section: s.section,
        children: (0, i.jsx)(c, {
            ...u,
            setPreventNavigation: l,
            refToScroller: o
        })
    });
}
class y extends s.PureComponent {
    componentDidMount() {
        this.getPredicateSections().forEach((e) => {
            let { notice: t } = e;
            if (null == t) return;
            let { stores: n } = t;
            null != n &&
                n.forEach((e) => {
                    e.addChangeListener(this.handleNoticeStoreUpdate), this._subscribedStores.push(e);
                });
        });
    }
    componentDidUpdate(e) {
        let { section: t } = e;
        t !== this.props.section && (this._intensity = C);
    }
    componentWillUnmount() {
        (this._unmounted = !0),
            this._subscribedStores.forEach((e) => e.removeChangeListener(this.handleNoticeStoreUpdate)),
            this.props.sections.forEach((e) => {
                var t;
                return null === (t = e.onSettingsClose) || void 0 === t ? void 0 : t.call(e);
            });
    }
    getPredicateSections() {
        return this.props.sections.filter((e) => null == e.predicate || e.predicate());
    }
    validNavigation() {
        var e;
        let { section: t } = this.props,
            { notice: n } = null !== (e = this.getPredicateSections().find((e) => t === e.section)) && void 0 !== e ? e : {};
        return null != n && n.stores.some((e) => e.showNotice() && !(null != e.canCloseEarly && e.canCloseEarly()))
            ? (m.S.dispatch(b.CkL.SHAKE_APP, {
                  duration: 300,
                  intensity: this._intensity
              }),
              (this._intensity = Math.min(this._intensity + E, N)),
              m.S.dispatch(b.CkL.EMPHASIZE_NOTICE),
              !1)
            : ((this._intensity = C), !0);
    }
    renderSidebar(e) {
        let { section: t, title: n, isUserSettingsSearchEnabled: s } = this.props,
            r = e.flatMap((e) => e.newIndicatorDismissibleContentTypes).filter((e) => null != e),
            l = null != t ? t : e[0].section;
        return (0, i.jsx)(u.ZP, {
            contentTypes: r,
            children: (t) => {
                let { visibleContent: r } = t;
                return (0, i.jsxs)(o.TabBar, {
                    selectedItem: l,
                    onItemSelect: this.handleSetSection,
                    orientation: 'vertical',
                    'aria-label': n,
                    children: [
                        s ? (0, i.jsx)(h.Z, { style: S.searchBar }) : null,
                        e.map((e, t) => {
                            if (null != e.tabPredicate && !e.tabPredicate()) return null;
                            switch (e.section) {
                                case x.ID.HEADER:
                                    return (0, i.jsx)(o.TabBar.Header, { children: e.label }, t);
                                case x.ID.DIVIDER:
                                    return (0, i.jsx)(o.TabBar.Separator, {}, t);
                                case x.ID.CUSTOM:
                                    var n;
                                    let s = null !== (n = e.element) && void 0 !== n ? n : b.VqG;
                                    return (0, i.jsx)(s, {}, t);
                                default:
                                    return this.renderSettingsSectionTabBarItem(e, l === e.section, r);
                            }
                        })
                    ]
                });
            }
        });
    }
    renderNotice(e) {
        let { theme: t } = this.props;
        if (null == e || null == e.notice) return null;
        let { stores: n, element: s } = e.notice;
        return null == n || n.some((e) => e.showNotice()) ? (0, i.jsx)(s, { theme: t }) : null;
    }
    render() {
        var e;
        let { sidebarTheme: t, section: n, title: s, onClose: r, hideSidebar: l } = this.props,
            o = this.getPredicateSections(),
            a = o.find((e) => e.section === n);
        if (null == a || null == n) return null;
        let u = null !== (e = 'string' == typeof a.label ? a.label : a.ariaLabel) && void 0 !== e ? e : s;
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(c.yY, {
                    location: s,
                    subsection: u
                }),
                (0, i.jsx)(x.ZP, {
                    sidebarTheme: t,
                    scrollerRef: this.scrollerRef,
                    section: n,
                    sidebar: this.renderSidebar(o),
                    content: (0, i.jsx)(T, {
                        section: a,
                        setPreventNavigation: this.setPreventNavigation,
                        scrollerRef: this.scrollerRef
                    }),
                    mobileSidebarOpen: this.state.sidebarOpen,
                    hideSidebar: l,
                    toggleSidebar: () => this.setState({ sidebarOpen: !0 }),
                    contentType: a.type,
                    notice: this.renderNotice(a),
                    closeAction: null != r ? this.handleClose : void 0
                })
            ]
        });
    }
    constructor(...e) {
        super(...e),
            j(this, '_unmounted', !1),
            j(this, '_intensity', C),
            j(this, '_subscribedStores', []),
            j(this, 'scrollerRef', s.createRef()),
            j(this, 'state', {
                ...g,
                sidebarOpen: this.props.section !== b.oAB.SUBSCRIPTIONS && this.props.section !== b.oAB.PROFILE_CUSTOMIZATION
            }),
            j(this, 'setPreventNavigation', (e, t) => {
                this.setState({
                    shouldPreventNavigation: e,
                    onPreventNavigation: t
                });
            }),
            j(this, 'handleSetSection', (e) => {
                let { onSetSection: t, sections: n } = this.props,
                    { shouldPreventNavigation: i, onPreventNavigation: s } = this.state,
                    r = () => {
                        var i;
                        null == t || t(e);
                        let { notice: s } = null !== (i = n.find((t) => e === t.section)) && void 0 !== i ? i : {},
                            r = null != s ? s.stores : null;
                        null != r &&
                            r.forEach((e) => {
                                !this._subscribedStores.includes(e) && (e.addChangeListener(this.handleNoticeStoreUpdate), this._subscribedStores.push(e));
                            }),
                            this.setState({
                                ...g,
                                sidebarOpen: !1
                            });
                    };
                this.validNavigation() &&
                    !i &&
                    (r(),
                    p.Z.addBreadcrumb({
                        category: 'settings',
                        message: 'Set section: '.concat(e)
                    })),
                    i && null != s && s(r);
            }),
            j(this, 'handleClose', () => {
                if (this.validNavigation()) {
                    let { onClose: e } = this.props;
                    null == e || e();
                }
            }),
            j(this, 'handleNoticeStoreUpdate', () => {
                if (!this._unmounted) (this._intensity = C), this.forceUpdate();
            }),
            j(this, 'renderSettingsSectionTabBarItem', (e, t, n) => {
                let { section: s, label: r = null, ariaLabel: a, onClick: c, color: u, icon: h, className: m, newIndicator: p, newIndicatorDismissibleContentTypes: f, badgeCount: x, searchFilterCount: j } = e,
                    g = null;
                null != j && j > 0
                    ? (g = (0, i.jsx)(o.NumberBadge, {
                          count: j,
                          disableColor: !0,
                          className: S.searchFilterCount
                      }))
                    : s === b.oAB.ACCOUNT && this.props.isEligibleForPomelo
                      ? (g = (0, i.jsx)(o.CircleWarningIcon, {
                            size: 'custom',
                            width: 20,
                            height: 20,
                            color: l.Z.colors.STATUS_WARNING.css
                        }))
                      : null != e.decoration
                        ? (g = (0, i.jsx)(o.Text, {
                              variant: 'text-md/normal',
                              color: 'text-muted',
                              children: e.decoration
                          }))
                        : null != n && (null == f ? void 0 : f.includes(n)) && !t
                          ? (g = null != p ? p : (0, i.jsx)(o.TextBadge, { text: v.Z.Messages.NEW }))
                          : null != h
                            ? (g = h)
                            : null != x && x > 0 && (g = (0, i.jsx)(o.NumberBadge, { count: x }));
                let C =
                    s === b.oAB.PREMIUM
                        ? (0, i.jsx)(d.Z, {
                              label: r,
                              isSelected: t,
                              decoration: g
                          })
                        : null == g
                          ? r
                          : (0, i.jsxs)('div', {
                                className: S.tabBarItemContainer,
                                children: [r, g]
                            });
                return (0, i.jsx)(
                    o.TabBar.Item,
                    {
                        color: u,
                        id: s,
                        onClick: c,
                        className: m,
                        'aria-label': a,
                        children: C
                    },
                    s
                );
            });
    }
}
t.ZP = y;
