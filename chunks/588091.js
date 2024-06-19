s.r(a), s.d(a, {
  default: function() {
    return L
  }
}), s(47120);
var t = s(735250),
  r = s(470079),
  n = s(120356),
  l = s.n(n),
  i = s(512722),
  c = s.n(i),
  o = s(442837),
  d = s(693789),
  x = s(481060),
  m = s(809086),
  u = s(599456),
  h = s(430824),
  j = s(937615),
  _ = s(495437),
  O = s(240864),
  N = s(942833),
  I = s(598952),
  T = s(392739),
  C = s(400916),
  D = s(916001),
  v = s(689938),
  M = s(823465);

function p(e) {
  let {
    guildProductListing: a,
    guildId: s,
    skuPricePreview: r
  } = e, n = (0, N.C)(a), l = (0, j.T4)(r.amount, r.currency), i = (0, o.e7)([h.Z], () => h.Z.getGuild(s));
  return c()(null != i, "guild cannot be null"), (0, t.jsxs)("div", {
    className: M.purchaseSummaryContainer,
    children: [(0, t.jsx)(m.Z, {
      alt: "",
      className: M.purchaseSummaryImage,
      listing: a,
      imageSize: 100
    }), (0, t.jsxs)("div", {
      className: M.purchaseSummarInfo,
      children: [(0, t.jsx)(x.Text, {
        variant: "text-md/medium",
        color: "header-primary",
        children: a.name
      }), (0, t.jsx)(x.Spacer, {
        size: 4
      }), (0, t.jsxs)("div", {
        className: M.productTypeContainer,
        children: [(0, t.jsx)(x.Text, {
          variant: "text-xs/normal",
          color: "text-muted",
          children: n
        }), (0, t.jsx)("div", {
          className: M.dotSeparator
        }), (0, t.jsx)(x.Text, {
          variant: "text-xs/normal",
          color: "text-muted",
          lineClamp: 2,
          children: i.name
        })]
      })]
    }), (0, t.jsxs)("div", {
      className: M.purchaseSummaryPrice,
      children: [(0, t.jsx)(x.Text, {
        variant: "text-md/medium",
        color: "header-primary",
        children: l
      }), (0, t.jsx)(x.Spacer, {
        size: 4
      }), (0, t.jsx)(x.Text, {
        variant: "text-xs/normal",
        color: "text-muted",
        children: v.Z.Messages.GUILD_PRODUCT_PURCHASE_SUMMARY_TOTAL_PAID
      })]
    })]
  })
}

function R(e) {
  var a;
  let {
    guildProductListing: s,
    guildId: r
  } = e, n = null !== (a = s.attachments) && void 0 !== a ? a : [], i = n.length > 1;
  return 0 === n.length ? null : (0, t.jsx)(T.Z, {
    label: v.Z.Messages.GUILD_PRODUCT_CONFIRMATION_MODAL_DOWNLOADABLE_UNLOCKED,
    children: (0, t.jsxs)("div", {
      className: l()(M.attachmentsContainer, {
        [M.attachmentsContainerMultiple]: i
      }),
      children: [(0, t.jsx)("div", {
        className: M.attachmentGrid,
        children: n.map(e => (0, t.jsx)(I.Z, {
          attachment: e
        }, e.id))
      }), (0, t.jsx)("div", {
        children: (0, t.jsx)(C.Z, {
          guildId: r,
          productId: s.id
        })
      })]
    })
  })
}

function g(e) {
  let {
    role: a
  } = e;
  return null == a ? null : (0, t.jsx)(T.Z, {
    label: v.Z.Messages.GUILD_PRODUCT_CONFIRMATION_MODAL_ROLE_UNLOCKED,
    children: (0, t.jsx)(D.Z, {
      role: a
    })
  })
}

function f(e) {
  return (0, t.jsx)(x.Text, {
    tag: "span",
    variant: "text-md/semibold",
    color: "text-normal",
    children: e
  })
}

