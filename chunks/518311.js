n.d(t, {
    Z: function () {
        return eu;
    }
}), n(411104), n(653041), n(47120);
var i, a = n(735250), l = n(470079), s = n(120356), r = n.n(s), o = n(392711), c = n.n(o), d = n(913527), u = n.n(d), h = n(873546), p = n(442837), m = n(481060), _ = n(570140), f = n(26151), E = n(493683), C = n(758059), g = n(447543), I = n(708690), x = n(194359), T = n(425493), N = n(461745), v = n(40851), S = n(367907), Z = n(762914), A = n(43267), M = n(933557), b = n(366980), R = n(703656), j = n(60349), L = n(131704), P = n(592125), O = n(341165), y = n(544610), D = n(19780), k = n(306680), U = n(699516), w = n(246946), B = n(594174), H = n(285952), G = n(153124), V = n(502568), F = n(626135), W = n(572004), z = n(585483), Y = n(823379), K = n(709054), q = n(51144), X = n(73752), Q = n(575464), J = n(981631), $ = n(689938), ee = n(994175), et = n(838009), en = n(331651);
function ei(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e;
}
let ea = (0, G.hQ)(), el = (0, G.hQ)();
function es(e) {
    let {
        className: t,
        children: n
    } = e;
    return (0, a.jsxs)(H.Z, {
        align: H.Z.Align.CENTER,
        justify: H.Z.Justify.CENTER,
        direction: H.Z.Direction.VERTICAL,
        className: r()(ee.errorState, t),
        children: [
            (0, a.jsx)('div', { className: r()(ee.errorStateIcon, en.marginBottom20) }),
            n
        ]
    });
}
let er = e => {
        var t;
        let {
                channel: n,
                onClose: i
            } = e, l = null !== (t = (0, M.ZP)(n)) && void 0 !== t ? t : '', s = (0, p.e7)([k.ZP], () => {
                var e;
                return null !== (e = k.ZP.lastMessageId(n.id)) && void 0 !== e ? e : n.id;
            });
        return (0, a.jsx)(m.Clickable, {
            onClick: () => {
                (0, R.XU)(J.ME, n.id), i();
            },
            children: (0, a.jsxs)('div', {
                className: ee.confirmChannelItemContainer,
                children: [
                    (0, a.jsx)(m.Avatar, {
                        src: (0, A.x)(n),
                        size: m.AvatarSizes.SIZE_24,
                        'aria-label': l
                    }),
                    (0, a.jsx)('span', {
                        className: ee.confirmChannelName,
                        children: l
                    }),
                    (0, a.jsx)('span', {
                        className: ee.lastActiveTimestamp,
                        children: u()(K.default.extractTimestamp(s)).fromNow()
                    })
                ]
            })
        });
    }, eo = e => {
        let {
                onConfirm: t,
                channelIds: n,
                ...i
            } = e, l = (0, p.Wu)([P.Z], () => Array.from(n).map(P.Z.getChannel), [n]);
        return (0, a.jsxs)(m.ConfirmModal, {
            header: $.Z.Messages.GROUP_DM_INVITE_CONFIRM,
            confirmText: $.Z.Messages.GROUP_DM_INVITE_CONFIRM_BUTTON,
            cancelText: $.Z.Messages.CANCEL,
            onConfirm: t,
            confirmButtonColor: m.Button.Colors.BRAND,
            ...i,
            children: [
                (0, a.jsx)(m.Text, {
                    variant: 'text-md/normal',
                    children: $.Z.Messages.GROUP_DM_INVITE_CONFIRM_DESCRIPTION
                }),
                (0, a.jsx)(m.FormTitle, {
                    className: ee.selectExistingFormHeader,
                    children: $.Z.Messages.GROUP_DM_INVITE_SELECT_EXISTING
                }),
                (0, a.jsx)(m.Scroller, {
                    className: ee.confirmInviteScroller,
                    children: l.filter(Y.lm).sort((e, t) => {
                        var n, i;
                        let a = null !== (n = e.lastMessageId) && void 0 !== n ? n : e.id, l = null !== (i = t.lastMessageId) && void 0 !== i ? i : t.id;
                        return K.default.compare(l, a);
                    }).map(e => (0, a.jsx)(er, {
                        onClose: i.onClose,
                        channel: e
                    }, e.id))
                })
            ]
        });
    };
