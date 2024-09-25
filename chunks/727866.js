var r = n(735250);
n(470079);
var i = n(481060),
    a = n(689938);
let o = (e, t) => {
    let n = {
        display: 'flex',
        gap: '4px',
        margin: '8px 0 4px 0',
        alignItems: 'center'
    };
    return (0, r.jsxs)(
        i.Text,
        {
            color: 'text-danger',
            style: n,
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
};
function s(e) {
    return e ? a.Z.Messages.ROLE_PERMISSIONS_SEND_MESSAGES_WITH_TIV_DESCRIPTION_TEXT_DISABLED.format({ warningHook: o }) : a.Z.Messages.ROLE_PERMISSIONS_SEND_MESSAGES_DESCRIPTION_TEXT;
}
function l(e) {
    return e ? a.Z.Messages.ROLE_PERMISSIONS_READ_MESSAGE_HISTORY_WITH_TIV_DESCRIPTION_TEXT_DISABLED.format({ warningHook: o }) : a.Z.Messages.ROLE_PERMISSIONS_READ_MESSAGE_HISTORY_DESCRIPTION_TEXT;
}
t.Z = {
    getTextInVoiceSendMessageChannelPermissionText: s,
    getTextInVoiceReadMessageHistoryChannelPermissionText: l
};
