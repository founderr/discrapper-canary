r.d(t, {
    W: function () {
        return d;
    }
}),
    r(47120);
var n = r(470079),
    a = r(979554),
    s = r(809206),
    o = r(350327),
    i = r(884697),
    l = r(328456),
    c = r(689938);
let d = (e) => {
    let { product: t, onSuccess: d, onError: u } = e,
        [f, g] = n.useState(!1),
        { firstAvatarDecoration: p, firstProfileEffect: v } = (0, l.R)(t),
        C = (0, i.x6)(t) ? c.Z.Messages.COLLECTIBLES_PROFILE_UPDATE_NOTIFICATION : t.type === a.Z.AVATAR_DECORATION ? c.Z.Messages.COLLECTIBLES_AVATAR_DECO_UPDATED_NOTIFICATION : c.Z.Messages.COLLECTIBLES_PFX_UPDATED_NOTIFICATION;
    return {
        handleUseNow: n.useCallback(async () => {
            g(!0);
            try {
                if ((null != p && (await (0, s.Mn)({ avatarDecoration: p })), null != v)) {
                    let e = { profile_effect_id: v.id };
                    await (0, o.Z)(e);
                }
                {
                    let { ToastPosition: e, ToastType: t, createToast: n, popToast: a, showToast: s } = await Promise.resolve().then(r.bind(r, 481060));
                    a(),
                        s(
                            n(C, t.MESSAGE, {
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
