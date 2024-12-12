r.d(n, {
    $: function () {
        return d;
    },
    Z: function () {
        return c;
    }
});
var i = r(442837),
    a = r(430198),
    s = r(592125),
    o = r(496675),
    l = r(981631);
let u = {
    needSubscriptionToAccess: !1,
    isSubscriptionGated: !1
};
function c(e) {
    return (0, i.cj)([s.Z, a.Z, o.Z], () => d(e, s.Z, a.Z, o.Z), [e]);
}
function d(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : s.Z,
        r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : a.Z,
        i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : o.Z,
        c = n.getChannel(e);
    return (null == c ? void 0 : c.isRoleSubscriptionTemplatePreviewChannel())
        ? {
              isSubscriptionGated: !0,
              needSubscriptionToAccess: !0
          }
        : null != c && r.isChannelGated(c.guild_id, c.id)
          ? {
                isSubscriptionGated: !0,
                needSubscriptionToAccess: c.isGuildVocal() ? !i.can(l.Plq.CONNECT, c) : !i.can(l.Plq.VIEW_CHANNEL, c)
            }
          : u;
}
