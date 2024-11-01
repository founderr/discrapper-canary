var i = n(200651);
n(192379);
var a = n(442837),
    s = n(481060),
    r = n(700582),
    l = n(987209),
    o = n(699516),
    c = n(594174),
    u = n(51144),
    d = n(689938);
t.Z = (e) => {
    let { selectedSkuId: t, validateSelectedGift: n, className: _ } = e,
        E = (0, a.Wu)([o.Z], () => o.Z.getFriendIDs()),
        I = (0, a.Wu)([c.default], () => c.default.filter((e) => E.includes(e.id) && !e.bot), [E]),
        { giftRecipient: m, setGiftRecipient: f } = (0, l.wD)();
    return null == t
        ? null
        : (0, i.jsxs)('div', {
              className: _,
              children: [
                  (0, i.jsx)(s.FormTitle, { children: d.Z.Messages.FORM_LABEL_SEND_TO }),
                  (0, i.jsx)(s.SearchableSelect, {
                      placeholder: d.Z.Messages.COLLECTIBLES_GIFT_RECIPIENT_PLACEHOLDER,
                      renderOptionPrefix: (e) =>
                          (null == e ? void 0 : e.value) == null
                              ? null
                              : (0, i.jsx)(r.Z, {
                                    user: e.value,
                                    size: s.AvatarSizes.SIZE_20
                                }),
                      value: m,
                      onChange: (e) => {
                          n(e, t), f(e);
                      },
                      options: I.map((e) => ({
                          value: e,
                          label: ''.concat(u.ZP.getUserTag(e))
                      }))
                  })
              ]
          });
};
