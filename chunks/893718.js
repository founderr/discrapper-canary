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
  A = n(424602),
  N = n(541099),
  m = n(663924),
  O = n(998698),
  R = n(271668),
  p = n(931981),
  g = n(326133),
  C = n(570220),
  v = n(28546),
  L = n(805680),
  D = n(151574),
  M = n(368844),
  P = n(41776),
  y = n(849522),
  U = n(780291),
  b = n(913663),
  G = n(268350),
  w = n(378233),
  x = n(665906),
  B = n(695346),
  k = n(271383),
  V = n(496675),
  Z = n(944486),
  H = n(398327),
  F = n(117530),
  Y = n(594174),
  j = n(459273),
  W = n(700785),
  K = n(358085),
  z = n(746877),
  q = n(541716),
  X = n(667829),
  Q = n(562267),
  J = n(376918),
  $ = n(760196),
  ee = n(258696),
  et = n(303628),
  en = n(472243),
  ei = n(872635),
  er = n(676108),
  es = n(981631),
  eo = n(665692),
  ea = n(957825),
  el = n(573809);
t.Z = r.memo(r.forwardRef(function(e, t) {
  var s, l, eu, e_, ec, ed, eE, eI, eT, eh, ef, eS, eA, eN;
  let {
    textValue: em,
    richValue: eO,
    className: eR,
    innerClassName: ep,
    editorClassName: eg,
    id: eC,
    required: ev,
    disabled: eL,
    placeholder: eD,
    accessibilityLabel: eM,
    channel: eP,
    type: ey,
    focused: eU,
    renderAttachButton: eb,
    renderAppLauncherButton: eG,
    renderApplicationCommandIcon: ew,
    pendingReply: ex,
    onChange: eB,
    onResize: ek,
    onBlur: eV,
    onFocus: eZ,
    onKeyDown: eH,
    onSubmit: eF,
    promptToUpload: eY,
    highlighted: ej,
    canMentionRoles: eW,
    canMentionChannels: eK,
    maxCharacterCount: ez,
    showRemainingCharsAfterCount: eq,
    allowNewLines: eX = !0,
    characterCountClassName: eQ,
    "aria-describedby": eJ,
    "aria-labelledby": e$,
    setEditorRef: e0,
    autoCompletePosition: e1,
    children: e2,
    disableThemedBackground: e3 = !1,
    emojiPickerCloseOnModalOuterClick: e4,
    parentModalKey: e7
  } = e;
  u()(null != ey, "chat input type must be set");
  let {
    analyticsLocations: e5
  } = (0, S.ZP)(f.Z.CHANNEL_TEXT_AREA), e6 = function(e) {
    let t = r.useRef(null);
    if (null != e && "function" == typeof e) throw Error("Only Ref objects are supported");
    return null == e ? t : e
  }(t), e8 = r.useRef(null), e9 = r.useRef(null), te = r.useRef(null), tt = r.useRef(null);
  null == e0 || e0(e9.current);
  let tn = r.useRef(null),
    {
      activeCommand: ti,
      activeCommandSection: tr
    } = (0, E.cj)([O.Z], () => {
      var e, t;
      return {
        activeCommand: (null === (e = ey.commands) || void 0 === e ? void 0 : e.enabled) ? O.Z.getActiveCommand(eP.id) : null,
        activeCommandSection: (null === (t = ey.commands) || void 0 === t ? void 0 : t.enabled) ? O.Z.getActiveCommandSection(eP.id) : null
      }
    }),
    {
      isLurking: ts,
      isPendingMember: to,
      disabled: ta,
      canAttachFiles: tl,
      canCreateThreads: tu,
      canEveryoneSendMessages: t_
    } = function(e, t, n, i) {
      let r = e.getGuildId(),
        s = (0, E.e7)([P.Z], () => null != r && P.Z.isLurking(r), [r]),
        o = (0, E.e7)([k.ZP, Y.default], () => {
          var e, t;
          let n = Y.default.getCurrentUser();
          return null !== (t = null != r && null != n ? null === (e = k.ZP.getMember(r, n.id)) || void 0 === e ? void 0 : e.isPending : null) && void 0 !== t && t
        }),
        a = (0, E.cj)([V.Z], () => {
          var r, s;
          let a = e.isPrivate(),
            l = V.Z.computePermissions(e),
            u = d.e$(l, es.Plq.CREATE_PUBLIC_THREADS) || d.e$(l, es.Plq.CREATE_PRIVATE_THREADS),
            _ = (!(null === (r = t.permissions) || void 0 === r ? void 0 : r.requireCreateTherads) || u) && (!(null === (s = t.permissions) || void 0 === s ? void 0 : s.requireSendMessages) || d.e$(l, es.Plq.SEND_MESSAGES)),
            c = _ && d.e$(l, es.Plq.ATTACH_FILES),
            E = null != n,
            I = (0, x.xl)(e);
          return {
            disabled: i || o || !a && !_ || I,
            canAttachFiles: !0 === t.attachments && (a || o || c || E),
            canCreateThreads: u,
            canEveryoneSendMessages: W.Uu(es.Plq.SEND_MESSAGES, e)
          }
        }, [e, t.permissions.requireCreateTherads, t.permissions.requireSendMessages, t.attachments, n, i, o]);
      return {
        isLurking: s,
        isPendingMember: o,
        ...a
      }
    }(eP, ey, ti, eL),
    tc = ey.toolbarType === q.O.STATIC,
    td = !B.dN.useSetting() && !(0, K.isAndroidWeb)() && null != window.ResizeObserver,
    tE = !td || !(null === (s = ey.commands) || void 0 === s ? void 0 : s.enabled) || !eU || em !== eo.GI,
    tI = (0, y.Z)(),
    {
      isSubmitButtonEnabled: tT,
      fontSize: th
    } = (0, E.cj)([h.Z], () => ({
      fontSize: h.Z.fontSize,
      isSubmitButtonEnabled: h.Z.isSubmitButtonEnabled
    })),
    tf = (0, E.e7)([H.Z], () => H.Z.isEnabled());
  ! function(e, t) {
    let n = r.useCallback(() => {
        if (!t)(0, v.RO)(ea.X1.EMOJI, e)
      }, [t, e]),
      i = r.useCallback(() => {
        var n;
        if (!t && !!(null === (n = e.gifs) || void 0 === n ? void 0 : n.allowSending))(0, v.RO)(ea.X1.GIF, e)
      }, [t, e]),
      s = r.useCallback(() => {
        var n;
        if (!t && !!(null === (n = e.stickers) || void 0 === n ? void 0 : n.allowSending))(0, v.RO)(ea.X1.STICKER, e)
      }, [t, e]);
    (0, j.yp)({
      event: es.CkL.TOGGLE_EMOJI_POPOUT,
      handler: n
    }), (0, j.yp)({
      event: es.CkL.TOGGLE_GIF_PICKER,
      handler: i
    }), (0, j.yp)({
      event: es.CkL.TOGGLE_STICKER_PICKER,
      handler: s
    })
  }(ey, ta);
  let {
    eventEmitter: tS,
    handleEditorSelectionChanged: tA
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
  }(e9, em, eO), {
    submitting: tN,
    submit: tm,
    handleSubmit: tO
  } = function(e, t, s, o) {
    let [a, l] = r.useState(!1), u = r.useCallback((r, _, c, d, E) => {
      var h, f, S;
      if (a) return;
      l(!0);
      let A = null !== (f = null === (h = b.Z.getStickerPreview(o, t.drafts.type)) || void 0 === h ? void 0 : h.map(e => e.id)) && void 0 !== f ? f : [],
        N = null !== (S = F.Z.getUploads(o, t.drafts.type)) && void 0 !== S ? S : [];
      if (null == _ && !d && !E && (0, M.CB)(N, o)) {
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
          if (o !== Z.Z.getChannelId()) T.Z.saveDraft(o, "", t.drafts.type);
          else d && s.current.clearValue()
        }
        d && (l(!1), (0, v._Q)(), _ && s.current.focus())
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
  }(eF, ey, e9, eP.id), {
    autocompleteRef: tR,
    handleMaybeShowAutocomplete: tp,
    handleHideAutocomplete: tg
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
  let tC = (eh = tm, ef = ey, eS = e9, r.useCallback(e => {
    var t, n;
    ef === q.I.CREATE_FORUM_POST ? null === (n = eS.current) || void 0 === n || n.insertGIF(e) : eh(e.url, void 0, void 0, !0), (0, v._Q)(), null === (t = eS.current) || void 0 === t || t.focus()
  }, [eS, eh, ef]));
  let tv = (eA = e9, r.useCallback(function(e, t) {
      let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = eA.current;
      null != e && null != i && i.insertEmoji(e, t, n), t && (0, v._Q)()
    }, [eA])),
    tL = function(e) {
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
        !n && ((0, w.Hc)(r, i, s, o.drafts.type) ? ((0, J._H)({
          sticker: e,
          stickerSelectLocation: r,
          isReplacement: null != b.Z.getStickerPreview(s, o.drafts.type),
          analyticsLocations: l
        }), (0, G.eu)(s, e, o.drafts.type)) : (a({
          value: "",
          uploads: void 0,
          stickers: [e.id]
        }), null === (_ = t.current) || void 0 === _ || _.clearValue()), (0, v._Q)(), null === (u = t.current) || void 0 === u || u.focus())
      }, [n, i, s, o.drafts.type, t, l, a])
    }({
      editorRef: e9,
      disabled: ta,
      textValue: em,
      channelId: eP.id,
      chatInputType: ey,
      submit: eF
    });
  let tD = (eN = e9, r.useCallback(e => {
      let t = eN.current;
      null != e && null != t && t.insertSound(e), (0, v._Q)()
    }, [eN])),
    tM = r.useCallback(() => {
      var e;
      return null == tt ? void 0 : null === (e = tt.current) || void 0 === e ? void 0 : e.hide()
    }, []),
    {
      editorHeight: tP,
      handleResize: ty
    } = function(e) {
      let [t, n] = r.useState(0);
      return {
        editorHeight: t,
        handleResize: r.useCallback(t => {
          n(null != t ? t : 0), null == e || e(t)
        }, [e])
      }
    }(ek),
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
    }(tR, e8, tE),
    {
      expressionPickerView: tw,
      shouldHideExpressionPicker: tx,
      handleAutocompleteVisibilityChange: tB,
      handleOuterClick: tk
    } = function(e, t, n) {
      let [i, s] = (0, v.Iu)(e => [e.activeView, e.activeViewType], _.Z);
      r.useEffect(() => () => {
        (0, v._Q)(e)
      }, [e]);
      let o = r.useCallback(e => {
          t.emit("autocomplete-visibility-change", e), e && (0, v._Q)()
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
    }(ey, tS, e9),
    tV = A.T.useExperiment({
      location: "chat_input"
    }, {
      autoTrackExposure: !0
    }).enabled,
    tZ = (0, E.e7)([N.Z], () => N.Z.shouldShowPopup(), []);
  (0, z.S)(tS, eP.guild_id, eP.id);
  let tH = null != ex,
    tF = ta && !((ts || to) && t_) || tN && (null === (l = ey.submit) || void 0 === l ? void 0 : l.useDisabledStylesOnSubmit),
    tY = null,
    tj = null;
  null != ti ? tY = null == ew ? void 0 : ew(ti, tr, el.attachButton) : (!ta || tu) && (tY = null == eb ? void 0 : eb(tH, el.attachButton), tV && (tj = null == eG ? void 0 : eG({
    ref: tn
  })));
  let tW = td && null != eO && !ta && ey.showCharacterCount && null == ti,
    tK = td && !__OVERLAY__ && null != eO && null == ti && ey.toolbarType !== q.O.NONE,
    tz = function(e, t, n, i) {
      var r, s;
      let o = B.up.useSetting(),
        a = (0, E.e7)([b.Z], () => b.Z.getStickerPreview(e.id, t.drafts.type)),
        l = null != a && a.length > 0;
      return o && (null === (r = t.stickers) || void 0 === r ? void 0 : r.autoSuggest) && !l && (null === (s = i.current) || void 0 === s ? void 0 : s.isVisible()) !== !0 && !__OVERLAY__ && null != n
    }(eP, ey, eO, tR),
    tq = (0, p.e)(eP),
    tX = null != ti || null != ex || tq,
    tQ = !!(null === (eu = ey.emojis) || void 0 === eu ? void 0 : eu.button) && tP <= 44;
  return (0, i.jsx)(C.f6, {
    value: tS,
    children: (0, i.jsx)(S.Gt, {
      value: e5,
      children: (0, i.jsxs)("div", {
        className: el.channelTextAreaContainer,
        children: [tK && tc ? (0, i.jsx)(er.Z, {
          editorRef: e9,
          options: ey.markdown,
          channel: eP
        }) : tK ? (0, i.jsx)(ei.Z, {
          ref: tt,
          editorRef: e9,
          containerRef: te,
          options: ey.markdown
        }) : null, (0, i.jsxs)("div", {
          ref: e6,
          className: o()(eR, {
            [el.channelTextArea]: !0,
            [el.channelTextAreaDisabled]: tF,
            [el.highlighted]: ej,
            [el.textAreaMobileThemed]: c.tq
          }),
          onMouseDown: tk,
          children: [(0, i.jsx)($.Z, {
            type: ey,
            channel: eP,
            activeCommand: ti,
            pendingReply: ex
          }), (0, i.jsxs)("div", {
            ref: te,
            onScroll: tM,
            className: o()(ep, {
              [el.scrollableContainer]: !0,
              [el.themedBackground]: !e3,
              [el.hasConnectedBar]: tX
            }),
            children: [(0, i.jsx)(Q.Z, {
              channelId: eP.id,
              chatInputType: ey
            }), ey.hideAttachmentArea ? null : (0, i.jsx)(et.Z, {
              channelId: eP.id,
              type: ey,
              canAttachFiles: tl
            }), (0, i.jsxs)("div", {
              className: o()(el.inner, {
                [el.innerDisabled]: tF,
                [el.sansAttachButton]: ey !== q.I.EDIT && (null != tY || tF && null == tY || ts),
                [el.sansAttachButtonCreateThread]: ey === q.I.THREAD_CREATION,
                [el.sansAttachButtonCreatePost]: ey === q.I.CREATE_FORUM_POST
              }),
              children: [tY, (0, i.jsx)(I.FocusRing, {
                ringTarget: e6,
                ringClassName: el.focusRing,
                children: (0, i.jsx)(X.Z, {
                  ref: e9,
                  id: eC,
                  focused: eU,
                  useSlate: td,
                  textValue: em,
                  richValue: eO,
                  disabled: ta,
                  placeholder: eD,
                  required: ev,
                  accessibilityLabel: eM,
                  isPreviewing: (ts || to) && t_,
                  channel: eP,
                  type: ey,
                  canPasteFiles: tl,
                  uploadPromptCharacterCount: es.en1,
                  maxCharacterCount: null != ez ? ez : tI,
                  allowNewLines: eX,
                  "aria-describedby": eJ,
                  onChange: eB,
                  onResize: ty,
                  onBlur: eV,
                  onFocus: eZ,
                  onKeyDown: eH,
                  onSubmit: tm,
                  onTab: tU,
                  onEnter: tb,
                  onMoveSelection: tG,
                  onSelectionChanged: tA,
                  onMaybeShowAutocomplete: tp,
                  onHideAutocomplete: tg,
                  promptToUpload: eY,
                  fontSize: th,
                  spellcheckEnabled: tf,
                  canOnlyUseTextCommands: tH,
                  className: o()({
                    [el.textAreaThreadCreation]: ey === q.I.THREAD_CREATION,
                    [el.profileBioInput]: ey === q.I.PROFILE_BIO_INPUT
                  }, eg),
                  "aria-labelledby": e$
                })
              }), (0, i.jsx)(ee.Z, {
                type: ey,
                disabled: ta,
                channel: eP,
                handleSubmit: tO,
                isEmpty: 0 === em.trim().length
              })]
            })]
          }), tE ? null : (0, i.jsx)(R.Z, {
            ref: e8,
            channel: eP,
            canOnlyUseTextCommands: tH
          }), (0, i.jsx)(g.Z, {
            ref: tR,
            channel: eP,
            canMentionRoles: eW,
            canMentionChannels: eK,
            useNewSlashCommands: td,
            canOnlyUseTextCommands: tH,
            canSendStickers: null === (e_ = ey.stickers) || void 0 === e_ ? void 0 : e_.allowSending,
            textValue: em,
            focused: eU,
            expressionPickerView: tw,
            type: ey,
            targetRef: e6,
            editorRef: e9,
            onSendMessage: tm,
            onSendSticker: tL,
            onVisibilityChange: tB,
            editorHeight: tP,
            setValue: (e, t) => null == eB ? void 0 : eB(null, e, t),
            position: e1
          }), (0, i.jsx)(U.Z, {
            textValue: em,
            editorHeight: tP
          }), tW ? (0, i.jsx)(en.Z, {
            type: ey,
            textValue: em,
            className: o()(eQ, {
              [el.indentCharacterCount]: tQ
            }),
            maxCharacterCount: ez,
            showRemainingCharsAfterCount: eq
          }) : null, tz ? (0, i.jsx)(D.Z, {
            editorRef: e9,
            channel: eP,
            isEditorFocused: eU,
            onSelectSticker: tL,
            submitButtonVisible: (null === (ec = ey.submit) || void 0 === ec ? void 0 : ec.button) && (null !== (eI = null === (ed = ey.submit) || void 0 === ed ? void 0 : ed.ignorePreference) && void 0 !== eI ? eI : tT),
            stickerIconVisible: null !== (eT = null === (eE = ey.stickers) || void 0 === eE ? void 0 : eE.button) && void 0 !== eT && eT
          }) : null, e2]
        }), tj, tx ? null : (0, i.jsx)(L.Z, {
          positionTargetRef: e6,
          type: ey,
          onSelectGIF: tC,
          onSelectEmoji: tv,
          onSelectSticker: tL,
          onSelectSound: tD,
          channel: eP,
          closeOnModalOuterClick: e4,
          parentModalKey: e7,
          position: "top",
          align: "right",
          positionLayerClassName: el.expressionPickerPositionLayer
        }), tZ ? (0, i.jsx)(m.Z, {
          positionTargetRef: tn,
          channel: eP,
          closeOnModalOuterClick: e4,
          parentModalKey: e7
        }) : null]
      })
    })
  })
}))