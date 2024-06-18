"use strict";
t.d(s, {
  C: function() {
    return W
  },
  K: function() {
    return k
  }
}), t(47120), t(390547);
var n, i, l = t(735250),
  a = t(470079),
  r = t(120356),
  o = t.n(r),
  c = t(77866),
  d = t(149765),
  u = t(866442),
  E = t(442837),
  _ = t(902704),
  I = t(477690),
  T = t(481060),
  N = t(596454),
  m = t(471445),
  S = t(605436),
  h = t(339085),
  g = t(518738),
  C = t(131704),
  x = t(324067),
  R = t(430824),
  L = t(153124),
  O = t(259580),
  A = t(176278),
  p = t(624138),
  M = t(817460),
  f = t(166803),
  D = t(629262),
  v = t(686807),
  j = t(981631),
  Z = t(689938),
  U = t(364268);
let G = (0, L.hQ)(),
  P = (0, L.hQ)(),
  b = (0, p.Mg)(I.Z.IMPORT_BENEFITS_MODAL_ROLE_ICON_SIZE);

function B(e) {
  var s;
  let {
    emojiId: t,
    emojiName: n,
    className: i
  } = e, a = (0, E.e7)([h.Z], () => null != t ? h.Z.getCustomEmojiById(t) : void 0);
  return (0, l.jsx)(N.Z, {
    emojiId: t,
    emojiName: n,
    animated: null !== (s = null == a ? void 0 : a.animated) && void 0 !== s && s,
    className: i
  })
}

function y(e) {
  let {
    icon: s,
    children: t,
    checked: n,
    disabled: i = !1,
    onChange: a
  } = e, r = n || i;
  return (0, l.jsxs)("label", {
    className: o()(U.row, {
      [U.checked]: r,
      [U.disabled]: i
    }),
    children: [(0, l.jsx)("div", {
      className: U.rowIconWrapper,
      children: s
    }), (0, l.jsx)("div", {
      className: U.rowText,
      children: t
    }), (0, l.jsxs)("div", {
      className: U.rowCheckbox,
      children: [(0, l.jsx)(T.FocusRing, {
        children: (0, l.jsx)("input", {
          type: "checkbox",
          checked: r,
          disabled: i,
          className: U.checkboxInput,
          onChange: function(e) {
            a(e.target.checked)
          }
        })
      }), (0, l.jsx)("div", {
        className: U.checkboxDisplay,
        children: (0, l.jsx)(T.CheckmarkLargeIcon, {
          size: "md",
          color: "currentColor",
          className: U.checkboxIcon,
          "aria-hidden": !0
        })
      })]
    })]
  })
}

function F(e) {
  let {
    title: s,
    selectAllText: t,
    benefits: n,
    dupeBenefits: i,
    selectedBenefits: a,
    onToggleBenefit: r
  } = e, o = n.every(e => a.has(e));
  return n.length > 0 ? (0, l.jsxs)(T.FormSection, {
    title: s,
    className: U.section,
    children: [n.length - i.size > 1 && (0, l.jsx)("div", {
      className: U.list,
      children: (0, l.jsx)(y, {
        icon: (0, l.jsx)(T.ChannelListPlusIcon, {
          size: "md",
          color: "currentColor",
          className: U.rowIcon
        }),
        checked: o,
        onChange: function(e) {
          for (let s of n) !i.has(s) && r(s, e)
        },
        children: (0, l.jsx)(T.Text, {
          color: "header-primary",
          variant: "text-md/normal",
          children: t
        })
      })
    }), (0, l.jsx)("div", {
      className: U.list,
      children: n.map(e => (0, l.jsxs)(y, {
        icon: (0, l.jsx)(B, {
          emojiId: e.emoji_id,
          emojiName: e.emoji_name,
          className: U.rowIcon
        }),
        checked: a.has(e),
        disabled: i.has(e),
        onChange: s => r(e, s),
        children: [(0, l.jsx)(T.Text, {
          color: "header-primary",
          variant: "text-md/semibold",
          children: (0, v.Z)(e)
        }), (0, l.jsx)(T.Text, {
          color: "interactive-normal",
          variant: "text-sm/normal",
          children: e.description
        })]
      }, (0, M.ab)(e)))
    })]
  }) : null
}

