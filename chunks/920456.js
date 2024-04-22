"use strict";
a.r(t);
var n = a("544891"),
  s = a("314897"),
  l = a("981631");
t.default = {
  setUserAchievement(e, t, a) {
    let i = s.default.getId();
    return n.HTTP.put({
      url: l.Endpoints.USER_ACHIEVEMENTS_FOR_USER(i, e, t),
      body: {
        percent_complete: a
      },
      oldFormErrors: !0
    })
  },
  fetchForApplication: e => n.HTTP.get({
    url: l.Endpoints.USER_ACHIEVEMENTS(e),
    retries: 1,
    oldFormErrors: !0
  }).then(e => {
    let {
      body: t
    } = e;
    return t
  })
}