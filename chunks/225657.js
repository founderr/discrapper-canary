var i = t(200651);
t(192379);
var l = t(442837),
    r = t(481060),
    a = t(700582),
    s = t(987209),
    o = t(699516),
    d = t(594174),
    c = t(51144),
    u = t(388032);
n.Z = (e) => {
    let { selectedSkuId: n, validateSelectedGift: t, className: h } = e,
        m = (0, l.Wu)([o.Z], () => o.Z.getFriendIDs()),
        f = (0, l.Wu)([d.default], () => d.default.filter((e) => m.includes(e.id) && !e.bot), [m]),
        { giftRecipient: x, setGiftRecipient: v } = (0, s.wD)();
    return null == n
        ? null
        : (0, i.jsxs)('div', {
              className: h,
              children: [
                  (0, i.jsx)(r.FormTitle, { children: u.intl.string(u.t.xFn72t) }),
                  (0, i.jsx)(r.SearchableSelect, {
                      placeholder: u.intl.string(u.t.R0vK0N),
                      renderOptionPrefix: (e) =>
                          (null == e ? void 0 : e.value) == null
                              ? null
                              : (0, i.jsx)(a.Z, {
                                    user: e.value,
                                    size: r.AvatarSizes.SIZE_20
                                }),
                      value: x,
                      onChange: (e) => {
                          t(e, n), v(e);
                      },
                      options: f.map((e) => ({
                          value: e,
                          label: ''.concat(c.ZP.getUserTag(e))
                      }))
                  })
              ]
          });
};
