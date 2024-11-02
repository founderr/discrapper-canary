n.d(t, {
    Z: function () {
        return m;
    }
});
var i = n(200651),
    r = n(192379),
    l = n(442837),
    a = n(987909),
    o = n(430824),
    s = n(630388),
    c = n(35125),
    u = n(523361),
    d = n(981631);
function m(e) {
    var t, n;
    let { channel: m, message: f } = e,
        h = null !== (n = null === (t = f.roleSubscriptionData) || void 0 === t ? void 0 : t.is_renewal) && void 0 !== n && n ? (0, u.Md)() : (0, u.Q8)(),
        p = m.guild_id,
        g = (0, l.e7)(
            [o.Z],
            () => {
                var e;
                return null === (e = o.Z.getGuild(p)) || void 0 === e ? void 0 : e.systemChannelFlags;
            },
            [p]
        ),
        _ = null != g && (0, s.yE)(g, d.xmn.SUPPRESS_ROLE_SUBSCRIPTION_PURCHASE_NOTIFICATION_REPLIES),
        C = r.useMemo(() => (0, c._i)(m, f), [m, f]);
    return _
        ? null
        : (0, i.jsx)(a.Z, {
              channel: m,
              message: f,
              buttonLabels: h,
              stickers: u.HG,
              event: d.rMx.ROLE_SUBSCRIPTION_PURCHASE_SYSTEM_MESSAGE_CTA_CLICKED,
              eventProperties: C
          });
}
