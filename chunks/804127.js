n.d(t, {
    G: function () {
        return o;
    },
    u: function () {
        return l;
    }
}),
    n(47120);
var s = n(470079),
    a = n(617136),
    r = n(272008);
function l(e) {
    let { isClaimingReward: t, isFetchingRewardCode: n, questContent: a, quest: l, requiresPlatformSelection: o, rewardCode: i, selectedPlatformType: d } = e,
        [u, c] = s.useState(!1),
        E = s.useCallback((e, t, n) => {
            c(!1);
            try {
                (0, r.QB)(e, t, n);
            } catch (e) {
                c(!0);
            }
        }, []),
        C = s.useCallback((e) => {
            c(!1);
            try {
                (0, r.pf)(e);
            } catch (e) {
                c(!0);
            }
        }, []);
    return (
        s.useEffect(() => {
            var e, s;
            if (null == i && !u && !t && !n && !o) (null === (e = l.userStatus) || void 0 === e ? void 0 : e.claimedAt) == null && null != d ? E(l.id, d, a) : (null === (s = l.userStatus) || void 0 === s ? void 0 : s.claimedAt) != null && C(l.id);
        }, [E, C, u, t, n, a, l, o, i, d]),
        {
            claimCode: E,
            fetchCode: C,
            hasError: u,
            setHasError: c
        }
    );
}
function o(e) {
    let { claimCode: t, fetchCode: n, hasError: r, onDismiss: l, quest: o, questContent: i, questContentCTA: d = a.jZ.GET_REWARD_CODE, questContentPosition: u, requiresPlatformSelection: c, selectedPlatformType: E } = e;
    return s.useCallback(() => {
        var e;
        c && null != E
            ? (t(o.id, E, i),
              (0, a._3)({
                  questId: o.id,
                  questContent: i,
                  questContentCTA: d,
                  questContentPosition: u
              }))
            : r
              ? (null === (e = o.userStatus) || void 0 === e ? void 0 : e.claimedAt) != null
                  ? n(o.id)
                  : null != E &&
                    (t(o.id, E, i),
                    (0, a._3)({
                        questId: o.id,
                        questContent: i,
                        questContentCTA: d,
                        questContentPosition: u
                    }))
              : l();
    }, [t, n, r, l, o, i, d, u, c, E]);
}
