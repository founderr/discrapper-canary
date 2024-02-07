"use strict";
n.r(t), n.d(t, {
  Steps: function() {
    return s
  },
  default: function() {
    return N
  }
}), n("222007");
var s, r, l = n("37983"),
  a = n("884691"),
  i = n("627445"),
  o = n.n(i),
  u = n("446674"),
  c = n("77078"),
  d = n("583367"),
  f = n("735201"),
  h = n("305961"),
  E = n("625634"),
  _ = n("751433"),
  p = n("599110"),
  m = n("427459"),
  I = n("903016"),
  S = n("936992"),
  g = n("658206"),
  L = n("49111"),
  C = n("782340"),
  R = n("822841");
(r = s || (s = {})).UNUSED_QUANTITY_SELECT = "UNUSED_QUANTITY_SELECT", r.GUILD_SELECT = "GUILD_SELECT", r.CONFIRM = "CONFIRM", r.SUCCESS = "SUCCESS";
var N = e => {
  var t, n;
  let {
    guildBoostSlots: s,
    selectedGuild: r,
    locationSection: i,
    transitionState: N,
    onClose: T
  } = e, v = (0, m.getAvailableGuildBoostSlots)(E.default.boostSlots);
  o(null != s || null != r, "Must either provide slots or an initial selected guild"), o(!(null == s ? void 0 : s.some(e => e.isOnCooldown())), "If slots are provided, they must not be on cooldown");
  let x = [null == s ? "UNUSED_QUANTITY_SELECT" : null, null == r ? "GUILD_SELECT" : null, "CONFIRM", "SUCCESS"].filter(e => null != e),
    [A, M] = (0, u.useStateFromStoresArray)([f.default], () => [f.default.isModifyingAppliedBoost, f.default.applyBoostError]),
    [U, D] = a.useState(""),
    [O, P] = a.useState(x[0]),
    [B, y] = a.useState(!1),
    [j, G] = a.useState(r),
    [w, b] = a.useState(null != s ? s : v.slice(0, 1)),
    F = a.useMemo(() => null == w ? [] : w.map(e => {
      let {
        premiumGuildSubscription: t
      } = e;
      return h.default.getGuild(null == t ? void 0 : t.guildId)
    }).filter(e => null != e), [w]),
    V = a.useMemo(() => {
      var e;
      return (null == w ? void 0 : null === (e = w[0]) || void 0 === e ? void 0 : e.premiumGuildSubscription) != null
    }, [w]),
    k = () => {
      T("SUCCESS" === O), p.default.track(L.AnalyticEvents.MODAL_DISMISSED, {
        type: L.AnalyticsSections.PREMIUM_GUILD_SUBSCRIBE_MODAL,
        location_section: i
      })
    },
    H = {
      UNUSED_QUANTITY_SELECT: {
        body: () => (o(!(null == s && 0 === v.length), "Cannot provide no slots if there are no other available slots"), (0, l.jsxs)("div", {
          className: R.quantitySelectorBody,
          children: [(0, l.jsx)(c.Heading, {
            variant: "heading-md/semibold",
            className: R.quantitySelectorHeader,
            children: C.default.Messages.PREMIUM_GUILD_SUBSCRIBE_UNUSED_SLOTS_HEADER
          }), (0, l.jsx)(c.Text, {
            variant: "text-md/normal",
            className: R.quantitySelectorDescription,
            children: C.default.Messages.PREMIUM_GUILD_SUBSCRIBE_UNUSED_SLOTS_DESCRIPTION
          }), (0, l.jsxs)("div", {
            className: R.quantitySelectorWrapper,
            children: [(0, l.jsx)(_.default, {
              value: w.length,
              onChange: e => b(v.slice(0, e)),
              minValue: 1,
              maxValue: v.length
            }), (0, l.jsx)(c.Text, {
              className: R.quantitySelectorLabel,
              variant: "text-md/normal",
              children: C.default.Messages.PREMIUM_GUILD_SUBSCRIBE_UNUSED_SLOTS_COUNTER
            })]
          })]
        })),
        footer: () => (0, l.jsxs)(c.ModalFooter, {
          children: [(0, l.jsx)(c.Button, {
            onClick: () => P("CONFIRM"),
            children: C.default.Messages.PREMIUM_GUILD_SUBSCRIBE_UNUSED_SLOTS_NEXT
          }), (0, l.jsx)(c.Button, {
            look: c.Button.Looks.LINK,
            color: c.Button.Colors.PRIMARY,
            onClick: k,
            children: C.default.Messages.PREMIUM_GUILD_SUBSCRIBE_UNUSED_SLOTS_CANCEL
          })]
        })
      },
      GUILD_SELECT: {
        header: () => (0, l.jsx)(S.GuildSelectModalHeader, {
          isTransfer: V,
          query: U,
          setQuery: D
        }),
        bodyClass: R.selectContent,
        body: () => (0, l.jsx)(S.GuildSelectModalBody, {
          onClose: k,
          onSelectGuild: e => {
            G(e), P("CONFIRM")
          },
          isTransfer: V,
          selectedSlotGuilds: F,
          query: U
        })
      },
      CONFIRM: {
        body() {
          if (null == j) return null;
          let e = w.filter(e => (0, m.isGuildBoostSlotCanceled)(e)).length,
            t = w.length,
            n = F.length;
          return V ? (0, l.jsx)(I.default.TransferBody, {
            fromGuilds: F,
            toGuild: j,
            blurb: C.default.Messages.PREMIUM_GUILD_SUBSCRIBE_CONFIRM_TRANSFER_BLURB.format({
              slotCount: t,
              guildCount: n
            }),
            imageClass: R.transferConfirmImage,
            error: B ? M : null,
            onDismissError: () => y(!1),
            slotCount: t,
            canceledCount: e
          }) : (0, l.jsx)(I.default.ApplyBody, {
            guild: j,
            blurb: C.default.Messages.PREMIUM_GUILD_SUBSCRIBE_CONFIRM_BLURB,
            warning: C.default.Messages.PREMIUM_GUILD_SUBSCRIBE_CONFIRM_COOLDOWN_WARNING.format({
              days: L.GUILD_BOOST_APPLY_COOLDOWN_DAYS,
              slotCount: t
            }),
            imageClass: R.confirmImage,
            error: B ? M : null,
            onDismissError: () => y(!1),
            slotCount: t,
            canceledCount: e
          })
        },
        footer() {
          let e = w.length,
            t = "CONFIRM" === x[0] ? k : () => P(x[x.indexOf(O) - 1]),
            n = async () => {
              if (null != j && (null == w ? void 0 : w.length) !== 0) {
                o(!w.some(e => e.isOnCooldown()), "Cannot use a premium guild subscription slot while on cooldown");
                try {
                  await Promise.all(w.map(e => {
                    let {
                      premiumGuildSubscription: t
                    } = e;
                    return null != t ? (0, d.unapplyFromGuild)(t.guildId, t.id) : Promise.resolve()
                  })), await (0, d.applyToGuild)(j.id, w.map(e => {
                    let {
                      id: t
                    } = e;
                    return t
                  })), P("SUCCESS")
                } catch (e) {
                  y(!0)
                }
              }
            };
          return (0, l.jsx)(I.default.Footer, {
            confirmation: V ? C.default.Messages.PREMIUM_GUILD_SUBSCRIBE_TRANSFER_CONFIRM_CONFIRMATION.format({
              slotCount: e
            }) : C.default.Messages.PREMIUM_GUILD_SUBSCRIBE_CONFIRM_CONFIRMATION.format({
              slotCount: e
            }),
            confirmationLabel: V ? C.default.Messages.PREMIUM_GUILD_SUBSCRIBE_TRANSFER_CONFIRM_CONFIRMATION_LABEL.format({
              slotCount: e
            }) : C.default.Messages.PREMIUM_GUILD_SUBSCRIBE_CONFIRM_CONFIRMATION_LABEL.format({
              slotCount: e
            }),
            onConfirm: n,
            onCancel: t,
            isModifyingSubscription: A
          })
        }
      },
      SUCCESS: {
        body: () => (0, l.jsx)(g.GuildBoostingConfirmation, {
          guild: j,
          isTransfer: V,
          guildBoostQuantity: w.length,
          onClose: k
        })
      }
    };
  a.useEffect(() => {
    p.default.track(L.AnalyticEvents.OPEN_MODAL, {
      type: L.AnalyticsSections.PREMIUM_GUILD_SUBSCRIBE_MODAL,
      location_section: i
    })
  }, [i]);
  let W = H[O];
  return (0, l.jsxs)(c.ModalRoot, {
    transitionState: N,
    className: R.modal,
    size: c.ModalSize.SMALL,
    children: [null === (t = W.header) || void 0 === t ? void 0 : t.call(W), (0, l.jsx)(c.ModalContent, {
      className: W.bodyClass,
      children: (0, l.jsx)(c.Sequencer, {
        step: O,
        steps: x,
        children: W.body()
      })
    }), null === (n = W.footer) || void 0 === n ? void 0 : n.call(W), (0, l.jsx)(c.ModalCloseButton, {
      className: R.modalCloseButton,
      onClick: k
    })]
  })
}