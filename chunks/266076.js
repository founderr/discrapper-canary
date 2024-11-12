var a = i(200651),
    n = i(192379),
    l = i(481060),
    s = i(43267),
    r = i(93687),
    c = i(785232);
t.Z = n.memo(function (e) {
    let { channel: t, size: i, facepileSizeOverride: n, experimentLocation: d, isTyping: o, status: u, className: A, animated: I = !1, ...S } = e,
        { isFacepileEnabled: _ } = r.Z.useExperiment({ location: d }, { autoTrackExposure: !0 });
    return t.recipients.length >= 2 && _ && null == t.icon
        ? (0, a.jsx)(c.Z, {
              'aria-label': S['aria-label'],
              'aria-hidden': S['aria-hidden'],
              className: A,
              recipients: t.recipients,
              size: null != n ? n : i,
              isTyping: o,
              status: u
          })
        : (0, a.jsx)(l.Avatar, {
              'aria-hidden': S['aria-hidden'],
              'aria-label': S['aria-label'],
              className: A,
              size: i,
              src: (0, s.x)(t, 80, I)
          });
});
