n(47120);
var i = n(735250),
  a = n(470079),
  s = n(512722),
  l = n.n(s),
  r = n(873546),
  o = n(106351),
  c = n(442837),
  u = n(481060),
  d = n(430742),
  h = n(904245),
  p = n(144144),
  m = n(166459),
  _ = n(966390),
  f = n(738619),
  E = n(410575),
  C = n(744061),
  g = n(857595),
  I = n(607070),
  x = n(367907),
  T = n(176412),
  N = n(555573),
  v = n(213459),
  S = n(456007),
  Z = n(10718),
  A = n(998698),
  M = n(895924),
  b = n(581364),
  R = n(667204),
  j = n(541716),
  L = n(752305),
  P = n(516887),
  O = n(974251),
  y = n(893718),
  D = n(436660),
  k = n(603009),
  U = n(28546),
  w = n(295474),
  B = n(521476),
  H = n(69882),
  G = n(71619),
  V = n(185145),
  F = n(736052),
  W = n(898188),
  z = n(925975),
  Y = n(957730),
  K = n(400023),
  q = n(64078),
  X = n(351780),
  Q = n(843693),
  J = n(217871),
  $ = n(139577),
  ee = n(247944),
  et = n(623292),
  en = n(807092),
  ei = n(268350),
  ea = n(557494),
  es = n(314897),
  el = n(433355),
  er = n(703558),
  eo = n(323873),
  ec = n(271383),
  eu = n(375954),
  ed = n(496675),
  eh = n(944486),
  ep = n(117530),
  em = n(594174),
  e_ = n(482207),
  ef = n(626135),
  eE = n(459273),
  eC = n(585483),
  eg = n(709054),
  eI = n(838440),
  ex = n(228488),
  eT = n(127654),
  eN = n(979956),
  ev = n(655687),
  eS = n(165540),
  eZ = n(583027),
  eA = n(25007),
  eM = n(199649),
  eb = n(1397),
  eR = n(981631),
  ej = n(689938),
  eL = n(489919);

function eP(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
value: n,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = n, e;
}

function eO(e) {
  e.preventDefault();
}
let ey = /^\+(?!\w+):?(?!:)(\w+)?:?$/;

