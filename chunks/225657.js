var i = n(200651);
n(192379);
var r = n(442837),
    l = n(481060),
    a = n(700582),
    o = n(987209),
    s = n(699516),
    c = n(594174),
    u = n(51144),
    d = n(388032);
t.Z = (e) => {
    let { selectedSkuId: t, validateSelectedGift: n, className: m } = e,
        f = (0, r.Wu)([s.Z], () => s.Z.getFriendIDs()),
        h = (0, r.Wu)([c.default], () => c.default.filter((e) => f.includes(e.id) && !e.bot), [f]),
        { giftRecipient: p, setGiftRecipient: g } = (0, o.wD)();
    return null == t
        ? null
        : (0, i.jsxs)('div', {
              className: m,
              children: [
                  (0, i.jsx)(l.FormTitle, { children: d.intl.string(d.t.xFn72t) }),
                  (0, i.jsx)(l.SearchableSelect, {
                      placeholder: d.intl.string(d.t.R0vK0N),
                      renderOptionPrefix: (e) =>
                          (null == e ? void 0 : e.value) == null
                              ? null
                              : (0, i.jsx)(a.Z, {
                                    user: e.value,
                                    size: l.AvatarSizes.SIZE_20
                                }),
                      value: p,
                      onChange: (e) => {
                          n(e, t), g(e);
                      },
                      options: h.map((e) => ({
                          value: e,
                          label: ''.concat(u.ZP.getUserTag(e))
                      }))
                  })
              ]
          });
};
