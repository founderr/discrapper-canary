"use strict";
a.r(t), a.d(t, {
  default: function() {
    return d
  }
});
var n = a("735250");
a("470079");
var s = a("434404"),
  l = a("970731"),
  i = a("981631"),
  r = a("689938"),
  o = a("410646"),
  u = a("687351");

function d(e) {
  let {
    guild: t,
    markAsDismissed: a
  } = e;
  return (0, n.jsx)(l.default, {
    header: r.default.Messages.DISCOVERY_LANDING_PAGE_UPSELL_TITLE,
    content: r.default.Messages.DISCOVERY_LANDING_PAGE_UPSELL_DESCRIPTION,
    asset: (0, n.jsx)("div", {
      className: o.image,
      children: (0, n.jsx)("img", {
        alt: "",
        src: u
      })
    }),
    buttonCTA: r.default.Messages.DISCOVERY_LANDING_PAGE_UPSELL_BUTTON_ACCEPT,
    onClick: e => {
      var a;
      a = t, s.default.open(a.id, i.GuildSettingsSections.DISCOVERY_LANDING_PAGE)
    },
    secondaryButtonCTA: r.default.Messages.DISCOVERY_LANDING_PAGE_UPSELL_BUTTON_DISMISS,
    onSecondaryClick: () => {},
    markAsDismissed: a
  })
}