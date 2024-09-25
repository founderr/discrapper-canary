n.d(t, {
    Z: function () {
        return _;
    }
});
var r = n(735250),
    i = n(470079),
    a = n(442837),
    o = n(987909),
    s = n(430824),
    l = n(630388),
    u = n(35125),
    c = n(523361),
    d = n(981631);
function _(e) {
    var t, n;
    let { channel: _, message: E } = e,
        f = null !== (n = null === (t = E.roleSubscriptionData) || void 0 === t ? void 0 : t.is_renewal) && void 0 !== n && n ? (0, c.Md)() : (0, c.Q8)(),
        h = _.guild_id,
        p = (0, a.e7)(
            [s.Z],
            () => {
                var e;
                return null === (e = s.Z.getGuild(h)) || void 0 === e ? void 0 : e.systemChannelFlags;
            },
            [h]
        ),
        m = null != p && (0, l.yE)(p, d.xmn.SUPPRESS_ROLE_SUBSCRIPTION_PURCHASE_NOTIFICATION_REPLIES),
        I = i.useMemo(() => (0, u._i)(_, E), [_, E]);
    return m
        ? null
        : (0, r.jsx)(o.Z, {
              channel: _,
              message: E,
              buttonLabels: f,
              stickers: c.HG,
              event: d.rMx.ROLE_SUBSCRIPTION_PURCHASE_SYSTEM_MESSAGE_CTA_CLICKED,
              eventProperties: I
          });
}
