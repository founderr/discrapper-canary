var l = n(200651),
    a = n(192379),
    i = n(481060),
    r = n(43267),
    s = n(93687),
    o = n(785232);
t.Z = a.memo(function (e) {
    let { channel: t, size: n, facepileSizeOverride: a, experimentLocation: c, isTyping: u, status: d, className: h, animated: f = !1, ..._ } = e,
        { isFacepileEnabled: g } = s.Z.useExperiment({ location: c }, { autoTrackExposure: !0 });
    return t.recipients.length >= 2 && g && null == t.icon
        ? (0, l.jsx)(o.Z, {
              'aria-label': _['aria-label'],
              'aria-hidden': _['aria-hidden'],
              className: h,
              recipients: t.recipients,
              size: null != a ? a : n,
              isTyping: u,
              status: d
          })
        : (0, l.jsx)(i.Avatar, {
              'aria-hidden': _['aria-hidden'],
              'aria-label': _['aria-label'],
              className: h,
              size: n,
              src: (0, r.x)(t, 80, f)
          });
});
