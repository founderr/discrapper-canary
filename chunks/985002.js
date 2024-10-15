n.d(t, {
    G: function () {
        return o;
    }
}),
    n(47120);
var s = n(470079),
    a = n(881052),
    r = n(280570),
    i = n(914788),
    l = n(292352);
function o(e) {
    let { onError: t, onSuccess: n } = null != e ? e : {},
        [o, c] = s.useState(!1),
        [d, _] = s.useState(!1),
        [E, u] = s.useState(!1),
        [T, I] = s.useState(!1),
        [R, g] = s.useState(!1),
        [N, m] = s.useState(!1),
        [C, f] = s.useState(!1),
        [p, A] = s.useState(!1),
        M = o || d || E || T || N || p,
        S = s.useCallback(
            async (e) => {
                if (!M) {
                    c(!0);
                    try {
                        await (0, r.Yw)(e.id, l.ne.ACTIVE), null == n || n();
                    } catch (n) {
                        let e = new a.Hx(n);
                        null == t || t(e);
                    } finally {
                        c(!1);
                    }
                }
            },
            [M, t, n]
        ),
        h = s.useCallback(
            async (e) => {
                if (!M) {
                    _(!0);
                    try {
                        await (0, r.Yw)(e.id, l.ne.DECLINED), null == n || n();
                    } catch (n) {
                        let e = new a.Hx(n);
                        null == t || t(e);
                    } finally {
                        _(!1);
                    }
                }
            },
            [M, t, n]
        ),
        b = s.useCallback(
            async (e) => {
                if (!M) {
                    u(!0);
                    try {
                        await (0, r.Yw)(e.id, l.ne.INACTIVE), null == n || n();
                    } catch (n) {
                        let e = new a.Hx(n);
                        null == t || t(e);
                    } finally {
                        u(!1);
                    }
                }
            },
            [M, t, n]
        ),
        x = s.useCallback(
            async (e) => {
                if (!M) {
                    I(!0);
                    try {
                        await (0, r.fc)(e.id), null == n || n();
                    } catch (n) {
                        let e = new a.Hx(n);
                        null == t || t(e);
                    } finally {
                        I(!1);
                    }
                }
            },
            [M, t, n]
        ),
        O = s.useCallback(async () => {
            if (!R) {
                g(!0);
                try {
                    await (0, r.qd)(), null == n || n();
                } catch (n) {
                    let e = new a.Hx(n);
                    null == t || t(e);
                } finally {
                    g(!1);
                }
            }
        }, [R, t, n]),
        P = s.useCallback(
            async (e) => {
                if (!C) {
                    f(!0);
                    try {
                        await r.ZP.fetchTeenActivity(e), null == n || n();
                    } catch (n) {
                        let e = new a.Hx(n);
                        null == t || t(e);
                    } finally {
                        f(!1);
                    }
                }
            },
            [C, t, n]
        ),
        v = s.useCallback(
            async (e, s) => {
                if (!N) {
                    m(!0);
                    try {
                        await r.ZP.requestLink(e, s), null == n || n();
                    } catch (n) {
                        let e = new a.Hx(n);
                        null == t || t(e);
                    } finally {
                        m(!1);
                    }
                }
            },
            [N, t, n]
        );
    return {
        acceptLinkRequest: S,
        declineLinkRequest: h,
        disconnectLinkRequest: b,
        cancelLinkRequest: x,
        selectTeenUser: P,
        getLinkCode: O,
        requestLink: v,
        loadMore: s.useCallback(
            async (e) => {
                let n = i.Z.getActionsForDisplayType(e),
                    s = n[n.length - 1],
                    l = i.Z.getStartId(),
                    o = i.Z.getSelectedTeenId();
                if (!p && null != l && null != o) {
                    A(!0);
                    try {
                        await r.ZP.fetchMoreTeenActivity(o, e, l, s.event_id);
                    } catch (n) {
                        let e = new a.Hx(n);
                        null == t || t(e);
                    } finally {
                        A(!1);
                    }
                }
            },
            [p, t]
        ),
        isAcceptLoading: o,
        isDeclineLoading: d,
        isDisconnectLoading: E,
        isCancelLoading: T,
        isGetLinkCodeLoading: R,
        isSelectTeenUserLoading: C,
        isRequestingLink: N,
        isMoreLoading: p
    };
}
