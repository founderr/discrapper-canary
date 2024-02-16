"use strict";
n.r(t), n.d(t, {
  default: function() {
    return S
  }
}), n("222007");
var i, a, r = n("37983"),
  s = n("884691"),
  l = n("446674"),
  o = n("77078"),
  u = n("55620"),
  c = n("651057"),
  d = n("299285"),
  f = n("20606"),
  p = n("907038"),
  m = n("539938"),
  h = n("653047"),
  g = n("552712"),
  v = n("131233"),
  x = n("49111"),
  b = n("782340"),
  E = n("454436");

function S(e) {
  let {
    onClose: t,
    transitionState: n,
    appId: i,
    guildId: a,
    subscriptionGroupListing: S
  } = e, [R, I] = s.useState(() => {
    let e = d.default.getApplication(i);
    if (null != e) return {
      status: 2,
      app: e
    };
    let t = d.default.isFetchingApplication(i);
    return t ? {
      status: 1
    } : {
      status: 0
    }
  }), N = 2 === R.status ? R.app : null;
  s.useEffect(() => {
    0 === R.status && (I({
      status: 1
    }), c.default.fetchApplication(i).then(e => {
      I({
        status: 2,
        app: h.default.createFromServer(e)
      })
    }).catch(e => {
      I({
        status: 3,
        error: e.message
      })
    }))
  }, [i, R.status]);
  let j = (0, l.useStateFromStoresArray)([g.default], () => g.default.getForApplication(i).filter(e => {
    switch (e.type) {
      case x.SKUTypes.DURABLE:
      case x.SKUTypes.CONSUMABLE:
        return !0;
      default:
        return !1
    }
  }), [i]);
  if (s.useEffect(() => {
      (0, u.fetchAllStoreListingsForApplication)(i)
    }, [i]), null == N) return null;
  let T = b.default.Messages.STOREFRONT_TITLE.format({
    appName: N.name
  });
  return (0, r.jsxs)(o.ModalRoot, {
    transitionState: n,
    "aria-label": T,
    size: o.ModalSize.LARGE,
    children: [(0, r.jsx)(o.ModalHeader, {
      children: (0, r.jsxs)(m.default, {
        children: [(0, r.jsx)(m.default.Icon, {
          icon: p.default,
          "aria-hidden": !0,
          color: f.default.INTERACTIVE_ACTIVE
        }), (0, r.jsx)(m.default.Title, {
          children: T
        }), (0, r.jsx)(o.ModalCloseButton, {
          onClick: t,
          className: E.modalCloseButton
        })]
      })
    }), (0, r.jsx)(o.ModalContent, {
      children: (0, r.jsx)(v.default, {
        app: N,
        subscriptionGroupListing: S,
        guildId: a,
        products: j
      })
    })]
  })
}(a = i || (i = {}))[a.NONE = 0] = "NONE", a[a.FETCHING = 1] = "FETCHING", a[a.FETCHED = 2] = "FETCHED", a[a.ERROR = 3] = "ERROR"