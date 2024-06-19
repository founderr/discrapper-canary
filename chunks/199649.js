n.d(t, {
  Z: function() {
    return f
  }
});
var l = n(735250);
n(470079);
var i = n(442837),
  s = n(481060),
  a = n(194359),
  r = n(631937),
  o = n(702321),
  c = n(377171),
  u = n(699516),
  d = n(626135),
  h = n(63063),
  m = n(862679),
  p = n(981631),
  E = n(596401),
  g = n(689938);

function f(e) {
  let {
    channel: t,
    children: f
  } = e, C = (0, i.e7)([u.Z], () => u.Z.isBlocked(t.getRecipientId()));
  (0, r.Z)(t.id);
  let _ = (0, o.Z)(t.id),
    I = t.isSystemDM(),
    x = C && !I && !t.isMultiUserDM(),
    T = {};
  if (I) {
    let e = _ ? (0, l.jsxs)(l.Fragment, {
      children: [g.Z.Messages.SYSTEM_DM_OPEN_BLOG, (0, l.jsx)(s.WindowLaunchIcon, {
        size: "xs",
        color: c.Z.HEADER_PRIMARY
      })]
    }) : g.Z.Messages.LEARN_MORE;
    T.message = g.Z.Messages.SYSTEM_DM_CHANNEL_DESCRIPTION, T.subtitle = g.Z.Messages.SYSTEM_DM_CHANNEL_DESCRIPTION_SUBTEXT, T.buttonText = e, T.onButtonClick = () => {
      if (_) {
        open(E.D2), d.default.track(p.rMx.CHANGE_LOG_CTA_CLICKED, {
          cta_type: "chat_blocker",
          target: E.D2
        });
        return
      }
      open(h.Z.getArticleURL(p.BhN.SYSTEM_DMS))
    }, T.imageSrc = n(780961)
  } else x && (T.message = g.Z.Messages.DM_VERIFICATION_TEXT_BLOCKED, T.buttonText = g.Z.Messages.UNBLOCK, T.onButtonClick = () => {
    a.Z.unblockUser(t.getRecipientId())
  });
  return (0, l.jsx)(m.Z, {
    ...T,
    children: f
  })
}