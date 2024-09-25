n.d(t, {
    p: function () {
        return m;
    }
});
var r = n(789020);
var i = n(570140),
    a = n(881052),
    o = n(630388),
    s = n(317381),
    l = n(424291),
    u = n(966434),
    c = n(649591),
    d = n(224189),
    _ = n(981631);
async function E(e, t, n) {
    try {
        return await (0, d.Z)(e, t);
    } catch (r) {
        i.Z.dispatch({
            type: 'EMBEDDED_ACTIVITY_LAUNCH_FAIL',
            nonce: '',
            applicationId: e,
            channelId: t,
            guildId: n,
            error: new a.Hx(r)
        });
    }
}
async function f(e) {
    let { channel: t, currentEmbeddedApplication: n, embeddedActivitiesManager: r } = e;
    return (
        !!(
            null == n ||
            (await new Promise((e) => {
                (0, u.Z)(
                    n,
                    t,
                    () => {
                        r.leaveActivity({
                            channelId: t.id,
                            applicationId: n.id
                        }),
                            e(!0);
                    },
                    () => e(!1)
                );
            }))
        ) || !1
    );
}
async function h(e) {
    let { application: t, applicationId: n, channel: r, user: i } = e;
    if (null == i.nsfwAllowed) {
        var a, o;
        let e = null != t ? t : await E(n, r.id, r.getGuildId());
        if (
            null == e ||
            (null !== (o = null === (a = e.embeddedActivityConfig) || void 0 === a ? void 0 : a.requires_age_gate) &&
                void 0 !== o &&
                o &&
                !(await new Promise((t) => {
                    (0, l.V)({
                        application: e,
                        onAgree: () => t(!0),
                        onDisagree: () => t(!1)
                    });
                })))
        )
            return !1;
    }
    return !0;
}
async function p(e) {
    let { application: t, applicationId: n, channel: r } = e,
        i = null != t ? t : await E(n, r.id, r.getGuildId());
    return (
        null != i &&
        (!!((0, o.yE)(i.flags, _.udG.EMBEDDED_RELEASED) || i.isVerified || s.ZP.hasActivityEverBeenLaunched(n)) ||
            new Promise((e) => {
                (0, c.j)({
                    application: i,
                    onConfirm: () => e(!0),
                    onCancel: () => e(!1)
                });
            }))
    );
}
async function m(e) {
    return !!((await f(e)) && (await h(e)) && (await p(e))) || !1;
}
