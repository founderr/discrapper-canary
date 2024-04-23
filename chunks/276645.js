"use strict";
a.r(t), a.d(t, {
  default: function() {
    return o
  }
});
var n = a("735250");
a("470079");
var s = a("481060"),
  l = a("970731"),
  i = a("689938"),
  r = a("789134");

function o(e) {
  let {
    guildId: t,
    markAsDismissed: o
  } = e;
  return (0, n.jsx)(l.default, {
    className: r.container,
    asset: (0, n.jsx)("img", {
      className: r.image,
      src: a("297806"),
      alt: ""
    }),
    header: i.default.Messages.PREMIUM_CUSTOM_NOTIFICATION_SOUND_COACHMARK_TITLE,
    headerClassName: r.header,
    content: i.default.Messages.PREMIUM_CUSTOM_NOTIFICATION_SOUND_COACHMARK_DESCRIPTION,
    buttonCTA: i.default.Messages.CHECK_IT_OUT,
    buttonProps: {
      color: s.ButtonColors.WHITE,
      innerClassName: r.primaryButton
    },
    onClick: () => {
      (0, s.openModalLazy)(async () => {
        let {
          default: e
        } = await Promise.all([a.e("49237"), a.e("99387"), a.e("5863"), a.e("9519")]).then(a.bind(a, "751212"));
        return a => (0, n.jsx)(e, {
          ...a,
          guildId: t
        })
      })
    },
    secondaryButtonCTA: i.default.Messages.MAYBE_LATER,
    secondaryButtonProps: {
      look: s.ButtonLooks.LINK,
      color: s.ButtonColors.WHITE
    },
    markAsDismissed: o
  })
}