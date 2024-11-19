n.r(t), n(47120);
var l,
    i = n(200651),
    r = n(192379),
    s = n(120356),
    a = n.n(s),
    o = n(512722),
    d = n.n(o),
    u = n(392711),
    c = n.n(u),
    h = n(990547),
    g = n(533800),
    m = n(442837),
    v = n(692547),
    x = n(481060),
    p = n(447543),
    I = n(247272),
    S = n(110924),
    f = n(100527),
    T = n(906732),
    N = n(835473),
    E = n(447003),
    C = n(471445),
    _ = n(259473),
    j = n(600164),
    y = n(687516),
    Z = n(111810),
    M = n(301935),
    b = n(397195),
    w = n(427679),
    B = n(199902),
    A = n(439170),
    U = n(592125),
    R = n(984933),
    V = n(341165),
    P = n(751771),
    G = n(496675),
    k = n(158776),
    L = n(944486),
    D = n(594174),
    F = n(938475),
    O = n(626135),
    H = n(630388),
    q = n(971130),
    W = n(264229),
    z = n(751499),
    K = n(181852),
    Y = n(366980),
    J = n(444260),
    Q = n(585385),
    $ = n(603236),
    X = n(462376),
    ee = n(245335),
    et = n(981631),
    en = n(176505),
    el = n(388032),
    ei = n(696456),
    er = n(971436),
    es = n(845370),
    ea = n(622577);
