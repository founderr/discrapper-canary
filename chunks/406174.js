n.d(t, {
    Z: function () {
        return u;
    }
});
var i = n(200651);
n(192379);
var s = n(120356),
    r = n.n(s),
    l = n(481060),
    a = n(388032),
    o = n(771039),
    c = n(112841),
    d = n(834300);
function u(e) {
    let { onClickManageSubscription: t, count: n } = e;
    return (0, i.jsxs)('div', {
        children: [
            (0, i.jsx)(l.Heading, {
                variant: 'heading-md/bold',
                children: a.intl.string(a.t['KzCF//'])
            }),
            (0, i.jsx)(l.Spacer, { size: 4 }),
            (0, i.jsx)(l.Text, {
                variant: 'text-md/normal',
                className: o.sectionDescription,
                children: a.intl.string(a.t['3D7qCg'])
            }),
            (0, i.jsx)(l.Spacer, { size: 24 }),
            (0, i.jsxs)('div', {
                className: r()(c.guildBoostingSubscriptionRow, o.card),
                children: [
                    (0, i.jsx)('img', {
                        src: d,
                        alt: '',
                        className: o.handImage
                    }),
                    (0, i.jsxs)('div', {
                        className: o.textContainer,
                        children: [
                            (0, i.jsx)(l.Heading, {
                                variant: 'heading-xl/semibold',
                                className: o.header,
                                children: a.intl.string(a.t['KzCF//'])
                            }),
                            (0, i.jsx)(l.Text, {
                                variant: 'text-md/normal',
                                className: o.description,
                                children: a.intl.format(a.t['m+pcOD'], { numSubscriptions: n })
                            })
                        ]
                    }),
                    (0, i.jsx)(l.Button, {
                        color: l.Button.Colors.CUSTOM,
                        size: l.Button.Sizes.SMALL,
                        className: o.manageSubscriptionsButton,
                        onClick: t,
                        children: a.intl.string(a.t['3a8Xxs'])
                    })
                ]
            })
        ]
    });
}
