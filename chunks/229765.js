n.d(t, {
    KY: function () {
        return o;
    }
}),
    n(315314),
    n(610138),
    n(216116),
    n(78328),
    n(815648),
    n(47120);
var i = n(192379);
n(108131);
var l = n(544891);
n(570140);
var r = n(963202);
n(229893), n(286083), n(976757);
var a = n(981631);
function o(e) {
    let { location: t, query: n } = e,
        o = (0, r.r3)(t);
    return (
        i.useEffect(() => {
            if (!!o)
                (function (e) {
                    l.tn.post({
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
        }, [o, n]),
        null
    );
}
new Worker(new URL('/assets/' + n.u('59546'), n.b));
