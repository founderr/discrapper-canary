r.d(t, {
    G: function () {
        return i;
    },
    u: function () {
        return s;
    }
}),
    r(47120);
var n = r(192379),
    o = r(617136),
    a = r(272008);
function s(e) {
    let { isClaimingReward: t, isFetchingRewardCode: r, questContent: o, quest: s, requiresPlatformSelection: i, rewardCode: l, selectedPlatformType: d, preview: c } = e,
        [u, p] = n.useState(!1),
        m = n.useCallback((e, t, r) => {
            p(!1);
            try {
                (0, a.QB)(e, t, r);
            } catch (e) {
                p(!0);
            }
        }, []),
        f = n.useCallback((e) => {
            p(!1);
            try {
                (0, a.pf)(e);
            } catch (e) {
                p(!0);
            }
        }, []);
    return (
        n.useEffect(() => {
            var e, n;
            if (!0 !== c && null == l && !u && !t && !r && !i) (null === (e = s.userStatus) || void 0 === e ? void 0 : e.claimedAt) == null && null != d ? m(s.id, d, o) : (null === (n = s.userStatus) || void 0 === n ? void 0 : n.claimedAt) != null && f(s.id);
        }, [m, f, u, t, r, o, s, i, l, d, c]),
        {
            claimCode: m,
            fetchCode: f,
            hasError: u,
            setHasError: p
        }
    );
}
function i(e) {
    let { claimCode: t, fetchCode: r, hasError: a, onDismiss: s, quest: i, questContent: l, questContentCTA: d = o.jZ.GET_REWARD_CODE, questContentPosition: c, requiresPlatformSelection: u, selectedPlatformType: p } = e;
    return n.useCallback(() => {
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
                  ? r(i.id)
                  : null != p &&
                    (t(i.id, p, l),
                    (0, o._3)({
                        questId: i.id,
                        questContent: l,
                        questContentCTA: d,
                        questContentPosition: c
                    }))
              : s();
    }, [t, r, a, s, i, l, d, c, u, p]);
}
