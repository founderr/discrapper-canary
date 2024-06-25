n(47120);
var l = n(735250),
  i = n(470079),
  s = n(512722),
  a = n.n(s),
  r = n(873546),
  o = n(106351),
  c = n(442837),
  u = n(481060),
  d = n(430742),
  h = n(904245),
  m = n(144144),
  E = n(166459),
  p = n(966390),
  g = n(738619),
  f = n(410575),
  C = n(744061),
  _ = n(857595),
  I = n(607070),
  x = n(367907),
  T = n(555573),
  N = n(456007),
  Z = n(10718),
  S = n(895924),
  v = n(581364),
  A = n(667204),
  M = n(541716),
  R = n(752305),
  j = n(424595),
  L = n(516887),
  O = n(974251),
  P = n(893718),
  y = n(436660),
  b = n(603009),
  D = n(28546),
  U = n(295474),
  k = n(521476),
  w = n(69882),
  H = n(71619),
  G = n(185145),
  B = n(736052),
  V = n(898188),
  F = n(925975),
  z = n(957730),
  W = n(400023),
  Y = n(64078),
  K = n(351780),
  q = n(843693),
  X = n(217871),
  Q = n(139577),
  J = n(247944),
  $ = n(623292),
  ee = n(807092),
  et = n(268350),
  en = n(155409),
  el = n(314897),
  ei = n(433355),
  es = n(703558),
  ea = n(323873),
  er = n(271383),
  eo = n(375954),
  ec = n(496675),
  eu = n(944486),
  ed = n(117530),
  eh = n(594174),
  em = n(482207),
  eE = n(626135),
  ep = n(459273),
  eg = n(585483),
  ef = n(709054),
  eC = n(838440),
  e_ = n(228488),
  eI = n(127654),
  ex = n(979956),
  eT = n(655687),
  eN = n(25007),
  eZ = n(199649),
  eS = n(1397),
  ev = n(981631),
  eA = n(689938),
  eM = n(175803);

function eR(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}

function ej(e) {
  e.preventDefault()
}
let eL = /^\+(?!\w+):?(?!:)(\w+)?:?$/;

