var l = n(735250),
    a = n(470079),
    s = n(481060),
    i = n(43267),
    r = n(93687),
    o = n(785232);
t.Z = a.memo(function (e) {
    let { channel: t, size: n, facepileSizeOverride: a, experimentLocation: c, isTyping: u, status: d, className: h, animated: _ = !1, ...f } = e,
        { isFacepileEnabled: E } = r.Z.useExperiment({ location: c }, { autoTrackExposure: !0 });
    return t.recipients.length >= 2 && E && null == t.icon
        ? (0, l.jsx)(o.Z, {
              'aria-label': f['aria-label'],
              'aria-hidden': f['aria-hidden'],
              className: h,
              recipients: t.recipients,
              size: null != a ? a : n,
              isTyping: u,
              status: d
          })
        : (0, l.jsx)(s.Avatar, {
              'aria-hidden': f['aria-hidden'],
              'aria-label': f['aria-label'],
              className: h,
              size: n,
              src: (0, i.x)(t, 80, _)
          });
});
