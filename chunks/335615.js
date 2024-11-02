n.d(t, {
    Z: function () {
        return ei;
    }
}),
    n(47120),
    n(724458);
var i = n(200651),
    l = n(192379),
    r = n(120356),
    a = n.n(r),
    s = n(392711),
    o = n.n(s),
    c = n(91192),
    u = n(924826),
    d = n(873546),
    h = n(442837),
    m = n(902704),
    p = n(481060),
    f = n(239091),
    g = n(941028),
    C = n(144144),
    x = n(276264),
    v = n(607070),
    _ = n(100527),
    I = n(367907),
    E = n(906732),
    b = n(493324),
    S = n(611064),
    Z = n(677432),
    T = n(178762),
    N = n(868671),
    j = n(82295),
    A = n(91218),
    y = n(313201),
    P = n(623624),
    M = n(518738),
    R = n(155409),
    L = n(184301),
    k = n(347475),
    O = n(439170),
    w = n(430824),
    D = n(111583),
    U = n(594174),
    B = n(585483),
    H = n(823379),
    F = n(51144),
    G = n(998502),
    V = n(981631),
    z = n(388032),
    W = n(204394);
function Y(e, t, n) {
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
let K = G.ZP.getEnableHardwareAcceleration(),
    q = 44 + x.x,
    X = {
        origin: {
            x: 38,
            y: 11
        },
        targetWidth: 232,
        targetHeight: 40,
        offset: {
            x: 0,
            y: 0
        }
    };
class J extends l.Component {
    shouldComponentUpdate(e) {
        return !(0, m.Z)(this.props, e, ['channelId']);
    }
    render() {
        let { colorString: e, colorRoleName: t, isOwner: n, nick: l, user: r, currentUser: a, activities: s, applicationStream: o, status: c, channel: u, guildId: h, isTyping: m, isMobileOnline: f, premiumSince: g, ...C } = this.props,
            v = null != g ? new Date(g) : null;
        return (0, i.jsx)(p.Popout, {
            preload: () =>
                (0, L.Z)(r, {
                    channelId: u.id,
                    guildId: h
                }),
            renderPopout: this.renderUserPopout,
            position: d.tq ? 'window_center' : 'left',
            spacing: 16,
            onShiftClick: this.handleShiftClick,
            children: (d, p) => {
                let { isShown: g } = p;
                return (0, i.jsx)(x.Z, {
                    className: W.member,
                    onContextMenu: this.renderUserContextMenu,
                    shouldAnimateStatus: K,
                    user: r,
                    currentUser: a,
                    nick: l,
                    status: c,
                    activities: s,
                    applicationStream: o,
                    isOwner: n,
                    premiumSince: v,
                    colorString: e,
                    colorRoleName: t,
                    isTyping: m,
                    channel: u,
                    guildId: h,
                    isMobile: f,
                    onClickPremiumGuildIcon: this.openGuildSubscriptionModal,
                    selected: g,
                    itemProps: C,
                    ...d
                });
            }
        });
    }
    constructor(...e) {
        super(...e),
            Y(this, 'renderUserContextMenu', (e) => {
                (0, f.jW)(e, async () => {
                    let { default: e } = await Promise.all([n.e('79695'), n.e('92453'), n.e('13125'), n.e('91864')]).then(n.bind(n, 757387));
                    return (t) =>
                        (0, i.jsx)(e, {
                            ...t,
                            user: this.props.user,
                            guildId: this.props.guildId,
                            channel: this.props.channel,
                            showMediaItems: !0
                        });
                });
            }),
            Y(this, 'handleShiftClick', () => {
                let { user: e, channel: t } = this.props,
                    n = '@'.concat(F.ZP.getUserTag(e, { decoration: 'never' })),
                    i = '<@'.concat(e.id, '>');
                B.S.dispatchToLastSubscribed(V.CkL.INSERT_TEXT, {
                    plainText: n,
                    rawText: i
                }),
                    C.Z.startTyping(t.id);
            }),
            Y(this, 'openGuildSubscriptionModal', (e) => {
                let { guildId: t } = this.props;
                if (null != t)
                    e.stopPropagation(),
                        (0, P.f)({
                            guildId: t,
                            location: {
                                section: V.jXE.MEMBER_LIST,
                                object: V.qAy.BOOST_GEM_ICON
                            }
                        });
            }),
            Y(this, 'renderUserPopout', (e) =>
                (0, i.jsx)(k.Z, {
                    ...e,
                    userId: this.props.user.id,
                    guildId: this.props.guildId,
                    channelId: this.props.channel.id,
                    roleId: this.props.colorRoleId
                })
            );
    }
}
let Q = l.memo((e) => {
        let { colorRoleId: t, ...n } = e,
            { channel: l, user: r, index: a } = e,
            s = (0, c.JA)(''.concat(a)),
            o = (0, h.e7)([D.Z], () => D.Z.isTyping(l.id, r.id)),
            u = (0, h.e7)([U.default], () => U.default.getCurrentUser()),
            d = (0, h.e7)(
                [w.Z],
                () => {
                    var e;
                    return null != t ? (null === (e = w.Z.getRole(l.guild_id, t)) || void 0 === e ? void 0 : e.name) : void 0;
                },
                [l, t]
            );
        return (0, i.jsx)(J, {
            ...n,
            ...s,
            isTyping: o,
            currentUser: u,
            colorRoleName: d
        });
    }),
    $ = l.memo(function (e) {
        let { id: t, title: n, count: l, guildId: r } = e,
            a = (0, M.p9)({
                roleId: t,
                guildId: r,
                size: 16
            });
        return t === V.Skl.UNKNOWN
            ? (0, i.jsx)('div', {
                  className: W.membersGroup,
                  children: (0, i.jsx)('div', { className: W.memberGroupsPlaceholder })
              })
            : (0, i.jsxs)(j.Z, {
                  className: W.membersGroup,
                  children: [
                      (0, i.jsx)(p.HiddenVisually, {
                          children: z.intl.format(z.t.UaqbkZ, {
                              title: n,
                              count: l
                          })
                      }),
                      (0, i.jsxs)('span', {
                          'aria-hidden': !0,
                          children: [
                              null != a
                                  ? (0, i.jsx)(A.Z, {
                                        className: W.roleIcon,
                                        ...a
                                    })
                                  : null,
                              n,
                              ' \u2014 ',
                              l
                          ]
                      })
                  ]
              });
    });
function ee(e) {
    let { index: t } = e,
        n = (0, c.JA)(''.concat(t));
    return (0, i.jsx)(x.Z, { itemProps: n });
}
class et extends l.Component {
    shouldComponentUpdate(e) {
        return e.channel.id !== this.props.channel.id || e.version !== this.props.version || e.groups.length !== this.props.groups.length;
    }
    componentDidMount() {
        this.updateSubscription(), this.trackMemberListViewed(), (this._areActivitiesExperimentallyHidden = (0, b.$)('ChannelMembers'));
    }
    componentDidUpdate(e) {
        e.channel.id !== this.props.channel.id && this.updateSubscription(), this.trackMemberListViewed(), this.updateMaxContentFeedRowSeen();
    }
    getContentFeedAdjustedDimensions(e) {
        let { height: t, rowHeight: n, y: i } = e,
            l = this.getContentFeedHeight(),
            r = Math.max(0, t - Math.max(0, l - i)),
            a = Math.floor(r / n);
        return {
            height: r,
            rowHeight: n,
            rowsVisible: a,
            y: Math.max(0, i - l)
        };
    }
    getDimensions() {
        let e = this._list;
        if (null == e)
            return {
                y: 0,
                height: 0,
                rowHeight: 0
            };
        let { offsetHeight: t, scrollTop: n } = e.getScrollerState(),
            i = Math.floor(t / q);
        return this.getContentFeedAdjustedDimensions({
            height: t,
            rowHeight: q,
            rowsVisible: i,
            y: n
        });
    }
    render() {
        let { groups: e, listId: t, channel: n } = this.props;
        return (0, i.jsx)(p.FocusJumpSection, {
            children: (l) =>
                (0, i.jsx)(y.FG, {
                    children: (r) =>
                        (0, i.jsx)('aside', {
                            className: a()(W.membersWrap, W.hiddenMembers),
                            'aria-labelledby': r,
                            children: (0, i.jsx)(p.HeadingLevel, {
                                component: (0, i.jsx)(p.HiddenVisually, {
                                    children: (0, i.jsx)(p.H, {
                                        id: r,
                                        children: z.intl.format(z.t.JBQxV1, { channel: n.name })
                                    })
                                }),
                                children: (0, i.jsx)(c.SJ, {
                                    children: (n) => {
                                        let { ref: r, role: s, ...o } = n;
                                        return (0, i.jsx)(
                                            p.List,
                                            {
                                                innerRole: s,
                                                innerAriaLabel: z.intl.string(z.t['9Oq93t']),
                                                ref: (e) => {
                                                    var t;
                                                    (this._list = e), (this.props.listRef.current = e), (r.current = null !== (t = null == e ? void 0 : e.getScrollerNode()) && void 0 !== t ? t : null);
                                                },
                                                className: a()(W.members, { [W.fullWidth]: d.tq }),
                                                paddingTop: 0,
                                                sectionHeight: 40,
                                                rowHeight: this.getRowHeightComputer(),
                                                renderSection: this.renderSection,
                                                renderRow: this.renderRow,
                                                sections: e.map((e) => e.count),
                                                onScroll: this.handleScroll,
                                                fade: !0,
                                                customTheme: !0,
                                                ...o,
                                                ...l
                                            },
                                            t
                                        );
                                    }
                                })
                            })
                        })
                })
        });
    }
    constructor(...e) {
        super(...e),
            Y(this, '_list', null),
            Y(this, '_areActivitiesExperimentallyHidden', !1),
            Y(this, 'lastReportedAnalyticsChannel', void 0),
            Y(this, 'setList', (e) => {
                (this._list = e), (this.props.listRef.current = e);
            }),
            Y(this, 'renderSection', (e) => {
                let { section: t } = e,
                    { groups: n, channel: r } = this.props,
                    a = n[t];
                return (0, S.R)(a)
                    ? (0, l.createElement)(S.Z, {
                          ...a,
                          key: 'section-'.concat(t)
                      })
                    : 0 === t
                      ? (0, i.jsx)(
                            R.Z,
                            {
                                tutorialId: 'whos-online',
                                position: 'left',
                                inlineSpecs: X,
                                children: (0, i.jsx)($, {
                                    ...a,
                                    guildId: r.guild_id
                                })
                            },
                            'section-'.concat(t)
                        )
                      : (0, l.createElement)($, {
                            ...a,
                            key: 'section-'.concat(t),
                            guildId: r.guild_id
                        });
            }),
            Y(this, 'getRowProps', (e) => {
                let { groups: t, rows: n } = this.props,
                    i = t[e.section];
                if (null == i) return null;
                let { index: l } = i;
                return null == l || 'row' !== e.type ? null : n[l + 1 + e.row];
            }),
            Y(this, 'renderRow', (e) => {
                let { section: t, row: n, rowIndex: l } = e,
                    { channel: r } = this.props,
                    a = this.getRowProps(e);
                if (null != a) {
                    if (a.type === O.so.MEMBER && 'user' in a) {
                        let { colorString: e, colorRoleId: t, user: n, status: s, isOwner: o, isMobileOnline: c, nick: u, activities: d, applicationStream: h, premiumSince: m } = a;
                        return (0, i.jsx)(
                            Q,
                            {
                                colorString: e,
                                colorRoleId: t,
                                user: n,
                                status: s,
                                isOwner: o,
                                nick: u,
                                activities: this._areActivitiesExperimentallyHidden ? [] : d,
                                applicationStream: h,
                                channel: r,
                                guildId: r.guild_id,
                                premiumSince: m,
                                isMobileOnline: c,
                                index: l
                            },
                            'member-'.concat(a.user.id)
                        );
                    }
                    if (a.type === O.so.CONTENT_INVENTORY) {
                        let e = 'content-inventory-'.concat(a.entry.id);
                        return (
                            null != a.entry.original_id && (e += '-'.concat(a.entry.original_id)),
                            (0, i.jsx)(
                                T.ZP,
                                {
                                    ...a,
                                    channel: this.props.channel,
                                    index: l
                                },
                                e
                            )
                        );
                    }
                    if (a.type === O.so.HIDDEN_CONTENT_INVENTORY) return (0, i.jsx)(Z.Z, {}, 'content-inventory-hidden-entry');
                }
                return (0, i.jsx)(ee, { index: l }, 'placeholder-'.concat(t, ':').concat(n));
            }),
            Y(this, 'handleScroll', () => {
                this.updateSubscription(), this.updateMaxContentFeedRowSeen();
            }),
            Y(
                this,
                'updateMaxContentFeedRowSeen',
                o().debounce(() => {
                    let e = this._list;
                    if (null == e) return;
                    let { offsetHeight: t, scrollTop: n } = e.getScrollerState();
                    this.props.updateMaxContentFeedRowSeen(n + t - 40);
                }, 50)
            ),
            Y(this, 'getContentFeedGroup', () => {
                let e = this.props.groups[N.T];
                if ((0, S.R)(e)) return e;
            }),
            Y(this, 'hasContentFeed', () => null != this.getContentFeedGroup()),
            Y(this, 'getRowHeightComputer', () => {
                let e = this.getContentFeedGroup();
                if (null != e) {
                    let { rows: t } = this.props,
                        n = e.index;
                    return function (e, i) {
                        if (e === N.T) {
                            let e = t[n + 1 + i];
                            return (0, T.iZ)(e);
                        }
                        return q;
                    };
                }
                return q;
            }),
            Y(this, 'getContentFeedHeight', () => {
                let e = this.getContentFeedGroup();
                return null != e ? e.feedHeight + 40 : 0;
            }),
            Y(
                this,
                'updateSubscription',
                o().debounce(() => {
                    if (null == this._list) return;
                    let { channel: e } = this.props,
                        { rowHeight: t, y: n, height: i } = this.getDimensions();
                    (0, g.TV)({
                        guildId: e.guild_id,
                        channelId: e.id,
                        y: n,
                        height: i,
                        rowHeight: t
                    });
                }, 50)
            ),
            Y(this, 'trackMemberListViewed', () => {
                var e;
                if (this.lastReportedAnalyticsChannel === this.props.channel.id) return;
                let t = null === (e = this._list) || void 0 === e ? void 0 : e.getItems(),
                    { rowsVisible: n } = this.getDimensions();
                if (void 0 === n || 0 === n || null == t) return;
                this.hasContentFeed() && (t = t.filter((e) => e.section !== N.T));
                let i = t
                    .map((e) => this.getRowProps(e))
                    .slice(0, n + 1)
                    .filter(H.lm);
                if (0 === i.length) return;
                let l = i.reduce((e, t) => (t.type !== O.so.MEMBER ? e : (e.num_users_visible++, t.isMobileOnline && e.num_users_visible_with_mobile_indicator++, null != t.activities && t.activities.length > 0 && (e.num_users_visible_with_activity++, t.activities.some((e) => e.type === V.IIU.PLAYING) && e.num_users_visible_with_game_activity++), null != t.user.avatarDecoration && e.num_users_visible_with_avatar_decoration++, e)), {
                    num_users_visible: 0,
                    num_users_visible_with_mobile_indicator: 0,
                    num_users_visible_with_game_activity: 0,
                    num_users_visible_with_activity: 0,
                    num_users_visible_with_avatar_decoration: 0
                });
                (this.lastReportedAnalyticsChannel = this.props.channel.id), I.ZP.trackWithMetadata(V.rMx.MEMBER_LIST_VIEWED, { ...l });
            });
    }
}
function en(e) {
    let { channel: t, className: n } = e,
        { analyticsLocations: r } = (0, E.ZP)(_.Z.MEMBER_LIST),
        s = (0, h.e7)([v.Z], () => v.Z.keyboardModeEnabled),
        o = (0, h.cj)([O.ZP], () => O.ZP.getProps(t.guild_id, t.id)),
        {
            rows: d,
            groups: m,
            version: p,
            updateMaxRowSeen: f
        } = (0, N.H)({
            memberStoreProps: o,
            channelId: t.id,
            guildId: t.guild_id
        }),
        g = l.useRef(null),
        C = l.useCallback((e, t) => {
            let n = g.current;
            if (null == n) return;
            let i = parseInt(t, 10),
                [l, r] = n.getSectionRowFromIndex(i),
                a = 0 === l && 0 === r ? q : 0;
            n.scrollToIndex({
                section: l,
                row: r,
                padding: a,
                callback: () => {
                    requestAnimationFrame(() => {
                        var t;
                        return null === (t = document.querySelector(e)) || void 0 === t ? void 0 : t.focus({ preventScroll: !0 });
                    });
                }
            });
        }, []),
        x = l.useCallback(
            () =>
                new Promise((e) => {
                    let t = g.current;
                    if (null == t) return e();
                    t.scrollToTop({ callback: () => requestAnimationFrame(() => e()) });
                }),
            []
        ),
        I = l.useCallback(
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
        b = (0, u.ZP)({
            id: 'members-'.concat(t.id),
            setFocus: C,
            isEnabled: s,
            scrollToStart: x,
            scrollToEnd: I
        });
    return (0, i.jsx)(E.Gt, {
        value: r,
        children: (0, i.jsx)('div', {
            className: a()(W.container, n),
            children: (0, i.jsx)(c.bG, {
                navigator: b,
                children: (0, i.jsx)(et, {
                    ...e,
                    ...o,
                    version: p,
                    groups: m,
                    rows: d,
                    listRef: g,
                    updateMaxContentFeedRowSeen: f
                })
            })
        })
    });
}
function ei(e) {
    let { channel: t, className: n } = e,
        r = l.useDeferredValue(t);
    return l.useMemo(
        () =>
            (0, i.jsx)(en, {
                channel: r,
                className: n
            }),
        [r, n]
    );
}
