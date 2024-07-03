n(47120);
var i = n(735250), a = n(470079), s = n(512722), l = n.n(s), r = n(873546), o = n(106351), c = n(442837), d = n(481060), u = n(430742), h = n(904245), p = n(144144), m = n(166459), _ = n(966390), f = n(738619), E = n(410575), C = n(744061), g = n(857595), I = n(607070), x = n(367907), T = n(555573), N = n(456007), v = n(10718), S = n(895924), Z = n(581364), A = n(667204), M = n(541716), b = n(752305), R = n(516887), j = n(974251), L = n(893718), P = n(436660), O = n(603009), y = n(28546), D = n(295474), k = n(521476), U = n(69882), w = n(71619), B = n(185145), H = n(736052), G = n(898188), V = n(925975), F = n(957730), W = n(400023), z = n(64078), Y = n(351780), K = n(843693), q = n(217871), X = n(139577), Q = n(247944), J = n(623292), $ = n(807092), ee = n(268350), et = n(557494), en = n(314897), ei = n(433355), ea = n(703558), es = n(323873), el = n(271383), er = n(375954), eo = n(496675), ec = n(944486), ed = n(117530), eu = n(594174), eh = n(482207), ep = n(626135), em = n(459273), e_ = n(585483), ef = n(709054), eE = n(838440), eC = n(228488), eg = n(127654), eI = n(979956), ex = n(655687), eT = n(165540), eN = n(583027), ev = n(25007), eS = n(199649), eZ = n(1397), eA = n(981631), eM = n(689938), eb = n(489919);
function eR(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e;
}
function ej(e) {
    e.preventDefault();
}
let eL = /^\+(?!\w+):?(?!:)(\w+)?:?$/;
function eP(e) {
    let {
        isSidebar: t,
        ...n
    } = e;
    return t ? (0, i.jsx)('section', {
        ...n,
        role: 'complementary'
    }) : (0, i.jsx)('main', { ...n });
}
class eO extends a.PureComponent {
    componentDidMount() {
        ea.Z.addChangeListener(this.draftDidChange);
    }
    componentWillUnmount() {
        ea.Z.removeChangeListener(this.draftDidChange);
    }
    componentDidUpdate(e, t) {
        let {channel: n} = this.props, {textValue: i} = this.state;
        if (e.channel.id !== n.id) {
            this.draftDidChange(this.props);
            return;
        }
        if (e.hasModalOpen && !this.props.hasModalOpen) {
            let e = ea.Z.getDraft(n.id, ea.d.ChannelMessage);
            e !== i && this.setState((0, b.eK)(e));
        }
        t.textValue.length < eA.J6R && i.length >= eA.J6R && ep.default.track(eA.rMx.MESSAGE_LENGTH_LIMIT_REACHED, {});
    }
    handleEditLastMessage(e) {
        let {channel: t} = this.props;
        h.Z.startEditMessage(t.id, e.id, e.content), x.ZP.trackWithMetadata(eA.rMx.MESSAGE_EDIT_UP_ARROW);
    }
    handleRecallLastCommand(e) {
        if (null == e.interactionData)
            return;
        let {channel: t} = this.props, {
                commandKey: n,
                interactionOptions: i
            } = (0, Z.XA)(e.interactionData), {
                command: a,
                application: s
            } = v.Xq(t, n);
        if (null != a) {
            var l, r;
            let e = null != s ? {
                type: S.Qi.APPLICATION,
                id: s.id,
                icon: null !== (r = null == s ? void 0 : null === (l = s.bot) || void 0 === l ? void 0 : l.username) && void 0 !== r ? r : s.icon,
                name: s.name,
                application: s
            } : null;
            T.Po({
                channelId: t.id,
                command: a,
                section: e,
                location: S.Vh.RECALL,
                initialValues: (0, N.Dw)(a, null != i ? i : [])
            });
        }
    }
    render() {
        let {
                channel: e,
                focused: t,
                onBlur: n,
                onFocus: a,
                highlighted: s,
                pendingReply: r,
                chatInputType: o,
                placeholder: c,
                accessibilityLabel: u,
                shakeIntensity: h,
                poggermodeEnabled: p
            } = this.props, {contentWarningProps: m} = this.state, _ = (0, i.jsx)(L.Z, {
                textValue: this.state.textValue,
                richValue: this.state.richValue,
                focused: t,
                className: eb.channelTextArea,
                channel: e,
                placeholder: c,
                accessibilityLabel: u,
                pendingReply: r,
                type: o,
                onChange: this.handleTextareaChange,
                onSubmit: this.handleSendMessage,
                onResize: this.handleResize,
                onFocus: a,
                onBlur: n,
                onKeyDown: this.handleKeyDown,
                renderAttachButton: this.renderAttachButton,
                renderApplicationCommandIcon: this.renderApplicationCommandIcon,
                promptToUpload: eg.d,
                highlighted: s,
                setEditorRef: e => this.editorRef = e
            });
        return (0, i.jsx)(d.Popout, {
            position: 'top',
            onRequestClose: () => {
                var e;
                null == m || null === (e = m.onCancel) || void 0 === e || e.call(m), this.setState({ contentWarningProps: null });
            },
            shouldShow: null != m,
            renderPopout: e => {
                let {closePopout: t} = e;
                return l()(null != m, 'ChannelTextAreaForm > Popout > renderPopout: contentWarningProps cannot be null'), (0, i.jsx)(C.Z, {
                    onClose: t,
                    ...m
                });
            },
            children: () => p ? (0, i.jsx)(d.Shaker, {
                isShaking: h > 0,
                intensity: h,
                className: eb.shaker,
                children: _
            }) : _
        });
    }
    constructor(...e) {
        var t;
        super(...e), t = this, eR(this, 'isFirstChange', !0), eR(this, 'editorRef', null), eR(this, 'state', {
            ...(0, b.eK)(ea.Z.getDraft(this.props.channel.id, ea.d.ChannelMessage)),
            contentWarningProps: null
        }), eR(this, 'draftDidChange', function () {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : t.props, {textValue: n} = t.state, i = ea.Z.getDraft(e.channel.id, ea.d.ChannelMessage);
            n !== i && ('' === i || '' === n) && t.setState((0, b.eK)(i), () => {
                if (n !== i) {
                    let {onFocus: e} = t.props;
                    null == e || e();
                }
            });
        }), eR(this, 'handleKeyDown', e => {
            let {
                    keyboardModeEnabled: t,
                    onKeyDown: n,
                    channel: i
                } = this.props, a = e.shiftKey || e.altKey || e.ctrlKey || e.metaKey, s = 0 !== this.state.textValue.length;
            switch (e.which) {
            case eA.yXg.DELETE:
            case eA.yXg.BACKSPACE:
                this.handleIncrementCombo('', 1);
                return;
            case eA.yXg.ARROW_UP:
                if (a || s)
                    return;
                if (e.preventDefault(), t)
                    ed.Z.getUploadCount(i.id, ea.d.ChannelMessage) > 0 ? e_.S.dispatchToLastSubscribed(eA.CkL.FOCUS_ATTACHMENT_AREA) : e_.S.dispatchToLastSubscribed(eA.CkL.FOCUS_MESSAGES, { atEnd: !0 });
                else {
                    let {channel: e} = this.props, t = er.Z.getLastCommandMessage(e.id), n = er.Z.getLastEditableMessage(e.id);
                    null != t && null != n ? ef.default.compare(n.id, t.id) > 0 ? this.handleEditLastMessage(n) : this.handleRecallLastCommand(t) : null != t ? this.handleRecallLastCommand(t) : null != n && this.handleEditLastMessage(n);
                }
                return;
            case eA.yXg.ESCAPE:
                if (a || e.target !== e.currentTarget)
                    return;
                if (e.preventDefault(), t) {
                    (0, g.rf)();
                    return;
                }
                if (ed.Z.getUploadCount(i.id, ea.d.ChannelMessage) > 0) {
                    m.Z.clearAll(i.id, ea.d.ChannelMessage);
                    return;
                }
            }
            null == n || n(e, s);
        }), eR(this, 'handleIncrementCombo', (e, t) => {
            var n;
            if (!this.props.poggermodeEnabled)
                return;
            let i = this.props.channel.id, a = en.default.getId(), s = K.ZP.getUserCombo(a, i), l = (null !== (n = null == s ? void 0 : s.value) && void 0 !== n ? n : 0) + 1;
            (0, z.SE)({
                channelId: i,
                userId: a,
                value: null != e ? e.length : l,
                multiplier: t
            });
        }), eR(this, 'handleTextareaChange', (e, t, n) => {
            let {
                keyboardModeEnabled: i,
                channel: {id: a}
            } = this.props;
            u.Z.changeDraft(a, t, ea.d.ChannelMessage);
            let s = '' !== t && n !== this.state.richValue, l = s && !eL.test(t) && !t.startsWith('/') && (!this.isFirstChange || t !== this.state.textValue);
            this.isFirstChange = !1, l && this.state.textValue.length < t.length && this.handleIncrementCombo(), l ? p.Z.startTyping(a) : '' === t && p.Z.stopTyping(a), s && i && (0, g.rf)(), this.setState({
                textValue: t,
                richValue: n
            });
        }), eR(this, 'handleSendMessage', async e => {
            let {
                value: t,
                uploads: n,
                stickers: i,
                command: a,
                commandOptionValues: s,
                isGif: l
            } = e;
            if (0 === (t = t.trim()).length && (null == i || 0 === i.length) && (null == n || 0 === n.length))
                return Promise.resolve({
                    shouldClear: !1,
                    shouldRefocus: !0
                });
            let {
                    guild: r,
                    channel: o,
                    pendingReply: c,
                    chatInputType: d
                } = this.props, u = !1;
            if (null != a) {
                if (a.inputType === S.iw.BUILT_IN_INTEGRATION)
                    return e_.S.dispatch(eA.CkL.SHAKE_APP, {
                        duration: 200,
                        intensity: 2
                    }), Promise.resolve({
                        shouldClear: !1,
                        shouldRefocus: !0
                    });
                let e = await (0, A.Z)({
                    command: a,
                    optionValues: null != s ? s : {},
                    context: {
                        guild: r,
                        channel: o
                    }
                });
                if (a.inputType !== S.iw.BUILT_IN_TEXT)
                    return Promise.resolve({
                        shouldClear: !0,
                        shouldRefocus: !0
                    });
                null != e && (t = null != e.content && '' !== e.content ? e.content : t, u = !0 === e.tts);
            }
            return (0, eE.v)({
                openWarningPopout: e => this.setState({ contentWarningProps: e }),
                type: this.props.chatInputType,
                content: t,
                stickers: i,
                uploads: n,
                channel: o
            }).then(e => {
                let {
                    valid: a,
                    failureReason: s
                } = e;
                if (!a)
                    return s === eA.zYc.SLOWMODE_COOLDOWN ? (e_.S.dispatch(eA.CkL.SHAKE_APP, {
                        duration: 200,
                        intensity: 2
                    }), e_.S.dispatch(eA.CkL.EMPHASIZE_SLOWMODE_COOLDOWN), {
                        shouldClear: !1,
                        shouldRefocus: !0
                    }) : {
                        shouldClear: !1,
                        shouldRefocus: !1
                    };
                let p = (0, V.g)(t, {
                    channel: o,
                    isEdit: !1
                });
                null != p && (null != p.content && (t = p.content), null != p.tts && (u = p.tts));
                let f = F.ZP.parse(o, t);
                f.tts = f.tts || u;
                let E = h.Z.getSendMessageOptionsForReply(c);
                if (l)
                    return h.Z.sendMessage(o.id, f, void 0, E), (0, J.A6)(o.id), {
                        shouldClear: !1,
                        shouldRefocus: !0
                    };
                if (null != n && n.length > 0) {
                    let e = (0, eI.KZ)(n);
                    if ((0, eI.Bf)(e, null == r ? void 0 : r.id))
                        return (0, eg.G)(o, e), {
                            shouldClear: !1,
                            shouldRefocus: !1
                        };
                    _.Z.uploadFiles({
                        channelId: o.id,
                        uploads: n,
                        draftType: ea.d.ChannelMessage,
                        parsedMessage: f,
                        options: {
                            ...E,
                            stickerIds: i
                        }
                    }), m.Z.clearAll(o.id, ea.d.ChannelMessage);
                } else
                    null != i && i.length > 0 ? '' !== t ? h.Z.sendMessage(o.id, f, void 0, {
                        ...E,
                        stickerIds: i
                    }) : h.Z.sendStickers(o.id, i, t, E, f.tts) : h.Z.sendMessage(o.id, f, void 0, E);
                return this.setState((0, b.H2)()), (0, J.A6)(o.id), (0, ee.qB)(o.id, d.drafts.type), {
                    shouldClear: !0,
                    shouldRefocus: !0
                };
            });
        }), eR(this, 'handleSetValue', e => {
            var t, n;
            let i = null === (t = this.editorRef) || void 0 === t ? void 0 : t.getSlateEditor();
            null != i && (P.Q.select(i, []), i.insertText(e), null === (n = this.editorRef) || void 0 === n || n.focus());
        }), eR(this, 'handleResize', e => {
            var t, n;
            null === (t = (n = this.props).onResize) || void 0 === t || t.call(n, e), (0, eN.A)(e);
        }), eR(this, 'renderAttachButton', (e, t) => (0, i.jsx)(j.Z, {
            className: t,
            channel: this.props.channel,
            draftType: ea.d.ChannelMessage,
            editorTextContent: this.state.textValue,
            setValue: this.handleSetValue,
            canOnlyUseTextCommands: e
        })), eR(this, 'renderApplicationCommandIcon', (e, t, n) => (0, i.jsx)(R.Z, {
            className: n,
            command: e,
            section: t,
            channel: this.props.channel
        }));
    }
}
class ey extends a.PureComponent {
    static getDerivedStateFromProps(e, t) {
        let {channel: n} = e, {currentChannelId: i} = t;
        return n.id !== i ? {
            textAreaFocused: null != n && !r.tq && eo.Z.can(eA.Plq.SEND_MESSAGES, n),
            currentChannelId: n.id
        } : null;
    }
    componentDidMount() {
        e_.S.subscribe(eA.CkL.FOCUS_CHANNEL_TEXT_AREA, this.handleRequestFocus);
    }
    componentDidUpdate(e) {
        (this.props.isEditing !== e.isEditing || this.props.hasModalOpen !== e.hasModalOpen) && (this.props.isEditing || this.props.hasModalOpen ? this.handleInputBlur() : this.handleInputFocus());
    }
    componentWillUnmount() {
        e_.S.unsubscribe(eA.CkL.FOCUS_CHANNEL_TEXT_AREA, this.handleRequestFocus);
    }
    render() {
        var e;
        let t;
        let {
                channel: n,
                guild: a,
                keyboardModeEnabled: s,
                hasModalOpen: l,
                pendingReply: r,
                chatInputType: c,
                placeholder: u,
                accessibilityLabel: h,
                showQuarantinedUserBanner: p,
                filterAfterTimestamp: m,
                communicationDisabledUntil: _,
                shakeIntensity: C,
                poggermodeEnabled: g,
                isSelectedResourceChannel: I,
                showAutomodUserProfileChatBlocker: x
            } = this.props, {
                textAreaFocused: T,
                textAreaHighlighted: N
            } = this.state, v = c === M.I.SIDEBAR;
        t = v && n.type === eA.d4z.GUILD_VOICE ? eM.Z.Messages.TEXT_IN_VOICE_A11Y_LABEL : v && n.type === eA.d4z.GUILD_STAGE_VOICE ? eM.Z.Messages.TEXT_IN_STAGE_A11Y_LABEL : o.T.THREADS.has(n.type) ? eM.Z.Messages.THREAD_A11Y_LABEL : eM.Z.Messages.CHANNEL_A11Y_LABEL;
        let S = (0, i.jsxs)('div', {
            className: eb.channelBottomBarArea,
            children: [
                (0, i.jsx)(et.Z, {
                    tutorialId: 'writing-messages',
                    position: 'left',
                    offsetX: 75,
                    children: (0, i.jsx)(eO, {
                        focused: T,
                        highlighted: N,
                        channel: n,
                        guild: a,
                        keyboardModeEnabled: s,
                        onFocus: this.handleInputFocus,
                        onBlur: this.handleInputBlur,
                        onKeyDown: this.handleInputKeyDown,
                        hasModalOpen: l,
                        pendingReply: r,
                        chatInputType: c,
                        placeholder: u,
                        accessibilityLabel: h,
                        shakeIntensity: C,
                        poggermodeEnabled: g
                    })
                }),
                (0, i.jsx)(eT.Z, {
                    channel: n,
                    type: c
                })
            ]
        });
        return (0, i.jsx)(E.Z, {
            page: this.getAnalyticsPage(),
            children: (0, i.jsx)(eh.sW, {
                children: (0, i.jsxs)(em.I3, {
                    ref: this.dispatchGroupRef,
                    children: [
                        (0, i.jsx)(em.d9, {
                            event: eA.CkL.TEXTAREA_FOCUS,
                            handler: this.handleInputFocus
                        }),
                        (0, i.jsx)(em.d9, {
                            event: eA.CkL.TEXTAREA_BLUR,
                            handler: this.handleInputBlur
                        }),
                        (0, i.jsx)(em.d9, {
                            event: eA.CkL.OPEN_EXPRESSION_PICKER,
                            handler: this.handleOpenExpressionPicker
                        }),
                        (0, i.jsxs)(eP, {
                            isSidebar: v,
                            className: eb.chatContent,
                            'aria-label': t.format({ channelName: n.name }),
                            onMouseDown: this.handleChatInteract,
                            onKeyDown: this.handleKeyDown,
                            onFocus: this.handleChatInteract,
                            children: [
                                (0, i.jsx)(ev.Z, {
                                    channel: n,
                                    guild: a,
                                    narrow: v
                                }),
                                (0, i.jsxs)(d.HeadingLevel, {
                                    component: (0, i.jsx)(d.HiddenVisually, { children: (0, i.jsx)(d.H, { children: eM.Z.Messages.CHANNEL_CHAT_HEADING.format({ channelName: n.name }) }) }),
                                    children: [
                                        (0, i.jsx)(W.Z, {
                                            channel: n,
                                            forceCozy: I,
                                            filterAfterTimestamp: m,
                                            showingQuarantineBanner: p
                                        }),
                                        null == n.guild_id || v ? null : (0, i.jsx)(G.Z, {
                                            guildId: n.guild_id,
                                            channel: n
                                        }),
                                        I ? null : null !== (e = this.renderMessageBanner({
                                            channel: n,
                                            showQuarantinedUserBanner: p,
                                            guild: a,
                                            communicationDisabledUntil: _,
                                            showAutomodUserProfileChatBlocker: x
                                        })) && void 0 !== e ? e : (0, i.jsxs)('form', {
                                            ref: this.inputFormRef,
                                            onSubmit: ej,
                                            className: eb.form,
                                            children: [
                                                g && (0, i.jsx)(q.Z, { channelId: n.id }),
                                                n.isPrivate() ? (0, i.jsx)(eS.Z, {
                                                    channel: n,
                                                    children: S
                                                }) : (0, i.jsx)(eZ.Z, {
                                                    channel: n,
                                                    children: S
                                                }),
                                                (0, i.jsx)(f.Z, {
                                                    channel: n,
                                                    poggermodeEnabled: g
                                                }),
                                                !v && (0, i.jsx)(O.Z, {})
                                            ]
                                        }),
                                        (0, i.jsx)(eh.kw, {})
                                    ]
                                })
                            ]
                        })
                    ]
                })
            })
        }, 'messages-'.concat(n.id));
    }
    constructor(...e) {
        super(...e), eR(this, 'inputFormRef', a.createRef()), eR(this, 'state', {
            textAreaFocused: !1,
            textAreaHighlighted: !1,
            currentChannelId: this.props.channel.id
        }), eR(this, 'dispatchGroupRef', a.createRef()), eR(this, 'handleRequestFocus', e => {
            e.channelId === this.props.channel.id && this.setState({ textAreaFocused: !0 });
        }), eR(this, 'getAnalyticsPage', () => {
            let {channel: e} = this.props;
            if (null == e)
                return null;
            switch (e.type) {
            case eA.d4z.GUILD_ANNOUNCEMENT:
            case eA.d4z.GUILD_TEXT:
            case eA.d4z.GUILD_FORUM:
            case eA.d4z.GUILD_MEDIA:
                return E.Z.Pages.GUILD_CHANNEL;
            case eA.d4z.GROUP_DM:
            case eA.d4z.DM:
                return E.Z.Pages.DM_CHANNEL;
            default:
                return null;
            }
        }), eR(this, 'handleInputFocus', e => {
            var t;
            if (null === (t = this.dispatchGroupRef.current) || void 0 === t || t.bumpDispatchPriority(), !(0, eC.rB)())
                (null == e ? void 0 : e.highlight) != null ? this.setState({
                    textAreaFocused: !0,
                    textAreaHighlighted: null == e ? void 0 : e.highlight
                }) : this.setState({ textAreaFocused: !0 });
        }), eR(this, 'handleInputBlur', () => {
            (document.hasFocus() || this.props.hasModalOpen) && this.setState({
                textAreaFocused: !1,
                textAreaHighlighted: !1
            });
        }), eR(this, 'handleInputKeyDown', (e, t) => {
            this.state.textAreaHighlighted && this.setState({ textAreaHighlighted: !1 }), !t && this._handleMoveToPane(e);
        }), eR(this, 'handleKeyDown', e => {
            var t;
            if (null === (t = this.inputFormRef.current) || void 0 === t ? !void 0 : !t.contains(e.target))
                this._handleMoveToPane(e);
        }), eR(this, '_handleMoveToPane', e => {
            let {
                keyboardModeEnabled: t,
                chatInputType: n,
                channel: i
            } = this.props;
            if (!!t)
                switch (e.which) {
                case eA.yXg.ARROW_LEFT:
                    n === M.I.SIDEBAR && e_.S.dispatch(eA.CkL.FOCUS_CHANNEL_TEXT_AREA, { channelId: ec.Z.getChannelId() });
                    return;
                case eA.yXg.ARROW_RIGHT:
                    n === M.I.NORMAL && e_.S.dispatch(eA.CkL.FOCUS_CHANNEL_TEXT_AREA, { channelId: ei.ZP.getCurrentSidebarChannelId(i.id) });
                }
        }), eR(this, 'handleOpenExpressionPicker', e => {
            let {activeView: t} = e;
            (0, y.PG)(t, this.props.chatInputType);
        }), eR(this, 'handleChatInteract', () => {
            var e;
            null === (e = this.dispatchGroupRef.current) || void 0 === e || e.bumpDispatchPriority();
        }), eR(this, 'renderMessageBanner', e => {
            let {
                channel: t,
                showQuarantinedUserBanner: n,
                guild: a,
                communicationDisabledUntil: s,
                showAutomodUserProfileChatBlocker: l
            } = e;
            return t.type === eA.d4z.DM && n ? (0, i.jsx)(Q.Z, {}) : null != s && (0, U.J)(s) && null != a && !eo.Z.can(eA.Plq.ADMINISTRATOR, a) ? (0, i.jsx)(B.T, {
                guild: a,
                disabledUntil: s
            }) : l ? (0, i.jsx)(k.h, { guild: a }) : null;
        });
    }
}
t.Z = a.memo(function (e) {
    let {
            channel: t,
            guild: n,
            chatInputType: a,
            filterAfterTimestamp: s
        } = e, {
            placeholder: l,
            accessibilityLabel: r
        } = (0, ex.Z)(t), o = (0, Q.S)(eu.default.getCurrentUser(), t), [u] = (0, w.AB)(null == n ? void 0 : n.id), h = (0, D.Ux)(null == n ? void 0 : n.id), p = (0, c.e7)([eu.default], () => eu.default.getCurrentUser()), m = (0, c.e7)([el.ZP], () => {
            var e, t, i;
            return null != p && null !== (i = null === (e = el.ZP.getMember(null !== (t = null == n ? void 0 : n.id) && void 0 !== t ? t : eA.lds, null == p ? void 0 : p.id)) || void 0 === e ? void 0 : e.isPending) && void 0 !== i && i;
        }), _ = (0, c.e7)([Y.Z], () => Y.Z.isEnabled()), f = (0, X.Z)(t.id), E = (0, H.Z)(t.id);
    return (0, i.jsx)(ey, {
        channel: t,
        isEditing: null != (0, c.e7)([es.Z], () => es.Z.getEditingMessageId(t.id)),
        hasModalOpen: (0, d.useModalsStore)(d.hasAnyModalOpenSelector),
        guild: n,
        keyboardModeEnabled: (0, c.e7)([I.Z], () => I.Z.keyboardModeEnabled),
        pendingReply: (0, c.e7)([$.Z], () => $.Z.getPendingReply(t.id)),
        chatInputType: a,
        placeholder: l,
        accessibilityLabel: r,
        filterAfterTimestamp: s,
        showQuarantinedUserBanner: o,
        communicationDisabledUntil: u,
        shakeIntensity: f,
        poggermodeEnabled: _,
        isSelectedResourceChannel: E,
        showAutomodUserProfileChatBlocker: h && !m
    });
});
