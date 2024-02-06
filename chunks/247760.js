"use strict";
n.r(t), n.d(t, {
  Steps: function() {
    return r
  },
  default: function() {
    return N
  }
}), n("222007");
var r, s, l = n("37983"),
  i = n("884691"),
  a = n("627445"),
  o = n.n(a),
  u = n("446674"),
  c = n("77078"),
  d = n("583367"),
  f = n("735201"),
  h = n("305961"),
  p = n("625634"),
  E = n("751433"),
  m = n("599110"),
  I = n("427459"),
  S = n("903016"),
  _ = n("936992"),
  g = n("658206"),
  C = n("49111"),
  L = n("782340"),
  R = n("822841");
(s = r || (r = {})).UNUSED_QUANTITY_SELECT = "UNUSED_QUANTITY_SELECT", s.GUILD_SELECT = "GUILD_SELECT", s.CONFIRM = "CONFIRM", s.SUCCESS = "SUCCESS";
var N = e => {
  var t, n;
  let {
    guildBoostSlots: r,
    selectedGuild: s,
    locationSection: a,
    transitionState: N,
    onClose: x
  } = e, v = (0, I.getAvailableGuildBoostSlots)(p.default.boostSlots);
  o(null != r || null != s, "Must either provide slots or an initial selected guild"), o(!(null == r ? void 0 : r.some(e => e.isOnCooldown())), "If slots are provided, they must not be on cooldown");
  let M = [null == r ? "UNUSED_QUANTITY_SELECT" : null, null == s ? "GUILD_SELECT" : null, "CONFIRM", "SUCCESS"].filter(e => null != e),
    [T, A] = (0, u.useStateFromStoresArray)([f.default], () => [f.default.isModifyingAppliedBoost, f.default.applyBoostError]),
    [U, D] = i.useState(""),
    [P, O] = i.useState(M[0]),
    [B, y] = i.useState(!1),
    [j, G] = i.useState(s),
    [w, b] = i.useState(null != r ? r : v.slice(0, 1)),
    F = i.useMemo(() => null == w ? [] : w.map(e => {
      let {
        premiumGuildSubscription: t
      } = e;
      return h.default.getGuild(null == t ? void 0 : t.guildId)
    }).filter(e => null != e), [w]),
    V = i.useMemo(() => {
      var e;
      return (null == w ? void 0 : null === (e = w[0]) || void 0 === e ? void 0 : e.premiumGuildSubscription) != null
    }, [w]),
    k = () => {
      x("SUCCESS" === P), m.default.track(C.AnalyticEvents.MODAL_DISMISSED, {
        type: C.AnalyticsSections.PREMIUM_GUILD_SUBSCRIBE_MODAL,
        location_section: a
      })
    },
    H = {
      UNUSED_QUANTITY_SELECT: {
        body: () => (o(!(null == r && 0 === v.length), "Cannot provide no slots if there are no other available slots"), (0, l.jsxs)("div", {
          className: R.quantitySelectorBody,
          children: [(0, l.jsx)(c.Heading, {
            variant: "heading-md/semibold",
            className: R.quantitySelectorHeader,
            children: L.default.Messages.PREMIUM_GUILD_SUBSCRIBE_UNUSED_SLOTS_HEADER
          }), (0, l.jsx)(c.Text, {
            variant: "text-md/normal",
            className: R.quantitySelectorDescription,
            children: L.default.Messages.PREMIUM_GUILD_SUBSCRIBE_UNUSED_SLOTS_DESCRIPTION
          }), (0, l.jsxs)("div", {
            className: R.quantitySelectorWrapper,
            children: [(0, l.jsx)(E.default, {
              value: w.length,
              onChange: e => b(v.slice(0, e)),
              minValue: 1,
              maxValue: v.length
            }), (0, l.jsx)(c.Text, {
              className: R.quantitySelectorLabel,
              variant: "text-md/normal",
              children: L.default.Messages.PREMIUM_GUILD_SUBSCRIBE_UNUSED_SLOTS_COUNTER
            })]
          })]
        })),
        footer: () => (0, l.jsxs)(c.ModalFooter, {
          children: [(0, l.jsx)(c.Button, {
            onClick: () => O("CONFIRM"),
            children: L.default.Messages.PREMIUM_GUILD_SUBSCRIBE_UNUSED_SLOTS_NEXT
          }), (0, l.jsx)(c.Button, {
            look: c.Button.Looks.LINK,
            color: c.Button.Colors.PRIMARY,
            onClick: k,
            children: L.default.Messages.PREMIUM_GUILD_SUBSCRIBE_UNUSED_SLOTS_CANCEL
          })]
        })
      },
      GUILD_SELECT: {
        header: () => (0, l.jsx)(_.GuildSelectModalHeader, {
          isTransfer: V,
          query: U,
          setQuery: D
        }),
        bodyClass: R.selectContent,
        body: () => (0, l.jsx)(_.GuildSelectModalBody, {
          onClose: k,
          onSelectGuild: e => {
            G(e), O("CONFIRM")
          },
          isTransfer: V,
          selectedSlotGuilds: F,
          query: U
        })
      },
      CONFIRM: {
        body() {
          if (null == j) return null;
          let e = w.filter(e => (0, I.isGuildBoostSlotCanceled)(e)).length,
            t = w.length,
            n = F.length;
          return V ? (0, l.jsx)(S.default.TransferBody, {
            fromGuilds: F,
            toGuild: j,
            blurb: L.default.Messages.PREMIUM_GUILD_SUBSCRIBE_CONFIRM_TRANSFER_BLURB.format({
              slotCount: t,
              guildCount: n
            }),
            imageClass: R.transferConfirmImage,
            error: B ? A : null,
            onDismissError: () => y(!1),
            slotCount: t,
            canceledCount: e
          }) : (0, l.jsx)(S.default.ApplyBody, {
            guild: j,
            blurb: L.default.Messages.PREMIUM_GUILD_SUBSCRIBE_CONFIRM_BLURB,
            warning: L.default.Messages.PREMIUM_GUILD_SUBSCRIBE_CONFIRM_COOLDOWN_WARNING.format({
              days: C.GUILD_BOOST_APPLY_COOLDOWN_DAYS,
              slotCount: t
            }),
            imageClass: R.confirmImage,
            error: B ? A : null,
            onDismissError: () => y(!1),
            slotCount: t,
            canceledCount: e
          })
        },
        footer() {
          let e = w.length,
            t = "CONFIRM" === M[0] ? k : () => O(M[M.indexOf(P) - 1]),
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
                  })), O("SUCCESS")
                } catch (e) {
                  y(!0)
                }
              }
            };
          return (0, l.jsx)(S.default.Footer, {
            confirmation: V ? L.default.Messages.PREMIUM_GUILD_SUBSCRIBE_TRANSFER_CONFIRM_CONFIRMATION.format({
              slotCount: e
            }) : L.default.Messages.PREMIUM_GUILD_SUBSCRIBE_CONFIRM_CONFIRMATION.format({
              slotCount: e
            }),
            confirmationLabel: V ? L.default.Messages.PREMIUM_GUILD_SUBSCRIBE_TRANSFER_CONFIRM_CONFIRMATION_LABEL.format({
              slotCount: e
            }) : L.default.Messages.PREMIUM_GUILD_SUBSCRIBE_CONFIRM_CONFIRMATION_LABEL.format({
              slotCount: e
            }),
            onConfirm: n,
            onCancel: t,
            isModifyingSubscription: T
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
  i.useEffect(() => {
    m.default.track(C.AnalyticEvents.OPEN_MODAL, {
      type: C.AnalyticsSections.PREMIUM_GUILD_SUBSCRIBE_MODAL,
      location_section: a
    })
  }, [a]);
  let W = H[P];
  return (0, l.jsxs)(c.ModalRoot, {
    transitionState: N,
    className: R.modal,
    size: c.ModalSize.SMALL,
    children: [null === (t = W.header) || void 0 === t ? void 0 : t.call(W), (0, l.jsx)(c.ModalContent, {
      className: W.bodyClass,
      children: (0, l.jsx)(c.Sequencer, {
        step: P,
        steps: M,
        children: W.body()
      })
    }), null === (n = W.footer) || void 0 === n ? void 0 : n.call(W), (0, l.jsx)(c.ModalCloseButton, {
      className: R.modalCloseButton,
      onClick: k
    })]
  })
}