var n = t(544891),
  i = t(570140),
  a = t(981631);
s.Z = {
  fetch() {
    n.tn.get({
      url: a.ANM.OAUTH2_TOKENS,
      oldFormErrors: !0
    }).then(e => i.Z.dispatch({
      type: "USER_AUTHORIZED_APPS_UPDATE",
      apps: e.body
    }), () => i.Z.dispatch({
      type: "USER_AUTHORIZED_APPS_UPDATE",
      apps: []
    }))
  },
  delete(e) {
    n.tn.del({
      url: a.ANM.OAUTH2_TOKEN(e),
      oldFormErrors: !0
    }).then(() => {
      this.fetch()
    })
  }
}