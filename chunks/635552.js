n.d(t, {
    W: function () {
        return d;
    }
}),
    n(47120);
var r = n(470079),
    a = n(979554),
    s = n(809206),
    o = n(350327),
    i = n(884697),
    l = n(328456),
    c = n(689938);
let d = (e) => {
    let { product: t, onSuccess: d, onError: u } = e,
        [f, g] = r.useState(!1),
        { firstAvatarDecoration: p, firstProfileEffect: v } = (0, l.R)(t),
        C = (0, i.x6)(t) ? c.Z.Messages.COLLECTIBLES_PROFILE_UPDATE_NOTIFICATION : t.type === a.Z.AVATAR_DECORATION ? c.Z.Messages.COLLECTIBLES_AVATAR_DECO_UPDATED_NOTIFICATION : c.Z.Messages.COLLECTIBLES_PFX_UPDATED_NOTIFICATION;
    return {
        handleUseNow: r.useCallback(async () => {
            g(!0);
            try {
                if ((null != p && (await (0, s.Mn)({ avatarDecoration: p })), null != v)) {
                    let e = { profile_effect_id: v.id };
                    await (0, o.Z)(e);
                }
                {
                    let { ToastPosition: e, ToastType: t, createToast: r, popToast: a, showToast: s } = await Promise.resolve().then(n.bind(n, 481060));
                    a(),
                        s(
                            r(C, t.MESSAGE, {
                                duration: 6000,
                                position: e.TOP
                            })
                        );
                }
                null == d || d();
            } catch (e) {
                null == u || u(e);
            } finally {
                g(!1);
            }
        }, [p, v, d, C, u]),
        isApplying: f
    };
};
