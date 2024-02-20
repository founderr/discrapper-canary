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
  let [_, f] = l.useState(E.current), [m, L] = l.useState(""), [T, p] = l.useState(n.PollLayoutTypes.DEFAULT), [C, P] = l.useState(!1), [R, O] = l.useState(d.PollDurations.ONE_DAY), x = _.filter(e => (0, c.isAnswerFilled)(e, T)), I = _.filter(e => (0, c.isIncompleteAnswer)(e, T)), h = m.length > 0 && x.length >= d.MIN_NUMBER_OF_ANSWERS_PER_POLL && 0 === I.length, [N, {
    error: g,
    loading: S
  }] = (0, s.default)(u.default.createPoll), M = _.length < d.MAX_NUMBER_OF_ANSWERS_PER_POLL, v = l.useCallback(() => {
    M && f(e => [...e, (0, c.generateEmptyPollAnswer)()])
  }, [M]), D = l.useCallback((e, t) => {
    f(a => {
      let l = [...a];
      return l[t] = {
        ...l[t],
        text: e
      }, l
    })
  }, []), j = l.useCallback((e, t) => {
    f(a => {
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
    y(e, t), j(A(a, i.PollMediaUploadAttachmentStatus.PREPARING), t);
    let n = await o.handlePollGifAttachmentAdd(e, l, a);
    if (null == n) {
      j(A(a, i.PollMediaUploadAttachmentStatus.ERROR), t);
      return
    }
    j(A(a, i.PollMediaUploadAttachmentStatus.READY_TO_UPLOAD), t)
  }, [_, j, y]), b = l.useCallback((e, t, a) => {
    let l = _[t].localCreationAnswerId,
      n = URL.createObjectURL(a);
    y(e, t), j(A(n, i.PollMediaUploadAttachmentStatus.PREPARING), t), o.handlePollMediaAttachmentAdd(e, l, a), j(A(n, i.PollMediaUploadAttachmentStatus.READY_TO_UPLOAD), t)
  }, [_, j, y]), w = l.useCallback((e, t) => {
    y(a, t), j({
      emoji: e,
      stickerId: void 0,
      mediaAttachmentState: void 0
    }, t)
  }, [a, j, y]), U = l.useCallback(e => {
    y(a, e), f(t => {
      let a = [...t];
      return a.splice(e, 1), a
    })
  }, [a, y]);
  l.useEffect(() => () => {
    o.removeAllPollUploadAttachments(a)
  }, [a]);
  let B = l.useCallback(async () => {
    await N({
      channel: e,
      question: m,
      answers: x,
      allowMultiSelect: C,
      duration: R,
      layout: T,
      onClose: t
    })
  }, [m, x, C, R, N, e, T, t]);
  return {
    answers: _,
    question: m,
    setQuestion: L,
    selectedLayoutType: T,
    setSelectedLayoutType: p,
    allowMultiSelect: C,
    setAllowMultiSelect: P,
    duration: R,
    setDuration: O,
    canPost: h,
    canAddMoreAnswers: M,
    handleAddAnswer: v,
    handleAnswerTextChange: D,
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