var n = i(200651),
    a = i(192379),
    l = i(481060),
    s = i(43267),
    r = i(93687),
    c = i(785232);
t.Z = a.memo(function (e) {
    let { channel: t, size: i, facepileSizeOverride: a, experimentLocation: d, isTyping: o, status: u, className: A, animated: I = !1, ..._ } = e,
        { isFacepileEnabled: S } = r.Z.useExperiment({ location: d }, { autoTrackExposure: !0 });
    return t.recipients.length >= 2 && S && null == t.icon
        ? (0, n.jsx)(c.Z, {
              'aria-label': _['aria-label'],
              'aria-hidden': _['aria-hidden'],
              className: A,
              recipients: t.recipients,
              size: null != a ? a : i,
              isTyping: o,
              status: u
          })
        : (0, n.jsx)(l.Avatar, {
              'aria-hidden': _['aria-hidden'],
              'aria-label': _['aria-label'],
              className: A,
              size: i,
              src: (0, s.x)(t, 80, I)
          });
});
