n.d(t, {
    h: function () {
        return l;
    }
});
var r = n(735250);
n(470079);
var i = n(481060),
    a = n(671533),
    o = n(981631),
    s = n(279096);
function l(e) {
    let { buttonText: t, onGoBack: n, onDismiss: l, showCloseButton: u } = e;
    return (0, r.jsxs)(i.Notice, {
        className: s.backNotice,
        children: [
            u &&
                (0, r.jsx)(i.NoticeCloseButton, {
                    onClick: l,
                    noticeType: o.kVF.BACK_TO_PREVIOUS_SCREEN
                }),
            (0, r.jsxs)(i.Button, {
                className: s.backButton,
                innerClassName: s.backButtonInner,
                look: i.Button.Looks.OUTLINED,
                color: i.Button.Colors.WHITE,
                size: i.Button.Sizes.NONE,
                onClick: n,
                children: [
                    (0, r.jsx)(a.Z, {
                        width: 16,
                        height: 16,
                        direction: a.Z.Directions.LEFT,
                        className: s.__invalid_backArrow
                    }),
                    t
                ]
            })
        ]
    });
}
