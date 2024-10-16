n.d(t, {
    $x: function () {
        return T;
    },
    d7: function () {
        return C;
    },
    w6: function () {
        return g;
    }
}),
    n(653041),
    n(390547),
    n(47120);
var s = n(735250),
    i = n(470079),
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
    S = n(493544),
    N = n(981631),
    b = n(689938),
    x = n(11377);
function v(e, t, n) {
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
let _ = Object.freeze({
        shouldPreventNavigation: !1,
        onPreventNavigation: null,
        sidebarOpen: !0
    }),
    T = 1.4,
    g = 15,
    C = 2;
function j(e) {
    var t, n;
    let { section: i, setPreventNavigation: l, scrollerRef: o } = e;
    (0, a.Z)({
        type: r.ImpressionTypes.PANE,
        name: null == i ? void 0 : i.impressionName,
        properties: null == i ? void 0 : i.impressionProperties
    });
    let c = null !== (t = null == i ? void 0 : i.element) && void 0 !== t ? t : N.VqG,
        u = null !== (n = null == i ? void 0 : i.elementProps) && void 0 !== n ? n : {};
    return (0, s.jsx)(f.Z, {
        section: i.section,
        children: (0, s.jsx)(c, {
            ...u,
            setPreventNavigation: l,
            refToScroller: o
        })
    });
}
class E extends i.PureComponent {
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
        t !== this.props.section && (this._intensity = T);
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
            ? (m.S.dispatch(N.CkL.SHAKE_APP, {
                  duration: 300,
                  intensity: this._intensity
              }),
              (this._intensity = Math.min(this._intensity + C, g)),
              m.S.dispatch(N.CkL.EMPHASIZE_NOTICE),
              !1)
            : ((this._intensity = T), !0);
    }
    renderSidebar(e) {
        let { section: t, title: n, isUserSettingsSearchEnabled: i } = this.props,
            r = e.flatMap((e) => e.newIndicatorDismissibleContentTypes).filter((e) => null != e),
            l = null != t ? t : e[0].section;
        return (0, s.jsx)(u.ZP, {
            contentTypes: r,
            children: (t) => {
                let { visibleContent: r } = t;
                return (0, s.jsxs)(o.TabBar, {
                    selectedItem: l,
                    onItemSelect: this.handleSetSection,
                    orientation: 'vertical',
                    'aria-label': n,
                    children: [
                        i ? (0, s.jsx)(h.Z, { style: x.searchBar }) : null,
                        e.map((e, t) => {
                            if (null != e.tabPredicate && !e.tabPredicate()) return null;
                            switch (e.section) {
                                case S.ID.HEADER:
                                    return (0, s.jsx)(o.TabBar.Header, { children: e.label }, t);
                                case S.ID.DIVIDER:
                                    return (0, s.jsx)(o.TabBar.Separator, {}, t);
                                case S.ID.CUSTOM:
                                    var n;
                                    let i = null !== (n = e.element) && void 0 !== n ? n : N.VqG;
                                    return (0, s.jsx)(i, {}, t);
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
        let { stores: n, element: i } = e.notice;
        return null == n || n.some((e) => e.showNotice()) ? (0, s.jsx)(i, { theme: t }) : null;
    }
    render() {
        var e;
        let { sidebarTheme: t, section: n, title: i, onClose: r, hideSidebar: l } = this.props,
            o = this.getPredicateSections(),
            a = o.find((e) => e.section === n);
        if (null == a || null == n) return null;
        let u = null !== (e = 'string' == typeof a.label ? a.label : a.ariaLabel) && void 0 !== e ? e : i;
        return (0, s.jsxs)(s.Fragment, {
            children: [
                (0, s.jsx)(c.yY, {
                    location: i,
                    subsection: u
                }),
                (0, s.jsx)(S.ZP, {
                    sidebarTheme: t,
                    scrollerRef: this.scrollerRef,
                    section: n,
                    sidebar: this.renderSidebar(o),
                    content: (0, s.jsx)(j, {
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
            v(this, '_unmounted', !1),
            v(this, '_intensity', T),
            v(this, '_subscribedStores', []),
            v(this, 'scrollerRef', i.createRef()),
            v(this, 'state', {
                ..._,
                sidebarOpen: this.props.section !== N.oAB.SUBSCRIPTIONS && this.props.section !== N.oAB.PROFILE_CUSTOMIZATION
            }),
            v(this, 'setPreventNavigation', (e, t) => {
                this.setState({
                    shouldPreventNavigation: e,
                    onPreventNavigation: t
                });
            }),
            v(this, 'handleSetSection', (e) => {
                let { onSetSection: t, sections: n } = this.props,
                    { shouldPreventNavigation: s, onPreventNavigation: i } = this.state,
                    r = () => {
                        var s;
                        null == t || t(e);
                        let { notice: i } = null !== (s = n.find((t) => e === t.section)) && void 0 !== s ? s : {},
                            r = null != i ? i.stores : null;
                        null != r &&
                            r.forEach((e) => {
                                !this._subscribedStores.includes(e) && (e.addChangeListener(this.handleNoticeStoreUpdate), this._subscribedStores.push(e));
                            }),
                            this.setState({
                                ..._,
                                sidebarOpen: !1
                            });
                    };
                this.validNavigation() &&
                    !s &&
                    (r(),
                    p.Z.addBreadcrumb({
                        category: 'settings',
                        message: 'Set section: '.concat(e)
                    })),
                    s && null != i && i(r);
            }),
            v(this, 'handleClose', () => {
                if (this.validNavigation()) {
                    let { onClose: e } = this.props;
                    null == e || e();
                }
            }),
            v(this, 'handleNoticeStoreUpdate', () => {
                if (!this._unmounted) (this._intensity = T), this.forceUpdate();
            }),
            v(this, 'renderSettingsSectionTabBarItem', (e, t, n) => {
                let { section: i, label: r = null, ariaLabel: a, onClick: c, color: u, icon: h, className: m, newIndicator: p, newIndicatorDismissibleContentTypes: f, badgeCount: S, searchFilterCount: v } = e,
                    _ = null;
                null != v && v > 0
                    ? (_ = (0, s.jsx)(o.NumberBadge, {
                          count: v,
                          disableColor: !0,
                          className: x.searchFilterCount
                      }))
                    : i === N.oAB.ACCOUNT && this.props.isEligibleForPomelo
                      ? (_ = (0, s.jsx)(o.CircleWarningIcon, {
                            size: 'custom',
                            width: 20,
                            height: 20,
                            color: l.Z.colors.STATUS_WARNING.css
                        }))
                      : null != e.decoration
                        ? (_ = (0, s.jsx)(o.Text, {
                              variant: 'text-md/normal',
                              color: 'text-muted',
                              children: e.decoration
                          }))
                        : null != n && (null == f ? void 0 : f.includes(n)) && !t
                          ? (_ = null != p ? p : (0, s.jsx)(o.TextBadge, { text: b.Z.Messages.NEW }))
                          : null != h
                            ? (_ = h)
                            : null != S && S > 0 && (_ = (0, s.jsx)(o.NumberBadge, { count: S }));
                let T =
                    i === N.oAB.PREMIUM
                        ? (0, s.jsx)(d.Z, {
                              label: r,
                              isSelected: t,
                              decoration: _
                          })
                        : null == _
                          ? r
                          : (0, s.jsxs)('div', {
                                className: x.tabBarItemContainer,
                                children: [r, _]
                            });
                return (0, s.jsx)(
                    o.TabBar.Item,
                    {
                        color: u,
                        id: i,
                        onClick: c,
                        className: m,
                        'aria-label': a,
                        children: T
                    },
                    i
                );
            });
    }
}
t.ZP = E;
