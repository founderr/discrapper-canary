n.d(t, {
    I9: function () {
        return v;
    }
}),
    n(47120),
    n(724458),
    n(653041);
var i = n(192379);
n(348327), n(664751);
var l = n(442837),
    r = n(224706);
n(110924);
var a = n(410030);
n(728345), n(963202);
var o = n(564990),
    s = n(353647),
    c = n(669764);
n(210753);
var u = n(369566),
    d = n(314897),
    h = n(480294),
    p = n(564334),
    m = n(302221);
n(823379);
var f = n(956664);
n(229893), n(229765), n(286083), n(207796), n(976757);
var g = n(981631),
    C = n(308083);
let _ = p.Z.parseString('#E93446');
function v() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 5,
        t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = (0, l.e7)([d.default], () => d.default.getId()),
        v = (0, a.ZP)(),
        { recent: x, outbox: I } = (0, u.Z)(n),
        b = (0, l.e7)([s.Z], () => s.Z.hasInitialized),
        S = (0, l.e7)([h.Z], () => h.Z.hasConsented(g.pjP.PERSONALIZATION)),
        E = null == I && b,
        N = i.useMemo(() => (S ? x.reduce((t, n) => (t.length >= e || 'played_game_extra' !== n.extra.type || null == C.gQ.get(n.extra.application_id) ? t : t.concat(n.extra.application_id)), []) : []), [S, x, e]),
        Z = i.useMemo(() => {
            let n = N.length > 0 ? N : C.Id;
            return t && n.length < e && n.push(...C.Id, ...C.J6.slice(0, e)), Array.from(new Set(n)).slice(0, e);
        }, [N, t, e]);
    i.useEffect(() => {
        E && S && (0, o.JX)(n);
    }, [n, E, S]),
        i.useEffect(() => {
            r.Z.getDetectableGamesSupplemental(Z);
        }, [Z]);
    let y = (0, l.Wu)([c.Z], () => c.Z.getGames(Z), [Z]),
        T = (0, l.e7)([c.Z], () => Z.some((e) => c.Z.isFetching(e)), [Z]),
        A = i.useMemo(() => {
            let e = {};
            for (let t of y) {
                if (null == t) continue;
                let { coverImageUrl: n, artwork: i, screenshots: l } = t;
                if (null != n) {
                    e[t.applicationId] = n;
                    continue;
                }
                if (i.length > 0) {
                    let n = Math.floor(Math.random() * (i.length - 1));
                    e[t.applicationId] = i[n];
                    continue;
                }
                if (l.length > 0) {
                    let n = Math.floor(Math.random() * (l.length - 1));
                    e[t.applicationId] = l[n];
                    continue;
                }
            }
            return e;
        }, [y]),
        [j, P] = i.useState({});
    return (
        i.useEffect(() => {
            Promise.all(
                Object.entries(A).map((e) => {
                    let [t, n] = e;
                    return null == n
                        ? Promise.resolve({
                              color: new p.Z(0, 255, 0, 1),
                              gameId: t
                          })
                        : (0, f.OF)(n)
                              .then((e) => {
                                  let [n, i, l] = e[0],
                                      r = new p.Z(n, i, l, 1),
                                      a = 'light' === v ? new p.Z(255, 255, 255, 1) : new p.Z(0, 0, 0, 1),
                                      o = (0, m.k8)({
                                          colors: [r, a],
                                          ratio: 5,
                                          saturationFactor: 1
                                      });
                                  return Promise.resolve({
                                      color: null != o ? o : new p.Z(0, 0, 255, 1),
                                      gameId: t
                                  });
                              })
                              .catch(() =>
                                  Promise.resolve({
                                      color: _,
                                      gameId: t
                                  })
                              );
                })
            ).then((e) =>
                P(
                    e.reduce((e, t) => {
                        let { color: n, gameId: i } = t;
                        return (e[i] = n), e;
                    }, {})
                )
            );
        }, [A, P, v]),
        {
            games: i.useMemo(
                () =>
                    Z.map((e) => {
                        var t, n, i;
                        let l = A[e],
                            r = null !== (n = j[e]) && void 0 !== n ? n : _,
                            a = null !== (i = null === (t = y.find((t) => (null == t ? void 0 : t.applicationId) === e)) || void 0 === t ? void 0 : t.name) && void 0 !== i ? i : '';
                        return {
                            id: e,
                            name: a,
                            backgroundImageUrl: l,
                            primaryColor: r
                        };
                    }),
                [Z, y, A, j]
            ),
            treatment: N.length > 0 && S ? C.O7.GAME_SPECIFIC : C.O7.GENERIC,
            hasFetchedGames: !E && !T
        }
    );
}
