"use strict";
n.d(t, {
  Z: function() {
    return c
  }
});
var i = n(735250);
n(470079);
var r = n(481060),
  s = n(842146),
  o = n(293177),
  a = n(349407),
  l = n(49012),
  u = n(202120),
  _ = n(981631);

function c(e) {
  let {
    platformType: t,
    location: c,
    overrideUrl: d,
    successRedirect: E
  } = e;
  if (t === _.ABu.LEAGUE_OF_LEGENDS && (t = _.ABu.RIOT_GAMES), t === _.ABu.CRUNCHYROLL) {
    s.K([null != c ? c : "unknown"]);
    return
  }
  if (t === _.ABu.XBOX) {
    a.K([null != c ? c : "unknown"]);
    return
  }
  if (t === _.ABu.PLAYSTATION || t === _.ABu.PLAYSTATION_STAGING) {
    o.K([null != c ? c : "unknown"], t);
    return
  }
  if (t === _.ABu.DOMAIN) {
    (0, r.openModalLazy)(async () => {
      let {
        default: e
      } = await n.e("64941").then(n.bind(n, 414402));
      return t => (0, i.jsx)(e, {
        analyticsLocation: [null != c ? c : "unknown"],
        ...t
      })
    });
    return
  }
  if (null != d) {
    (0, l.q)({
      shouldConfirm: !0,
      href: d,
      onConfirm: () => {
        (0, u.H)(t, {
          location: c,
          successRedirect: E
        }, d)
      }
    });
    return
  }(0, u.H)(t, {
    location: c,
    successRedirect: E
  })
}