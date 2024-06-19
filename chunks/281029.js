n.d(t, {
  Dn: function() {
    return h
  },
  if: function() {
    return d
  },
  ig: function() {
    return a
  }
}), n(47120), n(733860), n(653041);
var l = n(740504),
  i = n(131704),
  s = n(990492),
  r = n(981631);

function a(e, t) {
  return null != e && null != t && (e === t || (0, i.r8)(e) && (0, i.r8)(t) || (0, i.bw)(e) && (0, i.bw)(t))
}

function o(e, t, n, l) {
  let i = -1;
  if (l.find((e, n) => {
      let {
        channel: l
      } = e;
      return l.id === t && (i = n, !0)
    }), i < 0) return null;
  for (let t = i; t >= 0 && t < l.length; t += e) {
    let e = l[t];
    if (a(e.channel.type, n)) return e
  }
  return null
}

function u(e, t) {
  let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
  if (null == e) return 0;
  let l = null;
  return t.filter(t => {
    let {
      channel: {
        type: l
      }
    } = t;
    return null != e && (n || a(e.type, l))
  }).find((t, n) => {
    let {
      channel: {
        id: i
      }
    } = t;
    return null != e && i === e.id && (l = n, !0)
  }), l
}

function c(e) {
  return {
    referenceId: e.id,
    parentId: e.parent_id
  }
}

function d(e, t, n, l, s) {
  if (null == e || null == n) return null;
  let {
    GUILD_CATEGORY: d
  } = r.d4z;
  if (e.type === d) return l === t || l < t && e.type === n.type ? c(n) : l > t ? function(e, t, n) {
    var l;
    let {
      GUILD_CATEGORY: i
    } = r.d4z, s = n[(null !== (l = u(t, n, !0)) && void 0 !== l ? l : 0) + 1], a = o(-1, t.id, e.type, n);
    return null == a || a.channel.id === e.id ? null : null == s || s.channel.type === i ? {
      referenceId: a.channel.id,
      parentId: null
    } : null
  }(e, n, s) : null;
  if (a(e.type, n.type)) return c(n);
  if (l < t) return n.type === d ? function(e, t, n) {
    var l;
    let s = n[(null !== (l = u(t, n, !0)) && void 0 !== l ? l : 0) - 1],
      r = o(1, t.id, e.type, n);
    if (null == s) return {
      referenceId: null,
      parentId: null
    };
    if (null != r) {
      if (a(s.channel.type, e.type) || e.isGuildVocal() && (0, i.r8)(s.channel.type)) return {
        referenceId: r.channel.id,
        parentId: s.channel.parent_id
      };
      if (s.channel.isCategory()) return {
        referenceId: r.channel.id,
        parentId: s.channel.id
      }
    }
    return null
  }(e, n, s) : function(e, t, n) {
    var l;
    let s = n[(null !== (l = u(t, n, !0)) && void 0 !== l ? l : 0) - 1],
      r = o(1, t.id, e.type, n);
    return null != s || e.isGuildVocal() ? (0, i.r8)(e.type) && null != r && ((0, i.r8)(s.channel.type) || s.channel.isCategory()) ? {
      referenceId: r.channel.id,
      parentId: t.parent_id
    } : null : {
      referenceId: null != r ? r.channel.id : null,
      parentId: null
    }
  }(e, n, s);
  return n.type === d ? function(e, t, n) {
    var l;
    let s = n[(null !== (l = u(t, n, !0)) && void 0 !== l ? l : 0) + 1],
      r = o(-1, t.id, e.type, n);
    if (null != r) {
      if (null == s) return {
        referenceId: r.channel.id,
        parentId: t.id
      };
      if (a(s.channel.type, e.type) || (0, i.r8)(e.type) && s.channel.isGuildVocal()) return {
        referenceId: r.channel.id,
        parentId: s.channel.parent_id
      };
      if (s.channel.isCategory()) return {
        referenceId: r.channel.id,
        parentId: t.id
      }
    }
    return null
  }(e, n, s) : function(e, t, n) {
    var l;
    let i = n[(null !== (l = u(t, n, !0)) && void 0 !== l ? l : 0) + 1],
      s = o(-1, t.id, e.type, n);
    if (null == s) return null;
    if (e.isGuildVocal()) {
      if (null == i || i.channel.isCategory()) return {
        referenceId: s.channel.id,
        parentId: t.parent_id
      };
      if (i.channel.isGuildVocal()) return {
        referenceId: s.channel.id,
        parentId: i.channel.parent_id
      }
    }
    return e.isCategory() && (null == i || i.channel.isCategory()) ? {
      referenceId: s.channel.id,
      parentId: null
    } : null
  }(e, n, s)
}

function h(e, t, n, r) {
  let a, o, c = [],
    d = [],
    h = r._categories,
    g = t => {
      var n, l, i, r;
      let u;
      if (null == a || null == o || (n = e, l = a, i = o, r = t, null != l && null != i && null != r[l] && r[l].channel === n && null != r[i] ? 0 : 1)) u = [...t];
      else u = s.ZP.moveItemFromTo(t, a, o);
      return c = c.concat(s.ZP.calculatePositionDeltas({
        oldOrdering: t,
        newOrdering: u,
        idGetter: e => {
          let {
            channel: t
          } = e;
          return t.id
        },
        existingPositionGetter: e => {
          let {
            channel: t
          } = e;
          return t.position
        }
      })), u
    };
  if (e.isCategory()) {
    let n = [...h].slice(1);
    a = u(e, n), o = u(t, n), (d = g(n)).unshift(h[0])
  }
  if ((0, i.r8)(e.type) || e.isCategory()) {
    let n = (0, l.Z)(d.length > 0 ? d : h, r, e => {
      let {
        channel: {
          type: t
        }
      } = e;
      return (0, i.r8)(t)
    });
    a = u(e, n), o = u(t, n), g(n)
  }
  if (e.isGuildVocal() || e.isCategory()) {
    let n = (0, l.Z)(d.length > 0 ? d : h, r, e => {
      let {
        channel: t
      } = e;
      return t.isGuildVocal()
    });
    a = u(e, n), o = u(t, n), g(n)
  }
  if (e.parent_id !== n) {
    let t = !1;
    c.find(l => l.id === e.id && (l.parent_id = n, t = !0)), !t && c.push({
      id: e.id,
      parent_id: n
    })
  }
  return c
}