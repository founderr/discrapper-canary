n.d(t, {
    Z: function () {
        return ed;
    }
}),
    n(411104),
    n(653041),
    n(47120);
var i,
    l = n(200651),
    r = n(192379),
    s = n(120356),
    a = n.n(s),
    o = n(392711),
    c = n.n(o),
    u = n(913527),
    d = n.n(u),
    h = n(873546),
    m = n(442837),
    p = n(481060),
    f = n(570140),
    g = n(26151),
    C = n(493683),
    x = n(758059),
    v = n(447543),
    _ = n(708690),
    I = n(194359),
    E = n(425493),
    b = n(461745),
    S = n(40851),
    Z = n(367907),
    T = n(43267),
    N = n(933557),
    j = n(600164),
    A = n(313201),
    y = n(366980),
    P = n(703656),
    M = n(93127),
    R = n(428598),
    L = n(131704),
    k = n(592125),
    O = n(341165),
    w = n(544610),
    D = n(19780),
    U = n(306680),
    B = n(699516),
    H = n(246946),
    F = n(594174),
    G = n(626135),
    V = n(572004),
    z = n(585483),
    W = n(823379),
    Y = n(709054),
    K = n(51144),
    q = n(73752),
    X = n(665149),
    J = n(575464),
    Q = n(981631),
    $ = n(388032),
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
let el = (0, A.hQ)(),
    er = (0, A.hQ)();
