"use strict";
n.r(t), n.d(t, {
  default: function() {
    return eu
  }
}), n("222007"), n("70102");
var l = n("37983"),
  i = n("884691"),
  r = n("414456"),
  o = n.n(r),
  s = n("44170"),
  a = n("627445"),
  u = n.n(a),
  d = n("16470"),
  c = n("394846"),
  f = n("316693"),
  p = n("446674"),
  m = n("77078"),
  h = n("295426"),
  E = n("206230"),
  S = n("812204"),
  g = n("685665"),
  C = n("996554"),
  T = n("426969"),
  v = n("847352"),
  y = n("383018"),
  x = n("529190"),
  I = n("829290"),
  _ = n("842343"),
  N = n("200197"),
  A = n("538282"),
  R = n("241488"),
  O = n("292936"),
  M = n("791234"),
  b = n("267567"),
  k = n("217535"),
  P = n("558901"),
  L = n("328511"),
  U = n("467094"),
  j = n("24373"),
  D = n("300322"),
  w = n("845579"),
  B = n("26989"),
  H = n("957255"),
  F = n("18494"),
  G = n("769264"),
  K = n("585722"),
  V = n("697218"),
  W = n("378765"),
  Y = n("991170"),
  q = n("773336"),
  z = n("545054"),
  Q = n("850391"),
  X = n("743825"),
  Z = n("231868"),
  J = n("834725"),
  $ = n("537566"),
  ee = n("912823"),
  et = n("376215"),
  en = n("830618"),
  el = n("848471"),
  ei = n("153213"),
  er = n("49111"),
  eo = n("406291"),
  es = n("13030"),
  ea = n("537461"),
  eu = i.memo(i.forwardRef(function(e, t) {
    var r, a, eu, ed, ec, ef, ep, em, eh, eE, eS, eg, eC, eT;
    let {
      textValue: ev,
      richValue: ey,
      className: ex,
      innerClassName: eI,
      editorClassName: e_,
      id: eN,
      required: eA,
      disabled: eR,
      placeholder: eO,
      accessibilityLabel: eM,
      channel: eb,
      type: ek,
      focused: eP,
      renderAttachButton: eL,
      renderAppLauncherButton: eU,
      renderApplicationCommandIcon: ej,
      pendingReply: eD,
      onChange: ew,
      onResize: eB,
      onBlur: eH,
      onFocus: eF,
      onKeyDown: eG,
      onSubmit: eK,
      promptToUpload: eV,
      highlighted: eW,
      canMentionRoles: eY,
      canMentionChannels: eq,
      maxCharacterCount: ez,
      showRemainingCharsAfterCount: eQ,
      allowNewLines: eX = !0,
      characterCountClassName: eZ,
      "aria-describedby": eJ,
      "aria-labelledby": e$,
      setEditorRef: e0,
      autoCompletePosition: e1,
      children: e2,
      disableThemedBackground: e4 = !1,
      emojiPickerCloseOnModalOuterClick: e8,
      parentModalKey: e6
    } = e;
    u(null != ek, "chat input type must be set");
    let {
      AnalyticsLocationProvider: e3
    } = (0, g.default)(S.default.CHANNEL_TEXT_AREA), e7 = function(e) {
      let t = i.useRef(null);
      if (null != e && "function" == typeof e) throw Error("Only Ref objects are supported");
      return null == e ? t : e
    }(t), e5 = i.useRef(null), e9 = i.useRef(null), te = i.useRef(null), tt = i.useRef(null);
    null == e0 || e0(e9.current);
    let {
      activeCommand: tn,
      activeCommandSection: tl
    } = (0, p.useStateFromStoresObject)([y.default], () => {
      var e, t;
      return {
        activeCommand: (null === (e = ek.commands) || void 0 === e ? void 0 : e.enabled) ? y.default.getActiveCommand(eb.id) : null,
        activeCommandSection: (null === (t = ek.commands) || void 0 === t ? void 0 : t.enabled) ? y.default.getActiveCommandSection(eb.id) : null
      }
    }), {
      isLurking: ti,
      isPendingMember: tr,
      disabled: to,
      canAttachFiles: ts,
      canCreateThreads: ta,
      canEveryoneSendMessages: tu
    } = function(e, t, n, l) {
      let i = e.getGuildId(),
        r = (0, p.useStateFromStores)([b.default], () => null != i && b.default.isLurking(i), [i]),
        o = (0, p.useStateFromStores)([B.default, V.default], () => {
          var e, t;
          let n = V.default.getCurrentUser();
          return null !== (t = null != i && null != n ? null === (e = B.default.getMember(i, n.id)) || void 0 === e ? void 0 : e.isPending : null) && void 0 !== t && t
        }),
        s = (0, p.useStateFromStoresObject)([H.default], () => {
          var i, r;
          let s = e.isPrivate(),
            a = H.default.computePermissions(e),
            u = f.default.has(a, er.Permissions.CREATE_PUBLIC_THREADS) || f.default.has(a, er.Permissions.CREATE_PRIVATE_THREADS),
            d = (!(null === (i = t.permissions) || void 0 === i ? void 0 : i.requireCreateTherads) || u) && (!(null === (r = t.permissions) || void 0 === r ? void 0 : r.requireSendMessages) || f.default.has(a, er.Permissions.SEND_MESSAGES)),
            c = d && f.default.has(a, er.Permissions.ATTACH_FILES),
            p = null != n,
            m = (0, D.computeIsReadOnlyThread)(e);
          return {
            disabled: l || o || !s && !d || m,
            canAttachFiles: !0 === t.attachments && (s || o || c || p),
            canCreateThreads: u,
            canEveryoneSendMessages: Y.default.canEveryoneRole(er.Permissions.SEND_MESSAGES, e)
          }
        }, [e, t.permissions.requireCreateTherads, t.permissions.requireSendMessages, t.attachments, n, l, o]);
      return {
        isLurking: r,
        isPendingMember: o,
        ...s
      }
    }(eb, ek, tn, eR), td = ek.toolbarType === Q.SlateToolbarTypes.STATIC, tc = !w.UseLegacyChatInput.useSetting() && !(0, q.isAndroidWeb)() && null != window.ResizeObserver, tf = !tc || !(null === (r = ek.commands) || void 0 === r ? void 0 : r.enabled) || !eP || ev !== eo.COMMAND_SENTINEL, tp = (0, k.default)(), {
      isSubmitButtonEnabled: tm,
      fontSize: th
    } = (0, p.useStateFromStoresObject)([E.default], () => ({
      fontSize: E.default.fontSize,
      isSubmitButtonEnabled: E.default.isSubmitButtonEnabled
    })), tE = (0, p.useStateFromStores)([G.default], () => G.default.isEnabled());
    ! function(e, t) {
      let n = i.useCallback(() => {
          !t && (0, A.toggleExpressionPicker)(es.ExpressionPickerViewType.EMOJI, e)
        }, [t, e]),
        l = i.useCallback(() => {
          var n;
          !t && (null === (n = e.gifs) || void 0 === n ? void 0 : n.allowSending) && (0, A.toggleExpressionPicker)(es.ExpressionPickerViewType.GIF, e)
        }, [t, e]),
        r = i.useCallback(() => {
          var n;
          !t && (null === (n = e.stickers) || void 0 === n ? void 0 : n.allowSending) && (0, A.toggleExpressionPicker)(es.ExpressionPickerViewType.STICKER, e)
        }, [t, e]);
      (0, W.useComponentAction)({
        event: er.ComponentActions.TOGGLE_EMOJI_POPOUT,
        handler: n
      }), (0, W.useComponentAction)({
        event: er.ComponentActions.TOGGLE_GIF_PICKER,
        handler: l
      }), (0, W.useComponentAction)({
        event: er.ComponentActions.TOGGLE_STICKER_PICKER,
        handler: r
      })
    }(ek, to);
    let {
      eventEmitter: tS,
      handleEditorSelectionChanged: tg
    } = function(e, t, n) {
      let [l] = i.useState(() => new s.EventEmitter);
      return i.useEffect(() => {
        l.emit("text-changed", t, n)
      }, [t, n, l]), {
        eventEmitter: l,
        handleEditorSelectionChanged: t => {
          null != e.current && l.emit("selection-changed", t)
        }
      }
    }(e9, ev, ey), {
      submitting: tC,
      submit: tT,
      handleSubmit: tv
    } = function(e, t, r, o) {
      let [s, a] = i.useState(!1), u = i.useCallback((i, d, c, f, p) => {
        var E, S, g;
        if (s) return;
        a(!0);
        let C = null !== (S = null === (E = L.default.getStickerPreview(o, t.drafts.type)) || void 0 === E ? void 0 : E.map(e => e.id)) && void 0 !== S ? S : [],
          T = null !== (g = K.default.getUploads(o, t.drafts.type)) && void 0 !== g ? g : [];
        if (null == d && !f && !p && (0, M.shouldShowAddMediaToOriginalPostModal)(T, o)) {
          a(!1), (0, m.openModalLazy)(async () => {
            let {
              default: e
            } = await n.el("67994").then(n.bind(n, "67994"));
            return t => (0, l.jsx)(e, {
              ...t,
              threadId: o,
              attachments: T,
              sendMessage: () => u(i, void 0, void 0, void 0, !0)
            })
          });
          return
        }
        e({
          value: i,
          uploads: T,
          stickers: C,
          command: d,
          commandOptionValues: c,
          isGif: f
        }).then(e => {
          var n, l, i, s;
          let {
            shouldClear: u,
            shouldRefocus: d
          } = e;
          let c = (n = u, l = t, null !== (s = n && (null === (i = l.submit) || void 0 === i ? void 0 : i.clearOnSubmit)) && void 0 !== s && s),
            f = null != r.current;
          if (c) {
            if (o !== F.default.getChannelId()) h.default.saveDraft(o, "", t.drafts.type);
            else f && r.current.clearValue()
          }
          f && (a(!1), (0, A.closeExpressionPicker)(), d && r.current.focus())
        })
      }, [r, e, s, t, o]), d = i.useCallback(e => {
        var t;
        null == r || null === (t = r.current) || void 0 === t || t.submit(e)
      }, []);
      return {
        submitting: s,
        submit: u,
        handleSubmit: d
      }
    }(eK, ek, e9, eb.id), {
      autocompleteRef: ty,
      handleMaybeShowAutocomplete: tx,
      handleHideAutocomplete: tI
    } = function() {
      let e = i.useRef(null),
        t = i.useCallback(() => {
          var t;
          null === (t = e.current) || void 0 === t || t.onMaybeShowAutocomplete()
        }, []),
        n = i.useCallback(() => {
          var t;
          null === (t = e.current) || void 0 === t || t.onHideAutocomplete()
        }, []);
      return {
        autocompleteRef: e,
        handleMaybeShowAutocomplete: t,
        handleHideAutocomplete: n
      }
    }();
    let t_ = (eE = tT, eS = ek, eg = e9, i.useCallback(e => {
      var t, n;
      eS === Q.ChatInputTypes.CREATE_FORUM_POST ? null === (n = eg.current) || void 0 === n || n.insertGIF(e) : eE(e.url, void 0, void 0, !0), (0, A.closeExpressionPicker)(), null === (t = eg.current) || void 0 === t || t.focus()
    }, [eg, eE, eS]));
    let tN = (eC = e9, i.useCallback(function(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          l = eC.current;
        null != e && null != l && l.insertEmoji(e, t, n), t && (0, A.closeExpressionPicker)()
      }, [eC])),
      tA = function(e) {
        let {
          editorRef: t,
          disabled: n,
          textValue: l,
          channelId: r,
          chatInputType: o,
          submit: s
        } = e, {
          analyticsLocations: a
        } = (0, g.default)();
        return i.useCallback((e, i) => {
          var u, d;
          !n && ((0, j.shouldAttachSticker)(i, l, r, o.drafts.type) ? ((0, J.trackStickerPreviewSelect)({
            sticker: e,
            stickerSelectLocation: i,
            isReplacement: null != L.default.getStickerPreview(r, o.drafts.type),
            analyticsLocations: a
          }), (0, U.addStickerPreview)(r, e, o.drafts.type)) : (s({
            value: "",
            uploads: void 0,
            stickers: [e.id]
          }), null === (d = t.current) || void 0 === d || d.clearValue()), (0, A.closeExpressionPicker)(), null === (u = t.current) || void 0 === u || u.focus())
        }, [n, l, r, o.drafts.type, t, a, s])
      }({
        editorRef: e9,
        disabled: to,
        textValue: ev,
        channelId: eb.id,
        chatInputType: ek,
        submit: eK
      });
    let tR = (eT = e9, i.useCallback(e => {
        let t = eT.current;
        null != e && null != t && t.insertSound(e), (0, A.closeExpressionPicker)()
      }, [eT])),
      tO = i.useCallback(() => {
        var e;
        return null == tt ? void 0 : null === (e = tt.current) || void 0 === e ? void 0 : e.hide()
      }, []),
      {
        editorHeight: tM,
        handleResize: tb
      } = function(e) {
        let [t, n] = i.useState(0), l = i.useCallback(t => {
          n(null != t ? t : 0), null == e || e(t)
        }, [e]);
        return {
          editorHeight: t,
          handleResize: l
        }
      }(eB),
      {
        handleTab: tk,
        handleEnter: tP,
        handleMoveSelection: tL
      } = function(e, t, n) {
        let l = i.useCallback(() => {
            var l, i;
            return !!(!n && (null === (l = t.current) || void 0 === l ? void 0 : l.onTabOrEnter(!1))) || (null === (i = e.current) || void 0 === i ? void 0 : i.onTabOrEnter(!1)) || !1
          }, [n]),
          r = i.useCallback(() => {
            var l, i;
            return !!(!n && (null === (l = t.current) || void 0 === l ? void 0 : l.onTabOrEnter(!0))) || (null === (i = e.current) || void 0 === i ? void 0 : i.onTabOrEnter(!0)) || !1
          }, [n]),
          o = i.useCallback(l => {
            var i, r;
            return !!(!n && (null === (i = t.current) || void 0 === i ? void 0 : i.onMoveSelection(l))) || (null === (r = e.current) || void 0 === r ? void 0 : r.onMoveSelection(l)) || !1
          }, [n]);
        return {
          handleTab: l,
          handleEnter: r,
          handleMoveSelection: o
        }
      }(ty, e5, tf),
      {
        expressionPickerView: tU,
        shouldHideExpressionPicker: tj,
        handleAutocompleteVisibilityChange: tD,
        handleOuterClick: tw
      } = function(e, t, n) {
        let [l, r] = (0, A.useExpressionPickerStore)(e => [e.activeView, e.activeViewType], d.default);
        i.useEffect(() => () => {
          (0, A.closeExpressionPicker)(e)
        }, [e]);
        let o = i.useCallback(e => {
            t.emit("autocomplete-visibility-change", e), e && (0, A.closeExpressionPicker)()
          }, [t]),
          s = i.useCallback(() => {
            var e;
            null == l && (null === (e = n.current) || void 0 === e || e.handleOuterClick())
          }, [l]),
          a = null == l || null == r || r !== e;
        return {
          expressionPickerView: l,
          shouldHideExpressionPicker: a,
          handleAutocompleteVisibilityChange: o,
          handleOuterClick: s
        }
      }(ek, tS, e9),
      tB = C.AppLauncherDesktopExperiment.useExperiment({
        location: "chat_input"
      }, {
        autoTrackExposure: !1
      }).enabled,
      tH = (0, p.useStateFromStores)([T.default], () => T.default.shouldShowPopup(), []);
    (0, z.useHereMentionCallback)(tS, eb.guild_id, eb.id);
    let tF = null != eD,
      tG = to && !((ti || tr) && tu) || tC && (null === (a = ek.submit) || void 0 === a ? void 0 : a.useDisabledStylesOnSubmit),
      tK = null,
      tV = null;
    null != tn ? tK = null == ej ? void 0 : ej(tn, tl, ea.attachButton) : (!to || ta) && (tK = null == eL ? void 0 : eL(tF, ea.attachButton), tB && (tV = null == eU ? void 0 : eU()));
    let tW = tc && null != ey && !to && ek.showCharacterCount && null == tn,
      tY = tc && !__OVERLAY__ && null != ey && null == tn,
      tq = function(e, t, n, l) {
        var i, r;
        let o = w.ExpressionSuggestionsEnabled.useSetting(),
          s = (0, p.useStateFromStores)([L.default], () => L.default.getStickerPreview(e.id, t.drafts.type)),
          a = null != s && s.length > 0;
        return o && (null === (i = t.stickers) || void 0 === i ? void 0 : i.autoSuggest) && !a && (null === (r = l.current) || void 0 === r ? void 0 : r.isVisible()) !== !0 && !__OVERLAY__ && null != n
      }(eb, ek, ey, ty),
      tz = (0, I.useShouldShowPTONotice)(eb),
      tQ = null != tn || null != eD || tz,
      tX = !!(null === (eu = ek.emojis) || void 0 === eu ? void 0 : eu.button) && tM <= 44;
    return (0, l.jsx)(N.EventEmitterProvider, {
      value: tS,
      children: (0, l.jsxs)(e3, {
        children: [tY && td ? (0, l.jsx)(ei.default, {
          editorRef: e9,
          options: ek.markdown,
          channel: eb
        }) : tY ? (0, l.jsx)(el.default, {
          ref: tt,
          editorRef: e9,
          containerRef: te,
          options: ek.markdown
        }) : null, (0, l.jsxs)("div", {
          ref: e7,
          className: o(ex, {
            [ea.channelTextArea]: !0,
            [ea.channelTextAreaDisabled]: tG,
            [ea.highlighted]: eW,
            [ea.textAreaMobileThemed]: c.isMobile
          }),
          onMouseDown: tw,
          children: [(0, l.jsx)($.default, {
            type: ek,
            channel: eb,
            activeCommand: tn,
            pendingReply: eD
          }), (0, l.jsxs)("div", {
            ref: te,
            onScroll: tO,
            className: o(eI, {
              [ea.scrollableContainer]: !0,
              [ea.themedBackground]: !e4,
              [ea.webkit]: "Blink" === platform.layout,
              [ea.hasConnectedBar]: tQ
            }),
            children: [(0, l.jsx)(Z.default, {
              channelId: eb.id,
              chatInputType: ek
            }), ek.hideAttachmentArea ? null : (0, l.jsx)(et.default, {
              channelId: eb.id,
              type: ek,
              canAttachFiles: ts
            }), (0, l.jsxs)("div", {
              className: o(ea.inner, {
                [ea.innerDisabled]: tG,
                [ea.sansAttachButton]: ek !== Q.ChatInputTypes.EDIT && (null != tK || tG && null == tK || ti),
                [ea.sansAttachButtonCreateThread]: ek === Q.ChatInputTypes.THREAD_CREATION,
                [ea.sansAttachButtonCreatePost]: ek === Q.ChatInputTypes.CREATE_FORUM_POST
              }),
              children: [tK, tV, (0, l.jsx)(m.FocusRing, {
                ringTarget: e7,
                ringClassName: ea.focusRing,
                children: (0, l.jsx)(X.default, {
                  ref: e9,
                  id: eN,
                  focused: eP,
                  useSlate: tc,
                  textValue: ev,
                  richValue: ey,
                  disabled: to,
                  placeholder: eO,
                  required: eA,
                  accessibilityLabel: eM,
                  isPreviewing: (ti || tr) && tu,
                  channel: eb,
                  type: ek,
                  canPasteFiles: ts,
                  uploadPromptCharacterCount: er.MAX_MESSAGE_LENGTH_PREMIUM,
                  maxCharacterCount: null != ez ? ez : tp,
                  allowNewLines: eX,
                  "aria-describedby": eJ,
                  onChange: ew,
                  onResize: tb,
                  onBlur: eH,
                  onFocus: eF,
                  onKeyDown: eG,
                  onSubmit: tT,
                  onTab: tk,
                  onEnter: tP,
                  onMoveSelection: tL,
                  onSelectionChanged: tg,
                  onMaybeShowAutocomplete: tx,
                  onHideAutocomplete: tI,
                  promptToUpload: eV,
                  fontSize: th,
                  spellcheckEnabled: tE,
                  canOnlyUseTextCommands: tF,
                  className: o({
                    [ea.textAreaThreadCreation]: ek === Q.ChatInputTypes.THREAD_CREATION,
                    [ea.profileBioInput]: ek === Q.ChatInputTypes.PROFILE_BIO_INPUT
                  }, e_),
                  "aria-labelledby": e$
                })
              }), (0, l.jsx)(ee.default, {
                type: ek,
                disabled: to,
                channel: eb,
                handleSubmit: tv,
                isEmpty: 0 === ev.trim().length
              })]
            })]
          }), tf ? null : (0, l.jsx)(x.default, {
            ref: e5,
            channel: eb,
            canOnlyUseTextCommands: tF
          }), (0, l.jsx)(_.default, {
            ref: ty,
            channel: eb,
            canMentionRoles: eY,
            canMentionChannels: eq,
            useNewSlashCommands: tc,
            canOnlyUseTextCommands: tF,
            canSendStickers: null === (ed = ek.stickers) || void 0 === ed ? void 0 : ed.allowSending,
            textValue: ev,
            focused: eP,
            expressionPickerView: tU,
            type: ek,
            editorRef: e9,
            onSendMessage: tT,
            onSendSticker: tA,
            onVisibilityChange: tD,
            editorHeight: tM,
            setValue: (e, t) => null == ew ? void 0 : ew(null, e, t),
            position: e1
          }), (0, l.jsx)(P.default, {
            textValue: ev,
            editorHeight: tM
          }), tW ? (0, l.jsx)(en.default, {
            type: ek,
            textValue: ev,
            className: o(eZ, {
              [ea.indentCharacterCount]: tX
            }),
            maxCharacterCount: ez,
            showRemainingCharsAfterCount: eQ
          }) : null, tq ? (0, l.jsx)(O.default, {
            editorRef: e9,
            channel: eb,
            isEditorFocused: eP,
            onSelectSticker: tA,
            submitButtonVisible: (null === (ec = ek.submit) || void 0 === ec ? void 0 : ec.button) && (null !== (em = null === (ef = ek.submit) || void 0 === ef ? void 0 : ef.ignorePreference) && void 0 !== em ? em : tm),
            stickerIconVisible: null !== (eh = null === (ep = ek.stickers) || void 0 === ep ? void 0 : ep.button) && void 0 !== eh && eh
          }) : null, e2]
        }), tj ? null : (0, l.jsx)(R.default, {
          positionTargetRef: e7,
          type: ek,
          onSelectGIF: t_,
          onSelectEmoji: tN,
          onSelectSticker: tA,
          onSelectSound: tR,
          channel: eb,
          closeOnModalOuterClick: e8,
          parentModalKey: e6,
          position: "top",
          align: "right",
          positionLayerClassName: ea.expressionPickerPositionLayer
        }), tH ? (0, l.jsx)(v.default, {
          positionTargetRef: e7,
          channel: eb,
          closeOnModalOuterClick: e8,
          parentModalKey: e6
        }) : null]
      })
    })
  }))