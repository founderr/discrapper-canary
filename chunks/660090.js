t.d(n, {
    Z: function () {
        return s;
    }
}), t(47120);
var i = t(470079), l = t(674588), r = t(70956), a = t(314734);
function s(e) {
    let {
            sectionId: n,
            commandsByActiveSection: t
        } = e, [s, o] = i.useState(a.bS.ALPHABETICAL), c = i.useMemo(() => {
            var e, i;
            return null !== (i = null === (e = t.find(e => e.section.id === n)) || void 0 === e ? void 0 : e.data) && void 0 !== i ? i : [];
        }, [
            t,
            n
        ]), {
            popularSortedCommands: u,
            canSort: d
        } = function (e) {
            let {alphabeticalSortedCommands: n} = e;
            return i.useMemo(() => {
                if (n.length <= 1)
                    return {
                        popularSortedCommands: n,
                        canSort: !1
                    };
                let e = !1, t = n.map((n, t) => (e = e || null != n.global_popularity_rank, {
                        command: n,
                        alphabeticalSortIndex: t
                    }));
                return e ? (t.sort((e, n) => {
                    let t = e.command.global_popularity_rank, i = n.command.global_popularity_rank;
                    if (null != t && null != i) {
                        if (t !== i)
                            return t - i;
                    } else if (null != t)
                        return -1;
                    else if (null != i)
                        return 1;
                    return e.alphabeticalSortIndex - n.alphabeticalSortIndex;
                }), {
                    popularSortedCommands: t.map(e => {
                        let {command: n} = e;
                        return n;
                    }),
                    canSort: !0
                }) : {
                    popularSortedCommands: n,
                    canSort: !1
                };
            }, [n]);
        }({ alphabeticalSortedCommands: c });
    i.useEffect(() => {
        l.i6(n, { dontRefetchMs: r.Z.Millis.DAY });
    }, [n]), i.useEffect(() => {
        if (!!d)
            o(a.bS.POPULAR);
    }, [d]);
    let m = c;
    switch (s) {
    case a.bS.POPULAR:
        m = u;
        break;
    case a.bS.ALPHABETICAL:
        m = c;
    }
    return {
        sortOrder: s,
        setSortOrder: o,
        commands: m,
        canSort: d
    };
}
