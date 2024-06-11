"use strict";
a.r(t), a.d(t, {
  default: function() {
    return A
  }
}), a("47120");
var s = a("735250"),
  l = a("470079"),
  r = a("120356"),
  n = a.n(r),
  i = a("512722"),
  c = a.n(i),
  d = a("442837"),
  o = a("693789"),
  u = a("481060"),
  x = a("809086"),
  m = a("599456"),
  h = a("430824"),
  f = a("465670"),
  j = a("937615"),
  v = a("495437"),
  _ = a("240864"),
  N = a("942833"),
  O = a("598952"),
  I = a("392739"),
  C = a("400916"),
  M = a("916001"),
  T = a("689938"),
  g = a("191881");

function p(e) {
  let {
    guildProductListing: t,
    guildId: a,
    skuPricePreview: l
  } = e, r = (0, N.useProductType)(t), n = (0, j.formatPrice)(l.amount, l.currency), i = (0, d.useStateFromStores)([h.default], () => h.default.getGuild(a));
  return c()(null != i, "guild cannot be null"), (0, s.jsxs)("div", {
    className: g.purchaseSummaryContainer,
    children: [(0, s.jsx)(x.default, {
      alt: "",
      className: g.purchaseSummaryImage,
      listing: t,
      imageSize: 100
    }), (0, s.jsxs)("div", {
      className: g.purchaseSummarInfo,
      children: [(0, s.jsx)(u.Text, {
        variant: "text-md/medium",
        color: "header-primary",
        children: t.name
      }), (0, s.jsx)(u.Spacer, {
        size: 4
      }), (0, s.jsxs)("div", {
        className: g.productTypeContainer,
        children: [(0, s.jsx)(u.Text, {
          variant: "text-xs/normal",
          color: "text-muted",
          children: r
        }), (0, s.jsx)("div", {
          className: g.dotSeparator
        }), (0, s.jsx)(u.Text, {
          variant: "text-xs/normal",
          color: "text-muted",
          lineClamp: 2,
          children: i.name
        })]
      })]
    }), (0, s.jsxs)("div", {
      className: g.purchaseSummaryPrice,
      children: [(0, s.jsx)(u.Text, {
        variant: "text-md/medium",
        color: "header-primary",
        children: n
      }), (0, s.jsx)(u.Spacer, {
        size: 4
      }), (0, s.jsx)(u.Text, {
        variant: "text-xs/normal",
        color: "text-muted",
        children: T.default.Messages.GUILD_PRODUCT_PURCHASE_SUMMARY_TOTAL_PAID
      })]
    })]
  })
}

function D(e) {
  var t;
  let {
    guildProductListing: a,
    guildId: l
  } = e, r = null !== (t = a.attachments) && void 0 !== t ? t : [], i = r.length > 1;
  return 0 === r.length ? null : (0, s.jsx)(I.default, {
    label: T.default.Messages.GUILD_PRODUCT_CONFIRMATION_MODAL_DOWNLOADABLE_UNLOCKED,
    children: (0, s.jsxs)("div", {
      className: n()(g.attachmentsContainer, {
        [g.attachmentsContainerMultiple]: i
      }),
      children: [(0, s.jsx)("div", {
        className: g.attachmentGrid,
        children: r.map(e => (0, s.jsx)(O.default, {
          attachment: e
        }, e.id))
      }), (0, s.jsx)("div", {
        children: (0, s.jsx)(C.default, {
          guildId: l,
          productId: a.id
        })
      })]
    })
  })
}

function R(e) {
  let {
    role: t
  } = e;
  return null == t ? null : (0, s.jsx)(I.default, {
    label: T.default.Messages.GUILD_PRODUCT_CONFIRMATION_MODAL_ROLE_UNLOCKED,
    children: (0, s.jsx)(M.default, {
      role: t
    })
  })
}

function L(e) {
  return (0, s.jsx)(u.Text, {
    tag: "span",
    variant: "text-md/semibold",
    color: "text-normal",
    children: e
  })
}

