n.d(t, {
    G: function () {
        return o;
    }
}),
    n(47120),
    n(773603);
var i = n(192379),
    s = n(399606),
    r = n(570140),
    a = n(986197),
    l = n(135200);
let o = (e) => {
    let [t, n] = (0, s.Wu)([l.Z], () => [l.Z.usernameSuggestion(), l.Z.usernameSuggestionLoading()]);
    return (
        i.useEffect(
            () => (
                l.Z.wasSuggestionsFetched()
                    ? r.Z.dispatch({
                          type: 'POMELO_SUGGESTIONS_FETCH',
                          usernameSuggestionLoading: !1
                      })
                    : a.Z.fetchSuggestions(e).finally(() => {
                          r.Z.dispatch({
                              type: 'POMELO_SUGGESTIONS_FETCH',
                              usernameSuggestionLoading: !1
                          });
                      }),
                () => {
                    a.Z.resetSuggestions();
                }
            ),
            []
        ),
        {
            usernameSuggestion: t,
            usernameSuggestionLoading: n
        }
    );
};
