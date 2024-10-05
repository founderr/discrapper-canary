var i = n(735250);
n(470079);
var a = n(481060),
    s = n(230711),
    l = n(985754),
    r = n(91802),
    o = n(222727),
    c = n(981631),
    d = n(921944),
    u = n(689938),
    _ = n(569252);
t.Z = (e) => {
    let { notice: t, noticeType: n, dismissCurrentNotice: E } = e,
        I = (null == t ? void 0 : t.metadata.premiumSubscription) != null,
        m = (0, r.n)();
    if (((0, o.U)(c.jXE.NOTIFICATION_BAR, null == m ? void 0 : m.countryCode), null == m)) return null;
    let T = m.countryCode,
        N = m.currency,
        h = m.paymentSourceTypes.length > 0;
    return (0, i.jsxs)(a.Notice, {
        color: I ? a.NoticeColors.BRAND : a.NoticeColors.PREMIUM_TIER_2,
        children: [
            (0, i.jsx)(a.NoticeCloseButton, {
                onClick: () => E(d.L.UNKNOWN),
                noticeType: n
            }),
            !I &&
                (0, i.jsx)(a.NitroWheelIcon, {
                    size: 'md',
                    color: 'currentColor',
                    className: _.premiumIcon
                }),
            (0, l.Gv)(T, N, h, I),
            (0, i.jsx)(a.PrimaryCTANoticeButton, {
                onClick: () => {
                    E(d.L.UNKNOWN), s.Z.open(c.oAB.PREMIUM);
                },
                noticeType: n,
                children: u.Z.Messages.LEARN_MORE
            })
        ]
    });
};
