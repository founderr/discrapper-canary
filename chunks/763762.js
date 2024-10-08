n.d(t, {
    Z: function () {
        return o;
    }
});
var i = n(442837),
    s = n(911969),
    a = n(213459),
    l = n(621853),
    r = n(981631);
function o(e, t) {
    var n;
    let o = (0, i.e7)([l.Z], () => {
        var t;
        return null !== e ? (null === (t = l.Z.getUserProfile(null != e ? e : r.lds)) || void 0 === t ? void 0 : t.application) : void 0;
    });
    return null ===
        (n = (0, a.v1)(
            t,
            {
                commandTypes: [s.yU.PRIMARY_ENTRY_POINT, s.yU.CHAT, s.yU.MESSAGE, s.yU.USER]
            },
            {
                applicationId: null == o ? void 0 : o.id,
                allowFetch: !0,
                allowApplicationState: !0
            }
        ).commands.find((e) => e.applicationId === (null == o ? void 0 : o.id))) || void 0 === n
        ? void 0
        : n.section.application;
}
