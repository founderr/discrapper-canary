"use strict";
n.r(t), n.d(t, {
  default: function() {
    return S
  }
}), n("222007");
var i, r, a = n("37983"),
  s = n("884691"),
  l = n("446674"),
  o = n("77078"),
  c = n("55620"),
  d = n("651057"),
  u = n("299285"),
  f = n("20606"),
  h = n("907038"),
  m = n("539938"),
  v = n("653047"),
  g = n("552712"),
  p = n("131233"),
  x = n("49111"),
  b = n("782340"),
  j = n("454436");

function S(e) {
  let {
    onClose: t,
    transitionState: n,
    appId: i,
    guildId: r,
    subscriptionGroupListing: S
  } = e, [N, E] = s.useState(() => {
    let e = u.default.getApplication(i);
    if (null != e) return {
      status: 2,
      app: e
    };
    let t = u.default.isFetchingApplication(i);
    return t ? {
      status: 1
    } : {
      status: 0
    }
  }), R = 2 === N.status ? N.app : null;
  s.useEffect(() => {
    0 === N.status && (E({
      status: 1
    }), d.default.fetchApplication(i).then(e => {
      E({
        status: 2,
        app: v.default.createFromServer(e)
      })
    }).catch(e => {
      E({
        status: 3,
        error: e.message
      })
    }))
  }, [i, N.status]);
  let I = (0, l.useStateFromStoresArray)([g.default], () => g.default.getForApplication(i).filter(e => {
    switch (e.type) {
      case x.SKUTypes.DURABLE:
      case x.SKUTypes.CONSUMABLE:
        return !0;
      default:
        return !1
    }
  }), [i]);
  if (s.useEffect(() => {
      (0, c.fetchAllStoreListingsForApplication)(i)
    }, [i]), null == R) return null;
  let T = b.default.Messages.STOREFRONT_TITLE.format({
    appName: R.name
  });
  return (0, a.jsxs)(o.ModalRoot, {
    transitionState: n,
    "aria-label": T,
    size: o.ModalSize.LARGE,
    children: [(0, a.jsx)(o.ModalHeader, {
      children: (0, a.jsxs)(m.default, {
        children: [(0, a.jsx)(m.default.Icon, {
          icon: h.default,
          "aria-hidden": !0,
          color: f.default.INTERACTIVE_ACTIVE
        }), (0, a.jsx)(m.default.Title, {
          children: T
        }), (0, a.jsx)(o.ModalCloseButton, {
          onClick: t,
          className: j.modalCloseButton
        })]
      })
    }), (0, a.jsx)(o.ModalContent, {
      children: (0, a.jsx)(p.default, {
        app: R,
        subscriptionGroupListing: S,
        guildId: r,
        products: I
      })
    })]
  })
}(r = i || (i = {}))[r.NONE = 0] = "NONE", r[r.FETCHING = 1] = "FETCHING", r[r.FETCHED = 2] = "FETCHED", r[r.ERROR = 3] = "ERROR"