function eO(e) {
  let {
    isSidebar: t,
    ...n
  } = e;
  return t ? (0, l.jsx)("section", {
    ...n,
    role: "complementary"
  }) : (0, l.jsx)("main", {
    ...n
  })
}
class eP extends i.PureComponent {
  componentDidMount() {
    es.Z.addChangeListener(this.draftDidChange)
  }
  componentWillUnmount() {
    es.Z.removeChangeListener(this.draftDidChange)
  }
  componentDidUpdate(e, t) {
    let {
      channel: n
    } = this.props, {
      textValue: l
    } = this.state;
    if (e.channel.id !== n.id) {
      this.draftDidChange(this.props);
      return
    }
    if (e.hasModalOpen && !this.props.hasModalOpen) {
      let e = es.Z.getDraft(n.id, es.d.ChannelMessage);
      e !== l && this.setState((0, R.eK)(e))
    }
    t.textValue.length < ev.J6R && l.length >= ev.J6R && eE.default.track(ev.rMx.MESSAGE_LENGTH_LIMIT_REACHED, {})
  }
  handleEditLastMessage(e) {
    let {
      channel: t
    } = this.props;
    h.Z.startEditMessage(t.id, e.id, e.content), x.ZP.trackWithMetadata(ev.rMx.MESSAGE_EDIT_UP_ARROW)
  }
  handleRecallLastCommand(e) {
    if (null == e.interactionData) return;
    let {
      channel: t
    } = this.props, {
      commandKey: n,
      interactionOptions: l
    } = (0, v.XA)(e.interactionData), {
      command: i,
      application: s
    } = Z.Xq(t, n);
    if (null != i) {
      var a, r;
      let e = null != s ? {
        type: S.Qi.APPLICATION,
        id: s.id,
        icon: null !== (r = null == s ? void 0 : null === (a = s.bot) || void 0 === a ? void 0 : a.username) && void 0 !== r ? r : s.icon,
        name: s.name,
        application: s
      } : null;
      T.Po({
        channelId: t.id,
        command: i,
        section: e,
        location: S.Vh.RECALL,
        initialValues: (0, N.Dw)(i, null != l ? l : [])
      })
    }
  }
  render() {
    let {
      channel: e,
      focused: t,
      onResize: n,
      onBlur: i,
      onFocus: s,
      highlighted: r,
      pendingReply: o,
      chatInputType: c,
      placeholder: d,
      accessibilityLabel: h,
      shakeIntensity: m,
      poggermodeEnabled: E
    } = this.props, {
      contentWarningProps: p
    } = this.state, g = (0, l.jsx)(P.Z, {
      textValue: this.state.textValue,
      richValue: this.state.richValue,
      focused: t,
      className: eM.channelTextArea,
      channel: e,
      placeholder: d,
      accessibilityLabel: h,
      pendingReply: o,
      type: c,
      onChange: this.handleTextareaChange,
      onSubmit: this.handleSendMessage,
      onResize: n,
      onFocus: s,
      onBlur: i,
      onKeyDown: this.handleKeyDown,
      renderAttachButton: this.renderAttachButton,
      renderAppLauncherButton: this.renderAppLauncherButton,
      renderApplicationCommandIcon: this.renderApplicationCommandIcon,
      promptToUpload: eI.d,
      highlighted: r,
      setEditorRef: e => this.editorRef = e
    });
    return (0, l.jsx)(u.Popout, {
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
        return a()(null != p, "ChannelTextAreaForm > Popout > renderPopout: contentWarningProps cannot be null"), (0, l.jsx)(C.Z, {
          onClose: t,
          ...p
        })
      },
      children: () => E ? (0, l.jsx)(u.Shaker, {
        isShaking: m > 0,
        intensity: m,
        children: g
      }) : g
    })
  }
  constructor(...e) {
    var t;
    super(...e), t = this, eR(this, "isFirstChange", !0), eR(this, "editorRef", null), eR(this, "state", {
      ...(0, R.eK)(es.Z.getDraft(this.props.channel.id, es.d.ChannelMessage)),
      contentWarningProps: null
    }), eR(this, "draftDidChange", function() {
      let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : t.props,
        {
          textValue: n
        } = t.state,
        l = es.Z.getDraft(e.channel.id, es.d.ChannelMessage);
      n !== l && ("" === l || "" === n) && t.setState((0, R.eK)(l), () => {
        if (n !== l) {
          let {
            onFocus: e
          } = t.props;
          null == e || e()
        }
      })
    }), eR(this, "handleKeyDown", e => {
      let {
        keyboardModeEnabled: t,
        onKeyDown: n,
        channel: l
      } = this.props, i = e.shiftKey || e.altKey || e.ctrlKey || e.metaKey, s = 0 !== this.state.textValue.length;
      switch (e.which) {
        case ev.yXg.DELETE:
        case ev.yXg.BACKSPACE:
          this.handleIncrementCombo("", 1);
          return;
        case ev.yXg.ARROW_UP:
          if (i || s) return;
          if (e.preventDefault(), t) ed.Z.getUploadCount(l.id, es.d.ChannelMessage) > 0 ? eg.S.dispatchToLastSubscribed(ev.CkL.FOCUS_ATTACHMENT_AREA) : eg.S.dispatchToLastSubscribed(ev.CkL.FOCUS_MESSAGES, {
            atEnd: !0
          });
          else {
            let {
              channel: e
            } = this.props, t = eo.Z.getLastCommandMessage(e.id), n = eo.Z.getLastEditableMessage(e.id);
            null != t && null != n ? ef.default.compare(n.id, t.id) > 0 ? this.handleEditLastMessage(n) : this.handleRecallLastCommand(t) : null != t ? this.handleRecallLastCommand(t) : null != n && this.handleEditLastMessage(n)
          }
          return;
        case ev.yXg.ESCAPE:
          if (i || e.target !== e.currentTarget) return;
          if (e.preventDefault(), t) {
            (0, _.rf)();
            return
          }
          if (ed.Z.getUploadCount(l.id, es.d.ChannelMessage) > 0) {
            E.Z.clearAll(l.id, es.d.ChannelMessage);
            return
          }
      }
      null == n || n(e, s)
    }), eR(this, "handleIncrementCombo", (e, t) => {
      var n;
      if (!this.props.poggermodeEnabled) return;
      let l = this.props.channel.id,
        i = el.default.getId(),
        s = q.ZP.getUserCombo(i, l),
        a = (null !== (n = null == s ? void 0 : s.value) && void 0 !== n ? n : 0) + 1;
      (0, Y.SE)({
        channelId: l,
        userId: i,
        value: null != e ? e.length : a,
        multiplier: t
      })
    }), eR(this, "handleTextareaChange", (e, t, n) => {
      let {
        keyboardModeEnabled: l,
        channel: {
          id: i
        }
      } = this.props;
      d.Z.changeDraft(i, t, es.d.ChannelMessage);
      let s = "" !== t && n !== this.state.richValue,
        a = s && !eL.test(t) && !t.startsWith("/") && (!this.isFirstChange || t !== this.state.textValue);
      this.isFirstChange = !1, a && this.state.textValue.length < t.length && this.handleIncrementCombo(), a ? m.Z.startTyping(i) : "" === t && m.Z.stopTyping(i), s && l && (0, _.rf)(), this.setState({
        textValue: t,
        richValue: n
      })
    }), eR(this, "handleSendMessage", async e => {
      let {
        value: t,
        uploads: n,
        stickers: l,
        command: i,
        commandOptionValues: s,
        isGif: a
      } = e;
      if (0 === (t = t.trim()).length && (null == l || 0 === l.length) && (null == n || 0 === n.length)) return Promise.resolve({
        shouldClear: !1,
        shouldRefocus: !0
      });
      let {
        guild: r,
        channel: o,
        pendingReply: c,
        chatInputType: u
      } = this.props, d = !1;
      if (null != i) {
        if (i.inputType === S.iw.BUILT_IN_INTEGRATION) return eg.S.dispatch(ev.CkL.SHAKE_APP, {
          duration: 200,
          intensity: 2
        }), Promise.resolve({
          shouldClear: !1,
          shouldRefocus: !0
        });
        let e = await (0, A.Z)({
          command: i,
          optionValues: null != s ? s : {},
          context: {
            guild: r,
            channel: o
          }
        });
        if (i.inputType !== S.iw.BUILT_IN_TEXT) return Promise.resolve({
          shouldClear: !0,
          shouldRefocus: !0
        });
        null != e && (t = null != e.content && "" !== e.content ? e.content : t, d = !0 === e.tts)
      }
      return (0, eC.v)({
        openWarningPopout: e => this.setState({
          contentWarningProps: e
        }),
        type: this.props.chatInputType,
        content: t,
        stickers: l,
        uploads: n,
        channel: o
      }).then(e => {
        let {
          valid: i,
          failureReason: s
        } = e;
        if (!i) return s === ev.zYc.SLOWMODE_COOLDOWN ? (eg.S.dispatch(ev.CkL.SHAKE_APP, {
          duration: 200,
          intensity: 2
        }), eg.S.dispatch(ev.CkL.EMPHASIZE_SLOWMODE_COOLDOWN), {
          shouldClear: !1,
          shouldRefocus: !0
        }) : {
          shouldClear: !1,
          shouldRefocus: !1
        };
        let m = (0, F.g)(t, {
          channel: o,
          isEdit: !1
        });
        null != m && (null != m.content && (t = m.content), null != m.tts && (d = m.tts));
        let g = z.ZP.parse(o, t);
        g.tts = g.tts || d;
        let f = h.Z.getSendMessageOptionsForReply(c);
        if (a) return h.Z.sendMessage(o.id, g, void 0, f), (0, $.A6)(o.id), {
          shouldClear: !1,
          shouldRefocus: !0
        };
        if (null != n && n.length > 0) {
          let e = (0, ex.KZ)(n);
          if ((0, ex.Bf)(e, null == r ? void 0 : r.id)) return (0, eI.G)(o, e), {
            shouldClear: !1,
            shouldRefocus: !1
          };
          p.Z.uploadFiles({
            channelId: o.id,
            uploads: n,
            draftType: es.d.ChannelMessage,
            parsedMessage: g,
            options: {
              ...f,
              stickerIds: l
            }
          }), E.Z.clearAll(o.id, es.d.ChannelMessage)
        } else null != l && l.length > 0 ? "" !== t ? h.Z.sendMessage(o.id, g, void 0, {
          ...f,
          stickerIds: l
        }) : h.Z.sendStickers(o.id, l, t, f, g.tts) : h.Z.sendMessage(o.id, g, void 0, f);
        return this.setState((0, R.H2)()), (0, $.A6)(o.id), (0, et.qB)(o.id, u.drafts.type), {
          shouldClear: !0,
          shouldRefocus: !0
        }
      })
    }), eR(this, "handleSetValue", e => {
      var t, n;
      let l = null === (t = this.editorRef) || void 0 === t ? void 0 : t.getSlateEditor();
      null != l && (y.Q.select(l, []), l.insertText(e), null === (n = this.editorRef) || void 0 === n || n.focus())
    }), eR(this, "renderAttachButton", (e, t) => (0, l.jsx)(O.Z, {
      className: t,
      channel: this.props.channel,
      draftType: es.d.ChannelMessage,
      editorTextContent: this.state.textValue,
      setValue: this.handleSetValue,
      canOnlyUseTextCommands: e
    })), eR(this, "renderAppLauncherButton", e => {
      let {
        ref: t
      } = e;
      return (0, l.jsx)(j.Z, {
        ref: t
      })
    }), eR(this, "renderApplicationCommandIcon", (e, t, n) => (0, l.jsx)(L.Z, {
      className: n,
      command: e,
      section: t,
      channel: this.props.channel
    }))
  }
}
class ey extends i.PureComponent {
  static getDerivedStateFromProps(e, t) {
    let {
      channel: n
    } = e, {
      currentChannelId: l
    } = t;
    return n.id !== l ? {
      textAreaFocused: null != n && !r.tq && ec.Z.can(ev.Plq.SEND_MESSAGES, n),
      currentChannelId: n.id
    } : null
  }
  componentDidMount() {
    eg.S.subscribe(ev.CkL.FOCUS_CHANNEL_TEXT_AREA, this.handleRequestFocus)
  }
  componentDidUpdate(e) {
    (this.props.isEditing !== e.isEditing || this.props.hasModalOpen !== e.hasModalOpen) && (this.props.isEditing || this.props.hasModalOpen ? this.handleInputBlur() : this.handleInputFocus())
  }
  componentWillUnmount() {
    eg.S.unsubscribe(ev.CkL.FOCUS_CHANNEL_TEXT_AREA, this.handleRequestFocus)
  }
  render() {
    var e;
    let t;
    let {
      channel: n,
      guild: i,
      keyboardModeEnabled: s,
      hasModalOpen: a,
      pendingReply: r,
      chatInputType: c,
      placeholder: d,
      accessibilityLabel: h,
      showQuarantinedUserBanner: m,
      filterAfterTimestamp: E,
      communicationDisabledUntil: p,
      shakeIntensity: C,
      poggermodeEnabled: _,
      isSelectedResourceChannel: I,
      showAutomodUserProfileChatBlocker: x
    } = this.props, {
      textAreaFocused: T,
      textAreaHighlighted: N
    } = this.state, Z = c === M.I.SIDEBAR;
    t = Z && n.type === ev.d4z.GUILD_VOICE ? eA.Z.Messages.TEXT_IN_VOICE_A11Y_LABEL : Z && n.type === ev.d4z.GUILD_STAGE_VOICE ? eA.Z.Messages.TEXT_IN_STAGE_A11Y_LABEL : o.T.THREADS.has(n.type) ? eA.Z.Messages.THREAD_A11Y_LABEL : eA.Z.Messages.CHANNEL_A11Y_LABEL;
    let S = (0, l.jsx)(en.Z, {
      tutorialId: "writing-messages",
      position: "left",
      offsetX: 75,
      children: (0, l.jsx)(eP, {
        focused: T,
        highlighted: N,
        channel: n,
        guild: i,
        keyboardModeEnabled: s,
        onFocus: this.handleInputFocus,
        onBlur: this.handleInputBlur,
        onKeyDown: this.handleInputKeyDown,
        hasModalOpen: a,
        pendingReply: r,
        chatInputType: c,
        placeholder: d,
        accessibilityLabel: h,
        shakeIntensity: C,
        poggermodeEnabled: _
      })
    });
    return (0, l.jsx)(f.Z, {
      page: this.getAnalyticsPage(),
      children: (0, l.jsx)(em.sW, {
        children: (0, l.jsxs)(ep.I3, {
          ref: this.dispatchGroupRef,
          children: [(0, l.jsx)(ep.d9, {
            event: ev.CkL.TEXTAREA_FOCUS,
            handler: this.handleInputFocus
          }), (0, l.jsx)(ep.d9, {
            event: ev.CkL.TEXTAREA_BLUR,
            handler: this.handleInputBlur
          }), (0, l.jsx)(ep.d9, {
            event: ev.CkL.OPEN_EXPRESSION_PICKER,
            handler: this.handleOpenExpressionPicker
          }), (0, l.jsxs)(eO, {
            isSidebar: Z,
            className: eM.chatContent,
            "aria-label": t.format({
              channelName: n.name
            }),
            onMouseDown: this.handleChatInteract,
            onKeyDown: this.handleKeyDown,
            onFocus: this.handleChatInteract,
            children: [(0, l.jsx)(eN.Z, {
              channel: n,
              guild: i,
              narrow: Z
            }), (0, l.jsxs)(u.HeadingLevel, {
              component: (0, l.jsx)(u.HiddenVisually, {
                children: (0, l.jsx)(u.H, {
                  children: eA.Z.Messages.CHANNEL_CHAT_HEADING.format({
                    channelName: n.name
                  })
                })
              }),
              children: [(0, l.jsx)(W.Z, {
                channel: n,
                forceCozy: I,
                filterAfterTimestamp: E,
                showingQuarantineBanner: m
              }), null == n.guild_id || Z ? null : (0, l.jsx)(V.Z, {
                guildId: n.guild_id,
                channel: n
              }), I ? null : null !== (e = this.renderMessageBanner({
                channel: n,
                showQuarantinedUserBanner: m,
                guild: i,
                communicationDisabledUntil: p,
                showAutomodUserProfileChatBlocker: x
              })) && void 0 !== e ? e : (0, l.jsxs)("form", {
                ref: this.inputFormRef,
                onSubmit: ej,
                className: eM.form,
                children: [_ && (0, l.jsx)(X.Z, {
                  channelId: n.id
                }), n.isPrivate() ? (0, l.jsx)(eZ.Z, {
                  channel: n,
                  children: S
                }) : (0, l.jsx)(eS.Z, {
                  channel: n,
                  children: S
                }), (0, l.jsx)(g.Z, {
                  channel: n,
                  poggermodeEnabled: _
                }), !Z && (0, l.jsx)(b.Z, {})]
              }), (0, l.jsx)(em.kw, {})]
            })]
          })]
        })
      })
    }, "messages-".concat(n.id))
  }
  constructor(...e) {
    super(...e), eR(this, "inputFormRef", i.createRef()), eR(this, "state", {
      textAreaFocused: !1,
      textAreaHighlighted: !1,
      currentChannelId: this.props.channel.id
    }), eR(this, "dispatchGroupRef", i.createRef()), eR(this, "handleRequestFocus", e => {
      e.channelId === this.props.channel.id && this.setState({
        textAreaFocused: !0
      })
    }), eR(this, "getAnalyticsPage", () => {
      let {
        channel: e
      } = this.props;
      if (null == e) return null;
      switch (e.type) {
        case ev.d4z.GUILD_ANNOUNCEMENT:
        case ev.d4z.GUILD_TEXT:
        case ev.d4z.GUILD_FORUM:
        case ev.d4z.GUILD_MEDIA:
          return f.Z.Pages.GUILD_CHANNEL;
        case ev.d4z.GROUP_DM:
        case ev.d4z.DM:
          return f.Z.Pages.DM_CHANNEL;
        default:
          return null
      }
    }), eR(this, "handleInputFocus", e => {
      var t;
      if (null === (t = this.dispatchGroupRef.current) || void 0 === t || t.bumpDispatchPriority(), !(0, e_.rB)())(null == e ? void 0 : e.highlight) != null ? this.setState({
        textAreaFocused: !0,
        textAreaHighlighted: null == e ? void 0 : e.highlight
      }) : this.setState({
        textAreaFocused: !0
      })
    }), eR(this, "handleInputBlur", () => {
      (document.hasFocus() || this.props.hasModalOpen) && this.setState({
        textAreaFocused: !1,
        textAreaHighlighted: !1
      })
    }), eR(this, "handleInputKeyDown", (e, t) => {
      this.state.textAreaHighlighted && this.setState({
        textAreaHighlighted: !1
      }), !t && this._handleMoveToPane(e)
    }), eR(this, "handleKeyDown", e => {
      var t;
      if (null === (t = this.inputFormRef.current) || void 0 === t ? !void 0 : !t.contains(e.target)) this._handleMoveToPane(e)
    }), eR(this, "_handleMoveToPane", e => {
      let {
        keyboardModeEnabled: t,
        chatInputType: n,
        channel: l
      } = this.props;
      if (!!t) switch (e.which) {
        case ev.yXg.ARROW_LEFT:
          n === M.I.SIDEBAR && eg.S.dispatch(ev.CkL.FOCUS_CHANNEL_TEXT_AREA, {
            channelId: eu.Z.getChannelId()
          });
          return;
        case ev.yXg.ARROW_RIGHT:
          n === M.I.NORMAL && eg.S.dispatch(ev.CkL.FOCUS_CHANNEL_TEXT_AREA, {
            channelId: ei.ZP.getCurrentSidebarChannelId(l.id)
          })
      }
    }), eR(this, "handleOpenExpressionPicker", e => {
      let {
        activeView: t
      } = e;
      (0, D.PG)(t, this.props.chatInputType)
    }), eR(this, "handleChatInteract", () => {
      var e;
      null === (e = this.dispatchGroupRef.current) || void 0 === e || e.bumpDispatchPriority()
    }), eR(this, "renderMessageBanner", e => {
      let {
        channel: t,
        showQuarantinedUserBanner: n,
        guild: i,
        communicationDisabledUntil: s,
        showAutomodUserProfileChatBlocker: a
      } = e;
      return t.type === ev.d4z.DM && n ? (0, l.jsx)(J.Z, {}) : null != s && (0, w.J)(s) && null != i && !ec.Z.can(ev.Plq.ADMINISTRATOR, i) ? (0, l.jsx)(G.T, {
        guild: i,
        disabledUntil: s
      }) : a ? (0, l.jsx)(k.h, {
        guild: i
      }) : null
    })
  }
}
t.Z = i.memo(function(e) {
  let {
    channel: t,
    guild: n,
    chatInputType: i,
    filterAfterTimestamp: s
  } = e, {
    placeholder: a,
    accessibilityLabel: r
  } = (0, eT.Z)(t), o = (0, J.S)(eh.default.getCurrentUser(), t), [d] = (0, H.AB)(null == n ? void 0 : n.id), h = (0, U.Ux)(null == n ? void 0 : n.id), m = (0, c.e7)([eh.default], () => eh.default.getCurrentUser()), E = (0, c.e7)([er.ZP], () => {
    var e, t, l;
    return null != m && null !== (l = null === (e = er.ZP.getMember(null !== (t = null == n ? void 0 : n.id) && void 0 !== t ? t : ev.lds, null == m ? void 0 : m.id)) || void 0 === e ? void 0 : e.isPending) && void 0 !== l && l
  }), p = (0, c.e7)([K.Z], () => K.Z.isEnabled()), g = (0, Q.Z)(t.id), f = (0, B.Z)(t.id);
  return (0, l.jsx)(ey, {
    channel: t,
    isEditing: null != (0, c.e7)([ea.Z], () => ea.Z.getEditingMessageId(t.id)),
    hasModalOpen: (0, u.useModalsStore)(u.hasAnyModalOpenSelector),
    guild: n,
    keyboardModeEnabled: (0, c.e7)([I.Z], () => I.Z.keyboardModeEnabled),
    pendingReply: (0, c.e7)([ee.Z], () => ee.Z.getPendingReply(t.id)),
    chatInputType: i,
    placeholder: a,
    accessibilityLabel: r,
    filterAfterTimestamp: s,
    showQuarantinedUserBanner: o,
    communicationDisabledUntil: d,
    shakeIntensity: g,
    poggermodeEnabled: p,
    isSelectedResourceChannel: f,
    showAutomodUserProfileChatBlocker: h && !E
  })
})