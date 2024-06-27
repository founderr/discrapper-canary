"use strict";
n(47120), n(411104);
var i = n(735250),
  r = n(470079),
  s = n(120356),
  o = n.n(s),
  a = n(836560),
  l = n(512722),
  u = n.n(l),
  _ = n(143927),
  c = n(873546),
  d = n(149765),
  E = n(442837),
  I = n(481060),
  T = n(430742),
  h = n(607070),
  f = n(100527),
  S = n(906732),
  A = n(998698),
  N = n(271668),
  m = n(931981),
  O = n(326133),
  R = n(570220),
  p = n(28546),
  g = n(805680),
  C = n(151574),
  v = n(368844),
  L = n(41776),
  D = n(849522),
  M = n(780291),
  P = n(913663),
  y = n(268350),
  U = n(378233),
  b = n(665906),
  G = n(695346),
  w = n(271383),
  B = n(496675),
  x = n(944486),
  k = n(398327),
  V = n(117530),
  Z = n(594174),
  H = n(459273),
  F = n(700785),
  Y = n(358085),
  j = n(746877),
  W = n(541716),
  K = n(667829),
  z = n(562267),
  q = n(376918),
  X = n(760196),
  Q = n(258696),
  J = n(303628),
  $ = n(472243),
  ee = n(872635),
  et = n(676108),
  en = n(981631),
  ei = n(665692),
  er = n(957825),
  es = n(573809);
