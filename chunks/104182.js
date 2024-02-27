"use strict";
a.r(t), a.d(t, {
  default: function() {
    return A
  }
}), a("222007"), a("511434"), a("313619"), a("654714"), a("287168"), a("956660");
var l = a("884691"),
  s = a("418009"),
  n = a("162426"),
  r = a("314743"),
  i = a("172402"),
  o = a("914271"),
  u = a("847511"),
  d = a("562228"),
  c = a("186859");

function A(e, t) {
  let a = e.id,
    A = l.useRef();
  null == A.current && (A.current = [(0, d.generateEmptyPollAnswer)(), (0, d.generateEmptyPollAnswer)()]);
  let [_, m] = l.useState(A.current), [L, f] = l.useState(""), [T, C] = l.useState(s.PollLayoutTypes.DEFAULT), [N, R] = l.useState(!1), [O, h] = l.useState(c.PollDurations.ONE_DAY), P = _.filter(e => (0, d.isAnswerFilled)(e, T)), I = _.filter(e => (0, d.isIncompleteAnswer)(e, T)), x = L.length > 0 && P.length >= c.MIN_NUMBER_OF_ANSWERS_PER_POLL && 0 === I.length, [p, {
    error: g,
    loading: M
  }] = (0, n.default)(u.default.createPoll), j = _.length < c.MAX_NUMBER_OF_ANSWERS_PER_POLL, D = l.useCallback(() => {
    j && m(e => [...e, (0, d.generateEmptyPollAnswer)()])
  }, [j]), S = l.useCallback((e, t) => {
    m(a => {
      let l = [...a];
      return l[t] = {
        ...l[t],
        text: e
      }, l
    })
  }, []), v = l.useCallback((e, t) => {
    m(a => {
      let l = [...a];
      return l[t] = {
        ...l[t],
        image: e
      }, l
    })
  }, []), b = l.useCallback((e, t, a) => {
    var l;
    let s = _[t],
      n = null === (l = s.image) || void 0 === l ? void 0 : l.mediaAttachmentState;
    null != n && n.mediaURL !== a && o.removePollUploadAttachment(e, s.localCreationAnswerId, (0, r.getFileNameFromGifUrl)(s.localCreationAnswerId, n.mediaURL))
  }, [_]), U = l.useCallback(async (e, t, a) => {
    let l = _[t].localCreationAnswerId;
    b(e, t), v(E(a, i.PollMediaUploadAttachmentStatus.PREPARING), t);
    let s = await o.handlePollGifAttachmentAdd(e, l, a);
    if (null == s) {
      v(E(a, i.PollMediaUploadAttachmentStatus.ERROR), t);
      return
    }
    v(E(a, i.PollMediaUploadAttachmentStatus.READY_TO_UPLOAD), t)
  }, [_, v, b]), y = l.useCallback((e, t, a) => {
    let l = _[t].localCreationAnswerId,
      s = URL.createObjectURL(a);
    b(e, t), v(E(s, i.PollMediaUploadAttachmentStatus.PREPARING), t), o.handlePollMediaAttachmentAdd(e, l, a), v(E(s, i.PollMediaUploadAttachmentStatus.READY_TO_UPLOAD), t)
  }, [_, v, b]), w = l.useCallback((e, t) => {
    b(a, t), v({
      emoji: e,
      stickerId: void 0,
      mediaAttachmentState: void 0
    }, t)
  }, [a, v, b]), k = l.useCallback(e => {
    b(a, e), m(t => {
      let a = [...t];
      return a.splice(e, 1), a
    })
  }, [a, b]);
  l.useEffect(() => () => {
    o.removeAllPollUploadAttachments(a)
  }, [a]);
  let B = l.useCallback(async () => {
    await p({
      channel: e,
      question: L,
      answers: P,
      allowMultiSelect: N,
      duration: O,
      layout: T,
      onClose: t
    })
  }, [L, P, N, O, p, e, T, t]);
  return {
    answers: _,
    question: L,
    setQuestion: f,
    selectedLayoutType: T,
    setSelectedLayoutType: C,
    allowMultiSelect: N,
    setAllowMultiSelect: R,
    duration: O,
    setDuration: h,
    canPost: x,
    canAddMoreAnswers: j,
    handleAddAnswer: D,
    handleAnswerTextChange: S,
    handleGifSelect: U,
    handleEmojiSelect: w,
    handleCustomUpload: y,
    handleRemoveAnswer: k,
    createPoll: B,
    submitting: M,
    createPollError: g
  }
}

function E(e, t) {
  return {
    mediaAttachmentState: {
      status: t,
      mediaURL: e
    },
    emoji: void 0,
    stickerId: void 0
  }
}