n.d(t, {
    Z: function () {
        return eh;
    }
}),
    n(411104),
    n(653041),
    n(47120);
var i,
    s = n(735250),
    a = n(470079),
    l = n(120356),
    r = n.n(l),
    o = n(392711),
    c = n.n(o),
    u = n(913527),
    d = n.n(u),
    h = n(873546),
    m = n(442837),
    p = n(481060),
    _ = n(570140),
    f = n(26151),
    E = n(493683),
    g = n(758059),
    C = n(447543),
    I = n(708690),
    T = n(194359),
    x = n(425493),
    S = n(461745),
    v = n(40851),
    N = n(367907),
    A = n(43267),
    Z = n(933557),
    M = n(600164),
    b = n(313201),
    R = n(366980),
    L = n(703656),
    j = n(93127),
    O = n(60349),
    P = n(428598),
    y = n(131704),
    D = n(592125),
    U = n(341165),
    k = n(544610),
    w = n(19780),
    B = n(306680),
    H = n(699516),
    G = n(246946),
    V = n(594174),
    F = n(626135),
    W = n(572004),
    z = n(585483),
    Y = n(823379),
    K = n(709054),
    q = n(51144),
    X = n(73752),
    J = n(665149),
    Q = n(575464),
    $ = n(981631),
    ee = n(689938),
    et = n(411542),
    en = n(803636),
    ei = n(113207);