function k(e) {
  let {
    transitionState: s,
    fromSubscriptionListing: t,
    existingChannelBenefits: n,
    existingIntangibleBenefits: i,
    onSubmit: r,
    onClose: o
  } = e, c = t.role_benefits.benefits, [d, u] = a.useState(() => new Set(c)), E = a.useMemo(() => c.filter(M.rC), [c]), I = (0, D.Z)(E), N = a.useMemo(() => c.filter(M.lL), [c]), m = a.useMemo(() => new Set(I.filter(e => n.some(s => s.ref_id === e.ref_id))), [I, n]), S = a.useMemo(() => new Set(N.filter(e => i.some(s => (0, _.Z)(e, s)))), [i, N]), h = (0, L.Dt)();

  function g(e, s) {
    u(t => {
      let n = new Set(t);
      return s ? n.add(e) : n.delete(e), n
    })
  }
  return (0, l.jsx)("form", {
    onSubmit: function(e) {
      e.preventDefault();
      let s = c.filter(e => d.has(e)),
        t = s.filter(M.rC).filter(e => !m.has(e));
      r(t, s.filter(M.lL).filter(e => !S.has(e))), o()
    },
    children: (0, l.jsxs)(T.ModalRoot, {
      transitionState: s,
      "aria-labelledby": h,
      children: [(0, l.jsxs)(T.ModalHeader, {
        children: [(0, l.jsx)(T.Heading, {
          id: h,
          variant: "heading-md/semibold",
          children: Z.Z.Messages.GUILD_ROLE_SUBSCRIPTION_IMPORT_BENEFITS_MODAL_HEADER.format({
            tierName: t.name
          })
        }), (0, l.jsx)(T.ModalCloseButton, {
          className: U.modalCloseButton,
          onClick: o
        })]
      }), (0, l.jsxs)(T.ModalContent, {
        className: U.modalContent,
        children: [(0, l.jsx)(F, {
          title: Z.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_CHANNEL_BENEFITS_CHANNELS_TITLE,
          selectAllText: Z.Z.Messages.GUILD_ROLE_SUBSCRIPTION_IMPORT_BENEFITS_SELECT_ALL_CHANNEL_BENEFITS,
          benefits: I,
          dupeBenefits: m,
          selectedBenefits: d,
          onToggleBenefit: g
        }), (0, l.jsx)(F, {
          title: Z.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_INTANGIBLE_BENEFITS_TITLE,
          selectAllText: Z.Z.Messages.GUILD_ROLE_SUBSCRIPTION_IMPORT_BENEFITS_SELECT_ALL_INTANGIBLE_BENEFITS,
          benefits: N,
          dupeBenefits: S,
          selectedBenefits: d,
          onToggleBenefit: g
        })]
      }), (0, l.jsxs)(T.ModalFooter, {
        children: [(0, l.jsx)(T.Button, {
          type: "submit",
          children: Z.Z.Messages.GUILD_ROLE_SUBSCRIPTION_IMPORT_BENEFITS_CONFIRM_BUTTON
        }), (0, l.jsx)(T.Button, {
          look: T.Button.Looks.LINK,
          color: T.Button.Colors.PRIMARY,
          onClick: o,
          children: Z.Z.Messages.CANCEL
        })]
      })]
    })
  })
}

