var s = t(735250);
t(470079);
var a = t(442837),
    l = t(481060),
    r = t(700582),
    i = t(987209),
    o = t(699516),
    d = t(594174),
    c = t(51144),
    u = t(335131),
    E = t(689938);
n.Z = (e) => {
    let { selectedSkuId: n, className: t } = e,
        h = (0, a.Wu)([o.Z], () => o.Z.getFriendIDs()),
        C = (0, a.Wu)([d.default], () => d.default.filter((e) => h.includes(e.id) && !e.bot), [h]),
        { giftRecipient: f, setGiftRecipient: x, giftRecipientError: p, setGiftRecipientError: m, setValidatingGiftRecipient: T } = (0, i.wD)();
    if (null == n) return null;
    let I = async (e) => {
        T(!0), null != p && m(), x(e), !(await (0, u.B1)(e.id, n)) && m(E.Z.Messages.COLLECTIBLES_GIFT_SEND_ERROR_OWNED), T(!1);
    };
    return (0, s.jsxs)('div', {
        className: t,
        children: [
            (0, s.jsx)(l.FormTitle, { children: E.Z.Messages.FORM_LABEL_SEND_TO }),
            (0, s.jsx)(l.SearchableSelect, {
                placeholder: E.Z.Messages.COLLECTIBLES_GIFT_RECIPIENT_PLACEHOLDER,
                renderOptionPrefix: (e) =>
                    (null == e ? void 0 : e.value) == null
                        ? null
                        : (0, s.jsx)(r.Z, {
                              user: e.value,
                              size: l.AvatarSizes.SIZE_20
                          }),
                value: f,
                onChange: I,
                options: C.map((e) => ({
                    value: e,
                    label: ''.concat(c.ZP.getUserTag(e))
                }))
            })
        ]
    });
};
