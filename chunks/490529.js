"use strict";
s.r(t), s.d(t, {
  getHouseNameFromHouseID: function() {
    return E
  },
  getQuestions: function() {
    return S
  },
  getRandomHouse: function() {
    return r
  }
}), s("653041");
var a = s("512722"),
  n = s.n(a),
  i = s("981631"),
  l = s("689938");
let r = () => {
    let e = Object.keys(i.HypeSquadHouses);
    return e[Math.floor(Math.random() * e.length)]
  },
  o = () => {
    let e = [];
    for (; e.length < 5;) {
      let t = Math.floor(15 * Math.random());
      !e.includes(t) && e.push(t)
    }
    return e
  },
  d = () => [l.default.Messages.HYPESQUAD_QUESTION_0_PROMPT, l.default.Messages.HYPESQUAD_QUESTION_1_PROMPT, l.default.Messages.HYPESQUAD_QUESTION_2_PROMPT, l.default.Messages.HYPESQUAD_QUESTION_3_PROMPT, l.default.Messages.HYPESQUAD_QUESTION_4_PROMPT, l.default.Messages.HYPESQUAD_QUESTION_5_PROMPT, l.default.Messages.HYPESQUAD_QUESTION_6_PROMPT, l.default.Messages.HYPESQUAD_QUESTION_7_PROMPT, l.default.Messages.HYPESQUAD_QUESTION_8_PROMPT, l.default.Messages.HYPESQUAD_QUESTION_9_PROMPT, l.default.Messages.HYPESQUAD_QUESTION_10_PROMPT, l.default.Messages.HYPESQUAD_QUESTION_11_PROMPT, l.default.Messages.HYPESQUAD_QUESTION_12_PROMPT, l.default.Messages.HYPESQUAD_QUESTION_13_PROMPT, l.default.Messages.HYPESQUAD_QUESTION_14_PROMPT],
  u = () => [
    [l.default.Messages.HYPESQUAD_QUESTION_0_RESPONSE_A, l.default.Messages.HYPESQUAD_QUESTION_0_RESPONSE_B, l.default.Messages.HYPESQUAD_QUESTION_0_RESPONSE_C, l.default.Messages.HYPESQUAD_QUESTION_0_RESPONSE_D],
    [l.default.Messages.HYPESQUAD_QUESTION_1_RESPONSE_A, l.default.Messages.HYPESQUAD_QUESTION_1_RESPONSE_B, l.default.Messages.HYPESQUAD_QUESTION_1_RESPONSE_C, l.default.Messages.HYPESQUAD_QUESTION_1_RESPONSE_D],
    [l.default.Messages.HYPESQUAD_QUESTION_2_RESPONSE_A, l.default.Messages.HYPESQUAD_QUESTION_2_RESPONSE_B, l.default.Messages.HYPESQUAD_QUESTION_2_RESPONSE_C, l.default.Messages.HYPESQUAD_QUESTION_2_RESPONSE_D],
    [l.default.Messages.HYPESQUAD_QUESTION_3_RESPONSE_A, l.default.Messages.HYPESQUAD_QUESTION_3_RESPONSE_B, l.default.Messages.HYPESQUAD_QUESTION_3_RESPONSE_C, l.default.Messages.HYPESQUAD_QUESTION_3_RESPONSE_D],
    [l.default.Messages.HYPESQUAD_QUESTION_4_RESPONSE_A, l.default.Messages.HYPESQUAD_QUESTION_4_RESPONSE_B, l.default.Messages.HYPESQUAD_QUESTION_4_RESPONSE_C, l.default.Messages.HYPESQUAD_QUESTION_4_RESPONSE_D],
    [l.default.Messages.HYPESQUAD_QUESTION_5_RESPONSE_A, l.default.Messages.HYPESQUAD_QUESTION_5_RESPONSE_B, l.default.Messages.HYPESQUAD_QUESTION_5_RESPONSE_C, l.default.Messages.HYPESQUAD_QUESTION_5_RESPONSE_D],
    [l.default.Messages.HYPESQUAD_QUESTION_6_RESPONSE_A, l.default.Messages.HYPESQUAD_QUESTION_6_RESPONSE_B, l.default.Messages.HYPESQUAD_QUESTION_6_RESPONSE_C, l.default.Messages.HYPESQUAD_QUESTION_6_RESPONSE_D],
    [l.default.Messages.HYPESQUAD_QUESTION_7_RESPONSE_A, l.default.Messages.HYPESQUAD_QUESTION_7_RESPONSE_B, l.default.Messages.HYPESQUAD_QUESTION_7_RESPONSE_C, l.default.Messages.HYPESQUAD_QUESTION_7_RESPONSE_D],
    [l.default.Messages.HYPESQUAD_QUESTION_8_RESPONSE_A, l.default.Messages.HYPESQUAD_QUESTION_8_RESPONSE_B, l.default.Messages.HYPESQUAD_QUESTION_8_RESPONSE_C, l.default.Messages.HYPESQUAD_QUESTION_8_RESPONSE_D],
    [l.default.Messages.HYPESQUAD_QUESTION_9_RESPONSE_A, l.default.Messages.HYPESQUAD_QUESTION_9_RESPONSE_B, l.default.Messages.HYPESQUAD_QUESTION_9_RESPONSE_C, l.default.Messages.HYPESQUAD_QUESTION_9_RESPONSE_D],
    [l.default.Messages.HYPESQUAD_QUESTION_10_RESPONSE_A, l.default.Messages.HYPESQUAD_QUESTION_10_RESPONSE_B, l.default.Messages.HYPESQUAD_QUESTION_10_RESPONSE_C, l.default.Messages.HYPESQUAD_QUESTION_10_RESPONSE_D],
    [l.default.Messages.HYPESQUAD_QUESTION_11_RESPONSE_A, l.default.Messages.HYPESQUAD_QUESTION_11_RESPONSE_B, l.default.Messages.HYPESQUAD_QUESTION_11_RESPONSE_C, l.default.Messages.HYPESQUAD_QUESTION_11_RESPONSE_D],
    [l.default.Messages.HYPESQUAD_QUESTION_12_RESPONSE_A, l.default.Messages.HYPESQUAD_QUESTION_12_RESPONSE_B, l.default.Messages.HYPESQUAD_QUESTION_12_RESPONSE_C, l.default.Messages.HYPESQUAD_QUESTION_12_RESPONSE_D],
    [l.default.Messages.HYPESQUAD_QUESTION_13_RESPONSE_A, l.default.Messages.HYPESQUAD_QUESTION_13_RESPONSE_B, l.default.Messages.HYPESQUAD_QUESTION_13_RESPONSE_C, l.default.Messages.HYPESQUAD_QUESTION_13_RESPONSE_D],
    [l.default.Messages.HYPESQUAD_QUESTION_14_RESPONSE_A, l.default.Messages.HYPESQUAD_QUESTION_14_RESPONSE_B, l.default.Messages.HYPESQUAD_QUESTION_14_RESPONSE_C, l.default.Messages.HYPESQUAD_QUESTION_14_RESPONSE_D]
  ],
  c = () => [i.HypeSquadHouses.HOUSE_1, i.HypeSquadHouses.HOUSE_2, i.HypeSquadHouses.HOUSE_3, i.RANDOM_HYPESQUAD_HOUSE],
  S = () => {
    let e = c(),
      t = d(),
      s = u();
    return o().map(a => {
      let i = t[a],
        l = s[a];
      return n()(null != i && null != l, "Invalid HypeSquad quiz question index"), {
        prompt: i,
        options: l.map((t, s) => {
          let a = e[s];
          return n()(null !== a, "Invalid HypeSquad quiz question option index"), {
            copy: t,
            house: a
          }
        })
      }
    })
  },
  E = e => ({
    [i.HypeSquadHouses.HOUSE_1]: l.default.Messages.HYPESQUAD_HOUSE_1,
    [i.HypeSquadHouses.HOUSE_2]: l.default.Messages.HYPESQUAD_HOUSE_2,
    [i.HypeSquadHouses.HOUSE_3]: l.default.Messages.HYPESQUAD_HOUSE_3
  })[e]