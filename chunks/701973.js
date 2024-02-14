"use strict";
s.r(t), s.d(t, {
  ImportBenefitsFromSubscriptionListingModal: function() {
    return Y
  },
  ImportBenefitsFromRoleModal: function() {
    return X
  }
}), s("222007"), s("881410");
var a, l, n = s("37983"),
  i = s("884691"),
  r = s("414456"),
  o = s.n(r),
  d = s("775560"),
  u = s("316693"),
  c = s("509043"),
  E = s("446674"),
  _ = s("233736"),
  I = s("769846"),
  T = s("77078"),
  f = s("430568"),
  S = s("419830"),
  m = s("385976"),
  N = s("405645"),
  g = s("233069"),
  h = s("245997"),
  C = s("305961"),
  R = s("476765"),
  x = s("461380"),
  L = s("593195"),
  O = s("36694"),
  p = s("375352"),
  A = s("682344"),
  M = s("483093"),
  D = s("159885"),
  v = s("577357"),
  j = s("880993"),
  G = s("833531"),
  U = s("559979"),
  P = s("49111"),
  b = s("782340"),
  B = s("803161");
let y = (0, R.uid)(),
  F = (0, R.uid)(),
  H = (0, D.cssValueToNumber)(I.default.IMPORT_BENEFITS_MODAL_ROLE_ICON_SIZE);

function k(e) {
  var t;
  let {
    emojiId: s,
    emojiName: a,
    className: l
  } = e, i = (0, E.useStateFromStores)([m.default], () => null != s ? m.default.getCustomEmojiById(s) : void 0);
  return (0, n.jsx)(f.default, {
    emojiId: s,
    emojiName: a,
    animated: null !== (t = null == i ? void 0 : i.animated) && void 0 !== t && t,
    className: l
  })
}

function w(e) {
  let {
    icon: t,
    children: s,
    checked: a,
    disabled: l = !1,
    onChange: i
  } = e, r = a || l;
  return (0, n.jsxs)("label", {
    className: o(B.row, {
      [B.checked]: r,
      [B.disabled]: l
    }),
    children: [(0, n.jsx)("div", {
      className: B.rowIconWrapper,
      children: t
    }), (0, n.jsx)("div", {
      className: B.rowText,
      children: s
    }), (0, n.jsxs)("div", {
      className: B.rowCheckbox,
      children: [(0, n.jsx)(T.FocusRing, {
        children: (0, n.jsx)("input", {
          type: "checkbox",
          checked: r,
          disabled: l,
          className: B.checkboxInput,
          onChange: function(e) {
            i(e.target.checked)
          }
        })
      }), (0, n.jsx)("div", {
        className: B.checkboxDisplay,
        children: (0, n.jsx)(O.default, {
          className: B.checkboxIcon,
          "aria-hidden": !0
        })
      })]
    })]
  })
}

function V(e) {
  let {
    title: t,
    selectAllText: s,
    benefits: a,
    dupeBenefits: l,
    selectedBenefits: i,
    onToggleBenefit: r
  } = e, o = a.every(e => i.has(e));
  return a.length > 0 ? (0, n.jsxs)(T.FormSection, {
    title: t,
    className: B.section,
    children: [a.length - l.size > 1 && (0, n.jsx)("div", {
      className: B.list,
      children: (0, n.jsx)(w, {
        icon: (0, n.jsx)(p.default, {
          className: B.rowIcon
        }),
        checked: o,
        onChange: function(e) {
          for (let t of a) !l.has(t) && r(t, e)
        },
        children: (0, n.jsx)(T.Text, {
          color: "header-primary",
          variant: "text-md/normal",
          children: s
        })
      })
    }), (0, n.jsx)("div", {
      className: B.list,
      children: a.map(e => (0, n.jsxs)(w, {
        icon: (0, n.jsx)(k, {
          emojiId: e.emoji_id,
          emojiName: e.emoji_name,
          className: B.rowIcon
        }),
        checked: i.has(e),
        disabled: l.has(e),
        onChange: t => r(e, t),
        children: [(0, n.jsx)(T.Text, {
          color: "header-primary",
          variant: "text-md/semibold",
          children: (0, U.default)(e)
        }), (0, n.jsx)(T.Text, {
          color: "interactive-normal",
          variant: "text-sm/normal",
          children: e.description
        })]
      }, (0, v.getBenefitKey)(e)))
    })]
  }) : null
}

