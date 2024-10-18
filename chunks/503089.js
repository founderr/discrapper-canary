n.d(t, {
    $x: function () {
        return R;
    },
    d7: function () {
        return v;
    },
    w6: function () {
        return I;
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
    _ = n(689938),
    T = n(11377);
function b(e, t, n) {
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
let x = Object.freeze({
        shouldPreventNavigation: !1,
        onPreventNavigation: null,
        sidebarOpen: !0
    }),
    R = 1.4,
    I = 15,
    v = 2;
function g(e) {
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
        t !== this.props.section && (this._intensity = R);
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
              (this._intensity = Math.min(this._intensity + v, I)),
              m.S.dispatch(N.CkL.EMPHASIZE_NOTICE),
              !1)
            : ((this._intensity = R), !0);
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
                        i ? (0, s.jsx)(h.Z, { style: T.searchBar }) : null,
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
                    content: (0, s.jsx)(g, {
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
            b(this, '_unmounted', !1),
            b(this, '_intensity', R),
            b(this, '_subscribedStores', []),
            b(this, 'scrollerRef', i.createRef()),
            b(this, 'state', {
                ...x,
                sidebarOpen: this.props.section !== N.oAB.SUBSCRIPTIONS && this.props.section !== N.oAB.PROFILE_CUSTOMIZATION
            }),
            b(this, 'setPreventNavigation', (e, t) => {
                this.setState({
                    shouldPreventNavigation: e,
                    onPreventNavigation: t
                });
            }),
            b(this, 'handleSetSection', (e) => {
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
                                ...x,
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
            b(this, 'handleClose', () => {
                if (this.validNavigation()) {
                    let { onClose: e } = this.props;
                    null == e || e();
                }
            }),
            b(this, 'handleNoticeStoreUpdate', () => {
                if (!this._unmounted) (this._intensity = R), this.forceUpdate();
            }),
            b(this, 'renderSettingsSectionTabBarItem', (e, t, n) => {
                let { section: i, label: r = null, ariaLabel: a, onClick: c, color: u, icon: h, className: m, newIndicator: p, newIndicatorDismissibleContentTypes: f, badgeCount: S, searchFilterCount: b } = e,
                    x = null;
                null != b && b > 0
                    ? (x = (0, s.jsx)(o.NumberBadge, {
                          count: b,
                          disableColor: !0,
                          className: T.searchFilterCount
                      }))
                    : i === N.oAB.ACCOUNT && this.props.isEligibleForPomelo
                      ? (x = (0, s.jsx)(o.CircleWarningIcon, {
                            size: 'custom',
                            width: 20,
                            height: 20,
                            color: l.Z.colors.STATUS_WARNING.css
                        }))
                      : null != e.decoration
                        ? (x = (0, s.jsx)(o.Text, {
                              variant: 'text-md/normal',
                              color: 'text-muted',
                              children: e.decoration
                          }))
                        : null != n && (null == f ? void 0 : f.includes(n)) && !t
                          ? (x = null != p ? p : (0, s.jsx)(o.TextBadge, { text: _.Z.Messages.NEW }))
                          : null != h
                            ? (x = h)
                            : null != S && S > 0 && (x = (0, s.jsx)(o.NumberBadge, { count: S }));
                let R =
                    i === N.oAB.PREMIUM
                        ? (0, s.jsx)(d.Z, {
                              label: r,
                              isSelected: t,
                              decoration: x
                          })
                        : null == x
                          ? r
                          : (0, s.jsxs)('div', {
                                className: T.tabBarItemContainer,
                                children: [r, x]
                            });
                return (0, s.jsx)(
                    o.TabBar.Item,
                    {
                        color: u,
                        id: i,
                        onClick: c,
                        className: m,
                        'aria-label': a,
                        children: R
                    },
                    i
                );
            });
    }
}
t.ZP = E;
