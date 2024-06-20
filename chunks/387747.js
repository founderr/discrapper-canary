t.d(s, {
  Z: function() {
    return C
  }
});
var n = t(735250);
t(470079);
var i = t(410575),
  a = t(100527),
  l = t(211242),
  r = t(89057),
  o = t(223639),
  c = t(347475),
  E = t(977156),
  d = t(97926),
  _ = t(921801),
  T = t(541540),
  S = t(206339),
  u = t(726985),
  I = t(981631),
  N = t(46140),
  A = t(57077);

function C() {
  let e = (0, E.Zy)({
      location: N.dr.USER_SETTINGS_GIFT_INVENTORY
    }),
    {
      enabled: s
    } = o.Z.useExperiment({
      location: "UserSettingsInventory"
    }, {
      autoTrackExposure: !0
    }),
    t = (0, l.Q)();
  return (0, n.jsxs)(n.Fragment, {
    children: [!t && (0, n.jsxs)(n.Fragment, {
      children: [s && (0, n.jsx)(_.F, {
        setting: u.s6.GIFT_NITRO,
        children: (0, n.jsx)(c.Z, {
          location: a.Z.USER_SETTINGS_GIFT_INVENTORY,
          className: A.giftNitro,
          imageClassName: A.giftNitroImage,
          textContainerOverrideStyles: {
            padding: "32px",
            width: "360px"
          },
          analyticsLocation: {
            page: I.ZY5.GIFTING_SETTINGS,
            section: I.jXE.GIFT_BANNER
          }
        })
      }), (0, n.jsx)(_.F, {
        setting: u.s6.GIFT_CODE_REDEMPTION,
        children: (0, n.jsx)(i.Z, {
          section: I.jXE.LIBRARY_INVENTORY_CODE_REDEMPTION,
          children: (0, n.jsx)(T.Z, {})
        })
      })]
    }), e && (0, n.jsx)(_.F, {
      setting: u.s6.GIFT_INVENTORY_QUESTS,
      children: (0, n.jsx)(i.Z, {
        section: I.jXE.QUESTS,
        children: (0, n.jsx)(d.Z, {})
      })
    }), !t && (0, n.jsx)(_.F, {
      setting: u.s6.GIFT_INVENTORY_LIST,
      children: (0, n.jsx)(i.Z, {
        section: I.jXE.LIBRARY_INVENTORY_GIFTS_LIST,
        children: (0, n.jsx)(S.Z, {})
      })
    }), t && (0, n.jsx)(_.F, {
      setting: u.s6.GIFT_BLOCKED_PAYMENTS,
      children: (0, n.jsx)(r.c8, {})
    })]
  })
}