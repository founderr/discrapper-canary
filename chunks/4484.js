"use strict";
n(47120), n(653041);
var i = n(735250),
  r = n(470079),
  s = n(120356),
  o = n.n(s),
  a = n(911969),
  l = n(367907),
  u = n(998698),
  _ = n(117530),
  c = n(459273),
  d = n(585483),
  E = n(91313),
  I = n(53529),
  T = n(288897),
  h = n(925994),
  f = n(436660),
  S = n(887490),
  A = n(194625),
  N = n(77188),
  m = n(230554),
  O = n(780748),
  p = n(464581),
  R = n(732659),
  g = n(86724),
  C = n(847302),
  v = n(657198),
  L = n(321127),
  D = n(981631),
  M = n(808329);
t.Z = r.forwardRef(function(e, t) {
  let {
    value: n,
    type: s,
    channel: P,
    className: y,
    id: U,
    disabled: b,
    submitting: G,
    placeholder: w,
    required: x,
    textAreaPaddingClassName: B,
    onChange: k,
    onPaste: V,
    onResize: Z,
    onFocus: H,
    onBlur: F,
    onKeyDown: Y,
    onKeyUp: j,
    onTab: W,
    onEnter: K,
    onSubmit: z,
    maybeShowAutocomplete: q,
    hideAutocomplete: X,
    moveSelection: Q,
    spellcheckEnabled: J,
    canUseCommands: $,
    canOnlyUseTextCommands: ee,
    disableAutoFocus: et,
    disableEnterToSubmit: en,
    allowNewLines: ei,
    "aria-owns": er,
    "aria-expanded": es,
    "aria-haspopup": eo,
    "aria-activedescendant": ea,
    "aria-controls": el,
    "aria-invalid": eu,
    "aria-describedby": e_,
    "aria-labelledby": ec,
    "aria-autocomplete": ed
  } = e, eE = r.useRef(null), eI = r.useRef(null), eT = r.useRef(!0), eh = r.useRef(!0), ef = b || G, eS = r.useCallback((e, t, n) => {
    var i;
    let {
      value: r,
      selection: s
    } = n, o = S.bN.richValue(e), a = e.selection, l = !1;
    if (void 0 !== r && r !== o) {
      if (e.children = r, "parent" === t && !e.previewMarkdown) {
        try {
          e.previewMarkdown = !0, (0, C.KH)(e, P.guild_id, P.id)
        } finally {
          e.previewMarkdown = !1
        }(0, C.KH)(e, P.guild_id, P.id), s = void 0
      }
      "undo" !== t && void 0 !== r && r !== o && I.T.insertEntry(e, "other", !1, o, a), l = !0
    }
    if (null != s && !S.Ew.isValid(e, s) && (s = void 0), (l || !S.Ew.isValid(e, a)) && void 0 === s) {
      let t = S.bN.end(e, []);
      s = {
        anchor: t,
        focus: t
      }
    }
    if (null != s && !S.Ew.equals(s, a)) {
      e.selection = s;
      let t = I.T.currentEntry(e);
      null != t && (t.selection = s), l = !0
    }
    let _ = E.cr(e);
    if (null != _ && _[0].command.id !== (null === (i = u.Z.getActiveCommand(P.id)) || void 0 === i ? void 0 : i.id) && I.T.withMergedEntry(e, () => {
        (0, g.L)(e, P.id, null, !0)
      }), l) {
      if (!et && S.bN.focus(e), "parent" === t) try {
        eh.current = !1, e.onChange()
      } finally {
        eh.current = !0
      } else e.onChange()
    }
  }, [P.id, P.guild_id, et]), eA = r.useCallback(() => {
    eT.current = !1
  }, []), eN = r.useCallback(() => {
    eT.current = !0
  }, []), em = (0, N.Z)({
    channel: P,
    chatInputType: s,
    canUseCommands: $,
    canOnlyUseTextCommands: ee,
    onChangeStart: eA,
    onChangeEnd: eN,
    updateState: eS
  }), eO = r.useCallback((e, t) => {
    let n = E.tM(em, e, P.id),
      i = E.lk(e, P.guild_id, P.id, n, t);
    return {
      values: n,
      results: i
    }
  }, [P.guild_id, P.id, em]), ep = r.useCallback(() => {
    let e;
    let t = $ ? u.Z.getActiveCommand(P.id) : null;
    if (null != t && null != t.options) {
      let r = eO(t, !1);
      e = r.values;
      let s = E.cu(em).filter(e => !r.results[e].success).map(e => {
        var n;
        return (null !== (n = t.options) && void 0 !== n ? n : []).find(t => t.name === e)
      });
      for (let e of t.options) e.required && !(e.name in r.values) && (f.Q.insertCommandOption(em, e), s.push(e));
      if (s.length > 0) {
        var n, i;
        let e = s[0];
        f.Q.selectCommandOption(em, e.name), d.S.dispatch(D.CkL.SHAKE_APP, {
          duration: 200,
          intensity: 2
        }), (0, l.yw)(D.rMx.APPLICATION_COMMAND_VALIDATION_FAILED, {
          application_id: null == t ? void 0 : t.applicationId,
          command_id: null == t ? void 0 : null === (n = t.rootCommand) || void 0 === n ? void 0 : n.id,
          argument_type: a.jw[null !== (i = null == e ? void 0 : e.type) && void 0 !== i ? i : 3],
          is_required: null == e ? void 0 : e.required
        });
        return
      }
    }
    null == z || z((0, h.sk)(S.bN.richValue(em), {
      mode: "raw",
      ignoreTrailingEmptyNodes: !0
    }), t, e)
  }, [P.id, em, z, eO, $]);
  (0, m.Z)(t, em, P, ep), (0, R.Z)(em, eE, Z);
  let {
    handleKeyDown: eR,
    handleKeyUp: eg
  } = (0, O.Z)({
    editor: em,
    channel: P,
    disableEnterToSubmit: en,
    onKeyDown: Y,
    onKeyUp: j,
    onTab: W,
    onEnter: K,
    allowNewLines: ei,
    submit: ep,
    hideAutocomplete: X,
    moveSelection: Q
  }), {
    handlePaste: eC,
    handleGlobalPaste: ev
  } = (0, p.Z)(em, ef, V), eL = r.useCallback(e => {
    null == q || q()
  }, [q]), eD = r.useCallback(e => {
    e !== eI.current ? eh.current && (null == k || k(null, (0, h.sk)(e, {
      mode: "raw"
    }), e)) : eh.current && q()
  }, [q, k]);
  r.useLayoutEffect(() => {
    eT.current && (eI.current = n, eS(em, "parent", {
      value: n
    }))
  }, [em, n, eS]), r.useEffect(() => {
    let e = () => {
      var e;
      let t = null !== (e = u.Z.getActiveCommand(P.id)) && void 0 !== e ? e : null;
      null !== t && null != t.options && eO(t, !0)
    };
    return _.Z.addChangeListener(e), () => _.Z.removeChangeListener(e)
  }, [P, em, eO]);
  let eM = r.useCallback((e, t) => (0, A.Z)(e, t), []),
    eP = r.useCallback(e => (0, v.Z)(em, e, P.id), [P.id, em]),
    ey = r.useCallback(e => (0, L.Z)(e), []);
  return (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(c.d9, {
      event: D.CkL.GLOBAL_CLIPBOARD_PASTE,
      handler: ev
    }), (0, i.jsx)("div", {
      ref: eE,
      className: o()(y, M.slateContainer),
      children: (0, i.jsx)(T.Z, {
        id: U,
        editor: em,
        channelId: P.id,
        guildId: P.guild_id,
        className: o()(M.slateTextArea, B),
        placeholder: w,
        readOnly: ef,
        spellCheck: J,
        autoFocus: !et,
        canFocus: !b,
        onChange: eD,
        onFocus: H,
        onBlur: F,
        onClick: eL,
        onPaste: eC,
        onKeyDown: eR,
        onKeyUp: eg,
        decorateExtra: eM,
        renderExtraElement: eP,
        renderExtraLeaf: ey,
        "aria-owns": er,
        "aria-haspopup": eo,
        "aria-expanded": es,
        "aria-activedescendant": ea,
        "aria-controls": el,
        "aria-labelledby": ec,
        "aria-describedby": e_,
        "aria-invalid": eu,
        "aria-autocomplete": ed,
        "aria-required": x
      })
    })]
  })
})