function es(e) {
    let { className: t, children: n } = e;
    return (0, l.jsxs)(j.Z, {
        align: j.Z.Align.CENTER,
        justify: j.Z.Justify.CENTER,
        direction: j.Z.Direction.VERTICAL,
        className: a()(ee.errorState, t),
        children: [(0, l.jsx)('div', { className: a()(ee.errorStateIcon, en.marginBottom20) }), n]
    });
}
let ea = (e) => {
        var t;
        let { channel: n, onClose: i } = e,
            r = null !== (t = (0, N.ZP)(n)) && void 0 !== t ? t : '',
            s = (0, m.e7)([U.ZP], () => {
                var e;
                return null !== (e = U.ZP.lastMessageId(n.id)) && void 0 !== e ? e : n.id;
            });
        return (0, l.jsx)(p.Clickable, {
            onClick: () => {
                (0, P.XU)(Q.ME, n.id), i();
            },
            children: (0, l.jsxs)('div', {
                className: ee.confirmChannelItemContainer,
                children: [
                    (0, l.jsx)(p.Avatar, {
                        src: (0, T.x)(n),
                        size: p.AvatarSizes.SIZE_24,
                        'aria-label': r
                    }),
                    (0, l.jsx)('span', {
                        className: ee.confirmChannelName,
                        children: r
                    }),
                    (0, l.jsx)('span', {
                        className: ee.lastActiveTimestamp,
                        children: d()(Y.default.extractTimestamp(s)).fromNow()
                    })
                ]
            })
        });
    },
    eo = (e) => {
        let { onConfirm: t, channelIds: n, ...i } = e,
            r = (0, m.Wu)([k.Z], () => Array.from(n).map(k.Z.getChannel), [n]);
        return (0, l.jsxs)(p.ConfirmModal, {
            header: $.intl.string($.t.uFHxNT),
            confirmText: $.intl.string($.t.KCNNJi),
            cancelText: $.intl.string($.t['ETE/oK']),
            onConfirm: t,
            confirmButtonColor: p.Button.Colors.BRAND,
            ...i,
            children: [
                (0, l.jsx)(p.Text, {
                    variant: 'text-md/normal',
                    children: $.intl.string($.t.rIsSqK)
                }),
                (0, l.jsx)(p.FormTitle, {
                    className: ee.selectExistingFormHeader,
                    children: $.intl.string($.t.cjE7wM)
                }),
                (0, l.jsx)(p.Scroller, {
                    className: ee.confirmInviteScroller,
                    children: r
                        .filter(W.lm)
                        .sort((e, t) => {
                            var n, i;
                            let l = null !== (n = e.lastMessageId) && void 0 !== n ? n : e.id,
                                r = null !== (i = t.lastMessageId) && void 0 !== i ? i : t.id;
                            return Y.default.compare(r, l);
                        })
                        .map((e) =>
                            (0, l.jsx)(
                                ea,
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
class ec extends (i = r.PureComponent) {
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
        f.Z.wait(() => _.Z.open(null == e ? void 0 : e.id));
        let t = (0, Z.v_)(e);
        G.default.track(Q.rMx.OPEN_POPOUT, {
            ...t,
            type: this._getAnalyticsEntryPoint().entryPointType,
            source: this._getAnalyticsEntryPoint().entryPointSource,
            is_friend: !this.isNotFriends()
        }),
            z.S.subscribe(Q.CkL.SCROLL_PAGE_UP, this.scrollPageUp),
            z.S.subscribe(Q.CkL.SCROLL_PAGE_DOWN, this.scrollPageDown);
    }
    componentWillUnmount() {
        z.S.unsubscribe(Q.CkL.SCROLL_PAGE_UP, this.scrollPageUp), z.S.unsubscribe(Q.CkL.SCROLL_PAGE_DOWN, this.scrollPageDown), null != this.copyTimeout && clearTimeout(this.copyTimeout), f.Z.wait(() => _.Z.close());
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
        v.Z.createInvite(e.id, { max_age: t }, Q.t4x.GROUP_DM);
    }
    isPartyFull() {
        let { channel: e } = this.props;
        return null != e && e.recipients.length + 1 >= this.getMaxParticipants();
    }
    getMaxParticipants() {
        let { channel: e } = this.props,
            t = F.default.getCurrentUser();
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
            r = t.size > 1 ? $.intl.string($.t.ZGMNAw) : $.intl.string($.t['6Urw1t']);
        return (0, l.jsx)(p.Button, {
            fullWidth: !0,
            disabled: i,
            onClick: this.handleInviteUsers,
            children: r
        });
    }
    renderAddUsersButton() {
        let { channel: e, selectedUsers: t } = this.props;
        if (null == e || e.isDM()) return;
        let n = this.getRemaining(),
            i = 0 === t.size || n < 0;
        return (0, l.jsx)('div', {
            className: ee.addButton,
            children: (0, l.jsx)(p.Button, {
                size: p.Button.Sizes.SMALL,
                disabled: i,
                onClick: this.handleInviteUsers,
                children: $.intl.string($.t.OYkgVl)
            })
        });
    }
    renderSubtitle() {
        if (!this.props.hasFriends || this.isNotFriends() || this.isPartyFull()) return null;
        let e = this.getRemaining(),
            t = e <= 0 ? $.intl.formatToPlainString($.t.xYr009, { number: this.getMaxParticipants() }) : $.intl.formatToPlainString($.t.HrSDPD, { number: e });
        return (0, l.jsx)(p.Text, {
            variant: 'text-xs/normal',
            className: a()(ee.subtitle, { [ee.subtitleWarning]: e < 0 }, en.marginTop4),
            children: t
        });
    }
    renderSearchBar() {
        var e;
        let { query: t, hasFriends: n, results: i, selectedRow: r, selectedUsers: s } = this.props;
        if (!n || this.isNotFriends()) return null;
        let o = [];
        return (
            s.forEach((e) => {
                let t = F.default.getUser(e);
                null != t && o.push(K.ZP.getName(t));
            }),
            (0, l.jsxs)(j.Z, {
                className: a()(ee.searchBar, en.marginTop20),
                children: [
                    (0, l.jsx)(b.ZP, {
                        ref: this.searchBarRef,
                        className: ee.searchBarComponent,
                        autoFocus: !0,
                        placeholder: 0 === s.size ? $.intl.string($.t.Wxnb6u) : void 0,
                        disabled: this.isPartyFull(),
                        size: b.ZP.Sizes.MEDIUM,
                        query: t,
                        selectedRow: r,
                        sections: [null !== (e = null == i ? void 0 : i.length) && void 0 !== e ? e : 0],
                        tags: o,
                        onSelect: this.handleSelect,
                        onSelectionChange: this.handleSelectionChange,
                        onQueryChange: this.handleQueryChange,
                        onRemoveTag: this.handleRemoveUser,
                        inputProps: {
                            'aria-labelledby': el,
                            'aria-controls': er,
                            'aria-expanded': !0,
                            'aria-activedescendant': 'user-row-'.concat(r)
                        }
                    }),
                    this.renderAddUsersButton()
                ]
            })
        );
    }
    renderHeader() {
        let e = null != this.scrollerRef.current && this.state.separator,
            t = this.isNotFriends() ? $.intl.string($.t.Xjlbvr) : $.intl.string($.t.CdNhGR);
        return (0, l.jsxs)(p.ModalHeader, {
            direction: j.Z.Direction.VERTICAL,
            align: j.Z.Align.STRETCH,
            className: ee.__invalid_header,
            separator: e,
            children: [
                h.tq ? this.renderMobileCloseButton() : null,
                (0, l.jsx)(p.Heading, {
                    id: el,
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
            let n = F.default.getUser(t),
                i = null != n ? n.username : '',
                r = null != n && B.Z.getRelationshipType(n.id) === Q.OGo.PENDING_OUTGOING;
            return (0, l.jsxs)(es, {
                className: ee.notFriends,
                children: [
                    (0, l.jsx)('div', { children: $.intl.format($.t['eg+R9/'], { username: i }) }),
                    (0, l.jsx)(p.Button, {
                        disabled: r,
                        size: p.Button.Sizes.SMALL,
                        onClick: () => (null != n ? this.handleAddFriend(n) : null),
                        className: en.marginTop20,
                        children: r ? $.intl.string($.t.xMH6vL) : $.intl.string($.t['PMsq/f'])
                    })
                ]
            });
        }
        return t
            ? this.isPartyFull()
                ? (0, l.jsxs)(es, {
                      className: ee.partyFull,
                      children: [(0, l.jsx)('div', { children: $.intl.string($.t.OtTQDw) }), (0, l.jsx)('div', { children: $.intl.format($.t.xYr009, { number: this.getMaxParticipants() }) })]
                  })
                : 0 === n.length
                  ? (0, l.jsx)(es, {
                        className: a()(ee.noResults, en.marginBottom20),
                        children: (0, l.jsx)('div', { children: $.intl.string($.t.SV4DJy) })
                    })
                  : (0, l.jsx)(p.List, {
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
                        innerId: er,
                        innerAriaMultiselectable: !0,
                        innerAriaOrientation: 'vertical'
                    })
            : (0, l.jsxs)(es, {
                  className: ee.noFriends,
                  children: [
                      (0, l.jsx)('div', { children: $.intl.string($.t['7orY6O']) }),
                      (0, l.jsx)(p.Button, {
                          autoFocus: !0,
                          color: p.Button.Colors.GREEN,
                          fullWidth: !0,
                          size: p.Button.Sizes.SMALL,
                          onClick: this.handleAddFriendNavigation,
                          className: en.marginTop20,
                          children: $.intl.string($.t.w5uwoK)
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
        let s = null != t ? (0, y.Z)(t.code) : '';
        return (0, l.jsxs)(r.Fragment, {
            children: [
                (0, l.jsx)(p.FormTitle, {
                    tag: 'h5',
                    className: en.marginBottom8,
                    children: $.intl.string($.t.t3O2BQ)
                }),
                (0, l.jsxs)(j.Z, {
                    className: a()(et.input, { [et.success]: i }),
                    justify: j.Z.Justify.BETWEEN,
                    align: j.Z.Align.CENTER,
                    children: [
                        s.length > 0
                            ? (0, l.jsx)(p.TextInput, {
                                  className: ee.copyInput,
                                  name: 'invite',
                                  value: n ? $.intl.string($.t['6HzNgY']) : s,
                                  editable: !1,
                                  inputClassName: ee.input,
                                  spellCheck: 'false',
                                  onClick: (e) => e.currentTarget.select()
                              })
                            : (0, l.jsx)(p.TextInput, {
                                  className: ee.copyInput,
                                  name: 'invite',
                                  value: s,
                                  placeholder: (0, y.Z)($.intl.string($.t.lPVBqK)),
                                  editable: !1,
                                  inputClassName: ee.input,
                                  spellCheck: 'false',
                                  onClick: () => this.createInvite()
                              }),
                        V.wS && s.length > 0
                            ? (0, l.jsx)(p.Button, {
                                  size: p.Button.Sizes.SMALL,
                                  color: i ? p.Button.Colors.GREEN : p.Button.Colors.BRAND,
                                  className: ee.copyButton,
                                  onClick: () => this.handleCopyInvite(s),
                                  children: i ? $.intl.string($.t.q30c5u) : $.intl.string($.t.OpuAlJ)
                              })
                            : null,
                        0 === s.length
                            ? (0, l.jsx)(p.Button, {
                                  size: p.Button.Sizes.SMALL,
                                  color: p.Button.Colors.BRAND,
                                  className: ee.copyButton,
                                  onClick: () => this.createInvite(),
                                  children: $.intl.string($.t.qzxqUV)
                              })
                            : null
                    ]
                }),
                s.length > 0
                    ? (0, l.jsx)(p.Text, {
                          variant: 'text-xs/normal',
                          className: a()(en.marginTop8, ee.footerText),
                          children: $.intl.format($.t.ZVdJMz, { numHours: ''.concat(24) })
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
            return (0, l.jsxs)(r.Fragment, {
                children: [
                    (0, l.jsx)('div', { className: ee.footerSeparator }),
                    (0, l.jsx)(j.Z, {
                        direction: j.Z.Direction.VERTICAL,
                        className: ee.footer,
                        children: n
                    })
                ]
            });
    }
    render() {
        let { transitionState: e } = this.props;
        return (0, l.jsxs)(p.ModalRoot, {
            transitionState: null != e ? e : p.ModalTransitionState.ENTERED,
            className: ee.popout,
            children: [this.renderHeader(), this.renderBody(), this.renderFooter()]
        });
    }
    handleAddFriend(e) {
        this.props.onClose(),
            I.Z.sendRequest({
                discordTag: K.ZP.getUserTag(e, { identifiable: 'always' }),
                context: { location: 'Group DM' }
            });
    }
    _getUserAffinities(e) {
        return {
            affinities: e.map((e) => {
                var t;
                let n = R.Z.getUserAffinity(e);
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
            ei(this, 'scrollerRef', r.createRef()),
            ei(this, 'searchBarRef', r.createRef()),
            ei(this, '_mobileCloseRef', r.createRef()),
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
                (0, l.jsx)('div', {
                    className: a()(ee.mobileToolsContainer),
                    ref: this._mobileCloseRef,
                    children: (0, l.jsx)(p.FocusRingScope, {
                        containerRef: this._mobileCloseRef,
                        children: (0, l.jsx)('div', {
                            children: (0, l.jsx)(E.Z, {
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
                let { results: i, selectedUsers: r, selectedRow: s, hideDiscriminator: a } = this.props,
                    o = i[n];
                if (null == o) return null;
                let { user: c, comparator: u } = o,
                    d = r.has(c.id);
                return (0, l.jsx)(
                    J.Z,
                    {
                        row: n,
                        user: c,
                        hideDiscriminator: a,
                        comparator: u,
                        checked: d,
                        selected: n === s,
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
                _.Z.select(e);
            }),
            ei(this, 'handleSelect', (e, t) => {
                let { results: n, channel: i } = this.props;
                null == t ? _.Z.clear(null == i ? void 0 : i.id) : null != n && this.handleClick(n[t].user.id);
            }),
            ei(this, 'handleSelectionChange', (e, t) => {
                _.Z.select(t);
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
                    n = (0, Z.v_)(t);
                _.Z.search(e, null == t ? void 0 : t.id),
                    null != this._existingTimeout && clearTimeout(this._existingTimeout),
                    (this._existingTimeout = setTimeout(() => {
                        G.default.track(Q.rMx.SEARCH_USER_LIST_STARTED, {
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
                _.Z.removeUser(t[e]), this.forceFocus();
            }),
            ei(this, 'handleClick', (e) => {
                let { selectedUsers: t, query: n, channel: i } = this.props;
                t.has(e) ? _.Z.removeUser(e) : (_.Z.addUser(e), n.length > 0 && _.Z.clear(null == i ? void 0 : i.id)), this.forceFocus();
            }),
            ei(this, 'handleAddFriendNavigation', () => {
                (0, P.uL)(Q.Z5c.FRIENDS), x.Z.setSection(Q.pJs.ADD_FRIEND), this.props.onClose();
            }),
            ei(this, 'handleScroll', () => {
                let e = this.scrollerRef.current;
                null != e && this.setState({ separator: !e.isScrolledToTop() });
            }),
            ei(this, 'createNewDM', (e) => {
                let t = this._searchCounter,
                    { channel: n } = this.props,
                    i = (0, Z.v_)(n),
                    l = !0;
                1 === e.length && (l = null == C.Z._openCachedDMChannel(e[0])),
                    G.default.track(Q.rMx.CREATE_DM_USER_LIST_CLICKED, {
                        ...i,
                        is_new_dm: l,
                        entry_point_type: this._getAnalyticsEntryPoint().entryPointType,
                        entry_point_source: this._getAnalyticsEntryPoint().entryPointSource,
                        recipient_ids: e,
                        num_searches: t,
                        affinity_score: this._getUserAffinities(e).affinities
                    }),
                    C.Z.openPrivateChannel(e, !1, !1, 'New Group DM');
            }),
            ei(this, 'pushToExistingDM', (e, t) => {
                let n = this._searchCounter,
                    i = (0, Z.v_)(e),
                    l = D.Z.getChannelId() === e.id;
                C.Z.addRecipients(e.id, t, Q.Sbl.ADD_FRIENDS_TO_DM).then((n) => {
                    if (!!l) {
                        if (e.isDM() && n !== e.id) {
                            g.Z.call(n, !1, !0);
                            return;
                        }
                        g.Z.ring(n, t);
                    }
                }),
                    G.default.track(Q.rMx.CREATE_DM_USER_LIST_CLICKED, {
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
                                  (0, l.jsx)(eo, {
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
                                  (0, l.jsx)(eo, {
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
                null != n && (0, V.JG)(e),
                    null != this.copyTimeout && clearTimeout(this.copyTimeout),
                    this.setState({ copied: !0 }),
                    (this.copyTimeout = setTimeout(() => {
                        this.setState({ copied: !1 });
                    }, 1000)),
                    G.default.track(Q.rMx.COPY_INSTANT_INVITE, {
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
        i = (0, m.cj)([w.Z, O.Z, H.Z], () => {
            let e;
            return (
                null != t && null != (e = O.Z.getInvite(t.id)) && e.isExpired() && (e = null),
                {
                    ...w.Z.getState(),
                    invite: e,
                    hideDiscriminator: H.Z.hidePersonalInformation,
                    hideInstantInvites: H.Z.hideInstantInvites
                }
            );
        });
    return (0, l.jsx)(ec, {
        channel: t,
        ...n,
        ...i
    });
}
function ed(e) {
    var t, n;
    let { channel: i, iconClassName: s, icon: a, tooltip: o, tooltipPosition: c = 'bottom', popoutPosition: u = 'bottom', popoutAlign: d = 'right', subscribeToGlobalHotkey: h = !1 } = e,
        [f, g] = r.useState(null != i && i.isGroupDM() && 0 === i.recipients.length),
        C = r.useCallback(() => g((e) => !e), []);
    r.useEffect(
        () => (
            h && z.S.subscribe(Q.CkL.TOGGLE_DM_CREATE, C),
            () => {
                z.S.unsubscribe(Q.CkL.TOGGLE_DM_CREATE, C);
            }
        ),
        [h, C]
    );
    let x = (0, m.e7)([F.default], () => F.default.getUser(null == i ? void 0 : i.getRecipientId()));
    return (r.useEffect(() => {
        (0, M._)();
    }, []),
    (null !== (t = null == x ? void 0 : x.bot) && void 0 !== t && t) || (null !== (n = null == x ? void 0 : x.isProvisional) && void 0 !== n && n))
        ? null
        : (0, l.jsx)(p.Popout, {
              renderPopout: (e) =>
                  (0, l.jsx)(eu, {
                      ...e,
                      onClose: e.closePopout,
                      channel: i
                  }),
              position: u,
              shouldShow: f,
              align: d,
              onRequestClose: () => g(!1),
              animation: p.Popout.Animation.NONE,
              children: (e) =>
                  (0, l.jsx)(X.ZP.Icon, {
                      ...e,
                      onClick: C,
                      icon: null != a ? a : null == i ? p.ChatPlusIcon : p.GroupPlusIcon,
                      className: s,
                      iconClassName: s,
                      tooltip: o,
                      tooltipPosition: c
                  })
          });
}
function eh(e) {
    let t = em(e);
    return new Set(
        c()(k.Z.getMutablePrivateChannels())
            .values()
            .filter((e) => (0, L.bc)(e.type))
            .filter((e) => em(e.recipients) === t)
            .map((e) => e.id)
            .value()
    );
}
function em(e) {
    return JSON.stringify(e.sort());
}
ei(ec, 'contextType', S.ZP);
