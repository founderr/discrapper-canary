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
  m = t("430824"),
  S = t("314884"),
  f = t("298193"),
  I = t("626135"),
  _ = t("267642"),
  M = t("395199"),
  E = t("719228"),
  x = t("4434"),
  U = t("981631"),
  R = t("689938"),
  N = t("637217");
(a = s || (s = {})).UNUSED_QUANTITY_SELECT = "UNUSED_QUANTITY_SELECT", a.GUILD_SELECT = "GUILD_SELECT", a.CONFIRM = "CONFIRM", a.SUCCESS = "SUCCESS";
l.default = e => {
  var l, t;
  let {
    guildBoostSlots: s,
    selectedGuild: a,
    locationSection: i,
    transitionState: h,
    onClose: g
  } = e, p = (0, _.getAvailableGuildBoostSlots)(S.default.boostSlots);
  o()(null != s || null != a, "Must either provide slots or an initial selected guild"), o()(!(null == s ? void 0 : s.some(e => e.isOnCooldown())), "If slots are provided, they must not be on cooldown");
  let L = [null == s ? "UNUSED_QUANTITY_SELECT" : null, null == a ? "GUILD_SELECT" : null, "CONFIRM", "SUCCESS"].filter(e => null != e),
    [j, B] = (0, d.useStateFromStoresArray)([C.default], () => [C.default.isModifyingAppliedBoost, C.default.applyBoostError]),
    [G, v] = r.useState(""),
    [D, T] = r.useState(L[0]),
    [O, b] = r.useState(!1),
    [y, P] = r.useState(a),
    [A, F] = r.useState(null != s ? s : p.slice(0, 1)),
    k = r.useMemo(() => null == A ? [] : A.map(e => {
      let {
        premiumGuildSubscription: l
      } = e;
      return m.default.getGuild(null == l ? void 0 : l.guildId)
    }).filter(e => null != e), [A]),
    H = r.useMemo(() => {
      var e;
      return (null == A ? void 0 : null === (e = A[0]) || void 0 === e ? void 0 : e.premiumGuildSubscription) != null
    }, [A]),
    w = () => {
      g("SUCCESS" === D), I.default.track(U.AnalyticEvents.MODAL_DISMISSED, {
        type: U.AnalyticsSections.PREMIUM_GUILD_SUBSCRIBE_MODAL,
        location_section: i
      })
    },
    q = {
      UNUSED_QUANTITY_SELECT: {
        body: () => (o()(!(null == s && 0 === p.length), "Cannot provide no slots if there are no other available slots"), (0, n.jsxs)("div", {
          className: N.quantitySelectorBody,
          children: [(0, n.jsx)(u.Heading, {
            variant: "heading-md/semibold",
            className: N.quantitySelectorHeader,
            children: R.default.Messages.PREMIUM_GUILD_SUBSCRIBE_UNUSED_SLOTS_HEADER
          }), (0, n.jsx)(u.Text, {
            variant: "text-md/normal",
            className: N.quantitySelectorDescription,
            children: R.default.Messages.PREMIUM_GUILD_SUBSCRIBE_UNUSED_SLOTS_DESCRIPTION
          }), (0, n.jsxs)("div", {
            className: N.quantitySelectorWrapper,
            children: [(0, n.jsx)(f.default, {
              value: A.length,
              onChange: e => F(p.slice(0, e)),
              minValue: 1,
              maxValue: p.length
            }), (0, n.jsx)(u.Text, {
              className: N.quantitySelectorLabel,
              variant: "text-md/normal",
              children: R.default.Messages.PREMIUM_GUILD_SUBSCRIBE_UNUSED_SLOTS_COUNTER
            })]
          })]
        })),
        footer: () => (0, n.jsxs)(u.ModalFooter, {
          children: [(0, n.jsx)(u.Button, {
            onClick: () => T("CONFIRM"),
            children: R.default.Messages.PREMIUM_GUILD_SUBSCRIBE_UNUSED_SLOTS_NEXT
          }), (0, n.jsx)(u.Button, {
            look: u.Button.Looks.LINK,
            color: u.Button.Colors.PRIMARY,
            onClick: w,
            children: R.default.Messages.PREMIUM_GUILD_SUBSCRIBE_UNUSED_SLOTS_CANCEL
          })]
        })
      },
      GUILD_SELECT: {
        header: () => (0, n.jsx)(E.GuildSelectModalHeader, {
          isTransfer: H,
          query: G,
          setQuery: v
        }),
        bodyClass: N.selectContent,
        body: () => (0, n.jsx)(E.GuildSelectModalBody, {
          onClose: w,
          onSelectGuild: e => {
            P(e), T("CONFIRM")
          },
          isTransfer: H,
          selectedSlotGuilds: k,
          query: G
        })
      },
      CONFIRM: {
        body() {
          if (null == y) return null;
          let e = A.filter(e => (0, _.isGuildBoostSlotCanceled)(e)).length,
            l = A.length,
            t = k.length;
          return H ? (0, n.jsx)(M.default.TransferBody, {
            fromGuilds: k,
            toGuild: y,
            blurb: R.default.Messages.PREMIUM_GUILD_SUBSCRIBE_CONFIRM_TRANSFER_BLURB.format({
              slotCount: l,
              guildCount: t
            }),
            imageClass: N.transferConfirmImage,
            error: O ? B : null,
            onDismissError: () => b(!1),
            slotCount: l,
            canceledCount: e
          }) : (0, n.jsx)(M.default.ApplyBody, {
            guild: y,
            blurb: R.default.Messages.PREMIUM_GUILD_SUBSCRIBE_CONFIRM_BLURB,
            warning: R.default.Messages.PREMIUM_GUILD_SUBSCRIBE_CONFIRM_COOLDOWN_WARNING.format({
              days: U.GUILD_BOOST_APPLY_COOLDOWN_DAYS,
              slotCount: l
            }),
            imageClass: N.confirmImage,
            error: O ? B : null,
            onDismissError: () => b(!1),
            slotCount: l,
            canceledCount: e
          })
        },
        footer() {
          let e = A.length,
            l = "CONFIRM" === L[0] ? w : () => T(L[L.indexOf(D) - 1]),
            t = async () => {
              if (null != y && (null == A ? void 0 : A.length) !== 0) {
                o()(!A.some(e => e.isOnCooldown()), "Cannot use a premium guild subscription slot while on cooldown");
                try {
                  await Promise.all(A.map(e => {
                    let {
                      premiumGuildSubscription: l
                    } = e;
                    return null != l ? (0, c.unapplyFromGuild)(l.guildId, l.id) : Promise.resolve()
                  })), await (0, c.applyToGuild)(y.id, A.map(e => {
                    let {
                      id: l
                    } = e;
                    return l
                  })), T("SUCCESS")
                } catch (e) {
                  b(!0)
                }
              }
            };
          return (0, n.jsx)(M.default.Footer, {
            confirmation: H ? R.default.Messages.PREMIUM_GUILD_SUBSCRIBE_TRANSFER_CONFIRM_CONFIRMATION.format({
              slotCount: e
            }) : R.default.Messages.PREMIUM_GUILD_SUBSCRIBE_CONFIRM_CONFIRMATION.format({
              slotCount: e
            }),
            confirmationLabel: H ? R.default.Messages.PREMIUM_GUILD_SUBSCRIBE_TRANSFER_CONFIRM_CONFIRMATION_LABEL.format({
              slotCount: e
            }) : R.default.Messages.PREMIUM_GUILD_SUBSCRIBE_CONFIRM_CONFIRMATION_LABEL.format({
              slotCount: e
            }),
            onConfirm: t,
            onCancel: l,
            isModifyingSubscription: j
          })
        }
      },
      SUCCESS: {
        body: () => (0, n.jsx)(x.GuildBoostingConfirmation, {
          guild: y,
          isTransfer: H,
          guildBoostQuantity: A.length,
          onClose: w
        })
      }
    };
  r.useEffect(() => {
    I.default.track(U.AnalyticEvents.OPEN_MODAL, {
      type: U.AnalyticsSections.PREMIUM_GUILD_SUBSCRIBE_MODAL,
      location_section: i
    })
  }, [i]);
  let Y = q[D];
  return (0, n.jsxs)(u.ModalRoot, {
    transitionState: h,
    className: N.modal,
    size: u.ModalSize.SMALL,
    children: [null === (l = Y.header) || void 0 === l ? void 0 : l.call(Y), (0, n.jsx)(u.ModalContent, {
      className: Y.bodyClass,
      children: (0, n.jsx)(u.Sequencer, {
        step: D,
        steps: L,
        children: Y.body()
      })
    }), null === (t = Y.footer) || void 0 === t ? void 0 : t.call(Y), (0, n.jsx)(u.ModalCloseButton, {
      className: N.modalCloseButton,
      onClick: w
    })]
  })
}