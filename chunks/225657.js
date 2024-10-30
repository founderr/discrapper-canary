var i = n(200651);
n(192379);
var a = n(442837),
    s = n(481060),
    r = n(700582),
    l = n(987209),
    o = n(699516),
    c = n(594174),
    u = n(51144),
    d = n(335131),
    _ = n(689938);
t.Z = (e) => {
    let { selectedSkuId: t, className: n } = e,
        E = (0, a.Wu)([o.Z], () => o.Z.getFriendIDs()),
        I = (0, a.Wu)([c.default], () => c.default.filter((e) => E.includes(e.id) && !e.bot), [E]),
        { giftRecipient: m, setGiftRecipient: f, giftRecipientError: h, setGiftRecipientError: T, setValidatingGiftRecipient: N } = (0, l.wD)();
    if (null == t) return null;
    let p = async (e) => {
        N(!0), null != h && T(), f(e), !(await (0, d.B1)(e.id, t)) && T(_.Z.Messages.COLLECTIBLES_GIFT_SEND_ERROR_OWNED), N(!1);
    };
    return (0, i.jsxs)('div', {
        className: n,
        children: [
            (0, i.jsx)(s.FormTitle, { children: _.Z.Messages.FORM_LABEL_SEND_TO }),
            (0, i.jsx)(s.SearchableSelect, {
                placeholder: _.Z.Messages.COLLECTIBLES_GIFT_RECIPIENT_PLACEHOLDER,
                renderOptionPrefix: (e) =>
                    (null == e ? void 0 : e.value) == null
                        ? null
                        : (0, i.jsx)(r.Z, {
                              user: e.value,
                              size: s.AvatarSizes.SIZE_20
                          }),
                value: m,
                onChange: p,
                options: I.map((e) => ({
                    value: e,
                    label: ''.concat(u.ZP.getUserTag(e))
                }))
            })
        ]
    });
};