function H(e) {
  var s;
  let {
    guildId: t,
    role: n,
    channelCount: i,
    onSelect: a
  } = e, r = (0, g.p9)({
    guildId: t,
    roleId: n.id,
    size: b
  });
  return (0, l.jsxs)(T.Clickable, {
    className: U.roleRow,
    onClick: a,
    children: [(0, l.jsx)("div", {
      className: U.rowIconWrapper,
      children: null != r ? (0, l.jsx)(A.Z, {
        ...r
      }) : (0, l.jsx)(T.ShieldUserIcon, {
        size: "custom",
        width: 23,
        height: 23,
        color: null !== (s = n.colorString) && void 0 !== s ? s : (0, u.Rf)(j.p6O),
        className: U.roleRowIconDefault
      })
    }), (0, l.jsxs)("div", {
      className: U.rowText,
      children: [(0, l.jsx)(T.Text, {
        color: "header-primary",
        variant: "text-md/normal",
        className: U.__invalid_benefitTitle,
        children: n.name
      }), (0, l.jsx)(T.Text, {
        color: "header-secondary",
        variant: "text-sm/normal",
        children: Z.Z.Messages.NUM_CHANNELS.format({
          num: i
        })
      })]
    }), (0, l.jsx)("div", {
      className: U.rowCheckbox,
      children: (0, l.jsx)(O.Z, {
        direction: O.Z.Directions.RIGHT
      })
    })]
  })
}

function w(e) {
  let {
    guild: s,
    onSelect: t
  } = e, n = (0, E.e7)([R.Z], () => R.Z.getRoles(s.id)), i = (0, E.e7)([x.Z], () => x.Z.getCategories(s.id)), r = a.useMemo(() => i._categories.flatMap(e => i[e.channel.id].filter(e => {
    let {
      channel: s
    } = e;
    return C.zS.has(s.type)
  }).map(e => {
    let {
      channel: s
    } = e;
    return s
  })), [i]), o = a.useMemo(() => Object.values(n).flatMap(e => {
    var t;
    if ((0, S.pM)(s.id, e.id) || (null === (t = e.tags) || void 0 === t ? void 0 : t.subscription_listing_id) != null || d.Db(e.permissions, j.TC2)) return [];
    let n = (0, f.Z)(r, e).length;
    return n > 0 ? {
      role: e,
      channelCount: n
    } : []
  }), [s, n, r]);
  return o.length > 0 ? (0, l.jsx)("div", {
    className: U.list,
    children: o.map(e => (0, l.jsx)(H, {
      guildId: s.id,
      role: e.role,
      channelCount: e.channelCount,
      onSelect: () => t(e.role)
    }, e.role.id))
  }) : (0, l.jsx)(T.Text, {
    variant: "text-md/normal",
    children: Z.Z.Messages.GUILD_ROLE_SUBSCRIPTION_BENEFIT_IMPORT_SELECT_ROLE_EMPTY
  })
}

function V(e) {
  let {
    onClose: s,
    guildId: t,
    onSelect: n
  } = e, i = (0, E.e7)([R.Z], () => R.Z.getGuild(t));
  return null == i ? null : (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsxs)(T.ModalHeader, {
      children: [(0, l.jsx)(T.Heading, {
        id: G,
        variant: "heading-md/semibold",
        children: Z.Z.Messages.GUILD_ROLE_SUBSCRIPTION_IMPORT_BENEFITS_FROM_ROLE_MODAL_HEADER_1
      }), (0, l.jsx)(T.ModalCloseButton, {
        className: U.modalCloseButton,
        onClick: s
      })]
    }), (0, l.jsx)(T.ModalContent, {
      className: U.modalContent,
      children: (0, l.jsx)(w, {
        guild: i,
        onSelect: n
      })
    })]
  })
}

