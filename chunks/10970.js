t.d(s, {
    Z: function () {
        return u;
    }
}),
    t(789020);
var n = t(735250);
t(470079);
var a = t(481060),
    i = t(601911),
    r = t(824856),
    o = t(171246),
    l = t(696906),
    c = t(981631),
    d = t(689938),
    _ = t(438578);
function u(e) {
    let { app: s, currentSubscription: t, alternativeSubscriptions: l, bundleSku: c } = e,
        u = (0, i.y)(s, 100),
        T = (0, o.KK)(c.flags),
        S = T ? a.ServerIcon : a.UserIcon,
        I = T ? d.Z.Messages.APPLICATION_MANAGE_SUBSCRIPTION_SERVER_SUBSCRIPTIONS : d.Z.Messages.APPLICATION_MANAGE_SUBSCRIPTION_PERSONAL_SUBSCRIPTIONS;
    return (0, n.jsxs)('div', {
        children: [
            (0, n.jsxs)('div', {
                className: _.header,
                children: [
                    null != u &&
                        (0, n.jsx)(a.Image, {
                            src: u.href,
                            imageClassName: _.appIcon,
                            width: 48,
                            height: 48
                        }),
                    (0, n.jsxs)('div', {
                        children: [
                            (0, n.jsx)(a.Heading, {
                                variant: 'heading-xl/semibold',
                                children: s.name
                            }),
                            (0, n.jsx)('div', {
                                className: _.subInfo,
                                children: (0, n.jsx)('div', {
                                    children: (0, n.jsxs)(a.Heading, {
                                        variant: 'heading-md/normal',
                                        className: _.subInfoType,
                                        children: [
                                            (0, n.jsx)(S, {
                                                size: 'xs',
                                                color: 'currentColor'
                                            }),
                                            ' ',
                                            I
                                        ]
                                    })
                                })
                            })
                        ]
                    })
                ]
            }),
            (0, n.jsx)(a.Text, {
                variant: 'text-md/normal',
                children: d.Z.Messages.APPLICATION_MANAGE_SUBSCRIPTION_PLAN_SWITCH_NOTICE
            }),
            (0, n.jsxs)('div', {
                className: _.subscriptions,
                children: [
                    (0, n.jsx)(r.Z, {
                        storeListing: t,
                        cta: (0, n.jsx)(a.Text, {
                            variant: 'eyebrow',
                            color: 'text-brand',
                            children: d.Z.Messages.APPLICATION_MANAGE_SUBSCRIPTION_CURRENT_PLAN
                        })
                    }),
                    l.map((e) =>
                        (0, n.jsx)(
                            E,
                            {
                                storeListing: e,
                                bundleSkuId: c.id
                            },
                            e.id
                        )
                    )
                ]
            })
        ]
    });
}
function E(e) {
    let { bundleSkuId: s, storeListing: t } = e,
        { openModal: i } = (0, l.Z)({
            groupListingId: s,
            showBenefitsFirst: !1,
            analyticsLocation: c.Sbl.APP_SUBSCRIPTIONS_MANAGEMENT,
            skuId: t.skuId
        });
    return (0, n.jsx)(
        r.Z,
        {
            storeListing: t,
            cta: (0, n.jsx)(a.Button, {
                size: a.Button.Sizes.SMALL,
                onClick: i,
                children: d.Z.Messages.APPLICATION_MANAGE_SUBSCRIPTION_CHOOSE_PLAN
            })
        },
        t.id
    );
}
