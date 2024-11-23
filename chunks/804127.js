n.d(t, {
    G: function () {
        return i;
    },
    u: function () {
        return s;
    }
}),
    n(47120);
var r = n(192379),
    o = n(617136),
    a = n(272008);
function s(e) {
    let { isClaimingReward: t, isFetchingRewardCode: n, questContent: o, quest: s, requiresPlatformSelection: i, rewardCode: l, selectedPlatformType: d, preview: c } = e,
        [u, p] = r.useState(!1),
        m = r.useCallback((e, t, n) => {
            p(!1);
            try {
                (0, a.QB)(e, t, n);
            } catch (e) {
                p(!0);
            }
        }, []),
        f = r.useCallback((e) => {
            p(!1);
            try {
                (0, a.pf)(e);
            } catch (e) {
                p(!0);
            }
        }, []);
    return (
        r.useEffect(() => {
            var e, r;
            if (!0 !== c && null == l && !u && !t && !n && !i) (null === (e = s.userStatus) || void 0 === e ? void 0 : e.claimedAt) == null && null != d ? m(s.id, d, o) : (null === (r = s.userStatus) || void 0 === r ? void 0 : r.claimedAt) != null && f(s.id);
        }, [m, f, u, t, n, o, s, i, l, d, c]),
        {
            claimCode: m,
            fetchCode: f,
            hasError: u,
            setHasError: p
        }
    );
}
function i(e) {
    let { claimCode: t, fetchCode: n, hasError: a, onDismiss: s, quest: i, questContent: l, questContentCTA: d = o.jZ.GET_REWARD_CODE, questContentPosition: c, requiresPlatformSelection: u, selectedPlatformType: p } = e;
    return r.useCallback(() => {
        var e;
        u && null != p
            ? (t(i.id, p, l),
              (0, o._3)({
                  questId: i.id,
                  questContent: l,
                  questContentCTA: d,
                  questContentPosition: c
              }))
            : a
              ? (null === (e = i.userStatus) || void 0 === e ? void 0 : e.claimedAt) != null
                  ? n(i.id)
                  : null != p &&
                    (t(i.id, p, l),
                    (0, o._3)({
                        questId: i.id,
                        questContent: l,
                        questContentCTA: d,
                        questContentPosition: c
                    }))
              : s();
    }, [t, n, a, s, i, l, d, c, u, p]);
}