function Y(e) {
  let {
    onClose: s,
    guildId: t,
    role: n,
    onCancel: i,
    onImport: r
  } = e, o = a.useRef(n);
  null != n && (o.current = n);
  let d = null != n ? n : o.current,
    u = (0, c.Z)(() => {
      let e = x.Z.getCategories(t);
      return e._categories.flatMap(s => e[s.channel.id].filter(e => {
        let {
          channel: s
        } = e;
        return C.zS.has(s.type)
      }).map(e => {
        let {
          channel: s
        } = e;
        return s
      }))
    }),
    E = a.useMemo(() => (0, f.Z)(u, d), [u, d]),
    [_, I] = a.useState(() => new Set(E.map(e => e.id)));

  function N(e, s) {
    I(t => {
      let n = new Set(t);
      return s ? n.add(e) : n.delete(e), n
    })
  }
  return (0, l.jsxs)("form", {
    onSubmit: function(e) {
      e.preventDefault(), r(E.map(e => e.id).filter(e => _.has(e))), s()
    },
    className: U.slideForm,
    children: [(0, l.jsxs)(T.ModalHeader, {
      children: [(0, l.jsx)(T.Heading, {
        id: P,
        variant: "heading-md/semibold",
        children: Z.Z.Messages.GUILD_ROLE_SUBSCRIPTION_IMPORT_BENEFITS_FROM_ROLE_MODAL_HEADER_2.format({
          roleName: d.name
        })
      }), (0, l.jsx)(T.ModalCloseButton, {
        className: U.modalCloseButton,
        onClick: s
      })]
    }), (0, l.jsxs)(T.ModalContent, {
      className: U.modalContent,
      children: [E.length > 1 && (0, l.jsx)("div", {
        className: U.list,
        children: (0, l.jsx)(y, {
          icon: (0, l.jsx)(T.ChannelListPlusIcon, {
            size: "md",
            color: "currentColor"
          }),
          checked: _.size === E.length,
          onChange: function(e) {
            for (let s of E) N(s.id, e)
          },
          children: (0, l.jsx)(T.Text, {
            color: "header-primary",
            variant: "text-md/normal",
            children: Z.Z.Messages.GUILD_ROLE_SUBSCRIPTION_IMPORT_BENEFITS_SELECT_ALL_CHANNEL_BENEFITS
          })
        })
      }), (0, l.jsx)("div", {
        className: U.list,
        children: E.map(e => {
          var s;
          let t = null !== (s = (0, m.Th)(e.type)) && void 0 !== s ? s : T.TextIcon;
          return (0, l.jsx)(y, {
            icon: (0, l.jsx)("div", {
              className: U.rowIcon,
              children: (0, l.jsx)(t, {
                size: "custom",
                color: "currentColor",
                width: "100%",
                height: "100%"
              })
            }),
            checked: _.has(e.id),
            onChange: s => N(e.id, s),
            children: (0, l.jsx)(T.Text, {
              color: "header-primary",
              variant: "text-md/normal",
              className: U.__invalid_benefitTitle,
              children: e.name
            })
          }, e.id)
        })
      })]
    }), (0, l.jsxs)(T.ModalFooter, {
      children: [(0, l.jsx)(T.Button, {
        type: "submit",
        children: Z.Z.Messages.GUILD_ROLE_SUBSCRIPTION_IMPORT_BENEFITS_FROM_ROLE_CONFIRM_BUTTON
      }), (0, l.jsx)(T.Button, {
        look: T.Button.Looks.LINK,
        color: T.Button.Colors.PRIMARY,
        onClick: i,
        children: Z.Z.Messages.CANCEL
      })]
    })]
  })
}

function W(e) {
  let {
    transitionState: s,
    guildId: t,
    onClose: n,
    onImport: i
  } = e, [r, o] = a.useState();
  return (0, l.jsx)(T.ModalRoot, {
    transitionState: s,
    "aria-labelledby": null == r ? G : P,
    children: (0, l.jsxs)(T.Slides, {
      contentDisplay: "flex",
      activeSlide: null == r ? 0 : 1,
      width: 440,
      children: [(0, l.jsx)(T.Slide, {
        id: 0,
        children: (0, l.jsx)(V, {
          onClose: n,
          guildId: t,
          onSelect: o
        })
      }), (0, l.jsx)(T.Slide, {
        id: 1,
        children: (0, l.jsx)(Y, {
          onClose: n,
          guildId: t,
          role: r,
          onCancel: () => o(void 0),
          onImport: i
        })
      })]
    })
  })
}(i = n || (n = {}))[i.SELECT_ROLE = 0] = "SELECT_ROLE", i[i.SELECT_CHANNELS = 1] = "SELECT_CHANNELS"