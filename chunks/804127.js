n.d(t, {
    G: function () {
        return s;
    },
    u: function () {
        return i;
    }
}),
    n(47120);
var r = n(192379),
    a = n(617136),
    o = n(272008);
function i(e) {
    let { isClaimingReward: t, isFetchingRewardCode: n, questContent: a, quest: i, requiresPlatformSelection: s, rewardCode: l, selectedPlatformType: d, preview: c } = e,
        [u, p] = r.useState(!1),
        f = r.useCallback((e, t, n) => {
            p(!1);
            try {
                (0, o.QB)(e, t, n);
            } catch (e) {
                p(!0);
            }
        }, []),
        _ = r.useCallback((e) => {
            p(!1);
            try {
                (0, o.pf)(e);
            } catch (e) {
                p(!0);
            }
        }, []);
    return (
        r.useEffect(() => {
            var e, r;
            if (!0 !== c && null == l && !u && !t && !n && !s) (null === (e = i.userStatus) || void 0 === e ? void 0 : e.claimedAt) == null && null != d ? f(i.id, d, a) : (null === (r = i.userStatus) || void 0 === r ? void 0 : r.claimedAt) != null && _(i.id);
        }, [f, _, u, t, n, a, i, s, l, d, c]),
        {
            claimCode: f,
            fetchCode: _,
            hasError: u,
            setHasError: p
        }
    );
}
function s(e) {
    let { claimCode: t, fetchCode: n, hasError: o, onDismiss: i, quest: s, questContent: l, questContentCTA: d = a.jZ.GET_REWARD_CODE, questContentPosition: c, requiresPlatformSelection: u, selectedPlatformType: p } = e;
    return r.useCallback(() => {
        var e;
        u && null != p
            ? (t(s.id, p, l),
              (0, a._3)({
                  questId: s.id,
                  questContent: l,
                  questContentCTA: d,
                  questContentPosition: c
              }))
            : o
              ? (null === (e = s.userStatus) || void 0 === e ? void 0 : e.claimedAt) != null
                  ? n(s.id)
                  : null != p &&
                    (t(s.id, p, l),
                    (0, a._3)({
                        questId: s.id,
                        questContent: l,
                        questContentCTA: d,
                        questContentPosition: c
                    }))
              : i();
    }, [t, n, o, i, s, l, d, c, u, p]);
}
