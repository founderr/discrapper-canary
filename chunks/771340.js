var i = n(544891),
    s = n(570140),
    a = n(981631);
t.Z = {
    fetchRegions(e) {
        i.tn
            .get({
                url: a.ANM.REGIONS(e),
                retries: 1,
                oldFormErrors: !0
            })
            .then(
                (t) =>
                    s.Z.dispatch({
                        type: 'LOAD_REGIONS',
                        regions: t.body,
                        guildId: e
                    }),
                () =>
                    s.Z.dispatch({
                        type: 'LOAD_REGIONS',
                        regions: [],
                        guildId: e
                    })
            );
    },
    changeCallRegion(e, t) {
        i.tn.patch({
            url: a.ANM.CALL(e),
            body: { region: t },
            oldFormErrors: !0
        });
    }
};
