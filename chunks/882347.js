r.d(n, {
    p: function () {
        return I;
    }
});
var i = r(789020);
var a = r(570140),
    s = r(881052),
    o = r(592125),
    l = r(630388),
    u = r(317381),
    c = r(424291),
    d = r(966434),
    f = r(649591),
    _ = r(224189),
    h = r(574952),
    p = r(981631);
async function m(e, n, r) {
    try {
        return await (0, _.Z)(e, n);
    } catch (i) {
        a.Z.dispatch({
            type: 'EMBEDDED_ACTIVITY_LAUNCH_FAIL',
            nonce: '',
            applicationId: e,
            channelId: n,
            guildId: r,
            error: new s.Hx(i)
        });
    }
}
async function g(e) {
    let { currentEmbeddedApplication: n } = e;
    return (
        !!(
            null == n ||
            (await new Promise((e) => {
                let r = u.ZP.getSelfEmbeddedActivities().get(n.id),
                    i = o.Z.getChannel(null == r ? void 0 : r.channelId);
                if (null == i) {
                    e(!0);
                    return;
                }
                (0, d.Z)(
                    n,
                    i,
                    () => {
                        (0, h.Z)().leaveActivity({
                            channelId: i.id,
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
async function E(e) {
    let { application: n, applicationId: r, channel: i, user: a } = e;
    if (null == a.nsfwAllowed) {
        var s, o;
        let e = null != n ? n : await m(r, i.id, i.getGuildId());
        if (
            null == e ||
            (null !== (o = null === (s = e.embeddedActivityConfig) || void 0 === s ? void 0 : s.requires_age_gate) &&
                void 0 !== o &&
                o &&
                !(await new Promise((n) => {
                    (0, c.V)({
                        application: e,
                        channelId: i.id,
                        onAgree: () => n(!0),
                        onDisagree: () => n(!1)
                    });
                })))
        )
            return !1;
    }
    return !0;
}
async function v(e) {
    let { application: n, applicationId: r, channel: i } = e,
        a = null != n ? n : await m(r, i.id, i.getGuildId());
    return (
        null != a &&
        (!!((0, l.yE)(a.flags, p.udG.EMBEDDED_RELEASED) || a.isVerified || u.ZP.hasActivityEverBeenLaunched(r)) ||
            new Promise((e) => {
                (0, f.j)({
                    application: a,
                    onConfirm: () => e(!0),
                    onCancel: () => e(!1)
                });
            }))
    );
}
async function I(e) {
    return !!((await g({ currentEmbeddedApplication: e.currentEmbeddedApplication })) && (await E(e)) && (await v(e))) || !1;
}
