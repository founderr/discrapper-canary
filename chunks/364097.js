n.d(t, {
    Z: function () {
        return E;
    }
});
var r = n(735250);
n(470079);
var i = n(442837),
    a = n(481060),
    o = n(955415),
    s = n(846587),
    l = n(409059),
    u = n(58346),
    c = n(689938),
    d = n(312731),
    _ = n(691784);
function E(e) {
    var t;
    let { code: E } = e,
        f = (0, i.e7)([l.Z], () => l.Z.getGuildTemplate(E));
    if (null == f || f.state === u.Rj.RESOLVING)
        return (0, r.jsxs)(o.Z, {
            children: [(0, r.jsx)(o.Z.Header, { text: c.Z.Messages.GUILD_TEMPLATE_RESOLVING_TITLE }), (0, r.jsx)(o.Z.Body, { resolving: !0 })]
        });
    if (f.state === u.Rj.EXPIRED)
        return (0, r.jsxs)(o.Z, {
            children: [
                (0, r.jsx)(o.Z.Header, { text: c.Z.Messages.GUILD_TEMPLATE_INVALID_TITLE }),
                (0, r.jsxs)(o.Z.Body, {
                    children: [
                        (0, r.jsx)(o.Z.Icon, { expired: !0 }),
                        (0, r.jsx)(o.Z.Info, {
                            expired: !0,
                            title: c.Z.Messages.GUILD_TEMPLATE_INVALID_SUBTITLE
                        })
                    ]
                })
            ]
        });
    let h = () => {
            (0, a.openModalLazy)(async () => {
                let { default: e } = await Promise.all([n.e('10778'), n.e('27815')]).then(n.bind(n, 766775));
                return (t) =>
                    (0, r.jsx)(e, {
                        ...t,
                        guildTemplate: f
                    });
            });
        },
        p = __OVERLAY__
            ? (0, r.jsx)(o.Z.Button, {
                  isDisabled: !0,
                  color: o.Z.Button.Colors.PRIMARY,
                  children: c.Z.Messages.GUILD_TEMPLATE_EMBED_VIEW_IN_APP
              })
            : (0, r.jsx)(o.Z.Button, {
                  onClick: h,
                  submitting: f.state === u.Rj.ACCEPTING,
                  color: o.Z.Button.Colors.GREEN,
                  children: c.Z.Messages.GUILD_TEMPLATE_OPEN
              });
    return (0, r.jsxs)(o.Z, {
        children: [
            (0, r.jsx)(o.Z.Header, { text: c.Z.Messages.GUILD_TEMPLATE_RESOLVED_EMBED_TITLE }),
            (0, r.jsxs)(o.Z.Body, {
                children: [
                    (0, r.jsxs)('div', {
                        className: _.headerLine,
                        children: [
                            (0, r.jsx)(s.Z, { className: d.icon }),
                            (0, r.jsx)(o.Z.Info, {
                                title: f.name,
                                children: c.Z.Messages.GUILD_TEMPLATE_USAGES.format({ usageCount: String(null !== (t = f.usageCount) && void 0 !== t ? t : 0) })
                            })
                        ]
                    }),
                    p
                ]
            })
        ]
    });
}
