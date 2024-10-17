s.d(n, {
    s: function () {
        return o;
    }
});
var t = s(735250);
s(470079);
var l = s(481060),
    i = s(700582),
    r = s(51144),
    a = s(689938),
    c = s(294188);
let o = (e) => {
    let { giftRecipient: n } = e;
    return null == n
        ? null
        : (0, t.jsxs)('div', {
              className: c.content,
              children: [
                  (0, t.jsx)(l.FormTitle, { children: a.Z.Messages.FORM_LABEL_SEND_TO }),
                  (0, t.jsxs)('div', {
                      className: c.giftRecipientInfo,
                      children: [
                          (0, t.jsx)(i.Z, {
                              user: n,
                              className: c.__invalid_giftRecipient,
                              size: l.AvatarSizes.SIZE_20
                          }),
                          (0, t.jsx)(l.Heading, {
                              className: c.giftRecipientName,
                              variant: 'text-md/normal',
                              children: r.ZP.getName(n)
                          }),
                          (0, t.jsx)(l.Heading, {
                              className: c.giftRecipientTag,
                              variant: 'text-md/normal',
                              children: r.ZP.getUserTag(n)
                          })
                      ]
                  })
              ]
          });
};
