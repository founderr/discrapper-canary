t.d(s, {
  X8: function() {
    return T
  },
  tI: function() {
    return _
  },
  uj: function() {
    return r
  }
}), t(653041);
var n = t(512722),
  i = t.n(n),
  a = t(981631),
  l = t(689938);
let r = () => {
    let e = Object.keys(a.gkr);
    return e[Math.floor(Math.random() * e.length)]
  },
  o = () => {
    let e = [];
    for (; e.length < 5;) {
      let s = Math.floor(15 * Math.random());
      !e.includes(s) && e.push(s)
    }
    return e
  },
  c = () => [l.Z.Messages.HYPESQUAD_QUESTION_0_PROMPT, l.Z.Messages.HYPESQUAD_QUESTION_1_PROMPT, l.Z.Messages.HYPESQUAD_QUESTION_2_PROMPT, l.Z.Messages.HYPESQUAD_QUESTION_3_PROMPT, l.Z.Messages.HYPESQUAD_QUESTION_4_PROMPT, l.Z.Messages.HYPESQUAD_QUESTION_5_PROMPT, l.Z.Messages.HYPESQUAD_QUESTION_6_PROMPT, l.Z.Messages.HYPESQUAD_QUESTION_7_PROMPT, l.Z.Messages.HYPESQUAD_QUESTION_8_PROMPT, l.Z.Messages.HYPESQUAD_QUESTION_9_PROMPT, l.Z.Messages.HYPESQUAD_QUESTION_10_PROMPT, l.Z.Messages.HYPESQUAD_QUESTION_11_PROMPT, l.Z.Messages.HYPESQUAD_QUESTION_12_PROMPT, l.Z.Messages.HYPESQUAD_QUESTION_13_PROMPT, l.Z.Messages.HYPESQUAD_QUESTION_14_PROMPT],
  E = () => [
    [l.Z.Messages.HYPESQUAD_QUESTION_0_RESPONSE_A, l.Z.Messages.HYPESQUAD_QUESTION_0_RESPONSE_B, l.Z.Messages.HYPESQUAD_QUESTION_0_RESPONSE_C, l.Z.Messages.HYPESQUAD_QUESTION_0_RESPONSE_D],
    [l.Z.Messages.HYPESQUAD_QUESTION_1_RESPONSE_A, l.Z.Messages.HYPESQUAD_QUESTION_1_RESPONSE_B, l.Z.Messages.HYPESQUAD_QUESTION_1_RESPONSE_C, l.Z.Messages.HYPESQUAD_QUESTION_1_RESPONSE_D],
    [l.Z.Messages.HYPESQUAD_QUESTION_2_RESPONSE_A, l.Z.Messages.HYPESQUAD_QUESTION_2_RESPONSE_B, l.Z.Messages.HYPESQUAD_QUESTION_2_RESPONSE_C, l.Z.Messages.HYPESQUAD_QUESTION_2_RESPONSE_D],
    [l.Z.Messages.HYPESQUAD_QUESTION_3_RESPONSE_A, l.Z.Messages.HYPESQUAD_QUESTION_3_RESPONSE_B, l.Z.Messages.HYPESQUAD_QUESTION_3_RESPONSE_C, l.Z.Messages.HYPESQUAD_QUESTION_3_RESPONSE_D],
    [l.Z.Messages.HYPESQUAD_QUESTION_4_RESPONSE_A, l.Z.Messages.HYPESQUAD_QUESTION_4_RESPONSE_B, l.Z.Messages.HYPESQUAD_QUESTION_4_RESPONSE_C, l.Z.Messages.HYPESQUAD_QUESTION_4_RESPONSE_D],
    [l.Z.Messages.HYPESQUAD_QUESTION_5_RESPONSE_A, l.Z.Messages.HYPESQUAD_QUESTION_5_RESPONSE_B, l.Z.Messages.HYPESQUAD_QUESTION_5_RESPONSE_C, l.Z.Messages.HYPESQUAD_QUESTION_5_RESPONSE_D],
    [l.Z.Messages.HYPESQUAD_QUESTION_6_RESPONSE_A, l.Z.Messages.HYPESQUAD_QUESTION_6_RESPONSE_B, l.Z.Messages.HYPESQUAD_QUESTION_6_RESPONSE_C, l.Z.Messages.HYPESQUAD_QUESTION_6_RESPONSE_D],
    [l.Z.Messages.HYPESQUAD_QUESTION_7_RESPONSE_A, l.Z.Messages.HYPESQUAD_QUESTION_7_RESPONSE_B, l.Z.Messages.HYPESQUAD_QUESTION_7_RESPONSE_C, l.Z.Messages.HYPESQUAD_QUESTION_7_RESPONSE_D],
    [l.Z.Messages.HYPESQUAD_QUESTION_8_RESPONSE_A, l.Z.Messages.HYPESQUAD_QUESTION_8_RESPONSE_B, l.Z.Messages.HYPESQUAD_QUESTION_8_RESPONSE_C, l.Z.Messages.HYPESQUAD_QUESTION_8_RESPONSE_D],
    [l.Z.Messages.HYPESQUAD_QUESTION_9_RESPONSE_A, l.Z.Messages.HYPESQUAD_QUESTION_9_RESPONSE_B, l.Z.Messages.HYPESQUAD_QUESTION_9_RESPONSE_C, l.Z.Messages.HYPESQUAD_QUESTION_9_RESPONSE_D],
    [l.Z.Messages.HYPESQUAD_QUESTION_10_RESPONSE_A, l.Z.Messages.HYPESQUAD_QUESTION_10_RESPONSE_B, l.Z.Messages.HYPESQUAD_QUESTION_10_RESPONSE_C, l.Z.Messages.HYPESQUAD_QUESTION_10_RESPONSE_D],
    [l.Z.Messages.HYPESQUAD_QUESTION_11_RESPONSE_A, l.Z.Messages.HYPESQUAD_QUESTION_11_RESPONSE_B, l.Z.Messages.HYPESQUAD_QUESTION_11_RESPONSE_C, l.Z.Messages.HYPESQUAD_QUESTION_11_RESPONSE_D],
    [l.Z.Messages.HYPESQUAD_QUESTION_12_RESPONSE_A, l.Z.Messages.HYPESQUAD_QUESTION_12_RESPONSE_B, l.Z.Messages.HYPESQUAD_QUESTION_12_RESPONSE_C, l.Z.Messages.HYPESQUAD_QUESTION_12_RESPONSE_D],
    [l.Z.Messages.HYPESQUAD_QUESTION_13_RESPONSE_A, l.Z.Messages.HYPESQUAD_QUESTION_13_RESPONSE_B, l.Z.Messages.HYPESQUAD_QUESTION_13_RESPONSE_C, l.Z.Messages.HYPESQUAD_QUESTION_13_RESPONSE_D],
    [l.Z.Messages.HYPESQUAD_QUESTION_14_RESPONSE_A, l.Z.Messages.HYPESQUAD_QUESTION_14_RESPONSE_B, l.Z.Messages.HYPESQUAD_QUESTION_14_RESPONSE_C, l.Z.Messages.HYPESQUAD_QUESTION_14_RESPONSE_D]
  ],
  d = () => [a.gkr.HOUSE_1, a.gkr.HOUSE_2, a.gkr.HOUSE_3, a.jsM],
  _ = () => {
    let e = d(),
      s = c(),
      t = E();
    return o().map(n => {
      let a = s[n],
        l = t[n];
      return i()(null != a && null != l, "Invalid HypeSquad quiz question index"), {
        prompt: a,
        options: l.map((s, t) => {
          let n = e[t];
          return i()(null !== n, "Invalid HypeSquad quiz question option index"), {
            copy: s,
            house: n
          }
        })
      }
    })
  },
  T = e => ({
    [a.gkr.HOUSE_1]: l.Z.Messages.HYPESQUAD_HOUSE_1,
    [a.gkr.HOUSE_2]: l.Z.Messages.HYPESQUAD_HOUSE_2,
    [a.gkr.HOUSE_3]: l.Z.Messages.HYPESQUAD_HOUSE_3
  })[e]