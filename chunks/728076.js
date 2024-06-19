t.d(a, {
  Z: function() {
    return _
  }
}), t(47120), t(315314), t(610138), t(216116), t(78328), t(815648);
var n = t(470079),
  l = t(263568),
  s = t(935369),
  r = t(398805),
  o = t(524100),
  i = t(316758),
  c = t(203143),
  u = t(79390),
  d = t(489887),
  E = t(689938);

function _(e, a, t) {
  let _ = e.id,
    A = n.useRef();
  null == A.current && (A.current = [(0, u.Uu)(), (0, u.Uu)()]);
  let [L, C] = n.useState(A.current), [R, h] = n.useState(""), [f, T] = n.useState(l.C.DEFAULT), [O, N] = n.useState(!1), [x, I] = n.useState(d.lc.ONE_DAY), [g, p] = n.useState({}), [P, j] = n.useState(!1), v = L.filter(e => (0, u.cS)(e, f)), M = L.filter(e => (0, u.uY)(e, f)), D = R.length > 0 && v.length >= d.gY && 0 === M.length, [S, {
    error: b,
    loading: w
  }] = (0, s.Z)(c.Z.createPoll), Z = L.length < d.fw, k = L.length > d.gY, U = n.useCallback(e => {
    p(e => {
      let a = {
        ...e
      };
      return delete a.question, a
    }), h(e)
  }, []), y = n.useCallback(e => {
    let {
      text: a,
      index: t,
      localCreationAnswerId: n
    } = e;
    p(e => {
      let a = {
        ...e
      };
      return delete a["answer-".concat(n)], a
    }), C(e => {
      let n = [...e];
      return n[t] = {
        ...n[t],
        text: a
      }, n
    })
  }, []), B = n.useCallback((e, a) => {
    C(t => {
      let n = [...t];
      return n[a] = {
        ...n[a],
        image: e
      }, n
    })
  }, []), H = n.useCallback((e, a, t) => {
    var n;
    let l = L[a],
      s = null === (n = l.image) || void 0 === n ? void 0 : n.mediaAttachmentState;
    null != s && s.mediaURL !== t && i.P(e, l.localCreationAnswerId, (0, r.Yk)(l.localCreationAnswerId, s.mediaURL))
  }, [L]), Y = n.useCallback(async (e, a, t) => {
    let n = L[a].localCreationAnswerId;
    if (H(e, a), B(m(t, o._.PREPARING), a), null == await i.IV(e, n, t)) {
      B(m(t, o._.ERROR), a);
      return
    }
    B(m(t, o._.READY_TO_UPLOAD), a)
  }, [L, B, H]), F = n.useCallback((e, a, t) => {
    let n = L[a].localCreationAnswerId,
      l = URL.createObjectURL(t);
    H(e, a), B(m(l, o._.PREPARING), a), i.fH(e, n, t), B(m(l, o._.READY_TO_UPLOAD), a)
  }, [L, B, H]), G = n.useCallback((e, a) => {
    H(_, a), B({
      emoji: e,
      stickerId: void 0,
      mediaAttachmentState: void 0
    }, a)
  }, [_, B, H]), W = n.useCallback(e => {
    C(a => {
      let t = [...a];
      return t[e] = {
        ...t[e],
        image: void 0
      }, t
    })
  }, []), z = n.useCallback(() => {
    if (!!Z) C(e => [...e, (0, u.Uu)()])
  }, [Z]), K = n.useCallback(e => {
    if (!k) return;
    let a = L.length;
    H(_, e), C(a => {
      let t = [...a];
      return t.splice(e, 1), t
    }), null == t || t({
      indexToRemove: e,
      numberOfAnswers: a
    })
  }, [L.length, k, _, t, H]);
  n.useEffect(() => () => {
    i.xt(_)
  }, [_]);
  let V = n.useCallback(() => {
      let e = !0,
        a = {};
      return 0 === R.trim().length && (e = !1, a.question = E.Z.Messages.CREATE_POLL_QUESTION_REQUIRED), L.filter(e => (0, u.cS)(e, f)).length < d.gY && (e = !1, a["answer-".concat(L[0].localCreationAnswerId)] = E.Z.Messages.CREATE_POLL_MINIMUM_ANSWERS_REQUIRED), L.forEach(t => {
        (0, u.uY)(t, f) && (e = !1, a["answer-".concat(t.localCreationAnswerId)] = E.Z.Messages.CREATE_POLL_ANSWER_MUST_CONTAIN_TEXT)
      }), p(a), j(!e), e
    }, [L, R, f]),
    q = n.useCallback(async () => {
      await S({
        channel: e,
        question: R,
        answers: v,
        allowMultiSelect: O,
        duration: x,
        layout: f,
        onClose: a
      })
    }, [R, v, O, x, S, e, f, a]),
    J = n.useCallback(() => {
      V() && q()
    }, [q, V]);
  return {
    answers: L,
    question: R,
    setQuestion: h,
    selectedLayoutType: f,
    setSelectedLayoutType: T,
    allowMultiSelect: O,
    setAllowMultiSelect: N,
    duration: x,
    setDuration: I,
    canPost: D,
    canAddMoreAnswers: Z,
    canRemoveMoreAnswers: k,
    handleQuestionChange: U,
    handleAnswerTextChange: y,
    handleGifSelect: Y,
    handleEmojiSelect: G,
    handleCustomUpload: F,
    handleAddAnswer: z,
    handleRemoveAnswer: K,
    handleRemoveAnswerImage: W,
    fieldErrors: g,
    createPoll: q,
    handleSubmitPoll: J,
    submitting: w,
    createPollError: b,
    shouldFocusOnInvalidField: P,
    setShouldFocusOnInvalidField: j
  }
}

function m(e, a) {
  return {
    mediaAttachmentState: {
      status: a,
      mediaURL: e
    },
    emoji: void 0,
    stickerId: void 0
  }
}