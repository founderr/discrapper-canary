var r = t(735250);
t(470079);
var a = t(780384),
    i = t(481060),
    s = t(410030),
    o = t(518950),
    l = t(51144),
    C = t(105759),
    d = t(898969),
    c = t(703614),
    u = t(182294),
    _ = t(689938),
    p = t(279521);
n.Z = () => {
    let e = (0, C.Z)(),
        { avatarSrc: n, eventHandlers: t } = (0, o.Z)({
            user: e,
            size: u.EF.SIZE_32,
            animateOnHover: !0
        }),
        f = (0, s.Fg)(),
        h = (0, a.ap)(f),
        x = l.ZP.getName(e),
        L = h ? d.Z : c.Z;
    return null == e
        ? null
        : (0, r.jsxs)('div', {
              className: p.attributionBannerContainer,
              children: [
                  (0, r.jsx)('div', {
                      className: p.avatarContainer,
                      children: (0, r.jsx)(i.Avatar, {
                          src: n,
                          'aria-label': e.username,
                          size: u.EF.SIZE_32,
                          ...t
                      })
                  }),
                  (0, r.jsx)(i.Text, {
                      variant: 'text-xs/bold',
                      className: p.bannerHeader,
                      children: _.Z.Messages.REFERRAL_PRORAM_PAYMENT_MODAL_BANNER.format({ userName: x })
                  }),
                  (0, r.jsx)(L, { className: p.bannerIcon })
              ]
          });
};
