n.d(t, {
    Z: function () {
        return u;
    }
});
var r = n(735250);
n(470079);
var i = n(481060),
    a = n(904245),
    o = n(739566),
    s = n(834129),
    l = n(689938);
function u(e) {
    let { message: t, usernameHook: u, onClickPins: c, compact: d } = e,
        _ = (0, o.ZP)(t),
        E = _.nick,
        f = u(_),
        h = () => {
            if (null == t.messageReference) return;
            let { channel_id: e, message_id: n } = t.messageReference;
            a.Z.jumpToMessage({
                channelId: e,
                messageId: n,
                flash: !0
            });
        },
        p = () =>
            null != t.messageReference
                ? null == c
                    ? l.Z.Messages.SYSTEM_MESSAGE_PINNED_MESSAGE_NO_CTA_FORMATTED_WITH_MESSAGE_HOOK.format({
                          usernameHook: f,
                          username: E,
                          messageOnClick: h
                      })
                    : l.Z.Messages.SYSTEM_MESSAGE_PINNED_MESSAGE_WITH_MESSAGE.format({
                          usernameHook: f,
                          username: E,
                          pinsActionOnClick: c,
                          messageOnClick: h
                      })
                : null == c
                  ? l.Z.Messages.SYSTEM_MESSAGE_PINNED_MESSAGE_NO_CTA_FORMATTED_HOOK.format({
                        usernameHook: f,
                        username: E
                    })
                  : l.Z.Messages.SYSTEM_MESSAGE_PINNED_MESSAGE.format({
                        usernameHook: f,
                        username: E,
                        pinsActionOnClick: c
                    }),
        m = (0, i.useRedesignIconContext)().enabled
            ? {
                  iconNode: (0, r.jsx)(i.PinIcon, {
                      size: 'sm',
                      color: 'currentColor'
                  })
              }
            : { icon: n(879066) };
    return (0, r.jsx)(s.Z, {
        ...m,
        timestamp: t.timestamp,
        compact: d,
        children: p()
    });
}
