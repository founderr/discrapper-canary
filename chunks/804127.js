r.d(t, {
    G: function () {
        return i;
    },
    u: function () {
        return s;
    }
}),
    r(47120);
var n = r(470079),
    a = r(617136),
    o = r(272008);
function s(e) {
    let { isClaimingReward: t, isFetchingRewardCode: r, questContent: a, quest: s, requiresPlatformSelection: i, rewardCode: d, selectedPlatformType: l, preview: c } = e,
        [u, p] = n.useState(!1),
        _ = n.useCallback((e, t, r) => {
            p(!1);
            try {
                (0, o.QB)(e, t, r);
            } catch (e) {
                p(!0);
            }
        }, []),
        C = n.useCallback((e) => {
            p(!1);
            try {
                (0, o.pf)(e);
            } catch (e) {
                p(!0);
            }
        }, []);
    return (
        n.useEffect(() => {
            var e, n;
            if (!0 !== c && null == d && !u && !t && !r && !i) (null === (e = s.userStatus) || void 0 === e ? void 0 : e.claimedAt) == null && null != l ? _(s.id, l, a) : (null === (n = s.userStatus) || void 0 === n ? void 0 : n.claimedAt) != null && C(s.id);
        }, [_, C, u, t, r, a, s, i, d, l, c]),
        {
            claimCode: _,
            fetchCode: C,
            hasError: u,
            setHasError: p
        }
    );
}
function i(e) {
    let { claimCode: t, fetchCode: r, hasError: o, onDismiss: s, quest: i, questContent: d, questContentCTA: l = a.jZ.GET_REWARD_CODE, questContentPosition: c, requiresPlatformSelection: u, selectedPlatformType: p } = e;
    return n.useCallback(() => {
        var e;
        u && null != p
            ? (t(i.id, p, d),
              (0, a._3)({
                  questId: i.id,
                  questContent: d,
                  questContentCTA: l,
                  questContentPosition: c
              }))
            : o
              ? (null === (e = i.userStatus) || void 0 === e ? void 0 : e.claimedAt) != null
                  ? r(i.id)
                  : null != p &&
                    (t(i.id, p, d),
                    (0, a._3)({
                        questId: i.id,
                        questContent: d,
                        questContentCTA: l,
                        questContentPosition: c
                    }))
              : s();
    }, [t, r, o, s, i, d, l, c, u, p]);
}
