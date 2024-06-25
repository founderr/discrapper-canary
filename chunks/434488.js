n.d(t, {
  h: function() {
    return v
  }
});
var l = n(735250),
  i = n(470079),
  s = n(120356),
  a = n.n(s),
  r = n(704215),
  o = n(692547),
  c = n(481060),
  u = n(2052),
  d = n(127255),
  h = n(5200),
  m = n(403404),
  E = n(100527),
  p = n(906732),
  g = n(605236),
  f = n(448239),
  C = n(626135),
  _ = n(792125),
  I = n(607187),
  x = n(981631),
  T = n(701488),
  N = n(689938),
  Z = n(882338),
  S = n(334732);

function v(e) {
  let {
    channel: t,
    guild: n,
    width: i,
    inPopout: s,
    handleClose: a,
    userParticipantCount: r
  } = e;
  return i < 250 ? (0, l.jsx)(A, {
    channel: t,
    guild: n,
    width: i,
    inPopout: s,
    handleClose: a,
    userParticipantCount: r
  }) : r > 1 ? (0, l.jsx)(j, {
    channel: t,
    guild: n,
    width: i,
    inPopout: s,
    handleClose: a,
    userParticipantCount: r
  }) : (0, l.jsx)(M, {
    channel: t,
    guild: n,
    width: i,
    inPopout: s
  })
}

function A(e) {
  let {
    channel: t,
    inPopout: n,
    handleClose: i
  } = e, {
    analyticsLocations: s
  } = (0, p.ZP)(E.Z.VC_TILE_ACTIVITY_SHELF_BUTTON), r = (0, u.O)(), d = () => {
    (0, m.Z)({
      channel: t,
      guildId: t.guild_id,
      locationObject: r.location,
      openInPopout: n,
      analyticsLocations: s
    })
  };
  return (0, l.jsx)(p.Gt, {
    value: s,
    children: (0, l.jsxs)(l.Fragment, {
      children: [(0, l.jsx)(c.Tooltip, {
        text: N.Z.Messages.EMBEDDED_ACTIVITIES_START_AN_ACTIVITY,
        children: e => {
          let {
            onClick: t,
            ...n
          } = e;
          return (0, l.jsx)(c.Clickable, {
            ...n,
            className: Z.clickableTile,
            onClick: () => {
              null == t || t(), d()
            },
            children: (0, l.jsx)(I.Z, {
              className: Z.root,
              children: (0, l.jsx)("div", {
                className: Z.iconContainer,
                children: (0, l.jsx)(c.ActivitiesPlusIcon, {
                  size: "custom",
                  color: "currentColor",
                  width: 40,
                  height: 40
                })
              })
            })
          })
        }
      }), (0, l.jsx)(c.Clickable, {
        onClick: i,
        className: a()((0, _.Q)(x.BRd.DARK), Z.shelfButtonCloseButton),
        children: (0, l.jsx)(c.CircleXIcon, {
          size: "md",
          color: "currentColor",
          className: Z.closeButtonIcon,
          secondaryColor: o.Z.colors.INTERACTIVE_NORMAL.css
        })
      })]
    })
  })
}

