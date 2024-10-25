n.d(t, {
    Z: function () {
        return ed;
    }
}),
    n(411104),
    n(653041),
    n(47120);
var i,
    s = n(200651),
    a = n(192379),
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
    P = n(93127),
    j = n(428598),
    O = n(131704),
    y = n(592125),
    D = n(341165),
    U = n(544610),
    k = n(19780),
    w = n(306680),
    B = n(699516),
    H = n(246946),
    G = n(594174),
    V = n(626135),
    F = n(572004),
    W = n(585483),
    z = n(823379),
    Y = n(709054),
    K = n(51144),
    q = n(73752),
    X = n(665149),
    J = n(575464),
    Q = n(981631),
    $ = n(689938),
    ee = n(411542),
    et = n(803636),
    en = n(113207);
function ei(e, t, n) {
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
let es = (0, b.hQ)(),
    ea = (0, b.hQ)();
function el(e) {
    let { className: t, children: n } = e;
    return (0, s.jsxs)(M.Z, {
        align: M.Z.Align.CENTER,
        justify: M.Z.Justify.CENTER,
        direction: M.Z.Direction.VERTICAL,
        className: r()(ee.errorState, t),
        children: [(0, s.jsx)('div', { className: r()(ee.errorStateIcon, en.marginBottom20) }), n]
    });
}
let er = (e) => {
        var t;
        let { channel: n, onClose: i } = e,
            a = null !== (t = (0, Z.ZP)(n)) && void 0 !== t ? t : '',
            l = (0, m.e7)([w.ZP], () => {
                var e;
                return null !== (e = w.ZP.lastMessageId(n.id)) && void 0 !== e ? e : n.id;
            });
        return (0, s.jsx)(p.Clickable, {
            onClick: () => {
                (0, L.XU)(Q.ME, n.id), i();
            },
            children: (0, s.jsxs)('div', {
                className: ee.confirmChannelItemContainer,
                children: [
                    (0, s.jsx)(p.Avatar, {
                        src: (0, A.x)(n),
                        size: p.AvatarSizes.SIZE_24,
                        'aria-label': a
                    }),
                    (0, s.jsx)('span', {
                        className: ee.confirmChannelName,
                        children: a
                    }),
                    (0, s.jsx)('span', {
                        className: ee.lastActiveTimestamp,
                        children: d()(Y.default.extractTimestamp(l)).fromNow()
                    })
                ]
            })
        });
    },
    eo = (e) => {
        let { onConfirm: t, channelIds: n, ...i } = e,
            a = (0, m.Wu)([y.Z], () => Array.from(n).map(y.Z.getChannel), [n]);
        return (0, s.jsxs)(p.ConfirmModal, {
            header: $.Z.Messages.GROUP_DM_INVITE_CONFIRM,
            confirmText: $.Z.Messages.GROUP_DM_INVITE_CONFIRM_BUTTON,
            cancelText: $.Z.Messages.CANCEL,
            onConfirm: t,
            confirmButtonColor: p.Button.Colors.BRAND,
            ...i,
            children: [
                (0, s.jsx)(p.Text, {
                    variant: 'text-md/normal',
                    children: $.Z.Messages.GROUP_DM_INVITE_CONFIRM_DESCRIPTION
                }),
                (0, s.jsx)(p.FormTitle, {
                    className: ee.selectExistingFormHeader,
                    children: $.Z.Messages.GROUP_DM_INVITE_SELECT_EXISTING
                }),
                (0, s.jsx)(p.Scroller, {
                    className: ee.confirmInviteScroller,
                    children: a
                        .filter(z.lm)
                        .sort((e, t) => {
                            var n, i;
                            let s = null !== (n = e.lastMessageId) && void 0 !== n ? n : e.id,
                                a = null !== (i = t.lastMessageId) && void 0 !== i ? i : t.id;
                            return Y.default.compare(a, s);
                        })
                        .map((e) =>
                            (0, s.jsx)(
                                er,
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
class ec extends (i = a.PureComponent) {
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
        V.default.track(Q.rMx.OPEN_POPOUT, {
            ...t,
            type: this._getAnalyticsEntryPoint().entryPointType,
            source: this._getAnalyticsEntryPoint().entryPointSource,
            is_friend: !this.isNotFriends()
        }),
            W.S.subscribe(Q.CkL.SCROLL_PAGE_UP, this.scrollPageUp),
            W.S.subscribe(Q.CkL.SCROLL_PAGE_DOWN, this.scrollPageDown);
    }
    componentWillUnmount() {
        W.S.unsubscribe(Q.CkL.SCROLL_PAGE_UP, this.scrollPageUp), W.S.unsubscribe(Q.CkL.SCROLL_PAGE_DOWN, this.scrollPageDown), null != this.copyTimeout && clearTimeout(this.copyTimeout), _.Z.wait(() => I.Z.close());
    }
    isNotFriends() {
        let { channel: e } = this.props;
        if (null == e || !e.isDM()) return !1;
        let t = e.getRecipientId();
        if (null == t) throw Error('no recipient in DM');
        return !B.Z.isFriend(t);
    }
    createInvite() {
        let { channel: e } = this.props;
        if (null == e || !e.isMultiUserDM() || this.isPartyFull()) return;
        let { inviteMaxAgeSeconds: t } = q.Z.getCurrentConfig({ location: '5326c5_1' }, { autoTrackExposure: !1 });
        C.Z.createInvite(e.id, { max_age: t }, Q.t4x.GROUP_DM);
    }
    isPartyFull() {
        let { channel: e } = this.props;
        return null != e && e.recipients.length + 1 >= this.getMaxParticipants();
    }
    getMaxParticipants() {
        let { channel: e } = this.props,
            t = G.default.getCurrentUser();
        return null != t && t.isStaff() ? Q.p3w : null != e && e.userLimit > 0 ? e.userLimit : Q.pAY;
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
            a = t.size > 1 ? $.Z.Messages.CREATE_GROUP_DM : $.Z.Messages.CREATE_DM;
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
            className: ee.addButton,
            children: (0, s.jsx)(p.Button, {
                size: p.Button.Sizes.SMALL,
                disabled: i,
                onClick: this.handleInviteUsers,
                children: $.Z.Messages.ADD
            })
        });
    }
    renderSubtitle() {
        if (!this.props.hasFriends || this.isNotFriends() || this.isPartyFull()) return null;
        let e = this.getRemaining(),
            t = e <= 0 ? $.Z.Messages.GROUP_DM_INVITE_FULL_SUB2.format({ number: this.getMaxParticipants() }) : $.Z.Messages.GROUP_DM_INVITE_REMAINING.format({ number: e });
        return (0, s.jsx)(p.Text, {
            variant: 'text-xs/normal',
            className: r()(ee.subtitle, { [ee.subtitleWarning]: e < 0 }, en.marginTop4),
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
                let t = G.default.getUser(e);
                null != t && o.push(K.ZP.getName(t));
            }),
            (0, s.jsxs)(M.Z, {
                className: r()(ee.searchBar, en.marginTop20),
                children: [
                    (0, s.jsx)(S.ZP, {
                        ref: this.searchBarRef,
                        className: ee.searchBarComponent,
                        autoFocus: !0,
                        placeholder: 0 === l.size ? $.Z.Messages.GROUP_DM_SEARCH_PLACEHOLDER : void 0,
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
                            'aria-labelledby': es,
                            'aria-controls': ea,
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
            t = this.isNotFriends() ? $.Z.Messages.GROUP_DM_ADD_FRIENDS : $.Z.Messages.GROUP_DM_HEADER;
        return (0, s.jsxs)(p.ModalHeader, {
            direction: M.Z.Direction.VERTICAL,
            align: M.Z.Align.STRETCH,
            className: ee.__invalid_header,
            separator: e,
            children: [
                h.tq ? this.renderMobileCloseButton() : null,
                (0, s.jsx)(p.Heading, {
                    id: es,
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
            let n = G.default.getUser(t),
                i = null != n ? n.username : '',
                a = null != n && B.Z.getRelationshipType(n.id) === Q.OGo.PENDING_OUTGOING;
            return (0, s.jsxs)(el, {
                className: ee.notFriends,
                children: [
                    (0, s.jsx)('div', { children: $.Z.Messages.GROUP_DM_INVITE_NOT_FRIENDS.format({ username: i }) }),
                    (0, s.jsx)(p.Button, {
                        disabled: a,
                        size: p.Button.Sizes.SMALL,
                        onClick: () => (null != n ? this.handleAddFriend(n) : null),
                        className: en.marginTop20,
                        children: a ? $.Z.Messages.ADD_FRIEND_BUTTON_AFTER : $.Z.Messages.ADD_FRIEND_BUTTON
                    })
                ]
            });
        }
        return t
            ? this.isPartyFull()
                ? (0, s.jsxs)(el, {
                      className: ee.partyFull,
                      children: [(0, s.jsx)('div', { children: $.Z.Messages.GROUP_DM_INVITE_FULL_MAIN }), (0, s.jsx)('div', { children: $.Z.Messages.GROUP_DM_INVITE_FULL_SUB2.format({ number: this.getMaxParticipants() }) })]
                  })
                : 0 === n.length
                  ? (0, s.jsx)(el, {
                        className: r()(ee.noResults, en.marginBottom20),
                        children: (0, s.jsx)('div', { children: $.Z.Messages.GROUP_DM_INVITE_EMPTY })
                    })
                  : (0, s.jsx)(p.List, {
                        ref: this.scrollerRef,
                        sections: [n.length],
                        className: ee.scroller,
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
                        innerId: ea,
                        innerAriaMultiselectable: !0,
                        innerAriaOrientation: 'vertical'
                    })
            : (0, s.jsxs)(el, {
                  className: ee.noFriends,
                  children: [
                      (0, s.jsx)('div', { children: $.Z.Messages.GROUP_DM_INVITE_NO_FRIENDS }),
                      (0, s.jsx)(p.Button, {
                          autoFocus: !0,
                          color: p.Button.Colors.GREEN,
                          fullWidth: !0,
                          size: p.Button.Sizes.SMALL,
                          onClick: this.handleAddFriendNavigation,
                          className: en.marginTop20,
                          children: $.Z.Messages.ADD_FRIEND
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
                    className: en.marginBottom8,
                    children: $.Z.Messages.GROUP_DM_INVITE_LINK_TITLE
                }),
                (0, s.jsxs)(M.Z, {
                    className: r()(et.input, { [et.success]: i }),
                    justify: M.Z.Justify.BETWEEN,
                    align: M.Z.Align.CENTER,
                    children: [
                        l.length > 0
                            ? (0, s.jsx)(p.TextInput, {
                                  className: ee.copyInput,
                                  name: 'invite',
                                  value: n ? $.Z.Messages.INSTANT_INVITE_HIDDEN : l,
                                  editable: !1,
                                  inputClassName: ee.input,
                                  spellCheck: 'false',
                                  onClick: (e) => e.currentTarget.select()
                              })
                            : (0, s.jsx)(p.TextInput, {
                                  className: ee.copyInput,
                                  name: 'invite',
                                  value: l,
                                  placeholder: (0, R.Z)($.Z.Messages.GROUP_DM_INVITE_LINK_EXAMPLE),
                                  editable: !1,
                                  inputClassName: ee.input,
                                  spellCheck: 'false',
                                  onClick: () => this.createInvite()
                              }),
                        F.wS && l.length > 0
                            ? (0, s.jsx)(p.Button, {
                                  size: p.Button.Sizes.SMALL,
                                  color: i ? p.Button.Colors.GREEN : p.Button.Colors.BRAND,
                                  className: ee.copyButton,
                                  onClick: () => this.handleCopyInvite(l),
                                  children: i ? $.Z.Messages.INVITE_COPIED : $.Z.Messages.COPY
                              })
                            : null,
                        0 === l.length
                            ? (0, s.jsx)(p.Button, {
                                  size: p.Button.Sizes.SMALL,
                                  color: p.Button.Colors.BRAND,
                                  className: ee.copyButton,
                                  onClick: () => this.createInvite(),
                                  children: $.Z.Messages.GROUP_DM_INVITE_LINK_CREATE
                              })
                            : null
                    ]
                }),
                l.length > 0
                    ? (0, s.jsx)(p.Text, {
                          variant: 'text-xs/normal',
                          className: r()(en.marginTop8, ee.footerText),
                          children: $.Z.Messages.INVITE_EXPIRES_HOURS.format({ numHours: ''.concat(24) })
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
                    (0, s.jsx)('div', { className: ee.footerSeparator }),
                    (0, s.jsx)(M.Z, {
                        direction: M.Z.Direction.VERTICAL,
                        className: ee.footer,
                        children: n
                    })
                ]
            });
    }
    render() {
        let { transitionState: e } = this.props;
        return (0, s.jsxs)(p.ModalRoot, {
            transitionState: null != e ? e : p.ModalTransitionState.ENTERED,
            className: ee.popout,
            children: [this.renderHeader(), this.renderBody(), this.renderFooter()]
        });
    }
    handleAddFriend(e) {
        this.props.onClose(),
            T.Z.sendRequest({
                discordTag: K.ZP.getUserTag(e, { identifiable: 'always' }),
                context: { location: 'Group DM' }
            });
    }
    _getUserAffinities(e) {
        return {
            affinities: e.map((e) => {
                var t;
                let n = j.Z.getUserAffinity(e);
                return null !== (t = null == n ? void 0 : n.communicationProbability) && void 0 !== t ? t : -1;
            })
        };
    }
    constructor(...e) {
        super(...e),
            ei(this, 'state', {
                separator: !1,
                copied: !1
            }),
            ei(this, 'copyTimeout', void 0),
            ei(this, 'scrollerRef', a.createRef()),
            ei(this, 'searchBarRef', a.createRef()),
            ei(this, '_mobileCloseRef', a.createRef()),
            ei(this, '_searchCounter', 0),
            ei(this, '_existingTimeout', null),
            ei(this, 'scrollPageUp', () => {
                var e;
                null === (e = this.scrollerRef.current) || void 0 === e || e.scrollPageUp({ animate: !0 });
            }),
            ei(this, 'scrollPageDown', () => {
                var e;
                null === (e = this.scrollerRef.current) || void 0 === e || e.scrollPageDown({ animate: !0 });
            }),
            ei(this, 'renderMobileCloseButton', () =>
                (0, s.jsx)('div', {
                    className: r()(ee.mobileToolsContainer),
                    ref: this._mobileCloseRef,
                    children: (0, s.jsx)(p.FocusRingScope, {
                        containerRef: this._mobileCloseRef,
                        children: (0, s.jsx)('div', {
                            children: (0, s.jsx)(x.Z, {
                                className: ee.mobileToolsCloseIcon,
                                closeAction: this.props.onClose,
                                keybind: 'ESC'
                            })
                        })
                    })
                })
            ),
            ei(this, 'getRowHeight', (e, t) => {
                if (e > 0) return 0;
                let { results: n } = this.props;
                return null != n[t] ? 42 : 0;
            }),
            ei(this, 'renderRow', (e) => {
                let { section: t, row: n } = e;
                if (t > 0) return null;
                let { results: i, selectedUsers: a, selectedRow: l, hideDiscriminator: r } = this.props,
                    o = i[n];
                if (null == o) return null;
                let { user: c, comparator: u } = o,
                    d = a.has(c.id);
                return (0, s.jsx)(
                    J.Z,
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
            ei(this, 'forceFocus', () => {
                let e = this.searchBarRef.current;
                null == e || e.focus();
            }),
            ei(this, 'focusResult', (e) => {
                I.Z.select(e);
            }),
            ei(this, 'handleSelect', (e, t) => {
                let { results: n, channel: i } = this.props;
                null == t ? I.Z.clear(null == i ? void 0 : i.id) : null != n && this.handleClick(n[t].user.id);
            }),
            ei(this, 'handleSelectionChange', (e, t) => {
                I.Z.select(t);
                let n = this.scrollerRef.current;
                null != n &&
                    n.scrollToIndex({
                        section: e,
                        row: t,
                        padding: 8
                    });
            }),
            ei(this, 'handleQueryChange', (e) => {
                let { channel: t } = this.props,
                    n = (0, N.v_)(t);
                I.Z.search(e, null == t ? void 0 : t.id),
                    null != this._existingTimeout && clearTimeout(this._existingTimeout),
                    (this._existingTimeout = setTimeout(() => {
                        V.default.track(Q.rMx.SEARCH_USER_LIST_STARTED, {
                            ...n,
                            entry_point_type: this._getAnalyticsEntryPoint().entryPointType,
                            entry_point_source: this._getAnalyticsEntryPoint().entryPointSource,
                            search_query_length: e.length
                        }),
                            this._searchCounter++;
                    }, 500));
            }),
            ei(this, 'handleRemoveUser', (e) => {
                let t = Array.from(this.props.selectedUsers);
                I.Z.removeUser(t[e]), this.forceFocus();
            }),
            ei(this, 'handleClick', (e) => {
                let { selectedUsers: t, query: n, channel: i } = this.props;
                t.has(e) ? I.Z.removeUser(e) : (I.Z.addUser(e), n.length > 0 && I.Z.clear(null == i ? void 0 : i.id)), this.forceFocus();
            }),
            ei(this, 'handleAddFriendNavigation', () => {
                (0, L.uL)(Q.Z5c.FRIENDS), g.Z.setSection(Q.pJs.ADD_FRIEND), this.props.onClose();
            }),
            ei(this, 'handleScroll', () => {
                let e = this.scrollerRef.current;
                null != e && this.setState({ separator: !e.isScrolledToTop() });
            }),
            ei(this, 'createNewDM', (e) => {
                let t = this._searchCounter,
                    { channel: n } = this.props,
                    i = (0, N.v_)(n),
                    s = !0;
                1 === e.length && (s = null == E.Z._openCachedDMChannel(e[0])),
                    V.default.track(Q.rMx.CREATE_DM_USER_LIST_CLICKED, {
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
            ei(this, 'pushToExistingDM', (e, t) => {
                let n = this._searchCounter,
                    i = (0, N.v_)(e),
                    s = k.Z.getChannelId() === e.id;
                E.Z.addRecipients(e.id, t, Q.Sbl.ADD_FRIENDS_TO_DM).then((n) => {
                    if (!!s) {
                        if (e.isDM() && n !== e.id) {
                            f.Z.call(n, !1, !0);
                            return;
                        }
                        f.Z.ring(n, t);
                    }
                }),
                    V.default.track(Q.rMx.CREATE_DM_USER_LIST_CLICKED, {
                        ...i,
                        is_new_dm: !0,
                        entry_point_type: this._getAnalyticsEntryPoint().entryPointType,
                        entry_point_source: this._getAnalyticsEntryPoint().entryPointSource,
                        recipient_ids: t,
                        num_searches: n,
                        affinity_score: this._getUserAffinities(t).affinities
                    });
            }),
            ei(this, 'handleInviteUsers', () => {
                let { channel: e, selectedUsers: t, onClose: n } = this.props,
                    i = Array.from(t);
                if (null != e) {
                    let t = eh(Array.from(new Set([...e.recipients, ...i])));
                    t.size > 0
                        ? (0, p.openModal)(
                              (n) =>
                                  (0, s.jsx)(eo, {
                                      ...n,
                                      onConfirm: () => this.pushToExistingDM(e, i),
                                      channelIds: t
                                  }),
                              {},
                              (0, p.modalContextFromAppContext)(this.context.appContext)
                          )
                        : this.pushToExistingDM(e, i);
                } else {
                    let e = eh(i);
                    i.length > 1 && e.size > 0
                        ? (0, p.openModal)(
                              (t) =>
                                  (0, s.jsx)(eo, {
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
            ei(this, 'handleCopyInvite', (e) => {
                let { channel: t, invite: n } = this.props;
                null != n && (0, F.JG)(e),
                    null != this.copyTimeout && clearTimeout(this.copyTimeout),
                    this.setState({ copied: !0 }),
                    (this.copyTimeout = setTimeout(() => {
                        this.setState({ copied: !1 });
                    }, 1000)),
                    V.default.track(Q.rMx.COPY_INSTANT_INVITE, {
                        server: null,
                        channel: null != t ? t.id : null,
                        channel_type: null != t ? t.type : null,
                        location: Q.Sbl.ADD_FRIENDS_TO_DM,
                        code: null != n ? n.code : null
                    });
            });
    }
}
function eu(e) {
    let { channel: t, ...n } = e,
        i = (0, m.cj)([U.Z, D.Z, H.Z], () => {
            let e;
            return (
                null != t && null != (e = D.Z.getInvite(t.id)) && e.isExpired() && (e = null),
                {
                    ...U.Z.getState(),
                    invite: e,
                    hideDiscriminator: H.Z.hidePersonalInformation,
                    hideInstantInvites: H.Z.hideInstantInvites
                }
            );
        });
    return (0, s.jsx)(ec, {
        channel: t,
        ...n,
        ...i
    });
}
function ed(e) {
    var t, n;
    let { channel: i, iconClassName: l, icon: r, tooltip: o, tooltipPosition: c = 'bottom', popoutPosition: u = 'bottom', popoutAlign: d = 'right', subscribeToGlobalHotkey: h = !1 } = e,
        [_, f] = a.useState(null != i && i.isGroupDM() && 0 === i.recipients.length),
        E = a.useCallback(() => f((e) => !e), []);
    a.useEffect(
        () => (
            h && W.S.subscribe(Q.CkL.TOGGLE_DM_CREATE, E),
            () => {
                W.S.unsubscribe(Q.CkL.TOGGLE_DM_CREATE, E);
            }
        ),
        [h, E]
    );
    let g = (0, m.e7)([G.default], () => G.default.getUser(null == i ? void 0 : i.getRecipientId()));
    return (a.useEffect(() => {
        (0, P._)();
    }, []),
    (null !== (t = null == g ? void 0 : g.bot) && void 0 !== t && t) || (null !== (n = null == g ? void 0 : g.isProvisional) && void 0 !== n && n))
        ? null
        : (0, s.jsx)(p.Popout, {
              renderPopout: (e) =>
                  (0, s.jsx)(eu, {
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
                  (0, s.jsx)(X.ZP.Icon, {
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
function eh(e) {
    let t = em(e);
    return new Set(
        c()(y.Z.getMutablePrivateChannels())
            .values()
            .filter((e) => (0, O.bc)(e.type))
            .filter((e) => em(e.recipients) === t)
            .map((e) => e.id)
            .value()
    );
}
function em(e) {
    return JSON.stringify(e.sort());
}
ei(ec, 'contextType', v.ZP);
