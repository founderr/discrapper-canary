n.d(t, {
    SY: function () {
        return d;
    },
    Xu: function () {
        return c;
    },
    ZP: function () {
        return u;
    },
    sV: function () {
        return l;
    }
}),
    n(411104);
var r = n(911969),
    i = n(592125),
    a = n(963456),
    s = n(213459),
    o = n(367790);
let l = 'no primary app command for application';
async function u(e, t) {
    let n,
        r = i.Z.getChannel(e);
    if (null != r && null == (n = c(r, t))) {
        let e = {
                type: 'application',
                applicationId: t
            },
            i = new AbortController();
        (0, a.j)(e, !1), await (0, a.a)(e, 0, i), (n = c(r, t));
    }
    if (null != n) return n;
    throw Error(l);
}
function c(e, t) {
    return s.ZP.query(
        e,
        { commandTypes: [r.yU.PRIMARY_ENTRY_POINT] },
        {
            placeholderCount: 1,
            scoreMethod: o.p.COMMAND_ONLY,
            applicationId: t,
            allowFetch: !1,
            allowApplicationState: !0
        }
    ).commands[0];
}
function d(e, t) {
    return (0, s.v1)(
        e,
        { commandTypes: [r.yU.PRIMARY_ENTRY_POINT] },
        {
            placeholderCount: 1,
            scoreMethod: o.p.COMMAND_ONLY,
            applicationId: t,
            allowFetch: !1,
            allowApplicationState: !0
        }
    ).commands[0];
}
