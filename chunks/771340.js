var i = n(544891),
    l = n(570140),
    r = n(981631);
t.Z = {
    fetchRegions(e) {
        i.tn
            .get({
                url: r.ANM.REGIONS(e),
                retries: 1,
                oldFormErrors: !0
            })
            .then(
                (t) =>
                    l.Z.dispatch({
                        type: 'LOAD_REGIONS',
                        regions: t.body,
                        guildId: e
                    }),
                () =>
                    l.Z.dispatch({
                        type: 'LOAD_REGIONS',
                        regions: [],
                        guildId: e
                    })
            );
    },
    changeCallRegion(e, t) {
        i.tn.patch({
            url: r.ANM.CALL(e),
            body: { region: t },
            oldFormErrors: !0
        });
    }
};
