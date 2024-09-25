n.d(t, {
    Z: function () {
        return u;
    }
});
var r = n(735250);
n(470079);
var i = n(481060),
    l = n(39604),
    s = n(176127),
    a = n(689938),
    o = n(516707);
function u(e) {
    let { onOpenClipsGallery: t, clipIconRef: n, lastClipsSession: u } = e;
    return (0, r.jsxs)(i.TooltipLayer, {
        tooltipClassName: o.reminderTooltip,
        tooltipContentClassName: o.tooltipContent,
        targetElementRef: { current: n },
        position: 'bottom',
        color: i.TooltipColors.PRIMARY,
        children: [
            (0, r.jsx)(s.Z, {}),
            (0, r.jsx)(i.Heading, {
                variant: 'heading-md/extrabold',
                children: a.Z.Messages.CLIPS_YOU_HAVE_NEW_CLIPS.format({ count: u.newClipIds.length })
            }),
            (0, r.jsxs)('div', {
                className: o.buttonContainer,
                children: [
                    (0, r.jsx)(i.Button, {
                        color: i.Button.Colors.TRANSPARENT,
                        onClick: l.eL,
                        children: a.Z.Messages.DISMISS
                    }),
                    (0, r.jsx)(i.Button, {
                        color: i.Button.Colors.BRAND,
                        onClick: t,
                        children: a.Z.Messages.CLIPS_REVIEW_NOW
                    })
                ]
            })
        ]
    });
}
