n.d(t, {
    G: function () {
        return l;
    }
}),
    n(47120),
    n(773603);
var s = n(470079),
    i = n(399606),
    a = n(570140),
    r = n(986197),
    o = n(135200);
let l = (e) => {
    let [t, n] = (0, i.Wu)([o.Z], () => [o.Z.usernameSuggestion(), o.Z.usernameSuggestionLoading()]);
    return (
        s.useEffect(
            () => (
                o.Z.wasSuggestionsFetched()
                    ? a.Z.dispatch({
                          type: 'POMELO_SUGGESTIONS_FETCH',
                          usernameSuggestionLoading: !1
                      })
                    : r.Z.fetchSuggestions(e).finally(() => {
                          a.Z.dispatch({
                              type: 'POMELO_SUGGESTIONS_FETCH',
                              usernameSuggestionLoading: !1
                          });
                      }),
                () => {
                    r.Z.resetSuggestions();
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
