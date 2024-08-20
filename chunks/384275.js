var r = n(544891),
    o = n(570140),
    a = n(981631);
t.Z = {
    fetch() {
        r.tn
            .get({
                url: a.ANM.OAUTH2_TOKENS,
                oldFormErrors: !0
            })
            .then(
                (e) =>
                    o.Z.dispatch({
                        type: 'USER_AUTHORIZED_APPS_UPDATE',
                        apps: e.body
                    }),
                () =>
                    o.Z.dispatch({
                        type: 'USER_AUTHORIZED_APPS_UPDATE',
                        apps: []
                    })
            );
    },
    delete(e) {
        r.tn
            .del({
                url: a.ANM.OAUTH2_TOKEN(e),
                oldFormErrors: !0
            })
            .then(() => {
                this.fetch();
            });
    }
};