function eo(e, t, n) {
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
let { INVITE_OPTIONS_FOREVER: ed, INVITE_OPTIONS_7_DAYS: eu, INVITE_OPTIONS_UNLIMITED: ec } = q.ZP;
class eh extends (l = r.PureComponent) {
    componentDidMount() {
        let { inviteChannel: e, code: t, guild: n, source: l, canCreateInvites: i, analyticsLocation: r, streamUserId: s, targetType: a, targetUserId: o, application: d, initialCounts: u, rows: c, showFriends: h, modalState: g, setModalState: m } = this.props,
            { maxAge: v, maxUses: x, temporary: I } = g;
        if (i) {
            let n = null == e ? void 0 : e.id;
            if (null == n) return;
            m({ networkError: void 0 }),
                p.Z.createInvite(
                    n,
                    {
                        validate: null != t ? t : null,
                        max_age: v,
                        max_uses: x,
                        target_user_id: o,
                        target_type: a,
                        target_application_id: null == d ? void 0 : d.id,
                        temporary: I
                    },
                    l
                ).catch((e) => m({ networkError: e }));
        }
        if (
            (h &&
                O.default.track(et.rMx.INVITE_SUGGESTION_OPENED, {
                    location: l,
                    num_suggestions: c.length,
                    num_friends: u.numFriends,
                    num_dms: u.numDms,
                    num_group_dms: u.numGroupDms,
                    guild_id: n.id
                }),
            K.Z.trackExposure({
                guildId: null == n ? void 0 : n.id,
                location: 'acc417_1'
            }),
            null != s)
        ) {
            let e = B.Z.getStreamForUser(s, n.id),
                t = (0, y.L2)(e, k.Z);
            O.default.track(et.rMx.OPEN_MODAL, {
                type: 'Send Stream Invite',
                source: l,
                location: r,
                other_user_id: s,
                application_id: null != t ? t.id : null,
                application_name: null != t ? t.name : null,
                game_id: null != t ? t.id : null
            });
        } else
            (null == d ? void 0 : d.id) != null ||
                O.default.track(et.rMx.OPEN_MODAL, {
                    type: 'Instant Invite Modal',
                    source: l,
                    location: r
                });
    }
    componentWillUnmount() {
        let { inviteChannel: e, inviteFlags: t, setInviteFlags: n } = this.props;
        (0, H.yE)(t, g.$.IS_GUEST_INVITE) && null != e && (n((0, H.Ge)(t, g.$.IS_GUEST_INVITE)), p.Z.clearInviteFromStore(e.id));
    }
    getInviteKey() {
        let { code: e, vanityURLCode: t, guildScheduledEvent: n, modalState: l } = this.props,
            { showVanityURL: i } = l,
            r = i ? t : null != e ? e : t;
        return null == r
            ? r
            : (0, W.tV)({
                  baseCode: r,
                  guildScheduledEventId: null == n ? void 0 : n.id
              });
    }
    renderChannelWarning() {
        let { inviteChannel: e } = this.props;
        return (0, E.Z)(e)
            ? (0, i.jsxs)('div', {
                  className: ei.warningContainer,
                  children: [
                      (0, i.jsx)(x.CircleWarningIcon, {
                          size: 'custom',
                          className: ei.warningIcon,
                          color: v.Z.unsafe_rawColors.YELLOW_300.css,
                          width: 12
                      }),
                      (0, i.jsx)(x.Text, {
                          variant: 'text-xs/normal',
                          color: 'header-secondary',
                          children: el.intl.string(el.t.x1SQZW)
                      })
                  ]
              })
            : null;
    }
    renderHeader() {
        let e;
        let { guild: t, showFriends: n, guildScheduledEvent: l, streamUserId: r, application: s, welcomeToServer: o, inviteChannel: d, modalState: u, handleDone: c } = this.props,
            { query: h } = u,
            g = null,
            m = null;
        if (((e = o ? null : null != r ? el.intl.string(el.t['6VQaqa']) : null != s ? el.intl.formatToPlainString(el.t.ZdK3dX, { applicationName: s.name }) : null != l ? el.intl.string(el.t.JKV4FB) : (null == d ? void 0 : d.isGuildStageVoice()) ? el.intl.string(el.t.zTrsHx) : el.intl.format(el.t.NvVBJS, { name: t.toString() })), null != d)) {
            let e = (0, C.KS)(d, t);
            null != e &&
                (m = (0, i.jsxs)('div', {
                    className: ei.headerChannelContainer,
                    children: [
                        (0, i.jsx)(e, { className: ei.channelIcon }),
                        (0, i.jsx)(x.Text, {
                            color: 'interactive-normal',
                            variant: 'text-md/normal',
                            children: d.name
                        })
                    ]
                }));
        }
        return (
            (g = t.hasFeature(et.oNc.HUB)
                ? (0, i.jsxs)('div', {
                      className: ei.hubHeader,
                      children: [
                          (0, i.jsx)(x.Heading, {
                              className: a()(ei.hubInviteTitle, ei.headerCloseButtonSpacing),
                              id: this._headerId,
                              variant: 'heading-xl/semibold',
                              color: 'header-primary',
                              children: el.intl.string(el.t.WhR38v)
                          }),
                          (0, i.jsx)(x.Text, {
                              color: 'header-secondary',
                              variant: 'text-md/normal',
                              children: el.intl.string(el.t.Ed4BMj)
                          }),
                          n &&
                              (0, i.jsx)(x.SearchBar, {
                                  query: h,
                                  className: ei.hubFriendSearch,
                                  onChange: this.handleQueryChange,
                                  placeholder: el.intl.string(el.t.CmSHY2),
                                  'aria-label': el.intl.string(el.t.CmSHY2),
                                  autoFocus: !0,
                                  onClear: this.handleClearSearch
                              })
                      ]
                  })
                : n
                  ? (0, i.jsxs)('div', {
                        className: ei.header,
                        children: [
                            (0, i.jsx)('div', {
                                className: ei.__invalid_headerTopRow,
                                children: (0, i.jsx)(x.FormTitle, {
                                    id: this._headerId,
                                    tag: 'h2',
                                    className: a()(er.marginBottom4, ei.headerCloseButtonSpacing, ei.headerText),
                                    children: e
                                })
                            }),
                            m,
                            (0, i.jsx)(x.SearchBar, {
                                query: h,
                                className: ei.searchBar,
                                onChange: this.handleQueryChange,
                                placeholder: el.intl.string(el.t.CmSHY2),
                                autoFocus: !0,
                                onClear: this.handleClearSearch
                            }),
                            (0, i.jsx)('div', {
                                className: er.marginTop8,
                                children: this.renderChannelWarning()
                            })
                        ]
                    })
                  : (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)(x.FormTitle, {
                                id: this._headerId,
                                tag: 'h2',
                                className: a()(er.marginReset, ei.headerCloseButtonSpacing, ei.headerText),
                                children: e
                            }),
                            m,
                            this.renderChannelWarning()
                        ]
                    })),
            (0, i.jsxs)(x.ModalHeader, {
                separator: n,
                children: [
                    (0, i.jsx)('div', {
                        className: ei.closeButton,
                        children: (0, i.jsx)(x.ModalCloseButton, { onClick: c })
                    }),
                    (0, i.jsxs)('div', {
                        className: ei.headerContainer,
                        children: [
                            o &&
                                (0, i.jsxs)(i.Fragment, {
                                    children: [
                                        (0, i.jsx)('img', {
                                            className: ei.welcomeImage,
                                            src: ea,
                                            alt: ''
                                        }),
                                        (0, i.jsx)(x.Heading, {
                                            variant: 'heading-lg/semibold',
                                            className: ei.welcomeHeading,
                                            children: el.intl.string(el.t.DpoBNz)
                                        }),
                                        (0, i.jsx)(x.Text, {
                                            variant: 'text-md/normal',
                                            color: 'text-secondary',
                                            className: ei.welcomeSubheading,
                                            children: el.intl.string(el.t['wJ/ouL'])
                                        })
                                    ]
                                }),
                            null != r ? (0, i.jsx)(Z.Z, {}) : null,
                            g
                        ]
                    })
                ]
            })
        );
    }
    renderFriendsBody() {
        let { rows: e } = this.props,
            t = this.getInviteKey();
        return 0 === e.length
            ? (0, i.jsx)(x.ModalContent, {
                  className: a()(ei.inviteRowEmptyState),
                  children: (0, i.jsx)(x.EmptyStateText, { children: el.intl.string(el.t.ojoWgY) })
              })
            : null == t
              ? (0, i.jsx)(x.ModalContent, {
                    className: a()(ei.inviteRowEmptyState),
                    children: (0, i.jsx)(x.EmptyStateText, { children: el.intl.string(el.t.hzPwGB) })
                })
              : (0, i.jsx)(x.ModalListContent, {
                    className: ei.scroller,
                    sections: [e.length],
                    renderSection: this.renderSection,
                    sectionHeight: 0,
                    renderRow: this.renderRow,
                    rowHeight: this.getRowHeight,
                    paddingBottom: 16
                });
    }
    renderSection() {
        return null;
    }
    renderBody() {
        var e;
        let { guild: t, showFriends: n, streamUserId: l, application: r } = this.props;
        if (n) return this.renderFriendsBody();
        let s = (0, Y.Z)(null !== (e = this.getInviteKey()) && void 0 !== e ? e : ''),
            a = D.default.getCurrentUser();
        d()(null != a, 'InstantInviteModal: user cannot be undefined');
        let o = t.isOwner(a) ? el.intl.string(el.t.HFbByM) : el.intl.string(el.t.ueBhAw);
        return (
            null != l ? (o = el.intl.string(el.t.CXpS1N)) : null != r && (o = el.intl.string(el.t.ueCrHB)),
            (0, i.jsx)(x.ModalContent, {
                className: ei.noScroll,
                children: (0, i.jsxs)(j.Z, {
                    direction: j.Z.Direction.VERTICAL,
                    className: er.marginBottom20,
                    children: [
                        (0, i.jsx)(x.Text, {
                            className: ei.subText,
                            variant: 'text-sm/normal',
                            children: o
                        }),
                        (0, i.jsx)($.I, {
                            ...this.props,
                            copyValue: s
                        })
                    ]
                })
            })
        );
    }
    renderFooter() {
        var e;
        let { noInvitesAvailable: t, showFriends: n, guildScheduledEvent: l, streamUserId: r, application: s, inviteChannel: o, modalState: d } = this.props,
            { maxAge: u } = d,
            c = null,
            h = (0, Y.Z)(null !== (e = this.getInviteKey()) && void 0 !== e ? e : '');
        if (n) {
            let e = el.intl.string(el.t.MLkj7O);
            null != r ? (e = el.intl.string(el.t['1b9nen'])) : null != s ? (e = el.intl.string(el.t.iI1gMj)) : null != l ? (e = el.intl.string(el.t.KaWCyM)) : (null == o ? void 0 : o.isGuildStageVoice()) && (e = el.intl.string(el.t['2frWa2'])),
                (c = (0, i.jsxs)(j.Z, {
                    direction: j.Z.Direction.VERTICAL,
                    className: ei.content,
                    children: [
                        (0, i.jsx)(x.FormTitle, {
                            tag: 'h5',
                            className: er.marginBottom8,
                            children: e
                        }),
                        (0, i.jsx)($.I, {
                            ...this.props,
                            copyValue: h
                        })
                    ]
                }));
        } else
            !t &&
                (c = (0, i.jsxs)(j.Z, {
                    justify: j.Z.Justify.BETWEEN,
                    className: er.marginTop20,
                    children: [
                        (0, i.jsx)(x.Checkbox, {
                            size: 18,
                            type: x.Checkbox.Types.INVERTED,
                            value: u === ed.value,
                            onChange: this.handleToggleMaxAge,
                            children: (0, i.jsx)(x.Text, {
                                variant: 'text-sm/normal',
                                children: el.intl.string(el.t.QKJru7)
                            })
                        }),
                        (0, i.jsx)(x.Tooltip, {
                            text: el.intl.string(el.t.Yx4IiI),
                            children: (e) => {
                                let { onMouseEnter: t, onMouseLeave: n } = e;
                                return (0, i.jsx)(x.Clickable, {
                                    onClick: this.openSettings,
                                    onMouseEnter: t,
                                    onMouseLeave: n,
                                    className: es.cursorPointer,
                                    children: (0, i.jsx)(x.SettingsIcon, {
                                        size: 'sm',
                                        color: v.Z.unsafe_rawColors.PRIMARY_400.css
                                    })
                                });
                            }
                        })
                    ]
                }));
        return null != c
            ? (0, i.jsx)(x.ModalFooter, {
                  className: a()({
                      [ei.noPadding]: !n,
                      [ei.footer]: n
                  }),
                  children: c
              })
            : null;
    }
    getModalContent() {
        let { modalState: e, handleDone: t } = this.props,
            { currentPage: n } = e;
        switch (n) {
            case ee.RV.MAIN:
                return (0, i.jsxs)(i.Fragment, {
                    children: [this.renderHeader(), this.renderBody(), this.renderFooter()]
                });
            case ee.RV.SETTINGS:
                return (0, i.jsx)(Q.D, {
                    ...this.props,
                    headerId: this._headerId,
                    onSelectMaxAge: this.handleSelectMaxAge,
                    onSelectMaxUses: this.handleSelectMaxUses,
                    onToggleTemporary: this.handleToggleTemporary,
                    handleDone: t
                });
            case ee.RV.GUEST:
                var l;
                let r = (0, Y.Z)(null !== (l = this.getInviteKey()) && void 0 !== l ? l : '');
                return (0, i.jsx)(J.B, {
                    ...this.props,
                    headerId: this._headerId,
                    handleDone: t,
                    copyValue: r
                });
            default:
                return null;
        }
    }
    render() {
        let { transitionState: e, inviteChannel: t, guild: n } = this.props;
        return (0, i.jsx)('div', {
            className: this.props.showFriends ? ei.wrapper : void 0,
            children: (0, i.jsx)(x.ModalRoot, {
                impression: {
                    impressionName: h.ImpressionNames.GUILD_INVITE,
                    impressionProperties: {
                        invite_channel_id: null == t ? void 0 : t.id,
                        invite_guild_id: n.id
                    }
                },
                'aria-labelledby': this._headerId,
                transitionState: e,
                className: ei.modal,
                children: this.getModalContent()
            })
        });
    }
    constructor(...e) {
        super(...e),
            eo(this, '_scroller', null),
            eo(this, '_headerId', c().uniqueId()),
            eo(this, 'openSettings', () => {
                let { changePage: e } = this.props;
                e(ee.RV.SETTINGS);
            }),
            eo(this, 'handleSelectMaxAge', (e) => {
                let { modalState: t, setModalState: n } = this.props;
                n({
                    maxAge: e,
                    savedMaxAge: t.maxAge
                });
            }),
            eo(this, 'handleSelectMaxUses', (e) => {
                let { setModalState: t } = this.props;
                t({ maxUses: e });
            }),
            eo(this, 'handleToggleTemporary', (e) => {
                let { setModalState: t } = this.props;
                t({ temporary: e });
            }),
            eo(this, 'handleToggleGuest', (e) => {
                let { inviteFlags: t, setInviteFlags: n } = this.props;
                n((0, H.mB)(t, g.$.IS_GUEST_INVITE, e));
            }),
            eo(this, 'handleQueryChange', (e) => {
                var t;
                let { setModalState: n } = this.props;
                null === (t = this._scroller) || void 0 === t || t.scrollTo({ to: 0 }), (0, I.C)(e), n({ query: e });
            }),
            eo(this, 'handleClearSearch', () => {
                this.handleQueryChange('');
            }),
            eo(this, 'handleToggleMaxAge', () => {
                let { modalState: e, setModalState: t } = this.props,
                    { maxAge: n, savedMaxAge: l } = e;
                t({
                    maxAge: l,
                    savedMaxAge: n
                });
            }),
            eo(this, 'getRowHeight', (e, t) => {
                if (e > 0) return 0;
                switch (this.props.rows[t].type) {
                    case q.bm.CHANNEL:
                    case q.bm.GROUP_DM:
                    case q.bm.DM:
                    case q.bm.FRIEND:
                        return X.k;
                    default:
                        return 0;
                }
            }),
            eo(this, 'renderRow', (e) => {
                let { section: t, row: n } = e;
                if (t > 0) return null;
                let { analyticsLocation: l } = this.props,
                    r = this.getInviteKey(),
                    s = this.props.rows[n],
                    a = ''.concat(s.type, '-').concat(s.item.id);
                switch (s.type) {
                    case q.bm.GROUP_DM:
                    case q.bm.CHANNEL:
                        return (0, i.jsx)(
                            X.d,
                            {
                                row: s,
                                channel: s.item,
                                inviteKey: r,
                                location: l
                            },
                            a
                        );
                    case q.bm.DM:
                    case q.bm.FRIEND:
                        return (0, i.jsx)(
                            X.d,
                            {
                                row: s,
                                user: s.item,
                                inviteKey: r,
                                location: l
                            },
                            a
                        );
                    default:
                        return null;
                }
            });
    }
}
eo(eh, 'defaultProps', {
    analyticsLocation: et.Sbl.GUILD_CREATE_INVITE_SUGGESTION,
    defaultMaxAge: eu.value
}),
    (t.default = r.forwardRef(function (e, t) {
        var n, l, s, a;
        let { channel: o, guild: d, source: u, guildScheduledEvent: c, streamUserId: h, applicationId: v, transitionState: x, onClose: C, welcomeToServer: j, page: y, analyticsLocation: Z } = e,
            [B, k] = r.useState(y === ee.RV.GUEST ? g.$.IS_GUEST_INVITE : 0),
            { analyticsLocations: D } = (0, T.ZP)(f.Z.INSTANT_INVITE_MODAL),
            O = (0, m.e7)([U.Z, L.Z], () => {
                let e = L.Z.getVoiceChannelId();
                if (null == e) return null;
                let t = U.Z.getChannel(e);
                return (null == t ? void 0 : t.guild_id) === d.id ? t : null;
            }),
            q = null != O && !(0, E.Z)(O) && [et.t4x.GUILD_CONTEXT_MENU, et.t4x.GUILD_HEADER].includes(u),
            W = (0, b.Z)(d.id),
            K = (0, m.e7)(
                [L.Z, U.Z, R.ZP],
                () => {
                    if (q && ((0, H.yE)(B, g.$.IS_GUEST_INVITE) || y === ee.RV.GUEST)) return O;
                    if (y === ee.RV.GUEST) return 1 === W.length ? W[0] : void 0;
                    if (null != o) return o;
                    let e = L.Z.getChannelId(),
                        t = null == e || (0, en.AB)(e) ? void 0 : U.Z.getChannel(e);
                    return (null == t ? void 0 : t.isThread()) && (t = U.Z.getChannel(t.parent_id)), null != t ? t : R.ZP.getDefaultChannel(d.id, !0, et.Plq.CREATE_INSTANT_INVITE);
                },
                [q, B, y, o, d.id, O, W]
            ),
            [Y, J] = r.useState(null),
            Q = null != Y ? Y : K,
            $ = null;
        null != h ? ($ = ee.Iq.STREAM) : null != v && ($ = ee.Iq.EMBEDDED_APPLICATION);
        let X = null != o ? o.getGuildId() : null != d ? d.id : null,
            el = (0, m.e7)(
                [V.Z],
                () => {
                    let e = null != Q ? Q.id : null;
                    return null == e
                        ? null
                        : V.Z.getInvite(e, {
                              targetType: $,
                              targetUserId: h,
                              targetApplicationId: v
                          });
                },
                [Q, $, h, v]
            ),
            [ei, er, es, ea, eo] = (0, m.Wu)(
                [P.Z, F.ZP, A.ZP],
                () => {
                    let e = null != Q ? Q.id : null;
                    return [P.Z.getInviteSuggestionRows(), P.Z.getTotalSuggestionsCount() >= 1, P.Z.getInitialCounts(), null != o && null != Q ? F.ZP.getVoiceStatesForChannel(Q) : null, null != X ? A.ZP.getProps(X, e) : null];
                },
                [Q, o, X]
            ),
            eg = (0, m.e7)([G.Z], () => null != Q && G.Z.can(et.Plq.CREATE_INSTANT_INVITE, Q), [Q]),
            em = null === el || !eg,
            [ev] = r.useState(() => {
                let e = new Set();
                return (
                    null != h && null != ea
                        ? ea.forEach((t) => {
                              let { user: n } = t;
                              e.add(n.id);
                          })
                        : null != X &&
                          null != eo &&
                          $ !== ee.Iq.EMBEDDED_APPLICATION &&
                          eo.rows.forEach((t) => {
                              t.type === A.so.MEMBER && e.add(t.userId);
                          }),
                    e
                );
            }),
            ex = null == o ? void 0 : o.id,
            ep = (0, m.e7)([w.Z], () => w.Z.getStageInstanceByChannel(ex), [ex]);
        r.useEffect(() => {
            (0, I.x)({
                omitUserIds: ev,
                guild: d,
                channel: o,
                applicationId: v,
                inviteTargetType: $
            }).catch(et.VqG);
        }, [ev, o, d, v, $]);
        let [eI] = (0, N.Z)(null != v ? [v] : []),
            eS = (0, _.Z)({ guildId: X }),
            ef = null != el ? el.code : void 0,
            eT = null == el ? void 0 : el.maxAge,
            eN = null == el ? void 0 : el.maxUses,
            eE = null == el ? void 0 : el.temporary,
            eC = d.vanityURLCode,
            e_ = null != eC && eC.length > 0,
            { enabled: ej } = z.Z.useExperiment(
                {
                    guildId: null !== (s = null !== (l = null !== (n = d.id) && void 0 !== n ? n : null == el ? void 0 : el.guild.id) && void 0 !== l ? l : X) && void 0 !== s ? s : et.lds,
                    location: 'acc417_2'
                },
                { autoTrackExposure: e_ }
            ),
            ey = ej && !(null == Q ? void 0 : Q.isGuildVocal()) && e_,
            eZ = (null == Q ? void 0 : Q.type) === et.d4z.GUILD_VOICE,
            eM = (0, E.Z)(Q);
        !eg && (null == ep ? void 0 : ep.invite_code) != null && (ef = ep.invite_code);
        let [eb, ew] = r.useState({
                query: '',
                maxAge: null !== (a = null != eT ? eT : eS) && void 0 !== a ? a : eu.value,
                savedMaxAge: eT === ed.value ? (null != eS ? eS : eu.value) : ed.value,
                maxUses: null != eN && 0 !== eN ? eN : ec.value,
                temporary: null != eE && eE,
                networkError: void 0,
                showVanityURL: ey,
                currentPage: null != y ? y : ee.RV.MAIN,
                lastPage: void 0
            }),
            eB = r.useCallback((e) => {
                ew((t) => ({
                    ...t,
                    ...e
                }));
            }, []),
            eA = r.useCallback(
                (e) => {
                    eB({
                        currentPage: e,
                        lastPage: eb.currentPage
                    });
                },
                [eb.currentPage, eB]
            ),
            eU = (eZ || q) && y !== ee.RV.GUEST && !ey && !em && !eM,
            { enabled: eR } = M.o.useExperiment(
                {
                    guildId: null == d ? void 0 : d.id,
                    location: 'acc417_3'
                },
                { autoTrackExposure: eU }
            ),
            { maxAge: eV, maxUses: eP, temporary: eG, savedMaxAge: ek } = eb,
            eL = r.useCallback(() => {
                let { currentPage: e, lastPage: t } = eb;
                e === ee.RV.SETTINGS && null != t ? eA(t) : C();
            }, [eA, eb, C]),
            eD = r.useCallback(() => {
                let e = null == Q ? void 0 : Q.id;
                0 === eP && 0 === eV && !eG && ey
                    ? eB({
                          networkError: void 0,
                          showVanityURL: !0
                      })
                    : null != e &&
                      (eB({
                          networkError: void 0,
                          showVanityURL: !1
                      }),
                      p.Z.createInvite(
                          e,
                          {
                              max_age: eV,
                              max_uses: eP,
                              target_type: $,
                              target_user_id: h,
                              target_application_id: null == eI ? void 0 : eI.id,
                              temporary: eG,
                              flags: B
                          },
                          u
                      ).catch((e) =>
                          eB({
                              networkError: e,
                              showVanityURL: ey
                          })
                      )),
                    eV !== ed.value && ek !== ed.value && eB({ savedMaxAge: ed.value });
            }, [ey, Q, u, null == eI ? void 0 : eI.id, $, h, eV, eP, eG, B, eB, ek]),
            eF = (0, S.Z)(Q),
            eO = (0, S.Z)(B),
            eH = eF !== Q,
            eq = eO !== B;
        return (
            r.useEffect(() => {
                (eH || eq) && eD();
            }, [eD, eH, eq]),
            (0, i.jsx)(T.Gt, {
                value: D,
                children: (0, i.jsx)(eh, {
                    ref: t,
                    canCreateInvites: eg,
                    noInvitesAvailable: em,
                    inviteChannel: Q,
                    guild: d,
                    guildScheduledEvent: c,
                    streamUserId: h,
                    vanityURLCode: eC,
                    targetType: $,
                    targetUserId: h,
                    application: eI,
                    rows: ei,
                    showFriends: er,
                    initialCounts: es,
                    code: ef,
                    source: u,
                    welcomeToServer: j,
                    analyticsLocations: D,
                    analyticsLocation: Z,
                    transitionState: x,
                    onClose: C,
                    canShowVanityURL: ey,
                    isGuestInviteCreationToggleEnabled: eR && eU,
                    shouldHideTemporaryInviteToggle: (eR && eU) || y === ee.RV.GUEST,
                    modalState: eb,
                    setModalState: eB,
                    changePage: eA,
                    onGenerateNewLink: eD,
                    inviteFlags: B,
                    setInviteFlags: k,
                    showGuestInviteToggleForCurrentVoiceChannel: q,
                    setInviteChannel: J,
                    handleDone: eL
                })
            })
        );
    }));
