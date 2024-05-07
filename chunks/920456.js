"use strict";
n.r(t);
var a = n("544891"),
  s = n("314897"),
  i = n("981631");
t.default = {
  setUserAchievement(e, t, n) {
    let l = s.default.getId();
    return a.HTTP.put({
      url: i.Endpoints.USER_ACHIEVEMENTS_FOR_USER(l, e, t),
      body: {
        percent_complete: n
      },
      oldFormErrors: !0
    })
  },
  fetchForApplication: e => a.HTTP.get({
    url: i.Endpoints.USER_ACHIEVEMENTS(e),
    retries: 1,
    oldFormErrors: !0
  }).then(e => {
    let {
      body: t
    } = e;
    return t
  })
}