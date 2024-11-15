n.d(t, {
    K: function () {
        return s;
    }
});
var i = n(192379),
    r = n(544891),
    l = n(963202),
    a = n(981631);
function s(e) {
    let { location: t, query: n } = e,
        s = (0, l.r3)(t);
    return (
        i.useEffect(() => {
            if (!!s)
                (function (e) {
                    r.tn.post({
                        url: a.ANM.DISCOVERY_RECOMMENDATIONS,
                        body: {
                            game_application_ids: e.games,
                            traits: e.traits,
                            playstyle: e.playstyle
                        }
                    });
                })({
                    games: [],
                    traits: []
                });
        }, [s, n]),
        null
    );
}
