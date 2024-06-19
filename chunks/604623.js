t.r(s), t.d(s, {
  CreateEmojiWithRolesModal: function() {
    return N
  },
  UpdateEmojiRolesModal: function() {
    return g
  }
}), t(47120);
var a = t(735250),
  i = t(470079),
  l = t(120356),
  n = t.n(l),
  r = t(392711),
  o = t.n(r),
  d = t(772848),
  c = t(481060),
  _ = t(80932),
  u = t(935369),
  h = t(730089),
  E = t(153124),
  S = t(626135),
  m = t(768581),
  x = t(584825),
  j = t(46887),
  M = t(981631),
  L = t(689938),
  R = t(105857);
let I = e => {
  let {
    className: s,
    onChange: t,
    textVariant: i = "text-md/normal",
    label: l,
    value: r,
    isArchived: o = !1
  } = e;
  return (0, a.jsx)(c.Checkbox, {
    size: 24,
    className: n()(R.checklistRow, s),
    value: r,
    onChange: t,
    type: c.Checkbox.Types.INVERTED,
    children: (0, a.jsxs)("div", {
      className: R.checklistLabel,
      children: [(0, a.jsx)(c.Text, {
        color: "interactive-active",
        variant: i,
        children: l
      }), o && (0, a.jsx)(c.TextBadge, {
        text: L.Z.Messages.GUILD_ROLE_SUBSCRIPTION_TIER_MANAGEMENT_ARCHIVED_LABEL
      })]
    })
  })
};

function O(e) {
  let {
    transitionState: s,
    onClose: t,
    initialRoleIds: l = [],
    listingChoices: n,
    emojiUrl: r,
    saving: d,
    onSave: _
  } = e, u = (0, E.Dt)(), [h, S] = i.useState(() => new Set(l)), m = i.useMemo(() => o().isEqual(h, new Set(n.map(e => {
    let {
      role_id: s
    } = e;
    return s
  }))), [n, h]), x = h.size > 0, j = e => S(s => {
    let t = new Set(s);
    return s.has(e) ? t.delete(e) : t.add(e), t
  }), M = () => {
    _(Array.from(h), t)
  };
  return (0, a.jsxs)(c.ModalRoot, {
    transitionState: s,
    "aria-labelledby": u,
    children: [(0, a.jsxs)(c.ModalHeader, {
      separator: !1,
      children: [(0, a.jsxs)("div", {
        className: R.headerContent,
        children: [(0, a.jsx)(c.Image, {
          src: r,
          width: 40,
          height: 40,
          alt: ""
        }), (0, a.jsx)(c.Spacer, {
          size: 16,
          horizontal: !0
        }), (0, a.jsxs)("div", {
          className: R.__invalid_headerText,
          children: [(0, a.jsx)(c.Heading, {
            id: u,
            variant: "heading-md/semibold",
            children: L.Z.Messages.GUILD_ROLE_SUBSCRIPTIONS_MANAGE_EMOJI_ROLES_MODAL_HEADER
          }), (0, a.jsx)(c.Spacer, {
            size: 2
          }), (0, a.jsx)(c.Text, {
            variant: "text-sm/normal",
            color: "header-secondary",
            children: L.Z.Messages.GUILD_ROLE_SUBSCRIPTIONS_MANAGE_EMOJI_ROLES_MODAL_DESCRIPTION
          })]
        })]
      }), (0, a.jsx)(c.ModalCloseButton, {
        className: R.closeButton,
        onClick: t
      })]
    }), (0, a.jsx)("div", {
      className: R.seperator
    }), (0, a.jsx)(c.ModalContent, {
      className: R.modalContent,
      children: (0, a.jsxs)("div", {
        className: R.checklistContainer,
        children: [(0, a.jsx)(I, {
          className: R.selectAllCheckbox,
          label: L.Z.Messages.GUILD_ROLE_SUBSCRIPTIONS_MANAGE_EMOJI_ROLES_MODAL_SELECT_ALL_LABEL,
          textVariant: "text-md/semibold",
          value: m,
          onChange: () => {
            m ? S(new Set) : S(new Set(n.map(e => {
              let {
                role_id: s
              } = e;
              return s
            })))
          }
        }, "allSubscriptionRoles"), n.map((e, s) => (0, a.jsxs)(a.Fragment, {
          children: [0 !== s && (0, a.jsx)("div", {
            className: R.seperator
          }), (0, a.jsx)(I, {
            onChange: () => j(e.role_id),
            value: h.has(e.role_id),
            label: e.name,
            isArchived: e.archived
          }, e.role_id)]
        }))]
      })
    }), (0, a.jsx)(c.ModalFooter, {
      children: (0, a.jsx)(c.Tooltip, {
        shouldShow: !x,
        text: L.Z.Messages.GUILD_ROLE_SUBSCRIPTIONS_MANAGE_EMOJI_ROLES_MODAL_NEEDS_ONE_ROLE,
        children: e => (0, a.jsx)(c.Button, {
          ...e,
          "aria-label": L.Z.Messages.SAVE,
          disabled: !x,
          submitting: d,
          onClick: M,
          children: L.Z.Messages.SAVE
        })
      })
    })]
  })
}

function N(e) {
  let {
    guildId: s,
    data: t,
    file: l,
    ...n
  } = e, [r, o] = i.useState(!1), c = async (e, a) => {
    try {
      o(!0);
      let i = (0, d.Z)();
      S.default.track(M.rMx.EMOJI_UPLOAD_STARTED, {
        guild_id: s,
        upload_id: i
      }), await (0, h.G)({
        guildId: s,
        uploadId: i,
        data: t,
        file: l,
        roles: e
      }), a()
    } catch (e) {} finally {
      o(!1)
    }
  }, _ = (0, x.qi)(s, {
    includeSoftDeleted: !0,
    sortDeletedListingsLast: !0
  });
  return (0, a.jsx)(O, {
    emojiUrl: t,
    onSave: c,
    saving: r,
    listingChoices: _,
    ...n
  })
}

function g(e) {
  let {
    emoji: s,
    guildId: t,
    ...l
  } = e, n = m.ZP.getEmojiURL({
    id: s.id,
    animated: s.animated,
    size: 40
  }), [r, {
    loading: o
  }] = (0, u.Z)(_.dv), d = async (e, a) => {
    null != await r({
      guildId: t,
      emojiId: s.id,
      roles: e
    }) && a()
  }, c = (0, x.qi)(t, {
    includeSoftDeleted: !0
  });
  c.sort((e, s) => Number(e.soft_deleted) - Number(s.soft_deleted));
  let h = (0, j.Z)(t),
    E = i.useMemo(() => {
      let e = new Set(h.map(e => {
        let {
          id: s
        } = e;
        return s
      }));
      return s.roles.filter(s => e.has(s))
    }, [s.roles, h]);
  return (0, a.jsx)(O, {
    emojiUrl: n,
    onSave: d,
    initialRoleIds: E,
    saving: o,
    listingChoices: c,
    ...l
  })
}