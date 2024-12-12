var i = r(544891),
    a = r(570140),
    s = r(718745),
    o = r(981631);
n.Z = {
    search(e, n) {
        if (null == s.Z.getResults(e, n))
            a.Z.dispatch({
                type: 'INTEGRATION_QUERY',
                integration: e,
                query: n
            }),
                i.tn
                    .get({
                        url: o.ANM.INTEGRATION_SEARCH('tenor'),
                        query: { q: n },
                        oldFormErrors: !0,
                        rejectWithError: !0
                    })
                    .then(
                        (r) => {
                            a.Z.dispatch({
                                type: 'INTEGRATION_QUERY_SUCCESS',
                                integration: e,
                                query: n,
                                results: r.body
                            });
                        },
                        () =>
                            a.Z.dispatch({
                                type: 'INTEGRATION_QUERY_FAILURE',
                                integration: e,
                                query: n
                            })
                    );
    }
};
