n.d(t, {
    Z: function () {
        return s;
    }
});
var r = n(735250);
n(470079);
var i = n(481060),
    a = n(689938),
    o = n(128037);
function s(e) {
    let { message: t } = e,
        s = () => {
            (0, i.openModalLazy)(async () => {
                let { default: e } = await n.e('14021').then(n.bind(n, 910673));
                return (n) =>
                    (0, r.jsx)(e, {
                        channelId: t.channel_id,
                        messageId: t.id,
                        ...n
                    });
            });
        };
    return (0, r.jsxs)(i.Clickable, {
        onClick: s,
        className: o.accessory,
        children: [
            (0, r.jsx)(i.CircleInformationIcon, {
                size: 'xs',
                color: 'currentColor'
            }),
            (0, r.jsx)(i.Text, {
                variant: 'text-xs/normal',
                className: o.accessoryText,
                children: a.Z.Messages.OBSCURED_CONTENT_LEARN_MORE_MESSAGE_LABEL
            })
        ]
    });
}
