var r = t(544891),
    i = t(570140),
    o = t(981631);
e.Z = {
    fetch() {
        r.tn
            .get({
                url: o.ANM.OAUTH2_TOKENS,
                oldFormErrors: !0
            })
            .then(
                (n) =>
                    i.Z.dispatch({
                        type: 'USER_AUTHORIZED_APPS_UPDATE',
                        apps: n.body
                    }),
                () =>
                    i.Z.dispatch({
                        type: 'USER_AUTHORIZED_APPS_UPDATE',
                        apps: []
                    })
            );
    },
    delete(n) {
        r.tn
            .del({
                url: o.ANM.OAUTH2_TOKEN(n),
                oldFormErrors: !0
            })
            .then(() => {
                this.fetch();
            });
    }
};
