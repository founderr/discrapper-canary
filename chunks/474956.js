"use strict";
n.r(t), n.d(t, {
  default: function() {
    return g
  }
}), n("222007");
var i, r, l = n("37983"),
  a = n("884691"),
  s = n("77078"),
  o = n("651057"),
  u = n("299285"),
  c = n("20606"),
  d = n("907038"),
  f = n("539938"),
  h = n("653047"),
  p = n("131233"),
  v = n("782340"),
  m = n("501701");

function g(e) {
  let {
    onClose: t,
    transitionState: n,
    appId: i,
    guildId: r,
    subscriptionGroupListing: g
  } = e, [x, C] = a.useState(() => {
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
  }), E = 2 === x.status ? x.app : null;
  if (a.useEffect(() => {
      0 === x.status && (C({
        status: 1
      }), o.default.fetchApplication(i).then(e => {
        C({
          status: 2,
          app: h.default.createFromServer(e)
        })
      }).catch(e => {
        C({
          status: 3,
          error: e.message
        })
      }))
    }, [i, x.status]), null == E) return null;
  let b = v.default.Messages.STOREFRONT_TITLE.format({
    appName: E.name
  });
  return (0, l.jsxs)(s.ModalRoot, {
    transitionState: n,
    "aria-label": b,
    size: s.ModalSize.LARGE,
    children: [(0, l.jsx)(s.ModalHeader, {
      children: (0, l.jsxs)(f.default, {
        children: [(0, l.jsx)(f.default.Icon, {
          icon: d.default,
          "aria-hidden": !0,
          color: c.default.INTERACTIVE_ACTIVE
        }), (0, l.jsx)(f.default.Title, {
          children: b
        }), (0, l.jsx)(s.ModalCloseButton, {
          onClick: t,
          className: m.modalCloseButton
        })]
      })
    }), (0, l.jsx)(s.ModalContent, {
      children: (0, l.jsx)(p.default, {
        app: E,
        subscriptionGroupListing: g,
        guildId: r
      })
    })]
  })
}(r = i || (i = {}))[r.NONE = 0] = "NONE", r[r.FETCHING = 1] = "FETCHING", r[r.FETCHED = 2] = "FETCHED", r[r.ERROR = 3] = "ERROR"