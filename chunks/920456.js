var s = n(544891),
  i = n(314897),
  l = n(981631);
t.Z = {
  setUserAchievement(e, t, n) {
    let a = i.default.getId();
    return s.tn.put({
      url: l.ANM.USER_ACHIEVEMENTS_FOR_USER(a, e, t),
      body: {
        percent_complete: n
      },
      oldFormErrors: !0
    })
  },
  fetchForApplication: e => s.tn.get({
    url: l.ANM.USER_ACHIEVEMENTS(e),
    retries: 1,
    oldFormErrors: !0
  }).then(e => {
    let {
      body: t
    } = e;
    return t
  })
}