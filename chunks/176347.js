"use strict";
n.r(t), n.d(t, {
  default: function() {
    return eP
  }
}), n("222007");
var a = n("37983"),
  s = n("884691"),
  l = n("627445"),
  i = n.n(l),
  r = n("394846"),
  o = n("298386"),
  u = n("446674"),
  d = n("77078"),
  c = n("295426"),
  f = n("819689"),
  h = n("352674"),
  C = n("81594"),
  p = n("783480"),
  E = n("125667"),
  m = n("901582"),
  g = n("767993"),
  _ = n("180748"),
  S = n("206230"),
  T = n("716241"),
  A = n("507217"),
  M = n("118200"),
  I = n("240249"),
  N = n("524768"),
  v = n("389153"),
  L = n("916565"),
  R = n("850391"),
  x = n("149022"),
  y = n("159492"),
  O = n("998415"),
  D = n("228800"),
  P = n("681060"),
  j = n("939563"),
  b = n("538282"),
  H = n("956967"),
  F = n("952104"),
  U = n("509"),
  k = n("406043"),
  w = n("68895"),
  G = n("934288"),
  B = n("87635"),
  V = n("734570"),
  W = n("884351"),
  Z = n("818950"),
  z = n("28007"),
  Y = n("880731"),
  K = n("943551"),
  q = n("667137"),
  X = n("445499"),
  J = n("319939"),
  Q = n("529805"),
  $ = n("685841"),
  ee = n("467094"),
  et = n("12896"),
  en = n("271938"),
  ea = n("982108"),
  es = n("474643"),
  el = n("836417"),
  ei = n("26989"),
  er = n("377253"),
  eo = n("957255"),
  eu = n("18494"),
  ed = n("585722"),
  ec = n("697218"),
  ef = n("659186"),
  eh = n("599110"),
  eC = n("378765"),
  ep = n("659500"),
  eE = n("299039"),
  em = n("718422"),
  eg = n("563680"),
  e_ = n("412861"),
  eS = n("834021"),
  eT = n("685888"),
  eA = n("710216"),
  eM = n("348652"),
  eI = n("306588"),
  eN = n("49111"),
  ev = n("782340"),
  eL = n("250455");

function eR(e) {
  e.preventDefault()
}
let ex = /^\+(?!\w+):?(?!:)(\w+)?:?$/;