function eD(e) {
  let {
isSidebar: t,
...n
  } = e;
  return t ? (0, i.jsx)('section', {
...n,
role: 'complementary'
  }) : (0, i.jsx)('main', {
...n
  });
}
class ek extends a.PureComponent {
  componentDidMount() {
er.Z.addChangeListener(this.draftDidChange);
  }
  componentWillUnmount() {
er.Z.removeChangeListener(this.draftDidChange);
  }
  componentDidUpdate(e, t) {
let {
  channel: n
} = this.props, {
  textValue: i
} = this.state;
if (e.channel.id !== n.id) {
  this.draftDidChange(this.props);
  return;
}
if (e.hasModalOpen && !this.props.hasModalOpen) {
  let e = er.Z.getDraft(n.id, er.d.ChannelMessage);
  e !== i && this.setState((0, L.eK)(e));
}
t.textValue.length < eR.J6R && i.length >= eR.J6R && ef.default.track(eR.rMx.MESSAGE_LENGTH_LIMIT_REACHED, {});
  }
  handleEditLastMessage(e) {
let {
  channel: t
} = this.props;
h.Z.startEditMessage(t.id, e.id, e.content), x.ZP.trackWithMetadata(eR.rMx.MESSAGE_EDIT_UP_ARROW);
  }
  handleRecallLastCommand(e) {
if (null == e.interactionData)
  return;
let {
  channel: t
} = this.props, {
  commandKey: n,
  interactionOptions: i
} = (0, b.XA)(e.interactionData), {
  command: a,
  application: s
} = Z.Xq(t, n);
if (null != a) {
  var l, r;
  let e = null != s ? {
    type: M.Qi.APPLICATION,
    id: s.id,
    icon: null !== (r = null == s ? void 0 : null === (l = s.bot) || void 0 === l ? void 0 : l.username) && void 0 !== r ? r : s.icon,
    name: s.name,
    application: s
  } : null;
  N.Po({
    channelId: t.id,
    command: a,
    section: e,
    location: M.Vh.RECALL,
    initialValues: (0, S.Dw)(a, null != i ? i : [])
  });
}
  }
  render() {
let {
  channel: e,
  focused: t,
  onBlur: n,
  onFocus: a,
  onResize: s,
  highlighted: r,
  pendingReply: o,
  chatInputType: c,
  placeholder: d,
  accessibilityLabel: h,
  shakeIntensity: p,
  poggermodeEnabled: m
} = this.props, {
  contentWarningProps: _
} = this.state, f = (0, i.jsx)(y.Z, {
  textValue: this.state.textValue,
  richValue: this.state.richValue,
  focused: t,
  className: eL.channelTextArea,
  channel: e,
  placeholder: d,
  accessibilityLabel: h,
  pendingReply: o,
  type: c,
  onChange: this.handleTextareaChange,
  onSubmit: this.handleSendMessage,
  onResize: s,
  onFocus: a,
  onBlur: n,
  onKeyDown: this.handleKeyDown,
  renderAttachButton: this.renderAttachButton,
  renderApplicationCommandIcon: this.renderApplicationCommandIcon,
  promptToUpload: eT.d,
  highlighted: r,
  setEditorRef: e => this.editorRef = e
});
return (0, i.jsx)(u.Popout, {
  position: 'top',
  onRequestClose: () => {
    var e;
    null == _ || null === (e = _.onCancel) || void 0 === e || e.call(_), this.setState({
      contentWarningProps: null
    });
  },
  shouldShow: null != _,
  renderPopout: e => {
    let {
      closePopout: t
    } = e;
    return l()(null != _, 'ChannelTextAreaForm > Popout > renderPopout: contentWarningProps cannot be null'), (0, i.jsx)(C.Z, {
      onClose: t,
      ..._
    });
  },
  children: () => m ? (0, i.jsx)(u.Shaker, {
    isShaking: p > 0,
    intensity: p,
    className: eL.shaker,
    children: f
  }) : f
});
  }
  constructor(...e) {
var t;
super(...e), t = this, eP(this, 'isFirstChange', !0), eP(this, 'editorRef', null), eP(this, 'state', {
  ...(0, L.eK)(er.Z.getDraft(this.props.channel.id, er.d.ChannelMessage)),
  contentWarningProps: null
}), eP(this, 'draftDidChange', function() {
  let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : t.props,
    {
      textValue: n
    } = t.state,
    i = er.Z.getDraft(e.channel.id, er.d.ChannelMessage);
  n !== i && ('' === i || '' === n) && t.setState((0, L.eK)(i), () => {
    if (n !== i) {
      let {
        onFocus: e
      } = t.props;
      null == e || e();
    }
  });
}), eP(this, 'handleKeyDown', e => {
  let {
    keyboardModeEnabled: t,
    onKeyDown: n,
    channel: i
  } = this.props, a = e.shiftKey || e.altKey || e.ctrlKey || e.metaKey, s = 0 !== this.state.textValue.length;
  switch (e.which) {
    case eR.yXg.DELETE:
    case eR.yXg.BACKSPACE:
      this.handleIncrementCombo('', 1);
      return;
    case eR.yXg.ARROW_UP:
      if (a || s)
        return;
      if (e.preventDefault(), t)
        ep.Z.getUploadCount(i.id, er.d.ChannelMessage) > 0 ? eC.S.dispatchToLastSubscribed(eR.CkL.FOCUS_ATTACHMENT_AREA) : eC.S.dispatchToLastSubscribed(eR.CkL.FOCUS_MESSAGES, {
          atEnd: !0
        });
      else {
        let {
          channel: e
        } = this.props, t = eu.Z.getLastCommandMessage(e.id), n = eu.Z.getLastEditableMessage(e.id);
        null != t && null != n ? eg.default.compare(n.id, t.id) > 0 ? this.handleEditLastMessage(n) : this.handleRecallLastCommand(t) : null != t ? this.handleRecallLastCommand(t) : null != n && this.handleEditLastMessage(n);
      }
      return;
    case eR.yXg.ESCAPE:
      if (a || e.target !== e.currentTarget)
        return;
      if (e.preventDefault(), t) {
        (0, g.rf)();
        return;
      }
      if (ep.Z.getUploadCount(i.id, er.d.ChannelMessage) > 0) {
        m.Z.clearAll(i.id, er.d.ChannelMessage);
        return;
      }
  }
  null == n || n(e, s);
}), eP(this, 'handleIncrementCombo', (e, t) => {
  var n;
  if (!this.props.poggermodeEnabled)
    return;
  let i = this.props.channel.id,
    a = es.default.getId(),
    s = Q.ZP.getUserCombo(a, i),
    l = (null !== (n = null == s ? void 0 : s.value) && void 0 !== n ? n : 0) + 1;
  (0, q.SE)({
    channelId: i,
    userId: a,
    value: null != e ? e.length : l,
    multiplier: t
  });
}), eP(this, 'handleTextareaChange', (e, t, n) => {
  let {
    keyboardModeEnabled: i,
    channel: {
      id: a
    }
  } = this.props;
  d.Z.changeDraft(a, t, er.d.ChannelMessage);
  let s = '' !== t && n !== this.state.richValue,
    l = s && !ey.test(t) && !t.startsWith('/') && (!this.isFirstChange || t !== this.state.textValue);
  this.isFirstChange = !1, l && this.state.textValue.length < t.length && this.handleIncrementCombo(), l ? p.Z.startTyping(a) : '' === t && p.Z.stopTyping(a), s && i && (0, g.rf)(), this.setState({
    textValue: t,
    richValue: n
  });
}), eP(this, 'handleSendMessage', async e => {
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
    chatInputType: u
  } = this.props, d = !1;
  if (null != a) {
    if (a.inputType === M.iw.BUILT_IN_INTEGRATION)
      return eC.S.dispatch(eR.CkL.SHAKE_APP, {
        duration: 200,
        intensity: 2
      }), Promise.resolve({
        shouldClear: !1,
        shouldRefocus: !0
      });
    if (A.Z.getCommandOrigin(o.id) === M.bB.APPLICATION_LAUNCHER) {
      var p;
      let {
        location: e,
        sectionName: t
      } = null !== (p = (0, eZ._U)(a)) && void 0 !== p ? p : {};
      if (!await (0, T.L_)({
          applicationId: a.applicationId,
          userIndexState: v.ZP.getUserState(),
          guildIndexState: v.ZP.getGuildState(o.guild_id),
          location: e,
          sectionName: t
        }))
        return Promise.resolve({
          shouldClear: !1,
          shouldRefocus: !0
        });
      (0, eZ.SC)(a);
    }
    let e = await (0, R.Z)({
      command: a,
      optionValues: null != s ? s : {},
      context: {
        guild: r,
        channel: o
      }
    });
    if (a.inputType !== M.iw.BUILT_IN_TEXT)
      return Promise.resolve({
        shouldClear: !0,
        shouldRefocus: !0
      });
    null != e && (t = null != e.content && '' !== e.content ? e.content : t, d = !0 === e.tts);
  }
  return (0, eI.v)({
    openWarningPopout: e => this.setState({
      contentWarningProps: e
    }),
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
      return s === eR.zYc.SLOWMODE_COOLDOWN ? (eC.S.dispatch(eR.CkL.SHAKE_APP, {
        duration: 200,
        intensity: 2
      }), eC.S.dispatch(eR.CkL.EMPHASIZE_SLOWMODE_COOLDOWN), {
        shouldClear: !1,
        shouldRefocus: !0
      }) : {
        shouldClear: !1,
        shouldRefocus: !1
      };
    let p = (0, z.g)(t, {
      channel: o,
      isEdit: !1
    });
    null != p && (null != p.content && (t = p.content), null != p.tts && (d = p.tts));
    let f = Y.ZP.parse(o, t);
    f.tts = f.tts || d;
    let E = h.Z.getSendMessageOptionsForReply(c);
    if (l)
      return h.Z.sendMessage(o.id, f, void 0, E), (0, et.A6)(o.id), {
        shouldClear: !1,
        shouldRefocus: !0
      };
    if (null != n && n.length > 0) {
      let e = (0, eN.KZ)(n);
      if ((0, eN.Bf)(e, null == r ? void 0 : r.id))
        return (0, eT.G)(o, e), {
          shouldClear: !1,
          shouldRefocus: !1
        };
      _.Z.uploadFiles({
        channelId: o.id,
        uploads: n,
        draftType: er.d.ChannelMessage,
        parsedMessage: f,
        options: {
          ...E,
          stickerIds: i
        }
      }), m.Z.clearAll(o.id, er.d.ChannelMessage);
    } else
      null != i && i.length > 0 ? '' !== t ? h.Z.sendMessage(o.id, f, void 0, {
        ...E,
        stickerIds: i
      }) : h.Z.sendStickers(o.id, i, t, E, f.tts) : h.Z.sendMessage(o.id, f, void 0, E);
    return this.setState((0, L.H2)()), (0, et.A6)(o.id), (0, ei.qB)(o.id, u.drafts.type), {
      shouldClear: !0,
      shouldRefocus: !0
    };
  });
}), eP(this, 'handleSetValue', e => {
  var t, n;
  let i = null === (t = this.editorRef) || void 0 === t ? void 0 : t.getSlateEditor();
  null != i && (D.Q.select(i, []), i.insertText(e), null === (n = this.editorRef) || void 0 === n || n.focus());
}), eP(this, 'renderAttachButton', (e, t) => (0, i.jsx)(O.Z, {
  className: t,
  channel: this.props.channel,
  draftType: er.d.ChannelMessage,
  editorTextContent: this.state.textValue,
  setValue: this.handleSetValue,
  canOnlyUseTextCommands: e
})), eP(this, 'renderApplicationCommandIcon', (e, t, n) => (0, i.jsx)(P.Z, {
  className: n,
  command: e,
  section: t,
  channel: this.props.channel
}));
  }
}
class eU extends a.PureComponent {
  static getDerivedStateFromProps(e, t) {
let {
  channel: n
} = e, {
  currentChannelId: i
} = t;
return n.id !== i ? {
  textAreaFocused: null != n && !r.tq && ed.Z.can(eR.Plq.SEND_MESSAGES, n),
  currentChannelId: n.id
} : null;
  }
  componentDidMount() {
eC.S.subscribe(eR.CkL.FOCUS_CHANNEL_TEXT_AREA, this.handleRequestFocus);
  }
  componentDidUpdate(e) {
(this.props.isEditing !== e.isEditing || this.props.hasModalOpen !== e.hasModalOpen) && (this.props.isEditing || this.props.hasModalOpen ? this.handleInputBlur() : this.handleInputFocus());
  }
  componentWillUnmount() {
eC.S.unsubscribe(eR.CkL.FOCUS_CHANNEL_TEXT_AREA, this.handleRequestFocus);
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
  placeholder: d,
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
} = this.state, v = c === j.I.SIDEBAR;
t = v && n.type === eR.d4z.GUILD_VOICE ? ej.Z.Messages.TEXT_IN_VOICE_A11Y_LABEL : v && n.type === eR.d4z.GUILD_STAGE_VOICE ? ej.Z.Messages.TEXT_IN_STAGE_A11Y_LABEL : o.T.THREADS.has(n.type) ? ej.Z.Messages.THREAD_A11Y_LABEL : ej.Z.Messages.CHANNEL_A11Y_LABEL;
let S = (0, i.jsxs)('div', {
  className: eL.channelBottomBarArea,
  children: [
    (0, i.jsx)(ea.Z, {
      tutorialId: 'writing-messages',
      position: 'left',
      offsetX: 75,
      children: (0, i.jsx)(ek, {
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
        placeholder: d,
        accessibilityLabel: h,
        shakeIntensity: C,
        poggermodeEnabled: g
      })
    }),
    (0, i.jsx)(eS.Z, {
      channel: n,
      type: c
    })
  ]
});
return (0, i.jsx)(E.Z, {
  page: this.getAnalyticsPage(),
  children: (0, i.jsx)(e_.sW, {
    children: (0, i.jsxs)(eE.I3, {
      ref: this.dispatchGroupRef,
      children: [
        (0, i.jsx)(eE.d9, {
          event: eR.CkL.TEXTAREA_FOCUS,
          handler: this.handleInputFocus
        }),
        (0, i.jsx)(eE.d9, {
          event: eR.CkL.TEXTAREA_BLUR,
          handler: this.handleInputBlur
        }),
        (0, i.jsx)(eE.d9, {
          event: eR.CkL.OPEN_EXPRESSION_PICKER,
          handler: this.handleOpenExpressionPicker
        }),
        (0, i.jsxs)(eD, {
          isSidebar: v,
          className: eL.chatContent,
          'aria-label': t.format({
            channelName: n.name
          }),
          onMouseDown: this.handleChatInteract,
          onKeyDown: this.handleKeyDown,
          onFocus: this.handleChatInteract,
          children: [
            (0, i.jsx)(eA.Z, {
              channel: n,
              guild: a,
              narrow: v
            }),
            (0, i.jsxs)(u.HeadingLevel, {
              component: (0, i.jsx)(u.HiddenVisually, {
                children: (0, i.jsx)(u.H, {
                  children: ej.Z.Messages.CHANNEL_CHAT_HEADING.format({
                    channelName: n.name
                  })
                })
              }),
              children: [
                (0, i.jsx)(K.Z, {
                  channel: n,
                  forceCozy: I,
                  filterAfterTimestamp: m,
                  showingQuarantineBanner: p
                }),
                null == n.guild_id || v ? null : (0, i.jsx)(W.Z, {
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
                  onSubmit: eO,
                  className: eL.form,
                  children: [
                    g && (0, i.jsx)(J.Z, {
                      channelId: n.id
                    }),
                    n.isPrivate() ? (0, i.jsx)(eM.Z, {
                      channel: n,
                      children: S
                    }) : (0, i.jsx)(eb.Z, {
                      channel: n,
                      children: S
                    }),
                    (0, i.jsx)(f.Z, {
                      channel: n,
                      poggermodeEnabled: g
                    }),
                    !v && (0, i.jsx)(k.Z, {})
                  ]
                }),
                (0, i.jsx)(e_.kw, {})
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
super(...e), eP(this, 'inputFormRef', a.createRef()), eP(this, 'state', {
  textAreaFocused: !1,
  textAreaHighlighted: !1,
  currentChannelId: this.props.channel.id
}), eP(this, 'dispatchGroupRef', a.createRef()), eP(this, 'handleRequestFocus', e => {
  e.channelId === this.props.channel.id && this.setState({
    textAreaFocused: !0
  });
}), eP(this, 'getAnalyticsPage', () => {
  let {
    channel: e
  } = this.props;
  if (null == e)
    return null;
  switch (e.type) {
    case eR.d4z.GUILD_ANNOUNCEMENT:
    case eR.d4z.GUILD_TEXT:
    case eR.d4z.GUILD_FORUM:
    case eR.d4z.GUILD_MEDIA:
      return E.Z.Pages.GUILD_CHANNEL;
    case eR.d4z.GROUP_DM:
    case eR.d4z.DM:
      return E.Z.Pages.DM_CHANNEL;
    default:
      return null;
  }
}), eP(this, 'handleInputFocus', e => {
  var t;
  if (null === (t = this.dispatchGroupRef.current) || void 0 === t || t.bumpDispatchPriority(), !(0, ex.rB)())
    (null == e ? void 0 : e.highlight) != null ? this.setState({
      textAreaFocused: !0,
      textAreaHighlighted: null == e ? void 0 : e.highlight
    }) : this.setState({
      textAreaFocused: !0
    });
}), eP(this, 'handleInputBlur', () => {
  (document.hasFocus() || this.props.hasModalOpen) && this.setState({
    textAreaFocused: !1,
    textAreaHighlighted: !1
  });
}), eP(this, 'handleInputKeyDown', (e, t) => {
  this.state.textAreaHighlighted && this.setState({
    textAreaHighlighted: !1
  }), !t && this._handleMoveToPane(e);
}), eP(this, 'handleKeyDown', e => {
  var t;
  if (null === (t = this.inputFormRef.current) || void 0 === t ? !void 0 : !t.contains(e.target))
    this._handleMoveToPane(e);
}), eP(this, '_handleMoveToPane', e => {
  let {
    keyboardModeEnabled: t,
    chatInputType: n,
    channel: i
  } = this.props;
  if (!!t)
    switch (e.which) {
      case eR.yXg.ARROW_LEFT:
        n === j.I.SIDEBAR && eC.S.dispatch(eR.CkL.FOCUS_CHANNEL_TEXT_AREA, {
          channelId: eh.Z.getChannelId()
        });
        return;
      case eR.yXg.ARROW_RIGHT:
        n === j.I.NORMAL && eC.S.dispatch(eR.CkL.FOCUS_CHANNEL_TEXT_AREA, {
          channelId: el.ZP.getCurrentSidebarChannelId(i.id)
        });
    }
}), eP(this, 'handleOpenExpressionPicker', e => {
  let {
    activeView: t
  } = e;
  (0, U.PG)(t, this.props.chatInputType);
}), eP(this, 'handleChatInteract', () => {
  var e;
  null === (e = this.dispatchGroupRef.current) || void 0 === e || e.bumpDispatchPriority();
}), eP(this, 'renderMessageBanner', e => {
  let {
    channel: t,
    showQuarantinedUserBanner: n,
    guild: a,
    communicationDisabledUntil: s,
    showAutomodUserProfileChatBlocker: l
  } = e;
  return t.type === eR.d4z.DM && n ? (0, i.jsx)(ee.Z, {}) : null != s && (0, H.J)(s) && null != a && !ed.Z.can(eR.Plq.ADMINISTRATOR, a) ? (0, i.jsx)(V.T, {
    guild: a,
    disabledUntil: s
  }) : l ? (0, i.jsx)(B.h, {
    guild: a
  }) : null;
});
  }
}
t.Z = a.memo(function(e) {
  let {
channel: t,
guild: n,
chatInputType: a,
filterAfterTimestamp: s
  } = e, {
placeholder: l,
accessibilityLabel: r
  } = (0, ev.Z)(t), o = (0, ee.S)(em.default.getCurrentUser(), t), [d] = (0, G.AB)(null == n ? void 0 : n.id), h = (0, w.Ux)(null == n ? void 0 : n.id), p = (0, c.e7)([em.default], () => em.default.getCurrentUser()), m = (0, c.e7)([ec.ZP], () => {
var e, t, i;
return null != p && null !== (i = null === (e = ec.ZP.getMember(null !== (t = null == n ? void 0 : n.id) && void 0 !== t ? t : eR.lds, null == p ? void 0 : p.id)) || void 0 === e ? void 0 : e.isPending) && void 0 !== i && i;
  }), _ = (0, c.e7)([X.Z], () => X.Z.isEnabled()), f = (0, $.Z)(t.id), E = (0, F.Z)(t.id);
  return (0, i.jsx)(eU, {
channel: t,
isEditing: null != (0, c.e7)([eo.Z], () => eo.Z.getEditingMessageId(t.id)),
hasModalOpen: (0, u.useModalsStore)(u.hasAnyModalOpenSelector),
guild: n,
keyboardModeEnabled: (0, c.e7)([I.Z], () => I.Z.keyboardModeEnabled),
pendingReply: (0, c.e7)([en.Z], () => en.Z.getPendingReply(t.id)),
chatInputType: a,
placeholder: l,
accessibilityLabel: r,
filterAfterTimestamp: s,
showQuarantinedUserBanner: o,
communicationDisabledUntil: d,
shakeIntensity: f,
poggermodeEnabled: _,
isSelectedResourceChannel: E,
showAutomodUserProfileChatBlocker: h && !m
  });
});