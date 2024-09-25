var r = n(735250);
n(470079);
var i = n(481060),
    a = n(230711),
    o = n(985754),
    s = n(91802),
    l = n(222727),
    u = n(981631),
    c = n(921944),
    d = n(689938),
    _ = n(569252);
let E = (e) => {
    let { notice: t, noticeType: n, dismissCurrentNotice: E } = e,
        f = (null == t ? void 0 : t.metadata.premiumSubscription) != null,
        h = (0, s.n)();
    if (((0, l.U)(u.jXE.NOTIFICATION_BAR, null == h ? void 0 : h.countryCode), null == h)) return null;
    let p = h.countryCode,
        m = h.currency,
        I = h.paymentSourceTypes.length > 0;
    return (0, r.jsxs)(i.Notice, {
        color: f ? i.NoticeColors.BRAND : i.NoticeColors.PREMIUM_TIER_2,
        children: [
            (0, r.jsx)(i.NoticeCloseButton, {
                onClick: () => E(c.L.UNKNOWN),
                noticeType: n
            }),
            !f &&
                (0, r.jsx)(i.NitroWheelIcon, {
                    size: 'md',
                    color: 'currentColor',
                    className: _.premiumIcon
                }),
            (0, o.Gv)(p, m, I, f),
            (0, r.jsx)(i.PrimaryCTANoticeButton, {
                onClick: () => {
                    E(c.L.UNKNOWN), a.Z.open(u.oAB.PREMIUM);
                },
                noticeType: n,
                children: d.Z.Messages.LEARN_MORE
            })
        ]
    });
};
t.Z = E;
