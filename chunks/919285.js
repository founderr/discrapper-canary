"use strict";
a.r(t), a.d(t, {
  default: function() {
    return d
  }
});
var n = a("735250");
a("470079");
var s = a("82950"),
  l = a("434404"),
  i = a("929507"),
  r = a("981631"),
  o = a("689938"),
  u = a("943935");

function d(e) {
  let {
    guild: t
  } = e, a = () => i.default.dismissNotice(t.id);
  return (0, n.jsx)(s.default, {
    guild: t,
    onDismissed: a,
    cta: o.default.Messages.CHECK_IT_OUT,
    message: o.default.Messages.COMMANDS_SCOPE_MIGRATION_ADMIN_NOTICE.format(),
    type: r.ChannelNoticeTypes.COMMANDS_MIGRATION,
    image: u,
    onClick: () => {
      a(), l.default.open(t.id, r.GuildSettingsSections.INTEGRATIONS)
    },
    imageMarginTop: 15,
    imageMarginX: 22
  })
}