class ec extends (i = l.PureComponent) {
    componentDidMount() {
        let {channel: e} = this.props;
        _.Z.wait(() => I.Z.open(null == e ? void 0 : e.id));
        let t = (0, S.v_)(e);
        null != e ? e.isDM() ? F.default.track(J.rMx.OPEN_POPOUT, {
            ...t,
            type: 'Add Friends to DM',
            source: 'DM',
            is_friend: !this.isNotFriends()
        }) : F.default.track(J.rMx.OPEN_POPOUT, {
            ...t,
            type: 'Add Friends to DM',
            source: 'Group DM'
        }) : F.default.track(J.rMx.OPEN_POPOUT, {
            ...t,
            type: 'New Group DM',
            source: 'Friends List'
        }), z.S.subscribe(J.CkL.SCROLL_PAGE_UP, this.scrollPageUp), z.S.subscribe(J.CkL.SCROLL_PAGE_DOWN, this.scrollPageDown);
    }
    componentWillUnmount() {
        z.S.unsubscribe(J.CkL.SCROLL_PAGE_UP, this.scrollPageUp), z.S.unsubscribe(J.CkL.SCROLL_PAGE_DOWN, this.scrollPageDown), null != this.copyTimeout && clearTimeout(this.copyTimeout), _.Z.wait(() => I.Z.close());
    }
    isNotFriends() {
        let {channel: e} = this.props;
        if (null == e || !e.isDM())
            return !1;
        let t = e.getRecipientId();
        if (null == t)
            throw Error('no recipient in DM');
        return !U.Z.isFriend(t);
    }
    createInvite() {
        let {channel: e} = this.props;
        if (null == e || !e.isMultiUserDM() || this.isPartyFull())
            return;
        let {inviteMaxAgeSeconds: t} = X.Z.getCurrentConfig({ location: '5326c5_1' }, { autoTrackExposure: !1 });
        g.Z.createInvite(e.id, { max_age: t }, J.t4x.GROUP_DM);
    }
    isPartyFull() {
        let {channel: e} = this.props;
        return null != e && e.recipients.length + 1 >= this.getMaxParticipants();
    }
    getMaxParticipants() {
        let {channel: e} = this.props, t = B.default.getCurrentUser();
        return null != t && t.isStaff() ? J.p3w : null != e && e.isBroadcastChannel() ? J.keq : null != e && e.userLimit > 0 ? e.userLimit : J.pAY;
    }
    getRemaining() {
        let {
                channel: e,
                selectedUsers: t
            } = this.props, n = (null == e ? 0 : e.recipients.length) + 1;
        return this.getMaxParticipants() - t.size - n;
    }
    renderCreateGroupButton() {
        let {
                channel: e,
                selectedUsers: t
            } = this.props, n = this.getRemaining(), i = null != e && 0 === t.size || n < 0, l = t.size > 1 ? $.Z.Messages.CREATE_GROUP_DM : $.Z.Messages.CREATE_DM;
        return (0, a.jsx)(m.Button, {
            fullWidth: !0,
            disabled: i,
            onClick: this.handleInviteUsers,
            children: l
        });
    }
    renderAddUsersButton() {
        let {
            channel: e,
            selectedUsers: t
        } = this.props;
        if (null == e || e.isDM())
            return;
        let n = this.getRemaining(), i = 0 === t.size || n < 0;
        return (0, a.jsx)('div', {
            className: ee.addButton,
            children: (0, a.jsx)(m.Button, {
                size: m.Button.Sizes.SMALL,
                disabled: i,
                onClick: this.handleInviteUsers,
                children: $.Z.Messages.ADD
            })
        });
    }
    renderSubtitle() {
        if (!this.props.hasFriends || this.isNotFriends() || this.isPartyFull())
            return null;
        let e = this.getRemaining(), t = e <= 0 ? $.Z.Messages.GROUP_DM_INVITE_FULL_SUB2.format({ number: this.getMaxParticipants() }) : $.Z.Messages.GROUP_DM_INVITE_REMAINING.format({ number: e });
        return (0, a.jsx)(m.Text, {
            variant: 'text-xs/normal',
            className: r()(ee.subtitle, { [ee.subtitleWarning]: e < 0 }, en.marginTop4),
            children: t
        });
    }
    renderSearchBar() {
        var e;
        let {
            query: t,
            hasFriends: n,
            results: i,
            selectedRow: l,
            selectedUsers: s
        } = this.props;
        if (!n || this.isNotFriends())
            return null;
        let o = [];
        return s.forEach(e => {
            let t = B.default.getUser(e);
            null != t && o.push(q.ZP.getName(t));
        }), (0, a.jsxs)(H.Z, {
            className: r()(ee.searchBar, en.marginTop20),
            children: [
                (0, a.jsx)(N.ZP, {
                    ref: this.searchBarRef,
                    className: ee.searchBarComponent,
                    autoFocus: !0,
                    placeholder: 0 === s.size ? $.Z.Messages.GROUP_DM_SEARCH_PLACEHOLDER : void 0,
                    disabled: this.isPartyFull(),
                    size: N.ZP.Sizes.MEDIUM,
                    query: t,
                    selectedRow: l,
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
                        'aria-activedescendant': 'user-row-'.concat(l)
                    }
                }),
                this.renderAddUsersButton()
            ]
        });
    }
    renderHeader() {
        let e = null != this.scrollerRef.current && this.state.separator, t = this.isNotFriends() ? $.Z.Messages.GROUP_DM_ADD_FRIENDS : $.Z.Messages.GROUP_DM_HEADER;
        return (0, a.jsxs)(m.ModalHeader, {
            direction: H.Z.Direction.VERTICAL,
            align: H.Z.Align.STRETCH,
            className: ee.__invalid_header,
            separator: e,
            children: [
                h.tq ? this.renderMobileCloseButton() : null,
                (0, a.jsx)(m.Heading, {
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
        let {
            channel: e,
            hasFriends: t,
            results: n
        } = this.props;
        if (this.isNotFriends()) {
            let t = null != e ? e.getRecipientId() : null;
            if (null == t)
                throw Error('no recipient in DM');
            let n = B.default.getUser(t), i = null != n ? n.username : '', l = null != n && U.Z.getRelationshipType(n.id) === J.OGo.PENDING_OUTGOING;
            return (0, a.jsxs)(es, {
                className: ee.notFriends,
                children: [
                    (0, a.jsx)('div', { children: $.Z.Messages.GROUP_DM_INVITE_NOT_FRIENDS.format({ username: i }) }),
                    (0, a.jsx)(m.Button, {
                        disabled: l,
                        size: m.Button.Sizes.SMALL,
                        onClick: () => null != n ? this.handleAddFriend(n) : null,
                        className: en.marginTop20,
                        children: l ? $.Z.Messages.ADD_FRIEND_BUTTON_AFTER : $.Z.Messages.ADD_FRIEND_BUTTON
                    })
                ]
            });
        }
        return t ? this.isPartyFull() ? (0, a.jsxs)(es, {
            className: ee.partyFull,
            children: [
                (0, a.jsx)('div', { children: $.Z.Messages.GROUP_DM_INVITE_FULL_MAIN }),
                (0, a.jsx)('div', { children: $.Z.Messages.GROUP_DM_INVITE_FULL_SUB2.format({ number: this.getMaxParticipants() }) })
            ]
        }) : 0 === n.length ? (0, a.jsx)(es, {
            className: r()(ee.noResults, en.marginBottom20),
            children: (0, a.jsx)('div', { children: $.Z.Messages.GROUP_DM_INVITE_EMPTY })
        }) : (0, a.jsx)(m.List, {
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
            innerId: el,
            innerAriaMultiselectable: !0,
            innerAriaOrientation: 'vertical'
        }) : (0, a.jsxs)(es, {
            className: ee.noFriends,
            children: [
                (0, a.jsx)('div', { children: $.Z.Messages.GROUP_DM_INVITE_NO_FRIENDS }),
                (0, a.jsx)(m.Button, {
                    autoFocus: !0,
                    color: m.Button.Colors.GREEN,
                    fullWidth: !0,
                    size: m.Button.Sizes.SMALL,
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
        let {
                channel: e,
                invite: t,
                hideInstantInvites: n
            } = this.props, {copied: i} = this.state;
        if (null == e || !e.isMultiUserDM() || this.isPartyFull())
            return null;
        let s = null != t ? (0, b.Z)(t.code) : '';
        return (0, a.jsxs)(l.Fragment, {
            children: [
                (0, a.jsx)(m.FormTitle, {
                    tag: 'h5',
                    className: en.marginBottom8,
                    children: $.Z.Messages.GROUP_DM_INVITE_LINK_TITLE
                }),
                (0, a.jsxs)(H.Z, {
                    className: r()(et.input, { [et.success]: i }),
                    justify: H.Z.Justify.BETWEEN,
                    align: H.Z.Align.CENTER,
                    children: [
                        s.length > 0 ? (0, a.jsx)(m.TextInput, {
                            className: ee.copyInput,
                            name: 'invite',
                            value: n ? $.Z.Messages.INSTANT_INVITE_HIDDEN : s,
                            editable: !1,
                            inputClassName: ee.input,
                            spellCheck: 'false',
                            onClick: e => e.currentTarget.select()
                        }) : (0, a.jsx)(m.TextInput, {
                            className: ee.copyInput,
                            name: 'invite',
                            value: s,
                            placeholder: (0, b.Z)($.Z.Messages.GROUP_DM_INVITE_LINK_EXAMPLE),
                            editable: !1,
                            inputClassName: ee.input,
                            spellCheck: 'false',
                            onClick: () => this.createInvite()
                        }),
                        W.wS && s.length > 0 ? (0, a.jsx)(m.Button, {
                            size: m.Button.Sizes.SMALL,
                            color: i ? m.Button.Colors.GREEN : m.Button.Colors.BRAND,
                            className: ee.copyButton,
                            onClick: () => this.handleCopyInvite(s),
                            children: i ? $.Z.Messages.INVITE_COPIED : $.Z.Messages.COPY
                        }) : null,
                        0 === s.length ? (0, a.jsx)(m.Button, {
                            size: m.Button.Sizes.SMALL,
                            color: m.Button.Colors.BRAND,
                            className: ee.copyButton,
                            onClick: () => this.createInvite(),
                            children: $.Z.Messages.GROUP_DM_INVITE_LINK_CREATE
                        }) : null
                    ]
                }),
                s.length > 0 ? (0, a.jsx)(m.Text, {
                    variant: 'text-xs/normal',
                    className: r()(en.marginTop8, ee.footerText),
                    children: $.Z.Messages.INVITE_EXPIRES_HOURS.format({ numHours: ''.concat(24) })
                }) : null
            ]
        });
    }
    renderFooter() {
        let {
            hasFriends: e,
            channel: t
        } = this.props;
        if (this.isNotFriends() || !e || this.isPartyFull())
            return null;
        let n = null == t || t.isDM() ? this.renderCreateGroupButton() : this.renderInviteLink();
        if (null != n)
            return (0, a.jsxs)(l.Fragment, {
                children: [
                    (0, a.jsx)('div', { className: ee.footerSeparator }),
                    (0, a.jsx)(H.Z, {
                        direction: H.Z.Direction.VERTICAL,
                        className: ee.footer,
                        children: n
                    })
                ]
            });
    }
    render() {
        let {transitionState: e} = this.props;
        return (0, a.jsxs)(m.ModalRoot, {
            transitionState: null != e ? e : m.ModalTransitionState.ENTERED,
            className: ee.popout,
            children: [
                this.renderHeader(),
                this.renderBody(),
                this.renderFooter()
            ]
        });
    }
    handleAddFriend(e) {
        this.props.onClose(), x.Z.sendRequest({
            discordTag: q.ZP.getUserTag(e, { identifiable: 'always' }),
            context: { location: 'Group DM' }
        });
    }
    constructor(...e) {
        super(...e), ei(this, 'state', {
            separator: !1,
            copied: !1
        }), ei(this, 'copyTimeout', void 0), ei(this, 'scrollerRef', l.createRef()), ei(this, 'searchBarRef', l.createRef()), ei(this, '_mobileCloseRef', l.createRef()), ei(this, 'scrollPageUp', () => {
            var e;
            null === (e = this.scrollerRef.current) || void 0 === e || e.scrollPageUp({ animate: !0 });
        }), ei(this, 'scrollPageDown', () => {
            var e;
            null === (e = this.scrollerRef.current) || void 0 === e || e.scrollPageDown({ animate: !0 });
        }), ei(this, 'renderMobileCloseButton', () => (0, a.jsx)('div', {
            className: r()(ee.mobileToolsContainer),
            ref: this._mobileCloseRef,
            children: (0, a.jsx)(m.FocusRingScope, {
                containerRef: this._mobileCloseRef,
                children: (0, a.jsx)('div', {
                    children: (0, a.jsx)(T.Z, {
                        className: ee.mobileToolsCloseIcon,
                        closeAction: this.props.onClose,
                        keybind: 'ESC'
                    })
                })
            })
        })), ei(this, 'getRowHeight', (e, t) => {
            if (e > 0)
                return 0;
            let {results: n} = this.props;
            return null != n[t] ? 42 : 0;
        }), ei(this, 'renderRow', e => {
            let {
                section: t,
                row: n
            } = e;
            if (t > 0)
                return null;
            let {
                    results: i,
                    selectedUsers: l,
                    selectedRow: s,
                    hideDiscriminator: r
                } = this.props, o = i[n];
            if (null == o)
                return null;
            let {
                    user: c,
                    comparator: d
                } = o, u = l.has(c.id);
            return (0, a.jsx)(Q.Z, {
                row: n,
                user: c,
                hideDiscriminator: r,
                comparator: d,
                checked: u,
                selected: n === s,
                onClick: this.handleClick,
                onMouseEnter: this.focusResult,
                'aria-posinset': n + 1,
                'aria-setsize': i.length
            }, c.id);
        }), ei(this, 'forceFocus', () => {
            let e = this.searchBarRef.current;
            null == e || e.focus();
        }), ei(this, 'focusResult', e => {
            I.Z.select(e);
        }), ei(this, 'handleSelect', (e, t) => {
            let {
                results: n,
                channel: i
            } = this.props;
            null == t ? I.Z.clear(null == i ? void 0 : i.id) : null != n && this.handleClick(n[t].user.id);
        }), ei(this, 'handleSelectionChange', (e, t) => {
            I.Z.select(t);
            let n = this.scrollerRef.current;
            null != n && n.scrollToIndex({
                section: e,
                row: t,
                padding: 8
            });
        }), ei(this, 'handleQueryChange', e => {
            let {channel: t} = this.props;
            I.Z.search(e, null == t ? void 0 : t.id);
        }), ei(this, 'handleRemoveUser', e => {
            let t = Array.from(this.props.selectedUsers);
            I.Z.removeUser(t[e]), this.forceFocus();
        }), ei(this, 'handleClick', e => {
            let {
                selectedUsers: t,
                query: n,
                channel: i
            } = this.props;
            t.has(e) ? I.Z.removeUser(e) : (I.Z.addUser(e), n.length > 0 && I.Z.clear(null == i ? void 0 : i.id)), this.forceFocus();
        }), ei(this, 'handleAddFriendNavigation', () => {
            (0, R.uL)(J.Z5c.FRIENDS), C.Z.setSection(J.pJs.ADD_FRIEND), this.props.onClose();
        }), ei(this, 'handleScroll', () => {
            let e = this.scrollerRef.current;
            null != e && this.setState({ separator: !e.isScrolledToTop() });
        }), ei(this, 'createNewDM', e => {
            E.Z.openPrivateChannel(e, !1, !1, 'New Group DM');
        }), ei(this, 'pushToExistingDM', (e, t) => {
            let n = D.Z.getChannelId() === e.id;
            E.Z.addRecipients(e.id, t, J.Sbl.ADD_FRIENDS_TO_DM).then(i => {
                if (!!n) {
                    if (e.isDM() && i !== e.id) {
                        f.Z.call(i, !1, !0);
                        return;
                    }
                    f.Z.ring(i, t);
                }
            });
        }), ei(this, 'handleInviteUsers', () => {
            let {
                    channel: e,
                    selectedUsers: t,
                    onClose: n
                } = this.props, i = Array.from(t);
            if (null != e) {
                let t = eh(Array.from(new Set([
                    ...e.recipients,
                    ...i
                ])));
                t.size > 0 ? (0, m.openModal)(n => (0, a.jsx)(eo, {
                    ...n,
                    onConfirm: () => this.pushToExistingDM(e, i),
                    channelIds: t
                }), {}, (0, m.modalContextFromAppContext)(this.context.appContext)) : this.pushToExistingDM(e, i);
            } else {
                let e = eh(i);
                i.length > 1 && e.size > 0 ? (0, m.openModal)(t => (0, a.jsx)(eo, {
                    ...t,
                    onConfirm: () => this.createNewDM(i),
                    channelIds: e
                }), {}, (0, m.modalContextFromAppContext)(this.context.appContext)) : this.createNewDM(i);
            }
            n();
        }), ei(this, 'handleCopyInvite', e => {
            let {
                channel: t,
                invite: n
            } = this.props;
            null != n && (0, W.JG)(e), null != this.copyTimeout && clearTimeout(this.copyTimeout), this.setState({ copied: !0 }), this.copyTimeout = setTimeout(() => {
                this.setState({ copied: !1 });
            }, 1000), F.default.track(J.rMx.COPY_INSTANT_INVITE, {
                server: null,
                channel: null != t ? t.id : null,
                channel_type: null != t ? t.type : null,
                location: J.Sbl.ADD_FRIENDS_TO_DM,
                code: null != n ? n.code : null
            });
        });
    }
}
function ed(e) {
    let {
        channel: t,
        ...n
    } = e;
    j.Z.useExperiment({ location: 'desktop_dm_list' });
    let i = (0, p.cj)([
        y.Z,
        O.Z,
        w.Z
    ], () => {
        let e;
        return null != t && null != (e = O.Z.getInvite(t.id)) && e.isExpired() && (e = null), {
            ...y.Z.getState(),
            invite: e,
            hideDiscriminator: w.Z.hidePersonalInformation,
            hideInstantInvites: w.Z.hideInstantInvites
        };
    });
    return (0, a.jsx)(ec, {
        channel: t,
        ...n,
        ...i
    });
}
function eu(e) {
    let {
            channel: t,
            iconClassName: n,
            icon: i,
            tooltip: s,
            tooltipPosition: r = 'bottom',
            popoutPosition: o = 'bottom',
            popoutAlign: c = 'right',
            subscribeToGlobalHotkey: d = !1
        } = e, [u, h] = l.useState(null != t && t.isGroupDM() && 0 === t.recipients.length), p = (0, Z.Dd)(null == t ? void 0 : t.id), _ = l.useCallback(() => h(e => !e), []);
    return (l.useEffect(() => (d && z.S.subscribe(J.CkL.TOGGLE_DM_CREATE, _), () => {
        z.S.unsubscribe(J.CkL.TOGGLE_DM_CREATE, _);
    }), [
        d,
        _
    ]), p) ? null : (0, a.jsx)(m.Popout, {
        renderPopout: e => (0, a.jsx)(ed, {
            ...e,
            onClose: e.closePopout,
            channel: t
        }),
        position: o,
        shouldShow: u,
        align: c,
        onRequestClose: () => h(!1),
        animation: m.Popout.Animation.NONE,
        children: e => (0, a.jsx)(V.ZP.Icon, {
            ...e,
            onClick: _,
            icon: null != i ? i : null == t ? m.ChatPlusIcon : m.GroupPlusIcon,
            className: n,
            iconClassName: n,
            tooltip: s,
            tooltipPosition: r
        })
    });
}
function eh(e) {
    let t = ep(e);
    return new Set(c()(P.Z.getMutablePrivateChannels()).values().filter(e => (0, L.bc)(e.type)).filter(e => ep(e.recipients) === t).map(e => e.id).value());
}
function ep(e) {
    return JSON.stringify(e.sort());
}
ei(ec, 'contextType', v.ZP);
