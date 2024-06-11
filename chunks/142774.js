"use strict";
s.r(t), s.d(t, {
  CreateEmojiWithRolesModal: function() {
    return g
  },
  UpdateEmojiRolesModal: function() {
    return O
  }
}), s("47120");
var a = s("735250"),
  l = s("470079"),
  i = s("120356"),
  n = s.n(i),
  r = s("392711"),
  o = s.n(r),
  d = s("153832"),
  c = s("481060"),
  u = s("80932"),
  _ = s("935369"),
  h = s("730089"),
  S = s("153124"),
  m = s("626135"),
  E = s("768581"),
  x = s("584825"),
  j = s("46887"),
  f = s("981631"),
  L = s("689938"),
  M = s("124849");
let R = e => {
  let {
    className: t,
    onChange: s,
    textVariant: l = "text-md/normal",
    label: i,
    value: r,
    isArchived: o = !1
  } = e;
  return (0, a.jsx)(c.Checkbox, {
    size: 24,
    className: n()(M.checklistRow, t),
    value: r,
    onChange: s,
    type: c.Checkbox.Types.INVERTED,
    children: (0, a.jsxs)("div", {
      className: M.checklistLabel,
      children: [(0, a.jsx)(c.Text, {
        color: "interactive-active",
        variant: l,
        children: i
      }), o && (0, a.jsx)(c.TextBadge, {
        text: L.default.Messages.GUILD_ROLE_SUBSCRIPTION_TIER_MANAGEMENT_ARCHIVED_LABEL
      })]
    })
  })
};

function I(e) {
  let {
    transitionState: t,
    onClose: s,
    initialRoleIds: i = [],
    listingChoices: n,
    emojiUrl: r,
    saving: d,
    onSave: u
  } = e, _ = (0, S.useUID)(), [h, m] = l.useState(() => new Set(i)), E = l.useMemo(() => o().isEqual(h, new Set(n.map(e => {
    let {
      role_id: t
    } = e;
    return t
  }))), [n, h]), x = h.size > 0, j = e => m(t => {
    let s = new Set(t);
    return t.has(e) ? s.delete(e) : s.add(e), s
  }), f = () => {
    u(Array.from(h), s)
  };
  return (0, a.jsxs)(c.ModalRoot, {
    transitionState: t,
    "aria-labelledby": _,
    children: [(0, a.jsxs)(c.ModalHeader, {
      separator: !1,
      children: [(0, a.jsxs)("div", {
        className: M.headerContent,
        children: [(0, a.jsx)(c.Image, {
          src: r,
          width: 40,
          height: 40,
          alt: ""
        }), (0, a.jsx)(c.Spacer, {
          size: 16,
          horizontal: !0
        }), (0, a.jsxs)("div", {
          className: M.__invalid_headerText,
          children: [(0, a.jsx)(c.Heading, {
            id: _,
            variant: "heading-md/semibold",
            children: L.default.Messages.GUILD_ROLE_SUBSCRIPTIONS_MANAGE_EMOJI_ROLES_MODAL_HEADER
          }), (0, a.jsx)(c.Spacer, {
            size: 2
          }), (0, a.jsx)(c.Text, {
            variant: "text-sm/normal",
            color: "header-secondary",
            children: L.default.Messages.GUILD_ROLE_SUBSCRIPTIONS_MANAGE_EMOJI_ROLES_MODAL_DESCRIPTION
          })]
        })]
      }), (0, a.jsx)(c.ModalCloseButton, {
        className: M.closeButton,
        onClick: s
      })]
    }), (0, a.jsx)("div", {
      className: M.seperator
    }), (0, a.jsx)(c.ModalContent, {
      className: M.modalContent,
      children: (0, a.jsxs)("div", {
        className: M.checklistContainer,
        children: [(0, a.jsx)(R, {
          className: M.selectAllCheckbox,
          label: L.default.Messages.GUILD_ROLE_SUBSCRIPTIONS_MANAGE_EMOJI_ROLES_MODAL_SELECT_ALL_LABEL,
          textVariant: "text-md/semibold",
          value: E,
          onChange: () => {
            E ? m(new Set) : m(new Set(n.map(e => {
              let {
                role_id: t
              } = e;
              return t
            })))
          }
        }, "allSubscriptionRoles"), n.map((e, t) => (0, a.jsxs)(a.Fragment, {
          children: [0 !== t && (0, a.jsx)("div", {
            className: M.seperator
          }), (0, a.jsx)(R, {
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
        text: L.default.Messages.GUILD_ROLE_SUBSCRIPTIONS_MANAGE_EMOJI_ROLES_MODAL_NEEDS_ONE_ROLE,
        children: e => (0, a.jsx)(c.Button, {
          ...e,
          "aria-label": L.default.Messages.SAVE,
          disabled: !x,
          submitting: d,
          onClick: f,
          children: L.default.Messages.SAVE
        })
      })
    })]
  })
}

function g(e) {
  let {
    guildId: t,
    data: s,
    file: i,
    ...n
  } = e, [r, o] = l.useState(!1), c = async (e, a) => {
    try {
      o(!0);
      let l = (0, d.v4)();
      m.default.track(f.AnalyticEvents.EMOJI_UPLOAD_STARTED, {
        guild_id: t,
        upload_id: l
      }), await (0, h.uploadEmojiFile)({
        guildId: t,
        uploadId: l,
        data: s,
        file: i,
        roles: e
      }), a()
    } catch (e) {} finally {
      o(!1)
    }
  }, u = (0, x.useSubscriptionListingsForGuild)(t, {
    includeSoftDeleted: !0,
    sortDeletedListingsLast: !0
  });
  return (0, a.jsx)(I, {
    emojiUrl: s,
    onSave: c,
    saving: r,
    listingChoices: u,
    ...n
  })
}

function O(e) {
  let {
    emoji: t,
    guildId: s,
    ...i
  } = e, n = E.default.getEmojiURL({
    id: t.id,
    animated: t.animated,
    size: 40
  }), [r, {
    loading: o
  }] = (0, _.default)(u.updateEmoji), d = async (e, a) => {
    null != await r({
      guildId: s,
      emojiId: t.id,
      roles: e
    }) && a()
  }, c = (0, x.useSubscriptionListingsForGuild)(s, {
    includeSoftDeleted: !0
  });
  c.sort((e, t) => Number(e.soft_deleted) - Number(t.soft_deleted));
  let h = (0, j.default)(s),
    S = l.useMemo(() => {
      let e = new Set(h.map(e => {
        let {
          id: t
        } = e;
        return t
      }));
      return t.roles.filter(t => e.has(t))
    }, [t.roles, h]);
  return (0, a.jsx)(I, {
    emojiUrl: n,
    onSave: d,
    initialRoleIds: S,
    saving: o,
    listingChoices: c,
    ...i
  })
}