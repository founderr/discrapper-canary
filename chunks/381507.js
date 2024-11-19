var i = n(200651);
n(192379);
var l = n(780384),
    s = n(481060),
    r = n(410030),
    C = n(518950),
    a = n(51144),
    o = n(105759),
    d = n(898969),
    u = n(703614),
    c = n(182294),
    p = n(388032),
    x = n(377040);
t.Z = () => {
    let e = (0, o.Z)(),
        { avatarSrc: t, eventHandlers: n } = (0, C.Z)({
            user: e,
            size: c.EF.SIZE_32,
            animateOnHover: !0
        }),
        _ = (0, r.Fg)(),
        h = (0, l.ap)(_),
        f = a.ZP.getName(e),
        j = h ? d.Z : u.Z;
    return null == e
        ? null
        : (0, i.jsxs)('div', {
              className: x.attributionBannerContainer,
              children: [
                  (0, i.jsx)('div', {
                      className: x.avatarContainer,
                      children: (0, i.jsx)(s.Avatar, {
                          src: t,
                          'aria-label': e.username,
                          size: c.EF.SIZE_32,
                          ...n
                      })
                  }),
                  (0, i.jsx)(s.Text, {
                      variant: 'text-xs/bold',
                      className: x.bannerHeader,
                      children: p.intl.format(p.t.oxhCOj, { userName: f })
                  }),
                  (0, i.jsx)(j, { className: x.bannerIcon })
              ]
          });
};