function L(e) {
  var a;
  let {
    onClose: s,
    transitionState: n,
    guildProductListingId: l,
    guildId: i,
    skuPricePreview: m
  } = e, j = (0, o.e7)([O.Z], () => O.Z.getGuildProduct(l));
  c()(null != j, "guildProductListing cannot be null");
  let [N, I] = r.useState(!1);
  r.useEffect(() => {
    (async function e() {
      try {
        I(!0), await (0, _.cf)(i, l), I(!1)
      } catch (e) {
        s(), (0, u.Z)({
          body: v.Z.Messages.GUILD_PRODUCT_CONFIRMATION_MODAL_GENRIC_ERROR_BODY,
          confirmText: v.Z.Messages.GOT_IT,
          header: v.Z.Messages.GUILD_PRODUCT_CONFIRMATION_MODAL_GENRIC_ERROR_HEADER,
          confirmButtonColor: d.zx.Colors.BRAND
        })
      }
    })()
  }, [i, l, s]);
  let T = (null !== (a = j.attachments) && void 0 !== a ? a : []).length > 0,
    C = j.role_id,
    D = (0, o.e7)([h.Z], () => null != C ? h.Z.getRole(i, C) : void 0);
  return (0, t.jsx)(x.ModalRoot, {
    className: M.modal,
    size: x.ModalSize.DYNAMIC,
    transitionState: n,
    "aria-label": j.name,
    children: (0, t.jsx)(x.ModalContent, {
      children: (0, t.jsx)("div", {
        className: M.container,
        children: N ? (0, t.jsx)(x.Spinner, {}) : (0, t.jsxs)(t.Fragment, {
          children: [(0, t.jsxs)("div", {
            className: M.header,
            children: [(0, t.jsx)(x.Heading, {
              variant: "heading-xl/semibold",
              color: "header-primary",
              children: v.Z.Messages.GUILD_PRODUCT_CONFIRMATION_MODAL_TITLE
            }), (0, t.jsx)(x.Clickable, {
              onClick: s,
              children: (0, t.jsx)(x.CloseSmallIcon, {
                size: "md",
                color: "currentColor",
                className: M.close
              })
            })]
          }), (0, t.jsx)(x.Spacer, {
            size: 16
          }), (0, t.jsx)(x.Text, {
            variant: "text-md/normal",
            color: "text-normal",
            children: v.Z.Messages.GUILD_PRODUCT_CONFIRMATION_MODAL_BODY_INTRO.format({
              productName: j.name,
              emphasisHook: f
            })
          }), (0, t.jsx)(x.Spacer, {
            size: 12
          }), (0, t.jsxs)(x.Text, {
            variant: "text-md/normal",
            color: "text-normal",
            children: [T ? v.Z.Messages.GUILD_PRODUCT_CONFIRMATION_MODAL_BODY_ATTACHMENT + " " : "", null != D ? v.Z.Messages.GUILD_PRODUCT_CONFIRMATION_MODAL_BODY_ROLE.format({
              roleName: D.name,
              emphasisHook: f
            }) : ""]
          }), (0, t.jsx)(x.Spacer, {
            size: 12
          }), (0, t.jsx)(x.Text, {
            variant: "text-md/normal",
            color: "text-normal",
            children: v.Z.Messages.GUILD_PRODUCT_CONFIRMATION_MODAL_BODY_THANK_YOU
          }), (0, t.jsx)(x.Spacer, {
            size: 24
          }), (0, t.jsx)(p, {
            guildProductListing: j,
            guildId: i,
            skuPricePreview: m
          }), (0, t.jsx)(x.Spacer, {
            size: 32
          }), (0, t.jsx)("div", {
            className: M.divider
          }), (0, t.jsx)(x.Spacer, {
            size: 32
          }), (0, t.jsxs)("ul", {
            className: M.benefitsContainer,
            children: [(0, t.jsx)(R, {
              guildProductListing: j,
              guildId: i
            }), (0, t.jsx)(g, {
              role: D
            })]
          })]
        })
      })
    })
  })
}