function M(e) {
  let {
    channel: t,
    guild: s,
    inPopout: a,
    width: r
  } = e;
  i.useEffect(() => {
    C.default.track(x.rMx.VC_TILE_ACTIVITIES_ENTRY_POINT_VIEWED, {
      tile_type: "activity invite",
      n_participants: 1
    })
  }, []);
  let o = (0, u.O)(),
    {
      analyticsLocations: d
    } = (0, p.ZP)(E.Z.VC_TILE_ACTIVITY_INVITE);
  return (0, l.jsx)(p.Gt, {
    value: d,
    children: (0, l.jsxs)(I.Z, {
      className: Z.root,
      children: [r > 400 ? (0, l.jsx)("img", {
        src: S,
        className: Z.art,
        alt: N.Z.Messages.EMBEDDED_ACTIVITIES_SHELF_CHARACTERS_ALT_TEXT
      }) : null, (0, l.jsx)(c.Text, {
        className: Z.heading,
        variant: "text-md/semibold",
        color: "always-white",
        children: N.Z.Messages.EMBEDDED_ACTIVITIES_VC_TILE_ENTRY_POINT_INVITE
      }), (0, l.jsxs)("div", {
        className: Z.buttonContainer,
        children: [(0, l.jsxs)(c.Button, {
          size: c.Button.Sizes.LARGE,
          color: c.Button.Colors.PRIMARY,
          className: Z.button,
          innerClassName: Z.buttonContents,
          onClick: function() {
            (0, c.openModalLazy)(async () => {
              let {
                default: e
              } = await Promise.all([n.e("99387"), n.e("7654"), n.e("9785")]).then(n.bind(n, 560114));
              return n => (0, l.jsx)(e, {
                ...n,
                guild: s,
                channel: t,
                source: x.t4x.ACTIVITY_ENTRY_POINT_TILE
              })
            }, {
              contextKey: a ? c.POPOUT_MODAL_CONTEXT : c.DEFAULT_MODAL_CONTEXT
            })
          },
          children: [(0, l.jsx)(c.FriendsIcon, {
            size: "xs",
            color: "currentColor"
          }), N.Z.Messages.INVITE_FRIENDS]
        }), (0, l.jsxs)(c.Button, {
          size: c.Button.Sizes.LARGE,
          className: Z.button,
          innerClassName: Z.buttonContents,
          onClick: function() {
            (0, m.Z)({
              channel: t,
              guildId: t.guild_id,
              locationObject: o.location,
              openInPopout: a,
              analyticsLocations: d
            })
          },
          children: [(0, l.jsx)(c.ActivitiesIcon, {
            size: "xs",
            color: "currentColor"
          }), N.Z.Messages.EMBEDDED_ACTIVITIES_ACTIVITY_ENTRY_POINT_TILE_CHOOSE_AN_ACTIVITY]
        })]
      })]
    })
  })
}
let R = e => {
  let {
    userParticipantCount: t,
    guildId: n,
    channel: l
  } = e, i = (0, d.Z)({
    guildId: n,
    channel: l
  });
  if (2 === t) {
    let e = [],
      t = function() {
        return [T.jT, T.f9, T.fE].filter(Boolean).slice(0, 3)
      }();
    return i.forEach(n => {
      let l = t.indexOf(n.application.id);
      !(l < 0) && (e[l] = n)
    }), e
  }
  return i.slice(0, 3)
};

function j(e) {
  let {
    channel: t,
    guild: n,
    handleClose: s,
    width: o,
    userParticipantCount: u
  } = e;
  i.useEffect(() => {
    C.default.track(x.rMx.VC_TILE_ACTIVITIES_ENTRY_POINT_VIEWED, {
      tile_type: "activity suggestion",
      n_participants: u
    })
  }, []);
  let d = R({
      userParticipantCount: u,
      guildId: n.id,
      channel: t
    }),
    {
      analyticsLocations: m
    } = (0, p.ZP)(E.Z.VC_TILE_ACTIVITY_SUGGESTION);
  return (0, l.jsx)(p.Gt, {
    value: m,
    children: (0, l.jsxs)(I.Z, {
      className: Z.root,
      children: [o > 480 ? (0, l.jsx)("img", {
        className: Z.art,
        src: S,
        alt: N.Z.Messages.EMBEDDED_ACTIVITIES_SHELF_CHARACTERS_ALT_TEXT
      }) : null, o > 300 ? (0, l.jsx)(c.Text, {
        className: Z.heading,
        variant: o > 550 ? "text-md/semibold" : "text-sm/semibold",
        children: N.Z.Messages.EMBEDDED_ACTIVITIES_VC_TILE_ENTRY_POINT_TITLE
      }) : null, (0, l.jsx)("div", {
        className: a()(Z.activitiesContainer, {
          [Z.activitiesContainerSmol]: o <= 300
        }),
        children: d.map(e => (0, l.jsx)(h.Y, {
          channel: t,
          activityItem: e,
          aspectRatio: h.Y.AspectRatio.SIXTEEN_BY_NINE,
          animatedDivClass: Z.activitySuggestion
        }, e.application.id))
      }), (0, l.jsxs)(c.Clickable, {
        className: Z.checkboxContainer,
        onClick: function() {
          C.default.track(x.rMx.VC_TILE_ACTIVITIES_ENTRY_POINT_CLOSED, {
            tile_type: "activity suggestion",
            close_type: "permanent",
            n_participants: u
          }), (0, g.EW)(r.z.VC_TILE_ACTIVITIES_ENTRY_POINT)
        },
        children: [(0, l.jsx)(f.Z, {}), (0, l.jsx)(c.Text, {
          variant: "text-sm/medium",
          children: N.Z.Messages.DONT_SHOW_AGAIN
        })]
      }), (0, l.jsx)(c.Clickable, {
        className: Z.closeButtonContainer,
        onClick: function() {
          C.default.track(x.rMx.VC_TILE_ACTIVITIES_ENTRY_POINT_CLOSED, {
            tile_type: "activity suggestion",
            close_type: "temporary",
            n_participants: u
          }), s()
        },
        children: (0, l.jsx)(c.CloseSmallIcon, {
          size: "md",
          color: "currentColor",
          className: Z.closeButton
        })
      })]
    })
  })
}