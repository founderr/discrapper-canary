n.r(t),
    n.d(t, {
        default: function () {
            return L;
        }
    });
var i = n(735250),
    s = n(470079),
    a = n(442837),
    o = n(704215),
    r = n(481060),
    l = n(607070),
    c = n(313201),
    d = n(70097),
    m = n(434404),
    u = n(430824),
    h = n(626135),
    _ = n(150340),
    N = n(721012),
    x = n(981631),
    I = n(921944),
    C = n(689938),
    f = n(658892),
    g = n(819866);
function L(e) {
    let { guildId: t, transitionState: n, onClose: L } = e,
        D = (0, c.Dt)(),
        v = (0, a.e7)([l.Z], () => l.Z.useReducedMotion),
        j = (0, a.e7)([u.Z], () => u.Z.getGuild(t));
    return (s.useEffect(() => {
        h.default.track(x.rMx.DISMISSIBLE_CONTENT_SHOWN, {
            type: o.z[o.z.GUILD_ONBOARDING_UPSELL_MODAL_V2],
            guild_id: t
        });
    }, [t]),
    null == j)
        ? null
        : (0, i.jsxs)(r.ModalRoot, {
              transitionState: n,
              'aria-labelledby': D,
              size: r.ModalSize.LARGE,
              className: f.modal,
              children: [
                  (0, i.jsxs)('div', {
                      className: f.content,
                      children: [
                          (0, i.jsx)(r.Heading, {
                              variant: 'heading-xl/semibold',
                              color: 'header-primary',
                              className: f.header,
                              children: C.Z.Messages.GUILD_ONBOARDING_UPSELL_MODAL_TITLE
                          }),
                          (0, i.jsx)(r.Text, {
                              variant: 'text-md/normal',
                              color: 'header-secondary',
                              children: C.Z.Messages.GUILD_ONBOARDING_UPSELL_MODAL_DESCRIPTION.format({ guildName: j.name })
                          }),
                          (0, i.jsxs)('div', {
                              className: f.testimonials,
                              children: [
                                  (0, i.jsx)('div', {
                                      className: f.__invalid_designBuddiesContainer,
                                      children: (0, i.jsx)(N.Z, {
                                          message: C.Z.Messages.GUILD_ONBOARDING_TESTIMONIAL_DESIGN_BUDDIES,
                                          adminTitle: C.Z.Messages.GUILD_ONBOARDING_TESTIMONIAL_ADMIN_DESIGN_BUDDIES,
                                          profilePic: 'https://cdn.discordapp.com/icons/585994345086451723/7ccfde77eeb097ac645eac1af1fb19c4.jpg',
                                          emphasisColor: 'text-positive',
                                          arrowPosition: 'right'
                                      })
                                  }),
                                  (0, i.jsx)('div', {
                                      className: f.__invalid_valorantContainer,
                                      children: (0, i.jsx)(N.Z, {
                                          message: C.Z.Messages.GUILD_ONBOARDING_TESTIMONIAL_VALORANT,
                                          adminTitle: C.Z.Messages.GUILD_ONBOARDING_TESTIMONIAL_ADMIN_VALORANT,
                                          profilePic: 'https://cdn.discordapp.com/icons/585994345086451723/7ccfde77eeb097ac645eac1af1fb19c4.jpg',
                                          emphasisColor: 'text-warning',
                                          arrowPosition: 'left'
                                      })
                                  })
                              ]
                          }),
                          (0, i.jsxs)('div', {
                              className: f.buttonContainer,
                              children: [
                                  (0, i.jsx)(r.Button, {
                                      onClick: () => L(),
                                      look: r.Button.Looks.OUTLINED,
                                      color: r.Button.Colors.PRIMARY,
                                      children: C.Z.Messages.CLOSE
                                  }),
                                  (0, i.jsx)(r.Button, {
                                      onClick: () => {
                                          h.default.track(x.rMx.UPSELL_CLICKED, {
                                              type: o.z[o.z.GUILD_ONBOARDING_UPSELL_MODAL_V2],
                                              action: 'primary'
                                          }),
                                              m.Z.open(t, x.pNK.ONBOARDING),
                                              L(I.L.PRIMARY),
                                              (0, _.G)(j.id, o.z.GUILD_ONBOARDING_UPSELL_MODAL_V2);
                                      },
                                      children: C.Z.Messages.CHECK_IT_OUT
                                  })
                              ]
                          })
                      ]
                  }),
                  (0, i.jsx)('div', {
                      className: f.videoContainer,
                      children: (0, i.jsx)(d.Z, {
                          className: f.video,
                          loop: !v,
                          autoPlay: !v,
                          playsInline: !0,
                          'data-testid': 'onboarding-demo',
                          children: (0, i.jsx)(
                              'source',
                              {
                                  src: g,
                                  type: 'video/mp4'
                              },
                              'hevc'
                          )
                      })
                  })
              ]
          });
}
