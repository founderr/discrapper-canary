s.r(t), s.d(t, {
  default: function() {
    return g
  }
});
var a = s(735250),
  i = s(470079),
  n = s(442837),
  r = s(704215),
  o = s(481060),
  l = s(607070),
  c = s(434404),
  d = s(430824),
  m = s(153124),
  u = s(810090),
  N = s(626135),
  h = s(150340),
  x = s(721012),
  I = s(819866),
  _ = s(981631),
  j = s(921944),
  L = s(689938),
  f = s(984674);

function g(e) {
  let {
    guildId: t,
    transitionState: s,
    onClose: g
  } = e, D = (0, m.Dt)(), v = (0, n.e7)([l.Z], () => l.Z.useReducedMotion), C = (0, n.e7)([d.Z], () => d.Z.getGuild(t));
  return (i.useEffect(() => {
    N.default.track(_.rMx.DISMISSIBLE_CONTENT_SHOWN, {
      type: r.z[r.z.GUILD_ONBOARDING_UPSELL_MODAL_V2],
      guild_id: t
    })
  }, [t]), null == C) ? null : (0, a.jsxs)(o.ModalRoot, {
    transitionState: s,
    "aria-labelledby": D,
    size: o.ModalSize.LARGE,
    className: f.modal,
    children: [(0, a.jsxs)("div", {
      className: f.content,
      children: [(0, a.jsx)(o.Heading, {
        variant: "heading-xl/semibold",
        color: "header-primary",
        className: f.header,
        children: L.Z.Messages.GUILD_ONBOARDING_UPSELL_MODAL_TITLE
      }), (0, a.jsx)(o.Text, {
        variant: "text-md/normal",
        color: "header-secondary",
        children: L.Z.Messages.GUILD_ONBOARDING_UPSELL_MODAL_DESCRIPTION.format({
          guildName: C.name
        })
      }), (0, a.jsxs)("div", {
        className: f.testimonials,
        children: [(0, a.jsx)("div", {
          className: f.__invalid_designBuddiesContainer,
          children: (0, a.jsx)(x.Z, {
            message: L.Z.Messages.GUILD_ONBOARDING_TESTIMONIAL_DESIGN_BUDDIES,
            adminTitle: L.Z.Messages.GUILD_ONBOARDING_TESTIMONIAL_ADMIN_DESIGN_BUDDIES,
            profilePic: "https://cdn.discordapp.com/icons/585994345086451723/7ccfde77eeb097ac645eac1af1fb19c4.jpg",
            emphasisColor: "text-positive",
            arrowPosition: "right"
          })
        }), (0, a.jsx)("div", {
          className: f.__invalid_valorantContainer,
          children: (0, a.jsx)(x.Z, {
            message: L.Z.Messages.GUILD_ONBOARDING_TESTIMONIAL_VALORANT,
            adminTitle: L.Z.Messages.GUILD_ONBOARDING_TESTIMONIAL_ADMIN_VALORANT,
            profilePic: "https://cdn.discordapp.com/icons/585994345086451723/7ccfde77eeb097ac645eac1af1fb19c4.jpg",
            emphasisColor: "text-warning",
            arrowPosition: "left"
          })
        })]
      }), (0, a.jsxs)("div", {
        className: f.buttonContainer,
        children: [(0, a.jsx)(o.Button, {
          onClick: () => g(),
          look: o.Button.Looks.OUTLINED,
          color: o.Button.Colors.PRIMARY,
          children: L.Z.Messages.CLOSE
        }), (0, a.jsx)(o.Button, {
          onClick: () => {
            N.default.track(_.rMx.UPSELL_CLICKED, {
              type: r.z[r.z.GUILD_ONBOARDING_UPSELL_MODAL_V2],
              action: "primary"
            }), c.Z.open(t, _.pNK.ONBOARDING), g(j.L.PRIMARY), (0, h.G)(C.id, r.z.GUILD_ONBOARDING_UPSELL_MODAL_V2)
          },
          children: L.Z.Messages.CHECK_IT_OUT
        })]
      })]
    }), (0, a.jsx)("div", {
      className: f.videoContainer,
      children: (0, a.jsx)(u.Z, {
        className: f.video,
        loop: !v,
        autoPlay: !v,
        playsInline: !0,
        "data-testid": "onboarding-demo",
        children: (0, a.jsx)("source", {
          src: I,
          type: "video/mp4"
        }, "hevc")
      })
    })]
  })
}