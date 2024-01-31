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
  let [A, f] = l.useState(E.current), [m, L] = l.useState(""), [p, T] = l.useState(n.PollLayoutTypes.DEFAULT), [C, P] = l.useState(!1), [R, O] = l.useState(d.PollDurations.ONE_DAY), x = A.filter(e => (0, c.isAnswerFilled)(e, p)), h = A.filter(e => (0, c.isIncompleteAnswer)(e, p)), I = m.length > 0 && x.length >= d.MIN_NUMBER_OF_ANSWERS_PER_POLL && 0 === h.length, [N, {
    error: g,
    loading: v
  }] = (0, s.default)(u.default.createPoll), M = A.length < d.MAX_NUMBER_OF_ANSWERS_PER_POLL, S = l.useCallback(() => {
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
    let n = A[t],
      s = null === (l = n.image) || void 0 === l ? void 0 : l.mediaAttachmentState;
    null != s && s.mediaURL !== a && o.removePollUploadAttachment(e, n.localCreationAnswerId, (0, r.getFileNameFromGifUrl)(n.localCreationAnswerId, s.mediaURL))
  }, [A]), b = l.useCallback(async (e, t, a) => {
    let l = A[t].localCreationAnswerId;
    y(e, t), j(_(a, i.PollMediaUploadAttachmentStatus.PREPARING), t);
    let n = await o.handlePollGifAttachmentAdd(e, l, a);
    if (null == n) {
      j(_(a, i.PollMediaUploadAttachmentStatus.ERROR), t);
      return
    }
    j(_(a, i.PollMediaUploadAttachmentStatus.READY_TO_UPLOAD), t)
  }, [A, j, y]), k = l.useCallback((e, t, a) => {
    let l = A[t].localCreationAnswerId,
      n = URL.createObjectURL(a);
    y(e, t), j(_(n, i.PollMediaUploadAttachmentStatus.PREPARING), t), o.handlePollMediaAttachmentAdd(e, l, a), j(_(n, i.PollMediaUploadAttachmentStatus.READY_TO_UPLOAD), t)
  }, [A, j, y]), U = l.useCallback((e, t) => {
    y(a, t), j({
      emoji: e,
      stickerId: void 0,
      mediaAttachmentState: void 0
    }, t)
  }, [a, j, y]), w = l.useCallback(e => {
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
      layout: p,
      onClose: t
    })
  }, [m, x, C, R, N, e, p, t]);
  return {
    answers: A,
    question: m,
    setQuestion: L,
    selectedLayoutType: p,
    setSelectedLayoutType: T,
    allowMultiSelect: C,
    setAllowMultiSelect: P,
    duration: R,
    setDuration: O,
    canPost: I,
    canAddMoreAnswers: M,
    handleAddAnswer: S,
    handleAnswerTextChange: D,
    handleGifSelect: b,
    handleEmojiSelect: U,
    handleCustomUpload: k,
    handleRemoveAnswer: w,
    createPoll: B,
    submitting: v,
    createPollError: g
  }
}

function _(e, t) {
  return {
    mediaAttachmentState: {
      status: t,
      mediaURL: e
    },
    emoji: void 0,
    stickerId: void 0
  }
}