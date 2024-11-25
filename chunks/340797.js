n.d(t, {
    Z: function () {
        return u;
    }
});
var r = n(200651);
n(192379);
var i = n(481060),
    a = n(946273),
    s = n(441110),
    o = n(388032),
    l = n(673094);
function u(e) {
    let { guild: t, message: n } = e;
    return (0, a.vV)(t.id, n.author.id)
        ? (0, r.jsx)(i.Popout, {
              animation: i.Popout.Animation.TRANSLATE,
              align: 'center',
              autoInvert: !0,
              nudgeAlignIntoViewport: !0,
              position: 'right',
              renderPopout: (e) => {
                  let { closePopout: i } = e;
                  return (0, r.jsx)(s.Z, {
                      guild: t,
                      message: n,
                      onClose: i
                  });
              },
              children: (e) => {
                  let { onClick: t } = e;
                  return (0, r.jsx)(i.Clickable, {
                      onClick: t,
                      tag: 'span',
                      children: (0, r.jsx)(i.Tooltip, {
                          text: o.intl.string(o.t['v/OYd3']),
                          children: (e) =>
                              (0, r.jsx)('div', {
                                  className: l.newMemberBadge,
                                  ...e,
                                  children: (0, r.jsx)(i.NewUserIcon, {
                                      size: 'custom',
                                      color: 'currentColor',
                                      width: 20,
                                      height: 20
                                  })
                              })
                      })
                  });
              }
          })
        : null;
}
