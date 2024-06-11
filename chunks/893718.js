"use strict";
n.r(t), n("47120"), n("411104");
var i = n("735250"),
  r = n("470079"),
  s = n("120356"),
  a = n.n(s),
  o = n("836560"),
  l = n("512722"),
  u = n.n(l),
  d = n("143927"),
  _ = n("873546"),
  c = n("149765"),
  E = n("442837"),
  I = n("481060"),
  T = n("430742"),
  f = n("607070"),
  S = n("100527"),
  h = n("906732"),
  A = n("424602"),
  m = n("541099"),
  N = n("663924"),
  p = n("998698"),
  O = n("271668"),
  C = n("931981"),
  R = n("326133"),
  g = n("570220"),
  L = n("28546"),
  v = n("805680"),
  D = n("151574"),
  M = n("368844"),
  y = n("41776"),
  P = n("849522"),
  U = n("780291"),
  b = n("913663"),
  G = n("268350"),
  w = n("378233"),
  k = n("665906"),
  B = n("695346"),
  V = n("271383"),
  x = n("496675"),
  F = n("944486"),
  H = n("398327"),
  Y = n("117530"),
  j = n("594174"),
  W = n("459273"),
  K = n("700785"),
  z = n("358085"),
  Z = n("746877"),
  Q = n("541716"),
  X = n("667829"),
  q = n("562267"),
  J = n("376918"),
  $ = n("760196"),
  ee = n("258696"),
  et = n("303628"),
  en = n("472243"),
  ei = n("872635"),
  er = n("676108"),
  es = n("981631"),
  ea = n("665692"),
  eo = n("957825"),
  el = n("838329");
