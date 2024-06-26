"use strict";
var i = n(735250),
  r = n(470079),
  s = n(335854),
  o = n(481060),
  a = n(626135),
  l = n(981631),
  u = n(689938);
t.Z = e => {
  let {
    href: t,
    className: n,
    iconClassName: _,
    rel: c,
    target: d,
    mimeType: E,
    fileName: I,
    focusProps: T,
    onClick: h,
    ...f
  } = e, S = r.useMemo(() => s.X.getDefaultLinkInterceptor(t), [t]), N = r.useCallback(e => {
    a.default.track(l.rMx.MEDIA_DOWNLOAD_BUTTON_TAPPED, {
      attachment_type: null == E ? void 0 : E[0],
      attachment_subtype: null == E ? void 0 : E[1]
    }), null == h || h(), null == S || S(e)
  }, [S, E, h]);
  return null != I ? (0, i.jsx)(o.Anchor, {
    href: t,
    onClick: N,
    target: d,
    rel: c,
    className: n,
    "aria-label": u.Z.Messages.DOWNLOAD,
    focusProps: T,
    ...f,
    children: I
  }) : (0, i.jsx)(o.Anchor, {
    href: t,
    onClick: N,
    target: d,
    rel: c,
    className: n,
    "aria-label": u.Z.Messages.DOWNLOAD,
    focusProps: T,
    ...f,
    children: (0, i.jsx)(o.DownloadIcon, {
      size: "md",
      color: "currentColor",
      className: _
    })
  })
}