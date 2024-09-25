var r = n(735250),
    i = n(470079),
    a = n(481060),
    o = n(43267),
    s = n(93687),
    l = n(785232);
function u(e) {
    let { channel: t, size: n, facepileSizeOverride: i, experimentLocation: u, isTyping: c, status: d, className: _, animated: E = !1, ...f } = e,
        { isFacepileEnabled: h } = s.Z.useExperiment({ location: u }, { autoTrackExposure: !0 });
    return t.recipients.length >= 2 && h && null == t.icon
        ? (0, r.jsx)(l.Z, {
              'aria-label': f['aria-label'],
              'aria-hidden': f['aria-hidden'],
              className: _,
              recipients: t.recipients,
              size: null != i ? i : n,
              isTyping: c,
              status: d
          })
        : (0, r.jsx)(a.Avatar, {
              'aria-hidden': f['aria-hidden'],
              'aria-label': f['aria-label'],
              className: _,
              size: n,
              src: (0, o.x)(t, 80, E)
          });
}
t.Z = i.memo(u);
