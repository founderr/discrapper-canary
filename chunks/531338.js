t.r(s), t(610138), t(216116), t(78328), t(815648), t(47120);
var n = t(735250);
t(470079);
var r = t(481060),
    a = t(457330),
    o = t(417663),
    i = t(726542),
    l = t(77987),
    c = t(787025),
    d = t(689938),
    u = t(460114);
s.default = (0, l.e)(function (e) {
    let { match: s } = e,
        t = s.params.type,
        l = i.Z.get(t);
    if (null == l)
        return (0, n.jsx)(c.G, {
            children: (0, n.jsx)(r.Text, {
                className: u.error,
                variant: 'text-md/normal',
                color: 'text-warning',
                children: d.Z.Messages.CONNECTED_ACCOUNT_AUTHORIZATION_PLATFORM_UNKNOWN
            })
        });
    async function N() {
        var e, s, n;
        let r = new URLSearchParams(window.location.search),
            { body: o } = await a.Z.authorize(t, {
                location: 'Connection Intermediate',
                twoWayLink: null != r.get('two_way_link') ? 'true' === r.get('two_way_link') : void 0,
                twoWayLinkType: null !== (e = r.get('two_way_link_type')) && void 0 !== e ? e : void 0,
                userCode: null !== (s = r.get('two_way_user_code')) && void 0 !== s ? s : void 0,
                successRedirect: null !== (n = r.get('success_redirect')) && void 0 !== n ? n : void 0
            });
        window.location = o.url;
    }
    return (0, n.jsx)(c.G, {
        wrapperClassName: u.wrapper,
        children: (0, n.jsxs)('div', {
            className: u.root,
            children: [
                (0, n.jsx)(o.LinkPlatformLogo, {
                    className: u.logos,
                    platform: l
                }),
                (0, n.jsx)(r.Heading, {
                    variant: 'text-lg/bold',
                    className: u.header,
                    children: d.Z.Messages.CONNECTED_ACCOUNT_AUTHORIZATION_CONTINUE_HEADER.format({ provider: l.name })
                }),
                (0, n.jsx)(r.Text, {
                    variant: 'text-md/normal',
                    className: u.body,
                    children: d.Z.Messages.CONNECTED_ACCOUNT_AUTHORIZATION_CONTINUE_DESCRIPTION.format({ provider: l.name })
                }),
                (0, n.jsx)(r.Button, {
                    size: r.Button.Sizes.LARGE,
                    color: r.Button.Colors.BRAND,
                    onClick: N,
                    children: d.Z.Messages.CONNECTED_ACCOUNT_AUTHORIZATION_CONTINUE_BUTTON
                })
            ]
        })
    });
});
