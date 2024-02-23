"use strict";
a.r(t), a.d(t, {
  default: function() {
    return E
  }
}), a("222007"), a("511434"), a("313619"), a("654714"), a("287168"), a("956660");
var l = a("884691"),
  n = a("418009"),
  s = a("162426"),
  r = a("314743"),
  i = a("172402"),
  o = a("914271"),
  u = a("847511"),
  c = a("562228"),
  d = a("186859");

function E(e, t) {
  let a = e.id,
    E = l.useRef();
  null == E.current && (E.current = [(0, c.generateEmptyPollAnswer)(), (0, c.generateEmptyPollAnswer)()]);
  let [_, m] = l.useState(E.current), [L, f] = l.useState(""), [T, p] = l.useState(n.PollLayoutTypes.DEFAULT), [C, P] = l.useState(!1), [R, x] = l.useState(d.PollDurations.ONE_DAY), O = _.filter(e => (0, c.isAnswerFilled)(e, T)), h = _.filter(e => (0, c.isIncompleteAnswer)(e, T)), N = L.length > 0 && O.length >= d.MIN_NUMBER_OF_ANSWERS_PER_POLL && 0 === h.length, [I, {
    error: g,
    loading: S
  }] = (0, s.default)(u.default.createPoll), M = _.length < d.MAX_NUMBER_OF_ANSWERS_PER_POLL, v = l.useCallback(() => {
    M && m(e => [...e, (0, c.generateEmptyPollAnswer)()])
  }, [M]), j = l.useCallback((e, t) => {
    m(a => {
      let l = [...a];
      return l[t] = {
        ...l[t],
        text: e
      }, l
    })
  }, []), D = l.useCallback((e, t) => {
    m(a => {
      let l = [...a];
      return l[t] = {
        ...l[t],
        image: e
      }, l
    })
  }, []), y = l.useCallback((e, t, a) => {
    var l;
    let n = _[t],
      s = null === (l = n.image) || void 0 === l ? void 0 : l.mediaAttachmentState;
    null != s && s.mediaURL !== a && o.removePollUploadAttachment(e, n.localCreationAnswerId, (0, r.getFileNameFromGifUrl)(n.localCreationAnswerId, s.mediaURL))
  }, [_]), k = l.useCallback(async (e, t, a) => {
    let l = _[t].localCreationAnswerId;
    y(e, t), D(A(a, i.PollMediaUploadAttachmentStatus.PREPARING), t);
    let n = await o.handlePollGifAttachmentAdd(e, l, a);
    if (null == n) {
      D(A(a, i.PollMediaUploadAttachmentStatus.ERROR), t);
      return
    }
    D(A(a, i.PollMediaUploadAttachmentStatus.READY_TO_UPLOAD), t)
  }, [_, D, y]), b = l.useCallback((e, t, a) => {
    let l = _[t].localCreationAnswerId,
      n = URL.createObjectURL(a);
    y(e, t), D(A(n, i.PollMediaUploadAttachmentStatus.PREPARING), t), o.handlePollMediaAttachmentAdd(e, l, a), D(A(n, i.PollMediaUploadAttachmentStatus.READY_TO_UPLOAD), t)
  }, [_, D, y]), w = l.useCallback((e, t) => {
    y(a, t), D({
      emoji: e,
      stickerId: void 0,
      mediaAttachmentState: void 0
    }, t)
  }, [a, D, y]), U = l.useCallback(e => {
    y(a, e), m(t => {
      let a = [...t];
      return a.splice(e, 1), a
    })
  }, [a, y]);
  l.useEffect(() => () => {
    o.removeAllPollUploadAttachments(a)
  }, [a]);
  let B = l.useCallback(async () => {
    await I({
      channel: e,
      question: L,
      answers: O,
      allowMultiSelect: C,
      duration: R,
      layout: T,
      onClose: t
    })
  }, [L, O, C, R, I, e, T, t]);
  return {
    answers: _,
    question: L,
    setQuestion: f,
    selectedLayoutType: T,
    setSelectedLayoutType: p,
    allowMultiSelect: C,
    setAllowMultiSelect: P,
    duration: R,
    setDuration: x,
    canPost: N,
    canAddMoreAnswers: M,
    handleAddAnswer: v,
    handleAnswerTextChange: j,
    handleGifSelect: k,
    handleEmojiSelect: w,
    handleCustomUpload: b,
    handleRemoveAnswer: U,
    createPoll: B,
    submitting: S,
    createPollError: g
  }
}

function A(e, t) {
  return {
    mediaAttachmentState: {
      status: t,
      mediaURL: e
    },
    emoji: void 0,
    stickerId: void 0
  }
}