function ey(e) {
  let {
    isSidebar: t,
    ...n
  } = e;
  return t ? (0, a.jsx)("section", {
    ...n,
    role: "complementary"
  }) : (0, a.jsx)("main", {
    ...n
  })
}
class eO extends s.PureComponent {
  componentDidMount() {
    es.default.addChangeListener(this.draftDidChange)
  }
  componentWillUnmount() {
    es.default.removeChangeListener(this.draftDidChange)
  }
  componentDidUpdate(e, t) {
    let {
      channel: n
    } = this.props, {
      textValue: a
    } = this.state;
    if (e.channel.id !== n.id) {
      this.draftDidChange(this.props);
      return
    }
    if (e.hasModalOpen && !this.props.hasModalOpen) {
      let e = es.default.getDraft(n.id, es.DraftType.ChannelMessage);
      e !== a && this.setState((0, x.createState)(e))
    }
    t.textValue.length < eN.MAX_MESSAGE_LENGTH && a.length >= eN.MAX_MESSAGE_LENGTH && eh.default.track(eN.AnalyticEvents.MESSAGE_LENGTH_LIMIT_REACHED, {})
  }
  handleEditLastMessage(e) {
    let {
      channel: t
    } = this.props;
    f.default.startEditMessage(t.id, e.id, e.content), T.default.trackWithMetadata(eN.AnalyticEvents.MESSAGE_EDIT_UP_ARROW)
  }
  handleRecallLastCommand(e) {
    if (null == e.interactionData) return;
    let {
      channel: t
    } = this.props, {
      commandKey: n,
      interactionOptions: a
    } = (0, v.extractInteractionDataProps)(e.interactionData), {
      command: s,
      application: l
    } = I.getCachedCommand(t, n);
    if (null != s) {
      var i, r;
      let e = null != l ? {
        type: N.ApplicationCommandSectionType.APPLICATION,
        id: l.id,
        icon: null !== (r = null == l ? void 0 : null === (i = l.bot) || void 0 === i ? void 0 : i.username) && void 0 !== r ? r : l.icon,
        name: l.name,
        application: l
      } : null;
      A.setActiveCommand({
        channelId: t.id,
        command: s,
        section: e,
        location: N.ApplicationCommandTriggerLocations.RECALL,
        initialValues: (0, M.getInitialValuesFromInteractionOptions)(s, null != a ? a : [])
      })
    }
  }
  render() {
    let {
      channel: e,
      focused: t,
      onResize: n,
      onBlur: s,
      onFocus: l,
      highlighted: r,
      pendingReply: o,
      chatInputType: u,
      placeholder: c,
      accessibilityLabel: f,
      shakeIntensity: h,
      poggermodeEnabled: C
    } = this.props, {
      contentWarningProps: p
    } = this.state, E = (0, a.jsx)(P.default, {
      textValue: this.state.textValue,
      richValue: this.state.richValue,
      focused: t,
      className: eL.channelTextArea,
      channel: e,
      placeholder: c,
      accessibilityLabel: f,
      pendingReply: o,
      type: u,
      onChange: this.handleTextareaChange,
      onSubmit: this.handleSendMessage,
      onResize: n,
      onFocus: l,
      onBlur: s,
      onKeyDown: this.handleKeyDown,
      renderAttachButton: this.renderAttachButton,
      renderAppLauncherButton: this.renderAppLauncherButton,
      renderApplicationCommandIcon: this.renderApplicationCommandIcon,
      promptToUpload: e_.promptToUpload,
      highlighted: r,
      setEditorRef: e => this.editorRef = e
    });
    return (0, a.jsx)(d.Popout, {
      position: "top",
      onRequestClose: () => {
        var e;
        null == p || null === (e = p.onCancel) || void 0 === e || e.call(p), this.setState({
          contentWarningProps: null
        })
      },
      shouldShow: null != p,
      renderPopout: e => {
        let {
          closePopout: t
        } = e;
        return i(null != p, "ChannelTextAreaForm > Popout > renderPopout: contentWarningProps cannot be null"), (0, a.jsx)(g.default, {
          onClose: t,
          ...p
        })
      },
      children: () => C ? (0, a.jsx)(d.Shaker, {
        isShaking: h > 0,
        intensity: h,
        children: E
      }) : E
    })
  }
  constructor(...e) {
    var t;
    super(...e), t = this, this.isFirstChange = !0, this.editorRef = null, this.state = {
      ...(0, x.createState)(es.default.getDraft(this.props.channel.id, es.DraftType.ChannelMessage)),
      contentWarningProps: null
    }, this.draftDidChange = function() {
      let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : t.props,
        {
          textValue: n
        } = t.state,
        a = es.default.getDraft(e.channel.id, es.DraftType.ChannelMessage);
      n !== a && ("" === a || "" === n) && t.setState((0, x.createState)(a), () => {
        if (n !== a) {
          let {
            onFocus: e
          } = t.props;
          null == e || e()
        }
      })
    }, this.handleKeyDown = e => {
      let {
        keyboardModeEnabled: t,
        onKeyDown: n,
        channel: a
      } = this.props, s = e.shiftKey || e.altKey || e.ctrlKey || e.metaKey, l = 0 !== this.state.textValue.length;
      switch (e.which) {
        case eN.KeyboardKeys.DELETE:
        case eN.KeyboardKeys.BACKSPACE:
          this.handleIncrementCombo("", 1);
          return;
        case eN.KeyboardKeys.ARROW_UP:
          if (s || l) return;
          if (e.preventDefault(), t) ed.default.getUploadCount(a.id, es.DraftType.ChannelMessage) > 0 ? ep.ComponentDispatch.dispatchToLastSubscribed(eN.ComponentActions.FOCUS_ATTACHMENT_AREA) : ep.ComponentDispatch.dispatchToLastSubscribed(eN.ComponentActions.FOCUS_MESSAGES, {
            atEnd: !0
          });
          else {
            let {
              channel: e
            } = this.props, t = er.default.getLastCommandMessage(e.id), n = er.default.getLastEditableMessage(e.id);
            null != t && null != n ? eE.default.compare(n.id, t.id) > 0 ? this.handleEditLastMessage(n) : this.handleRecallLastCommand(t) : null != t ? this.handleRecallLastCommand(t) : null != n && this.handleEditLastMessage(n)
          }
          return;
        case eN.KeyboardKeys.ESCAPE:
          if (s || e.target !== e.currentTarget) return;
          if (e.preventDefault(), t) {
            (0, _.disableKeyboardMode)();
            return
          }
          if (ed.default.getUploadCount(a.id, es.DraftType.ChannelMessage) > 0) {
            C.default.clearAll(a.id, es.DraftType.ChannelMessage);
            return
          }
      }
      null == n || n(e, l)
    }, this.handleIncrementCombo = (e, t) => {
      var n;
      if (!this.props.poggermodeEnabled) return;
      let a = this.props.channel.id,
        s = en.default.getId(),
        l = K.default.getUserCombo(s, a),
        i = (null !== (n = null == l ? void 0 : l.value) && void 0 !== n ? n : 0) + 1;
      (0, z.updateCombo)({
        channelId: a,
        userId: s,
        value: null != e ? e.length : i,
        multiplier: t
      })
    }, this.handleTextareaChange = (e, t, n) => {
      let {
        keyboardModeEnabled: a,
        channel: {
          id: s
        }
      } = this.props;
      c.default.changeDraft(s, t, es.DraftType.ChannelMessage);
      let l = "" !== t && n !== this.state.richValue,
        i = l && !ex.test(t) && !t.startsWith("/") && (!this.isFirstChange || t !== this.state.textValue);
      this.isFirstChange = !1, i && this.state.textValue.length < t.length && this.handleIncrementCombo(), i ? h.default.startTyping(s) : "" === t && h.default.stopTyping(s), l && a && (0, _.disableKeyboardMode)(), this.setState({
        textValue: t,
        richValue: n
      })
    }, this.handleSendMessage = async e => {
      let {
        value: t,
        uploads: n,
        stickers: a,
        command: s,
        commandOptionValues: l,
        isGif: i
      } = e;
      if (0 === (t = t.trim()).length && (null == a || 0 === a.length) && (null == n || 0 === n.length)) return Promise.resolve({
        shouldClear: !1,
        shouldRefocus: !0
      });
      let {
        guild: r,
        channel: o,
        pendingReply: u,
        chatInputType: d
      } = this.props, c = !1;
      if (null != s) {
        if (s.inputType === N.ApplicationCommandInputType.BUILT_IN_INTEGRATION) return ep.ComponentDispatch.dispatch(eN.ComponentActions.SHAKE_APP, {
          duration: 200,
          intensity: 2
        }), Promise.resolve({
          shouldClear: !1,
          shouldRefocus: !0
        });
        let e = await (0, L.default)({
          command: s,
          optionValues: null != l ? l : {},
          context: {
            guild: r,
            channel: o
          }
        });
        if (s.inputType !== N.ApplicationCommandInputType.BUILT_IN_TEXT) return Promise.resolve({
          shouldClear: !0,
          shouldRefocus: !0
        });
        null != e && (t = null != e.content && "" !== e.content ? e.content : t, c = !0 === e.tts)
      }
      return (0, em.applyChatRestrictions)({
        openWarningPopout: e => this.setState({
          contentWarningProps: e
        }),
        type: this.props.chatInputType,
        content: t,
        stickers: a,
        uploads: n,
        channel: o
      }).then(e => {
        let {
          valid: s,
          failureReason: l
        } = e;
        if (!s) return l === eN.MessageRestrictionTypes.SLOWMODE_COOLDOWN ? (ep.ComponentDispatch.dispatch(eN.ComponentActions.SHAKE_APP, {
          duration: 200,
          intensity: 2
        }), ep.ComponentDispatch.dispatch(eN.ComponentActions.EMPHASIZE_SLOWMODE_COOLDOWN), {
          shouldClear: !1,
          shouldRefocus: !0
        }) : {
          shouldClear: !1,
          shouldRefocus: !1
        };
        let h = (0, V.handleLegacyCommands)(t, {
          channel: o,
          isEdit: !1
        });
        null != h && (null != h.content && (t = h.content), null != h.tts && (c = h.tts));
        let E = W.default.parse(o, t);
        E.tts = E.tts || c;
        let m = f.default.getSendMessageOptionsForReply(u);
        if (i) return f.default.sendMessage(o.id, E, void 0, m), (0, Q.deletePendingReply)(o.id), {
          shouldClear: !1,
          shouldRefocus: !0
        };
        if (null != n && n.length > 0) {
          let e = (0, eS.getWebUploadFiles)(n);
          if ((0, eS.filesExceedUploadLimits)(e, null == r ? void 0 : r.id)) return (0, e_.showUploadFileSizeExceededError)(o, e), {
            shouldClear: !1,
            shouldRefocus: !1
          };
          p.default.uploadFiles({
            channelId: o.id,
            uploads: n,
            draftType: es.DraftType.ChannelMessage,
            parsedMessage: E,
            options: {
              ...m,
              stickerIds: a
            }
          }), C.default.clearAll(o.id, es.DraftType.ChannelMessage)
        } else null != a && a.length > 0 ? "" !== t ? f.default.sendMessage(o.id, E, void 0, {
          ...m,
          stickerIds: a
        }) : f.default.sendStickers(o.id, a, t, m, E.tts) : f.default.sendMessage(o.id, E, void 0, m);
        return this.setState((0, x.createEmptyState)()), (0, Q.deletePendingReply)(o.id), (0, ee.clearStickerPreview)(o.id, d.drafts.type), {
          shouldClear: !0,
          shouldRefocus: !0
        }
      })
    }, this.handleSetValue = e => {
      var t, n;
      let a = null === (t = this.editorRef) || void 0 === t ? void 0 : t.getSlateEditor();
      null != a && (j.SlateTransforms.select(a, []), a.insertText(e), null === (n = this.editorRef) || void 0 === n || n.focus())
    }, this.renderAttachButton = (e, t) => (0, a.jsx)(D.default, {
      className: t,
      channel: this.props.channel,
      draftType: es.DraftType.ChannelMessage,
      editorTextContent: this.state.textValue,
      setValue: this.handleSetValue,
      canOnlyUseTextCommands: e
    }), this.renderAppLauncherButton = () => (0, a.jsx)(y.default, {}), this.renderApplicationCommandIcon = (e, t, n) => (0, a.jsx)(O.default, {
      className: n,
      command: e,
      section: t,
      channel: this.props.channel
    })
  }
}
class eD extends s.PureComponent {
  static getDerivedStateFromProps(e, t) {
    let {
      channel: n
    } = e, {
      currentChannelId: a
    } = t;
    return n.id !== a ? {
      textAreaFocused: null != n && !r.isMobile && eo.default.can(eN.Permissions.SEND_MESSAGES, n),
      currentChannelId: n.id
    } : null
  }
  componentDidMount() {
    ep.ComponentDispatch.subscribe(eN.ComponentActions.FOCUS_CHANNEL_TEXT_AREA, this.handleRequestFocus)
  }
  componentDidUpdate(e) {
    (this.props.isEditing !== e.isEditing || this.props.hasModalOpen !== e.hasModalOpen) && (this.props.isEditing || this.props.hasModalOpen ? this.handleInputBlur() : this.handleInputFocus())
  }
  componentWillUnmount() {
    ep.ComponentDispatch.unsubscribe(eN.ComponentActions.FOCUS_CHANNEL_TEXT_AREA, this.handleRequestFocus)
  }
  render() {
    var e;
    let t;
    let {
      channel: n,
      guild: s,
      keyboardModeEnabled: l,
      hasModalOpen: i,
      pendingReply: r,
      chatInputType: u,
      placeholder: c,
      accessibilityLabel: f,
      showQuarantinedUserBanner: h,
      filterAfterTimestamp: C,
      communicationDisabledUntil: p,
      shakeIntensity: g,
      poggermodeEnabled: _,
      isSelectedResourceChannel: S,
      showAutomodUserProfileChatBlocker: T
    } = this.props, {
      textAreaFocused: A,
      textAreaHighlighted: M
    } = this.state, I = u === R.ChatInputTypes.SIDEBAR;
    t = I && n.type === eN.ChannelTypes.GUILD_VOICE ? ev.default.Messages.TEXT_IN_VOICE_A11Y_LABEL : I && n.type === eN.ChannelTypes.GUILD_STAGE_VOICE ? ev.default.Messages.TEXT_IN_STAGE_A11Y_LABEL : o.ChannelTypesSets.THREADS.has(n.type) ? ev.default.Messages.THREAD_A11Y_LABEL : ev.default.Messages.CHANNEL_A11Y_LABEL;
    let N = (0, a.jsx)(et.default, {
      tutorialId: "writing-messages",
      position: "left",
      offsetX: 75,
      children: (0, a.jsx)(eO, {
        focused: A,
        highlighted: M,
        channel: n,
        guild: s,
        keyboardModeEnabled: l,
        onFocus: this.handleInputFocus,
        onBlur: this.handleInputBlur,
        onKeyDown: this.handleInputKeyDown,
        hasModalOpen: i,
        pendingReply: r,
        chatInputType: u,
        placeholder: c,
        accessibilityLabel: f,
        shakeIntensity: g,
        poggermodeEnabled: _
      })
    });
    return (0, a.jsx)(m.default, {
      page: this.getAnalyticsPage(),
      children: (0, a.jsx)(ef.ChatLayerProvider, {
        children: (0, a.jsxs)(eC.ComponentDispatchGroupProvider, {
          ref: this.dispatchGroupRef,
          children: [(0, a.jsx)(eC.ComponentAction, {
            event: eN.ComponentActions.TEXTAREA_FOCUS,
            handler: this.handleInputFocus
          }), (0, a.jsx)(eC.ComponentAction, {
            event: eN.ComponentActions.TEXTAREA_BLUR,
            handler: this.handleInputBlur
          }), (0, a.jsx)(eC.ComponentAction, {
            event: eN.ComponentActions.OPEN_EXPRESSION_PICKER,
            handler: this.handleOpenExpressionPicker
          }), (0, a.jsxs)(ey, {
            isSidebar: I,
            className: eL.chatContent,
            "aria-label": t.format({
              channelName: n.name
            }),
            onMouseDown: this.handleChatInteract,
            onKeyDown: this.handleKeyDown,
            onFocus: this.handleChatInteract,
            children: [(0, a.jsx)(eA.default, {
              channel: n,
              guild: s,
              narrow: I
            }), (0, a.jsxs)(d.HeadingLevel, {
              component: (0, a.jsx)(d.HiddenVisually, {
                children: (0, a.jsx)(d.H, {
                  children: ev.default.Messages.CHANNEL_CHAT_HEADING.format({
                    channelName: n.name
                  })
                })
              }),
              children: [(0, a.jsx)(Z.default, {
                channel: n,
                forceCozy: S,
                filterAfterTimestamp: C,
                showingQuarantineBanner: h
              }), null == n.guild_id || I ? null : (0, a.jsx)(B.default, {
                guildId: n.guild_id,
                channel: n
              }), S ? null : null !== (e = this.renderMessageBanner({
                channel: n,
                showQuarantinedUserBanner: h,
                guild: s,
                communicationDisabledUntil: p,
                showAutomodUserProfileChatBlocker: T
              })) && void 0 !== e ? e : (0, a.jsxs)("form", {
                ref: this.inputFormRef,
                onSubmit: eR,
                className: eL.form,
                children: [_ && (0, a.jsx)(q.default, {
                  channelId: n.id
                }), n.isPrivate() ? (0, a.jsx)(eM.default, {
                  channel: n,
                  children: N
                }) : (0, a.jsx)(eI.default, {
                  channel: n,
                  children: N
                }), (0, a.jsx)(E.default, {
                  channel: n,
                  poggermodeEnabled: _
                })]
              }), (0, a.jsx)(ef.ChatLayerContainer, {})]
            })]
          })]
        })
      })
    }, "messages-".concat(n.id))
  }
  constructor(...e) {
    super(...e), this.inputFormRef = s.createRef(), this.state = {
      textAreaFocused: !1,
      textAreaHighlighted: !1,
      currentChannelId: this.props.channel.id
    }, this.dispatchGroupRef = s.createRef(), this.handleRequestFocus = e => {
      e.channelId === this.props.channel.id && this.setState({
        textAreaFocused: !0
      })
    }, this.getAnalyticsPage = () => {
      let {
        channel: e
      } = this.props;
      if (null == e) return null;
      switch (e.type) {
        case eN.ChannelTypes.GUILD_ANNOUNCEMENT:
        case eN.ChannelTypes.GUILD_TEXT:
        case eN.ChannelTypes.GUILD_FORUM:
        case eN.ChannelTypes.GUILD_MEDIA:
          return m.default.Pages.GUILD_CHANNEL;
        case eN.ChannelTypes.GROUP_DM:
        case eN.ChannelTypes.DM:
          return m.default.Pages.DM_CHANNEL;
        default:
          return null
      }
    }, this.handleInputFocus = e => {
      var t;
      null === (t = this.dispatchGroupRef.current) || void 0 === t || t.bumpDispatchPriority(), !(0, eg.isFullScreen)() && ((null == e ? void 0 : e.highlight) != null ? this.setState({
        textAreaFocused: !0,
        textAreaHighlighted: null == e ? void 0 : e.highlight
      }) : this.setState({
        textAreaFocused: !0
      }))
    }, this.handleInputBlur = () => {
      (document.hasFocus() || this.props.hasModalOpen) && this.setState({
        textAreaFocused: !1,
        textAreaHighlighted: !1
      })
    }, this.handleInputKeyDown = (e, t) => {
      this.state.textAreaHighlighted && this.setState({
        textAreaHighlighted: !1
      }), !t && this._handleMoveToPane(e)
    }, this.handleKeyDown = e => {
      var t;
      (null === (t = this.inputFormRef.current) || void 0 === t || !t.contains(e.target)) && this._handleMoveToPane(e)
    }, this._handleMoveToPane = e => {
      let {
        keyboardModeEnabled: t,
        chatInputType: n,
        channel: a
      } = this.props;
      if (t) switch (e.which) {
        case eN.KeyboardKeys.ARROW_LEFT:
          n === R.ChatInputTypes.SIDEBAR && ep.ComponentDispatch.dispatch(eN.ComponentActions.FOCUS_CHANNEL_TEXT_AREA, {
            channelId: eu.default.getChannelId()
          });
          return;
        case eN.KeyboardKeys.ARROW_RIGHT:
          n === R.ChatInputTypes.NORMAL && ep.ComponentDispatch.dispatch(eN.ComponentActions.FOCUS_CHANNEL_TEXT_AREA, {
            channelId: ea.default.getCurrentSidebarChannelId(a.id)
          })
      }
    }, this.handleOpenExpressionPicker = e => {
      let {
        activeView: t
      } = e;
      (0, b.openExpressionPicker)(t, this.props.chatInputType)
    }, this.handleChatInteract = () => {
      var e;
      null === (e = this.dispatchGroupRef.current) || void 0 === e || e.bumpDispatchPriority()
    }, this.renderMessageBanner = e => {
      let {
        channel: t,
        showQuarantinedUserBanner: n,
        guild: s,
        communicationDisabledUntil: l,
        showAutomodUserProfileChatBlocker: i
      } = e;
      return t.type === eN.ChannelTypes.DM && n ? (0, a.jsx)(J.default, {}) : null != l && (0, U.isCommunicationDisabled)(l) && null != s && !eo.default.can(eN.Permissions.ADMINISTRATOR, s) ? (0, a.jsx)(w.CommunicationDisabledBanner, {
        guild: s,
        disabledUntil: l
      }) : i ? (0, a.jsx)(F.AutomodUserProfileQuarantineChatInputNotice, {
        guild: s
      }) : null
    }
  }
}
var eP = s.memo(function(e) {
  let {
    channel: t,
    guild: n,
    chatInputType: s,
    filterAfterTimestamp: l
  } = e, {
    placeholder: i,
    accessibilityLabel: r
  } = (0, eT.default)(t), o = (0, J.useShouldBlockDMInputForQuarantinedUser)(ec.default.getCurrentUser(), t), [c] = (0, k.useCurrentUserCommunicationDisabled)(null == n ? void 0 : n.id), f = (0, H.useCurrentUserHasAutomodQuarantinedProfile)(null == n ? void 0 : n.id), h = (0, u.useStateFromStores)([ec.default], () => ec.default.getCurrentUser()), C = (0, u.useStateFromStores)([ei.default], () => {
    var e, t, a;
    return null != h && null !== (a = null === (e = ei.default.getMember(null !== (t = null == n ? void 0 : n.id) && void 0 !== t ? t : eN.EMPTY_STRING_GUILD_ID, null == h ? void 0 : h.id)) || void 0 === e ? void 0 : e.isPending) && void 0 !== a && a
  }), p = (0, u.useStateFromStores)([Y.default], () => Y.default.isEnabled()), E = (0, X.default)(t.id), m = (0, G.default)(t.id);
  return (0, a.jsx)(eD, {
    channel: t,
    isEditing: null != (0, u.useStateFromStores)([el.default], () => el.default.getEditingMessageId(t.id)),
    hasModalOpen: (0, d.useModalsStore)(d.hasAnyModalOpenSelector),
    guild: n,
    keyboardModeEnabled: (0, u.useStateFromStores)([S.default], () => S.default.keyboardModeEnabled),
    pendingReply: (0, u.useStateFromStores)([$.default], () => $.default.getPendingReply(t.id)),
    chatInputType: s,
    placeholder: i,
    accessibilityLabel: r,
    filterAfterTimestamp: l,
    showQuarantinedUserBanner: o,
    communicationDisabledUntil: c,
    shakeIntensity: E,
    poggermodeEnabled: p,
    isSelectedResourceChannel: m,
    showAutomodUserProfileChatBlocker: f && !C
  })
})