t.default = r.memo(r.forwardRef(function(e, t) {
  var s, l, eu, ed, e_, ec, eE, eI, eT, ef, eS, eh, eA, em;
  let {
    textValue: eN,
    richValue: ep,
    className: eO,
    innerClassName: eC,
    editorClassName: eR,
    id: eg,
    required: eL,
    disabled: ev,
    placeholder: eD,
    accessibilityLabel: eM,
    channel: ey,
    type: eP,
    focused: eU,
    renderAttachButton: eb,
    renderAppLauncherButton: eG,
    renderApplicationCommandIcon: ew,
    pendingReply: ek,
    onChange: eB,
    onResize: eV,
    onBlur: ex,
    onFocus: eF,
    onKeyDown: eH,
    onSubmit: eY,
    promptToUpload: ej,
    highlighted: eW,
    canMentionRoles: eK,
    canMentionChannels: ez,
    maxCharacterCount: eZ,
    showRemainingCharsAfterCount: eQ,
    allowNewLines: eX = !0,
    characterCountClassName: eq,
    "aria-describedby": eJ,
    "aria-labelledby": e$,
    setEditorRef: e0,
    autoCompletePosition: e1,
    children: e2,
    disableThemedBackground: e3 = !1,
    emojiPickerCloseOnModalOuterClick: e4,
    parentModalKey: e6
  } = e;
  u()(null != eP, "chat input type must be set");
  let {
    analyticsLocations: e7
  } = (0, h.default)(S.default.CHANNEL_TEXT_AREA), e5 = function(e) {
    let t = r.useRef(null);
    if (null != e && "function" == typeof e) throw Error("Only Ref objects are supported");
    return null == e ? t : e
  }(t), e8 = r.useRef(null), e9 = r.useRef(null), te = r.useRef(null), tt = r.useRef(null);
  null == e0 || e0(e9.current);
  let tn = r.useRef(null),
    {
      activeCommand: ti,
      activeCommandSection: tr
    } = (0, E.useStateFromStoresObject)([p.default], () => {
      var e, t;
      return {
        activeCommand: (null === (e = eP.commands) || void 0 === e ? void 0 : e.enabled) ? p.default.getActiveCommand(ey.id) : null,
        activeCommandSection: (null === (t = eP.commands) || void 0 === t ? void 0 : t.enabled) ? p.default.getActiveCommandSection(ey.id) : null
      }
    }),
    {
      isLurking: ts,
      isPendingMember: ta,
      disabled: to,
      canAttachFiles: tl,
      canCreateThreads: tu,
      canEveryoneSendMessages: td
    } = function(e, t, n, i) {
      let r = e.getGuildId(),
        s = (0, E.useStateFromStores)([y.default], () => null != r && y.default.isLurking(r), [r]),
        a = (0, E.useStateFromStores)([V.default, j.default], () => {
          var e, t;
          let n = j.default.getCurrentUser();
          return null !== (t = null != r && null != n ? null === (e = V.default.getMember(r, n.id)) || void 0 === e ? void 0 : e.isPending : null) && void 0 !== t && t
        }),
        o = (0, E.useStateFromStoresObject)([x.default], () => {
          var r, s;
          let o = e.isPrivate(),
            l = x.default.computePermissions(e),
            u = c.has(l, es.Permissions.CREATE_PUBLIC_THREADS) || c.has(l, es.Permissions.CREATE_PRIVATE_THREADS),
            d = (!(null === (r = t.permissions) || void 0 === r ? void 0 : r.requireCreateTherads) || u) && (!(null === (s = t.permissions) || void 0 === s ? void 0 : s.requireSendMessages) || c.has(l, es.Permissions.SEND_MESSAGES)),
            _ = d && c.has(l, es.Permissions.ATTACH_FILES),
            E = null != n,
            I = (0, k.computeIsReadOnlyThread)(e);
          return {
            disabled: i || a || !o && !d || I,
            canAttachFiles: !0 === t.attachments && (o || a || _ || E),
            canCreateThreads: u,
            canEveryoneSendMessages: K.canEveryoneRole(es.Permissions.SEND_MESSAGES, e)
          }
        }, [e, t.permissions.requireCreateTherads, t.permissions.requireSendMessages, t.attachments, n, i, a]);
      return {
        isLurking: s,
        isPendingMember: a,
        ...o
      }
    }(ey, eP, ti, ev),
    t_ = eP.toolbarType === Q.SlateToolbarTypes.STATIC,
    tc = !B.UseLegacyChatInput.useSetting() && !(0, z.isAndroidWeb)() && null != window.ResizeObserver,
    tE = !tc || !(null === (s = eP.commands) || void 0 === s ? void 0 : s.enabled) || !eU || eN !== ea.COMMAND_SENTINEL,
    tI = (0, P.default)(),
    {
      isSubmitButtonEnabled: tT,
      fontSize: tf
    } = (0, E.useStateFromStoresObject)([f.default], () => ({
      fontSize: f.default.fontSize,
      isSubmitButtonEnabled: f.default.isSubmitButtonEnabled
    })),
    tS = (0, E.useStateFromStores)([H.default], () => H.default.isEnabled());
  ! function(e, t) {
    let n = r.useCallback(() => {
        !t && (0, L.toggleExpressionPicker)(eo.ExpressionPickerViewType.EMOJI, e)
      }, [t, e]),
      i = r.useCallback(() => {
        var n;
        !t && (null === (n = e.gifs) || void 0 === n ? void 0 : n.allowSending) && (0, L.toggleExpressionPicker)(eo.ExpressionPickerViewType.GIF, e)
      }, [t, e]),
      s = r.useCallback(() => {
        var n;
        !t && (null === (n = e.stickers) || void 0 === n ? void 0 : n.allowSending) && (0, L.toggleExpressionPicker)(eo.ExpressionPickerViewType.STICKER, e)
      }, [t, e]);
    (0, W.useComponentAction)({
      event: es.ComponentActions.TOGGLE_EMOJI_POPOUT,
      handler: n
    }), (0, W.useComponentAction)({
      event: es.ComponentActions.TOGGLE_GIF_PICKER,
      handler: i
    }), (0, W.useComponentAction)({
      event: es.ComponentActions.TOGGLE_STICKER_PICKER,
      handler: s
    })
  }(eP, to);
  let {
    eventEmitter: th,
    handleEditorSelectionChanged: tA
  } = function(e, t, n) {
    let [i] = r.useState(() => new o.EventEmitter);
    return r.useEffect(() => {
      i.emit("text-changed", t, n)
    }, [t, n, i]), {
      eventEmitter: i,
      handleEditorSelectionChanged: t => {
        null != e.current && i.emit("selection-changed", t)
      }
    }
  }(e9, eN, ep), {
    submitting: tm,
    submit: tN,
    handleSubmit: tp
  } = function(e, t, s, a) {
    let [o, l] = r.useState(!1), u = r.useCallback((r, d, _, c, E) => {
      var f, S, h;
      if (o) return;
      l(!0);
      let A = null !== (S = null === (f = b.default.getStickerPreview(a, t.drafts.type)) || void 0 === f ? void 0 : f.map(e => e.id)) && void 0 !== S ? S : [],
        m = null !== (h = Y.default.getUploads(a, t.drafts.type)) && void 0 !== h ? h : [];
      if (null == d && !c && !E && (0, M.shouldShowAddMediaToOriginalPostModal)(m, a)) {
        l(!1), (0, I.openModalLazy)(async () => {
          let {
            default: e
          } = await Promise.all([n.e("99387"), n.e("23755"), n.e("90508"), n.e("41947"), n.e("53289")]).then(n.bind(n, "273602"));
          return t => (0, i.jsx)(e, {
            ...t,
            threadId: a,
            attachments: m,
            sendMessage: () => u(r, void 0, void 0, void 0, !0)
          })
        });
        return
      }
      e({
        value: r,
        uploads: m,
        stickers: A,
        command: d,
        commandOptionValues: _,
        isGif: c
      }).then(e => {
        var n, i, r, o;
        let {
          shouldClear: u,
          shouldRefocus: d
        } = e;
        let _ = (n = u, i = t, null !== (o = n && (null === (r = i.submit) || void 0 === r ? void 0 : r.clearOnSubmit)) && void 0 !== o && o),
          c = null != s.current;
        if (_) {
          if (a !== F.default.getChannelId()) T.default.saveDraft(a, "", t.drafts.type);
          else c && s.current.clearValue()
        }
        c && (l(!1), (0, L.closeExpressionPicker)(), d && s.current.focus())
      })
    }, [s, e, o, t, a]);
    return {
      submitting: o,
      submit: u,
      handleSubmit: r.useCallback(e => {
        var t;
        null == s || null === (t = s.current) || void 0 === t || t.submit(e)
      }, [])
    }
  }(eY, eP, e9, ey.id), {
    autocompleteRef: tO,
    handleMaybeShowAutocomplete: tC,
    handleHideAutocomplete: tR
  } = function() {
    let e = r.useRef(null),
      t = r.useCallback(() => {
        var t;
        null === (t = e.current) || void 0 === t || t.onMaybeShowAutocomplete()
      }, []),
      n = r.useCallback(() => {
        var t;
        null === (t = e.current) || void 0 === t || t.onHideAutocomplete()
      }, []);
    return {
      autocompleteRef: e,
      handleMaybeShowAutocomplete: t,
      handleHideAutocomplete: n
    }
  }();
  let tg = (ef = tN, eS = eP, eh = e9, r.useCallback(e => {
    var t, n;
    eS === Q.ChatInputTypes.CREATE_FORUM_POST ? null === (n = eh.current) || void 0 === n || n.insertGIF(e) : ef(e.url, void 0, void 0, !0), (0, L.closeExpressionPicker)(), null === (t = eh.current) || void 0 === t || t.focus()
  }, [eh, ef, eS]));
  let tL = (eA = e9, r.useCallback(function(e, t) {
      let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = eA.current;
      null != e && null != i && i.insertEmoji(e, t, n), t && (0, L.closeExpressionPicker)()
    }, [eA])),
    tv = function(e) {
      let {
        editorRef: t,
        disabled: n,
        textValue: i,
        channelId: s,
        chatInputType: a,
        submit: o
      } = e, {
        analyticsLocations: l
      } = (0, h.default)();
      return r.useCallback((e, r) => {
        var u, d;
        !n && ((0, w.shouldAttachSticker)(r, i, s, a.drafts.type) ? ((0, J.trackStickerPreviewSelect)({
          sticker: e,
          stickerSelectLocation: r,
          isReplacement: null != b.default.getStickerPreview(s, a.drafts.type),
          analyticsLocations: l
        }), (0, G.addStickerPreview)(s, e, a.drafts.type)) : (o({
          value: "",
          uploads: void 0,
          stickers: [e.id]
        }), null === (d = t.current) || void 0 === d || d.clearValue()), (0, L.closeExpressionPicker)(), null === (u = t.current) || void 0 === u || u.focus())
      }, [n, i, s, a.drafts.type, t, l, o])
    }({
      editorRef: e9,
      disabled: to,
      textValue: eN,
      channelId: ey.id,
      chatInputType: eP,
      submit: eY
    });
  let tD = (em = e9, r.useCallback(e => {
      let t = em.current;
      null != e && null != t && t.insertSound(e), (0, L.closeExpressionPicker)()
    }, [em])),
    tM = r.useCallback(() => {
      var e;
      return null == tt ? void 0 : null === (e = tt.current) || void 0 === e ? void 0 : e.hide()
    }, []),
    {
      editorHeight: ty,
      handleResize: tP
    } = function(e) {
      let [t, n] = r.useState(0);
      return {
        editorHeight: t,
        handleResize: r.useCallback(t => {
          n(null != t ? t : 0), null == e || e(t)
        }, [e])
      }
    }(eV),
    {
      handleTab: tU,
      handleEnter: tb,
      handleMoveSelection: tG
    } = function(e, t, n) {
      let i = r.useCallback(() => {
          var i, r;
          return !!(!n && (null === (i = t.current) || void 0 === i ? void 0 : i.onTabOrEnter(!1))) || (null === (r = e.current) || void 0 === r ? void 0 : r.onTabOrEnter(!1)) || !1
        }, [n]),
        s = r.useCallback(() => {
          var i, r;
          return !!(!n && (null === (i = t.current) || void 0 === i ? void 0 : i.onTabOrEnter(!0))) || (null === (r = e.current) || void 0 === r ? void 0 : r.onTabOrEnter(!0)) || !1
        }, [n]);
      return {
        handleTab: i,
        handleEnter: s,
        handleMoveSelection: r.useCallback(i => {
          var r, s;
          return !!(!n && (null === (r = t.current) || void 0 === r ? void 0 : r.onMoveSelection(i))) || (null === (s = e.current) || void 0 === s ? void 0 : s.onMoveSelection(i)) || !1
        }, [n])
      }
    }(tO, e8, tE),
    {
      expressionPickerView: tw,
      shouldHideExpressionPicker: tk,
      handleAutocompleteVisibilityChange: tB,
      handleOuterClick: tV
    } = function(e, t, n) {
      let [i, s] = (0, L.useExpressionPickerStore)(e => [e.activeView, e.activeViewType], d.default);
      r.useEffect(() => () => {
        (0, L.closeExpressionPicker)(e)
      }, [e]);
      let a = r.useCallback(e => {
          t.emit("autocomplete-visibility-change", e), e && (0, L.closeExpressionPicker)()
        }, [t]),
        o = r.useCallback(() => {
          var e;
          null == i && (null === (e = n.current) || void 0 === e || e.handleOuterClick())
        }, [i]),
        l = null == i || null == s || s !== e;
      return {
        expressionPickerView: i,
        shouldHideExpressionPicker: l,
        handleAutocompleteVisibilityChange: a,
        handleOuterClick: o
      }
    }(eP, th, e9),
    tx = A.AppLauncherDesktopExperiment.useExperiment({
      location: "chat_input"
    }, {
      autoTrackExposure: !0
    }).enabled,
    tF = (0, E.useStateFromStores)([m.default], () => m.default.shouldShowPopup(), []);
  (0, Z.useHereMentionCallback)(th, ey.guild_id, ey.id);
  let tH = null != ek,
    tY = to && !((ts || ta) && td) || tm && (null === (l = eP.submit) || void 0 === l ? void 0 : l.useDisabledStylesOnSubmit),
    tj = null,
    tW = null;
  null != ti ? tj = null == ew ? void 0 : ew(ti, tr, el.attachButton) : (!to || tu) && (tj = null == eb ? void 0 : eb(tH, el.attachButton), tx && (tW = null == eG ? void 0 : eG({
    ref: tn
  })));
  let tK = tc && null != ep && !to && eP.showCharacterCount && null == ti,
    tz = tc && !__OVERLAY__ && null != ep && null == ti && eP.toolbarType !== Q.SlateToolbarTypes.NONE,
    tZ = function(e, t, n, i) {
      var r, s;
      let a = B.ExpressionSuggestionsEnabled.useSetting(),
        o = (0, E.useStateFromStores)([b.default], () => b.default.getStickerPreview(e.id, t.drafts.type)),
        l = null != o && o.length > 0;
      return a && (null === (r = t.stickers) || void 0 === r ? void 0 : r.autoSuggest) && !l && (null === (s = i.current) || void 0 === s ? void 0 : s.isVisible()) !== !0 && !__OVERLAY__ && null != n
    }(ey, eP, ep, tO),
    tQ = (0, C.useShouldShowPTONotice)(ey),
    tX = null != ti || null != ek || tQ,
    tq = !!(null === (eu = eP.emojis) || void 0 === eu ? void 0 : eu.button) && ty <= 44;
  return (0, i.jsx)(g.EventEmitterProvider, {
    value: th,
    children: (0, i.jsx)(h.AnalyticsLocationProvider, {
      value: e7,
      children: (0, i.jsxs)("div", {
        className: el.channelTextAreaContainer,
        children: [tz && t_ ? (0, i.jsx)(er.default, {
          editorRef: e9,
          options: eP.markdown,
          channel: ey
        }) : tz ? (0, i.jsx)(ei.default, {
          ref: tt,
          editorRef: e9,
          containerRef: te,
          options: eP.markdown
        }) : null, (0, i.jsxs)("div", {
          ref: e5,
          className: a()(eO, {
            [el.channelTextArea]: !0,
            [el.channelTextAreaDisabled]: tY,
            [el.highlighted]: eW,
            [el.textAreaMobileThemed]: _.isMobile
          }),
          onMouseDown: tV,
          children: [(0, i.jsx)($.default, {
            type: eP,
            channel: ey,
            activeCommand: ti,
            pendingReply: ek
          }), (0, i.jsxs)("div", {
            ref: te,
            onScroll: tM,
            className: a()(eC, {
              [el.scrollableContainer]: !0,
              [el.themedBackground]: !e3,
              [el.hasConnectedBar]: tX
            }),
            children: [(0, i.jsx)(q.default, {
              channelId: ey.id,
              chatInputType: eP
            }), eP.hideAttachmentArea ? null : (0, i.jsx)(et.default, {
              channelId: ey.id,
              type: eP,
              canAttachFiles: tl
            }), (0, i.jsxs)("div", {
              className: a()(el.inner, {
                [el.innerDisabled]: tY,
                [el.sansAttachButton]: eP !== Q.ChatInputTypes.EDIT && (null != tj || tY && null == tj || ts),
                [el.sansAttachButtonCreateThread]: eP === Q.ChatInputTypes.THREAD_CREATION,
                [el.sansAttachButtonCreatePost]: eP === Q.ChatInputTypes.CREATE_FORUM_POST
              }),
              children: [tj, (0, i.jsx)(I.FocusRing, {
                ringTarget: e5,
                ringClassName: el.focusRing,
                children: (0, i.jsx)(X.default, {
                  ref: e9,
                  id: eg,
                  focused: eU,
                  useSlate: tc,
                  textValue: eN,
                  richValue: ep,
                  disabled: to,
                  placeholder: eD,
                  required: eL,
                  accessibilityLabel: eM,
                  isPreviewing: (ts || ta) && td,
                  channel: ey,
                  type: eP,
                  canPasteFiles: tl,
                  uploadPromptCharacterCount: es.MAX_MESSAGE_LENGTH_PREMIUM,
                  maxCharacterCount: null != eZ ? eZ : tI,
                  allowNewLines: eX,
                  "aria-describedby": eJ,
                  onChange: eB,
                  onResize: tP,
                  onBlur: ex,
                  onFocus: eF,
                  onKeyDown: eH,
                  onSubmit: tN,
                  onTab: tU,
                  onEnter: tb,
                  onMoveSelection: tG,
                  onSelectionChanged: tA,
                  onMaybeShowAutocomplete: tC,
                  onHideAutocomplete: tR,
                  promptToUpload: ej,
                  fontSize: tf,
                  spellcheckEnabled: tS,
                  canOnlyUseTextCommands: tH,
                  className: a()({
                    [el.textAreaThreadCreation]: eP === Q.ChatInputTypes.THREAD_CREATION,
                    [el.profileBioInput]: eP === Q.ChatInputTypes.PROFILE_BIO_INPUT
                  }, eR),
                  "aria-labelledby": e$
                })
              }), (0, i.jsx)(ee.default, {
                type: eP,
                disabled: to,
                channel: ey,
                handleSubmit: tp,
                isEmpty: 0 === eN.trim().length
              })]
            })]
          }), tE ? null : (0, i.jsx)(O.default, {
            ref: e8,
            channel: ey,
            canOnlyUseTextCommands: tH
          }), (0, i.jsx)(R.default, {
            ref: tO,
            channel: ey,
            canMentionRoles: eK,
            canMentionChannels: ez,
            useNewSlashCommands: tc,
            canOnlyUseTextCommands: tH,
            canSendStickers: null === (ed = eP.stickers) || void 0 === ed ? void 0 : ed.allowSending,
            textValue: eN,
            focused: eU,
            expressionPickerView: tw,
            type: eP,
            targetRef: e5,
            editorRef: e9,
            onSendMessage: tN,
            onSendSticker: tv,
            onVisibilityChange: tB,
            editorHeight: ty,
            setValue: (e, t) => null == eB ? void 0 : eB(null, e, t),
            position: e1
          }), (0, i.jsx)(U.default, {
            textValue: eN,
            editorHeight: ty
          }), tK ? (0, i.jsx)(en.default, {
            type: eP,
            textValue: eN,
            className: a()(eq, {
              [el.indentCharacterCount]: tq
            }),
            maxCharacterCount: eZ,
            showRemainingCharsAfterCount: eQ
          }) : null, tZ ? (0, i.jsx)(D.default, {
            editorRef: e9,
            channel: ey,
            isEditorFocused: eU,
            onSelectSticker: tv,
            submitButtonVisible: (null === (e_ = eP.submit) || void 0 === e_ ? void 0 : e_.button) && (null !== (eI = null === (ec = eP.submit) || void 0 === ec ? void 0 : ec.ignorePreference) && void 0 !== eI ? eI : tT),
            stickerIconVisible: null !== (eT = null === (eE = eP.stickers) || void 0 === eE ? void 0 : eE.button) && void 0 !== eT && eT
          }) : null, e2]
        }), tW, tk ? null : (0, i.jsx)(v.default, {
          positionTargetRef: e5,
          type: eP,
          onSelectGIF: tg,
          onSelectEmoji: tL,
          onSelectSticker: tv,
          onSelectSound: tD,
          channel: ey,
          closeOnModalOuterClick: e4,
          parentModalKey: e6,
          position: "top",
          align: "right",
          positionLayerClassName: el.expressionPickerPositionLayer
        }), tF ? (0, i.jsx)(N.default, {
          positionTargetRef: tn,
          channel: ey,
          closeOnModalOuterClick: e4,
          parentModalKey: e6
        }) : null]
      })
    })
  })
}))