function Y(e) {
  let {
    transitionState: t,
    fromSubscriptionListing: s,
    existingChannelBenefits: a,
    existingIntangibleBenefits: l,
    onSubmit: r,
    onClose: o
  } = e, d = s.role_benefits.benefits, [u, c] = i.useState(() => new Set(d)), E = i.useMemo(() => d.filter(v.isChannelBenefit), [d]), I = (0, G.default)(E), f = i.useMemo(() => d.filter(v.isIntangibleBenefit), [d]), S = i.useMemo(() => new Set(I.filter(e => a.some(t => t.ref_id === e.ref_id))), [I, a]), m = i.useMemo(() => new Set(f.filter(e => l.some(t => (0, _.default)(e, t)))), [l, f]), N = (0, R.useUID)();

  function g(e, t) {
    c(s => {
      let a = new Set(s);
      return t ? a.add(e) : a.delete(e), a
    })
  }
  return (0, n.jsx)("form", {
    onSubmit: function(e) {
      e.preventDefault();
      let t = d.filter(e => u.has(e)),
        s = t.filter(v.isChannelBenefit).filter(e => !S.has(e)),
        a = t.filter(v.isIntangibleBenefit).filter(e => !m.has(e));
      r(s, a), o()
    },
    children: (0, n.jsxs)(T.ModalRoot, {
      transitionState: t,
      "aria-labelledby": N,
      children: [(0, n.jsxs)(T.ModalHeader, {
        children: [(0, n.jsx)(T.Heading, {
          id: N,
          variant: "heading-md/semibold",
          children: b.default.Messages.GUILD_ROLE_SUBSCRIPTION_IMPORT_BENEFITS_MODAL_HEADER.format({
            tierName: s.name
          })
        }), (0, n.jsx)(T.ModalCloseButton, {
          className: B.modalCloseButton,
          onClick: o
        })]
      }), (0, n.jsxs)(T.ModalContent, {
        className: B.modalContent,
        children: [(0, n.jsx)(V, {
          title: b.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_CHANNEL_BENEFITS_CHANNELS_TITLE,
          selectAllText: b.default.Messages.GUILD_ROLE_SUBSCRIPTION_IMPORT_BENEFITS_SELECT_ALL_CHANNEL_BENEFITS,
          benefits: I,
          dupeBenefits: S,
          selectedBenefits: u,
          onToggleBenefit: g
        }), (0, n.jsx)(V, {
          title: b.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_INTANGIBLE_BENEFITS_TITLE,
          selectAllText: b.default.Messages.GUILD_ROLE_SUBSCRIPTION_IMPORT_BENEFITS_SELECT_ALL_INTANGIBLE_BENEFITS,
          benefits: f,
          dupeBenefits: m,
          selectedBenefits: u,
          onToggleBenefit: g
        })]
      }), (0, n.jsxs)(T.ModalFooter, {
        children: [(0, n.jsx)(T.Button, {
          type: "submit",
          children: b.default.Messages.GUILD_ROLE_SUBSCRIPTION_IMPORT_BENEFITS_CONFIRM_BUTTON
        }), (0, n.jsx)(T.Button, {
          look: T.Button.Looks.LINK,
          color: T.Button.Colors.PRIMARY,
          onClick: o,
          children: b.default.Messages.CANCEL
        })]
      })]
    })
  })
}

