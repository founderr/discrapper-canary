n.r(o), n(610138), n(216116), n(78328), n(815648), n(47120);
var t = n(200651);
n(192379);
var r = n(481060),
    s = n(457330),
    a = n(726542),
    i = n(77987),
    l = n(787025),
    c = n(656649),
    u = n(689938),
    d = n(335975);
o.default = (0, i.e)(function (e) {
    let { match: o } = e,
        n = o.params.type,
        i = a.Z.get(n);
    if (null == i)
        return (0, t.jsx)(l.G, {
            children: (0, t.jsx)(r.Text, {
                className: d.error,
                variant: 'text-md/normal',
                color: 'text-warning',
                children: u.Z.Messages.CONNECTED_ACCOUNT_AUTHORIZATION_PLATFORM_UNKNOWN
            })
        });
    async function f() {
        var e, o, t;
        let r = new URLSearchParams(window.location.search),
            { body: a } = await s.Z.authorize(n, {
                location: 'Connection Intermediate',
                twoWayLink: null != r.get('two_way_link') ? 'true' === r.get('two_way_link') : void 0,
                twoWayLinkType: null !== (e = r.get('two_way_link_type')) && void 0 !== e ? e : void 0,
                userCode: null !== (o = r.get('two_way_user_code')) && void 0 !== o ? o : void 0,
                successRedirect: null !== (t = r.get('success_redirect')) && void 0 !== t ? t : void 0
            });
        window.location = a.url;
    }
    return (0, t.jsx)(l.G, {
        wrapperClassName: d.wrapper,
        children: (0, t.jsxs)('div', {
            className: d.root,
            children: [
                (0, t.jsx)(c.KJ, {
                    className: d.logos,
                    platform: i
                }),
                (0, t.jsx)(r.Heading, {
                    variant: 'text-lg/bold',
                    className: d.header,
                    children: u.Z.Messages.CONNECTED_ACCOUNT_AUTHORIZATION_CONTINUE_HEADER.format({ provider: i.name })
                }),
                (0, t.jsx)(r.Text, {
                    variant: 'text-md/normal',
                    className: d.body,
                    children: u.Z.Messages.CONNECTED_ACCOUNT_AUTHORIZATION_CONTINUE_DESCRIPTION.format({ provider: i.name })
                }),
                (0, t.jsx)(r.Button, {
                    size: r.Button.Sizes.LARGE,
                    color: r.Button.Colors.BRAND,
                    onClick: f,
                    children: u.Z.Messages.CONNECTED_ACCOUNT_AUTHORIZATION_CONTINUE_BUTTON
                })
            ]
        })
    });
});
