n.d(t, {
    Fs: function () {
        return f;
    },
    Xu: function () {
        return E;
    },
    ZP: function () {
        return _;
    },
    ms: function () {
        return h;
    },
    sV: function () {
        return d;
    }
}),
    n(411104);
var r = n(192379),
    i = n(373793),
    a = n(911969),
    s = n(404295),
    o = n(592125),
    l = n(963456),
    u = n(213459),
    c = n(367790);
let d = 'no primary app command for application';
async function _(e, t) {
    let n,
        r = o.Z.getChannel(e);
    if (
        (null != r &&
            null == (n = E(r, t)) &&
            (await (0, u.FN)({
                type: 'application',
                applicationId: t
            }),
            (n = E(r, t))),
        null != n)
    )
        return n;
    throw Error(d);
}
function E(e, t) {
    return u.ZP.query(
        e,
        { commandTypes: [a.yU.PRIMARY_ENTRY_POINT] },
        {
            placeholderCount: 1,
            scoreMethod: c.p.COMMAND_ONLY,
            applicationId: t,
            allowFetch: !1,
            allowApplicationState: !0
        }
    ).commands[0];
}
function f(e, t) {
    let { commands: n, loading: i } = (function (e, t) {
            return (0, u.v1)(
                e,
                { commandTypes: [a.yU.PRIMARY_ENTRY_POINT] },
                {
                    placeholderCount: 1,
                    scoreMethod: c.p.COMMAND_ONLY,
                    applicationId: t,
                    allowFetch: !1,
                    allowApplicationState: !0
                }
            );
        })(e, t),
        s = n[0],
        o = null != s;
    return (
        r.useEffect(() => {
            !o &&
                !i &&
                (0, l.j)({
                    type: 'application',
                    applicationId: t
                });
        }, [t, o, i]),
        s
    );
}
function h(e) {
    let { channel: t, applicationId: n, botUserId: r } = e,
        o = f(t, n),
        l = (0, s.bG)('useIsPrimaryAppCommandUsableInAppDM');
    if (null == o) return !1;
    let u = null != o.integration_types && o.integration_types.includes(i.Y.USER_INSTALL),
        c = null != o.contexts && o.contexts.includes(a.D.BOT_DM);
    return l && null != r && u && c;
}