function W(e) {
  var t;
  let {
    guildId: s,
    role: a,
    channelCount: l,
    onSelect: i
  } = e, r = (0, N.useRoleIcon)({
    guildId: s,
    roleId: a.id,
    size: H
  });
  return (0, n.jsxs)(T.Clickable, {
    className: B.roleRow,
    onClick: i,
    children: [(0, n.jsx)("div", {
      className: B.rowIconWrapper,
      children: null != r ? (0, n.jsx)(M.default, {
        ...r
      }) : (0, n.jsx)(A.default, {
        color: null !== (t = a.colorString) && void 0 !== t ? t : (0, c.int2hex)(P.DEFAULT_ROLE_COLOR),
        className: B.roleRowIconDefault
      })
    }), (0, n.jsxs)("div", {
      className: B.rowText,
      children: [(0, n.jsx)(T.Text, {
        color: "header-primary",
        variant: "text-md/normal",
        className: B.benefitTitle,
        children: a.name
      }), (0, n.jsx)(T.Text, {
        color: "header-secondary",
        variant: "text-sm/normal",
        children: b.default.Messages.NUM_CHANNELS.format({
          num: l
        })
      })]
    }), (0, n.jsx)("div", {
      className: B.rowCheckbox,
      children: (0, n.jsx)(x.default, {
        direction: x.default.Directions.RIGHT
      })
    })]
  })
}

function z(e) {
  let {
    guild: t,
    onSelect: s
  } = e, a = (0, E.useStateFromStores)([h.default], () => h.default.getCategories(t.id)), l = i.useMemo(() => a._categories.flatMap(e => a[e.channel.id].filter(e => {
    let {
      channel: t
    } = e;
    return g.GUILD_NON_CATEGORY_CHANNEL_TYPES.has(t.type)
  }).map(e => {
    let {
      channel: t
    } = e;
    return t
  })), [a]), r = i.useMemo(() => Object.values(t.roles).flatMap(e => {
    var s;
    if (e.id === t.id || (null === (s = e.tags) || void 0 === s ? void 0 : s.subscription_listing_id) != null || u.default.hasAny(e.permissions, P.ElevatedPermissions)) return [];
    let a = (0, j.default)(l, e).length;
    return a > 0 ? {
      role: e,
      channelCount: a
    } : []
  }), [t, l]);
  return r.length > 0 ? (0, n.jsx)("div", {
    className: B.list,
    children: r.map(e => (0, n.jsx)(W, {
      guildId: t.id,
      role: e.role,
      channelCount: e.channelCount,
      onSelect: () => s(e.role)
    }, e.role.id))
  }) : (0, n.jsx)(T.Text, {
    variant: "text-md/normal",
    children: b.default.Messages.GUILD_ROLE_SUBSCRIPTION_BENEFIT_IMPORT_SELECT_ROLE_EMPTY
  })
}

function K(e) {
  let {
    onClose: t,
    guildId: s,
    onSelect: a
  } = e, l = (0, E.useStateFromStores)([C.default], () => C.default.getGuild(s));
  return null == l ? null : (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsxs)(T.ModalHeader, {
      children: [(0, n.jsx)(T.Heading, {
        id: y,
        variant: "heading-md/semibold",
        children: b.default.Messages.GUILD_ROLE_SUBSCRIPTION_IMPORT_BENEFITS_FROM_ROLE_MODAL_HEADER_1
      }), (0, n.jsx)(T.ModalCloseButton, {
        className: B.modalCloseButton,
        onClick: t
      })]
    }), (0, n.jsx)(T.ModalContent, {
      className: B.modalContent,
      children: (0, n.jsx)(z, {
        guild: l,
        onSelect: a
      })
    })]
  })
}