function es(e, t, n) {
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
let ea = (0, b.hQ)(),
    el = (0, b.hQ)();
function er(e) {
    let { className: t, children: n } = e;
    return (0, s.jsxs)(M.Z, {
        align: M.Z.Align.CENTER,
        justify: M.Z.Justify.CENTER,
        direction: M.Z.Direction.VERTICAL,
        className: r()(et.errorState, t),
        children: [(0, s.jsx)('div', { className: r()(et.errorStateIcon, ei.marginBottom20) }), n]
    });
}
let eo = (e) => {
        var t;
        let { channel: n, onClose: i } = e,
            a = null !== (t = (0, Z.ZP)(n)) && void 0 !== t ? t : '',
            l = (0, m.e7)([B.ZP], () => {
                var e;
                return null !== (e = B.ZP.lastMessageId(n.id)) && void 0 !== e ? e : n.id;
            });
        return (0, s.jsx)(p.Clickable, {
            onClick: () => {
                (0, L.XU)($.ME, n.id), i();
            },
            children: (0, s.jsxs)('div', {
                className: et.confirmChannelItemContainer,
                children: [
                    (0, s.jsx)(p.Avatar, {
                        src: (0, A.x)(n),
                        size: p.AvatarSizes.SIZE_24,
                        'aria-label': a
                    }),
                    (0, s.jsx)('span', {
                        className: et.confirmChannelName,
                        children: a
                    }),
                    (0, s.jsx)('span', {
                        className: et.lastActiveTimestamp,
                        children: d()(K.default.extractTimestamp(l)).fromNow()
                    })
                ]
            })
        });
    },
    ec = (e) => {
        let { onConfirm: t, channelIds: n, ...i } = e,
            a = (0, m.Wu)([D.Z], () => Array.from(n).map(D.Z.getChannel), [n]);
        return (0, s.jsxs)(p.ConfirmModal, {
            header: ee.Z.Messages.GROUP_DM_INVITE_CONFIRM,
            confirmText: ee.Z.Messages.GROUP_DM_INVITE_CONFIRM_BUTTON,
            cancelText: ee.Z.Messages.CANCEL,
            onConfirm: t,
            confirmButtonColor: p.Button.Colors.BRAND,
            ...i,
            children: [
                (0, s.jsx)(p.Text, {
                    variant: 'text-md/normal',
                    children: ee.Z.Messages.GROUP_DM_INVITE_CONFIRM_DESCRIPTION
                }),
                (0, s.jsx)(p.FormTitle, {
                    className: et.selectExistingFormHeader,
                    children: ee.Z.Messages.GROUP_DM_INVITE_SELECT_EXISTING
                }),
                (0, s.jsx)(p.Scroller, {
                    className: et.confirmInviteScroller,
                    children: a
                        .filter(Y.lm)
                        .sort((e, t) => {
                            var n, i;
                            let s = null !== (n = e.lastMessageId) && void 0 !== n ? n : e.id,
                                a = null !== (i = t.lastMessageId) && void 0 !== i ? i : t.id;
                            return K.default.compare(a, s);
                        })
                        .map((e) =>
                            (0, s.jsx)(
                                eo,
                                {
                                    onClose: i.onClose,
                                    channel: e
                                },
                                e.id
                            )
                        )
                })
            ]
        });
    };
class eu extends (i = a.PureComponent) {
    _getAnalyticsEntryPoint() {
        let { channel: e } = this.props,
            t = '',
            n = '';
        return (
            null != e ? (e.isDM() ? ((t = 'Add Friends to DM'), (n = 'DM')) : ((t = 'Add Friends to DM'), (n = 'Group DM'))) : ((t = 'New Group DM'), (n = 'Friends List')),
            {
                entryPointType: t,
                entryPointSource: n
            }
        );
    }
    componentDidMount() {
        let { channel: e } = this.props;
        _.Z.wait(() => I.Z.open(null == e ? void 0 : e.id));
        let t = (0, N.v_)(e);
        F.default.track($.rMx.OPEN_POPOUT, {
            ...t,
            type: this._getAnalyticsEntryPoint().entryPointType,
            source: this._getAnalyticsEntryPoint().entryPointSource,
            is_friend: !this.isNotFriends()
        }),
            z.S.subscribe($.CkL.SCROLL_PAGE_UP, this.scrollPageUp),
            z.S.subscribe($.CkL.SCROLL_PAGE_DOWN, this.scrollPageDown);
    }
    componentWillUnmount() {
        z.S.unsubscribe($.CkL.SCROLL_PAGE_UP, this.scrollPageUp), z.S.unsubscribe($.CkL.SCROLL_PAGE_DOWN, this.scrollPageDown), null != this.copyTimeout && clearTimeout(this.copyTimeout), _.Z.wait(() => I.Z.close());
    }
    isNotFriends() {
        let { channel: e } = this.props;
        if (null == e || !e.isDM()) return !1;
        let t = e.getRecipientId();
        if (null == t) throw Error('no recipient in DM');
        return !H.Z.isFriend(t);
    }
    createInvite() {
        let { channel: e } = this.props;
        if (null == e || !e.isMultiUserDM() || this.isPartyFull()) return;
        let { inviteMaxAgeSeconds: t } = X.Z.getCurrentConfig({ location: '5326c5_1' }, { autoTrackExposure: !1 });
        C.Z.createInvite(e.id, { max_age: t }, $.t4x.GROUP_DM);
    }
    isPartyFull() {
        let { channel: e } = this.props;
        return null != e && e.recipients.length + 1 >= this.getMaxParticipants();
    }
    getMaxParticipants() {
        let { channel: e } = this.props,
            t = V.default.getCurrentUser();
        return null != t && t.isStaff() ? $.p3w : null != e && e.userLimit > 0 ? e.userLimit : $.pAY;
    }
    getRemaining() {
        let { channel: e, selectedUsers: t } = this.props,
            n = (null == e ? 0 : e.recipients.length) + 1;
        return this.getMaxParticipants() - t.size - n;
    }
    renderCreateGroupButton() {
        let { channel: e, selectedUsers: t } = this.props,
            n = this.getRemaining(),
            i = (null != e && 0 === t.size) || n < 0,
            a = t.size > 1 ? ee.Z.Messages.CREATE_GROUP_DM : ee.Z.Messages.CREATE_DM;
        return (0, s.jsx)(p.Button, {
            fullWidth: !0,
            disabled: i,
            onClick: this.handleInviteUsers,
            children: a
        });
    }
    renderAddUsersButton() {
        let { channel: e, selectedUsers: t } = this.props;
        if (null == e || e.isDM()) return;
        let n = this.getRemaining(),
            i = 0 === t.size || n < 0;
        return (0, s.jsx)('div', {
            className: et.addButton,
            children: (0, s.jsx)(p.Button, {
                size: p.Button.Sizes.SMALL,
                disabled: i,
                onClick: this.handleInviteUsers,
                children: ee.Z.Messages.ADD
            })
        });
    }
    renderSubtitle() {
        if (!this.props.hasFriends || this.isNotFriends() || this.isPartyFull()) return null;
        let e = this.getRemaining(),
            t = e <= 0 ? ee.Z.Messages.GROUP_DM_INVITE_FULL_SUB2.format({ number: this.getMaxParticipants() }) : ee.Z.Messages.GROUP_DM_INVITE_REMAINING.format({ number: e });
        return (0, s.jsx)(p.Text, {
            variant: 'text-xs/normal',
            className: r()(et.subtitle, { [et.subtitleWarning]: e < 0 }, ei.marginTop4),
            children: t
        });
    }
    renderSearchBar() {
        var e;
        let { query: t, hasFriends: n, results: i, selectedRow: a, selectedUsers: l } = this.props;
        if (!n || this.isNotFriends()) return null;
        let o = [];
        return (
            l.forEach((e) => {
                let t = V.default.getUser(e);
                null != t && o.push(q.ZP.getName(t));
            }),
            (0, s.jsxs)(M.Z, {
                className: r()(et.searchBar, ei.marginTop20),
                children: [
                    (0, s.jsx)(S.ZP, {
                        ref: this.searchBarRef,
                        className: et.searchBarComponent,
                        autoFocus: !0,
                        placeholder: 0 === l.size ? ee.Z.Messages.GROUP_DM_SEARCH_PLACEHOLDER : void 0,
                        disabled: this.isPartyFull(),
                        size: S.ZP.Sizes.MEDIUM,
                        query: t,
                        selectedRow: a,
                        sections: [null !== (e = null == i ? void 0 : i.length) && void 0 !== e ? e : 0],
                        tags: o,
                        onSelect: this.handleSelect,
                        onSelectionChange: this.handleSelectionChange,
                        onQueryChange: this.handleQueryChange,
                        onRemoveTag: this.handleRemoveUser,
                        inputProps: {
                            'aria-labelledby': ea,
                            'aria-controls': el,
                            'aria-expanded': !0,
                            'aria-activedescendant': 'user-row-'.concat(a)
                        }
                    }),
                    this.renderAddUsersButton()
                ]
            })
        );
    }
    renderHeader() {
        let e = null != this.scrollerRef.current && this.state.separator,
            t = this.isNotFriends() ? ee.Z.Messages.GROUP_DM_ADD_FRIENDS : ee.Z.Messages.GROUP_DM_HEADER;
        return (0, s.jsxs)(p.ModalHeader, {
            direction: M.Z.Direction.VERTICAL,
            align: M.Z.Align.STRETCH,
            className: et.__invalid_header,
            separator: e,
            children: [
                h.tq ? this.renderMobileCloseButton() : null,
                (0, s.jsx)(p.Heading, {
                    id: ea,
                    variant: 'heading-lg/semibold',
                    children: t
                }),
                this.renderSubtitle(),
                this.renderSearchBar()
            ]
        });
    }
    renderBody() {
        let { channel: e, hasFriends: t, results: n } = this.props;
        if (this.isNotFriends()) {
            let t = null != e ? e.getRecipientId() : null;
            if (null == t) throw Error('no recipient in DM');
            let n = V.default.getUser(t),
                i = null != n ? n.username : '',
                a = null != n && H.Z.getRelationshipType(n.id) === $.OGo.PENDING_OUTGOING;
            return (0, s.jsxs)(er, {
                className: et.notFriends,
                children: [
                    (0, s.jsx)('div', { children: ee.Z.Messages.GROUP_DM_INVITE_NOT_FRIENDS.format({ username: i }) }),
                    (0, s.jsx)(p.Button, {
                        disabled: a,
                        size: p.Button.Sizes.SMALL,
                        onClick: () => (null != n ? this.handleAddFriend(n) : null),
                        className: ei.marginTop20,
                        children: a ? ee.Z.Messages.ADD_FRIEND_BUTTON_AFTER : ee.Z.Messages.ADD_FRIEND_BUTTON
                    })
                ]
            });
        }
        return t
            ? this.isPartyFull()
                ? (0, s.jsxs)(er, {
                      className: et.partyFull,
                      children: [(0, s.jsx)('div', { children: ee.Z.Messages.GROUP_DM_INVITE_FULL_MAIN }), (0, s.jsx)('div', { children: ee.Z.Messages.GROUP_DM_INVITE_FULL_SUB2.format({ number: this.getMaxParticipants() }) })]
                  })
                : 0 === n.length
                  ? (0, s.jsx)(er, {
                        className: r()(et.noResults, ei.marginBottom20),
                        children: (0, s.jsx)('div', { children: ee.Z.Messages.GROUP_DM_INVITE_EMPTY })
                    })
                  : (0, s.jsx)(p.List, {
                        ref: this.scrollerRef,
                        sections: [n.length],
                        className: et.scroller,
                        renderRow: this.renderRow,
                        rowHeight: this.getRowHeight,
                        renderSection: this.renderSection,
                        sectionHeight: 0,
                        onScroll: this.handleScroll,
                        paddingTop: 0,
                        paddingBottom: 14,
                        fade: !0,
                        role: void 0,
                        innerRole: 'listbox',
                        innerId: el,
                        innerAriaMultiselectable: !0,
                        innerAriaOrientation: 'vertical'
                    })
            : (0, s.jsxs)(er, {
                  className: et.noFriends,
                  children: [
                      (0, s.jsx)('div', { children: ee.Z.Messages.GROUP_DM_INVITE_NO_FRIENDS }),
                      (0, s.jsx)(p.Button, {
                          autoFocus: !0,
                          color: p.Button.Colors.GREEN,
                          fullWidth: !0,
                          size: p.Button.Sizes.SMALL,
                          onClick: this.handleAddFriendNavigation,
                          className: ei.marginTop20,
                          children: ee.Z.Messages.ADD_FRIEND
                      })
                  ]
              });
    }
    renderSection() {
        return null;
    }
    renderInviteLink() {
        let { channel: e, invite: t, hideInstantInvites: n } = this.props,
            { copied: i } = this.state;
        if (null == e || !e.isMultiUserDM() || this.isPartyFull()) return null;
        let l = null != t ? (0, R.Z)(t.code) : '';
        return (0, s.jsxs)(a.Fragment, {
            children: [
                (0, s.jsx)(p.FormTitle, {
                    tag: 'h5',
                    className: ei.marginBottom8,
                    children: ee.Z.Messages.GROUP_DM_INVITE_LINK_TITLE
                }),
                (0, s.jsxs)(M.Z, {
                    className: r()(en.input, { [en.success]: i }),
                    justify: M.Z.Justify.BETWEEN,
                    align: M.Z.Align.CENTER,
                    children: [
                        l.length > 0
                            ? (0, s.jsx)(p.TextInput, {
                                  className: et.copyInput,
                                  name: 'invite',
                                  value: n ? ee.Z.Messages.INSTANT_INVITE_HIDDEN : l,
                                  editable: !1,
                                  inputClassName: et.input,
                                  spellCheck: 'false',
                                  onClick: (e) => e.currentTarget.select()
                              })
                            : (0, s.jsx)(p.TextInput, {
                                  className: et.copyInput,
                                  name: 'invite',
                                  value: l,
                                  placeholder: (0, R.Z)(ee.Z.Messages.GROUP_DM_INVITE_LINK_EXAMPLE),
                                  editable: !1,
                                  inputClassName: et.input,
                                  spellCheck: 'false',
                                  onClick: () => this.createInvite()
                              }),
                        W.wS && l.length > 0
                            ? (0, s.jsx)(p.Button, {
                                  size: p.Button.Sizes.SMALL,
                                  color: i ? p.Button.Colors.GREEN : p.Button.Colors.BRAND,
                                  className: et.copyButton,
                                  onClick: () => this.handleCopyInvite(l),
                                  children: i ? ee.Z.Messages.INVITE_COPIED : ee.Z.Messages.COPY
                              })
                            : null,
                        0 === l.length
                            ? (0, s.jsx)(p.Button, {
                                  size: p.Button.Sizes.SMALL,
                                  color: p.Button.Colors.BRAND,
                                  className: et.copyButton,
                                  onClick: () => this.createInvite(),
                                  children: ee.Z.Messages.GROUP_DM_INVITE_LINK_CREATE
                              })
                            : null
                    ]
                }),
                l.length > 0
                    ? (0, s.jsx)(p.Text, {
                          variant: 'text-xs/normal',
                          className: r()(ei.marginTop8, et.footerText),
                          children: ee.Z.Messages.INVITE_EXPIRES_HOURS.format({ numHours: ''.concat(24) })
                      })
                    : null
            ]
        });
    }
    renderFooter() {
        let { hasFriends: e, channel: t } = this.props;
        if (this.isNotFriends() || !e || this.isPartyFull()) return null;
        let n = null == t || t.isDM() ? this.renderCreateGroupButton() : this.renderInviteLink();
        if (null != n)
            return (0, s.jsxs)(a.Fragment, {
                children: [
                    (0, s.jsx)('div', { className: et.footerSeparator }),
                    (0, s.jsx)(M.Z, {
                        direction: M.Z.Direction.VERTICAL,
                        className: et.footer,
                        children: n
                    })
                ]
            });
    }
    render() {
        let { transitionState: e } = this.props;
        return (0, s.jsxs)(p.ModalRoot, {
            transitionState: null != e ? e : p.ModalTransitionState.ENTERED,
            className: et.popout,
            children: [this.renderHeader(), this.renderBody(), this.renderFooter()]
        });
    }
    handleAddFriend(e) {
        this.props.onClose(),
            T.Z.sendRequest({
                discordTag: q.ZP.getUserTag(e, { identifiable: 'always' }),
                context: { location: 'Group DM' }
            });
    }
    _getUserAffinities(e) {
        return {
            affinities: e.map((e) => {
                var t;
                let n = P.Z.getUserAffinity(e);
                return null !== (t = null == n ? void 0 : n.communicationProbability) && void 0 !== t ? t : -1;
            })
        };
    }
    constructor(...e) {
        super(...e),
            es(this, 'state', {
                separator: !1,
                copied: !1
            }),
            es(this, 'copyTimeout', void 0),
            es(this, 'scrollerRef', a.createRef()),
            es(this, 'searchBarRef', a.createRef()),
            es(this, '_mobileCloseRef', a.createRef()),
            es(this, '_searchCounter', 0),
            es(this, '_existingTimeout', null),
            es(this, 'scrollPageUp', () => {
                var e;
                null === (e = this.scrollerRef.current) || void 0 === e || e.scrollPageUp({ animate: !0 });
            }),
            es(this, 'scrollPageDown', () => {
                var e;
                null === (e = this.scrollerRef.current) || void 0 === e || e.scrollPageDown({ animate: !0 });
            }),
            es(this, 'renderMobileCloseButton', () =>
                (0, s.jsx)('div', {
                    className: r()(et.mobileToolsContainer),
                    ref: this._mobileCloseRef,
                    children: (0, s.jsx)(p.FocusRingScope, {
                        containerRef: this._mobileCloseRef,
                        children: (0, s.jsx)('div', {
                            children: (0, s.jsx)(x.Z, {
                                className: et.mobileToolsCloseIcon,
                                closeAction: this.props.onClose,
                                keybind: 'ESC'
                            })
                        })
                    })
                })
            ),
            es(this, 'getRowHeight', (e, t) => {
                if (e > 0) return 0;
                let { results: n } = this.props;
                return null != n[t] ? 42 : 0;
            }),
            es(this, 'renderRow', (e) => {
                let { section: t, row: n } = e;
                if (t > 0) return null;
                let { results: i, selectedUsers: a, selectedRow: l, hideDiscriminator: r } = this.props,
                    o = i[n];
                if (null == o) return null;
                let { user: c, comparator: u } = o,
                    d = a.has(c.id);
                return (0, s.jsx)(
                    Q.Z,
                    {
                        row: n,
                        user: c,
                        hideDiscriminator: r,
                        comparator: u,
                        checked: d,
                        selected: n === l,
                        onClick: this.handleClick,
                        onMouseEnter: this.focusResult,
                        'aria-posinset': n + 1,
                        'aria-setsize': i.length
                    },
                    c.id
                );
            }),
            es(this, 'forceFocus', () => {
                let e = this.searchBarRef.current;
                null == e || e.focus();
            }),
            es(this, 'focusResult', (e) => {
                I.Z.select(e);
            }),
            es(this, 'handleSelect', (e, t) => {
                let { results: n, channel: i } = this.props;
                null == t ? I.Z.clear(null == i ? void 0 : i.id) : null != n && this.handleClick(n[t].user.id);
            }),
            es(this, 'handleSelectionChange', (e, t) => {
                I.Z.select(t);
                let n = this.scrollerRef.current;
                null != n &&
                    n.scrollToIndex({
                        section: e,
                        row: t,
                        padding: 8
                    });
            }),
            es(this, 'handleQueryChange', (e) => {
                let { channel: t } = this.props,
                    n = (0, N.v_)(t);
                I.Z.search(e, null == t ? void 0 : t.id),
                    null != this._existingTimeout && clearTimeout(this._existingTimeout),
                    (this._existingTimeout = setTimeout(() => {
                        F.default.track($.rMx.SEARCH_USER_LIST_STARTED, {
                            ...n,
                            entry_point_type: this._getAnalyticsEntryPoint().entryPointType,
                            entry_point_source: this._getAnalyticsEntryPoint().entryPointSource,
                            search_query_length: e.length
                        }),
                            this._searchCounter++;
                    }, 500));
            }),
            es(this, 'handleRemoveUser', (e) => {
                let t = Array.from(this.props.selectedUsers);
                I.Z.removeUser(t[e]), this.forceFocus();
            }),
            es(this, 'handleClick', (e) => {
                let { selectedUsers: t, query: n, channel: i } = this.props;
                t.has(e) ? I.Z.removeUser(e) : (I.Z.addUser(e), n.length > 0 && I.Z.clear(null == i ? void 0 : i.id)), this.forceFocus();
            }),
            es(this, 'handleAddFriendNavigation', () => {
                (0, L.uL)($.Z5c.FRIENDS), g.Z.setSection($.pJs.ADD_FRIEND), this.props.onClose();
            }),
            es(this, 'handleScroll', () => {
                let e = this.scrollerRef.current;
                null != e && this.setState({ separator: !e.isScrolledToTop() });
            }),
            es(this, 'createNewDM', (e) => {
                let t = this._searchCounter,
                    { channel: n } = this.props,
                    i = (0, N.v_)(n),
                    s = !0;
                1 === e.length && (s = null == E.Z._openCachedDMChannel(e[0])),
                    F.default.track($.rMx.CREATE_DM_USER_LIST_CLICKED, {
                        ...i,
                        is_new_dm: s,
                        entry_point_type: this._getAnalyticsEntryPoint().entryPointType,
                        entry_point_source: this._getAnalyticsEntryPoint().entryPointSource,
                        recipient_ids: e,
                        num_searches: t,
                        affinity_score: this._getUserAffinities(e).affinities
                    }),
                    E.Z.openPrivateChannel(e, !1, !1, 'New Group DM');
            }),
            es(this, 'pushToExistingDM', (e, t) => {
                let n = this._searchCounter,
                    i = (0, N.v_)(e),
                    s = w.Z.getChannelId() === e.id;
                E.Z.addRecipients(e.id, t, $.Sbl.ADD_FRIENDS_TO_DM).then((n) => {
                    if (!!s) {
                        if (e.isDM() && n !== e.id) {
                            f.Z.call(n, !1, !0);
                            return;
                        }
                        f.Z.ring(n, t);
                    }
                }),
                    F.default.track($.rMx.CREATE_DM_USER_LIST_CLICKED, {
                        ...i,
                        is_new_dm: !0,
                        entry_point_type: this._getAnalyticsEntryPoint().entryPointType,
                        entry_point_source: this._getAnalyticsEntryPoint().entryPointSource,
                        recipient_ids: t,
                        num_searches: n,
                        affinity_score: this._getUserAffinities(t).affinities
                    });
            }),
            es(this, 'handleInviteUsers', () => {
                let { channel: e, selectedUsers: t, onClose: n } = this.props,
                    i = Array.from(t);
                if (null != e) {
                    let t = em(Array.from(new Set([...e.recipients, ...i])));
                    t.size > 0
                        ? (0, p.openModal)(
                              (n) =>
                                  (0, s.jsx)(ec, {
                                      ...n,
                                      onConfirm: () => this.pushToExistingDM(e, i),
                                      channelIds: t
                                  }),
                              {},
                              (0, p.modalContextFromAppContext)(this.context.appContext)
                          )
                        : this.pushToExistingDM(e, i);
                } else {
                    let e = em(i);
                    i.length > 1 && e.size > 0
                        ? (0, p.openModal)(
                              (t) =>
                                  (0, s.jsx)(ec, {
                                      ...t,
                                      onConfirm: () => this.createNewDM(i),
                                      channelIds: e
                                  }),
                              {},
                              (0, p.modalContextFromAppContext)(this.context.appContext)
                          )
                        : this.createNewDM(i);
                }
                n();
            }),
            es(this, 'handleCopyInvite', (e) => {
                let { channel: t, invite: n } = this.props;
                null != n && (0, W.JG)(e),
                    null != this.copyTimeout && clearTimeout(this.copyTimeout),
                    this.setState({ copied: !0 }),
                    (this.copyTimeout = setTimeout(() => {
                        this.setState({ copied: !1 });
                    }, 1000)),
                    F.default.track($.rMx.COPY_INSTANT_INVITE, {
                        server: null,
                        channel: null != t ? t.id : null,
                        channel_type: null != t ? t.type : null,
                        location: $.Sbl.ADD_FRIENDS_TO_DM,
                        code: null != n ? n.code : null
                    });
            });
    }
}
function ed(e) {
    let { channel: t, ...n } = e;
    O.Z.useExperiment({ location: 'desktop_dm_list' });
    let i = (0, m.cj)([k.Z, U.Z, G.Z], () => {
        let e;
        return (
            null != t && null != (e = U.Z.getInvite(t.id)) && e.isExpired() && (e = null),
            {
                ...k.Z.getState(),
                invite: e,
                hideDiscriminator: G.Z.hidePersonalInformation,
                hideInstantInvites: G.Z.hideInstantInvites
            }
        );
    });
    return (0, s.jsx)(eu, {
        channel: t,
        ...n,
        ...i
    });
}
function eh(e) {
    var t, n;
    let { channel: i, iconClassName: l, icon: r, tooltip: o, tooltipPosition: c = 'bottom', popoutPosition: u = 'bottom', popoutAlign: d = 'right', subscribeToGlobalHotkey: h = !1 } = e,
        [_, f] = a.useState(null != i && i.isGroupDM() && 0 === i.recipients.length),
        E = a.useCallback(() => f((e) => !e), []);
    a.useEffect(
        () => (
            h && z.S.subscribe($.CkL.TOGGLE_DM_CREATE, E),
            () => {
                z.S.unsubscribe($.CkL.TOGGLE_DM_CREATE, E);
            }
        ),
        [h, E]
    );
    let g = (0, m.e7)([V.default], () => V.default.getUser(null == i ? void 0 : i.getRecipientId()));
    return (a.useEffect(() => {
        (0, j._)();
    }, []),
    (null !== (t = null == g ? void 0 : g.bot) && void 0 !== t && t) || (null !== (n = null == g ? void 0 : g.isProvisional()) && void 0 !== n && n))
        ? null
        : (0, s.jsx)(p.Popout, {
              renderPopout: (e) =>
                  (0, s.jsx)(ed, {
                      ...e,
                      onClose: e.closePopout,
                      channel: i
                  }),
              position: u,
              shouldShow: _,
              align: d,
              onRequestClose: () => f(!1),
              animation: p.Popout.Animation.NONE,
              children: (e) =>
                  (0, s.jsx)(J.ZP.Icon, {
                      ...e,
                      onClick: E,
                      icon: null != r ? r : null == i ? p.ChatPlusIcon : p.GroupPlusIcon,
                      className: l,
                      iconClassName: l,
                      tooltip: o,
                      tooltipPosition: c
                  })
          });
}
function em(e) {
    let t = ep(e);
    return new Set(
        c()(D.Z.getMutablePrivateChannels())
            .values()
            .filter((e) => (0, y.bc)(e.type))
            .filter((e) => ep(e.recipients) === t)
            .map((e) => e.id)
            .value()
    );
}
function ep(e) {
    return JSON.stringify(e.sort());
}
es(eu, 'contextType', v.ZP);
