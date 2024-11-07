var i = t(200651);
t(192379);
var a = t(442837),
    r = t(481060),
    o = t(700582),
    l = t(987209),
    s = t(699516),
    d = t(594174),
    c = t(51144),
    u = t(388032);
n.Z = (e) => {
    let { selectedSkuId: n, validateSelectedGift: t, className: f } = e,
        p = (0, a.Wu)([s.Z], () => s.Z.getFriendIDs()),
        m = (0, a.Wu)([d.default], () => d.default.filter((e) => p.includes(e.id) && !e.bot), [p]),
        { giftRecipient: g, setGiftRecipient: _ } = (0, l.wD)();
    return null == n
        ? null
        : (0, i.jsxs)('div', {
              className: f,
              children: [
                  (0, i.jsx)(r.FormTitle, { children: u.intl.string(u.t.xFn72t) }),
                  (0, i.jsx)(r.SearchableSelect, {
                      placeholder: u.intl.string(u.t.R0vK0N),
                      renderOptionPrefix: (e) =>
                          (null == e ? void 0 : e.value) == null
                              ? null
                              : (0, i.jsx)(o.Z, {
                                    user: e.value,
                                    size: r.AvatarSizes.SIZE_20
                                }),
                      value: g,
                      onChange: (e) => {
                          t(e, n), _(e);
                      },
                      options: m.map((e) => ({
                          value: e,
                          label: ''.concat(c.ZP.getUserTag(e))
                      }))
                  })
              ]
          });
};
