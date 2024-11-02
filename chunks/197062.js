var r = n(200651);
n(192379);
var i = n(481060),
    a = n(388032);
let s = (e, t) =>
    (0, r.jsxs)(
        i.Text,
        {
            color: 'text-danger',
            style: {
                display: 'flex',
                gap: '4px',
                margin: '8px 0 4px 0',
                alignItems: 'center'
            },
            variant: 'text-sm/normal',
            children: [
                (0, r.jsx)(i.CircleWarningIcon, {
                    size: 'custom',
                    color: 'currentColor',
                    width: 14,
                    height: 14
                }),
                e
            ]
        },
        t
    );
t.Z = {
    getForumChannelPermissionText: function () {
        return a.intl.format(a.t.zlXUVV, { warningHook: s });
    }
};
