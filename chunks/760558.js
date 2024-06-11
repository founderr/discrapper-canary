"use strict";
t.r(l), t.d(l, {
  Steps: function() {
    return s
  }
}), t("47120");
var s, a, n = t("735250"),
  r = t("470079"),
  i = t("512722"),
  o = t.n(i),
  d = t("442837"),
  u = t("481060"),
  c = t("179360"),
  C = t("899667"),
  S = t("430824"),
  m = t("314884"),
  I = t("626135"),
  f = t("267642"),
  _ = t("395199"),
  M = t("719228"),
  E = t("4434"),
  x = t("981631"),
  U = t("689938"),
  N = t("637217");
(a = s || (s = {})).UNUSED_QUANTITY_SELECT = "UNUSED_QUANTITY_SELECT", a.GUILD_SELECT = "GUILD_SELECT", a.CONFIRM = "CONFIRM", a.SUCCESS = "SUCCESS";
l.default = e => {
  var l, t;
  let {
    guildBoostSlots: s,
    selectedGuild: a,
    locationSection: i,
    transitionState: R,
    onClose: h
  } = e, g = (0, f.getAvailableGuildBoostSlots)(m.default.boostSlots);
  o()(null != s || null != a, "Must either provide slots or an initial selected guild"), o()(!(null == s ? void 0 : s.some(e => e.isOnCooldown())), "If slots are provided, they must not be on cooldown");
  let p = [null == s ? "UNUSED_QUANTITY_SELECT" : null, null == a ? "GUILD_SELECT" : null, "CONFIRM", "SUCCESS"].filter(e => null != e),
    [L, B] = (0, d.useStateFromStoresArray)([C.default], () => [C.default.isModifyingAppliedBoost, C.default.applyBoostError]),
    [j, G] = r.useState(""),
    [v, D] = r.useState(p[0]),
    [T, O] = r.useState(!1),
    [b, y] = r.useState(a),
    [P, A] = r.useState(null != s ? s : g.slice(0, 1)),
    F = r.useMemo(() => null == P ? [] : P.map(e => {
      let {
        premiumGuildSubscription: l
      } = e;
      return S.default.getGuild(null == l ? void 0 : l.guildId)
    }).filter(e => null != e), [P]),
    k = r.useMemo(() => {
      var e;
      return (null == P ? void 0 : null === (e = P[0]) || void 0 === e ? void 0 : e.premiumGuildSubscription) != null
    }, [P]),
    H = () => {
      h("SUCCESS" === v), I.default.track(x.AnalyticEvents.MODAL_DISMISSED, {
        type: x.AnalyticsSections.PREMIUM_GUILD_SUBSCRIBE_MODAL,
        location_section: i
      })
    },
    w = {
      UNUSED_QUANTITY_SELECT: {
        body: () => (o()(!(null == s && 0 === g.length), "Cannot provide no slots if there are no other available slots"), (0, n.jsxs)("div", {
          className: N.quantitySelectorBody,
          children: [(0, n.jsx)(u.Heading, {
            variant: "heading-md/semibold",
            className: N.quantitySelectorHeader,
            children: U.default.Messages.PREMIUM_GUILD_SUBSCRIBE_UNUSED_SLOTS_HEADER
          }), (0, n.jsx)(u.Text, {
            variant: "text-md/normal",
            className: N.quantitySelectorDescription,
            children: U.default.Messages.PREMIUM_GUILD_SUBSCRIBE_UNUSED_SLOTS_DESCRIPTION
          }), (0, n.jsxs)("div", {
            className: N.quantitySelectorWrapper,
            children: [(0, n.jsx)(u.NumberInputStepper, {
              value: P.length,
              onChange: e => A(g.slice(0, e)),
              minValue: 1,
              maxValue: g.length
            }), (0, n.jsx)(u.Text, {
              className: N.quantitySelectorLabel,
              variant: "text-md/normal",
              children: U.default.Messages.PREMIUM_GUILD_SUBSCRIBE_UNUSED_SLOTS_COUNTER
            })]
          })]
        })),
        footer: () => (0, n.jsxs)(u.ModalFooter, {
          children: [(0, n.jsx)(u.Button, {
            onClick: () => D("CONFIRM"),
            children: U.default.Messages.PREMIUM_GUILD_SUBSCRIBE_UNUSED_SLOTS_NEXT
          }), (0, n.jsx)(u.Button, {
            look: u.Button.Looks.LINK,
            color: u.Button.Colors.PRIMARY,
            onClick: H,
            children: U.default.Messages.PREMIUM_GUILD_SUBSCRIBE_UNUSED_SLOTS_CANCEL
          })]
        })
      },
      GUILD_SELECT: {
        header: () => (0, n.jsx)(M.GuildSelectModalHeader, {
          isTransfer: k,
          query: j,
          setQuery: G
        }),
        bodyClass: N.selectContent,
        body: () => (0, n.jsx)(M.GuildSelectModalBody, {
          onClose: H,
          onSelectGuild: e => {
            y(e), D("CONFIRM")
          },
          isTransfer: k,
          selectedSlotGuilds: F,
          query: j
        })
      },
      CONFIRM: {
        body() {
          if (null == b) return null;
          let e = P.filter(e => (0, f.isGuildBoostSlotCanceled)(e)).length,
            l = P.length,
            t = F.length;
          return k ? (0, n.jsx)(_.default.TransferBody, {
            fromGuilds: F,
            toGuild: b,
            blurb: U.default.Messages.PREMIUM_GUILD_SUBSCRIBE_CONFIRM_TRANSFER_BLURB.format({
              slotCount: l,
              guildCount: t
            }),
            imageClass: N.transferConfirmImage,
            error: T ? B : null,
            onDismissError: () => O(!1),
            slotCount: l,
            canceledCount: e
          }) : (0, n.jsx)(_.default.ApplyBody, {
            guild: b,
            blurb: U.default.Messages.PREMIUM_GUILD_SUBSCRIBE_CONFIRM_BLURB,
            warning: U.default.Messages.PREMIUM_GUILD_SUBSCRIBE_CONFIRM_COOLDOWN_WARNING.format({
              days: x.GUILD_BOOST_APPLY_COOLDOWN_DAYS,
              slotCount: l
            }),
            imageClass: N.confirmImage,
            error: T ? B : null,
            onDismissError: () => O(!1),
            slotCount: l,
            canceledCount: e
          })
        },
        footer() {
          let e = P.length,
            l = "CONFIRM" === p[0] ? H : () => D(p[p.indexOf(v) - 1]),
            t = async () => {
              if (null != b && (null == P ? void 0 : P.length) !== 0) {
                o()(!P.some(e => e.isOnCooldown()), "Cannot use a premium guild subscription slot while on cooldown");
                try {
                  await Promise.all(P.map(e => {
                    let {
                      premiumGuildSubscription: l
                    } = e;
                    return null != l ? (0, c.unapplyFromGuild)(l.guildId, l.id) : Promise.resolve()
                  })), await (0, c.applyToGuild)(b.id, P.map(e => {
                    let {
                      id: l
                    } = e;
                    return l
                  })), D("SUCCESS")
                } catch (e) {
                  O(!0)
                }
              }
            };
          return (0, n.jsx)(_.default.Footer, {
            confirmation: k ? U.default.Messages.PREMIUM_GUILD_SUBSCRIBE_TRANSFER_CONFIRM_CONFIRMATION.format({
              slotCount: e
            }) : U.default.Messages.PREMIUM_GUILD_SUBSCRIBE_CONFIRM_CONFIRMATION.format({
              slotCount: e
            }),
            confirmationLabel: k ? U.default.Messages.PREMIUM_GUILD_SUBSCRIBE_TRANSFER_CONFIRM_CONFIRMATION_LABEL.format({
              slotCount: e
            }) : U.default.Messages.PREMIUM_GUILD_SUBSCRIBE_CONFIRM_CONFIRMATION_LABEL.format({
              slotCount: e
            }),
            onConfirm: t,
            onCancel: l,
            isModifyingSubscription: L
          })
        }
      },
      SUCCESS: {
        body: () => (0, n.jsx)(E.GuildBoostingConfirmation, {
          guild: b,
          isTransfer: k,
          guildBoostQuantity: P.length,
          onClose: H
        })
      }
    };
  r.useEffect(() => {
    I.default.track(x.AnalyticEvents.OPEN_MODAL, {
      type: x.AnalyticsSections.PREMIUM_GUILD_SUBSCRIBE_MODAL,
      location_section: i
    })
  }, [i]);
  let q = w[v];
  return (0, n.jsxs)(u.ModalRoot, {
    transitionState: R,
    className: N.modal,
    size: u.ModalSize.SMALL,
    children: [null === (l = q.header) || void 0 === l ? void 0 : l.call(q), (0, n.jsx)(u.ModalContent, {
      className: q.bodyClass,
      children: (0, n.jsx)(u.Sequencer, {
        step: v,
        steps: p,
        children: q.body()
      })
    }), null === (t = q.footer) || void 0 === t ? void 0 : t.call(q), (0, n.jsx)(u.ModalCloseButton, {
      className: N.modalCloseButton,
      onClick: H
    })]
  })
}