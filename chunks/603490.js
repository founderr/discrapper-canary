n.d(t, {
    Z: function () {
        return o;
    }
});
var i = n(735250);
n(470079);
var s = n(873546),
    a = n(481060),
    l = n(373662),
    r = n(689938);
function o(e) {
    let { channel: t, message: n, togglePopout: o, renderEmojiPicker: c, shouldShow: u } = e;
    return (0, i.jsx)(a.Popout, {
        animation: a.Popout.Animation.FADE,
        renderPopout: (e) => {
            let { closePopout: i } = e;
            return c(t, n, i, !1);
        },
        shouldShow: u,
        onRequestClose: o,
        position: s.tq ? 'top' : 'left',
        align: s.tq ? 'center' : 'top',
        children: () =>
            (0, i.jsx)(
                l.sF,
                {
                    label: r.Z.Messages.ADD_REACTION,
                    icon: a.ReactionIcon,
                    onClick: o
                },
                'add-reaction'
            )
    });
}
