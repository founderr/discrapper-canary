n.d(t, {
    Fs: function () {
        return E;
    },
    Xu: function () {
        return _;
    },
    ZP: function () {
        return d;
    },
    sV: function () {
        return c;
    }
});
var r = n(411104);
var i = n(470079),
    a = n(911969),
    o = n(592125),
    s = n(963456),
    l = n(213459),
    u = n(367790);
let c = 'no primary app command for application';
async function d(e, t) {
    let n,
        r = o.Z.getChannel(e);
    if (
        (null != r &&
            null == (n = _(r, t)) &&
            (await (0, l.FN)({
                type: 'application',
                applicationId: t
            }),
            (n = _(r, t))),
        null != n)
    )
        return n;
    throw Error(c);
}
function _(e, t) {
    return l.ZP.query(
        e,
        { commandTypes: [a.yU.PRIMARY_ENTRY_POINT] },
        {
            placeholderCount: 1,
            scoreMethod: u.p.COMMAND_ONLY,
            applicationId: t,
            allowFetch: !1,
            allowApplicationState: !0
        }
    ).commands[0];
}
function E(e, t) {
    let { commands: n, loading: r } = f(e, t),
        a = n[0],
        o = null != a;
    return (
        i.useEffect(() => {
            !o &&
                !r &&
                (0, s.j)({
                    type: 'application',
                    applicationId: t
                });
        }, [t, o, r]),
        a
    );
}
function f(e, t) {
    return (0, l.v1)(
        e,
        { commandTypes: [a.yU.PRIMARY_ENTRY_POINT] },
        {
            placeholderCount: 1,
            scoreMethod: u.p.COMMAND_ONLY,
            applicationId: t,
            allowFetch: !1,
            allowApplicationState: !0
        }
    );
}
