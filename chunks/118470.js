n.d(t, {
    Z: function () {
        return E;
    }
}),
    n(47120),
    n(653041);
var i = n(735250),
    a = n(470079),
    s = n(442837),
    r = n(812206),
    l = n(82950),
    o = n(434404),
    c = n(106976),
    d = n(270144),
    u = n(981631),
    _ = n(689938),
    h = n(466389);
function E(e) {
    let t,
        { guild: n } = e,
        E = (0, d.h6)(n),
        m = () => (0, c.sB)(n.id),
        I = a.useMemo(() => new Set(E.map((e) => e.applicationId)), [E]),
        g = (0, s.Wu)(
            [r.Z],
            () => {
                let e = [];
                for (let t of I) {
                    let n = r.Z.getApplication(t);
                    null != n && e.push(n);
                }
                return e;
            },
            [I]
        );
    return 0 === g.length
        ? null
        : ((t =
              1 === g.length
                  ? _.Z.Messages.ONE_APPLICATION_SUBSCRIPTION_EXPIRATION_CHANNEL_NOTICE_CONTENT.format({ a: g[0].name })
                  : 2 === g.length
                    ? _.Z.Messages.TWO_APPLICATION_SUBSCRIPTION_EXPIRATION_CHANNEL_NOTICE_CONTENT.format({
                          a: g[0].name,
                          b: g[1].name
                      })
                    : 3 === g.length
                      ? _.Z.Messages.THREE_APPLICATION_SUBSCRIPTION_EXPIRATION_CHANNEL_NOTICE_CONTENT.format({
                            a: g[0].name,
                            b: g[1].name,
                            c: g[2].name
                        })
                      : _.Z.Messages.MORE_APPLICATION_SUBSCRIPTION_EXPIRATION_CHANNEL_NOTICE_CONTENT),
          (0, i.jsx)(l.Z, {
              guild: n,
              onDismissed: m,
              message: t,
              type: u.vID.APPLICATION_SUBSCRIPTION_EXPIRATION,
              image: h,
              onClick: () => {
                  m(), o.Z.open(n.id, u.pNK.INTEGRATIONS);
              },
              imageMarginTop: 6,
              imageMarginX: 46,
              cta: _.Z.Messages.APPLICATION_SUBSCRIPTION_EXPIRATION_CHANNEL_NOTICE_CTA
          }));
}
