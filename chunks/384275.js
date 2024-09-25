var s = o(544891),
    r = o(570140),
    n = o(981631);
t.Z = {
    fetch() {
        s.tn
            .get({
                url: n.ANM.OAUTH2_TOKENS,
                oldFormErrors: !0
            })
            .then(
                (e) =>
                    r.Z.dispatch({
                        type: 'USER_AUTHORIZED_APPS_UPDATE',
                        apps: e.body
                    }),
                () =>
                    r.Z.dispatch({
                        type: 'USER_AUTHORIZED_APPS_UPDATE',
                        apps: []
                    })
            );
    },
    delete(e) {
        s.tn
            .del({
                url: n.ANM.OAUTH2_TOKEN(e),
                oldFormErrors: !0
            })
            .then(() => {
                this.fetch();
            });
    }
};
