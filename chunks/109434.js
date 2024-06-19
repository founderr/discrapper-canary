n.d(t, {
  H: function() {
    return T
  },
  v: function() {
    return f
  }
}), n(47120);
var i = n(512722),
  s = n.n(i),
  a = n(652874),
  l = n(313361),
  o = n(683860),
  r = n(442837),
  u = n(592125),
  c = n(559241);

function d(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let h = new Set,
  m = {
    layoutType: l.X.LIST,
    sortOrder: o.z.CREATION_DATE,
    tagFilter: h,
    scrollPosition: 0
  };
class p {
  constructor(e, t) {
    d(this, "set", void 0), d(this, "get", void 0), d(this, "channelStates", void 0), d(this, "setChannelState", void 0), d(this, "getChannelState", void 0), d(this, "toggleTagFilter", void 0), d(this, "setTagFilter", void 0), d(this, "setSortOrder", void 0), d(this, "setLayoutType", void 0), d(this, "setScrollPosition", void 0), this.set = e, this.get = t, this.channelStates = {}, this.setChannelState = (e, t) => {
      let n = this.get(),
        i = this.getChannelState(e),
        s = {
          ...n.channelStates
        };
      s[e] = {
        ...i,
        ...t
      }, this.set({
        channelStates: s
      })
    }, this.getChannelState = e => {
      if (null == e) return m;
      let {
        channelStates: t
      } = this.get(), n = t[e];
      if (null == n) {
        let t = u.Z.getChannel(e);
        s()(null != t, "[Forum Channel Store] The channel should not be missing."), n = {
          layoutType: t.getDefaultLayout(),
          sortOrder: t.getDefaultSortOrder(),
          tagFilter: h,
          scrollPosition: 0
        }
      }
      return n
    }, this.toggleTagFilter = (e, t) => {
      let n = new Set(this.getChannelState(e).tagFilter);
      n.has(t) ? n.delete(t) : n.add(t), this.setTagFilter(e, n)
    }, this.setTagFilter = (e, t) => {
      this.setChannelState(e, {
        tagFilter: t
      }), c.Z.setFilterTagIds(t)
    }, this.setSortOrder = (e, t) => {
      this.setChannelState(e, {
        sortOrder: t
      }), c.Z.setSortOrder(t)
    }, this.setLayoutType = (e, t) => {
      this.setChannelState(e, {
        layoutType: t
      }), c.Z.setLayout(t)
    }, this.setScrollPosition = (e, t) => {
      this.setChannelState(e, {
        scrollPosition: t
      })
    }
  }
}
let g = (0, a.Z)((e, t) => new p(e, t)),
  T = e => {
    let t = g();
    return null == (0, r.e7)([u.Z], () => u.Z.getChannel(e)) ? m : t.getChannelState(e)
  },
  f = () => g