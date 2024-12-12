var i = r(200651),
    a = r(192379),
    s = r(335854),
    o = r(481060),
    l = r(626135),
    u = r(981631),
    c = r(388032);
let d = (e) => {
    let { href: n, className: r, iconClassName: d, rel: f, target: _, mimeType: h, fileName: p, focusProps: m, onClick: g, ...E } = e,
        v = a.useMemo(() => s.X.getDefaultLinkInterceptor(n), [n]),
        I = a.useCallback(
            (e) => {
                l.default.track(u.rMx.MEDIA_DOWNLOAD_BUTTON_TAPPED, {
                    attachment_type: null == h ? void 0 : h[0],
                    attachment_subtype: null == h ? void 0 : h[1]
                }),
                    null == g || g(),
                    null == v || v(e);
            },
            [v, h, g]
        );
    return null != p
        ? (0, i.jsx)(o.Anchor, {
              href: n,
              onClick: I,
              target: _,
              rel: f,
              className: r,
              'aria-label': c.intl.string(c.t['1WjMbG']),
              focusProps: m,
              ...E,
              children: p
          })
        : (0, i.jsx)(o.Anchor, {
              href: n,
              onClick: I,
              target: _,
              rel: f,
              className: r,
              'aria-label': c.intl.string(c.t['1WjMbG']),
              focusProps: m,
              ...E,
              children: (0, i.jsx)(o.DownloadIcon, {
                  size: 'md',
                  color: 'currentColor',
                  className: d
              })
          });
};
n.Z = d;
