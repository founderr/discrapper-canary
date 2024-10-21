var t = n(200651);
n(192379);
var l = n(780384),
    i = n(481060),
    C = n(410030),
    r = n(518950),
    a = n(51144),
    o = n(105759),
    _ = n(898969),
    d = n(703614),
    u = n(182294),
    c = n(689938),
    p = n(279521);
s.Z = () => {
    let e = (0, o.Z)(),
        { avatarSrc: s, eventHandlers: n } = (0, r.Z)({
            user: e,
            size: u.EF.SIZE_32,
            animateOnHover: !0
        }),
        x = (0, C.Fg)(),
        L = (0, l.ap)(x),
        I = a.ZP.getName(e),
        E = L ? _.Z : d.Z;
    return null == e
        ? null
        : (0, t.jsxs)('div', {
              className: p.attributionBannerContainer,
              children: [
                  (0, t.jsx)('div', {
                      className: p.avatarContainer,
                      children: (0, t.jsx)(i.Avatar, {
                          src: s,
                          'aria-label': e.username,
                          size: u.EF.SIZE_32,
                          ...n
                      })
                  }),
                  (0, t.jsx)(i.Text, {
                      variant: 'text-xs/bold',
                      className: p.bannerHeader,
                      children: c.Z.Messages.REFERRAL_PRORAM_PAYMENT_MODAL_BANNER.format({ userName: I })
                  }),
                  (0, t.jsx)(E, { className: p.bannerIcon })
              ]
          });
};