function A(e) {
  var t;
  let {
    onClose: a,
    transitionState: r,
    guildProductListingId: n,
    guildId: i,
    skuPricePreview: x
  } = e, j = (0, d.useStateFromStores)([_.default], () => _.default.getGuildProduct(n));
  c()(null != j, "guildProductListing cannot be null");
  let [N, O] = l.useState(!1);
  l.useEffect(() => {
    (async function e() {
      try {
        O(!0), await (0, v.fetchGuildProduct)(i, n), O(!1)
      } catch (e) {
        a(), (0, m.default)({
          body: T.default.Messages.GUILD_PRODUCT_CONFIRMATION_MODAL_GENRIC_ERROR_BODY,
          confirmText: T.default.Messages.GOT_IT,
          header: T.default.Messages.GUILD_PRODUCT_CONFIRMATION_MODAL_GENRIC_ERROR_HEADER,
          confirmButtonColor: o.Button.Colors.BRAND
        })
      }
    })()
  }, [i, n, a]);
  let I = (null !== (t = j.attachments) && void 0 !== t ? t : []).length > 0,
    C = j.role_id,
    M = (0, d.useStateFromStores)([h.default], () => null != C ? h.default.getRole(i, C) : void 0);
  return (0, s.jsx)(u.ModalRoot, {
    className: g.modal,
    size: u.ModalSize.DYNAMIC,
    transitionState: r,
    "aria-label": j.name,
    children: (0, s.jsx)(u.ModalContent, {
      children: (0, s.jsx)("div", {
        className: g.container,
        children: N ? (0, s.jsx)(u.Spinner, {}) : (0, s.jsxs)(s.Fragment, {
          children: [(0, s.jsxs)("div", {
            className: g.header,
            children: [(0, s.jsx)(u.Heading, {
              variant: "heading-xl/semibold",
              color: "header-primary",
              children: T.default.Messages.GUILD_PRODUCT_CONFIRMATION_MODAL_TITLE
            }), (0, s.jsx)(u.Clickable, {
              onClick: a,
              children: (0, s.jsx)(f.default, {
                width: 24,
                height: 24,
                className: g.close
              })
            })]
          }), (0, s.jsx)(u.Spacer, {
            size: 16
          }), (0, s.jsx)(u.Text, {
            variant: "text-md/normal",
            color: "text-normal",
            children: T.default.Messages.GUILD_PRODUCT_CONFIRMATION_MODAL_BODY_INTRO.format({
              productName: j.name,
              emphasisHook: L
            })
          }), (0, s.jsx)(u.Spacer, {
            size: 12
          }), (0, s.jsxs)(u.Text, {
            variant: "text-md/normal",
            color: "text-normal",
            children: [I ? T.default.Messages.GUILD_PRODUCT_CONFIRMATION_MODAL_BODY_ATTACHMENT + " " : "", null != M ? T.default.Messages.GUILD_PRODUCT_CONFIRMATION_MODAL_BODY_ROLE.format({
              roleName: M.name,
              emphasisHook: L
            }) : ""]
          }), (0, s.jsx)(u.Spacer, {
            size: 12
          }), (0, s.jsx)(u.Text, {
            variant: "text-md/normal",
            color: "text-normal",
            children: T.default.Messages.GUILD_PRODUCT_CONFIRMATION_MODAL_BODY_THANK_YOU
          }), (0, s.jsx)(u.Spacer, {
            size: 24
          }), (0, s.jsx)(p, {
            guildProductListing: j,
            guildId: i,
            skuPricePreview: x
          }), (0, s.jsx)(u.Spacer, {
            size: 32
          }), (0, s.jsx)("div", {
            className: g.divider
          }), (0, s.jsx)(u.Spacer, {
            size: 32
          }), (0, s.jsxs)("ul", {
            className: g.benefitsContainer,
            children: [(0, s.jsx)(D, {
              guildProductListing: j,
              guildId: i
            }), (0, s.jsx)(R, {
              role: M
            })]
          })]
        })
      })
    })
  })
}