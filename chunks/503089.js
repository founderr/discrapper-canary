n.d(t, {
    $x: function () {
        return N;
    },
    d7: function () {
        return y;
    },
    w6: function () {
        return C;
    }
}),
    n(653041),
    n(390547),
    n(47120);
var i = n(200651),
    l = n(192379),
    s = n(990547),
    r = n(692547),
    o = n(481060),
    a = n(213609),
    c = n(252618),
    u = n(243778),
    d = n(126848),
    h = n(207874),
    m = n(585483),
    p = n(960048),
    b = n(410575),
    f = n(493544),
    v = n(981631),
    S = n(388032),
    x = n(583535);
function g(e, t, n) {
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
let j = Object.freeze({
        shouldPreventNavigation: !1,
        onPreventNavigation: null,
        sidebarOpen: !0
    }),
    N = 1.4,
    C = 15,
    y = 2;
function P(e) {
    var t, n;
    let { section: l, setPreventNavigation: r, scrollerRef: o } = e;
    (0, a.Z)({
        type: s.ImpressionTypes.PANE,
        name: null == l ? void 0 : l.impressionName,
        properties: null == l ? void 0 : l.impressionProperties
    });
    let c = null !== (t = null == l ? void 0 : l.element) && void 0 !== t ? t : v.VqG,
        u = null !== (n = null == l ? void 0 : l.elementProps) && void 0 !== n ? n : {};
    return (0, i.jsx)(b.Z, {
        section: l.section,
        children: (0, i.jsx)(c, {
            ...u,
            setPreventNavigation: r,
            refToScroller: o
        })
    });
}
class T extends l.PureComponent {
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
        t !== this.props.section && (this._intensity = N);
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
            ? (m.S.dispatch(v.CkL.SHAKE_APP, {
                  duration: 300,
                  intensity: this._intensity
              }),
              (this._intensity = Math.min(this._intensity + y, C)),
              m.S.dispatch(v.CkL.EMPHASIZE_NOTICE),
              !1)
            : ((this._intensity = N), !0);
    }
    renderSidebar(e) {
        let { section: t, title: n, isUserSettingsSearchEnabled: l } = this.props,
            s = e.flatMap((e) => e.newIndicatorDismissibleContentTypes).filter((e) => null != e),
            r = null != t ? t : e[0].section;
        return (0, i.jsx)(u.ZP, {
            contentTypes: s,
            children: (t) => {
                let { visibleContent: s } = t;
                return (0, i.jsxs)(o.TabBar, {
                    selectedItem: r,
                    onItemSelect: this.handleSetSection,
                    orientation: 'vertical',
                    'aria-label': n,
                    children: [
                        l ? (0, i.jsx)(h.Z, { style: x.searchBar }) : null,
                        e.map((e, t) => {
                            if (null != e.tabPredicate && !e.tabPredicate()) return null;
                            switch (e.section) {
                                case f.ID.HEADER:
                                    return (0, i.jsx)(o.TabBar.Header, { children: e.label }, t);
                                case f.ID.DIVIDER:
                                    return (0, i.jsx)(o.TabBar.Separator, {}, t);
                                case f.ID.CUSTOM:
                                    var n;
                                    let l = null !== (n = e.element) && void 0 !== n ? n : v.VqG;
                                    return (0, i.jsx)(l, {}, t);
                                default:
                                    return this.renderSettingsSectionTabBarItem(e, r === e.section, s);
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
        let { stores: n, element: l } = e.notice;
        return null == n || n.some((e) => e.showNotice()) ? (0, i.jsx)(l, { theme: t }) : null;
    }
    render() {
        var e;
        let { sidebarTheme: t, section: n, title: l, onClose: s, hideSidebar: r } = this.props,
            o = this.getPredicateSections(),
            a = o.find((e) => e.section === n);
        if (null == a || null == n) return null;
        let u = null !== (e = 'string' == typeof a.label ? a.label : a.ariaLabel) && void 0 !== e ? e : l;
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(c.yY, {
                    location: l,
                    subsection: u
                }),
                (0, i.jsx)(f.ZP, {
                    sidebarTheme: t,
                    scrollerRef: this.scrollerRef,
                    section: n,
                    sidebar: this.renderSidebar(o),
                    content: (0, i.jsx)(P, {
                        section: a,
                        setPreventNavigation: this.setPreventNavigation,
                        scrollerRef: this.scrollerRef
                    }),
                    mobileSidebarOpen: this.state.sidebarOpen,
                    hideSidebar: r,
                    toggleSidebar: () => this.setState({ sidebarOpen: !0 }),
                    contentType: a.type,
                    notice: this.renderNotice(a),
                    closeAction: null != s ? this.handleClose : void 0
                })
            ]
        });
    }
    constructor(...e) {
        super(...e),
            g(this, '_unmounted', !1),
            g(this, '_intensity', N),
            g(this, '_subscribedStores', []),
            g(this, 'scrollerRef', l.createRef()),
            g(this, 'state', {
                ...j,
                sidebarOpen: this.props.section !== v.oAB.SUBSCRIPTIONS && this.props.section !== v.oAB.PROFILE_CUSTOMIZATION
            }),
            g(this, 'setPreventNavigation', (e, t) => {
                this.setState({
                    shouldPreventNavigation: e,
                    onPreventNavigation: t
                });
            }),
            g(this, 'handleSetSection', (e) => {
                let { onSetSection: t, sections: n } = this.props,
                    { shouldPreventNavigation: i, onPreventNavigation: l } = this.state,
                    s = () => {
                        var i;
                        null == t || t(e);
                        let { notice: l } = null !== (i = n.find((t) => e === t.section)) && void 0 !== i ? i : {},
                            s = null != l ? l.stores : null;
                        null != s &&
                            s.forEach((e) => {
                                !this._subscribedStores.includes(e) && (e.addChangeListener(this.handleNoticeStoreUpdate), this._subscribedStores.push(e));
                            }),
                            this.setState({
                                ...j,
                                sidebarOpen: !1
                            });
                    };
                this.validNavigation() &&
                    !i &&
                    (s(),
                    p.Z.addBreadcrumb({
                        category: 'settings',
                        message: 'Set section: '.concat(e)
                    })),
                    i && null != l && l(s);
            }),
            g(this, 'handleClose', () => {
                if (this.validNavigation()) {
                    let { onClose: e } = this.props;
                    null == e || e();
                }
            }),
            g(this, 'handleNoticeStoreUpdate', () => {
                if (!this._unmounted) (this._intensity = N), this.forceUpdate();
            }),
            g(this, 'renderSettingsSectionTabBarItem', (e, t, n) => {
                let { section: l, label: s = null, ariaLabel: a, onClick: c, color: u, icon: h, className: m, newIndicator: p, newIndicatorDismissibleContentTypes: b, badgeCount: f, searchFilterCount: g } = e,
                    j = null;
                null != g && g > 0
                    ? (j = (0, i.jsx)(o.NumberBadge, {
                          count: g,
                          disableColor: !0,
                          className: x.searchFilterCount
                      }))
                    : l === v.oAB.ACCOUNT && this.props.isEligibleForPomelo
                      ? (j = (0, i.jsx)(o.CircleWarningIcon, {
                            size: 'custom',
                            width: 20,
                            height: 20,
                            color: r.Z.colors.STATUS_WARNING.css
                        }))
                      : null != e.decoration
                        ? (j = (0, i.jsx)(o.Text, {
                              variant: 'text-md/normal',
                              color: 'text-muted',
                              children: e.decoration
                          }))
                        : null != n && (null == b ? void 0 : b.includes(n)) && !t
                          ? (j = null != p ? p : (0, i.jsx)(o.TextBadge, { text: S.intl.string(S.t.y2b7CA) }))
                          : null != h
                            ? (j = h)
                            : null != f && f > 0 && (j = (0, i.jsx)(o.NumberBadge, { count: f }));
                let N =
                    l === v.oAB.PREMIUM
                        ? (0, i.jsx)(d.Z, {
                              label: s,
                              isSelected: t,
                              decoration: j
                          })
                        : null == j
                          ? s
                          : (0, i.jsxs)('div', {
                                className: x.tabBarItemContainer,
                                children: [s, j]
                            });
                return (0, i.jsx)(
                    o.TabBar.Item,
                    {
                        color: u,
                        id: l,
                        onClick: c,
                        className: m,
                        'aria-label': a,
                        children: N
                    },
                    l
                );
            });
    }
}
t.ZP = T;
