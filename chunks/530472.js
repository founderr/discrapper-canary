n.d(t, {
    Z: function () {
        return u;
    }
});
var r = n(735250);
n(470079);
var i = n(481060),
    a = n(824203),
    o = n(981631),
    s = n(689938),
    l = n(886748);
function u(e) {
    var t;
    let n,
        { message: u, onDeleteMessage: c, children: d } = e,
        _ = null === (t = u.interactionMetadata) || void 0 === t ? void 0 : t.ephemerality_reason,
        E = () => c(u, !0);
    if (null != _) {
        let e = (0, a.in)(_);
        n = (0, r.jsx)('div', {
            className: l.userAppsBetaContent,
            children: s.Z.Messages.APPLICATION_COMMAND_USER_INSTALL_EPHEMERAL_WITH_REASON.format({
                handleDelete: E,
                reason: e
            })
        });
    } else
        n =
            u.type === o.uaV.STAGE_RAISE_HAND
                ? s.Z.Messages.STAGE_SYSTEM_MESSAGE_MODERATOR_VISIBILITY_MESSAGE.format({ handleDelete: E })
                : s.Z.Messages.ONLY_YOU_CAN_SEE_AND_DELETE_THESE.format({
                      count: 1,
                      countMessages: 1,
                      handleDelete: E
                  });
    return (0, r.jsxs)('div', {
        className: l.ephemeralMessage,
        onClick: (e) => e.stopPropagation(),
        children: [
            (0, r.jsx)(i.EyeIcon, {
                size: 'xs',
                color: 'currentColor',
                className: l.icon
            }),
            n,
            d
        ]
    });
}
