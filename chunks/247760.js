"use strict";
n.r(t), n.d(t, {
  Steps: function() {
    return s
  },
  default: function() {
    return T
  }
}), n("222007");
var s, a, r = n("37983"),
  i = n("884691"),
  l = n("627445"),
  o = n.n(l),
  u = n("446674"),
  d = n("77078"),
  c = n("583367"),
  f = n("735201"),
  _ = n("305961"),
  E = n("625634"),
  h = n("751433"),
  m = n("599110"),
  p = n("427459"),
  S = n("903016"),
  I = n("936992"),
  C = n("658206"),
  g = n("49111"),
  R = n("782340"),
  N = n("545480");
(a = s || (s = {})).UNUSED_QUANTITY_SELECT = "UNUSED_QUANTITY_SELECT", a.GUILD_SELECT = "GUILD_SELECT", a.CONFIRM = "CONFIRM", a.SUCCESS = "SUCCESS";
var T = e => {
  var t, n;
  let {
    guildBoostSlots: s,
    selectedGuild: a,
    locationSection: l,
    transitionState: T,
    onClose: L
  } = e, A = (0, p.getAvailableGuildBoostSlots)(E.default.boostSlots);
  o(null != s || null != a, "Must either provide slots or an initial selected guild"), o(!(null == s ? void 0 : s.some(e => e.isOnCooldown())), "If slots are provided, they must not be on cooldown");
  let M = [null == s ? "UNUSED_QUANTITY_SELECT" : null, null == a ? "GUILD_SELECT" : null, "CONFIRM", "SUCCESS"].filter(e => null != e),
    [x, D] = (0, u.useStateFromStoresArray)([f.default], () => [f.default.isModifyingAppliedBoost, f.default.applyBoostError]),
    [v, U] = i.useState(""),
    [O, P] = i.useState(M[0]),
    [B, y] = i.useState(!1),
    [G, j] = i.useState(a),
    [w, b] = i.useState(null != s ? s : A.slice(0, 1)),
    F = i.useMemo(() => null == w ? [] : w.map(e => {
      let {
        premiumGuildSubscription: t
      } = e;
      return _.default.getGuild(null == t ? void 0 : t.guildId)
    }).filter(e => null != e), [w]),
    k = i.useMemo(() => {
      var e;
      return (null == w ? void 0 : null === (e = w[0]) || void 0 === e ? void 0 : e.premiumGuildSubscription) != null
    }, [w]),
    H = () => {
      L("SUCCESS" === O), m.default.track(g.AnalyticEvents.MODAL_DISMISSED, {
        type: g.AnalyticsSections.PREMIUM_GUILD_SUBSCRIBE_MODAL,
        location_section: l
      })
    },
    V = {
      UNUSED_QUANTITY_SELECT: {
        body: () => (o(!(null == s && 0 === A.length), "Cannot provide no slots if there are no other available slots"), (0, r.jsxs)("div", {
          className: N.quantitySelectorBody,
          children: [(0, r.jsx)(d.Heading, {
            variant: "heading-md/semibold",
            className: N.quantitySelectorHeader,
            children: R.default.Messages.PREMIUM_GUILD_SUBSCRIBE_UNUSED_SLOTS_HEADER
          }), (0, r.jsx)(d.Text, {
            variant: "text-md/normal",
            className: N.quantitySelectorDescription,
            children: R.default.Messages.PREMIUM_GUILD_SUBSCRIBE_UNUSED_SLOTS_DESCRIPTION
          }), (0, r.jsxs)("div", {
            className: N.quantitySelectorWrapper,
            children: [(0, r.jsx)(h.default, {
              value: w.length,
              onChange: e => b(A.slice(0, e)),
              minValue: 1,
              maxValue: A.length
            }), (0, r.jsx)(d.Text, {
              className: N.quantitySelectorLabel,
              variant: "text-md/normal",
              children: R.default.Messages.PREMIUM_GUILD_SUBSCRIBE_UNUSED_SLOTS_COUNTER
            })]
          })]
        })),
        footer: () => (0, r.jsxs)(d.ModalFooter, {
          children: [(0, r.jsx)(d.Button, {
            onClick: () => P("CONFIRM"),
            children: R.default.Messages.PREMIUM_GUILD_SUBSCRIBE_UNUSED_SLOTS_NEXT
          }), (0, r.jsx)(d.Button, {
            look: d.Button.Looks.LINK,
            color: d.Button.Colors.PRIMARY,
            onClick: H,
            children: R.default.Messages.PREMIUM_GUILD_SUBSCRIBE_UNUSED_SLOTS_CANCEL
          })]
        })
      },
      GUILD_SELECT: {
        header: () => (0, r.jsx)(I.GuildSelectModalHeader, {
          isTransfer: k,
          query: v,
          setQuery: U
        }),
        bodyClass: N.selectContent,
        body: () => (0, r.jsx)(I.GuildSelectModalBody, {
          onClose: H,
          onSelectGuild: e => {
            j(e), P("CONFIRM")
          },
          isTransfer: k,
          selectedSlotGuilds: F,
          query: v
        })
      },
      CONFIRM: {
        body() {
          if (null == G) return null;
          let e = w.filter(e => (0, p.isGuildBoostSlotCanceled)(e)).length,
            t = w.length,
            n = F.length;
          return k ? (0, r.jsx)(S.default.TransferBody, {
            fromGuilds: F,
            toGuild: G,
            blurb: R.default.Messages.PREMIUM_GUILD_SUBSCRIBE_CONFIRM_TRANSFER_BLURB.format({
              slotCount: t,
              guildCount: n
            }),
            imageClass: N.transferConfirmImage,
            error: B ? D : null,
            onDismissError: () => y(!1),
            slotCount: t,
            canceledCount: e
          }) : (0, r.jsx)(S.default.ApplyBody, {
            guild: G,
            blurb: R.default.Messages.PREMIUM_GUILD_SUBSCRIBE_CONFIRM_BLURB,
            warning: R.default.Messages.PREMIUM_GUILD_SUBSCRIBE_CONFIRM_COOLDOWN_WARNING.format({
              days: g.GUILD_BOOST_APPLY_COOLDOWN_DAYS,
              slotCount: t
            }),
            imageClass: N.confirmImage,
            error: B ? D : null,
            onDismissError: () => y(!1),
            slotCount: t,
            canceledCount: e
          })
        },
        footer() {
          let e = w.length,
            t = "CONFIRM" === M[0] ? H : () => P(M[M.indexOf(O) - 1]),
            n = async () => {
              if (null != G && (null == w ? void 0 : w.length) !== 0) {
                o(!w.some(e => e.isOnCooldown()), "Cannot use a premium guild subscription slot while on cooldown");
                try {
                  await Promise.all(w.map(e => {
                    let {
                      premiumGuildSubscription: t
                    } = e;
                    return null != t ? (0, c.unapplyFromGuild)(t.guildId, t.id) : Promise.resolve()
                  })), await (0, c.applyToGuild)(G.id, w.map(e => {
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
          return (0, r.jsx)(S.default.Footer, {
            confirmation: k ? R.default.Messages.PREMIUM_GUILD_SUBSCRIBE_TRANSFER_CONFIRM_CONFIRMATION.format({
              slotCount: e
            }) : R.default.Messages.PREMIUM_GUILD_SUBSCRIBE_CONFIRM_CONFIRMATION.format({
              slotCount: e
            }),
            confirmationLabel: k ? R.default.Messages.PREMIUM_GUILD_SUBSCRIBE_TRANSFER_CONFIRM_CONFIRMATION_LABEL.format({
              slotCount: e
            }) : R.default.Messages.PREMIUM_GUILD_SUBSCRIBE_CONFIRM_CONFIRMATION_LABEL.format({
              slotCount: e
            }),
            onConfirm: n,
            onCancel: t,
            isModifyingSubscription: x
          })
        }
      },
      SUCCESS: {
        body: () => (0, r.jsx)(C.GuildBoostingConfirmation, {
          guild: G,
          isTransfer: k,
          guildBoostQuantity: w.length,
          onClose: H
        })
      }
    };
  i.useEffect(() => {
    m.default.track(g.AnalyticEvents.OPEN_MODAL, {
      type: g.AnalyticsSections.PREMIUM_GUILD_SUBSCRIBE_MODAL,
      location_section: l
    })
  }, [l]);
  let W = V[O];
  return (0, r.jsxs)(d.ModalRoot, {
    transitionState: T,
    className: N.modal,
    size: d.ModalSize.SMALL,
    children: [null === (t = W.header) || void 0 === t ? void 0 : t.call(W), (0, r.jsx)(d.ModalContent, {
      className: W.bodyClass,
      children: (0, r.jsx)(d.Sequencer, {
        step: O,
        steps: M,
        children: W.body()
      })
    }), null === (n = W.footer) || void 0 === n ? void 0 : n.call(W), (0, r.jsx)(d.ModalCloseButton, {
      className: N.modalCloseButton,
      onClick: H
    })]
  })
}