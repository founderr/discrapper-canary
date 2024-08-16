n.d(t, {
    G: function () {
        return l;
    },
    u: function () {
        return r;
    }
}),
    n(47120);
var s = n(470079),
    o = n(617136),
    a = n(272008);
function r(e) {
    let { isClaimingReward: t, isFetchingRewardCode: n, questContent: o, quest: r, requiresPlatformSelection: l, rewardCode: i, selectedPlatformType: u } = e,
        [d, c] = s.useState(!1),
        p = s.useCallback((e, t, n) => {
            c(!1);
            try {
                (0, a.QB)(e, t, n);
            } catch (e) {
                c(!0);
            }
        }, []),
        m = s.useCallback((e) => {
            c(!1);
            try {
                (0, a.pf)(e);
            } catch (e) {
                c(!0);
            }
        }, []);
    return (
        s.useEffect(() => {
            var e, s;
            if (null == i && !d && !t && !n && !l) (null === (e = r.userStatus) || void 0 === e ? void 0 : e.claimedAt) == null && null != u ? p(r.id, u, o) : (null === (s = r.userStatus) || void 0 === s ? void 0 : s.claimedAt) != null && m(r.id);
        }, [p, m, d, t, n, o, r, l, i, u]),
        {
            claimCode: p,
            fetchCode: m,
            hasError: d,
            setHasError: c
        }
    );
}
function l(e) {
    let { claimCode: t, fetchCode: n, hasError: a, onDismiss: r, quest: l, questContent: i, questContentCTA: u = o.jZ.GET_REWARD_CODE, questContentPosition: d, requiresPlatformSelection: c, selectedPlatformType: p } = e;
    return s.useCallback(() => {
        var e;
        c && null != p
            ? (t(l.id, p, i),
              (0, o._3)({
                  questId: l.id,
                  questContent: i,
                  questContentCTA: u,
                  questContentPosition: d
              }))
            : a
              ? (null === (e = l.userStatus) || void 0 === e ? void 0 : e.claimedAt) != null
                  ? n(l.id)
                  : null != p &&
                    (t(l.id, p, i),
                    (0, o._3)({
                        questId: l.id,
                        questContent: i,
                        questContentCTA: u,
                        questContentPosition: d
                    }))
              : r();
    }, [t, n, a, r, l, i, u, d, c, p]);
}