t.Z = r.memo(r.forwardRef(function(e, t) {
  var s, l, eo, ea, el, eu, e_, ec, ed, eE, eI, eT, eh, ef;
  let {
    textValue: eS,
    richValue: eA,
    className: eN,
    innerClassName: em,
    editorClassName: eO,
    id: eR,
    required: ep,
    disabled: eg,
    placeholder: eC,
    accessibilityLabel: ev,
    channel: eL,
    type: eD,
    focused: eM,
    renderAttachButton: eP,
    renderApplicationCommandIcon: ey,
    pendingReply: eU,
    onChange: eb,
    onResize: eG,
    onBlur: ew,
    onFocus: eB,
    onKeyDown: ex,
    onSubmit: ek,
    promptToUpload: eV,
    highlighted: eZ,
    canMentionRoles: eH,
    canMentionChannels: eF,
    maxCharacterCount: eY,
    showRemainingCharsAfterCount: ej,
    allowNewLines: eW = !0,
    characterCountClassName: eK,
    "aria-describedby": ez,
    "aria-labelledby": eq,
    setEditorRef: eX,
    autoCompletePosition: eQ,
    children: eJ,
    disableThemedBackground: e$ = !1,
    emojiPickerCloseOnModalOuterClick: e0,
    parentModalKey: e1
  } = e;
  u()(null != eD, "chat input type must be set");
  let {
    analyticsLocations: e2
  } = (0, S.ZP)(f.Z.CHANNEL_TEXT_AREA), e3 = function(e) {
    let t = r.useRef(null);
    if (null != e && "function" == typeof e) throw Error("Only Ref objects are supported");
    return null == e ? t : e
  }(t), e4 = r.useRef(null), e7 = r.useRef(null), e5 = r.useRef(null), e6 = r.useRef(null);
  null == eX || eX(e7.current);
  let {
    activeCommand: e8,
    activeCommandSection: e9
  } = (0, E.cj)([A.Z], () => {
    var e, t;
    return {
      activeCommand: (null === (e = eD.commands) || void 0 === e ? void 0 : e.enabled) ? A.Z.getActiveCommand(eL.id) : null,
      activeCommandSection: (null === (t = eD.commands) || void 0 === t ? void 0 : t.enabled) ? A.Z.getActiveCommandSection(eL.id) : null
    }
  }), {
    isLurking: te,
    isPendingMember: tt,
    disabled: tn,
    canAttachFiles: ti,
    canCreateThreads: tr,
    canEveryoneSendMessages: ts
  } = function(e, t, n, i) {
    let r = e.getGuildId(),
      s = (0, E.e7)([L.Z], () => null != r && L.Z.isLurking(r), [r]),
      o = (0, E.e7)([w.ZP, Z.default], () => {
        var e, t;
        let n = Z.default.getCurrentUser();
        return null !== (t = null != r && null != n ? null === (e = w.ZP.getMember(r, n.id)) || void 0 === e ? void 0 : e.isPending : null) && void 0 !== t && t
      }),
      a = (0, E.cj)([B.Z], () => {
        var r, s;
        let a = e.isPrivate(),
          l = B.Z.computePermissions(e),
          u = d.e$(l, en.Plq.CREATE_PUBLIC_THREADS) || d.e$(l, en.Plq.CREATE_PRIVATE_THREADS),
          _ = (!(null === (r = t.permissions) || void 0 === r ? void 0 : r.requireCreateTherads) || u) && (!(null === (s = t.permissions) || void 0 === s ? void 0 : s.requireSendMessages) || d.e$(l, en.Plq.SEND_MESSAGES)),
          c = _ && d.e$(l, en.Plq.ATTACH_FILES),
          E = null != n,
          I = (0, b.xl)(e);
        return {
          disabled: i || o || !a && !_ || I,
          canAttachFiles: !0 === t.attachments && (a || o || c || E),
          canCreateThreads: u,
          canEveryoneSendMessages: F.Uu(en.Plq.SEND_MESSAGES, e)
        }
      }, [e, t.permissions.requireCreateTherads, t.permissions.requireSendMessages, t.attachments, n, i, o]);
    return {
      isLurking: s,
      isPendingMember: o,
      ...a
    }
  }(eL, eD, e8, eg), to = eD.toolbarType === W.O.STATIC, ta = !G.dN.useSetting() && !(0, Y.isAndroidWeb)() && null != window.ResizeObserver, tl = !ta || !(null === (s = eD.commands) || void 0 === s ? void 0 : s.enabled) || !eM || eS !== ei.GI, tu = (0, D.Z)(), {
    isSubmitButtonEnabled: t_,
    fontSize: tc
  } = (0, E.cj)([h.Z], () => ({
    fontSize: h.Z.fontSize,
    isSubmitButtonEnabled: h.Z.isSubmitButtonEnabled
  })), td = (0, E.e7)([k.Z], () => k.Z.isEnabled());
  ! function(e, t) {
    let n = r.useCallback(() => {
        if (!t)(0, p.RO)(er.X1.EMOJI, e)
      }, [t, e]),
      i = r.useCallback(() => {
        var n;
        if (!t && !!(null === (n = e.gifs) || void 0 === n ? void 0 : n.allowSending))(0, p.RO)(er.X1.GIF, e)
      }, [t, e]),
      s = r.useCallback(() => {
        var n;
        if (!t && !!(null === (n = e.stickers) || void 0 === n ? void 0 : n.allowSending))(0, p.RO)(er.X1.STICKER, e)
      }, [t, e]);
    (0, H.yp)({
      event: en.CkL.TOGGLE_EMOJI_POPOUT,
      handler: n
    }), (0, H.yp)({
      event: en.CkL.TOGGLE_GIF_PICKER,
      handler: i
    }), (0, H.yp)({
      event: en.CkL.TOGGLE_STICKER_PICKER,
      handler: s
    })
  }(eD, tn);
  let {
    eventEmitter: tE,
    handleEditorSelectionChanged: tI
  } = function(e, t, n) {
    let [i] = r.useState(() => new a.EventEmitter);
    return r.useEffect(() => {
      i.emit("text-changed", t, n)
    }, [t, n, i]), {
      eventEmitter: i,
      handleEditorSelectionChanged: t => {
        null != e.current && i.emit("selection-changed", t)
      }
    }
  }(e7, eS, eA), {
    submitting: tT,
    submit: th,
    handleSubmit: tf
  } = function(e, t, s, o) {
    let [a, l] = r.useState(!1), u = r.useCallback((r, _, c, d, E) => {
      var h, f, S;
      if (a) return;
      l(!0);
      let A = null !== (f = null === (h = P.Z.getStickerPreview(o, t.drafts.type)) || void 0 === h ? void 0 : h.map(e => e.id)) && void 0 !== f ? f : [],
        N = null !== (S = V.Z.getUploads(o, t.drafts.type)) && void 0 !== S ? S : [];
      if (null == _ && !d && !E && (0, v.CB)(N, o)) {
        l(!1), (0, I.openModalLazy)(async () => {
          let {
            default: e
          } = await Promise.all([n.e("23755"), n.e("90508"), n.e("22173"), n.e("53289")]).then(n.bind(n, 273602));
          return t => (0, i.jsx)(e, {
            ...t,
            threadId: o,
            attachments: N,
            sendMessage: () => u(r, void 0, void 0, void 0, !0)
          })
        });
        return
      }
      e({
        value: r,
        uploads: N,
        stickers: A,
        command: _,
        commandOptionValues: c,
        isGif: d
      }).then(e => {
        var n, i, r, a;
        let {
          shouldClear: u,
          shouldRefocus: _
        } = e;
        let c = (n = u, i = t, null !== (a = n && (null === (r = i.submit) || void 0 === r ? void 0 : r.clearOnSubmit)) && void 0 !== a && a),
          d = null != s.current;
        if (c) {
          if (o !== x.Z.getChannelId()) T.Z.saveDraft(o, "", t.drafts.type);
          else d && s.current.clearValue()
        }
        d && (l(!1), (0, p._Q)(), _ && s.current.focus())
      })
    }, [s, e, a, t, o]);
    return {
      submitting: a,
      submit: u,
      handleSubmit: r.useCallback(e => {
        var t;
        null == s || null === (t = s.current) || void 0 === t || t.submit(e)
      }, [])
    }
  }(ek, eD, e7, eL.id), {
    autocompleteRef: tS,
    handleMaybeShowAutocomplete: tA,
    handleHideAutocomplete: tN
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
  let tm = (eE = th, eI = eD, eT = e7, r.useCallback(e => {
    var t, n;
    eI === W.I.CREATE_FORUM_POST ? null === (n = eT.current) || void 0 === n || n.insertGIF(e) : eE(e.url, void 0, void 0, !0), (0, p._Q)(), null === (t = eT.current) || void 0 === t || t.focus()
  }, [eT, eE, eI]));
  let tO = (eh = e7, r.useCallback(function(e, t) {
      let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = eh.current;
      null != e && null != i && i.insertEmoji(e, t, n), t && (0, p._Q)()
    }, [eh])),
    tR = function(e) {
      let {
        editorRef: t,
        disabled: n,
        textValue: i,
        channelId: s,
        chatInputType: o,
        submit: a
      } = e, {
        analyticsLocations: l
      } = (0, S.ZP)();
      return r.useCallback((e, r) => {
        var u, _;
        !n && ((0, U.Hc)(r, i, s, o.drafts.type) ? ((0, q._H)({
          sticker: e,
          stickerSelectLocation: r,
          isReplacement: null != P.Z.getStickerPreview(s, o.drafts.type),
          analyticsLocations: l
        }), (0, y.eu)(s, e, o.drafts.type)) : (a({
          value: "",
          uploads: void 0,
          stickers: [e.id]
        }), null === (_ = t.current) || void 0 === _ || _.clearValue()), (0, p._Q)(), null === (u = t.current) || void 0 === u || u.focus())
      }, [n, i, s, o.drafts.type, t, l, a])
    }({
      editorRef: e7,
      disabled: tn,
      textValue: eS,
      channelId: eL.id,
      chatInputType: eD,
      submit: ek
    });
  let tp = (ef = e7, r.useCallback(e => {
      let t = ef.current;
      null != e && null != t && t.insertSound(e), (0, p._Q)()
    }, [ef])),
    tg = r.useCallback(() => {
      var e;
      return null == e6 ? void 0 : null === (e = e6.current) || void 0 === e ? void 0 : e.hide()
    }, []),
    {
      editorHeight: tC,
      handleResize: tv
    } = function(e) {
      let [t, n] = r.useState(0);
      return {
        editorHeight: t,
        handleResize: r.useCallback(t => {
          n(null != t ? t : 0), null == e || e(t)
        }, [e])
      }
    }(eG),
    {
      handleTab: tL,
      handleEnter: tD,
      handleMoveSelection: tM
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
    }(tS, e4, tl),
    {
      expressionPickerView: tP,
      shouldHideExpressionPicker: ty,
      handleAutocompleteVisibilityChange: tU,
      handleOuterClick: tb
    } = function(e, t, n) {
      let [i, s] = (0, p.Iu)(e => [e.activeView, e.activeViewType], _.Z);
      r.useEffect(() => () => {
        (0, p._Q)(e)
      }, [e]);
      let o = r.useCallback(e => {
          t.emit("autocomplete-visibility-change", e), e && (0, p._Q)()
        }, [t]),
        a = r.useCallback(() => {
          var e;
          null == i && (null === (e = n.current) || void 0 === e || e.handleOuterClick())
        }, [i]),
        l = null == i || null == s || s !== e;
      return {
        expressionPickerView: i,
        shouldHideExpressionPicker: l,
        handleAutocompleteVisibilityChange: o,
        handleOuterClick: a
      }
    }(eD, tE, e7);
  (0, j.S)(tE, eL.guild_id, eL.id);
  let tG = null != eU,
    tw = tn && !((te || tt) && ts) || tT && (null === (l = eD.submit) || void 0 === l ? void 0 : l.useDisabledStylesOnSubmit),
    tB = null;
  null != e8 ? tB = null == ey ? void 0 : ey(e8, e9, es.attachButton) : (!tn || tr) && (tB = null == eP ? void 0 : eP(tG, es.attachButton));
  let tx = ta && null != eA && !tn && eD.showCharacterCount && null == e8,
    tk = ta && !__OVERLAY__ && null != eA && null == e8 && eD.toolbarType !== W.O.NONE,
    tV = function(e, t, n, i) {
      var r, s;
      let o = G.up.useSetting(),
        a = (0, E.e7)([P.Z], () => P.Z.getStickerPreview(e.id, t.drafts.type)),
        l = null != a && a.length > 0;
      return o && (null === (r = t.stickers) || void 0 === r ? void 0 : r.autoSuggest) && !l && (null === (s = i.current) || void 0 === s ? void 0 : s.isVisible()) !== !0 && !__OVERLAY__ && null != n
    }(eL, eD, eA, tS),
    tZ = (0, m.e)(eL),
    tH = null != e8 || null != eU || tZ,
    tF = !!(null === (eo = eD.emojis) || void 0 === eo ? void 0 : eo.button) && tC <= 44;
  return (0, i.jsx)(R.f6, {
    value: tE,
    children: (0, i.jsxs)(S.Gt, {
      value: e2,
      children: [tk && to ? (0, i.jsx)(et.Z, {
        editorRef: e7,
        options: eD.markdown,
        channel: eL
      }) : tk ? (0, i.jsx)(ee.Z, {
        ref: e6,
        editorRef: e7,
        containerRef: e5,
        options: eD.markdown
      }) : null, (0, i.jsxs)("div", {
        ref: e3,
        className: o()(eN, {
          [es.channelTextArea]: !0,
          [es.channelTextAreaDisabled]: tw,
          [es.highlighted]: eZ,
          [es.textAreaMobileThemed]: c.tq
        }),
        onMouseDown: tb,
        children: [(0, i.jsx)(X.Z, {
          type: eD,
          channel: eL,
          activeCommand: e8,
          pendingReply: eU
        }), (0, i.jsxs)("div", {
          ref: e5,
          onScroll: tg,
          className: o()(em, {
            [es.scrollableContainer]: !0,
            [es.themedBackground]: !e$,
            [es.hasConnectedBar]: tH
          }),
          children: [(0, i.jsx)(z.Z, {
            channelId: eL.id,
            chatInputType: eD
          }), eD.hideAttachmentArea ? null : (0, i.jsx)(J.Z, {
            channelId: eL.id,
            type: eD,
            canAttachFiles: ti
          }), (0, i.jsxs)("div", {
            className: o()(es.inner, {
              [es.innerDisabled]: tw,
              [es.sansAttachButton]: eD !== W.I.EDIT && (null != tB || tw && null == tB || te),
              [es.sansAttachButtonCreateThread]: eD === W.I.THREAD_CREATION,
              [es.sansAttachButtonCreatePost]: eD === W.I.CREATE_FORUM_POST
            }),
            children: [tB, (0, i.jsx)(I.FocusRing, {
              ringTarget: e3,
              ringClassName: es.focusRing,
              children: (0, i.jsx)(K.Z, {
                ref: e7,
                id: eR,
                focused: eM,
                useSlate: ta,
                textValue: eS,
                richValue: eA,
                disabled: tn,
                placeholder: eC,
                required: ep,
                accessibilityLabel: ev,
                isPreviewing: (te || tt) && ts,
                channel: eL,
                type: eD,
                canPasteFiles: ti,
                uploadPromptCharacterCount: en.en1,
                maxCharacterCount: null != eY ? eY : tu,
                allowNewLines: eW,
                "aria-describedby": ez,
                onChange: eb,
                onResize: tv,
                onBlur: ew,
                onFocus: eB,
                onKeyDown: ex,
                onSubmit: th,
                onTab: tL,
                onEnter: tD,
                onMoveSelection: tM,
                onSelectionChanged: tI,
                onMaybeShowAutocomplete: tA,
                onHideAutocomplete: tN,
                promptToUpload: eV,
                fontSize: tc,
                spellcheckEnabled: td,
                canOnlyUseTextCommands: tG,
                className: o()({
                  [es.textAreaThreadCreation]: eD === W.I.THREAD_CREATION,
                  [es.profileBioInput]: eD === W.I.PROFILE_BIO_INPUT
                }, eO),
                "aria-labelledby": eq
              })
            }), (0, i.jsx)(Q.Z, {
              type: eD,
              disabled: tn,
              channel: eL,
              handleSubmit: tf,
              isEmpty: 0 === eS.trim().length
            })]
          })]
        }), tl ? null : (0, i.jsx)(N.Z, {
          ref: e4,
          channel: eL,
          canOnlyUseTextCommands: tG
        }), (0, i.jsx)(O.Z, {
          ref: tS,
          channel: eL,
          canMentionRoles: eH,
          canMentionChannels: eF,
          useNewSlashCommands: ta,
          canOnlyUseTextCommands: tG,
          canSendStickers: null === (ea = eD.stickers) || void 0 === ea ? void 0 : ea.allowSending,
          textValue: eS,
          focused: eM,
          expressionPickerView: tP,
          type: eD,
          targetRef: e3,
          editorRef: e7,
          onSendMessage: th,
          onSendSticker: tR,
          onVisibilityChange: tU,
          editorHeight: tC,
          setValue: (e, t) => null == eb ? void 0 : eb(null, e, t),
          position: eQ
        }), (0, i.jsx)(M.Z, {
          textValue: eS,
          editorHeight: tC
        }), tx ? (0, i.jsx)($.Z, {
          type: eD,
          textValue: eS,
          className: o()(eK, {
            [es.indentCharacterCount]: tF
          }),
          maxCharacterCount: eY,
          showRemainingCharsAfterCount: ej
        }) : null, tV ? (0, i.jsx)(C.Z, {
          editorRef: e7,
          channel: eL,
          isEditorFocused: eM,
          onSelectSticker: tR,
          submitButtonVisible: (null === (el = eD.submit) || void 0 === el ? void 0 : el.button) && (null !== (ec = null === (eu = eD.submit) || void 0 === eu ? void 0 : eu.ignorePreference) && void 0 !== ec ? ec : t_),
          stickerIconVisible: null !== (ed = null === (e_ = eD.stickers) || void 0 === e_ ? void 0 : e_.button) && void 0 !== ed && ed
        }) : null, eJ]
      }), ty ? null : (0, i.jsx)(g.Z, {
        positionTargetRef: e3,
        type: eD,
        onSelectGIF: tm,
        onSelectEmoji: tO,
        onSelectSticker: tR,
        onSelectSound: tp,
        channel: eL,
        closeOnModalOuterClick: e0,
        parentModalKey: e1,
        position: "top",
        align: "right",
        positionLayerClassName: es.expressionPickerPositionLayer
      })]
    })
  })
}))