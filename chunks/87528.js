i.d(t, {
  Z: function() {
    return g
  }
}), i(47120), i(724458), i(653041);
var n = i(735250),
  s = i(470079),
  a = i(912370),
  r = i(477690),
  l = i(153124),
  o = i(626135),
  c = i(463571),
  d = i(744142),
  u = i(132871),
  h = i(147890),
  m = i(216547),
  p = i(57716),
  _ = i(981631),
  x = i(361501);

function g(e) {
  let {
    collection: t,
    collection: {
      id: i,
      title: g,
      application_directory_collection_items: C
    }
  } = e, [I, f] = s.useState(300), [N, v] = s.useState(4), E = parseFloat(r.Z.COLLECTION_LIST_CARD_GAP), T = (0, u.useApplicationDirectoryHistory)(e => e.guildId), R = (0, p.Z)({
    collection: t
  });
  s.useEffect(() => {
    function e() {
      var e;
      let t = null === (e = R.current) || void 0 === e ? void 0 : e.offsetWidth,
        i = 1;
      return null == t ? 300 : (t >= 500 && (i = 2), t >= 700 && (i = 3), t >= 1e3 && (i = 4), v(i), (t - (i - 1) * E) / i)
    }
    let t = R.current;
    if (null == t) return;
    let i = new ResizeObserver(() => {
      f(e())
    });
    return f(e()), i.observe(t), () => {
      i.disconnect()
    }
  }, [E, R]);
  let A = (0, l.Dt)();
  return (0, n.jsx)("div", {
    ref: R,
    children: (0, n.jsx)(m.Z, {
      header: g,
      headerId: A,
      tileWidth: I,
      tileMargin: E,
      onScroll: e => {
        let {
          tileIndex: t
        } = e, n = C.slice(t, t + N).reduce((e, t) => {
          let {
            type: i,
            application: n
          } = t;
          return i === a.C.APPLICATION && null != n && e.push(n.id), e
        }, []);
        o.default.track(_.rMx.APP_DIRECTORY_COLLECTION_SCROLLED, {
          collection_id: i,
          offset: t,
          results: n,
          guild_id: T
        })
      },
      children: (0, n.jsx)("ul", {
        "aria-labelledby": A,
        className: x.itemsContainer,
        children: C.map(e => {
          let {
            id: t,
            type: s,
            application: r
          } = e;
          if (s === a.C.APPLICATION && null != r) return (0, n.jsx)("li", {
            style: {
              width: I
            },
            className: x.itemContainer,
            children: (0, n.jsx)(c.Z, {
              className: x.seoAnchor,
              href: _.Z5c.APPLICATION_DIRECTORY_PROFILE(r.id),
              children: (0, n.jsx)(d.Z, {
                application: r,
                onClick: e => {
                  let {
                    mutualGuilds: t
                  } = e;
                  o.default.track(_.rMx.APP_DIRECTORY_COLLECTION_ITEM_CLICKED, {
                    collection_id: i,
                    application_id: r.id,
                    guild_id: T,
                    shown_mutual_guilds_count: t.length
                  }), (0, h.goToApplication)({
                    applicationId: r.id
                  })
                },
                animatesOnHover: !0
              })
            })
          }, t)
        })
      })
    })
  })
}