function Z(e) {
  let {
    onClose: t,
    guildId: s,
    role: a,
    onCancel: l,
    onImport: r
  } = e, o = i.useRef(a);
  null != a && (o.current = a);
  let u = null != a ? a : o.current,
    c = (0, d.useLazyValue)(() => {
      let e = h.default.getCategories(s);
      return e._categories.flatMap(t => e[t.channel.id].filter(e => {
        let {
          channel: t
        } = e;
        return g.GUILD_NON_CATEGORY_CHANNEL_TYPES.has(t.type)
      }).map(e => {
        let {
          channel: t
        } = e;
        return t
      }))
    }),
    E = i.useMemo(() => (0, j.default)(c, u), [c, u]),
    [_, I] = i.useState(() => new Set(E.map(e => e.id)));

  function f(e, t) {
    I(s => {
      let a = new Set(s);
      return t ? a.add(e) : a.delete(e), a
    })
  }
  return (0, n.jsxs)("form", {
    onSubmit: function(e) {
      e.preventDefault(), r(E.map(e => e.id).filter(e => _.has(e))), t()
    },
    className: B.slideForm,
    children: [(0, n.jsxs)(T.ModalHeader, {
      children: [(0, n.jsx)(T.Heading, {
        id: F,
        variant: "heading-md/semibold",
        children: b.default.Messages.GUILD_ROLE_SUBSCRIPTION_IMPORT_BENEFITS_FROM_ROLE_MODAL_HEADER_2.format({
          roleName: u.name
        })
      }), (0, n.jsx)(T.ModalCloseButton, {
        className: B.modalCloseButton,
        onClick: t
      })]
    }), (0, n.jsxs)(T.ModalContent, {
      className: B.modalContent,
      children: [E.length > 1 && (0, n.jsx)("div", {
        className: B.list,
        children: (0, n.jsx)(w, {
          icon: (0, n.jsx)(p.default, {}),
          checked: _.size === E.length,
          onChange: function(e) {
            for (let t of E) f(t.id, e)
          },
          children: (0, n.jsx)(T.Text, {
            color: "header-primary",
            variant: "text-md/normal",
            children: b.default.Messages.GUILD_ROLE_SUBSCRIPTION_IMPORT_BENEFITS_SELECT_ALL_CHANNEL_BENEFITS
          })
        })
      }), (0, n.jsx)("div", {
        className: B.list,
        children: E.map(e => {
          var t;
          let s = null !== (t = (0, S.getSimpleChannelIconComponent)(e.type)) && void 0 !== t ? t : L.default;
          return (0, n.jsx)(w, {
            icon: (0, n.jsx)("div", {
              className: B.rowIcon,
              children: (0, n.jsx)(s, {
                width: "100%",
                height: "100%"
              })
            }),
            checked: _.has(e.id),
            onChange: t => f(e.id, t),
            children: (0, n.jsx)(T.Text, {
              color: "header-primary",
              variant: "text-md/normal",
              className: B.benefitTitle,
              children: e.name
            })
          }, e.id)
        })
      })]
    }), (0, n.jsxs)(T.ModalFooter, {
      children: [(0, n.jsx)(T.Button, {
        type: "submit",
        children: b.default.Messages.GUILD_ROLE_SUBSCRIPTION_IMPORT_BENEFITS_FROM_ROLE_CONFIRM_BUTTON
      }), (0, n.jsx)(T.Button, {
        look: T.Button.Looks.LINK,
        color: T.Button.Colors.PRIMARY,
        onClick: l,
        children: b.default.Messages.CANCEL
      })]
    })]
  })
}

function X(e) {
  let {
    transitionState: t,
    guildId: s,
    onClose: a,
    onImport: l
  } = e, [r, o] = i.useState();
  return (0, n.jsx)(T.ModalRoot, {
    transitionState: t,
    "aria-labelledby": null == r ? y : F,
    children: (0, n.jsxs)(T.Slides, {
      contentDisplay: "flex",
      activeSlide: null == r ? 0 : 1,
      width: 440,
      children: [(0, n.jsx)(T.Slide, {
        id: 0,
        children: (0, n.jsx)(K, {
          onClose: a,
          guildId: s,
          onSelect: o
        })
      }), (0, n.jsx)(T.Slide, {
        id: 1,
        children: (0, n.jsx)(Z, {
          onClose: a,
          guildId: s,
          role: r,
          onCancel: () => o(void 0),
          onImport: l
        })
      })]
    })
  })
}(l = a || (a = {}))[l.SELECT_ROLE = 0] = "SELECT_ROLE", l[l.SELECT_CHANNELS = 1] = "SELECT_CHANNELS"