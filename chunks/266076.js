var i = n(200651),
    r = n(192379),
    l = n(481060),
    a = n(43267),
    o = n(93687),
    s = n(785232);
t.Z = r.memo(function (e) {
    let { channel: t, size: n, facepileSizeOverride: r, experimentLocation: c, isTyping: u, status: d, className: m, animated: h = !1, ...f } = e,
        { isFacepileEnabled: p } = o.Z.useExperiment({ location: c }, { autoTrackExposure: !0 });
    return t.recipients.length >= 2 && p && null == t.icon
        ? (0, i.jsx)(s.Z, {
              'aria-label': f['aria-label'],
              'aria-hidden': f['aria-hidden'],
              className: m,
              recipients: t.recipients,
              size: null != r ? r : n,
              isTyping: u,
              status: d
          })
        : (0, i.jsx)(l.Avatar, {
              'aria-hidden': f['aria-hidden'],
              'aria-label': f['aria-label'],
              className: m,
              size: n,
              src: (0, a.x)(t, 80, h)
          });
});
