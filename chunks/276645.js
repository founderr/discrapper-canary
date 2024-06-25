n.d(t, {
  Z: function() {
    return o
  }
});
var s = n(735250);
n(470079);
var i = n(481060),
  l = n(970731),
  a = n(689938),
  r = n(682894);

function o(e) {
  let {
    guildId: t,
    markAsDismissed: o
  } = e;
  return (0, s.jsx)(l.ZP, {
    className: r.container,
    asset: (0, s.jsx)("img", {
      className: r.image,
      src: n(297806),
      alt: ""
    }),
    header: a.Z.Messages.PREMIUM_CUSTOM_NOTIFICATION_SOUND_COACHMARK_TITLE,
    headerClassName: r.header,
    content: a.Z.Messages.PREMIUM_CUSTOM_NOTIFICATION_SOUND_COACHMARK_DESCRIPTION,
    buttonCTA: a.Z.Messages.CHECK_IT_OUT,
    buttonProps: {
      color: i.ButtonColors.WHITE,
      innerClassName: r.primaryButton
    },
    onClick: () => {
      (0, i.openModalLazy)(async () => {
        let {
          default: e
        } = await Promise.all([n.e("99387"), n.e("5863"), n.e("53497")]).then(n.bind(n, 751212));
        return n => (0, s.jsx)(e, {
          ...n,
          guildId: t
        })
      })
    },
    secondaryButtonCTA: a.Z.Messages.MAYBE_LATER,
    secondaryButtonProps: {
      look: i.ButtonLooks.LINK,
      color: i.ButtonColors.WHITE
    },
    markAsDismissed: o
  })
}