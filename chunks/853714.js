n(47120);
var i = n(200651),
    r = n(192379),
    l = n(120356),
    s = n.n(l),
    a = n(995295),
    o = n(91192),
    c = n(374470),
    d = n(442837),
    u = n(481060),
    m = n(480137),
    h = n(239091),
    g = n(497321),
    x = n(724757),
    p = n(210887),
    f = n(387667),
    C = n(598077),
    I = n(592125),
    _ = n(430824),
    N = n(246946),
    v = n(594174),
    T = n(823379),
    j = n(51144),
    S = n(987707),
    b = n(999382),
    E = n(909746),
    R = n(501801),
    Z = n(603784),
    A = n(981631),
    L = n(388032),
    y = n(928464),
    D = n(765063),
    O = n(152105);
function M(e, t, n) {
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
class P extends r.PureComponent {
    render() {
        let { onHeaderClick: e, guildId: t, guild: n, ...r } = this.props;
        return null == t
            ? null
            : (0, i.jsx)(Z.Z, {
                  ...r,
                  guildId: t,
                  guild: n,
                  onHeaderClick: this.handleHeaderClick,
                  onUserContextMenu: this.handleUserContextMenu,
                  onChannelContextMenu: this.handleChannelContextMenu,
                  onTargetContextMenu: this.handleTargetContextMenu
              });
    }
    constructor(...e) {
        super(...e),
            M(this, 'handleHeaderClick', () => {
                let { onHeaderClick: e, log: t } = this.props;
                null == e || e(t);
            }),
            M(this, 'handleUserContextMenu', (e) => {
                let { log: t, guildId: r } = this.props,
                    { user: l } = t;
                null != l &&
                    null != r &&
                    (0, h.jW)(e, async () => {
                        let { default: e } = await n.e('50929').then(n.bind(n, 595011));
                        return (t) =>
                            (0, i.jsx)(e, {
                                ...t,
                                guildId: r,
                                user: l
                            });
                    });
            }),
            M(this, 'handleChannelContextMenu', (e) => {
                let { log: t, guildId: r } = this.props,
                    l = _.Z.getGuild(r);
                null != t.options.channel &&
                    'string' != typeof t.options.channel &&
                    null != l &&
                    (0, h.jW)(e, async () => {
                        let { default: e } = await Promise.all([n.e('38902'), n.e('51529')]).then(n.bind(n, 228620));
                        return (n) =>
                            null != t.options.channel
                                ? (0, i.jsx)(e, {
                                      ...n,
                                      channel: t.options.channel
                                  })
                                : null;
                    });
            }),
            M(this, 'handleTargetContextMenu', (e) => {
                let { log: t, guildId: r } = this.props;
                switch (t.targetType) {
                    case A.KFR.CHANNEL:
                    case A.KFR.CHANNEL_OVERWRITE:
                        let l = I.Z.getChannel(t.targetId),
                            s = _.Z.getGuild(r);
                        if (null != l && null != s)
                            return (0, h.jW)(e, async () => {
                                let { default: e } = await Promise.all([n.e('38902'), n.e('51529')]).then(n.bind(n, 228620));
                                return (t) =>
                                    (0, i.jsx)(e, {
                                        ...t,
                                        channel: l
                                    });
                            });
                        return (0, h.jW)(e, async () => {
                            let { default: e } = await n.e('5396').then(n.bind(n, 731646));
                            return (n) =>
                                (0, i.jsx)(e, {
                                    ...n,
                                    id: t.targetId,
                                    label: L.intl.string(L.t.rCaznZ)
                                });
                        });
                    case A.KFR.USER:
                        let a = v.default.getUser(t.targetId);
                        if (null != a && null != r)
                            return (0, h.jW)(e, async () => {
                                let { default: e } = await n.e('50929').then(n.bind(n, 595011));
                                return (t) =>
                                    (0, i.jsx)(e, {
                                        ...t,
                                        guildId: r,
                                        user: a
                                    });
                            });
                }
                return null;
            });
    }
}
function k(e) {
    let { logs: t, guildId: n, guild: l, expandedId: s, lastExpandedId: a, scroller: c, setExpandedRef: d, setLastExpandedRef: u, onHeaderClick: m, onContentClick: h } = e,
        g = r.useRef(c);
    r.useEffect(() => {
        g.current = c;
    }, [c]);
    let p = (0, x.Z)('audit-log', g);
    return (0, i.jsx)(o.bG, {
        navigator: p,
        children: (0, i.jsx)(o.SJ, {
            children: (e) => {
                let { ref: r, ...o } = e;
                return (0, i.jsx)('div', {
                    ref: r,
                    ...o,
                    children: t.map((e) => {
                        let t = s === e.id,
                            r = a === e.id;
                        return (0, i.jsx)(
                            P,
                            {
                                guildId: n,
                                guild: l,
                                ref: t ? d : r ? u : null,
                                className: y.row,
                                onHeaderClick: m,
                                onContentClick: h,
                                log: e,
                                expanded: t
                            },
                            e.id
                        );
                    })
                });
            }
        })
    });
}
class w extends r.PureComponent {
    componentDidMount() {
        (0, m.bY)(this.props.guildId), document.addEventListener('click', this.handleOutsideClick);
    }
    componentWillUnmount() {
        document.removeEventListener('click', this.handleOutsideClick);
    }
    componentDidUpdate(e, t) {
        this.state.expandedId !== t.expandedId && this.fixScroll(), !this.props.showLoadMore && this.props.logs.length !== e.logs.length && null != this._scrollerRef && this.isScrollerAtBottom() && (0, m.OY)(this.props.guildId, !0);
    }
    isScrollerAtBottom() {
        var e;
        return (null === (e = this._scrollerRef) || void 0 === e ? void 0 : e.isScrolledToBottom()) || !1;
    }
    fixScroll() {
        let e = this._scrollerRef;
        if (null == e) return;
        let t = this.getRects(),
            n = this._prevRects;
        if (null == t.expanded || null == t.lastExpanded || null == n.expanded || t.expanded.top < t.lastExpanded.top) return;
        let i = n.expanded.height - t.lastExpanded.height,
            r = e.getScrollerState().scrollTop - i;
        e.scrollTo({ to: r });
    }
    getRects() {
        let e = {
            lastExpanded: null,
            expanded: null
        };
        if (null != this._lastExpandedRef) {
            let t = a.findDOMNode(this._lastExpandedRef);
            (0, c.k)(t) && (e.lastExpanded = t.getBoundingClientRect());
        }
        if (null != this._expandedRef) {
            let t = a.findDOMNode(this._expandedRef);
            (0, c.k)(t) && (e.expanded = t.getBoundingClientRect());
        }
        return e;
    }
    renderUserQuickSelectValue(e) {
        var t;
        return null !== (t = e.valueLabel) && void 0 !== t ? t : e.label;
    }
    renderActionQuickSelectValue(e) {
        var t;
        return null !== (t = e.valueLabel) && void 0 !== t ? t : e.label;
    }
    renderHeader() {
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)('div', {
                    className: y.customHeader,
                    children: [
                        (0, i.jsx)(u.FormTitle, {
                            tag: u.FormTitleTags.H1,
                            className: y.formTitle,
                            children: L.intl.string(L.t.SPWLyc)
                        }),
                        this.renderHeaderDropdowns()
                    ]
                }),
                (0, i.jsx)(u.FormDivider, { className: y.divider })
            ]
        });
    }
    renderSpinner() {
        return (0, i.jsx)(u.Spinner, { type: u.Spinner.Type.SPINNING_CIRCLE });
    }
    renderContent() {
        let { expandedId: e, lastExpandedId: t } = this.state,
            { logs: r, theme: l, hide: s, isInitialLoading: a, isLoading: o, hasError: c, guildId: d, guild: m } = this.props;
        if (s) return (0, i.jsx)(g.Z, {});
        if (o || a) return this.renderSpinner();
        if (0 === r.length) {
            let e = c ? L.intl.string(L.t.tzkaDw) : L.intl.string(L.t.lNuYho),
                t = c ? L.intl.string(L.t.Ww5Tj4) : L.intl.string(L.t['RHhk+P']);
            return (0, i.jsxs)(u.EmptyState, {
                theme: l,
                className: y.empty,
                children: [
                    (0, i.jsx)(u.EmptyStateImage, {
                        darkSrc: n(28269),
                        lightSrc: n(357115),
                        width: 272,
                        height: 130
                    }),
                    (0, i.jsx)(u.EmptyStateText, {
                        note: e,
                        style: { maxWidth: 300 },
                        children: t
                    })
                ]
            });
        }
        return (0, i.jsx)(k, {
            logs: r,
            guildId: d,
            guild: m,
            expandedId: e,
            lastExpandedId: t,
            setExpandedRef: this.handleSetExpandedRef,
            setLastExpandedRef: this.handleSetLastExpandedRef,
            onHeaderClick: this.handleHeaderClick,
            onContentClick: this.handleContentClick,
            scroller: this._scrollerRef
        });
    }
    render() {
        let { isLoadingNextPage: e, hide: t, isLoading: n } = this.props;
        return (0, i.jsx)('div', {
            className: D.customColumn,
            children: (0, i.jsx)('div', {
                className: D.customContainer,
                children: (0, i.jsx)(u.AdvancedScrollerAuto, {
                    className: s()(D.customScroller, y.scroller),
                    onScroll: this.handleOnScroll,
                    ref: this.handleSetScrollerRef,
                    children: (0, i.jsx)('div', {
                        className: y.content,
                        ref: this._contentRef,
                        children: (0, i.jsxs)(u.FocusRingScope, {
                            containerRef: this._contentRef,
                            children: [this.renderHeader(), this.renderContent(), this.renderLoadMore(), !e || t || n ? null : this.renderSpinner()]
                        })
                    })
                })
            })
        });
    }
    constructor(...e) {
        super(...e),
            M(this, '_clickedInside', !1),
            M(this, '_scrollerRef', null),
            M(this, '_expandedRef', void 0),
            M(this, '_lastExpandedRef', void 0),
            M(this, '_prevRects', this.getRects()),
            M(this, '_contentRef', r.createRef()),
            M(this, 'state', {
                expandedId: null,
                lastExpandedId: null,
                actionFilterQuery: ''
            }),
            M(this, 'renderActionQuickSelectItem', (e, t) => {
                var n;
                let { actionFilter: r } = this.props,
                    l = (0, f.Pw)(e.value),
                    s = (0, f.p5)(e.value),
                    a = e.value === r;
                return (0, i.jsxs)(
                    u.ComboboxItem,
                    {
                        value: e.value,
                        selectedColor: u.ComboboxItem.Colors.BRAND,
                        children: [
                            (0, i.jsx)(u.ComboboxItem.Icon, {
                                children: (0, i.jsx)(R.mp, {
                                    themeOverride: a ? A.BRd.DARK : null,
                                    actionType: l,
                                    targetType: s,
                                    action: e.value
                                })
                            }),
                            (0, i.jsx)(u.ComboboxItem.Label, { children: e.label }),
                            (0, i.jsx)(u.ComboboxItem.Checkmark, {})
                        ]
                    },
                    null !== (n = e.key) && void 0 !== n ? n : t
                );
            }),
            M(this, 'renderUserQuickSelectItem', (e, t) => {
                var n;
                if (e.user instanceof C.Z) {
                    let t = e.user;
                    return (0, i.jsxs)(
                        u.ComboboxItem,
                        {
                            value: t.id,
                            selectedColor: u.ComboboxItem.Colors.BRAND,
                            children: [
                                (0, i.jsx)(u.ComboboxItem.Icon, {
                                    children: (0, i.jsx)(u.Avatar, {
                                        size: u.AvatarSizes.SIZE_32,
                                        src: t.getAvatarURL(this.props.guildId, 32),
                                        'aria-label': t.username,
                                        className: y.avatar
                                    })
                                }),
                                (0, i.jsxs)(u.ComboboxItem.Label, {
                                    children: [
                                        (0, i.jsx)(u.Text, {
                                            variant: 'text-sm/normal',
                                            children: j.ZP.getUserTag(t, { mode: 'username' })
                                        }),
                                        !t.isPomelo() &&
                                            (0, i.jsxs)(u.Text, {
                                                variant: 'text-xs/normal',
                                                className: y.discriminator,
                                                children: ['#', t.discriminator]
                                            })
                                    ]
                                }),
                                (0, i.jsx)(u.ComboboxItem.Checkmark, {})
                            ]
                        },
                        t.id
                    );
                }
                return (0, i.jsxs)(
                    u.ComboboxItem,
                    {
                        value: e.value,
                        selectedColor: u.ComboboxItem.Colors.BRAND,
                        children: [
                            (0, i.jsx)(u.ComboboxItem.Icon, {
                                children: (0, i.jsx)(u.GroupIcon, {
                                    size: 'custom',
                                    color: 'currentColor',
                                    width: 30,
                                    height: 30
                                })
                            }),
                            (0, i.jsx)(u.ComboboxItem.Label, { children: e.label }),
                            (0, i.jsx)(u.ComboboxItem.Checkmark, {})
                        ]
                    },
                    null !== (n = e.key) && void 0 !== n ? n : t
                );
            }),
            M(this, 'renderHeaderDropdowns', () => {
                var e, t;
                let { actionFilter: n, hide: r, userIdFilter: l, moderators: a } = this.props;
                if (r) return null;
                let o = E.Iv(),
                    c =
                        null !==
                            (e = o.find((e) => {
                                let { value: t } = e;
                                return n === t;
                            })) && void 0 !== e
                            ? e
                            : o[0],
                    d = {
                        label: L.intl.string(L.t.ZRFdsL),
                        valueLabel: L.intl.string(L.t.an9Ry8),
                        value: null
                    },
                    m = [d, ...a].map((e) => {
                        var t;
                        if (!(e instanceof C.Z)) return e;
                        return {
                            label: (t = e).username,
                            value: t.id,
                            user: t
                        };
                    }),
                    h =
                        null !==
                            (t = m.find((e) => {
                                let { value: t } = e;
                                return t === l;
                            })) && void 0 !== t
                            ? t
                            : d;
                return (0, i.jsxs)('div', {
                    className: y.quickSelect,
                    children: [
                        (0, i.jsx)(u.SearchableQuickSelect, {
                            popoutClassName: s()(y.selectFilterPopout, O.elevationBorderHigh),
                            items: m,
                            renderItem: this.renderUserQuickSelectItem,
                            renderValue: this.renderUserQuickSelectValue,
                            value: h,
                            onChange: this.handleFilterUserChange,
                            label: L.intl.string(L.t['hxnY/v']),
                            placeholder: L.intl.string(L.t.pYHobG),
                            popoutProps: {
                                autoInvert: !1,
                                position: 'bottom'
                            }
                        }),
                        (0, i.jsx)(u.SearchableQuickSelect, {
                            placeholder: L.intl.string(L.t.I288Z2),
                            label: L.intl.string(L.t.rautdn),
                            popoutClassName: s()(y.selectFilterPopout, O.elevationBorderLow),
                            items: o,
                            renderItem: this.renderActionQuickSelectItem,
                            renderValue: this.renderActionQuickSelectValue,
                            value: c,
                            onChange: this.handleFilterActionChange,
                            popoutProps: {
                                autoInvert: !1,
                                position: 'bottom'
                            }
                        })
                    ]
                });
            }),
            M(this, 'renderLoadMore', () => {
                let { showLoadMore: e, hasOlderLogs: t, hide: n } = this.props;
                if (e && t && !n)
                    return (0, i.jsx)(u.Button, {
                        color: u.Button.Colors.PRIMARY,
                        className: y.loadMore,
                        onClick: this.handleFetchNextPage,
                        children: L.intl.string(L.t['Q/LSXl'])
                    });
            }),
            M(this, 'handleFilterActionChange', (e) => {
                (0, m.ZX)(e, this.props.guildId);
            }),
            M(this, 'handleFilterUserChange', (e) => {
                (0, m.uo)(e, this.props.guildId);
            }),
            M(this, 'handleHeaderClick', (e) => {
                let { expandedId: t } = this.state;
                t !== e.id
                    ? ((this._clickedInside = !0),
                      this.setState({
                          expandedId: e.id,
                          lastExpandedId: t
                      }),
                      (this._prevRects = this.getRects()))
                    : ((this._expandedRef = null),
                      (this._lastExpandedRef = null),
                      null != t && (this._prevRects = this.getRects()),
                      this.setState({
                          expandedId: null,
                          lastExpandedId: null
                      }));
            }),
            M(this, 'handleOutsideClick', () => {
                null == this.state.expandedId || this._clickedInside
                    ? null != this.state.expandedId && (this._clickedInside = !1)
                    : ((this._expandedRef = null),
                      (this._lastExpandedRef = null),
                      this.setState({
                          expandedId: null,
                          lastExpandedId: null
                      }),
                      (this._prevRects = this.getRects()));
            }),
            M(this, 'handleContentClick', (e) => {
                (this._clickedInside = !0), e.stopPropagation();
            }),
            M(this, 'handleSetScrollerRef', (e) => {
                this._scrollerRef = e;
            }),
            M(this, 'handleOnScroll', () => {
                this.isScrollerAtBottom() && this.handleFetchNextPage();
            }),
            M(this, 'handleFetchNextPage', () => {
                (0, m.OY)(this.props.guildId);
            }),
            M(this, 'handleActionFilterQueryChange', (e) => {
                this.setState({ actionFilterQuery: e });
            }),
            M(this, 'handleActionFilterQueryClear', () => {
                this.setState({ actionFilterQuery: '' });
            }),
            M(this, 'handleSetExpandedRef', (e) => {
                this._expandedRef = e;
            }),
            M(this, 'handleSetLastExpandedRef', (e) => {
                this._lastExpandedRef = e;
            });
    }
}
t.Z = d.ZP.connectStores([S.Z, b.Z, _.Z, p.Z, N.Z, v.default], () => {
    let e = b.Z.getGuildId(),
        t = _.Z.getGuild(e),
        n = S.Z.logs;
    return {
        guildId: e,
        guild: t,
        moderators: S.Z.userIds.map((e) => v.default.getUser(e)).filter(T.lm),
        isInitialLoading: S.Z.isInitialLoading,
        isLoading: S.Z.isLoading,
        isLoadingNextPage: S.Z.isLoadingNextPage,
        showLoadMore: S.Z.groupedFetchCount > 2,
        hasError: S.Z.hasError,
        hasOlderLogs: S.Z.hasOlderLogs,
        logs: null != n && null != t ? E._$(n, t) : [],
        actionFilter: S.Z.actionFilter,
        userIdFilter: S.Z.userIdFilter,
        theme: p.Z.theme,
        hide: N.Z.enabled
    };
})(w);
