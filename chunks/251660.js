t.d(n, {
    s: function () {
        return o;
    }
});
var i = t(200651);
t(192379);
var l = t(481060),
    r = t(700582),
    s = t(51144),
    a = t(388032),
    c = t(294188);
let o = (e) => {
    let { giftRecipient: n } = e;
    return null == n
        ? null
        : (0, i.jsxs)('div', {
              className: c.content,
              children: [
                  (0, i.jsx)(l.FormTitle, { children: a.intl.string(a.t.xFn72t) }),
                  (0, i.jsxs)('div', {
                      className: c.giftRecipientInfo,
                      children: [
                          (0, i.jsx)(r.Z, {
                              user: n,
                              className: c.__invalid_giftRecipient,
                              size: l.AvatarSizes.SIZE_20
                          }),
                          (0, i.jsx)(l.Heading, {
                              className: c.giftRecipientName,
                              variant: 'text-md/normal',
                              children: s.ZP.getName(n)
                          }),
                          (0, i.jsx)(l.Heading, {
                              className: c.giftRecipientTag,
                              variant: 'text-md/normal',
                              children: s.ZP.getUserTag(n)
                          })
                      ]
                  })
              ]
          });
};
